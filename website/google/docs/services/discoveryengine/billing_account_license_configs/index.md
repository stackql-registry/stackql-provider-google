--- 
title: billing_account_license_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - billing_account_license_configs
  - discoveryengine
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

Creates, updates, deletes, gets or lists a <code>billing_account_license_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="billing_account_license_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.billing_account_license_configs" /></td></tr>
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
    <td><a href="#billing_accounts_billing_account_license_configs_retract_license_config"><CopyableCode code="billing_accounts_billing_account_license_configs_retract_license_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-billingAccountLicenseConfigsId"><code>billingAccountLicenseConfigsId</code></a></td>
    <td></td>
    <td>This method is called from the billing account side to retract the LicenseConfig from the given project back to the billing account.</td>
</tr>
<tr>
    <td><a href="#billing_accounts_billing_account_license_configs_distribute_license_config"><CopyableCode code="billing_accounts_billing_account_license_configs_distribute_license_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccountsId"><code>billingAccountsId</code></a>, <a href="#parameter-billingAccountLicenseConfigsId"><code>billingAccountLicenseConfigsId</code></a></td>
    <td></td>
    <td>Distributes a LicenseConfig from billing account level to project level.</td>
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
<tr id="parameter-billingAccountLicenseConfigsId">
    <td><CopyableCode code="billingAccountLicenseConfigsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-billingAccountsId">
    <td><CopyableCode code="billingAccountsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="billing_accounts_billing_account_license_configs_retract_license_config"
    values={[
        { label: 'billing_accounts_billing_account_license_configs_retract_license_config', value: 'billing_accounts_billing_account_license_configs_retract_license_config' },
        { label: 'billing_accounts_billing_account_license_configs_distribute_license_config', value: 'billing_accounts_billing_account_license_configs_distribute_license_config' }
    ]}
>
<TabItem value="billing_accounts_billing_account_license_configs_retract_license_config">

This method is called from the billing account side to retract the LicenseConfig from the given project back to the billing account.

```sql
EXEC google.discoveryengine.billing_account_license_configs.billing_accounts_billing_account_license_configs_retract_license_config 
@billingAccountsId='{{ billingAccountsId }}' --required, 
@billingAccountLicenseConfigsId='{{ billingAccountLicenseConfigsId }}' --required 
@@json=
'{
"licenseConfig": "{{ licenseConfig }}", 
"fullRetract": {{ fullRetract }}, 
"licenseCount": "{{ licenseCount }}"
}'
;
```
</TabItem>
<TabItem value="billing_accounts_billing_account_license_configs_distribute_license_config">

Distributes a LicenseConfig from billing account level to project level.

```sql
EXEC google.discoveryengine.billing_account_license_configs.billing_accounts_billing_account_license_configs_distribute_license_config 
@billingAccountsId='{{ billingAccountsId }}' --required, 
@billingAccountLicenseConfigsId='{{ billingAccountLicenseConfigsId }}' --required 
@@json=
'{
"projectNumber": "{{ projectNumber }}", 
"location": "{{ location }}", 
"licenseCount": "{{ licenseCount }}", 
"licenseConfigId": "{{ licenseConfigId }}"
}'
;
```
</TabItem>
</Tabs>
