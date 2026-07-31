--- 
title: exadb_vm_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - exadb_vm_clusters
  - oracledatabase
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

Creates, updates, deletes, gets or lists an <code>exadb_vm_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="exadb_vm_clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.oracledatabase.exadb_vm_clusters" /></td></tr>
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
    <td>Identifier. The name of the ExadbVmCluster resource in the following format: projects/&#123;project&#125;/locations/&#123;region&#125;/exadbVmClusters/&#123;exadb_vm_cluster&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="backupOdbSubnet" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The name of the backup OdbSubnet associated with the ExadbVmCluster. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/odbNetworks/&#123;odb_network&#125;/odbSubnets/&#123;odb_subnet&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The date and time that the ExadbVmCluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The display name for the ExadbVmCluster. The name does not have to be unique within your project. The name must be 1-255 characters long and can only contain alphanumeric characters.</td>
</tr>
<tr>
    <td><CopyableCode code="entitlementId" /></td>
    <td><code>string</code></td>
    <td>Output only. The ID of the subscription entitlement associated with the ExadbVmCluster.</td>
</tr>
<tr>
    <td><CopyableCode code="gcpOracleZone" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The GCP Oracle zone where Oracle ExadbVmCluster is hosted. Example: us-east4-b-r2. During creation, the system will pick the zone assigned to the ExascaleDbStorageVault.</td>
</tr>
<tr>
    <td><CopyableCode code="identityConnector" /></td>
    <td><code>object</code></td>
    <td>Output only. The identity connector details which will allow OCI to securely access the resources in the customer project. (id: IdentityConnector)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels or tags associated with the ExadbVmCluster.</td>
</tr>
<tr>
    <td><CopyableCode code="odbNetwork" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The name of the OdbNetwork associated with the ExadbVmCluster. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/odbNetworks/&#123;odb_network&#125; It is optional but if specified, this should match the parent ODBNetwork of the OdbSubnet.</td>
</tr>
<tr>
    <td><CopyableCode code="odbSubnet" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The name of the OdbSubnet associated with the ExadbVmCluster for IP allocation. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/odbNetworks/&#123;odb_network&#125;/odbSubnets/&#123;odb_subnet&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>Required. The properties of the ExadbVmCluster. (id: ExadbVmClusterProperties)</td>
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
    <td>Identifier. The name of the ExadbVmCluster resource in the following format: projects/&#123;project&#125;/locations/&#123;region&#125;/exadbVmClusters/&#123;exadb_vm_cluster&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="backupOdbSubnet" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The name of the backup OdbSubnet associated with the ExadbVmCluster. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/odbNetworks/&#123;odb_network&#125;/odbSubnets/&#123;odb_subnet&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The date and time that the ExadbVmCluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The display name for the ExadbVmCluster. The name does not have to be unique within your project. The name must be 1-255 characters long and can only contain alphanumeric characters.</td>
</tr>
<tr>
    <td><CopyableCode code="entitlementId" /></td>
    <td><code>string</code></td>
    <td>Output only. The ID of the subscription entitlement associated with the ExadbVmCluster.</td>
</tr>
<tr>
    <td><CopyableCode code="gcpOracleZone" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The GCP Oracle zone where Oracle ExadbVmCluster is hosted. Example: us-east4-b-r2. During creation, the system will pick the zone assigned to the ExascaleDbStorageVault.</td>
</tr>
<tr>
    <td><CopyableCode code="identityConnector" /></td>
    <td><code>object</code></td>
    <td>Output only. The identity connector details which will allow OCI to securely access the resources in the customer project. (id: IdentityConnector)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels or tags associated with the ExadbVmCluster.</td>
</tr>
<tr>
    <td><CopyableCode code="odbNetwork" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The name of the OdbNetwork associated with the ExadbVmCluster. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/odbNetworks/&#123;odb_network&#125; It is optional but if specified, this should match the parent ODBNetwork of the OdbSubnet.</td>
</tr>
<tr>
    <td><CopyableCode code="odbSubnet" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The name of the OdbSubnet associated with the ExadbVmCluster for IP allocation. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/odbNetworks/&#123;odb_network&#125;/odbSubnets/&#123;odb_subnet&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>Required. The properties of the ExadbVmCluster. (id: ExadbVmClusterProperties)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-exadbVmClustersId"><code>exadbVmClustersId</code></a></td>
    <td></td>
    <td>Gets details of a single Exadb (Exascale) VM Cluster.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all the Exadb (Exascale) VM Clusters for the given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-exadbVmClusterId"><code>exadbVmClusterId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new Exadb (Exascale) VM Cluster resource.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-exadbVmClustersId"><code>exadbVmClustersId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a single Exadb (Exascale) VM Cluster. To add virtual machines to existing exadb vm cluster, only pass the node count.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-exadbVmClustersId"><code>exadbVmClustersId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single Exadb (Exascale) VM Cluster.</td>
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
<tr id="parameter-exadbVmClustersId">
    <td><CopyableCode code="exadbVmClustersId" /></td>
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
<tr id="parameter-exadbVmClusterId">
    <td><CopyableCode code="exadbVmClusterId" /></td>
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

