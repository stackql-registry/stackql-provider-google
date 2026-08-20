--- 
title: folders
hide_title: false
hide_table_of_contents: false
keywords:
  - folders
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

Creates, updates, deletes, gets or lists a <code>folders</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="folders" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataform.folders" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'query_folder_contents', value: 'query_folder_contents' }
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
    <td>Identifier. The Folder's name.</td>
</tr>
<tr>
    <td><CopyableCode code="containingFolder" /></td>
    <td><code>string</code></td>
    <td>Optional. The containing Folder resource name. This should take the format: projects/&#123;project&#125;/locations/&#123;location&#125;/folders/&#123;folder&#125;, projects/&#123;project&#125;/locations/&#123;location&#125;/teamFolders/&#123;teamFolder&#125;, or just "" if this is a root Folder. This field can only be updated through MoveFolder.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of when the Folder was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creatorIamPrincipal" /></td>
    <td><code>string</code></td>
    <td>Output only. The IAM principal identifier of the creator of the Folder.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The Folder's user-friendly name.</td>
</tr>
<tr>
    <td><CopyableCode code="internalMetadata" /></td>
    <td><code>string</code></td>
    <td>Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string.</td>
</tr>
<tr>
    <td><CopyableCode code="teamFolderName" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the TeamFolder that this Folder is associated with. This should take the format: projects/&#123;project&#125;/locations/&#123;location&#125;/teamFolders/&#123;teamFolder&#125;. If this is not set, the Folder is not associated with a TeamFolder and is a UserFolder.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of when the Folder was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="query_folder_contents">

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
    <td>List of entries in the folder.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td></td>
    <td>Fetches a single Folder.</td>
</tr>
<tr>
    <td><a href="#query_folder_contents"><CopyableCode code="query_folder_contents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns the contents of a given Folder.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a new Folder in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a single Folder.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td></td>
    <td>Deletes a single Folder.</td>
</tr>
<tr>
    <td><a href="#move"><CopyableCode code="move" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td></td>
    <td>Moves a Folder to a new Folder, TeamFolder, or the root location.</td>
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
<tr id="parameter-foldersId">
    <td><CopyableCode code="foldersId" /></td>
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
        { label: 'query_folder_contents', value: 'query_folder_contents' }
    ]}
>
<TabItem value="get">

Fetches a single Folder.

```sql
SELECT
name,
containingFolder,
createTime,
creatorIamPrincipal,
displayName,
internalMetadata,
teamFolderName,
updateTime
FROM google.dataform.folders
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND foldersId = '{{ foldersId }}' -- required
;
```
</TabItem>
<TabItem value="query_folder_contents">

Returns the contents of a given Folder.

```sql
SELECT
entries,
nextPageToken
FROM google.dataform.folders
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND foldersId = '{{ foldersId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
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

Creates a new Folder in a given project and location.

```sql
INSERT INTO google.dataform.folders (
data__containingFolder,
data__displayName,
data__name,
projectsId,
locationsId
)
SELECT 
'{{ containingFolder }}',
'{{ displayName }}',
'{{ name }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
containingFolder,
createTime,
creatorIamPrincipal,
displayName,
internalMetadata,
teamFolderName,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: folders
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the folders resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the folders resource.
    - name: containingFolder
      value: "{{ containingFolder }}"
      description: |
        Optional. The containing Folder resource name. This should take the format: projects/{project}/locations/{location}/folders/{folder}, projects/{project}/locations/{location}/teamFolders/{teamFolder}, or just "" if this is a root Folder. This field can only be updated through MoveFolder.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. The Folder's user-friendly name.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The Folder's name.
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

Updates a single Folder.

```sql
UPDATE google.dataform.folders
SET 
data__containingFolder = '{{ containingFolder }}',
data__displayName = '{{ displayName }}',
data__name = '{{ name }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND foldersId = '{{ foldersId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
containingFolder,
createTime,
creatorIamPrincipal,
displayName,
internalMetadata,
teamFolderName,
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

Deletes a single Folder.

```sql
DELETE FROM google.dataform.folders
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND foldersId = '{{ foldersId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="move"
    values={[
        { label: 'move', value: 'move' }
    ]}
>
<TabItem value="move">

Moves a Folder to a new Folder, TeamFolder, or the root location.

```sql
EXEC google.dataform.folders.move 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@foldersId='{{ foldersId }}' --required 
@@json=
'{
"destinationContainingFolder": "{{ destinationContainingFolder }}"
}'
;
```
</TabItem>
</Tabs>
