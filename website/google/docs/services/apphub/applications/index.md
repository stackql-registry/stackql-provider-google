--- 
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - apphub
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

Creates, updates, deletes, gets or lists an <code>applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apphub.applications" /></td></tr>
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
    <td>Identifier. The resource name of an Application. Format: `"projects/&#123;host-project-id&#125;/locations/&#123;location&#125;/applications/&#123;application-id&#125;"`</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Optional. Consumer provided attributes. (id: Attributes)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User-defined description of an Application. Can have a maximum length of 2048 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User-defined name for the Application. Can have a maximum length of 63 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>object</code></td>
    <td>Required. Immutable. Defines what data can be included into this Application. Limits which Services and Workloads can be registered. (id: Scope)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Application state. (STATE_UNSPECIFIED, CREATING, ACTIVE, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. A universally unique identifier (in UUID4 format) for the `Application`.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update time.</td>
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
    <td>Identifier. The resource name of an Application. Format: `"projects/&#123;host-project-id&#125;/locations/&#123;location&#125;/applications/&#123;application-id&#125;"`</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Optional. Consumer provided attributes. (id: Attributes)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User-defined description of an Application. Can have a maximum length of 2048 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User-defined name for the Application. Can have a maximum length of 63 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>object</code></td>
    <td>Required. Immutable. Defines what data can be included into this Application. Limits which Services and Workloads can be registered. (id: Scope)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Application state. (STATE_UNSPECIFIED, CREATING, ACTIVE, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. A universally unique identifier (in UUID4 format) for the `Application`.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update time.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-applicationsId"><code>applicationsId</code></a></td>
    <td></td>
    <td>Gets an Application in a host project and location.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists Applications in a host project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-applicationId"><code>applicationId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates an Application in a host project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-applicationsId"><code>applicationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates an Application in a host project and location.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-applicationsId"><code>applicationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes an Application in a host project and location.</td>
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
<tr id="parameter-applicationsId">
    <td><CopyableCode code="applicationsId" /></td>
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
<tr id="parameter-applicationId">
    <td><CopyableCode code="applicationId" /></td>
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

Gets an Application in a host project and location.

```sql
SELECT
name,
attributes,
createTime,
description,
displayName,
scope,
state,
uid,
updateTime
FROM google.apphub.applications
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND applicationsId = '{{ applicationsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Applications in a host project and location.

```sql
SELECT
name,
attributes,
createTime,
description,
displayName,
scope,
state,
uid,
updateTime
FROM google.apphub.applications
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
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

Creates an Application in a host project and location.

```sql
INSERT INTO google.apphub.applications (
data__attributes,
data__displayName,
data__scope,
data__name,
data__description,
projectsId,
locationsId,
applicationId,
requestId
)
SELECT 
'{{ attributes }}',
'{{ displayName }}',
'{{ scope }}',
'{{ name }}',
'{{ description }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ applicationId }}',
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
- name: applications
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the applications resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the applications resource.
    - name: attributes
      description: |
        Optional. Consumer provided attributes.
      value:
        environment:
          type: "{{ type }}"
        developerOwners:
          - email: "{{ email }}"
            displayName: "{{ displayName }}"
        criticality:
          type: "{{ type }}"
        businessOwners:
          - email: "{{ email }}"
            displayName: "{{ displayName }}"
        operatorOwners:
          - email: "{{ email }}"
            displayName: "{{ displayName }}"
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Optional. User-defined name for the Application. Can have a maximum length of 63 characters.
    - name: scope
      description: |
        Required. Immutable. Defines what data can be included into this Application. Limits which Services and Workloads can be registered.
      value:
        type: "{{ type }}"
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The resource name of an Application. Format: \`"projects/{host-project-id}/locations/{location}/applications/{application-id}"\`
    - name: description
      value: "{{ description }}"
      description: |
        Optional. User-defined description of an Application. Can have a maximum length of 2048 characters.
    - name: applicationId
      value: "{{ applicationId }}"
    - name: requestId
      value: "{{ requestId }}"
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

Updates an Application in a host project and location.

```sql
UPDATE google.apphub.applications
SET 
data__attributes = '{{ attributes }}',
data__displayName = '{{ displayName }}',
data__scope = '{{ scope }}',
data__name = '{{ name }}',
data__description = '{{ description }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND applicationsId = '{{ applicationsId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
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

Deletes an Application in a host project and location.

```sql
DELETE FROM google.apphub.applications
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND applicationsId = '{{ applicationsId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
