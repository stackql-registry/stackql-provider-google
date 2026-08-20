--- 
title: vmware_admin_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - vmware_admin_clusters
  - gkeonprem
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

Creates, updates, deletes, gets or lists a <code>vmware_admin_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vmware_admin_clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.gkeonprem.vmware_admin_clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_vmware_admin_clusters_get"
    values={[
        { label: 'projects_locations_vmware_admin_clusters_get', value: 'projects_locations_vmware_admin_clusters_get' },
        { label: 'projects_locations_vmware_admin_clusters_list', value: 'projects_locations_vmware_admin_clusters_list' }
    ]}
>
<TabItem value="projects_locations_vmware_admin_clusters_get">

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
    <td>Immutable. The VMware admin cluster resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="addonNode" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster addon node configuration. (id: VmwareAdminAddonNodeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Annotations on the VMware admin cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.</td>
</tr>
<tr>
    <td><CopyableCode code="antiAffinityGroups" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster anti affinity group configuration. (id: VmwareAAGConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="authorization" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster authorization configuration. (id: VmwareAdminAuthorizationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="autoRepairConfig" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster auto repair configuration. (id: VmwareAutoRepairConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="bootstrapClusterMembership" /></td>
    <td><code>string</code></td>
    <td>The bootstrap cluster this VMware admin cluster belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="controlPlaneNode" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster control plane node configuration. (id: VmwareAdminControlPlaneNodeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which VMware admin cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A human readable description of this VMware admin cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="enableAdvancedCluster" /></td>
    <td><code>boolean</code></td>
    <td>Enable advanced cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>Output only. The DNS name of VMware admin cluster's API server.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control.</td>
</tr>
<tr>
    <td><CopyableCode code="fleet" /></td>
    <td><code>object</code></td>
    <td>Output only. Fleet configuration for the cluster. (id: Fleet)</td>
</tr>
<tr>
    <td><CopyableCode code="imageType" /></td>
    <td><code>string</code></td>
    <td>The OS image type for the VMware admin cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="loadBalancer" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster load balancer configuration. (id: VmwareAdminLoadBalancerConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="localName" /></td>
    <td><code>string</code></td>
    <td>Output only. The object name of the VMware OnPremAdminCluster custom resource. This field is used to support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this field will differ from the ID in the resource name. For new clusters, this field will match the user provided cluster name and be visible in the last component of the resource name. It is not modifiable. All users should use this name to access their cluster using gkectl or kubectl and should expect to see the local name when viewing admin cluster controller logs.</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfig" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster network configuration. (id: VmwareAdminNetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="onPremVersion" /></td>
    <td><code>string</code></td>
    <td>The Anthos clusters on the VMware version for the admin cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="platformConfig" /></td>
    <td><code>object</code></td>
    <td>The VMware platform configuration. (id: VmwarePlatformConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="preparedSecrets" /></td>
    <td><code>object</code></td>
    <td>Output only. The VMware admin cluster prepared secrets configuration. It should always be enabled by the Central API, instead of letting users set it. (id: VmwareAdminPreparedSecretsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="privateRegistryConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for registry. (id: VmwareAdminPrivateRegistryConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="proxy" /></td>
    <td><code>object</code></td>
    <td>Configuration for proxy. (id: VmwareAdminProxy)</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. If set, there are currently changes in flight to the VMware admin cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of VMware admin cluster. (STATE_UNSPECIFIED, PROVISIONING, RUNNING, RECONCILING, STOPPING, ERROR, DEGRADED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Output only. ResourceStatus representing detailed cluster state. (id: ResourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The unique identifier of the VMware admin cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which VMware admin cluster was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="validationCheck" /></td>
    <td><code>object</code></td>
    <td>Output only. ValidationCheck represents the result of the preflight check job. (id: ValidationCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="vcenter" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster VCenter configuration. (id: VmwareAdminVCenterConfig)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_vmware_admin_clusters_list">

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
    <td>Immutable. The VMware admin cluster resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="addonNode" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster addon node configuration. (id: VmwareAdminAddonNodeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Annotations on the VMware admin cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.</td>
</tr>
<tr>
    <td><CopyableCode code="antiAffinityGroups" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster anti affinity group configuration. (id: VmwareAAGConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="authorization" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster authorization configuration. (id: VmwareAdminAuthorizationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="autoRepairConfig" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster auto repair configuration. (id: VmwareAutoRepairConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="bootstrapClusterMembership" /></td>
    <td><code>string</code></td>
    <td>The bootstrap cluster this VMware admin cluster belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="controlPlaneNode" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster control plane node configuration. (id: VmwareAdminControlPlaneNodeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which VMware admin cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A human readable description of this VMware admin cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="enableAdvancedCluster" /></td>
    <td><code>boolean</code></td>
    <td>Enable advanced cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>Output only. The DNS name of VMware admin cluster's API server.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control.</td>
</tr>
<tr>
    <td><CopyableCode code="fleet" /></td>
    <td><code>object</code></td>
    <td>Output only. Fleet configuration for the cluster. (id: Fleet)</td>
</tr>
<tr>
    <td><CopyableCode code="imageType" /></td>
    <td><code>string</code></td>
    <td>The OS image type for the VMware admin cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="loadBalancer" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster load balancer configuration. (id: VmwareAdminLoadBalancerConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="localName" /></td>
    <td><code>string</code></td>
    <td>Output only. The object name of the VMware OnPremAdminCluster custom resource. This field is used to support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this field will differ from the ID in the resource name. For new clusters, this field will match the user provided cluster name and be visible in the last component of the resource name. It is not modifiable. All users should use this name to access their cluster using gkectl or kubectl and should expect to see the local name when viewing admin cluster controller logs.</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfig" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster network configuration. (id: VmwareAdminNetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="onPremVersion" /></td>
    <td><code>string</code></td>
    <td>The Anthos clusters on the VMware version for the admin cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="platformConfig" /></td>
    <td><code>object</code></td>
    <td>The VMware platform configuration. (id: VmwarePlatformConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="preparedSecrets" /></td>
    <td><code>object</code></td>
    <td>Output only. The VMware admin cluster prepared secrets configuration. It should always be enabled by the Central API, instead of letting users set it. (id: VmwareAdminPreparedSecretsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="privateRegistryConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for registry. (id: VmwareAdminPrivateRegistryConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="proxy" /></td>
    <td><code>object</code></td>
    <td>Configuration for proxy. (id: VmwareAdminProxy)</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. If set, there are currently changes in flight to the VMware admin cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of VMware admin cluster. (STATE_UNSPECIFIED, PROVISIONING, RUNNING, RECONCILING, STOPPING, ERROR, DEGRADED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Output only. ResourceStatus representing detailed cluster state. (id: ResourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The unique identifier of the VMware admin cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which VMware admin cluster was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="validationCheck" /></td>
    <td><code>object</code></td>
    <td>Output only. ValidationCheck represents the result of the preflight check job. (id: ValidationCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="vcenter" /></td>
    <td><code>object</code></td>
    <td>The VMware admin cluster VCenter configuration. (id: VmwareAdminVCenterConfig)</td>
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
    <td><a href="#projects_locations_vmware_admin_clusters_get"><CopyableCode code="projects_locations_vmware_admin_clusters_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-vmwareAdminClustersId"><code>vmwareAdminClustersId</code></a></td>
    <td><a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Gets details of a single VMware admin cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_vmware_admin_clusters_list"><CopyableCode code="projects_locations_vmware_admin_clusters_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Lists VMware admin clusters in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_vmware_admin_clusters_create"><CopyableCode code="projects_locations_vmware_admin_clusters_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-allowPreflightFailure"><code>allowPreflightFailure</code></a>, <a href="#parameter-skipValidations"><code>skipValidations</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-vmwareAdminClusterId"><code>vmwareAdminClusterId</code></a></td>
    <td>Creates a new VMware admin cluster in a given project and location. The API needs to be combined with creating a bootstrap cluster to work.</td>
</tr>
<tr>
    <td><a href="#projects_locations_vmware_admin_clusters_patch"><CopyableCode code="projects_locations_vmware_admin_clusters_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-vmwareAdminClustersId"><code>vmwareAdminClustersId</code></a></td>
    <td><a href="#parameter-skipValidations"><code>skipValidations</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates the parameters of a single VMware admin cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_vmware_admin_clusters_enroll"><CopyableCode code="projects_locations_vmware_admin_clusters_enroll" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Enrolls an existing VMware admin cluster to the Anthos On-Prem API within a given project and location. Through enrollment, an existing admin cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster will be expected to be performed through the API.</td>
</tr>
<tr>
    <td><a href="#projects_locations_vmware_admin_clusters_unenroll"><CopyableCode code="projects_locations_vmware_admin_clusters_unenroll" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-vmwareAdminClustersId"><code>vmwareAdminClustersId</code></a></td>
    <td><a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-ignoreErrors"><code>ignoreErrors</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Unenrolls an existing VMware admin cluster from the Anthos On-Prem API within a given project and location. Unenrollment removes the Cloud reference to the cluster without modifying the underlying OnPrem Resources. Clusters will continue to run; however, they will no longer be accessible through the Anthos On-Prem API or its clients.</td>
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
<tr id="parameter-vmwareAdminClustersId">
    <td><CopyableCode code="vmwareAdminClustersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-allowPreflightFailure">
    <td><CopyableCode code="allowPreflightFailure" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ignoreErrors">
    <td><CopyableCode code="ignoreErrors" /></td>
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
<tr id="parameter-skipValidations">
    <td><CopyableCode code="skipValidations" /></td>
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
<tr id="parameter-vmwareAdminClusterId">
    <td><CopyableCode code="vmwareAdminClusterId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_vmware_admin_clusters_get"
    values={[
        { label: 'projects_locations_vmware_admin_clusters_get', value: 'projects_locations_vmware_admin_clusters_get' },
        { label: 'projects_locations_vmware_admin_clusters_list', value: 'projects_locations_vmware_admin_clusters_list' }
    ]}
>
<TabItem value="projects_locations_vmware_admin_clusters_get">

Gets details of a single VMware admin cluster.

```sql
SELECT
name,
addonNode,
annotations,
antiAffinityGroups,
authorization,
autoRepairConfig,
bootstrapClusterMembership,
controlPlaneNode,
createTime,
description,
enableAdvancedCluster,
endpoint,
etag,
fleet,
imageType,
loadBalancer,
localName,
networkConfig,
onPremVersion,
platformConfig,
preparedSecrets,
privateRegistryConfig,
proxy,
reconciling,
state,
status,
uid,
updateTime,
validationCheck,
vcenter
FROM google.gkeonprem.vmware_admin_clusters
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND vmwareAdminClustersId = '{{ vmwareAdminClustersId }}' -- required
AND allowMissing = '{{ allowMissing }}'
AND view = '{{ view }}'
;
```
</TabItem>
<TabItem value="projects_locations_vmware_admin_clusters_list">

Lists VMware admin clusters in a given project and location.

```sql
SELECT
name,
addonNode,
annotations,
antiAffinityGroups,
authorization,
autoRepairConfig,
bootstrapClusterMembership,
controlPlaneNode,
createTime,
description,
enableAdvancedCluster,
endpoint,
etag,
fleet,
imageType,
loadBalancer,
localName,
networkConfig,
onPremVersion,
platformConfig,
preparedSecrets,
privateRegistryConfig,
proxy,
reconciling,
state,
status,
uid,
updateTime,
validationCheck,
vcenter
FROM google.gkeonprem.vmware_admin_clusters
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND allowMissing = '{{ allowMissing }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND view = '{{ view }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_vmware_admin_clusters_create"
    values={[
        { label: 'projects_locations_vmware_admin_clusters_create', value: 'projects_locations_vmware_admin_clusters_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_vmware_admin_clusters_create">

Creates a new VMware admin cluster in a given project and location. The API needs to be combined with creating a bootstrap cluster to work.

```sql
INSERT INTO google.gkeonprem.vmware_admin_clusters (
data__addonNode,
data__annotations,
data__antiAffinityGroups,
data__authorization,
data__autoRepairConfig,
data__bootstrapClusterMembership,
data__controlPlaneNode,
data__description,
data__enableAdvancedCluster,
data__etag,
data__imageType,
data__loadBalancer,
data__name,
data__networkConfig,
data__onPremVersion,
data__platformConfig,
data__privateRegistryConfig,
data__proxy,
data__vcenter,
projectsId,
locationsId,
allowPreflightFailure,
skipValidations,
validateOnly,
vmwareAdminClusterId
)
SELECT 
'{{ addonNode }}',
'{{ annotations }}',
'{{ antiAffinityGroups }}',
'{{ authorization }}',
'{{ autoRepairConfig }}',
'{{ bootstrapClusterMembership }}',
'{{ controlPlaneNode }}',
'{{ description }}',
{{ enableAdvancedCluster }},
'{{ etag }}',
'{{ imageType }}',
'{{ loadBalancer }}',
'{{ name }}',
'{{ networkConfig }}',
'{{ onPremVersion }}',
'{{ platformConfig }}',
'{{ privateRegistryConfig }}',
'{{ proxy }}',
'{{ vcenter }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ allowPreflightFailure }}',
'{{ skipValidations }}',
'{{ validateOnly }}',
'{{ vmwareAdminClusterId }}'
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
- name: vmware_admin_clusters
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the vmware_admin_clusters resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the vmware_admin_clusters resource.
    - name: addonNode
      description: |
        The VMware admin cluster addon node configuration.
      value:
        autoResizeConfig:
          enabled: {{ enabled }}
    - name: annotations
      value: "{{ annotations }}"
      description: |
        Annotations on the VMware admin cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.
    - name: antiAffinityGroups
      description: |
        The VMware admin cluster anti affinity group configuration.
      value:
        aagConfigDisabled: {{ aagConfigDisabled }}
    - name: authorization
      description: |
        The VMware admin cluster authorization configuration.
      value:
        viewerUsers:
          - username: "{{ username }}"
    - name: autoRepairConfig
      description: |
        The VMware admin cluster auto repair configuration.
      value:
        enabled: {{ enabled }}
    - name: bootstrapClusterMembership
      value: "{{ bootstrapClusterMembership }}"
      description: |
        The bootstrap cluster this VMware admin cluster belongs to.
    - name: controlPlaneNode
      description: |
        The VMware admin cluster control plane node configuration.
      value:
        cpus: "{{ cpus }}"
        memory: "{{ memory }}"
        replicas: "{{ replicas }}"
    - name: description
      value: "{{ description }}"
      description: |
        A human readable description of this VMware admin cluster.
    - name: enableAdvancedCluster
      value: {{ enableAdvancedCluster }}
      description: |
        Enable advanced cluster.
    - name: etag
      value: "{{ etag }}"
      description: |
        This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control.
    - name: imageType
      value: "{{ imageType }}"
      description: |
        The OS image type for the VMware admin cluster.
    - name: loadBalancer
      description: |
        The VMware admin cluster load balancer configuration.
      value:
        f5Config:
          address: "{{ address }}"
          partition: "{{ partition }}"
          snatPool: "{{ snatPool }}"
        manualLbConfig:
          addonsNodePort: {{ addonsNodePort }}
          controlPlaneNodePort: {{ controlPlaneNodePort }}
          ingressHttpNodePort: {{ ingressHttpNodePort }}
          ingressHttpsNodePort: {{ ingressHttpsNodePort }}
          konnectivityServerNodePort: {{ konnectivityServerNodePort }}
        metalLbConfig:
          enabled: {{ enabled }}
        seesawConfig:
          enableHa: {{ enableHa }}
          group: "{{ group }}"
          ipBlocks:
            - gateway: "{{ gateway }}"
              ips: "{{ ips }}"
              netmask: "{{ netmask }}"
          masterIp: "{{ masterIp }}"
          stackdriverName: "{{ stackdriverName }}"
          vms:
            - "{{ vms }}"
        vipConfig:
          addonsVip: "{{ addonsVip }}"
          controlPlaneVip: "{{ controlPlaneVip }}"
    - name: name
      value: "{{ name }}"
      description: |
        Immutable. The VMware admin cluster resource name.
    - name: networkConfig
      description: |
        The VMware admin cluster network configuration.
      value:
        dhcpIpConfig:
          enabled: {{ enabled }}
        haControlPlaneConfig:
          controlPlaneIpBlock:
            gateway: "{{ gateway }}"
            ips:
              - hostname: "{{ hostname }}"
                ip: "{{ ip }}"
            netmask: "{{ netmask }}"
        hostConfig:
          dnsSearchDomains:
            - "{{ dnsSearchDomains }}"
          dnsServers:
            - "{{ dnsServers }}"
          ntpServers:
            - "{{ ntpServers }}"
        podAddressCidrBlocks:
          - "{{ podAddressCidrBlocks }}"
        serviceAddressCidrBlocks:
          - "{{ serviceAddressCidrBlocks }}"
        staticIpConfig:
          ipBlocks:
            - gateway: "{{ gateway }}"
              ips: "{{ ips }}"
              netmask: "{{ netmask }}"
        vcenterNetwork: "{{ vcenterNetwork }}"
    - name: onPremVersion
      value: "{{ onPremVersion }}"
      description: |
        The Anthos clusters on the VMware version for the admin cluster.
    - name: platformConfig
      description: |
        The VMware platform configuration.
      value:
        bundles:
          - status:
              conditions:
                - lastTransitionTime: "{{ lastTransitionTime }}"
                  message: "{{ message }}"
                  reason: "{{ reason }}"
                  state: "{{ state }}"
                  type: "{{ type }}"
              errorMessage: "{{ errorMessage }}"
              version: "{{ version }}"
              versions:
                versions:
                  - count: "{{ count }}"
                    version: "{{ version }}"
            version: "{{ version }}"
        platformVersion: "{{ platformVersion }}"
        requiredPlatformVersion: "{{ requiredPlatformVersion }}"
        status:
          conditions:
            - lastTransitionTime: "{{ lastTransitionTime }}"
              message: "{{ message }}"
              reason: "{{ reason }}"
              state: "{{ state }}"
              type: "{{ type }}"
          errorMessage: "{{ errorMessage }}"
          version: "{{ version }}"
          versions:
            versions:
              - count: "{{ count }}"
                version: "{{ version }}"
    - name: privateRegistryConfig
      description: |
        Configuration for registry.
      value:
        address: "{{ address }}"
        caCert: "{{ caCert }}"
    - name: proxy
      description: |
        Configuration for proxy.
      value:
        noProxy: "{{ noProxy }}"
        url: "{{ url }}"
    - name: vcenter
      description: |
        The VMware admin cluster VCenter configuration.
      value:
        address: "{{ address }}"
        caCertData: "{{ caCertData }}"
        cluster: "{{ cluster }}"
        dataDisk: "{{ dataDisk }}"
        datacenter: "{{ datacenter }}"
        datastore: "{{ datastore }}"
        folder: "{{ folder }}"
        resourcePool: "{{ resourcePool }}"
        storagePolicyName: "{{ storagePolicyName }}"
    - name: allowPreflightFailure
      value: {{ allowPreflightFailure }}
    - name: skipValidations
      value: "{{ skipValidations }}"
    - name: validateOnly
      value: {{ validateOnly }}
    - name: vmwareAdminClusterId
      value: "{{ vmwareAdminClusterId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_vmware_admin_clusters_patch"
    values={[
        { label: 'projects_locations_vmware_admin_clusters_patch', value: 'projects_locations_vmware_admin_clusters_patch' }
    ]}
>
<TabItem value="projects_locations_vmware_admin_clusters_patch">

Updates the parameters of a single VMware admin cluster.

```sql
UPDATE google.gkeonprem.vmware_admin_clusters
SET 
data__addonNode = '{{ addonNode }}',
data__annotations = '{{ annotations }}',
data__antiAffinityGroups = '{{ antiAffinityGroups }}',
data__authorization = '{{ authorization }}',
data__autoRepairConfig = '{{ autoRepairConfig }}',
data__bootstrapClusterMembership = '{{ bootstrapClusterMembership }}',
data__controlPlaneNode = '{{ controlPlaneNode }}',
data__description = '{{ description }}',
data__enableAdvancedCluster = {{ enableAdvancedCluster }},
data__etag = '{{ etag }}',
data__imageType = '{{ imageType }}',
data__loadBalancer = '{{ loadBalancer }}',
data__name = '{{ name }}',
data__networkConfig = '{{ networkConfig }}',
data__onPremVersion = '{{ onPremVersion }}',
data__platformConfig = '{{ platformConfig }}',
data__privateRegistryConfig = '{{ privateRegistryConfig }}',
data__proxy = '{{ proxy }}',
data__vcenter = '{{ vcenter }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND vmwareAdminClustersId = '{{ vmwareAdminClustersId }}' --required
AND skipValidations = '{{ skipValidations}}'
AND updateMask = '{{ updateMask}}'
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


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_vmware_admin_clusters_enroll"
    values={[
        { label: 'projects_locations_vmware_admin_clusters_enroll', value: 'projects_locations_vmware_admin_clusters_enroll' },
        { label: 'projects_locations_vmware_admin_clusters_unenroll', value: 'projects_locations_vmware_admin_clusters_unenroll' }
    ]}
>
<TabItem value="projects_locations_vmware_admin_clusters_enroll">

Enrolls an existing VMware admin cluster to the Anthos On-Prem API within a given project and location. Through enrollment, an existing admin cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster will be expected to be performed through the API.

```sql
EXEC google.gkeonprem.vmware_admin_clusters.projects_locations_vmware_admin_clusters_enroll 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"membership": "{{ membership }}", 
"vmwareAdminClusterId": "{{ vmwareAdminClusterId }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_vmware_admin_clusters_unenroll">

Unenrolls an existing VMware admin cluster from the Anthos On-Prem API within a given project and location. Unenrollment removes the Cloud reference to the cluster without modifying the underlying OnPrem Resources. Clusters will continue to run; however, they will no longer be accessible through the Anthos On-Prem API or its clients.

```sql
EXEC google.gkeonprem.vmware_admin_clusters.projects_locations_vmware_admin_clusters_unenroll 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@vmwareAdminClustersId='{{ vmwareAdminClustersId }}' --required, 
@allowMissing={{ allowMissing }}, 
@etag='{{ etag }}', 
@ignoreErrors={{ ignoreErrors }}, 
@validateOnly={{ validateOnly }}
;
```
</TabItem>
</Tabs>
