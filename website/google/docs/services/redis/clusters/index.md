--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - redis
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

Creates, updates, deletes, gets or lists a <code>clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.redis.clusters" /></td></tr>
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
    <td>Required. Identifier. Unique name of the resource in this scope including project and location using the form: `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/clusters/&#123;cluster_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="aclPolicy" /></td>
    <td><code>string</code></td>
    <td>Optional. The ACL policy to be applied to the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="aclPolicyInSync" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Output only. Deprecated: Indicates whether the ACL rules applied to the cluster are in sync.</td>
</tr>
<tr>
    <td><CopyableCode code="aclPolicyInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Details of the applied ACL policy. (id: AclPolicyInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="allowFewerZonesDeployment" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Immutable. Deprecated, do not use.</td>
</tr>
<tr>
    <td><CopyableCode code="asyncClusterEndpointsDeletionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If true, cluster endpoints that are created and registered by customers can be deleted asynchronously. That is, such a cluster endpoint can be de-registered before the forwarding rules in the cluster endpoint are deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizationMode" /></td>
    <td><code>string</code></td>
    <td>Optional. The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster. (AUTH_MODE_UNSPECIFIED, AUTH_MODE_IAM_AUTH, AUTH_MODE_DISABLED, AUTH_MODE_TOKEN_AUTH)</td>
</tr>
<tr>
    <td><CopyableCode code="automatedBackupConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The automated backup config for the cluster. (id: AutomatedBackupConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="availableMaintenanceVersions" /></td>
    <td><code>array</code></td>
    <td>Output only. This field is used to determine the available maintenance versions for the self service update.</td>
</tr>
<tr>
    <td><CopyableCode code="backupCollection" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. The backup collection full resource name. Example: projects/&#123;project&#125;/locations/&#123;location&#125;/backupCollections/&#123;collection&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="clusterEndpoints" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of cluster endpoints.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp associated with the cluster creation request.</td>
</tr>
<tr>
    <td><CopyableCode code="crossClusterReplicationConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Cross cluster replication config. (id: CrossClusterReplicationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="deletionProtectionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. The delete operation will fail when the value is set to true.</td>
</tr>
<tr>
    <td><CopyableCode code="discoveryEndpoints" /></td>
    <td><code>array</code></td>
    <td>Output only. Endpoints created on each given network, for Redis clients to connect to the cluster. Currently only one discovery endpoint is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="effectiveMaintenanceVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. This field represents the actual maintenance version of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Encryption information of the data at rest of the cluster. (id: EncryptionInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="gcsSource" /></td>
    <td><code>object</code></td>
    <td>Optional. Backups stored in Cloud Storage buckets. The Cloud Storage buckets need to be the same region as the clusters. Read permission is required to import from the provided Cloud Storage objects. (id: GcsBackupSource)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKey" /></td>
    <td><code>string</code></td>
    <td>Optional. The KMS key used to encrypt the at-rest data of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels to represent user-provided metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenancePolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. ClusterMaintenancePolicy determines when to allow or deny updates. (id: ClusterMaintenancePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceSchedule" /></td>
    <td><code>object</code></td>
    <td>Output only. ClusterMaintenanceSchedule Output only Published maintenance schedule. (id: ClusterMaintenanceSchedule)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. This field can be used to trigger self service update to indicate the desired maintenance version. The input to this field can be determined by the available_maintenance_versions field.</td>
</tr>
<tr>
    <td><CopyableCode code="managedBackupSource" /></td>
    <td><code>object</code></td>
    <td>Optional. Backups generated and managed by memorystore service. (id: ManagedBackupSource)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeType" /></td>
    <td><code>string</code></td>
    <td>Optional. The type of a redis node in the cluster. NodeType determines the underlying machine-type of a redis node. (NODE_TYPE_UNSPECIFIED, REDIS_SHARED_CORE_NANO, REDIS_HIGHMEM_MEDIUM, REDIS_HIGHMEM_XLARGE, REDIS_STANDARD_SMALL, REDIS_HIGHCPU_MEDIUM, REDIS_STANDARD_LARGE, REDIS_HIGHMEM_2XLARGE)</td>
</tr>
<tr>
    <td><CopyableCode code="ondemandMaintenance" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Input only. Ondemand maintenance for the cluster. This field can be used to trigger ondemand critical update on the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="persistenceConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Persistence config (RDB, AOF) for the cluster. (id: ClusterPersistenceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="preciseSizeGb" /></td>
    <td><code>number (double)</code></td>
    <td>Output only. Precise value of redis memory size in GB for the entire cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="pscConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Each PscConfig configures the consumer network where IPs will be designated to the cluster for client access through Private Service Connect Automation. Currently, only one PscConfig is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="pscConnections" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of PSC connections that are auto-created through service connectivity automation.</td>
</tr>
<tr>
    <td><CopyableCode code="pscServiceAttachments" /></td>
    <td><code>array</code></td>
    <td>Output only. Service attachment details to configure Psc connections</td>
</tr>
<tr>
    <td><CopyableCode code="redisConfigs" /></td>
    <td><code>object</code></td>
    <td>Optional. Key/Value pairs of customer overrides for mutable Redis Configs</td>
</tr>
<tr>
    <td><CopyableCode code="replicaCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. The number of replica nodes per shard.</td>
</tr>
<tr>
    <td><CopyableCode code="rotateServerCertificate" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Input only. Rotate the server certificates.</td>
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
    <td><CopyableCode code="serverCaMode" /></td>
    <td><code>string</code></td>
    <td>Optional. Server CA mode for the cluster. (SERVER_CA_MODE_UNSPECIFIED, SERVER_CA_MODE_GOOGLE_MANAGED_PER_INSTANCE_CA, SERVER_CA_MODE_GOOGLE_MANAGED_SHARED_CA, SERVER_CA_MODE_CUSTOMER_MANAGED_CAS_CA)</td>
</tr>
<tr>
    <td><CopyableCode code="serverCaPool" /></td>
    <td><code>string</code></td>
    <td>Optional. Customer-managed CA pool for the cluster. Only applicable for BYOCA i.e. if server_ca_mode is SERVER_CA_MODE_CUSTOMER_MANAGED_CAS_CA. Format: "projects/&#123;project&#125;/locations/&#123;region&#125;/caPools/&#123;ca_pool&#125;".</td>
</tr>
<tr>
    <td><CopyableCode code="shardCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. Number of shards for the Redis cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="simulateMaintenanceEvent" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Input only. Simulate a maintenance event.</td>
</tr>
<tr>
    <td><CopyableCode code="sizeGb" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Redis memory size in GB for the entire cluster rounded up to the next integer.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of this cluster. Can be CREATING, READY, UPDATING, DELETING and SUSPENDED (STATE_UNSPECIFIED, CREATING, ACTIVE, UPDATING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="stateInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Additional information about the current state of the cluster. (id: StateInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="transitEncryptionMode" /></td>
    <td><code>string</code></td>
    <td>Optional. The in-transit encryption for the Redis cluster. If not provided, encryption is disabled for the cluster. (TRANSIT_ENCRYPTION_MODE_UNSPECIFIED, TRANSIT_ENCRYPTION_MODE_DISABLED, TRANSIT_ENCRYPTION_MODE_SERVER_AUTHENTICATION)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System assigned, unique identifier for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="zoneDistributionConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. This config will be used to determine how the customer wants us to distribute cluster resources within the region. (id: ZoneDistributionConfig)</td>
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
    <td>Required. Identifier. Unique name of the resource in this scope including project and location using the form: `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/clusters/&#123;cluster_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="aclPolicy" /></td>
    <td><code>string</code></td>
    <td>Optional. The ACL policy to be applied to the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="aclPolicyInSync" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Output only. Deprecated: Indicates whether the ACL rules applied to the cluster are in sync.</td>
