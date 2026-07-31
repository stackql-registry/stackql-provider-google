--- 
title: runtime_revisions
hide_title: false
hide_table_of_contents: false
keywords:
  - runtime_revisions
  - aiplatform
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

Creates, updates, deletes, gets or lists a <code>runtime_revisions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="runtime_revisions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.runtime_revisions" /></td></tr>
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
    <td><a href="#stream_query"><CopyableCode code="stream_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a>, <a href="#parameter-runtimeRevisionsId"><code>runtimeRevisionsId</code></a></td>
    <td></td>
    <td>Streams queries using a reasoning engine.</td>
</tr>
<tr>
    <td><a href="#query"><CopyableCode code="query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a>, <a href="#parameter-runtimeRevisionsId"><code>runtimeRevisionsId</code></a></td>
    <td></td>
    <td>Queries using a reasoning engine.</td>
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
<tr id="parameter-reasoningEnginesId">
    <td><CopyableCode code="reasoningEnginesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-runtimeRevisionsId">
    <td><CopyableCode code="runtimeRevisionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="stream_query"
    values={[
        { label: 'stream_query', value: 'stream_query' },
        { label: 'query', value: 'query' }
    ]}
>
<TabItem value="stream_query">

Streams queries using a reasoning engine.

```sql
EXEC google.aiplatform.runtime_revisions.stream_query 
@reasoningEnginesId='{{ reasoningEnginesId }}' --required, 
@runtimeRevisionsId='{{ runtimeRevisionsId }}' --required 
@@json=
'{
"classMethod": "{{ classMethod }}", 
"input": "{{ input }}"
}'
;
```
</TabItem>
<TabItem value="query">

Queries using a reasoning engine.

```sql
EXEC google.aiplatform.runtime_revisions.query 
@reasoningEnginesId='{{ reasoningEnginesId }}' --required, 
@runtimeRevisionsId='{{ runtimeRevisionsId }}' --required 
@@json=
'{
"input": "{{ input }}", 
"classMethod": "{{ classMethod }}"
}'
;
```
</TabItem>
</Tabs>
