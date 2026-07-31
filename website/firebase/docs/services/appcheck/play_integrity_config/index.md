--- 
title: play_integrity_config
hide_title: false
hide_table_of_contents: false
keywords:
  - play_integrity_config
  - appcheck
  - firebase
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage firebase resources using SQL
custom_edit_url: null
image: /img/stackql-firebase-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>play_integrity_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="play_integrity_config" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.appcheck.play_integrity_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'batch_get', value: 'batch_get' }
    ]}
>
<TabItem value="get">

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
    <td>Required. The relative resource name of the Play Integrity configuration object, in the format: ``` projects/&#123;project_number&#125;/apps/&#123;app_id&#125;/playIntegrityConfig ```</td>
</tr>
<tr>
    <td><CopyableCode code="accountDetails" /></td>
    <td><code>object</code></td>
    <td>Specifies account requirements for Android devices running your app. These settings correspond to requirements on the [**account details** field](https://developer.android.com/google/play/integrity/verdicts#account-details-field) obtained from the Play Integrity API. See the [default responses table](https://developer.android.com/google/play/integrity/setup#default) for a quick summary. The default values for these settings work for most apps, and are recommended. (id: GoogleFirebaseAppcheckV1PlayIntegrityConfigAccountDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="appIntegrity" /></td>
    <td><code>object</code></td>
    <td>Specifies application integrity requirements for Android devices running your app. These settings correspond to requirements on the [**application integrity** field](https://developer.android.com/google/play/integrity/verdicts#application-integrity-field) obtained from the Play Integrity API. See the [default responses table](https://developer.android.com/google/play/integrity/setup#default) for a quick summary. The default values for these settings work for most apps, and are recommended. (id: GoogleFirebaseAppcheckV1PlayIntegrityConfigAppIntegrity)</td>
</tr>
<tr>
    <td><CopyableCode code="deviceIntegrity" /></td>
    <td><code>object</code></td>
    <td>Specifies device integrity requirements for Android devices running your app. These settings correspond to requirements on the [**device integrity** field](https://developer.android.com/google/play/integrity/verdicts#device-integrity-field) obtained from the Play Integrity API. See the [default responses table](https://developer.android.com/google/play/integrity/setup#default) for a quick summary. Warning: There are also [conditional](https://developer.android.com/google/play/integrity/setup#conditional) as well as [optional](https://developer.android.com/google/play/integrity/setup#optional_device_information) responses that you can receive, but requires additional explicit opt-in from you. The App Check API is **not** responsible for any such opt-ins. The default values for these settings work for most apps, and are recommended. (id: GoogleFirebaseAppcheckV1PlayIntegrityConfigDeviceIntegrity)</td>
</tr>
<tr>
    <td><CopyableCode code="tokenTtl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Specifies the duration for which App Check tokens exchanged from Play Integrity tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="batch_get">

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
    <td><CopyableCode code="configs" /></td>
    <td><code>array</code></td>
    <td>PlayIntegrityConfigs retrieved.</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Gets the PlayIntegrityConfig for the specified app.</td>
</tr>
<tr>
    <td><a href="#batch_get"><CopyableCode code="batch_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-names"><code>names</code></a></td>
    <td>Atomically gets the PlayIntegrityConfigs for the specified list of apps.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the PlayIntegrityConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange Play Integrity tokens for App Check tokens.</td>
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
<tr id="parameter-appsId">
    <td><CopyableCode code="appsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-names">
    <td><CopyableCode code="names" /></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'batch_get', value: 'batch_get' }
    ]}
>
<TabItem value="get">

Gets the PlayIntegrityConfig for the specified app.

```sql
SELECT
name,
accountDetails,
appIntegrity,
deviceIntegrity,
tokenTtl
FROM firebase.appcheck.play_integrity_config
WHERE projectsId = '{{ projectsId }}' -- required
AND appsId = '{{ appsId }}' -- required
;
```
</TabItem>
<TabItem value="batch_get">

Atomically gets the PlayIntegrityConfigs for the specified list of apps.

```sql
SELECT
configs
FROM firebase.appcheck.play_integrity_config
WHERE projectsId = '{{ projectsId }}' -- required
AND names = '{{ names }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' }
    ]}
>
<TabItem value="patch">

Updates the PlayIntegrityConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange Play Integrity tokens for App Check tokens.

```sql
UPDATE firebase.appcheck.play_integrity_config
SET 
data__tokenTtl = '{{ tokenTtl }}',
data__name = '{{ name }}',
data__deviceIntegrity = '{{ deviceIntegrity }}',
data__appIntegrity = '{{ appIntegrity }}',
data__accountDetails = '{{ accountDetails }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND appsId = '{{ appsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
accountDetails,
appIntegrity,
deviceIntegrity,
tokenTtl;
```
</TabItem>
</Tabs>
