--- 
title: sources_iam_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - sources_iam_policies
  - securitycenter
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

Creates, updates, deletes, gets or lists a <code>sources_iam_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sources_iam_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securitycenter.sources_iam_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_sources_get_iam_policy"
    values={[
        { label: 'organizations_sources_get_iam_policy', value: 'organizations_sources_get_iam_policy' }
    ]}
>
<TabItem value="organizations_sources_get_iam_policy">

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
    <td><CopyableCode code="condition" /></td>
    <td><code>object</code></td>
    <td> (id: Expr)</td>
</tr>
<tr>
    <td><CopyableCode code="members" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td><a href="#organizations_sources_get_iam_policy"><CopyableCode code="organizations_sources_get_iam_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_sources_set_iam_policy"><CopyableCode code="organizations_sources_set_iam_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_sources_test_iam_permissions"><CopyableCode code="organizations_sources_test_iam_permissions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td></td>
    <td></td>
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
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sourcesId">
    <td><CopyableCode code="sourcesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_sources_get_iam_policy"
    values={[
        { label: 'organizations_sources_get_iam_policy', value: 'organizations_sources_get_iam_policy' }
    ]}
>
<TabItem value="organizations_sources_get_iam_policy">

Successful response

```sql
SELECT
condition,
members,
role
FROM google.securitycenter.sources_iam_policies
WHERE organizationsId = '{{ organizationsId }}' -- required
AND sourcesId = '{{ sourcesId }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="organizations_sources_set_iam_policy"
    values={[
        { label: 'organizations_sources_set_iam_policy', value: 'organizations_sources_set_iam_policy' }
    ]}
>
<TabItem value="organizations_sources_set_iam_policy">

No description available.

```sql
REPLACE google.securitycenter.sources_iam_policies
SET 
data__policy = '{{ policy }}',
data__updateMask = '{{ updateMask }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND sourcesId = '{{ sourcesId }}' --required
RETURNING
auditConfigs,
bindings,
etag,
version;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="organizations_sources_test_iam_permissions"
    values={[
        { label: 'organizations_sources_test_iam_permissions', value: 'organizations_sources_test_iam_permissions' }
    ]}
>
<TabItem value="organizations_sources_test_iam_permissions">

Successful response

```sql
EXEC google.securitycenter.sources_iam_policies.organizations_sources_test_iam_permissions 
@organizationsId='{{ organizationsId }}' --required, 
@sourcesId='{{ sourcesId }}' --required 
@@json=
'{
"permissions": "{{ permissions }}"
}'
;
```
</TabItem>
</Tabs>
