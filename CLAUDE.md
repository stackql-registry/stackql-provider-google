# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this repo does

Generates the google family of StackQL providers (`google`, `googleworkspace`, `googleadmin`, `firebase`) from Google API discovery documents. For each provider it:

1. Fetches the root discovery document (`https://discovery.googleapis.com/discovery/v1/apis?preferred=true`) and each service discovery document
2. Converts each service discovery document into an OpenAPI 3.1 spec with StackQL extensions (`components.x-stackQL-resources`: resource names, methods, SQL verb mappings)
3. Writes specs to `openapi/src/<provider>/v00.00.00000/services/*.yaml` plus a `provider.yaml` index (`openapi/` is gitignored - it is a build output)
4. Generates docusaurus microsite docs per provider under `website/<provider>/`

The generated specs are published by PR to [stackql-provider-registry](https://github.com/stackql/stackql-provider-registry) (`providers/src` on the `dev` branch). Note the provider named `google` is generated from the config key `googleapis.com`.

## Commands

All pipeline steps are in the `Makefile` (GNU make; on Windows run from Git Bash - `make` is installed via scoop):

- `make all` - install, generate all providers, metadata tests, smoke test, generate and build docs
- `make install` - `npm install`
- `make generate` / `make generate-google|googleworkspace|googleadmin|firebase` - regenerate specs from the latest discovery docs (network-bound, google takes several minutes for ~180 services)
- `make test` / `make test-<provider>` - metadata test harness (SHOW SERVICES/RESOURCES, DESCRIBE, SHOW INSERT over every resource; no cloud calls). Wraps [stackql-provider-tests](https://github.com/stackql/stackql-provider-tests), expected as a sibling clone (default `../../../../stackql/core/stackql-provider-tests`, override via `STACKQL_PROVIDER_TESTS_DIR`). Linux-only harness - runs under WSL on Windows via `test/run-provider-tests.sh`
- `make smoke-test` - end-to-end test against a real GCP project using the locally generated provider in `./openapi` (see below)
- `make smoke-test-live` - same test using the latest `google` provider from the hosted registry
- `make docs` / `make docs-<provider>` - generate markdown docs into `website/<provider>/docs` (uses `@stackql/provider-utils` docgen), then post-process: `bin/fix-broken-links-<provider>.sh` (links), `bin/fix-mdx-braces.mjs` (escapes literal `{ }` in prose and repairs `<CodeBlock>` template literals - docgen output is not MDX-safe on its own), and `bin/verify-mdx.mjs` (compiles every page with @mdx-js/mdx to catch build errors in seconds instead of during the ~30 minute google site build)
- `make docs-build` / `make docs-build-<provider>` - `yarn build` the docusaurus site(s). Each site's `prebuild` hook re-vendors the shared config (see below), so builds need network access to GitHub
- `make docs-serve-<provider>` - local docs dev server

Underlying generation command: `node bin/google-discovery-to-openapi.mjs generate <googleapis.com|googleworkspace|googleadmin|firebase> [--debug] [--preferred]`.

## Smoke tests

`test/smoke-test-google.js` (node, no test framework) exercises query, mutation and lifecycle ops against primitive GCP resources: creates a VPC, subnet and e2-micro VM, observes state via SELECT after every step, stops/starts the VM via EXEC lifecycle ops, deletes everything, then runs CRUD on a GCS bucket (INSERT, SELECT, UPDATE labels, DELETE).

- Requires `stackql` on the PATH and `GOOGLE_CREDENTIALS` set to a service account key JSON (defaults: project `stackql-demo`, region `us-central1`, zone `us-central1-a`; override with `--project/--region/--zone` or `GOOGLE_PROJECT/GOOGLE_REGION/GOOGLE_ZONE`)
- Default mode uses a `file://` registry pointing at `./openapi`; `--live` uses the hosted registry
- Resource names are suffixed with a per-run id; cleanup on failure is best-effort - check the `stackql-demo` project for leftovers named `smoke-*` / `stackql-smoke-*` if a run aborts

## Architecture

- `src/index.js` - CLI entry (invoked via `bin/google-discovery-to-openapi.mjs`), dispatches to `generateSpecs`
- `src/commands/generate.js` - main pipeline: fetch root discovery doc, filter services, fetch each service discovery doc, convert to OpenAPI, write yaml, then write `provider.yaml` index. Exits non-zero on the first service that fails to fetch/parse (a dead discovery endpoint breaks the whole run - exclude the service in `providers.js`)
- `src/config/providers.js` - per-provider config: root discovery URL, included/excluded services (`excludedServices`, `includedServiceNames`, name patterns), `additionalServiceData` for services missing from the root doc (e.g. iam v1/v2, speech v2), `serviceNameMap` renames, required OAuth scopes filter, and the provider `config` block (auth via `GOOGLE_CREDENTIALS` env var)
- `src/config/overrides.js` - manual overrides keyed by operationId: resource names, method names, SQL verb reassignments
- `src/config/media.js` - allowlist config for synthesised raw media (object content) methods (currently storage only: `google.storage.objects_content` with `download`/`upload`); `addMediaMethods` in `src/helper/functions.js` emits the extra paths (media endpoints via operation-level `servers`, pinning query strings baked into the path keys) and `generateStackQLResources` applies the request/response transform blocks (cloudflare kv.values recipe). Text objects only - binary is out of scope. Do not enable generically: drive etc. advertise media support but are unverified
- `src/config/tagging.js` - heuristics mapping discovery operations to StackQL resource/method names and SQL verbs (`getResource`, `getMethodName`, `getSQLVerb`)
- `src/helper/functions.js` - OpenAPI construction: schema/parameter conversion, path population, `generateStackQLResources` builds the `x-stackQL-resources` block
- `bin/generate-docs.mjs` - wraps `@stackql/provider-utils` `docgen.generateDocs` (config in `docgen/provider-data/<provider>/`)

## Docusaurus microsites

The four sites under `website/<provider>/` share one look and feel via [stackql/docusaurus-config](https://github.com/stackql/docusaurus-config), vendored (shallow-cloned) into each site's gitignored `.shared-config/` folder by the `vendor-config` npm script (runs automatically via `prestart`/`prebuild` hooks). Per-site files:

- `provider.js` - the only routinely edited file: exports `providerName` and `providerTitle`
- `docusaurus.config.js` - thin wrapper over `createConfig` from the shared config, plus site-specific overrides: `projectName`/`editUrl` (all four sites live in this one repo under `website/<provider>/`), the social card image, and the vendored registry-branded logos in `static/img/`
- `sidebars.js` - standard shape reading `providerTitle` from `provider.js`; docs are mounted at the site root, `provider-intro` is the homepage
- Cross-site nav links (Install, Providers, Blog, ...) are client-side redirect routes registered by the shared config's plugin - the old `src/pages/*.js` redirect stubs are gone; `src/` (css/theme/components) mirrors the openai provider site

The provider index page content is mastered in `docgen/provider-data/<provider>/headerContent1.txt` (frontmatter + intro) and `headerContent2.txt` (installation, auth, and the getting-started reference queries). Edit those files and re-run `make docs-<provider>` - never edit `website/<provider>/docs/index.md` directly. Reference queries were validated against the live provider (google, via the stackql MCP server) or against the generated spec metadata (others); keep them runnable when editing.

## Gotchas

- Services are skipped unless their discovery doc advertises a scope in `requiredScopes` (`cloud-platform` for google/firebase), and services with no auth block are skipped
- Generation output is deterministic for a given discovery revision: yaml is dumped with sorted keys, parameter lists and objectKey candidates are sorted, and sqlVerb routing ties break on the method ref. This matters because Google serves discovery docs with nondeterministic JSON key order (and even alternates revisions between consecutive requests during rollouts) - regeneration diffs should only ever reflect real revision drift
- Custom-method `:verb` suffixes are kept in path keys (e.g. `/v1/{name}:enable`) - they are part of the real URL. Name-based APIs still have genuinely identical (path, verb) pairs across discovery methods (e.g. logging `buckets.get`/`views.get`/`exclusions.get` are all `GET v2/{+name}`); OpenAPI path keys must be unique, so the generator keeps the lexicographically-smallest operationId and logs a `path collision` warning for each drop. Representing the dropped siblings needs path aliasing support in stackql core
- `openapi/`, `node_modules/`, website `build/` outputs and `test/.stackql/` are gitignored; the ~2000 tracked files under `website/*/docs` are generated - regenerate them via `make docs`, don't hand-edit
- Booleans and JSON objects in generated docs/specs come straight from discovery docs; provider behavior fixes belong in `overrides.js`/`tagging.js`, not in generated yaml
- Local provider inspection: `stackql shell --registry='{"url": "file://<abs-path>/openapi", "localDocRoot": "<abs-path>/openapi", "verifyConfig": {"nopVerify": true}}'`
- The local stackql MCP server (project `stackql-demo`) queries the hosted registry, not `./openapi` - use it to explore resource shapes, not to validate local generation output
- Never run `make generate` while a smoke test is running: the smoke test reads `./openapi` on every statement and generation wipes/rewrites it mid-run (its failure-cleanup can then orphan GCP resources)
