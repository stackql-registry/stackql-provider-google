--- 
title: bindings
hide_title: false
hide_table_of_contents: false
keywords:
  - bindings
  - agentregistry
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

Creates, updates, deletes, gets or lists a <code>bindings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bindings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.agentregistry.bindings" /></td></tr>
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
    <td>Required. Identifier. The resource name of the Binding. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/bindings/&#123;binding&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="authProviderBinding" /></td>
    <td><code>object</code></td>
    <td>The binding for AuthProvider. (id: AuthProviderBinding)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this binding was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User-defined description of a Binding. Can have a maximum length of `2048` characters.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User-defined display name for the Binding. Can have a maximum length of `63` characters.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>Required. The target Agent of the Binding. (id: Source)</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>object</code></td>
    <td>Required. The target Agent Registry Resource of the Binding. (id: Target)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this binding was last updated.</td>
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
    <td>Required. Identifier. The resource name of the Binding. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/bindings/&#123;binding&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="authProviderBinding" /></td>
    <td><code>object</code></td>
    <td>The binding for AuthProvider. (id: AuthProviderBinding)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this binding was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User-defined description of a Binding. Can have a maximum length of `2048` characters.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User-defined display name for the Binding. Can have a maximum length of `63` characters.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>Required. The target Agent of the Binding. (id: Source)</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>object</code></td>
    <td>Required. The target Agent Registry Resource of the Binding. (id: Target)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this binding was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bindingsId"><code>bindingsId</code></a></td>
    <td></td>
    <td>Gets details of a single Binding.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists Bindings in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-bindingId"><code>bindingId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new Binding in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bindingsId"><code>bindingsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single Binding.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-bindingsId"><code>bindingsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single Binding.</td>
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
<tr id="parameter-bindingsId">
    <td><CopyableCode code="bindingsId" /></td>
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
<tr id="parameter-bindingId">
    <td><CopyableCode code="bindingId" /></td>
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

Gets details of a single Binding.

```sql
SELECT
name,
authProviderBinding,
createTime,
description,
displayName,
source,
target,
updateTime
FROM google.agentregistry.bindings
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND bindingsId = '{{ bindingsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Bindings in a given project and location.

```sql
SELECT
name,
authProviderBinding,
createTime,
description,
displayName,
source,
target,
updateTime
FROM google.agentregistry.bindings
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
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

Creates a new Binding in a given project and location.

```sql
INSERT INTO google.agentregistry.bindings (
data__authProviderBinding,
data__description,
data__displayName,
data__name,
data__source,
data__target,
projectsId,
locationsId,
bindingId,
requestId
)
SELECT 
'{{ authProviderBinding }}',
'{{ description }}',
'{{ displayName }}',
'{{ name }}',
'{{ source }}',
'{{ target }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ bindingId }}',
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
- name: bindings
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the bindings resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the bindings resource.
    - name: authProviderBinding
      description: |
        The binding for AuthProvider.
      value:
        authProvider: "{{ authProvider }}"
        continueUri: "{{ continueUri }}"
        scopes:
          - "{{ scopes }}"
    - name: description
      value: "{{ description }}"
      description: |
        Optional. User-defined description of a Binding. Can have a maximum length of \`2048\` characters.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Optional. User-defined display name for the Binding. Can have a maximum length of \`63\` characters.
    - name: name
      value: "{{ name }}"
      description: |
        Required. Identifier. The resource name of the Binding. Format: \`projects/{project}/locations/{location}/bindings/{binding}\`.
    - name: source
      description: |
        Required. The target Agent of the Binding.
      value:
        identifier: "{{ identifier }}"
    - name: target
      description: |
        Required. The target Agent Registry Resource of the Binding.
      value:
        identifier: "{{ identifier }}"
    - name: bindingId
      value: "{{ bindingId }}"
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

Updates the parameters of a single Binding.

```sql
UPDATE google.agentregistry.bindings
SET 
data__authProviderBinding = '{{ authProviderBinding }}',
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__name = '{{ name }}',
data__source = '{{ source }}',
data__target = '{{ target }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bindingsId = '{{ bindingsId }}' --required
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

Deletes a single Binding.

```sql
DELETE FROM google.agentregistry.bindings
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND bindingsId = '{{ bindingsId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
