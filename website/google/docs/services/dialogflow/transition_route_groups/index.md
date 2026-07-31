--- 
title: transition_route_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - transition_route_groups
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

Creates, updates, deletes, gets or lists a <code>transition_route_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transition_route_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.transition_route_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_agents_flows_transition_route_groups_get"
    values={[
        { label: 'projects_locations_agents_flows_transition_route_groups_get', value: 'projects_locations_agents_flows_transition_route_groups_get' },
        { label: 'projects_locations_agents_flows_transition_route_groups_list', value: 'projects_locations_agents_flows_transition_route_groups_list' },
        { label: 'projects_locations_agents_transition_route_groups_get', value: 'projects_locations_agents_transition_route_groups_get' },
        { label: 'projects_locations_agents_transition_route_groups_list', value: 'projects_locations_agents_transition_route_groups_list' }
    ]}
>
<TabItem value="projects_locations_agents_flows_transition_route_groups_get">

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
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
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
<TabItem value="projects_locations_agents_flows_transition_route_groups_list">

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
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
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
<TabItem value="projects_locations_agents_transition_route_groups_get">

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
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
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
<TabItem value="projects_locations_agents_transition_route_groups_list">

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
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
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
    <td><a href="#projects_locations_agents_flows_transition_route_groups_get"><CopyableCode code="projects_locations_agents_flows_transition_route_groups_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a>, <a href="#parameter-transitionRouteGroupsId"><code>transitionRouteGroupsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_transition_route_groups_list"><CopyableCode code="projects_locations_agents_flows_transition_route_groups_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_transition_route_groups_get"><CopyableCode code="projects_locations_agents_transition_route_groups_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-transitionRouteGroupsId"><code>transitionRouteGroupsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_transition_route_groups_list"><CopyableCode code="projects_locations_agents_transition_route_groups_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_transition_route_groups_create"><CopyableCode code="projects_locations_agents_flows_transition_route_groups_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_transition_route_groups_create"><CopyableCode code="projects_locations_agents_transition_route_groups_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_transition_route_groups_patch"><CopyableCode code="projects_locations_agents_flows_transition_route_groups_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a>, <a href="#parameter-transitionRouteGroupsId"><code>transitionRouteGroupsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_transition_route_groups_patch"><CopyableCode code="projects_locations_agents_transition_route_groups_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-transitionRouteGroupsId"><code>transitionRouteGroupsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_transition_route_groups_delete"><CopyableCode code="projects_locations_agents_flows_transition_route_groups_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a>, <a href="#parameter-transitionRouteGroupsId"><code>transitionRouteGroupsId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_transition_route_groups_delete"><CopyableCode code="projects_locations_agents_transition_route_groups_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-transitionRouteGroupsId"><code>transitionRouteGroupsId</code></a></td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-transitionRouteGroupsId">
    <td><CopyableCode code="transitionRouteGroupsId" /></td>
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
    defaultValue="projects_locations_agents_flows_transition_route_groups_get"
    values={[
        { label: 'projects_locations_agents_flows_transition_route_groups_get', value: 'projects_locations_agents_flows_transition_route_groups_get' },
        { label: 'projects_locations_agents_flows_transition_route_groups_list', value: 'projects_locations_agents_flows_transition_route_groups_list' },
        { label: 'projects_locations_agents_transition_route_groups_get', value: 'projects_locations_agents_transition_route_groups_get' },
        { label: 'projects_locations_agents_transition_route_groups_list', value: 'projects_locations_agents_transition_route_groups_list' }
    ]}
>
<TabItem value="projects_locations_agents_flows_transition_route_groups_get">

Successful response

```sql
SELECT
name,
displayName,
transitionRoutes
FROM google.dialogflow.transition_route_groups
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND flowsId = '{{ flowsId }}' -- required
AND transitionRouteGroupsId = '{{ transitionRouteGroupsId }}' -- required
AND languageCode = '{{ languageCode }}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_flows_transition_route_groups_list">

Successful response

```sql
SELECT
name,
displayName,
transitionRoutes
FROM google.dialogflow.transition_route_groups
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND flowsId = '{{ flowsId }}' -- required
AND languageCode = '{{ languageCode }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_transition_route_groups_get">

Successful response

