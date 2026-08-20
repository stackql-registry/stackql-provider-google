--- 
title: subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - subscriptions
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

Creates, updates, deletes, gets or lists a <code>subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.health.subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

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
    <td>Identifier. The resource name of the Subscription. Format: `projects/&#123;project&#125;/subscribers/&#123;subscriber&#125;/subscriptions/&#123;subscription&#125;` Example: `projects/my-project/subscribers/my-subscriber-123/subscriptions/my-subscription-456` The &#123;project&#125; ID is mandatory (6-30 characters, matching /a-z&#123;6,30&#125;/) The &#123;subscriber&#125; ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]&#123;2,34&#125;[a-z0-9])/) if provided during creation, or system-generated otherwise. The &#123;subscription&#125; ID is user-settable (4-36 chars, matching /[a-z]([a-z0-9-]&#123;2,34&#125;[a-z0-9])/) or system-generated otherwise.</td>
</tr>
<tr>
    <td><CopyableCode code="dataTypes" /></td>
    <td><code>array</code></td>
    <td>Optional. Data types subscribed to. A subscriber will only receive notifications for data types that are declared here. A subscription can only subscribe to the data types of the subscriber. The values should be in the format "users/&#123;health_user_id&#125;/dataTypes/&#123;data_type&#125;" where `&#123;data_type&#125;` is one of "altitude", "distance", "floors", "sleep", "steps", "weight".</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>string</code></td>
    <td>Immutable. The resource name of the user for whom this subscription is active. Format: `users/&#123;user&#125;` where `&#123;user&#125;` is the public `healthUserId` as returned by the `GetIdentity` action in the profile PAPI (see `google.devicesandservices.health.v4main.HealthProfileService.GetIdentity`).</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-subscribersId"><code>subscribersId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all active subscriptions for a given subscriber. This can be filtered, for example, by user or data type.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-subscribersId"><code>subscribersId</code></a></td>
    <td><a href="#parameter-subscriptionId"><code>subscriptionId</code></a></td>
    <td>Creates a subscription for a specific user to a specific subscriber. This method requires the subscriber to have a `SubscriptionCreatePolicy` set to `MANUAL` for the given data types.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-subscribersId"><code>subscribersId</code></a>, <a href="#parameter-subscriptionsId"><code>subscriptionsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the data types for an existing user subscription.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-subscribersId"><code>subscribersId</code></a>, <a href="#parameter-subscriptionsId"><code>subscriptionsId</code></a></td>
    <td></td>
    <td>Deletes a specific user subscription, stopping notifications for this user to this subscriber.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-subscribersId">
    <td><CopyableCode code="subscribersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-subscriptionsId">
    <td><CopyableCode code="subscriptionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-pageSize">
    <td><CopyableCode code="pageSize" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-subscriptionId">
    <td><CopyableCode code="subscriptionId" /></td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Lists all active subscriptions for a given subscriber. This can be filtered, for example, by user or data type.

```sql
SELECT
name,
dataTypes,
user
FROM google.health.subscriptions
WHERE projectsId = '{{ projectsId }}' -- required
AND subscribersId = '{{ subscribersId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a subscription for a specific user to a specific subscriber. This method requires the subscriber to have a `SubscriptionCreatePolicy` set to `MANUAL` for the given data types.

```sql
INSERT INTO google.health.subscriptions (
data__dataTypes,
data__user,
projectsId,
subscribersId,
subscriptionId
)
SELECT 
'{{ dataTypes }}',
'{{ user }}',
'{{ projectsId }}',
'{{ subscribersId }}',
'{{ subscriptionId }}'
RETURNING
name,
dataTypes,
user
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: subscriptions
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the subscriptions resource.
    - name: subscribersId
      value: "{{ subscribersId }}"
      description: Required parameter for the subscriptions resource.
    - name: dataTypes
      value:
        - "{{ dataTypes }}"
      description: |
        Optional. Data types subscribed to.
    - name: user
      value: "{{ user }}"
      description: |
        Required. Immutable. The resource name of the user for whom this subscription is active. Format: \`users/{user}\` where \`{user}\` is the public \`healthUserId\` as returned by the \`GetIdentity\` action in the profile PAPI (see \`google.devicesandservices.health.v4main.HealthProfileService.GetIdentity\`).
    - name: subscriptionId
      value: "{{ subscriptionId }}"
`}</CodeBlock>

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

Updates the data types for an existing user subscription.

```sql
UPDATE google.health.subscriptions
SET 
data__dataTypes = '{{ dataTypes }}',
data__name = '{{ name }}',
data__user = '{{ user }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND subscribersId = '{{ subscribersId }}' --required
AND subscriptionsId = '{{ subscriptionsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
dataTypes,
user;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes a specific user subscription, stopping notifications for this user to this subscriber.

```sql
DELETE FROM google.health.subscriptions
WHERE projectsId = '{{ projectsId }}' --required
AND subscribersId = '{{ subscribersId }}' --required
AND subscriptionsId = '{{ subscriptionsId }}' --required
;
```
</TabItem>
</Tabs>
