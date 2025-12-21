--- 
title: evaluation_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - evaluation_sets
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

Creates, updates, deletes, gets or lists an <code>evaluation_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>evaluation_sets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.evaluation_sets" /></td></tr>
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
    <td>Identifier. The resource name of the EvaluationSet. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/evaluationSets/&#123;evaluation_set&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this item was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the EvaluationSet.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluationItems" /></td>
    <td><code>array</code></td>
    <td>Required. The EvaluationItems that are part of this dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>any</code></td>
    <td>Optional. Metadata for the EvaluationSet.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this item was last updated.</td>
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
    <td>Identifier. The resource name of the EvaluationSet. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/evaluationSets/&#123;evaluation_set&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this item was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the EvaluationSet.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluationItems" /></td>
    <td><code>array</code></td>
    <td>Required. The EvaluationItems that are part of this dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>any</code></td>
    <td>Optional. Metadata for the EvaluationSet.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this item was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-evaluationSetsId"><code>evaluationSetsId</code></a></td>
    <td></td>
    <td>Gets an Evaluation Set.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Evaluation Sets.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates an Evaluation Set.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-evaluationSetsId"><code>evaluationSetsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an Evaluation Set.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-evaluationSetsId"><code>evaluationSetsId</code></a></td>
    <td></td>
    <td>Deletes an Evaluation Set.</td>
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
<tr id="parameter-evaluationSetsId">
    <td><CopyableCode code="evaluationSetsId" /></td>
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
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets an Evaluation Set.

```sql
SELECT
name,
createTime,
displayName,
evaluationItems,
metadata,
updateTime
FROM google.aiplatform.evaluation_sets
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND evaluationSetsId = '{{ evaluationSetsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Evaluation Sets.

```sql
SELECT
name,
createTime,
displayName,
evaluationItems,
metadata,
updateTime
FROM google.aiplatform.evaluation_sets
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
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

Creates an Evaluation Set.

```sql
INSERT INTO google.aiplatform.evaluation_sets (
data__evaluationItems,
data__name,
data__metadata,
data__displayName,
projectsId,
locationsId
)
SELECT 
'{{ evaluationItems }}',
'{{ name }}',
'{{ metadata }}',
'{{ displayName }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
createTime,
displayName,
evaluationItems,
metadata,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: evaluation_sets
  props:
    - name: projectsId
      value: string
      description: Required parameter for the evaluation_sets resource.
    - name: locationsId
      value: string
      description: Required parameter for the evaluation_sets resource.
    - name: evaluationItems
      value: array
      description: >
        Required. The EvaluationItems that are part of this dataset.
        
    - name: name
      value: string
      description: >
        Identifier. The resource name of the EvaluationSet. Format: `projects/{project}/locations/{location}/evaluationSets/{evaluation_set}`
        
    - name: metadata
      value: any
      description: >
        Optional. Metadata for the EvaluationSet.
        
    - name: displayName
      value: string
      description: >
        Required. The display name of the EvaluationSet.
        
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

Updates an Evaluation Set.

```sql
UPDATE google.aiplatform.evaluation_sets
SET 
data__evaluationItems = '{{ evaluationItems }}',
data__name = '{{ name }}',
data__metadata = '{{ metadata }}',
data__displayName = '{{ displayName }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND evaluationSetsId = '{{ evaluationSetsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
displayName,
evaluationItems,
metadata,
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

Deletes an Evaluation Set.

```sql
DELETE FROM google.aiplatform.evaluation_sets
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND evaluationSetsId = '{{ evaluationSetsId }}' --required
;
```
</TabItem>
</Tabs>
