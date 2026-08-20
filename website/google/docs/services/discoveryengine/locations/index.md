--- 
title: locations
hide_title: false
hide_table_of_contents: false
keywords:
  - locations
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
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>locations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="locations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.locations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#projects_locations_provision"><CopyableCode code="projects_locations_provision" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Provisions the project resource. During the process, related systems will get prepared and initialized. Caller must read the [Terms for data use](https://cloud.google.com/retail/data-use-terms), and optionally specify in request to provide consent to that service terms.</td>
</tr>
<tr>
    <td><a href="#projects_locations_set_up_data_connector"><CopyableCode code="projects_locations_set_up_data_connector" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a Collection and sets up the DataConnector for it. To stop a DataConnector after setup, use the CollectionService.DeleteCollection method.</td>
</tr>
<tr>
    <td><a href="#projects_locations_set_up_data_connector_v2"><CopyableCode code="projects_locations_set_up_data_connector_v2" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-collectionDisplayName"><code>collectionDisplayName</code></a>, <a href="#parameter-collectionId"><code>collectionId</code></a></td>
    <td>Creates a Collection and sets up the DataConnector for it. To stop a DataConnector after setup, use the CollectionService.DeleteCollection method.</td>
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
<tr id="parameter-collectionDisplayName">
    <td><CopyableCode code="collectionDisplayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-collectionId">
    <td><CopyableCode code="collectionId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_provision"
    values={[
        { label: 'projects_locations_provision', value: 'projects_locations_provision' },
        { label: 'projects_locations_set_up_data_connector', value: 'projects_locations_set_up_data_connector' },
        { label: 'projects_locations_set_up_data_connector_v2', value: 'projects_locations_set_up_data_connector_v2' }
    ]}
>
<TabItem value="projects_locations_provision">

Provisions the project resource. During the process, related systems will get prepared and initialized. Caller must read the [Terms for data use](https://cloud.google.com/retail/data-use-terms), and optionally specify in request to provide consent to that service terms.

```sql
EXEC google.discoveryengine.locations.projects_locations_provision 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"acceptDataUseTerms": {{ acceptDataUseTerms }}, 
"dataUseTermsVersion": "{{ dataUseTermsVersion }}", 
"saasParams": "{{ saasParams }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_set_up_data_connector">

Creates a Collection and sets up the DataConnector for it. To stop a DataConnector after setup, use the CollectionService.DeleteCollection method.

```sql
EXEC google.discoveryengine.locations.projects_locations_set_up_data_connector 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"collectionDisplayName": "{{ collectionDisplayName }}", 
"collectionId": "{{ collectionId }}", 
"dataConnector": "{{ dataConnector }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_set_up_data_connector_v2">

Creates a Collection and sets up the DataConnector for it. To stop a DataConnector after setup, use the CollectionService.DeleteCollection method.

```sql
EXEC google.discoveryengine.locations.projects_locations_set_up_data_connector_v2 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionDisplayName='{{ collectionDisplayName }}', 
@collectionId='{{ collectionId }}' 
@@json=
'{
"aclEnabled": {{ aclEnabled }}, 
"actionConfig": "{{ actionConfig }}", 
"alertPolicyConfigs": "{{ alertPolicyConfigs }}", 
"autoRunDisabled": {{ autoRunDisabled }}, 
"bapConfig": "{{ bapConfig }}", 
"cliConfig": "{{ cliConfig }}", 
"connectorModes": "{{ connectorModes }}", 
"connectorSourceId": "{{ connectorSourceId }}", 
"createEuaSaas": {{ createEuaSaas }}, 
"dataSource": "{{ dataSource }}", 
"destinationConfigs": "{{ destinationConfigs }}", 
"endUserConfig": "{{ endUserConfig }}", 
"entities": "{{ entities }}", 
"federatedConfig": "{{ federatedConfig }}", 
"hybridIngestionDisabled": {{ hybridIngestionDisabled }}, 
"identityRefreshInterval": "{{ identityRefreshInterval }}", 
"identityScheduleConfig": "{{ identityScheduleConfig }}", 
"incrementalRefreshInterval": "{{ incrementalRefreshInterval }}", 
"incrementalSyncDisabled": {{ incrementalSyncDisabled }}, 
"jsonParams": "{{ jsonParams }}", 
"kmsKeyName": "{{ kmsKeyName }}", 
"metadata": "{{ metadata }}", 
"name": "{{ name }}", 
"nextSyncTime": "{{ nextSyncTime }}", 
"params": "{{ params }}", 
"realtimeSyncConfig": "{{ realtimeSyncConfig }}", 
"refreshInterval": "{{ refreshInterval }}", 
"removeParamKeys": "{{ removeParamKeys }}", 
"staticIpEnabled": {{ staticIpEnabled }}, 
"syncMode": "{{ syncMode }}", 
"tag": "{{ tag }}"
}'
;
```
</TabItem>
</Tabs>
