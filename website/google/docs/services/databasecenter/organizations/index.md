--- 
title: organizations
hide_title: false
hide_table_of_contents: false
keywords:
  - organizations
  - databasecenter
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

Creates, updates, deletes, gets or lists an <code>organizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.databasecenter.organizations" /></td></tr>
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
    <td><a href="#aggregate_query_stats"><CopyableCode code="aggregate_query_stats" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>AggregateQueryStats provides database resource query execution statistics.</td>
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
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="aggregate_query_stats"
    values={[
        { label: 'aggregate_query_stats', value: 'aggregate_query_stats' }
    ]}
>
<TabItem value="aggregate_query_stats">

AggregateQueryStats provides database resource query execution statistics.

```sql
EXEC google.databasecenter.organizations.aggregate_query_stats 
@organizationsId='{{ organizationsId }}' --required 
@@json=
'{
"orderBy": "{{ orderBy }}", 
"pageToken": "{{ pageToken }}", 
"filter": "{{ filter }}", 
"pageSize": {{ pageSize }}
}'
;
```
</TabItem>
</Tabs>
