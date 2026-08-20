--- 
title: keyvaluemaps
hide_title: false
hide_table_of_contents: false
keywords:
  - keyvaluemaps
  - apigee
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

Creates, updates, deletes, gets or lists a <code>keyvaluemaps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="keyvaluemaps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.keyvaluemaps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_apis_keyvaluemaps_get"
    values={[
        { label: 'organizations_apis_keyvaluemaps_get', value: 'organizations_apis_keyvaluemaps_get' },
        { label: 'organizations_environments_keyvaluemaps_get', value: 'organizations_environments_keyvaluemaps_get' },
        { label: 'organizations_keyvaluemaps_get', value: 'organizations_keyvaluemaps_get' }
    ]}
>
<TabItem value="organizations_apis_keyvaluemaps_get">

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
    <td>Required. ID of the key value map.</td>
</tr>
<tr>
    <td><CopyableCode code="encrypted" /></td>
    <td><code>boolean</code></td>
    <td>Required. Flag that specifies whether entry values will be encrypted. This field is retained for backward compatibility and the value of encrypted will always be `true`. Apigee X and hybrid do not support unencrypted key value maps.</td>
</tr>
<tr>
    <td><CopyableCode code="maskedValues" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Flag that specifies whether entry values will be masked when returned.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_environments_keyvaluemaps_get">

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
    <td>Required. ID of the key value map.</td>
</tr>
<tr>
    <td><CopyableCode code="encrypted" /></td>
    <td><code>boolean</code></td>
    <td>Required. Flag that specifies whether entry values will be encrypted. This field is retained for backward compatibility and the value of encrypted will always be `true`. Apigee X and hybrid do not support unencrypted key value maps.</td>
</tr>
<tr>
    <td><CopyableCode code="maskedValues" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Flag that specifies whether entry values will be masked when returned.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_keyvaluemaps_get">

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
    <td>Required. ID of the key value map.</td>
</tr>
<tr>
    <td><CopyableCode code="encrypted" /></td>
    <td><code>boolean</code></td>
    <td>Required. Flag that specifies whether entry values will be encrypted. This field is retained for backward compatibility and the value of encrypted will always be `true`. Apigee X and hybrid do not support unencrypted key value maps.</td>
</tr>
<tr>
    <td><CopyableCode code="maskedValues" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Flag that specifies whether entry values will be masked when returned.</td>
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
    <td><a href="#organizations_apis_keyvaluemaps_get"><CopyableCode code="organizations_apis_keyvaluemaps_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-keyvaluemapsId"><code>keyvaluemapsId</code></a></td>
    <td></td>
    <td>Get the key value map scoped to an organization, environment, or API proxy.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_keyvaluemaps_get"><CopyableCode code="organizations_environments_keyvaluemaps_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-keyvaluemapsId"><code>keyvaluemapsId</code></a></td>
    <td></td>
    <td>Get the key value map scoped to an organization, environment, or API proxy.</td>
</tr>
<tr>
    <td><a href="#organizations_keyvaluemaps_get"><CopyableCode code="organizations_keyvaluemaps_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-keyvaluemapsId"><code>keyvaluemapsId</code></a></td>
    <td></td>
    <td>Get the key value map scoped to an organization, environment, or API proxy.</td>
</tr>
<tr>
    <td><a href="#organizations_apis_keyvaluemaps_create"><CopyableCode code="organizations_apis_keyvaluemaps_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a></td>
    <td></td>
    <td>Creates a key value map in an API proxy.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_keyvaluemaps_create"><CopyableCode code="organizations_environments_keyvaluemaps_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Creates a key value map in an environment.</td>
</tr>
<tr>
    <td><a href="#organizations_keyvaluemaps_create"><CopyableCode code="organizations_keyvaluemaps_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Creates a key value map in an organization.</td>
</tr>
<tr>
    <td><a href="#organizations_apis_keyvaluemaps_update"><CopyableCode code="organizations_apis_keyvaluemaps_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-keyvaluemapsId"><code>keyvaluemapsId</code></a></td>
    <td></td>
    <td>Update the key value map scoped to an organization, environment, or API proxy.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_keyvaluemaps_update"><CopyableCode code="organizations_environments_keyvaluemaps_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-keyvaluemapsId"><code>keyvaluemapsId</code></a></td>
    <td></td>
    <td>Update the key value map scoped to an organization, environment, or API proxy.</td>
