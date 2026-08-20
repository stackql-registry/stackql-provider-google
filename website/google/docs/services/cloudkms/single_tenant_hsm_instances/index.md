--- 
title: single_tenant_hsm_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - single_tenant_hsm_instances
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

Creates, updates, deletes, gets or lists a <code>single_tenant_hsm_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="single_tenant_hsm_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudkms.single_tenant_hsm_instances" /></td></tr>
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
    <td>Identifier. The resource name for this SingleTenantHsmInstance in the format `projects/*/locations/*/singleTenantHsmInstances/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the SingleTenantHsmInstance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the SingleTenantHsmInstance was deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="disableTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the instance will be automatically disabled if not refreshed. This field is updated upon creation and after each successful refresh operation and enable. A RefreshSingleTenantHsmInstance operation must be made via a SingleTenantHsmInstanceProposal before this time otherwise the SingleTenantHsmInstance will become disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="keyPortabilityEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Immutable. Indicates whether key portability is enabled for the SingleTenantHsmInstance. This can only be set at creation time. Key portability features are disabled by default.</td>
</tr>
<tr>
    <td><CopyableCode code="quorumAuth" /></td>
    <td><code>object</code></td>
    <td>Required. The quorum auth configuration for the SingleTenantHsmInstance. (id: QuorumAuth)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the SingleTenantHsmInstance. (STATE_UNSPECIFIED, CREATING, PENDING_TWO_FACTOR_AUTH_REGISTRATION, ACTIVE, DISABLING, DISABLED, DELETING, DELETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="unrefreshedDurationUntilDisable" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Output only. The system-defined duration that an instance can remain unrefreshed until it is automatically disabled. This will have a value of 730 days.</td>
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
    <td>Identifier. The resource name for this SingleTenantHsmInstance in the format `projects/*/locations/*/singleTenantHsmInstances/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the SingleTenantHsmInstance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the SingleTenantHsmInstance was deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="disableTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the instance will be automatically disabled if not refreshed. This field is updated upon creation and after each successful refresh operation and enable. A RefreshSingleTenantHsmInstance operation must be made via a SingleTenantHsmInstanceProposal before this time otherwise the SingleTenantHsmInstance will become disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="keyPortabilityEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Immutable. Indicates whether key portability is enabled for the SingleTenantHsmInstance. This can only be set at creation time. Key portability features are disabled by default.</td>
</tr>
<tr>
    <td><CopyableCode code="quorumAuth" /></td>
    <td><code>object</code></td>
    <td>Required. The quorum auth configuration for the SingleTenantHsmInstance. (id: QuorumAuth)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the SingleTenantHsmInstance. (STATE_UNSPECIFIED, CREATING, PENDING_TWO_FACTOR_AUTH_REGISTRATION, ACTIVE, DISABLING, DISABLED, DELETING, DELETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="unrefreshedDurationUntilDisable" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Output only. The system-defined duration that an instance can remain unrefreshed until it is automatically disabled. This will have a value of 730 days.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-singleTenantHsmInstancesId"><code>singleTenantHsmInstancesId</code></a></td>
    <td></td>
    <td>Returns metadata for a given SingleTenantHsmInstance.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-showDeleted"><code>showDeleted</code></a></td>
    <td>Lists SingleTenantHsmInstances.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-singleTenantHsmInstanceId"><code>singleTenantHsmInstanceId</code></a></td>
    <td>Creates a new SingleTenantHsmInstance in a given Project and Location. User must create a RegisterTwoFactorAuthKeys proposal with this single-tenant HSM instance to finish setup of the instance.</td>
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
<tr id="parameter-singleTenantHsmInstanceId">
    <td><CopyableCode code="singleTenantHsmInstanceId" /></td>
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

Returns metadata for a given SingleTenantHsmInstance.

```sql
SELECT
name,
createTime,
deleteTime,
disableTime,
keyPortabilityEnabled,
quorumAuth,
state,
unrefreshedDurationUntilDisable
FROM google.cloudkms.single_tenant_hsm_instances
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND singleTenantHsmInstancesId = '{{ singleTenantHsmInstancesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists SingleTenantHsmInstances.

```sql
SELECT
name,
createTime,
deleteTime,
disableTime,
keyPortabilityEnabled,
quorumAuth,
state,
unrefreshedDurationUntilDisable
FROM google.cloudkms.single_tenant_hsm_instances
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND showDeleted = '{{ showDeleted }}'
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

Creates a new SingleTenantHsmInstance in a given Project and Location. User must create a RegisterTwoFactorAuthKeys proposal with this single-tenant HSM instance to finish setup of the instance.

```sql
INSERT INTO google.cloudkms.single_tenant_hsm_instances (
data__keyPortabilityEnabled,
data__name,
data__quorumAuth,
projectsId,
locationsId,
singleTenantHsmInstanceId
)
SELECT 
{{ keyPortabilityEnabled }},
'{{ name }}',
'{{ quorumAuth }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ singleTenantHsmInstanceId }}'
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
- name: single_tenant_hsm_instances
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the single_tenant_hsm_instances resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the single_tenant_hsm_instances resource.
    - name: keyPortabilityEnabled
      value: {{ keyPortabilityEnabled }}
      description: |
        Optional. Immutable. Indicates whether key portability is enabled for the SingleTenantHsmInstance. This can only be set at creation time. Key portability features are disabled by default.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The resource name for this SingleTenantHsmInstance in the format \`projects/*/locations/*/singleTenantHsmInstances/*\`.
    - name: quorumAuth
      description: |
        Required. The quorum auth configuration for the SingleTenantHsmInstance.
      value:
        requiredApproverCount: {{ requiredApproverCount }}
        totalApproverCount: {{ totalApproverCount }}
        twoFactorPublicKeyPems:
          - "{{ twoFactorPublicKeyPems }}"
    - name: singleTenantHsmInstanceId
      value: "{{ singleTenantHsmInstanceId }}"
`}</CodeBlock>

</TabItem>
</Tabs>
