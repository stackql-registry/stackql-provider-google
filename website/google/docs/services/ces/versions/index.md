--- 
title: versions
hide_title: false
hide_table_of_contents: false
keywords:
  - versions
  - ces
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.ces.versions" /></td></tr>
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
    <td>Identifier. The unique identifier of the app version. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/versions/&#123;version&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the app version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>string</code></td>
    <td>Output only. Email of the user who created the app version.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the app version.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The display name of the app version.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot" /></td>
    <td><code>object</code></td>
    <td>Output only. The snapshot of the app when the version is created. (id: AppSnapshot)</td>
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
    <td>Identifier. The unique identifier of the app version. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/versions/&#123;version&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the app version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>string</code></td>
    <td>Output only. Email of the user who created the app version.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the app version.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The display name of the app version.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot" /></td>
    <td><code>object</code></td>
    <td>Output only. The snapshot of the app when the version is created. (id: AppSnapshot)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td>Gets details of the specified app version.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists all app versions in the given app.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td><a href="#parameter-appVersionId"><code>appVersionId</code></a></td>
    <td>Creates a new app version in the given app.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes the specified app version.</td>
</tr>
<tr>
    <td><a href="#restore"><CopyableCode code="restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td>Restores the specified app version. This will create a new app version from the current draft app and overwrite the current draft with the specified app version.</td>
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
<tr id="parameter-appsId">
    <td><CopyableCode code="appsId" /></td>
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
<tr id="parameter-versionsId">
    <td><CopyableCode code="versionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-appVersionId">
    <td><CopyableCode code="appVersionId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
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

Gets details of the specified app version.

```sql
SELECT
name,
createTime,
creator,
description,
displayName,
etag,
snapshot
FROM google.ces.versions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND appsId = '{{ appsId }}' -- required
AND versionsId = '{{ versionsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists all app versions in the given app.

```sql
SELECT
name,
createTime,
creator,
description,
displayName,
etag,
snapshot
FROM google.ces.versions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND appsId = '{{ appsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
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

Creates a new app version in the given app.

```sql
INSERT INTO google.ces.versions (
data__name,
data__displayName,
data__description,
projectsId,
locationsId,
appsId,
appVersionId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ description }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ appsId }}',
'{{ appVersionId }}'
RETURNING
name,
createTime,
creator,
description,
displayName,
etag,
snapshot
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
    - name: appsId
      value: "{{ appsId }}"
      description: Required parameter for the versions resource.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The unique identifier of the app version. Format: \`projects/{project}/locations/{location}/apps/{app}/versions/{version}\`
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Optional. The display name of the app version.
    - name: description
      value: "{{ description }}"
      description: |
        Optional. The description of the app version.
    - name: appVersionId
      value: "{{ appVersionId }}"
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

Deletes the specified app version.

```sql
DELETE FROM google.ces.versions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND appsId = '{{ appsId }}' --required
AND versionsId = '{{ versionsId }}' --required
AND etag = '{{ etag }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="restore"
    values={[
        { label: 'restore', value: 'restore' }
    ]}
>
<TabItem value="restore">

Restores the specified app version. This will create a new app version from the current draft app and overwrite the current draft with the specified app version.

```sql
EXEC google.ces.versions.restore 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@appsId='{{ appsId }}' --required, 
@versionsId='{{ versionsId }}' --required
;
```
</TabItem>
</Tabs>
