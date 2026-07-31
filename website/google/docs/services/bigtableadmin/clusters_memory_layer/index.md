--- 
title: clusters_memory_layer
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters_memory_layer
  - bigtableadmin
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

Creates, updates, deletes, gets or lists a <code>clusters_memory_layer</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="clusters_memory_layer" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigtableadmin.clusters_memory_layer" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_memory_layer"
    values={[
        { label: 'get_memory_layer', value: 'get_memory_layer' }
    ]}
>
<TabItem value="get_memory_layer">

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
    <td>Identifier. Name of the memory layer. This is always: "projects/&#123;project&#125;/instances/&#123;instance&#125;/clusters/&#123;cluster&#125;/memoryLayer".</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. The etag for this memory layer. This may be sent on update requests to ensure that the client has an up-to-date value before proceeding. The server returns an ABORTED error on a mismatched etag.</td>
</tr>
<tr>
    <td><CopyableCode code="memoryConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration of this memory layer. Set an empty `memory_config` to enable the memory layer. Unset this to disable the memory layer. (id: GoogleBigtableAdminV2MemoryLayerMemoryConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the memory layer. (STATE_NOT_KNOWN, READY, ENABLING, RESIZING, DISABLED)</td>
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
    <td><a href="#get_memory_layer"><CopyableCode code="get_memory_layer" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Gets information about the memory layer of a cluster.</td>
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
<tr id="parameter-instancesId">
    <td><CopyableCode code="instancesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_memory_layer"
    values={[
        { label: 'get_memory_layer', value: 'get_memory_layer' }
    ]}
>
<TabItem value="get_memory_layer">

Gets information about the memory layer of a cluster.

```sql
SELECT
name,
etag,
memoryConfig,
state
FROM google.bigtableadmin.clusters_memory_layer
WHERE projectsId = '{{ projectsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
AND clustersId = '{{ clustersId }}' -- required
;
```
</TabItem>
</Tabs>
