--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
  - alloydb
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.alloydb.instances" /></td></tr>
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
    <td>Output only. The name of the instance resource with the format: * projects/&#123;project&#125;/locations/&#123;region&#125;/clusters/&#123;cluster_id&#125;/instances/&#123;instance_id&#125; where the cluster and instance ID segments should satisfy the regex expression `[a-z]([a-z0-9-]&#123;0,61&#125;[a-z0-9])?`, e.g. 1-63 characters of lowercase letters, numbers, and dashes, starting with a letter, and ending with a letter or number. For more details see https://google.aip.dev/122. The prefix of the instance resource name is the name of the parent resource: * projects/&#123;project&#125;/locations/&#123;region&#125;/clusters/&#123;cluster_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="activationPolicy" /></td>
    <td><code>string</code></td>
    <td>Optional. Specifies whether an instance needs to spin up. Once the instance is active, the activation policy can be updated to the `NEVER` to stop the instance. Likewise, the activation policy can be updated to `ALWAYS` to start the instance. There are restrictions around when an instance can/cannot be activated (for example, a read pool instance should be stopped before stopping primary etc.). Please refer to the API documentation for more details. (ACTIVATION_POLICY_UNSPECIFIED, ALWAYS, NEVER)</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityType" /></td>
    <td><code>string</code></td>
    <td>Availability type of an Instance. If empty, defaults to REGIONAL for primary instances. For read pools, availability_type is always UNSPECIFIED. Instances in the read pools are evenly distributed across available zones within the region (i.e. read pools with more than one node will have a node in at least two zones). (AVAILABILITY_TYPE_UNSPECIFIED, ZONAL, REGIONAL)</td>
