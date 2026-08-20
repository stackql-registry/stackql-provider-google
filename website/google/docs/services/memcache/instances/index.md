--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
  - memcache
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

Creates, updates, deletes, gets or lists an <code>instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.memcache.instances" /></td></tr>
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
    <td>Required. Unique name of the resource in this scope including project and location using the form: `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/instances/&#123;instance_id&#125;` Note: Memcached instances are managed and addressed at the regional level so `location_id` here refers to a Google Cloud region; however, users may choose which zones Memcached nodes should be provisioned in within an instance. Refer to zones field for more details.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizedNetwork" /></td>
    <td><code>string</code></td>
    <td>The full name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the instance is connected. If left unspecified, the `default` network will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="availableMaintenanceVersions" /></td>
    <td><code>array</code></td>
    <td>Output only. The available maintenance versions that can be applied to the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="discoveryEndpoint" /></td>
    <td><code>string</code></td>
    <td>Output only. Endpoint for the Discovery API.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User provided name for the instance, which is only used for display purposes. Cannot be more than 80 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="effectiveMaintenanceVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The effective maintenance version of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceMessages" /></td>
    <td><code>array</code></td>
    <td>List of messages that describe the current state of the Memcached instance.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources</td>
</tr>
<tr>
    <td><CopyableCode code="maintenancePolicy" /></td>
    <td><code>object</code></td>
    <td>The maintenance policy for the instance. If not provided, the maintenance event will be performed based on Memorystore internal rollout schedule. (id: GoogleCloudMemcacheV1MaintenancePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceSchedule" /></td>
    <td><code>object</code></td>
    <td>Output only. Published maintenance schedule. (id: MaintenanceSchedule)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. Last self service update maintenance version triggered by the customer. If it is empty, it means that the maintenance version is not set by the user.</td>
</tr>
<tr>
    <td><CopyableCode code="memcacheFullVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The full version of memcached server running on this instance. System automatically determines the full memcached version for an instance based on the input MemcacheVersion. The full version format will be "memcached-1.5.16".</td>
</tr>
<tr>
    <td><CopyableCode code="memcacheNodes" /></td>
    <td><code>array</code></td>
    <td>Output only. List of Memcached nodes. Refer to Node message for more details.</td>
</tr>
<tr>
    <td><CopyableCode code="memcacheVersion" /></td>
    <td><code>string</code></td>
    <td>The major version of Memcached software. If not provided, latest supported version will be used. Currently the latest supported major version is `MEMCACHE_1_5`. The minor version will be automatically determined by our system based on the latest supported minor version. (MEMCACHE_VERSION_UNSPECIFIED, MEMCACHE_1_5, MEMCACHE_1_6_15)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Configuration for Memcached nodes. (id: NodeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Required. Number of nodes in the Memcached instance.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>User defined parameters to apply to the memcached process on each node. (id: MemcacheParameters)</td>
</tr>
<tr>
    <td><CopyableCode code="reservedIpRangeId" /></td>
    <td><code>array</code></td>
    <td>Optional. Contains the id of allocated IP address ranges associated with the private service access connection for example, "test-default" associated with IP range 10.0.0.0/29.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of this Memcached instance. (STATE_UNSPECIFIED, CREATING, READY, UPDATING, DELETING, PERFORMING_MAINTENANCE, MEMCACHE_VERSION_UPGRADING)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the instance was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="zones" /></td>
    <td><code>array</code></td>
    <td>Zones in which Memcached nodes should be provisioned. Memcached nodes will be equally distributed across these zones. If not provided, the service will by default create nodes in all zones in the region for the instance.</td>
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
    <td>Required. Unique name of the resource in this scope including project and location using the form: `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/instances/&#123;instance_id&#125;` Note: Memcached instances are managed and addressed at the regional level so `location_id` here refers to a Google Cloud region; however, users may choose which zones Memcached nodes should be provisioned in within an instance. Refer to zones field for more details.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizedNetwork" /></td>
    <td><code>string</code></td>
    <td>The full name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the instance is connected. If left unspecified, the `default` network will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="availableMaintenanceVersions" /></td>
    <td><code>array</code></td>
    <td>Output only. The available maintenance versions that can be applied to the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="discoveryEndpoint" /></td>
    <td><code>string</code></td>
    <td>Output only. Endpoint for the Discovery API.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User provided name for the instance, which is only used for display purposes. Cannot be more than 80 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="effectiveMaintenanceVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The effective maintenance version of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceMessages" /></td>
    <td><code>array</code></td>
    <td>List of messages that describe the current state of the Memcached instance.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources</td>
</tr>
<tr>
    <td><CopyableCode code="maintenancePolicy" /></td>
    <td><code>object</code></td>
    <td>The maintenance policy for the instance. If not provided, the maintenance event will be performed based on Memorystore internal rollout schedule. (id: GoogleCloudMemcacheV1MaintenancePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceSchedule" /></td>
    <td><code>object</code></td>
    <td>Output only. Published maintenance schedule. (id: MaintenanceSchedule)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. Last self service update maintenance version triggered by the customer. If it is empty, it means that the maintenance version is not set by the user.</td>
</tr>
<tr>
    <td><CopyableCode code="memcacheFullVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The full version of memcached server running on this instance. System automatically determines the full memcached version for an instance based on the input MemcacheVersion. The full version format will be "memcached-1.5.16".</td>
</tr>
<tr>
    <td><CopyableCode code="memcacheNodes" /></td>
    <td><code>array</code></td>
    <td>Output only. List of Memcached nodes. Refer to Node message for more details.</td>
</tr>
<tr>
    <td><CopyableCode code="memcacheVersion" /></td>
    <td><code>string</code></td>
    <td>The major version of Memcached software. If not provided, latest supported version will be used. Currently the latest supported major version is `MEMCACHE_1_5`. The minor version will be automatically determined by our system based on the latest supported minor version. (MEMCACHE_VERSION_UNSPECIFIED, MEMCACHE_1_5, MEMCACHE_1_6_15)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Configuration for Memcached nodes. (id: NodeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Required. Number of nodes in the Memcached instance.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>User defined parameters to apply to the memcached process on each node. (id: MemcacheParameters)</td>
</tr>
<tr>
    <td><CopyableCode code="reservedIpRangeId" /></td>
    <td><code>array</code></td>
    <td>Optional. Contains the id of allocated IP address ranges associated with the private service access connection for example, "test-default" associated with IP range 10.0.0.0/29.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of this Memcached instance. (STATE_UNSPECIFIED, CREATING, READY, UPDATING, DELETING, PERFORMING_MAINTENANCE, MEMCACHE_VERSION_UPGRADING)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the instance was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="zones" /></td>
    <td><code>array</code></td>
    <td>Zones in which Memcached nodes should be provisioned. Memcached nodes will be equally distributed across these zones. If not provided, the service will by default create nodes in all zones in the region for the instance.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Gets details of a single Instance.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists Instances in a given location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a></td>
    <td>Creates a new Instance in a given location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing Instance in a given project and location.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Deletes a single Instance.</td>
</tr>
<tr>
    <td><a href="#apply_parameters"><CopyableCode code="apply_parameters" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>`ApplyParameters` restarts the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.</td>
</tr>
<tr>
    <td><a href="#reschedule_maintenance"><CopyableCode code="reschedule_maintenance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Reschedules upcoming maintenance event.</td>
</tr>
<tr>
    <td><a href="#set_tags"><CopyableCode code="set_tags" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Updates tags directly bound to a GCP resource.</td>
</tr>
<tr>
    <td><a href="#upgrade"><CopyableCode code="upgrade" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Upgrades the Memcache instance to a newer memcached engine version specified in the request.</td>
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
<tr id="parameter-instancesId">
    <td><CopyableCode code="instancesId" /></td>
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
<tr id="parameter-instanceId">
    <td><CopyableCode code="instanceId" /></td>
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

Gets details of a single Instance.

```sql
SELECT
name,
authorizedNetwork,
availableMaintenanceVersions,
createTime,
discoveryEndpoint,
displayName,
effectiveMaintenanceVersion,
instanceMessages,
labels,
maintenancePolicy,
maintenanceSchedule,
maintenanceVersion,
memcacheFullVersion,
memcacheNodes,
memcacheVersion,
nodeConfig,
nodeCount,
parameters,
reservedIpRangeId,
satisfiesPzi,
satisfiesPzs,
state,
updateTime,
zones
FROM google.memcache.instances
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Instances in a given location.

```sql
SELECT
name,
authorizedNetwork,
availableMaintenanceVersions,
createTime,
discoveryEndpoint,
displayName,
effectiveMaintenanceVersion,
instanceMessages,
labels,
maintenancePolicy,
maintenanceSchedule,
maintenanceVersion,
memcacheFullVersion,
memcacheNodes,
memcacheVersion,
nodeConfig,
nodeCount,
parameters,
reservedIpRangeId,
satisfiesPzi,
satisfiesPzs,
state,
updateTime,
zones
FROM google.memcache.instances
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

Creates a new Instance in a given location.

```sql
INSERT INTO google.memcache.instances (
data__authorizedNetwork,
data__displayName,
data__instanceMessages,
data__labels,
data__maintenancePolicy,
data__maintenanceVersion,
data__memcacheVersion,
data__name,
data__nodeConfig,
data__nodeCount,
data__parameters,
data__reservedIpRangeId,
data__zones,
projectsId,
locationsId,
instanceId
)
SELECT 
'{{ authorizedNetwork }}',
'{{ displayName }}',
'{{ instanceMessages }}',
'{{ labels }}',
'{{ maintenancePolicy }}',
'{{ maintenanceVersion }}',
'{{ memcacheVersion }}',
'{{ name }}',
'{{ nodeConfig }}',
{{ nodeCount }},
'{{ parameters }}',
'{{ reservedIpRangeId }}',
'{{ zones }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ instanceId }}'
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
- name: instances
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the instances resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the instances resource.
    - name: authorizedNetwork
      value: "{{ authorizedNetwork }}"
      description: |
        The full name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the instance is connected. If left unspecified, the \`default\` network will be used.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        User provided name for the instance, which is only used for display purposes. Cannot be more than 80 characters.
    - name: instanceMessages
      description: |
        List of messages that describe the current state of the Memcached instance.
      value:
        - code: "{{ code }}"
          message: "{{ message }}"
    - name: labels
      value: "{{ labels }}"
      description: |
        Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources
    - name: maintenancePolicy
      description: |
        The maintenance policy for the instance. If not provided, the maintenance event will be performed based on Memorystore internal rollout schedule.
      value:
        createTime: "{{ createTime }}"
        description: "{{ description }}"
        updateTime: "{{ updateTime }}"
        weeklyMaintenanceWindow:
          - day: "{{ day }}"
            duration: "{{ duration }}"
            startTime:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
    - name: maintenanceVersion
      value: "{{ maintenanceVersion }}"
      description: |
        Optional. Last self service update maintenance version triggered by the customer. If it is empty, it means that the maintenance version is not set by the user.
    - name: memcacheVersion
      value: "{{ memcacheVersion }}"
      description: |
        The major version of Memcached software. If not provided, latest supported version will be used. Currently the latest supported major version is \`MEMCACHE_1_5\`. The minor version will be automatically determined by our system based on the latest supported minor version.
      valid_values: ['MEMCACHE_VERSION_UNSPECIFIED', 'MEMCACHE_1_5', 'MEMCACHE_1_6_15']
    - name: name
      value: "{{ name }}"
      description: |
        Required. Unique name of the resource in this scope including project and location using the form: \`projects/{project_id}/locations/{location_id}/instances/{instance_id}\` Note: Memcached instances are managed and addressed at the regional level so \`location_id\` here refers to a Google Cloud region; however, users may choose which zones Memcached nodes should be provisioned in within an instance. Refer to zones field for more details.
    - name: nodeConfig
      description: |
        Required. Configuration for Memcached nodes.
      value:
        cpuCount: {{ cpuCount }}
        memorySizeMb: {{ memorySizeMb }}
    - name: nodeCount
      value: {{ nodeCount }}
      description: |
        Required. Number of nodes in the Memcached instance.
    - name: parameters
      description: |
        User defined parameters to apply to the memcached process on each node.
      value:
        id: "{{ id }}"
        params: "{{ params }}"
    - name: reservedIpRangeId
      value:
        - "{{ reservedIpRangeId }}"
      description: |
        Optional. Contains the id of allocated IP address ranges associated with the private service access connection for example, "test-default" associated with IP range 10.0.0.0/29.
    - name: zones
      value:
        - "{{ zones }}"
      description: |
        Zones in which Memcached nodes should be provisioned. Memcached nodes will be equally distributed across these zones. If not provided, the service will by default create nodes in all zones in the region for the instance.
    - name: instanceId
      value: "{{ instanceId }}"
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

Updates an existing Instance in a given project and location.

```sql
UPDATE google.memcache.instances
SET 
data__authorizedNetwork = '{{ authorizedNetwork }}',
data__displayName = '{{ displayName }}',
data__instanceMessages = '{{ instanceMessages }}',
data__labels = '{{ labels }}',
data__maintenancePolicy = '{{ maintenancePolicy }}',
data__maintenanceVersion = '{{ maintenanceVersion }}',
data__memcacheVersion = '{{ memcacheVersion }}',
data__name = '{{ name }}',
data__nodeConfig = '{{ nodeConfig }}',
data__nodeCount = {{ nodeCount }},
data__parameters = '{{ parameters }}',
data__reservedIpRangeId = '{{ reservedIpRangeId }}',
data__zones = '{{ zones }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND instancesId = '{{ instancesId }}' --required
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

Deletes a single Instance.

```sql
DELETE FROM google.memcache.instances
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND instancesId = '{{ instancesId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="apply_parameters"
    values={[
        { label: 'apply_parameters', value: 'apply_parameters' },
        { label: 'reschedule_maintenance', value: 'reschedule_maintenance' },
        { label: 'set_tags', value: 'set_tags' },
        { label: 'upgrade', value: 'upgrade' }
    ]}
>
<TabItem value="apply_parameters">

`ApplyParameters` restarts the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.

```sql
EXEC google.memcache.instances.apply_parameters 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"applyAll": {{ applyAll }}, 
"nodeIds": "{{ nodeIds }}"
}'
;
```
</TabItem>
<TabItem value="reschedule_maintenance">

Reschedules upcoming maintenance event.

```sql
EXEC google.memcache.instances.reschedule_maintenance 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"rescheduleType": "{{ rescheduleType }}", 
"scheduleTime": "{{ scheduleTime }}"
}'
;
```
</TabItem>
<TabItem value="set_tags">

Updates tags directly bound to a GCP resource.

```sql
EXEC google.memcache.instances.set_tags 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"etag": "{{ etag }}", 
"name": "{{ name }}", 
"requestId": "{{ requestId }}", 
"tags": "{{ tags }}"
}'
;
```
</TabItem>
<TabItem value="upgrade">

Upgrades the Memcache instance to a newer memcached engine version specified in the request.

```sql
EXEC google.memcache.instances.upgrade 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"memcacheVersion": "{{ memcacheVersion }}"
}'
;
```
</TabItem>
</Tabs>
