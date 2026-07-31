--- 
title: test_cases
hide_title: false
hide_table_of_contents: false
keywords:
  - test_cases
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

Creates, updates, deletes, gets or lists a <code>test_cases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="test_cases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.test_cases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_agents_test_cases_get"
    values={[
        { label: 'projects_locations_agents_test_cases_get', value: 'projects_locations_agents_test_cases_get' },
        { label: 'projects_locations_agents_test_cases_list', value: 'projects_locations_agents_test_cases_list' }
    ]}
>
<TabItem value="projects_locations_agents_test_cases_get">

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
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="lastTestResult" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3TestCaseResult)</td>
</tr>
<tr>
    <td><CopyableCode code="notes" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="testCaseConversationTurns" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="testConfig" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3TestConfig)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_test_cases_list">

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
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="lastTestResult" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3TestCaseResult)</td>
</tr>
<tr>
    <td><CopyableCode code="notes" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="testCaseConversationTurns" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="testConfig" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3TestConfig)</td>
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
    <td><a href="#projects_locations_agents_test_cases_get"><CopyableCode code="projects_locations_agents_test_cases_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-testCasesId"><code>testCasesId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_test_cases_list"><CopyableCode code="projects_locations_agents_test_cases_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-view"><code>view</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_test_cases_create"><CopyableCode code="projects_locations_agents_test_cases_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_test_cases_patch"><CopyableCode code="projects_locations_agents_test_cases_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-testCasesId"><code>testCasesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_test_cases_batch_delete"><CopyableCode code="projects_locations_agents_test_cases_batch_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_test_cases_import"><CopyableCode code="projects_locations_agents_test_cases_import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_test_cases_export"><CopyableCode code="projects_locations_agents_test_cases_export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_test_cases_calculate_coverage"><CopyableCode code="projects_locations_agents_test_cases_calculate_coverage" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-type"><code>type</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_test_cases_run"><CopyableCode code="projects_locations_agents_test_cases_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-testCasesId"><code>testCasesId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_test_cases_batch_run"><CopyableCode code="projects_locations_agents_test_cases_batch_run" /></a></td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-testCasesId">
    <td><CopyableCode code="testCasesId" /></td>
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
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_agents_test_cases_get"
    values={[
        { label: 'projects_locations_agents_test_cases_get', value: 'projects_locations_agents_test_cases_get' },
        { label: 'projects_locations_agents_test_cases_list', value: 'projects_locations_agents_test_cases_list' }
    ]}
>
<TabItem value="projects_locations_agents_test_cases_get">

Successful response

