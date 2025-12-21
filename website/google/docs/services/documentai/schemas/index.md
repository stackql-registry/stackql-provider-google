--- 
title: schemas
hide_title: false
hide_table_of_contents: false
keywords:
  - schemas
  - documentai
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

Creates, updates, deletes, gets or lists a <code>schemas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>schemas</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.documentai.schemas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_schemas_get"
    values={[
        { label: 'projects_locations_schemas_get', value: 'projects_locations_schemas_get' },
        { label: 'projects_locations_schemas_list', value: 'projects_locations_schemas_list' }
    ]}
>
<TabItem value="projects_locations_schemas_get">

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
    <td>Identifier. The resource name of the Schema. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/schemas/&#123;schema&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the Schema was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-defined name of the Schema.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The GCP labels for the Schema.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the Schema was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_schemas_list">

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
    <td>Identifier. The resource name of the Schema. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/schemas/&#123;schema&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the Schema was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-defined name of the Schema.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The GCP labels for the Schema.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the Schema was last updated.</td>
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
    <td><a href="#projects_locations_schemas_get"><CopyableCode code="projects_locations_schemas_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-schemasId"><code>schemasId</code></a></td>
    <td></td>
    <td>Gets a schema.</td>
</tr>
<tr>
    <td><a href="#projects_locations_schemas_list"><CopyableCode code="projects_locations_schemas_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists Schemas.</td>
</tr>
<tr>
    <td><a href="#projects_locations_schemas_create"><CopyableCode code="projects_locations_schemas_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a schema.</td>
</tr>
<tr>
    <td><a href="#projects_locations_schemas_patch"><CopyableCode code="projects_locations_schemas_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-schemasId"><code>schemasId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a schema. Editable fields are: - `display_name` - `labels`</td>
</tr>
<tr>
    <td><a href="#projects_locations_schemas_delete"><CopyableCode code="projects_locations_schemas_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-schemasId"><code>schemasId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a schema.</td>
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
<tr id="parameter-schemasId">
    <td><CopyableCode code="schemasId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
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
    defaultValue="projects_locations_schemas_get"
    values={[
        { label: 'projects_locations_schemas_get', value: 'projects_locations_schemas_get' },
        { label: 'projects_locations_schemas_list', value: 'projects_locations_schemas_list' }
    ]}
>
<TabItem value="projects_locations_schemas_get">

Gets a schema.

```sql
SELECT
name,
createTime,
displayName,
labels,
updateTime
FROM google.documentai.schemas
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND schemasId = '{{ schemasId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_schemas_list">

Lists Schemas.

```sql
SELECT
name,
createTime,
displayName,
labels,
updateTime
FROM google.documentai.schemas
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_schemas_create"
    values={[
        { label: 'projects_locations_schemas_create', value: 'projects_locations_schemas_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_schemas_create">

Creates a schema.

```sql
INSERT INTO google.documentai.schemas (
data__name,
data__displayName,
data__labels,
projectsId,
locationsId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ labels }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
createTime,
displayName,
labels,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: schemas
  props:
    - name: projectsId
      value: string
      description: Required parameter for the schemas resource.
    - name: locationsId
      value: string
      description: Required parameter for the schemas resource.
    - name: name
      value: string
      description: >
        Identifier. The resource name of the Schema. Format: `projects/{project}/locations/{location}/schemas/{schema}`
        
    - name: displayName
      value: string
      description: >
        Optional. The user-defined name of the Schema.
        
    - name: labels
      value: object
      description: >
        Optional. The GCP labels for the Schema.
        
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_schemas_patch"
    values={[
        { label: 'projects_locations_schemas_patch', value: 'projects_locations_schemas_patch' }
    ]}
>
<TabItem value="projects_locations_schemas_patch">

Updates a schema. Editable fields are: - `display_name` - `labels`

```sql
UPDATE google.documentai.schemas
SET 
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__labels = '{{ labels }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND schemasId = '{{ schemasId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
displayName,
labels,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_schemas_delete"
    values={[
        { label: 'projects_locations_schemas_delete', value: 'projects_locations_schemas_delete' }
    ]}
>
<TabItem value="projects_locations_schemas_delete">

Deletes a schema.

```sql
DELETE FROM google.documentai.schemas
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND schemasId = '{{ schemasId }}' --required
AND force = '{{ force }}'
;
```
</TabItem>
</Tabs>