</tr>
<tr>
    <td><CopyableCode code="aclPolicyInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Details of the applied ACL policy. (id: AclPolicyInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="allowFewerZonesDeployment" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Immutable. Deprecated, do not use.</td>
</tr>
<tr>
    <td><CopyableCode code="asyncClusterEndpointsDeletionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If true, cluster endpoints that are created and registered by customers can be deleted asynchronously. That is, such a cluster endpoint can be de-registered before the forwarding rules in the cluster endpoint are deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizationMode" /></td>
    <td><code>string</code></td>
    <td>Optional. The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster. (AUTH_MODE_UNSPECIFIED, AUTH_MODE_IAM_AUTH, AUTH_MODE_DISABLED, AUTH_MODE_TOKEN_AUTH)</td>
</tr>
<tr>
    <td><CopyableCode code="automatedBackupConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The automated backup config for the cluster. (id: AutomatedBackupConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="availableMaintenanceVersions" /></td>
    <td><code>array</code></td>
    <td>Output only. This field is used to determine the available maintenance versions for the self service update.</td>
</tr>
<tr>
    <td><CopyableCode code="backupCollection" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. The backup collection full resource name. Example: projects/&#123;project&#125;/locations/&#123;location&#125;/backupCollections/&#123;collection&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="clusterEndpoints" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of cluster endpoints.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp associated with the cluster creation request.</td>
