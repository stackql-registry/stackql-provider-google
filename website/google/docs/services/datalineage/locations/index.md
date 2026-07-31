--- 
title: locations
hide_title: false
hide_table_of_contents: false
keywords:
  - locations
  - datalineage
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.datalineage.locations" /></td></tr>
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
    <td><a href="#batch_search_link_processes"><CopyableCode code="batch_search_link_processes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Retrieve information about LineageProcesses associated with specific links. LineageProcesses are transformation pipelines that result in data flowing from **source** to **target** assets. Links between assets represent this operation. If you have specific link names, you can use this method to verify which LineageProcesses contribute to creating those links. See the SearchLinks method for more information on how to retrieve link name. You can retrieve the LineageProcess information in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.</td>
</tr>
<tr>
    <td><a href="#process_open_lineage_run_event"><CopyableCode code="process_open_lineage_run_event" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates new lineage events together with their parents: process and run. Updates the process and run if they already exist. Mapped from Open Lineage specification: https://github.com/OpenLineage/OpenLineage/blob/main/spec/OpenLineage.json.</td>
</tr>
<tr>
    <td><a href="#search_links"><CopyableCode code="search_links" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Retrieve a list of links connected to a specific asset. Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are stored in the same project as the Lineage Events that create them. You can retrieve links in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.</td>
</tr>
<tr>
    <td><a href="#search_lineage_streaming"><CopyableCode code="search_lineage_streaming" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Retrieves a streaming response of lineage links connected to the requested assets by performing a breadth-first search in the given direction. Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are stored in the same project as the Lineage Events that create them. This method retrieves links from all valid locations provided in the request. This method supports Column-Level Lineage (CLL) along with wildcard support to retrieve all CLL for an Entity FQN. Following permissions are required to retrieve links: * `datalineage.events.get` permission for the project where the link is stored for entity-level lineage. * `datalineage.events.getFields` permission for the project where the link is stored for column-level lineage. This method also returns processes that created the links if explicitly requested by setting [max_process_per_link](google.cloud.datacatalog.lineage.v1.SearchLineageStreamingRequest.limits.max_process_per_link) is non-zero and full process details are requested via `links.processes.process` in the [FieldMask](https://developers.google.com/workspace/docs/api/how-tos/field-masks#read_with_a_field_mask). Permission required to retrieve processes: * `datalineage.processes.get` permission for the project where the process is stored.</td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="batch_search_link_processes"
    values={[
        { label: 'batch_search_link_processes', value: 'batch_search_link_processes' },
        { label: 'process_open_lineage_run_event', value: 'process_open_lineage_run_event' },
        { label: 'search_links', value: 'search_links' },
        { label: 'search_lineage_streaming', value: 'search_lineage_streaming' }
    ]}
>
<TabItem value="batch_search_link_processes">

Retrieve information about LineageProcesses associated with specific links. LineageProcesses are transformation pipelines that result in data flowing from **source** to **target** assets. Links between assets represent this operation. If you have specific link names, you can use this method to verify which LineageProcesses contribute to creating those links. See the SearchLinks method for more information on how to retrieve link name. You can retrieve the LineageProcess information in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.

```sql
EXEC google.datalineage.locations.batch_search_link_processes 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}", 
"links": "{{ links }}"
}'
;
```
</TabItem>
<TabItem value="process_open_lineage_run_event">

Creates new lineage events together with their parents: process and run. Updates the process and run if they already exist. Mapped from Open Lineage specification: https://github.com/OpenLineage/OpenLineage/blob/main/spec/OpenLineage.json.

```sql
EXEC google.datalineage.locations.process_open_lineage_run_event 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@requestId='{{ requestId }}'
;
```
</TabItem>
<TabItem value="search_links">

Retrieve a list of links connected to a specific asset. Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are stored in the same project as the Lineage Events that create them. You can retrieve links in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.

```sql
EXEC google.datalineage.locations.search_links 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"targets": "{{ targets }}", 
"source": "{{ source }}", 
"target": "{{ target }}", 
"pageToken": "{{ pageToken }}", 
"sources": "{{ sources }}", 
"pageSize": {{ pageSize }}
}'
;
```
</TabItem>
<TabItem value="search_lineage_streaming">

Retrieves a streaming response of lineage links connected to the requested assets by performing a breadth-first search in the given direction. Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are stored in the same project as the Lineage Events that create them. This method retrieves links from all valid locations provided in the request. This method supports Column-Level Lineage (CLL) along with wildcard support to retrieve all CLL for an Entity FQN. Following permissions are required to retrieve links: * `datalineage.events.get` permission for the project where the link is stored for entity-level lineage. * `datalineage.events.getFields` permission for the project where the link is stored for column-level lineage. This method also returns processes that created the links if explicitly requested by setting [max_process_per_link](google.cloud.datacatalog.lineage.v1.SearchLineageStreamingRequest.limits.max_process_per_link) is non-zero and full process details are requested via `links.processes.process` in the [FieldMask](https://developers.google.com/workspace/docs/api/how-tos/field-masks#read_with_a_field_mask). Permission required to retrieve processes: * `datalineage.processes.get` permission for the project where the process is stored.

```sql
EXEC google.datalineage.locations.search_lineage_streaming 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"rootCriteria": "{{ rootCriteria }}", 
"locations": "{{ locations }}", 
"direction": "{{ direction }}", 
"filters": "{{ filters }}", 
"limits": "{{ limits }}"
}'
;
```
</TabItem>
</Tabs>
