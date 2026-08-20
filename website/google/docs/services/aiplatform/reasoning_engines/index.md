--- 
title: reasoning_engines
hide_title: false
hide_table_of_contents: false
keywords:
  - reasoning_engines
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

Creates, updates, deletes, gets or lists a <code>reasoning_engines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reasoning_engines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.reasoning_engines" /></td></tr>
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
    <td>Identifier. The resource name of the ReasoningEngine. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/reasoningEngines/&#123;reasoning_engine&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="contextSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for how Agent Engine sub-resources should manage context. (id: GoogleCloudAiplatformV1ReasoningEngineContextSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this ReasoningEngine was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the ReasoningEngine.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the ReasoningEngine.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Customer-managed encryption key spec for a ReasoningEngine. If set, this ReasoningEngine and all sub-resources of this ReasoningEngine will be secured by this key. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels for the ReasoningEngine.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>Optional. Configurations of the ReasoningEngine (id: GoogleCloudAiplatformV1ReasoningEngineSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this ReasoningEngine was most recently updated.</td>
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
    <td>Identifier. The resource name of the ReasoningEngine. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/reasoningEngines/&#123;reasoning_engine&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="contextSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for how Agent Engine sub-resources should manage context. (id: GoogleCloudAiplatformV1ReasoningEngineContextSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this ReasoningEngine was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the ReasoningEngine.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the ReasoningEngine.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Customer-managed encryption key spec for a ReasoningEngine. If set, this ReasoningEngine and all sub-resources of this ReasoningEngine will be secured by this key. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels for the ReasoningEngine.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>Optional. Configurations of the ReasoningEngine (id: GoogleCloudAiplatformV1ReasoningEngineSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this ReasoningEngine was most recently updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a></td>
    <td></td>
    <td>Gets a reasoning engine.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists reasoning engines in a location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a reasoning engine.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a reasoning engine.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a reasoning engine.</td>
</tr>
<tr>
    <td><a href="#async_query"><CopyableCode code="async_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a></td>
    <td></td>
    <td>Async query using a reasoning engine.</td>
</tr>
<tr>
    <td><a href="#cancel_async_query"><CopyableCode code="cancel_async_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a></td>
    <td></td>
    <td>Cancels an AsyncQueryReasoningEngine operation.</td>
</tr>
<tr>
    <td><a href="#execute_code"><CopyableCode code="execute_code" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a></td>
    <td></td>
    <td>Executes code statelessly.</td>
</tr>
<tr>
    <td><a href="#query"><CopyableCode code="query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a></td>
    <td></td>
    <td>Queries using a reasoning engine.</td>
</tr>
<tr>
    <td><a href="#stream_query"><CopyableCode code="stream_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a></td>
    <td></td>
    <td>Streams queries using a reasoning engine.</td>
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
<tr id="parameter-reasoningEnginesId">
    <td><CopyableCode code="reasoningEnginesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
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

Gets a reasoning engine.

```sql
SELECT
name,
contextSpec,
createTime,
description,
displayName,
encryptionSpec,
etag,
labels,
spec,
updateTime
FROM google.aiplatform.reasoning_engines
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND reasoningEnginesId = '{{ reasoningEnginesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists reasoning engines in a location.

```sql
SELECT
name,
contextSpec,
createTime,
description,
displayName,
encryptionSpec,
etag,
labels,
spec,
updateTime
FROM google.aiplatform.reasoning_engines
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
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

Creates a reasoning engine.

