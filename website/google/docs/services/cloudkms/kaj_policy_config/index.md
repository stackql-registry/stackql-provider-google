--- 
title: kaj_policy_config
hide_title: false
hide_table_of_contents: false
keywords:
  - kaj_policy_config
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

Creates, updates, deletes, gets or lists a <code>kaj_policy_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="kaj_policy_config" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudkms.kaj_policy_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_kaj_policy_config"
    values={[
        { label: 'get_kaj_policy_config', value: 'get_kaj_policy_config' }
    ]}
>
<TabItem value="get_kaj_policy_config">

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
    <td>Identifier. Represents the resource name for this KeyAccessJustificationsPolicyConfig in the format of "&#123;organizations|folders|projects&#125;/*/kajPolicyConfig".</td>
</tr>
<tr>
    <td><CopyableCode code="defaultKeyAccessJustificationPolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. Specifies the default key access justifications (KAJ) policy used when a CryptoKey is created in this folder. This is only used when a Key Access Justifications policy is not provided in the CreateCryptoKeyRequest. This overrides any default policies in its ancestry. If this field is unset, or is set but contains an empty allowed_access_reasons list, no default Key Access Justifications (KAJ) policy configuration is active. In this scenario, all newly created keys will default to an "allow-all" policy. (id: KeyAccessJustificationsPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultPolicyAvailable" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether this parent resource is available to default policy feature. Please consult [the prerequisite of default policy feature](https://cloud.google.com/assured-workloads/key-access-justifications/docs/set-default-policy#before) for more details.</td>
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
    <td><a href="#get_kaj_policy_config"><CopyableCode code="get_kaj_policy_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td></td>
    <td>Gets the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project.</td>
</tr>
<tr>
    <td><a href="#update_kaj_policy_config"><CopyableCode code="update_kaj_policy_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project.</td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_kaj_policy_config"
    values={[
        { label: 'get_kaj_policy_config', value: 'get_kaj_policy_config' }
    ]}
>
<TabItem value="get_kaj_policy_config">

Gets the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project.

```sql
SELECT
name,
defaultKeyAccessJustificationPolicy,
defaultPolicyAvailable
FROM google.cloudkms.kaj_policy_config
WHERE foldersId = '{{ foldersId }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_kaj_policy_config"
    values={[
        { label: 'update_kaj_policy_config', value: 'update_kaj_policy_config' }
    ]}
>
<TabItem value="update_kaj_policy_config">

Updates the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project.

```sql
UPDATE google.cloudkms.kaj_policy_config
SET 
data__defaultKeyAccessJustificationPolicy = '{{ defaultKeyAccessJustificationPolicy }}',
data__name = '{{ name }}'
WHERE 
foldersId = '{{ foldersId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
defaultKeyAccessJustificationPolicy,
defaultPolicyAvailable;
```
</TabItem>
</Tabs>
