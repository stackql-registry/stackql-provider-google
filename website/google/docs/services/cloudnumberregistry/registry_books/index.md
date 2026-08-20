--- 
title: registry_books
hide_title: false
hide_table_of_contents: false
keywords:
  - registry_books
  - cloudnumberregistry
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

Creates, updates, deletes, gets or lists a <code>registry_books</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="registry_books" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudnumberregistry.registry_books" /></td></tr>
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
    <td>Required. Identifier. The resource name of the RegistryBook.</td>
</tr>
<tr>
    <td><CopyableCode code="aggregatedData" /></td>
    <td><code>object</code></td>
    <td>Output only. Aggregated data for the RegistryBook. Populated only when the view is AGGREGATE. (id: AggregatedData)</td>
</tr>
<tr>
    <td><CopyableCode code="claimedScopes" /></td>
    <td><code>array</code></td>
    <td>Optional. List of scopes claimed by the RegistryBook. In Preview, Only project scope is supported. Each scope is in the format of projects/&#123;project&#125;. Each scope can only be claimed once.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the RegistryBook was created.</td>
</tr>
<tr>
    <td><CopyableCode code="isDefault" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the RegistryBook is the default one.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the RegistryBook was last updated.</td>
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
    <td>Required. Identifier. The resource name of the RegistryBook.</td>
</tr>
<tr>
    <td><CopyableCode code="aggregatedData" /></td>
    <td><code>object</code></td>
    <td>Output only. Aggregated data for the RegistryBook. Populated only when the view is AGGREGATE. (id: AggregatedData)</td>
</tr>
<tr>
    <td><CopyableCode code="claimedScopes" /></td>
    <td><code>array</code></td>
    <td>Optional. List of scopes claimed by the RegistryBook. In Preview, Only project scope is supported. Each scope is in the format of projects/&#123;project&#125;. Each scope can only be claimed once.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the RegistryBook was created.</td>
</tr>
<tr>
    <td><CopyableCode code="isDefault" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the RegistryBook is the default one.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the RegistryBook was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-registryBooksId"><code>registryBooksId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Gets details of a single RegistryBook.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Lists RegistryBooks in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-registryBookId"><code>registryBookId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new RegistryBook in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-registryBooksId"><code>registryBooksId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single RegistryBook.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-registryBooksId"><code>registryBooksId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single RegistryBook.</td>
</tr>
<tr>
    <td><a href="#search_ip_resources"><CopyableCode code="search_ip_resources" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-registryBooksId"><code>registryBooksId</code></a></td>
    <td></td>
    <td>Searches IP resources in a given RegistryBook.</td>
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
<tr id="parameter-registryBooksId">
    <td><CopyableCode code="registryBooksId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-registryBookId">
    <td><CopyableCode code="registryBookId" /></td>
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
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
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

Gets details of a single RegistryBook.

```sql
SELECT
name,
aggregatedData,
claimedScopes,
createTime,
isDefault,
labels,
updateTime
FROM google.cloudnumberregistry.registry_books
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND registryBooksId = '{{ registryBooksId }}' -- required
AND view = '{{ view }}'
;
```
</TabItem>
<TabItem value="list">

Lists RegistryBooks in a given project and location.

```sql
SELECT
name,
aggregatedData,
claimedScopes,
createTime,
isDefault,
labels,
updateTime
FROM google.cloudnumberregistry.registry_books
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND view = '{{ view }}'
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

Creates a new RegistryBook in a given project and location.

```sql
INSERT INTO google.cloudnumberregistry.registry_books (
data__claimedScopes,
data__labels,
data__name,
projectsId,
locationsId,
registryBookId,
requestId
)
SELECT 
'{{ claimedScopes }}',
'{{ labels }}',
'{{ name }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ registryBookId }}',
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
- name: registry_books
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the registry_books resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the registry_books resource.
    - name: claimedScopes
      value:
        - "{{ claimedScopes }}"
      description: |
        Optional. List of scopes claimed by the RegistryBook. In Preview, Only project scope is supported. Each scope is in the format of projects/{project}. Each scope can only be claimed once.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. User-defined labels.
    - name: name
      value: "{{ name }}"
      description: |
        Required. Identifier. The resource name of the RegistryBook.
    - name: registryBookId
      value: "{{ registryBookId }}"
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

Updates the parameters of a single RegistryBook.

```sql
UPDATE google.cloudnumberregistry.registry_books
SET 
data__claimedScopes = '{{ claimedScopes }}',
data__labels = '{{ labels }}',
data__name = '{{ name }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND registryBooksId = '{{ registryBooksId }}' --required
AND requestId = '{{ requestId}}'
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

Deletes a single RegistryBook.

```sql
DELETE FROM google.cloudnumberregistry.registry_books
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND registryBooksId = '{{ registryBooksId }}' --required
AND force = '{{ force }}'
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="search_ip_resources"
    values={[
        { label: 'search_ip_resources', value: 'search_ip_resources' }
    ]}
>
<TabItem value="search_ip_resources">

Searches IP resources in a given RegistryBook.

```sql
EXEC google.cloudnumberregistry.registry_books.search_ip_resources 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@registryBooksId='{{ registryBooksId }}' --required 
@@json=
'{
"orderBy": "{{ orderBy }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}", 
"query": "{{ query }}", 
"searchResourceTypes": "{{ searchResourceTypes }}", 
"showUtilization": {{ showUtilization }}
}'
;
```
</TabItem>
</Tabs>
