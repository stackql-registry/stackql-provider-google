--- 
title: zone_vm_extension_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - zone_vm_extension_policies
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

Creates, updates, deletes, gets or lists a <code>zone_vm_extension_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="zone_vm_extension_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.zone_vm_extension_policies" /></td></tr>
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
    <td>An optional description of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="extensionPolicies" /></td>
    <td><code>object</code></td>
    <td>Required. A map of extension names (for example, "ops-agent") to their corresponding policy configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="globalResourceLink" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. [Output Only] Link to the global policy that manages this zone policy, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceSelectors" /></td>
    <td><code>array</code></td>
    <td>Optional. Selectors to target VMs for this policy. VMs are selected if they match *any* of the provided selectors (logical OR). If this list is empty, the policy applies to all VMs.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of the resource. Alwayscompute#vmExtensionPolicy. (default: compute#vmExtensionPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="managedByGlobal" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Output only. [Output Only] Indicates if this policy is managed by a global policy.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. Priority of this policy. Used to resolve conflicts when multiple policies apply to the same extension. The policy priority is an integer from 0 to 65535, inclusive. Lower integers indicate higher priorities. If you do not specify a priority when creating a rule, it is assigned a priority of 1000. If priorities are equal, the policy with the most recent creation timestamp takes precedence.</td>
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
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. [Output Only] Current state of the policy: ACTIVE or DELETING. (ACTIVE, DELETING, STATE_UNSPECIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTimestamp" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Update timestamp inRFC3339 text format.</td>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Unique identifier for the resource; defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a VmExtensionPolicy. An up-to-date fingerprint must be provided in order to update the VmExtensionPolicy.  To see the latest value of the fingerprint, make a get() request to retrieve a VmExtensionPolicy.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>Output only. [Output Only] A list of VM extension policy resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. Type of resource. (default: compute#vmExtensionPolicyList)</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger thanmaxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.</td>
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
    <td>Output only. [Output Only] Informational warning message.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-vmExtensionPolicy"><code>vmExtensionPolicy</code></a></td>
    <td></td>
    <td>Retrieves details of a specific zone VM extension policy within a project.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Lists all VM extension policies within a specific zone for a project.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new zone-level VM extension policy within a project.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-vmExtensionPolicy"><code>vmExtensionPolicy</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Modifies an existing zone VM extension policy within a project.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-vmExtensionPolicy"><code>vmExtensionPolicy</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a specified zone VM extension policy within a project.</td>
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
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-vmExtensionPolicy">
    <td><CopyableCode code="vmExtensionPolicy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-zone">
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
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

Retrieves details of a specific zone VM extension policy within a project.

```sql
SELECT
id,
name,
creationTimestamp,
description,
extensionPolicies,
globalResourceLink,
instanceSelectors,
kind,
managedByGlobal,
priority,
selfLink,
selfLinkWithId,
state,
updateTimestamp
FROM google.compute.zone_vm_extension_policies
WHERE project = '{{ project }}' -- required
AND zone = '{{ zone }}' -- required
AND vmExtensionPolicy = '{{ vmExtensionPolicy }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists all VM extension policies within a specific zone for a project.

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
FROM google.compute.zone_vm_extension_policies
WHERE project = '{{ project }}' -- required
AND zone = '{{ zone }}' -- required
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

Creates a new zone-level VM extension policy within a project.

```sql
INSERT INTO google.compute.zone_vm_extension_policies (
data__description,
data__extensionPolicies,
data__instanceSelectors,
data__name,
data__priority,
project,
zone,
requestId
)
SELECT 
'{{ description }}',
'{{ extensionPolicies }}',
'{{ instanceSelectors }}',
'{{ name }}',
{{ priority }},
'{{ project }}',
'{{ zone }}',
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
- name: zone_vm_extension_policies
  props:
    - name: project
      value: "{{ project }}"
      description: Required parameter for the zone_vm_extension_policies resource.
    - name: zone
      value: "{{ zone }}"
      description: Required parameter for the zone_vm_extension_policies resource.
    - name: description
      value: "{{ description }}"
      description: |
        An optional description of this resource.
    - name: extensionPolicies
      value: "{{ extensionPolicies }}"
      description: |
        Required. A map of extension names (for example, "ops-agent") to their corresponding
        policy configurations.
    - name: instanceSelectors
      description: |
        Optional. Selectors to target VMs for this policy. VMs are selected if they match
        *any* of the provided selectors (logical OR). If this list is empty, the
        policy applies to all VMs.
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
        Optional. Priority of this policy. Used to resolve conflicts when multiple policies
        apply to the same extension.
        The policy priority is an integer from 0 to 65535, inclusive. Lower
        integers indicate higher priorities. If you do not specify a priority when
        creating a rule, it is assigned a priority of 1000. If priorities are
        equal, the policy with the most recent creation timestamp takes precedence.
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

Modifies an existing zone VM extension policy within a project.

```sql
UPDATE google.compute.zone_vm_extension_policies
SET 
data__description = '{{ description }}',
data__extensionPolicies = '{{ extensionPolicies }}',
data__instanceSelectors = '{{ instanceSelectors }}',
data__name = '{{ name }}',
data__priority = {{ priority }}
WHERE 
project = '{{ project }}' --required
AND zone = '{{ zone }}' --required
AND vmExtensionPolicy = '{{ vmExtensionPolicy }}' --required
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

Deletes a specified zone VM extension policy within a project.

```sql
DELETE FROM google.compute.zone_vm_extension_policies
WHERE project = '{{ project }}' --required
AND zone = '{{ zone }}' --required
AND vmExtensionPolicy = '{{ vmExtensionPolicy }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
