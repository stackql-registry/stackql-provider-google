--- 
title: big_query_exports
hide_title: false
hide_table_of_contents: false
keywords:
  - big_query_exports
  - securitycenter
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

Creates, updates, deletes, gets or lists a <code>big_query_exports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="big_query_exports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securitycenter.big_query_exports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_big_query_exports_get"
    values={[
        { label: 'organizations_big_query_exports_get', value: 'organizations_big_query_exports_get' },
        { label: 'projects_big_query_exports_get', value: 'projects_big_query_exports_get' },
        { label: 'folders_big_query_exports_get', value: 'folders_big_query_exports_get' },
        { label: 'organizations_big_query_exports_list', value: 'organizations_big_query_exports_list' },
        { label: 'projects_big_query_exports_list', value: 'projects_big_query_exports_list' },
        { label: 'folders_big_query_exports_list', value: 'folders_big_query_exports_list' }
    ]}
>
<TabItem value="organizations_big_query_exports_get">

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
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="dataset" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="mostRecentEditor" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="principal" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_big_query_exports_get">

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
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="dataset" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="mostRecentEditor" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="principal" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_big_query_exports_get">

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
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="dataset" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="mostRecentEditor" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="principal" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_big_query_exports_list">

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
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="dataset" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="mostRecentEditor" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="principal" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_big_query_exports_list">

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
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="dataset" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="mostRecentEditor" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="principal" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_big_query_exports_list">

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
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="dataset" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="mostRecentEditor" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="principal" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
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
    <td><a href="#organizations_big_query_exports_get"><CopyableCode code="organizations_big_query_exports_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-bigQueryExportsId"><code>bigQueryExportsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_big_query_exports_get"><CopyableCode code="projects_big_query_exports_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-bigQueryExportsId"><code>bigQueryExportsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_big_query_exports_get"><CopyableCode code="folders_big_query_exports_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-bigQueryExportsId"><code>bigQueryExportsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_big_query_exports_list"><CopyableCode code="organizations_big_query_exports_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_big_query_exports_list"><CopyableCode code="projects_big_query_exports_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_big_query_exports_list"><CopyableCode code="folders_big_query_exports_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_big_query_exports_create"><CopyableCode code="organizations_big_query_exports_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-bigQueryExportId"><code>bigQueryExportId</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_big_query_exports_create"><CopyableCode code="projects_big_query_exports_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-bigQueryExportId"><code>bigQueryExportId</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_big_query_exports_create"><CopyableCode code="folders_big_query_exports_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-bigQueryExportId"><code>bigQueryExportId</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_big_query_exports_patch"><CopyableCode code="organizations_big_query_exports_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-bigQueryExportsId"><code>bigQueryExportsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_big_query_exports_patch"><CopyableCode code="projects_big_query_exports_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-bigQueryExportsId"><code>bigQueryExportsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_big_query_exports_patch"><CopyableCode code="folders_big_query_exports_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-bigQueryExportsId"><code>bigQueryExportsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_big_query_exports_delete"><CopyableCode code="organizations_big_query_exports_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-bigQueryExportsId"><code>bigQueryExportsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_big_query_exports_delete"><CopyableCode code="projects_big_query_exports_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-bigQueryExportsId"><code>bigQueryExportsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_big_query_exports_delete"><CopyableCode code="folders_big_query_exports_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-bigQueryExportsId"><code>bigQueryExportsId</code></a></td>
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
<tr id="parameter-bigQueryExportsId">
    <td><CopyableCode code="bigQueryExportsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-foldersId">
    <td><CopyableCode code="foldersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-bigQueryExportId">
    <td><CopyableCode code="bigQueryExportId" /></td>
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
    defaultValue="organizations_big_query_exports_get"
    values={[
        { label: 'organizations_big_query_exports_get', value: 'organizations_big_query_exports_get' },
        { label: 'projects_big_query_exports_get', value: 'projects_big_query_exports_get' },
        { label: 'folders_big_query_exports_get', value: 'folders_big_query_exports_get' },
        { label: 'organizations_big_query_exports_list', value: 'organizations_big_query_exports_list' },
        { label: 'projects_big_query_exports_list', value: 'projects_big_query_exports_list' },
        { label: 'folders_big_query_exports_list', value: 'folders_big_query_exports_list' }
    ]}
>
<TabItem value="organizations_big_query_exports_get">

Successful response

