--- 
title: internal
hide_title: false
hide_table_of_contents: false
keywords:
  - internal
  - geminicloudassist
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

Creates, updates, deletes, gets or lists an <code>internal</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="internal" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.geminicloudassist.internal" /></td></tr>
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
    <td><a href="#ask_cloud_assist"><CopyableCode code="ask_cloud_assist" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Calls the ask_cloud_assist tool. Called INTERNALLY by ESF after translating an MCP request.</td>
</tr>
<tr>
    <td><a href="#design_infra"><CopyableCode code="design_infra" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Calls the design_infra tool.</td>
</tr>
<tr>
    <td><a href="#investigate_issue"><CopyableCode code="investigate_issue" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Calls the investigate_issue tool.</td>
</tr>
<tr>
    <td><a href="#invoke_operation"><CopyableCode code="invoke_operation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Calls the invoke_operation tool.</td>
</tr>
<tr>
    <td><a href="#optimize_costs"><CopyableCode code="optimize_costs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Calls the optimize_costs tool.</td>
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
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="ask_cloud_assist"
    values={[
        { label: 'ask_cloud_assist', value: 'ask_cloud_assist' },
        { label: 'design_infra', value: 'design_infra' },
        { label: 'investigate_issue', value: 'investigate_issue' },
        { label: 'invoke_operation', value: 'invoke_operation' },
        { label: 'optimize_costs', value: 'optimize_costs' }
    ]}
>
<TabItem value="ask_cloud_assist">

Calls the ask_cloud_assist tool. Called INTERNALLY by ESF after translating an MCP request.

```sql
EXEC google.geminicloudassist.internal.ask_cloud_assist 
@@json=
'{
"contextId": "{{ contextId }}", 
"project": "{{ project }}", 
"userQuery": "{{ userQuery }}"
}'
;
```
</TabItem>
<TabItem value="design_infra">

Calls the design_infra tool.

```sql
EXEC google.geminicloudassist.internal.design_infra 
@@json=
'{
"command": "{{ command }}", 
"contextId": "{{ contextId }}", 
"project": "{{ project }}", 
"userQuery": "{{ userQuery }}"
}'
;
```
</TabItem>
<TabItem value="investigate_issue">

Calls the investigate_issue tool.

```sql
EXEC google.geminicloudassist.internal.investigate_issue 
@@json=
'{
"contextId": "{{ contextId }}", 
"project": "{{ project }}", 
"userQuery": "{{ userQuery }}"
}'
;
```
</TabItem>
<TabItem value="invoke_operation">

Calls the invoke_operation tool.

```sql
EXEC google.geminicloudassist.internal.invoke_operation 
@@json=
'{
"contextId": "{{ contextId }}", 
"project": "{{ project }}", 
"userQuery": "{{ userQuery }}"
}'
;
```
</TabItem>
<TabItem value="optimize_costs">

Calls the optimize_costs tool.

```sql
EXEC google.geminicloudassist.internal.optimize_costs 
@@json=
'{
"contextId": "{{ contextId }}", 
"project": "{{ project }}", 
"userQuery": "{{ userQuery }}"
}'
;
```
</TabItem>
</Tabs>
