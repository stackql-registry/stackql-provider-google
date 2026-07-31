--- 
title: playbooks
hide_title: false
hide_table_of_contents: false
keywords:
  - playbooks
  - dialogflow
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

Creates, updates, deletes, gets or lists a <code>playbooks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="playbooks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.playbooks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_agents_playbooks_get"
    values={[
        { label: 'projects_locations_agents_playbooks_get', value: 'projects_locations_agents_playbooks_get' },
        { label: 'projects_locations_agents_playbooks_list', value: 'projects_locations_agents_playbooks_list' }
    ]}
>
<TabItem value="projects_locations_agents_playbooks_get">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="codeBlock" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3CodeBlock)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="goal" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="handlers" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="inlineActions" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="inputParameterDefinitions" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="instruction" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3PlaybookInstruction)</td>
</tr>
<tr>
    <td><CopyableCode code="llmModelSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3LlmModelSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="outputParameterDefinitions" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="playbookType" /></td>
    <td><code>string</code></td>
    <td> (PLAYBOOK_TYPE_UNSPECIFIED, TASK, ROUTINE)</td>
</tr>
<tr>
    <td><CopyableCode code="referencedFlows" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="referencedPlaybooks" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="referencedTools" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="tokenCount" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_playbooks_list">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="codeBlock" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3CodeBlock)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="goal" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="handlers" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="inlineActions" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="inputParameterDefinitions" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="instruction" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3PlaybookInstruction)</td>
</tr>
<tr>
    <td><CopyableCode code="llmModelSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3LlmModelSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="outputParameterDefinitions" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="playbookType" /></td>
    <td><code>string</code></td>
    <td> (PLAYBOOK_TYPE_UNSPECIFIED, TASK, ROUTINE)</td>
</tr>
<tr>
    <td><CopyableCode code="referencedFlows" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="referencedPlaybooks" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="referencedTools" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="tokenCount" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
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
    <td><a href="#projects_locations_agents_playbooks_get"><CopyableCode code="projects_locations_agents_playbooks_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-playbooksId"><code>playbooksId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_playbooks_list"><CopyableCode code="projects_locations_agents_playbooks_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_playbooks_create"><CopyableCode code="projects_locations_agents_playbooks_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_playbooks_patch"><CopyableCode code="projects_locations_agents_playbooks_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-playbooksId"><code>playbooksId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_playbooks_delete"><CopyableCode code="projects_locations_agents_playbooks_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-playbooksId"><code>playbooksId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_playbooks_export"><CopyableCode code="projects_locations_agents_playbooks_export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-playbooksId"><code>playbooksId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_playbooks_import"><CopyableCode code="projects_locations_agents_playbooks_import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td></td>
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
<tr id="parameter-agentsId">
    <td><CopyableCode code="agentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-playbooksId">
    <td><CopyableCode code="playbooksId" /></td>
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
    defaultValue="projects_locations_agents_playbooks_get"
    values={[
        { label: 'projects_locations_agents_playbooks_get', value: 'projects_locations_agents_playbooks_get' },
        { label: 'projects_locations_agents_playbooks_list', value: 'projects_locations_agents_playbooks_list' }
    ]}
>
<TabItem value="projects_locations_agents_playbooks_get">

Successful response

