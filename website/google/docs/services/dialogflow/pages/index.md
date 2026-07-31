--- 
title: pages
hide_title: false
hide_table_of_contents: false
keywords:
  - pages
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

Creates, updates, deletes, gets or lists a <code>pages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.pages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_agents_flows_pages_get"
    values={[
        { label: 'projects_locations_agents_flows_pages_get', value: 'projects_locations_agents_flows_pages_get' },
        { label: 'projects_locations_agents_flows_pages_list', value: 'projects_locations_agents_flows_pages_list' }
    ]}
>
<TabItem value="projects_locations_agents_flows_pages_get">

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
    <td><CopyableCode code="entryFulfillment" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3Fulfillment)</td>
</tr>
<tr>
    <td><CopyableCode code="eventHandlers" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="form" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3Form)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeConnectorSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3KnowledgeConnectorSettings)</td>
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
<TabItem value="projects_locations_agents_flows_pages_list">

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
    <td><CopyableCode code="entryFulfillment" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3Fulfillment)</td>
</tr>
<tr>
    <td><CopyableCode code="eventHandlers" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="form" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3Form)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeConnectorSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3KnowledgeConnectorSettings)</td>
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
    <td><a href="#projects_locations_agents_flows_pages_get"><CopyableCode code="projects_locations_agents_flows_pages_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a>, <a href="#parameter-pagesId"><code>pagesId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_pages_list"><CopyableCode code="projects_locations_agents_flows_pages_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_pages_create"><CopyableCode code="projects_locations_agents_flows_pages_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_pages_patch"><CopyableCode code="projects_locations_agents_flows_pages_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a>, <a href="#parameter-pagesId"><code>pagesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_pages_delete"><CopyableCode code="projects_locations_agents_flows_pages_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a>, <a href="#parameter-pagesId"><code>pagesId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
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
<tr id="parameter-pagesId">
    <td><CopyableCode code="pagesId" /></td>
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
    defaultValue="projects_locations_agents_flows_pages_get"
    values={[
        { label: 'projects_locations_agents_flows_pages_get', value: 'projects_locations_agents_flows_pages_get' },
        { label: 'projects_locations_agents_flows_pages_list', value: 'projects_locations_agents_flows_pages_list' }
    ]}
>
<TabItem value="projects_locations_agents_flows_pages_get">

Successful response

