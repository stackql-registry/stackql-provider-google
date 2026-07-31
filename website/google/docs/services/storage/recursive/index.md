--- 
title: recursive
hide_title: false
hide_table_of_contents: false
keywords:
  - recursive
  - storage
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

Creates, updates, deletes, gets or lists a <code>recursive</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recursive" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.storage.recursive" /></td></tr>
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
    <td><a href="#delete_recursive"><CopyableCode code="delete_recursive" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-folder"><code>folder</code></a></td>
    <td><a href="#parameter-ifMetagenerationMatch"><code>ifMetagenerationMatch</code></a>, <a href="#parameter-ifMetagenerationNotMatch"><code>ifMetagenerationNotMatch</code></a></td>
    <td>Deletes a folder recursively. Only applicable to buckets with hierarchical namespace enabled.</td>
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
<tr id="parameter-bucket">
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-folder">
    <td><CopyableCode code="folder" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ifMetagenerationMatch">
    <td><CopyableCode code="ifMetagenerationMatch" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-ifMetagenerationNotMatch">
    <td><CopyableCode code="ifMetagenerationNotMatch" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `DELETE` examples

<Tabs
    defaultValue="delete_recursive"
    values={[
        { label: 'delete_recursive', value: 'delete_recursive' }
    ]}
>
<TabItem value="delete_recursive">

Deletes a folder recursively. Only applicable to buckets with hierarchical namespace enabled.

```sql
DELETE FROM google.storage.recursive
WHERE bucket = '{{ bucket }}' --required
AND folder = '{{ folder }}' --required
AND ifMetagenerationMatch = '{{ ifMetagenerationMatch }}'
AND ifMetagenerationNotMatch = '{{ ifMetagenerationNotMatch }}'
;
```
</TabItem>
</Tabs>
