--- 
title: assets_export_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - assets_export_jobs
  - migrationcenter
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

Creates, updates, deletes, gets or lists an <code>assets_export_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assets_export_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.migrationcenter.assets_export_jobs" /></td></tr>
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
    <td>Output only. Identifier. Resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="condition" /></td>
    <td><code>object</code></td>
    <td>Optional. Conditions for selecting assets to export. (id: AssetsExportJobExportCondition)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Resource creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="inventory" /></td>
    <td><code>object</code></td>
    <td>Export asset inventory details. (id: AssetsExportJobInventory)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be &lt;= 128 bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="networkDependencies" /></td>
    <td><code>object</code></td>
    <td>Export data regarding asset network dependencies. (id: AssetsExportJobNetworkDependencies)</td>
</tr>
<tr>
    <td><CopyableCode code="performanceData" /></td>
    <td><code>object</code></td>
    <td>Export asset with performance data. (id: AssetsExportJobPerformanceData)</td>
</tr>
<tr>
    <td><CopyableCode code="recentExecutions" /></td>
    <td><code>array</code></td>
    <td>Output only. Recent non expired executions of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="showHidden" /></td>
    <td><code>boolean</code></td>
    <td>Optional. When this value is set to 'true' the response will include all assets, including those that are hidden.</td>
</tr>
<tr>
    <td><CopyableCode code="signedUriDestination" /></td>
    <td><code>object</code></td>
    <td>Export to Cloud Storage files downloadable using signed URIs. (id: SignedUriDestination)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Resource update time.</td>
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
    <td>Output only. Identifier. Resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="condition" /></td>
    <td><code>object</code></td>
    <td>Optional. Conditions for selecting assets to export. (id: AssetsExportJobExportCondition)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Resource creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="inventory" /></td>
    <td><code>object</code></td>
    <td>Export asset inventory details. (id: AssetsExportJobInventory)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be &lt;= 128 bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="networkDependencies" /></td>
    <td><code>object</code></td>
    <td>Export data regarding asset network dependencies. (id: AssetsExportJobNetworkDependencies)</td>
</tr>
<tr>
    <td><CopyableCode code="performanceData" /></td>
    <td><code>object</code></td>
    <td>Export asset with performance data. (id: AssetsExportJobPerformanceData)</td>
</tr>
<tr>
    <td><CopyableCode code="recentExecutions" /></td>
    <td><code>array</code></td>
    <td>Output only. Recent non expired executions of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="showHidden" /></td>
    <td><code>boolean</code></td>
    <td>Optional. When this value is set to 'true' the response will include all assets, including those that are hidden.</td>
</tr>
<tr>
    <td><CopyableCode code="signedUriDestination" /></td>
    <td><code>object</code></td>
    <td>Export to Cloud Storage files downloadable using signed URIs. (id: SignedUriDestination)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Resource update time.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-assetsExportJobsId"><code>assetsExportJobsId</code></a></td>
    <td></td>
    <td>Gets the details of an assets export job.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists all the assets export jobs in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-assetsExportJobId"><code>assetsExportJobId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new assets export job.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-assetsExportJobsId"><code>assetsExportJobsId</code></a></td>
    <td></td>
    <td>Deletes an assets export job.</td>
</tr>
<tr>
    <td><a href="#run"><CopyableCode code="run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-assetsExportJobsId"><code>assetsExportJobsId</code></a></td>
    <td></td>
    <td>Runs an assets export job, returning an AssetsExportJobExecution.</td>
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
<tr id="parameter-assetsExportJobsId">
    <td><CopyableCode code="assetsExportJobsId" /></td>
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
<tr id="parameter-assetsExportJobId">
    <td><CopyableCode code="assetsExportJobId" /></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
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

Gets the details of an assets export job.

```sql
SELECT
name,
condition,
createTime,
inventory,
labels,
networkDependencies,
performanceData,
recentExecutions,
showHidden,
signedUriDestination,
updateTime
FROM google.migrationcenter.assets_export_jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND assetsExportJobsId = '{{ assetsExportJobsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists all the assets export jobs in a given project and location.

```sql
SELECT
name,
condition,
createTime,
inventory,
labels,
networkDependencies,
performanceData,
recentExecutions,
showHidden,
signedUriDestination,
updateTime
FROM google.migrationcenter.assets_export_jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a new assets export job.

```sql
INSERT INTO google.migrationcenter.assets_export_jobs (
data__networkDependencies,
data__inventory,
data__showHidden,
data__condition,
data__signedUriDestination,
data__labels,
data__performanceData,
projectsId,
locationsId,
assetsExportJobId,
requestId
)
SELECT 
'{{ networkDependencies }}',
'{{ inventory }}',
{{ showHidden }},
'{{ condition }}',
'{{ signedUriDestination }}',
'{{ labels }}',
'{{ performanceData }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ assetsExportJobId }}',
'{{ requestId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: assets_export_jobs
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the assets_export_jobs resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the assets_export_jobs resource.
    - name: networkDependencies
      value: "{{ networkDependencies }}"
      description: |
        Export data regarding asset network dependencies.
    - name: inventory
      value: "{{ inventory }}"
      description: |
        Export asset inventory details.
    - name: showHidden
      value: {{ showHidden }}
      description: |
        Optional. When this value is set to 'true' the response will include all assets, including those that are hidden.
    - name: condition
      description: |
        Optional. Conditions for selecting assets to export.
      value:
        filter: "{{ filter }}"
    - name: signedUriDestination
      description: |
        Export to Cloud Storage files downloadable using signed URIs.
      value:
        fileFormat: "{{ fileFormat }}"
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Labels as key value pairs. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
    - name: performanceData
      description: |
        Export asset with performance data.
      value:
        maxDays: {{ maxDays }}
    - name: assetsExportJobId
      value: "{{ assetsExportJobId }}"
    - name: requestId
      value: "{{ requestId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes an assets export job.

```sql
DELETE FROM google.migrationcenter.assets_export_jobs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND assetsExportJobsId = '{{ assetsExportJobsId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="run"
    values={[
        { label: 'run', value: 'run' }
    ]}
>
<TabItem value="run">

Runs an assets export job, returning an AssetsExportJobExecution.

```sql
EXEC google.migrationcenter.assets_export_jobs.run 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@assetsExportJobsId='{{ assetsExportJobsId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}"
}'
;
```
</TabItem>
</Tabs>
