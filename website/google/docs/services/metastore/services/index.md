--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
  - metastore
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

Creates, updates, deletes, gets or lists a <code>services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.metastore.services" /></td></tr>
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
    <td>Immutable. Identifier. The relative resource name of the metastore service, in the following format:projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/services/&#123;service_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="artifactGcsUri" /></td>
    <td><code>string</code></td>
    <td>Output only. A Cloud Storage URI (starting with gs://) that specifies where artifacts related to the metastore service are stored.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the metastore service was created.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseType" /></td>
    <td><code>string</code></td>
    <td>Immutable. The database type that the Metastore service stores its data. (DATABASE_TYPE_UNSPECIFIED, MYSQL, SPANNER)</td>
</tr>
<tr>
    <td><CopyableCode code="deletionProtection" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Indicates if the dataproc metastore should be protected against accidental deletions.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionConfig" /></td>
    <td><code>object</code></td>
    <td>Immutable. Information used to configure the Dataproc Metastore service to encrypt customer data at rest. Cannot be updated. (id: EncryptionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="endpointUri" /></td>
    <td><code>string</code></td>
    <td>Output only. The URI of the endpoint used to access the metastore service.</td>
</tr>
<tr>
    <td><CopyableCode code="hiveMetastoreConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration information specific to running Hive metastore software as the metastore service. (id: HiveMetastoreConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User-defined labels for the metastore service.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceWindow" /></td>
    <td><code>object</code></td>
    <td>Optional. The one hour maintenance window of the metastore service. This specifies when the service can be restarted for maintenance purposes in UTC time. Maintenance window is not needed for services with the SPANNER database type. (id: MaintenanceWindow)</td>
</tr>
<tr>
    <td><CopyableCode code="metadataIntegration" /></td>
    <td><code>object</code></td>
    <td>Optional. The setting that defines how metastore metadata should be integrated with external services and systems. (id: MetadataIntegration)</td>
</tr>
<tr>
    <td><CopyableCode code="metadataManagementActivity" /></td>
    <td><code>object</code></td>
    <td>Output only. The metadata management activities of the metastore service. (id: MetadataManagementActivity)</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Immutable. The relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:projects/&#123;project_number&#125;/global/networks/&#123;network_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The configuration specifying the network settings for the Dataproc Metastore service. (id: NetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. The TCP port at which the metastore service is reached. Default: 9083.</td>
</tr>
<tr>
    <td><CopyableCode code="releaseChannel" /></td>
    <td><code>string</code></td>
    <td>Immutable. The release channel of the service. If unspecified, defaults to STABLE. (RELEASE_CHANNEL_UNSPECIFIED, CANARY, STABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="scalingConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Scaling configuration of the metastore service. (id: ScalingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="scheduledBackup" /></td>
    <td><code>object</code></td>
    <td>Optional. The configuration of scheduled backup for the metastore service. (id: ScheduledBackup)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the metastore service. (STATE_UNSPECIFIED, CREATING, ACTIVE, SUSPENDING, SUSPENDED, UPDATING, DELETING, ERROR, AUTOSCALING, MIGRATING, PROXY)</td>
</tr>
<tr>
    <td><CopyableCode code="stateMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Additional information about the current state of the metastore service, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing"</td>
</tr>
<tr>
    <td><CopyableCode code="telemetryConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The configuration specifying telemetry settings for the Dataproc Metastore service. If unspecified defaults to JSON. (id: TelemetryConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="tier" /></td>
    <td><code>string</code></td>
    <td>Optional. The tier of the service. (TIER_UNSPECIFIED, DEVELOPER, ENTERPRISE)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The globally unique resource identifier of the metastore service.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the metastore service was last updated.</td>
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
    <td>Immutable. Identifier. The relative resource name of the metastore service, in the following format:projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/services/&#123;service_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="artifactGcsUri" /></td>
    <td><code>string</code></td>
    <td>Output only. A Cloud Storage URI (starting with gs://) that specifies where artifacts related to the metastore service are stored.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the metastore service was created.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseType" /></td>
    <td><code>string</code></td>
    <td>Immutable. The database type that the Metastore service stores its data. (DATABASE_TYPE_UNSPECIFIED, MYSQL, SPANNER)</td>
</tr>
<tr>
    <td><CopyableCode code="deletionProtection" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Indicates if the dataproc metastore should be protected against accidental deletions.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionConfig" /></td>
    <td><code>object</code></td>
    <td>Immutable. Information used to configure the Dataproc Metastore service to encrypt customer data at rest. Cannot be updated. (id: EncryptionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="endpointUri" /></td>
    <td><code>string</code></td>
    <td>Output only. The URI of the endpoint used to access the metastore service.</td>
</tr>
<tr>
    <td><CopyableCode code="hiveMetastoreConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration information specific to running Hive metastore software as the metastore service. (id: HiveMetastoreConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User-defined labels for the metastore service.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceWindow" /></td>
    <td><code>object</code></td>
    <td>Optional. The one hour maintenance window of the metastore service. This specifies when the service can be restarted for maintenance purposes in UTC time. Maintenance window is not needed for services with the SPANNER database type. (id: MaintenanceWindow)</td>
</tr>
<tr>
    <td><CopyableCode code="metadataIntegration" /></td>
    <td><code>object</code></td>
    <td>Optional. The setting that defines how metastore metadata should be integrated with external services and systems. (id: MetadataIntegration)</td>
</tr>
<tr>
    <td><CopyableCode code="metadataManagementActivity" /></td>
    <td><code>object</code></td>
    <td>Output only. The metadata management activities of the metastore service. (id: MetadataManagementActivity)</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Immutable. The relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:projects/&#123;project_number&#125;/global/networks/&#123;network_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The configuration specifying the network settings for the Dataproc Metastore service. (id: NetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. The TCP port at which the metastore service is reached. Default: 9083.</td>
</tr>
<tr>
    <td><CopyableCode code="releaseChannel" /></td>
    <td><code>string</code></td>
    <td>Immutable. The release channel of the service. If unspecified, defaults to STABLE. (RELEASE_CHANNEL_UNSPECIFIED, CANARY, STABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="scalingConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Scaling configuration of the metastore service. (id: ScalingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="scheduledBackup" /></td>
    <td><code>object</code></td>
    <td>Optional. The configuration of scheduled backup for the metastore service. (id: ScheduledBackup)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the metastore service. (STATE_UNSPECIFIED, CREATING, ACTIVE, SUSPENDING, SUSPENDED, UPDATING, DELETING, ERROR, AUTOSCALING, MIGRATING, PROXY)</td>
</tr>
<tr>
    <td><CopyableCode code="stateMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Additional information about the current state of the metastore service, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing"</td>
</tr>
<tr>
    <td><CopyableCode code="telemetryConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The configuration specifying telemetry settings for the Dataproc Metastore service. If unspecified defaults to JSON. (id: TelemetryConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="tier" /></td>
    <td><code>string</code></td>
    <td>Optional. The tier of the service. (TIER_UNSPECIFIED, DEVELOPER, ENTERPRISE)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The globally unique resource identifier of the metastore service.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the metastore service was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Gets the details of a single service.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists services in a project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-serviceId"><code>serviceId</code></a></td>
    <td>Creates a metastore service in a project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single service.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single service.</td>
</tr>
<tr>
    <td><a href="#alter_location"><CopyableCode code="alter_location" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Alter metadata resource location. The metadata resource can be a database, table, or partition. This functionality only updates the parent directory for the respective metadata resource and does not transfer any existing data to the new location.</td>
</tr>
<tr>
    <td><a href="#alter_table_properties"><CopyableCode code="alter_table_properties" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Alter metadata table properties.</td>
</tr>
<tr>
    <td><a href="#cancel_migration"><CopyableCode code="cancel_migration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Cancels the ongoing Managed Migration process.</td>
</tr>
<tr>
    <td><a href="#complete_migration"><CopyableCode code="complete_migration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Completes the managed migration process. The Dataproc Metastore service will switch to using its own backend database after successful migration.</td>
</tr>
<tr>
    <td><a href="#export_metadata"><CopyableCode code="export_metadata" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Exports metadata from a service.</td>
</tr>
<tr>
    <td><a href="#move_table_to_database"><CopyableCode code="move_table_to_database" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Move a table to another database.</td>
</tr>
<tr>
    <td><a href="#query_metadata"><CopyableCode code="query_metadata" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Query Dataproc Metastore metadata.</td>
</tr>
<tr>
    <td><a href="#restore"><CopyableCode code="restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Restores a service from a backup.</td>
</tr>
<tr>
    <td><a href="#start_migration"><CopyableCode code="start_migration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Starts the Managed Migration process.</td>
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
<tr id="parameter-servicesId">
    <td><CopyableCode code="servicesId" /></td>
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
<tr id="parameter-serviceId">
    <td><CopyableCode code="serviceId" /></td>
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

Gets the details of a single service.

```sql
SELECT
name,
artifactGcsUri,
createTime,
databaseType,
deletionProtection,
encryptionConfig,
endpointUri,
hiveMetastoreConfig,
labels,
maintenanceWindow,
metadataIntegration,
metadataManagementActivity,
network,
networkConfig,
port,
releaseChannel,
scalingConfig,
scheduledBackup,
state,
stateMessage,
tags,
telemetryConfig,
tier,
uid,
updateTime
FROM google.metastore.services
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND servicesId = '{{ servicesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists services in a project and location.

```sql
SELECT
name,
artifactGcsUri,
createTime,
databaseType,
deletionProtection,
encryptionConfig,
endpointUri,
hiveMetastoreConfig,
labels,
maintenanceWindow,
metadataIntegration,
metadataManagementActivity,
network,
networkConfig,
port,
releaseChannel,
scalingConfig,
scheduledBackup,
state,
stateMessage,
tags,
telemetryConfig,
tier,
uid,
updateTime
FROM google.metastore.services
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

Creates a metastore service in a project and location.

```sql
INSERT INTO google.metastore.services (
data__databaseType,
data__deletionProtection,
data__encryptionConfig,
data__hiveMetastoreConfig,
data__labels,
data__maintenanceWindow,
data__metadataIntegration,
data__name,
data__network,
data__networkConfig,
data__port,
data__releaseChannel,
data__scalingConfig,
data__scheduledBackup,
data__tags,
data__telemetryConfig,
data__tier,
projectsId,
locationsId,
requestId,
serviceId
)
SELECT 
'{{ databaseType }}',
{{ deletionProtection }},
'{{ encryptionConfig }}',
'{{ hiveMetastoreConfig }}',
'{{ labels }}',
'{{ maintenanceWindow }}',
'{{ metadataIntegration }}',
'{{ name }}',
'{{ network }}',
'{{ networkConfig }}',
{{ port }},
'{{ releaseChannel }}',
'{{ scalingConfig }}',
'{{ scheduledBackup }}',
'{{ tags }}',
'{{ telemetryConfig }}',
'{{ tier }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ requestId }}',
'{{ serviceId }}'
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
- name: services
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the services resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the services resource.
    - name: databaseType
      value: "{{ databaseType }}"
      description: |
        Immutable. The database type that the Metastore service stores its data.
      valid_values: ['DATABASE_TYPE_UNSPECIFIED', 'MYSQL', 'SPANNER']
    - name: deletionProtection
      value: {{ deletionProtection }}
      description: |
        Optional. Indicates if the dataproc metastore should be protected against accidental deletions.
    - name: encryptionConfig
      description: |
        Immutable. Information used to configure the Dataproc Metastore service to encrypt customer data at rest. Cannot be updated.
      value:
        kmsKey: "{{ kmsKey }}"
    - name: hiveMetastoreConfig
      description: |
        Configuration information specific to running Hive metastore software as the metastore service.
      value:
        auxiliaryVersions: "{{ auxiliaryVersions }}"
        configOverrides: "{{ configOverrides }}"
        endpointProtocol: "{{ endpointProtocol }}"
        kerberosConfig:
          keytab:
            cloudSecret: "{{ cloudSecret }}"
          krb5ConfigGcsUri: "{{ krb5ConfigGcsUri }}"
          principal: "{{ principal }}"
        version: "{{ version }}"
    - name: labels
      value: "{{ labels }}"
      description: |
        User-defined labels for the metastore service.
    - name: maintenanceWindow
      description: |
        Optional. The one hour maintenance window of the metastore service. This specifies when the service can be restarted for maintenance purposes in UTC time. Maintenance window is not needed for services with the SPANNER database type.
      value:
        dayOfWeek: "{{ dayOfWeek }}"
        hourOfDay: {{ hourOfDay }}
    - name: metadataIntegration
      description: |
        Optional. The setting that defines how metastore metadata should be integrated with external services and systems.
      value:
        dataCatalogConfig:
          enabled: {{ enabled }}
    - name: name
      value: "{{ name }}"
      description: |
        Immutable. Identifier. The relative resource name of the metastore service, in the following format:projects/{project_number}/locations/{location_id}/services/{service_id}.
    - name: network
      value: "{{ network }}"
      description: |
        Immutable. The relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:projects/{project_number}/global/networks/{network_id}.
    - name: networkConfig
      description: |
        Optional. The configuration specifying the network settings for the Dataproc Metastore service.
      value:
        consumers:
          - endpointLocation: "{{ endpointLocation }}"
            endpointUri: "{{ endpointUri }}"
            subnetwork: "{{ subnetwork }}"
    - name: port
      value: {{ port }}
      description: |
        Optional. The TCP port at which the metastore service is reached. Default: 9083.
    - name: releaseChannel
      value: "{{ releaseChannel }}"
      description: |
        Immutable. The release channel of the service. If unspecified, defaults to STABLE.
      valid_values: ['RELEASE_CHANNEL_UNSPECIFIED', 'CANARY', 'STABLE']
    - name: scalingConfig
      description: |
        Optional. Scaling configuration of the metastore service.
      value:
        autoscalingConfig:
          autoscalingEnabled: {{ autoscalingEnabled }}
          autoscalingFactor: {{ autoscalingFactor }}
          limitConfig:
            maxScalingFactor: {{ maxScalingFactor }}
            minScalingFactor: {{ minScalingFactor }}
        instanceSize: "{{ instanceSize }}"
        scalingFactor: {{ scalingFactor }}
    - name: scheduledBackup
      description: |
        Optional. The configuration of scheduled backup for the metastore service.
      value:
        backupLocation: "{{ backupLocation }}"
        cronSchedule: "{{ cronSchedule }}"
        enabled: {{ enabled }}
        latestBackup:
          backupId: "{{ backupId }}"
          duration: "{{ duration }}"
          startTime: "{{ startTime }}"
          state: "{{ state }}"
        nextScheduledTime: "{{ nextScheduledTime }}"
        timeZone: "{{ timeZone }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing"
    - name: telemetryConfig
      description: |
        Optional. The configuration specifying telemetry settings for the Dataproc Metastore service. If unspecified defaults to JSON.
      value:
        logFormat: "{{ logFormat }}"
    - name: tier
      value: "{{ tier }}"
      description: |
        Optional. The tier of the service.
      valid_values: ['TIER_UNSPECIFIED', 'DEVELOPER', 'ENTERPRISE']
    - name: requestId
      value: "{{ requestId }}"
    - name: serviceId
      value: "{{ serviceId }}"
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

Updates the parameters of a single service.

```sql
UPDATE google.metastore.services
SET 
data__databaseType = '{{ databaseType }}',
data__deletionProtection = {{ deletionProtection }},
data__encryptionConfig = '{{ encryptionConfig }}',
data__hiveMetastoreConfig = '{{ hiveMetastoreConfig }}',
data__labels = '{{ labels }}',
data__maintenanceWindow = '{{ maintenanceWindow }}',
data__metadataIntegration = '{{ metadataIntegration }}',
data__name = '{{ name }}',
data__network = '{{ network }}',
data__networkConfig = '{{ networkConfig }}',
data__port = {{ port }},
data__releaseChannel = '{{ releaseChannel }}',
data__scalingConfig = '{{ scalingConfig }}',
data__scheduledBackup = '{{ scheduledBackup }}',
data__tags = '{{ tags }}',
data__telemetryConfig = '{{ telemetryConfig }}',
data__tier = '{{ tier }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND servicesId = '{{ servicesId }}' --required
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

Deletes a single service.

```sql
DELETE FROM google.metastore.services
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND servicesId = '{{ servicesId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="alter_location"
    values={[
        { label: 'alter_location', value: 'alter_location' },
        { label: 'alter_table_properties', value: 'alter_table_properties' },
        { label: 'cancel_migration', value: 'cancel_migration' },
        { label: 'complete_migration', value: 'complete_migration' },
        { label: 'export_metadata', value: 'export_metadata' },
        { label: 'move_table_to_database', value: 'move_table_to_database' },
        { label: 'query_metadata', value: 'query_metadata' },
        { label: 'restore', value: 'restore' },
        { label: 'start_migration', value: 'start_migration' }
    ]}
>
<TabItem value="alter_location">

Alter metadata resource location. The metadata resource can be a database, table, or partition. This functionality only updates the parent directory for the respective metadata resource and does not transfer any existing data to the new location.

```sql
EXEC google.metastore.services.alter_location 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@servicesId='{{ servicesId }}' --required 
@@json=
'{
"locationUri": "{{ locationUri }}", 
"resourceName": "{{ resourceName }}"
}'
;
```
</TabItem>
<TabItem value="alter_table_properties">

Alter metadata table properties.

```sql
EXEC google.metastore.services.alter_table_properties 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@servicesId='{{ servicesId }}' --required 
@@json=
'{
"properties": "{{ properties }}", 
"tableName": "{{ tableName }}", 
"updateMask": "{{ updateMask }}"
}'
;
```
</TabItem>
<TabItem value="cancel_migration">

Cancels the ongoing Managed Migration process.

```sql
EXEC google.metastore.services.cancel_migration 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@servicesId='{{ servicesId }}' --required
;
```
</TabItem>
<TabItem value="complete_migration">

Completes the managed migration process. The Dataproc Metastore service will switch to using its own backend database after successful migration.

```sql
EXEC google.metastore.services.complete_migration 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@servicesId='{{ servicesId }}' --required
;
```
</TabItem>
<TabItem value="export_metadata">

Exports metadata from a service.

```sql
EXEC google.metastore.services.export_metadata 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@servicesId='{{ servicesId }}' --required 
@@json=
'{
"databaseDumpType": "{{ databaseDumpType }}", 
"destinationGcsFolder": "{{ destinationGcsFolder }}", 
"requestId": "{{ requestId }}"
}'
;
```
</TabItem>
<TabItem value="move_table_to_database">

Move a table to another database.

```sql
EXEC google.metastore.services.move_table_to_database 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@servicesId='{{ servicesId }}' --required 
@@json=
'{
"dbName": "{{ dbName }}", 
"destinationDbName": "{{ destinationDbName }}", 
"tableName": "{{ tableName }}"
}'
;
```
</TabItem>
<TabItem value="query_metadata">

Query Dataproc Metastore metadata.

```sql
EXEC google.metastore.services.query_metadata 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@servicesId='{{ servicesId }}' --required 
@@json=
'{
"query": "{{ query }}"
}'
;
```
</TabItem>
<TabItem value="restore">

Restores a service from a backup.

```sql
EXEC google.metastore.services.restore 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@servicesId='{{ servicesId }}' --required 
@@json=
'{
"backup": "{{ backup }}", 
"backupLocation": "{{ backupLocation }}", 
"requestId": "{{ requestId }}", 
"restoreType": "{{ restoreType }}"
}'
;
```
</TabItem>
<TabItem value="start_migration">

Starts the Managed Migration process.

```sql
EXEC google.metastore.services.start_migration 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@servicesId='{{ servicesId }}' --required 
@@json=
'{
"migrationExecution": "{{ migrationExecution }}", 
"requestId": "{{ requestId }}"
}'
;
```
</TabItem>
</Tabs>
