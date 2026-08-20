--- 
title: change_streams
hide_title: false
hide_table_of_contents: false
keywords:
  - change_streams
  - firestore
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

Creates, updates, deletes, gets or lists a <code>change_streams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="change_streams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.firestore.change_streams" /></td></tr>
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
    <td>Identifier. The external resource name of the change stream. Format `projects/&#123;project&#125;/databases/&#123;database&#125;/changeStreams/&#123;change_stream&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="collectionGroupScope" /></td>
    <td><code>object</code></td>
    <td>If set, the change stream is scoped to a collection group. (id: GoogleFirestoreAdminV1CollectionGroupScope)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the Change Stream was created.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseScope" /></td>
    <td><code>object</code></td>
    <td>If set, the change stream is scoped to the entire database. (id: GoogleFirestoreAdminV1DatabaseScope)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. An etag used to determine which version of the configuration is being edited.</td>
</tr>
<tr>
    <td><CopyableCode code="retentionPeriod" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Required. The retention period of the change stream. This is the amount of time a change event is available on the change stream. Must be from 1 to 7 days, inclusive. The retention_period must be in day granularity, i.e. it must be a multiple of 24 hours.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the Change Stream started recording events.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the Change Stream was last updated.</td>
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
    <td><CopyableCode code="changeStreams" /></td>
    <td><code>array</code></td>
    <td>The list of change streams.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-changeStreamsId"><code>changeStreamsId</code></a></td>
    <td></td>
    <td>Gets information about a change stream.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td></td>
    <td>Lists all change streams in a database.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td><a href="#parameter-changeStreamId"><code>changeStreamId</code></a></td>
    <td>Creates a new change stream for the database.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a>, <a href="#parameter-changeStreamsId"><code>changeStreamsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a change stream.</td>
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
<tr id="parameter-changeStreamsId">
    <td><CopyableCode code="changeStreamsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-databasesId">
    <td><CopyableCode code="databasesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-changeStreamId">
    <td><CopyableCode code="changeStreamId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
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

Gets information about a change stream.

```sql
SELECT
name,
collectionGroupScope,
createTime,
databaseScope,
etag,
retentionPeriod,
startTime,
updateTime
FROM google.firestore.change_streams
WHERE projectsId = '{{ projectsId }}' -- required
AND databasesId = '{{ databasesId }}' -- required
AND changeStreamsId = '{{ changeStreamsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists all change streams in a database.

```sql
SELECT
changeStreams
FROM google.firestore.change_streams
WHERE projectsId = '{{ projectsId }}' -- required
AND databasesId = '{{ databasesId }}' -- required
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

Creates a new change stream for the database.

```sql
INSERT INTO google.firestore.change_streams (
data__collectionGroupScope,
data__databaseScope,
data__etag,
data__name,
data__retentionPeriod,
projectsId,
databasesId,
changeStreamId
)
SELECT 
'{{ collectionGroupScope }}',
'{{ databaseScope }}',
'{{ etag }}',
'{{ name }}',
'{{ retentionPeriod }}',
'{{ projectsId }}',
'{{ databasesId }}',
'{{ changeStreamId }}'
RETURNING
name,
collectionGroupScope,
createTime,
databaseScope,
etag,
retentionPeriod,
startTime,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: change_streams
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the change_streams resource.
    - name: databasesId
      value: "{{ databasesId }}"
      description: Required parameter for the change_streams resource.
    - name: collectionGroupScope
      description: |
        If set, the change stream is scoped to a collection group.
      value:
        collectionGroupId: "{{ collectionGroupId }}"
    - name: databaseScope
      value: "{{ databaseScope }}"
      description: |
        If set, the change stream is scoped to the entire database.
    - name: etag
      value: "{{ etag }}"
      description: |
        Optional. An etag used to determine which version of the configuration is being edited.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The external resource name of the change stream. Format \`projects/{project}/databases/{database}/changeStreams/{change_stream}\`
    - name: retentionPeriod
      value: "{{ retentionPeriod }}"
      description: |
        Required. The retention period of the change stream. This is the amount of time a change event is available on the change stream. Must be from 1 to 7 days, inclusive. The retention_period must be in day granularity, i.e. it must be a multiple of 24 hours.
    - name: changeStreamId
      value: "{{ changeStreamId }}"
`}</CodeBlock>

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

Deletes a change stream.

```sql
DELETE FROM google.firestore.change_streams
WHERE projectsId = '{{ projectsId }}' --required
AND databasesId = '{{ databasesId }}' --required
AND changeStreamsId = '{{ changeStreamsId }}' --required
AND etag = '{{ etag }}'
;
```
</TabItem>
</Tabs>
