--- 
title: assistant_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - assistant_sessions
  - contactcenterinsights
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

Creates, updates, deletes, gets or lists an <code>assistant_sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assistant_sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.contactcenterinsights.assistant_sessions" /></td></tr>
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
    <td>Identifier. Resource name of the session. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/assistantSessions/&#123;assistant_session&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the session was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The display name of the session.</td>
</tr>
<tr>
    <td><CopyableCode code="messages" /></td>
    <td><code>array</code></td>
    <td>Optional. History of messages in the session.</td>
</tr>
<tr>
    <td><CopyableCode code="requester" /></td>
    <td><code>string</code></td>
    <td>Output only. The user who initiated the session.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The status of the session. (STATE_UNSPECIFIED, PROCESSING, IDLE)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the session was last updated.</td>
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
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Identifier. Resource name of the session. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/assistantSessions/&#123;assistant_session&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the session was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The display name of the session.</td>
</tr>
<tr>
    <td><CopyableCode code="messages" /></td>
    <td><code>array</code></td>
    <td>Optional. History of messages in the session.</td>
</tr>
<tr>
    <td><CopyableCode code="requester" /></td>
    <td><code>string</code></td>
    <td>Output only. The user who initiated the session.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The status of the session. (STATE_UNSPECIFIED, PROCESSING, IDLE)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the session was last updated.</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-assistantSessionsId"><code>assistantSessionsId</code></a></td>
    <td></td>
    <td>Gets an assistant session.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists assistant sessions.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-assistantSessionId"><code>assistantSessionId</code></a></td>
    <td>Creates an assistant session.</td>
</tr>
<tr>
    <td><a href="#stream_chat"><CopyableCode code="stream_chat" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-assistantSessionsId"><code>assistantSessionsId</code></a></td>
    <td></td>
    <td>Streams chat messages from the assistant.</td>
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
<tr id="parameter-assistantSessionsId">
    <td><CopyableCode code="assistantSessionsId" /></td>
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
<tr id="parameter-assistantSessionId">
    <td><CopyableCode code="assistantSessionId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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

Gets an assistant session.

```sql
SELECT
name,
createTime,
displayName,
messages,
requester,
state,
updateTime
FROM google.contactcenterinsights.assistant_sessions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND assistantSessionsId = '{{ assistantSessionsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists assistant sessions.

```sql
SELECT
name,
createTime,
displayName,
messages,
requester,
state,
updateTime
FROM google.contactcenterinsights.assistant_sessions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
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

Creates an assistant session.

```sql
INSERT INTO google.contactcenterinsights.assistant_sessions (
data__messages,
data__name,
data__displayName,
projectsId,
locationsId,
assistantSessionId
)
SELECT 
'{{ messages }}',
'{{ name }}',
'{{ displayName }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ assistantSessionId }}'
RETURNING
name,
createTime,
displayName,
messages,
requester,
state,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: assistant_sessions
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the assistant_sessions resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the assistant_sessions resource.
    - name: messages
      description: |
        Optional. History of messages in the session.
      value:
        - chunks: "{{ chunks }}"
          eventTime: "{{ eventTime }}"
          role: "{{ role }}"
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. Resource name of the session. Format: projects/{project}/locations/{location}/assistantSessions/{assistant_session}
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Optional. The display name of the session.
    - name: assistantSessionId
      value: "{{ assistantSessionId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="stream_chat"
    values={[
        { label: 'stream_chat', value: 'stream_chat' }
    ]}
>
<TabItem value="stream_chat">

Streams chat messages from the assistant.

```sql
EXEC google.contactcenterinsights.assistant_sessions.stream_chat 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@assistantSessionsId='{{ assistantSessionsId }}' --required 
@@json=
'{
"message": "{{ message }}"
}'
;
```
</TabItem>
</Tabs>
