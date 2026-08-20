--- 
title: units
hide_title: false
hide_table_of_contents: false
keywords:
  - units
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

Creates, updates, deletes, gets or lists an <code>units</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="units" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.saasservicemgmt.units" /></td></tr>
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
    <td>Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/&#123;project&#125;/locations/&#123;location&#125;/units/&#123;unit&#125;"</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations</td>
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
    <td><CopyableCode code="dependencies" /></td>
    <td><code>array</code></td>
    <td>Optional. Output only. Set of dependencies for this unit. Maximum 10.</td>
</tr>
<tr>
    <td><CopyableCode code="dependents" /></td>
    <td><code>array</code></td>
    <td>Optional. Output only. List of Units that depend on this unit. Unit can only be deprovisioned if this list is empty. Maximum 1000.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written.</td>
</tr>
<tr>
    <td><CopyableCode code="flagRevisions" /></td>
    <td><code>array</code></td>
    <td>Optional. Output only. Flag revisions used by this Unit.</td>
</tr>
<tr>
    <td><CopyableCode code="inputVariables" /></td>
    <td><code>array</code></td>
    <td>Optional. Output only. Indicates the current input variables deployed by the unit</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance" /></td>
    <td><code>object</code></td>
    <td>Optional. Captures requested directives for performing future maintenance on the unit. This includes a request for the unit to skip maintenance for a period of time and remain pinned to its current release as well as controls for postponing maintenance scheduled in future. (id: MaintenanceSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="managementMode" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. Indicates whether the Unit life cycle is controlled by the user or by the system. Immutable once created. (MANAGEMENT_MODE_UNSPECIFIED, MANAGEMENT_MODE_USER, MANAGEMENT_MODE_SYSTEM)</td>
</tr>
<tr>
    <td><CopyableCode code="ongoingOperations" /></td>
    <td><code>array</code></td>
    <td>Optional. Output only. List of concurrent UnitOperations that are operating on this Unit.</td>
</tr>
<tr>
    <td><CopyableCode code="outputVariables" /></td>
    <td><code>array</code></td>
    <td>Optional. Output only. Set of key/value pairs corresponding to output variables from execution of actuation templates. The variables are declared in actuation configs (e.g in helm chart or terraform) and the values are fetched and returned by the actuation engine upon completion of execution.</td>
</tr>
<tr>
    <td><CopyableCode code="pendingOperations" /></td>
    <td><code>array</code></td>
    <td>Optional. Output only. List of pending (wait to be executed) UnitOperations for this unit.</td>
</tr>
<tr>
    <td><CopyableCode code="release" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. The current Release object for this Unit.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether the resource location satisfies Zone Separation constraints. This is false by default.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduledOperations" /></td>
    <td><code>array</code></td>
    <td>Optional. Output only. List of scheduled UnitOperations for this unit.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. Current lifecycle state of the resource (e.g. if it's being created or ready to use). (UNIT_STATE_UNSPECIFIED, UNIT_STATE_NOT_PROVISIONED, UNIT_STATE_PROVISIONING, UNIT_STATE_UPDATING, UNIT_STATE_DEPROVISIONING, UNIT_STATE_READY, UNIT_STATE_ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="systemCleanupAt" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Output only. If set, indicates the time when the system will start removing the unit.</td>
</tr>
<tr>
    <td><CopyableCode code="systemManagedState" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. Indicates the system managed state of the unit. (SYSTEM_MANAGED_STATE_UNSPECIFIED, SYSTEM_MANAGED_STATE_ACTIVE, SYSTEM_MANAGED_STATE_INACTIVE, SYSTEM_MANAGED_STATE_DECOMMISSIONED)</td>
</tr>
<tr>
    <td><CopyableCode code="tenant" /></td>
    <td><code>string</code></td>
    <td>Optional. Reference to the Saas Tenant resource this unit belongs to. This for example informs the maintenance policies to use for scheduling future updates on a unit. (optional and immutable once created)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4.</td>
</tr>
<tr>
    <td><CopyableCode code="unitKind" /></td>
    <td><code>string</code></td>
    <td>Optional. Reference to the UnitKind this Unit belongs to. Immutable once set.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value.</td>
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
    <td>Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/&#123;project&#125;/locations/&#123;location&#125;/units/&#123;unit&#125;"</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations</td>
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
    <td><CopyableCode code="dependencies" /></td>
    <td><code>array</code></td>
    <td>Optional. Output only. Set of dependencies for this unit. Maximum 10.</td>
</tr>
<tr>
    <td><CopyableCode code="dependents" /></td>
    <td><code>array</code></td>
    <td>Optional. Output only. List of Units that depend on this unit. Unit can only be deprovisioned if this list is empty. Maximum 1000.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written.</td>
</tr>
<tr>
    <td><CopyableCode code="flagRevisions" /></td>
    <td><code>array</code></td>
    <td>Optional. Output only. Flag revisions used by this Unit.</td>
</tr>
<tr>
    <td><CopyableCode code="inputVariables" /></td>
    <td><code>array</code></td>
    <td>Optional. Output only. Indicates the current input variables deployed by the unit</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance" /></td>
    <td><code>object</code></td>
    <td>Optional. Captures requested directives for performing future maintenance on the unit. This includes a request for the unit to skip maintenance for a period of time and remain pinned to its current release as well as controls for postponing maintenance scheduled in future. (id: MaintenanceSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="managementMode" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. Indicates whether the Unit life cycle is controlled by the user or by the system. Immutable once created. (MANAGEMENT_MODE_UNSPECIFIED, MANAGEMENT_MODE_USER, MANAGEMENT_MODE_SYSTEM)</td>
</tr>
<tr>
    <td><CopyableCode code="ongoingOperations" /></td>
    <td><code>array</code></td>
    <td>Optional. Output only. List of concurrent UnitOperations that are operating on this Unit.</td>
</tr>
<tr>
    <td><CopyableCode code="outputVariables" /></td>
    <td><code>array</code></td>
    <td>Optional. Output only. Set of key/value pairs corresponding to output variables from execution of actuation templates. The variables are declared in actuation configs (e.g in helm chart or terraform) and the values are fetched and returned by the actuation engine upon completion of execution.</td>
</tr>
<tr>
    <td><CopyableCode code="pendingOperations" /></td>
    <td><code>array</code></td>
    <td>Optional. Output only. List of pending (wait to be executed) UnitOperations for this unit.</td>
</tr>
<tr>
    <td><CopyableCode code="release" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. The current Release object for this Unit.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether the resource location satisfies Zone Separation constraints. This is false by default.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduledOperations" /></td>
    <td><code>array</code></td>
    <td>Optional. Output only. List of scheduled UnitOperations for this unit.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. Current lifecycle state of the resource (e.g. if it's being created or ready to use). (UNIT_STATE_UNSPECIFIED, UNIT_STATE_NOT_PROVISIONED, UNIT_STATE_PROVISIONING, UNIT_STATE_UPDATING, UNIT_STATE_DEPROVISIONING, UNIT_STATE_READY, UNIT_STATE_ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="systemCleanupAt" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Output only. If set, indicates the time when the system will start removing the unit.</td>
</tr>
<tr>
    <td><CopyableCode code="systemManagedState" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. Indicates the system managed state of the unit. (SYSTEM_MANAGED_STATE_UNSPECIFIED, SYSTEM_MANAGED_STATE_ACTIVE, SYSTEM_MANAGED_STATE_INACTIVE, SYSTEM_MANAGED_STATE_DECOMMISSIONED)</td>
</tr>
<tr>
    <td><CopyableCode code="tenant" /></td>
    <td><code>string</code></td>
    <td>Optional. Reference to the Saas Tenant resource this unit belongs to. This for example informs the maintenance policies to use for scheduling future updates on a unit. (optional and immutable once created)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4.</td>
</tr>
<tr>
    <td><CopyableCode code="unitKind" /></td>
    <td><code>string</code></td>
    <td>Optional. Reference to the UnitKind this Unit belongs to. Immutable once set.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-unitsId"><code>unitsId</code></a></td>
    <td></td>
    <td>Retrieve a single unit.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Retrieve a collection of units.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-unitId"><code>unitId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Create a new unit.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-unitsId"><code>unitsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Update a single unit.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-unitsId"><code>unitsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Delete a single unit.</td>
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
<tr id="parameter-unitsId">
    <td><CopyableCode code="unitsId" /></td>
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
<tr id="parameter-unitId">
    <td><CopyableCode code="unitId" /></td>
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

Retrieve a single unit.

```sql
SELECT
name,
annotations,
conditions,
createTime,
dependencies,
dependents,
etag,
flagRevisions,
inputVariables,
labels,
maintenance,
managementMode,
ongoingOperations,
outputVariables,
pendingOperations,
release,
satisfiesPzi,
satisfiesPzs,
scheduledOperations,
state,
systemCleanupAt,
systemManagedState,
tenant,
uid,
unitKind,
updateTime
FROM google.saasservicemgmt.units
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND unitsId = '{{ unitsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Retrieve a collection of units.

```sql
SELECT
name,
annotations,
conditions,
createTime,
dependencies,
dependents,
etag,
flagRevisions,
inputVariables,
labels,
maintenance,
managementMode,
ongoingOperations,
outputVariables,
pendingOperations,
release,
satisfiesPzi,
satisfiesPzs,
scheduledOperations,
state,
systemCleanupAt,
systemManagedState,
tenant,
uid,
unitKind,
updateTime
FROM google.saasservicemgmt.units
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

Create a new unit.

```sql
INSERT INTO google.saasservicemgmt.units (
data__annotations,
data__labels,
data__maintenance,
data__managementMode,
data__name,
data__tenant,
data__unitKind,
projectsId,
locationsId,
requestId,
unitId,
validateOnly
)
SELECT 
'{{ annotations }}',
'{{ labels }}',
'{{ maintenance }}',
'{{ managementMode }}',
'{{ name }}',
'{{ tenant }}',
'{{ unitKind }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ requestId }}',
'{{ unitId }}',
'{{ validateOnly }}'
RETURNING
name,
annotations,
conditions,
createTime,
dependencies,
dependents,
etag,
flagRevisions,
inputVariables,
labels,
maintenance,
managementMode,
ongoingOperations,
outputVariables,
pendingOperations,
release,
satisfiesPzi,
satisfiesPzs,
scheduledOperations,
state,
systemCleanupAt,
systemManagedState,
tenant,
uid,
unitKind,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: units
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the units resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the units resource.
    - name: annotations
      value: "{{ annotations }}"
      description: |
        Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.
    - name: maintenance
      description: |
        Optional. Captures requested directives for performing future maintenance on the unit. This includes a request for the unit to skip maintenance for a period of time and remain pinned to its current release as well as controls for postponing maintenance scheduled in future.
      value:
        pinnedUntilTime: "{{ pinnedUntilTime }}"
    - name: managementMode
      value: "{{ managementMode }}"
      description: |
        Optional. Immutable. Indicates whether the Unit life cycle is controlled by the user or by the system. Immutable once created.
      valid_values: ['MANAGEMENT_MODE_UNSPECIFIED', 'MANAGEMENT_MODE_USER', 'MANAGEMENT_MODE_SYSTEM']
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/units/{unit}"
    - name: tenant
      value: "{{ tenant }}"
      description: |
        Optional. Reference to the Saas Tenant resource this unit belongs to. This for example informs the maintenance policies to use for scheduling future updates on a unit. (optional and immutable once created)
    - name: unitKind
      value: "{{ unitKind }}"
      description: |
        Optional. Reference to the UnitKind this Unit belongs to. Immutable once set.
    - name: requestId
      value: "{{ requestId }}"
    - name: unitId
      value: "{{ unitId }}"
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

Update a single unit.

```sql
UPDATE google.saasservicemgmt.units
SET 
data__annotations = '{{ annotations }}',
data__labels = '{{ labels }}',
data__maintenance = '{{ maintenance }}',
data__managementMode = '{{ managementMode }}',
data__name = '{{ name }}',
data__tenant = '{{ tenant }}',
data__unitKind = '{{ unitKind }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND unitsId = '{{ unitsId }}' --required
AND requestId = '{{ requestId}}'
AND updateMask = '{{ updateMask}}'
AND validateOnly = {{ validateOnly}}
RETURNING
name,
annotations,
conditions,
createTime,
dependencies,
dependents,
etag,
flagRevisions,
inputVariables,
labels,
maintenance,
managementMode,
ongoingOperations,
outputVariables,
pendingOperations,
release,
satisfiesPzi,
satisfiesPzs,
scheduledOperations,
state,
systemCleanupAt,
systemManagedState,
tenant,
uid,
unitKind,
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

Delete a single unit.

```sql
DELETE FROM google.saasservicemgmt.units
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND unitsId = '{{ unitsId }}' --required
AND etag = '{{ etag }}'
AND requestId = '{{ requestId }}'
AND validateOnly = '{{ validateOnly }}'
;
```
</TabItem>
</Tabs>
