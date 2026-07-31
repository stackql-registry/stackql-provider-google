--- 
title: federations
hide_title: false
hide_table_of_contents: false
keywords:
  - federations
  - metastore
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

Creates, updates, deletes, gets or lists a <code>federations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="federations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.metastore.federations" /></td></tr>
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
    <td>Immutable. The relative resource name of the federation, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/federations/&#123;federation_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="backendMetastores" /></td>
    <td><code>object</code></td>
    <td>A map from BackendMetastore rank to BackendMetastores from which the federation service serves metadata at query time. The map key represents the order in which BackendMetastores should be evaluated to resolve database names at query time and should be greater than or equal to zero. A BackendMetastore with a lower number will be evaluated before a BackendMetastore with a higher number.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the metastore federation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endpointUri" /></td>
    <td><code>string</code></td>
    <td>Output only. The federation endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User-defined labels for the metastore federation.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the federation. (STATE_UNSPECIFIED, CREATING, ACTIVE, UPDATING, DELETING, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="stateMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Additional information about the current state of the metastore federation, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing"</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The globally unique resource identifier of the metastore federation.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the metastore federation was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Immutable. The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version.</td>
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
    <td>Immutable. The relative resource name of the federation, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/federations/&#123;federation_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="backendMetastores" /></td>
    <td><code>object</code></td>
    <td>A map from BackendMetastore rank to BackendMetastores from which the federation service serves metadata at query time. The map key represents the order in which BackendMetastores should be evaluated to resolve database names at query time and should be greater than or equal to zero. A BackendMetastore with a lower number will be evaluated before a BackendMetastore with a higher number.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the metastore federation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endpointUri" /></td>
    <td><code>string</code></td>
    <td>Output only. The federation endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User-defined labels for the metastore federation.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the federation. (STATE_UNSPECIFIED, CREATING, ACTIVE, UPDATING, DELETING, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="stateMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Additional information about the current state of the metastore federation, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing"</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The globally unique resource identifier of the metastore federation.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the metastore federation was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Immutable. The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-federationsId"><code>federationsId</code></a></td>
    <td></td>
    <td>Gets the details of a single federation.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists federations in a project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-federationId"><code>federationId</code></a></td>
    <td>Creates a metastore federation in a project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-federationsId"><code>federationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the fields of a federation.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-federationsId"><code>federationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single federation.</td>
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
<tr id="parameter-federationsId">
    <td><CopyableCode code="federationsId" /></td>
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
<tr id="parameter-federationId">
    <td><CopyableCode code="federationId" /></td>
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

Gets the details of a single federation.

```sql
SELECT
name,
backendMetastores,
createTime,
endpointUri,
labels,
state,
stateMessage,
tags,
uid,
updateTime,
version
FROM google.metastore.federations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND federationsId = '{{ federationsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists federations in a project and location.

```sql
SELECT
name,
backendMetastores,
createTime,
endpointUri,
labels,
state,
stateMessage,
tags,
uid,
updateTime,
version
FROM google.metastore.federations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
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

Creates a metastore federation in a project and location.

```sql
INSERT INTO google.metastore.federations (
data__tags,
data__labels,
data__version,
data__name,
data__backendMetastores,
projectsId,
locationsId,
requestId,
federationId
)
SELECT 
'{{ tags }}',
'{{ labels }}',
'{{ version }}',
'{{ name }}',
'{{ backendMetastores }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ requestId }}',
'{{ federationId }}'
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
- name: federations
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the federations resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the federations resource.
    - name: tags
      value: "{{ tags }}"
      description: |
        Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing"
    - name: labels
      value: "{{ labels }}"
      description: |
        User-defined labels for the metastore federation.
    - name: version
      value: "{{ version }}"
      description: |
        Immutable. The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version.
    - name: name
      value: "{{ name }}"
      description: |
        Immutable. The relative resource name of the federation, of the form: projects/{project_number}/locations/{location_id}/federations/{federation_id}\`.
    - name: backendMetastores
      value: "{{ backendMetastores }}"
      description: |
        A map from BackendMetastore rank to BackendMetastores from which the federation service serves metadata at query time. The map key represents the order in which BackendMetastores should be evaluated to resolve database names at query time and should be greater than or equal to zero. A BackendMetastore with a lower number will be evaluated before a BackendMetastore with a higher number.
    - name: requestId
      value: "{{ requestId }}"
    - name: federationId
      value: "{{ federationId }}"
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

Updates the fields of a federation.

```sql
UPDATE google.metastore.federations
SET 
data__tags = '{{ tags }}',
data__labels = '{{ labels }}',
data__version = '{{ version }}',
data__name = '{{ name }}',
data__backendMetastores = '{{ backendMetastores }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND federationsId = '{{ federationsId }}' --required
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

Deletes a single federation.

```sql
DELETE FROM google.metastore.federations
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND federationsId = '{{ federationsId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
