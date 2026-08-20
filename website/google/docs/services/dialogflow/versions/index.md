--- 
title: versions
hide_title: false
hide_table_of_contents: false
keywords:
  - versions
  - dialogflow
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

Creates, updates, deletes, gets or lists a <code>versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_agents_flows_versions_get"
    values={[
        { label: 'projects_locations_agents_flows_versions_get', value: 'projects_locations_agents_flows_versions_get' },
        { label: 'projects_locations_agents_playbooks_versions_get', value: 'projects_locations_agents_playbooks_versions_get' },
        { label: 'projects_locations_agents_tools_versions_get', value: 'projects_locations_agents_tools_versions_get' },
        { label: 'projects_locations_agents_flows_versions_list', value: 'projects_locations_agents_flows_versions_list' },
        { label: 'projects_locations_agents_playbooks_versions_list', value: 'projects_locations_agents_playbooks_versions_list' },
        { label: 'projects_locations_agents_tools_versions_list', value: 'projects_locations_agents_tools_versions_list' }
    ]}
>
<TabItem value="projects_locations_agents_flows_versions_get">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="nluSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3NluSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td> (STATE_UNSPECIFIED, RUNNING, SUCCEEDED, FAILED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_playbooks_versions_get">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="examples" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="playbook" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3Playbook)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_tools_versions_get">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="tool" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3Tool)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_flows_versions_list">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="nluSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3NluSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td> (STATE_UNSPECIFIED, RUNNING, SUCCEEDED, FAILED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_playbooks_versions_list">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="examples" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="playbook" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3Playbook)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_tools_versions_list">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="tool" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3Tool)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
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
    <td><a href="#projects_locations_agents_flows_versions_get"><CopyableCode code="projects_locations_agents_flows_versions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_playbooks_versions_get"><CopyableCode code="projects_locations_agents_playbooks_versions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-playbooksId"><code>playbooksId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_tools_versions_get"><CopyableCode code="projects_locations_agents_tools_versions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-toolsId"><code>toolsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_versions_list"><CopyableCode code="projects_locations_agents_flows_versions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_playbooks_versions_list"><CopyableCode code="projects_locations_agents_playbooks_versions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-playbooksId"><code>playbooksId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_tools_versions_list"><CopyableCode code="projects_locations_agents_tools_versions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-toolsId"><code>toolsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_versions_create"><CopyableCode code="projects_locations_agents_flows_versions_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_playbooks_versions_create"><CopyableCode code="projects_locations_agents_playbooks_versions_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-playbooksId"><code>playbooksId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_tools_versions_create"><CopyableCode code="projects_locations_agents_tools_versions_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-toolsId"><code>toolsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_versions_patch"><CopyableCode code="projects_locations_agents_flows_versions_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_versions_delete"><CopyableCode code="projects_locations_agents_flows_versions_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_playbooks_versions_delete"><CopyableCode code="projects_locations_agents_playbooks_versions_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-playbooksId"><code>playbooksId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_tools_versions_delete"><CopyableCode code="projects_locations_agents_tools_versions_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-toolsId"><code>toolsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_versions_compare_versions"><CopyableCode code="projects_locations_agents_flows_versions_compare_versions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_flows_versions_load"><CopyableCode code="projects_locations_agents_flows_versions_load" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-flowsId"><code>flowsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_playbooks_versions_restore"><CopyableCode code="projects_locations_agents_playbooks_versions_restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-playbooksId"><code>playbooksId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_tools_versions_restore"><CopyableCode code="projects_locations_agents_tools_versions_restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-toolsId"><code>toolsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td></td>
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
<tr id="parameter-agentsId">
    <td><CopyableCode code="agentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-flowsId">
    <td><CopyableCode code="flowsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-playbooksId">
    <td><CopyableCode code="playbooksId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-toolsId">
    <td><CopyableCode code="toolsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-versionsId">
    <td><CopyableCode code="versionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_agents_flows_versions_get"
    values={[
        { label: 'projects_locations_agents_flows_versions_get', value: 'projects_locations_agents_flows_versions_get' },
        { label: 'projects_locations_agents_playbooks_versions_get', value: 'projects_locations_agents_playbooks_versions_get' },
        { label: 'projects_locations_agents_tools_versions_get', value: 'projects_locations_agents_tools_versions_get' },
        { label: 'projects_locations_agents_flows_versions_list', value: 'projects_locations_agents_flows_versions_list' },
        { label: 'projects_locations_agents_playbooks_versions_list', value: 'projects_locations_agents_playbooks_versions_list' },
        { label: 'projects_locations_agents_tools_versions_list', value: 'projects_locations_agents_tools_versions_list' }
    ]}