</tr>
<tr>
    <td><a href="#organizations_keyvaluemaps_update"><CopyableCode code="organizations_keyvaluemaps_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-keyvaluemapsId"><code>keyvaluemapsId</code></a></td>
    <td></td>
    <td>Update the key value map scoped to an organization, environment, or API proxy.</td>
</tr>
<tr>
    <td><a href="#organizations_apis_keyvaluemaps_delete"><CopyableCode code="organizations_apis_keyvaluemaps_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-keyvaluemapsId"><code>keyvaluemapsId</code></a></td>
    <td></td>
    <td>Deletes a key value map from an API proxy.</td>
</tr>
<tr>
    <td><a href="#organizations_environments_keyvaluemaps_delete"><CopyableCode code="organizations_environments_keyvaluemaps_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-keyvaluemapsId"><code>keyvaluemapsId</code></a></td>
    <td></td>
    <td>Deletes a key value map from an environment.</td>
</tr>
<tr>
    <td><a href="#organizations_keyvaluemaps_delete"><CopyableCode code="organizations_keyvaluemaps_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-keyvaluemapsId"><code>keyvaluemapsId</code></a></td>
    <td></td>
    <td>Deletes a key value map from an organization.</td>
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
<tr id="parameter-apisId">
    <td><CopyableCode code="apisId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-environmentsId">
    <td><CopyableCode code="environmentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-keyvaluemapsId">
    <td><CopyableCode code="keyvaluemapsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_apis_keyvaluemaps_get"
    values={[
        { label: 'organizations_apis_keyvaluemaps_get', value: 'organizations_apis_keyvaluemaps_get' },
        { label: 'organizations_environments_keyvaluemaps_get', value: 'organizations_environments_keyvaluemaps_get' },
        { label: 'organizations_keyvaluemaps_get', value: 'organizations_keyvaluemaps_get' }
    ]}
>
<TabItem value="organizations_apis_keyvaluemaps_get">

Get the key value map scoped to an organization, environment, or API proxy.

```sql
SELECT
name,
encrypted,
maskedValues
FROM google.apigee.keyvaluemaps
WHERE organizationsId = '{{ organizationsId }}' -- required
AND apisId = '{{ apisId }}' -- required
AND keyvaluemapsId = '{{ keyvaluemapsId }}' -- required
;
```
</TabItem>
<TabItem value="organizations_environments_keyvaluemaps_get">

Get the key value map scoped to an organization, environment, or API proxy.

```sql
SELECT
name,
encrypted,
maskedValues
FROM google.apigee.keyvaluemaps
WHERE organizationsId = '{{ organizationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND keyvaluemapsId = '{{ keyvaluemapsId }}' -- required
;
```
</TabItem>
<TabItem value="organizations_keyvaluemaps_get">

Get the key value map scoped to an organization, environment, or API proxy.

