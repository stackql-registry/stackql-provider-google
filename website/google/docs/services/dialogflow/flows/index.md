--- 
title: flows
hide_title: false
hide_table_of_contents: false
keywords:
  - flows
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

Creates, updates, deletes, gets or lists a <code>flows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.flows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_agents_flows_get"
    values={[
        { label: 'projects_locations_agents_flows_get', value: 'projects_locations_agents_flows_get' },
        { label: 'projects_locations_agents_flows_list', value: 'projects_locations_agents_flows_list' }
    ]}
>
<TabItem value="projects_locations_agents_flows_get">

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
    <td><CopyableCode code="advancedSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3AdvancedSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="eventHandlers" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="inputParameterDefinitions" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeConnectorSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3KnowledgeConnectorSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="locked" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="multiLanguageSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3FlowMultiLanguageSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="nluSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3NluSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="outputParameterDefinitions" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="transitionRouteGroups" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="transitionRoutes" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_flows_list">

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
    <td><CopyableCode code="advancedSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3AdvancedSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="eventHandlers" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="inputParameterDefinitions" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeConnectorSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3KnowledgeConnectorSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="locked" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="multiLanguageSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3FlowMultiLanguageSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="nluSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3NluSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="outputParameterDefinitions" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="transitionRouteGroups" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="transitionRoutes" /></td>
    <td><code>array</code></td>
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
    <td><a href="#projects_locations_agents_flows_get"><CopyableCode code="projects_locations_agents_flows_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_list"><CopyableCode code="projects_locations_agents_flows_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_create"><CopyableCode code="projects_locations_agents_flows_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_patch"><CopyableCode code="projects_locations_agents_flows_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_delete"><CopyableCode code="projects_locations_agents_flows_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_import"><CopyableCode code="projects_locations_agents_flows_import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_export"><CopyableCode code="projects_locations_agents_flows_export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_validate"><CopyableCode code="projects_locations_agents_flows_validate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_train"><CopyableCode code="projects_locations_agents_flows_train" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a></td>
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
<tr id="parameter-flowsId">
    <td><CopyableCode code="flowsId" /></td>
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
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-languageCode">
    <td><CopyableCode code="languageCode" /></td>
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
    defaultValue="projects_locations_agents_flows_get"
    values={[
        { label: 'projects_locations_agents_flows_get', value: 'projects_locations_agents_flows_get' },
        { label: 'projects_locations_agents_flows_list', value: 'projects_locations_agents_flows_list' }
    ]}
>
<TabItem value="projects_locations_agents_flows_get">

Successful response

