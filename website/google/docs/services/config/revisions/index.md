--- 
title: revisions
hide_title: false
hide_table_of_contents: false
keywords:
  - revisions
  - config
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

Creates, updates, deletes, gets or lists a <code>revisions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="revisions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.config.revisions" /></td></tr>
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
    <td>Identifier. The name of the deployment group revision. Format: 'projects/&#123;project_id&#125;/locations/&#123;location&#125;/deploymentGroups/&#123;deployment_group&#125;/revisions/&#123;revision&#125;'.</td>
</tr>
<tr>
    <td><CopyableCode code="alternativeIds" /></td>
    <td><code>array</code></td>
    <td>Output only. The alternative IDs of the deployment group revision.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the deployment group revision was created.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot" /></td>
    <td><code>object</code></td>
    <td>A DeploymentGroup is a collection of DeploymentUnits that in a DAG-like structure. (id: DeploymentGroup)</td>
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
    <td>Identifier. The name of the deployment group revision. Format: 'projects/&#123;project_id&#125;/locations/&#123;location&#125;/deploymentGroups/&#123;deployment_group&#125;/revisions/&#123;revision&#125;'.</td>
</tr>
<tr>
    <td><CopyableCode code="alternativeIds" /></td>
    <td><code>array</code></td>
    <td>Output only. The alternative IDs of the deployment group revision.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the deployment group revision was created.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot" /></td>
    <td><code>object</code></td>
    <td>A DeploymentGroup is a collection of DeploymentUnits that in a DAG-like structure. (id: DeploymentGroup)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentGroupsId"><code>deploymentGroupsId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td></td>
    <td>Gets details about a DeploymentGroupRevision.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentGroupsId"><code>deploymentGroupsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists DeploymentGroupRevisions in a given DeploymentGroup.</td>
</tr>
<tr>
    <td><a href="#export_state"><CopyableCode code="export_state" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td></td>
    <td>Exports Terraform state file from a given revision.</td>
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
<tr id="parameter-deploymentGroupsId">
    <td><CopyableCode code="deploymentGroupsId" /></td>
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
<tr id="parameter-revisionsId">
    <td><CopyableCode code="revisionsId" /></td>
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

Gets details about a DeploymentGroupRevision.

```sql
SELECT
name,
alternativeIds,
createTime,
snapshot
FROM google.config.revisions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND deploymentGroupsId = '{{ deploymentGroupsId }}' -- required
AND revisionsId = '{{ revisionsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists DeploymentGroupRevisions in a given DeploymentGroup.

```sql
SELECT
name,
alternativeIds,
createTime,
snapshot
FROM google.config.revisions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND deploymentGroupsId = '{{ deploymentGroupsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="export_state"
    values={[
        { label: 'export_state', value: 'export_state' }
    ]}
>
<TabItem value="export_state">

Exports Terraform state file from a given revision.

```sql
EXEC google.config.revisions.export_state 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@deploymentsId='{{ deploymentsId }}' --required, 
@revisionsId='{{ revisionsId }}' --required
;
```
</TabItem>
</Tabs>
