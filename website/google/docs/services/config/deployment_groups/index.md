--- 
title: deployment_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - deployment_groups
  - config
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

Creates, updates, deletes, gets or lists a <code>deployment_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deployment_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.config.deployment_groups" /></td></tr>
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
    <td>Identifier. The name of the deployment group. Format: 'projects/&#123;project_id&#125;/locations/&#123;location&#125;/deploymentGroups/&#123;deployment_group&#125;'.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Arbitrary key-value metadata storage e.g. to help client tools identify deployment group during automation. See https://google.aip.dev/148#annotations for details on format and size limitations.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the deployment group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentUnits" /></td>
    <td><code>array</code></td>
    <td>The deployment units of the deployment group in a DAG like structure. When a deployment group is being provisioned, the deployment units are deployed in a DAG order. The provided units must be in a DAG order, otherwise an error will be returned.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined metadata for the deployment group.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioningError" /></td>
    <td><code>object</code></td>
    <td>Output only. The error status of the deployment group provisioning or deprovisioning. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="provisioningState" /></td>
    <td><code>string</code></td>
    <td>Output only. The provisioning state of the deployment group. (PROVISIONING_STATE_UNSPECIFIED, PROVISIONING, PROVISIONED, FAILED_TO_PROVISION, DEPROVISIONING, DEPROVISIONED, FAILED_TO_DEPROVISION)</td>
