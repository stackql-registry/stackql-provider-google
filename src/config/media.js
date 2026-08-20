/*
 * Media (raw object content) method synthesis config.
 *
 * Google discovery docs advertise media download/upload on many services
 * (`supportsMediaDownload` / `supportsMediaUpload`), but the regime here is
 * deliberately an allowlist - only operations listed below get synthetic
 * content methods. Enabling this generically is NOT safe: the media surface
 * of most services (drive etc.) has not been verified against stackql
 * routing/transform behaviour. drive is the obvious follow-up candidate.
 *
 * The synthesised methods follow the proven cloudflare kv.values recipe
 * (registry provider cloudflare, kv.yaml, cloudflare.kv.values.get/update):
 *   - download: raw response body routed into a `contents` column via
 *     `overrideMediaType` + a `golang_template_text_v0.3.0` transform
 *   - upload: a `contents` string input marshalled to the raw request body
 *     via a request-side `golang_template_json_v0.1.0` transform
 *
 * Text (non-binary) content only: the transform pipeline reads/writes the
 * body as a string, so binary content may be mangled. base64 is deferred.
 */

// keyed by service, then by the source (JSON surface) discovery operationId
export const mediaDownloadMethods = {
    storage: {
        'storage.objects.get': {
            operationId: 'storage.objects.download',
            description: 'Downloads the content of an object as text and returns it in the contents field. ' +
                'Text (non-binary) objects only: content is read as a string, so binary object content is ' +
                'unsupported and may be mangled (base64 encoding is not supported). Object names containing ' +
                'slashes must be URL-encoded in the object parameter (for example env%2Fterraform.tfstate), ' +
                'as with the objects get method.',
        },
    },
};

// keyed by service, then by the source (JSON surface) discovery operationId
export const mediaUploadMethods = {
    storage: {
        'storage.objects.insert': {
            operationId: 'storage.objects.upload',
            description: 'Uploads object content provided as a text string in the contents field, creating ' +
                'the object or overwriting the content of an existing object (use ifGenerationMatch = 0 for a ' +
                'create-only conditional write). Text (non-binary) content only: binary content is unsupported ' +
                'and may be mangled (base64 encoding is not supported). When the content is itself valid JSON ' +
                '(for example a terraform.tfstate file), wrap the value in the string() function - for example ' +
                "data__contents = string('{...}') - to store it byte-for-byte; without string() the stackql " +
                'parser interprets valid JSON values as objects and the content is stored as normalized ' +
                '(compact) JSON.',
            bodySchemaName: 'ObjectContentUploadBody',
            // media upload requires the object name as a query param (on the JSON
            // surface it may come from the request body metadata instead)
            requiredParams: ['name'],
        },
    },
};

// x-stackQL-resources method entry overrides for the synthesised operations,
// keyed by service then operationId (applied in generateStackQLResources)
export const mediaMethodEntryOverrides = {
    storage: {
        'storage.objects.download': {
            response: {
                mediaType: 'application/octet-stream',
                openAPIDocKey: '200',
                overrideMediaType: 'application/json',
                transform: {
                    type: 'golang_template_text_v0.3.0',
                    body: '[{"contents": {{ toJson . }}}]',
                },
            },
        },
        'storage.objects.upload': {
            request: {
                mediaType: 'application/octet-stream',
                required: ['contents'],
                schema_override: {
                    $ref: '#/components/schemas/ObjectContentUploadBody',
                },
                // contents is normally a string, but the stackql parser
                // converts values that are valid JSON into objects (the same
                // mechanism that makes data__labels = '{"a": "b"}' work), so
                // fall back to re-marshalling; callers wanting byte-exact
                // storage of JSON content wrap the value in string()
                transform: {
                    type: 'golang_template_json_v0.3.0',
                    body: '{{ if eq (kindOf .contents) "string" }}{{ .contents }}{{ else }}{{ toJson .contents }}{{ end }}',
                },
            },
            // GCS media upload is create-or-overwrite, so it serves REPLACE as well
            // as INSERT (getSQLVerb assigns only one verb per method)
            additionalSqlVerbs: ['replace'],
        },
    },
};