>
<TabItem value="projects_locations_agents_flows_versions_get">

Successful response

```sql
SELECT
name,
createTime,
description,
displayName,
nluSettings,
state
FROM google.dialogflow.versions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND flowsId = '{{ flowsId }}' -- required
AND versionsId = '{{ versionsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_agents_playbooks_versions_get">

Successful response

```sql
SELECT
name,
description,
examples,
playbook,
updateTime
FROM google.dialogflow.versions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND playbooksId = '{{ playbooksId }}' -- required
AND versionsId = '{{ versionsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_agents_tools_versions_get">

Successful response

```sql
SELECT
name,
createTime,
displayName,
tool,
updateTime
FROM google.dialogflow.versions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND toolsId = '{{ toolsId }}' -- required
AND versionsId = '{{ versionsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_agents_flows_versions_list">

Successful response

```sql
SELECT
name,
createTime,
description,
displayName,
nluSettings,
state
FROM google.dialogflow.versions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND flowsId = '{{ flowsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_playbooks_versions_list">

Successful response

```sql
SELECT
name,
description,
examples,
playbook,
updateTime
FROM google.dialogflow.versions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND playbooksId = '{{ playbooksId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_tools_versions_list">

Successful response

```sql
SELECT
name,
createTime,
displayName,
tool,
updateTime
FROM google.dialogflow.versions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND toolsId = '{{ toolsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_agents_flows_versions_create"
    values={[
        { label: 'projects_locations_agents_flows_versions_create', value: 'projects_locations_agents_flows_versions_create' },
        { label: 'projects_locations_agents_playbooks_versions_create', value: 'projects_locations_agents_playbooks_versions_create' },
        { label: 'projects_locations_agents_tools_versions_create', value: 'projects_locations_agents_tools_versions_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_agents_flows_versions_create">

No description available.

```sql
INSERT INTO google.dialogflow.versions (
data__description,
data__displayName,
data__name,
projectsId,
locationsId,
agentsId,
flowsId
)
SELECT 
'{{ description }}',
'{{ displayName }}',
'{{ name }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}',
'{{ flowsId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="projects_locations_agents_playbooks_versions_create">

No description available.

```sql
INSERT INTO google.dialogflow.versions (
data__description,
data__name,
projectsId,
locationsId,
agentsId,
playbooksId
)
SELECT 
'{{ description }}',
'{{ name }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}',
'{{ playbooksId }}'
RETURNING
name,
description,
examples,
playbook,
updateTime
;
```
</TabItem>
<TabItem value="projects_locations_agents_tools_versions_create">

No description available.

```sql
INSERT INTO google.dialogflow.versions (
data__displayName,
data__name,
data__tool,
projectsId,
locationsId,
agentsId,
toolsId
)
SELECT 
'{{ displayName }}',
'{{ name }}',
'{{ tool }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}',
'{{ toolsId }}'
RETURNING
name,
createTime,
displayName,
tool,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: versions
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the versions resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the versions resource.
    - name: agentsId
      value: "{{ agentsId }}"
      description: Required parameter for the versions resource.
    - name: flowsId
      value: "{{ flowsId }}"
      description: Required parameter for the versions resource.
    - name: playbooksId
      value: "{{ playbooksId }}"
      description: Required parameter for the versions resource.
    - name: toolsId
      value: "{{ toolsId }}"
      description: Required parameter for the versions resource.
    - name: description
      value: "{{ description }}"
    - name: displayName
      value: "{{ displayName }}"
    - name: name
      value: "{{ name }}"
    - name: tool
      value:
        dataStoreSpec:
          dataStoreConnections:
            - dataStore: "{{ dataStore }}"
              dataStoreType: "{{ dataStoreType }}"
              documentProcessingMode: "{{ documentProcessingMode }}"
          fallbackPrompt: "{{ fallbackPrompt }}"
        description: "{{ description }}"
        displayName: "{{ displayName }}"
        functionSpec:
          inputSchema: "{{ inputSchema }}"
          outputSchema: "{{ outputSchema }}"
        name: "{{ name }}"
        openApiSpec:
          authentication:
            apiKeyConfig:
              apiKey: "{{ apiKey }}"
              keyName: "{{ keyName }}"
              requestLocation: "{{ requestLocation }}"
              secretVersionForApiKey: "{{ secretVersionForApiKey }}"
            bearerTokenConfig:
              secretVersionForToken: "{{ secretVersionForToken }}"
              token: "{{ token }}"
            oauthConfig:
              clientId: "{{ clientId }}"
              clientSecret: "{{ clientSecret }}"
              oauthGrantType: "{{ oauthGrantType }}"
              scopes:
                - "{{ scopes }}"
              secretVersionForClientSecret: "{{ secretVersionForClientSecret }}"
              tokenEndpoint: "{{ tokenEndpoint }}"
            serviceAccountAuthConfig:
              serviceAccount: "{{ serviceAccount }}"
            serviceAgentAuthConfig:
              serviceAgentAuth: "{{ serviceAgentAuth }}"
          serviceDirectoryConfig:
            service: "{{ service }}"
          textSchema: "{{ textSchema }}"
          tlsConfig:
            caCerts:
              - cert: "{{ cert }}"
                displayName: "{{ displayName }}"
        toolType: "{{ toolType }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_agents_flows_versions_patch"
    values={[
        { label: 'projects_locations_agents_flows_versions_patch', value: 'projects_locations_agents_flows_versions_patch' }
    ]}
>
<TabItem value="projects_locations_agents_flows_versions_patch">

No description available.

```sql
UPDATE google.dialogflow.versions
SET 
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__name = '{{ name }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND flowsId = '{{ flowsId }}' --required
AND versionsId = '{{ versionsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
description,
displayName,
nluSettings,
state;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_agents_flows_versions_delete"
    values={[
        { label: 'projects_locations_agents_flows_versions_delete', value: 'projects_locations_agents_flows_versions_delete' },
        { label: 'projects_locations_agents_playbooks_versions_delete', value: 'projects_locations_agents_playbooks_versions_delete' },
        { label: 'projects_locations_agents_tools_versions_delete', value: 'projects_locations_agents_tools_versions_delete' }
    ]}
>
<TabItem value="projects_locations_agents_flows_versions_delete">

No description available.

```sql
DELETE FROM google.dialogflow.versions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND flowsId = '{{ flowsId }}' --required
AND versionsId = '{{ versionsId }}' --required
;
```
</TabItem>
<TabItem value="projects_locations_agents_playbooks_versions_delete">

No description available.

```sql
DELETE FROM google.dialogflow.versions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND playbooksId = '{{ playbooksId }}' --required
AND versionsId = '{{ versionsId }}' --required
;
```
</TabItem>
<TabItem value="projects_locations_agents_tools_versions_delete">

No description available.

```sql
DELETE FROM google.dialogflow.versions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND toolsId = '{{ toolsId }}' --required
AND versionsId = '{{ versionsId }}' --required
AND force = '{{ force }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_agents_flows_versions_compare_versions"
    values={[
        { label: 'projects_locations_agents_flows_versions_compare_versions', value: 'projects_locations_agents_flows_versions_compare_versions' },
        { label: 'projects_locations_agents_flows_versions_load', value: 'projects_locations_agents_flows_versions_load' },
        { label: 'projects_locations_agents_playbooks_versions_restore', value: 'projects_locations_agents_playbooks_versions_restore' },
        { label: 'projects_locations_agents_tools_versions_restore', value: 'projects_locations_agents_tools_versions_restore' }
    ]}
>
<TabItem value="projects_locations_agents_flows_versions_compare_versions">

Successful response

```sql
EXEC google.dialogflow.versions.projects_locations_agents_flows_versions_compare_versions 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@flowsId='{{ flowsId }}' --required, 
@versionsId='{{ versionsId }}' --required 
@@json=
'{
"languageCode": "{{ languageCode }}", 
"targetVersion": "{{ targetVersion }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_flows_versions_load">

Successful response

```sql
EXEC google.dialogflow.versions.projects_locations_agents_flows_versions_load 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@flowsId='{{ flowsId }}' --required, 
@versionsId='{{ versionsId }}' --required 
@@json=
'{
"allowOverrideAgentResources": {{ allowOverrideAgentResources }}
}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_playbooks_versions_restore">

Successful response

```sql
EXEC google.dialogflow.versions.projects_locations_agents_playbooks_versions_restore 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@playbooksId='{{ playbooksId }}' --required, 
@versionsId='{{ versionsId }}' --required
;
```
</TabItem>
<TabItem value="projects_locations_agents_tools_versions_restore">

Successful response

```sql
EXEC google.dialogflow.versions.projects_locations_agents_tools_versions_restore 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@toolsId='{{ toolsId }}' --required, 
@versionsId='{{ versionsId }}' --required
;
```
</TabItem>
</Tabs>
