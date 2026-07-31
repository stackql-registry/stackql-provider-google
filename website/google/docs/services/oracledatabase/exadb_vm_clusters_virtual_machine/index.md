--- 
title: exadb_vm_clusters_virtual_machine
hide_title: false
hide_table_of_contents: false
keywords:
  - exadb_vm_clusters_virtual_machine
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

Creates, updates, deletes, gets or lists an <code>exadb_vm_clusters_virtual_machine</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="exadb_vm_clusters_virtual_machine" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.oracledatabase.exadb_vm_clusters_virtual_machine" /></td></tr>
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
    <td><a href="#remove_virtual_machine"><CopyableCode code="remove_virtual_machine" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-exadbVmClustersId"><code>exadbVmClustersId</code></a></td>
    <td></td>
    <td>Removes virtual machines from an existing exadb vm cluster.</td>
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
<tr id="parameter-exadbVmClustersId">
    <td><CopyableCode code="exadbVmClustersId" /></td>
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
</tbody>
</table>

## `DELETE` examples

<Tabs
    defaultValue="remove_virtual_machine"
    values={[
        { label: 'remove_virtual_machine', value: 'remove_virtual_machine' }
    ]}
>
<TabItem value="remove_virtual_machine">

Removes virtual machines from an existing exadb vm cluster.

```sql
DELETE FROM google.oracledatabase.exadb_vm_clusters_virtual_machine
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND exadbVmClustersId = '{{ exadbVmClustersId }}' --required
;
```
</TabItem>
</Tabs>
