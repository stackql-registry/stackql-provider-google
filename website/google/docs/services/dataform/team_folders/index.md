--- 
title: team_folders
hide_title: false
hide_table_of_contents: false
keywords:
  - team_folders
  - dataform
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

Creates, updates, deletes, gets or lists a <code>team_folders</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="team_folders" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataform.team_folders" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'query_contents', value: 'query_contents' }
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
    <td>Identifier. The TeamFolder's name.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of when the TeamFolder was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creatorIamPrincipal" /></td>
    <td><code>string</code></td>
    <td>Output only. The IAM principal identifier of the creator of the TeamFolder.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The TeamFolder's user-friendly name.</td>
</tr>
<tr>
    <td><CopyableCode code="internalMetadata" /></td>
    <td><code>string</code></td>
    <td>Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of when the TeamFolder was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="query_contents">

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
    <td><CopyableCode code="entries" /></td>
    <td><code>array</code></td>
    <td>List of entries in the TeamFolder.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-teamFoldersId"><code>teamFoldersId</code></a></td>
    <td></td>
    <td>Fetches a single TeamFolder.</td>
</tr>
<tr>
    <td><a href="#query_contents"><CopyableCode code="query_contents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-teamFoldersId"><code>teamFoldersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Returns the contents of a given TeamFolder.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a new TeamFolder in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-teamFoldersId"><code>teamFoldersId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a single TeamFolder.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-teamFoldersId"><code>teamFoldersId</code></a></td>
    <td></td>
    <td>Deletes a single TeamFolder.</td>
</tr>
<tr>
    <td><a href="#search"><CopyableCode code="search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns all TeamFolders in a given location that the caller has access to and match the provided filter.</td>
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
<tr id="parameter-teamFoldersId">
    <td><CopyableCode code="teamFoldersId" /></td>
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
        { label: 'query_contents', value: 'query_contents' }
    ]}
>
<TabItem value="get">

Fetches a single TeamFolder.

```sql
SELECT
name,
createTime,
creatorIamPrincipal,
displayName,
internalMetadata,
updateTime
FROM google.dataform.team_folders
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND teamFoldersId = '{{ teamFoldersId }}' -- required
;
```
</TabItem>
<TabItem value="query_contents">

Returns the contents of a given TeamFolder.

```sql
SELECT
entries,
nextPageToken
FROM google.dataform.team_folders
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND teamFoldersId = '{{ teamFoldersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
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

Creates a new TeamFolder in a given project and location.

```sql
INSERT INTO google.dataform.team_folders (
data__name,
data__displayName,
projectsId,
locationsId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
createTime,
creatorIamPrincipal,
displayName,
internalMetadata,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: team_folders
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the team_folders resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the team_folders resource.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The TeamFolder's name.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. The TeamFolder's user-friendly name.
`}</CodeBlock>

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

Updates a single TeamFolder.

```sql
UPDATE google.dataform.team_folders
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND teamFoldersId = '{{ teamFoldersId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
creatorIamPrincipal,
displayName,
internalMetadata,
updateTime;
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

Deletes a single TeamFolder.

```sql
DELETE FROM google.dataform.team_folders
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND teamFoldersId = '{{ teamFoldersId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="search"
    values={[
        { label: 'search', value: 'search' }
    ]}
>
<TabItem value="search">

Returns all TeamFolders in a given location that the caller has access to and match the provided filter.

```sql
EXEC google.dataform.team_folders.search 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@filter='{{ filter }}', 
@orderBy='{{ orderBy }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}'
;
```
</TabItem>
</Tabs>