```sql
SELECT
name,
displayName,
transitionRoutes
FROM google.dialogflow.transition_route_groups
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND transitionRouteGroupsId = '{{ transitionRouteGroupsId }}' -- required
AND languageCode = '{{ languageCode }}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_transition_route_groups_list">

Successful response

```sql
SELECT
name,
displayName,
transitionRoutes
FROM google.dialogflow.transition_route_groups
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
    defaultValue="projects_locations_agents_flows_transition_route_groups_create"
    values={[
        { label: 'projects_locations_agents_flows_transition_route_groups_create', value: 'projects_locations_agents_flows_transition_route_groups_create' },
        { label: 'projects_locations_agents_transition_route_groups_create', value: 'projects_locations_agents_transition_route_groups_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_agents_flows_transition_route_groups_create">

No description available.

```sql
INSERT INTO google.dialogflow.transition_route_groups (
data__name,
data__displayName,
data__transitionRoutes,
projectsId,
locationsId,
agentsId,
flowsId,
languageCode
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ transitionRoutes }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}',
'{{ flowsId }}',
'{{ languageCode }}'
RETURNING
name,
displayName,
transitionRoutes
;
```
</TabItem>
<TabItem value="projects_locations_agents_transition_route_groups_create">

No description available.

```sql
INSERT INTO google.dialogflow.transition_route_groups (
data__name,
data__displayName,
data__transitionRoutes,
projectsId,
locationsId,
agentsId,
languageCode
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ transitionRoutes }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}',
'{{ languageCode }}'
RETURNING
name,
displayName,
transitionRoutes
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: transition_route_groups
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the transition_route_groups resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the transition_route_groups resource.
    - name: agentsId
      value: "{{ agentsId }}"
      description: Required parameter for the transition_route_groups resource.
    - name: flowsId
      value: "{{ flowsId }}"
      description: Required parameter for the transition_route_groups resource.
    - name: name
      value: "{{ name }}"
    - name: displayName
      value: "{{ displayName }}"
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
    - name: languageCode
      value: "{{ languageCode }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_agents_flows_transition_route_groups_patch"
    values={[
        { label: 'projects_locations_agents_flows_transition_route_groups_patch', value: 'projects_locations_agents_flows_transition_route_groups_patch' },
        { label: 'projects_locations_agents_transition_route_groups_patch', value: 'projects_locations_agents_transition_route_groups_patch' }
    ]}
>
<TabItem value="projects_locations_agents_flows_transition_route_groups_patch">

No description available.

```sql
UPDATE google.dialogflow.transition_route_groups
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__transitionRoutes = '{{ transitionRoutes }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND flowsId = '{{ flowsId }}' --required
AND transitionRouteGroupsId = '{{ transitionRouteGroupsId }}' --required
AND languageCode = '{{ languageCode}}'
AND updateMask = '{{ updateMask}}'
RETURNING
name,
displayName,
transitionRoutes;
```
</TabItem>
<TabItem value="projects_locations_agents_transition_route_groups_patch">

No description available.

```sql
UPDATE google.dialogflow.transition_route_groups
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__transitionRoutes = '{{ transitionRoutes }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND transitionRouteGroupsId = '{{ transitionRouteGroupsId }}' --required
AND languageCode = '{{ languageCode}}'
AND updateMask = '{{ updateMask}}'
RETURNING
name,
displayName,
transitionRoutes;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_agents_flows_transition_route_groups_delete"
    values={[
        { label: 'projects_locations_agents_flows_transition_route_groups_delete', value: 'projects_locations_agents_flows_transition_route_groups_delete' },
        { label: 'projects_locations_agents_transition_route_groups_delete', value: 'projects_locations_agents_transition_route_groups_delete' }
    ]}
>
<TabItem value="projects_locations_agents_flows_transition_route_groups_delete">

No description available.

```sql
DELETE FROM google.dialogflow.transition_route_groups
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND flowsId = '{{ flowsId }}' --required
AND transitionRouteGroupsId = '{{ transitionRouteGroupsId }}' --required
AND force = '{{ force }}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_transition_route_groups_delete">

No description available.

```sql
DELETE FROM google.dialogflow.transition_route_groups
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND transitionRouteGroupsId = '{{ transitionRouteGroupsId }}' --required
AND force = '{{ force }}'
;
```
</TabItem>
</Tabs>
