--- 
title: workstation_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - workstation_clusters
  - workstations
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

Creates, updates, deletes, gets or lists a <code>workstation_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>workstation_clusters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.workstations.workstation_clusters" /></td></tr>
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
    <td>Identifier. Full name of this workstation cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Client-specified annotations.</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>Output only. Status conditions describing the workstation cluster's current state.</td>
</tr>
<tr>
    <td><CopyableCode code="controlPlaneIp" /></td>
    <td><code>string</code></td>
    <td>Output only. The private IP address of the control plane for this workstation cluster. Workstation VMs need access to this IP address to work with the service, so make sure that your firewall rules allow egress from the workstation VMs to this address.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when this workstation cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="degraded" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether this workstation cluster is in degraded mode, in which case it may require user action to restore full functionality. The conditions field contains detailed information about the status of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when this workstation cluster was soft-deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Human-readable name for this workstation cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="domainConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration options for a custom domain. (id: DomainConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Checksum computed by the server. May be sent on update and delete requests to make sure that the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration options for Cluster HTTP Gateway. (id: GatewayConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. [Labels](https://cloud.google.com/workstations/docs/label-resources) that are applied to the workstation cluster and that are also propagated to the underlying Compute Engine resources.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Immutable. Name of the Compute Engine network in which instances associated with this workstation cluster will be created.</td>
</tr>
<tr>
    <td><CopyableCode code="privateClusterConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for private workstation cluster. (id: PrivateClusterConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether this workstation cluster is currently being updated to match its intended state.</td>
</tr>
<tr>
    <td><CopyableCode code="subnetwork" /></td>
    <td><code>string</code></td>
    <td>Immutable. Name of the Compute Engine subnetwork in which instances associated with this workstation cluster will be created. Must be part of the subnetwork specified for this workstation cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing"</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. A system-assigned unique identifier for this workstation cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when this workstation cluster was most recently updated.</td>
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
    <td>Identifier. Full name of this workstation cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Client-specified annotations.</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>Output only. Status conditions describing the workstation cluster's current state.</td>
</tr>
<tr>
    <td><CopyableCode code="controlPlaneIp" /></td>
    <td><code>string</code></td>
    <td>Output only. The private IP address of the control plane for this workstation cluster. Workstation VMs need access to this IP address to work with the service, so make sure that your firewall rules allow egress from the workstation VMs to this address.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when this workstation cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="degraded" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether this workstation cluster is in degraded mode, in which case it may require user action to restore full functionality. The conditions field contains detailed information about the status of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when this workstation cluster was soft-deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Human-readable name for this workstation cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="domainConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration options for a custom domain. (id: DomainConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Checksum computed by the server. May be sent on update and delete requests to make sure that the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration options for Cluster HTTP Gateway. (id: GatewayConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. [Labels](https://cloud.google.com/workstations/docs/label-resources) that are applied to the workstation cluster and that are also propagated to the underlying Compute Engine resources.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Immutable. Name of the Compute Engine network in which instances associated with this workstation cluster will be created.</td>
</tr>
<tr>
    <td><CopyableCode code="privateClusterConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for private workstation cluster. (id: PrivateClusterConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether this workstation cluster is currently being updated to match its intended state.</td>
</tr>
<tr>
    <td><CopyableCode code="subnetwork" /></td>
    <td><code>string</code></td>
    <td>Immutable. Name of the Compute Engine subnetwork in which instances associated with this workstation cluster will be created. Must be part of the subnetwork specified for this workstation cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing"</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. A system-assigned unique identifier for this workstation cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when this workstation cluster was most recently updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workstationClustersId"><code>workstationClustersId</code></a></td>
    <td></td>
    <td>Returns the requested workstation cluster.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Returns all workstation clusters in the specified location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-workstationClusterId"><code>workstationClusterId</code></a></td>
    <td>Creates a new workstation cluster.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workstationClustersId"><code>workstationClustersId</code></a></td>
    <td><a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing workstation cluster.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workstationClustersId"><code>workstationClustersId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes the specified workstation cluster.</td>
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
<tr id="parameter-workstationClustersId">
    <td><CopyableCode code="workstationClustersId" /></td>
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
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-workstationClusterId">
    <td><CopyableCode code="workstationClusterId" /></td>
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

Returns the requested workstation cluster.

