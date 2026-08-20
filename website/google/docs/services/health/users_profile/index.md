--- 
title: users_profile
hide_title: false
hide_table_of_contents: false
keywords:
  - users_profile
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

Creates, updates, deletes, gets or lists a <code>users_profile</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users_profile" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.health.users_profile" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_profile"
    values={[
        { label: 'get_profile', value: 'get_profile' }
    ]}
>
<TabItem value="get_profile">

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
    <td>Identifier. The resource name of this Profile resource. Format: `users/&#123;user&#125;/profile` Example: `users/1234567890/profile` or `users/me/profile` The &#123;user&#125; ID is a system-generated Google Health API user ID, a string of 1-63 characters consisting of lowercase and uppercase letters, numbers, and hyphens. The literal `me` can also be used to refer to the authenticated user.</td>
</tr>
<tr>
    <td><CopyableCode code="age" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. The age in years based on the user's birth date. Updates to this field are currently not supported.</td>
</tr>
<tr>
    <td><CopyableCode code="autoRunningStrideLengthMm" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The automatically calculated running stride length, in millimeters. The user must consent to one of the following access scopes to access this field: - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness.readonly` - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness`</td>
</tr>
<tr>
    <td><CopyableCode code="autoWalkingStrideLengthMm" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The automatically calculated walking stride length, in millimeters. The user must consent to one of the following access scopes to access this field: - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness.readonly` - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness`</td>
</tr>
<tr>
    <td><CopyableCode code="membershipStartDate" /></td>
    <td><code>object</code></td>
    <td>Output only. The date the user created their account. Updates to this field are currently not supported. (id: Date)</td>
</tr>
<tr>
    <td><CopyableCode code="userConfiguredRunningStrideLengthMm" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. The user's user configured running stride length, in millimeters. The user must consent to one of the following access scopes to access this field: - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness.readonly` - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness`</td>
</tr>
<tr>
    <td><CopyableCode code="userConfiguredWalkingStrideLengthMm" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. The user's user configured walking stride length, in millimeters. The user must consent to one of the following access scopes to access this field: - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness.readonly` - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness`</td>
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
    <td><a href="#get_profile"><CopyableCode code="get_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-usersId"><code>usersId</code></a></td>
    <td></td>
    <td>Returns user Profile details.</td>
</tr>
<tr>
    <td><a href="#update_profile"><CopyableCode code="update_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-usersId"><code>usersId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the user's profile details.</td>
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
    defaultValue="get_profile"
    values={[
        { label: 'get_profile', value: 'get_profile' }
    ]}
>
<TabItem value="get_profile">

Returns user Profile details.

```sql
SELECT
name,
age,
autoRunningStrideLengthMm,
autoWalkingStrideLengthMm,
membershipStartDate,
userConfiguredRunningStrideLengthMm,
userConfiguredWalkingStrideLengthMm
FROM google.health.users_profile
WHERE usersId = '{{ usersId }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_profile"
    values={[
        { label: 'update_profile', value: 'update_profile' }
    ]}
>
<TabItem value="update_profile">

Updates the user's profile details.

```sql
UPDATE google.health.users_profile
SET 
data__age = {{ age }},
data__name = '{{ name }}',
data__userConfiguredRunningStrideLengthMm = {{ userConfiguredRunningStrideLengthMm }},
data__userConfiguredWalkingStrideLengthMm = {{ userConfiguredWalkingStrideLengthMm }}
WHERE 
usersId = '{{ usersId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
age,
autoRunningStrideLengthMm,
autoWalkingStrideLengthMm,
membershipStartDate,
userConfiguredRunningStrideLengthMm,
userConfiguredWalkingStrideLengthMm;
```
</TabItem>
</Tabs>
