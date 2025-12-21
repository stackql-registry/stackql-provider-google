--- 
title: collections_data_connector
hide_title: false
hide_table_of_contents: false
keywords:
  - collections_data_connector
  - discoveryengine
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

Creates, updates, deletes, gets or lists a <code>collections_data_connector</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>collections_data_connector</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.collections_data_connector" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_collections_get_data_connector"
    values={[
        { label: 'projects_locations_collections_get_data_connector', value: 'projects_locations_collections_get_data_connector' }
    ]}
>
<TabItem value="projects_locations_collections_get_data_connector">

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
    <td>Output only. The full resource name of the Data Connector. Format: `projects/*/locations/*/collections/*/dataConnector`.</td>
</tr>
<tr>
    <td><CopyableCode code="aclEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the connector will be created with an ACL config. Currently this field only affects Cloud Storage and BigQuery connectors.</td>
</tr>
<tr>
    <td><CopyableCode code="actionConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Action configurations to make the connector support actions. (id: GoogleCloudDiscoveryengineV1ActionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="actionState" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the action connector. This reflects whether the action connector is initializing, active or has encountered errors.</td>
</tr>
<tr>
    <td><CopyableCode code="alertPolicyConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. The connector level alert config.</td>
</tr>
<tr>
    <td><CopyableCode code="autoRunDisabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Indicates whether the connector is disabled for auto run. It can be used to pause periodical and real time sync. Update: with the introduction of incremental_sync_disabled, auto_run_disabled is used to pause/disable only full syncs</td>
</tr>
<tr>
    <td><CopyableCode code="bapConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The configuration for establishing a BAP connection. (id: GoogleCloudDiscoveryengineV1BAPConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="blockingReasons" /></td>
    <td><code>array</code></td>
    <td>Output only. User actions that must be completed before the connector can start syncing data.</td>
</tr>
<tr>
    <td><CopyableCode code="connectorModes" /></td>
    <td><code>array</code></td>
    <td>Optional. The modes enabled for this connector. Default state is CONNECTOR_MODE_UNSPECIFIED.</td>
</tr>
<tr>
    <td><CopyableCode code="connectorType" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of connector. Each source can only map to one type. For example, salesforce, confluence and jira have THIRD_PARTY connector type. It is not mutable once set by system.</td>
</tr>
<tr>
    <td><CopyableCode code="createEuaSaas" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the END USER AUTHENTICATION connector is created in SaaS.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp the DataConnector was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSource" /></td>
    <td><code>string</code></td>
    <td>Required. The name of the data source. Supported values: `salesforce`, `jira`, `confluence`, `bigquery`.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Any target destinations used to connect to third-party services.</td>
</tr>
<tr>
    <td><CopyableCode code="endUserConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Any params and credentials used specifically for EUA connectors. (id: GoogleCloudDiscoveryengineV1DataConnectorEndUserConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="entities" /></td>
    <td><code>array</code></td>
    <td>List of entities from the connected data source to ingest.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. The errors from initialization or from the latest connector run.</td>
</tr>
<tr>
    <td><CopyableCode code="federatedConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Any params and credentials used specifically for hybrid connectors supporting FEDERATED mode. This field should only be set if the connector is a hybrid connector and we want to enable FEDERATED mode. (id: GoogleCloudDiscoveryengineV1DataConnectorFederatedConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="hybridIngestionDisabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If the connector is a hybrid connector, determines whether ingestion is enabled and appropriate resources are provisioned during connector creation. If the connector is not a hybrid connector, this field is ignored.</td>
</tr>
<tr>
    <td><CopyableCode code="identityRefreshInterval" /></td>
    <td><code>string (google-duration)</code></td>
    <td>The refresh interval to sync the Access Control List information for the documents ingested by this connector. If not set, the access control list will be refreshed at the default interval of 30 minutes. The identity refresh interval can be at least 30 minutes and at most 7 days.</td>