```sql
SELECT
name,
creationTime,
displayName,
lastTestResult,
notes,
tags,
testCaseConversationTurns,
testConfig
FROM google.dialogflow.test_cases
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND testCasesId = '{{ testCasesId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_agents_test_cases_list">

Successful response

```sql
SELECT
name,
creationTime,
displayName,
lastTestResult,
notes,
tags,
testCaseConversationTurns,
testConfig
FROM google.dialogflow.test_cases
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND view = '{{ view }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_agents_test_cases_create"
    values={[
        { label: 'projects_locations_agents_test_cases_create', value: 'projects_locations_agents_test_cases_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_agents_test_cases_create">

No description available.

```sql
INSERT INTO google.dialogflow.test_cases (
data__tags,
data__notes,
data__name,
data__testCaseConversationTurns,
data__lastTestResult,
data__testConfig,
data__displayName,
projectsId,
locationsId,
agentsId
)
SELECT 
'{{ tags }}',
'{{ notes }}',
'{{ name }}',
'{{ testCaseConversationTurns }}',
'{{ lastTestResult }}',
'{{ testConfig }}',
'{{ displayName }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}'
RETURNING
name,
creationTime,
displayName,
lastTestResult,
notes,
tags,
testCaseConversationTurns,
testConfig
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: test_cases
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the test_cases resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the test_cases resource.
    - name: agentsId
      value: "{{ agentsId }}"
      description: Required parameter for the test_cases resource.
    - name: tags
      value:
        - "{{ tags }}"
    - name: notes
      value: "{{ notes }}"
    - name: name
      value: "{{ name }}"
    - name: testCaseConversationTurns
      value:
        - userInput:
            isWebhookEnabled: {{ isWebhookEnabled }}
            injectedParameters: "{{ injectedParameters }}"
            enableSentimentAnalysis: {{ enableSentimentAnalysis }}
            input:
              text:
                text: "{{ text }}"
              audio:
                config:
                  sampleRateHertz: {{ sampleRateHertz }}
                  model: "{{ model }}"
                  bargeInConfig: "{{ bargeInConfig }}"
                  audioEncoding: "{{ audioEncoding }}"
                  enableWordInfo: {{ enableWordInfo }}
                  singleUtterance: {{ singleUtterance }}
                  modelVariant: "{{ modelVariant }}"
                  optOutConformerModelMigration: {{ optOutConformerModelMigration }}
                  phraseHints: "{{ phraseHints }}"
                audio: "{{ audio }}"
              dtmf:
                finishDigit: "{{ finishDigit }}"
                digits: "{{ digits }}"
              intent:
                intent: "{{ intent }}"
              toolCallResult:
                tool: "{{ tool }}"
                action: "{{ action }}"
                error:
                  message: "{{ message }}"
                outputParameters: "{{ outputParameters }}"
              languageCode: "{{ languageCode }}"
              event:
                event: "{{ event }}"
          virtualAgentOutput:
            differences:
              - description: "{{ description }}"
                type: "{{ type }}"
            triggeredIntent:
              trainingPhrases:
                - parts: "{{ parts }}"
                  repeatCount: {{ repeatCount }}
                  id: "{{ id }}"
              priority: {{ priority }}
              displayName: "{{ displayName }}"
              parameters:
                - entityType: "{{ entityType }}"
                  redact: {{ redact }}
                  id: "{{ id }}"
                  isList: {{ isList }}
              isFallback: {{ isFallback }}
              dtmfPattern: "{{ dtmfPattern }}"
              name: "{{ name }}"
              labels: "{{ labels }}"
              description: "{{ description }}"
            sessionParameters: "{{ sessionParameters }}"
            currentPage:
              eventHandlers:
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
              form:
                parameters:
                  - required: {{ required }}
                    isList: {{ isList }}
                    redact: {{ redact }}
                    displayName: "{{ displayName }}"
                    advancedSettings:
                      loggingSettings: "{{ loggingSettings }}"
                      audioExportGcsDestination: "{{ audioExportGcsDestination }}"
                      speechSettings: "{{ speechSettings }}"
                      dtmfSettings: "{{ dtmfSettings }}"
                    entityType: "{{ entityType }}"
                    fillBehavior:
                      initialPromptFulfillment: "{{ initialPromptFulfillment }}"
                      repromptEventHandlers: "{{ repromptEventHandlers }}"
                    defaultValue: "{{ defaultValue }}"
              displayName: "{{ displayName }}"
              transitionRouteGroups:
                - "{{ transitionRouteGroups }}"
              knowledgeConnectorSettings:
                targetFlow: "{{ targetFlow }}"
                dataStoreConnections:
                  - dataStore: "{{ dataStore }}"
                    documentProcessingMode: "{{ documentProcessingMode }}"
                    dataStoreType: "{{ dataStoreType }}"
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
                enabled: {{ enabled }}
                targetPage: "{{ targetPage }}"
              name: "{{ name }}"
              transitionRoutes:
                - name: "{{ name }}"
                  targetPage: "{{ targetPage }}"
                  condition: "{{ condition }}"
                  description: "{{ description }}"
                  targetFlow: "{{ targetFlow }}"
                  intent: "{{ intent }}"
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
              description: "{{ description }}"
              entryFulfillment:
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
            textResponses:
              - text: "{{ text }}"
                allowPlaybackInterruption: {{ allowPlaybackInterruption }}
            status:
              code: {{ code }}
              message: "{{ message }}"
              details: "{{ details }}"
            diagnosticInfo: "{{ diagnosticInfo }}"
    - name: lastTestResult
      value:
        testResult: "{{ testResult }}"
        testTime: "{{ testTime }}"
        conversationTurns:
          - userInput:
              isWebhookEnabled: {{ isWebhookEnabled }}
              injectedParameters: "{{ injectedParameters }}"
              enableSentimentAnalysis: {{ enableSentimentAnalysis }}
              input:
                text:
                  text: "{{ text }}"
                audio:
                  config: "{{ config }}"
                  audio: "{{ audio }}"
                dtmf:
                  finishDigit: "{{ finishDigit }}"
                  digits: "{{ digits }}"
                intent:
                  intent: "{{ intent }}"
                toolCallResult:
                  tool: "{{ tool }}"
                  action: "{{ action }}"
                  error: "{{ error }}"
                  outputParameters: "{{ outputParameters }}"
                languageCode: "{{ languageCode }}"
                event:
                  event: "{{ event }}"
            virtualAgentOutput:
              differences:
                - description: "{{ description }}"
                  type: "{{ type }}"
              triggeredIntent:
                trainingPhrases:
                  - parts: "{{ parts }}"
                    repeatCount: {{ repeatCount }}
                    id: "{{ id }}"
                priority: {{ priority }}
                displayName: "{{ displayName }}"
                parameters:
                  - entityType: "{{ entityType }}"
                    redact: {{ redact }}
                    id: "{{ id }}"
                    isList: {{ isList }}
                isFallback: {{ isFallback }}
                dtmfPattern: "{{ dtmfPattern }}"
                name: "{{ name }}"
                labels: "{{ labels }}"
                description: "{{ description }}"
              sessionParameters: "{{ sessionParameters }}"
              currentPage:
                eventHandlers:
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
                form:
                  parameters: "{{ parameters }}"
                displayName: "{{ displayName }}"
                transitionRouteGroups:
                  - "{{ transitionRouteGroups }}"
                knowledgeConnectorSettings:
                  targetFlow: "{{ targetFlow }}"
                  dataStoreConnections: "{{ dataStoreConnections }}"
                  triggerFulfillment: "{{ triggerFulfillment }}"
                  enabled: {{ enabled }}
                  targetPage: "{{ targetPage }}"
                name: "{{ name }}"
                transitionRoutes:
                  - name: "{{ name }}"
                    targetPage: "{{ targetPage }}"
                    condition: "{{ condition }}"
                    description: "{{ description }}"
                    targetFlow: "{{ targetFlow }}"
                    intent: "{{ intent }}"
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
                description: "{{ description }}"
                entryFulfillment:
                  returnPartialResponses: {{ returnPartialResponses }}
                  generators: "{{ generators }}"
                  webhook: "{{ webhook }}"
                  enableGenerativeFallback: {{ enableGenerativeFallback }}
                  setParameterActions: "{{ setParameterActions }}"
                  tag: "{{ tag }}"
                  advancedSettings: "{{ advancedSettings }}"
                  messages: "{{ messages }}"
                  conditionalCases: "{{ conditionalCases }}"
                advancedSettings:
                  loggingSettings: "{{ loggingSettings }}"
                  audioExportGcsDestination: "{{ audioExportGcsDestination }}"
                  speechSettings: "{{ speechSettings }}"
                  dtmfSettings: "{{ dtmfSettings }}"
              textResponses:
                - text: "{{ text }}"
                  allowPlaybackInterruption: {{ allowPlaybackInterruption }}
              status:
                code: {{ code }}
                message: "{{ message }}"
                details: "{{ details }}"
              diagnosticInfo: "{{ diagnosticInfo }}"
        environment: "{{ environment }}"
        name: "{{ name }}"
    - name: testConfig
      value:
        page: "{{ page }}"
        flow: "{{ flow }}"
        trackingParameters:
          - "{{ trackingParameters }}"
    - name: displayName
      value: "{{ displayName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_agents_test_cases_patch"
    values={[
        { label: 'projects_locations_agents_test_cases_patch', value: 'projects_locations_agents_test_cases_patch' }
    ]}
>
<TabItem value="projects_locations_agents_test_cases_patch">

No description available.

```sql
UPDATE google.dialogflow.test_cases
SET 
data__tags = '{{ tags }}',
data__notes = '{{ notes }}',
data__name = '{{ name }}',
data__testCaseConversationTurns = '{{ testCaseConversationTurns }}',
data__lastTestResult = '{{ lastTestResult }}',
data__testConfig = '{{ testConfig }}',
data__displayName = '{{ displayName }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND testCasesId = '{{ testCasesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
creationTime,
displayName,
lastTestResult,
notes,
tags,
testCaseConversationTurns,
testConfig;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_agents_test_cases_batch_delete"
    values={[
        { label: 'projects_locations_agents_test_cases_batch_delete', value: 'projects_locations_agents_test_cases_batch_delete' }
    ]}
>
<TabItem value="projects_locations_agents_test_cases_batch_delete">

No description available.

```sql
DELETE FROM google.dialogflow.test_cases
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_agents_test_cases_import"
    values={[
        { label: 'projects_locations_agents_test_cases_import', value: 'projects_locations_agents_test_cases_import' },
        { label: 'projects_locations_agents_test_cases_export', value: 'projects_locations_agents_test_cases_export' },
        { label: 'projects_locations_agents_test_cases_calculate_coverage', value: 'projects_locations_agents_test_cases_calculate_coverage' },
        { label: 'projects_locations_agents_test_cases_run', value: 'projects_locations_agents_test_cases_run' },
        { label: 'projects_locations_agents_test_cases_batch_run', value: 'projects_locations_agents_test_cases_batch_run' }
    ]}
>
<TabItem value="projects_locations_agents_test_cases_import">

Successful response

```sql
EXEC google.dialogflow.test_cases.projects_locations_agents_test_cases_import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required 
@@json=
'{
"gcsUri": "{{ gcsUri }}", 
"content": "{{ content }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_test_cases_export">

Successful response

```sql
EXEC google.dialogflow.test_cases.projects_locations_agents_test_cases_export 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required 
@@json=
'{
"dataFormat": "{{ dataFormat }}", 
"filter": "{{ filter }}", 
"gcsUri": "{{ gcsUri }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_test_cases_calculate_coverage">

Successful response

```sql
EXEC google.dialogflow.test_cases.projects_locations_agents_test_cases_calculate_coverage 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@type='{{ type }}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_test_cases_run">

Successful response

```sql
EXEC google.dialogflow.test_cases.projects_locations_agents_test_cases_run 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@testCasesId='{{ testCasesId }}' --required 
@@json=
'{
"environment": "{{ environment }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_test_cases_batch_run">

Successful response

```sql
EXEC google.dialogflow.test_cases.projects_locations_agents_test_cases_batch_run 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required 
@@json=
'{
"environment": "{{ environment }}", 
"testCases": "{{ testCases }}"
}'
;
```
</TabItem>
</Tabs>
