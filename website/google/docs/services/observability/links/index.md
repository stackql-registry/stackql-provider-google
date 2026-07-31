--- 
title: links
hide_title: false
hide_table_of_contents: false
keywords:
  - links
  - observability
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

Creates, updates, deletes, gets or lists a <code>links</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="links" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.observability.links" /></td></tr>
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
    <td>Identifier. Name of the link. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/buckets/[BUCKET_ID]/datasets/[DATASET_ID]/links/[LINK_ID]</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the link.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. A user friendly display name.</td>
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
    <td>Identifier. Name of the link. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/buckets/[BUCKET_ID]/datasets/[DATASET_ID]/links/[LINK_ID]</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the link.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. A user friendly display name.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-linksId"><code>linksId</code></a></td>
    <td></td>
    <td>Get a link.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>List links of a dataset.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a></td>
    <td><a href="#parameter-linkId"><code>linkId</code></a></td>
    <td>Create a new link.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-linksId"><code>linksId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update a link.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bucketsId"><code>bucketsId</code></a>, <a href="#parameter-datasetsId"><code>datasetsId</code></a>, <a href="#parameter-linksId"><code>linksId</code></a></td>
    <td></td>
    <td>Delete a link.</td>
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
<tr id="parameter-bucketsId">
    <td><CopyableCode code="bucketsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-datasetsId">
    <td><CopyableCode code="datasetsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-linksId">
    <td><CopyableCode code="linksId" /></td>
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
<tr id="parameter-linkId">
    <td><CopyableCode code="linkId" /></td>
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

Get a link.

```sql
SELECT
name,
createTime,
description,
displayName
FROM google.observability.links
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bucketsId = '{{ bucketsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
AND linksId = '{{ linksId }}' -- required
;
```
</TabItem>
<TabItem value="list">

List links of a dataset.

```sql
SELECT
name,
createTime,
description,
displayName
FROM google.observability.links
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bucketsId = '{{ bucketsId }}' -- required
AND datasetsId = '{{ datasetsId }}' -- required
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

Create a new link.

```sql
INSERT INTO google.observability.links (
data__name,
data__displayName,
data__description,
projectsId,
locationsId,
bucketsId,
datasetsId,
linkId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ description }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ bucketsId }}',
'{{ datasetsId }}',
'{{ linkId }}'
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

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: links
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the links resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the links resource.
    - name: bucketsId
      value: "{{ bucketsId }}"
      description: Required parameter for the links resource.
    - name: datasetsId
      value: "{{ datasetsId }}"
      description: Required parameter for the links resource.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. Name of the link. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/buckets/[BUCKET_ID]/datasets/[DATASET_ID]/links/[LINK_ID]
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Optional. A user friendly display name.
    - name: description
      value: "{{ description }}"
      description: |
        Optional. Description of the link.
    - name: linkId
      value: "{{ linkId }}"
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

Update a link.

```sql
UPDATE google.observability.links
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bucketsId = '{{ bucketsId }}' --required
AND datasetsId = '{{ datasetsId }}' --required
AND linksId = '{{ linksId }}' --required
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

Delete a link.

```sql
DELETE FROM google.observability.links
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bucketsId = '{{ bucketsId }}' --required
AND datasetsId = '{{ datasetsId }}' --required
AND linksId = '{{ linksId }}' --required
;
```
</TabItem>
</Tabs>