</tr>
<tr>
    <td><CopyableCode code="provisioningStateDescription" /></td>
    <td><code>string</code></td>
    <td>Output only. Additional information regarding the current provisioning state.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the deployment group. (STATE_UNSPECIFIED, CREATING, ACTIVE, UPDATING, DELETING, FAILED, SUSPENDED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="stateDescription" /></td>
    <td><code>string</code></td>
    <td>Output only. Additional information regarding the current state.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the deployment group was last updated.</td>
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
    <td>Identifier. The name of the deployment group. Format: 'projects/&#123;project_id&#125;/locations/&#123;location&#125;/deploymentGroups/&#123;deployment_group&#125;'.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Arbitrary key-value metadata storage e.g. to help client tools identify deployment group during automation. See https://google.aip.dev/148#annotations for details on format and size limitations.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the deployment group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentUnits" /></td>
    <td><code>array</code></td>
    <td>The deployment units of the deployment group in a DAG like structure. When a deployment group is being provisioned, the deployment units are deployed in a DAG order. The provided units must be in a DAG order, otherwise an error will be returned.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined metadata for the deployment group.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioningError" /></td>
    <td><code>object</code></td>
    <td>Output only. The error status of the deployment group provisioning or deprovisioning. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="provisioningState" /></td>
    <td><code>string</code></td>
    <td>Output only. The provisioning state of the deployment group. (PROVISIONING_STATE_UNSPECIFIED, PROVISIONING, PROVISIONED, FAILED_TO_PROVISION, DEPROVISIONING, DEPROVISIONED, FAILED_TO_DEPROVISION)</td>
</tr>
<tr>
    <td><CopyableCode code="provisioningStateDescription" /></td>
    <td><code>string</code></td>
    <td>Output only. Additional information regarding the current provisioning state.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the deployment group. (STATE_UNSPECIFIED, CREATING, ACTIVE, UPDATING, DELETING, FAILED, SUSPENDED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="stateDescription" /></td>
    <td><code>string</code></td>
    <td>Output only. Additional information regarding the current state.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the deployment group was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentGroupsId"><code>deploymentGroupsId</code></a></td>
    <td></td>
    <td>Get a DeploymentGroup for a given project and location.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>List DeploymentGroups for a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-deploymentGroupId"><code>deploymentGroupId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a DeploymentGroup The newly created DeploymentGroup will be in the `CREATING` state and can be retrieved via Get and List calls.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentGroupsId"><code>deploymentGroupsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates a DeploymentGroup</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentGroupsId"><code>deploymentGroupsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-deploymentReferencePolicy"><code>deploymentReferencePolicy</code></a>, <a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a DeploymentGroup</td>
</tr>
<tr>
    <td><a href="#provision"><CopyableCode code="provision" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentGroupsId"><code>deploymentGroupsId</code></a></td>
    <td></td>
    <td>Provisions a deployment group. NOTE: As a first step of this operation, Infra Manager will automatically delete any Deployments that were part of the *last successful* DeploymentGroupRevision but are *no longer* included in the *current* DeploymentGroup definition (e.g., following an `UpdateDeploymentGroup` call), along with their actuated resources.</td>
</tr>
<tr>
    <td><a href="#deprovision"><CopyableCode code="deprovision" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentGroupsId"><code>deploymentGroupsId</code></a></td>
    <td></td>
    <td>Deprovisions a deployment group. NOTE: As a first step of this operation, Infra Manager will automatically delete any Deployments that were part of the *last successful* DeploymentGroupRevision but are *no longer* included in the *current* DeploymentGroup definition (e.g., following an `UpdateDeploymentGroup` call), along with their actuated resources.</td>
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
<tr id="parameter-deploymentGroupsId">
    <td><CopyableCode code="deploymentGroupsId" /></td>
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
<tr id="parameter-deploymentGroupId">
    <td><CopyableCode code="deploymentGroupId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-deploymentReferencePolicy">
    <td><CopyableCode code="deploymentReferencePolicy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
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

Get a DeploymentGroup for a given project and location.

```sql
SELECT
name,
annotations,
createTime,
deploymentUnits,
labels,
provisioningError,
provisioningState,
provisioningStateDescription,
state,
stateDescription,
updateTime
FROM google.config.deployment_groups
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND deploymentGroupsId = '{{ deploymentGroupsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

List DeploymentGroups for a given project and location.

```sql
SELECT
name,
annotations,
createTime,
deploymentUnits,
labels,
provisioningError,
provisioningState,
provisioningStateDescription,
state,
stateDescription,
updateTime
FROM google.config.deployment_groups
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND filter = '{{ filter }}'
AND pageToken = '{{ pageToken }}'
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

Creates a DeploymentGroup The newly created DeploymentGroup will be in the `CREATING` state and can be retrieved via Get and List calls.

```sql
INSERT INTO google.config.deployment_groups (
data__deploymentUnits,
data__name,
data__labels,
data__annotations,
projectsId,
locationsId,
deploymentGroupId,
requestId
)
SELECT 
'{{ deploymentUnits }}',
'{{ name }}',
'{{ labels }}',
'{{ annotations }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ deploymentGroupId }}',
'{{ requestId }}'
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
- name: deployment_groups
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the deployment_groups resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the deployment_groups resource.
    - name: deploymentUnits
      description: |
        The deployment units of the deployment group in a DAG like structure. When a deployment group is being provisioned, the deployment units are deployed in a DAG order. The provided units must be in a DAG order, otherwise an error will be returned.
      value:
        - dependencies: "{{ dependencies }}"
          id: "{{ id }}"
          deployment: "{{ deployment }}"
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The name of the deployment group. Format: 'projects/{project_id}/locations/{location}/deploymentGroups/{deployment_group}'.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. User-defined metadata for the deployment group.
    - name: annotations
      value: "{{ annotations }}"
      description: |
        Optional. Arbitrary key-value metadata storage e.g. to help client tools identify deployment group during automation. See https://google.aip.dev/148#annotations for details on format and size limitations.
    - name: deploymentGroupId
      value: "{{ deploymentGroupId }}"
    - name: requestId
      value: "{{ requestId }}"
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

Updates a DeploymentGroup

```sql
UPDATE google.config.deployment_groups
SET 
data__deploymentUnits = '{{ deploymentUnits }}',
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__annotations = '{{ annotations }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND deploymentGroupsId = '{{ deploymentGroupsId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
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

Deletes a DeploymentGroup

```sql
DELETE FROM google.config.deployment_groups
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND deploymentGroupsId = '{{ deploymentGroupsId }}' --required
AND requestId = '{{ requestId }}'
AND deploymentReferencePolicy = '{{ deploymentReferencePolicy }}'
AND force = '{{ force }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="provision"
    values={[
        { label: 'provision', value: 'provision' },
        { label: 'deprovision', value: 'deprovision' }
    ]}
>
<TabItem value="provision">

Provisions a deployment group. NOTE: As a first step of this operation, Infra Manager will automatically delete any Deployments that were part of the *last successful* DeploymentGroupRevision but are *no longer* included in the *current* DeploymentGroup definition (e.g., following an `UpdateDeploymentGroup` call), along with their actuated resources.

```sql
EXEC google.config.deployment_groups.provision 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@deploymentGroupsId='{{ deploymentGroupsId }}' --required 
@@json=
'{
"deploymentSpecs": "{{ deploymentSpecs }}"
}'
;
```
</TabItem>
<TabItem value="deprovision">

Deprovisions a deployment group. NOTE: As a first step of this operation, Infra Manager will automatically delete any Deployments that were part of the *last successful* DeploymentGroupRevision but are *no longer* included in the *current* DeploymentGroup definition (e.g., following an `UpdateDeploymentGroup` call), along with their actuated resources.

```sql
EXEC google.config.deployment_groups.deprovision 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@deploymentGroupsId='{{ deploymentGroupsId }}' --required 
@@json=
'{
"force": {{ force }}, 
"deletePolicy": "{{ deletePolicy }}"
}'
;
```
</TabItem>
</Tabs>