```sql
SELECT
name,
advancedSettings,
description,
displayName,
eventHandlers,
inputParameterDefinitions,
knowledgeConnectorSettings,
locked,
multiLanguageSettings,
nluSettings,
outputParameterDefinitions,
transitionRouteGroups,
transitionRoutes
FROM google.dialogflow.flows
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND flowsId = '{{ flowsId }}' -- required
AND languageCode = '{{ languageCode }}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_flows_list">

Successful response

```sql
SELECT
name,
advancedSettings,
description,
displayName,
eventHandlers,
inputParameterDefinitions,
knowledgeConnectorSettings,
locked,
multiLanguageSettings,
nluSettings,
outputParameterDefinitions,
transitionRouteGroups,
transitionRoutes
FROM google.dialogflow.flows
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND languageCode = '{{ languageCode }}'
AND pageSize = '{{ pageSize }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_agents_flows_create"
    values={[
        { label: 'projects_locations_agents_flows_create', value: 'projects_locations_agents_flows_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_agents_flows_create">

No description available.

```sql
INSERT INTO google.dialogflow.flows (
data__name,
data__locked,
data__advancedSettings,
data__transitionRoutes,
data__knowledgeConnectorSettings,
data__inputParameterDefinitions,
data__outputParameterDefinitions,
data__eventHandlers,
data__description,
data__nluSettings,
data__transitionRouteGroups,
data__displayName,
data__multiLanguageSettings,
projectsId,
locationsId,
agentsId,
languageCode
)
SELECT 
'{{ name }}',
{{ locked }},
'{{ advancedSettings }}',
'{{ transitionRoutes }}',
'{{ knowledgeConnectorSettings }}',
'{{ inputParameterDefinitions }}',
'{{ outputParameterDefinitions }}',
'{{ eventHandlers }}',
'{{ description }}',
'{{ nluSettings }}',
'{{ transitionRouteGroups }}',
'{{ displayName }}',
'{{ multiLanguageSettings }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}',
'{{ languageCode }}'
RETURNING
name,
advancedSettings,
description,
displayName,
eventHandlers,
inputParameterDefinitions,
knowledgeConnectorSettings,
locked,
multiLanguageSettings,
nluSettings,
outputParameterDefinitions,
transitionRouteGroups,
transitionRoutes
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: flows
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the flows resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the flows resource.
    - name: agentsId
      value: "{{ agentsId }}"
      description: Required parameter for the flows resource.
    - name: name
      value: "{{ name }}"
    - name: locked
      value: {{ locked }}
    - name: advancedSettings
      value:
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
    - name: transitionRoutes
      value:
        - name: "{{ name }}"
          targetPage: "{{ targetPage }}"
          condition: "{{ condition }}"
          description: "{{ description }}"
          targetFlow: "{{ targetFlow }}"
          intent: "{{ intent }}"
          triggerFulfillment:
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
                  text:
                    - "{{ text }}"
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
                  segments:
                    - allowPlaybackInterruption: {{ allowPlaybackInterruption }}
                      audio: "{{ audio }}"
                      uri: "{{ uri }}"
                liveAgentHandoff:
                  metadata: "{{ metadata }}"
            conditionalCases:
              - cases: "{{ cases }}"
    - name: knowledgeConnectorSettings
      value:
        targetFlow: "{{ targetFlow }}"
        dataStoreConnections:
          - dataStore: "{{ dataStore }}"
            documentProcessingMode: "{{ documentProcessingMode }}"
            dataStoreType: "{{ dataStoreType }}"
        triggerFulfillment:
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
                text:
                  - "{{ text }}"
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
                segments:
                  - allowPlaybackInterruption: {{ allowPlaybackInterruption }}
                    audio: "{{ audio }}"
                    uri: "{{ uri }}"
              liveAgentHandoff:
                metadata: "{{ metadata }}"
          conditionalCases:
            - cases: "{{ cases }}"
        enabled: {{ enabled }}
        targetPage: "{{ targetPage }}"
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
    - name: eventHandlers
      value:
        - name: "{{ name }}"
          event: "{{ event }}"
          targetPage: "{{ targetPage }}"
          triggerFulfillment:
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
                  text:
                    - "{{ text }}"
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
                  segments:
                    - allowPlaybackInterruption: {{ allowPlaybackInterruption }}
                      audio: "{{ audio }}"
                      uri: "{{ uri }}"
                liveAgentHandoff:
                  metadata: "{{ metadata }}"
            conditionalCases:
              - cases: "{{ cases }}"
          targetFlow: "{{ targetFlow }}"
          targetPlaybook: "{{ targetPlaybook }}"
    - name: description
      value: "{{ description }}"
    - name: nluSettings
      value:
        classificationThreshold: {{ classificationThreshold }}
        modelTrainingMode: "{{ modelTrainingMode }}"
        modelType: "{{ modelType }}"
    - name: transitionRouteGroups
      value:
        - "{{ transitionRouteGroups }}"
    - name: displayName
      value: "{{ displayName }}"
    - name: multiLanguageSettings
      value:
        enableMultiLanguageDetection: {{ enableMultiLanguageDetection }}
        supportedResponseLanguageCodes:
          - "{{ supportedResponseLanguageCodes }}"
    - name: languageCode
      value: "{{ languageCode }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_agents_flows_patch"
    values={[
        { label: 'projects_locations_agents_flows_patch', value: 'projects_locations_agents_flows_patch' }
    ]}
>
<TabItem value="projects_locations_agents_flows_patch">

No description available.

```sql
UPDATE google.dialogflow.flows
SET 
data__name = '{{ name }}',
data__locked = {{ locked }},
data__advancedSettings = '{{ advancedSettings }}',
data__transitionRoutes = '{{ transitionRoutes }}',
data__knowledgeConnectorSettings = '{{ knowledgeConnectorSettings }}',
data__inputParameterDefinitions = '{{ inputParameterDefinitions }}',
data__outputParameterDefinitions = '{{ outputParameterDefinitions }}',
data__eventHandlers = '{{ eventHandlers }}',
data__description = '{{ description }}',
data__nluSettings = '{{ nluSettings }}',
data__transitionRouteGroups = '{{ transitionRouteGroups }}',
data__displayName = '{{ displayName }}',
data__multiLanguageSettings = '{{ multiLanguageSettings }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND flowsId = '{{ flowsId }}' --required
AND updateMask = '{{ updateMask}}'
AND languageCode = '{{ languageCode}}'
RETURNING
name,
advancedSettings,
description,
displayName,
eventHandlers,
inputParameterDefinitions,
knowledgeConnectorSettings,
locked,
multiLanguageSettings,
nluSettings,
outputParameterDefinitions,
transitionRouteGroups,
transitionRoutes;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_agents_flows_delete"
    values={[
        { label: 'projects_locations_agents_flows_delete', value: 'projects_locations_agents_flows_delete' }
    ]}
>
<TabItem value="projects_locations_agents_flows_delete">

No description available.

```sql
DELETE FROM google.dialogflow.flows
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND flowsId = '{{ flowsId }}' --required
AND force = '{{ force }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_agents_flows_import"
    values={[
        { label: 'projects_locations_agents_flows_import', value: 'projects_locations_agents_flows_import' },
        { label: 'projects_locations_agents_flows_export', value: 'projects_locations_agents_flows_export' },
        { label: 'projects_locations_agents_flows_validate', value: 'projects_locations_agents_flows_validate' },
        { label: 'projects_locations_agents_flows_train', value: 'projects_locations_agents_flows_train' }
    ]}
>
<TabItem value="projects_locations_agents_flows_import">

Successful response

```sql
EXEC google.dialogflow.flows.projects_locations_agents_flows_import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required 
@@json=
'{
"flowUri": "{{ flowUri }}", 
"flowContent": "{{ flowContent }}", 
"flowImportStrategy": "{{ flowImportStrategy }}", 
"importOption": "{{ importOption }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_flows_export">

Successful response

```sql
EXEC google.dialogflow.flows.projects_locations_agents_flows_export 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@flowsId='{{ flowsId }}' --required 
@@json=
'{
"flowUri": "{{ flowUri }}", 
"includeReferencedFlows": {{ includeReferencedFlows }}
}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_flows_validate">

Successful response

```sql
EXEC google.dialogflow.flows.projects_locations_agents_flows_validate 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@flowsId='{{ flowsId }}' --required 
@@json=
'{
"languageCode": "{{ languageCode }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_flows_train">

Successful response

```sql
EXEC google.dialogflow.flows.projects_locations_agents_flows_train 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@flowsId='{{ flowsId }}' --required
;
```
</TabItem>
</Tabs>