```sql
SELECT
name,
createTime,
dataset,
description,
filter,
mostRecentEditor,
principal,
updateTime
FROM google.securitycenter.big_query_exports
WHERE organizationsId = '{{ organizationsId }}' -- required
AND bigQueryExportsId = '{{ bigQueryExportsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_big_query_exports_get">

Successful response

```sql
SELECT
name,
createTime,
dataset,
description,
filter,
mostRecentEditor,
principal,
updateTime
FROM google.securitycenter.big_query_exports
WHERE projectsId = '{{ projectsId }}' -- required
AND bigQueryExportsId = '{{ bigQueryExportsId }}' -- required
;
```
</TabItem>
<TabItem value="folders_big_query_exports_get">

Successful response

```sql
SELECT
name,
createTime,
dataset,
description,
filter,
mostRecentEditor,
principal,
updateTime
FROM google.securitycenter.big_query_exports
WHERE foldersId = '{{ foldersId }}' -- required
AND bigQueryExportsId = '{{ bigQueryExportsId }}' -- required
;
```
</TabItem>
<TabItem value="organizations_big_query_exports_list">

Successful response

```sql
SELECT
name,
createTime,
dataset,
description,
filter,
mostRecentEditor,
principal,
updateTime
FROM google.securitycenter.big_query_exports
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
;
```
</TabItem>
<TabItem value="projects_big_query_exports_list">

Successful response

```sql
SELECT
name,
createTime,
dataset,
description,
filter,
mostRecentEditor,
principal,
updateTime
FROM google.securitycenter.big_query_exports
WHERE projectsId = '{{ projectsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
;
```
</TabItem>
<TabItem value="folders_big_query_exports_list">

Successful response

```sql
SELECT
name,
createTime,
dataset,
description,
filter,
mostRecentEditor,
principal,
updateTime
FROM google.securitycenter.big_query_exports
WHERE foldersId = '{{ foldersId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_big_query_exports_create"
    values={[
        { label: 'organizations_big_query_exports_create', value: 'organizations_big_query_exports_create' },
        { label: 'projects_big_query_exports_create', value: 'projects_big_query_exports_create' },
        { label: 'folders_big_query_exports_create', value: 'folders_big_query_exports_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_big_query_exports_create">

No description available.

```sql
INSERT INTO google.securitycenter.big_query_exports (
data__name,
data__description,
data__filter,
data__dataset,
organizationsId,
bigQueryExportId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ filter }}',
'{{ dataset }}',
'{{ organizationsId }}',
'{{ bigQueryExportId }}'
RETURNING
name,
createTime,
dataset,
description,
filter,
mostRecentEditor,
principal,
updateTime
;
```
</TabItem>
<TabItem value="projects_big_query_exports_create">

No description available.

```sql
INSERT INTO google.securitycenter.big_query_exports (
data__name,
data__description,
data__filter,
data__dataset,
projectsId,
bigQueryExportId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ filter }}',
'{{ dataset }}',
'{{ projectsId }}',
'{{ bigQueryExportId }}'
RETURNING
name,
createTime,
dataset,
description,
filter,
mostRecentEditor,
principal,
updateTime
;
```
</TabItem>
<TabItem value="folders_big_query_exports_create">

No description available.

```sql
INSERT INTO google.securitycenter.big_query_exports (
data__name,
data__description,
data__filter,
data__dataset,
foldersId,
bigQueryExportId
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ filter }}',
'{{ dataset }}',
'{{ foldersId }}',
'{{ bigQueryExportId }}'
RETURNING
name,
createTime,
dataset,
description,
filter,
mostRecentEditor,
principal,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: big_query_exports
  props:
    - name: organizationsId
      value: "{{ organizationsId }}"
      description: Required parameter for the big_query_exports resource.
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the big_query_exports resource.
    - name: foldersId
      value: "{{ foldersId }}"
      description: Required parameter for the big_query_exports resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: filter
      value: "{{ filter }}"
    - name: dataset
      value: "{{ dataset }}"
    - name: bigQueryExportId
      value: "{{ bigQueryExportId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_big_query_exports_patch"
    values={[
        { label: 'organizations_big_query_exports_patch', value: 'organizations_big_query_exports_patch' },
        { label: 'projects_big_query_exports_patch', value: 'projects_big_query_exports_patch' },
        { label: 'folders_big_query_exports_patch', value: 'folders_big_query_exports_patch' }
    ]}
>
<TabItem value="organizations_big_query_exports_patch">

No description available.

```sql
UPDATE google.securitycenter.big_query_exports
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__filter = '{{ filter }}',
data__dataset = '{{ dataset }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND bigQueryExportsId = '{{ bigQueryExportsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
dataset,
description,
filter,
mostRecentEditor,
principal,
updateTime;
```
</TabItem>
<TabItem value="projects_big_query_exports_patch">

No description available.

```sql
UPDATE google.securitycenter.big_query_exports
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__filter = '{{ filter }}',
data__dataset = '{{ dataset }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND bigQueryExportsId = '{{ bigQueryExportsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
dataset,
description,
filter,
mostRecentEditor,
principal,
updateTime;
```
</TabItem>
<TabItem value="folders_big_query_exports_patch">

No description available.

```sql
UPDATE google.securitycenter.big_query_exports
SET 
data__name = '{{ name }}',
data__description = '{{ description }}',
data__filter = '{{ filter }}',
data__dataset = '{{ dataset }}'
WHERE 
foldersId = '{{ foldersId }}' --required
AND bigQueryExportsId = '{{ bigQueryExportsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
dataset,
description,
filter,
mostRecentEditor,
principal,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_big_query_exports_delete"
    values={[
        { label: 'organizations_big_query_exports_delete', value: 'organizations_big_query_exports_delete' },
        { label: 'projects_big_query_exports_delete', value: 'projects_big_query_exports_delete' },
        { label: 'folders_big_query_exports_delete', value: 'folders_big_query_exports_delete' }
    ]}
>
<TabItem value="organizations_big_query_exports_delete">

No description available.

```sql
DELETE FROM google.securitycenter.big_query_exports
WHERE organizationsId = '{{ organizationsId }}' --required
AND bigQueryExportsId = '{{ bigQueryExportsId }}' --required
;
```
</TabItem>
<TabItem value="projects_big_query_exports_delete">

No description available.

```sql
DELETE FROM google.securitycenter.big_query_exports
WHERE projectsId = '{{ projectsId }}' --required
AND bigQueryExportsId = '{{ bigQueryExportsId }}' --required
;
```
</TabItem>
<TabItem value="folders_big_query_exports_delete">

No description available.

```sql
DELETE FROM google.securitycenter.big_query_exports
WHERE foldersId = '{{ foldersId }}' --required
AND bigQueryExportsId = '{{ bigQueryExportsId }}' --required
;
```
</TabItem>
</Tabs>