</tr>
<tr>
    <td><CopyableCode code="clientConnectionConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Client connection specific configurations (id: ClientConnectionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="connectionPoolConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The configuration for Managed Connection Pool (MCP). (id: ConnectionPoolConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="dataApiAccess" /></td>
    <td><code>string</code></td>
    <td>Optional. Controls whether the Data API is enabled for this instance. When enabled, this allows authorized users to connect to the instance from the public internet using the `executeSql` API, even for private IP instances. If this is not specified, the data API is enabled by default for Google internal services like AlloyDB Studio. Disable it explicitly to disallow Google internal services as well. (DEFAULT_DATA_API_ENABLED_FOR_GOOGLE_CLOUD_SERVICES, DISABLED, ENABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="databaseFlags" /></td>
    <td><code>object</code></td>
    <td>Database flags. Set at the instance level. They are copied from the primary instance on secondary instance creation. Flags that have restrictions default to the value at primary instance on read instances during creation. Read instances can set new flags or override existing flags that are relevant for reads, for example, for enabling columnar cache on a read instance. Flags set on read instance might or might not be present on the primary instance. This is a list of "key": "value" pairs. "key": The name of the flag. These flags are passed at instance setup time, so include both server options and system variables for Postgres. Flags are specified with underscores, not hyphens. "value": The value of the flag. Booleans are set to **on** for true and **off** for false. This field must be omitted if the flag doesn't take a value.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Delete time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User-settable and human-readable display name for the Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>For Resource freshness validation (https://google.aip.dev/154)</td>
</tr>
<tr>
    <td><CopyableCode code="gceZone" /></td>
    <td><code>string</code></td>
    <td>The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceType" /></td>
    <td><code>string</code></td>
    <td>Required. The type of the instance. Specified at creation time. (INSTANCE_TYPE_UNSPECIFIED, PRIMARY, READ_POOL, SECONDARY)</td>
</tr>
<tr>
    <td><CopyableCode code="ipAddress" /></td>
    <td><code>string</code></td>
    <td>Output only. The IP address for the Instance. This is the connection endpoint for an end-user application.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels as key value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="machineConfig" /></td>
    <td><code>object</code></td>
    <td>Configurations for the machines that host the underlying database engine. (id: MachineConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceVersionName" /></td>
    <td><code>string</code></td>
    <td>Output only. Maintenance version of the instance, for example: POSTGRES_15.2025_07_15.04_00. Output only. Update this field via the parent cluster's maintenance_version field(s).</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Instance-level network configuration. (id: InstanceNetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nodes" /></td>
    <td><code>array</code></td>
    <td>Output only. List of available read-only VMs in this instance, including the standby for a PRIMARY instance.</td>
</tr>
<tr>
    <td><CopyableCode code="observabilityConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for observability. (id: ObservabilityInstanceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="outboundPublicIpAddresses" /></td>
    <td><code>array</code></td>
    <td>Output only. All outbound public IP addresses configured for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="pscInstanceConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The configuration for Private Service Connect (PSC) for the instance. (id: PscInstanceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="publicIpAddress" /></td>
    <td><code>string</code></td>
    <td>Output only. The public IP addresses for the Instance. This is available ONLY when enable_public_ip is set. This is the connection endpoint for an end-user application.</td>
</tr>
<tr>
    <td><CopyableCode code="queryInsightsConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for query insights. (id: QueryInsightsInstanceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="readPoolConfig" /></td>
    <td><code>object</code></td>
    <td>Read pool instance configuration. This is required if the value of instanceType is READ_POOL. (id: ReadPoolConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reconciling (https://google.aip.dev/128#reconciliation). Set to true if the current state of Instance does not match the user's intended state, and the service is actively updating the resource to reconcile them. This can happen due to user-triggered updates or system actions like failover or maintenance.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current serving state of the instance. (STATE_UNSPECIFIED, READY, STOPPED, CREATING, DELETING, MAINTENANCE, FAILED, BOOTSTRAPPING, PROMOTING, SWITCHOVER, STOPPING, STARTING)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The system-generated UID of the resource. The UID is assigned when the resource is created, and it is retained until it is deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="writableNode" /></td>
    <td><code>object</code></td>
    <td>Details of a single node in the instance. Nodes in an AlloyDB instance are ephemeral, they can change during update, failover, autohealing and resize operations. (id: Node)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Gets details of a single Instance.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Instances in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-instanceId"><code>instanceId</code></a></td>
    <td>Creates a new Instance in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates the parameters of a single Instance.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Deletes a single Instance.</td>
</tr>
<tr>
    <td><a href="#inject_fault"><CopyableCode code="inject_fault" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Injects fault in an instance. Imperative only.</td>
</tr>
<tr>
    <td><a href="#failover"><CopyableCode code="failover" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Forces a Failover for a highly available instance. Failover promotes the HA standby instance as the new primary. Imperative only.</td>
</tr>
<tr>
    <td><a href="#restart"><CopyableCode code="restart" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Restart an Instance in a cluster. Imperative only.</td>
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
<tr id="parameter-clustersId">
    <td><CopyableCode code="clustersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
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

Gets details of a single Instance.

```sql
SELECT
name,
activationPolicy,
annotations,
availabilityType,
clientConnectionConfig,
connectionPoolConfig,
createTime,
dataApiAccess,
databaseFlags,
deleteTime,
displayName,
etag,
gceZone,
instanceType,
ipAddress,
labels,
machineConfig,
maintenanceVersionName,
networkConfig,
nodes,
observabilityConfig,
outboundPublicIpAddresses,
pscInstanceConfig,
publicIpAddress,
queryInsightsConfig,
readPoolConfig,
reconciling,
satisfiesPzs,
state,
uid,
updateTime,
writableNode
FROM google.alloydb.instances
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND clustersId = '{{ clustersId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND view = '{{ view }}'
;
```
</TabItem>
<TabItem value="list">

Lists Instances in a given project and location.

```sql
SELECT
*
FROM google.alloydb.instances
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND clustersId = '{{ clustersId }}' -- required
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

Creates a new Instance in a given project and location.

```sql
INSERT INTO google.alloydb.instances (
data__observabilityConfig,
data__labels,
data__dataApiAccess,
data__gceZone,
data__etag,
data__availabilityType,
data__databaseFlags,
data__annotations,
data__pscInstanceConfig,
data__activationPolicy,
data__instanceType,
data__displayName,
data__machineConfig,
data__queryInsightsConfig,
data__readPoolConfig,
data__connectionPoolConfig,
data__clientConnectionConfig,
data__networkConfig,
projectsId,
locationsId,
clustersId,
requestId,
validateOnly,
instanceId
)
SELECT 
'{{ observabilityConfig }}',
'{{ labels }}',
'{{ dataApiAccess }}',
'{{ gceZone }}',
'{{ etag }}',
'{{ availabilityType }}',
'{{ databaseFlags }}',
'{{ annotations }}',
'{{ pscInstanceConfig }}',
'{{ activationPolicy }}',
'{{ instanceType }}',
'{{ displayName }}',
'{{ machineConfig }}',
'{{ queryInsightsConfig }}',
'{{ readPoolConfig }}',
'{{ connectionPoolConfig }}',
'{{ clientConnectionConfig }}',
'{{ networkConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ clustersId }}',
'{{ requestId }}',
'{{ validateOnly }}',
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
    - name: clustersId
      value: "{{ clustersId }}"
      description: Required parameter for the instances resource.
    - name: observabilityConfig
      description: |
        Configuration for observability.
      value:
        enabled: {{ enabled }}
        trackActiveQueries: {{ trackActiveQueries }}
        recordApplicationTags: {{ recordApplicationTags }}
        trackWaitEvents: {{ trackWaitEvents }}
        maxQueryStringLength: {{ maxQueryStringLength }}
        preserveComments: {{ preserveComments }}
        queryPlansPerMinute: {{ queryPlansPerMinute }}
        trackWaitEventTypes: {{ trackWaitEventTypes }}
    - name: labels
      value: "{{ labels }}"
      description: |
        Labels as key value pairs
    - name: dataApiAccess
      value: "{{ dataApiAccess }}"
      description: |
        Optional. Controls whether the Data API is enabled for this instance. When enabled, this allows authorized users to connect to the instance from the public internet using the \`executeSql\` API, even for private IP instances. If this is not specified, the data API is enabled by default for Google internal services like AlloyDB Studio. Disable it explicitly to disallow Google internal services as well.
      valid_values: ['DEFAULT_DATA_API_ENABLED_FOR_GOOGLE_CLOUD_SERVICES', 'DISABLED', 'ENABLED']
    - name: gceZone
      value: "{{ gceZone }}"
      description: |
        The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity.
    - name: etag
      value: "{{ etag }}"
      description: |
        For Resource freshness validation (https://google.aip.dev/154)
    - name: availabilityType
      value: "{{ availabilityType }}"
      description: |
        Availability type of an Instance. If empty, defaults to REGIONAL for primary instances. For read pools, availability_type is always UNSPECIFIED. Instances in the read pools are evenly distributed across available zones within the region (i.e. read pools with more than one node will have a node in at least two zones).
      valid_values: ['AVAILABILITY_TYPE_UNSPECIFIED', 'ZONAL', 'REGIONAL']
    - name: databaseFlags
      value: "{{ databaseFlags }}"
      description: |
        Database flags. Set at the instance level. They are copied from the primary instance on secondary instance creation. Flags that have restrictions default to the value at primary instance on read instances during creation. Read instances can set new flags or override existing flags that are relevant for reads, for example, for enabling columnar cache on a read instance. Flags set on read instance might or might not be present on the primary instance. This is a list of "key": "value" pairs. "key": The name of the flag. These flags are passed at instance setup time, so include both server options and system variables for Postgres. Flags are specified with underscores, not hyphens. "value": The value of the flag. Booleans are set to **on** for true and **off** for false. This field must be omitted if the flag doesn't take a value.
    - name: annotations
      value: "{{ annotations }}"
      description: |
        Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128
    - name: pscInstanceConfig
      description: |
        Optional. The configuration for Private Service Connect (PSC) for the instance.
      value:
        pscDnsName: "{{ pscDnsName }}"
        pscInterfaceConfigs:
          - networkAttachmentResource: "{{ networkAttachmentResource }}"
        serviceAttachmentLink: "{{ serviceAttachmentLink }}"
        pscAutoConnections:
          - status: "{{ status }}"
            ipAddress: "{{ ipAddress }}"
            consumerProject: "{{ consumerProject }}"
            consumerNetwork: "{{ consumerNetwork }}"
            consumerNetworkStatus: "{{ consumerNetworkStatus }}"
        allowedConsumerProjects:
          - "{{ allowedConsumerProjects }}"
    - name: activationPolicy
      value: "{{ activationPolicy }}"
      description: |
        Optional. Specifies whether an instance needs to spin up. Once the instance is active, the activation policy can be updated to the \`NEVER\` to stop the instance. Likewise, the activation policy can be updated to \`ALWAYS\` to start the instance. There are restrictions around when an instance can/cannot be activated (for example, a read pool instance should be stopped before stopping primary etc.). Please refer to the API documentation for more details.
      valid_values: ['ACTIVATION_POLICY_UNSPECIFIED', 'ALWAYS', 'NEVER']
    - name: instanceType
      value: "{{ instanceType }}"
      description: |
        Required. The type of the instance. Specified at creation time.
      valid_values: ['INSTANCE_TYPE_UNSPECIFIED', 'PRIMARY', 'READ_POOL', 'SECONDARY']
    - name: displayName
      value: "{{ displayName }}"
      description: |
        User-settable and human-readable display name for the Instance.
    - name: machineConfig
      description: |
        Configurations for the machines that host the underlying database engine.
      value:
        machineType: "{{ machineType }}"
        cpuCount: {{ cpuCount }}
    - name: queryInsightsConfig
      description: |
        Configuration for query insights.
      value:
        recordApplicationTags: {{ recordApplicationTags }}
        queryStringLength: {{ queryStringLength }}
        recordClientAddress: {{ recordClientAddress }}
        queryPlansPerMinute: {{ queryPlansPerMinute }}
    - name: readPoolConfig
      description: |
        Read pool instance configuration. This is required if the value of instanceType is READ_POOL.
      value:
        nodeCount: {{ nodeCount }}
    - name: connectionPoolConfig
      description: |
        Optional. The configuration for Managed Connection Pool (MCP).
      value:
        flags: "{{ flags }}"
        enabled: {{ enabled }}
        authproxyPoolerCount: {{ authproxyPoolerCount }}
        authproxyPoolerScalingType: "{{ authproxyPoolerScalingType }}"
        poolerCount: {{ poolerCount }}
        poolerScalingType: "{{ poolerScalingType }}"
    - name: clientConnectionConfig
      description: |
        Optional. Client connection specific configurations
      value:
        requireConnectors: {{ requireConnectors }}
        sslConfig:
          sslMode: "{{ sslMode }}"
          caSource: "{{ caSource }}"
    - name: networkConfig
      description: |
        Optional. Instance-level network configuration.
      value:
        authorizedExternalNetworks:
          - cidrRange: "{{ cidrRange }}"
        enablePublicIp: {{ enablePublicIp }}
        network: "{{ network }}"
        allocatedIpRangeOverride: "{{ allocatedIpRangeOverride }}"
        enableOutboundPublicIp: {{ enableOutboundPublicIp }}
    - name: requestId
      value: "{{ requestId }}"
    - name: validateOnly
      value: {{ validateOnly }}
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

Updates the parameters of a single Instance.

```sql
UPDATE google.alloydb.instances
SET 
data__observabilityConfig = '{{ observabilityConfig }}',
data__labels = '{{ labels }}',
data__dataApiAccess = '{{ dataApiAccess }}',
data__gceZone = '{{ gceZone }}',
data__etag = '{{ etag }}',
data__availabilityType = '{{ availabilityType }}',
data__databaseFlags = '{{ databaseFlags }}',
data__annotations = '{{ annotations }}',
data__pscInstanceConfig = '{{ pscInstanceConfig }}',
data__activationPolicy = '{{ activationPolicy }}',
data__instanceType = '{{ instanceType }}',
data__displayName = '{{ displayName }}',
data__machineConfig = '{{ machineConfig }}',
data__queryInsightsConfig = '{{ queryInsightsConfig }}',
data__readPoolConfig = '{{ readPoolConfig }}',
data__connectionPoolConfig = '{{ connectionPoolConfig }}',
data__clientConnectionConfig = '{{ clientConnectionConfig }}',
data__networkConfig = '{{ networkConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND clustersId = '{{ clustersId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND updateMask = '{{ updateMask}}'
AND allowMissing = {{ allowMissing}}
AND requestId = '{{ requestId}}'
AND validateOnly = {{ validateOnly}}
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
DELETE FROM google.alloydb.instances
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND clustersId = '{{ clustersId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND requestId = '{{ requestId }}'
AND etag = '{{ etag }}'
AND validateOnly = '{{ validateOnly }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="inject_fault"
    values={[
        { label: 'inject_fault', value: 'inject_fault' },
        { label: 'failover', value: 'failover' },
        { label: 'restart', value: 'restart' }
    ]}
>
<TabItem value="inject_fault">

Injects fault in an instance. Imperative only.

```sql
EXEC google.alloydb.instances.inject_fault 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}", 
"validateOnly": {{ validateOnly }}, 
"faultType": "{{ faultType }}"
}'
;
```
</TabItem>
<TabItem value="failover">

Forces a Failover for a highly available instance. Failover promotes the HA standby instance as the new primary. Imperative only.

```sql
EXEC google.alloydb.instances.failover 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}", 
"validateOnly": {{ validateOnly }}
}'
;
```
</TabItem>
<TabItem value="restart">

Restart an Instance in a cluster. Imperative only.

```sql
EXEC google.alloydb.instances.restart 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"nodeIds": "{{ nodeIds }}", 
"requestId": "{{ requestId }}", 
"validateOnly": {{ validateOnly }}
}'
;
```
</TabItem>
</Tabs>