Gets details of a single Exadb (Exascale) VM Cluster.

```sql
SELECT
name,
backupOdbSubnet,
createTime,
displayName,
entitlementId,
gcpOracleZone,
identityConnector,
labels,
odbNetwork,
odbSubnet,
properties
FROM google.oracledatabase.exadb_vm_clusters
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND exadbVmClustersId = '{{ exadbVmClustersId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists all the Exadb (Exascale) VM Clusters for the given project and location.

```sql
SELECT
name,
backupOdbSubnet,
createTime,
displayName,
entitlementId,
gcpOracleZone,
identityConnector,
labels,
odbNetwork,
odbSubnet,
properties
FROM google.oracledatabase.exadb_vm_clusters
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND orderBy = '{{ orderBy }}'
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

Creates a new Exadb (Exascale) VM Cluster resource.

```sql
INSERT INTO google.oracledatabase.exadb_vm_clusters (
data__name,
data__labels,
data__displayName,
data__odbSubnet,
data__odbNetwork,
data__properties,
data__backupOdbSubnet,
projectsId,
locationsId,
exadbVmClusterId,
requestId
)
SELECT 
'{{ name }}',
'{{ labels }}',
'{{ displayName }}',
'{{ odbSubnet }}',
'{{ odbNetwork }}',
'{{ properties }}',
'{{ backupOdbSubnet }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ exadbVmClusterId }}',
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
- name: exadb_vm_clusters
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the exadb_vm_clusters resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the exadb_vm_clusters resource.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The name of the ExadbVmCluster resource in the following format: projects/{project}/locations/{region}/exadbVmClusters/{exadb_vm_cluster}
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. The labels or tags associated with the ExadbVmCluster.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. Immutable. The display name for the ExadbVmCluster. The name does not have to be unique within your project. The name must be 1-255 characters long and can only contain alphanumeric characters.
    - name: odbSubnet
      value: "{{ odbSubnet }}"
      description: |
        Required. Immutable. The name of the OdbSubnet associated with the ExadbVmCluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}
    - name: odbNetwork
      value: "{{ odbNetwork }}"
      description: |
        Optional. Immutable. The name of the OdbNetwork associated with the ExadbVmCluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network} It is optional but if specified, this should match the parent ODBNetwork of the OdbSubnet.
    - name: properties
      description: |
        Required. The properties of the ExadbVmCluster.
      value:
        exascaleDbStorageVault: "{{ exascaleDbStorageVault }}"
        gridImageId: "{{ gridImageId }}"
        lifecycleState: "{{ lifecycleState }}"
        hostnamePrefix: "{{ hostnamePrefix }}"
        shapeAttribute: "{{ shapeAttribute }}"
        dataCollectionOptions:
          isDiagnosticsEventsEnabled: {{ isDiagnosticsEventsEnabled }}
          isHealthMonitoringEnabled: {{ isHealthMonitoringEnabled }}
          isIncidentLogsEnabled: {{ isIncidentLogsEnabled }}
        clusterName: "{{ clusterName }}"
        giVersion: "{{ giVersion }}"
        nodeCount: {{ nodeCount }}
        scanListenerPortTcp: {{ scanListenerPortTcp }}
        licenseModel: "{{ licenseModel }}"
        hostname: "{{ hostname }}"
        ociUri: "{{ ociUri }}"
        additionalEcpuCountPerNode: {{ additionalEcpuCountPerNode }}
        enabledEcpuCountPerNode: {{ enabledEcpuCountPerNode }}
        sshPublicKeys:
          - "{{ sshPublicKeys }}"
        memorySizeGb: {{ memorySizeGb }}
        vmFileSystemStorage:
          sizeInGbsPerNode: {{ sizeInGbsPerNode }}
        timeZone:
          id: "{{ id }}"
          version: "{{ version }}"
    - name: backupOdbSubnet
      value: "{{ backupOdbSubnet }}"
      description: |
        Required. Immutable. The name of the backup OdbSubnet associated with the ExadbVmCluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}
    - name: exadbVmClusterId
      value: "{{ exadbVmClusterId }}"
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

Updates a single Exadb (Exascale) VM Cluster. To add virtual machines to existing exadb vm cluster, only pass the node count.

```sql
UPDATE google.oracledatabase.exadb_vm_clusters
SET 
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__displayName = '{{ displayName }}',
data__odbSubnet = '{{ odbSubnet }}',
data__odbNetwork = '{{ odbNetwork }}',
data__properties = '{{ properties }}',
data__backupOdbSubnet = '{{ backupOdbSubnet }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND exadbVmClustersId = '{{ exadbVmClustersId }}' --required
AND requestId = '{{ requestId}}'
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

Deletes a single Exadb (Exascale) VM Cluster.

```sql
DELETE FROM google.oracledatabase.exadb_vm_clusters
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND exadbVmClustersId = '{{ exadbVmClustersId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
