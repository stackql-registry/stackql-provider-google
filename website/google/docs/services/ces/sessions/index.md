--- 
title: sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - sessions
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

Creates, updates, deletes, gets or lists a <code>sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.ces.sessions" /></td></tr>
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
    <td><a href="#stream_run_session"><CopyableCode code="stream_run_session" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Initiates a single-turn interaction with the CES agent. Uses server-side streaming to deliver incremental results and partial responses as they are generated. By default, complete responses (e.g., messages from callbacks or full LLM responses) are sent to the client as soon as they are available. To enable streaming individual text chunks directly from the model, set enable_text_streaming to true.</td>
</tr>
<tr>
    <td><a href="#run_session"><CopyableCode code="run_session" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Initiates a single-turn interaction with the CES agent within a session.</td>
</tr>
<tr>
    <td><a href="#generate_chat_token"><CopyableCode code="generate_chat_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Generates a session scoped token for chat widget to authenticate with Session APIs.</td>
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
<tr id="parameter-sessionsId">
    <td><CopyableCode code="sessionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="stream_run_session"
    values={[
        { label: 'stream_run_session', value: 'stream_run_session' },
        { label: 'run_session', value: 'run_session' },
        { label: 'generate_chat_token', value: 'generate_chat_token' }
    ]}
>
<TabItem value="stream_run_session">

Initiates a single-turn interaction with the CES agent. Uses server-side streaming to deliver incremental results and partial responses as they are generated. By default, complete responses (e.g., messages from callbacks or full LLM responses) are sent to the client as soon as they are available. To enable streaming individual text chunks directly from the model, set enable_text_streaming to true.

```sql
EXEC google.ces.sessions.stream_run_session 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@appsId='{{ appsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"config": "{{ config }}", 
"inputs": "{{ inputs }}"
}'
;
```
</TabItem>
<TabItem value="run_session">

Initiates a single-turn interaction with the CES agent within a session.

```sql
EXEC google.ces.sessions.run_session 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@appsId='{{ appsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"config": "{{ config }}", 
"inputs": "{{ inputs }}"
}'
;
```
</TabItem>
<TabItem value="generate_chat_token">

Generates a session scoped token for chat widget to authenticate with Session APIs.

```sql
EXEC google.ces.sessions.generate_chat_token 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@appsId='{{ appsId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"liveHandoffEnabled": {{ liveHandoffEnabled }}, 
"deployment": "{{ deployment }}", 
"recaptchaToken": "{{ recaptchaToken }}"
}'
;
```
</TabItem>
</Tabs>
