--- 
title: global_vm_extension_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - global_vm_extension_policies
  - compute
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

Creates, updates, deletes, gets or lists a <code>global_vm_extension_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="global_vm_extension_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.global_vm_extension_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'aggregated_list', value: 'aggregated_list' },
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
    <td><CopyableCode code="id" /></td>
    <td><code>string (uint64)</code></td>
    <td>Output only. [Output Only] The unique identifier for the resource. This identifier is defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply withRFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: <code>&#91;a-z&#93;(?:&#91;-a-z0-9&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Creation timestamp inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="extensionPolicies" /></td>
    <td><code>object</code></td>
    <td>Required. Map from extension (eg: "cloudops") to its policy configuration. The key is the name of the extension.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceSelectors" /></td>
    <td><code>array</code></td>
    <td>Optional. Selector to target VMs for a policy. There is a logical "AND" between instance_selectors.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of the resource. Alwayscompute#globalVmExtensionPolicy for globalVmExtensionPolicies. (default: compute#globalVmExtensionPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. Used to resolve conflicts when multiple policies are active for the same extension. Defaults to 0.  Larger the number, higher the priority. When the priority is the same, the policy with the newer create time has higher priority.</td>
</tr>
<tr>
    <td><CopyableCode code="rolloutOperation" /></td>
    <td><code>object</code></td>
    <td>Required. The rollout strategy and status. (id: GlobalVmExtensionPolicyRolloutOperation)</td>
</tr>
<tr>
    <td><CopyableCode code="scopedResourceStatus" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The scoped resource status. It's only for tracking the purging status of the policy. (SCOPED_RESOURCE_STATUS_DELETING, SCOPED_RESOURCE_STATUS_UNSPECIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined fully-qualified URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLinkWithId" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined URL for this resource's resource id.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTimestamp" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Update timestamp inRFC3339 text format.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="aggregated_list">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Unique identifier for the resource; defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>A list of GlobalVmExtensionPolicy resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. Type of resource. (default: compute#globalVmExtensionPolicyList)</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>[Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger thanmaxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="unreachables" /></td>
    <td><code>array</code></td>
    <td>Output only. [Output Only] Unreachable resources.</td>
</tr>
<tr>
    <td><CopyableCode code="warning" /></td>
    <td><code>object</code></td>
    <td>[Output Only] Informational warning message.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-globalVmExtensionPolicy"><code>globalVmExtensionPolicy</code></a></td>
    <td></td>
    <td>Gets details of a global VM extension policy.</td>
</tr>
<tr>
    <td><a href="#aggregated_list"><CopyableCode code="aggregated_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-includeAllScopes"><code>includeAllScopes</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a>, <a href="#parameter-serviceProjectNumber"><code>serviceProjectNumber</code></a></td>
    <td>Retrieves the list of all VM Extension Policy resources<br />available to the specified project.<br /><br />To prevent failure, it's recommended that you set the<br />`returnPartialSuccess` parameter to `true`.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Lists global VM extension policies.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new project level GlobalVmExtensionPolicy.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-globalVmExtensionPolicy"><code>globalVmExtensionPolicy</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates a global VM extension policy.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-globalVmExtensionPolicy"><code>globalVmExtensionPolicy</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Purge scoped resources (zonal policies) from a global VM extension<br />policy, and then delete the global VM extension policy. Purge of the scoped<br />resources is a pre-condition of the global VM extension policy deletion.<br />The deletion of the global VM extension policy happens after the purge<br />rollout is done, so it's not a part of the LRO. It's an automatic process<br />that triggers in the backend.</td>
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
<tr id="parameter-globalVmExtensionPolicy">
    <td><CopyableCode code="globalVmExtensionPolicy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includeAllScopes">
    <td><CopyableCode code="includeAllScopes" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (uint32)</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
    <td><code>string</code></td>
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
<tr id="parameter-returnPartialSuccess">
    <td><CopyableCode code="returnPartialSuccess" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-serviceProjectNumber">
    <td><CopyableCode code="serviceProjectNumber" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'aggregated_list', value: 'aggregated_list' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets details of a global VM extension policy.

```sql
SELECT
id,
name,
creationTimestamp,
description,
extensionPolicies,
instanceSelectors,
kind,
priority,
rolloutOperation,
scopedResourceStatus,
selfLink,
selfLinkWithId,
updateTimestamp
FROM google.compute.global_vm_extension_policies
WHERE project = '{{ project }}' -- required
AND globalVmExtensionPolicy = '{{ globalVmExtensionPolicy }}' -- required
;
```
</TabItem>
<TabItem value="aggregated_list">

Retrieves the list of all VM Extension Policy resources<br />available to the specified project.<br /><br />To prevent failure, it's recommended that you set the<br />`returnPartialSuccess` parameter to `true`.

```sql
SELECT
*
FROM google.compute.global_vm_extension_policies
WHERE project = '{{ project }}' -- required
AND filter = '{{ filter }}'
AND includeAllScopes = '{{ includeAllScopes }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
AND serviceProjectNumber = '{{ serviceProjectNumber }}'
;
```
</TabItem>
<TabItem value="list">

Lists global VM extension policies.

