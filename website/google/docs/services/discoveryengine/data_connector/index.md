--- 
title: data_connector
hide_title: false
hide_table_of_contents: false
keywords:
  - data_connector
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

Creates, updates, deletes, gets or lists a <code>data_connector</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_connector" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.data_connector" /></td></tr>
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
    <td><a href="#projects_locations_collections_data_connector_mcp"><CopyableCode code="projects_locations_collections_data_connector_mcp" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a></td>
    <td><a href="#parameter-contentType"><code>contentType</code></a>, <a href="#parameter-data"><code>data</code></a>, <a href="#parameter-extensions"><code>extensions</code></a></td>
    <td>ServeMcpDeleteRequest serves a MCP DELETE request.</td>
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
<tr id="parameter-contentType">
    <td><CopyableCode code="contentType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-data">
    <td><CopyableCode code="data" /></td>
    <td><code>string (byte)</code></td>
    <td></td>
</tr>
<tr id="parameter-extensions">
    <td><CopyableCode code="extensions" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_collections_data_connector_mcp"
    values={[
        { label: 'projects_locations_collections_data_connector_mcp', value: 'projects_locations_collections_data_connector_mcp' }
    ]}
>
<TabItem value="projects_locations_collections_data_connector_mcp">

ServeMcpDeleteRequest serves a MCP DELETE request.

```sql
EXEC google.discoveryengine.data_connector.projects_locations_collections_data_connector_mcp 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@contentType='{{ contentType }}', 
@data='{{ data }}', 
@extensions='{{ extensions }}'
;
```
</TabItem>
</Tabs>
