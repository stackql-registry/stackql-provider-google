--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
  - sqladmin
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.sqladmin.instances" /></td></tr>
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
    <td>Name of the Cloud SQL instance. This does not include the project ID.</td>
</tr>
<tr>
    <td><CopyableCode code="availableMaintenanceVersions" /></td>
    <td><code>array</code></td>
    <td>Output only. List all maintenance versions applicable on the instance</td>
</tr>
<tr>
    <td><CopyableCode code="backendType" /></td>
    <td><code>string</code></td>
    <td>The backend type. `SECOND_GEN`: Cloud SQL database instance. `EXTERNAL`: A database server that is not managed by Google. This property is read-only; use the `tier` property in the `settings` object to determine the database type. (SQL_BACKEND_TYPE_UNSPECIFIED, FIRST_GEN, SECOND_GEN, EXTERNAL)</td>
</tr>
<tr>
    <td><CopyableCode code="connectionName" /></td>
    <td><code>string</code></td>
    <td>Connection name of the Cloud SQL instance used in connection strings.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the instance was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.</td>
</tr>
<tr>
    <td><CopyableCode code="currentDiskSize" /></td>
    <td><code>string (int64)</code></td>
    <td>The current disk usage of the instance in bytes. This property has been deprecated. Use the "cloudsql.googleapis.com/database/disk/bytes_used" metric in Cloud Monitoring API instead. Please see [this announcement](https://groups.google.com/d/msg/google-cloud-sql-announce/I_7-F9EBhT0/BtvFtdFeAgAJ) for details.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseInstalledVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. Stores the current database version running on the instance including minor version such as `MYSQL_8_0_18`.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseVersion" /></td>
    <td><code>string</code></td>
    <td>The database engine type and version. The `databaseVersion` field cannot be changed after instance creation. (SQL_DATABASE_VERSION_UNSPECIFIED, MYSQL_5_1, MYSQL_5_5, MYSQL_5_6, MYSQL_5_7, MYSQL_8_0, MYSQL_8_0_18, MYSQL_8_0_26, MYSQL_8_0_27, MYSQL_8_0_28, MYSQL_8_0_29, MYSQL_8_0_30, MYSQL_8_0_31, MYSQL_8_0_32, MYSQL_8_0_33, MYSQL_8_0_34, MYSQL_8_0_35, MYSQL_8_0_36, MYSQL_8_0_37, MYSQL_8_0_39, MYSQL_8_0_40, MYSQL_8_0_41, MYSQL_8_0_42, MYSQL_8_0_43, MYSQL_8_0_44, MYSQL_8_0_45, MYSQL_8_0_46, MYSQL_8_4, MYSQL_9_7, SQLSERVER_2017_STANDARD, SQLSERVER_2017_ENTERPRISE, SQLSERVER_2017_EXPRESS, SQLSERVER_2017_WEB, POSTGRES_9_6, POSTGRES_10, POSTGRES_11, POSTGRES_12, POSTGRES_13, POSTGRES_14, POSTGRES_15, POSTGRES_16, POSTGRES_17, POSTGRES_18, POSTGRES_19, POSTGRES_20, SQLSERVER_2019_STANDARD, SQLSERVER_2019_ENTERPRISE, SQLSERVER_2019_EXPRESS, SQLSERVER_2019_WEB, SQLSERVER_2022_STANDARD, SQLSERVER_2022_ENTERPRISE, SQLSERVER_2022_EXPRESS, SQLSERVER_2022_WEB, SQLSERVER_2025_STANDARD, SQLSERVER_2025_ENTERPRISE, SQLSERVER_2025_EXPRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="diskEncryptionConfiguration" /></td>
    <td><code>object</code></td>
    <td>Disk encryption configuration specific to an instance. (id: DiskEncryptionConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="diskEncryptionStatus" /></td>
    <td><code>object</code></td>
    <td>Disk encryption status specific to an instance. (id: DiskEncryptionStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="dnsName" /></td>
    <td><code>string</code></td>
    <td>Output only. The dns name of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="dnsNames" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of DNS names used by this instance.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This field is deprecated and will be removed from a future version of the API. Use the `settings.settingsVersion` field instead.</td>
</tr>
<tr>
    <td><CopyableCode code="failoverReplica" /></td>
    <td><code>object</code></td>
    <td>The name and status of the failover replica.</td>
</tr>
<tr>
    <td><CopyableCode code="gceZone" /></td>
    <td><code>string</code></td>
    <td>The Compute Engine zone that the instance is currently serving from. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary zone. WARNING: Changing this might restart the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="geminiConfig" /></td>
    <td><code>object</code></td>
    <td>Gemini instance configuration. (id: GeminiInstanceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="includeReplicasForMajorVersionUpgrade" /></td>
    <td><code>boolean</code></td>
    <td>Input only. Determines whether an in-place major version upgrade of replicas happens when an in-place major version upgrade of a primary instance is initiated.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceType" /></td>
    <td><code>string</code></td>
    <td>The instance type. (SQL_INSTANCE_TYPE_UNSPECIFIED, CLOUD_SQL_INSTANCE, ON_PREMISES_INSTANCE, READ_REPLICA_INSTANCE, READ_POOL_INSTANCE)</td>
</tr>
<tr>
    <td><CopyableCode code="ipAddresses" /></td>
    <td><code>array</code></td>
    <td>The assigned IP addresses for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="ipv6Address" /></td>
    <td><code>string</code></td>
    <td>The IPv6 address assigned to the instance. (Deprecated) This property was applicable only to First Generation instances.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always `sql#instance`.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceVersion" /></td>
    <td><code>string</code></td>
    <td>The current software version on the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="masterInstanceName" /></td>
    <td><code>string</code></td>
    <td>The name of the instance which will act as primary in the replication setup.</td>
</tr>
<tr>
    <td><CopyableCode code="maxDiskSize" /></td>
    <td><code>string (int64)</code></td>
    <td>The maximum disk size of the instance in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of read pool nodes in a read pool.</td>
</tr>
<tr>
    <td><CopyableCode code="nodes" /></td>
    <td><code>array</code></td>
    <td>Output only. Entries containing information about each read pool node of the read pool.</td>
</tr>
<tr>
    <td><CopyableCode code="onPremisesConfiguration" /></td>
    <td><code>object</code></td>
    <td>Configuration specific to on-premises instances. (id: OnPremisesConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="outOfDiskReport" /></td>
    <td><code>object</code></td>
    <td>This field represents the report generated by the proactive database wellness job for OutOfDisk issues. * Writers: * the proactive database wellness job for OOD. * Readers: * the proactive database wellness job (id: SqlOutOfDiskReport)</td>
</tr>
<tr>
    <td><CopyableCode code="primaryDnsName" /></td>
    <td><code>string</code></td>
    <td>Output only. DEPRECATED: please use write_endpoint instead.</td>
</tr>
<tr>
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td>The project ID of the project containing the Cloud SQL instance. The Google apps domain is prefixed if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="pscServiceAttachmentLink" /></td>
    <td><code>string</code></td>
    <td>Output only. The link to service attachment of PSC instance.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The geographical region of the Cloud SQL instance. It can be one of the [regions](https://cloud.google.com/sql/docs/mysql/locations#location-r) where Cloud SQL operates: For example, `asia-east1`, `europe-west1`, and `us-central1`. The default value is `us-central1`.</td>
</tr>
<tr>
    <td><CopyableCode code="replicaConfiguration" /></td>
    <td><code>object</code></td>
    <td>Configuration specific to failover replicas and read replicas. (id: ReplicaConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="replicaNames" /></td>
    <td><code>array</code></td>
    <td>The replicas of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="replicationCluster" /></td>
    <td><code>object</code></td>
    <td>Optional. A primary instance and disaster recovery (DR) replica pair. A DR replica is a cross-region replica that you designate for failover in the event that the primary instance experiences regional failure. Applicable to MySQL and PostgreSQL. (id: ReplicationCluster)</td>
</tr>
<tr>
    <td><CopyableCode code="rootPassword" /></td>
    <td><code>string</code></td>
    <td>Initial root password. Use only on creation. You must set root passwords before you can connect to PostgreSQL instances.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. This status indicates whether the instance satisfies PZI. The status is reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>This status indicates whether the instance satisfies PZS. The status is reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduledMaintenance" /></td>
    <td><code>object</code></td>
    <td>The start time of any upcoming scheduled maintenance for this instance. (id: SqlScheduledMaintenance)</td>
</tr>
<tr>
    <td><CopyableCode code="secondaryGceZone" /></td>
    <td><code>string</code></td>
    <td>The Compute Engine zone that the failover instance is currently serving from for a regional instance. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary/failover zone.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>The URI of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="serverCaCert" /></td>
    <td><code>object</code></td>
    <td>SSL configuration. (id: SslCert)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccountEmailAddress" /></td>
    <td><code>string</code></td>
    <td>The service account email address assigned to the instance.\This property is read-only.</td>
</tr>
<tr>
    <td><CopyableCode code="settings" /></td>
    <td><code>object</code></td>
    <td>The user settings. (id: Settings)</td>
</tr>
<tr>
    <td><CopyableCode code="sqlNetworkArchitecture" /></td>
    <td><code>string</code></td>
    <td> (SQL_NETWORK_ARCHITECTURE_UNSPECIFIED, NEW_NETWORK_ARCHITECTURE, OLD_NETWORK_ARCHITECTURE)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current serving state of the Cloud SQL instance. (SQL_INSTANCE_STATE_UNSPECIFIED, RUNNABLE, SUSPENDED, PENDING_DELETE, PENDING_CREATE, MAINTENANCE, FAILED, ONLINE_MAINTENANCE, REPAIRING)</td>
</tr>
<tr>
    <td><CopyableCode code="suspensionReason" /></td>
    <td><code>array</code></td>
    <td>If the instance state is SUSPENDED, the reason for the suspension.</td>
</tr>
<tr>
    <td><CopyableCode code="switchTransactionLogsToCloudStorageEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Input only. Whether Cloud SQL is enabled to switch storing point-in-time recovery log files from a data disk to Cloud Storage.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. Immutable. Tag keys and tag values that are bound to this instance. You must represent each item in the map as: `"" : ""`. For example, a single resource can have the following tags: ``` "123/environment": "production", "123/costCenter": "marketing", ``` For more information on tag creation and management, see https://cloud.google.com/resource-manager/docs/tags/tags-overview.</td>
</tr>
<tr>
    <td><CopyableCode code="upgradableDatabaseVersions" /></td>
    <td><code>array</code></td>
    <td>Output only. All database versions that are available for upgrade.</td>
</tr>
<tr>
    <td><CopyableCode code="writeEndpoint" /></td>
    <td><code>string</code></td>
    <td>Output only. The dns name of the primary instance in a replication group.</td>
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
    <td><CopyableCode code="code" /></td>
    <td><code>string</code></td>
    <td>Code to uniquely identify the warning type. (SQL_API_WARNING_CODE_UNSPECIFIED, REGION_UNREACHABLE, MAX_RESULTS_EXCEEDS_LIMIT, COMPROMISED_CREDENTIALS, INTERNAL_STATE_FAILURE)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>The warning message.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The region name for REGION_UNREACHABLE warning.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Retrieves a resource containing information about a Cloud SQL instance.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists instances under a given project.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td></td>
    <td>Creates a new Cloud SQL instance.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td><a href="#parameter-reconcilePscNetworkingForce"><code>reconcilePscNetworkingForce</code></a>, <a href="#parameter-reconcilePscNetworking"><code>reconcilePscNetworking</code></a></td>
    <td>Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. This method supports patch semantics.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Updates settings of a Cloud SQL instance. Using this operation might cause your instance to restart.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td><a href="#parameter-finalBackupExpiryTime"><code>finalBackupExpiryTime</code></a>, <a href="#parameter-enableFinalBackup"><code>enableFinalBackup</code></a>, <a href="#parameter-finalBackupDescription"><code>finalBackupDescription</code></a>, <a href="#parameter-finalBackupTtlDays"><code>finalBackupTtlDays</code></a></td>
    <td>Deletes a Cloud SQL instance.</td>
</tr>
<tr>
    <td><a href="#start_external_sync"><CopyableCode code="start_external_sync" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Start External primary instance migration.</td>
</tr>
<tr>
    <td><a href="#verify_external_sync_settings"><CopyableCode code="verify_external_sync_settings" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Verify External primary instance external sync settings.</td>
</tr>
<tr>
    <td><a href="#perform_disk_shrink"><CopyableCode code="perform_disk_shrink" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Perform Disk Shrink on primary instance.</td>
</tr>
<tr>
    <td><a href="#reset_replica_size"><CopyableCode code="reset_replica_size" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Reset Replica Size to primary instance disk size.</td>
</tr>
<tr>
    <td><a href="#reschedule_maintenance"><CopyableCode code="reschedule_maintenance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Reschedules the maintenance on the given instance.</td>
</tr>
<tr>
    <td><a href="#clone"><CopyableCode code="clone" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Creates a Cloud SQL instance as a clone of the source instance. Using this operation might cause your instance to restart.</td>
</tr>
<tr>
    <td><a href="#execute_sql"><CopyableCode code="execute_sql" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Execute SQL statements.</td>
</tr>
<tr>
    <td><a href="#truncate_log"><CopyableCode code="truncate_log" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Truncate MySQL general and slow query log tables MySQL only.</td>
</tr>
<tr>
    <td><a href="#rotate_entra_id_certificate"><CopyableCode code="rotate_entra_id_certificate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Rotates the server certificate version to one previously added with the addEntraIdCertificate method.</td>
</tr>
<tr>
    <td><a href="#start_replica"><CopyableCode code="start_replica" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Starts the replication in the read replica instance.</td>
</tr>
<tr>
    <td><a href="#promote_replica"><CopyableCode code="promote_replica" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td><a href="#parameter-failover"><code>failover</code></a></td>
    <td>Promotes the read replica instance to be an independent Cloud SQL primary instance. Using this operation might cause your instance to restart.</td>
</tr>
<tr>
    <td><a href="#pre_check_major_version_upgrade"><CopyableCode code="pre_check_major_version_upgrade" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Execute MVU Pre-checks</td>
</tr>
<tr>
    <td><a href="#demote_master"><CopyableCode code="demote_master" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server.</td>
</tr>
<tr>
    <td><a href="#switchover"><CopyableCode code="switchover" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td><a href="#parameter-dbTimeout"><code>dbTimeout</code></a></td>
    <td>Switches over from the primary instance to the DR replica instance.</td>
</tr>
<tr>
    <td><a href="#restart"><CopyableCode code="restart" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Restarts a Cloud SQL instance.</td>
</tr>
<tr>
    <td><a href="#stop_replica"><CopyableCode code="stop_replica" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Stops the replication in the read replica instance.</td>
</tr>
<tr>
    <td><a href="#reset_ssl_config"><CopyableCode code="reset_ssl_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td><a href="#parameter-mode"><code>mode</code></a></td>
    <td>Deletes all client certificates and generates a new server SSL certificate for the instance.</td>
</tr>
<tr>
    <td><a href="#rotate_server_ca"><CopyableCode code="rotate_server_ca" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. For instances that have enabled Certificate Authority Service (CAS) based server CA, use RotateServerCertificate to rotate the server certificate.</td>
</tr>
<tr>
    <td><a href="#restore_backup"><CopyableCode code="restore_backup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Restores a backup of a Cloud SQL instance. Using this operation might cause your instance to restart.</td>
</tr>
<tr>
    <td><a href="#failover"><CopyableCode code="failover" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. Users are then rerouted to the new primary. For more information, see the [Overview of high availability](https://cloud.google.com/sql/docs/mysql/high-availability) page in the Cloud SQL documentation. If using Legacy HA (MySQL only), this causes the instance to failover to its failover replica instance.</td>
</tr>
<tr>
    <td><a href="#acquire_ssrs_lease"><CopyableCode code="acquire_ssrs_lease" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Acquire a lease for the setup of SQL Server Reporting Services (SSRS).</td>
</tr>
<tr>
    <td><a href="#demote"><CopyableCode code="demote" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server.</td>
</tr>
<tr>
    <td><a href="#release_ssrs_lease"><CopyableCode code="release_ssrs_lease" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Release a lease for the setup of SQL Server Reporting Services (SSRS).</td>
</tr>
<tr>
    <td><a href="#reencrypt"><CopyableCode code="reencrypt" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Reencrypt CMEK instance with latest key version.</td>
</tr>
<tr>
    <td><a href="#import"><CopyableCode code="import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage.</td>
</tr>
<tr>
    <td><a href="#list_server_certificates"><CopyableCode code="list_server_certificates" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Lists all versions of server certificates and certificate authorities (CAs) for the specified instance. There can be up to three sets of certs listed: the certificate that is currently in use, a future that has been added but not yet used to sign a certificate, and a certificate that has been rotated out. For instances not using Certificate Authority Service (CAS) server CA, use ListServerCas instead.</td>
</tr>
<tr>
    <td><a href="#list_entra_id_certificates"><CopyableCode code="list_entra_id_certificates" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Lists all versions of EntraID certificates for the specified instance. There can be up to three sets of certificates listed: the certificate that is currently in use, a future that has been added but not yet used to sign a certificate, and a certificate that has been rotated out.</td>
</tr>
<tr>
    <td><a href="#rotate_server_certificate"><CopyableCode code="rotate_server_certificate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Rotates the server certificate version to one previously added with the addServerCertificate method. For instances not using Certificate Authority Service (CAS) server CA, use RotateServerCa instead.</td>
</tr>
<tr>
    <td><a href="#export"><CopyableCode code="export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file.</td>
</tr>
<tr>
    <td><a href="#point_in_time_restore"><CopyableCode code="point_in_time_restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery.</td>
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
<tr id="parameter-instance">
    <td><CopyableCode code="instance" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-dbTimeout">
    <td><CopyableCode code="dbTimeout" /></td>
    <td><code>string (google-duration)</code></td>
    <td></td>
</tr>
<tr id="parameter-enableFinalBackup">
    <td><CopyableCode code="enableFinalBackup" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-failover">
    <td><CopyableCode code="failover" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-finalBackupDescription">
    <td><CopyableCode code="finalBackupDescription" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-finalBackupExpiryTime">
    <td><CopyableCode code="finalBackupExpiryTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr id="parameter-finalBackupTtlDays">
    <td><CopyableCode code="finalBackupTtlDays" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (uint32)</code></td>
    <td></td>
</tr>
<tr id="parameter-mode">
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-reconcilePscNetworking">
    <td><CopyableCode code="reconcilePscNetworking" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-reconcilePscNetworkingForce">
    <td><CopyableCode code="reconcilePscNetworkingForce" /></td>
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

Retrieves a resource containing information about a Cloud SQL instance.

```sql
SELECT
name,
availableMaintenanceVersions,
backendType,
connectionName,
createTime,
currentDiskSize,
databaseInstalledVersion,
databaseVersion,
diskEncryptionConfiguration,
diskEncryptionStatus,
dnsName,
dnsNames,
etag,
failoverReplica,
gceZone,
geminiConfig,
includeReplicasForMajorVersionUpgrade,
instanceType,
ipAddresses,
ipv6Address,
kind,
maintenanceVersion,
masterInstanceName,
maxDiskSize,
nodeCount,
nodes,
onPremisesConfiguration,
outOfDiskReport,
primaryDnsName,
project,
pscServiceAttachmentLink,
region,
replicaConfiguration,
replicaNames,
replicationCluster,
rootPassword,
satisfiesPzi,
satisfiesPzs,
scheduledMaintenance,
secondaryGceZone,
selfLink,
serverCaCert,
serviceAccountEmailAddress,
settings,
sqlNetworkArchitecture,
state,
suspensionReason,
switchTransactionLogsToCloudStorageEnabled,
tags,
upgradableDatabaseVersions,
writeEndpoint
FROM google.sqladmin.instances
WHERE project = '{{ project }}' -- required
AND instance = '{{ instance }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists instances under a given project.

```sql
SELECT
code,
message,
region
FROM google.sqladmin.instances
WHERE project = '{{ project }}' -- required
AND filter = '{{ filter }}'
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="insert"
    values={[
        { label: 'insert', value: 'insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert">

Creates a new Cloud SQL instance.

```sql
INSERT INTO google.sqladmin.instances (
data__satisfiesPzs,
data__currentDiskSize,
data__onPremisesConfiguration,
data__scheduledMaintenance,
data__diskEncryptionStatus,
data__serverCaCert,
data__failoverReplica,
data__serviceAccountEmailAddress,
data__project,
data__backendType,
data__includeReplicasForMajorVersionUpgrade,
data__state,
data__masterInstanceName,
data__replicationCluster,
data__replicaConfiguration,
data__rootPassword,
data__sqlNetworkArchitecture,
data__diskEncryptionConfiguration,
data__maxDiskSize,
data__secondaryGceZone,
data__databaseVersion,
data__ipv6Address,
data__tags,
data__maintenanceVersion,
data__etag,
data__nodeCount,
data__instanceType,
data__name,
data__selfLink,
data__kind,
data__connectionName,
data__outOfDiskReport,
data__gceZone,
data__region,
data__suspensionReason,
data__settings,
data__geminiConfig,
data__switchTransactionLogsToCloudStorageEnabled,
data__replicaNames,
data__ipAddresses,
project
)
SELECT 
{{ satisfiesPzs }},
'{{ currentDiskSize }}',
'{{ onPremisesConfiguration }}',
'{{ scheduledMaintenance }}',
'{{ diskEncryptionStatus }}',
'{{ serverCaCert }}',
'{{ failoverReplica }}',
'{{ serviceAccountEmailAddress }}',
'{{ project }}',
'{{ backendType }}',
{{ includeReplicasForMajorVersionUpgrade }},
'{{ state }}',
'{{ masterInstanceName }}',
'{{ replicationCluster }}',
'{{ replicaConfiguration }}',
'{{ rootPassword }}',
'{{ sqlNetworkArchitecture }}',
'{{ diskEncryptionConfiguration }}',
'{{ maxDiskSize }}',
'{{ secondaryGceZone }}',
'{{ databaseVersion }}',
'{{ ipv6Address }}',
'{{ tags }}',
'{{ maintenanceVersion }}',
'{{ etag }}',
{{ nodeCount }},
'{{ instanceType }}',
'{{ name }}',
'{{ selfLink }}',
'{{ kind }}',
'{{ connectionName }}',
'{{ outOfDiskReport }}',
'{{ gceZone }}',
'{{ region }}',
'{{ suspensionReason }}',
'{{ settings }}',
'{{ geminiConfig }}',
{{ switchTransactionLogsToCloudStorageEnabled }},
'{{ replicaNames }}',
'{{ ipAddresses }}',
'{{ project }}'
RETURNING
name,
acquireSsrsLeaseContext,
apiWarning,
backupContext,
endTime,
error,
exportContext,
importContext,
insertTime,
kind,
operationType,
preCheckMajorVersionUpgradeContext,
selfLink,
startTime,
status,
subOperationType,
targetId,
targetLink,
targetProject,
user
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: instances
  props:
    - name: project
      value: "{{ project }}"
      description: Required parameter for the instances resource.
    - name: satisfiesPzs
      value: {{ satisfiesPzs }}
      description: |
        This status indicates whether the instance satisfies PZS. The status is reserved for future use.
    - name: currentDiskSize
      value: "{{ currentDiskSize }}"
      description: |
        The current disk usage of the instance in bytes. This property has been deprecated. Use the "cloudsql.googleapis.com/database/disk/bytes_used" metric in Cloud Monitoring API instead. Please see [this announcement](https://groups.google.com/d/msg/google-cloud-sql-announce/I_7-F9EBhT0/BtvFtdFeAgAJ) for details.
    - name: onPremisesConfiguration
      description: |
        Configuration specific to on-premises instances.
      value:
        sourceInstance:
          region: "{{ region }}"
          project: "{{ project }}"
          name: "{{ name }}"
        clientKey: "{{ clientKey }}"
        clientCertificate: "{{ clientCertificate }}"
        sslOption: "{{ sslOption }}"
        selectedObjects:
          - database: "{{ database }}"
        kind: "{{ kind }}"
        caCertificate: "{{ caCertificate }}"
        dumpFilePath: "{{ dumpFilePath }}"
        hostPort: "{{ hostPort }}"
        password: "{{ password }}"
        username: "{{ username }}"
    - name: scheduledMaintenance
      description: |
        The start time of any upcoming scheduled maintenance for this instance.
      value:
        startTime: "{{ startTime }}"
        canReschedule: {{ canReschedule }}
        scheduleDeadlineTime: "{{ scheduleDeadlineTime }}"
        canDefer: {{ canDefer }}
    - name: diskEncryptionStatus
      description: |
        Disk encryption status specific to an instance.
      value:
        kind: "{{ kind }}"
        kmsKeyVersionName: "{{ kmsKeyVersionName }}"
    - name: serverCaCert
      description: |
        SSL configuration.
      value:
        commonName: "{{ commonName }}"
        expirationTime: "{{ expirationTime }}"
        instance: "{{ instance }}"
        sha1Fingerprint: "{{ sha1Fingerprint }}"
        kind: "{{ kind }}"
        certSerialNumber: "{{ certSerialNumber }}"
        cert: "{{ cert }}"
        createTime: "{{ createTime }}"
        selfLink: "{{ selfLink }}"
    - name: failoverReplica
      description: |
        The name and status of the failover replica.
      value:
        name: "{{ name }}"
        available: {{ available }}
    - name: serviceAccountEmailAddress
      value: "{{ serviceAccountEmailAddress }}"
      description: |
        The service account email address assigned to the instance.This property is read-only.
    - name: project
      value: "{{ project }}"
      description: |
        The project ID of the project containing the Cloud SQL instance. The Google apps domain is prefixed if applicable.
    - name: backendType
      value: "{{ backendType }}"
      description: |
        The backend type. \`SECOND_GEN\`: Cloud SQL database instance. \`EXTERNAL\`: A database server that is not managed by Google. This property is read-only; use the \`tier\` property in the \`settings\` object to determine the database type.
      valid_values: ['SQL_BACKEND_TYPE_UNSPECIFIED', 'FIRST_GEN', 'SECOND_GEN', 'EXTERNAL']
    - name: includeReplicasForMajorVersionUpgrade
      value: {{ includeReplicasForMajorVersionUpgrade }}
      description: |
        Input only. Determines whether an in-place major version upgrade of replicas happens when an in-place major version upgrade of a primary instance is initiated.
    - name: state
      value: "{{ state }}"
      description: |
        The current serving state of the Cloud SQL instance.
      valid_values: ['SQL_INSTANCE_STATE_UNSPECIFIED', 'RUNNABLE', 'SUSPENDED', 'PENDING_DELETE', 'PENDING_CREATE', 'MAINTENANCE', 'FAILED', 'ONLINE_MAINTENANCE', 'REPAIRING']
    - name: masterInstanceName
      value: "{{ masterInstanceName }}"
      description: |
        The name of the instance which will act as primary in the replication setup.
    - name: replicationCluster
      description: |
        Optional. A primary instance and disaster recovery (DR) replica pair. A DR replica is a cross-region replica that you designate for failover in the event that the primary instance experiences regional failure. Applicable to MySQL and PostgreSQL.
      value:
        failoverDrReplicaName: "{{ failoverDrReplicaName }}"
        drReplica: {{ drReplica }}
        psaWriteEndpoint: "{{ psaWriteEndpoint }}"
    - name: replicaConfiguration
      description: |
        Configuration specific to failover replicas and read replicas.
      value:
        cascadableReplica: {{ cascadableReplica }}
        kind: "{{ kind }}"
        mysqlReplicaConfiguration:
          connectRetryInterval: {{ connectRetryInterval }}
          username: "{{ username }}"
          sslCipher: "{{ sslCipher }}"
          password: "{{ password }}"
          dumpFilePath: "{{ dumpFilePath }}"
          verifyServerCertificate: {{ verifyServerCertificate }}
          caCertificate: "{{ caCertificate }}"
          kind: "{{ kind }}"
          masterHeartbeatPeriod: "{{ masterHeartbeatPeriod }}"
          clientCertificate: "{{ clientCertificate }}"
          clientKey: "{{ clientKey }}"
        failoverTarget: {{ failoverTarget }}
    - name: rootPassword
      value: "{{ rootPassword }}"
      description: |
        Initial root password. Use only on creation. You must set root passwords before you can connect to PostgreSQL instances.
    - name: sqlNetworkArchitecture
      value: "{{ sqlNetworkArchitecture }}"
      valid_values: ['SQL_NETWORK_ARCHITECTURE_UNSPECIFIED', 'NEW_NETWORK_ARCHITECTURE', 'OLD_NETWORK_ARCHITECTURE']
    - name: diskEncryptionConfiguration
      description: |
        Disk encryption configuration specific to an instance.
      value:
        kmsKeyName: "{{ kmsKeyName }}"
        kind: "{{ kind }}"
    - name: maxDiskSize
      value: "{{ maxDiskSize }}"
      description: |
        The maximum disk size of the instance in bytes.
    - name: secondaryGceZone
      value: "{{ secondaryGceZone }}"
      description: |
        The Compute Engine zone that the failover instance is currently serving from for a regional instance. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary/failover zone.
    - name: databaseVersion
      value: "{{ databaseVersion }}"
      description: |
        The database engine type and version. The \`databaseVersion\` field cannot be changed after instance creation.
      valid_values: ['SQL_DATABASE_VERSION_UNSPECIFIED', 'MYSQL_5_1', 'MYSQL_5_5', 'MYSQL_5_6', 'MYSQL_5_7', 'MYSQL_8_0', 'MYSQL_8_0_18', 'MYSQL_8_0_26', 'MYSQL_8_0_27', 'MYSQL_8_0_28', 'MYSQL_8_0_29', 'MYSQL_8_0_30', 'MYSQL_8_0_31', 'MYSQL_8_0_32', 'MYSQL_8_0_33', 'MYSQL_8_0_34', 'MYSQL_8_0_35', 'MYSQL_8_0_36', 'MYSQL_8_0_37', 'MYSQL_8_0_39', 'MYSQL_8_0_40', 'MYSQL_8_0_41', 'MYSQL_8_0_42', 'MYSQL_8_0_43', 'MYSQL_8_0_44', 'MYSQL_8_0_45', 'MYSQL_8_0_46', 'MYSQL_8_4', 'MYSQL_9_7', 'SQLSERVER_2017_STANDARD', 'SQLSERVER_2017_ENTERPRISE', 'SQLSERVER_2017_EXPRESS', 'SQLSERVER_2017_WEB', 'POSTGRES_9_6', 'POSTGRES_10', 'POSTGRES_11', 'POSTGRES_12', 'POSTGRES_13', 'POSTGRES_14', 'POSTGRES_15', 'POSTGRES_16', 'POSTGRES_17', 'POSTGRES_18', 'POSTGRES_19', 'POSTGRES_20', 'SQLSERVER_2019_STANDARD', 'SQLSERVER_2019_ENTERPRISE', 'SQLSERVER_2019_EXPRESS', 'SQLSERVER_2019_WEB', 'SQLSERVER_2022_STANDARD', 'SQLSERVER_2022_ENTERPRISE', 'SQLSERVER_2022_EXPRESS', 'SQLSERVER_2022_WEB', 'SQLSERVER_2025_STANDARD', 'SQLSERVER_2025_ENTERPRISE', 'SQLSERVER_2025_EXPRESS']
    - name: ipv6Address
      value: "{{ ipv6Address }}"
      description: |
        The IPv6 address assigned to the instance. (Deprecated) This property was applicable only to First Generation instances.
    - name: tags
      value: "{{ tags }}"
      description: |
        Optional. Input only. Immutable. Tag keys and tag values that are bound to this instance. You must represent each item in the map as: \`"" : ""\`. For example, a single resource can have the following tags: \`\`\` "123/environment": "production", "123/costCenter": "marketing", \`\`\` For more information on tag creation and management, see https://cloud.google.com/resource-manager/docs/tags/tags-overview.
    - name: maintenanceVersion
      value: "{{ maintenanceVersion }}"
      description: |
        The current software version on the instance.
    - name: etag
      value: "{{ etag }}"
      description: |
        This field is deprecated and will be removed from a future version of the API. Use the \`settings.settingsVersion\` field instead.
    - name: nodeCount
      value: {{ nodeCount }}
      description: |
        The number of read pool nodes in a read pool.
    - name: instanceType
      value: "{{ instanceType }}"
      description: |
        The instance type.
      valid_values: ['SQL_INSTANCE_TYPE_UNSPECIFIED', 'CLOUD_SQL_INSTANCE', 'ON_PREMISES_INSTANCE', 'READ_REPLICA_INSTANCE', 'READ_POOL_INSTANCE']
    - name: name
      value: "{{ name }}"
      description: |
        Name of the Cloud SQL instance. This does not include the project ID.
    - name: selfLink
      value: "{{ selfLink }}"
      description: |
        The URI of this resource.
    - name: kind
      value: "{{ kind }}"
      description: |
        This is always \`sql#instance\`.
    - name: connectionName
      value: "{{ connectionName }}"
      description: |
        Connection name of the Cloud SQL instance used in connection strings.
    - name: outOfDiskReport
      description: |
        This field represents the report generated by the proactive database wellness job for OutOfDisk issues. * Writers: * the proactive database wellness job for OOD. * Readers: * the proactive database wellness job
      value:
        sqlOutOfDiskState: "{{ sqlOutOfDiskState }}"
        sqlMinRecommendedIncreaseSizeGb: {{ sqlMinRecommendedIncreaseSizeGb }}
    - name: gceZone
      value: "{{ gceZone }}"
      description: |
        The Compute Engine zone that the instance is currently serving from. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary zone. WARNING: Changing this might restart the instance.
    - name: region
      value: "{{ region }}"
      description: |
        The geographical region of the Cloud SQL instance. It can be one of the [regions](https://cloud.google.com/sql/docs/mysql/locations#location-r) where Cloud SQL operates: For example, \`asia-east1\`, \`europe-west1\`, and \`us-central1\`. The default value is \`us-central1\`.
    - name: suspensionReason
      value:
        - "{{ suspensionReason }}"
      description: |
        If the instance state is SUSPENDED, the reason for the suspension.
    - name: settings
      description: |
        The user settings.
      value:
        tier: "{{ tier }}"
        replicationType: "{{ replicationType }}"
        autoUpgradeEnabled: {{ autoUpgradeEnabled }}
        databaseFlags:
          - value: "{{ value }}"
            name: "{{ name }}"
        crashSafeReplicationEnabled: {{ crashSafeReplicationEnabled }}
        availabilityType: "{{ availabilityType }}"
        connectionPoolConfig:
          connectionPoolingEnabled: {{ connectionPoolingEnabled }}
          flags:
            - value: "{{ value }}"
              name: "{{ name }}"
          poolerCount: {{ poolerCount }}
        authorizedGaeApplications:
          - "{{ authorizedGaeApplications }}"
        entraidConfig:
          kind: "{{ kind }}"
          tenantId: "{{ tenantId }}"
          applicationId: "{{ applicationId }}"
        collation: "{{ collation }}"
        replicationLagMaxSeconds: {{ replicationLagMaxSeconds }}
        userLabels: "{{ userLabels }}"
        ipConfiguration:
          allocatedIpRange: "{{ allocatedIpRange }}"
          serverCaMode: "{{ serverCaMode }}"
          ipv4Enabled: {{ ipv4Enabled }}
          enablePrivatePathForGoogleCloudServices: {{ enablePrivatePathForGoogleCloudServices }}
          serverCaPool: "{{ serverCaPool }}"
          pscConfig:
            pscAutoConnections:
              - status: "{{ status }}"
                consumerNetworkStatus: "{{ consumerNetworkStatus }}"
                consumerNetwork: "{{ consumerNetwork }}"
                consumerProject: "{{ consumerProject }}"
                serviceConnectionPolicyCreationResult: "{{ serviceConnectionPolicyCreationResult }}"
                ipAddress: "{{ ipAddress }}"
                serviceConnectionPolicy: "{{ serviceConnectionPolicy }}"
                instanceAutoDnsStatus: "{{ instanceAutoDnsStatus }}"
                writeEndpointAutoDnsStatus: "{{ writeEndpointAutoDnsStatus }}"
            pscAutoDnsEnabled: {{ pscAutoDnsEnabled }}
            pscWriteEndpointDnsEnabled: {{ pscWriteEndpointDnsEnabled }}
            pscEnabled: {{ pscEnabled }}
            networkAttachmentUri: "{{ networkAttachmentUri }}"
            pscAutoConnectionPolicyEnabled: {{ pscAutoConnectionPolicyEnabled }}
            allowedConsumerProjects:
              - "{{ allowedConsumerProjects }}"
          requireSsl: {{ requireSsl }}
          authorizedNetworks:
            - value: "{{ value }}"
              expirationTime: "{{ expirationTime }}"
              kind: "{{ kind }}"
              name: "{{ name }}"
          sslMode: "{{ sslMode }}"
          customSubjectAlternativeNames:
            - "{{ customSubjectAlternativeNames }}"
          serverCertificateRotationMode: "{{ serverCertificateRotationMode }}"
          privateNetwork: "{{ privateNetwork }}"
        readPoolAutoScaleConfig:
          enabled: {{ enabled }}
          maxNodeCount: {{ maxNodeCount }}
          targetMetrics:
            - metric: "{{ metric }}"
              targetValue: {{ targetValue }}
          minNodeCount: {{ minNodeCount }}
          scaleOutCooldownSeconds: {{ scaleOutCooldownSeconds }}
          scaleInCooldownSeconds: {{ scaleInCooldownSeconds }}
          disableScaleIn: {{ disableScaleIn }}
        storageAutoResize: {{ storageAutoResize }}
        sqlServerAuditConfig:
          uploadInterval: "{{ uploadInterval }}"
          kind: "{{ kind }}"
          bucket: "{{ bucket }}"
          retentionInterval: "{{ retentionInterval }}"
        performanceCaptureConfig:
          probeThreshold: {{ probeThreshold }}
          transactionKillExcludedUserHosts:
            - "{{ transactionKillExcludedUserHosts }}"
          transactionDurationThreshold: {{ transactionDurationThreshold }}
          transactionKillThresholdSeconds: {{ transactionKillThresholdSeconds }}
          secondsBehindSourceThreshold: {{ secondsBehindSourceThreshold }}
          historyListLengthThresholdCount: {{ historyListLengthThresholdCount }}
          runningThreadsThreshold: {{ runningThreadsThreshold }}
          memoryUsageThresholdPercent: {{ memoryUsageThresholdPercent }}
          transactionKillType: "{{ transactionKillType }}"
          cpuUtilizationThresholdPercent: {{ cpuUtilizationThresholdPercent }}
          enabled: {{ enabled }}
          probingIntervalSeconds: {{ probingIntervalSeconds }}
          semaphoreWaitThresholdCount: {{ semaphoreWaitThresholdCount }}
          transactionLockWaitThresholdCount: {{ transactionLockWaitThresholdCount }}
        activeDirectoryConfig:
          domain: "{{ domain }}"
          adminCredentialSecretName: "{{ adminCredentialSecretName }}"
          mode: "{{ mode }}"
          organizationalUnit: "{{ organizationalUnit }}"
          kind: "{{ kind }}"
          dnsServers:
            - "{{ dnsServers }}"
        denyMaintenancePeriods:
          - startDate: "{{ startDate }}"
            endDate: "{{ endDate }}"
            time: "{{ time }}"
        databaseReplicationEnabled: {{ databaseReplicationEnabled }}
        dataDiskProvisionedIops: "{{ dataDiskProvisionedIops }}"
        acceleratedReplicaMode: {{ acceleratedReplicaMode }}
        maintenanceWindow:
          kind: "{{ kind }}"
          updateTrack: "{{ updateTrack }}"
          hour: {{ hour }}
          day: {{ day }}
        backupConfiguration:
          transactionLogRetentionDays: {{ transactionLogRetentionDays }}
          enabled: {{ enabled }}
          location: "{{ location }}"
          transactionalLogStorageState: "{{ transactionalLogStorageState }}"
          binaryLogEnabled: {{ binaryLogEnabled }}
          startTime: "{{ startTime }}"
          replicationLogArchivingEnabled: {{ replicationLogArchivingEnabled }}
          backupRetentionSettings:
            retentionUnit: "{{ retentionUnit }}"
            retainedBackups: {{ retainedBackups }}
          backupTier: "{{ backupTier }}"
          kind: "{{ kind }}"
          pointInTimeRecoveryEnabled: {{ pointInTimeRecoveryEnabled }}
        kind: "{{ kind }}"
        activationPolicy: "{{ activationPolicy }}"
        dataDiskProvisionedThroughput: "{{ dataDiskProvisionedThroughput }}"
        settingsVersion: "{{ settingsVersion }}"
        dataDiskType: "{{ dataDiskType }}"
        retainBackupsOnDelete: {{ retainBackupsOnDelete }}
        timeZone: "{{ timeZone }}"
        insightsConfig:
          enhancedQueryInsightsEnabled: {{ enhancedQueryInsightsEnabled }}
          recordClientAddress: {{ recordClientAddress }}
          queryPlansPerMinute: {{ queryPlansPerMinute }}
          queryInsightsEnabled: {{ queryInsightsEnabled }}
          recordApplicationTags: {{ recordApplicationTags }}
          queryStringLength: {{ queryStringLength }}
        deletionProtectionEnabled: {{ deletionProtectionEnabled }}
        dataDiskSizeGb: "{{ dataDiskSizeGb }}"
        enableGoogleMlIntegration: {{ enableGoogleMlIntegration }}
        passwordValidationPolicy:
          passwordChangeInterval: "{{ passwordChangeInterval }}"
          enablePasswordPolicy: {{ enablePasswordPolicy }}
          reuseInterval: {{ reuseInterval }}
          disallowUsernameSubstring: {{ disallowUsernameSubstring }}
          minLength: {{ minLength }}
          disallowCompromisedCredentials: {{ disallowCompromisedCredentials }}
          complexity: "{{ complexity }}"
        storageAutoResizeLimit: "{{ storageAutoResizeLimit }}"
        finalBackupConfig:
          enabled: {{ enabled }}
          retentionDays: {{ retentionDays }}
        connectorEnforcement: "{{ connectorEnforcement }}"
        dataApiAccess: "{{ dataApiAccess }}"
        edition: "{{ edition }}"
        dataCacheConfig:
          dataCacheEnabled: {{ dataCacheEnabled }}
        advancedMachineFeatures:
          threadsPerCore: {{ threadsPerCore }}
        locationPreference:
          secondaryZone: "{{ secondaryZone }}"
          followGaeApplication: "{{ followGaeApplication }}"
          kind: "{{ kind }}"
          zone: "{{ zone }}"
        enableDataplexIntegration: {{ enableDataplexIntegration }}
        pricingPlan: "{{ pricingPlan }}"
    - name: geminiConfig
      description: |
        Gemini instance configuration.
      value:
        oomSessionCancelEnabled: {{ oomSessionCancelEnabled }}
        activeQueryEnabled: {{ activeQueryEnabled }}
        entitled: {{ entitled }}
        indexAdvisorEnabled: {{ indexAdvisorEnabled }}
        flagRecommenderEnabled: {{ flagRecommenderEnabled }}
        googleVacuumMgmtEnabled: {{ googleVacuumMgmtEnabled }}
    - name: switchTransactionLogsToCloudStorageEnabled
      value: {{ switchTransactionLogsToCloudStorageEnabled }}
      description: |
        Input only. Whether Cloud SQL is enabled to switch storing point-in-time recovery log files from a data disk to Cloud Storage.
    - name: replicaNames
      value:
        - "{{ replicaNames }}"
      description: |
        The replicas of the instance.
    - name: ipAddresses
      description: |
        The assigned IP addresses for the instance.
      value:
        - type: "{{ type }}"
          ipAddress: "{{ ipAddress }}"
          timeToRetire: "{{ timeToRetire }}"
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

Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. This method supports patch semantics.

```sql
UPDATE google.sqladmin.instances
SET 
data__satisfiesPzs = {{ satisfiesPzs }},
data__currentDiskSize = '{{ currentDiskSize }}',
data__onPremisesConfiguration = '{{ onPremisesConfiguration }}',
data__scheduledMaintenance = '{{ scheduledMaintenance }}',
data__diskEncryptionStatus = '{{ diskEncryptionStatus }}',
data__serverCaCert = '{{ serverCaCert }}',
data__failoverReplica = '{{ failoverReplica }}',
data__serviceAccountEmailAddress = '{{ serviceAccountEmailAddress }}',
data__project = '{{ project }}',
data__backendType = '{{ backendType }}',
data__includeReplicasForMajorVersionUpgrade = {{ includeReplicasForMajorVersionUpgrade }},
data__state = '{{ state }}',
data__masterInstanceName = '{{ masterInstanceName }}',
data__replicationCluster = '{{ replicationCluster }}',
data__replicaConfiguration = '{{ replicaConfiguration }}',
data__rootPassword = '{{ rootPassword }}',
data__sqlNetworkArchitecture = '{{ sqlNetworkArchitecture }}',
data__diskEncryptionConfiguration = '{{ diskEncryptionConfiguration }}',
data__maxDiskSize = '{{ maxDiskSize }}',
data__secondaryGceZone = '{{ secondaryGceZone }}',
data__databaseVersion = '{{ databaseVersion }}',
data__ipv6Address = '{{ ipv6Address }}',
data__tags = '{{ tags }}',
data__maintenanceVersion = '{{ maintenanceVersion }}',
data__etag = '{{ etag }}',
data__nodeCount = {{ nodeCount }},
data__instanceType = '{{ instanceType }}',
data__name = '{{ name }}',
data__selfLink = '{{ selfLink }}',
data__kind = '{{ kind }}',
data__connectionName = '{{ connectionName }}',
data__outOfDiskReport = '{{ outOfDiskReport }}',
data__gceZone = '{{ gceZone }}',
data__region = '{{ region }}',
data__suspensionReason = '{{ suspensionReason }}',
data__settings = '{{ settings }}',
data__geminiConfig = '{{ geminiConfig }}',
data__switchTransactionLogsToCloudStorageEnabled = {{ switchTransactionLogsToCloudStorageEnabled }},
data__replicaNames = '{{ replicaNames }}',
data__ipAddresses = '{{ ipAddresses }}'
WHERE 
project = '{{ project }}' --required
AND instance = '{{ instance }}' --required
AND reconcilePscNetworkingForce = {{ reconcilePscNetworkingForce}}
AND reconcilePscNetworking = {{ reconcilePscNetworking}}
RETURNING
name,
acquireSsrsLeaseContext,
apiWarning,
backupContext,
endTime,
error,
exportContext,
importContext,
insertTime,
kind,
operationType,
preCheckMajorVersionUpgradeContext,
selfLink,
startTime,
status,
subOperationType,
targetId,
targetLink,
targetProject,
user;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates settings of a Cloud SQL instance. Using this operation might cause your instance to restart.

```sql
REPLACE google.sqladmin.instances
SET 
data__satisfiesPzs = {{ satisfiesPzs }},
data__currentDiskSize = '{{ currentDiskSize }}',
data__onPremisesConfiguration = '{{ onPremisesConfiguration }}',
data__scheduledMaintenance = '{{ scheduledMaintenance }}',
data__diskEncryptionStatus = '{{ diskEncryptionStatus }}',
data__serverCaCert = '{{ serverCaCert }}',
data__failoverReplica = '{{ failoverReplica }}',
data__serviceAccountEmailAddress = '{{ serviceAccountEmailAddress }}',
data__project = '{{ project }}',
data__backendType = '{{ backendType }}',
data__includeReplicasForMajorVersionUpgrade = {{ includeReplicasForMajorVersionUpgrade }},
data__state = '{{ state }}',
data__masterInstanceName = '{{ masterInstanceName }}',
data__replicationCluster = '{{ replicationCluster }}',
data__replicaConfiguration = '{{ replicaConfiguration }}',
data__rootPassword = '{{ rootPassword }}',
data__sqlNetworkArchitecture = '{{ sqlNetworkArchitecture }}',
data__diskEncryptionConfiguration = '{{ diskEncryptionConfiguration }}',
data__maxDiskSize = '{{ maxDiskSize }}',
data__secondaryGceZone = '{{ secondaryGceZone }}',
data__databaseVersion = '{{ databaseVersion }}',
data__ipv6Address = '{{ ipv6Address }}',
data__tags = '{{ tags }}',
data__maintenanceVersion = '{{ maintenanceVersion }}',
data__etag = '{{ etag }}',
data__nodeCount = {{ nodeCount }},
data__instanceType = '{{ instanceType }}',
data__name = '{{ name }}',
data__selfLink = '{{ selfLink }}',
data__kind = '{{ kind }}',
data__connectionName = '{{ connectionName }}',
data__outOfDiskReport = '{{ outOfDiskReport }}',
data__gceZone = '{{ gceZone }}',
data__region = '{{ region }}',
data__suspensionReason = '{{ suspensionReason }}',
data__settings = '{{ settings }}',
data__geminiConfig = '{{ geminiConfig }}',
data__switchTransactionLogsToCloudStorageEnabled = {{ switchTransactionLogsToCloudStorageEnabled }},
data__replicaNames = '{{ replicaNames }}',
data__ipAddresses = '{{ ipAddresses }}'
WHERE 
project = '{{ project }}' --required
AND instance = '{{ instance }}' --required
RETURNING
name,
acquireSsrsLeaseContext,
apiWarning,
backupContext,
endTime,
error,
exportContext,
importContext,
insertTime,
kind,
operationType,
preCheckMajorVersionUpgradeContext,
selfLink,
startTime,
status,
subOperationType,
targetId,
targetLink,
targetProject,
user;
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

Deletes a Cloud SQL instance.

```sql
DELETE FROM google.sqladmin.instances
WHERE project = '{{ project }}' --required
AND instance = '{{ instance }}' --required
AND finalBackupExpiryTime = '{{ finalBackupExpiryTime }}'
AND enableFinalBackup = '{{ enableFinalBackup }}'
AND finalBackupDescription = '{{ finalBackupDescription }}'
AND finalBackupTtlDays = '{{ finalBackupTtlDays }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_external_sync"
    values={[
        { label: 'start_external_sync', value: 'start_external_sync' },
        { label: 'verify_external_sync_settings', value: 'verify_external_sync_settings' },
        { label: 'perform_disk_shrink', value: 'perform_disk_shrink' },
        { label: 'reset_replica_size', value: 'reset_replica_size' },
        { label: 'reschedule_maintenance', value: 'reschedule_maintenance' },
        { label: 'clone', value: 'clone' },
        { label: 'execute_sql', value: 'execute_sql' },
        { label: 'truncate_log', value: 'truncate_log' },
        { label: 'rotate_entra_id_certificate', value: 'rotate_entra_id_certificate' },
        { label: 'start_replica', value: 'start_replica' },
        { label: 'promote_replica', value: 'promote_replica' },
        { label: 'pre_check_major_version_upgrade', value: 'pre_check_major_version_upgrade' },
        { label: 'demote_master', value: 'demote_master' },
        { label: 'switchover', value: 'switchover' },
        { label: 'restart', value: 'restart' },
        { label: 'stop_replica', value: 'stop_replica' },
        { label: 'reset_ssl_config', value: 'reset_ssl_config' },
        { label: 'rotate_server_ca', value: 'rotate_server_ca' },
        { label: 'restore_backup', value: 'restore_backup' },
        { label: 'failover', value: 'failover' },
        { label: 'acquire_ssrs_lease', value: 'acquire_ssrs_lease' },
        { label: 'demote', value: 'demote' },
        { label: 'release_ssrs_lease', value: 'release_ssrs_lease' },
        { label: 'reencrypt', value: 'reencrypt' },
        { label: 'import', value: 'import' },
        { label: 'list_server_certificates', value: 'list_server_certificates' },
        { label: 'list_entra_id_certificates', value: 'list_entra_id_certificates' },
        { label: 'rotate_server_certificate', value: 'rotate_server_certificate' },
        { label: 'export', value: 'export' },
        { label: 'point_in_time_restore', value: 'point_in_time_restore' }
    ]}
>
<TabItem value="start_external_sync">

Start External primary instance migration.

```sql
EXEC google.sqladmin.instances.start_external_sync 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required 
@@json=
'{
"mysqlSyncConfig": "{{ mysqlSyncConfig }}", 
"migrationType": "{{ migrationType }}", 
"syncParallelLevel": "{{ syncParallelLevel }}", 
"skipVerification": {{ skipVerification }}, 
"replicaOverwriteEnabled": {{ replicaOverwriteEnabled }}, 
"syncMode": "{{ syncMode }}"
}'
;
```
</TabItem>
<TabItem value="verify_external_sync_settings">

Verify External primary instance external sync settings.

```sql
EXEC google.sqladmin.instances.verify_external_sync_settings 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required 
@@json=
'{
"verifyConnectionOnly": {{ verifyConnectionOnly }}, 
"selectedObjects": "{{ selectedObjects }}", 
"mysqlSyncConfig": "{{ mysqlSyncConfig }}", 
"migrationType": "{{ migrationType }}", 
"syncParallelLevel": "{{ syncParallelLevel }}", 
"syncMode": "{{ syncMode }}", 
"verifyReplicationOnly": {{ verifyReplicationOnly }}
}'
;
```
</TabItem>
<TabItem value="perform_disk_shrink">

Perform Disk Shrink on primary instance.

```sql
EXEC google.sqladmin.instances.perform_disk_shrink 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required 
@@json=
'{
"targetSizeGb": "{{ targetSizeGb }}"
}'
;
```
</TabItem>
<TabItem value="reset_replica_size">

Reset Replica Size to primary instance disk size.

```sql
EXEC google.sqladmin.instances.reset_replica_size 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required
;
```
</TabItem>
<TabItem value="reschedule_maintenance">

Reschedules the maintenance on the given instance.

```sql
EXEC google.sqladmin.instances.reschedule_maintenance 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required 
@@json=
'{
"reschedule": "{{ reschedule }}"
}'
;
```
</TabItem>
<TabItem value="clone">

Creates a Cloud SQL instance as a clone of the source instance. Using this operation might cause your instance to restart.

```sql
EXEC google.sqladmin.instances.clone 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required 
@@json=
'{
"cloneContext": "{{ cloneContext }}"
}'
;
```
</TabItem>
<TabItem value="execute_sql">

Execute SQL statements.

```sql
EXEC google.sqladmin.instances.execute_sql 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required 
@@json=
'{
"application": "{{ application }}", 
"sqlStatement": "{{ sqlStatement }}", 
"passwordSecretVersion": "{{ passwordSecretVersion }}", 
"user": "{{ user }}", 
"database": "{{ database }}", 
"rowLimit": "{{ rowLimit }}", 
"autoIamAuthn": {{ autoIamAuthn }}, 
"partialResultMode": "{{ partialResultMode }}"
}'
;
```
</TabItem>
<TabItem value="truncate_log">

Truncate MySQL general and slow query log tables MySQL only.

```sql
EXEC google.sqladmin.instances.truncate_log 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required 
@@json=
'{
"truncateLogContext": "{{ truncateLogContext }}"
}'
;
```
</TabItem>
<TabItem value="rotate_entra_id_certificate">

Rotates the server certificate version to one previously added with the addEntraIdCertificate method.

```sql
EXEC google.sqladmin.instances.rotate_entra_id_certificate 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required 
@@json=
'{
"rotateEntraIdCertificateContext": "{{ rotateEntraIdCertificateContext }}"
}'
;
```
</TabItem>
<TabItem value="start_replica">

Starts the replication in the read replica instance.

```sql
EXEC google.sqladmin.instances.start_replica 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required
;
```
</TabItem>
<TabItem value="promote_replica">

Promotes the read replica instance to be an independent Cloud SQL primary instance. Using this operation might cause your instance to restart.

```sql
EXEC google.sqladmin.instances.promote_replica 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required, 
@failover={{ failover }}
;
```
</TabItem>
<TabItem value="pre_check_major_version_upgrade">

Execute MVU Pre-checks

```sql
EXEC google.sqladmin.instances.pre_check_major_version_upgrade 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required 
@@json=
'{
"preCheckMajorVersionUpgradeContext": "{{ preCheckMajorVersionUpgradeContext }}"
}'
;
```
</TabItem>
<TabItem value="demote_master">

Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server.

```sql
EXEC google.sqladmin.instances.demote_master 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required 
@@json=
'{
"demoteMasterContext": "{{ demoteMasterContext }}"
}'
;
```
</TabItem>
<TabItem value="switchover">

Switches over from the primary instance to the DR replica instance.

```sql
EXEC google.sqladmin.instances.switchover 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required, 
@dbTimeout='{{ dbTimeout }}'
;
```
</TabItem>
<TabItem value="restart">

Restarts a Cloud SQL instance.

```sql
EXEC google.sqladmin.instances.restart 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required
;
```
</TabItem>
<TabItem value="stop_replica">

Stops the replication in the read replica instance.

```sql
EXEC google.sqladmin.instances.stop_replica 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required
;
```
</TabItem>
<TabItem value="reset_ssl_config">

Deletes all client certificates and generates a new server SSL certificate for the instance.

```sql
EXEC google.sqladmin.instances.reset_ssl_config 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required, 
@mode='{{ mode }}'
;
```
</TabItem>
<TabItem value="rotate_server_ca">

Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. For instances that have enabled Certificate Authority Service (CAS) based server CA, use RotateServerCertificate to rotate the server certificate.

```sql
EXEC google.sqladmin.instances.rotate_server_ca 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required 
@@json=
'{
"rotateServerCaContext": "{{ rotateServerCaContext }}"
}'
;
```
</TabItem>
<TabItem value="restore_backup">

Restores a backup of a Cloud SQL instance. Using this operation might cause your instance to restart.

```sql
EXEC google.sqladmin.instances.restore_backup 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required 
@@json=
'{
"backup": "{{ backup }}", 
"restoreBackupContext": "{{ restoreBackupContext }}", 
"backupdrBackup": "{{ backupdrBackup }}", 
"restoreInstanceSettings": "{{ restoreInstanceSettings }}", 
"restoreInstanceClearOverridesFieldNames": "{{ restoreInstanceClearOverridesFieldNames }}"
}'
;
```
</TabItem>
<TabItem value="failover">

Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. Users are then rerouted to the new primary. For more information, see the [Overview of high availability](https://cloud.google.com/sql/docs/mysql/high-availability) page in the Cloud SQL documentation. If using Legacy HA (MySQL only), this causes the instance to failover to its failover replica instance.

```sql
EXEC google.sqladmin.instances.failover 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required 
@@json=
'{
"failoverContext": "{{ failoverContext }}"
}'
;
```
</TabItem>
<TabItem value="acquire_ssrs_lease">

Acquire a lease for the setup of SQL Server Reporting Services (SSRS).

```sql
EXEC google.sqladmin.instances.acquire_ssrs_lease 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required 
@@json=
'{
"acquireSsrsLeaseContext": "{{ acquireSsrsLeaseContext }}"
}'
;
```
</TabItem>
<TabItem value="demote">

Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server.

```sql
EXEC google.sqladmin.instances.demote 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required 
@@json=
'{
"demoteContext": "{{ demoteContext }}"
}'
;
```
</TabItem>
<TabItem value="release_ssrs_lease">

Release a lease for the setup of SQL Server Reporting Services (SSRS).

```sql
EXEC google.sqladmin.instances.release_ssrs_lease 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required
;
```
</TabItem>
<TabItem value="reencrypt">

Reencrypt CMEK instance with latest key version.

```sql
EXEC google.sqladmin.instances.reencrypt 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required 
@@json=
'{
"backupReencryptionConfig": "{{ backupReencryptionConfig }}"
}'
;
```
</TabItem>
<TabItem value="import">

Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage.

```sql
EXEC google.sqladmin.instances.import 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required 
@@json=
'{
"importContext": "{{ importContext }}"
}'
;
```
</TabItem>
<TabItem value="list_server_certificates">

Lists all versions of server certificates and certificate authorities (CAs) for the specified instance. There can be up to three sets of certs listed: the certificate that is currently in use, a future that has been added but not yet used to sign a certificate, and a certificate that has been rotated out. For instances not using Certificate Authority Service (CAS) server CA, use ListServerCas instead.

```sql
EXEC google.sqladmin.instances.list_server_certificates 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required
;
```
</TabItem>
<TabItem value="list_entra_id_certificates">

Lists all versions of EntraID certificates for the specified instance. There can be up to three sets of certificates listed: the certificate that is currently in use, a future that has been added but not yet used to sign a certificate, and a certificate that has been rotated out.

```sql
EXEC google.sqladmin.instances.list_entra_id_certificates 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required
;
```
</TabItem>
<TabItem value="rotate_server_certificate">

Rotates the server certificate version to one previously added with the addServerCertificate method. For instances not using Certificate Authority Service (CAS) server CA, use RotateServerCa instead.

```sql
EXEC google.sqladmin.instances.rotate_server_certificate 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required 
@@json=
'{
"rotateServerCertificateContext": "{{ rotateServerCertificateContext }}"
}'
;
```
</TabItem>
<TabItem value="export">

Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file.

```sql
EXEC google.sqladmin.instances.export 
@project='{{ project }}' --required, 
@instance='{{ instance }}' --required 
@@json=
'{
"exportContext": "{{ exportContext }}"
}'
;
```
</TabItem>
<TabItem value="point_in_time_restore">

Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery.

```sql
EXEC google.sqladmin.instances.point_in_time_restore 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"region": "{{ region }}", 
"allocatedIpRange": "{{ allocatedIpRange }}", 
"datasource": "{{ datasource }}", 
"preferredSecondaryZone": "{{ preferredSecondaryZone }}", 
"targetInstanceClearSettingsFieldNames": "{{ targetInstanceClearSettingsFieldNames }}", 
"targetInstanceSettings": "{{ targetInstanceSettings }}", 
"pointInTime": "{{ pointInTime }}", 
"privateNetwork": "{{ privateNetwork }}", 
"preferredZone": "{{ preferredZone }}", 
"targetInstance": "{{ targetInstance }}"
}'
;
```
</TabItem>
</Tabs>
