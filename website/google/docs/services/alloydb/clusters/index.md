--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
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

Creates, updates, deletes, gets or lists a <code>clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.alloydb.clusters" /></td></tr>
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
    <td>Output only. The name of the cluster resource with the format: * projects/&#123;project&#125;/locations/&#123;region&#125;/clusters/&#123;cluster_id&#125; where the cluster ID segment should satisfy the regex expression `[a-z0-9-]+`. For more details see https://google.aip.dev/122. The prefix of the cluster resource name is the name of the parent resource: * projects/&#123;project&#125;/locations/&#123;region&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128</td>
</tr>
<tr>
    <td><CopyableCode code="automatedBackupPolicy" /></td>
    <td><code>object</code></td>
    <td>The automated backup policy for this cluster. If no policy is provided then the default policy will be used. If backups are supported for the cluster, the default policy takes one backup a day, has a backup window of 1 hour, and retains backups for 14 days. For more information on the defaults, consult the documentation for the message type. (id: AutomatedBackupPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="backupSource" /></td>
    <td><code>object</code></td>
    <td>Output only. Cluster created from backup. (id: BackupSource)</td>
</tr>
<tr>
    <td><CopyableCode code="backupdrBackupSource" /></td>
    <td><code>object</code></td>
    <td>Output only. Cluster created from a BackupDR backup. (id: BackupDrBackupSource)</td>
</tr>
<tr>
    <td><CopyableCode code="backupdrInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Output only information about BackupDR protection for this cluster. (id: BackupDrInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="cloudsqlBackupRunSource" /></td>
    <td><code>object</code></td>
    <td>Output only. Cluster created from CloudSQL snapshot. (id: CloudSQLBackupRunSource)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterType" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of the cluster. This is an output-only field and it's populated at the Cluster creation time or the Cluster promotion time. The cluster type is determined by which RPC was used to create the cluster (i.e. `CreateCluster` vs. `CreateSecondaryCluster` (CLUSTER_TYPE_UNSPECIFIED, PRIMARY, SECONDARY)</td>
</tr>
<tr>
    <td><CopyableCode code="continuousBackupConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Continuous backup configuration for this cluster. (id: ContinuousBackupConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="continuousBackupInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Continuous backup properties for this cluster. (id: ContinuousBackupInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="databaseVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. The database engine major version. This is an optional field and it is populated at the Cluster creation time. If a database version is not supplied at cluster creation time, then a default database version will be used. (DATABASE_VERSION_UNSPECIFIED, POSTGRES_13, POSTGRES_14, POSTGRES_15, POSTGRES_16, POSTGRES_17, POSTGRES_18)</td>
</tr>
<tr>
    <td><CopyableCode code="dataplexConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for Dataplex integration. (id: DataplexConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Delete time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User-settable and human-readable display name for the Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The encryption config can be specified to encrypt the data disks and other persistent data resources of a cluster with a customer-managed encryption key (CMEK). When this field is not specified, the cluster will then use default encryption scheme to protect the user data. (id: EncryptionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. The encryption information for the cluster. (id: EncryptionInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>For Resource freshness validation (https://google.aip.dev/154)</td>
</tr>
<tr>
    <td><CopyableCode code="initialUser" /></td>
    <td><code>object</code></td>
    <td>Input only. Initial user to setup during cluster creation. Required. If used in `RestoreCluster` this is ignored. (id: UserPassword)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels as key value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceSchedule" /></td>
    <td><code>object</code></td>
    <td>Output only. The maintenance schedule for the cluster, generated for a specific rollout if a maintenance window is set. (id: MaintenanceSchedule)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceUpdatePolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. The maintenance update policy determines when to allow or deny updates. (id: MaintenanceUpdatePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceVersionSelectionPolicy" /></td>
    <td><code>string</code></td>
    <td>Input only. Policy to use to automatically select the maintenance version to which to update the cluster's instances. (MAINTENANCE_VERSION_SELECTION_POLICY_UNSPECIFIED, MAINTENANCE_VERSION_SELECTION_POLICY_LATEST, MAINTENANCE_VERSION_SELECTION_POLICY_DEFAULT)</td>
</tr>
<tr>
    <td><CopyableCode code="migrationSource" /></td>
    <td><code>object</code></td>
    <td>Output only. Cluster created via DMS migration. (id: MigrationSource)</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Required. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster. It is specified in the form: `projects/&#123;project&#125;/global/networks/&#123;network_id&#125;`. This is required to create a cluster. Deprecated, use network_config.network instead.</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfig" /></td>
    <td><code>object</code></td>
    <td>Metadata related to network configuration. (id: NetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="primaryConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. Cross Region replication config specific to PRIMARY cluster. (id: PrimaryConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="pscConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The configuration for Private Service Connect (PSC) for the cluster. (id: PscConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reconciling (https://google.aip.dev/128#reconciliation). Set to true if the current state of Cluster does not match the user's intended state, and the service is actively updating the resource to reconcile them. This can happen due to user-triggered updates or system actions like failover or maintenance.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="secondaryConfig" /></td>
    <td><code>object</code></td>
    <td>Cross Region replication config specific to SECONDARY cluster. (id: SecondaryConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="sslConfig" /></td>
    <td><code>object</code></td>
    <td>SSL configuration for this AlloyDB cluster. (id: SslConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current serving state of the cluster. (STATE_UNSPECIFIED, READY, STOPPED, EMPTY, CREATING, DELETING, FAILED, BOOTSTRAPPING, MAINTENANCE, PROMOTING, SWITCHOVER)</td>
</tr>
<tr>
    <td><CopyableCode code="subscriptionType" /></td>
    <td><code>string</code></td>
    <td>Optional. Subscription type of the cluster. (SUBSCRIPTION_TYPE_UNSPECIFIED, STANDARD, TRIAL)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: ``` "123/environment": "production", "123/costCenter": "marketing" ```</td>
</tr>
<tr>
    <td><CopyableCode code="trialMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Metadata for free trial clusters (id: TrialMetadata)</td>
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
    <td>Output only. The name of the cluster resource with the format: * projects/&#123;project&#125;/locations/&#123;region&#125;/clusters/&#123;cluster_id&#125; where the cluster ID segment should satisfy the regex expression `[a-z0-9-]+`. For more details see https://google.aip.dev/122. The prefix of the cluster resource name is the name of the parent resource: * projects/&#123;project&#125;/locations/&#123;region&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128</td>
</tr>
<tr>
    <td><CopyableCode code="automatedBackupPolicy" /></td>
    <td><code>object</code></td>
    <td>The automated backup policy for this cluster. If no policy is provided then the default policy will be used. If backups are supported for the cluster, the default policy takes one backup a day, has a backup window of 1 hour, and retains backups for 14 days. For more information on the defaults, consult the documentation for the message type. (id: AutomatedBackupPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="backupSource" /></td>
    <td><code>object</code></td>
    <td>Output only. Cluster created from backup. (id: BackupSource)</td>
</tr>
<tr>
    <td><CopyableCode code="backupdrBackupSource" /></td>
    <td><code>object</code></td>
    <td>Output only. Cluster created from a BackupDR backup. (id: BackupDrBackupSource)</td>
</tr>
<tr>
    <td><CopyableCode code="backupdrInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Output only information about BackupDR protection for this cluster. (id: BackupDrInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="cloudsqlBackupRunSource" /></td>
    <td><code>object</code></td>
    <td>Output only. Cluster created from CloudSQL snapshot. (id: CloudSQLBackupRunSource)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterType" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of the cluster. This is an output-only field and it's populated at the Cluster creation time or the Cluster promotion time. The cluster type is determined by which RPC was used to create the cluster (i.e. `CreateCluster` vs. `CreateSecondaryCluster` (CLUSTER_TYPE_UNSPECIFIED, PRIMARY, SECONDARY)</td>
</tr>
<tr>
    <td><CopyableCode code="continuousBackupConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Continuous backup configuration for this cluster. (id: ContinuousBackupConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="continuousBackupInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. Continuous backup properties for this cluster. (id: ContinuousBackupInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="databaseVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. The database engine major version. This is an optional field and it is populated at the Cluster creation time. If a database version is not supplied at cluster creation time, then a default database version will be used. (DATABASE_VERSION_UNSPECIFIED, POSTGRES_13, POSTGRES_14, POSTGRES_15, POSTGRES_16, POSTGRES_17, POSTGRES_18)</td>
</tr>
<tr>
    <td><CopyableCode code="dataplexConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for Dataplex integration. (id: DataplexConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Delete time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User-settable and human-readable display name for the Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The encryption config can be specified to encrypt the data disks and other persistent data resources of a cluster with a customer-managed encryption key (CMEK). When this field is not specified, the cluster will then use default encryption scheme to protect the user data. (id: EncryptionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. The encryption information for the cluster. (id: EncryptionInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>For Resource freshness validation (https://google.aip.dev/154)</td>
</tr>
<tr>
    <td><CopyableCode code="initialUser" /></td>
    <td><code>object</code></td>
    <td>Input only. Initial user to setup during cluster creation. Required. If used in `RestoreCluster` this is ignored. (id: UserPassword)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels as key value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceSchedule" /></td>
    <td><code>object</code></td>
    <td>Output only. The maintenance schedule for the cluster, generated for a specific rollout if a maintenance window is set. (id: MaintenanceSchedule)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceUpdatePolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. The maintenance update policy determines when to allow or deny updates. (id: MaintenanceUpdatePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceVersionSelectionPolicy" /></td>
    <td><code>string</code></td>
    <td>Input only. Policy to use to automatically select the maintenance version to which to update the cluster's instances. (MAINTENANCE_VERSION_SELECTION_POLICY_UNSPECIFIED, MAINTENANCE_VERSION_SELECTION_POLICY_LATEST, MAINTENANCE_VERSION_SELECTION_POLICY_DEFAULT)</td>
</tr>
<tr>
    <td><CopyableCode code="migrationSource" /></td>
    <td><code>object</code></td>
    <td>Output only. Cluster created via DMS migration. (id: MigrationSource)</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Required. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster. It is specified in the form: `projects/&#123;project&#125;/global/networks/&#123;network_id&#125;`. This is required to create a cluster. Deprecated, use network_config.network instead.</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfig" /></td>
    <td><code>object</code></td>
    <td>Metadata related to network configuration. (id: NetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="primaryConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. Cross Region replication config specific to PRIMARY cluster. (id: PrimaryConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="pscConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The configuration for Private Service Connect (PSC) for the cluster. (id: PscConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reconciling (https://google.aip.dev/128#reconciliation). Set to true if the current state of Cluster does not match the user's intended state, and the service is actively updating the resource to reconcile them. This can happen due to user-triggered updates or system actions like failover or maintenance.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="secondaryConfig" /></td>
    <td><code>object</code></td>
    <td>Cross Region replication config specific to SECONDARY cluster. (id: SecondaryConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="sslConfig" /></td>
    <td><code>object</code></td>
    <td>SSL configuration for this AlloyDB cluster. (id: SslConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current serving state of the cluster. (STATE_UNSPECIFIED, READY, STOPPED, EMPTY, CREATING, DELETING, FAILED, BOOTSTRAPPING, MAINTENANCE, PROMOTING, SWITCHOVER)</td>
</tr>
<tr>
    <td><CopyableCode code="subscriptionType" /></td>
    <td><code>string</code></td>
    <td>Optional. Subscription type of the cluster. (SUBSCRIPTION_TYPE_UNSPECIFIED, STANDARD, TRIAL)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: ``` "123/environment": "production", "123/costCenter": "marketing" ```</td>
</tr>
<tr>
    <td><CopyableCode code="trialMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Metadata for free trial clusters (id: TrialMetadata)</td>
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
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Gets details of a single Cluster.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Clusters in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a new Cluster in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single Cluster.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-force"><code>force</code></a>, <a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a single Cluster.</td>
</tr>
<tr>
    <td><a href="#import"><CopyableCode code="import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Imports data to the cluster. Imperative only.</td>
</tr>
<tr>
    <td><a href="#restore"><CopyableCode code="restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster.</td>
</tr>
<tr>
    <td><a href="#export"><CopyableCode code="export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Exports data from the cluster. Imperative only.</td>
</tr>
<tr>
    <td><a href="#upgrade"><CopyableCode code="upgrade" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Upgrades a single Cluster. Imperative only.</td>
</tr>
<tr>
    <td><a href="#restore_from_cloud_sql"><CopyableCode code="restore_from_cloud_sql" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Restores an AlloyDB cluster from a CloudSQL resource.</td>
</tr>
<tr>
    <td><a href="#promote"><CopyableCode code="promote" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Promotes a SECONDARY cluster. This turns down replication from the PRIMARY cluster and promotes a secondary cluster into its own standalone cluster. Imperative only.</td>
</tr>
<tr>
    <td><a href="#switchover"><CopyableCode code="switchover" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Switches the roles of PRIMARY and SECONDARY clusters without any data loss. This promotes the SECONDARY cluster to PRIMARY and sets up the original PRIMARY cluster to replicate from this newly promoted cluster.</td>
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
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-clusterId">
    <td><CopyableCode code="clusterId" /></td>
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

Gets details of a single Cluster.

```sql
SELECT
name,
annotations,
automatedBackupPolicy,
backupSource,
backupdrBackupSource,
backupdrInfo,
cloudsqlBackupRunSource,
clusterType,
continuousBackupConfig,
continuousBackupInfo,
createTime,
databaseVersion,
dataplexConfig,
deleteTime,
displayName,
encryptionConfig,
encryptionInfo,
etag,
initialUser,
labels,
maintenanceSchedule,
maintenanceUpdatePolicy,
maintenanceVersionSelectionPolicy,
migrationSource,
network,
networkConfig,
primaryConfig,
pscConfig,
reconciling,
satisfiesPzs,
secondaryConfig,
sslConfig,
state,
subscriptionType,
tags,
trialMetadata,
uid,
updateTime
FROM google.alloydb.clusters
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND clustersId = '{{ clustersId }}' -- required
AND view = '{{ view }}'
;
```
</TabItem>
<TabItem value="list">

Lists Clusters in a given project and location.

```sql
SELECT
name,
annotations,
automatedBackupPolicy,
backupSource,
backupdrBackupSource,
backupdrInfo,
cloudsqlBackupRunSource,
clusterType,
continuousBackupConfig,
continuousBackupInfo,
createTime,
databaseVersion,
dataplexConfig,
deleteTime,
displayName,
encryptionConfig,
encryptionInfo,
etag,
initialUser,
labels,
maintenanceSchedule,
maintenanceUpdatePolicy,
maintenanceVersionSelectionPolicy,
migrationSource,
network,
networkConfig,
primaryConfig,
pscConfig,
reconciling,
satisfiesPzs,
secondaryConfig,
sslConfig,
state,
subscriptionType,
tags,
trialMetadata,
uid,
updateTime
FROM google.alloydb.clusters
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

Creates a new Cluster in a given project and location.

```sql
INSERT INTO google.alloydb.clusters (
data__continuousBackupConfig,
data__databaseVersion,
data__annotations,
data__displayName,
data__maintenanceUpdatePolicy,
data__encryptionConfig,
data__network,
data__dataplexConfig,
data__sslConfig,
data__networkConfig,
data__tags,
data__labels,
data__secondaryConfig,
data__initialUser,
data__maintenanceVersionSelectionPolicy,
data__etag,
data__subscriptionType,
data__pscConfig,
data__automatedBackupPolicy,
projectsId,
locationsId,
clusterId,
requestId,
validateOnly
)
SELECT 
'{{ continuousBackupConfig }}',
'{{ databaseVersion }}',
'{{ annotations }}',
'{{ displayName }}',
'{{ maintenanceUpdatePolicy }}',
'{{ encryptionConfig }}',
'{{ network }}',
'{{ dataplexConfig }}',
'{{ sslConfig }}',
'{{ networkConfig }}',
'{{ tags }}',
'{{ labels }}',
'{{ secondaryConfig }}',
'{{ initialUser }}',
'{{ maintenanceVersionSelectionPolicy }}',
'{{ etag }}',
'{{ subscriptionType }}',
'{{ pscConfig }}',
'{{ automatedBackupPolicy }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ clusterId }}',
'{{ requestId }}',
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
- name: clusters
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the clusters resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the clusters resource.
    - name: continuousBackupConfig
      description: |
        Optional. Continuous backup configuration for this cluster.
      value:
        enabled: {{ enabled }}
        encryptionConfig:
          kmsKeyName: "{{ kmsKeyName }}"
        recoveryWindowDays: {{ recoveryWindowDays }}
    - name: databaseVersion
      value: "{{ databaseVersion }}"
      description: |
        Optional. The database engine major version. This is an optional field and it is populated at the Cluster creation time. If a database version is not supplied at cluster creation time, then a default database version will be used.
      valid_values: ['DATABASE_VERSION_UNSPECIFIED', 'POSTGRES_13', 'POSTGRES_14', 'POSTGRES_15', 'POSTGRES_16', 'POSTGRES_17', 'POSTGRES_18']
    - name: annotations
      value: "{{ annotations }}"
      description: |
        Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128
    - name: displayName
      value: "{{ displayName }}"
      description: |
        User-settable and human-readable display name for the Cluster.
    - name: maintenanceUpdatePolicy
      description: |
        Optional. The maintenance update policy determines when to allow or deny updates.
      value:
        maintenanceWindows:
          - day: "{{ day }}"
            startTime:
              minutes: {{ minutes }}
              seconds: {{ seconds }}
              hours: {{ hours }}
              nanos: {{ nanos }}
        denyMaintenancePeriods:
          - time:
              minutes: {{ minutes }}
              seconds: {{ seconds }}
              hours: {{ hours }}
              nanos: {{ nanos }}
            startDate:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            endDate:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
    - name: encryptionConfig
      description: |
        Optional. The encryption config can be specified to encrypt the data disks and other persistent data resources of a cluster with a customer-managed encryption key (CMEK). When this field is not specified, the cluster will then use default encryption scheme to protect the user data.
      value:
        kmsKeyName: "{{ kmsKeyName }}"
    - name: network
      value: "{{ network }}"
      description: |
        Required. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster. It is specified in the form: \`projects/{project}/global/networks/{network_id}\`. This is required to create a cluster. Deprecated, use network_config.network instead.
    - name: dataplexConfig
      description: |
        Optional. Configuration for Dataplex integration.
      value:
        enabled: {{ enabled }}
    - name: sslConfig
      description: |
        SSL configuration for this AlloyDB cluster.
      value:
        sslMode: "{{ sslMode }}"
        caSource: "{{ caSource }}"
    - name: networkConfig
      description: |
        Metadata related to network configuration.
      value:
        allocatedIpRange: "{{ allocatedIpRange }}"
        network: "{{ network }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: \`\`\` "123/environment": "production", "123/costCenter": "marketing" \`\`\`
    - name: labels
      value: "{{ labels }}"
      description: |
        Labels as key value pairs
    - name: secondaryConfig
      description: |
        Cross Region replication config specific to SECONDARY cluster.
      value:
        primaryClusterName: "{{ primaryClusterName }}"
    - name: initialUser
      description: |
        Input only. Initial user to setup during cluster creation. Required. If used in \`RestoreCluster\` this is ignored.
      value:
        user: "{{ user }}"
        password: "{{ password }}"
    - name: maintenanceVersionSelectionPolicy
      value: "{{ maintenanceVersionSelectionPolicy }}"
      description: |
        Input only. Policy to use to automatically select the maintenance version to which to update the cluster's instances.
      valid_values: ['MAINTENANCE_VERSION_SELECTION_POLICY_UNSPECIFIED', 'MAINTENANCE_VERSION_SELECTION_POLICY_LATEST', 'MAINTENANCE_VERSION_SELECTION_POLICY_DEFAULT']
    - name: etag
      value: "{{ etag }}"
      description: |
        For Resource freshness validation (https://google.aip.dev/154)
    - name: subscriptionType
      value: "{{ subscriptionType }}"
      description: |
        Optional. Subscription type of the cluster.
      valid_values: ['SUBSCRIPTION_TYPE_UNSPECIFIED', 'STANDARD', 'TRIAL']
    - name: pscConfig
      description: |
        Optional. The configuration for Private Service Connect (PSC) for the cluster.
      value:
        pscEnabled: {{ pscEnabled }}
        serviceOwnedProjectNumber: "{{ serviceOwnedProjectNumber }}"
    - name: automatedBackupPolicy
      description: |
        The automated backup policy for this cluster. If no policy is provided then the default policy will be used. If backups are supported for the cluster, the default policy takes one backup a day, has a backup window of 1 hour, and retains backups for 14 days. For more information on the defaults, consult the documentation for the message type.
      value:
        labels: "{{ labels }}"
        encryptionConfig:
          kmsKeyName: "{{ kmsKeyName }}"
        timeBasedRetention:
          retentionPeriod: "{{ retentionPeriod }}"
        backupWindow: "{{ backupWindow }}"
        weeklySchedule:
          startTimes:
            - minutes: {{ minutes }}
              seconds: {{ seconds }}
              hours: {{ hours }}
              nanos: {{ nanos }}
          daysOfWeek:
            - "{{ daysOfWeek }}"
        enabled: {{ enabled }}
        quantityBasedRetention:
          count: {{ count }}
        location: "{{ location }}"
    - name: clusterId
      value: "{{ clusterId }}"
    - name: requestId
      value: "{{ requestId }}"
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

Updates the parameters of a single Cluster.

```sql
UPDATE google.alloydb.clusters
SET 
data__continuousBackupConfig = '{{ continuousBackupConfig }}',
data__databaseVersion = '{{ databaseVersion }}',
data__annotations = '{{ annotations }}',
data__displayName = '{{ displayName }}',
data__maintenanceUpdatePolicy = '{{ maintenanceUpdatePolicy }}',
data__encryptionConfig = '{{ encryptionConfig }}',
data__network = '{{ network }}',
data__dataplexConfig = '{{ dataplexConfig }}',
data__sslConfig = '{{ sslConfig }}',
data__networkConfig = '{{ networkConfig }}',
data__tags = '{{ tags }}',
data__labels = '{{ labels }}',
data__secondaryConfig = '{{ secondaryConfig }}',
data__initialUser = '{{ initialUser }}',
data__maintenanceVersionSelectionPolicy = '{{ maintenanceVersionSelectionPolicy }}',
data__etag = '{{ etag }}',
data__subscriptionType = '{{ subscriptionType }}',
data__pscConfig = '{{ pscConfig }}',
data__automatedBackupPolicy = '{{ automatedBackupPolicy }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND clustersId = '{{ clustersId }}' --required
AND requestId = '{{ requestId}}'
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

Deletes a single Cluster.

```sql
DELETE FROM google.alloydb.clusters
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND clustersId = '{{ clustersId }}' --required
AND requestId = '{{ requestId }}'
AND validateOnly = '{{ validateOnly }}'
AND force = '{{ force }}'
AND etag = '{{ etag }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="import"
    values={[
        { label: 'import', value: 'import' },
        { label: 'restore', value: 'restore' },
        { label: 'export', value: 'export' },
        { label: 'upgrade', value: 'upgrade' },
        { label: 'restore_from_cloud_sql', value: 'restore_from_cloud_sql' },
        { label: 'promote', value: 'promote' },
        { label: 'switchover', value: 'switchover' }
    ]}
>
<TabItem value="import">

Imports data to the cluster. Imperative only.

```sql
EXEC google.alloydb.clusters.import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"database": "{{ database }}", 
"gcsUri": "{{ gcsUri }}", 
"user": "{{ user }}", 
"sqlImportOptions": "{{ sqlImportOptions }}", 
"csvImportOptions": "{{ csvImportOptions }}"
}'
;
```
</TabItem>
<TabItem value="restore">

Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster.

```sql
EXEC google.alloydb.clusters.restore 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"clusterId": "{{ clusterId }}", 
"backupSource": "{{ backupSource }}", 
"cluster": "{{ cluster }}", 
"continuousBackupSource": "{{ continuousBackupSource }}", 
"backupdrBackupSource": "{{ backupdrBackupSource }}", 
"requestId": "{{ requestId }}", 
"validateOnly": {{ validateOnly }}, 
"backupdrPitrSource": "{{ backupdrPitrSource }}"
}'
;
```
</TabItem>
<TabItem value="export">

Exports data from the cluster. Imperative only.

```sql
EXEC google.alloydb.clusters.export 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"csvExportOptions": "{{ csvExportOptions }}", 
"sqlExportOptions": "{{ sqlExportOptions }}", 
"gcsDestination": "{{ gcsDestination }}", 
"database": "{{ database }}"
}'
;
```
</TabItem>
<TabItem value="upgrade">

Upgrades a single Cluster. Imperative only.

```sql
EXEC google.alloydb.clusters.upgrade 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}", 
"validateOnly": {{ validateOnly }}, 
"etag": "{{ etag }}", 
"version": "{{ version }}"
}'
;
```
</TabItem>
<TabItem value="restore_from_cloud_sql">

Restores an AlloyDB cluster from a CloudSQL resource.

```sql
EXEC google.alloydb.clusters.restore_from_cloud_sql 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"clusterId": "{{ clusterId }}", 
"cloudsqlBackupRunSource": "{{ cloudsqlBackupRunSource }}", 
"cluster": "{{ cluster }}"
}'
;
```
</TabItem>
<TabItem value="promote">

Promotes a SECONDARY cluster. This turns down replication from the PRIMARY cluster and promotes a secondary cluster into its own standalone cluster. Imperative only.

```sql
EXEC google.alloydb.clusters.promote 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}", 
"etag": "{{ etag }}", 
"validateOnly": {{ validateOnly }}
}'
;
```
</TabItem>
<TabItem value="switchover">

Switches the roles of PRIMARY and SECONDARY clusters without any data loss. This promotes the SECONDARY cluster to PRIMARY and sets up the original PRIMARY cluster to replicate from this newly promoted cluster.

```sql
EXEC google.alloydb.clusters.switchover 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}", 
"validateOnly": {{ validateOnly }}
}'
;
```
</TabItem>
</Tabs>
