--- 
title: users_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - users_settings
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

Creates, updates, deletes, gets or lists a <code>users_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.health.users_settings" /></td></tr>
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
    <td>Identifier. The resource name of this Settings resource. Format: `users/&#123;user&#125;/settings` Example: `users/1234567890/settings` or `users/me/settings` The &#123;user&#125; ID is a system-generated Google Health API user ID, a string of 1-63 characters consisting of lowercase and uppercase letters, numbers, and hyphens. The literal `me` can also be used to refer to the authenticated user.</td>
</tr>
<tr>
    <td><CopyableCode code="autoStrideEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. True if the user's stride length is determined automatically. Updates to this field are currently not supported.</td>
</tr>
<tr>
    <td><CopyableCode code="distanceUnit" /></td>
    <td><code>string</code></td>
    <td>Optional. The measurement unit defined in the user's account settings. (DISTANCE_UNIT_UNSPECIFIED, DISTANCE_UNIT_MILES, DISTANCE_UNIT_KILOMETERS)</td>
</tr>
<tr>
    <td><CopyableCode code="foodLanguageCode" /></td>
    <td><code>string</code></td>
    <td>Output only. The food language code derived from the user's food database. Possible values: `'en-US'`, `'en-GB'`, `'de-DE'`, `'es-ES'`, `'fr-FR'`, `'zh-CN'`, `'zh-TW'`, `'ja-JP'`, `'en-AU'`, `'en-CA'`, `'it-IT'`, `'ko-KR'`, `'es-MX'`, `'en-IN'`, `'en-SG'`, `'en-PH'`, `'en-IE'`, `'fr-CA'`. Updates to this field are currently not supported.</td>
</tr>
<tr>
    <td><CopyableCode code="glucoseUnit" /></td>
    <td><code>string</code></td>
    <td>Optional. The measurement unit defined in the user's account settings. (GLUCOSE_UNIT_UNSPECIFIED, GLUCOSE_UNIT_MG_DL, GLUCOSE_UNIT_MMOL_L)</td>
</tr>
<tr>
    <td><CopyableCode code="heightUnit" /></td>
    <td><code>string</code></td>
    <td>Optional. The measurement unit defined in the user's account settings. (HEIGHT_UNIT_UNSPECIFIED, HEIGHT_UNIT_INCHES, HEIGHT_UNIT_CENTIMETERS)</td>
</tr>
<tr>
    <td><CopyableCode code="languageLocale" /></td>
    <td><code>string</code></td>
    <td>Optional. The locale defined in the user's account settings. Updates to this field are currently not supported.</td>
</tr>
<tr>
    <td><CopyableCode code="strideLengthRunningType" /></td>
    <td><code>string</code></td>
    <td>Optional. The stride length type defined in the user's account settings for running. Updates to this field are currently not supported. (STRIDE_LENGTH_TYPE_UNSPECIFIED, STRIDE_LENGTH_TYPE_DEFAULT, STRIDE_LENGTH_TYPE_MANUAL, STRIDE_LENGTH_TYPE_AUTO)</td>
</tr>
<tr>
    <td><CopyableCode code="strideLengthWalkingType" /></td>
    <td><code>string</code></td>
    <td>Optional. The stride length type defined in the user's account settings for walking. Updates to this field are currently not supported. (STRIDE_LENGTH_TYPE_UNSPECIFIED, STRIDE_LENGTH_TYPE_DEFAULT, STRIDE_LENGTH_TYPE_MANUAL, STRIDE_LENGTH_TYPE_AUTO)</td>
</tr>
<tr>
    <td><CopyableCode code="swimUnit" /></td>
    <td><code>string</code></td>
    <td>Optional. The measurement unit defined in the user's account settings. (SWIM_UNIT_UNSPECIFIED, SWIM_UNIT_METERS, SWIM_UNIT_YARDS)</td>
</tr>
<tr>
    <td><CopyableCode code="temperatureUnit" /></td>
    <td><code>string</code></td>
    <td>Optional. The measurement unit defined in the user's account settings. (TEMPERATURE_UNIT_UNSPECIFIED, TEMPERATURE_UNIT_CELSIUS, TEMPERATURE_UNIT_FAHRENHEIT)</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string</code></td>
    <td>Optional. The timezone defined in the user's account settings. This follows the IANA [Time Zone Database](https://www.iana.org/time-zones). Updates to this field are currently not supported.</td>
</tr>
<tr>
    <td><CopyableCode code="utcOffset" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. The user's timezone offset relative to UTC. Updates to this field are currently not supported.</td>
</tr>
<tr>
    <td><CopyableCode code="waterUnit" /></td>
    <td><code>string</code></td>
    <td>Optional. The measurement unit defined in the user's account settings. (WATER_UNIT_UNSPECIFIED, WATER_UNIT_ML, WATER_UNIT_FL_OZ, WATER_UNIT_CUP)</td>
</tr>
<tr>
    <td><CopyableCode code="weightUnit" /></td>
    <td><code>string</code></td>
    <td>Optional. The measurement unit defined in the user's account settings. (WEIGHT_UNIT_UNSPECIFIED, WEIGHT_UNIT_POUNDS, WEIGHT_UNIT_STONE, WEIGHT_UNIT_KILOGRAMS)</td>
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
    <td><a href="#parameter-usersId"><code>usersId</code></a></td>
    <td></td>
    <td>Returns user settings details.</td>
</tr>
<tr>
    <td><a href="#update_settings"><CopyableCode code="update_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-usersId"><code>usersId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the user's settings details.</td>
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

Returns user settings details.

```sql
SELECT
name,
autoStrideEnabled,
distanceUnit,
foodLanguageCode,
glucoseUnit,
heightUnit,
languageLocale,
strideLengthRunningType,
strideLengthWalkingType,
swimUnit,
temperatureUnit,
timeZone,
utcOffset,
waterUnit,
weightUnit
FROM google.health.users_settings
WHERE usersId = '{{ usersId }}' -- required
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

Updates the user's settings details.

```sql
UPDATE google.health.users_settings
SET 
data__autoStrideEnabled = {{ autoStrideEnabled }},
data__distanceUnit = '{{ distanceUnit }}',
data__glucoseUnit = '{{ glucoseUnit }}',
data__heightUnit = '{{ heightUnit }}',
data__languageLocale = '{{ languageLocale }}',
data__name = '{{ name }}',
data__strideLengthRunningType = '{{ strideLengthRunningType }}',
data__strideLengthWalkingType = '{{ strideLengthWalkingType }}',
data__swimUnit = '{{ swimUnit }}',
data__temperatureUnit = '{{ temperatureUnit }}',
data__timeZone = '{{ timeZone }}',
data__utcOffset = '{{ utcOffset }}',
data__waterUnit = '{{ waterUnit }}',
data__weightUnit = '{{ weightUnit }}'
WHERE 
usersId = '{{ usersId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
autoStrideEnabled,
distanceUnit,
foodLanguageCode,
glucoseUnit,
heightUnit,
languageLocale,
strideLengthRunningType,
strideLengthWalkingType,
swimUnit,
temperatureUnit,
timeZone,
utcOffset,
waterUnit,
weightUnit;
```
</TabItem>
</Tabs>
