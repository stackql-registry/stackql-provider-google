--- 
title: appgroups_monetization_config
hide_title: false
hide_table_of_contents: false
keywords:
  - appgroups_monetization_config
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

Creates, updates, deletes, gets or lists an <code>appgroups_monetization_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="appgroups_monetization_config" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.appgroups_monetization_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_appgroups_get_monetization_config"
    values={[
        { label: 'organizations_appgroups_get_monetization_config', value: 'organizations_appgroups_get_monetization_config' }
    ]}
>
<TabItem value="organizations_appgroups_get_monetization_config">

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
    <td><CopyableCode code="billingType" /></td>
    <td><code>string</code></td>
    <td>Required. Billing type. (BILLING_TYPE_UNSPECIFIED, PREPAID, POSTPAID)</td>
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
    <td><a href="#organizations_appgroups_get_monetization_config"><CopyableCode code="organizations_appgroups_get_monetization_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-appgroupsId"><code>appgroupsId</code></a></td>
    <td></td>
    <td>Gets the monetization configuration for the AppGroup.</td>
</tr>
<tr>
    <td><a href="#organizations_appgroups_update_monetization_config"><CopyableCode code="organizations_appgroups_update_monetization_config" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-appgroupsId"><code>appgroupsId</code></a></td>
    <td></td>
    <td>Updates the monetization configuration for the AppGroup. **Note:** We recommend that you avoid making concurrent update requests for the same resource. Near-simultaneous writes to the same entity can result in conflicts and unexpected behavior. Ensure operations are sequential when modifying a single resource.</td>
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
    defaultValue="organizations_appgroups_get_monetization_config"
    values={[
        { label: 'organizations_appgroups_get_monetization_config', value: 'organizations_appgroups_get_monetization_config' }
    ]}
>
<TabItem value="organizations_appgroups_get_monetization_config">

Gets the monetization configuration for the AppGroup.

```sql
SELECT
billingType
FROM google.apigee.appgroups_monetization_config
WHERE organizationsId = '{{ organizationsId }}' -- required
AND appgroupsId = '{{ appgroupsId }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="organizations_appgroups_update_monetization_config"
    values={[
        { label: 'organizations_appgroups_update_monetization_config', value: 'organizations_appgroups_update_monetization_config' }
    ]}
>
<TabItem value="organizations_appgroups_update_monetization_config">

Updates the monetization configuration for the AppGroup. **Note:** We recommend that you avoid making concurrent update requests for the same resource. Near-simultaneous writes to the same entity can result in conflicts and unexpected behavior. Ensure operations are sequential when modifying a single resource.

```sql
REPLACE google.apigee.appgroups_monetization_config
SET 
data__billingType = '{{ billingType }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND appgroupsId = '{{ appgroupsId }}' --required
RETURNING
billingType;
```
</TabItem>
</Tabs>
