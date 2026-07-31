--- 
title: host_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - host_groups
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

Creates, updates, deletes, gets or lists a <code>host_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="host_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.netapp.host_groups" /></td></tr>
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
    <td>Identifier. The resource name of the host group. Format: `projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/hostGroups/&#123;host_group_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time of the host group.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the host group.</td>
</tr>
<tr>
    <td><CopyableCode code="hosts" /></td>
    <td><code>array</code></td>
    <td>Required. The list of hosts associated with the host group.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels of the host group.</td>
</tr>
<tr>
    <td><CopyableCode code="osType" /></td>
    <td><code>string</code></td>
    <td>Required. The OS type of the host group. It indicates the type of operating system used by all of the hosts in the HostGroup. All hosts in a HostGroup must be of the same OS type. This can be set only when creating a HostGroup. (OS_TYPE_UNSPECIFIED, LINUX, WINDOWS, ESXI)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the host group. (STATE_UNSPECIFIED, CREATING, READY, UPDATING, DELETING, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Required. Type of the host group. (TYPE_UNSPECIFIED, ISCSI_INITIATOR)</td>
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
    <td>Identifier. The resource name of the host group. Format: `projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/hostGroups/&#123;host_group_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time of the host group.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the host group.</td>
</tr>
<tr>
    <td><CopyableCode code="hosts" /></td>
    <td><code>array</code></td>
    <td>Required. The list of hosts associated with the host group.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels of the host group.</td>
</tr>
<tr>
    <td><CopyableCode code="osType" /></td>
    <td><code>string</code></td>
    <td>Required. The OS type of the host group. It indicates the type of operating system used by all of the hosts in the HostGroup. All hosts in a HostGroup must be of the same OS type. This can be set only when creating a HostGroup. (OS_TYPE_UNSPECIFIED, LINUX, WINDOWS, ESXI)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the host group. (STATE_UNSPECIFIED, CREATING, READY, UPDATING, DELETING, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Required. Type of the host group. (TYPE_UNSPECIFIED, ISCSI_INITIATOR)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-hostGroupsId"><code>hostGroupsId</code></a></td>
    <td></td>
    <td>Returns details of the specified host group.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Returns a list of host groups in a `location`. Use `-` as location to list host groups across all locations.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-hostGroupId"><code>hostGroupId</code></a></td>
    <td>Creates a new host group.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-hostGroupsId"><code>hostGroupsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing host group.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-hostGroupsId"><code>hostGroupsId</code></a></td>
    <td></td>
    <td>Deletes a host group.</td>
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
<tr id="parameter-hostGroupsId">
    <td><CopyableCode code="hostGroupsId" /></td>
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
<tr id="parameter-hostGroupId">
    <td><CopyableCode code="hostGroupId" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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

Returns details of the specified host group.

```sql
SELECT
name,
createTime,
description,
hosts,
labels,
osType,
state,
type
FROM google.netapp.host_groups
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND hostGroupsId = '{{ hostGroupsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns a list of host groups in a `location`. Use `-` as location to list host groups across all locations.

```sql
SELECT
name,
createTime,
description,
hosts,
labels,
osType,
state,
type
FROM google.netapp.host_groups
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND orderBy = '{{ orderBy }}'
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

Creates a new host group.

```sql
INSERT INTO google.netapp.host_groups (
data__hosts,
data__labels,
data__name,
data__type,
data__osType,
data__description,
projectsId,
locationsId,
hostGroupId
)
SELECT 
'{{ hosts }}',
'{{ labels }}',
'{{ name }}',
'{{ type }}',
'{{ osType }}',
'{{ description }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ hostGroupId }}'
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
- name: host_groups
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the host_groups resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the host_groups resource.
    - name: hosts
      value:
        - "{{ hosts }}"
      description: |
        Required. The list of hosts associated with the host group.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Labels of the host group.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The resource name of the host group. Format: \`projects/{project_number}/locations/{location_id}/hostGroups/{host_group_id}\`.
    - name: type
      value: "{{ type }}"
      description: |
        Required. Type of the host group.
      valid_values: ['TYPE_UNSPECIFIED', 'ISCSI_INITIATOR']
    - name: osType
      value: "{{ osType }}"
      description: |
        Required. The OS type of the host group. It indicates the type of operating system used by all of the hosts in the HostGroup. All hosts in a HostGroup must be of the same OS type. This can be set only when creating a HostGroup.
      valid_values: ['OS_TYPE_UNSPECIFIED', 'LINUX', 'WINDOWS', 'ESXI']
    - name: description
      value: "{{ description }}"
      description: |
        Optional. Description of the host group.
    - name: hostGroupId
      value: "{{ hostGroupId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' }
    ]}
>
<TabItem value="patch">

Updates an existing host group.

```sql
UPDATE google.netapp.host_groups
SET 
data__hosts = '{{ hosts }}',
data__labels = '{{ labels }}',
data__name = '{{ name }}',
data__type = '{{ type }}',
data__osType = '{{ osType }}',
data__description = '{{ description }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND hostGroupsId = '{{ hostGroupsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
done,
error,
metadata,
response;
```
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

Deletes a host group.

```sql
DELETE FROM google.netapp.host_groups
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND hostGroupsId = '{{ hostGroupsId }}' --required
;
```
</TabItem>
</Tabs>
