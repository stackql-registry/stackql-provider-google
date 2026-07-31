--- 
title: folders
hide_title: false
hide_table_of_contents: false
keywords:
  - folders
  - cloudkms
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

Creates, updates, deletes, gets or lists a <code>folders</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="folders" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudkms.folders" /></td></tr>
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
    <td><a href="#show_effective_autokey_config"><CopyableCode code="show_effective_autokey_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td></td>
    <td>Returns the effective Cloud KMS Autokey configuration for a given project or folder.</td>
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
<tr id="parameter-foldersId">
    <td><CopyableCode code="foldersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="show_effective_autokey_config"
    values={[
        { label: 'show_effective_autokey_config', value: 'show_effective_autokey_config' }
    ]}
>
<TabItem value="show_effective_autokey_config">

Returns the effective Cloud KMS Autokey configuration for a given project or folder.

```sql
EXEC google.cloudkms.folders.show_effective_autokey_config 
@foldersId='{{ foldersId }}' --required
;
```
</TabItem>
</Tabs>
