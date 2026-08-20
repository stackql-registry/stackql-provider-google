--- 
title: agents
hide_title: false
hide_table_of_contents: false
keywords:
  - agents
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

Creates, updates, deletes, gets or lists an <code>agents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.agents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_agents_get"
    values={[
        { label: 'projects_locations_agents_get', value: 'projects_locations_agents_get' },
        { label: 'projects_locations_agents_list', value: 'projects_locations_agents_list' }
    ]}
>
<TabItem value="projects_locations_agents_get">

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
    <td><CopyableCode code="answerFeedbackSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3AgentAnswerFeedbackSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="avatarUri" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="clientCertificateSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3AgentClientCertificateSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultLanguageCode" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td><CopyableCode code="enableMultiLanguageTraining" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="enableSpellCorrection" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="enableStackdriverLogging" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="genAppBuilderSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3AgentGenAppBuilderSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="gitIntegrationSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3AgentGitIntegrationSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="locked" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="personalizationSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3AgentPersonalizationSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="securitySettings" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="speechToTextSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3SpeechToTextSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="startFlow" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="startPlaybook" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="supportedLanguageCodes" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="textToSpeechSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3TextToSpeechSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_list">

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
    <td><CopyableCode code="answerFeedbackSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3AgentAnswerFeedbackSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="avatarUri" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="clientCertificateSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3AgentClientCertificateSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultLanguageCode" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td><CopyableCode code="enableMultiLanguageTraining" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="enableSpellCorrection" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="enableStackdriverLogging" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="genAppBuilderSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3AgentGenAppBuilderSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="gitIntegrationSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3AgentGitIntegrationSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="locked" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="personalizationSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3AgentPersonalizationSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="securitySettings" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="speechToTextSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3SpeechToTextSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="startFlow" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="startPlaybook" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="supportedLanguageCodes" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="textToSpeechSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3TextToSpeechSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string</code></td>
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
    <td><a href="#projects_locations_agents_get"><CopyableCode code="projects_locations_agents_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_list"><CopyableCode code="projects_locations_agents_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_create"><CopyableCode code="projects_locations_agents_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_patch"><CopyableCode code="projects_locations_agents_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_delete"><CopyableCode code="projects_locations_agents_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_export"><CopyableCode code="projects_locations_agents_export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_restore"><CopyableCode code="projects_locations_agents_restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_validate"><CopyableCode code="projects_locations_agents_validate" /></a></td>
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
    defaultValue="projects_locations_agents_get"
    values={[
        { label: 'projects_locations_agents_get', value: 'projects_locations_agents_get' },
        { label: 'projects_locations_agents_list', value: 'projects_locations_agents_list' }
    ]}
>
<TabItem value="projects_locations_agents_get">

Successful response