</tr>
<tr>
    <td><CopyableCode code="identityScheduleConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration for the identity data synchronization runs. This contains the refresh interval to sync the Access Control List information for the documents ingested by this connector. (id: GoogleCloudDiscoveryengineV1IdentityScheduleConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="incrementalRefreshInterval" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. The refresh interval specifically for incremental data syncs. If unset, incremental syncs will use the default from env, set to 3hrs. The minimum is 30 minutes and maximum is 7 days. Applicable to only 3P connectors. When the refresh interval is set to the same value as the incremental refresh interval, incremental sync will be disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="incrementalSyncDisabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Indicates whether incremental syncs are paused for this connector. This is independent of auto_run_disabled. Applicable to only 3P connectors. When the refresh interval is set to the same value as the incremental refresh interval, incremental sync will be disabled, i.e. set to true.</td>
</tr>
<tr>
    <td><CopyableCode code="jsonParams" /></td>
    <td><code>string</code></td>
    <td>Required data connector parameters in json string format.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td>Input only. The KMS key to be used to protect the DataStores managed by this connector. Must be set for requests that need to comply with CMEK Org Policy protections. If this field is set and processed successfully, the DataStores created by this connector will be protected by the KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="lastSyncTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. For periodic connectors only, the last time a data sync was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="latestPauseTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent timestamp when this DataConnector was paused, affecting all functionalities such as data synchronization. Pausing a connector has the following effects: - All functionalities, including data synchronization, are halted. - Any ongoing data synchronization job will be canceled. - No future data synchronization runs will be scheduled nor can be triggered.</td>
