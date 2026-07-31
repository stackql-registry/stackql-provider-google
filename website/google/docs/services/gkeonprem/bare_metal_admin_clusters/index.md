--- 
title: bare_metal_admin_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - bare_metal_admin_clusters
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

Creates, updates, deletes, gets or lists a <code>bare_metal_admin_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bare_metal_admin_clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.gkeonprem.bare_metal_admin_clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_bare_metal_admin_clusters_get"
    values={[
        { label: 'projects_locations_bare_metal_admin_clusters_get', value: 'projects_locations_bare_metal_admin_clusters_get' },
        { label: 'projects_locations_bare_metal_admin_clusters_list', value: 'projects_locations_bare_metal_admin_clusters_list' }
    ]}
>
<TabItem value="projects_locations_bare_metal_admin_clusters_get">

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
    <td>Immutable. The bare metal admin cluster resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Annotations on the bare metal admin cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.</td>
</tr>
<tr>
    <td><CopyableCode code="bareMetalVersion" /></td>
    <td><code>string</code></td>
    <td>The Anthos clusters on bare metal version for the bare metal admin cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="binaryAuthorization" /></td>
    <td><code>object</code></td>
    <td>Binary Authorization related configurations. (id: BinaryAuthorization)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterOperations" /></td>
    <td><code>object</code></td>
    <td>Cluster operations configuration. (id: BareMetalAdminClusterOperationsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="controlPlane" /></td>
    <td><code>object</code></td>
    <td>Control plane configuration. (id: BareMetalAdminControlPlaneConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this bare metal admin cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this bare metal admin cluster was deleted. If the resource is not deleted, this must be empty</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A human readable description of this bare metal admin cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>Output only. The IP address name of bare metal admin cluster's API server.</td>
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
    <td><CopyableCode code="loadBalancer" /></td>
    <td><code>object</code></td>
    <td>Load balancer configuration. (id: BareMetalAdminLoadBalancerConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="localName" /></td>
    <td><code>string</code></td>
    <td>Output only. The object name of the bare metal cluster custom resource. This field is used to support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this field will differ from the ID in the resource name. For new clusters, this field will match the user provided cluster name and be visible in the last component of the resource name. It is not modifiable. All users should use this name to access their cluster using gkectl or kubectl and should expect to see the local name when viewing admin cluster controller logs.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceConfig" /></td>
    <td><code>object</code></td>
    <td>Maintenance configuration. (id: BareMetalAdminMaintenanceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. MaintenanceStatus representing state of maintenance. (id: BareMetalAdminMaintenanceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfig" /></td>
    <td><code>object</code></td>
    <td>Network configuration. (id: BareMetalAdminNetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeAccessConfig" /></td>
    <td><code>object</code></td>
    <td>Node access related configurations. (id: BareMetalAdminNodeAccessConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeConfig" /></td>
    <td><code>object</code></td>
    <td>Workload node configuration. (id: BareMetalAdminWorkloadNodeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="osEnvironmentConfig" /></td>
    <td><code>object</code></td>
    <td>OS environment related configurations. (id: BareMetalAdminOsEnvironmentConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="proxy" /></td>
    <td><code>object</code></td>
    <td>Proxy configuration. (id: BareMetalAdminProxyConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. If set, there are currently changes in flight to the bare metal Admin Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="securityConfig" /></td>
    <td><code>object</code></td>
    <td>Security related configuration. (id: BareMetalAdminSecurityConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the bare metal admin cluster. (STATE_UNSPECIFIED, PROVISIONING, RUNNING, RECONCILING, STOPPING, ERROR, DEGRADED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Output only. ResourceStatus representing detailed cluster status. (id: ResourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="storage" /></td>
    <td><code>object</code></td>
    <td>Storage configuration. (id: BareMetalAdminStorageConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The unique identifier of the bare metal admin cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this bare metal admin cluster was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="validationCheck" /></td>
    <td><code>object</code></td>
    <td>Output only. ValidationCheck representing the result of the preflight check. (id: ValidationCheck)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_bare_metal_admin_clusters_list">

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
    <td>Immutable. The bare metal admin cluster resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Annotations on the bare metal admin cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.</td>
</tr>
<tr>
    <td><CopyableCode code="bareMetalVersion" /></td>
    <td><code>string</code></td>
    <td>The Anthos clusters on bare metal version for the bare metal admin cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="binaryAuthorization" /></td>
    <td><code>object</code></td>
    <td>Binary Authorization related configurations. (id: BinaryAuthorization)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterOperations" /></td>
    <td><code>object</code></td>
    <td>Cluster operations configuration. (id: BareMetalAdminClusterOperationsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="controlPlane" /></td>
    <td><code>object</code></td>
    <td>Control plane configuration. (id: BareMetalAdminControlPlaneConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this bare metal admin cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this bare metal admin cluster was deleted. If the resource is not deleted, this must be empty</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A human readable description of this bare metal admin cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>Output only. The IP address name of bare metal admin cluster's API server.</td>
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
    <td><CopyableCode code="loadBalancer" /></td>
    <td><code>object</code></td>
    <td>Load balancer configuration. (id: BareMetalAdminLoadBalancerConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="localName" /></td>
    <td><code>string</code></td>
    <td>Output only. The object name of the bare metal cluster custom resource. This field is used to support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this field will differ from the ID in the resource name. For new clusters, this field will match the user provided cluster name and be visible in the last component of the resource name. It is not modifiable. All users should use this name to access their cluster using gkectl or kubectl and should expect to see the local name when viewing admin cluster controller logs.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceConfig" /></td>
    <td><code>object</code></td>
    <td>Maintenance configuration. (id: BareMetalAdminMaintenanceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. MaintenanceStatus representing state of maintenance. (id: BareMetalAdminMaintenanceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfig" /></td>
    <td><code>object</code></td>
    <td>Network configuration. (id: BareMetalAdminNetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeAccessConfig" /></td>
    <td><code>object</code></td>
    <td>Node access related configurations. (id: BareMetalAdminNodeAccessConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeConfig" /></td>
    <td><code>object</code></td>
    <td>Workload node configuration. (id: BareMetalAdminWorkloadNodeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="osEnvironmentConfig" /></td>
    <td><code>object</code></td>
    <td>OS environment related configurations. (id: BareMetalAdminOsEnvironmentConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="proxy" /></td>
    <td><code>object</code></td>
    <td>Proxy configuration. (id: BareMetalAdminProxyConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. If set, there are currently changes in flight to the bare metal Admin Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="securityConfig" /></td>
    <td><code>object</code></td>
    <td>Security related configuration. (id: BareMetalAdminSecurityConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the bare metal admin cluster. (STATE_UNSPECIFIED, PROVISIONING, RUNNING, RECONCILING, STOPPING, ERROR, DEGRADED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Output only. ResourceStatus representing detailed cluster status. (id: ResourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="storage" /></td>
    <td><code>object</code></td>
    <td>Storage configuration. (id: BareMetalAdminStorageConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The unique identifier of the bare metal admin cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this bare metal admin cluster was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="validationCheck" /></td>
    <td><code>object</code></td>
    <td>Output only. ValidationCheck representing the result of the preflight check. (id: ValidationCheck)</td>
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
    <td><a href="#projects_locations_bare_metal_admin_clusters_get"><CopyableCode code="projects_locations_bare_metal_admin_clusters_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bareMetalAdminClustersId"><code>bareMetalAdminClustersId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Gets details of a single bare metal admin cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_bare_metal_admin_clusters_list"><CopyableCode code="projects_locations_bare_metal_admin_clusters_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-view"><code>view</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Lists bare metal admin clusters in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_bare_metal_admin_clusters_create"><CopyableCode code="projects_locations_bare_metal_admin_clusters_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-bareMetalAdminClusterId"><code>bareMetalAdminClusterId</code></a>, <a href="#parameter-allowPreflightFailure"><code>allowPreflightFailure</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a new bare metal admin cluster in a given project and location. The API needs to be combined with creating a bootstrap cluster to work. See: https://cloud.google.com/anthos/clusters/docs/bare-metal/latest/installing/creating-clusters/create-admin-cluster-api#prepare_bootstrap_environment</td>
</tr>
<tr>
    <td><a href="#projects_locations_bare_metal_admin_clusters_patch"><CopyableCode code="projects_locations_bare_metal_admin_clusters_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bareMetalAdminClustersId"><code>bareMetalAdminClustersId</code></a></td>
    <td><a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single bare metal admin cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_bare_metal_admin_clusters_enroll"><CopyableCode code="projects_locations_bare_metal_admin_clusters_enroll" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Enrolls an existing bare metal admin cluster to the Anthos On-Prem API within a given project and location. Through enrollment, an existing admin cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster will be expected to be performed through the API.</td>
</tr>
<tr>
    <td><a href="#projects_locations_bare_metal_admin_clusters_query_version_config"><CopyableCode code="projects_locations_bare_metal_admin_clusters_query_version_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-upgradeConfig.clusterName"><code>upgradeConfig.clusterName</code></a></td>
    <td>Queries the bare metal admin cluster version config.</td>
</tr>
<tr>
    <td><a href="#projects_locations_bare_metal_admin_clusters_unenroll"><CopyableCode code="projects_locations_bare_metal_admin_clusters_unenroll" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bareMetalAdminClustersId"><code>bareMetalAdminClustersId</code></a></td>
    <td><a href="#parameter-ignoreErrors"><code>ignoreErrors</code></a>, <a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Unenrolls an existing bare metal admin cluster from the Anthos On-Prem API within a given project and location. Unenrollment removes the Cloud reference to the cluster without modifying the underlying OnPrem Resources. Clusters will continue to run; however, they will no longer be accessible through the Anthos On-Prem API or its clients.</td>
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
<tr id="parameter-bareMetalAdminClustersId">
    <td><CopyableCode code="bareMetalAdminClustersId" /></td>
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
<tr id="parameter-allowPreflightFailure">
    <td><CopyableCode code="allowPreflightFailure" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-bareMetalAdminClusterId">
    <td><CopyableCode code="bareMetalAdminClusterId" /></td>
    <td><code>string</code></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-upgradeConfig.clusterName">
    <td><CopyableCode code="upgradeConfig.clusterName" /></td>
    <td><code>string</code></td>
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
    defaultValue="projects_locations_bare_metal_admin_clusters_get"
    values={[
        { label: 'projects_locations_bare_metal_admin_clusters_get', value: 'projects_locations_bare_metal_admin_clusters_get' },
        { label: 'projects_locations_bare_metal_admin_clusters_list', value: 'projects_locations_bare_metal_admin_clusters_list' }
    ]}
>
<TabItem value="projects_locations_bare_metal_admin_clusters_get">

Gets details of a single bare metal admin cluster.

```sql
SELECT
name,
annotations,
bareMetalVersion,
binaryAuthorization,
clusterOperations,
controlPlane,
createTime,
deleteTime,
description,
endpoint,
etag,
fleet,
loadBalancer,
localName,
maintenanceConfig,
maintenanceStatus,
networkConfig,
nodeAccessConfig,
nodeConfig,
osEnvironmentConfig,
proxy,
reconciling,
securityConfig,
state,
status,
storage,
uid,
updateTime,
validationCheck
FROM google.gkeonprem.bare_metal_admin_clusters
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bareMetalAdminClustersId = '{{ bareMetalAdminClustersId }}' -- required
AND view = '{{ view }}'
AND allowMissing = '{{ allowMissing }}'
;
```
</TabItem>
<TabItem value="projects_locations_bare_metal_admin_clusters_list">

Lists bare metal admin clusters in a given project and location.

```sql
SELECT
name,
annotations,
bareMetalVersion,
binaryAuthorization,
clusterOperations,
controlPlane,
createTime,
deleteTime,
description,
endpoint,
etag,
fleet,
loadBalancer,
localName,
maintenanceConfig,
maintenanceStatus,
networkConfig,
nodeAccessConfig,
nodeConfig,
osEnvironmentConfig,
proxy,
reconciling,
securityConfig,
state,
status,
storage,
uid,
updateTime,
validationCheck
FROM google.gkeonprem.bare_metal_admin_clusters
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND view = '{{ view }}'
AND allowMissing = '{{ allowMissing }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_bare_metal_admin_clusters_create"
    values={[
        { label: 'projects_locations_bare_metal_admin_clusters_create', value: 'projects_locations_bare_metal_admin_clusters_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_bare_metal_admin_clusters_create">

Creates a new bare metal admin cluster in a given project and location. The API needs to be combined with creating a bootstrap cluster to work. See: https://cloud.google.com/anthos/clusters/docs/bare-metal/latest/installing/creating-clusters/create-admin-cluster-api#prepare_bootstrap_environment

```sql
INSERT INTO google.gkeonprem.bare_metal_admin_clusters (
data__osEnvironmentConfig,
data__nodeAccessConfig,
data__name,
data__securityConfig,
data__clusterOperations,
data__bareMetalVersion,
data__maintenanceConfig,
data__controlPlane,
data__description,
data__nodeConfig,
data__proxy,
data__loadBalancer,
data__networkConfig,
data__etag,
data__binaryAuthorization,
data__annotations,
data__storage,
projectsId,
locationsId,
bareMetalAdminClusterId,
allowPreflightFailure,
validateOnly
)
SELECT 
'{{ osEnvironmentConfig }}',
'{{ nodeAccessConfig }}',
'{{ name }}',
'{{ securityConfig }}',
'{{ clusterOperations }}',
'{{ bareMetalVersion }}',
'{{ maintenanceConfig }}',
'{{ controlPlane }}',
'{{ description }}',
'{{ nodeConfig }}',
'{{ proxy }}',
'{{ loadBalancer }}',
'{{ networkConfig }}',
'{{ etag }}',
'{{ binaryAuthorization }}',
'{{ annotations }}',
'{{ storage }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ bareMetalAdminClusterId }}',
'{{ allowPreflightFailure }}',
'{{ validateOnly }}'
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
- name: bare_metal_admin_clusters
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the bare_metal_admin_clusters resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the bare_metal_admin_clusters resource.
    - name: osEnvironmentConfig
      description: |
        OS environment related configurations.
      value:
        packageRepoExcluded: {{ packageRepoExcluded }}
    - name: nodeAccessConfig
      description: |
        Node access related configurations.
      value:
        loginUser: "{{ loginUser }}"
    - name: name
      value: "{{ name }}"
      description: |
        Immutable. The bare metal admin cluster resource name.
    - name: securityConfig
      description: |
        Security related configuration.
      value:
        authorization:
          adminUsers:
            - username: "{{ username }}"
    - name: clusterOperations
      description: |
        Cluster operations configuration.
      value:
        enableApplicationLogs: {{ enableApplicationLogs }}
    - name: bareMetalVersion
      value: "{{ bareMetalVersion }}"
      description: |
        The Anthos clusters on bare metal version for the bare metal admin cluster.
    - name: maintenanceConfig
      description: |
        Maintenance configuration.
      value:
        maintenanceAddressCidrBlocks:
          - "{{ maintenanceAddressCidrBlocks }}"
    - name: controlPlane
      description: |
        Control plane configuration.
      value:
        controlPlaneNodePoolConfig:
          nodePoolConfig:
            labels: "{{ labels }}"
            kubeletConfig:
              registryPullQps: {{ registryPullQps }}
              registryBurst: {{ registryBurst }}
              serializeImagePullsDisabled: {{ serializeImagePullsDisabled }}
            operatingSystem: "{{ operatingSystem }}"
            nodeConfigs:
              - labels: "{{ labels }}"
                nodeIp: "{{ nodeIp }}"
            taints:
              - key: "{{ key }}"
                value: "{{ value }}"
                effect: "{{ effect }}"
        apiServerArgs:
          - argument: "{{ argument }}"
            value: "{{ value }}"
    - name: description
      value: "{{ description }}"
      description: |
        A human readable description of this bare metal admin cluster.
    - name: nodeConfig
      description: |
        Workload node configuration.
      value:
        maxPodsPerNode: "{{ maxPodsPerNode }}"
    - name: proxy
      description: |
        Proxy configuration.
      value:
        uri: "{{ uri }}"
        noProxy:
          - "{{ noProxy }}"
    - name: loadBalancer
      description: |
        Load balancer configuration.
      value:
        vipConfig:
          controlPlaneVip: "{{ controlPlaneVip }}"
        portConfig:
          controlPlaneLoadBalancerPort: {{ controlPlaneLoadBalancerPort }}
        manualLbConfig:
          enabled: {{ enabled }}
        bgpLbConfig:
          addressPools:
            - pool: "{{ pool }}"
              addresses: "{{ addresses }}"
              manualAssign: {{ manualAssign }}
              avoidBuggyIps: {{ avoidBuggyIps }}
          loadBalancerNodePoolConfig:
            nodePoolConfig:
              labels: "{{ labels }}"
              kubeletConfig:
                registryPullQps: {{ registryPullQps }}
                registryBurst: {{ registryBurst }}
                serializeImagePullsDisabled: {{ serializeImagePullsDisabled }}
              operatingSystem: "{{ operatingSystem }}"
              nodeConfigs:
                - labels: "{{ labels }}"
                  nodeIp: "{{ nodeIp }}"
              taints:
                - key: "{{ key }}"
                  value: "{{ value }}"
                  effect: "{{ effect }}"
          asn: "{{ asn }}"
          bgpPeerConfigs:
            - ipAddress: "{{ ipAddress }}"
              controlPlaneNodes: "{{ controlPlaneNodes }}"
              asn: "{{ asn }}"
    - name: networkConfig
      description: |
        Network configuration.
      value:
        advancedNetworking: {{ advancedNetworking }}
        multipleNetworkInterfacesConfig:
          enabled: {{ enabled }}
        islandModeCidr:
          podAddressCidrBlocks:
            - "{{ podAddressCidrBlocks }}"
          serviceAddressCidrBlocks:
            - "{{ serviceAddressCidrBlocks }}"
    - name: etag
      value: "{{ etag }}"
      description: |
        This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control.
    - name: binaryAuthorization
      description: |
        Binary Authorization related configurations.
      value:
        evaluationMode: "{{ evaluationMode }}"
    - name: annotations
      value: "{{ annotations }}"
      description: |
        Annotations on the bare metal admin cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.
    - name: storage
      description: |
        Storage configuration.
      value:
        lvpShareConfig:
          lvpConfig:
            path: "{{ path }}"
            storageClass: "{{ storageClass }}"
          sharedPathPvCount: {{ sharedPathPvCount }}
        lvpNodeMountsConfig:
          path: "{{ path }}"
          storageClass: "{{ storageClass }}"
    - name: bareMetalAdminClusterId
      value: "{{ bareMetalAdminClusterId }}"
    - name: allowPreflightFailure
      value: {{ allowPreflightFailure }}
    - name: validateOnly
      value: {{ validateOnly }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_bare_metal_admin_clusters_patch"
    values={[
        { label: 'projects_locations_bare_metal_admin_clusters_patch', value: 'projects_locations_bare_metal_admin_clusters_patch' }
    ]}
>
<TabItem value="projects_locations_bare_metal_admin_clusters_patch">

Updates the parameters of a single bare metal admin cluster.

```sql
UPDATE google.gkeonprem.bare_metal_admin_clusters
SET 
data__osEnvironmentConfig = '{{ osEnvironmentConfig }}',
data__nodeAccessConfig = '{{ nodeAccessConfig }}',
data__name = '{{ name }}',
data__securityConfig = '{{ securityConfig }}',
data__clusterOperations = '{{ clusterOperations }}',
data__bareMetalVersion = '{{ bareMetalVersion }}',
data__maintenanceConfig = '{{ maintenanceConfig }}',
data__controlPlane = '{{ controlPlane }}',
data__description = '{{ description }}',
data__nodeConfig = '{{ nodeConfig }}',
data__proxy = '{{ proxy }}',
data__loadBalancer = '{{ loadBalancer }}',
data__networkConfig = '{{ networkConfig }}',
data__etag = '{{ etag }}',
data__binaryAuthorization = '{{ binaryAuthorization }}',
data__annotations = '{{ annotations }}',
data__storage = '{{ storage }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bareMetalAdminClustersId = '{{ bareMetalAdminClustersId }}' --required
AND validateOnly = {{ validateOnly}}
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


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_bare_metal_admin_clusters_enroll"
    values={[
        { label: 'projects_locations_bare_metal_admin_clusters_enroll', value: 'projects_locations_bare_metal_admin_clusters_enroll' },
        { label: 'projects_locations_bare_metal_admin_clusters_query_version_config', value: 'projects_locations_bare_metal_admin_clusters_query_version_config' },
        { label: 'projects_locations_bare_metal_admin_clusters_unenroll', value: 'projects_locations_bare_metal_admin_clusters_unenroll' }
    ]}
>
<TabItem value="projects_locations_bare_metal_admin_clusters_enroll">

Enrolls an existing bare metal admin cluster to the Anthos On-Prem API within a given project and location. Through enrollment, an existing admin cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster will be expected to be performed through the API.

```sql
EXEC google.gkeonprem.bare_metal_admin_clusters.projects_locations_bare_metal_admin_clusters_enroll 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"bareMetalAdminClusterId": "{{ bareMetalAdminClusterId }}", 
"membership": "{{ membership }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_bare_metal_admin_clusters_query_version_config">

Queries the bare metal admin cluster version config.

```sql
EXEC google.gkeonprem.bare_metal_admin_clusters.projects_locations_bare_metal_admin_clusters_query_version_config 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@upgradeConfig.clusterName='{{ upgradeConfig.clusterName }}'
;
```
</TabItem>
<TabItem value="projects_locations_bare_metal_admin_clusters_unenroll">

Unenrolls an existing bare metal admin cluster from the Anthos On-Prem API within a given project and location. Unenrollment removes the Cloud reference to the cluster without modifying the underlying OnPrem Resources. Clusters will continue to run; however, they will no longer be accessible through the Anthos On-Prem API or its clients.

```sql
EXEC google.gkeonprem.bare_metal_admin_clusters.projects_locations_bare_metal_admin_clusters_unenroll 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@bareMetalAdminClustersId='{{ bareMetalAdminClustersId }}' --required, 
@ignoreErrors={{ ignoreErrors }}, 
@etag='{{ etag }}', 
@validateOnly={{ validateOnly }}, 
@allowMissing={{ allowMissing }}
;
```
</TabItem>
</Tabs>
