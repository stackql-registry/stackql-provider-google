--- 
title: transfer_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - transfer_resources
  - bigquerydatatransfer
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

Creates, updates, deletes, gets or lists a <code>transfer_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transfer_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigquerydatatransfer.transfer_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_transfer_configs_transfer_resources_get"
    values={[
        { label: 'projects_locations_transfer_configs_transfer_resources_get', value: 'projects_locations_transfer_configs_transfer_resources_get' },
        { label: 'projects_transfer_configs_transfer_resources_get', value: 'projects_transfer_configs_transfer_resources_get' },
        { label: 'projects_locations_transfer_configs_transfer_resources_list', value: 'projects_locations_transfer_configs_transfer_resources_list' },
        { label: 'projects_transfer_configs_transfer_resources_list', value: 'projects_transfer_configs_transfer_resources_list' }
    ]}
>
<TabItem value="projects_locations_transfer_configs_transfer_resources_get">

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
    <td>Identifier. Resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>Optional. Resource destination. (RESOURCE_DESTINATION_UNSPECIFIED, RESOURCE_DESTINATION_BIGQUERY, RESOURCE_DESTINATION_DATAPROC_METASTORE, RESOURCE_DESTINATION_BIGLAKE_METASTORE, RESOURCE_DESTINATION_BIGLAKE_REST_CATALOG, RESOURCE_DESTINATION_BIGLAKE_HIVE_CATALOG)</td>
</tr>
<tr>
    <td><CopyableCode code="hierarchyDetail" /></td>
    <td><code>object</code></td>
    <td>Optional. Details about the hierarchy. (id: HierarchyDetail)</td>
</tr>
<tr>
    <td><CopyableCode code="lastSuccessfulRun" /></td>
    <td><code>object</code></td>
    <td>Output only. Run details for the last successful run. (id: TransferRunBrief)</td>
</tr>
<tr>
    <td><CopyableCode code="latestRun" /></td>
    <td><code>object</code></td>
    <td>Optional. Run details for the latest run. (id: TransferRunBrief)</td>
</tr>
<tr>
    <td><CopyableCode code="latestStatusDetail" /></td>
    <td><code>object</code></td>
    <td>Optional. Status details for the latest run. (id: TransferResourceStatusDetail)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Optional. Resource type. (RESOURCE_TYPE_UNSPECIFIED, RESOURCE_TYPE_TABLE, RESOURCE_TYPE_PARTITION)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the resource was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_transfer_configs_transfer_resources_get">

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
    <td>Identifier. Resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>Optional. Resource destination. (RESOURCE_DESTINATION_UNSPECIFIED, RESOURCE_DESTINATION_BIGQUERY, RESOURCE_DESTINATION_DATAPROC_METASTORE, RESOURCE_DESTINATION_BIGLAKE_METASTORE, RESOURCE_DESTINATION_BIGLAKE_REST_CATALOG, RESOURCE_DESTINATION_BIGLAKE_HIVE_CATALOG)</td>
</tr>
<tr>
    <td><CopyableCode code="hierarchyDetail" /></td>
    <td><code>object</code></td>
    <td>Optional. Details about the hierarchy. (id: HierarchyDetail)</td>
</tr>
<tr>
    <td><CopyableCode code="lastSuccessfulRun" /></td>
    <td><code>object</code></td>
    <td>Output only. Run details for the last successful run. (id: TransferRunBrief)</td>
</tr>
<tr>
    <td><CopyableCode code="latestRun" /></td>
    <td><code>object</code></td>
    <td>Optional. Run details for the latest run. (id: TransferRunBrief)</td>
</tr>
<tr>
    <td><CopyableCode code="latestStatusDetail" /></td>
    <td><code>object</code></td>
    <td>Optional. Status details for the latest run. (id: TransferResourceStatusDetail)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Optional. Resource type. (RESOURCE_TYPE_UNSPECIFIED, RESOURCE_TYPE_TABLE, RESOURCE_TYPE_PARTITION)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the resource was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_transfer_configs_transfer_resources_list">

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
    <td>Identifier. Resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>Optional. Resource destination. (RESOURCE_DESTINATION_UNSPECIFIED, RESOURCE_DESTINATION_BIGQUERY, RESOURCE_DESTINATION_DATAPROC_METASTORE, RESOURCE_DESTINATION_BIGLAKE_METASTORE, RESOURCE_DESTINATION_BIGLAKE_REST_CATALOG, RESOURCE_DESTINATION_BIGLAKE_HIVE_CATALOG)</td>
</tr>
<tr>
    <td><CopyableCode code="hierarchyDetail" /></td>
    <td><code>object</code></td>
    <td>Optional. Details about the hierarchy. (id: HierarchyDetail)</td>
</tr>
<tr>
    <td><CopyableCode code="lastSuccessfulRun" /></td>
    <td><code>object</code></td>
    <td>Output only. Run details for the last successful run. (id: TransferRunBrief)</td>
</tr>
<tr>
    <td><CopyableCode code="latestRun" /></td>
    <td><code>object</code></td>
    <td>Optional. Run details for the latest run. (id: TransferRunBrief)</td>
