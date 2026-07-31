--- 
title: resources_resource_post
hide_title: false
hide_table_of_contents: false
keywords:
  - resources_resource_post
  - connectors
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

Creates, updates, deletes, gets or lists a <code>resources_resource_post</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resources_resource_post" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.connectors.resources_resource_post" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_post"
    values={[
        { label: 'get_resource_post', value: 'get_resource_post' }
    ]}
>
<TabItem value="get_resource_post">

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
    <td><CopyableCode code="_meta" /></td>
    <td><code>object</code></td>
    <td>Metadata for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>string (byte)</code></td>
    <td>The content of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata like service latency, etc.</td>
</tr>
<tr>
    <td><CopyableCode code="mimeType" /></td>
    <td><code>string</code></td>
    <td>The MIME type of the resource.</td>
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
    <td><a href="#get_resource_post"><CopyableCode code="get_resource_post" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a>, <a href="#parameter-resourcesId"><code>resourcesId</code></a></td>
    <td></td>
    <td>Gets a specific resource with POST.</td>
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
<tr id="parameter-connectionsId">
    <td><CopyableCode code="connectionsId" /></td>
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
<tr id="parameter-resourcesId">
    <td><CopyableCode code="resourcesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_resource_post"
    values={[
        { label: 'get_resource_post', value: 'get_resource_post' }
    ]}
>
<TabItem value="get_resource_post">

Gets a specific resource with POST.

```sql
SELECT
_meta,
data,
metadata,
mimeType
FROM google.connectors.resources_resource_post
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND connectionsId = '{{ connectionsId }}' -- required
AND resourcesId = '{{ resourcesId }}' -- required
;
```
</TabItem>
</Tabs>
