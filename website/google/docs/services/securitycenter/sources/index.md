--- 
title: sources
hide_title: false
hide_table_of_contents: false
keywords:
  - sources
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

Creates, updates, deletes, gets or lists a <code>sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securitycenter.sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_sources_get"
    values={[
        { label: 'organizations_sources_get', value: 'organizations_sources_get' },
        { label: 'organizations_sources_list', value: 'organizations_sources_list' },
        { label: 'projects_sources_list', value: 'projects_sources_list' },
        { label: 'folders_sources_list', value: 'folders_sources_list' }
    ]}
>
<TabItem value="organizations_sources_get">

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
    <td><CopyableCode code="canonicalName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_sources_list">

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
    <td><CopyableCode code="canonicalName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_sources_list">

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
    <td><CopyableCode code="canonicalName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_sources_list">

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
    <td><CopyableCode code="canonicalName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
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
    <td><a href="#organizations_sources_get"><CopyableCode code="organizations_sources_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_sources_list"><CopyableCode code="organizations_sources_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_sources_list"><CopyableCode code="projects_sources_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_sources_list"><CopyableCode code="folders_sources_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_sources_create"><CopyableCode code="organizations_sources_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_sources_patch"><CopyableCode code="organizations_sources_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
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
<tr id="parameter-sourcesId">
    <td><CopyableCode code="sourcesId" /></td>
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
    defaultValue="organizations_sources_get"
    values={[
        { label: 'organizations_sources_get', value: 'organizations_sources_get' },
        { label: 'organizations_sources_list', value: 'organizations_sources_list' },
        { label: 'projects_sources_list', value: 'projects_sources_list' },
        { label: 'folders_sources_list', value: 'folders_sources_list' }
    ]}
>
<TabItem value="organizations_sources_get">

Successful response

```sql
SELECT
name,
canonicalName,
description,
displayName
FROM google.securitycenter.sources
WHERE organizationsId = '{{ organizationsId }}' -- required
AND sourcesId = '{{ sourcesId }}' -- required
;
```
</TabItem>
<TabItem value="organizations_sources_list">

Successful response

```sql
SELECT
name,
canonicalName,
description,
displayName
FROM google.securitycenter.sources
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
;
```
</TabItem>
<TabItem value="projects_sources_list">

Successful response

```sql
SELECT
name,
canonicalName,
description,
displayName
FROM google.securitycenter.sources
WHERE projectsId = '{{ projectsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
;
```
</TabItem>
<TabItem value="folders_sources_list">

Successful response

```sql
SELECT
name,
canonicalName,
description,
displayName
FROM google.securitycenter.sources
WHERE foldersId = '{{ foldersId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_sources_create"
    values={[
        { label: 'organizations_sources_create', value: 'organizations_sources_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_sources_create">

No description available.

```sql
INSERT INTO google.securitycenter.sources (
data__name,
data__canonicalName,
data__displayName,
data__description,
organizationsId
)
SELECT 
'{{ name }}',
'{{ canonicalName }}',
'{{ displayName }}',
'{{ description }}',
'{{ organizationsId }}'
RETURNING
name,
canonicalName,
description,
displayName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sources
  props:
    - name: organizationsId
      value: "{{ organizationsId }}"
      description: Required parameter for the sources resource.
    - name: name
      value: "{{ name }}"
    - name: canonicalName
      value: "{{ canonicalName }}"
    - name: displayName
      value: "{{ displayName }}"
    - name: description
      value: "{{ description }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_sources_patch"
    values={[
        { label: 'organizations_sources_patch', value: 'organizations_sources_patch' }
    ]}
>
<TabItem value="organizations_sources_patch">

No description available.

```sql
UPDATE google.securitycenter.sources
SET 
data__name = '{{ name }}',
data__canonicalName = '{{ canonicalName }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND sourcesId = '{{ sourcesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
canonicalName,
description,
displayName;
```
</TabItem>
</Tabs>
