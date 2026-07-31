--- 
title: keys_policy
hide_title: false
hide_table_of_contents: false
keywords:
  - keys_policy
  - recaptchaenterprise
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

Creates, updates, deletes, gets or lists a <code>keys_policy</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="keys_policy" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.recaptchaenterprise.keys_policy" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_policy"
    values={[
        { label: 'get_policy', value: 'get_policy' }
    ]}
>
<TabItem value="get_policy">

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
    <td>Identifier. Resource name for this policy. Format: "projects/&#123;project&#125;/keys/&#123;key&#125;/policy" for a policy under a key.</td>
</tr>
<tr>
    <td><CopyableCode code="challengeRuleGroups" /></td>
    <td><code>array</code></td>
    <td>Optional. Rules to configure the behavior of reCAPTCHA for showing a challenge. Rule groups are evaluated in order. Evaluation stops when the first matching rule group is found.</td>
</tr>
<tr>
    <td><CopyableCode code="clientSettings" /></td>
    <td><code>object</code></td>
    <td>Required. Configuration for clients protected by this policy. (id: GoogleCloudRecaptchaenterpriseV1ClientSettings)</td>
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
    <td><a href="#get_policy"><CopyableCode code="get_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-keysId"><code>keysId</code></a></td>
    <td></td>
    <td>Get the policy for a key.</td>
</tr>
<tr>
    <td><a href="#update_policy"><CopyableCode code="update_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-keysId"><code>keysId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the policy for a key.</td>
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
<tr id="parameter-keysId">
    <td><CopyableCode code="keysId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_policy"
    values={[
        { label: 'get_policy', value: 'get_policy' }
    ]}
>
<TabItem value="get_policy">

Get the policy for a key.

```sql
SELECT
name,
challengeRuleGroups,
clientSettings
FROM google.recaptchaenterprise.keys_policy
WHERE projectsId = '{{ projectsId }}' -- required
AND keysId = '{{ keysId }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_policy"
    values={[
        { label: 'update_policy', value: 'update_policy' }
    ]}
>
<TabItem value="update_policy">

Updates the policy for a key.

```sql
UPDATE google.recaptchaenterprise.keys_policy
SET 
data__clientSettings = '{{ clientSettings }}',
data__name = '{{ name }}',
data__challengeRuleGroups = '{{ challengeRuleGroups }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND keysId = '{{ keysId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
challengeRuleGroups,
clientSettings;
```
</TabItem>
</Tabs>