```sql
SELECT
name,
annotations,
conditions,
controlPlaneIp,
createTime,
degraded,
deleteTime,
displayName,
domainConfig,
etag,
gatewayConfig,
labels,
network,
privateClusterConfig,
reconciling,
subnetwork,
tags,
uid,
updateTime
FROM google.workstations.workstation_clusters
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND workstationClustersId = '{{ workstationClustersId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns all workstation clusters in the specified location.

```sql
SELECT
name,
annotations,
conditions,
controlPlaneIp,
createTime,
degraded,
deleteTime,
displayName,
domainConfig,
etag,
gatewayConfig,
labels,
network,
privateClusterConfig,
reconciling,
subnetwork,
tags,
uid,
updateTime
FROM google.workstations.workstation_clusters
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
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

Creates a new workstation cluster.

```sql
INSERT INTO google.workstations.workstation_clusters (
data__labels,
data__network,
data__domainConfig,
data__subnetwork,
data__tags,
data__privateClusterConfig,
data__annotations,
data__name,
data__etag,
data__gatewayConfig,
data__displayName,
projectsId,
locationsId,
validateOnly,
workstationClusterId
)
SELECT 
'{{ labels }}',
'{{ network }}',
'{{ domainConfig }}',
'{{ subnetwork }}',
'{{ tags }}',
'{{ privateClusterConfig }}',
'{{ annotations }}',
'{{ name }}',
'{{ etag }}',
'{{ gatewayConfig }}',
'{{ displayName }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ validateOnly }}',
'{{ workstationClusterId }}'
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

```yaml
# Description fields are for documentation purposes
- name: workstation_clusters
  props:
    - name: projectsId
      value: string
      description: Required parameter for the workstation_clusters resource.
    - name: locationsId
      value: string
      description: Required parameter for the workstation_clusters resource.
    - name: labels
      value: object
      description: >
        Optional. [Labels](https://cloud.google.com/workstations/docs/label-resources) that are applied to the workstation cluster and that are also propagated to the underlying Compute Engine resources.
        
    - name: network
      value: string
      description: >
        Immutable. Name of the Compute Engine network in which instances associated with this workstation cluster will be created.
        
    - name: domainConfig
      value: object
      description: >
        Optional. Configuration options for a custom domain.
        
    - name: subnetwork
      value: string
      description: >
        Immutable. Name of the Compute Engine subnetwork in which instances associated with this workstation cluster will be created. Must be part of the subnetwork specified for this workstation cluster.
        
    - name: tags
      value: object
      description: >
        Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing"
        
    - name: privateClusterConfig
      value: object
      description: >
        Optional. Configuration for private workstation cluster.
        
    - name: annotations
      value: object
      description: >
        Optional. Client-specified annotations.
        
    - name: name
      value: string
      description: >
        Identifier. Full name of this workstation cluster.
        
    - name: etag
      value: string
      description: >
        Optional. Checksum computed by the server. May be sent on update and delete requests to make sure that the client has an up-to-date value before proceeding.
        
    - name: gatewayConfig
      value: object
      description: >
        Optional. Configuration options for Cluster HTTP Gateway.
        
    - name: displayName
      value: string
      description: >
        Optional. Human-readable name for this workstation cluster.
        
    - name: validateOnly
      value: boolean
    - name: workstationClusterId
      value: string
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

Updates an existing workstation cluster.

```sql
UPDATE google.workstations.workstation_clusters
SET 
data__labels = '{{ labels }}',
data__network = '{{ network }}',
data__domainConfig = '{{ domainConfig }}',
data__subnetwork = '{{ subnetwork }}',
data__tags = '{{ tags }}',
data__privateClusterConfig = '{{ privateClusterConfig }}',
data__annotations = '{{ annotations }}',
data__name = '{{ name }}',
data__etag = '{{ etag }}',
data__gatewayConfig = '{{ gatewayConfig }}',
data__displayName = '{{ displayName }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND workstationClustersId = '{{ workstationClustersId }}' --required
AND validateOnly = {{ validateOnly}}
AND allowMissing = {{ allowMissing}}
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

Deletes the specified workstation cluster.

```sql
DELETE FROM google.workstations.workstation_clusters
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND workstationClustersId = '{{ workstationClustersId }}' --required
AND force = '{{ force }}'
AND validateOnly = '{{ validateOnly }}'
AND etag = '{{ etag }}'
;
```
</TabItem>
</Tabs>
