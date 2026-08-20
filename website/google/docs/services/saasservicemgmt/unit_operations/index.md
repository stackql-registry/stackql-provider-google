--- 
title: unit_operations
hide_title: false
hide_table_of_contents: false
keywords:
  - unit_operations
  - saasservicemgmt
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

Creates, updates, deletes, gets or lists an <code>unit_operations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="unit_operations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.saasservicemgmt.unit_operations" /></td></tr>
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
    <td>Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/&#123;project&#125;/locations/&#123;location&#125;/unitOperations/&#123;unitOperation&#125;"</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations</td>
</tr>
<tr>
    <td><CopyableCode code="cancel" /></td>
    <td><code>boolean</code></td>
    <td>Optional. When true, attempt to cancel the operation. Cancellation may fail if the operation is already executing. (Optional)</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>Optional. Output only. A set of conditions which indicate the various conditions this resource can have.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was marked for deletion (deletion is an asynchronous operation).</td>
</tr>
<tr>
    <td><CopyableCode code="deprovision" /></td>
    <td><code>object</code></td>
    <td>Optional. Deprovision operation. (id: Deprovision)</td>
</tr>
<tr>
    <td><CopyableCode code="engineState" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. The engine state for on-going deployment engine operation(s). This field is opaque for external usage.</td>
</tr>
<tr>
    <td><CopyableCode code="errorCategory" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. UnitOperationErrorCategory describe the error category. (UNIT_OPERATION_ERROR_CATEGORY_UNSPECIFIED, NOT_APPLICABLE, FATAL, RETRIABLE, IGNORABLE, STANDARD)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written.</td>