```sql
SELECT
id,
etag,
items,
kind,
nextPageToken,
selfLink,
unreachables,
warning
FROM google.compute.global_vm_extension_policies
WHERE project = '{{ project }}' -- required
AND filter = '{{ filter }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="insert"
    values={[
        { label: 'insert', value: 'insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert">

Creates a new project level GlobalVmExtensionPolicy.

```sql
INSERT INTO google.compute.global_vm_extension_policies (
data__description,
data__extensionPolicies,
data__instanceSelectors,
data__name,
data__priority,
data__rolloutOperation,
project,
requestId
)
SELECT 
'{{ description }}',
'{{ extensionPolicies }}',
'{{ instanceSelectors }}',
'{{ name }}',
{{ priority }},
'{{ rolloutOperation }}',
'{{ project }}',
'{{ requestId }}'
RETURNING
id,
name,
clientOperationId,
creationTimestamp,
description,
endTime,
error,
getVersionOperationMetadata,
httpErrorMessage,
httpErrorStatusCode,
insertTime,
instancesBulkInsertOperationMetadata,
kind,
operationGroupId,
operationType,
progress,
region,
selfLink,
setCommonInstanceMetadataOperationMetadata,
startTime,
status,
statusMessage,
targetId,
targetLink,
user,
warnings,
zone
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: global_vm_extension_policies
  props:
    - name: project
      value: "{{ project }}"
      description: Required parameter for the global_vm_extension_policies resource.
    - name: description
      value: "{{ description }}"
      description: |
        An optional description of this resource. Provide this property when you
        create the resource.
    - name: extensionPolicies
      value: "{{ extensionPolicies }}"
      description: |
        Required. Map from extension (eg: "cloudops") to its policy configuration.
        The key is the name of the extension.
    - name: instanceSelectors
      description: |
        Optional. Selector to target VMs for a policy.
        There is a logical "AND" between instance_selectors.
      value:
        - labelSelector:
            inclusionLabels: "{{ inclusionLabels }}"
    - name: name
      value: "{{ name }}"
      description: |
        Name of the resource. Provided by the client when the resource is created.
        The name must be 1-63 characters long, and comply withRFC1035.
        Specifically, the name must be 1-63 characters long and match the regular
        expression \`[a-z]([-a-z0-9]*[a-z0-9])?\`
        which means the first character must be a lowercase letter, and all
        following characters must be a dash, lowercase letter, or digit, except
        the last character, which cannot be a dash.
    - name: priority
      value: {{ priority }}
      description: |
        Optional. Used to resolve conflicts when multiple policies are active for the same
        extension. Defaults to 0.
        Larger the number, higher the priority. When the priority is the same,
        the policy with the newer create time has higher priority.
    - name: rolloutOperation
      description: |
        Required. The rollout strategy and status.
      value:
        rolloutInput:
          conflictBehavior: "{{ conflictBehavior }}"
          name: "{{ name }}"
          predefinedRolloutPlan: "{{ predefinedRolloutPlan }}"
          retryUuid: "{{ retryUuid }}"
        rolloutStatus:
          currentRollouts:
            - locationRolloutStatus: "{{ locationRolloutStatus }}"
              rollout: "{{ rollout }}"
              rolloutPlan: "{{ rolloutPlan }}"
              state: "{{ state }}"
          previousRollout:
            locationRolloutStatus: "{{ locationRolloutStatus }}"
            rollout: "{{ rollout }}"
            rolloutPlan: "{{ rolloutPlan }}"
            state: "{{ state }}"
    - name: requestId
      value: "{{ requestId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates a global VM extension policy.

```sql
UPDATE google.compute.global_vm_extension_policies
SET 
data__description = '{{ description }}',
data__extensionPolicies = '{{ extensionPolicies }}',
data__instanceSelectors = '{{ instanceSelectors }}',
data__name = '{{ name }}',
data__priority = {{ priority }},
data__rolloutOperation = '{{ rolloutOperation }}'
WHERE 
project = '{{ project }}' --required
AND globalVmExtensionPolicy = '{{ globalVmExtensionPolicy }}' --required
AND requestId = '{{ requestId}}'
RETURNING
id,
name,
clientOperationId,
creationTimestamp,
description,
endTime,
error,
getVersionOperationMetadata,
httpErrorMessage,
httpErrorStatusCode,
insertTime,
instancesBulkInsertOperationMetadata,
kind,
operationGroupId,
operationType,
progress,
region,
selfLink,
setCommonInstanceMetadataOperationMetadata,
startTime,
status,
statusMessage,
targetId,
targetLink,
user,
warnings,
zone;
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

Purge scoped resources (zonal policies) from a global VM extension<br />policy, and then delete the global VM extension policy. Purge of the scoped<br />resources is a pre-condition of the global VM extension policy deletion.<br />The deletion of the global VM extension policy happens after the purge<br />rollout is done, so it's not a part of the LRO. It's an automatic process<br />that triggers in the backend.

```sql
DELETE FROM google.compute.global_vm_extension_policies
WHERE project = '{{ project }}' --required
AND globalVmExtensionPolicy = '{{ globalVmExtensionPolicy }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
