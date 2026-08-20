--- 
title: settings
hide_title: false
hide_table_of_contents: false
keywords:
  - settings
  - observability
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

Creates, updates, deletes, gets or lists a <code>settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.observability.settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_settings"
    values={[
        { label: 'get_settings', value: 'get_settings' }
    ]}
>
<TabItem value="get_settings">

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
    <td>Identifier. The resource name of the settings.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultStorageLocation" /></td>
    <td><code>string</code></td>
    <td>Optional. The location which should be used when any regional resources are provisioned by Google Cloud.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td>Optional. The resource name for the configured Cloud KMS key. KMS key name format: "projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]" For example: `"projects/my-project/locations/us-central1/keyRings/my-ring/cryptoKeys/my-key"`</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccountId" /></td>
    <td><code>string</code></td>
    <td>Output only. The service account for the given resource container, such as project or folder. This will be used by Cloud Observability to perform actions in the container's project like access KMS keys or create Links. Always the same service account per resource container regardless of region.</td>
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
    <td><a href="#get_settings"><CopyableCode code="get_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Get Settings</td>
</tr>
<tr>
    <td><a href="#update_settings"><CopyableCode code="update_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update Settings</td>
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
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
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
    defaultValue="get_settings"
    values={[
        { label: 'get_settings', value: 'get_settings' }
    ]}
>
<TabItem value="get_settings">

Get Settings

```sql
SELECT
name,
defaultStorageLocation,
kmsKeyName,
serviceAccountId
FROM google.observability.settings
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_settings"
    values={[
        { label: 'update_settings', value: 'update_settings' }
    ]}
>
<TabItem value="update_settings">

Update Settings

```sql
UPDATE google.observability.settings
SET 
data__defaultStorageLocation = '{{ defaultStorageLocation }}',
data__kmsKeyName = '{{ kmsKeyName }}',
data__name = '{{ name }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
done,
error,
metadata,
response;
```
</TabItem>
</Tabs>
