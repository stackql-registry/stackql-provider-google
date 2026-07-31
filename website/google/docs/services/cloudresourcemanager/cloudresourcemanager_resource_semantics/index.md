--- 
title: cloudresourcemanager_resource_semantics
hide_title: false
hide_table_of_contents: false
keywords:
  - cloudresourcemanager_resource_semantics
  - cloudresourcemanager
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

Creates, updates, deletes, gets or lists a <code>cloudresourcemanager_resource_semantics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cloudresourcemanager_resource_semantics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudresourcemanager.cloudresourcemanager_resource_semantics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="fetch_resource_semantics"
    values={[
        { label: 'fetch_resource_semantics', value: 'fetch_resource_semantics' }
    ]}
>
<TabItem value="fetch_resource_semantics">

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
    <td><CopyableCode code="fullResourceName" /></td>
    <td><code>string</code></td>
    <td>The full resource name for which semantics are returned. Examples: "//compute.googleapis.com/projects/123/zones/us-central1-a/instances/my-instance" "//storage.googleapis.com/projects/_/buckets/my_bucket"</td>
</tr>
<tr>
    <td><CopyableCode code="semantics" /></td>
    <td><code>object</code></td>
    <td>Map of resource semantics (e.g., `"ENVIRONMENT": "PRODUCTION"`).</td>
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
    <td><a href="#fetch_resource_semantics"><CopyableCode code="fetch_resource_semantics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-fullResourceName"><code>fullResourceName</code></a></td>
    <td>Returns the semantics associated with the specified resource.</td>
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
<tr id="parameter-fullResourceName">
    <td><CopyableCode code="fullResourceName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="fetch_resource_semantics"
    values={[
        { label: 'fetch_resource_semantics', value: 'fetch_resource_semantics' }
    ]}
>
<TabItem value="fetch_resource_semantics">

Returns the semantics associated with the specified resource.

```sql
SELECT
fullResourceName,
semantics
FROM google.cloudresourcemanager.cloudresourcemanager_resource_semantics
WHERE fullResourceName = '{{ fullResourceName }}'
;
```
</TabItem>
</Tabs>