</tr>
<tr>
    <td><CopyableCode code="flagUpdate" /></td>
    <td><code>object</code></td>
    <td>Optional. Flag update operation. (id: FlagUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.</td>
</tr>
<tr>
    <td><CopyableCode code="parentUnitOperation" /></td>
    <td><code>string</code></td>
    <td>Optional. Reference to parent resource: UnitOperation. If an operation needs to create other operations as part of its workflow, each of the child operations should have this field set to the parent. This can be used for tracing. (Optional)</td>
</tr>
<tr>
    <td><CopyableCode code="provision" /></td>
    <td><code>object</code></td>
    <td>Optional. Provision operation. (id: Provision)</td>
</tr>
<tr>
    <td><CopyableCode code="rollout" /></td>
    <td><code>string</code></td>
    <td>Optional. Specifies which rollout created this Unit Operation. This cannot be modified and is used for filtering purposes only. If a dependent unit and unit operation are created as part of another unit operation, they will use the same rolloutId.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>object</code></td>
    <td>Optional. When to schedule this operation. (id: Schedule)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. UnitOperationState describes the current state of the unit operation. (UNIT_OPERATION_STATE_UNKNOWN, UNIT_OPERATION_STATE_PENDING, UNIT_OPERATION_STATE_SCHEDULED, UNIT_OPERATION_STATE_RUNNING, UNIT_OPERATION_STATE_SUCCEEDED, UNIT_OPERATION_STATE_FAILED, UNIT_OPERATION_STATE_CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4.</td>
</tr>
<tr>
    <td><CopyableCode code="unit" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The Unit a given UnitOperation will act upon.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value.</td>
</tr>
<tr>
    <td><CopyableCode code="upgrade" /></td>
    <td><code>object</code></td>
    <td>Optional. Upgrade operation. (id: Upgrade)</td>
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
    <td>Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/&#123;project&#125;/locations/&#123;location&#125;/unitOperations/&#123;unitOperation&#125;"</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations</td>
</tr>
<tr>
    <td><CopyableCode code="cancel" /></td>
    <td><code>boolean</code></td>
    <td>Optional. When true, attempt to cancel the operation. Cancellation may fail if the operation is already executing. (Optional)</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>Optional. Output only. A set of conditions which indicate the various conditions this resource can have.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was marked for deletion (deletion is an asynchronous operation).</td>
</tr>
<tr>
    <td><CopyableCode code="deprovision" /></td>
    <td><code>object</code></td>
    <td>Optional. Deprovision operation. (id: Deprovision)</td>
</tr>
<tr>
    <td><CopyableCode code="engineState" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. The engine state for on-going deployment engine operation(s). This field is opaque for external usage.</td>
</tr>
<tr>
    <td><CopyableCode code="errorCategory" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. UnitOperationErrorCategory describe the error category. (UNIT_OPERATION_ERROR_CATEGORY_UNSPECIFIED, NOT_APPLICABLE, FATAL, RETRIABLE, IGNORABLE, STANDARD)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written.</td>
</tr>
<tr>
    <td><CopyableCode code="flagUpdate" /></td>
    <td><code>object</code></td>
    <td>Optional. Flag update operation. (id: FlagUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.</td>
</tr>
<tr>
    <td><CopyableCode code="parentUnitOperation" /></td>
    <td><code>string</code></td>
    <td>Optional. Reference to parent resource: UnitOperation. If an operation needs to create other operations as part of its workflow, each of the child operations should have this field set to the parent. This can be used for tracing. (Optional)</td>
</tr>
<tr>
    <td><CopyableCode code="provision" /></td>
    <td><code>object</code></td>
    <td>Optional. Provision operation. (id: Provision)</td>
</tr>
<tr>
    <td><CopyableCode code="rollout" /></td>
    <td><code>string</code></td>
    <td>Optional. Specifies which rollout created this Unit Operation. This cannot be modified and is used for filtering purposes only. If a dependent unit and unit operation are created as part of another unit operation, they will use the same rolloutId.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>object</code></td>
    <td>Optional. When to schedule this operation. (id: Schedule)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. UnitOperationState describes the current state of the unit operation. (UNIT_OPERATION_STATE_UNKNOWN, UNIT_OPERATION_STATE_PENDING, UNIT_OPERATION_STATE_SCHEDULED, UNIT_OPERATION_STATE_RUNNING, UNIT_OPERATION_STATE_SUCCEEDED, UNIT_OPERATION_STATE_FAILED, UNIT_OPERATION_STATE_CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4.</td>
</tr>
<tr>
    <td><CopyableCode code="unit" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The Unit a given UnitOperation will act upon.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value.</td>
</tr>
<tr>
    <td><CopyableCode code="upgrade" /></td>
    <td><code>object</code></td>
    <td>Optional. Upgrade operation. (id: Upgrade)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-unitOperationsId"><code>unitOperationsId</code></a></td>
    <td></td>
    <td>Retrieve a single unit operation.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Retrieve a collection of unit operations.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-unitOperationId"><code>unitOperationId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Create a new unit operation.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-unitOperationsId"><code>unitOperationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Update a single unit operation.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-unitOperationsId"><code>unitOperationsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Delete a single unit operation.</td>
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
<tr id="parameter-unitOperationsId">
    <td><CopyableCode code="unitOperationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-unitOperationId">
    <td><CopyableCode code="unitOperationId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
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

Retrieve a single unit operation.

```sql
SELECT
name,
annotations,
cancel,
conditions,
createTime,
deleteTime,
deprovision,
engineState,
errorCategory,
etag,
flagUpdate,
labels,
parentUnitOperation,
provision,
rollout,
schedule,
state,
uid,
unit,
updateTime,
upgrade
FROM google.saasservicemgmt.unit_operations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND unitOperationsId = '{{ unitOperationsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Retrieve a collection of unit operations.

```sql
SELECT
name,
annotations,
cancel,
conditions,
createTime,
deleteTime,
deprovision,
engineState,
errorCategory,
etag,
flagUpdate,
labels,
parentUnitOperation,
provision,
rollout,
schedule,
state,
uid,
unit,
updateTime,
upgrade
FROM google.saasservicemgmt.unit_operations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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

Create a new unit operation.

```sql
INSERT INTO google.saasservicemgmt.unit_operations (
data__annotations,
data__cancel,
data__deprovision,
data__flagUpdate,
data__labels,
data__name,
data__parentUnitOperation,
data__provision,
data__rollout,
data__schedule,
data__unit,
data__upgrade,
projectsId,
locationsId,
requestId,
unitOperationId,
validateOnly
)
SELECT 
'{{ annotations }}',
{{ cancel }},
'{{ deprovision }}',
'{{ flagUpdate }}',
'{{ labels }}',
'{{ name }}',
'{{ parentUnitOperation }}',
'{{ provision }}',
'{{ rollout }}',
'{{ schedule }}',
'{{ unit }}',
'{{ upgrade }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ requestId }}',
'{{ unitOperationId }}',
'{{ validateOnly }}'
RETURNING
name,
annotations,
cancel,
conditions,
createTime,
deleteTime,
deprovision,
engineState,
errorCategory,
etag,
flagUpdate,
labels,
parentUnitOperation,
provision,
rollout,
schedule,
state,
uid,
unit,
updateTime,
upgrade
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: unit_operations
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the unit_operations resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the unit_operations resource.
    - name: annotations
      value: "{{ annotations }}"
      description: |
        Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations
    - name: cancel
      value: {{ cancel }}
      description: |
        Optional. When true, attempt to cancel the operation. Cancellation may fail if the operation is already executing. (Optional)
    - name: deprovision
      value: "{{ deprovision }}"
      description: |
        Optional. Deprovision operation.
    - name: flagUpdate
      description: |
        Optional. Flag update operation.
      value:
        flagRelease: "{{ flagRelease }}"
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/unitOperations/{unitOperation}"
    - name: parentUnitOperation
      value: "{{ parentUnitOperation }}"
      description: |
        Optional. Reference to parent resource: UnitOperation. If an operation needs to create other operations as part of its workflow, each of the child operations should have this field set to the parent. This can be used for tracing. (Optional)
    - name: provision
      description: |
        Optional. Provision operation.
      value:
        inputVariables:
          - type: "{{ type }}"
            value: "{{ value }}"
            variable: "{{ variable }}"
        release: "{{ release }}"
    - name: rollout
      value: "{{ rollout }}"
      description: |
        Optional. Specifies which rollout created this Unit Operation. This cannot be modified and is used for filtering purposes only. If a dependent unit and unit operation are created as part of another unit operation, they will use the same rolloutId.
    - name: schedule
      description: |
        Optional. When to schedule this operation.
      value:
        startTime: "{{ startTime }}"
    - name: unit
      value: "{{ unit }}"
      description: |
        Required. Immutable. The Unit a given UnitOperation will act upon.
    - name: upgrade
      description: |
        Optional. Upgrade operation.
      value:
        inputVariables:
          - type: "{{ type }}"
            value: "{{ value }}"
            variable: "{{ variable }}"
        release: "{{ release }}"
    - name: requestId
      value: "{{ requestId }}"
    - name: unitOperationId
      value: "{{ unitOperationId }}"
    - name: validateOnly
      value: {{ validateOnly }}
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

Update a single unit operation.

```sql
UPDATE google.saasservicemgmt.unit_operations
SET 
data__annotations = '{{ annotations }}',
data__cancel = {{ cancel }},
data__deprovision = '{{ deprovision }}',
data__flagUpdate = '{{ flagUpdate }}',
data__labels = '{{ labels }}',
data__name = '{{ name }}',
data__parentUnitOperation = '{{ parentUnitOperation }}',
data__provision = '{{ provision }}',
data__rollout = '{{ rollout }}',
data__schedule = '{{ schedule }}',
data__unit = '{{ unit }}',
data__upgrade = '{{ upgrade }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND unitOperationsId = '{{ unitOperationsId }}' --required
AND requestId = '{{ requestId}}'
AND updateMask = '{{ updateMask}}'
AND validateOnly = {{ validateOnly}}
RETURNING
name,
annotations,
cancel,
conditions,
createTime,
deleteTime,
deprovision,
engineState,
errorCategory,
etag,
flagUpdate,
labels,
parentUnitOperation,
provision,
rollout,
schedule,
state,
uid,
unit,
updateTime,
upgrade;
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

Delete a single unit operation.

```sql
DELETE FROM google.saasservicemgmt.unit_operations
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND unitOperationsId = '{{ unitOperationsId }}' --required
AND etag = '{{ etag }}'
AND requestId = '{{ requestId }}'
AND validateOnly = '{{ validateOnly }}'
;
```
</TabItem>
</Tabs>
