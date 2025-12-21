--- 
title: sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - sessions
  - aiplatform
  - google
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage google resources using SQL
custom_edit_url: null
image: /img/stackql-google-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sessions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.sessions" /></td></tr>
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
    <td>Identifier. The resource name of the session. Format: 'projects/&#123;project&#125;/locations/&#123;location&#125;/reasoningEngines/&#123;reasoning_engine&#125;/sessions/&#123;session&#125;'.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the session was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The display name of the session.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Timestamp of when this session is considered expired. This is *always* provided on output, regardless of what was sent on input. The minimum value is 24 hours from the time of creation.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels with user-defined metadata to organize your Sessions. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionState" /></td>
    <td><code>object</code></td>
    <td>Optional. Session specific memory which stores key conversation points.</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. Input only. The TTL for this session. The minimum value is 24 hours.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the session was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. String id provided by the user</td>
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
    <td>Identifier. The resource name of the session. Format: 'projects/&#123;project&#125;/locations/&#123;location&#125;/reasoningEngines/&#123;reasoning_engine&#125;/sessions/&#123;session&#125;'.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the session was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The display name of the session.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Timestamp of when this session is considered expired. This is *always* provided on output, regardless of what was sent on input. The minimum value is 24 hours from the time of creation.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels with user-defined metadata to organize your Sessions. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionState" /></td>
    <td><code>object</code></td>
    <td>Optional. Session specific memory which stores key conversation points.</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. Input only. The TTL for this session. The minimum value is 24 hours.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the session was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. String id provided by the user</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Gets details of the specific Session.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists Sessions in a given reasoning engine.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a></td>
    <td></td>
    <td>Creates a new Session.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specific Session.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Deletes details of the specific Session.</td>
</tr>
<tr>
    <td><a href="#append_event"><CopyableCode code="append_event" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Appends an event to a given session.</td>
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
<tr id="parameter-reasoningEnginesId">
    <td><CopyableCode code="reasoningEnginesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sessionsId">
    <td><CopyableCode code="sessionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets details of the specific Session.

```sql
SELECT
name,
createTime,
displayName,
expireTime,
labels,
sessionState,
ttl,
updateTime,
userId
FROM google.aiplatform.sessions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND reasoningEnginesId = '{{ reasoningEnginesId }}' -- required
AND sessionsId = '{{ sessionsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Sessions in a given reasoning engine.

```sql
SELECT
name,
createTime,
displayName,
expireTime,
labels,
sessionState,
ttl,
updateTime,
userId
FROM google.aiplatform.sessions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND reasoningEnginesId = '{{ reasoningEnginesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
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

Creates a new Session.

```sql
INSERT INTO google.aiplatform.sessions (
data__userId,
data__expireTime,
data__sessionState,
data__name,
data__displayName,
data__labels,
data__ttl,
projectsId,
locationsId,
reasoningEnginesId
)
SELECT 
'{{ userId }}',
'{{ expireTime }}',
'{{ sessionState }}',
'{{ name }}',
'{{ displayName }}',
'{{ labels }}',
'{{ ttl }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ reasoningEnginesId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: sessions
  props:
    - name: projectsId
      value: string
      description: Required parameter for the sessions resource.
    - name: locationsId
      value: string
      description: Required parameter for the sessions resource.
    - name: reasoningEnginesId
      value: string
      description: Required parameter for the sessions resource.
    - name: userId
      value: string
      description: >
        Required. Immutable. String id provided by the user
        
    - name: expireTime
      value: string
      description: >
        Optional. Timestamp of when this session is considered expired. This is *always* provided on output, regardless of what was sent on input. The minimum value is 24 hours from the time of creation.
        
    - name: sessionState
      value: object
      description: >
        Optional. Session specific memory which stores key conversation points.
        
    - name: name
      value: string
      description: >
        Identifier. The resource name of the session. Format: 'projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/sessions/{session}'.
        
    - name: displayName
      value: string
      description: >
        Optional. The display name of the session.
        
    - name: labels
      value: object
      description: >
        The labels with user-defined metadata to organize your Sessions. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.
        
    - name: ttl
      value: string
      description: >
        Optional. Input only. The TTL for this session. The minimum value is 24 hours.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' }
    ]}
>
<TabItem value="patch">

Updates the specific Session.

```sql
UPDATE google.aiplatform.sessions
SET 
data__userId = '{{ userId }}',
data__expireTime = '{{ expireTime }}',
data__sessionState = '{{ sessionState }}',
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__labels = '{{ labels }}',
data__ttl = '{{ ttl }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND reasoningEnginesId = '{{ reasoningEnginesId }}' --required
AND sessionsId = '{{ sessionsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
displayName,
expireTime,
labels,
sessionState,
ttl,
updateTime,
userId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes details of the specific Session.

```sql
DELETE FROM google.aiplatform.sessions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND reasoningEnginesId = '{{ reasoningEnginesId }}' --required
AND sessionsId = '{{ sessionsId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="append_event"
    values={[
        { label: 'append_event', value: 'append_event' }
    ]}
>
<TabItem value="append_event">

Appends an event to a given session.

```sql
EXEC google.aiplatform.sessions.append_event 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@reasoningEnginesId='{{ reasoningEnginesId }}' --required, 
@sessionsId='{{ sessionsId }}' --required 
@@json=
'{
"author": "{{ author }}", 
"content": "{{ content }}", 
"invocationId": "{{ invocationId }}", 
"timestamp": "{{ timestamp }}", 
"actions": "{{ actions }}", 
"errorCode": "{{ errorCode }}", 
"errorMessage": "{{ errorMessage }}", 
"eventMetadata": "{{ eventMetadata }}", 
"name": "{{ name }}"
}'
;
```
</TabItem>
</Tabs>
