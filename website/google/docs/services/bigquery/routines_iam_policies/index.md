--- 
title: routines_iam_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - routines_iam_policies
  - bigquery
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

Creates, updates, deletes, gets or lists a <code>routines_iam_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>routines_iam_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigquery.routines_iam_policies" /></td></tr>
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
    <td><a href="#set_iam_policy"><CopyableCode code="set_iam_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-resource"><code>resource</code></a></td>
    <td></td>
    <td>Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.</td>
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
<tr id="parameter-resource">
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `REPLACE` examples

<Tabs
    defaultValue="set_iam_policy"
    values={[
        { label: 'set_iam_policy', value: 'set_iam_policy' }
    ]}
>
<TabItem value="set_iam_policy">

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

```sql
REPLACE google.bigquery.routines_iam_policies
SET 
data__updateMask = '{{ updateMask }}',
data__policy = '{{ policy }}'
WHERE 
resource = '{{ resource }}' --required
RETURNING
auditConfigs,
bindings,
etag,
version;
```
</TabItem>
</Tabs>
