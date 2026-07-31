--- 
title: goldengate_connection_assignments
hide_title: false
hide_table_of_contents: false
keywords:
  - goldengate_connection_assignments
  - oracledatabase
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

Creates, updates, deletes, gets or lists a <code>goldengate_connection_assignments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="goldengate_connection_assignments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.oracledatabase.goldengate_connection_assignments" /></td></tr>
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
    <td>Identifier. The name of the GoldengateConnectionAssignment resource in the following format: projects/&#123;project&#125;/locations/&#123;region&#125;/goldengateConnectionAssignments/&#123;goldengate_connection_assignment&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the connection assignment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The display name for the GoldengateConnectionAssignment.</td>
</tr>
<tr>
    <td><CopyableCode code="entitlementId" /></td>
    <td><code>string</code></td>
    <td>Output only. The OCID of the entitlement linked to this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels or tags associated with the GoldengateConnectionAssignment.</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>Required. The properties of the GoldengateConnectionAssignment. (id: GoldengateConnectionAssignmentProperties)</td>
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
    <td>Identifier. The name of the GoldengateConnectionAssignment resource in the following format: projects/&#123;project&#125;/locations/&#123;region&#125;/goldengateConnectionAssignments/&#123;goldengate_connection_assignment&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the connection assignment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The display name for the GoldengateConnectionAssignment.</td>
</tr>
<tr>
    <td><CopyableCode code="entitlementId" /></td>
    <td><code>string</code></td>
    <td>Output only. The OCID of the entitlement linked to this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels or tags associated with the GoldengateConnectionAssignment.</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>Required. The properties of the GoldengateConnectionAssignment. (id: GoldengateConnectionAssignmentProperties)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-goldengateConnectionAssignmentsId"><code>goldengateConnectionAssignmentsId</code></a></td>
    <td></td>
    <td>Gets details of a single GoldengateConnectionAssignment.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists GoldengateConnectionAssignments in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-goldengateConnectionAssignmentId"><code>goldengateConnectionAssignmentId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new GoldengateConnectionAssignment in a given project and location.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-goldengateConnectionAssignmentsId"><code>goldengateConnectionAssignmentsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single GoldengateConnectionAssignment.</td>
</tr>
<tr>
    <td><a href="#test"><CopyableCode code="test" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-goldengateConnectionAssignmentsId"><code>goldengateConnectionAssignmentsId</code></a></td>
    <td></td>
    <td>Tests a single GoldengateConnectionAssignment.</td>
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
<tr id="parameter-goldengateConnectionAssignmentsId">
    <td><CopyableCode code="goldengateConnectionAssignmentsId" /></td>
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
<tr id="parameter-goldengateConnectionAssignmentId">
    <td><CopyableCode code="goldengateConnectionAssignmentId" /></td>
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

Gets details of a single GoldengateConnectionAssignment.

```sql
SELECT
name,
createTime,
displayName,
entitlementId,
labels,
properties
FROM google.oracledatabase.goldengate_connection_assignments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND goldengateConnectionAssignmentsId = '{{ goldengateConnectionAssignmentsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists GoldengateConnectionAssignments in a given project and location.

```sql
SELECT
name,
createTime,
displayName,
entitlementId,
labels,
properties
FROM google.oracledatabase.goldengate_connection_assignments
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

Creates a new GoldengateConnectionAssignment in a given project and location.

```sql
INSERT INTO google.oracledatabase.goldengate_connection_assignments (
data__displayName,
data__properties,
data__name,
data__labels,
projectsId,
locationsId,
goldengateConnectionAssignmentId,
requestId
)
SELECT 
'{{ displayName }}',
'{{ properties }}',
'{{ name }}',
'{{ labels }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ goldengateConnectionAssignmentId }}',
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
- name: goldengate_connection_assignments
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the goldengate_connection_assignments resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the goldengate_connection_assignments resource.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Optional. The display name for the GoldengateConnectionAssignment.
    - name: properties
      description: |
        Required. The properties of the GoldengateConnectionAssignment.
      value:
        ocid: "{{ ocid }}"
        goldengateConnection: "{{ goldengateConnection }}"
        state: "{{ state }}"
        goldengateDeployment: "{{ goldengateDeployment }}"
        alias: "{{ alias }}"
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The name of the GoldengateConnectionAssignment resource in the following format: projects/{project}/locations/{region}/goldengateConnectionAssignments/{goldengate_connection_assignment}
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. The labels or tags associated with the GoldengateConnectionAssignment.
    - name: goldengateConnectionAssignmentId
      value: "{{ goldengateConnectionAssignmentId }}"
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

Deletes a single GoldengateConnectionAssignment.

```sql
DELETE FROM google.oracledatabase.goldengate_connection_assignments
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND goldengateConnectionAssignmentsId = '{{ goldengateConnectionAssignmentsId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="test"
    values={[
        { label: 'test', value: 'test' }
    ]}
>
<TabItem value="test">

Tests a single GoldengateConnectionAssignment.

```sql
EXEC google.oracledatabase.goldengate_connection_assignments.test 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@goldengateConnectionAssignmentsId='{{ goldengateConnectionAssignmentsId }}' --required 
@@json=
'{
"type": "{{ type }}"
}'
;
```
</TabItem>
</Tabs>
