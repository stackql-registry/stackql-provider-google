--- 
title: responses
hide_title: false
hide_table_of_contents: false
keywords:
  - responses
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

Creates, updates, deletes, gets or lists a <code>responses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="responses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.responses" /></td></tr>
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
    <td><a href="#compact"><CopyableCode code="compact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-publishersId"><code>publishersId</code></a></td>
    <td><a href="#parameter-deployedModelId"><code>deployedModelId</code></a></td>
    <td>Forwards arbitrary HTTP requests for both streaming and non-streaming cases. To use this method, invoke_route_prefix must be set to allow the paths that will be specified in the request.</td>
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
<tr id="parameter-publishersId">
    <td><CopyableCode code="publishersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-deployedModelId">
    <td><CopyableCode code="deployedModelId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="compact"
    values={[
        { label: 'compact', value: 'compact' }
    ]}
>
<TabItem value="compact">

Forwards arbitrary HTTP requests for both streaming and non-streaming cases. To use this method, invoke_route_prefix must be set to allow the paths that will be specified in the request.

```sql
EXEC google.aiplatform.responses.compact 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@publishersId='{{ publishersId }}' --required, 
@deployedModelId='{{ deployedModelId }}' 
@@json=
'{
"contentType": "{{ contentType }}", 
"data": "{{ data }}", 
"extensions": "{{ extensions }}"
}'
;
```
</TabItem>
</Tabs>
