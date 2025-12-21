--- 
title: evaluation_items
hide_title: false
hide_table_of_contents: false
keywords:
  - evaluation_items
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

Creates, updates, deletes, gets or lists an <code>evaluation_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>evaluation_items</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.evaluation_items" /></td></tr>
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
    <td>Identifier. The resource name of the EvaluationItem. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/evaluationItems/&#123;evaluation_item&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this item was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the EvaluationItem.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). (id: GoogleRpcStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluationItemType" /></td>
    <td><code>string</code></td>
    <td>Required. The type of the EvaluationItem.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluationRequest" /></td>
    <td><code>object</code></td>
    <td>The request to evaluate. (id: GoogleCloudAiplatformV1EvaluationRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluationResponse" /></td>
    <td><code>object</code></td>
    <td>Output only. The response from evaluation. (id: GoogleCloudAiplatformV1EvaluationResult)</td>
</tr>
<tr>
    <td><CopyableCode code="gcsUri" /></td>
    <td><code>string</code></td>
    <td>The Cloud Storage object where the request or response is stored.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels for the EvaluationItem.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>any</code></td>
    <td>Optional. Metadata for the EvaluationItem.</td>
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
    <td>Identifier. The resource name of the EvaluationItem. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/evaluationItems/&#123;evaluation_item&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this item was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the EvaluationItem.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). (id: GoogleRpcStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluationItemType" /></td>
    <td><code>string</code></td>
    <td>Required. The type of the EvaluationItem.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluationRequest" /></td>
    <td><code>object</code></td>
    <td>The request to evaluate. (id: GoogleCloudAiplatformV1EvaluationRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluationResponse" /></td>
    <td><code>object</code></td>
    <td>Output only. The response from evaluation. (id: GoogleCloudAiplatformV1EvaluationResult)</td>
</tr>
<tr>
    <td><CopyableCode code="gcsUri" /></td>
    <td><code>string</code></td>
    <td>The Cloud Storage object where the request or response is stored.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels for the EvaluationItem.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>any</code></td>
    <td>Optional. Metadata for the EvaluationItem.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-evaluationItemsId"><code>evaluationItemsId</code></a></td>
    <td></td>
    <td>Gets an Evaluation Item.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists Evaluation Items.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates an Evaluation Item.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-evaluationItemsId"><code>evaluationItemsId</code></a></td>
    <td></td>
    <td>Deletes an Evaluation Item.</td>
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
<tr id="parameter-evaluationItemsId">
    <td><CopyableCode code="evaluationItemsId" /></td>
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

Gets an Evaluation Item.

```sql
SELECT
name,
createTime,
displayName,
error,
evaluationItemType,
evaluationRequest,
evaluationResponse,
gcsUri,
labels,
metadata
FROM google.aiplatform.evaluation_items
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND evaluationItemsId = '{{ evaluationItemsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Evaluation Items.

```sql
SELECT
name,
createTime,
displayName,
error,
evaluationItemType,
evaluationRequest,
evaluationResponse,
gcsUri,
labels,
metadata
FROM google.aiplatform.evaluation_items
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
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

Creates an Evaluation Item.

```sql
INSERT INTO google.aiplatform.evaluation_items (
data__gcsUri,
data__metadata,
data__evaluationRequest,
data__displayName,
data__name,
data__labels,
data__evaluationItemType,
projectsId,
locationsId
)
SELECT 
'{{ gcsUri }}',
'{{ metadata }}',
'{{ evaluationRequest }}',
'{{ displayName }}',
'{{ name }}',
'{{ labels }}',
'{{ evaluationItemType }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
createTime,
displayName,
error,
evaluationItemType,
evaluationRequest,
evaluationResponse,
gcsUri,
labels,
metadata
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: evaluation_items
  props:
    - name: projectsId
      value: string
      description: Required parameter for the evaluation_items resource.
    - name: locationsId
      value: string
      description: Required parameter for the evaluation_items resource.
    - name: gcsUri
      value: string
      description: >
        The Cloud Storage object where the request or response is stored.
        
    - name: metadata
      value: any
      description: >
        Optional. Metadata for the EvaluationItem.
        
    - name: evaluationRequest
      value: object
      description: >
        The request to evaluate.
        
    - name: displayName
      value: string
      description: >
        Required. The display name of the EvaluationItem.
        
    - name: name
      value: string
      description: >
        Identifier. The resource name of the EvaluationItem. Format: `projects/{project}/locations/{location}/evaluationItems/{evaluation_item}`
        
    - name: labels
      value: object
      description: >
        Optional. Labels for the EvaluationItem.
        
    - name: evaluationItemType
      value: string
      description: >
        Required. The type of the EvaluationItem.
        
      valid_values: ['EVALUATION_ITEM_TYPE_UNSPECIFIED', 'REQUEST', 'RESULT']
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

Deletes an Evaluation Item.

```sql
DELETE FROM google.aiplatform.evaluation_items
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND evaluationItemsId = '{{ evaluationItemsId }}' --required
;
```
</TabItem>
</Tabs>
