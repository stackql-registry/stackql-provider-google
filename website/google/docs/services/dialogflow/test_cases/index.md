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
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-view"><code>view</code></a></td>
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
    <td><a href="#projects_locations_agents_test_cases_batch_run"><CopyableCode code="projects_locations_agents_test_cases_batch_run" /></a></td>
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
    <td><a href="#projects_locations_agents_test_cases_export"><CopyableCode code="projects_locations_agents_test_cases_export" /></a></td>
    <td><CopyableCode code="exec" /></td>
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
    <td><a href="#projects_locations_agents_test_cases_run"><CopyableCode code="projects_locations_agents_test_cases_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-testCasesId"><code>testCasesId</code></a></td>
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
AND pageToken = '{{ pageToken }}'
AND view = '{{ view }}'
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
data__displayName,
data__lastTestResult,
data__name,
data__notes,
data__tags,
data__testCaseConversationTurns,
data__testConfig,
projectsId,
locationsId,
agentsId
)
SELECT 
'{{ displayName }}',
'{{ lastTestResult }}',
'{{ name }}',
'{{ notes }}',
'{{ tags }}',
'{{ testCaseConversationTurns }}',
'{{ testConfig }}',
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
    - name: displayName
      value: "{{ displayName }}"
    - name: lastTestResult
      value:
        conversationTurns:
          - userInput:
              enableSentimentAnalysis: {{ enableSentimentAnalysis }}
              injectedParameters: "{{ injectedParameters }}"
              input:
                audio:
                  audio: "{{ audio }}"
                  config: "{{ config }}"
                dtmf:
                  digits: "{{ digits }}"
                  finishDigit: "{{ finishDigit }}"
                event:
                  event: "{{ event }}"
                intent:
                  intent: "{{ intent }}"
                languageCode: "{{ languageCode }}"
                text:
                  text: "{{ text }}"
                toolCallResult:
                  action: "{{ action }}"
                  error: "{{ error }}"
                  outputParameters: "{{ outputParameters }}"
                  tool: "{{ tool }}"
              isWebhookEnabled: {{ isWebhookEnabled }}
            virtualAgentOutput:
              currentPage:
                advancedSettings:
                  audioExportGcsDestination: "{{ audioExportGcsDestination }}"
                  dtmfSettings: "{{ dtmfSettings }}"
                  loggingSettings: "{{ loggingSettings }}"
                  speechSettings: "{{ speechSettings }}"
                description: "{{ description }}"
                displayName: "{{ displayName }}"
                entryFulfillment:
                  advancedSettings: "{{ advancedSettings }}"
                  codeBlockFunction: "{{ codeBlockFunction }}"
                  conditionalCases: "{{ conditionalCases }}"
                  enableGenerativeFallback: {{ enableGenerativeFallback }}
                  generators: "{{ generators }}"
                  messages: "{{ messages }}"
                  returnPartialResponses: {{ returnPartialResponses }}
                  setParameterActions: "{{ setParameterActions }}"
                  tag: "{{ tag }}"
                  webhook: "{{ webhook }}"
                eventHandlers:
                  - event: "{{ event }}"
                    name: "{{ name }}"
                    targetFlow: "{{ targetFlow }}"
                    targetPage: "{{ targetPage }}"
                    targetPlaybook: "{{ targetPlaybook }}"
                    triggerFulfillment:
                      advancedSettings: "{{ advancedSettings }}"
                      codeBlockFunction: "{{ codeBlockFunction }}"
                      conditionalCases: "{{ conditionalCases }}"
                      enableGenerativeFallback: {{ enableGenerativeFallback }}
                      generators: "{{ generators }}"
                      messages: "{{ messages }}"
                      returnPartialResponses: {{ returnPartialResponses }}
                      setParameterActions: "{{ setParameterActions }}"
                      tag: "{{ tag }}"
                      webhook: "{{ webhook }}"
                form:
                  parameters: "{{ parameters }}"
                knowledgeConnectorSettings:
                  dataStoreConnections: "{{ dataStoreConnections }}"
                  enabled: {{ enabled }}
                  targetFlow: "{{ targetFlow }}"
                  targetPage: "{{ targetPage }}"
                  triggerFulfillment: "{{ triggerFulfillment }}"
                name: "{{ name }}"
                transitionRouteGroups:
                  - "{{ transitionRouteGroups }}"
                transitionRoutes:
                  - condition: "{{ condition }}"
                    description: "{{ description }}"
                    intent: "{{ intent }}"
                    name: "{{ name }}"
                    targetFlow: "{{ targetFlow }}"
                    targetPage: "{{ targetPage }}"
                    triggerFulfillment:
                      advancedSettings: "{{ advancedSettings }}"
                      codeBlockFunction: "{{ codeBlockFunction }}"
                      conditionalCases: "{{ conditionalCases }}"
                      enableGenerativeFallback: {{ enableGenerativeFallback }}
                      generators: "{{ generators }}"
                      messages: "{{ messages }}"
                      returnPartialResponses: {{ returnPartialResponses }}
                      setParameterActions: "{{ setParameterActions }}"
                      tag: "{{ tag }}"
                      webhook: "{{ webhook }}"
              diagnosticInfo: "{{ diagnosticInfo }}"
              differences:
                - description: "{{ description }}"
                  type: "{{ type }}"
              sessionParameters: "{{ sessionParameters }}"
              status:
                code: {{ code }}
                details: "{{ details }}"
                message: "{{ message }}"
              textResponses:
                - allowPlaybackInterruption: {{ allowPlaybackInterruption }}
                  text: "{{ text }}"
              triggeredIntent:
                description: "{{ description }}"
                displayName: "{{ displayName }}"
                dtmfPattern: "{{ dtmfPattern }}"
                isFallback: {{ isFallback }}
                labels: "{{ labels }}"
                name: "{{ name }}"
                parameters:
                  - entityType: "{{ entityType }}"
                    id: "{{ id }}"
                    isList: {{ isList }}
                    redact: {{ redact }}
                priority: {{ priority }}
                trainingPhrases:
                  - id: "{{ id }}"
                    parts: "{{ parts }}"
                    repeatCount: {{ repeatCount }}
        environment: "{{ environment }}"
        name: "{{ name }}"
        testResult: "{{ testResult }}"
        testTime: "{{ testTime }}"
    - name: name
      value: "{{ name }}"
    - name: notes
      value: "{{ notes }}"
    - name: tags
      value:
        - "{{ tags }}"
    - name: testCaseConversationTurns
      value:
        - userInput:
            enableSentimentAnalysis: {{ enableSentimentAnalysis }}
            injectedParameters: "{{ injectedParameters }}"
            input:
              audio:
                audio: "{{ audio }}"
                config:
                  audioEncoding: "{{ audioEncoding }}"
                  bargeInConfig: "{{ bargeInConfig }}"
                  enableWordInfo: {{ enableWordInfo }}
                  model: "{{ model }}"
                  modelVariant: "{{ modelVariant }}"
                  optOutConformerModelMigration: {{ optOutConformerModelMigration }}
                  phraseHints: "{{ phraseHints }}"
                  sampleRateHertz: {{ sampleRateHertz }}
                  singleUtterance: {{ singleUtterance }}
              dtmf:
                digits: "{{ digits }}"
                finishDigit: "{{ finishDigit }}"
              event:
                event: "{{ event }}"
              intent:
                intent: "{{ intent }}"
              languageCode: "{{ languageCode }}"
              text:
                text: "{{ text }}"
              toolCallResult:
                action: "{{ action }}"
                error:
                  message: "{{ message }}"
                outputParameters: "{{ outputParameters }}"
                tool: "{{ tool }}"
            isWebhookEnabled: {{ isWebhookEnabled }}
          virtualAgentOutput:
            currentPage:
              advancedSettings:
                audioExportGcsDestination:
                  uri: "{{ uri }}"
                dtmfSettings:
                  enabled: {{ enabled }}
                  endpointingTimeoutDuration: "{{ endpointingTimeoutDuration }}"
                  finishDigit: "{{ finishDigit }}"
                  interdigitTimeoutDuration: "{{ interdigitTimeoutDuration }}"
                  maxDigits: {{ maxDigits }}
                loggingSettings:
                  enableConsentBasedRedaction: {{ enableConsentBasedRedaction }}
                  enableInteractionLogging: {{ enableInteractionLogging }}
                  enableStackdriverLogging: {{ enableStackdriverLogging }}
                speechSettings:
                  endpointerSensitivity: {{ endpointerSensitivity }}
                  models: "{{ models }}"
                  noSpeechTimeout: "{{ noSpeechTimeout }}"
                  useTimeoutBasedEndpointing: {{ useTimeoutBasedEndpointing }}
              description: "{{ description }}"
              displayName: "{{ displayName }}"
              entryFulfillment:
                advancedSettings:
                  audioExportGcsDestination: "{{ audioExportGcsDestination }}"
                  dtmfSettings: "{{ dtmfSettings }}"
                  loggingSettings: "{{ loggingSettings }}"
                  speechSettings: "{{ speechSettings }}"
                codeBlockFunction: "{{ codeBlockFunction }}"
                conditionalCases:
                  - cases: "{{ cases }}"
                enableGenerativeFallback: {{ enableGenerativeFallback }}
                generators:
                  - generator: "{{ generator }}"
                    inputParameters: "{{ inputParameters }}"
                    outputParameter: "{{ outputParameter }}"
                messages:
                  - channel: "{{ channel }}"
                    conversationSuccess:
                      metadata: "{{ metadata }}"
                    endInteraction: "{{ endInteraction }}"
                    knowledgeInfoCard: "{{ knowledgeInfoCard }}"
                    liveAgentHandoff:
                      metadata: "{{ metadata }}"
                    mixedAudio:
                      segments: "{{ segments }}"
                    outputAudioText:
                      allowPlaybackInterruption: {{ allowPlaybackInterruption }}
                      ssml: "{{ ssml }}"
                      text: "{{ text }}"
                    payload: "{{ payload }}"
                    playAudio:
                      allowPlaybackInterruption: {{ allowPlaybackInterruption }}
                      audioUri: "{{ audioUri }}"
                    responseType: "{{ responseType }}"
                    telephonyTransferCall:
                      phoneNumber: "{{ phoneNumber }}"
                    text:
                      allowPlaybackInterruption: {{ allowPlaybackInterruption }}
                      text: "{{ text }}"
                    toolCall:
                      action: "{{ action }}"
                      inputParameters: "{{ inputParameters }}"
                      tool: "{{ tool }}"
                returnPartialResponses: {{ returnPartialResponses }}
                setParameterActions:
                  - parameter: "{{ parameter }}"
                    value: "{{ value }}"
                tag: "{{ tag }}"
                webhook: "{{ webhook }}"
              eventHandlers:
                - event: "{{ event }}"
                  name: "{{ name }}"
                  targetFlow: "{{ targetFlow }}"
                  targetPage: "{{ targetPage }}"
                  targetPlaybook: "{{ targetPlaybook }}"
                  triggerFulfillment:
                    advancedSettings: "{{ advancedSettings }}"
                    codeBlockFunction: "{{ codeBlockFunction }}"
                    conditionalCases: "{{ conditionalCases }}"
                    enableGenerativeFallback: {{ enableGenerativeFallback }}
                    generators: "{{ generators }}"
                    messages: "{{ messages }}"
                    returnPartialResponses: {{ returnPartialResponses }}
                    setParameterActions: "{{ setParameterActions }}"
                    tag: "{{ tag }}"
                    webhook: "{{ webhook }}"
              form:
                parameters:
                  - advancedSettings:
                      audioExportGcsDestination: "{{ audioExportGcsDestination }}"
                      dtmfSettings: "{{ dtmfSettings }}"
                      loggingSettings: "{{ loggingSettings }}"
                      speechSettings: "{{ speechSettings }}"
                    defaultValue: "{{ defaultValue }}"
                    displayName: "{{ displayName }}"
                    entityType: "{{ entityType }}"
                    fillBehavior:
                      initialPromptFulfillment: "{{ initialPromptFulfillment }}"
                      repromptEventHandlers: "{{ repromptEventHandlers }}"
                    isList: {{ isList }}
                    redact: {{ redact }}
                    required: {{ required }}
              knowledgeConnectorSettings:
                dataStoreConnections:
                  - dataStore: "{{ dataStore }}"
                    dataStoreType: "{{ dataStoreType }}"
                    documentProcessingMode: "{{ documentProcessingMode }}"
                enabled: {{ enabled }}
                targetFlow: "{{ targetFlow }}"
                targetPage: "{{ targetPage }}"
                triggerFulfillment:
                  advancedSettings: "{{ advancedSettings }}"
                  codeBlockFunction: "{{ codeBlockFunction }}"
                  conditionalCases: "{{ conditionalCases }}"
                  enableGenerativeFallback: {{ enableGenerativeFallback }}
                  generators: "{{ generators }}"
                  messages: "{{ messages }}"
                  returnPartialResponses: {{ returnPartialResponses }}
                  setParameterActions: "{{ setParameterActions }}"
                  tag: "{{ tag }}"
                  webhook: "{{ webhook }}"
              name: "{{ name }}"
              transitionRouteGroups:
                - "{{ transitionRouteGroups }}"
              transitionRoutes:
                - condition: "{{ condition }}"
                  description: "{{ description }}"
                  intent: "{{ intent }}"
                  name: "{{ name }}"
                  targetFlow: "{{ targetFlow }}"
                  targetPage: "{{ targetPage }}"
                  triggerFulfillment:
                    advancedSettings: "{{ advancedSettings }}"
                    codeBlockFunction: "{{ codeBlockFunction }}"
                    conditionalCases: "{{ conditionalCases }}"
                    enableGenerativeFallback: {{ enableGenerativeFallback }}
                    generators: "{{ generators }}"
                    messages: "{{ messages }}"
                    returnPartialResponses: {{ returnPartialResponses }}
                    setParameterActions: "{{ setParameterActions }}"
                    tag: "{{ tag }}"
                    webhook: "{{ webhook }}"
            diagnosticInfo: "{{ diagnosticInfo }}"
            differences:
              - description: "{{ description }}"
                type: "{{ type }}"
            sessionParameters: "{{ sessionParameters }}"
            status:
              code: {{ code }}
              details: "{{ details }}"
              message: "{{ message }}"
            textResponses:
              - allowPlaybackInterruption: {{ allowPlaybackInterruption }}
                text: "{{ text }}"
            triggeredIntent:
              description: "{{ description }}"
              displayName: "{{ displayName }}"
              dtmfPattern: "{{ dtmfPattern }}"
              isFallback: {{ isFallback }}
              labels: "{{ labels }}"
              name: "{{ name }}"
              parameters:
                - entityType: "{{ entityType }}"
                  id: "{{ id }}"
                  isList: {{ isList }}
                  redact: {{ redact }}
              priority: {{ priority }}
              trainingPhrases:
                - id: "{{ id }}"
                  parts: "{{ parts }}"
                  repeatCount: {{ repeatCount }}
    - name: testConfig
      value:
        flow: "{{ flow }}"
        page: "{{ page }}"
        trackingParameters:
          - "{{ trackingParameters }}"
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
data__displayName = '{{ displayName }}',
data__lastTestResult = '{{ lastTestResult }}',
data__name = '{{ name }}',
data__notes = '{{ notes }}',
data__tags = '{{ tags }}',
data__testCaseConversationTurns = '{{ testCaseConversationTurns }}',
data__testConfig = '{{ testConfig }}'
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
    defaultValue="projects_locations_agents_test_cases_batch_run"
    values={[
        { label: 'projects_locations_agents_test_cases_batch_run', value: 'projects_locations_agents_test_cases_batch_run' },
        { label: 'projects_locations_agents_test_cases_calculate_coverage', value: 'projects_locations_agents_test_cases_calculate_coverage' },
        { label: 'projects_locations_agents_test_cases_export', value: 'projects_locations_agents_test_cases_export' },
        { label: 'projects_locations_agents_test_cases_import', value: 'projects_locations_agents_test_cases_import' },
        { label: 'projects_locations_agents_test_cases_run', value: 'projects_locations_agents_test_cases_run' }
    ]}
>
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
<TabItem value="projects_locations_agents_test_cases_import">

Successful response

```sql
EXEC google.dialogflow.test_cases.projects_locations_agents_test_cases_import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required 
@@json=
'{
"content": "{{ content }}", 
"gcsUri": "{{ gcsUri }}"
}'
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
</Tabs>