</tr>
<tr>
    <td><CopyableCode code="latestStatusDetail" /></td>
    <td><code>object</code></td>
    <td>Optional. Status details for the latest run. (id: TransferResourceStatusDetail)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Optional. Resource type. (RESOURCE_TYPE_UNSPECIFIED, RESOURCE_TYPE_TABLE, RESOURCE_TYPE_PARTITION)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the resource was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_transfer_configs_transfer_resources_list">

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
    <td>Identifier. Resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>Optional. Resource destination. (RESOURCE_DESTINATION_UNSPECIFIED, RESOURCE_DESTINATION_BIGQUERY, RESOURCE_DESTINATION_DATAPROC_METASTORE, RESOURCE_DESTINATION_BIGLAKE_METASTORE, RESOURCE_DESTINATION_BIGLAKE_REST_CATALOG, RESOURCE_DESTINATION_BIGLAKE_HIVE_CATALOG)</td>
</tr>
<tr>
    <td><CopyableCode code="hierarchyDetail" /></td>
    <td><code>object</code></td>
    <td>Optional. Details about the hierarchy. (id: HierarchyDetail)</td>
</tr>
<tr>
    <td><CopyableCode code="lastSuccessfulRun" /></td>
    <td><code>object</code></td>
    <td>Output only. Run details for the last successful run. (id: TransferRunBrief)</td>
</tr>
<tr>
    <td><CopyableCode code="latestRun" /></td>
    <td><code>object</code></td>
    <td>Optional. Run details for the latest run. (id: TransferRunBrief)</td>
</tr>
<tr>
    <td><CopyableCode code="latestStatusDetail" /></td>
    <td><code>object</code></td>
    <td>Optional. Status details for the latest run. (id: TransferResourceStatusDetail)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Optional. Resource type. (RESOURCE_TYPE_UNSPECIFIED, RESOURCE_TYPE_TABLE, RESOURCE_TYPE_PARTITION)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the resource was last updated.</td>
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
    <td><a href="#projects_locations_transfer_configs_transfer_resources_get"><CopyableCode code="projects_locations_transfer_configs_transfer_resources_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-transferConfigsId"><code>transferConfigsId</code></a>, <a href="#parameter-transferResourcesId"><code>transferResourcesId</code></a></td>
    <td></td>
    <td>Returns a transfer resource.</td>
</tr>
<tr>
    <td><a href="#projects_transfer_configs_transfer_resources_get"><CopyableCode code="projects_transfer_configs_transfer_resources_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-transferConfigsId"><code>transferConfigsId</code></a>, <a href="#parameter-transferResourcesId"><code>transferResourcesId</code></a></td>
    <td></td>
    <td>Returns a transfer resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_transfer_configs_transfer_resources_list"><CopyableCode code="projects_locations_transfer_configs_transfer_resources_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-transferConfigsId"><code>transferConfigsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Returns information about transfer resources.</td>
</tr>
<tr>
    <td><a href="#projects_transfer_configs_transfer_resources_list"><CopyableCode code="projects_transfer_configs_transfer_resources_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-transferConfigsId"><code>transferConfigsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Returns information about transfer resources.</td>
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
<tr id="parameter-transferConfigsId">
    <td><CopyableCode code="transferConfigsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-transferResourcesId">
    <td><CopyableCode code="transferResourcesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_transfer_configs_transfer_resources_get"
    values={[
        { label: 'projects_locations_transfer_configs_transfer_resources_get', value: 'projects_locations_transfer_configs_transfer_resources_get' },
        { label: 'projects_transfer_configs_transfer_resources_get', value: 'projects_transfer_configs_transfer_resources_get' },
        { label: 'projects_locations_transfer_configs_transfer_resources_list', value: 'projects_locations_transfer_configs_transfer_resources_list' },
        { label: 'projects_transfer_configs_transfer_resources_list', value: 'projects_transfer_configs_transfer_resources_list' }
    ]}
>
<TabItem value="projects_locations_transfer_configs_transfer_resources_get">

Returns a transfer resource.

```sql
SELECT
name,
destination,
hierarchyDetail,
lastSuccessfulRun,
latestRun,
latestStatusDetail,
type,
updateTime
FROM google.bigquerydatatransfer.transfer_resources
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND transferConfigsId = '{{ transferConfigsId }}' -- required
AND transferResourcesId = '{{ transferResourcesId }}' -- required
;
```
</TabItem>
<TabItem value="projects_transfer_configs_transfer_resources_get">

Returns a transfer resource.

```sql
SELECT
name,
destination,
hierarchyDetail,
lastSuccessfulRun,
latestRun,
latestStatusDetail,
type,
updateTime
FROM google.bigquerydatatransfer.transfer_resources
WHERE projectsId = '{{ projectsId }}' -- required
AND transferConfigsId = '{{ transferConfigsId }}' -- required
AND transferResourcesId = '{{ transferResourcesId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_transfer_configs_transfer_resources_list">

Returns information about transfer resources.

```sql
SELECT
name,
destination,
hierarchyDetail,
lastSuccessfulRun,
latestRun,
latestStatusDetail,
type,
updateTime
FROM google.bigquerydatatransfer.transfer_resources
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND transferConfigsId = '{{ transferConfigsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
;
```
</TabItem>
<TabItem value="projects_transfer_configs_transfer_resources_list">

Returns information about transfer resources.

```sql
SELECT
name,
destination,
hierarchyDetail,
lastSuccessfulRun,
latestRun,
latestStatusDetail,
type,
updateTime
FROM google.bigquerydatatransfer.transfer_resources
WHERE projectsId = '{{ projectsId }}' -- required
AND transferConfigsId = '{{ transferConfigsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
;
```
</TabItem>
</Tabs>
