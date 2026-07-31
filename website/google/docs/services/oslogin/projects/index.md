--- 
title: projects
hide_title: false
hide_table_of_contents: false
keywords:
  - projects
  - oslogin
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

Creates, updates, deletes, gets or lists a <code>projects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="projects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.oslogin.projects" /></td></tr>
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
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-usersId"><code>usersId</code></a>, <a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Deletes a POSIX account.</td>
</tr>
<tr>
    <td><a href="#provision_posix_account"><CopyableCode code="provision_posix_account" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-usersId"><code>usersId</code></a>, <a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Adds a POSIX account and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-usersId">
    <td><CopyableCode code="usersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes a POSIX account.

```sql
DELETE FROM google.oslogin.projects
WHERE usersId = '{{ usersId }}' --required
AND projectsId = '{{ projectsId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="provision_posix_account"
    values={[
        { label: 'provision_posix_account', value: 'provision_posix_account' }
    ]}
>
<TabItem value="provision_posix_account">

Adds a POSIX account and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.

```sql
EXEC google.oslogin.projects.provision_posix_account 
@usersId='{{ usersId }}' --required, 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"regions": "{{ regions }}"
}'
;
```
</TabItem>
</Tabs>
