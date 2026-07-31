--- 
title: policies
hide_title: false
hide_table_of_contents: false
keywords:
  - policies
  - cloudidentity
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

Creates, updates, deletes, gets or lists a <code>policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudidentity.policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
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
    <td>Output only. Identifier. The [resource name](https://cloud.google.com/apis/design/resource_names) of the Policy. Format: policies/&#123;policy&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="customer" /></td>
    <td><code>string</code></td>
    <td>Immutable. Customer that the Policy belongs to. The value is in the format 'customers/&#123;customerId&#125;'. The `customerId` must begin with "C" To find your customer ID in Admin Console see https://support.google.com/a/answer/10070793.</td>
</tr>
<tr>
    <td><CopyableCode code="policyQuery" /></td>
    <td><code>object</code></td>
    <td>Required. The PolicyQuery the Setting applies to. (id: PolicyQuery)</td>
</tr>
<tr>
    <td><CopyableCode code="setting" /></td>
    <td><code>object</code></td>
    <td>Required. The Setting configured by this Policy. (id: Setting)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of the policy. (POLICY_TYPE_UNSPECIFIED, SYSTEM, ADMIN)</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td>Output only. Identifier. The [resource name](https://cloud.google.com/apis/design/resource_names) of the Policy. Format: policies/&#123;policy&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="customer" /></td>
    <td><code>string</code></td>
    <td>Immutable. Customer that the Policy belongs to. The value is in the format 'customers/&#123;customerId&#125;'. The `customerId` must begin with "C" To find your customer ID in Admin Console see https://support.google.com/a/answer/10070793.</td>
</tr>
<tr>
    <td><CopyableCode code="policyQuery" /></td>
    <td><code>object</code></td>
    <td>Required. The PolicyQuery the Setting applies to. (id: PolicyQuery)</td>
</tr>
<tr>
    <td><CopyableCode code="setting" /></td>
    <td><code>object</code></td>
    <td>Required. The Setting configured by this Policy. (id: Setting)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of the policy. (POLICY_TYPE_UNSPECIFIED, SYSTEM, ADMIN)</td>
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
    <td><a href="#parameter-policiesId"><code>policiesId</code></a></td>
    <td></td>
    <td>Get a policy.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>List policies.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Create a policy.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-policiesId"><code>policiesId</code></a></td>
    <td></td>
    <td>Update a policy.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-policiesId"><code>policiesId</code></a></td>
    <td></td>
    <td>Delete a policy.</td>
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
<tr id="parameter-policiesId">
    <td><CopyableCode code="policiesId" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get a policy.

```sql
SELECT
name,
customer,
policyQuery,
setting,
type
FROM google.cloudidentity.policies
WHERE policiesId = '{{ policiesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

List policies.

```sql
SELECT
name,
customer,
policyQuery,
setting,
type
FROM google.cloudidentity.policies
WHERE pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND filter = '{{ filter }}'
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

Create a policy.

```sql
INSERT INTO google.cloudidentity.policies (
data__customer,
data__policyQuery,
data__setting
)
SELECT 
'{{ customer }}',
'{{ policyQuery }}',
'{{ setting }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: policies
  props:
    - name: customer
      value: "{{ customer }}"
      description: |
        Immutable. Customer that the Policy belongs to. The value is in the format 'customers/{customerId}'. The \`customerId\` must begin with "C" To find your customer ID in Admin Console see https://support.google.com/a/answer/10070793.
    - name: policyQuery
      description: |
        Required. The PolicyQuery the Setting applies to.
      value:
        orgUnit: "{{ orgUnit }}"
        sortOrder: {{ sortOrder }}
        query: "{{ query }}"
        group: "{{ group }}"
    - name: setting
      description: |
        Required. The Setting configured by this Policy.
      value:
        type: "{{ type }}"
        value: "{{ value }}"
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

Update a policy.

```sql
UPDATE google.cloudidentity.policies
SET 
data__customer = '{{ customer }}',
data__policyQuery = '{{ policyQuery }}',
data__setting = '{{ setting }}'
WHERE 
policiesId = '{{ policiesId }}' --required
RETURNING
name,
done,
error,
metadata,
response;
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

Delete a policy.

```sql
DELETE FROM google.cloudidentity.policies
WHERE policiesId = '{{ policiesId }}' --required
;
```
</TabItem>
</Tabs>
