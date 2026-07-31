--- 
title: apps_tool_schema
hide_title: false
hide_table_of_contents: false
keywords:
  - apps_tool_schema
  - ces
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

Creates, updates, deletes, gets or lists an <code>apps_tool_schema</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="apps_tool_schema" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.ces.apps_tool_schema" /></td></tr>
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
    <td><a href="#retrieve_tool_schema"><CopyableCode code="retrieve_tool_schema" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Retrieve the schema of the given tool. The schema is computed on the fly for the given instance of the tool.</td>
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
<tr id="parameter-appsId">
    <td><CopyableCode code="appsId" /></td>
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
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="retrieve_tool_schema"
    values={[
        { label: 'retrieve_tool_schema', value: 'retrieve_tool_schema' }
    ]}
>
<TabItem value="retrieve_tool_schema">

Retrieve the schema of the given tool. The schema is computed on the fly for the given instance of the tool.

```sql
EXEC google.ces.apps_tool_schema.retrieve_tool_schema 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@appsId='{{ appsId }}' --required 
@@json=
'{
"tool": "{{ tool }}", 
"toolsetTool": "{{ toolsetTool }}"
}'
;
```
</TabItem>
</Tabs>
