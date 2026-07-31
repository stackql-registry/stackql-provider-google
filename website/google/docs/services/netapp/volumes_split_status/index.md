--- 
title: volumes_split_status
hide_title: false
hide_table_of_contents: false
keywords:
  - volumes_split_status
  - netapp
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

Creates, updates, deletes, gets or lists a <code>volumes_split_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="volumes_split_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.netapp.volumes_split_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_split_status"
    values={[
        { label: 'get_split_status', value: 'get_split_status' }
    ]}
>
<TabItem value="get_split_status">

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
    <td><CopyableCode code="progressPercent" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The estimated progress percentage of the split operation (0-100). This is meaningful primarily when split_state is IN_PROGRESS.</td>
</tr>
<tr>
    <td><CopyableCode code="splitState" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the clone split operation. (SPLIT_STATE_UNSPECIFIED, SPLIT_STATE_NOT_SPLITTING, SPLIT_STATE_IN_PROGRESS, SPLIT_STATE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="stateDetails" /></td>
    <td><code>string</code></td>
    <td>Output only. Human-readable details about the current state. Mostly used for displaying error messages during split failure Examples: "Split in progress", "Error: insufficient capacity".</td>
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
    <td><a href="#get_split_status"><CopyableCode code="get_split_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-volumesId"><code>volumesId</code></a></td>
    <td></td>
    <td>Retrieves the current state, progress, and details of a split operation for a volume. This method is relevant when the volume is a clone. For volumes that are not clones, this method will return an error.</td>
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
<tr id="parameter-volumesId">
    <td><CopyableCode code="volumesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_split_status"
    values={[
        { label: 'get_split_status', value: 'get_split_status' }
    ]}
>
<TabItem value="get_split_status">

Retrieves the current state, progress, and details of a split operation for a volume. This method is relevant when the volume is a clone. For volumes that are not clones, this method will return an error.

```sql
SELECT
progressPercent,
splitState,
stateDetails
FROM google.netapp.volumes_split_status
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND volumesId = '{{ volumesId }}' -- required
;
```
</TabItem>
</Tabs>