```sql
SELECT
name,
encrypted,
maskedValues
FROM google.apigee.keyvaluemaps
WHERE organizationsId = '{{ organizationsId }}' -- required
AND keyvaluemapsId = '{{ keyvaluemapsId }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_apis_keyvaluemaps_create"
    values={[
        { label: 'organizations_apis_keyvaluemaps_create', value: 'organizations_apis_keyvaluemaps_create' },
        { label: 'organizations_environments_keyvaluemaps_create', value: 'organizations_environments_keyvaluemaps_create' },
        { label: 'organizations_keyvaluemaps_create', value: 'organizations_keyvaluemaps_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_apis_keyvaluemaps_create">

Creates a key value map in an API proxy.

```sql
INSERT INTO google.apigee.keyvaluemaps (
data__encrypted,
data__maskedValues,
data__name,
organizationsId,
apisId
)
SELECT 
{{ encrypted }},
{{ maskedValues }},
'{{ name }}',
'{{ organizationsId }}',
'{{ apisId }}'
RETURNING
name,
encrypted,
maskedValues
;
```
</TabItem>
<TabItem value="organizations_environments_keyvaluemaps_create">

Creates a key value map in an environment.

```sql
INSERT INTO google.apigee.keyvaluemaps (
data__encrypted,
data__maskedValues,
data__name,
organizationsId,
environmentsId
)
SELECT 
{{ encrypted }},
{{ maskedValues }},
'{{ name }}',
'{{ organizationsId }}',
'{{ environmentsId }}'
RETURNING
name,
encrypted,
maskedValues
;
```
</TabItem>
<TabItem value="organizations_keyvaluemaps_create">

Creates a key value map in an organization.

```sql
INSERT INTO google.apigee.keyvaluemaps (
data__encrypted,
data__maskedValues,
data__name,
organizationsId
)
SELECT 
{{ encrypted }},
{{ maskedValues }},
'{{ name }}',
'{{ organizationsId }}'
RETURNING
name,
encrypted,
maskedValues
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: keyvaluemaps
  props:
    - name: organizationsId
      value: "{{ organizationsId }}"
      description: Required parameter for the keyvaluemaps resource.
    - name: apisId
      value: "{{ apisId }}"
      description: Required parameter for the keyvaluemaps resource.
    - name: environmentsId
      value: "{{ environmentsId }}"
      description: Required parameter for the keyvaluemaps resource.
    - name: encrypted
      value: {{ encrypted }}
      description: |
        Required. Flag that specifies whether entry values will be encrypted. This field is retained for backward compatibility and the value of encrypted will always be \`true\`. Apigee X and hybrid do not support unencrypted key value maps.
    - name: maskedValues
      value: {{ maskedValues }}
      description: |
        Optional. Flag that specifies whether entry values will be masked when returned.
    - name: name
      value: "{{ name }}"
      description: |
        Required. ID of the key value map.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="organizations_apis_keyvaluemaps_update"
    values={[
        { label: 'organizations_apis_keyvaluemaps_update', value: 'organizations_apis_keyvaluemaps_update' },
        { label: 'organizations_environments_keyvaluemaps_update', value: 'organizations_environments_keyvaluemaps_update' },
        { label: 'organizations_keyvaluemaps_update', value: 'organizations_keyvaluemaps_update' }
    ]}
>
<TabItem value="organizations_apis_keyvaluemaps_update">

Update the key value map scoped to an organization, environment, or API proxy.

```sql
REPLACE google.apigee.keyvaluemaps
SET 
data__encrypted = {{ encrypted }},
data__maskedValues = {{ maskedValues }},
data__name = '{{ name }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND apisId = '{{ apisId }}' --required
AND keyvaluemapsId = '{{ keyvaluemapsId }}' --required
RETURNING
name,
encrypted,
maskedValues;
```
</TabItem>
<TabItem value="organizations_environments_keyvaluemaps_update">

Update the key value map scoped to an organization, environment, or API proxy.

```sql
REPLACE google.apigee.keyvaluemaps
SET 
data__encrypted = {{ encrypted }},
data__maskedValues = {{ maskedValues }},
data__name = '{{ name }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND keyvaluemapsId = '{{ keyvaluemapsId }}' --required
RETURNING
name,
encrypted,
maskedValues;
```
</TabItem>
<TabItem value="organizations_keyvaluemaps_update">

Update the key value map scoped to an organization, environment, or API proxy.

```sql
REPLACE google.apigee.keyvaluemaps
SET 
data__encrypted = {{ encrypted }},
data__maskedValues = {{ maskedValues }},
data__name = '{{ name }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND keyvaluemapsId = '{{ keyvaluemapsId }}' --required
RETURNING
name,
encrypted,
maskedValues;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_apis_keyvaluemaps_delete"
    values={[
        { label: 'organizations_apis_keyvaluemaps_delete', value: 'organizations_apis_keyvaluemaps_delete' },
        { label: 'organizations_environments_keyvaluemaps_delete', value: 'organizations_environments_keyvaluemaps_delete' },
        { label: 'organizations_keyvaluemaps_delete', value: 'organizations_keyvaluemaps_delete' }
    ]}
>
<TabItem value="organizations_apis_keyvaluemaps_delete">

Deletes a key value map from an API proxy.

```sql
DELETE FROM google.apigee.keyvaluemaps
WHERE organizationsId = '{{ organizationsId }}' --required
AND apisId = '{{ apisId }}' --required
AND keyvaluemapsId = '{{ keyvaluemapsId }}' --required
;
```
</TabItem>
<TabItem value="organizations_environments_keyvaluemaps_delete">

Deletes a key value map from an environment.

```sql
DELETE FROM google.apigee.keyvaluemaps
WHERE organizationsId = '{{ organizationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND keyvaluemapsId = '{{ keyvaluemapsId }}' --required
;
```
</TabItem>
<TabItem value="organizations_keyvaluemaps_delete">

Deletes a key value map from an organization.

```sql
DELETE FROM google.apigee.keyvaluemaps
WHERE organizationsId = '{{ organizationsId }}' --required
AND keyvaluemapsId = '{{ keyvaluemapsId }}' --required
;
```
</TabItem>
</Tabs>
