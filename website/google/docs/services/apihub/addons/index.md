--- 
title: addons
hide_title: false
hide_table_of_contents: false
keywords:
  - addons
  - apihub
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

Creates, updates, deletes, gets or lists an <code>addons</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="addons" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apihub.addons" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Identifier. The name of the addon to enable. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/addons/&#123;addon&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Required. The configuration of the addon. (id: GoogleCloudApihubV1AddonConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the addon was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSource" /></td>
    <td><code>string</code></td>
    <td>Required. The data source on which the addon operates. This determines which field in the `config` oneof is used. (DATA_SOURCE_UNSPECIFIED, PLUGIN_INSTANCE, ALL_DATA)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the addon.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the addon.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the addon. (ADDON_STATE_UNSPECIFIED, ACTIVE, UPDATING, ERROR, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the addon was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Identifier. The name of the addon to enable. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/addons/&#123;addon&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Required. The configuration of the addon. (id: GoogleCloudApihubV1AddonConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the addon was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSource" /></td>
    <td><code>string</code></td>
    <td>Required. The data source on which the addon operates. This determines which field in the `config` oneof is used. (DATA_SOURCE_UNSPECIFIED, PLUGIN_INSTANCE, ALL_DATA)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the addon.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the addon.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the addon. (ADDON_STATE_UNSPECIFIED, ACTIVE, UPDATING, ERROR, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the addon was last updated.</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-addonsId"><code>addonsId</code></a></td>
    <td></td>
    <td>Get an addon.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>List addons.</td>
</tr>
<tr>
    <td><a href="#manage_config"><CopyableCode code="manage_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-addonsId"><code>addonsId</code></a></td>
    <td></td>
    <td>Manage addon config. This RPC is used for managing the config of the addon. Calling this RPC moves the addon into an updating state until the long-running operation succeeds.</td>
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
<tr id="parameter-addonsId">
    <td><CopyableCode code="addonsId" /></td>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get an addon.

```sql
SELECT
name,
config,
createTime,
dataSource,
description,
displayName,
state,
updateTime
FROM google.apihub.addons
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND addonsId = '{{ addonsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

List addons.

```sql
SELECT
name,
config,
createTime,
dataSource,
description,
displayName,
state,
updateTime
FROM google.apihub.addons
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="manage_config"
    values={[
        { label: 'manage_config', value: 'manage_config' }
    ]}
>
<TabItem value="manage_config">

Manage addon config. This RPC is used for managing the config of the addon. Calling this RPC moves the addon into an updating state until the long-running operation succeeds.

```sql
EXEC google.apihub.addons.manage_config 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@addonsId='{{ addonsId }}' --required 
@@json=
'{
"config": "{{ config }}"
}'
;
```
</TabItem>
</Tabs>