</tr>
<tr>
    <td><CopyableCode code="crossClusterReplicationConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Cross cluster replication config. (id: CrossClusterReplicationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="deletionProtectionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. The delete operation will fail when the value is set to true.</td>
</tr>
<tr>
    <td><CopyableCode code="discoveryEndpoints" /></td>
    <td><code>array</code></td>
    <td>Output only. Endpoints created on each given network, for Redis clients to connect to the cluster. Currently only one discovery endpoint is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="effectiveMaintenanceVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. This field represents the actual maintenance version of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Encryption information of the data at rest of the cluster. (id: EncryptionInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="gcsSource" /></td>
    <td><code>object</code></td>
    <td>Optional. Backups stored in Cloud Storage buckets. The Cloud Storage buckets need to be the same region as the clusters. Read permission is required to import from the provided Cloud Storage objects. (id: GcsBackupSource)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKey" /></td>
    <td><code>string</code></td>
    <td>Optional. The KMS key used to encrypt the at-rest data of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels to represent user-provided metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenancePolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. ClusterMaintenancePolicy determines when to allow or deny updates. (id: ClusterMaintenancePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceSchedule" /></td>
    <td><code>object</code></td>
    <td>Output only. ClusterMaintenanceSchedule Output only Published maintenance schedule. (id: ClusterMaintenanceSchedule)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. This field can be used to trigger self service update to indicate the desired maintenance version. The input to this field can be determined by the available_maintenance_versions field.</td>
</tr>
<tr>
    <td><CopyableCode code="managedBackupSource" /></td>
    <td><code>object</code></td>
    <td>Optional. Backups generated and managed by memorystore service. (id: ManagedBackupSource)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeType" /></td>
    <td><code>string</code></td>
    <td>Optional. The type of a redis node in the cluster. NodeType determines the underlying machine-type of a redis node. (NODE_TYPE_UNSPECIFIED, REDIS_SHARED_CORE_NANO, REDIS_HIGHMEM_MEDIUM, REDIS_HIGHMEM_XLARGE, REDIS_STANDARD_SMALL, REDIS_HIGHCPU_MEDIUM, REDIS_STANDARD_LARGE, REDIS_HIGHMEM_2XLARGE)</td>
</tr>
<tr>
    <td><CopyableCode code="ondemandMaintenance" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Input only. Ondemand maintenance for the cluster. This field can be used to trigger ondemand critical update on the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="persistenceConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Persistence config (RDB, AOF) for the cluster. (id: ClusterPersistenceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="preciseSizeGb" /></td>
    <td><code>number (double)</code></td>
    <td>Output only. Precise value of redis memory size in GB for the entire cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="pscConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Each PscConfig configures the consumer network where IPs will be designated to the cluster for client access through Private Service Connect Automation. Currently, only one PscConfig is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="pscConnections" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of PSC connections that are auto-created through service connectivity automation.</td>
</tr>
<tr>
    <td><CopyableCode code="pscServiceAttachments" /></td>
    <td><code>array</code></td>
    <td>Output only. Service attachment details to configure Psc connections</td>
</tr>
<tr>
    <td><CopyableCode code="redisConfigs" /></td>
    <td><code>object</code></td>
    <td>Optional. Key/Value pairs of customer overrides for mutable Redis Configs</td>
</tr>
<tr>
    <td><CopyableCode code="replicaCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. The number of replica nodes per shard.</td>
</tr>
<tr>
    <td><CopyableCode code="rotateServerCertificate" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Input only. Rotate the server certificates.</td>
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
    <td><CopyableCode code="serverCaMode" /></td>
    <td><code>string</code></td>
    <td>Optional. Server CA mode for the cluster. (SERVER_CA_MODE_UNSPECIFIED, SERVER_CA_MODE_GOOGLE_MANAGED_PER_INSTANCE_CA, SERVER_CA_MODE_GOOGLE_MANAGED_SHARED_CA, SERVER_CA_MODE_CUSTOMER_MANAGED_CAS_CA)</td>
</tr>
<tr>
    <td><CopyableCode code="serverCaPool" /></td>
    <td><code>string</code></td>
    <td>Optional. Customer-managed CA pool for the cluster. Only applicable for BYOCA i.e. if server_ca_mode is SERVER_CA_MODE_CUSTOMER_MANAGED_CAS_CA. Format: "projects/&#123;project&#125;/locations/&#123;region&#125;/caPools/&#123;ca_pool&#125;".</td>
</tr>
<tr>
    <td><CopyableCode code="shardCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. Number of shards for the Redis cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="simulateMaintenanceEvent" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Input only. Simulate a maintenance event.</td>
</tr>
<tr>
    <td><CopyableCode code="sizeGb" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Redis memory size in GB for the entire cluster rounded up to the next integer.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of this cluster. Can be CREATING, READY, UPDATING, DELETING and SUSPENDED (STATE_UNSPECIFIED, CREATING, ACTIVE, UPDATING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="stateInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Additional information about the current state of the cluster. (id: StateInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="transitEncryptionMode" /></td>
    <td><code>string</code></td>
    <td>Optional. The in-transit encryption for the Redis cluster. If not provided, encryption is disabled for the cluster. (TRANSIT_ENCRYPTION_MODE_UNSPECIFIED, TRANSIT_ENCRYPTION_MODE_DISABLED, TRANSIT_ENCRYPTION_MODE_SERVER_AUTHENTICATION)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System assigned, unique identifier for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="zoneDistributionConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. This config will be used to determine how the customer wants us to distribute cluster resources within the region. (id: ZoneDistributionConfig)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Gets the details of a specific Redis cluster.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all Redis clusters owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td>Creates a Redis cluster based on the specified properties. The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis cluster will be fully functional. The completed longrunning.Operation will contain the new cluster object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the metadata and configuration of a specific Redis cluster. Completed longrunning.Operation will contain the new cluster object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a specific Redis cluster. Cluster stops serving and data is deleted.</td>
</tr>
<tr>
    <td><a href="#reschedule_cluster_maintenance"><CopyableCode code="reschedule_cluster_maintenance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Reschedules upcoming maintenance event.</td>
</tr>
<tr>
    <td><a href="#backup"><CopyableCode code="backup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Backup Redis Cluster. If this is the first time a backup is being created, a backup collection will be created at the backend, and this backup belongs to this collection. Both collection and backup will have a resource name. Backup will be executed for each shard. A replica (primary if nonHA) will be selected to perform the execution. Backup call will be rejected if there is an ongoing backup or update operation. Be aware that during preview, if the cluster's internal software version is too old, critical update will be performed before actual backup. Once the internal software version is updated to the minimum version required by the backup feature, subsequent backups will not require critical update. After preview, there will be no critical update needed for backup.</td>
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
<tr id="parameter-clusterId">
    <td><CopyableCode code="clusterId" /></td>
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

Gets the details of a specific Redis cluster.

```sql
SELECT
name,
aclPolicy,
aclPolicyInSync,
aclPolicyInfo,
allowFewerZonesDeployment,
asyncClusterEndpointsDeletionEnabled,
authorizationMode,
automatedBackupConfig,
availableMaintenanceVersions,
backupCollection,
clusterEndpoints,
createTime,
crossClusterReplicationConfig,
deletionProtectionEnabled,
discoveryEndpoints,
effectiveMaintenanceVersion,
encryptionInfo,
gcsSource,
kmsKey,
labels,
maintenancePolicy,
maintenanceSchedule,
maintenanceVersion,
managedBackupSource,
nodeType,
ondemandMaintenance,
persistenceConfig,
preciseSizeGb,
pscConfigs,
pscConnections,
pscServiceAttachments,
redisConfigs,
replicaCount,
rotateServerCertificate,
satisfiesPzi,
satisfiesPzs,
serverCaMode,
serverCaPool,
shardCount,
simulateMaintenanceEvent,
sizeGb,
state,
stateInfo,
transitEncryptionMode,
uid,
zoneDistributionConfig
FROM google.redis.clusters
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND clustersId = '{{ clustersId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists all Redis clusters owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.

```sql
SELECT
name,
aclPolicy,
aclPolicyInSync,
aclPolicyInfo,
allowFewerZonesDeployment,
asyncClusterEndpointsDeletionEnabled,
authorizationMode,
automatedBackupConfig,
availableMaintenanceVersions,
backupCollection,
clusterEndpoints,
createTime,
crossClusterReplicationConfig,
deletionProtectionEnabled,
discoveryEndpoints,
effectiveMaintenanceVersion,
encryptionInfo,
gcsSource,
kmsKey,
labels,
maintenancePolicy,
maintenanceSchedule,
maintenanceVersion,
managedBackupSource,
nodeType,
ondemandMaintenance,
persistenceConfig,
preciseSizeGb,
pscConfigs,
pscConnections,
pscServiceAttachments,
redisConfigs,
replicaCount,
rotateServerCertificate,
satisfiesPzi,
satisfiesPzs,
serverCaMode,
serverCaPool,
shardCount,
simulateMaintenanceEvent,
sizeGb,
state,
stateInfo,
transitEncryptionMode,
uid,
zoneDistributionConfig
FROM google.redis.clusters
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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

Creates a Redis cluster based on the specified properties. The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis cluster will be fully functional. The completed longrunning.Operation will contain the new cluster object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

```sql
INSERT INTO google.redis.clusters (
data__name,
data__transitEncryptionMode,
data__kmsKey,
data__automatedBackupConfig,
data__labels,
data__replicaCount,
data__persistenceConfig,
data__maintenancePolicy,
data__redisConfigs,
data__shardCount,
data__simulateMaintenanceEvent,
data__managedBackupSource,
data__serverCaPool,
data__gcsSource,
data__asyncClusterEndpointsDeletionEnabled,
data__deletionProtectionEnabled,
data__maintenanceVersion,
data__rotateServerCertificate,
data__clusterEndpoints,
data__allowFewerZonesDeployment,
data__zoneDistributionConfig,
data__ondemandMaintenance,
data__pscConfigs,
data__crossClusterReplicationConfig,
data__serverCaMode,
data__aclPolicy,
data__nodeType,
data__authorizationMode,
projectsId,
locationsId,
requestId,
clusterId
)
SELECT 
'{{ name }}',
'{{ transitEncryptionMode }}',
'{{ kmsKey }}',
'{{ automatedBackupConfig }}',
'{{ labels }}',
{{ replicaCount }},
'{{ persistenceConfig }}',
'{{ maintenancePolicy }}',
'{{ redisConfigs }}',
{{ shardCount }},
{{ simulateMaintenanceEvent }},
'{{ managedBackupSource }}',
'{{ serverCaPool }}',
'{{ gcsSource }}',
{{ asyncClusterEndpointsDeletionEnabled }},
{{ deletionProtectionEnabled }},
'{{ maintenanceVersion }}',
{{ rotateServerCertificate }},
'{{ clusterEndpoints }}',
{{ allowFewerZonesDeployment }},
'{{ zoneDistributionConfig }}',
{{ ondemandMaintenance }},
'{{ pscConfigs }}',
'{{ crossClusterReplicationConfig }}',
'{{ serverCaMode }}',
'{{ aclPolicy }}',
'{{ nodeType }}',
'{{ authorizationMode }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ requestId }}',
'{{ clusterId }}'
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
- name: clusters
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the clusters resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the clusters resource.
    - name: name
      value: "{{ name }}"
      description: |
        Required. Identifier. Unique name of the resource in this scope including project and location using the form: \`projects/{project_id}/locations/{location_id}/clusters/{cluster_id}\`
    - name: transitEncryptionMode
      value: "{{ transitEncryptionMode }}"
      description: |
        Optional. The in-transit encryption for the Redis cluster. If not provided, encryption is disabled for the cluster.
      valid_values: ['TRANSIT_ENCRYPTION_MODE_UNSPECIFIED', 'TRANSIT_ENCRYPTION_MODE_DISABLED', 'TRANSIT_ENCRYPTION_MODE_SERVER_AUTHENTICATION']
    - name: kmsKey
      value: "{{ kmsKey }}"
      description: |
        Optional. The KMS key used to encrypt the at-rest data of the cluster.
    - name: automatedBackupConfig
      description: |
        Optional. The automated backup config for the cluster.
      value:
        automatedBackupMode: "{{ automatedBackupMode }}"
        retention: "{{ retention }}"
        fixedFrequencySchedule:
          startTime:
            seconds: {{ seconds }}
            nanos: {{ nanos }}
            minutes: {{ minutes }}
            hours: {{ hours }}
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Labels to represent user-provided metadata.
    - name: replicaCount
      value: {{ replicaCount }}
      description: |
        Optional. The number of replica nodes per shard.
    - name: persistenceConfig
      description: |
        Optional. Persistence config (RDB, AOF) for the cluster.
      value:
        aofConfig:
          appendFsync: "{{ appendFsync }}"
        mode: "{{ mode }}"
        rdbConfig:
          rdbSnapshotPeriod: "{{ rdbSnapshotPeriod }}"
          rdbSnapshotStartTime: "{{ rdbSnapshotStartTime }}"
    - name: maintenancePolicy
      description: |
        Optional. ClusterMaintenancePolicy determines when to allow or deny updates.
      value:
        updateTime: "{{ updateTime }}"
        createTime: "{{ createTime }}"
        weeklyMaintenanceWindow:
          - day: "{{ day }}"
            startTime:
              seconds: {{ seconds }}
              nanos: {{ nanos }}
              minutes: {{ minutes }}
              hours: {{ hours }}
    - name: redisConfigs
      value: "{{ redisConfigs }}"
      description: |
        Optional. Key/Value pairs of customer overrides for mutable Redis Configs
    - name: shardCount
      value: {{ shardCount }}
      description: |
        Optional. Number of shards for the Redis cluster.
    - name: simulateMaintenanceEvent
      value: {{ simulateMaintenanceEvent }}
      description: |
        Optional. Input only. Simulate a maintenance event.
    - name: managedBackupSource
      description: |
        Optional. Backups generated and managed by memorystore service.
      value:
        backup: "{{ backup }}"
    - name: serverCaPool
      value: "{{ serverCaPool }}"
      description: |
        Optional. Customer-managed CA pool for the cluster. Only applicable for BYOCA i.e. if server_ca_mode is SERVER_CA_MODE_CUSTOMER_MANAGED_CAS_CA. Format: "projects/{project}/locations/{region}/caPools/{ca_pool}".
    - name: gcsSource
      description: |
        Optional. Backups stored in Cloud Storage buckets. The Cloud Storage buckets need to be the same region as the clusters. Read permission is required to import from the provided Cloud Storage objects.
      value:
        uris:
          - "{{ uris }}"
    - name: asyncClusterEndpointsDeletionEnabled
      value: {{ asyncClusterEndpointsDeletionEnabled }}
      description: |
        Optional. If true, cluster endpoints that are created and registered by customers can be deleted asynchronously. That is, such a cluster endpoint can be de-registered before the forwarding rules in the cluster endpoint are deleted.
    - name: deletionProtectionEnabled
      value: {{ deletionProtectionEnabled }}
      description: |
        Optional. The delete operation will fail when the value is set to true.
    - name: maintenanceVersion
      value: "{{ maintenanceVersion }}"
      description: |
        Optional. This field can be used to trigger self service update to indicate the desired maintenance version. The input to this field can be determined by the available_maintenance_versions field.
    - name: rotateServerCertificate
      value: {{ rotateServerCertificate }}
      description: |
        Optional. Input only. Rotate the server certificates.
    - name: clusterEndpoints
      description: |
        Optional. A list of cluster endpoints.
      value:
        - connections: "{{ connections }}"
    - name: allowFewerZonesDeployment
      value: {{ allowFewerZonesDeployment }}
      description: |
        Optional. Immutable. Deprecated, do not use.
    - name: zoneDistributionConfig
      description: |
        Optional. This config will be used to determine how the customer wants us to distribute cluster resources within the region.
      value:
        zone: "{{ zone }}"
        mode: "{{ mode }}"
        zones:
          - "{{ zones }}"
    - name: ondemandMaintenance
      value: {{ ondemandMaintenance }}
      description: |
        Optional. Input only. Ondemand maintenance for the cluster. This field can be used to trigger ondemand critical update on the cluster.
    - name: pscConfigs
      description: |
        Optional. Each PscConfig configures the consumer network where IPs will be designated to the cluster for client access through Private Service Connect Automation. Currently, only one PscConfig is supported.
      value:
        - network: "{{ network }}"
    - name: crossClusterReplicationConfig
      description: |
        Optional. Cross cluster replication config.
      value:
        primaryCluster:
          cluster: "{{ cluster }}"
          uid: "{{ uid }}"
        clusterRole: "{{ clusterRole }}"
        secondaryClusters:
          - cluster: "{{ cluster }}"
            uid: "{{ uid }}"
        updateTime: "{{ updateTime }}"
        membership:
          primaryCluster:
            cluster: "{{ cluster }}"
            uid: "{{ uid }}"
          secondaryClusters:
            - cluster: "{{ cluster }}"
              uid: "{{ uid }}"
    - name: serverCaMode
      value: "{{ serverCaMode }}"
      description: |
        Optional. Server CA mode for the cluster.
      valid_values: ['SERVER_CA_MODE_UNSPECIFIED', 'SERVER_CA_MODE_GOOGLE_MANAGED_PER_INSTANCE_CA', 'SERVER_CA_MODE_GOOGLE_MANAGED_SHARED_CA', 'SERVER_CA_MODE_CUSTOMER_MANAGED_CAS_CA']
    - name: aclPolicy
      value: "{{ aclPolicy }}"
      description: |
        Optional. The ACL policy to be applied to the cluster.
    - name: nodeType
      value: "{{ nodeType }}"
      description: |
        Optional. The type of a redis node in the cluster. NodeType determines the underlying machine-type of a redis node.
      valid_values: ['NODE_TYPE_UNSPECIFIED', 'REDIS_SHARED_CORE_NANO', 'REDIS_HIGHMEM_MEDIUM', 'REDIS_HIGHMEM_XLARGE', 'REDIS_STANDARD_SMALL', 'REDIS_HIGHCPU_MEDIUM', 'REDIS_STANDARD_LARGE', 'REDIS_HIGHMEM_2XLARGE']
    - name: authorizationMode
      value: "{{ authorizationMode }}"
      description: |
        Optional. The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster.
      valid_values: ['AUTH_MODE_UNSPECIFIED', 'AUTH_MODE_IAM_AUTH', 'AUTH_MODE_DISABLED', 'AUTH_MODE_TOKEN_AUTH']
    - name: requestId
      value: "{{ requestId }}"
    - name: clusterId
      value: "{{ clusterId }}"
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

Updates the metadata and configuration of a specific Redis cluster. Completed longrunning.Operation will contain the new cluster object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

```sql
UPDATE google.redis.clusters
SET 
data__name = '{{ name }}',
data__transitEncryptionMode = '{{ transitEncryptionMode }}',
data__kmsKey = '{{ kmsKey }}',
data__automatedBackupConfig = '{{ automatedBackupConfig }}',
data__labels = '{{ labels }}',
data__replicaCount = {{ replicaCount }},
data__persistenceConfig = '{{ persistenceConfig }}',
data__maintenancePolicy = '{{ maintenancePolicy }}',
data__redisConfigs = '{{ redisConfigs }}',
data__shardCount = {{ shardCount }},
data__simulateMaintenanceEvent = {{ simulateMaintenanceEvent }},
data__managedBackupSource = '{{ managedBackupSource }}',
data__serverCaPool = '{{ serverCaPool }}',
data__gcsSource = '{{ gcsSource }}',
data__asyncClusterEndpointsDeletionEnabled = {{ asyncClusterEndpointsDeletionEnabled }},
data__deletionProtectionEnabled = {{ deletionProtectionEnabled }},
data__maintenanceVersion = '{{ maintenanceVersion }}',
data__rotateServerCertificate = {{ rotateServerCertificate }},
data__clusterEndpoints = '{{ clusterEndpoints }}',
data__allowFewerZonesDeployment = {{ allowFewerZonesDeployment }},
data__zoneDistributionConfig = '{{ zoneDistributionConfig }}',
data__ondemandMaintenance = {{ ondemandMaintenance }},
data__pscConfigs = '{{ pscConfigs }}',
data__crossClusterReplicationConfig = '{{ crossClusterReplicationConfig }}',
data__serverCaMode = '{{ serverCaMode }}',
data__aclPolicy = '{{ aclPolicy }}',
data__nodeType = '{{ nodeType }}',
data__authorizationMode = '{{ authorizationMode }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND clustersId = '{{ clustersId }}' --required
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

Deletes a specific Redis cluster. Cluster stops serving and data is deleted.

```sql
DELETE FROM google.redis.clusters
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND clustersId = '{{ clustersId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reschedule_cluster_maintenance"
    values={[
        { label: 'reschedule_cluster_maintenance', value: 'reschedule_cluster_maintenance' },
        { label: 'backup', value: 'backup' }
    ]}
>
<TabItem value="reschedule_cluster_maintenance">

Reschedules upcoming maintenance event.

```sql
EXEC google.redis.clusters.reschedule_cluster_maintenance 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"rescheduleType": "{{ rescheduleType }}", 
"scheduleTime": "{{ scheduleTime }}"
}'
;
```
</TabItem>
<TabItem value="backup">

Backup Redis Cluster. If this is the first time a backup is being created, a backup collection will be created at the backend, and this backup belongs to this collection. Both collection and backup will have a resource name. Backup will be executed for each shard. A replica (primary if nonHA) will be selected to perform the execution. Backup call will be rejected if there is an ongoing backup or update operation. Be aware that during preview, if the cluster's internal software version is too old, critical update will be performed before actual backup. Once the internal software version is updated to the minimum version required by the backup feature, subsequent backups will not require critical update. After preview, there will be no critical update needed for backup.

```sql
EXEC google.redis.clusters.backup 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"backupId": "{{ backupId }}", 
"ttl": "{{ ttl }}"
}'
;
```
</TabItem>
</Tabs>
