--- 
title: databasecenter
hide_title: false
hide_table_of_contents: false
keywords:
  - databasecenter
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

Creates, updates, deletes, gets or lists a <code>databasecenter</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="databasecenter" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.databasecenter.databasecenter" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="query_products"
    values={[
        { label: 'query_products', value: 'query_products' }
    ]}
>
<TabItem value="query_products">

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages</td>
</tr>
<tr>
    <td><CopyableCode code="products" /></td>
    <td><code>array</code></td>
    <td>List of database products returned.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachable" /></td>
    <td><code>array</code></td>
    <td>Unordered list. List of unreachable regions from where data could not be retrieved.</td>
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
    <td><a href="#query_products"><CopyableCode code="query_products" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-parent"><code>parent</code></a></td>
    <td>QueryProducts provides a list of all possible products which can be used to filter database resources.</td>
</tr>
<tr>
    <td><a href="#aggregate_fleet"><CopyableCode code="aggregate_fleet" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-baselineDate.day"><code>baselineDate.day</code></a>, <a href="#parameter-baselineDate.month"><code>baselineDate.month</code></a>, <a href="#parameter-baselineDate.year"><code>baselineDate.year</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-groupBy"><code>groupBy</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-parent"><code>parent</code></a></td>
    <td>AggregateFleet provides statistics about the fleet grouped by various fields.</td>
</tr>
<tr>
    <td><a href="#aggregate_issue_stats"><CopyableCode code="aggregate_issue_stats" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>AggregateIssueStats provides database resource issues statistics.</td>
</tr>
<tr>
    <td><a href="#query_database_resource_groups"><CopyableCode code="query_database_resource_groups" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>QueryDatabaseResourceGroups returns paginated results of database groups.</td>
</tr>
<tr>
    <td><a href="#query_issues"><CopyableCode code="query_issues" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>QueryIssues provides a list of issues and recommendations that a user has access to and that are within the requested scope.</td>
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
<tr id="parameter-baselineDate.day">
    <td><CopyableCode code="baselineDate.day" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-baselineDate.month">
    <td><CopyableCode code="baselineDate.month" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-baselineDate.year">
    <td><CopyableCode code="baselineDate.year" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-groupBy">
    <td><CopyableCode code="groupBy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
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
<tr id="parameter-parent">
    <td><CopyableCode code="parent" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="query_products"
    values={[
        { label: 'query_products', value: 'query_products' }
    ]}
>
<TabItem value="query_products">

QueryProducts provides a list of all possible products which can be used to filter database resources.

```sql
SELECT
nextPageToken,
products,
unreachable
FROM google.databasecenter.databasecenter
WHERE pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND parent = '{{ parent }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="aggregate_fleet"
    values={[
        { label: 'aggregate_fleet', value: 'aggregate_fleet' },
        { label: 'aggregate_issue_stats', value: 'aggregate_issue_stats' },
        { label: 'query_database_resource_groups', value: 'query_database_resource_groups' },
        { label: 'query_issues', value: 'query_issues' }
    ]}
>
<TabItem value="aggregate_fleet">

AggregateFleet provides statistics about the fleet grouped by various fields.

```sql
EXEC google.databasecenter.databasecenter.aggregate_fleet 
@baselineDate.day='{{ baselineDate.day }}', 
@baselineDate.month='{{ baselineDate.month }}', 
@baselineDate.year='{{ baselineDate.year }}', 
@filter='{{ filter }}', 
@groupBy='{{ groupBy }}', 
@orderBy='{{ orderBy }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}', 
@parent='{{ parent }}'
;
```
</TabItem>
<TabItem value="aggregate_issue_stats">

AggregateIssueStats provides database resource issues statistics.

```sql
EXEC google.databasecenter.databasecenter.aggregate_issue_stats 
@@json=
'{
"baselineDate": "{{ baselineDate }}", 
"filter": "{{ filter }}", 
"parent": "{{ parent }}", 
"signalTypeGroups": "{{ signalTypeGroups }}"
}'
;
```
</TabItem>
<TabItem value="query_database_resource_groups">

QueryDatabaseResourceGroups returns paginated results of database groups.

```sql
EXEC google.databasecenter.databasecenter.query_database_resource_groups 
@@json=
'{
"filter": "{{ filter }}", 
"orderBy": "{{ orderBy }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}", 
"parent": "{{ parent }}", 
"signalFilters": "{{ signalFilters }}", 
"signalProductsFilters": "{{ signalProductsFilters }}", 
"signalTypeGroups": "{{ signalTypeGroups }}"
}'
;
```
</TabItem>
<TabItem value="query_issues">

QueryIssues provides a list of issues and recommendations that a user has access to and that are within the requested scope.

```sql
EXEC google.databasecenter.databasecenter.query_issues 
@@json=
'{
"filter": "{{ filter }}", 
"orderBy": "{{ orderBy }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}", 
"parent": "{{ parent }}", 
"signalProductsFilters": "{{ signalProductsFilters }}"
}'
;
```
</TabItem>
</Tabs>
