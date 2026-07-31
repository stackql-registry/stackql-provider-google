--- 
title: revisions
hide_title: false
hide_table_of_contents: false
keywords:
  - revisions
  - redis
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

Creates, updates, deletes, gets or lists a <code>revisions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="revisions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.redis.revisions" /></td></tr>
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
    <td>Identifier. The name of the ACL policy revision. Format: "projects/&#123;project&#125;/locations/&#123;location&#125;/aclPolicies/&#123;acl_policy&#125;/revisions/&#123;revision&#125;"</td>
</tr>
<tr>
    <td><CopyableCode code="attachedClusters" /></td>
    <td><code>array</code></td>
    <td>Output only. A list of clusters that are attached to this ACL policy revision.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp that the revision was created.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionNumber" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The revision number of the ACL policy revision.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot" /></td>
    <td><code>object</code></td>
    <td>Output only. The snapshot of the ACL policy at the time of revision creation. (id: AclPolicy)</td>
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
    <td>Identifier. The name of the ACL policy revision. Format: "projects/&#123;project&#125;/locations/&#123;location&#125;/aclPolicies/&#123;acl_policy&#125;/revisions/&#123;revision&#125;"</td>
</tr>
<tr>
    <td><CopyableCode code="attachedClusters" /></td>
    <td><code>array</code></td>
    <td>Output only. A list of clusters that are attached to this ACL policy revision.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp that the revision was created.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionNumber" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The revision number of the ACL policy revision.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot" /></td>
    <td><code>object</code></td>
    <td>Output only. The snapshot of the ACL policy at the time of revision creation. (id: AclPolicy)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-aclPoliciesId"><code>aclPoliciesId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td></td>
    <td>Gets details of a specific ACL policy revision.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-aclPoliciesId"><code>aclPoliciesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all ACL policy revisions in a given ACL policy.</td>
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
<tr id="parameter-aclPoliciesId">
    <td><CopyableCode code="aclPoliciesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-revisionsId">
    <td><CopyableCode code="revisionsId" /></td>
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

Gets details of a specific ACL policy revision.

```sql
SELECT
name,
attachedClusters,
createTime,
revisionNumber,
snapshot
FROM google.redis.revisions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND aclPoliciesId = '{{ aclPoliciesId }}' -- required
AND revisionsId = '{{ revisionsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists all ACL policy revisions in a given ACL policy.

```sql
SELECT
name,
attachedClusters,
createTime,
revisionNumber,
snapshot
FROM google.redis.revisions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND aclPoliciesId = '{{ aclPoliciesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>
