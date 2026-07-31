--- 
title: actuations
hide_title: false
hide_table_of_contents: false
keywords:
  - actuations
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

Creates, updates, deletes, gets or lists an <code>actuations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="actuations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.workloadmanager.actuations" /></td></tr>
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
    <td>The name of the actuation resource. The format is projects/&#123;project&#125;/locations/&#123;location&#125;/deployments/&#123;deployment&#125;/actuations/&#123;actuation&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="actuationOutput" /></td>
    <td><code>object</code></td>
    <td>Output only. Actuation output. (id: ActuationOutput)</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentOutput" /></td>
    <td><code>array</code></td>
    <td>Output only. Deployment output.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. End time stamp.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Start time stamp.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Actuation state. (STATE_UNSPECIFIED, INFRA_CREATING, SUCCEEDED, FAILED, POST_INFRA_CONFIGURING, INFRA_DESTROYING, TIMEOUT)</td>
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
    <td>The name of the actuation resource. The format is projects/&#123;project&#125;/locations/&#123;location&#125;/deployments/&#123;deployment&#125;/actuations/&#123;actuation&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="actuationOutput" /></td>
    <td><code>object</code></td>
    <td>Output only. Actuation output. (id: ActuationOutput)</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentOutput" /></td>
    <td><code>array</code></td>
    <td>Output only. Deployment output.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. End time stamp.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Start time stamp.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Actuation state. (STATE_UNSPECIFIED, INFRA_CREATING, SUCCEEDED, FAILED, POST_INFRA_CONFIGURING, INFRA_DESTROYING, TIMEOUT)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a>, <a href="#parameter-actuationsId"><code>actuationsId</code></a></td>
    <td></td>
    <td>Gets details of a single Actuation.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists Actuations in a given project, location and deployment.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new actuation for an existing Deployment.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a>, <a href="#parameter-actuationsId"><code>actuationsId</code></a></td>
    <td></td>
    <td>Deletes a single Actuation.</td>
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
<tr id="parameter-actuationsId">
    <td><CopyableCode code="actuationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-deploymentsId">
    <td><CopyableCode code="deploymentsId" /></td>
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

Gets details of a single Actuation.

```sql
SELECT
name,
actuationOutput,
deploymentOutput,
endTime,
startTime,
state
FROM google.workloadmanager.actuations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND deploymentsId = '{{ deploymentsId }}' -- required
AND actuationsId = '{{ actuationsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Actuations in a given project, location and deployment.

```sql
SELECT
name,
actuationOutput,
deploymentOutput,
endTime,
startTime,
state
FROM google.workloadmanager.actuations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND deploymentsId = '{{ deploymentsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
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

Creates a new actuation for an existing Deployment.

```sql
INSERT INTO google.workloadmanager.actuations (
data__name,
projectsId,
locationsId,
deploymentsId,
requestId
)
SELECT 
'{{ name }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ deploymentsId }}',
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
- name: actuations
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the actuations resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the actuations resource.
    - name: deploymentsId
      value: "{{ deploymentsId }}"
      description: Required parameter for the actuations resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the actuation resource. The format is projects/{project}/locations/{location}/deployments/{deployment}/actuations/{actuation}.
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

Deletes a single Actuation.

```sql
DELETE FROM google.workloadmanager.actuations
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND deploymentsId = '{{ deploymentsId }}' --required
AND actuationsId = '{{ actuationsId }}' --required
;
```
</TabItem>
</Tabs>
