--- 
title: cloudasset
hide_title: false
hide_table_of_contents: false
keywords:
  - cloudasset
  - cloudasset
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

Creates, updates, deletes, gets or lists a <code>cloudasset</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cloudasset" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudasset.cloudasset" /></td></tr>
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
    <td><a href="#analyze_org_policies"><CopyableCode code="analyze_org_policies" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-scope"><code>scope</code></a></td>
    <td><a href="#parameter-constraint"><code>constraint</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Analyzes organization policies under a scope.</td>
</tr>
<tr>
    <td><a href="#analyze_org_policy_governed_containers"><CopyableCode code="analyze_org_policy_governed_containers" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-scope"><code>scope</code></a></td>
    <td><a href="#parameter-constraint"><code>constraint</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Analyzes organization policies governed containers (projects, folders or organization) under a scope.</td>
</tr>
<tr>
    <td><a href="#export_assets"><CopyableCode code="export_assets" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-parentType"><code>parentType</code></a>, <a href="#parameter-parent"><code>parent</code></a></td>
    <td></td>
    <td>Exports assets with time and resource types to a given Cloud Storage location/BigQuery table. For Cloud Storage location destinations, the output format is newline-delimited JSON. Each line represents a google.cloud.asset.v1.Asset in the JSON format; for BigQuery table destinations, the output table stores the fields in asset Protobuf as columns. This API implements the google.longrunning.Operation API, which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.</td>
</tr>
<tr>
    <td><a href="#search_all_resources"><CopyableCode code="search_all_resources" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-scope"><code>scope</code></a></td>
    <td><a href="#parameter-assetTypes"><code>assetTypes</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>Searches all Google Cloud resources within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllResources` permission on the desired scope, otherwise the request will be rejected.</td>
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
<tr id="parameter-parent">
    <td><CopyableCode code="parent" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-parentType">
    <td><CopyableCode code="parentType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-scope">
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-assetTypes">
    <td><CopyableCode code="assetTypes" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-constraint">
    <td><CopyableCode code="constraint" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-readMask">
    <td><CopyableCode code="readMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="analyze_org_policies"
    values={[
        { label: 'analyze_org_policies', value: 'analyze_org_policies' },
        { label: 'analyze_org_policy_governed_containers', value: 'analyze_org_policy_governed_containers' },
        { label: 'export_assets', value: 'export_assets' },
        { label: 'search_all_resources', value: 'search_all_resources' }
    ]}
>
<TabItem value="analyze_org_policies">

Analyzes organization policies under a scope.

```sql
EXEC google.cloudasset.cloudasset.analyze_org_policies 
@scope='{{ scope }}' --required, 
@constraint='{{ constraint }}', 
@filter='{{ filter }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}'
;
```
</TabItem>
<TabItem value="analyze_org_policy_governed_containers">

Analyzes organization policies governed containers (projects, folders or organization) under a scope.

```sql
EXEC google.cloudasset.cloudasset.analyze_org_policy_governed_containers 
@scope='{{ scope }}' --required, 
@constraint='{{ constraint }}', 
@filter='{{ filter }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}'
;
```
</TabItem>
<TabItem value="export_assets">

Exports assets with time and resource types to a given Cloud Storage location/BigQuery table. For Cloud Storage location destinations, the output format is newline-delimited JSON. Each line represents a google.cloud.asset.v1.Asset in the JSON format; for BigQuery table destinations, the output table stores the fields in asset Protobuf as columns. This API implements the google.longrunning.Operation API, which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.

```sql
EXEC google.cloudasset.cloudasset.export_assets 
@parentType='{{ parentType }}' --required, 
@parent='{{ parent }}' --required 
@@json=
'{
"assetTypes": "{{ assetTypes }}", 
"contentType": "{{ contentType }}", 
"outputConfig": "{{ outputConfig }}", 
"readTime": "{{ readTime }}", 
"relationshipTypes": "{{ relationshipTypes }}"
}'
;
```
</TabItem>
<TabItem value="search_all_resources">

Searches all Google Cloud resources within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllResources` permission on the desired scope, otherwise the request will be rejected.

```sql
EXEC google.cloudasset.cloudasset.search_all_resources 
@scope='{{ scope }}' --required, 
@assetTypes='{{ assetTypes }}', 
@orderBy='{{ orderBy }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}', 
@query='{{ query }}', 
@readMask='{{ readMask }}'
;
```
</TabItem>
</Tabs>