```sql
INSERT INTO google.aiplatform.reasoning_engines (
data__contextSpec,
data__description,
data__displayName,
data__encryptionSpec,
data__etag,
data__labels,
data__name,
data__spec,
projectsId,
locationsId
)
SELECT 
'{{ contextSpec }}',
'{{ description }}',
'{{ displayName }}',
'{{ encryptionSpec }}',
'{{ etag }}',
'{{ labels }}',
'{{ name }}',
'{{ spec }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: reasoning_engines
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the reasoning_engines resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the reasoning_engines resource.
    - name: contextSpec
      description: |
        Optional. Configuration for how Agent Engine sub-resources should manage context.
      value:
        memoryBankConfig:
          customizationConfigs:
            - consolidationConfig:
                revisionsPerCandidateCount: {{ revisionsPerCandidateCount }}
              disableNaturalLanguageMemories: {{ disableNaturalLanguageMemories }}
              enableThirdPersonMemories: {{ enableThirdPersonMemories }}
              generateMemoriesExamples: "{{ generateMemoriesExamples }}"
              memoryTopics: "{{ memoryTopics }}"
              scopeKeys: "{{ scopeKeys }}"
          disableMemoryRevisions: {{ disableMemoryRevisions }}
          generationConfig:
            generationTriggerConfig:
              generationRule:
                eventCount: {{ eventCount }}
                fixedInterval: "{{ fixedInterval }}"
                idleDuration: "{{ idleDuration }}"
                overlapEventCount: {{ overlapEventCount }}
            model: "{{ model }}"
          similaritySearchConfig:
            embeddingModel: "{{ embeddingModel }}"
          ttlConfig:
            defaultTtl: "{{ defaultTtl }}"
            granularTtlConfig:
              createTtl: "{{ createTtl }}"
              generateCreatedTtl: "{{ generateCreatedTtl }}"
              generateUpdatedTtl: "{{ generateUpdatedTtl }}"
            memoryRevisionDefaultTtl: "{{ memoryRevisionDefaultTtl }}"
    - name: description
      value: "{{ description }}"
      description: |
        Optional. The description of the ReasoningEngine.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. The display name of the ReasoningEngine.
    - name: encryptionSpec
      description: |
        Customer-managed encryption key spec for a ReasoningEngine. If set, this ReasoningEngine and all sub-resources of this ReasoningEngine will be secured by this key.
      value:
        kmsKeyName: "{{ kmsKeyName }}"
    - name: etag
      value: "{{ etag }}"
      description: |
        Optional. Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.
    - name: labels
      value: "{{ labels }}"
      description: |
        Labels for the ReasoningEngine.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The resource name of the ReasoningEngine. Format: \`projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}\`
    - name: spec
      description: |
        Optional. Configurations of the ReasoningEngine
      value:
        agentFramework: "{{ agentFramework }}"
        buildSpec:
          serviceAccount: "{{ serviceAccount }}"
          workerPool: "{{ workerPool }}"
        classMethods: "{{ classMethods }}"
        containerSpec:
          imageUri: "{{ imageUri }}"
          port: {{ port }}
        deploymentSpec:
          agentGatewayConfig:
            agentToAnywhereConfig:
              agentGateway: "{{ agentGateway }}"
            clientToAgentConfig:
              agentGateway: "{{ agentGateway }}"
          containerConcurrency: {{ containerConcurrency }}
          env:
            - name: "{{ name }}"
              value: "{{ value }}"
          keepAliveProbe:
            httpGet:
              path: "{{ path }}"
              port: {{ port }}
            maxSeconds: {{ maxSeconds }}
          maxInstances: {{ maxInstances }}
          minInstances: {{ minInstances }}
          pscInterfaceConfig:
            dnsPeeringConfigs:
              - domain: "{{ domain }}"
                targetNetwork: "{{ targetNetwork }}"
                targetProject: "{{ targetProject }}"
            networkAttachment: "{{ networkAttachment }}"
          resourceLimits: "{{ resourceLimits }}"
          secretEnv:
            - name: "{{ name }}"
              secretRef:
                secret: "{{ secret }}"
                version: "{{ version }}"
        effectiveIdentity: "{{ effectiveIdentity }}"
        identityType: "{{ identityType }}"
        packageSpec:
          dependencyFilesGcsUri: "{{ dependencyFilesGcsUri }}"
          pickleObjectGcsUri: "{{ pickleObjectGcsUri }}"
          pythonVersion: "{{ pythonVersion }}"
          requirementsGcsUri: "{{ requirementsGcsUri }}"
        serviceAccount: "{{ serviceAccount }}"
        sourceCodeSpec:
          agentConfigSource:
            adkConfig:
              jsonConfig: "{{ jsonConfig }}"
            inlineSource:
              sourceArchive: "{{ sourceArchive }}"
          developerConnectSource:
            config:
              dir: "{{ dir }}"
              gitRepositoryLink: "{{ gitRepositoryLink }}"
              revision: "{{ revision }}"
          imageSpec:
            buildArgs: "{{ buildArgs }}"
          inlineSource:
            sourceArchive: "{{ sourceArchive }}"
          pythonSpec:
            entrypointModule: "{{ entrypointModule }}"
            entrypointObject: "{{ entrypointObject }}"
            requirementsFile: "{{ requirementsFile }}"
            version: "{{ version }}"
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

Updates a reasoning engine.

```sql
UPDATE google.aiplatform.reasoning_engines
SET 
data__contextSpec = '{{ contextSpec }}',
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__encryptionSpec = '{{ encryptionSpec }}',
data__etag = '{{ etag }}',
data__labels = '{{ labels }}',
data__name = '{{ name }}',
data__spec = '{{ spec }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND reasoningEnginesId = '{{ reasoningEnginesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
done,
error,
metadata,
response;
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

Deletes a reasoning engine.

```sql
DELETE FROM google.aiplatform.reasoning_engines
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND reasoningEnginesId = '{{ reasoningEnginesId }}' --required
AND force = '{{ force }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="async_query"
    values={[
        { label: 'async_query', value: 'async_query' },
        { label: 'cancel_async_query', value: 'cancel_async_query' },
        { label: 'execute_code', value: 'execute_code' },
        { label: 'query', value: 'query' },
        { label: 'stream_query', value: 'stream_query' }
    ]}
>
<TabItem value="async_query">

Async query using a reasoning engine.

```sql
EXEC google.aiplatform.reasoning_engines.async_query 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@reasoningEnginesId='{{ reasoningEnginesId }}' --required 
@@json=
'{
"inputGcsUri": "{{ inputGcsUri }}", 
"outputGcsUri": "{{ outputGcsUri }}"
}'
;
```
</TabItem>
<TabItem value="cancel_async_query">

Cancels an AsyncQueryReasoningEngine operation.

```sql
EXEC google.aiplatform.reasoning_engines.cancel_async_query 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@reasoningEnginesId='{{ reasoningEnginesId }}' --required 
@@json=
'{
"operationName": "{{ operationName }}"
}'
;
```
</TabItem>
<TabItem value="execute_code">

Executes code statelessly.

```sql
EXEC google.aiplatform.reasoning_engines.execute_code 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@reasoningEnginesId='{{ reasoningEnginesId }}' --required 
@@json=
'{
"inputs": "{{ inputs }}"
}'
;
```
</TabItem>
<TabItem value="query">

Queries using a reasoning engine.

```sql
EXEC google.aiplatform.reasoning_engines.query 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@reasoningEnginesId='{{ reasoningEnginesId }}' --required 
@@json=
'{
"classMethod": "{{ classMethod }}", 
"input": "{{ input }}"
}'
;
```
</TabItem>
<TabItem value="stream_query">

Streams queries using a reasoning engine.

```sql
EXEC google.aiplatform.reasoning_engines.stream_query 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@reasoningEnginesId='{{ reasoningEnginesId }}' --required 
@@json=
'{
"classMethod": "{{ classMethod }}", 
"input": "{{ input }}"
}'
;
```
</TabItem>
</Tabs>
