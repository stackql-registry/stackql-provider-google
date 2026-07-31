--- 
title: appgroups_balance
hide_title: false
hide_table_of_contents: false
keywords:
  - appgroups_balance
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

Creates, updates, deletes, gets or lists an <code>appgroups_balance</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="appgroups_balance" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.appgroups_balance" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_appgroups_get_balance"
    values={[
        { label: 'organizations_appgroups_get_balance', value: 'organizations_appgroups_get_balance' }
    ]}
>
<TabItem value="organizations_appgroups_get_balance">

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
    <td><CopyableCode code="wallets" /></td>
    <td><code>array</code></td>
    <td>Output only. List of all wallets. Each individual wallet stores the account balance for a particular currency.</td>
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
    <td><a href="#organizations_appgroups_get_balance"><CopyableCode code="organizations_appgroups_get_balance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-appgroupsId"><code>appgroupsId</code></a></td>
    <td></td>
    <td>Gets the account balance for the AppGroup.</td>
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
<tr id="parameter-appgroupsId">
    <td><CopyableCode code="appgroupsId" /></td>
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
    defaultValue="organizations_appgroups_get_balance"
    values={[
        { label: 'organizations_appgroups_get_balance', value: 'organizations_appgroups_get_balance' }
    ]}
>
<TabItem value="organizations_appgroups_get_balance">

Gets the account balance for the AppGroup.

```sql
SELECT
wallets
FROM google.apigee.appgroups_balance
WHERE organizationsId = '{{ organizationsId }}' -- required
AND appgroupsId = '{{ appgroupsId }}' -- required
;
```
</TabItem>
</Tabs>
