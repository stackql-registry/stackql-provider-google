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
    <td><a href="#import_app"><CopyableCode code="import_app" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Imports the specified app.</td>
</tr>
<tr>
    <td><a href="#export_app"><CopyableCode code="export_app" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Exports the specified app.</td>
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
*
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
data__timeZoneSettings,
data__metadata,
data__vpcScSettings,
data__loggingSettings,
data__toolExecutionMode,
data__defaultChannelProfile,
data__clientCertificateSettings,
data__errorHandlingSettings,
data__languageSettings,
data__modelSettings,
data__pinned,
data__globalInstruction,
data__guardrails,
data__name,
data__displayName,
data__locked,
data__variableDeclarations,
data__description,
data__audioProcessingConfig,
data__dataStoreSettings,
data__evaluationMetricsThresholds,
data__rootAgent,
projectsId,
locationsId,
appId
)
SELECT 
'{{ timeZoneSettings }}',
'{{ metadata }}',
'{{ vpcScSettings }}',
'{{ loggingSettings }}',
'{{ toolExecutionMode }}',
'{{ defaultChannelProfile }}',
'{{ clientCertificateSettings }}',
'{{ errorHandlingSettings }}',
'{{ languageSettings }}',
'{{ modelSettings }}',
{{ pinned }},
'{{ globalInstruction }}',
'{{ guardrails }}',
'{{ name }}',
'{{ displayName }}',
{{ locked }},
'{{ variableDeclarations }}',
'{{ description }}',
'{{ audioProcessingConfig }}',
'{{ dataStoreSettings }}',
'{{ evaluationMetricsThresholds }}',
'{{ rootAgent }}',
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
    - name: timeZoneSettings
      description: |
        Optional. TimeZone settings of the app.
      value:
        timeZone: "{{ timeZone }}"
    - name: metadata
      value: "{{ metadata }}"
      description: |
        Optional. Metadata about the app. This field can be used to store additional information relevant to the app's details or intended usages.
    - name: vpcScSettings
      description: |
        Optional. VPC-SC settings for the app.
      value:
        allowedOrigins:
          - "{{ allowedOrigins }}"
    - name: loggingSettings
      description: |
        Optional. Logging settings of the app.
      value:
        unredactedAudioRecordingConfig:
          gcsBucket: "{{ gcsBucket }}"
          gcsPathPrefix: "{{ gcsPathPrefix }}"
        conversationLoggingSettings:
          disableConversationLogging: {{ disableConversationLogging }}
          retentionWindow: "{{ retentionWindow }}"
        evaluationAudioRecordingConfig:
          gcsBucket: "{{ gcsBucket }}"
          gcsPathPrefix: "{{ gcsPathPrefix }}"
        audioRecordingConfig:
          gcsBucket: "{{ gcsBucket }}"
          gcsPathPrefix: "{{ gcsPathPrefix }}"
        bigqueryExportSettings:
          project: "{{ project }}"
          dataset: "{{ dataset }}"
          enabled: {{ enabled }}
        metricAnalysisSettings:
          llmMetricsOptedOut: {{ llmMetricsOptedOut }}
        redactionConfig:
          deidentifyTemplate: "{{ deidentifyTemplate }}"
          enableRedaction: {{ enableRedaction }}
          inspectTemplate: "{{ inspectTemplate }}"
        unredactedBigqueryExportSettings:
          project: "{{ project }}"
          dataset: "{{ dataset }}"
          enabled: {{ enabled }}
        cloudLoggingSettings:
          enableCloudLogging: {{ enableCloudLogging }}
    - name: toolExecutionMode
      value: "{{ toolExecutionMode }}"
      description: |
        Optional. The tool execution mode for the app. If not provided, will default to PARALLEL.
      valid_values: ['TOOL_EXECUTION_MODE_UNSPECIFIED', 'PARALLEL', 'SEQUENTIAL']
    - name: defaultChannelProfile
      description: |
        Optional. The default channel profile used by the app.
      value:
        channelType: "{{ channelType }}"
        disableBargeInControl: {{ disableBargeInControl }}
        webWidgetConfig:
          theme: "{{ theme }}"
          webWidgetTitle: "{{ webWidgetTitle }}"
          modality: "{{ modality }}"
          securitySettings:
            enableRecaptcha: {{ enableRecaptcha }}
            allowedOrigins:
              - "{{ allowedOrigins }}"
            enablePublicAccess: {{ enablePublicAccess }}
            enableOriginCheck: {{ enableOriginCheck }}
        noiseSuppressionLevel: "{{ noiseSuppressionLevel }}"
        profileId: "{{ profileId }}"
        whatsappConfig:
          phoneNumber: "{{ phoneNumber }}"
          displayName: "{{ displayName }}"
          wabaId: "{{ wabaId }}"
          phoneNumberId: "{{ phoneNumberId }}"
          thumbnailUrl: "{{ thumbnailUrl }}"
          description: "{{ description }}"
        instagramConfig:
          instagramAccountId: "{{ instagramAccountId }}"
          thumbnailUrl: "{{ thumbnailUrl }}"
          description: "{{ description }}"
          displayName: "{{ displayName }}"
        personaProperty:
          persona: "{{ persona }}"
        disableDtmf: {{ disableDtmf }}
    - name: clientCertificateSettings
      description: |
        Optional. The default client certificate settings for the app.
      value:
        tlsCertificate: "{{ tlsCertificate }}"
        passphrase: "{{ passphrase }}"
        privateKey: "{{ privateKey }}"
    - name: errorHandlingSettings
      description: |
        Optional. Error handling settings of the app.
      value:
        errorHandlingStrategy: "{{ errorHandlingStrategy }}"
        fallbackResponseConfig:
          customFallbackMessages: "{{ customFallbackMessages }}"
          maxFallbackAttempts: {{ maxFallbackAttempts }}
        endSessionConfig:
          escalateSession: {{ escalateSession }}
    - name: languageSettings
      description: |
        Optional. Language settings of the app.
      value:
        supportedLanguageCodes:
          - "{{ supportedLanguageCodes }}"
        defaultLanguageCode: "{{ defaultLanguageCode }}"
        fallbackAction: "{{ fallbackAction }}"
        enableMultilingualSupport: {{ enableMultilingualSupport }}
    - name: modelSettings
      description: |
        Optional. The default LLM model settings for the app. Individual resources (e.g. agents, guardrails) can override these configurations as needed.
      value:
        model: "{{ model }}"
        temperature: {{ temperature }}
    - name: pinned
      value: {{ pinned }}
      description: |
        Optional. Whether the app is pinned in the app list.
    - name: globalInstruction
      value: "{{ globalInstruction }}"
      description: |
        Optional. Instructions for all the agents in the app. You can use this instruction to set up a stable identity or personality across all the agents.
    - name: guardrails
      value:
        - "{{ guardrails }}"
      description: |
        Optional. List of guardrails for the app. Format: \`projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}\`
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The unique identifier of the app. Format: \`projects/{project}/locations/{location}/apps/{app}\`
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. Display name of the app.
    - name: locked
      value: {{ locked }}
      description: |
        Optional. Indicates whether the app is locked for changes. If the app is locked, modifications to the app resources will be rejected.
    - name: variableDeclarations
      description: |
        Optional. The declarations of the variables.
      value:
        - name: "{{ name }}"
          schema:
            type: "{{ type }}"
            minimum: {{ minimum }}
            items:
              type: "{{ type }}"
              minimum: {{ minimum }}
              items:
                type: "{{ type }}"
                minimum: {{ minimum }}
                items:
                  type: "{{ type }}"
                  minimum: {{ minimum }}
                  items: "{{ items }}"
                  nullable: {{ nullable }}
                  maximum: {{ maximum }}
                  description: "{{ description }}"
                  default: "{{ default }}"
                  ref: "{{ ref }}"
                  minItems: "{{ minItems }}"
                  anyOf: "{{ anyOf }}"
                  enum: "{{ enum }}"
                  required: "{{ required }}"
                  properties: "{{ properties }}"
                  prefixItems: "{{ prefixItems }}"
                  defs: "{{ defs }}"
                  maxItems: "{{ maxItems }}"
                  uniqueItems: {{ uniqueItems }}
                  additionalProperties: "{{ additionalProperties }}"
                  title: "{{ title }}"
                nullable: {{ nullable }}
                maximum: {{ maximum }}
                description: "{{ description }}"
                default: "{{ default }}"
                ref: "{{ ref }}"
                minItems: "{{ minItems }}"
                anyOf:
                  - type: "{{ type }}"
                    minimum: {{ minimum }}
                    items:
                      type: "{{ type }}"
                      minimum: {{ minimum }}
                      items: "{{ items }}"
                      nullable: {{ nullable }}
                      maximum: {{ maximum }}
                      description: "{{ description }}"
                      default: "{{ default }}"
                      ref: "{{ ref }}"
                      minItems: "{{ minItems }}"
                      anyOf: "{{ anyOf }}"
                      enum: "{{ enum }}"
                      required: "{{ required }}"
                      properties: "{{ properties }}"
                      prefixItems: "{{ prefixItems }}"
                      defs: "{{ defs }}"
                      maxItems: "{{ maxItems }}"
                      uniqueItems: {{ uniqueItems }}
                      additionalProperties: "{{ additionalProperties }}"
                      title: "{{ title }}"
                    nullable: {{ nullable }}
                    maximum: {{ maximum }}
                    description: "{{ description }}"
                    default: "{{ default }}"
                    ref: "{{ ref }}"
                    minItems: "{{ minItems }}"
                    anyOf: "{{ anyOf }}"
                    enum: "{{ enum }}"
                    required: "{{ required }}"
                    properties: "{{ properties }}"
                    prefixItems: "{{ prefixItems }}"
                    defs: "{{ defs }}"
                    maxItems: "{{ maxItems }}"
                    uniqueItems: {{ uniqueItems }}
                    additionalProperties:
                      type: "{{ type }}"
                      minimum: {{ minimum }}
                      items: "{{ items }}"
                      nullable: {{ nullable }}
                      maximum: {{ maximum }}
                      description: "{{ description }}"
                      default: "{{ default }}"
                      ref: "{{ ref }}"
                      minItems: "{{ minItems }}"
                      anyOf: "{{ anyOf }}"
                      enum: "{{ enum }}"
                      required: "{{ required }}"
                      properties: "{{ properties }}"
                      prefixItems: "{{ prefixItems }}"
                      defs: "{{ defs }}"
                      maxItems: "{{ maxItems }}"
                      uniqueItems: {{ uniqueItems }}
                      additionalProperties: "{{ additionalProperties }}"
                      title: "{{ title }}"
                    title: "{{ title }}"
                enum:
                  - "{{ enum }}"
                required:
                  - "{{ required }}"
                properties: "{{ properties }}"
                prefixItems:
                  - type: "{{ type }}"
                    minimum: {{ minimum }}
                    items:
                      type: "{{ type }}"
                      minimum: {{ minimum }}
                      items: "{{ items }}"
                      nullable: {{ nullable }}
                      maximum: {{ maximum }}
                      description: "{{ description }}"
                      default: "{{ default }}"
                      ref: "{{ ref }}"
                      minItems: "{{ minItems }}"
                      anyOf: "{{ anyOf }}"
                      enum: "{{ enum }}"
                      required: "{{ required }}"
                      properties: "{{ properties }}"
                      prefixItems: "{{ prefixItems }}"
                      defs: "{{ defs }}"
                      maxItems: "{{ maxItems }}"
                      uniqueItems: {{ uniqueItems }}
                      additionalProperties: "{{ additionalProperties }}"
                      title: "{{ title }}"
                    nullable: {{ nullable }}
                    maximum: {{ maximum }}
                    description: "{{ description }}"
                    default: "{{ default }}"
                    ref: "{{ ref }}"
                    minItems: "{{ minItems }}"
                    anyOf: "{{ anyOf }}"
                    enum: "{{ enum }}"
                    required: "{{ required }}"
                    properties: "{{ properties }}"
                    prefixItems: "{{ prefixItems }}"
                    defs: "{{ defs }}"
                    maxItems: "{{ maxItems }}"
                    uniqueItems: {{ uniqueItems }}
                    additionalProperties:
                      type: "{{ type }}"
                      minimum: {{ minimum }}
                      items: "{{ items }}"
                      nullable: {{ nullable }}
                      maximum: {{ maximum }}
                      description: "{{ description }}"
                      default: "{{ default }}"
                      ref: "{{ ref }}"
                      minItems: "{{ minItems }}"
                      anyOf: "{{ anyOf }}"
                      enum: "{{ enum }}"
                      required: "{{ required }}"
                      properties: "{{ properties }}"
                      prefixItems: "{{ prefixItems }}"
                      defs: "{{ defs }}"
                      maxItems: "{{ maxItems }}"
                      uniqueItems: {{ uniqueItems }}
                      additionalProperties: "{{ additionalProperties }}"
                      title: "{{ title }}"
                    title: "{{ title }}"
                defs: "{{ defs }}"
                maxItems: "{{ maxItems }}"
                uniqueItems: {{ uniqueItems }}
                additionalProperties:
                  type: "{{ type }}"
                  minimum: {{ minimum }}
                  items: "{{ items }}"
                  nullable: {{ nullable }}
                  maximum: {{ maximum }}
                  description: "{{ description }}"
                  default: "{{ default }}"
                  ref: "{{ ref }}"
                  minItems: "{{ minItems }}"
                  anyOf: "{{ anyOf }}"
                  enum: "{{ enum }}"
                  required: "{{ required }}"
                  properties: "{{ properties }}"
                  prefixItems: "{{ prefixItems }}"
                  defs: "{{ defs }}"
                  maxItems: "{{ maxItems }}"
                  uniqueItems: {{ uniqueItems }}
                  additionalProperties: "{{ additionalProperties }}"
                  title: "{{ title }}"
                title: "{{ title }}"
              nullable: {{ nullable }}
              maximum: {{ maximum }}
              description: "{{ description }}"
              default: "{{ default }}"
              ref: "{{ ref }}"
              minItems: "{{ minItems }}"
              anyOf:
                - type: "{{ type }}"
                  minimum: {{ minimum }}
                  items:
                    type: "{{ type }}"
                    minimum: {{ minimum }}
                    items: "{{ items }}"
                    nullable: {{ nullable }}
                    maximum: {{ maximum }}
                    description: "{{ description }}"
                    default: "{{ default }}"
                    ref: "{{ ref }}"
                    minItems: "{{ minItems }}"
                    anyOf: "{{ anyOf }}"
                    enum: "{{ enum }}"
                    required: "{{ required }}"
                    properties: "{{ properties }}"
                    prefixItems: "{{ prefixItems }}"
                    defs: "{{ defs }}"
                    maxItems: "{{ maxItems }}"
                    uniqueItems: {{ uniqueItems }}
                    additionalProperties: "{{ additionalProperties }}"
                    title: "{{ title }}"
                  nullable: {{ nullable }}
                  maximum: {{ maximum }}
                  description: "{{ description }}"
                  default: "{{ default }}"
                  ref: "{{ ref }}"
                  minItems: "{{ minItems }}"
                  anyOf: "{{ anyOf }}"
                  enum: "{{ enum }}"
                  required: "{{ required }}"
                  properties: "{{ properties }}"
                  prefixItems: "{{ prefixItems }}"
                  defs: "{{ defs }}"
                  maxItems: "{{ maxItems }}"
                  uniqueItems: {{ uniqueItems }}
                  additionalProperties:
                    type: "{{ type }}"
                    minimum: {{ minimum }}
                    items: "{{ items }}"
                    nullable: {{ nullable }}
                    maximum: {{ maximum }}
                    description: "{{ description }}"
                    default: "{{ default }}"
                    ref: "{{ ref }}"
                    minItems: "{{ minItems }}"
                    anyOf: "{{ anyOf }}"
                    enum: "{{ enum }}"
                    required: "{{ required }}"
                    properties: "{{ properties }}"
                    prefixItems: "{{ prefixItems }}"
                    defs: "{{ defs }}"
                    maxItems: "{{ maxItems }}"
                    uniqueItems: {{ uniqueItems }}
                    additionalProperties: "{{ additionalProperties }}"
                    title: "{{ title }}"
                  title: "{{ title }}"
              enum:
                - "{{ enum }}"
              required:
                - "{{ required }}"
              properties: "{{ properties }}"
              prefixItems:
                - type: "{{ type }}"
                  minimum: {{ minimum }}
                  items:
                    type: "{{ type }}"
                    minimum: {{ minimum }}
                    items: "{{ items }}"
                    nullable: {{ nullable }}
                    maximum: {{ maximum }}
                    description: "{{ description }}"
                    default: "{{ default }}"
                    ref: "{{ ref }}"
                    minItems: "{{ minItems }}"
                    anyOf: "{{ anyOf }}"
                    enum: "{{ enum }}"
                    required: "{{ required }}"
                    properties: "{{ properties }}"
                    prefixItems: "{{ prefixItems }}"
                    defs: "{{ defs }}"
                    maxItems: "{{ maxItems }}"
                    uniqueItems: {{ uniqueItems }}
                    additionalProperties: "{{ additionalProperties }}"
                    title: "{{ title }}"
                  nullable: {{ nullable }}
                  maximum: {{ maximum }}
                  description: "{{ description }}"
                  default: "{{ default }}"
                  ref: "{{ ref }}"
                  minItems: "{{ minItems }}"
                  anyOf: "{{ anyOf }}"
                  enum: "{{ enum }}"
                  required: "{{ required }}"
                  properties: "{{ properties }}"
                  prefixItems: "{{ prefixItems }}"
                  defs: "{{ defs }}"
                  maxItems: "{{ maxItems }}"
                  uniqueItems: {{ uniqueItems }}
                  additionalProperties:
                    type: "{{ type }}"
                    minimum: {{ minimum }}
                    items: "{{ items }}"
                    nullable: {{ nullable }}
                    maximum: {{ maximum }}
                    description: "{{ description }}"
                    default: "{{ default }}"
                    ref: "{{ ref }}"
                    minItems: "{{ minItems }}"
                    anyOf: "{{ anyOf }}"
                    enum: "{{ enum }}"
                    required: "{{ required }}"
                    properties: "{{ properties }}"
                    prefixItems: "{{ prefixItems }}"
                    defs: "{{ defs }}"
                    maxItems: "{{ maxItems }}"
                    uniqueItems: {{ uniqueItems }}
                    additionalProperties: "{{ additionalProperties }}"
                    title: "{{ title }}"
                  title: "{{ title }}"
              defs: "{{ defs }}"
              maxItems: "{{ maxItems }}"
              uniqueItems: {{ uniqueItems }}
              additionalProperties:
                type: "{{ type }}"
                minimum: {{ minimum }}
                items:
                  type: "{{ type }}"
                  minimum: {{ minimum }}
                  items: "{{ items }}"
                  nullable: {{ nullable }}
                  maximum: {{ maximum }}
                  description: "{{ description }}"
                  default: "{{ default }}"
                  ref: "{{ ref }}"
                  minItems: "{{ minItems }}"
                  anyOf: "{{ anyOf }}"
                  enum: "{{ enum }}"
                  required: "{{ required }}"
                  properties: "{{ properties }}"
                  prefixItems: "{{ prefixItems }}"
                  defs: "{{ defs }}"
                  maxItems: "{{ maxItems }}"
                  uniqueItems: {{ uniqueItems }}
                  additionalProperties: "{{ additionalProperties }}"
                  title: "{{ title }}"
                nullable: {{ nullable }}
                maximum: {{ maximum }}
                description: "{{ description }}"
                default: "{{ default }}"
                ref: "{{ ref }}"
                minItems: "{{ minItems }}"
                anyOf:
                  - type: "{{ type }}"
                    minimum: {{ minimum }}
                    items:
                      type: "{{ type }}"
                      minimum: {{ minimum }}
                      items: "{{ items }}"
                      nullable: {{ nullable }}
                      maximum: {{ maximum }}
                      description: "{{ description }}"
                      default: "{{ default }}"
                      ref: "{{ ref }}"
                      minItems: "{{ minItems }}"
                      anyOf: "{{ anyOf }}"
                      enum: "{{ enum }}"
                      required: "{{ required }}"
                      properties: "{{ properties }}"
                      prefixItems: "{{ prefixItems }}"
                      defs: "{{ defs }}"
                      maxItems: "{{ maxItems }}"
                      uniqueItems: {{ uniqueItems }}
                      additionalProperties: "{{ additionalProperties }}"
                      title: "{{ title }}"
                    nullable: {{ nullable }}
                    maximum: {{ maximum }}
                    description: "{{ description }}"
                    default: "{{ default }}"
                    ref: "{{ ref }}"
                    minItems: "{{ minItems }}"
                    anyOf: "{{ anyOf }}"
                    enum: "{{ enum }}"
                    required: "{{ required }}"
                    properties: "{{ properties }}"
                    prefixItems: "{{ prefixItems }}"
                    defs: "{{ defs }}"
                    maxItems: "{{ maxItems }}"
                    uniqueItems: {{ uniqueItems }}
                    additionalProperties:
                      type: "{{ type }}"
                      minimum: {{ minimum }}
                      items: "{{ items }}"
                      nullable: {{ nullable }}
                      maximum: {{ maximum }}
                      description: "{{ description }}"
                      default: "{{ default }}"
                      ref: "{{ ref }}"
                      minItems: "{{ minItems }}"
                      anyOf: "{{ anyOf }}"
                      enum: "{{ enum }}"
                      required: "{{ required }}"
                      properties: "{{ properties }}"
                      prefixItems: "{{ prefixItems }}"
                      defs: "{{ defs }}"
                      maxItems: "{{ maxItems }}"
                      uniqueItems: {{ uniqueItems }}
                      additionalProperties: "{{ additionalProperties }}"
                      title: "{{ title }}"
                    title: "{{ title }}"
                enum:
                  - "{{ enum }}"
                required:
                  - "{{ required }}"
                properties: "{{ properties }}"
                prefixItems:
                  - type: "{{ type }}"
                    minimum: {{ minimum }}
                    items:
                      type: "{{ type }}"
                      minimum: {{ minimum }}
                      items: "{{ items }}"
                      nullable: {{ nullable }}
                      maximum: {{ maximum }}
                      description: "{{ description }}"
                      default: "{{ default }}"
                      ref: "{{ ref }}"
                      minItems: "{{ minItems }}"
                      anyOf: "{{ anyOf }}"
                      enum: "{{ enum }}"
                      required: "{{ required }}"
                      properties: "{{ properties }}"
                      prefixItems: "{{ prefixItems }}"
                      defs: "{{ defs }}"
                      maxItems: "{{ maxItems }}"
                      uniqueItems: {{ uniqueItems }}
                      additionalProperties: "{{ additionalProperties }}"
                      title: "{{ title }}"
                    nullable: {{ nullable }}
                    maximum: {{ maximum }}
                    description: "{{ description }}"
                    default: "{{ default }}"
                    ref: "{{ ref }}"
                    minItems: "{{ minItems }}"
                    anyOf: "{{ anyOf }}"
                    enum: "{{ enum }}"
                    required: "{{ required }}"
                    properties: "{{ properties }}"
                    prefixItems: "{{ prefixItems }}"
                    defs: "{{ defs }}"
                    maxItems: "{{ maxItems }}"
                    uniqueItems: {{ uniqueItems }}
                    additionalProperties:
                      type: "{{ type }}"
                      minimum: {{ minimum }}
                      items: "{{ items }}"
                      nullable: {{ nullable }}
                      maximum: {{ maximum }}
                      description: "{{ description }}"
                      default: "{{ default }}"
                      ref: "{{ ref }}"
                      minItems: "{{ minItems }}"
                      anyOf: "{{ anyOf }}"
                      enum: "{{ enum }}"
                      required: "{{ required }}"
                      properties: "{{ properties }}"
                      prefixItems: "{{ prefixItems }}"
                      defs: "{{ defs }}"
                      maxItems: "{{ maxItems }}"
                      uniqueItems: {{ uniqueItems }}
                      additionalProperties: "{{ additionalProperties }}"
                      title: "{{ title }}"
                    title: "{{ title }}"
                defs: "{{ defs }}"
                maxItems: "{{ maxItems }}"
                uniqueItems: {{ uniqueItems }}
                additionalProperties:
                  type: "{{ type }}"
                  minimum: {{ minimum }}
                  items: "{{ items }}"
                  nullable: {{ nullable }}
                  maximum: {{ maximum }}
                  description: "{{ description }}"
                  default: "{{ default }}"
                  ref: "{{ ref }}"
                  minItems: "{{ minItems }}"
                  anyOf: "{{ anyOf }}"
                  enum: "{{ enum }}"
                  required: "{{ required }}"
                  properties: "{{ properties }}"
                  prefixItems: "{{ prefixItems }}"
                  defs: "{{ defs }}"
                  maxItems: "{{ maxItems }}"
                  uniqueItems: {{ uniqueItems }}
                  additionalProperties: "{{ additionalProperties }}"
                  title: "{{ title }}"
                title: "{{ title }}"
              title: "{{ title }}"
            nullable: {{ nullable }}
            maximum: {{ maximum }}
            description: "{{ description }}"
            default: "{{ default }}"
            ref: "{{ ref }}"
            minItems: "{{ minItems }}"
            anyOf:
              - type: "{{ type }}"
                minimum: {{ minimum }}
                items:
                  type: "{{ type }}"
                  minimum: {{ minimum }}
                  items:
                    type: "{{ type }}"
                    minimum: {{ minimum }}
                    items: "{{ items }}"
                    nullable: {{ nullable }}
                    maximum: {{ maximum }}
                    description: "{{ description }}"
                    default: "{{ default }}"
                    ref: "{{ ref }}"
                    minItems: "{{ minItems }}"
                    anyOf: "{{ anyOf }}"
                    enum: "{{ enum }}"
                    required: "{{ required }}"
                    properties: "{{ properties }}"
                    prefixItems: "{{ prefixItems }}"
                    defs: "{{ defs }}"
                    maxItems: "{{ maxItems }}"
                    uniqueItems: {{ uniqueItems }}
                    additionalProperties: "{{ additionalProperties }}"
                    title: "{{ title }}"
                  nullable: {{ nullable }}
                  maximum: {{ maximum }}
                  description: "{{ description }}"
                  default: "{{ default }}"
                  ref: "{{ ref }}"
                  minItems: "{{ minItems }}"
                  anyOf:
                    - type: "{{ type }}"
                      minimum: {{ minimum }}
                      items:
                        type: "{{ type }}"
                        minimum: {{ minimum }}
                        items: "{{ items }}"
                        nullable: {{ nullable }}
                        maximum: {{ maximum }}
                        description: "{{ description }}"
                        default: "{{ default }}"
                        ref: "{{ ref }}"
                        minItems: "{{ minItems }}"
                        anyOf: "{{ anyOf }}"
                        enum: "{{ enum }}"
                        required: "{{ required }}"
                        properties: "{{ properties }}"
                        prefixItems: "{{ prefixItems }}"
                        defs: "{{ defs }}"
                        maxItems: "{{ maxItems }}"
                        uniqueItems: {{ uniqueItems }}
                        additionalProperties: "{{ additionalProperties }}"
                        title: "{{ title }}"
                      nullable: {{ nullable }}
                      maximum: {{ maximum }}
                      description: "{{ description }}"
                      default: "{{ default }}"
                      ref: "{{ ref }}"
                      minItems: "{{ minItems }}"
                      anyOf: "{{ anyOf }}"
                      enum: "{{ enum }}"
                      required: "{{ required }}"
                      properties: "{{ properties }}"
                      prefixItems: "{{ prefixItems }}"
                      defs: "{{ defs }}"
                      maxItems: "{{ maxItems }}"
                      uniqueItems: {{ uniqueItems }}
                      additionalProperties:
                        type: "{{ type }}"
                        minimum: {{ minimum }}
                        items: "{{ items }}"
                        nullable: {{ nullable }}
                        maximum: {{ maximum }}
                        description: "{{ description }}"
                        default: "{{ default }}"
                        ref: "{{ ref }}"
                        minItems: "{{ minItems }}"
                        anyOf: "{{ anyOf }}"
                        enum: "{{ enum }}"
                        required: "{{ required }}"
                        properties: "{{ properties }}"
                        prefixItems: "{{ prefixItems }}"
                        defs: "{{ defs }}"
                        maxItems: "{{ maxItems }}"
                        uniqueItems: {{ uniqueItems }}
                        additionalProperties: "{{ additionalProperties }}"
                        title: "{{ title }}"
                      title: "{{ title }}"
                  enum:
                    - "{{ enum }}"
                  required:
                    - "{{ required }}"
                  properties: "{{ properties }}"
                  prefixItems:
                    - type: "{{ type }}"
                      minimum: {{ minimum }}
                      items:
                        type: "{{ type }}"
                        minimum: {{ minimum }}
                        items: "{{ items }}"
                        nullable: {{ nullable }}
                        maximum: {{ maximum }}
                        description: "{{ description }}"
                        default: "{{ default }}"
                        ref: "{{ ref }}"
                        minItems: "{{ minItems }}"
                        anyOf: "{{ anyOf }}"
                        enum: "{{ enum }}"
                        required: "{{ required }}"
                        properties: "{{ properties }}"
                        prefixItems: "{{ prefixItems }}"
                        defs: "{{ defs }}"
                        maxItems: "{{ maxItems }}"
                        uniqueItems: {{ uniqueItems }}
                        additionalProperties: "{{ additionalProperties }}"
                        title: "{{ title }}"
                      nullable: {{ nullable }}
                      maximum: {{ maximum }}
                      description: "{{ description }}"
                      default: "{{ default }}"
                      ref: "{{ ref }}"
                      minItems: "{{ minItems }}"
                      anyOf: "{{ anyOf }}"
                      enum: "{{ enum }}"
                      required: "{{ required }}"
                      properties: "{{ properties }}"
                      prefixItems: "{{ prefixItems }}"
                      defs: "{{ defs }}"
                      maxItems: "{{ maxItems }}"
                      uniqueItems: {{ uniqueItems }}
                      additionalProperties:
                        type: "{{ type }}"
                        minimum: {{ minimum }}
                        items: "{{ items }}"
                        nullable: {{ nullable }}
                        maximum: {{ maximum }}
                        description: "{{ description }}"
                        default: "{{ default }}"
                        ref: "{{ ref }}"
                        minItems: "{{ minItems }}"
                        anyOf: "{{ anyOf }}"
                        enum: "{{ enum }}"
                        required: "{{ required }}"
                        properties: "{{ properties }}"
                        prefixItems: "{{ prefixItems }}"
                        defs: "{{ defs }}"
                        maxItems: "{{ maxItems }}"
                        uniqueItems: {{ uniqueItems }}
                        additionalProperties: "{{ additionalProperties }}"
                        title: "{{ title }}"
                      title: "{{ title }}"
                  defs: "{{ defs }}"
                  maxItems: "{{ maxItems }}"
                  uniqueItems: {{ uniqueItems }}
                  additionalProperties:
                    type: "{{ type }}"
                    minimum: {{ minimum }}
                    items: "{{ items }}"
                    nullable: {{ nullable }}
                    maximum: {{ maximum }}
                    description: "{{ description }}"
                    default: "{{ default }}"
                    ref: "{{ ref }}"
                    minItems: "{{ minItems }}"
                    anyOf: "{{ anyOf }}"
                    enum: "{{ enum }}"
                    required: "{{ required }}"
                    properties: "{{ properties }}"
                    prefixItems: "{{ prefixItems }}"
                    defs: "{{ defs }}"
                    maxItems: "{{ maxItems }}"
                    uniqueItems: {{ uniqueItems }}
                    additionalProperties: "{{ additionalProperties }}"
                    title: "{{ title }}"
                  title: "{{ title }}"
                nullable: {{ nullable }}
                maximum: {{ maximum }}
                description: "{{ description }}"
                default: "{{ default }}"
                ref: "{{ ref }}"
                minItems: "{{ minItems }}"
                anyOf: "{{ anyOf }}"
                enum: "{{ enum }}"
                required: "{{ required }}"
                properties: "{{ properties }}"
                prefixItems: "{{ prefixItems }}"
                defs: "{{ defs }}"
                maxItems: "{{ maxItems }}"
                uniqueItems: {{ uniqueItems }}
                additionalProperties:
                  type: "{{ type }}"
                  minimum: {{ minimum }}
                  items:
                    type: "{{ type }}"
                    minimum: {{ minimum }}
                    items: "{{ items }}"
                    nullable: {{ nullable }}
                    maximum: {{ maximum }}
                    description: "{{ description }}"
                    default: "{{ default }}"
                    ref: "{{ ref }}"
                    minItems: "{{ minItems }}"
                    anyOf: "{{ anyOf }}"
                    enum: "{{ enum }}"
                    required: "{{ required }}"
                    properties: "{{ properties }}"
                    prefixItems: "{{ prefixItems }}"
                    defs: "{{ defs }}"
                    maxItems: "{{ maxItems }}"
                    uniqueItems: {{ uniqueItems }}
                    additionalProperties: "{{ additionalProperties }}"
                    title: "{{ title }}"
                  nullable: {{ nullable }}
                  maximum: {{ maximum }}
                  description: "{{ description }}"
                  default: "{{ default }}"
                  ref: "{{ ref }}"
                  minItems: "{{ minItems }}"
                  anyOf:
                    - type: "{{ type }}"
                      minimum: {{ minimum }}
                      items:
                        type: "{{ type }}"
                        minimum: {{ minimum }}
                        items: "{{ items }}"
                        nullable: {{ nullable }}
                        maximum: {{ maximum }}
                        description: "{{ description }}"
                        default: "{{ default }}"
                        ref: "{{ ref }}"
                        minItems: "{{ minItems }}"
                        anyOf: "{{ anyOf }}"
                        enum: "{{ enum }}"
                        required: "{{ required }}"
                        properties: "{{ properties }}"
                        prefixItems: "{{ prefixItems }}"
                        defs: "{{ defs }}"
                        maxItems: "{{ maxItems }}"
                        uniqueItems: {{ uniqueItems }}
                        additionalProperties: "{{ additionalProperties }}"
                        title: "{{ title }}"
                      nullable: {{ nullable }}
                      maximum: {{ maximum }}
                      description: "{{ description }}"
                      default: "{{ default }}"
                      ref: "{{ ref }}"
                      minItems: "{{ minItems }}"
                      anyOf: "{{ anyOf }}"
                      enum: "{{ enum }}"
                      required: "{{ required }}"
                      properties: "{{ properties }}"
                      prefixItems: "{{ prefixItems }}"
                      defs: "{{ defs }}"
                      maxItems: "{{ maxItems }}"
                      uniqueItems: {{ uniqueItems }}
                      additionalProperties:
                        type: "{{ type }}"
                        minimum: {{ minimum }}
                        items: "{{ items }}"
                        nullable: {{ nullable }}
                        maximum: {{ maximum }}
                        description: "{{ description }}"
                        default: "{{ default }}"
                        ref: "{{ ref }}"
                        minItems: "{{ minItems }}"
                        anyOf: "{{ anyOf }}"
                        enum: "{{ enum }}"
                        required: "{{ required }}"
                        properties: "{{ properties }}"
                        prefixItems: "{{ prefixItems }}"
                        defs: "{{ defs }}"
                        maxItems: "{{ maxItems }}"
                        uniqueItems: {{ uniqueItems }}
                        additionalProperties: "{{ additionalProperties }}"
                        title: "{{ title }}"
                      title: "{{ title }}"
                  enum:
                    - "{{ enum }}"
                  required:
                    - "{{ required }}"
                  properties: "{{ properties }}"
                  prefixItems:
                    - type: "{{ type }}"
                      minimum: {{ minimum }}
                      items:
                        type: "{{ type }}"
                        minimum: {{ minimum }}
                        items: "{{ items }}"
                        nullable: {{ nullable }}
                        maximum: {{ maximum }}
                        description: "{{ description }}"
                        default: "{{ default }}"
                        ref: "{{ ref }}"
                        minItems: "{{ minItems }}"
                        anyOf: "{{ anyOf }}"
                        enum: "{{ enum }}"
                        required: "{{ required }}"
                        properties: "{{ properties }}"
                        prefixItems: "{{ prefixItems }}"
                        defs: "{{ defs }}"
                        maxItems: "{{ maxItems }}"
                        uniqueItems: {{ uniqueItems }}
                        additionalProperties: "{{ additionalProperties }}"
                        title: "{{ title }}"
                      nullable: {{ nullable }}
                      maximum: {{ maximum }}
                      description: "{{ description }}"
                      default: "{{ default }}"
                      ref: "{{ ref }}"
                      minItems: "{{ minItems }}"
                      anyOf: "{{ anyOf }}"
                      enum: "{{ enum }}"
                      required: "{{ required }}"
                      properties: "{{ properties }}"
                      prefixItems: "{{ prefixItems }}"
                      defs: "{{ defs }}"
                      maxItems: "{{ maxItems }}"
                      uniqueItems: {{ uniqueItems }}
                      additionalProperties:
                        type: "{{ type }}"
                        minimum: {{ minimum }}
                        items: "{{ items }}"
                        nullable: {{ nullable }}
                        maximum: {{ maximum }}
                        description: "{{ description }}"
                        default: "{{ default }}"
                        ref: "{{ ref }}"
                        minItems: "{{ minItems }}"
                        anyOf: "{{ anyOf }}"
                        enum: "{{ enum }}"
                        required: "{{ required }}"
                        properties: "{{ properties }}"
                        prefixItems: "{{ prefixItems }}"
                        defs: "{{ defs }}"
                        maxItems: "{{ maxItems }}"
                        uniqueItems: {{ uniqueItems }}
                        additionalProperties: "{{ additionalProperties }}"
                        title: "{{ title }}"
                      title: "{{ title }}"
                  defs: "{{ defs }}"
                  maxItems: "{{ maxItems }}"
                  uniqueItems: {{ uniqueItems }}
                  additionalProperties:
                    type: "{{ type }}"
                    minimum: {{ minimum }}
                    items: "{{ items }}"
                    nullable: {{ nullable }}
                    maximum: {{ maximum }}
                    description: "{{ description }}"
                    default: "{{ default }}"
                    ref: "{{ ref }}"
                    minItems: "{{ minItems }}"
                    anyOf: "{{ anyOf }}"
                    enum: "{{ enum }}"
                    required: "{{ required }}"
                    properties: "{{ properties }}"
                    prefixItems: "{{ prefixItems }}"
                    defs: "{{ defs }}"
                    maxItems: "{{ maxItems }}"
                    uniqueItems: {{ uniqueItems }}
                    additionalProperties: "{{ additionalProperties }}"
                    title: "{{ title }}"
                  title: "{{ title }}"
                title: "{{ title }}"
            enum:
              - "{{ enum }}"
            required:
              - "{{ required }}"
            properties: "{{ properties }}"
            prefixItems:
              - type: "{{ type }}"
                minimum: {{ minimum }}
                items:
                  type: "{{ type }}"
                  minimum: {{ minimum }}
                  items:
                    type: "{{ type }}"
                    minimum: {{ minimum }}
                    items: "{{ items }}"
                    nullable: {{ nullable }}
                    maximum: {{ maximum }}
                    description: "{{ description }}"
                    default: "{{ default }}"
                    ref: "{{ ref }}"
                    minItems: "{{ minItems }}"
                    anyOf: "{{ anyOf }}"
                    enum: "{{ enum }}"
                    required: "{{ required }}"
                    properties: "{{ properties }}"
                    prefixItems: "{{ prefixItems }}"
                    defs: "{{ defs }}"
                    maxItems: "{{ maxItems }}"
                    uniqueItems: {{ uniqueItems }}
                    additionalProperties: "{{ additionalProperties }}"
                    title: "{{ title }}"
                  nullable: {{ nullable }}
                  maximum: {{ maximum }}
                  description: "{{ description }}"
                  default: "{{ default }}"
                  ref: "{{ ref }}"
                  minItems: "{{ minItems }}"
                  anyOf:
                    - type: "{{ type }}"
                      minimum: {{ minimum }}
                      items:
                        type: "{{ type }}"
                        minimum: {{ minimum }}
                        items: "{{ items }}"
                        nullable: {{ nullable }}
                        maximum: {{ maximum }}
                        description: "{{ description }}"
                        default: "{{ default }}"
                        ref: "{{ ref }}"
                        minItems: "{{ minItems }}"
                        anyOf: "{{ anyOf }}"
                        enum: "{{ enum }}"
                        required: "{{ required }}"
                        properties: "{{ properties }}"
                        prefixItems: "{{ prefixItems }}"
                        defs: "{{ defs }}"
                        maxItems: "{{ maxItems }}"
                        uniqueItems: {{ uniqueItems }}
                        additionalProperties: "{{ additionalProperties }}"
                        title: "{{ title }}"
                      nullable: {{ nullable }}
                      maximum: {{ maximum }}
                      description: "{{ description }}"
                      default: "{{ default }}"
                      ref: "{{ ref }}"
                      minItems: "{{ minItems }}"
                      anyOf: "{{ anyOf }}"
                      enum: "{{ enum }}"
                      required: "{{ required }}"
                      properties: "{{ properties }}"
                      prefixItems: "{{ prefixItems }}"
                      defs: "{{ defs }}"
                      maxItems: "{{ maxItems }}"
                      uniqueItems: {{ uniqueItems }}
                      additionalProperties:
                        type: "{{ type }}"
                        minimum: {{ minimum }}
                        items: "{{ items }}"
                        nullable: {{ nullable }}
                        maximum: {{ maximum }}
                        description: "{{ description }}"
                        default: "{{ default }}"
                        ref: "{{ ref }}"
                        minItems: "{{ minItems }}"
                        anyOf: "{{ anyOf }}"
                        enum: "{{ enum }}"
                        required: "{{ required }}"
                        properties: "{{ properties }}"
                        prefixItems: "{{ prefixItems }}"
                        defs: "{{ defs }}"
                        maxItems: "{{ maxItems }}"
                        uniqueItems: {{ uniqueItems }}
                        additionalProperties: "{{ additionalProperties }}"
                        title: "{{ title }}"
                      title: "{{ title }}"
                  enum:
                    - "{{ enum }}"
                  required:
                    - "{{ required }}"
                  properties: "{{ properties }}"
                  prefixItems:
                    - type: "{{ type }}"
                      minimum: {{ minimum }}
                      items:
                        type: "{{ type }}"
                        minimum: {{ minimum }}
                        items: "{{ items }}"
                        nullable: {{ nullable }}
                        maximum: {{ maximum }}
                        description: "{{ description }}"
                        default: "{{ default }}"
                        ref: "{{ ref }}"
                        minItems: "{{ minItems }}"
                        anyOf: "{{ anyOf }}"
                        enum: "{{ enum }}"
                        required: "{{ required }}"
                        properties: "{{ properties }}"
                        prefixItems: "{{ prefixItems }}"
                        defs: "{{ defs }}"
                        maxItems: "{{ maxItems }}"
                        uniqueItems: {{ uniqueItems }}
                        additionalProperties: "{{ additionalProperties }}"
                        title: "{{ title }}"
                      nullable: {{ nullable }}
                      maximum: {{ maximum }}
                      description: "{{ description }}"
                      default: "{{ default }}"
                      ref: "{{ ref }}"
                      minItems: "{{ minItems }}"
                      anyOf: "{{ anyOf }}"
                      enum: "{{ enum }}"
                      required: "{{ required }}"
                      properties: "{{ properties }}"
                      prefixItems: "{{ prefixItems }}"
                      defs: "{{ defs }}"
                      maxItems: "{{ maxItems }}"
                      uniqueItems: {{ uniqueItems }}
                      additionalProperties:
                        type: "{{ type }}"
                        minimum: {{ minimum }}
                        items: "{{ items }}"
                        nullable: {{ nullable }}
                        maximum: {{ maximum }}
                        description: "{{ description }}"
                        default: "{{ default }}"
                        ref: "{{ ref }}"
                        minItems: "{{ minItems }}"
                        anyOf: "{{ anyOf }}"
                        enum: "{{ enum }}"
                        required: "{{ required }}"
                        properties: "{{ properties }}"
                        prefixItems: "{{ prefixItems }}"
                        defs: "{{ defs }}"
                        maxItems: "{{ maxItems }}"
                        uniqueItems: {{ uniqueItems }}
                        additionalProperties: "{{ additionalProperties }}"
                        title: "{{ title }}"
                      title: "{{ title }}"
                  defs: "{{ defs }}"
                  maxItems: "{{ maxItems }}"
                  uniqueItems: {{ uniqueItems }}
                  additionalProperties:
                    type: "{{ type }}"
                    minimum: {{ minimum }}
                    items: "{{ items }}"
                    nullable: {{ nullable }}
                    maximum: {{ maximum }}
                    description: "{{ description }}"
                    default: "{{ default }}"
                    ref: "{{ ref }}"
                    minItems: "{{ minItems }}"
                    anyOf: "{{ anyOf }}"
                    enum: "{{ enum }}"
                    required: "{{ required }}"
                    properties: "{{ properties }}"
                    prefixItems: "{{ prefixItems }}"
                    defs: "{{ defs }}"
                    maxItems: "{{ maxItems }}"
                    uniqueItems: {{ uniqueItems }}
                    additionalProperties: "{{ additionalProperties }}"
                    title: "{{ title }}"
                  title: "{{ title }}"
                nullable: {{ nullable }}
                maximum: {{ maximum }}
                description: "{{ description }}"
                default: "{{ default }}"
                ref: "{{ ref }}"
                minItems: "{{ minItems }}"
                anyOf: "{{ anyOf }}"
                enum: "{{ enum }}"
                required: "{{ required }}"
                properties: "{{ properties }}"
                prefixItems: "{{ prefixItems }}"
                defs: "{{ defs }}"
                maxItems: "{{ maxItems }}"
                uniqueItems: {{ uniqueItems }}
                additionalProperties:
                  type: "{{ type }}"
                  minimum: {{ minimum }}
                  items:
                    type: "{{ type }}"
                    minimum: {{ minimum }}
                    items: "{{ items }}"
                    nullable: {{ nullable }}
                    maximum: {{ maximum }}
                    description: "{{ description }}"
                    default: "{{ default }}"
                    ref: "{{ ref }}"
                    minItems: "{{ minItems }}"
                    anyOf: "{{ anyOf }}"
                    enum: "{{ enum }}"
                    required: "{{ required }}"
                    properties: "{{ properties }}"
                    prefixItems: "{{ prefixItems }}"
                    defs: "{{ defs }}"
                    maxItems: "{{ maxItems }}"
                    uniqueItems: {{ uniqueItems }}
                    additionalProperties: "{{ additionalProperties }}"
                    title: "{{ title }}"
                  nullable: {{ nullable }}
                  maximum: {{ maximum }}
                  description: "{{ description }}"
                  default: "{{ default }}"
                  ref: "{{ ref }}"
                  minItems: "{{ minItems }}"
                  anyOf:
                    - type: "{{ type }}"
                      minimum: {{ minimum }}
                      items:
                        type: "{{ type }}"
                        minimum: {{ minimum }}
                        items: "{{ items }}"
                        nullable: {{ nullable }}
                        maximum: {{ maximum }}
                        description: "{{ description }}"
                        default: "{{ default }}"
                        ref: "{{ ref }}"
                        minItems: "{{ minItems }}"
                        anyOf: "{{ anyOf }}"
                        enum: "{{ enum }}"
                        required: "{{ required }}"
                        properties: "{{ properties }}"
                        prefixItems: "{{ prefixItems }}"
                        defs: "{{ defs }}"
                        maxItems: "{{ maxItems }}"
                        uniqueItems: {{ uniqueItems }}
                        additionalProperties: "{{ additionalProperties }}"
                        title: "{{ title }}"
                      nullable: {{ nullable }}
                      maximum: {{ maximum }}
                      description: "{{ description }}"
                      default: "{{ default }}"
                      ref: "{{ ref }}"
                      minItems: "{{ minItems }}"
                      anyOf: "{{ anyOf }}"
                      enum: "{{ enum }}"
                      required: "{{ required }}"
                      properties: "{{ properties }}"
                      prefixItems: "{{ prefixItems }}"
                      defs: "{{ defs }}"
                      maxItems: "{{ maxItems }}"
                      uniqueItems: {{ uniqueItems }}
                      additionalProperties:
                        type: "{{ type }}"
                        minimum: {{ minimum }}
                        items: "{{ items }}"
                        nullable: {{ nullable }}
                        maximum: {{ maximum }}
                        description: "{{ description }}"
                        default: "{{ default }}"
                        ref: "{{ ref }}"
                        minItems: "{{ minItems }}"
                        anyOf: "{{ anyOf }}"
                        enum: "{{ enum }}"
                        required: "{{ required }}"
                        properties: "{{ properties }}"
                        prefixItems: "{{ prefixItems }}"
                        defs: "{{ defs }}"
                        maxItems: "{{ maxItems }}"
                        uniqueItems: {{ uniqueItems }}
                        additionalProperties: "{{ additionalProperties }}"
                        title: "{{ title }}"
                      title: "{{ title }}"
                  enum:
                    - "{{ enum }}"
                  required:
                    - "{{ required }}"
                  properties: "{{ properties }}"
                  prefixItems:
                    - type: "{{ type }}"
                      minimum: {{ minimum }}
                      items:
                        type: "{{ type }}"
                        minimum: {{ minimum }}
                        items: "{{ items }}"
                        nullable: {{ nullable }}
                        maximum: {{ maximum }}
                        description: "{{ description }}"
                        default: "{{ default }}"
                        ref: "{{ ref }}"
                        minItems: "{{ minItems }}"
                        anyOf: "{{ anyOf }}"
                        enum: "{{ enum }}"
                        required: "{{ required }}"
                        properties: "{{ properties }}"
                        prefixItems: "{{ prefixItems }}"
                        defs: "{{ defs }}"
                        maxItems: "{{ maxItems }}"
                        uniqueItems: {{ uniqueItems }}
                        additionalProperties: "{{ additionalProperties }}"
                        title: "{{ title }}"
                      nullable: {{ nullable }}
                      maximum: {{ maximum }}
                      description: "{{ description }}"
                      default: "{{ default }}"
                      ref: "{{ ref }}"
                      minItems: "{{ minItems }}"
                      anyOf: "{{ anyOf }}"
                      enum: "{{ enum }}"
                      required: "{{ required }}"
                      properties: "{{ properties }}"
                      prefixItems: "{{ prefixItems }}"
                      defs: "{{ defs }}"
                      maxItems: "{{ maxItems }}"
                      uniqueItems: {{ uniqueItems }}
                      additionalProperties:
                        type: "{{ type }}"
                        minimum: {{ minimum }}
                        items: "{{ items }}"
                        nullable: {{ nullable }}
                        maximum: {{ maximum }}
                        description: "{{ description }}"
                        default: "{{ default }}"
                        ref: "{{ ref }}"
                        minItems: "{{ minItems }}"
                        anyOf: "{{ anyOf }}"
                        enum: "{{ enum }}"
                        required: "{{ required }}"
                        properties: "{{ properties }}"
                        prefixItems: "{{ prefixItems }}"
                        defs: "{{ defs }}"
                        maxItems: "{{ maxItems }}"
                        uniqueItems: {{ uniqueItems }}
                        additionalProperties: "{{ additionalProperties }}"
                        title: "{{ title }}"
                      title: "{{ title }}"
                  defs: "{{ defs }}"
                  maxItems: "{{ maxItems }}"
                  uniqueItems: {{ uniqueItems }}
                  additionalProperties:
                    type: "{{ type }}"
                    minimum: {{ minimum }}
                    items: "{{ items }}"
                    nullable: {{ nullable }}
                    maximum: {{ maximum }}
                    description: "{{ description }}"
                    default: "{{ default }}"
                    ref: "{{ ref }}"
                    minItems: "{{ minItems }}"
                    anyOf: "{{ anyOf }}"
                    enum: "{{ enum }}"
                    required: "{{ required }}"
                    properties: "{{ properties }}"
                    prefixItems: "{{ prefixItems }}"
                    defs: "{{ defs }}"
                    maxItems: "{{ maxItems }}"
                    uniqueItems: {{ uniqueItems }}
                    additionalProperties: "{{ additionalProperties }}"
                    title: "{{ title }}"
                  title: "{{ title }}"
                title: "{{ title }}"
            defs: "{{ defs }}"
            maxItems: "{{ maxItems }}"
            uniqueItems: {{ uniqueItems }}
            additionalProperties:
              type: "{{ type }}"
              minimum: {{ minimum }}
              items:
                type: "{{ type }}"
                minimum: {{ minimum }}
                items:
                  type: "{{ type }}"
                  minimum: {{ minimum }}
                  items: "{{ items }}"
                  nullable: {{ nullable }}
                  maximum: {{ maximum }}
                  description: "{{ description }}"
                  default: "{{ default }}"
                  ref: "{{ ref }}"
                  minItems: "{{ minItems }}"
                  anyOf: "{{ anyOf }}"
                  enum: "{{ enum }}"
                  required: "{{ required }}"
                  properties: "{{ properties }}"
                  prefixItems: "{{ prefixItems }}"
                  defs: "{{ defs }}"
                  maxItems: "{{ maxItems }}"
                  uniqueItems: {{ uniqueItems }}
                  additionalProperties: "{{ additionalProperties }}"
                  title: "{{ title }}"
                nullable: {{ nullable }}
                maximum: {{ maximum }}
                description: "{{ description }}"
                default: "{{ default }}"
                ref: "{{ ref }}"
                minItems: "{{ minItems }}"
                anyOf:
                  - type: "{{ type }}"
                    minimum: {{ minimum }}
                    items:
                      type: "{{ type }}"
                      minimum: {{ minimum }}
                      items: "{{ items }}"
                      nullable: {{ nullable }}
                      maximum: {{ maximum }}
                      description: "{{ description }}"
                      default: "{{ default }}"
                      ref: "{{ ref }}"
                      minItems: "{{ minItems }}"
                      anyOf: "{{ anyOf }}"
                      enum: "{{ enum }}"
                      required: "{{ required }}"
                      properties: "{{ properties }}"
                      prefixItems: "{{ prefixItems }}"
                      defs: "{{ defs }}"
                      maxItems: "{{ maxItems }}"
                      uniqueItems: {{ uniqueItems }}
                      additionalProperties: "{{ additionalProperties }}"
                      title: "{{ title }}"
                    nullable: {{ nullable }}
                    maximum: {{ maximum }}
                    description: "{{ description }}"
                    default: "{{ default }}"
                    ref: "{{ ref }}"
                    minItems: "{{ minItems }}"
                    anyOf: "{{ anyOf }}"
                    enum: "{{ enum }}"
                    required: "{{ required }}"
                    properties: "{{ properties }}"
                    prefixItems: "{{ prefixItems }}"
                    defs: "{{ defs }}"
                    maxItems: "{{ maxItems }}"
                    uniqueItems: {{ uniqueItems }}
                    additionalProperties:
                      type: "{{ type }}"
                      minimum: {{ minimum }}
                      items: "{{ items }}"
                      nullable: {{ nullable }}
                      maximum: {{ maximum }}
                      description: "{{ description }}"
                      default: "{{ default }}"
                      ref: "{{ ref }}"
                      minItems: "{{ minItems }}"
                      anyOf: "{{ anyOf }}"
                      enum: "{{ enum }}"
                      required: "{{ required }}"
                      properties: "{{ properties }}"
                      prefixItems: "{{ prefixItems }}"
                      defs: "{{ defs }}"
                      maxItems: "{{ maxItems }}"
                      uniqueItems: {{ uniqueItems }}
                      additionalProperties: "{{ additionalProperties }}"
                      title: "{{ title }}"
                    title: "{{ title }}"
                enum:
                  - "{{ enum }}"
                required:
                  - "{{ required }}"
                properties: "{{ properties }}"
                prefixItems:
                  - type: "{{ type }}"
                    minimum: {{ minimum }}
                    items:
                      type: "{{ type }}"
                      minimum: {{ minimum }}
                      items: "{{ items }}"
                      nullable: {{ nullable }}
                      maximum: {{ maximum }}
                      description: "{{ description }}"
                      default: "{{ default }}"
                      ref: "{{ ref }}"
                      minItems: "{{ minItems }}"
                      anyOf: "{{ anyOf }}"
                      enum: "{{ enum }}"
                      required: "{{ required }}"
                      properties: "{{ properties }}"
                      prefixItems: "{{ prefixItems }}"
                      defs: "{{ defs }}"
                      maxItems: "{{ maxItems }}"
                      uniqueItems: {{ uniqueItems }}
                      additionalProperties: "{{ additionalProperties }}"
                      title: "{{ title }}"
                    nullable: {{ nullable }}
                    maximum: {{ maximum }}
                    description: "{{ description }}"
                    default: "{{ default }}"
                    ref: "{{ ref }}"
                    minItems: "{{ minItems }}"
                    anyOf: "{{ anyOf }}"
                    enum: "{{ enum }}"
                    required: "{{ required }}"
                    properties: "{{ properties }}"
                    prefixItems: "{{ prefixItems }}"
                    defs: "{{ defs }}"
                    maxItems: "{{ maxItems }}"
                    uniqueItems: {{ uniqueItems }}
                    additionalProperties:
                      type: "{{ type }}"
                      minimum: {{ minimum }}
                      items: "{{ items }}"
                      nullable: {{ nullable }}
                      maximum: {{ maximum }}
                      description: "{{ description }}"
                      default: "{{ default }}"
                      ref: "{{ ref }}"
                      minItems: "{{ minItems }}"
                      anyOf: "{{ anyOf }}"
                      enum: "{{ enum }}"
                      required: "{{ required }}"
                      properties: "{{ properties }}"
                      prefixItems: "{{ prefixItems }}"
                      defs: "{{ defs }}"
                      maxItems: "{{ maxItems }}"
                      uniqueItems: {{ uniqueItems }}
                      additionalProperties: "{{ additionalProperties }}"
                      title: "{{ title }}"
                    title: "{{ title }}"
                defs: "{{ defs }}"
                maxItems: "{{ maxItems }}"
                uniqueItems: {{ uniqueItems }}
                additionalProperties:
                  type: "{{ type }}"
                  minimum: {{ minimum }}
                  items: "{{ items }}"
                  nullable: {{ nullable }}
                  maximum: {{ maximum }}
                  description: "{{ description }}"
                  default: "{{ default }}"
                  ref: "{{ ref }}"
                  minItems: "{{ minItems }}"
                  anyOf: "{{ anyOf }}"
                  enum: "{{ enum }}"
                  required: "{{ required }}"
                  properties: "{{ properties }}"
                  prefixItems: "{{ prefixItems }}"
                  defs: "{{ defs }}"
                  maxItems: "{{ maxItems }}"
                  uniqueItems: {{ uniqueItems }}
                  additionalProperties: "{{ additionalProperties }}"
                  title: "{{ title }}"
                title: "{{ title }}"
              nullable: {{ nullable }}
              maximum: {{ maximum }}
              description: "{{ description }}"
              default: "{{ default }}"
              ref: "{{ ref }}"
              minItems: "{{ minItems }}"
              anyOf:
                - type: "{{ type }}"
                  minimum: {{ minimum }}
                  items:
                    type: "{{ type }}"
                    minimum: {{ minimum }}
                    items: "{{ items }}"
                    nullable: {{ nullable }}
                    maximum: {{ maximum }}
                    description: "{{ description }}"
                    default: "{{ default }}"
                    ref: "{{ ref }}"
                    minItems: "{{ minItems }}"
                    anyOf: "{{ anyOf }}"
                    enum: "{{ enum }}"
                    required: "{{ required }}"
                    properties: "{{ properties }}"
                    prefixItems: "{{ prefixItems }}"
                    defs: "{{ defs }}"
                    maxItems: "{{ maxItems }}"
                    uniqueItems: {{ uniqueItems }}
                    additionalProperties: "{{ additionalProperties }}"
                    title: "{{ title }}"
                  nullable: {{ nullable }}
                  maximum: {{ maximum }}
                  description: "{{ description }}"
                  default: "{{ default }}"
                  ref: "{{ ref }}"
                  minItems: "{{ minItems }}"
                  anyOf: "{{ anyOf }}"
                  enum: "{{ enum }}"
                  required: "{{ required }}"
                  properties: "{{ properties }}"
                  prefixItems: "{{ prefixItems }}"
                  defs: "{{ defs }}"
                  maxItems: "{{ maxItems }}"
                  uniqueItems: {{ uniqueItems }}
                  additionalProperties:
                    type: "{{ type }}"
                    minimum: {{ minimum }}
                    items: "{{ items }}"
                    nullable: {{ nullable }}
                    maximum: {{ maximum }}
                    description: "{{ description }}"
                    default: "{{ default }}"
                    ref: "{{ ref }}"
                    minItems: "{{ minItems }}"
                    anyOf: "{{ anyOf }}"
                    enum: "{{ enum }}"
                    required: "{{ required }}"
                    properties: "{{ properties }}"
                    prefixItems: "{{ prefixItems }}"
                    defs: "{{ defs }}"
                    maxItems: "{{ maxItems }}"
                    uniqueItems: {{ uniqueItems }}
                    additionalProperties: "{{ additionalProperties }}"
                    title: "{{ title }}"
                  title: "{{ title }}"
              enum:
                - "{{ enum }}"
              required:
                - "{{ required }}"
              properties: "{{ properties }}"
              prefixItems:
                - type: "{{ type }}"
                  minimum: {{ minimum }}
                  items:
                    type: "{{ type }}"
                    minimum: {{ minimum }}
                    items: "{{ items }}"
                    nullable: {{ nullable }}
                    maximum: {{ maximum }}
                    description: "{{ description }}"
                    default: "{{ default }}"
                    ref: "{{ ref }}"
                    minItems: "{{ minItems }}"
                    anyOf: "{{ anyOf }}"
                    enum: "{{ enum }}"
                    required: "{{ required }}"
                    properties: "{{ properties }}"
                    prefixItems: "{{ prefixItems }}"
                    defs: "{{ defs }}"
                    maxItems: "{{ maxItems }}"
                    uniqueItems: {{ uniqueItems }}
                    additionalProperties: "{{ additionalProperties }}"
                    title: "{{ title }}"
                  nullable: {{ nullable }}
                  maximum: {{ maximum }}
                  description: "{{ description }}"
                  default: "{{ default }}"
                  ref: "{{ ref }}"
                  minItems: "{{ minItems }}"
                  anyOf: "{{ anyOf }}"
                  enum: "{{ enum }}"
                  required: "{{ required }}"
                  properties: "{{ properties }}"
                  prefixItems: "{{ prefixItems }}"
                  defs: "{{ defs }}"
                  maxItems: "{{ maxItems }}"
                  uniqueItems: {{ uniqueItems }}
                  additionalProperties:
                    type: "{{ type }}"
                    minimum: {{ minimum }}
                    items: "{{ items }}"
                    nullable: {{ nullable }}
                    maximum: {{ maximum }}
                    description: "{{ description }}"
                    default: "{{ default }}"
                    ref: "{{ ref }}"
                    minItems: "{{ minItems }}"
                    anyOf: "{{ anyOf }}"
                    enum: "{{ enum }}"
                    required: "{{ required }}"
                    properties: "{{ properties }}"
                    prefixItems: "{{ prefixItems }}"
                    defs: "{{ defs }}"
                    maxItems: "{{ maxItems }}"
                    uniqueItems: {{ uniqueItems }}
                    additionalProperties: "{{ additionalProperties }}"
                    title: "{{ title }}"
                  title: "{{ title }}"
              defs: "{{ defs }}"
              maxItems: "{{ maxItems }}"
              uniqueItems: {{ uniqueItems }}
              additionalProperties:
                type: "{{ type }}"
                minimum: {{ minimum }}
                items:
                  type: "{{ type }}"
                  minimum: {{ minimum }}
                  items: "{{ items }}"
                  nullable: {{ nullable }}
                  maximum: {{ maximum }}
                  description: "{{ description }}"
                  default: "{{ default }}"
                  ref: "{{ ref }}"
                  minItems: "{{ minItems }}"
                  anyOf: "{{ anyOf }}"
                  enum: "{{ enum }}"
                  required: "{{ required }}"
                  properties: "{{ properties }}"
                  prefixItems: "{{ prefixItems }}"
                  defs: "{{ defs }}"
                  maxItems: "{{ maxItems }}"
                  uniqueItems: {{ uniqueItems }}
                  additionalProperties: "{{ additionalProperties }}"
                  title: "{{ title }}"
                nullable: {{ nullable }}
                maximum: {{ maximum }}
                description: "{{ description }}"
                default: "{{ default }}"
                ref: "{{ ref }}"
                minItems: "{{ minItems }}"
                anyOf:
                  - type: "{{ type }}"
                    minimum: {{ minimum }}
                    items:
                      type: "{{ type }}"
                      minimum: {{ minimum }}
                      items: "{{ items }}"
                      nullable: {{ nullable }}
                      maximum: {{ maximum }}
                      description: "{{ description }}"
                      default: "{{ default }}"
                      ref: "{{ ref }}"
                      minItems: "{{ minItems }}"
                      anyOf: "{{ anyOf }}"
                      enum: "{{ enum }}"
                      required: "{{ required }}"
                      properties: "{{ properties }}"
                      prefixItems: "{{ prefixItems }}"
                      defs: "{{ defs }}"
                      maxItems: "{{ maxItems }}"
                      uniqueItems: {{ uniqueItems }}
                      additionalProperties: "{{ additionalProperties }}"
                      title: "{{ title }}"
                    nullable: {{ nullable }}
                    maximum: {{ maximum }}
                    description: "{{ description }}"
                    default: "{{ default }}"
                    ref: "{{ ref }}"
                    minItems: "{{ minItems }}"
                    anyOf: "{{ anyOf }}"
                    enum: "{{ enum }}"
                    required: "{{ required }}"
                    properties: "{{ properties }}"
                    prefixItems: "{{ prefixItems }}"
                    defs: "{{ defs }}"
                    maxItems: "{{ maxItems }}"
                    uniqueItems: {{ uniqueItems }}
                    additionalProperties:
                      type: "{{ type }}"
                      minimum: {{ minimum }}
                      items: "{{ items }}"
                      nullable: {{ nullable }}
                      maximum: {{ maximum }}
                      description: "{{ description }}"
                      default: "{{ default }}"
                      ref: "{{ ref }}"
                      minItems: "{{ minItems }}"
                      anyOf: "{{ anyOf }}"
                      enum: "{{ enum }}"
                      required: "{{ required }}"
                      properties: "{{ properties }}"
                      prefixItems: "{{ prefixItems }}"
                      defs: "{{ defs }}"
                      maxItems: "{{ maxItems }}"
                      uniqueItems: {{ uniqueItems }}
                      additionalProperties: "{{ additionalProperties }}"
                      title: "{{ title }}"
                    title: "{{ title }}"
                enum:
                  - "{{ enum }}"
                required:
                  - "{{ required }}"
                properties: "{{ properties }}"
                prefixItems:
                  - type: "{{ type }}"
                    minimum: {{ minimum }}
                    items:
                      type: "{{ type }}"
                      minimum: {{ minimum }}
                      items: "{{ items }}"
                      nullable: {{ nullable }}
                      maximum: {{ maximum }}
                      description: "{{ description }}"
                      default: "{{ default }}"
                      ref: "{{ ref }}"
                      minItems: "{{ minItems }}"
                      anyOf: "{{ anyOf }}"
                      enum: "{{ enum }}"
                      required: "{{ required }}"
                      properties: "{{ properties }}"
                      prefixItems: "{{ prefixItems }}"
                      defs: "{{ defs }}"
                      maxItems: "{{ maxItems }}"
                      uniqueItems: {{ uniqueItems }}
                      additionalProperties: "{{ additionalProperties }}"
                      title: "{{ title }}"
                    nullable: {{ nullable }}
                    maximum: {{ maximum }}
                    description: "{{ description }}"
                    default: "{{ default }}"
                    ref: "{{ ref }}"
                    minItems: "{{ minItems }}"
                    anyOf: "{{ anyOf }}"
                    enum: "{{ enum }}"
                    required: "{{ required }}"
                    properties: "{{ properties }}"
                    prefixItems: "{{ prefixItems }}"
                    defs: "{{ defs }}"
                    maxItems: "{{ maxItems }}"
                    uniqueItems: {{ uniqueItems }}
                    additionalProperties:
                      type: "{{ type }}"
                      minimum: {{ minimum }}
                      items: "{{ items }}"
                      nullable: {{ nullable }}
                      maximum: {{ maximum }}
                      description: "{{ description }}"
                      default: "{{ default }}"
                      ref: "{{ ref }}"
                      minItems: "{{ minItems }}"
                      anyOf: "{{ anyOf }}"
                      enum: "{{ enum }}"
                      required: "{{ required }}"
                      properties: "{{ properties }}"
                      prefixItems: "{{ prefixItems }}"
                      defs: "{{ defs }}"
                      maxItems: "{{ maxItems }}"
                      uniqueItems: {{ uniqueItems }}
                      additionalProperties: "{{ additionalProperties }}"
                      title: "{{ title }}"
                    title: "{{ title }}"
                defs: "{{ defs }}"
                maxItems: "{{ maxItems }}"
                uniqueItems: {{ uniqueItems }}
                additionalProperties:
                  type: "{{ type }}"
                  minimum: {{ minimum }}
                  items: "{{ items }}"
                  nullable: {{ nullable }}
                  maximum: {{ maximum }}
                  description: "{{ description }}"
                  default: "{{ default }}"
                  ref: "{{ ref }}"
                  minItems: "{{ minItems }}"
                  anyOf: "{{ anyOf }}"
                  enum: "{{ enum }}"
                  required: "{{ required }}"
                  properties: "{{ properties }}"
                  prefixItems: "{{ prefixItems }}"
                  defs: "{{ defs }}"
                  maxItems: "{{ maxItems }}"
                  uniqueItems: {{ uniqueItems }}
                  additionalProperties: "{{ additionalProperties }}"
                  title: "{{ title }}"
                title: "{{ title }}"
              title: "{{ title }}"
            title: "{{ title }}"
          description: "{{ description }}"
    - name: description
      value: "{{ description }}"
      description: |
        Optional. Human-readable description of the app.
    - name: audioProcessingConfig
      description: |
        Optional. Audio processing configuration of the app.
      value:
        synthesizeSpeechConfigs: "{{ synthesizeSpeechConfigs }}"
        bargeInConfig:
          disableBargeIn: {{ disableBargeIn }}
          bargeInAwareness: {{ bargeInAwareness }}
        inactivityTimeout: "{{ inactivityTimeout }}"
        ambientSoundConfig:
          volumeGainDb: {{ volumeGainDb }}
          prebuiltAmbientSound: "{{ prebuiltAmbientSound }}"
          gcsUri: "{{ gcsUri }}"
          prebuiltAmbientNoise: "{{ prebuiltAmbientNoise }}"
    - name: dataStoreSettings
      description: |
        Optional. The data store settings for the app.
      value:
        engines:
          - name: "{{ name }}"
            type: "{{ type }}"
    - name: evaluationMetricsThresholds
      description: |
        Optional. The evaluation thresholds for the app.
      value:
        goldenEvaluationMetricsThresholds:
          turnLevelMetricsThresholds:
            semanticSimilarityChannel: "{{ semanticSimilarityChannel }}"
            overallToolInvocationCorrectnessThreshold: {{ overallToolInvocationCorrectnessThreshold }}
            semanticSimilaritySuccessThreshold: {{ semanticSimilaritySuccessThreshold }}
          toolMatchingSettings:
            extraToolCallBehavior: "{{ extraToolCallBehavior }}"
          expectationLevelMetricsThresholds:
            toolInvocationParameterCorrectnessThreshold: {{ toolInvocationParameterCorrectnessThreshold }}
        hallucinationMetricBehavior: "{{ hallucinationMetricBehavior }}"
        goldenHallucinationMetricBehavior: "{{ goldenHallucinationMetricBehavior }}"
        scenarioHallucinationMetricBehavior: "{{ scenarioHallucinationMetricBehavior }}"
    - name: rootAgent
      value: "{{ rootAgent }}"
      description: |
        Optional. The root agent is the entry point of the app. Format: \`projects/{project}/locations/{location}/apps/{app}/agents/{agent}\`
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
data__timeZoneSettings = '{{ timeZoneSettings }}',
data__metadata = '{{ metadata }}',
data__vpcScSettings = '{{ vpcScSettings }}',
data__loggingSettings = '{{ loggingSettings }}',
data__toolExecutionMode = '{{ toolExecutionMode }}',
data__defaultChannelProfile = '{{ defaultChannelProfile }}',
data__clientCertificateSettings = '{{ clientCertificateSettings }}',
data__errorHandlingSettings = '{{ errorHandlingSettings }}',
data__languageSettings = '{{ languageSettings }}',
data__modelSettings = '{{ modelSettings }}',
data__pinned = {{ pinned }},
data__globalInstruction = '{{ globalInstruction }}',
data__guardrails = '{{ guardrails }}',
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__locked = {{ locked }},
data__variableDeclarations = '{{ variableDeclarations }}',
data__description = '{{ description }}',
data__audioProcessingConfig = '{{ audioProcessingConfig }}',
data__dataStoreSettings = '{{ dataStoreSettings }}',
data__evaluationMetricsThresholds = '{{ evaluationMetricsThresholds }}',
data__rootAgent = '{{ rootAgent }}'
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
        { label: 'import_app', value: 'import_app' },
        { label: 'export_app', value: 'export_app' }
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
"tool": "{{ tool }}", 
"args": "{{ args }}", 
"variables": "{{ variables }}", 
"toolsetTool": "{{ toolsetTool }}", 
"mockConfig": "{{ mockConfig }}", 
"context": "{{ context }}"
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
"ignoreAppLock": {{ ignoreAppLock }}, 
"gcsUri": "{{ gcsUri }}", 
"importOptions": "{{ importOptions }}", 
"appId": "{{ appId }}", 
"displayName": "{{ displayName }}"
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
"exportFormat": "{{ exportFormat }}", 
"appVersion": "{{ appVersion }}", 
"gcsUri": "{{ gcsUri }}"
}'
;
```
</TabItem>
</Tabs>