</tr>
<tr>
    <td><CopyableCode code="nextSyncTime" /></td>
    <td><code>object</code></td>
    <td>Defines the scheduled time for the next data synchronization. This field requires hour , minute, and time_zone from the [IANA Time Zone Database](https://www.iana.org/time-zones). This is utilized when the data connector has a refresh interval greater than 1 day. When the hours or minutes are not specified, we will assume a sync time of 0:00. The user must provide a time zone to avoid ambiguity. (id: GoogleTypeDateTime)</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>object</code></td>
    <td>Required data connector parameters in structured json format.</td>
</tr>
<tr>
    <td><CopyableCode code="privateConnectivityProjectId" /></td>
    <td><code>string</code></td>
    <td>Output only. The tenant project ID associated with private connectivity connectors. This project must be allowlisted by in order for the connector to function.</td>
</tr>
<tr>
    <td><CopyableCode code="realtimeState" /></td>
    <td><code>string</code></td>
    <td>Output only. real-time sync state</td>
</tr>
<tr>
    <td><CopyableCode code="realtimeSyncConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The configuration for realtime sync. (id: GoogleCloudDiscoveryengineV1DataConnectorRealtimeSyncConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="refreshInterval" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Required. The refresh interval for data sync. If duration is set to 0, the data will be synced in real time. The streaming feature is not supported yet. The minimum is 30 minutes and maximum is 7 days. When the refresh interval is set to the same value as the incremental refresh interval, incremental sync will be disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="removeParamKeys" /></td>
    <td><code>array</code></td>
    <td>Optional. Specifies keys to be removed from the 'params' field. This is only active when 'params' is included in the 'update_mask' in an UpdateDataConnectorRequest. Deletion takes precedence if a key is both in 'remove_param_keys' and present in the 'params' field of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="staticIpAddresses" /></td>
    <td><code>array</code></td>
    <td>Output only. The static IP addresses used by this connector.</td>
</tr>
<tr>
    <td><CopyableCode code="staticIpEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether customer has enabled static IP addresses for this connector.</td>
</tr>
<tr>
    <td><CopyableCode code="syncMode" /></td>
    <td><code>string</code></td>
    <td>The data synchronization mode supported by the data connector.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp the DataConnector was last updated.</td>
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
    <td><a href="#projects_locations_collections_get_data_connector"><CopyableCode code="projects_locations_collections_get_data_connector" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a></td>
    <td></td>
    <td>Gets the DataConnector. DataConnector is a singleton resource for each Collection.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_update_data_connector"><CopyableCode code="projects_locations_collections_update_data_connector" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a DataConnector.</td>
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
<tr id="parameter-collectionsId">
    <td><CopyableCode code="collectionsId" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_collections_get_data_connector"
    values={[
        { label: 'projects_locations_collections_get_data_connector', value: 'projects_locations_collections_get_data_connector' }
    ]}
>
<TabItem value="projects_locations_collections_get_data_connector">

Gets the DataConnector. DataConnector is a singleton resource for each Collection.

```sql
SELECT
name,
aclEnabled,
actionConfig,
actionState,
alertPolicyConfigs,
autoRunDisabled,
bapConfig,
blockingReasons,
connectorModes,
connectorType,
createEuaSaas,
createTime,
dataSource,
destinationConfigs,
endUserConfig,
entities,
errors,
federatedConfig,
hybridIngestionDisabled,
identityRefreshInterval,
identityScheduleConfig,
incrementalRefreshInterval,
incrementalSyncDisabled,
jsonParams,
kmsKeyName,
lastSyncTime,
latestPauseTime,
nextSyncTime,
params,
privateConnectivityProjectId,
realtimeState,
realtimeSyncConfig,
refreshInterval,
removeParamKeys,
state,
staticIpAddresses,
staticIpEnabled,
syncMode,
updateTime
FROM google.discoveryengine.collections_data_connector
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_collections_update_data_connector"
    values={[
        { label: 'projects_locations_collections_update_data_connector', value: 'projects_locations_collections_update_data_connector' }
    ]}
>
<TabItem value="projects_locations_collections_update_data_connector">

Updates a DataConnector.

```sql
UPDATE google.discoveryengine.collections_data_connector
SET 
data__incrementalSyncDisabled = {{ incrementalSyncDisabled }},
data__kmsKeyName = '{{ kmsKeyName }}',
data__staticIpEnabled = {{ staticIpEnabled }},
data__endUserConfig = '{{ endUserConfig }}',
data__aclEnabled = {{ aclEnabled }},
data__incrementalRefreshInterval = '{{ incrementalRefreshInterval }}',
data__connectorModes = '{{ connectorModes }}',
data__syncMode = '{{ syncMode }}',
data__nextSyncTime = '{{ nextSyncTime }}',
data__alertPolicyConfigs = '{{ alertPolicyConfigs }}',
data__realtimeSyncConfig = '{{ realtimeSyncConfig }}',
data__identityRefreshInterval = '{{ identityRefreshInterval }}',
data__dataSource = '{{ dataSource }}',
data__entities = '{{ entities }}',
data__jsonParams = '{{ jsonParams }}',
data__hybridIngestionDisabled = {{ hybridIngestionDisabled }},
data__bapConfig = '{{ bapConfig }}',
data__autoRunDisabled = {{ autoRunDisabled }},
data__destinationConfigs = '{{ destinationConfigs }}',
data__removeParamKeys = '{{ removeParamKeys }}',
data__createEuaSaas = {{ createEuaSaas }},
data__federatedConfig = '{{ federatedConfig }}',
data__refreshInterval = '{{ refreshInterval }}',
data__params = '{{ params }}',
data__actionConfig = '{{ actionConfig }}',
data__identityScheduleConfig = '{{ identityScheduleConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
aclEnabled,
actionConfig,
actionState,
alertPolicyConfigs,
autoRunDisabled,
bapConfig,
blockingReasons,
connectorModes,
connectorType,
createEuaSaas,
createTime,
dataSource,
destinationConfigs,
endUserConfig,
entities,
errors,
federatedConfig,
hybridIngestionDisabled,
identityRefreshInterval,
identityScheduleConfig,
incrementalRefreshInterval,
incrementalSyncDisabled,
jsonParams,
kmsKeyName,
lastSyncTime,
latestPauseTime,
nextSyncTime,
params,
privateConnectivityProjectId,
realtimeState,
realtimeSyncConfig,
refreshInterval,
removeParamKeys,
state,
staticIpAddresses,
staticIpEnabled,
syncMode,
updateTime;
```
</TabItem>
</Tabs>
