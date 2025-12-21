--- 
title: memories
hide_title: false
hide_table_of_contents: false
keywords:
  - memories
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

Creates, updates, deletes, gets or lists a <code>memories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>memories</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.memories" /></td></tr>
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
    <td>Identifier. The resource name of the Memory. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/reasoningEngines/&#123;reasoning_engine&#125;/memories/&#123;memory&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Memory was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the Memory.</td>
</tr>
<tr>
    <td><CopyableCode code="disableMemoryRevisions" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Input only. If true, no revision will be created for this request.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Display name of the Memory.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Timestamp of when this resource is considered expired. This is *always* provided on output when `expiration` is set on input, regardless of whether `expire_time` or `ttl` was provided.</td>
</tr>
<tr>
    <td><CopyableCode code="fact" /></td>
    <td><code>string</code></td>
    <td>Required. Semantic knowledge extracted from the source content.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionExpireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Input only. Timestamp of when the revision is considered expired. If not set, the memory revision will be kept until manually deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionLabels" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. The labels to apply to the Memory Revision created as a result of this request.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionTtl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. Input only. The TTL for the revision. The expiration time is computed: now + TTL.</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>object</code></td>
    <td>Required. Immutable. The scope of the Memory. Memories are isolated within their scope. The scope is defined when creating or generating memories. Scope values cannot contain the wildcard character '*'.</td>
</tr>
<tr>
    <td><CopyableCode code="topics" /></td>
    <td><code>array</code></td>
    <td>Optional. The Topics of the Memory.</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. Input only. The TTL for this resource. The expiration time is computed: now + TTL.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Memory was most recently updated.</td>
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
    <td>Identifier. The resource name of the Memory. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/reasoningEngines/&#123;reasoning_engine&#125;/memories/&#123;memory&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Memory was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the Memory.</td>
</tr>
<tr>
    <td><CopyableCode code="disableMemoryRevisions" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Input only. If true, no revision will be created for this request.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Display name of the Memory.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Timestamp of when this resource is considered expired. This is *always* provided on output when `expiration` is set on input, regardless of whether `expire_time` or `ttl` was provided.</td>
</tr>
<tr>
    <td><CopyableCode code="fact" /></td>
    <td><code>string</code></td>
    <td>Required. Semantic knowledge extracted from the source content.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionExpireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Input only. Timestamp of when the revision is considered expired. If not set, the memory revision will be kept until manually deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionLabels" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. The labels to apply to the Memory Revision created as a result of this request.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionTtl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. Input only. The TTL for the revision. The expiration time is computed: now + TTL.</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>object</code></td>
    <td>Required. Immutable. The scope of the Memory. Memories are isolated within their scope. The scope is defined when creating or generating memories. Scope values cannot contain the wildcard character '*'.</td>
</tr>
<tr>
    <td><CopyableCode code="topics" /></td>
    <td><code>array</code></td>
    <td>Optional. The Topics of the Memory.</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. Input only. The TTL for this resource. The expiration time is computed: now + TTL.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Memory was most recently updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a>, <a href="#parameter-memoriesId"><code>memoriesId</code></a></td>
    <td></td>
    <td>Get a Memory.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>List Memories.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a></td>
    <td></td>
    <td>Create a Memory.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a>, <a href="#parameter-memoriesId"><code>memoriesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update a Memory.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a>, <a href="#parameter-memoriesId"><code>memoriesId</code></a></td>
    <td></td>
    <td>Delete a Memory.</td>
</tr>
<tr>
    <td><a href="#rollback"><CopyableCode code="rollback" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a>, <a href="#parameter-memoriesId"><code>memoriesId</code></a></td>
    <td></td>
    <td>Rollback Memory to a specific revision.</td>
</tr>
<tr>
    <td><a href="#retrieve"><CopyableCode code="retrieve" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a></td>
    <td></td>
    <td>Retrieve memories.</td>
</tr>
<tr>
    <td><a href="#generate"><CopyableCode code="generate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a></td>
    <td></td>
    <td>Generate memories.</td>
</tr>
<tr>
    <td><a href="#purge"><CopyableCode code="purge" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a></td>
    <td></td>
    <td>Purge memories.</td>
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
<tr id="parameter-memoriesId">
    <td><CopyableCode code="memoriesId" /></td>
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

Get a Memory.

```sql
SELECT
name,
createTime,
description,
disableMemoryRevisions,
displayName,
expireTime,
fact,
revisionExpireTime,
revisionLabels,
revisionTtl,
scope,
topics,
ttl,
updateTime
FROM google.aiplatform.memories
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND reasoningEnginesId = '{{ reasoningEnginesId }}' -- required
AND memoriesId = '{{ memoriesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

List Memories.

```sql
SELECT
name,
createTime,
description,
disableMemoryRevisions,
displayName,
expireTime,
fact,
revisionExpireTime,
revisionLabels,
revisionTtl,
scope,
topics,
ttl,
updateTime
FROM google.aiplatform.memories
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND reasoningEnginesId = '{{ reasoningEnginesId }}' -- required
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
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

Create a Memory.