```sql
SELECT
name,
advancedSettings,
description,
displayName,
entryFulfillment,
eventHandlers,
form,
knowledgeConnectorSettings,
transitionRouteGroups,
transitionRoutes
FROM google.dialogflow.pages
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND flowsId = '{{ flowsId }}' -- required
AND pagesId = '{{ pagesId }}' -- required
AND languageCode = '{{ languageCode }}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_flows_pages_list">

Successful response

```sql
SELECT
name,
advancedSettings,
description,
displayName,
entryFulfillment,
eventHandlers,
form,
knowledgeConnectorSettings,
transitionRouteGroups,
transitionRoutes
FROM google.dialogflow.pages
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND flowsId = '{{ flowsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND languageCode = '{{ languageCode }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_agents_flows_pages_create"
    values={[
        { label: 'projects_locations_agents_flows_pages_create', value: 'projects_locations_agents_flows_pages_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_agents_flows_pages_create">

No description available.

```sql
INSERT INTO google.dialogflow.pages (
data__eventHandlers,
data__form,
data__displayName,
data__transitionRouteGroups,
data__knowledgeConnectorSettings,
data__name,
data__transitionRoutes,
data__description,
data__entryFulfillment,
data__advancedSettings,
projectsId,
locationsId,
agentsId,
flowsId,
languageCode
)
SELECT 
'{{ eventHandlers }}',
'{{ form }}',
'{{ displayName }}',
'{{ transitionRouteGroups }}',
'{{ knowledgeConnectorSettings }}',
'{{ name }}',
'{{ transitionRoutes }}',
'{{ description }}',
'{{ entryFulfillment }}',
'{{ advancedSettings }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}',
'{{ flowsId }}',
'{{ languageCode }}'
RETURNING
name,
advancedSettings,
description,
displayName,
entryFulfillment,
eventHandlers,
form,
knowledgeConnectorSettings,
transitionRouteGroups,
transitionRoutes
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: pages
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the pages resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the pages resource.
    - name: agentsId
      value: "{{ agentsId }}"
      description: Required parameter for the pages resource.
    - name: flowsId
      value: "{{ flowsId }}"
      description: Required parameter for the pages resource.
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
    - name: form
      value:
        parameters:
          - required: {{ required }}
            isList: {{ isList }}
            redact: {{ redact }}
            displayName: "{{ displayName }}"
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
            entityType: "{{ entityType }}"
            fillBehavior:
              initialPromptFulfillment:
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
                  loggingSettings: "{{ loggingSettings }}"
                  audioExportGcsDestination: "{{ audioExportGcsDestination }}"
                  speechSettings: "{{ speechSettings }}"
                  dtmfSettings: "{{ dtmfSettings }}"
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
              repromptEventHandlers:
                - name: "{{ name }}"
                  event: "{{ event }}"
                  targetPage: "{{ targetPage }}"
                  triggerFulfillment:
                    returnPartialResponses: {{ returnPartialResponses }}
                    generators: "{{ generators }}"
                    webhook: "{{ webhook }}"
                    enableGenerativeFallback: {{ enableGenerativeFallback }}
                    setParameterActions: "{{ setParameterActions }}"
                    tag: "{{ tag }}"
                    advancedSettings: "{{ advancedSettings }}"
                    messages: "{{ messages }}"
                    conditionalCases: "{{ conditionalCases }}"
                  targetFlow: "{{ targetFlow }}"
                  targetPlaybook: "{{ targetPlaybook }}"
            defaultValue: "{{ defaultValue }}"
    - name: displayName
      value: "{{ displayName }}"
    - name: transitionRouteGroups
      value:
        - "{{ transitionRouteGroups }}"
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
    - name: name
      value: "{{ name }}"
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
    - name: description
      value: "{{ description }}"
    - name: entryFulfillment
      value:
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
    - name: languageCode
      value: "{{ languageCode }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_agents_flows_pages_patch"
    values={[
        { label: 'projects_locations_agents_flows_pages_patch', value: 'projects_locations_agents_flows_pages_patch' }
    ]}
>
<TabItem value="projects_locations_agents_flows_pages_patch">

No description available.

```sql
UPDATE google.dialogflow.pages
SET 
data__eventHandlers = '{{ eventHandlers }}',
data__form = '{{ form }}',
data__displayName = '{{ displayName }}',
data__transitionRouteGroups = '{{ transitionRouteGroups }}',
data__knowledgeConnectorSettings = '{{ knowledgeConnectorSettings }}',
data__name = '{{ name }}',
data__transitionRoutes = '{{ transitionRoutes }}',
data__description = '{{ description }}',
data__entryFulfillment = '{{ entryFulfillment }}',
data__advancedSettings = '{{ advancedSettings }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND flowsId = '{{ flowsId }}' --required
AND pagesId = '{{ pagesId }}' --required
AND updateMask = '{{ updateMask}}'
AND languageCode = '{{ languageCode}}'
RETURNING
name,
advancedSettings,
description,
displayName,
entryFulfillment,
eventHandlers,
form,
knowledgeConnectorSettings,
transitionRouteGroups,
transitionRoutes;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_agents_flows_pages_delete"
    values={[
        { label: 'projects_locations_agents_flows_pages_delete', value: 'projects_locations_agents_flows_pages_delete' }
    ]}
>
<TabItem value="projects_locations_agents_flows_pages_delete">

No description available.

```sql
DELETE FROM google.dialogflow.pages
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND flowsId = '{{ flowsId }}' --required
AND pagesId = '{{ pagesId }}' --required
AND force = '{{ force }}'
;
```
</TabItem>
</Tabs>
