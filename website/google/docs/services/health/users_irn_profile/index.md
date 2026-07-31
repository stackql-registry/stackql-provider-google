--- 
title: users_irn_profile
hide_title: false
hide_table_of_contents: false
keywords:
  - users_irn_profile
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

Creates, updates, deletes, gets or lists a <code>users_irn_profile</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users_irn_profile" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.health.users_irn_profile" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_irn_profile"
    values={[
        { label: 'get_irn_profile', value: 'get_irn_profile' }
    ]}
>
<TabItem value="get_irn_profile">

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
    <td>Identifier. The resource name of this IrnProfile resource. Format: `users/&#123;user&#125;/irnProfile` Example: `users/1234567890/irnProfile` or `users/me/irnProfile` The &#123;user&#125; ID is a system-generated Google Health API user ID, a string of 1-63 characters consisting of lowercase and uppercase letters, numbers, and hyphens. The literal `me` can also be used to refer to the authenticated user.</td>
</tr>
<tr>
    <td><CopyableCode code="enrollmentStatus" /></td>
    <td><code>boolean</code></td>
    <td>Required. Whether or not the user is currently enrolled in having their data processed for IRN alerts.</td>
</tr>
<tr>
    <td><CopyableCode code="onboardingStatus" /></td>
    <td><code>boolean</code></td>
    <td>Required. Whether or not the user has onboarded onto the IRN feature.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of the last piece of analyzable data synced by the user.</td>
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
    <td><a href="#get_irn_profile"><CopyableCode code="get_irn_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-usersId"><code>usersId</code></a></td>
    <td></td>
    <td>Returns user's IRN Profile details.</td>
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
    defaultValue="get_irn_profile"
    values={[
        { label: 'get_irn_profile', value: 'get_irn_profile' }
    ]}
>
<TabItem value="get_irn_profile">

Returns user's IRN Profile details.

```sql
SELECT
name,
enrollmentStatus,
onboardingStatus,
updateTime
FROM google.health.users_irn_profile
WHERE usersId = '{{ usersId }}' -- required
;
```
</TabItem>
</Tabs>
