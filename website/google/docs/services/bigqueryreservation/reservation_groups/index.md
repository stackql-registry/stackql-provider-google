--- 
title: reservation_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - reservation_groups
  - bigqueryreservation
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

Creates, updates, deletes, gets or lists a <code>reservation_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reservation_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigqueryreservation.reservation_groups" /></td></tr>
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
    <td>Identifier. The resource name of the reservation group, e.g., `projects/*/locations/*/reservationGroups/team1-prod`. The reservation_group_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="parentGroup" /></td>
    <td><code>string</code></td>
    <td>Optional. The parent reservation group of the reservation group. Format: `projects/*/locations/*/reservationGroups/team1-prod` for non-root reservation groups, or `projects/*/locations/*` for root reservation groups.</td>
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
    <td>Identifier. The resource name of the reservation group, e.g., `projects/*/locations/*/reservationGroups/team1-prod`. The reservation_group_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="parentGroup" /></td>
    <td><code>string</code></td>
    <td>Optional. The parent reservation group of the reservation group. Format: `projects/*/locations/*/reservationGroups/team1-prod` for non-root reservation groups, or `projects/*/locations/*` for root reservation groups.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reservationGroupsId"><code>reservationGroupsId</code></a></td>
    <td></td>
    <td>Returns information about the reservation group.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists all the reservation groups for the project in the specified location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-reservationGroupId"><code>reservationGroupId</code></a></td>
    <td>Creates a new reservation group.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reservationGroupsId"><code>reservationGroupsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing reservation group resource.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reservationGroupsId"><code>reservationGroupsId</code></a></td>
    <td></td>
    <td>Deletes a reservation. Returns `google.rpc.Code.FAILED_PRECONDITION` when reservation has assignments.</td>
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
<tr id="parameter-reservationGroupsId">
    <td><CopyableCode code="reservationGroupsId" /></td>
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
<tr id="parameter-reservationGroupId">
    <td><CopyableCode code="reservationGroupId" /></td>
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

Returns information about the reservation group.

```sql
SELECT
name,
parentGroup
FROM google.bigqueryreservation.reservation_groups
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND reservationGroupsId = '{{ reservationGroupsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists all the reservation groups for the project in the specified location.

```sql
SELECT
name,
parentGroup
FROM google.bigqueryreservation.reservation_groups
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

Creates a new reservation group.

```sql
INSERT INTO google.bigqueryreservation.reservation_groups (
data__name,
data__parentGroup,
projectsId,
locationsId,
reservationGroupId
)
SELECT 
'{{ name }}',
'{{ parentGroup }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ reservationGroupId }}'
RETURNING
name,
parentGroup
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: reservation_groups
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the reservation_groups resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the reservation_groups resource.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The resource name of the reservation group, e.g., \`projects/*/locations/*/reservationGroups/team1-prod\`. The reservation_group_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.
    - name: parentGroup
      value: "{{ parentGroup }}"
      description: |
        Optional. The parent reservation group of the reservation group. Format: \`projects/*/locations/*/reservationGroups/team1-prod\` for non-root reservation groups, or \`projects/*/locations/*\` for root reservation groups.
    - name: reservationGroupId
      value: "{{ reservationGroupId }}"
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

Updates an existing reservation group resource.

```sql
UPDATE google.bigqueryreservation.reservation_groups
SET 
data__name = '{{ name }}',
data__parentGroup = '{{ parentGroup }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND reservationGroupsId = '{{ reservationGroupsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
parentGroup;
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

Deletes a reservation. Returns `google.rpc.Code.FAILED_PRECONDITION` when reservation has assignments.

```sql
DELETE FROM google.bigqueryreservation.reservation_groups
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND reservationGroupsId = '{{ reservationGroupsId }}' --required
;
```
</TabItem>
</Tabs>
