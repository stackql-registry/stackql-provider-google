--- 
title: cached_contents
hide_title: false
hide_table_of_contents: false
keywords:
  - cached_contents
  - aiplatform
  - google
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage google resources using SQL
custom_edit_url: null
image: /img/stackql-google-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>cached_contents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cached_contents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.cached_contents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Immutable. Identifier. The server-generated resource name of the cached content Format: projects/&#123;project&#125;/locations/&#123;location&#125;/cachedContents/&#123;cached_content&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="contents" /></td>
    <td><code>array</code></td>
    <td>Optional. Input only. Immutable. The content to cache</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation time of the cache entry.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The user-generated meaningful display name of the cached content.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Input only. Immutable. Customer-managed encryption key spec for a `CachedContent`. If set, this `CachedContent` and all its sub-resources will be secured by this key. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Timestamp of when this resource is considered expired. This is *always* provided on output, regardless of what was sent on input.</td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>string</code></td>
    <td>Immutable. The name of the `Model` to use for cached content. Currently, only the published Gemini base models are supported, in form of projects/&#123;PROJECT&#125;/locations/&#123;LOCATION&#125;/publishers/google/models/&#123;MODEL&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="systemInstruction" /></td>
    <td><code>object</code></td>
    <td>The structured data content of a message. A Content message contains a `role` field, which indicates the producer of the content, and a `parts` field, which contains the multi-part data of the message. (id: GoogleCloudAiplatformV1Content)</td>
</tr>
<tr>
    <td><CopyableCode code="toolConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. Immutable. Tool config. This config is shared for all tools (id: GoogleCloudAiplatformV1ToolConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="tools" /></td>
    <td><code>array</code></td>
    <td>Optional. Input only. Immutable. A list of `Tools` the model may use to generate the next response</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Input only. The TTL for this resource. The expiration time is computed: now + TTL.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. When the cache entry was last updated in UTC time.</td>
</tr>
<tr>
    <td><CopyableCode code="usageMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Metadata on the usage of the cached content. (id: GoogleCloudAiplatformV1CachedContentUsageMetadata)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Immutable. Identifier. The server-generated resource name of the cached content Format: projects/&#123;project&#125;/locations/&#123;location&#125;/cachedContents/&#123;cached_content&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="contents" /></td>
    <td><code>array</code></td>
    <td>Optional. Input only. Immutable. The content to cache</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation time of the cache entry.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The user-generated meaningful display name of the cached content.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Input only. Immutable. Customer-managed encryption key spec for a `CachedContent`. If set, this `CachedContent` and all its sub-resources will be secured by this key. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Timestamp of when this resource is considered expired. This is *always* provided on output, regardless of what was sent on input.</td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>string</code></td>
    <td>Immutable. The name of the `Model` to use for cached content. Currently, only the published Gemini base models are supported, in form of projects/&#123;PROJECT&#125;/locations/&#123;LOCATION&#125;/publishers/google/models/&#123;MODEL&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="systemInstruction" /></td>
    <td><code>object</code></td>
    <td>The structured data content of a message. A Content message contains a `role` field, which indicates the producer of the content, and a `parts` field, which contains the multi-part data of the message. (id: GoogleCloudAiplatformV1Content)</td>
</tr>
<tr>
    <td><CopyableCode code="toolConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. Immutable. Tool config. This config is shared for all tools (id: GoogleCloudAiplatformV1ToolConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="tools" /></td>
    <td><code>array</code></td>
    <td>Optional. Input only. Immutable. A list of `Tools` the model may use to generate the next response</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Input only. The TTL for this resource. The expiration time is computed: now + TTL.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. When the cache entry was last updated in UTC time.</td>
</tr>
<tr>
    <td><CopyableCode code="usageMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Metadata on the usage of the cached content. (id: GoogleCloudAiplatformV1CachedContentUsageMetadata)</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-cachedContentsId"><code>cachedContentsId</code></a></td>
    <td></td>
    <td>Gets cached content configurations</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists cached contents in a project</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates cached content, this call will initialize the cached content in the data storage, and users need to pay for the cache data storage.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-cachedContentsId"><code>cachedContentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates cached content configurations</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-cachedContentsId"><code>cachedContentsId</code></a></td>
    <td></td>
    <td>Deletes cached content</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-cachedContentsId">
    <td><CopyableCode code="cachedContentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-pageSize">
    <td><CopyableCode code="pageSize" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets cached content configurations

```sql
SELECT
name,
contents,
createTime,
displayName,
encryptionSpec,
expireTime,
model,
systemInstruction,
toolConfig,
tools,
ttl,
updateTime,
usageMetadata
FROM google.aiplatform.cached_contents
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND cachedContentsId = '{{ cachedContentsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists cached contents in a project

```sql
SELECT
name,
contents,
createTime,
displayName,
encryptionSpec,
expireTime,
model,
systemInstruction,
toolConfig,
tools,
ttl,
updateTime,
usageMetadata
FROM google.aiplatform.cached_contents
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates cached content, this call will initialize the cached content in the data storage, and users need to pay for the cache data storage.

