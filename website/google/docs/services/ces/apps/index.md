--- 
title: apps
hide_title: false
hide_table_of_contents: false
keywords:
  - apps
  - ces
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

Creates, updates, deletes, gets or lists an <code>apps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="apps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.ces.apps" /></td></tr>
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
    <td>Identifier. The unique identifier of the app. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="audioProcessingConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Audio processing configuration of the app. (id: AudioProcessingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="clientCertificateSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. The default client certificate settings for the app. (id: ClientCertificateSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the app was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataStoreSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. The data store settings for the app. (id: DataStoreSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultChannelProfile" /></td>
    <td><code>object</code></td>
    <td>Optional. The default channel profile used by the app. (id: ChannelProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Number of deployments in the app.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Human-readable description of the app.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Display name of the app.</td>
</tr>
<tr>
    <td><CopyableCode code="errorHandlingSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Error handling settings of the app. (id: ErrorHandlingSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluationMetricsThresholds" /></td>
    <td><code>object</code></td>
    <td>Optional. The evaluation thresholds for the app. (id: EvaluationMetricsThresholds)</td>
</tr>
<tr>
    <td><CopyableCode code="globalInstruction" /></td>
    <td><code>string</code></td>
    <td>Optional. Instructions for all the agents in the app. You can use this instruction to set up a stable identity or personality across all the agents.</td>
</tr>
<tr>
    <td><CopyableCode code="guardrails" /></td>
    <td><code>array</code></td>
    <td>Optional. List of guardrails for the app. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/guardrails/&#123;guardrail&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="languageSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Language settings of the app. (id: LanguageSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="locked" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Indicates whether the app is locked for changes. If the app is locked, modifications to the app resources will be rejected.</td>
</tr>
<tr>
    <td><CopyableCode code="loggingSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Logging settings of the app. (id: LoggingSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Optional. Metadata about the app. This field can be used to store additional information relevant to the app's details or intended usages.</td>
</tr>
<tr>
    <td><CopyableCode code="modelSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. The default LLM model settings for the app. Individual resources (e.g. agents, guardrails) can override these configurations as needed. (id: ModelSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="pinned" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the app is pinned in the app list.</td>
</tr>
<tr>
    <td><CopyableCode code="predefinedVariableDeclarations" /></td>
    <td><code>array</code></td>
    <td>Output only. The declarations of predefined variables for the app.</td>
</tr>
<tr>
    <td><CopyableCode code="rootAgent" /></td>
    <td><code>string</code></td>
    <td>Optional. The root agent is the entry point of the app. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/agents/&#123;agent&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="timeZoneSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. TimeZone settings of the app. (id: TimeZoneSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="toolExecutionMode" /></td>
    <td><code>string</code></td>
    <td>Optional. The tool execution mode for the app. If not provided, will default to PARALLEL. (TOOL_EXECUTION_MODE_UNSPECIFIED, PARALLEL, SEQUENTIAL)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the app was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="validationErrors" /></td>
    <td><code>array</code></td>
    <td>Output only. Misconfigurations or warnings in the app.</td>
</tr>
<tr>
    <td><CopyableCode code="variableDeclarations" /></td>
    <td><code>array</code></td>
    <td>Optional. The declarations of the variables.</td>
</tr>
<tr>
    <td><CopyableCode code="vpcScSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. VPC-SC settings for the app. (id: VpcScSettings)</td>
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
    <td>Identifier. The unique identifier of the app. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="audioProcessingConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Audio processing configuration of the app. (id: AudioProcessingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="clientCertificateSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. The default client certificate settings for the app. (id: ClientCertificateSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the app was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataStoreSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. The data store settings for the app. (id: DataStoreSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultChannelProfile" /></td>
    <td><code>object</code></td>
    <td>Optional. The default channel profile used by the app. (id: ChannelProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Number of deployments in the app.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Human-readable description of the app.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Display name of the app.</td>
</tr>
<tr>
    <td><CopyableCode code="errorHandlingSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Error handling settings of the app. (id: ErrorHandlingSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluationMetricsThresholds" /></td>
    <td><code>object</code></td>
    <td>Optional. The evaluation thresholds for the app. (id: EvaluationMetricsThresholds)</td>
</tr>
<tr>
    <td><CopyableCode code="globalInstruction" /></td>
    <td><code>string</code></td>
    <td>Optional. Instructions for all the agents in the app. You can use this instruction to set up a stable identity or personality across all the agents.</td>
</tr>
<tr>
    <td><CopyableCode code="guardrails" /></td>
    <td><code>array</code></td>
    <td>Optional. List of guardrails for the app. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/guardrails/&#123;guardrail&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="languageSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Language settings of the app. (id: LanguageSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="locked" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Indicates whether the app is locked for changes. If the app is locked, modifications to the app resources will be rejected.</td>
</tr>
<tr>
    <td><CopyableCode code="loggingSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Logging settings of the app. (id: LoggingSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Optional. Metadata about the app. This field can be used to store additional information relevant to the app's details or intended usages.</td>
</tr>
<tr>
    <td><CopyableCode code="modelSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. The default LLM model settings for the app. Individual resources (e.g. agents, guardrails) can override these configurations as needed. (id: ModelSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="pinned" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the app is pinned in the app list.</td>
</tr>
<tr>
    <td><CopyableCode code="predefinedVariableDeclarations" /></td>
    <td><code>array</code></td>
    <td>Output only. The declarations of predefined variables for the app.</td>
</tr>
<tr>
    <td><CopyableCode code="rootAgent" /></td>
    <td><code>string</code></td>
    <td>Optional. The root agent is the entry point of the app. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/agents/&#123;agent&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="timeZoneSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. TimeZone settings of the app. (id: TimeZoneSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="toolExecutionMode" /></td>
    <td><code>string</code></td>
    <td>Optional. The tool execution mode for the app. If not provided, will default to PARALLEL. (TOOL_EXECUTION_MODE_UNSPECIFIED, PARALLEL, SEQUENTIAL)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the app was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="validationErrors" /></td>
    <td><code>array</code></td>
    <td>Output only. Misconfigurations or warnings in the app.</td>
</tr>
<tr>
    <td><CopyableCode code="variableDeclarations" /></td>
    <td><code>array</code></td>
    <td>Optional. The declarations of the variables.</td>
</tr>
<tr>
    <td><CopyableCode code="vpcScSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. VPC-SC settings for the app. (id: VpcScSettings)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Gets details of the specified app.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists apps in the given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-appId"><code>appId</code></a></td>
    <td>Creates a new app in the given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified app.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes the specified app.</td>
</tr>
<tr>
    <td><a href="#execute_tool"><CopyableCode code="execute_tool" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Executes the given tool with the given arguments.</td>
</tr>
<tr>
    <td><a href="#export_app"><CopyableCode code="export_app" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Exports the specified app.</td>
</tr>
<tr>
    <td><a href="#import_app"><CopyableCode code="import_app" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Imports the specified app.</td>
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
<tr id="parameter-appsId">
    <td><CopyableCode code="appsId" /></td>
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
<tr id="parameter-appId">
    <td><CopyableCode code="appId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
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

Gets details of the specified app.

```sql
SELECT
name,
audioProcessingConfig,
clientCertificateSettings,
createTime,
dataStoreSettings,
defaultChannelProfile,
deploymentCount,
description,
displayName,
errorHandlingSettings,
etag,
evaluationMetricsThresholds,
globalInstruction,
guardrails,
languageSettings,
locked,
loggingSettings,
metadata,
modelSettings,
pinned,
predefinedVariableDeclarations,
rootAgent,
timeZoneSettings,
toolExecutionMode,
updateTime,
validationErrors,
variableDeclarations,
vpcScSettings
FROM google.ces.apps
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND appsId = '{{ appsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists apps in the given project and location.

```sql
SELECT
name,
audioProcessingConfig,
clientCertificateSettings,
createTime,
dataStoreSettings,
defaultChannelProfile,
deploymentCount,
description,
displayName,
errorHandlingSettings,
etag,
evaluationMetricsThresholds,
globalInstruction,
guardrails,
languageSettings,
locked,
loggingSettings,
metadata,
modelSettings,
pinned,
predefinedVariableDeclarations,
rootAgent,
timeZoneSettings,
toolExecutionMode,
updateTime,
validationErrors,
variableDeclarations,
vpcScSettings
FROM google.ces.apps
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
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

Creates a new app in the given project and location.

```sql
INSERT INTO google.ces.apps (
data__audioProcessingConfig,
data__clientCertificateSettings,
data__dataStoreSettings,
data__defaultChannelProfile,
data__description,
data__displayName,
data__errorHandlingSettings,
data__evaluationMetricsThresholds,
data__globalInstruction,
data__guardrails,
data__languageSettings,
data__locked,
data__loggingSettings,
data__metadata,
data__modelSettings,
data__name,
data__pinned,
data__rootAgent,
data__timeZoneSettings,
data__toolExecutionMode,
data__variableDeclarations,
data__vpcScSettings,
projectsId,
locationsId,
appId
)
SELECT 
'{{ audioProcessingConfig }}',
'{{ clientCertificateSettings }}',
'{{ dataStoreSettings }}',
'{{ defaultChannelProfile }}',
'{{ description }}',
'{{ displayName }}',
'{{ errorHandlingSettings }}',
'{{ evaluationMetricsThresholds }}',
'{{ globalInstruction }}',
'{{ guardrails }}',
'{{ languageSettings }}',
{{ locked }},
'{{ loggingSettings }}',
'{{ metadata }}',
'{{ modelSettings }}',
'{{ name }}',
{{ pinned }},
'{{ rootAgent }}',
'{{ timeZoneSettings }}',
'{{ toolExecutionMode }}',
'{{ variableDeclarations }}',
'{{ vpcScSettings }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ appId }}'
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
- name: apps
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the apps resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the apps resource.
    - name: audioProcessingConfig
      description: |
        Optional. Audio processing configuration of the app.
      value:
        ambientSoundConfig:
          gcsUri: "{{ gcsUri }}"
          prebuiltAmbientNoise: "{{ prebuiltAmbientNoise }}"
          prebuiltAmbientSound: "{{ prebuiltAmbientSound }}"
          volumeGainDb: {{ volumeGainDb }}
        bargeInConfig:
          bargeInAwareness: {{ bargeInAwareness }}
          disableBargeIn: {{ disableBargeIn }}
        inactivityTimeout: "{{ inactivityTimeout }}"
        synthesizeSpeechConfigs: "{{ synthesizeSpeechConfigs }}"
    - name: clientCertificateSettings
      description: |
        Optional. The default client certificate settings for the app.
      value:
        passphrase: "{{ passphrase }}"
        privateKey: "{{ privateKey }}"
        tlsCertificate: "{{ tlsCertificate }}"
    - name: dataStoreSettings
      description: |
        Optional. The data store settings for the app.
      value:
        engines:
          - name: "{{ name }}"
            type: "{{ type }}"
    - name: defaultChannelProfile
      description: |
        Optional. The default channel profile used by the app.
      value:
        channelType: "{{ channelType }}"
        disableBargeInControl: {{ disableBargeInControl }}
        disableDtmf: {{ disableDtmf }}
        instagramConfig:
          description: "{{ description }}"
          displayName: "{{ displayName }}"
          instagramAccountId: "{{ instagramAccountId }}"
          thumbnailUrl: "{{ thumbnailUrl }}"
        noiseSuppressionLevel: "{{ noiseSuppressionLevel }}"
        personaProperty:
          persona: "{{ persona }}"
        profileId: "{{ profileId }}"
        webWidgetConfig:
          modality: "{{ modality }}"
          securitySettings:
            allowedOrigins:
              - "{{ allowedOrigins }}"
            enableOriginCheck: {{ enableOriginCheck }}
            enablePublicAccess: {{ enablePublicAccess }}
            enableRecaptcha: {{ enableRecaptcha }}
          theme: "{{ theme }}"
          webWidgetTitle: "{{ webWidgetTitle }}"
        whatsappConfig:
          description: "{{ description }}"
          displayName: "{{ displayName }}"
          phoneNumber: "{{ phoneNumber }}"
          phoneNumberId: "{{ phoneNumberId }}"
          thumbnailUrl: "{{ thumbnailUrl }}"
          wabaId: "{{ wabaId }}"
    - name: description
      value: "{{ description }}"
      description: |
        Optional. Human-readable description of the app.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. Display name of the app.
    - name: errorHandlingSettings
      description: |
        Optional. Error handling settings of the app.
      value:
        endSessionConfig:
          escalateSession: {{ escalateSession }}
        errorHandlingStrategy: "{{ errorHandlingStrategy }}"
        fallbackResponseConfig:
          customFallbackMessages: "{{ customFallbackMessages }}"
          maxFallbackAttempts: {{ maxFallbackAttempts }}
    - name: evaluationMetricsThresholds
      description: |
        Optional. The evaluation thresholds for the app.
      value:
        goldenEvaluationMetricsThresholds:
          expectationLevelMetricsThresholds:
            toolInvocationParameterCorrectnessThreshold: {{ toolInvocationParameterCorrectnessThreshold }}
          toolMatchingSettings:
            extraToolCallBehavior: "{{ extraToolCallBehavior }}"
          turnLevelMetricsThresholds:
            overallToolInvocationCorrectnessThreshold: {{ overallToolInvocationCorrectnessThreshold }}
            semanticSimilarityChannel: "{{ semanticSimilarityChannel }}"
            semanticSimilaritySuccessThreshold: {{ semanticSimilaritySuccessThreshold }}
        goldenHallucinationMetricBehavior: "{{ goldenHallucinationMetricBehavior }}"
        hallucinationMetricBehavior: "{{ hallucinationMetricBehavior }}"
        scenarioHallucinationMetricBehavior: "{{ scenarioHallucinationMetricBehavior }}"
    - name: globalInstruction
      value: "{{ globalInstruction }}"
      description: |
        Optional. Instructions for all the agents in the app. You can use this instruction to set up a stable identity or personality across all the agents.
    - name: guardrails
      value:
        - "{{ guardrails }}"
      description: |
        Optional. List of guardrails for the app. Format: \`projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}\`
    - name: languageSettings
      description: |
        Optional. Language settings of the app.
      value:
        defaultLanguageCode: "{{ defaultLanguageCode }}"
        enableMultilingualSupport: {{ enableMultilingualSupport }}
        fallbackAction: "{{ fallbackAction }}"
        supportedLanguageCodes:
          - "{{ supportedLanguageCodes }}"
    - name: locked
      value: {{ locked }}
      description: |
        Optional. Indicates whether the app is locked for changes. If the app is locked, modifications to the app resources will be rejected.
    - name: loggingSettings
      description: |
        Optional. Logging settings of the app.
      value:
        audioRecordingConfig:
          gcsBucket: "{{ gcsBucket }}"
          gcsPathPrefix: "{{ gcsPathPrefix }}"
        bigqueryExportSettings:
          dataset: "{{ dataset }}"
          enabled: {{ enabled }}
          project: "{{ project }}"
        cloudLoggingSettings:
          enableCloudLogging: {{ enableCloudLogging }}
        conversationLoggingSettings:
          disableConversationLogging: {{ disableConversationLogging }}
          retentionWindow: "{{ retentionWindow }}"
        evaluationAudioRecordingConfig:
          gcsBucket: "{{ gcsBucket }}"
          gcsPathPrefix: "{{ gcsPathPrefix }}"
        metricAnalysisSettings:
          llmMetricsOptedOut: {{ llmMetricsOptedOut }}
        redactionConfig:
          deidentifyTemplate: "{{ deidentifyTemplate }}"
          enableRedaction: {{ enableRedaction }}
          inspectTemplate: "{{ inspectTemplate }}"
        unredactedAudioRecordingConfig:
          gcsBucket: "{{ gcsBucket }}"
          gcsPathPrefix: "{{ gcsPathPrefix }}"
        unredactedBigqueryExportSettings:
          dataset: "{{ dataset }}"
          enabled: {{ enabled }}
          project: "{{ project }}"
    - name: metadata
      value: "{{ metadata }}"
      description: |
        Optional. Metadata about the app. This field can be used to store additional information relevant to the app's details or intended usages.
    - name: modelSettings
      description: |
        Optional. The default LLM model settings for the app. Individual resources (e.g. agents, guardrails) can override these configurations as needed.
      value:
        model: "{{ model }}"
        temperature: {{ temperature }}
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The unique identifier of the app. Format: \`projects/{project}/locations/{location}/apps/{app}\`
    - name: pinned
      value: {{ pinned }}
      description: |
        Optional. Whether the app is pinned in the app list.
    - name: rootAgent
      value: "{{ rootAgent }}"
      description: |
        Optional. The root agent is the entry point of the app. Format: \`projects/{project}/locations/{location}/apps/{app}/agents/{agent}\`
    - name: timeZoneSettings
      description: |
        Optional. TimeZone settings of the app.
      value:
        timeZone: "{{ timeZone }}"
    - name: toolExecutionMode
      value: "{{ toolExecutionMode }}"
      description: |
        Optional. The tool execution mode for the app. If not provided, will default to PARALLEL.
      valid_values: ['TOOL_EXECUTION_MODE_UNSPECIFIED', 'PARALLEL', 'SEQUENTIAL']
    - name: variableDeclarations
      description: |
        Optional. The declarations of the variables.
      value:
        - description: "{{ description }}"
          name: "{{ name }}"
          schema:
            additionalProperties:
              additionalProperties:
                additionalProperties:
                  additionalProperties: "{{ additionalProperties }}"
                  anyOf: "{{ anyOf }}"
                  default: "{{ default }}"
                  defs: "{{ defs }}"
                  description: "{{ description }}"
                  enum: "{{ enum }}"
                  items: "{{ items }}"
                  maxItems: "{{ maxItems }}"
                  maximum: {{ maximum }}
                  minItems: "{{ minItems }}"
                  minimum: {{ minimum }}
                  nullable: {{ nullable }}
                  prefixItems: "{{ prefixItems }}"
                  properties: "{{ properties }}"
                  ref: "{{ ref }}"
                  required: "{{ required }}"
                  title: "{{ title }}"
                  type: "{{ type }}"
                  uniqueItems: {{ uniqueItems }}
                anyOf:
                  - additionalProperties:
                      additionalProperties: "{{ additionalProperties }}"
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items: "{{ items }}"
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                    defs: "{{ defs }}"
                    description: "{{ description }}"
                    enum: "{{ enum }}"
                    items:
                      additionalProperties: "{{ additionalProperties }}"
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items: "{{ items }}"
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                    maxItems: "{{ maxItems }}"
                    maximum: {{ maximum }}
                    minItems: "{{ minItems }}"
                    minimum: {{ minimum }}
                    nullable: {{ nullable }}
                    prefixItems: "{{ prefixItems }}"
                    properties: "{{ properties }}"
                    ref: "{{ ref }}"
                    required: "{{ required }}"
                    title: "{{ title }}"
                    type: "{{ type }}"
                    uniqueItems: {{ uniqueItems }}
                default: "{{ default }}"
                defs: "{{ defs }}"
                description: "{{ description }}"
                enum:
                  - "{{ enum }}"
                items:
                  additionalProperties: "{{ additionalProperties }}"
                  anyOf: "{{ anyOf }}"
                  default: "{{ default }}"
                  defs: "{{ defs }}"
                  description: "{{ description }}"
                  enum: "{{ enum }}"
                  items: "{{ items }}"
                  maxItems: "{{ maxItems }}"
                  maximum: {{ maximum }}
                  minItems: "{{ minItems }}"
                  minimum: {{ minimum }}
                  nullable: {{ nullable }}
                  prefixItems: "{{ prefixItems }}"
                  properties: "{{ properties }}"
                  ref: "{{ ref }}"
                  required: "{{ required }}"
                  title: "{{ title }}"
                  type: "{{ type }}"
                  uniqueItems: {{ uniqueItems }}
                maxItems: "{{ maxItems }}"
                maximum: {{ maximum }}
                minItems: "{{ minItems }}"
                minimum: {{ minimum }}
                nullable: {{ nullable }}
                prefixItems:
                  - additionalProperties:
                      additionalProperties: "{{ additionalProperties }}"
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items: "{{ items }}"
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                    defs: "{{ defs }}"
                    description: "{{ description }}"
                    enum: "{{ enum }}"
                    items:
                      additionalProperties: "{{ additionalProperties }}"
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items: "{{ items }}"
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                    maxItems: "{{ maxItems }}"
                    maximum: {{ maximum }}
                    minItems: "{{ minItems }}"
                    minimum: {{ minimum }}
                    nullable: {{ nullable }}
                    prefixItems: "{{ prefixItems }}"
                    properties: "{{ properties }}"
                    ref: "{{ ref }}"
                    required: "{{ required }}"
                    title: "{{ title }}"
                    type: "{{ type }}"
                    uniqueItems: {{ uniqueItems }}
                properties: "{{ properties }}"
                ref: "{{ ref }}"
                required:
                  - "{{ required }}"
                title: "{{ title }}"
                type: "{{ type }}"
                uniqueItems: {{ uniqueItems }}
              anyOf:
                - additionalProperties:
                    additionalProperties: "{{ additionalProperties }}"
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                    defs: "{{ defs }}"
                    description: "{{ description }}"
                    enum: "{{ enum }}"
                    items: "{{ items }}"
                    maxItems: "{{ maxItems }}"
                    maximum: {{ maximum }}
                    minItems: "{{ minItems }}"
                    minimum: {{ minimum }}
                    nullable: {{ nullable }}
                    prefixItems: "{{ prefixItems }}"
                    properties: "{{ properties }}"
                    ref: "{{ ref }}"
                    required: "{{ required }}"
                    title: "{{ title }}"
                    type: "{{ type }}"
                    uniqueItems: {{ uniqueItems }}
                  anyOf: "{{ anyOf }}"
                  default: "{{ default }}"
                  defs: "{{ defs }}"
                  description: "{{ description }}"
                  enum: "{{ enum }}"
                  items:
                    additionalProperties: "{{ additionalProperties }}"
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                    defs: "{{ defs }}"
                    description: "{{ description }}"
                    enum: "{{ enum }}"
                    items: "{{ items }}"
                    maxItems: "{{ maxItems }}"
                    maximum: {{ maximum }}
                    minItems: "{{ minItems }}"
                    minimum: {{ minimum }}
                    nullable: {{ nullable }}
                    prefixItems: "{{ prefixItems }}"
                    properties: "{{ properties }}"
                    ref: "{{ ref }}"
                    required: "{{ required }}"
                    title: "{{ title }}"
                    type: "{{ type }}"
                    uniqueItems: {{ uniqueItems }}
                  maxItems: "{{ maxItems }}"
                  maximum: {{ maximum }}
                  minItems: "{{ minItems }}"
                  minimum: {{ minimum }}
                  nullable: {{ nullable }}
                  prefixItems: "{{ prefixItems }}"
                  properties: "{{ properties }}"
                  ref: "{{ ref }}"
                  required: "{{ required }}"
                  title: "{{ title }}"
                  type: "{{ type }}"
                  uniqueItems: {{ uniqueItems }}
              default: "{{ default }}"
              defs: "{{ defs }}"
              description: "{{ description }}"
              enum:
                - "{{ enum }}"
              items:
                additionalProperties:
                  additionalProperties: "{{ additionalProperties }}"
                  anyOf: "{{ anyOf }}"
                  default: "{{ default }}"
                  defs: "{{ defs }}"
                  description: "{{ description }}"
                  enum: "{{ enum }}"
                  items: "{{ items }}"
                  maxItems: "{{ maxItems }}"
                  maximum: {{ maximum }}
                  minItems: "{{ minItems }}"
                  minimum: {{ minimum }}
                  nullable: {{ nullable }}
                  prefixItems: "{{ prefixItems }}"
                  properties: "{{ properties }}"
                  ref: "{{ ref }}"
                  required: "{{ required }}"
                  title: "{{ title }}"
                  type: "{{ type }}"
                  uniqueItems: {{ uniqueItems }}
                anyOf:
                  - additionalProperties:
                      additionalProperties: "{{ additionalProperties }}"
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items: "{{ items }}"
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                    defs: "{{ defs }}"
                    description: "{{ description }}"
                    enum: "{{ enum }}"
                    items:
                      additionalProperties: "{{ additionalProperties }}"
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items: "{{ items }}"
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                    maxItems: "{{ maxItems }}"
                    maximum: {{ maximum }}
                    minItems: "{{ minItems }}"
                    minimum: {{ minimum }}
                    nullable: {{ nullable }}
                    prefixItems: "{{ prefixItems }}"
                    properties: "{{ properties }}"
                    ref: "{{ ref }}"
                    required: "{{ required }}"
                    title: "{{ title }}"
                    type: "{{ type }}"
                    uniqueItems: {{ uniqueItems }}
                default: "{{ default }}"
                defs: "{{ defs }}"
                description: "{{ description }}"
                enum:
                  - "{{ enum }}"
                items:
                  additionalProperties: "{{ additionalProperties }}"
                  anyOf: "{{ anyOf }}"
                  default: "{{ default }}"
                  defs: "{{ defs }}"
                  description: "{{ description }}"
                  enum: "{{ enum }}"
                  items: "{{ items }}"
                  maxItems: "{{ maxItems }}"
                  maximum: {{ maximum }}
                  minItems: "{{ minItems }}"
                  minimum: {{ minimum }}
                  nullable: {{ nullable }}
                  prefixItems: "{{ prefixItems }}"
                  properties: "{{ properties }}"
                  ref: "{{ ref }}"
                  required: "{{ required }}"
                  title: "{{ title }}"
                  type: "{{ type }}"
                  uniqueItems: {{ uniqueItems }}
                maxItems: "{{ maxItems }}"
                maximum: {{ maximum }}
                minItems: "{{ minItems }}"
                minimum: {{ minimum }}
                nullable: {{ nullable }}
                prefixItems:
                  - additionalProperties:
                      additionalProperties: "{{ additionalProperties }}"
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items: "{{ items }}"
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                    defs: "{{ defs }}"
                    description: "{{ description }}"
                    enum: "{{ enum }}"
                    items:
                      additionalProperties: "{{ additionalProperties }}"
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items: "{{ items }}"
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                    maxItems: "{{ maxItems }}"
                    maximum: {{ maximum }}
                    minItems: "{{ minItems }}"
                    minimum: {{ minimum }}
                    nullable: {{ nullable }}
                    prefixItems: "{{ prefixItems }}"
                    properties: "{{ properties }}"
                    ref: "{{ ref }}"
                    required: "{{ required }}"
                    title: "{{ title }}"
                    type: "{{ type }}"
                    uniqueItems: {{ uniqueItems }}
                properties: "{{ properties }}"
                ref: "{{ ref }}"
                required:
                  - "{{ required }}"
                title: "{{ title }}"
                type: "{{ type }}"
                uniqueItems: {{ uniqueItems }}
              maxItems: "{{ maxItems }}"
              maximum: {{ maximum }}
              minItems: "{{ minItems }}"
              minimum: {{ minimum }}
              nullable: {{ nullable }}
              prefixItems:
                - additionalProperties:
                    additionalProperties: "{{ additionalProperties }}"
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                    defs: "{{ defs }}"
                    description: "{{ description }}"
                    enum: "{{ enum }}"
                    items: "{{ items }}"
                    maxItems: "{{ maxItems }}"
                    maximum: {{ maximum }}
                    minItems: "{{ minItems }}"
                    minimum: {{ minimum }}
                    nullable: {{ nullable }}
                    prefixItems: "{{ prefixItems }}"
                    properties: "{{ properties }}"
                    ref: "{{ ref }}"
                    required: "{{ required }}"
                    title: "{{ title }}"
                    type: "{{ type }}"
                    uniqueItems: {{ uniqueItems }}
                  anyOf: "{{ anyOf }}"
                  default: "{{ default }}"
                  defs: "{{ defs }}"
                  description: "{{ description }}"
                  enum: "{{ enum }}"
                  items:
                    additionalProperties: "{{ additionalProperties }}"
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                    defs: "{{ defs }}"
                    description: "{{ description }}"
                    enum: "{{ enum }}"
                    items: "{{ items }}"
                    maxItems: "{{ maxItems }}"
                    maximum: {{ maximum }}
                    minItems: "{{ minItems }}"
                    minimum: {{ minimum }}
                    nullable: {{ nullable }}
                    prefixItems: "{{ prefixItems }}"
                    properties: "{{ properties }}"
                    ref: "{{ ref }}"
                    required: "{{ required }}"
                    title: "{{ title }}"
                    type: "{{ type }}"
                    uniqueItems: {{ uniqueItems }}
                  maxItems: "{{ maxItems }}"
                  maximum: {{ maximum }}
                  minItems: "{{ minItems }}"
                  minimum: {{ minimum }}
                  nullable: {{ nullable }}
                  prefixItems: "{{ prefixItems }}"
                  properties: "{{ properties }}"
                  ref: "{{ ref }}"
                  required: "{{ required }}"
                  title: "{{ title }}"
                  type: "{{ type }}"
                  uniqueItems: {{ uniqueItems }}
              properties: "{{ properties }}"
              ref: "{{ ref }}"
              required:
                - "{{ required }}"
              title: "{{ title }}"
              type: "{{ type }}"
              uniqueItems: {{ uniqueItems }}
            anyOf:
              - additionalProperties:
                  additionalProperties:
                    additionalProperties: "{{ additionalProperties }}"
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                    defs: "{{ defs }}"
                    description: "{{ description }}"
                    enum: "{{ enum }}"
                    items: "{{ items }}"
                    maxItems: "{{ maxItems }}"
                    maximum: {{ maximum }}
                    minItems: "{{ minItems }}"
                    minimum: {{ minimum }}
                    nullable: {{ nullable }}
                    prefixItems: "{{ prefixItems }}"
                    properties: "{{ properties }}"
                    ref: "{{ ref }}"
                    required: "{{ required }}"
                    title: "{{ title }}"
                    type: "{{ type }}"
                    uniqueItems: {{ uniqueItems }}
                  anyOf:
                    - additionalProperties:
                        additionalProperties: "{{ additionalProperties }}"
                        anyOf: "{{ anyOf }}"
                        default: "{{ default }}"
                        defs: "{{ defs }}"
                        description: "{{ description }}"
                        enum: "{{ enum }}"
                        items: "{{ items }}"
                        maxItems: "{{ maxItems }}"
                        maximum: {{ maximum }}
                        minItems: "{{ minItems }}"
                        minimum: {{ minimum }}
                        nullable: {{ nullable }}
                        prefixItems: "{{ prefixItems }}"
                        properties: "{{ properties }}"
                        ref: "{{ ref }}"
                        required: "{{ required }}"
                        title: "{{ title }}"
                        type: "{{ type }}"
                        uniqueItems: {{ uniqueItems }}
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items:
                        additionalProperties: "{{ additionalProperties }}"
                        anyOf: "{{ anyOf }}"
                        default: "{{ default }}"
                        defs: "{{ defs }}"
                        description: "{{ description }}"
                        enum: "{{ enum }}"
                        items: "{{ items }}"
                        maxItems: "{{ maxItems }}"
                        maximum: {{ maximum }}
                        minItems: "{{ minItems }}"
                        minimum: {{ minimum }}
                        nullable: {{ nullable }}
                        prefixItems: "{{ prefixItems }}"
                        properties: "{{ properties }}"
                        ref: "{{ ref }}"
                        required: "{{ required }}"
                        title: "{{ title }}"
                        type: "{{ type }}"
                        uniqueItems: {{ uniqueItems }}
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                  default: "{{ default }}"
                  defs: "{{ defs }}"
                  description: "{{ description }}"
                  enum:
                    - "{{ enum }}"
                  items:
                    additionalProperties: "{{ additionalProperties }}"
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                    defs: "{{ defs }}"
                    description: "{{ description }}"
                    enum: "{{ enum }}"
                    items: "{{ items }}"
                    maxItems: "{{ maxItems }}"
                    maximum: {{ maximum }}
                    minItems: "{{ minItems }}"
                    minimum: {{ minimum }}
                    nullable: {{ nullable }}
                    prefixItems: "{{ prefixItems }}"
                    properties: "{{ properties }}"
                    ref: "{{ ref }}"
                    required: "{{ required }}"
                    title: "{{ title }}"
                    type: "{{ type }}"
                    uniqueItems: {{ uniqueItems }}
                  maxItems: "{{ maxItems }}"
                  maximum: {{ maximum }}
                  minItems: "{{ minItems }}"
                  minimum: {{ minimum }}
                  nullable: {{ nullable }}
                  prefixItems:
                    - additionalProperties:
                        additionalProperties: "{{ additionalProperties }}"
                        anyOf: "{{ anyOf }}"
                        default: "{{ default }}"
                        defs: "{{ defs }}"
                        description: "{{ description }}"
                        enum: "{{ enum }}"
                        items: "{{ items }}"
                        maxItems: "{{ maxItems }}"
                        maximum: {{ maximum }}
                        minItems: "{{ minItems }}"
                        minimum: {{ minimum }}
                        nullable: {{ nullable }}
                        prefixItems: "{{ prefixItems }}"
                        properties: "{{ properties }}"
                        ref: "{{ ref }}"
                        required: "{{ required }}"
                        title: "{{ title }}"
                        type: "{{ type }}"
                        uniqueItems: {{ uniqueItems }}
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items:
                        additionalProperties: "{{ additionalProperties }}"
                        anyOf: "{{ anyOf }}"
                        default: "{{ default }}"
                        defs: "{{ defs }}"
                        description: "{{ description }}"
                        enum: "{{ enum }}"
                        items: "{{ items }}"
                        maxItems: "{{ maxItems }}"
                        maximum: {{ maximum }}
                        minItems: "{{ minItems }}"
                        minimum: {{ minimum }}
                        nullable: {{ nullable }}
                        prefixItems: "{{ prefixItems }}"
                        properties: "{{ properties }}"
                        ref: "{{ ref }}"
                        required: "{{ required }}"
                        title: "{{ title }}"
                        type: "{{ type }}"
                        uniqueItems: {{ uniqueItems }}
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                  properties: "{{ properties }}"
                  ref: "{{ ref }}"
                  required:
                    - "{{ required }}"
                  title: "{{ title }}"
                  type: "{{ type }}"
                  uniqueItems: {{ uniqueItems }}
                anyOf: "{{ anyOf }}"
                default: "{{ default }}"
                defs: "{{ defs }}"
                description: "{{ description }}"
                enum: "{{ enum }}"
                items:
                  additionalProperties:
                    additionalProperties: "{{ additionalProperties }}"
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                    defs: "{{ defs }}"
                    description: "{{ description }}"
                    enum: "{{ enum }}"
                    items: "{{ items }}"
                    maxItems: "{{ maxItems }}"
                    maximum: {{ maximum }}
                    minItems: "{{ minItems }}"
                    minimum: {{ minimum }}
                    nullable: {{ nullable }}
                    prefixItems: "{{ prefixItems }}"
                    properties: "{{ properties }}"
                    ref: "{{ ref }}"
                    required: "{{ required }}"
                    title: "{{ title }}"
                    type: "{{ type }}"
                    uniqueItems: {{ uniqueItems }}
                  anyOf:
                    - additionalProperties:
                        additionalProperties: "{{ additionalProperties }}"
                        anyOf: "{{ anyOf }}"
                        default: "{{ default }}"
                        defs: "{{ defs }}"
                        description: "{{ description }}"
                        enum: "{{ enum }}"
                        items: "{{ items }}"
                        maxItems: "{{ maxItems }}"
                        maximum: {{ maximum }}
                        minItems: "{{ minItems }}"
                        minimum: {{ minimum }}
                        nullable: {{ nullable }}
                        prefixItems: "{{ prefixItems }}"
                        properties: "{{ properties }}"
                        ref: "{{ ref }}"
                        required: "{{ required }}"
                        title: "{{ title }}"
                        type: "{{ type }}"
                        uniqueItems: {{ uniqueItems }}
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items:
                        additionalProperties: "{{ additionalProperties }}"
                        anyOf: "{{ anyOf }}"
                        default: "{{ default }}"
                        defs: "{{ defs }}"
                        description: "{{ description }}"
                        enum: "{{ enum }}"
                        items: "{{ items }}"
                        maxItems: "{{ maxItems }}"
                        maximum: {{ maximum }}
                        minItems: "{{ minItems }}"
                        minimum: {{ minimum }}
                        nullable: {{ nullable }}
                        prefixItems: "{{ prefixItems }}"
                        properties: "{{ properties }}"
                        ref: "{{ ref }}"
                        required: "{{ required }}"
                        title: "{{ title }}"
                        type: "{{ type }}"
                        uniqueItems: {{ uniqueItems }}
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                  default: "{{ default }}"
                  defs: "{{ defs }}"
                  description: "{{ description }}"
                  enum:
                    - "{{ enum }}"
                  items:
                    additionalProperties: "{{ additionalProperties }}"
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                    defs: "{{ defs }}"
                    description: "{{ description }}"
                    enum: "{{ enum }}"
                    items: "{{ items }}"
                    maxItems: "{{ maxItems }}"
                    maximum: {{ maximum }}
                    minItems: "{{ minItems }}"
                    minimum: {{ minimum }}
                    nullable: {{ nullable }}
                    prefixItems: "{{ prefixItems }}"
                    properties: "{{ properties }}"
                    ref: "{{ ref }}"
                    required: "{{ required }}"
                    title: "{{ title }}"
                    type: "{{ type }}"
                    uniqueItems: {{ uniqueItems }}
                  maxItems: "{{ maxItems }}"
                  maximum: {{ maximum }}
                  minItems: "{{ minItems }}"
                  minimum: {{ minimum }}
                  nullable: {{ nullable }}
                  prefixItems:
                    - additionalProperties:
                        additionalProperties: "{{ additionalProperties }}"
                        anyOf: "{{ anyOf }}"
                        default: "{{ default }}"
                        defs: "{{ defs }}"
                        description: "{{ description }}"
                        enum: "{{ enum }}"
                        items: "{{ items }}"
                        maxItems: "{{ maxItems }}"
                        maximum: {{ maximum }}
                        minItems: "{{ minItems }}"
                        minimum: {{ minimum }}
                        nullable: {{ nullable }}
                        prefixItems: "{{ prefixItems }}"
                        properties: "{{ properties }}"
                        ref: "{{ ref }}"
                        required: "{{ required }}"
                        title: "{{ title }}"
                        type: "{{ type }}"
                        uniqueItems: {{ uniqueItems }}
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items:
                        additionalProperties: "{{ additionalProperties }}"
                        anyOf: "{{ anyOf }}"
                        default: "{{ default }}"
                        defs: "{{ defs }}"
                        description: "{{ description }}"
                        enum: "{{ enum }}"
                        items: "{{ items }}"
                        maxItems: "{{ maxItems }}"
                        maximum: {{ maximum }}
                        minItems: "{{ minItems }}"
                        minimum: {{ minimum }}
                        nullable: {{ nullable }}
                        prefixItems: "{{ prefixItems }}"
                        properties: "{{ properties }}"
                        ref: "{{ ref }}"
                        required: "{{ required }}"
                        title: "{{ title }}"
                        type: "{{ type }}"
                        uniqueItems: {{ uniqueItems }}
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                  properties: "{{ properties }}"
                  ref: "{{ ref }}"
                  required:
                    - "{{ required }}"
                  title: "{{ title }}"
                  type: "{{ type }}"
                  uniqueItems: {{ uniqueItems }}
                maxItems: "{{ maxItems }}"
                maximum: {{ maximum }}
                minItems: "{{ minItems }}"
                minimum: {{ minimum }}
                nullable: {{ nullable }}
                prefixItems: "{{ prefixItems }}"
                properties: "{{ properties }}"
                ref: "{{ ref }}"
                required: "{{ required }}"
                title: "{{ title }}"
                type: "{{ type }}"
                uniqueItems: {{ uniqueItems }}
            default: "{{ default }}"
            defs: "{{ defs }}"
            description: "{{ description }}"
            enum:
              - "{{ enum }}"
            items:
              additionalProperties:
                additionalProperties:
                  additionalProperties: "{{ additionalProperties }}"
                  anyOf: "{{ anyOf }}"
                  default: "{{ default }}"
                  defs: "{{ defs }}"
                  description: "{{ description }}"
                  enum: "{{ enum }}"
                  items: "{{ items }}"
                  maxItems: "{{ maxItems }}"
                  maximum: {{ maximum }}
                  minItems: "{{ minItems }}"
                  minimum: {{ minimum }}
                  nullable: {{ nullable }}
                  prefixItems: "{{ prefixItems }}"
                  properties: "{{ properties }}"
                  ref: "{{ ref }}"
                  required: "{{ required }}"
                  title: "{{ title }}"
                  type: "{{ type }}"
                  uniqueItems: {{ uniqueItems }}
                anyOf:
                  - additionalProperties:
                      additionalProperties: "{{ additionalProperties }}"
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items: "{{ items }}"
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                    defs: "{{ defs }}"
                    description: "{{ description }}"
                    enum: "{{ enum }}"
                    items:
                      additionalProperties: "{{ additionalProperties }}"
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items: "{{ items }}"
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                    maxItems: "{{ maxItems }}"
                    maximum: {{ maximum }}
                    minItems: "{{ minItems }}"
                    minimum: {{ minimum }}
                    nullable: {{ nullable }}
                    prefixItems: "{{ prefixItems }}"
                    properties: "{{ properties }}"
                    ref: "{{ ref }}"
                    required: "{{ required }}"
                    title: "{{ title }}"
                    type: "{{ type }}"
                    uniqueItems: {{ uniqueItems }}
                default: "{{ default }}"
                defs: "{{ defs }}"
                description: "{{ description }}"
                enum:
                  - "{{ enum }}"
                items:
                  additionalProperties: "{{ additionalProperties }}"
                  anyOf: "{{ anyOf }}"
                  default: "{{ default }}"
                  defs: "{{ defs }}"
                  description: "{{ description }}"
                  enum: "{{ enum }}"
                  items: "{{ items }}"
                  maxItems: "{{ maxItems }}"
                  maximum: {{ maximum }}
                  minItems: "{{ minItems }}"
                  minimum: {{ minimum }}
                  nullable: {{ nullable }}
                  prefixItems: "{{ prefixItems }}"
                  properties: "{{ properties }}"
                  ref: "{{ ref }}"
                  required: "{{ required }}"
                  title: "{{ title }}"
                  type: "{{ type }}"
                  uniqueItems: {{ uniqueItems }}
                maxItems: "{{ maxItems }}"
                maximum: {{ maximum }}
                minItems: "{{ minItems }}"
                minimum: {{ minimum }}
                nullable: {{ nullable }}
                prefixItems:
                  - additionalProperties:
                      additionalProperties: "{{ additionalProperties }}"
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items: "{{ items }}"
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                    defs: "{{ defs }}"
                    description: "{{ description }}"
                    enum: "{{ enum }}"
                    items:
                      additionalProperties: "{{ additionalProperties }}"
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items: "{{ items }}"
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                    maxItems: "{{ maxItems }}"
                    maximum: {{ maximum }}
                    minItems: "{{ minItems }}"
                    minimum: {{ minimum }}
                    nullable: {{ nullable }}
                    prefixItems: "{{ prefixItems }}"
                    properties: "{{ properties }}"
                    ref: "{{ ref }}"
                    required: "{{ required }}"
                    title: "{{ title }}"
                    type: "{{ type }}"
                    uniqueItems: {{ uniqueItems }}
                properties: "{{ properties }}"
                ref: "{{ ref }}"
                required:
                  - "{{ required }}"
                title: "{{ title }}"
                type: "{{ type }}"
                uniqueItems: {{ uniqueItems }}
              anyOf:
                - additionalProperties:
                    additionalProperties: "{{ additionalProperties }}"
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                    defs: "{{ defs }}"
                    description: "{{ description }}"
                    enum: "{{ enum }}"
                    items: "{{ items }}"
                    maxItems: "{{ maxItems }}"
                    maximum: {{ maximum }}
                    minItems: "{{ minItems }}"
                    minimum: {{ minimum }}
                    nullable: {{ nullable }}
                    prefixItems: "{{ prefixItems }}"
                    properties: "{{ properties }}"
                    ref: "{{ ref }}"
                    required: "{{ required }}"
                    title: "{{ title }}"
                    type: "{{ type }}"
                    uniqueItems: {{ uniqueItems }}
                  anyOf: "{{ anyOf }}"
                  default: "{{ default }}"
                  defs: "{{ defs }}"
                  description: "{{ description }}"
                  enum: "{{ enum }}"
                  items:
                    additionalProperties: "{{ additionalProperties }}"
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                    defs: "{{ defs }}"
                    description: "{{ description }}"
                    enum: "{{ enum }}"
                    items: "{{ items }}"
                    maxItems: "{{ maxItems }}"
                    maximum: {{ maximum }}
                    minItems: "{{ minItems }}"
                    minimum: {{ minimum }}
                    nullable: {{ nullable }}
                    prefixItems: "{{ prefixItems }}"
                    properties: "{{ properties }}"
                    ref: "{{ ref }}"
                    required: "{{ required }}"
                    title: "{{ title }}"
                    type: "{{ type }}"
                    uniqueItems: {{ uniqueItems }}
                  maxItems: "{{ maxItems }}"
                  maximum: {{ maximum }}
                  minItems: "{{ minItems }}"
                  minimum: {{ minimum }}
                  nullable: {{ nullable }}
                  prefixItems: "{{ prefixItems }}"
                  properties: "{{ properties }}"
                  ref: "{{ ref }}"
                  required: "{{ required }}"
                  title: "{{ title }}"
                  type: "{{ type }}"
                  uniqueItems: {{ uniqueItems }}
              default: "{{ default }}"
              defs: "{{ defs }}"
              description: "{{ description }}"
              enum:
                - "{{ enum }}"
              items:
                additionalProperties:
                  additionalProperties: "{{ additionalProperties }}"
                  anyOf: "{{ anyOf }}"
                  default: "{{ default }}"
                  defs: "{{ defs }}"
                  description: "{{ description }}"
                  enum: "{{ enum }}"
                  items: "{{ items }}"
                  maxItems: "{{ maxItems }}"
                  maximum: {{ maximum }}
                  minItems: "{{ minItems }}"
                  minimum: {{ minimum }}
                  nullable: {{ nullable }}
                  prefixItems: "{{ prefixItems }}"
                  properties: "{{ properties }}"
                  ref: "{{ ref }}"
                  required: "{{ required }}"
                  title: "{{ title }}"
                  type: "{{ type }}"
                  uniqueItems: {{ uniqueItems }}
                anyOf:
                  - additionalProperties:
                      additionalProperties: "{{ additionalProperties }}"
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items: "{{ items }}"
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                    defs: "{{ defs }}"
                    description: "{{ description }}"
                    enum: "{{ enum }}"
                    items:
                      additionalProperties: "{{ additionalProperties }}"
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items: "{{ items }}"
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                    maxItems: "{{ maxItems }}"
                    maximum: {{ maximum }}
                    minItems: "{{ minItems }}"
                    minimum: {{ minimum }}
                    nullable: {{ nullable }}
                    prefixItems: "{{ prefixItems }}"
                    properties: "{{ properties }}"
                    ref: "{{ ref }}"
                    required: "{{ required }}"
                    title: "{{ title }}"
                    type: "{{ type }}"
                    uniqueItems: {{ uniqueItems }}
                default: "{{ default }}"
                defs: "{{ defs }}"
                description: "{{ description }}"
                enum:
                  - "{{ enum }}"
                items:
                  additionalProperties: "{{ additionalProperties }}"
                  anyOf: "{{ anyOf }}"
                  default: "{{ default }}"
                  defs: "{{ defs }}"
                  description: "{{ description }}"
                  enum: "{{ enum }}"
                  items: "{{ items }}"
                  maxItems: "{{ maxItems }}"
                  maximum: {{ maximum }}
                  minItems: "{{ minItems }}"
                  minimum: {{ minimum }}
                  nullable: {{ nullable }}
                  prefixItems: "{{ prefixItems }}"
                  properties: "{{ properties }}"
                  ref: "{{ ref }}"
                  required: "{{ required }}"
                  title: "{{ title }}"
                  type: "{{ type }}"
                  uniqueItems: {{ uniqueItems }}
                maxItems: "{{ maxItems }}"
                maximum: {{ maximum }}
                minItems: "{{ minItems }}"
                minimum: {{ minimum }}
                nullable: {{ nullable }}
                prefixItems:
                  - additionalProperties:
                      additionalProperties: "{{ additionalProperties }}"
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items: "{{ items }}"
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                    defs: "{{ defs }}"
                    description: "{{ description }}"
                    enum: "{{ enum }}"
                    items:
                      additionalProperties: "{{ additionalProperties }}"
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items: "{{ items }}"
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                    maxItems: "{{ maxItems }}"
                    maximum: {{ maximum }}
                    minItems: "{{ minItems }}"
                    minimum: {{ minimum }}
                    nullable: {{ nullable }}
                    prefixItems: "{{ prefixItems }}"
                    properties: "{{ properties }}"
                    ref: "{{ ref }}"
                    required: "{{ required }}"
                    title: "{{ title }}"
                    type: "{{ type }}"
                    uniqueItems: {{ uniqueItems }}
                properties: "{{ properties }}"
                ref: "{{ ref }}"
                required:
                  - "{{ required }}"
                title: "{{ title }}"
                type: "{{ type }}"
                uniqueItems: {{ uniqueItems }}
              maxItems: "{{ maxItems }}"
              maximum: {{ maximum }}
              minItems: "{{ minItems }}"
              minimum: {{ minimum }}
              nullable: {{ nullable }}
              prefixItems:
                - additionalProperties:
                    additionalProperties: "{{ additionalProperties }}"
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                    defs: "{{ defs }}"
                    description: "{{ description }}"
                    enum: "{{ enum }}"
                    items: "{{ items }}"
                    maxItems: "{{ maxItems }}"
                    maximum: {{ maximum }}
                    minItems: "{{ minItems }}"
                    minimum: {{ minimum }}
                    nullable: {{ nullable }}
                    prefixItems: "{{ prefixItems }}"
                    properties: "{{ properties }}"
                    ref: "{{ ref }}"
                    required: "{{ required }}"
                    title: "{{ title }}"
                    type: "{{ type }}"
                    uniqueItems: {{ uniqueItems }}
                  anyOf: "{{ anyOf }}"
                  default: "{{ default }}"
                  defs: "{{ defs }}"
                  description: "{{ description }}"
                  enum: "{{ enum }}"
                  items:
                    additionalProperties: "{{ additionalProperties }}"
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                    defs: "{{ defs }}"
                    description: "{{ description }}"
                    enum: "{{ enum }}"
                    items: "{{ items }}"
                    maxItems: "{{ maxItems }}"
                    maximum: {{ maximum }}
                    minItems: "{{ minItems }}"
                    minimum: {{ minimum }}
                    nullable: {{ nullable }}
                    prefixItems: "{{ prefixItems }}"
                    properties: "{{ properties }}"
                    ref: "{{ ref }}"
                    required: "{{ required }}"
                    title: "{{ title }}"
                    type: "{{ type }}"
                    uniqueItems: {{ uniqueItems }}
                  maxItems: "{{ maxItems }}"
                  maximum: {{ maximum }}
                  minItems: "{{ minItems }}"
                  minimum: {{ minimum }}
                  nullable: {{ nullable }}
                  prefixItems: "{{ prefixItems }}"
                  properties: "{{ properties }}"
                  ref: "{{ ref }}"
                  required: "{{ required }}"
                  title: "{{ title }}"
                  type: "{{ type }}"
                  uniqueItems: {{ uniqueItems }}
              properties: "{{ properties }}"
              ref: "{{ ref }}"
              required:
                - "{{ required }}"
              title: "{{ title }}"
              type: "{{ type }}"
              uniqueItems: {{ uniqueItems }}
            maxItems: "{{ maxItems }}"
            maximum: {{ maximum }}
            minItems: "{{ minItems }}"
            minimum: {{ minimum }}
            nullable: {{ nullable }}
            prefixItems:
              - additionalProperties:
                  additionalProperties:
                    additionalProperties: "{{ additionalProperties }}"
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                    defs: "{{ defs }}"
                    description: "{{ description }}"
                    enum: "{{ enum }}"
                    items: "{{ items }}"
                    maxItems: "{{ maxItems }}"
                    maximum: {{ maximum }}
                    minItems: "{{ minItems }}"
                    minimum: {{ minimum }}
                    nullable: {{ nullable }}
                    prefixItems: "{{ prefixItems }}"
                    properties: "{{ properties }}"
                    ref: "{{ ref }}"
                    required: "{{ required }}"
                    title: "{{ title }}"
                    type: "{{ type }}"
                    uniqueItems: {{ uniqueItems }}
                  anyOf:
                    - additionalProperties:
                        additionalProperties: "{{ additionalProperties }}"
                        anyOf: "{{ anyOf }}"
                        default: "{{ default }}"
                        defs: "{{ defs }}"
                        description: "{{ description }}"
                        enum: "{{ enum }}"
                        items: "{{ items }}"
                        maxItems: "{{ maxItems }}"
                        maximum: {{ maximum }}
                        minItems: "{{ minItems }}"
                        minimum: {{ minimum }}
                        nullable: {{ nullable }}
                        prefixItems: "{{ prefixItems }}"
                        properties: "{{ properties }}"
                        ref: "{{ ref }}"
                        required: "{{ required }}"
                        title: "{{ title }}"
                        type: "{{ type }}"
                        uniqueItems: {{ uniqueItems }}
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items:
                        additionalProperties: "{{ additionalProperties }}"
                        anyOf: "{{ anyOf }}"
                        default: "{{ default }}"
                        defs: "{{ defs }}"
                        description: "{{ description }}"
                        enum: "{{ enum }}"
                        items: "{{ items }}"
                        maxItems: "{{ maxItems }}"
                        maximum: {{ maximum }}
                        minItems: "{{ minItems }}"
                        minimum: {{ minimum }}
                        nullable: {{ nullable }}
                        prefixItems: "{{ prefixItems }}"
                        properties: "{{ properties }}"
                        ref: "{{ ref }}"
                        required: "{{ required }}"
                        title: "{{ title }}"
                        type: "{{ type }}"
                        uniqueItems: {{ uniqueItems }}
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                  default: "{{ default }}"
                  defs: "{{ defs }}"
                  description: "{{ description }}"
                  enum:
                    - "{{ enum }}"
                  items:
                    additionalProperties: "{{ additionalProperties }}"
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                    defs: "{{ defs }}"
                    description: "{{ description }}"
                    enum: "{{ enum }}"
                    items: "{{ items }}"
                    maxItems: "{{ maxItems }}"
                    maximum: {{ maximum }}
                    minItems: "{{ minItems }}"
                    minimum: {{ minimum }}
                    nullable: {{ nullable }}
                    prefixItems: "{{ prefixItems }}"
                    properties: "{{ properties }}"
                    ref: "{{ ref }}"
                    required: "{{ required }}"
                    title: "{{ title }}"
                    type: "{{ type }}"
                    uniqueItems: {{ uniqueItems }}
                  maxItems: "{{ maxItems }}"
                  maximum: {{ maximum }}
                  minItems: "{{ minItems }}"
                  minimum: {{ minimum }}
                  nullable: {{ nullable }}
                  prefixItems:
                    - additionalProperties:
                        additionalProperties: "{{ additionalProperties }}"
                        anyOf: "{{ anyOf }}"
                        default: "{{ default }}"
                        defs: "{{ defs }}"
                        description: "{{ description }}"
                        enum: "{{ enum }}"
                        items: "{{ items }}"
                        maxItems: "{{ maxItems }}"
                        maximum: {{ maximum }}
                        minItems: "{{ minItems }}"
                        minimum: {{ minimum }}
                        nullable: {{ nullable }}
                        prefixItems: "{{ prefixItems }}"
                        properties: "{{ properties }}"
                        ref: "{{ ref }}"
                        required: "{{ required }}"
                        title: "{{ title }}"
                        type: "{{ type }}"
                        uniqueItems: {{ uniqueItems }}
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items:
                        additionalProperties: "{{ additionalProperties }}"
                        anyOf: "{{ anyOf }}"
                        default: "{{ default }}"
                        defs: "{{ defs }}"
                        description: "{{ description }}"
                        enum: "{{ enum }}"
                        items: "{{ items }}"
                        maxItems: "{{ maxItems }}"
                        maximum: {{ maximum }}
                        minItems: "{{ minItems }}"
                        minimum: {{ minimum }}
                        nullable: {{ nullable }}
                        prefixItems: "{{ prefixItems }}"
                        properties: "{{ properties }}"
                        ref: "{{ ref }}"
                        required: "{{ required }}"
                        title: "{{ title }}"
                        type: "{{ type }}"
                        uniqueItems: {{ uniqueItems }}
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                  properties: "{{ properties }}"
                  ref: "{{ ref }}"
                  required:
                    - "{{ required }}"
                  title: "{{ title }}"
                  type: "{{ type }}"
                  uniqueItems: {{ uniqueItems }}
                anyOf: "{{ anyOf }}"
                default: "{{ default }}"
                defs: "{{ defs }}"
                description: "{{ description }}"
                enum: "{{ enum }}"
                items:
                  additionalProperties:
                    additionalProperties: "{{ additionalProperties }}"
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                    defs: "{{ defs }}"
                    description: "{{ description }}"
                    enum: "{{ enum }}"
                    items: "{{ items }}"
                    maxItems: "{{ maxItems }}"
                    maximum: {{ maximum }}
                    minItems: "{{ minItems }}"
                    minimum: {{ minimum }}
                    nullable: {{ nullable }}
                    prefixItems: "{{ prefixItems }}"
                    properties: "{{ properties }}"
                    ref: "{{ ref }}"
                    required: "{{ required }}"
                    title: "{{ title }}"
                    type: "{{ type }}"
                    uniqueItems: {{ uniqueItems }}
                  anyOf:
                    - additionalProperties:
                        additionalProperties: "{{ additionalProperties }}"
                        anyOf: "{{ anyOf }}"
                        default: "{{ default }}"
                        defs: "{{ defs }}"
                        description: "{{ description }}"
                        enum: "{{ enum }}"
                        items: "{{ items }}"
                        maxItems: "{{ maxItems }}"
                        maximum: {{ maximum }}
                        minItems: "{{ minItems }}"
                        minimum: {{ minimum }}
                        nullable: {{ nullable }}
                        prefixItems: "{{ prefixItems }}"
                        properties: "{{ properties }}"
                        ref: "{{ ref }}"
                        required: "{{ required }}"
                        title: "{{ title }}"
                        type: "{{ type }}"
                        uniqueItems: {{ uniqueItems }}
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items:
                        additionalProperties: "{{ additionalProperties }}"
                        anyOf: "{{ anyOf }}"
                        default: "{{ default }}"
                        defs: "{{ defs }}"
                        description: "{{ description }}"
                        enum: "{{ enum }}"
                        items: "{{ items }}"
                        maxItems: "{{ maxItems }}"
                        maximum: {{ maximum }}
                        minItems: "{{ minItems }}"
                        minimum: {{ minimum }}
                        nullable: {{ nullable }}
                        prefixItems: "{{ prefixItems }}"
                        properties: "{{ properties }}"
                        ref: "{{ ref }}"
                        required: "{{ required }}"
                        title: "{{ title }}"
                        type: "{{ type }}"
                        uniqueItems: {{ uniqueItems }}
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                  default: "{{ default }}"
                  defs: "{{ defs }}"
                  description: "{{ description }}"
                  enum:
                    - "{{ enum }}"
                  items:
                    additionalProperties: "{{ additionalProperties }}"
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                    defs: "{{ defs }}"
                    description: "{{ description }}"
                    enum: "{{ enum }}"
                    items: "{{ items }}"
                    maxItems: "{{ maxItems }}"
                    maximum: {{ maximum }}
                    minItems: "{{ minItems }}"
                    minimum: {{ minimum }}
                    nullable: {{ nullable }}
                    prefixItems: "{{ prefixItems }}"
                    properties: "{{ properties }}"
                    ref: "{{ ref }}"
                    required: "{{ required }}"
                    title: "{{ title }}"
                    type: "{{ type }}"
                    uniqueItems: {{ uniqueItems }}
                  maxItems: "{{ maxItems }}"
                  maximum: {{ maximum }}
                  minItems: "{{ minItems }}"
                  minimum: {{ minimum }}
                  nullable: {{ nullable }}
                  prefixItems:
                    - additionalProperties:
                        additionalProperties: "{{ additionalProperties }}"
                        anyOf: "{{ anyOf }}"
                        default: "{{ default }}"
                        defs: "{{ defs }}"
                        description: "{{ description }}"
                        enum: "{{ enum }}"
                        items: "{{ items }}"
                        maxItems: "{{ maxItems }}"
                        maximum: {{ maximum }}
                        minItems: "{{ minItems }}"
                        minimum: {{ minimum }}
                        nullable: {{ nullable }}
                        prefixItems: "{{ prefixItems }}"
                        properties: "{{ properties }}"
                        ref: "{{ ref }}"
                        required: "{{ required }}"
                        title: "{{ title }}"
                        type: "{{ type }}"
                        uniqueItems: {{ uniqueItems }}
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items:
                        additionalProperties: "{{ additionalProperties }}"
                        anyOf: "{{ anyOf }}"
                        default: "{{ default }}"
                        defs: "{{ defs }}"
                        description: "{{ description }}"
                        enum: "{{ enum }}"
                        items: "{{ items }}"
                        maxItems: "{{ maxItems }}"
                        maximum: {{ maximum }}
                        minItems: "{{ minItems }}"
                        minimum: {{ minimum }}
                        nullable: {{ nullable }}
                        prefixItems: "{{ prefixItems }}"
                        properties: "{{ properties }}"
                        ref: "{{ ref }}"
                        required: "{{ required }}"
                        title: "{{ title }}"
                        type: "{{ type }}"
                        uniqueItems: {{ uniqueItems }}
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                  properties: "{{ properties }}"
                  ref: "{{ ref }}"
                  required:
                    - "{{ required }}"
                  title: "{{ title }}"
                  type: "{{ type }}"
                  uniqueItems: {{ uniqueItems }}
                maxItems: "{{ maxItems }}"
                maximum: {{ maximum }}
                minItems: "{{ minItems }}"
                minimum: {{ minimum }}
                nullable: {{ nullable }}
                prefixItems: "{{ prefixItems }}"
                properties: "{{ properties }}"
                ref: "{{ ref }}"
                required: "{{ required }}"
                title: "{{ title }}"
                type: "{{ type }}"
                uniqueItems: {{ uniqueItems }}
            properties: "{{ properties }}"
            ref: "{{ ref }}"
            required:
              - "{{ required }}"
            title: "{{ title }}"
            type: "{{ type }}"
            uniqueItems: {{ uniqueItems }}
    - name: vpcScSettings
      description: |
        Optional. VPC-SC settings for the app.
      value:
        allowedOrigins:
          - "{{ allowedOrigins }}"
    - name: appId
      value: "{{ appId }}"
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

Updates the specified app.

```sql
UPDATE google.ces.apps
SET 
data__audioProcessingConfig = '{{ audioProcessingConfig }}',
data__clientCertificateSettings = '{{ clientCertificateSettings }}',
data__dataStoreSettings = '{{ dataStoreSettings }}',
data__defaultChannelProfile = '{{ defaultChannelProfile }}',
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__errorHandlingSettings = '{{ errorHandlingSettings }}',
data__evaluationMetricsThresholds = '{{ evaluationMetricsThresholds }}',
data__globalInstruction = '{{ globalInstruction }}',
data__guardrails = '{{ guardrails }}',
data__languageSettings = '{{ languageSettings }}',
data__locked = {{ locked }},
data__loggingSettings = '{{ loggingSettings }}',
data__metadata = '{{ metadata }}',
data__modelSettings = '{{ modelSettings }}',
data__name = '{{ name }}',
data__pinned = {{ pinned }},
data__rootAgent = '{{ rootAgent }}',
data__timeZoneSettings = '{{ timeZoneSettings }}',
data__toolExecutionMode = '{{ toolExecutionMode }}',
data__variableDeclarations = '{{ variableDeclarations }}',
data__vpcScSettings = '{{ vpcScSettings }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND appsId = '{{ appsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
audioProcessingConfig,
clientCertificateSettings,
createTime,
dataStoreSettings,
defaultChannelProfile,
deploymentCount,
description,
displayName,
errorHandlingSettings,
etag,
evaluationMetricsThresholds,
globalInstruction,
guardrails,
languageSettings,
locked,
loggingSettings,
metadata,
modelSettings,
pinned,
predefinedVariableDeclarations,
rootAgent,
timeZoneSettings,
toolExecutionMode,
updateTime,
validationErrors,
variableDeclarations,
vpcScSettings;
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

Deletes the specified app.

```sql
DELETE FROM google.ces.apps
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND appsId = '{{ appsId }}' --required
AND etag = '{{ etag }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="execute_tool"
    values={[
        { label: 'execute_tool', value: 'execute_tool' },
        { label: 'export_app', value: 'export_app' },
        { label: 'import_app', value: 'import_app' }
    ]}
>
<TabItem value="execute_tool">

Executes the given tool with the given arguments.

```sql
EXEC google.ces.apps.execute_tool 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@appsId='{{ appsId }}' --required 
@@json=
'{
"args": "{{ args }}", 
"context": "{{ context }}", 
"mockConfig": "{{ mockConfig }}", 
"tool": "{{ tool }}", 
"toolsetTool": "{{ toolsetTool }}", 
"variables": "{{ variables }}"
}'
;
```
</TabItem>
<TabItem value="export_app">

Exports the specified app.

```sql
EXEC google.ces.apps.export_app 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@appsId='{{ appsId }}' --required 
@@json=
'{
"appVersion": "{{ appVersion }}", 
"exportFormat": "{{ exportFormat }}", 
"gcsUri": "{{ gcsUri }}"
}'
;
```
</TabItem>
<TabItem value="import_app">

Imports the specified app.

```sql
EXEC google.ces.apps.import_app 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"appContent": "{{ appContent }}", 
"appId": "{{ appId }}", 
"displayName": "{{ displayName }}", 
"gcsUri": "{{ gcsUri }}", 
"ignoreAppLock": {{ ignoreAppLock }}, 
"importOptions": "{{ importOptions }}"
}'
;
```
</TabItem>
</Tabs>
