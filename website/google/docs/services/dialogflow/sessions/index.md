--- 
title: sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - sessions
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

Creates, updates, deletes, gets or lists a <code>sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#projects_locations_agents_sessions_fulfill_intent"><CopyableCode code="projects_locations_agents_sessions_fulfill_intent" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_sessions_detect_intent"><CopyableCode code="projects_locations_agents_sessions_detect_intent" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_sessions_server_streaming_detect_intent"><CopyableCode code="projects_locations_agents_sessions_server_streaming_detect_intent" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_sessions_match_intent"><CopyableCode code="projects_locations_agents_sessions_match_intent" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_sessions_submit_answer_feedback"><CopyableCode code="projects_locations_agents_sessions_submit_answer_feedback" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_sessions_fulfill_intent"><CopyableCode code="projects_locations_agents_environments_sessions_fulfill_intent" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_sessions_match_intent"><CopyableCode code="projects_locations_agents_environments_sessions_match_intent" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_sessions_detect_intent"><CopyableCode code="projects_locations_agents_environments_sessions_detect_intent" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_sessions_server_streaming_detect_intent"><CopyableCode code="projects_locations_agents_environments_sessions_server_streaming_detect_intent" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
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
<tr id="parameter-environmentsId">
    <td><CopyableCode code="environmentsId" /></td>
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
<tr id="parameter-sessionsId">
    <td><CopyableCode code="sessionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_agents_sessions_fulfill_intent"
    values={[
        { label: 'projects_locations_agents_sessions_fulfill_intent', value: 'projects_locations_agents_sessions_fulfill_intent' },
        { label: 'projects_locations_agents_sessions_detect_intent', value: 'projects_locations_agents_sessions_detect_intent' },
        { label: 'projects_locations_agents_sessions_server_streaming_detect_intent', value: 'projects_locations_agents_sessions_server_streaming_detect_intent' },
        { label: 'projects_locations_agents_sessions_match_intent', value: 'projects_locations_agents_sessions_match_intent' },
        { label: 'projects_locations_agents_sessions_submit_answer_feedback', value: 'projects_locations_agents_sessions_submit_answer_feedback' },
        { label: 'projects_locations_agents_environments_sessions_fulfill_intent', value: 'projects_locations_agents_environments_sessions_fulfill_intent' },
        { label: 'projects_locations_agents_environments_sessions_match_intent', value: 'projects_locations_agents_environments_sessions_match_intent' },
        { label: 'projects_locations_agents_environments_sessions_detect_intent', value: 'projects_locations_agents_environments_sessions_detect_intent' },
        { label: 'projects_locations_agents_environments_sessions_server_streaming_detect_intent', value: 'projects_locations_agents_environments_sessions_server_streaming_detect_intent' }
    ]}
>
<TabItem value="projects_locations_agents_sessions_fulfill_intent">

Successful response

```sql
EXEC google.dialogflow.sessions.projects_locations_agents_sessions_fulfill_intent 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"match": "{{ match }}", 
"matchIntentRequest": "{{ matchIntentRequest }}", 
"outputAudioConfig": "{{ outputAudioConfig }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_sessions_detect_intent">

Successful response

```sql
EXEC google.dialogflow.sessions.projects_locations_agents_sessions_detect_intent 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"queryParams": "{{ queryParams }}", 
"queryInput": "{{ queryInput }}", 
"outputAudioConfig": "{{ outputAudioConfig }}", 
"responseView": "{{ responseView }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_sessions_server_streaming_detect_intent">

Successful response

```sql
EXEC google.dialogflow.sessions.projects_locations_agents_sessions_server_streaming_detect_intent 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"queryParams": "{{ queryParams }}", 
"queryInput": "{{ queryInput }}", 
"outputAudioConfig": "{{ outputAudioConfig }}", 
"responseView": "{{ responseView }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_sessions_match_intent">

Successful response

```sql
EXEC google.dialogflow.sessions.projects_locations_agents_sessions_match_intent 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"queryParams": "{{ queryParams }}", 
"queryInput": "{{ queryInput }}", 
"persistParameterChanges": {{ persistParameterChanges }}
}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_sessions_submit_answer_feedback">

Successful response

```sql
EXEC google.dialogflow.sessions.projects_locations_agents_sessions_submit_answer_feedback 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"updateMask": "{{ updateMask }}", 
"responseId": "{{ responseId }}", 
"answerFeedback": "{{ answerFeedback }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_environments_sessions_fulfill_intent">

Successful response

```sql
EXEC google.dialogflow.sessions.projects_locations_agents_environments_sessions_fulfill_intent 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"match": "{{ match }}", 
"matchIntentRequest": "{{ matchIntentRequest }}", 
"outputAudioConfig": "{{ outputAudioConfig }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_environments_sessions_match_intent">

Successful response

```sql
EXEC google.dialogflow.sessions.projects_locations_agents_environments_sessions_match_intent 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"queryParams": "{{ queryParams }}", 
"queryInput": "{{ queryInput }}", 
"persistParameterChanges": {{ persistParameterChanges }}
}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_environments_sessions_detect_intent">

Successful response

```sql
EXEC google.dialogflow.sessions.projects_locations_agents_environments_sessions_detect_intent 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"queryParams": "{{ queryParams }}", 
"queryInput": "{{ queryInput }}", 
"outputAudioConfig": "{{ outputAudioConfig }}", 
"responseView": "{{ responseView }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_environments_sessions_server_streaming_detect_intent">

Successful response

```sql
EXEC google.dialogflow.sessions.projects_locations_agents_environments_sessions_server_streaming_detect_intent 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"queryParams": "{{ queryParams }}", 
"queryInput": "{{ queryInput }}", 
"outputAudioConfig": "{{ outputAudioConfig }}", 
"responseView": "{{ responseView }}"
}'
;
```
</TabItem>
</Tabs>
