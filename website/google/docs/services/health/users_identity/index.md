--- 
title: users_identity
hide_title: false
hide_table_of_contents: false
keywords:
  - users_identity
  - health
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

Creates, updates, deletes, gets or lists a <code>users_identity</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users_identity" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.health.users_identity" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_identity"
    values={[
        { label: 'get_identity', value: 'get_identity' }
    ]}
>
<TabItem value="get_identity">

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
    <td>Identifier. The resource name of this Identity resource. Format: `users/me/identity`</td>
</tr>
<tr>
    <td><CopyableCode code="healthUserId" /></td>
    <td><code>string</code></td>
    <td>Output only. The Google User Identifier in the Google Health APIs. It matches the `&#123;user&#125;` resource ID segment in the resource name paths, e.g. `users/&#123;user&#125;/dataTypes/steps`. Valid values are strings of 1-63 characters, and valid characters are lowercase and uppercase letters, numbers, and hyphens.</td>
</tr>
<tr>
    <td><CopyableCode code="legacyUserId" /></td>
    <td><code>string</code></td>
    <td>Output only. The legacy Fitbit User identifier. This is the Fitbit ID used in the legacy Fitbit APIs (v1-v3). It can be referenced by clients migrating from the legacy Fitbit APIs to map their existing identifiers to the new Google user ID. It **must not** be used for any other purpose. It is not of any use for new clients using only the Google Health APIs. Valid values are strings of 1-63 characters, and valid characters are lowercase and uppercase letters, numbers, and hyphens.</td>
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
    <td><a href="#get_identity"><CopyableCode code="get_identity" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-usersId"><code>usersId</code></a></td>
    <td></td>
    <td>Gets the user's identity. It includes the legacy Fitbit user ID and the Google user ID and it can be used by migrating clients to map identifiers between the two systems.</td>
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
<tr id="parameter-usersId">
    <td><CopyableCode code="usersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_identity"
    values={[
        { label: 'get_identity', value: 'get_identity' }
    ]}
>
<TabItem value="get_identity">

Gets the user's identity. It includes the legacy Fitbit user ID and the Google user ID and it can be used by migrating clients to map identifiers between the two systems.

```sql
SELECT
name,
healthUserId,
legacyUserId
FROM google.health.users_identity
WHERE usersId = '{{ usersId }}' -- required
;
```
</TabItem>
</Tabs>