```sql
INSERT INTO google.aiplatform.cached_contents (
data__contents,
data__displayName,
data__encryptionSpec,
data__expireTime,
data__model,
data__name,
data__systemInstruction,
data__toolConfig,
data__tools,
data__ttl,
projectsId,
locationsId
)
SELECT 
'{{ contents }}',
'{{ displayName }}',
'{{ encryptionSpec }}',
'{{ expireTime }}',
'{{ model }}',
'{{ name }}',
'{{ systemInstruction }}',
'{{ toolConfig }}',
'{{ tools }}',
'{{ ttl }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
contents,
createTime,
displayName,
encryptionSpec,
expireTime,
model,
systemInstruction,
toolConfig,
tools,
ttl,
updateTime,
usageMetadata
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cached_contents
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the cached_contents resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the cached_contents resource.
    - name: contents
      description: |
        Optional. Input only. Immutable. The content to cache
      value:
        - parts: "{{ parts }}"
          role: "{{ role }}"
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Optional. Immutable. The user-generated meaningful display name of the cached content.
    - name: encryptionSpec
      description: |
        Input only. Immutable. Customer-managed encryption key spec for a \`CachedContent\`. If set, this \`CachedContent\` and all its sub-resources will be secured by this key.
      value:
        kmsKeyName: "{{ kmsKeyName }}"
    - name: expireTime
      value: "{{ expireTime }}"
      description: |
        Timestamp of when this resource is considered expired. This is *always* provided on output, regardless of what was sent on input.
    - name: model
      value: "{{ model }}"
      description: |
        Immutable. The name of the \`Model\` to use for cached content. Currently, only the published Gemini base models are supported, in form of projects/{PROJECT}/locations/{LOCATION}/publishers/google/models/{MODEL}
    - name: name
      value: "{{ name }}"
      description: |
        Immutable. Identifier. The server-generated resource name of the cached content Format: projects/{project}/locations/{location}/cachedContents/{cached_content}
    - name: systemInstruction
      description: |
        The structured data content of a message. A Content message contains a \`role\` field, which indicates the producer of the content, and a \`parts\` field, which contains the multi-part data of the message.
      value:
        parts:
          - audioTranscription:
              speakerLabel: "{{ speakerLabel }}"
              text: "{{ text }}"
              words:
                - endOffset: "{{ endOffset }}"
                  startOffset: "{{ startOffset }}"
                  word: "{{ word }}"
            codeExecutionResult:
              id: "{{ id }}"
              outcome: "{{ outcome }}"
              output: "{{ output }}"
            executableCode:
              code: "{{ code }}"
              id: "{{ id }}"
              language: "{{ language }}"
            fileData:
              displayName: "{{ displayName }}"
              fileUri: "{{ fileUri }}"
              mimeType: "{{ mimeType }}"
            functionCall:
              args: "{{ args }}"
              id: "{{ id }}"
              name: "{{ name }}"
              partialArgs:
                - boolValue: {{ boolValue }}
                  jsonPath: "{{ jsonPath }}"
                  nullValue: "{{ nullValue }}"
                  numberValue: {{ numberValue }}
                  stringValue: "{{ stringValue }}"
                  willContinue: {{ willContinue }}
              willContinue: {{ willContinue }}
            functionResponse:
              id: "{{ id }}"
              name: "{{ name }}"
              parts:
                - fileData:
                    displayName: "{{ displayName }}"
                    fileUri: "{{ fileUri }}"
                    mimeType: "{{ mimeType }}"
                  inlineData:
                    data: "{{ data }}"
                    displayName: "{{ displayName }}"
                    mimeType: "{{ mimeType }}"
              response: "{{ response }}"
              scheduling: "{{ scheduling }}"
            inlineData:
              data: "{{ data }}"
              displayName: "{{ displayName }}"
              mimeType: "{{ mimeType }}"
            mediaResolution:
              level: "{{ level }}"
            text: "{{ text }}"
            thought: {{ thought }}
            thoughtSignature: "{{ thoughtSignature }}"
            videoMetadata:
              endOffset: "{{ endOffset }}"
              fps: {{ fps }}
              startOffset: "{{ startOffset }}"
        role: "{{ role }}"
    - name: toolConfig
      description: |
        Optional. Input only. Immutable. Tool config. This config is shared for all tools
      value:
        functionCallingConfig:
          allowedFunctionNames:
            - "{{ allowedFunctionNames }}"
          mode: "{{ mode }}"
          streamFunctionCallArguments: {{ streamFunctionCallArguments }}
        retrievalConfig:
          languageCode: "{{ languageCode }}"
          latLng:
            latitude: {{ latitude }}
            longitude: {{ longitude }}
    - name: tools
      description: |
        Optional. Input only. Immutable. A list of \`Tools\` the model may use to generate the next response
      value:
        - codeExecution: "{{ codeExecution }}"
          computerUse:
            enablePromptInjectionDetection: {{ enablePromptInjectionDetection }}
            environment: "{{ environment }}"
            excludedPredefinedFunctions:
              - "{{ excludedPredefinedFunctions }}"
          enterpriseWebSearch:
            blockingConfidence: "{{ blockingConfidence }}"
            excludeDomains:
              - "{{ excludeDomains }}"
          exaAiSearch:
            apiKey: "{{ apiKey }}"
            customConfigs: "{{ customConfigs }}"
          functionDeclarations: "{{ functionDeclarations }}"
          googleMaps:
            enableWidget: {{ enableWidget }}
            groundingTypes:
              places: "{{ places }}"
              routing: "{{ routing }}"
          googleSearch:
            blockingConfidence: "{{ blockingConfidence }}"
            excludeDomains:
              - "{{ excludeDomains }}"
            searchTypes:
              imageSearch: "{{ imageSearch }}"
              webSearch: "{{ webSearch }}"
          googleSearchRetrieval:
            dynamicRetrievalConfig:
              dynamicThreshold: {{ dynamicThreshold }}
              mode: "{{ mode }}"
          parallelAiSearch:
            apiKey: "{{ apiKey }}"
            customConfigs: "{{ customConfigs }}"
            enableDataRetention: {{ enableDataRetention }}
            enableZeroDataRetention: {{ enableZeroDataRetention }}
          retrieval:
            disableAttribution: {{ disableAttribution }}
            externalApi:
              apiAuth:
                apiKeyConfig:
                  apiKeySecretVersion: "{{ apiKeySecretVersion }}"
                  apiKeyString: "{{ apiKeyString }}"
              apiSpec: "{{ apiSpec }}"
              authConfig:
                apiKeyConfig:
                  apiKeySecret: "{{ apiKeySecret }}"
                  apiKeyString: "{{ apiKeyString }}"
                  httpElementLocation: "{{ httpElementLocation }}"
                  name: "{{ name }}"
                authType: "{{ authType }}"
                googleServiceAccountConfig:
                  serviceAccount: "{{ serviceAccount }}"
                httpBasicAuthConfig:
                  credentialSecret: "{{ credentialSecret }}"
                oauthConfig:
                  accessToken: "{{ accessToken }}"
                  serviceAccount: "{{ serviceAccount }}"
                oidcConfig:
                  idToken: "{{ idToken }}"
                  serviceAccount: "{{ serviceAccount }}"
              elasticSearchParams:
                index: "{{ index }}"
                numHits: {{ numHits }}
                searchTemplate: "{{ searchTemplate }}"
              endpoint: "{{ endpoint }}"
              simpleSearchParams: "{{ simpleSearchParams }}"
            vertexAiSearch:
              dataStoreSpecs:
                - dataStore: "{{ dataStore }}"
                  filter: "{{ filter }}"
              datastore: "{{ datastore }}"
              engine: "{{ engine }}"
              filter: "{{ filter }}"
              maxResults: {{ maxResults }}
            vertexRagStore:
              ragResources:
                - ragCorpus: "{{ ragCorpus }}"
                  ragFileIds: "{{ ragFileIds }}"
              ragRetrievalConfig:
                filter:
                  metadataFilter: "{{ metadataFilter }}"
                  vectorDistanceThreshold: {{ vectorDistanceThreshold }}
                  vectorSimilarityThreshold: {{ vectorSimilarityThreshold }}
                ranking:
                  llmRanker: "{{ llmRanker }}"
                  rankService: "{{ rankService }}"
                topK: {{ topK }}
              similarityTopK: {{ similarityTopK }}
              vectorDistanceThreshold: {{ vectorDistanceThreshold }}
          urlContext: "{{ urlContext }}"
    - name: ttl
      value: "{{ ttl }}"
      description: |
        Input only. The TTL for this resource. The expiration time is computed: now + TTL.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' }
    ]}
>
<TabItem value="patch">

Updates cached content configurations

```sql
UPDATE google.aiplatform.cached_contents
SET 
data__contents = '{{ contents }}',
data__displayName = '{{ displayName }}',
data__encryptionSpec = '{{ encryptionSpec }}',
data__expireTime = '{{ expireTime }}',
data__model = '{{ model }}',
data__name = '{{ name }}',
data__systemInstruction = '{{ systemInstruction }}',
data__toolConfig = '{{ toolConfig }}',
data__tools = '{{ tools }}',
data__ttl = '{{ ttl }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND cachedContentsId = '{{ cachedContentsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
contents,
createTime,
displayName,
encryptionSpec,
expireTime,
model,
systemInstruction,
toolConfig,
tools,
ttl,
updateTime,
usageMetadata;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes cached content

```sql
DELETE FROM google.aiplatform.cached_contents
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND cachedContentsId = '{{ cachedContentsId }}' --required
;
```
</TabItem>
</Tabs>
