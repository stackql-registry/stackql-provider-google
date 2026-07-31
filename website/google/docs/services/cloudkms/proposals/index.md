--- 
title: proposals
hide_title: false
hide_table_of_contents: false
keywords:
  - proposals
  - cloudkms
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

Creates, updates, deletes, gets or lists a <code>proposals</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="proposals" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudkms.proposals" /></td></tr>
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
    <td>Identifier. The resource name for this SingleTenantHsmInstance in the format `projects/*/locations/*/singleTenantHsmInstances/*/proposals/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="addQuorumMember" /></td>
    <td><code>object</code></td>
    <td>Add a quorum member to the SingleTenantHsmInstance. This will increase the total_approver_count by 1. The SingleTenantHsmInstance must be in the ACTIVE state to perform this operation. (id: AddQuorumMember)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the SingleTenantHsmInstanceProposal was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteSingleTenantHsmInstance" /></td>
    <td><code>object</code></td>
    <td>Delete the SingleTenantHsmInstance. Deleting a SingleTenantHsmInstance will make all CryptoKeys attached to the SingleTenantHsmInstance unusable. The SingleTenantHsmInstance must be in the DISABLED or PENDING_TWO_FACTOR_AUTH_REGISTRATION state to perform this operation. (id: DeleteSingleTenantHsmInstance)</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the SingleTenantHsmInstanceProposal was deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="disableSingleTenantHsmInstance" /></td>
    <td><code>object</code></td>
    <td>Disable the SingleTenantHsmInstance. The SingleTenantHsmInstance must be in the ACTIVE state to perform this operation. (id: DisableSingleTenantHsmInstance)</td>
</tr>
<tr>
    <td><CopyableCode code="enableSingleTenantHsmInstance" /></td>
    <td><code>object</code></td>
    <td>Enable the SingleTenantHsmInstance. The SingleTenantHsmInstance must be in the DISABLED state to perform this operation. (id: EnableSingleTenantHsmInstance)</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time at which the SingleTenantHsmInstanceProposal will expire if not approved and executed.</td>
</tr>
<tr>
    <td><CopyableCode code="failureReason" /></td>
    <td><code>string</code></td>
    <td>Output only. The root cause of the most recent failure. Only present if state is FAILED.</td>
</tr>
<tr>
    <td><CopyableCode code="purgeTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the soft-deleted SingleTenantHsmInstanceProposal will be permanently purged. This field is only populated when the state is DELETED and will be set a time after expiration of the proposal, i.e. &gt;= expire_time or (create_time + ttl).</td>
</tr>
<tr>
    <td><CopyableCode code="quorumParameters" /></td>
    <td><code>object</code></td>
    <td>Output only. The quorum approval parameters for the SingleTenantHsmInstanceProposal. (id: QuorumParameters)</td>
</tr>
<tr>
    <td><CopyableCode code="refreshSingleTenantHsmInstance" /></td>
    <td><code>object</code></td>
    <td>Refreshes the SingleTenantHsmInstance. This operation must be performed periodically to keep the SingleTenantHsmInstance active. This operation must be performed before unrefreshed_duration_until_disable has passed. The SingleTenantHsmInstance must be in the ACTIVE state to perform this operation. (id: RefreshSingleTenantHsmInstance)</td>
</tr>
<tr>
    <td><CopyableCode code="registerTwoFactorAuthKeys" /></td>
    <td><code>object</code></td>
    <td>Register 2FA keys for the SingleTenantHsmInstance. This operation requires all N Challenges to be signed by 2FA keys. The SingleTenantHsmInstance must be in the PENDING_TWO_FACTOR_AUTH_REGISTRATION state to perform this operation. (id: RegisterTwoFactorAuthKeys)</td>
</tr>
<tr>
    <td><CopyableCode code="removeQuorumMember" /></td>
    <td><code>object</code></td>
    <td>Remove a quorum member from the SingleTenantHsmInstance. This will reduce total_approver_count by 1. The SingleTenantHsmInstance must be in the ACTIVE state to perform this operation. (id: RemoveQuorumMember)</td>
</tr>
<tr>
    <td><CopyableCode code="requiredActionQuorumParameters" /></td>
    <td><code>object</code></td>
    <td>Output only. Parameters for an approval of a SingleTenantHsmInstanceProposal that has both required challenges and a quorum. (id: RequiredActionQuorumParameters)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the SingleTenantHsmInstanceProposal. (STATE_UNSPECIFIED, CREATING, PENDING, APPROVED, RUNNING, SUCCEEDED, FAILED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Input only. The TTL for the SingleTenantHsmInstanceProposal. Proposals will expire after this duration.</td>
</tr>
<tr>
    <td><CopyableCode code="upgradeKeyTrust" /></td>
    <td><code>object</code></td>
    <td>Promotes a key with the AES_WRAPPING purpose to a trusted wrapping key. The key must be in the ACTIVE state to perform this operation. (id: UpgradeKeyTrust)</td>
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
    <td>Identifier. The resource name for this SingleTenantHsmInstance in the format `projects/*/locations/*/singleTenantHsmInstances/*/proposals/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="addQuorumMember" /></td>
    <td><code>object</code></td>
    <td>Add a quorum member to the SingleTenantHsmInstance. This will increase the total_approver_count by 1. The SingleTenantHsmInstance must be in the ACTIVE state to perform this operation. (id: AddQuorumMember)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the SingleTenantHsmInstanceProposal was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteSingleTenantHsmInstance" /></td>
    <td><code>object</code></td>
    <td>Delete the SingleTenantHsmInstance. Deleting a SingleTenantHsmInstance will make all CryptoKeys attached to the SingleTenantHsmInstance unusable. The SingleTenantHsmInstance must be in the DISABLED or PENDING_TWO_FACTOR_AUTH_REGISTRATION state to perform this operation. (id: DeleteSingleTenantHsmInstance)</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the SingleTenantHsmInstanceProposal was deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="disableSingleTenantHsmInstance" /></td>
    <td><code>object</code></td>
    <td>Disable the SingleTenantHsmInstance. The SingleTenantHsmInstance must be in the ACTIVE state to perform this operation. (id: DisableSingleTenantHsmInstance)</td>
</tr>
<tr>
    <td><CopyableCode code="enableSingleTenantHsmInstance" /></td>
    <td><code>object</code></td>
    <td>Enable the SingleTenantHsmInstance. The SingleTenantHsmInstance must be in the DISABLED state to perform this operation. (id: EnableSingleTenantHsmInstance)</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time at which the SingleTenantHsmInstanceProposal will expire if not approved and executed.</td>
</tr>
<tr>
    <td><CopyableCode code="failureReason" /></td>
    <td><code>string</code></td>
    <td>Output only. The root cause of the most recent failure. Only present if state is FAILED.</td>
</tr>
<tr>
    <td><CopyableCode code="purgeTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the soft-deleted SingleTenantHsmInstanceProposal will be permanently purged. This field is only populated when the state is DELETED and will be set a time after expiration of the proposal, i.e. &gt;= expire_time or (create_time + ttl).</td>
</tr>
<tr>
    <td><CopyableCode code="quorumParameters" /></td>
    <td><code>object</code></td>
    <td>Output only. The quorum approval parameters for the SingleTenantHsmInstanceProposal. (id: QuorumParameters)</td>
</tr>
<tr>
    <td><CopyableCode code="refreshSingleTenantHsmInstance" /></td>
    <td><code>object</code></td>
    <td>Refreshes the SingleTenantHsmInstance. This operation must be performed periodically to keep the SingleTenantHsmInstance active. This operation must be performed before unrefreshed_duration_until_disable has passed. The SingleTenantHsmInstance must be in the ACTIVE state to perform this operation. (id: RefreshSingleTenantHsmInstance)</td>
</tr>
<tr>
    <td><CopyableCode code="registerTwoFactorAuthKeys" /></td>
    <td><code>object</code></td>
    <td>Register 2FA keys for the SingleTenantHsmInstance. This operation requires all N Challenges to be signed by 2FA keys. The SingleTenantHsmInstance must be in the PENDING_TWO_FACTOR_AUTH_REGISTRATION state to perform this operation. (id: RegisterTwoFactorAuthKeys)</td>
</tr>
<tr>
    <td><CopyableCode code="removeQuorumMember" /></td>
    <td><code>object</code></td>
    <td>Remove a quorum member from the SingleTenantHsmInstance. This will reduce total_approver_count by 1. The SingleTenantHsmInstance must be in the ACTIVE state to perform this operation. (id: RemoveQuorumMember)</td>
</tr>
<tr>
    <td><CopyableCode code="requiredActionQuorumParameters" /></td>
    <td><code>object</code></td>
    <td>Output only. Parameters for an approval of a SingleTenantHsmInstanceProposal that has both required challenges and a quorum. (id: RequiredActionQuorumParameters)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the SingleTenantHsmInstanceProposal. (STATE_UNSPECIFIED, CREATING, PENDING, APPROVED, RUNNING, SUCCEEDED, FAILED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Input only. The TTL for the SingleTenantHsmInstanceProposal. Proposals will expire after this duration.</td>
</tr>
<tr>
    <td><CopyableCode code="upgradeKeyTrust" /></td>
    <td><code>object</code></td>
    <td>Promotes a key with the AES_WRAPPING purpose to a trusted wrapping key. The key must be in the ACTIVE state to perform this operation. (id: UpgradeKeyTrust)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-singleTenantHsmInstancesId"><code>singleTenantHsmInstancesId</code></a>, <a href="#parameter-proposalsId"><code>proposalsId</code></a></td>
    <td></td>
    <td>Returns metadata for a given SingleTenantHsmInstanceProposal.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-singleTenantHsmInstancesId"><code>singleTenantHsmInstancesId</code></a></td>
    <td><a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-showDeleted"><code>showDeleted</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists SingleTenantHsmInstanceProposals.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-singleTenantHsmInstancesId"><code>singleTenantHsmInstancesId</code></a></td>
    <td><a href="#parameter-singleTenantHsmInstanceProposalId"><code>singleTenantHsmInstanceProposalId</code></a></td>
    <td>Creates a new SingleTenantHsmInstanceProposal for a given SingleTenantHsmInstance.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-singleTenantHsmInstancesId"><code>singleTenantHsmInstancesId</code></a>, <a href="#parameter-proposalsId"><code>proposalsId</code></a></td>
    <td></td>
    <td>Deletes a SingleTenantHsmInstanceProposal.</td>
</tr>
<tr>
    <td><a href="#execute"><CopyableCode code="execute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-singleTenantHsmInstancesId"><code>singleTenantHsmInstancesId</code></a>, <a href="#parameter-proposalsId"><code>proposalsId</code></a></td>
    <td></td>
    <td>Executes a SingleTenantHsmInstanceProposal for a given SingleTenantHsmInstance. The proposal must be in the APPROVED state.</td>
</tr>
<tr>
    <td><a href="#approve"><CopyableCode code="approve" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-singleTenantHsmInstancesId"><code>singleTenantHsmInstancesId</code></a>, <a href="#parameter-proposalsId"><code>proposalsId</code></a></td>
    <td></td>
    <td>Approves a SingleTenantHsmInstanceProposal for a given SingleTenantHsmInstance. The proposal must be in the PENDING state.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-proposalsId">
    <td><CopyableCode code="proposalsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-singleTenantHsmInstancesId">
    <td><CopyableCode code="singleTenantHsmInstancesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
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
<tr id="parameter-showDeleted">
    <td><CopyableCode code="showDeleted" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-singleTenantHsmInstanceProposalId">
    <td><CopyableCode code="singleTenantHsmInstanceProposalId" /></td>
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

Returns metadata for a given SingleTenantHsmInstanceProposal.

```sql
SELECT
name,
addQuorumMember,
createTime,
deleteSingleTenantHsmInstance,
deleteTime,
disableSingleTenantHsmInstance,
enableSingleTenantHsmInstance,
expireTime,
failureReason,
purgeTime,
quorumParameters,
refreshSingleTenantHsmInstance,
registerTwoFactorAuthKeys,
removeQuorumMember,
requiredActionQuorumParameters,
state,
ttl,
upgradeKeyTrust
FROM google.cloudkms.proposals
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND singleTenantHsmInstancesId = '{{ singleTenantHsmInstancesId }}' -- required
AND proposalsId = '{{ proposalsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists SingleTenantHsmInstanceProposals.

```sql
SELECT
name,
addQuorumMember,
createTime,
deleteSingleTenantHsmInstance,
deleteTime,
disableSingleTenantHsmInstance,
enableSingleTenantHsmInstance,
expireTime,
failureReason,
purgeTime,
quorumParameters,
refreshSingleTenantHsmInstance,
registerTwoFactorAuthKeys,
removeQuorumMember,
requiredActionQuorumParameters,
state,
ttl,
upgradeKeyTrust
FROM google.cloudkms.proposals
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND singleTenantHsmInstancesId = '{{ singleTenantHsmInstancesId }}' -- required
AND orderBy = '{{ orderBy }}'
AND filter = '{{ filter }}'
AND pageToken = '{{ pageToken }}'
AND showDeleted = '{{ showDeleted }}'
AND pageSize = '{{ pageSize }}'
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

Creates a new SingleTenantHsmInstanceProposal for a given SingleTenantHsmInstance.

```sql
INSERT INTO google.cloudkms.proposals (
data__name,
data__deleteSingleTenantHsmInstance,
data__upgradeKeyTrust,
data__addQuorumMember,
data__registerTwoFactorAuthKeys,
data__enableSingleTenantHsmInstance,
data__expireTime,
data__refreshSingleTenantHsmInstance,
data__ttl,
data__disableSingleTenantHsmInstance,
data__removeQuorumMember,
projectsId,
locationsId,
singleTenantHsmInstancesId,
singleTenantHsmInstanceProposalId
)
SELECT 
'{{ name }}',
'{{ deleteSingleTenantHsmInstance }}',
'{{ upgradeKeyTrust }}',
'{{ addQuorumMember }}',
'{{ registerTwoFactorAuthKeys }}',
'{{ enableSingleTenantHsmInstance }}',
'{{ expireTime }}',
'{{ refreshSingleTenantHsmInstance }}',
'{{ ttl }}',
'{{ disableSingleTenantHsmInstance }}',
'{{ removeQuorumMember }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ singleTenantHsmInstancesId }}',
'{{ singleTenantHsmInstanceProposalId }}'
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
- name: proposals
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the proposals resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the proposals resource.
    - name: singleTenantHsmInstancesId
      value: "{{ singleTenantHsmInstancesId }}"
      description: Required parameter for the proposals resource.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The resource name for this SingleTenantHsmInstance in the format \`projects/*/locations/*/singleTenantHsmInstances/*/proposals/*\`.
    - name: deleteSingleTenantHsmInstance
      value: "{{ deleteSingleTenantHsmInstance }}"
      description: |
        Delete the SingleTenantHsmInstance. Deleting a SingleTenantHsmInstance will make all CryptoKeys attached to the SingleTenantHsmInstance unusable. The SingleTenantHsmInstance must be in the DISABLED or PENDING_TWO_FACTOR_AUTH_REGISTRATION state to perform this operation.
    - name: upgradeKeyTrust
      description: |
        Promotes a key with the AES_WRAPPING purpose to a trusted wrapping key. The key must be in the ACTIVE state to perform this operation.
      value:
        name: "{{ name }}"
        twoFactorPublicKeyPem: "{{ twoFactorPublicKeyPem }}"
    - name: addQuorumMember
      description: |
        Add a quorum member to the SingleTenantHsmInstance. This will increase the total_approver_count by 1. The SingleTenantHsmInstance must be in the ACTIVE state to perform this operation.
      value:
        twoFactorPublicKeyPem: "{{ twoFactorPublicKeyPem }}"
    - name: registerTwoFactorAuthKeys
      description: |
        Register 2FA keys for the SingleTenantHsmInstance. This operation requires all N Challenges to be signed by 2FA keys. The SingleTenantHsmInstance must be in the PENDING_TWO_FACTOR_AUTH_REGISTRATION state to perform this operation.
      value:
        requiredApproverCount: {{ requiredApproverCount }}
        twoFactorPublicKeyPems:
          - "{{ twoFactorPublicKeyPems }}"
    - name: enableSingleTenantHsmInstance
      value: "{{ enableSingleTenantHsmInstance }}"
      description: |
        Enable the SingleTenantHsmInstance. The SingleTenantHsmInstance must be in the DISABLED state to perform this operation.
    - name: expireTime
      value: "{{ expireTime }}"
      description: |
        The time at which the SingleTenantHsmInstanceProposal will expire if not approved and executed.
    - name: refreshSingleTenantHsmInstance
      value: "{{ refreshSingleTenantHsmInstance }}"
      description: |
        Refreshes the SingleTenantHsmInstance. This operation must be performed periodically to keep the SingleTenantHsmInstance active. This operation must be performed before unrefreshed_duration_until_disable has passed. The SingleTenantHsmInstance must be in the ACTIVE state to perform this operation.
    - name: ttl
      value: "{{ ttl }}"
      description: |
        Input only. The TTL for the SingleTenantHsmInstanceProposal. Proposals will expire after this duration.
    - name: disableSingleTenantHsmInstance
      value: "{{ disableSingleTenantHsmInstance }}"
      description: |
        Disable the SingleTenantHsmInstance. The SingleTenantHsmInstance must be in the ACTIVE state to perform this operation.
    - name: removeQuorumMember
      description: |
        Remove a quorum member from the SingleTenantHsmInstance. This will reduce total_approver_count by 1. The SingleTenantHsmInstance must be in the ACTIVE state to perform this operation.
      value:
        twoFactorPublicKeyPem: "{{ twoFactorPublicKeyPem }}"
    - name: singleTenantHsmInstanceProposalId
      value: "{{ singleTenantHsmInstanceProposalId }}"
`}</CodeBlock>

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

Deletes a SingleTenantHsmInstanceProposal.

```sql
DELETE FROM google.cloudkms.proposals
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND singleTenantHsmInstancesId = '{{ singleTenantHsmInstancesId }}' --required
AND proposalsId = '{{ proposalsId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="execute"
    values={[
        { label: 'execute', value: 'execute' },
        { label: 'approve', value: 'approve' }
    ]}
>
<TabItem value="execute">

Executes a SingleTenantHsmInstanceProposal for a given SingleTenantHsmInstance. The proposal must be in the APPROVED state.

```sql
EXEC google.cloudkms.proposals.execute 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@singleTenantHsmInstancesId='{{ singleTenantHsmInstancesId }}' --required, 
@proposalsId='{{ proposalsId }}' --required
;
```
</TabItem>
<TabItem value="approve">

Approves a SingleTenantHsmInstanceProposal for a given SingleTenantHsmInstance. The proposal must be in the PENDING state.

```sql
EXEC google.cloudkms.proposals.approve 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@singleTenantHsmInstancesId='{{ singleTenantHsmInstancesId }}' --required, 
@proposalsId='{{ proposalsId }}' --required 
@@json=
'{
"quorumReply": "{{ quorumReply }}", 
"requiredActionQuorumReply": "{{ requiredActionQuorumReply }}"
}'
;
```
</TabItem>
</Tabs>