```sql
INSERT INTO google.aiplatform.memories (
data__expireTime,
data__disableMemoryRevisions,
data__revisionExpireTime,
data__name,
data__revisionTtl,
data__ttl,
data__fact,
data__displayName,
data__topics,
data__scope,
data__description,
data__revisionLabels,
projectsId,
locationsId,
reasoningEnginesId
)
SELECT 
'{{ expireTime }}',
{{ disableMemoryRevisions }},
'{{ revisionExpireTime }}',
'{{ name }}',
'{{ revisionTtl }}',
'{{ ttl }}',
'{{ fact }}',
'{{ displayName }}',
'{{ topics }}',
'{{ scope }}',
'{{ description }}',
'{{ revisionLabels }}',
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
- name: memories
  props:
    - name: projectsId
      value: string
      description: Required parameter for the memories resource.
    - name: locationsId
      value: string
      description: Required parameter for the memories resource.
    - name: reasoningEnginesId
      value: string
      description: Required parameter for the memories resource.
    - name: expireTime
      value: string
      description: >
        Optional. Timestamp of when this resource is considered expired. This is *always* provided on output when `expiration` is set on input, regardless of whether `expire_time` or `ttl` was provided.
        
    - name: disableMemoryRevisions
      value: boolean
      description: >
        Optional. Input only. If true, no revision will be created for this request.
        
    - name: revisionExpireTime
      value: string
      description: >
        Optional. Input only. Timestamp of when the revision is considered expired. If not set, the memory revision will be kept until manually deleted.
        
    - name: name
      value: string
      description: >
        Identifier. The resource name of the Memory. Format: `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/memories/{memory}`
        
    - name: revisionTtl
      value: string
      description: >
        Optional. Input only. The TTL for the revision. The expiration time is computed: now + TTL.
        
    - name: ttl
      value: string
      description: >
        Optional. Input only. The TTL for this resource. The expiration time is computed: now + TTL.
        
    - name: fact
      value: string
      description: >
        Required. Semantic knowledge extracted from the source content.
        
    - name: displayName
      value: string
      description: >
        Optional. Display name of the Memory.
        
    - name: topics
      value: array
      description: >
        Optional. The Topics of the Memory.
        
    - name: scope
      value: object
      description: >
        Required. Immutable. The scope of the Memory. Memories are isolated within their scope. The scope is defined when creating or generating memories. Scope values cannot contain the wildcard character '*'.
        
    - name: description
      value: string
      description: >
        Optional. Description of the Memory.
        
    - name: revisionLabels
      value: object
      description: >
        Optional. Input only. The labels to apply to the Memory Revision created as a result of this request.
        
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

Update a Memory.

```sql
UPDATE google.aiplatform.memories
SET 
data__expireTime = '{{ expireTime }}',
data__disableMemoryRevisions = {{ disableMemoryRevisions }},
data__revisionExpireTime = '{{ revisionExpireTime }}',
data__name = '{{ name }}',
data__revisionTtl = '{{ revisionTtl }}',
data__ttl = '{{ ttl }}',
data__fact = '{{ fact }}',
data__displayName = '{{ displayName }}',
data__topics = '{{ topics }}',
data__scope = '{{ scope }}',
data__description = '{{ description }}',
data__revisionLabels = '{{ revisionLabels }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND reasoningEnginesId = '{{ reasoningEnginesId }}' --required
AND memoriesId = '{{ memoriesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
done,
error,
metadata,
response;
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

Delete a Memory.

```sql
DELETE FROM google.aiplatform.memories
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND reasoningEnginesId = '{{ reasoningEnginesId }}' --required
AND memoriesId = '{{ memoriesId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="rollback"
    values={[
        { label: 'rollback', value: 'rollback' },
        { label: 'retrieve', value: 'retrieve' },
        { label: 'generate', value: 'generate' },
        { label: 'purge', value: 'purge' }
    ]}
>
<TabItem value="rollback">

Rollback Memory to a specific revision.

```sql
EXEC google.aiplatform.memories.rollback 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@reasoningEnginesId='{{ reasoningEnginesId }}' --required, 
@memoriesId='{{ memoriesId }}' --required 
@@json=
'{
"targetRevisionId": "{{ targetRevisionId }}"
}'
;
```
</TabItem>
<TabItem value="retrieve">

Retrieve memories.

```sql
EXEC google.aiplatform.memories.retrieve 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@reasoningEnginesId='{{ reasoningEnginesId }}' --required 
@@json=
'{
"simpleRetrievalParams": "{{ simpleRetrievalParams }}", 
"similaritySearchParams": "{{ similaritySearchParams }}", 
"scope": "{{ scope }}", 
"filter": "{{ filter }}"
}'
;
```
</TabItem>
<TabItem value="generate">

Generate memories.

```sql
EXEC google.aiplatform.memories.generate 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@reasoningEnginesId='{{ reasoningEnginesId }}' --required 
@@json=
'{
"revisionTtl": "{{ revisionTtl }}", 
"scope": "{{ scope }}", 
"directMemoriesSource": "{{ directMemoriesSource }}", 
"vertexSessionSource": "{{ vertexSessionSource }}", 
"revisionLabels": "{{ revisionLabels }}", 
"directContentsSource": "{{ directContentsSource }}", 
"revisionExpireTime": "{{ revisionExpireTime }}", 
"disableMemoryRevisions": {{ disableMemoryRevisions }}, 
"disableConsolidation": {{ disableConsolidation }}
}'
;
```
</TabItem>
<TabItem value="purge">

Purge memories.

```sql
EXEC google.aiplatform.memories.purge 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@reasoningEnginesId='{{ reasoningEnginesId }}' --required 
@@json=
'{
"filter": "{{ filter }}", 
"force": {{ force }}
}'
;
```
</TabItem>
</Tabs>