```sql
SELECT
name,
codeBlock,
createTime,
displayName,
goal,
handlers,
inlineActions,
inputParameterDefinitions,
instruction,
llmModelSettings,
outputParameterDefinitions,
playbookType,
referencedFlows,
referencedPlaybooks,
referencedTools,
tokenCount,
updateTime
FROM google.dialogflow.playbooks
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND playbooksId = '{{ playbooksId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_agents_playbooks_list">

Successful response

```sql
SELECT
name,
codeBlock,
createTime,
displayName,
goal,
handlers,
inlineActions,
inputParameterDefinitions,
instruction,
llmModelSettings,
outputParameterDefinitions,
playbookType,
referencedFlows,
referencedPlaybooks,
referencedTools,
tokenCount,
updateTime
FROM google.dialogflow.playbooks
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_agents_playbooks_create"
    values={[
        { label: 'projects_locations_agents_playbooks_create', value: 'projects_locations_agents_playbooks_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_agents_playbooks_create">

No description available.

```sql
INSERT INTO google.dialogflow.playbooks (
data__displayName,
data__llmModelSettings,
data__name,
data__instruction,
data__playbookType,
data__inputParameterDefinitions,
data__goal,
data__outputParameterDefinitions,
data__referencedTools,
data__handlers,
data__codeBlock,
projectsId,
locationsId,
agentsId
)
SELECT 
'{{ displayName }}',
'{{ llmModelSettings }}',
'{{ name }}',
'{{ instruction }}',
'{{ playbookType }}',
'{{ inputParameterDefinitions }}',
'{{ goal }}',
'{{ outputParameterDefinitions }}',
'{{ referencedTools }}',
'{{ handlers }}',
'{{ codeBlock }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}'
RETURNING
name,
codeBlock,
createTime,
displayName,
goal,
handlers,
inlineActions,
inputParameterDefinitions,
instruction,
llmModelSettings,
outputParameterDefinitions,
playbookType,
referencedFlows,
referencedPlaybooks,
referencedTools,
tokenCount,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: playbooks
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the playbooks resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the playbooks resource.
    - name: agentsId
      value: "{{ agentsId }}"
      description: Required parameter for the playbooks resource.
    - name: displayName
      value: "{{ displayName }}"
    - name: llmModelSettings
      value:
        model: "{{ model }}"
        promptText: "{{ promptText }}"
    - name: name
      value: "{{ name }}"
    - name: instruction
      value:
        guidelines: "{{ guidelines }}"
        steps:
          - steps: "{{ steps }}"
            text: "{{ text }}"
    - name: playbookType
      value: "{{ playbookType }}"
      valid_values: ['PLAYBOOK_TYPE_UNSPECIFIED', 'TASK', 'ROUTINE']
    - name: inputParameterDefinitions
      value:
        - name: "{{ name }}"
          type: "{{ type }}"
          typeSchema:
            schemaReference:
              tool: "{{ tool }}"
              schema: "{{ schema }}"
            inlineSchema:
              type: "{{ type }}"
              items:
                schemaReference:
                  tool: "{{ tool }}"
                  schema: "{{ schema }}"
                inlineSchema:
                  type: "{{ type }}"
                  items: "{{ items }}"
          description: "{{ description }}"
    - name: goal
      value: "{{ goal }}"
    - name: outputParameterDefinitions
      value:
        - name: "{{ name }}"
          type: "{{ type }}"
          typeSchema:
            schemaReference:
              tool: "{{ tool }}"
              schema: "{{ schema }}"
            inlineSchema:
              type: "{{ type }}"
              items:
                schemaReference:
                  tool: "{{ tool }}"
                  schema: "{{ schema }}"
                inlineSchema:
                  type: "{{ type }}"
                  items: "{{ items }}"
          description: "{{ description }}"
    - name: referencedTools
      value:
        - "{{ referencedTools }}"
    - name: handlers
      value:
        - eventHandler:
            event: "{{ event }}"
            condition: "{{ condition }}"
            fulfillment:
              returnPartialResponses: {{ returnPartialResponses }}
              generators:
                - inputParameters: "{{ inputParameters }}"
                  generator: "{{ generator }}"
                  outputParameter: "{{ outputParameter }}"
              webhook: "{{ webhook }}"
              enableGenerativeFallback: {{ enableGenerativeFallback }}
              setParameterActions:
                - parameter: "{{ parameter }}"
                  value: "{{ value }}"
              tag: "{{ tag }}"
              advancedSettings:
                loggingSettings:
                  enableInteractionLogging: {{ enableInteractionLogging }}
                  enableConsentBasedRedaction: {{ enableConsentBasedRedaction }}
                  enableStackdriverLogging: {{ enableStackdriverLogging }}
                audioExportGcsDestination:
                  uri: "{{ uri }}"
                speechSettings:
                  useTimeoutBasedEndpointing: {{ useTimeoutBasedEndpointing }}
                  models: "{{ models }}"
                  endpointerSensitivity: {{ endpointerSensitivity }}
                  noSpeechTimeout: "{{ noSpeechTimeout }}"
                dtmfSettings:
                  maxDigits: {{ maxDigits }}
                  finishDigit: "{{ finishDigit }}"
                  interdigitTimeoutDuration: "{{ interdigitTimeoutDuration }}"
                  enabled: {{ enabled }}
                  endpointingTimeoutDuration: "{{ endpointingTimeoutDuration }}"
              messages:
                - playAudio:
                    audioUri: "{{ audioUri }}"
                    allowPlaybackInterruption: {{ allowPlaybackInterruption }}
                  toolCall:
                    tool: "{{ tool }}"
                    action: "{{ action }}"
                    inputParameters: "{{ inputParameters }}"
                  knowledgeInfoCard: "{{ knowledgeInfoCard }}"
                  endInteraction: "{{ endInteraction }}"
                  conversationSuccess:
                    metadata: "{{ metadata }}"
                  channel: "{{ channel }}"
                  text:
                    text: "{{ text }}"
                    allowPlaybackInterruption: {{ allowPlaybackInterruption }}
                  telephonyTransferCall:
                    phoneNumber: "{{ phoneNumber }}"
                  responseType: "{{ responseType }}"
                  payload: "{{ payload }}"
                  outputAudioText:
                    text: "{{ text }}"
                    ssml: "{{ ssml }}"
                    allowPlaybackInterruption: {{ allowPlaybackInterruption }}
                  mixedAudio:
                    segments: "{{ segments }}"
                  liveAgentHandoff:
                    metadata: "{{ metadata }}"
              conditionalCases:
                - cases: "{{ cases }}"
          lifecycleHandler:
            lifecycleStage: "{{ lifecycleStage }}"
            condition: "{{ condition }}"
            fulfillment:
              returnPartialResponses: {{ returnPartialResponses }}
              generators:
                - inputParameters: "{{ inputParameters }}"
                  generator: "{{ generator }}"
                  outputParameter: "{{ outputParameter }}"
              webhook: "{{ webhook }}"
              enableGenerativeFallback: {{ enableGenerativeFallback }}
              setParameterActions:
                - parameter: "{{ parameter }}"
                  value: "{{ value }}"
              tag: "{{ tag }}"
              advancedSettings:
                loggingSettings:
                  enableInteractionLogging: {{ enableInteractionLogging }}
                  enableConsentBasedRedaction: {{ enableConsentBasedRedaction }}
                  enableStackdriverLogging: {{ enableStackdriverLogging }}
                audioExportGcsDestination:
                  uri: "{{ uri }}"
                speechSettings:
                  useTimeoutBasedEndpointing: {{ useTimeoutBasedEndpointing }}
                  models: "{{ models }}"
                  endpointerSensitivity: {{ endpointerSensitivity }}
                  noSpeechTimeout: "{{ noSpeechTimeout }}"
                dtmfSettings:
                  maxDigits: {{ maxDigits }}
                  finishDigit: "{{ finishDigit }}"
                  interdigitTimeoutDuration: "{{ interdigitTimeoutDuration }}"
                  enabled: {{ enabled }}
                  endpointingTimeoutDuration: "{{ endpointingTimeoutDuration }}"
              messages:
                - playAudio:
                    audioUri: "{{ audioUri }}"
                    allowPlaybackInterruption: {{ allowPlaybackInterruption }}
                  toolCall:
                    tool: "{{ tool }}"
                    action: "{{ action }}"
                    inputParameters: "{{ inputParameters }}"
                  knowledgeInfoCard: "{{ knowledgeInfoCard }}"
                  endInteraction: "{{ endInteraction }}"
                  conversationSuccess:
                    metadata: "{{ metadata }}"
                  channel: "{{ channel }}"
                  text:
                    text: "{{ text }}"
                    allowPlaybackInterruption: {{ allowPlaybackInterruption }}
                  telephonyTransferCall:
                    phoneNumber: "{{ phoneNumber }}"
                  responseType: "{{ responseType }}"
                  payload: "{{ payload }}"
                  outputAudioText:
                    text: "{{ text }}"
                    ssml: "{{ ssml }}"
                    allowPlaybackInterruption: {{ allowPlaybackInterruption }}
                  mixedAudio:
                    segments: "{{ segments }}"
                  liveAgentHandoff:
                    metadata: "{{ metadata }}"
              conditionalCases:
                - cases: "{{ cases }}"
    - name: codeBlock
      value:
        code: "{{ code }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_agents_playbooks_patch"
    values={[
        { label: 'projects_locations_agents_playbooks_patch', value: 'projects_locations_agents_playbooks_patch' }
    ]}
>
<TabItem value="projects_locations_agents_playbooks_patch">

No description available.

```sql
UPDATE google.dialogflow.playbooks
SET 
data__displayName = '{{ displayName }}',
data__llmModelSettings = '{{ llmModelSettings }}',
data__name = '{{ name }}',
data__instruction = '{{ instruction }}',
data__playbookType = '{{ playbookType }}',
data__inputParameterDefinitions = '{{ inputParameterDefinitions }}',
data__goal = '{{ goal }}',
data__outputParameterDefinitions = '{{ outputParameterDefinitions }}',
data__referencedTools = '{{ referencedTools }}',
data__handlers = '{{ handlers }}',
data__codeBlock = '{{ codeBlock }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND playbooksId = '{{ playbooksId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
codeBlock,
createTime,
displayName,
goal,
handlers,
inlineActions,
inputParameterDefinitions,
instruction,
llmModelSettings,
outputParameterDefinitions,
playbookType,
referencedFlows,
referencedPlaybooks,
referencedTools,
tokenCount,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_agents_playbooks_delete"
    values={[
        { label: 'projects_locations_agents_playbooks_delete', value: 'projects_locations_agents_playbooks_delete' }
    ]}
>
<TabItem value="projects_locations_agents_playbooks_delete">

No description available.

```sql
DELETE FROM google.dialogflow.playbooks
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND playbooksId = '{{ playbooksId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_agents_playbooks_export"
    values={[
        { label: 'projects_locations_agents_playbooks_export', value: 'projects_locations_agents_playbooks_export' },
        { label: 'projects_locations_agents_playbooks_import', value: 'projects_locations_agents_playbooks_import' }
    ]}
>
<TabItem value="projects_locations_agents_playbooks_export">

Successful response

```sql
EXEC google.dialogflow.playbooks.projects_locations_agents_playbooks_export 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@playbooksId='{{ playbooksId }}' --required 
@@json=
'{
"playbookUri": "{{ playbookUri }}", 
"dataFormat": "{{ dataFormat }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_playbooks_import">

Successful response

```sql
EXEC google.dialogflow.playbooks.projects_locations_agents_playbooks_import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required 
@@json=
'{
"importStrategy": "{{ importStrategy }}", 
"playbookUri": "{{ playbookUri }}", 
"playbookContent": "{{ playbookContent }}"
}'
;
```
</TabItem>
</Tabs>
