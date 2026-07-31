--- 
title: discoveredprofiles
hide_title: false
hide_table_of_contents: false
keywords:
  - discoveredprofiles
  - workloadmanager
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

Creates, updates, deletes, gets or lists a <code>discoveredprofiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="discoveredprofiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.workloadmanager.discoveredprofiles" /></td></tr>
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
    <td>Identifier. name of resource names have the form 'projects/&#123;project_id&#125;/locations/&#123;location&#125;/workloadProfiles/&#123;workload_id&#125;'</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. such as name, description, version. More example can be found in deployment</td>
</tr>
<tr>
    <td><CopyableCode code="refreshedTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Required. time when the workload data was refreshed</td>
</tr>
<tr>
    <td><CopyableCode code="sapWorkload" /></td>
    <td><code>object</code></td>
    <td>The sap workload content (id: SapWorkload)</td>
</tr>
<tr>
    <td><CopyableCode code="workloadType" /></td>
    <td><code>string</code></td>
    <td>Required. The type of the workload (WORKLOAD_TYPE_UNSPECIFIED, S4_HANA)</td>
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
    <td>Identifier. name of resource names have the form 'projects/&#123;project_id&#125;/locations/&#123;location&#125;/workloadProfiles/&#123;workload_id&#125;'</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. such as name, description, version. More example can be found in deployment</td>
</tr>
<tr>
    <td><CopyableCode code="refreshedTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Required. time when the workload data was refreshed</td>
</tr>
<tr>
    <td><CopyableCode code="sapWorkload" /></td>
    <td><code>object</code></td>
    <td>The sap workload content (id: SapWorkload)</td>
</tr>
<tr>
    <td><CopyableCode code="workloadType" /></td>
    <td><code>string</code></td>
    <td>Required. The type of the workload (WORKLOAD_TYPE_UNSPECIFIED, S4_HANA)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-discoveredprofilesId"><code>discoveredprofilesId</code></a></td>
    <td></td>
    <td>Gets details of a discovered workload profile.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>List discovered workload profiles</td>
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
<tr id="parameter-discoveredprofilesId">
    <td><CopyableCode code="discoveredprofilesId" /></td>
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

Gets details of a discovered workload profile.

```sql
SELECT
name,
labels,
refreshedTime,
sapWorkload,
workloadType
FROM google.workloadmanager.discoveredprofiles
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND discoveredprofilesId = '{{ discoveredprofilesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

List discovered workload profiles

```sql
SELECT
name,
labels,
refreshedTime,
sapWorkload,
workloadType
FROM google.workloadmanager.discoveredprofiles
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
;
```
</TabItem>
</Tabs>
