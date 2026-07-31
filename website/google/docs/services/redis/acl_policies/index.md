--- 
title: acl_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - acl_policies
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

Creates, updates, deletes, gets or lists an <code>acl_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="acl_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.redis.acl_policies" /></td></tr>
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
    <td>Identifier. Full resource path of the ACL policy.</td>
</tr>
<tr>
    <td><CopyableCode code="clusterAclPolicyAttachments" /></td>
    <td><code>array</code></td>
    <td>Output only. The ACL policy attachment status for each attached cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp that the ACL policy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. Etag for the ACL policy.</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>Required. The ACL rules within the ACL policy.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the ACL policy. (STATE_UNSPECIFIED, ACTIVE, UPDATING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp that the ACL policy was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Deprecated: Used in drift resolution.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-aclPoliciesId"><code>aclPoliciesId</code></a></td>
    <td></td>
    <td>Gets the details of a specific Redis Cluster ACL policy.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all ACL policies owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-aclPolicyId"><code>aclPolicyId</code></a></td>
    <td>Creates an ACL policy. The creation is executed synchronously and the policy is available for use immediately after the RPC returns.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-aclPoliciesId"><code>aclPoliciesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the ACL policy. The operation applies the updated ACL policy to all of the linked clusters. If Memorystore can apply the policy to all clusters, then the operation returns a SUCCESS status. If Memorystore can't apply the policy to all clusters, then to ensure eventual consistency, Memorystore uses reconciliation to apply the policy to the failed clusters. Completed longrunning.Operation will contain the new ACL policy object in the response field.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-aclPoliciesId"><code>aclPoliciesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a specific ACL policy. This action will delete the ACL policy and all the rules associated with it. An ACL policy cannot be deleted if it is attached to a cluster.</td>
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
<tr id="parameter-aclPolicyId">
    <td><CopyableCode code="aclPolicyId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
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
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets the details of a specific Redis Cluster ACL policy.

```sql
SELECT
name,
clusterAclPolicyAttachments,
createTime,
etag,
rules,
state,
updateTime,
version
FROM google.redis.acl_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND aclPoliciesId = '{{ aclPoliciesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists all ACL policies owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/&#123;project_id&#125;/locations/&#123;location_id&#125;` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.

```sql
SELECT
*
FROM google.redis.acl_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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

Creates an ACL policy. The creation is executed synchronously and the policy is available for use immediately after the RPC returns.

```sql
INSERT INTO google.redis.acl_policies (
data__name,
data__rules,
projectsId,
locationsId,
requestId,
aclPolicyId
)
SELECT 
'{{ name }}',
'{{ rules }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ requestId }}',
'{{ aclPolicyId }}'
RETURNING
name,
clusterAclPolicyAttachments,
createTime,
etag,
rules,
state,
updateTime,
version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: acl_policies
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the acl_policies resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the acl_policies resource.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. Full resource path of the ACL policy.
    - name: rules
      description: |
        Required. The ACL rules within the ACL policy.
      value:
        - username: "{{ username }}"
          rule: "{{ rule }}"
    - name: requestId
      value: "{{ requestId }}"
    - name: aclPolicyId
      value: "{{ aclPolicyId }}"
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

Updates the ACL policy. The operation applies the updated ACL policy to all of the linked clusters. If Memorystore can apply the policy to all clusters, then the operation returns a SUCCESS status. If Memorystore can't apply the policy to all clusters, then to ensure eventual consistency, Memorystore uses reconciliation to apply the policy to the failed clusters. Completed longrunning.Operation will contain the new ACL policy object in the response field.

```sql
UPDATE google.redis.acl_policies
SET 
data__name = '{{ name }}',
data__rules = '{{ rules }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND aclPoliciesId = '{{ aclPoliciesId }}' --required
AND requestId = '{{ requestId}}'
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


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes a specific ACL policy. This action will delete the ACL policy and all the rules associated with it. An ACL policy cannot be deleted if it is attached to a cluster.

```sql
DELETE FROM google.redis.acl_policies
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND aclPoliciesId = '{{ aclPoliciesId }}' --required
AND requestId = '{{ requestId }}'
AND etag = '{{ etag }}'
;
```
</TabItem>
</Tabs>