```sql
SELECT
name,
advancedSettings,
answerFeedbackSettings,
avatarUri,
clientCertificateSettings,
defaultLanguageCode,
description,
displayName,
enableMultiLanguageTraining,
enableSpellCorrection,
enableStackdriverLogging,
genAppBuilderSettings,
gitIntegrationSettings,
locked,
personalizationSettings,
satisfiesPzi,
satisfiesPzs,
securitySettings,
speechToTextSettings,
startFlow,
startPlaybook,
supportedLanguageCodes,
textToSpeechSettings,
timeZone
FROM google.dialogflow.agents
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_agents_list">

Successful response

```sql
SELECT
name,
advancedSettings,
answerFeedbackSettings,
avatarUri,
clientCertificateSettings,
defaultLanguageCode,
description,
displayName,
enableMultiLanguageTraining,
enableSpellCorrection,
enableStackdriverLogging,
genAppBuilderSettings,
gitIntegrationSettings,
locked,
personalizationSettings,
satisfiesPzi,
satisfiesPzs,
securitySettings,
speechToTextSettings,
startFlow,
startPlaybook,
supportedLanguageCodes,
textToSpeechSettings,
timeZone
FROM google.dialogflow.agents
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
    defaultValue="projects_locations_agents_create"
    values={[
        { label: 'projects_locations_agents_create', value: 'projects_locations_agents_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_agents_create">

No description available.

```sql
INSERT INTO google.dialogflow.agents (
data__advancedSettings,
data__answerFeedbackSettings,
data__avatarUri,
data__clientCertificateSettings,
data__defaultLanguageCode,
data__description,
data__displayName,
data__enableMultiLanguageTraining,
data__enableSpellCorrection,
data__enableStackdriverLogging,
data__genAppBuilderSettings,
data__gitIntegrationSettings,
data__locked,
data__name,
data__personalizationSettings,
data__securitySettings,
data__speechToTextSettings,
data__startFlow,
data__startPlaybook,
data__supportedLanguageCodes,
data__textToSpeechSettings,
data__timeZone,
projectsId,
locationsId
)
SELECT 
'{{ advancedSettings }}',
'{{ answerFeedbackSettings }}',
'{{ avatarUri }}',
'{{ clientCertificateSettings }}',
'{{ defaultLanguageCode }}',
'{{ description }}',
'{{ displayName }}',
{{ enableMultiLanguageTraining }},
{{ enableSpellCorrection }},
{{ enableStackdriverLogging }},
'{{ genAppBuilderSettings }}',
'{{ gitIntegrationSettings }}',
{{ locked }},
'{{ name }}',
'{{ personalizationSettings }}',
'{{ securitySettings }}',
'{{ speechToTextSettings }}',
'{{ startFlow }}',
'{{ startPlaybook }}',
'{{ supportedLanguageCodes }}',
'{{ textToSpeechSettings }}',
'{{ timeZone }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
advancedSettings,
answerFeedbackSettings,
avatarUri,
clientCertificateSettings,
defaultLanguageCode,
description,
displayName,
enableMultiLanguageTraining,
enableSpellCorrection,
enableStackdriverLogging,
genAppBuilderSettings,
gitIntegrationSettings,
locked,
personalizationSettings,
satisfiesPzi,
satisfiesPzs,
securitySettings,
speechToTextSettings,
startFlow,
startPlaybook,
supportedLanguageCodes,
textToSpeechSettings,
timeZone
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: agents
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the agents resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the agents resource.
    - name: advancedSettings
      value:
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
    - name: answerFeedbackSettings
      value:
        enableAnswerFeedback: {{ enableAnswerFeedback }}
    - name: avatarUri
      value: "{{ avatarUri }}"
    - name: clientCertificateSettings
      value:
        passphrase: "{{ passphrase }}"
        privateKey: "{{ privateKey }}"
        sslCertificate: "{{ sslCertificate }}"
    - name: defaultLanguageCode
      value: "{{ defaultLanguageCode }}"
    - name: description
      value: "{{ description }}"
    - name: displayName
      value: "{{ displayName }}"
    - name: enableMultiLanguageTraining
      value: {{ enableMultiLanguageTraining }}
    - name: enableSpellCorrection
      value: {{ enableSpellCorrection }}
    - name: enableStackdriverLogging
      value: {{ enableStackdriverLogging }}
    - name: genAppBuilderSettings
      value:
        engine: "{{ engine }}"
    - name: gitIntegrationSettings
      value:
        githubSettings:
          accessToken: "{{ accessToken }}"
          branches:
            - "{{ branches }}"
          displayName: "{{ displayName }}"
          repositoryUri: "{{ repositoryUri }}"
          trackingBranch: "{{ trackingBranch }}"
    - name: locked
      value: {{ locked }}
    - name: name
      value: "{{ name }}"
    - name: personalizationSettings
      value:
        defaultEndUserMetadata: "{{ defaultEndUserMetadata }}"
    - name: securitySettings
      value: "{{ securitySettings }}"
    - name: speechToTextSettings
      value:
        enableSpeechAdaptation: {{ enableSpeechAdaptation }}
    - name: startFlow
      value: "{{ startFlow }}"
    - name: startPlaybook
      value: "{{ startPlaybook }}"
    - name: supportedLanguageCodes
      value:
        - "{{ supportedLanguageCodes }}"
    - name: textToSpeechSettings
      value:
        synthesizeSpeechConfigs: "{{ synthesizeSpeechConfigs }}"
    - name: timeZone
      value: "{{ timeZone }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_agents_patch"
    values={[
        { label: 'projects_locations_agents_patch', value: 'projects_locations_agents_patch' }
    ]}
>
<TabItem value="projects_locations_agents_patch">

No description available.

```sql
UPDATE google.dialogflow.agents
SET 
data__advancedSettings = '{{ advancedSettings }}',
data__answerFeedbackSettings = '{{ answerFeedbackSettings }}',
data__avatarUri = '{{ avatarUri }}',
data__clientCertificateSettings = '{{ clientCertificateSettings }}',
data__defaultLanguageCode = '{{ defaultLanguageCode }}',
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__enableMultiLanguageTraining = {{ enableMultiLanguageTraining }},
data__enableSpellCorrection = {{ enableSpellCorrection }},
data__enableStackdriverLogging = {{ enableStackdriverLogging }},
data__genAppBuilderSettings = '{{ genAppBuilderSettings }}',
data__gitIntegrationSettings = '{{ gitIntegrationSettings }}',
data__locked = {{ locked }},
data__name = '{{ name }}',
data__personalizationSettings = '{{ personalizationSettings }}',
data__securitySettings = '{{ securitySettings }}',
data__speechToTextSettings = '{{ speechToTextSettings }}',
data__startFlow = '{{ startFlow }}',
data__startPlaybook = '{{ startPlaybook }}',
data__supportedLanguageCodes = '{{ supportedLanguageCodes }}',
data__textToSpeechSettings = '{{ textToSpeechSettings }}',
data__timeZone = '{{ timeZone }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
advancedSettings,
answerFeedbackSettings,
avatarUri,
clientCertificateSettings,
defaultLanguageCode,
description,
displayName,
enableMultiLanguageTraining,
enableSpellCorrection,
enableStackdriverLogging,
genAppBuilderSettings,
gitIntegrationSettings,
locked,
personalizationSettings,
satisfiesPzi,
satisfiesPzs,
securitySettings,
speechToTextSettings,
startFlow,
startPlaybook,
supportedLanguageCodes,
textToSpeechSettings,
timeZone;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_agents_delete"
    values={[
        { label: 'projects_locations_agents_delete', value: 'projects_locations_agents_delete' }
    ]}
>
<TabItem value="projects_locations_agents_delete">

No description available.

```sql
DELETE FROM google.dialogflow.agents
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_agents_export"
    values={[
        { label: 'projects_locations_agents_export', value: 'projects_locations_agents_export' },
        { label: 'projects_locations_agents_restore', value: 'projects_locations_agents_restore' },
        { label: 'projects_locations_agents_validate', value: 'projects_locations_agents_validate' }
    ]}
>
<TabItem value="projects_locations_agents_export">

Successful response

```sql
EXEC google.dialogflow.agents.projects_locations_agents_export 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required 
@@json=
'{
"agentUri": "{{ agentUri }}", 
"dataFormat": "{{ dataFormat }}", 
"environment": "{{ environment }}", 
"gitDestination": "{{ gitDestination }}", 
"includeBigqueryExportSettings": {{ includeBigqueryExportSettings }}
}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_restore">

Successful response

```sql
EXEC google.dialogflow.agents.projects_locations_agents_restore 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required 
@@json=
'{
"agentContent": "{{ agentContent }}", 
"agentUri": "{{ agentUri }}", 
"gitSource": "{{ gitSource }}", 
"restoreOption": "{{ restoreOption }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_validate">

Successful response

```sql
EXEC google.dialogflow.agents.projects_locations_agents_validate 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required 
@@json=
'{
"languageCode": "{{ languageCode }}"
}'
;
```
</TabItem>
</Tabs>
