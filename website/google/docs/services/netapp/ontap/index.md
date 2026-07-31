--- 
title: ontap
hide_title: false
hide_table_of_contents: false
keywords:
  - ontap
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

Creates, updates, deletes, gets or lists an <code>ontap</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ontap" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.netapp.ontap" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#execute_ontap_post"><CopyableCode code="execute_ontap_post" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-storagePoolsId"><code>storagePoolsId</code></a>, <a href="#parameter-ontapId"><code>ontapId</code></a></td>
    <td></td>
    <td>`ExecuteOntapPost` sends the ONTAP `POST` request to the `StoragePool` cluster.</td>
</tr>
<tr>
    <td><a href="#execute_ontap_get"><CopyableCode code="execute_ontap_get" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-storagePoolsId"><code>storagePoolsId</code></a>, <a href="#parameter-ontapId"><code>ontapId</code></a></td>
    <td></td>
    <td>`ExecuteOntapGet` sends the ONTAP `GET` request to the `StoragePool` cluster.</td>
</tr>
<tr>
    <td><a href="#execute_ontap_delete"><CopyableCode code="execute_ontap_delete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-storagePoolsId"><code>storagePoolsId</code></a>, <a href="#parameter-ontapId"><code>ontapId</code></a></td>
    <td></td>
    <td>`ExecuteOntapDelete` sends the ONTAP `DELETE` request to the `StoragePool` cluster.</td>
</tr>
<tr>
    <td><a href="#execute_ontap_patch"><CopyableCode code="execute_ontap_patch" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-storagePoolsId"><code>storagePoolsId</code></a>, <a href="#parameter-ontapId"><code>ontapId</code></a></td>
    <td></td>
    <td>`ExecuteOntapPatch` sends the ONTAP `PATCH` request to the `StoragePool` cluster.</td>
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
<tr id="parameter-ontapId">
    <td><CopyableCode code="ontapId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-storagePoolsId">
    <td><CopyableCode code="storagePoolsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="execute_ontap_post"
    values={[
        { label: 'execute_ontap_post', value: 'execute_ontap_post' },
        { label: 'execute_ontap_get', value: 'execute_ontap_get' },
        { label: 'execute_ontap_delete', value: 'execute_ontap_delete' },
        { label: 'execute_ontap_patch', value: 'execute_ontap_patch' }
    ]}
>
<TabItem value="execute_ontap_post">

`ExecuteOntapPost` sends the ONTAP `POST` request to the `StoragePool` cluster.

```sql
EXEC google.netapp.ontap.execute_ontap_post 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@storagePoolsId='{{ storagePoolsId }}' --required, 
@ontapId='{{ ontapId }}' --required 
@@json=
'{
"body": "{{ body }}"
}'
;
```
</TabItem>
<TabItem value="execute_ontap_get">

`ExecuteOntapGet` sends the ONTAP `GET` request to the `StoragePool` cluster.

```sql
EXEC google.netapp.ontap.execute_ontap_get 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@storagePoolsId='{{ storagePoolsId }}' --required, 
@ontapId='{{ ontapId }}' --required
;
```
</TabItem>
<TabItem value="execute_ontap_delete">

`ExecuteOntapDelete` sends the ONTAP `DELETE` request to the `StoragePool` cluster.

```sql
EXEC google.netapp.ontap.execute_ontap_delete 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@storagePoolsId='{{ storagePoolsId }}' --required, 
@ontapId='{{ ontapId }}' --required
;
```
</TabItem>
<TabItem value="execute_ontap_patch">

`ExecuteOntapPatch` sends the ONTAP `PATCH` request to the `StoragePool` cluster.

```sql
EXEC google.netapp.ontap.execute_ontap_patch 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@storagePoolsId='{{ storagePoolsId }}' --required, 
@ontapId='{{ ontapId }}' --required 
@@json=
'{
"body": "{{ body }}"
}'
;
```
</TabItem>
</Tabs>
