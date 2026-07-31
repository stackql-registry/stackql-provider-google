--- 
title: instance_group_manager_resize_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_group_manager_resize_requests
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

Creates, updates, deletes, gets or lists an <code>instance_group_manager_resize_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_group_manager_resize_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.instance_group_manager_resize_requests" /></td></tr>
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
    <td>Output only. A unique identifier for this resource type. The server generates this identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of this resize request. The name must be 1-63 characters long, and comply withRFC1035. (pattern: <code>&#91;a-z&#93;(?:&#91;-a-z0-9&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>Output only. The creation timestamp for this resize request inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="instances" /></td>
    <td><code>array</code></td>
    <td>The names of instances to be created by this resize request. The number of names specified determines the number of instances to create. The group's target size will be increased by this number. This field cannot be used together with 'resize_by'.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource type, which is alwayscompute#instanceGroupManagerResizeRequest for resize requests. (default: compute#instanceGroupManagerResizeRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Output only. The URL of a region where the resize request is located. Populated only for regional resize requests.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedRunDuration" /></td>
    <td><code>object</code></td>
    <td>A Duration represents a fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". Range is approximately 10,000 years. (id: Duration)</td>
</tr>
<tr>
    <td><CopyableCode code="resizeBy" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of instances to be created by this resize request. The group's target size will be increased by this number. This field cannot be used together with 'instances'.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. The URL for this resize request. The server defines this URL.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLinkWithId" /></td>
    <td><code>string</code></td>
    <td>Output only. Server-defined URL for this resource with the resource id.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the request. (ACCEPTED, CANCELLED, CREATING, FAILED, STATE_UNSPECIFIED, SUCCEEDED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Output only. Status of the request. (id: InstanceGroupManagerResizeRequestStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Output only. The URL of a zone where the resize request is located. Populated only for zonal resize requests.</td>
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
    <td>Output only. Unique identifier for the resource; defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>A list of resize request resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. Type of the resource. Alwayscompute#instanceGroupManagerResizeRequestList for a list of resize requests. (default: compute#instanceGroupManagerResizeRequestList)</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Output only. This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use thenextPageToken as a value for the query parameterpageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. Server-defined URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="warning" /></td>
    <td><code>object</code></td>
    <td>Output only. Informational warning message.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-instanceGroupManager"><code>instanceGroupManager</code></a>, <a href="#parameter-resizeRequest"><code>resizeRequest</code></a></td>
    <td></td>
    <td>Returns all of the details about the specified resize request.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-instanceGroupManager"><code>instanceGroupManager</code></a></td>
    <td><a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Retrieves a list of resize requests that are contained in the<br />managed instance group.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-instanceGroupManager"><code>instanceGroupManager</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new resize request that starts provisioning VMs immediately<br />or queues VM creation.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-instanceGroupManager"><code>instanceGroupManager</code></a>, <a href="#parameter-resizeRequest"><code>resizeRequest</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified, inactive resize request. Requests that are still<br />active cannot be deleted. Deleting request does not delete instances that<br />were provisioned previously.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-instanceGroupManager"><code>instanceGroupManager</code></a>, <a href="#parameter-resizeRequest"><code>resizeRequest</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Cancels the specified resize request and removes it from the queue.<br />Cancelled resize request does no longer wait for the resources to be<br />provisioned. Cancel is only possible for requests that are accepted in the<br />queue.</td>
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
<tr id="parameter-instanceGroupManager">
    <td><CopyableCode code="instanceGroupManager" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-resizeRequest">
    <td><CopyableCode code="resizeRequest" /></td>
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

Returns all of the details about the specified resize request.

```sql
SELECT
id,
name,
creationTimestamp,
description,
instances,
kind,
region,
requestedRunDuration,
resizeBy,
selfLink,
selfLinkWithId,
state,
status,
zone
FROM google.compute.instance_group_manager_resize_requests
WHERE project = '{{ project }}' -- required
AND zone = '{{ zone }}' -- required
AND instanceGroupManager = '{{ instanceGroupManager }}' -- required
AND resizeRequest = '{{ resizeRequest }}' -- required
;
```
</TabItem>
<TabItem value="list">

Retrieves a list of resize requests that are contained in the<br />managed instance group.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.instance_group_manager_resize_requests
WHERE project = '{{ project }}' -- required
AND zone = '{{ zone }}' -- required
AND instanceGroupManager = '{{ instanceGroupManager }}' -- required
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
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

Creates a new resize request that starts provisioning VMs immediately<br />or queues VM creation.

```sql
INSERT INTO google.compute.instance_group_manager_resize_requests (
data__requestedRunDuration,
data__description,
data__instances,
data__resizeBy,
data__name,
project,
zone,
instanceGroupManager,
requestId
)
SELECT 
'{{ requestedRunDuration }}',
'{{ description }}',
'{{ instances }}',
{{ resizeBy }},
'{{ name }}',
'{{ project }}',
'{{ zone }}',
'{{ instanceGroupManager }}',
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
- name: instance_group_manager_resize_requests
  props:
    - name: project
      value: "{{ project }}"
      description: Required parameter for the instance_group_manager_resize_requests resource.
    - name: zone
      value: "{{ zone }}"
      description: Required parameter for the instance_group_manager_resize_requests resource.
    - name: instanceGroupManager
      value: "{{ instanceGroupManager }}"
      description: Required parameter for the instance_group_manager_resize_requests resource.
    - name: requestedRunDuration
      description: |
        A Duration represents a fixed-length span of time represented
        as a count of seconds and fractions of seconds at nanosecond
        resolution. It is independent of any calendar and concepts like "day"
        or "month". Range is approximately 10,000 years.
      value:
        nanos: {{ nanos }}
        seconds: "{{ seconds }}"
    - name: description
      value: "{{ description }}"
      description: |
        An optional description of this resource.
    - name: instances
      description: |
        The names of instances to be created by this resize request. The number of
        names specified determines the number of instances to create. The group's
        target size will be increased by this number. This field cannot be used
        together with 'resize_by'.
      value:
        - name: "{{ name }}"
          status: "{{ status }}"
          preservedState:
            disks: "{{ disks }}"
            internalIPs: "{{ internalIPs }}"
            metadata: "{{ metadata }}"
            externalIPs: "{{ externalIPs }}"
          fingerprint: "{{ fingerprint }}"
    - name: resizeBy
      value: {{ resizeBy }}
      description: |
        The number of instances to be created by this resize request. The group's
        target size will be increased by this number. This field cannot be used
        together with 'instances'.
    - name: name
      value: "{{ name }}"
      description: |
        The name of this resize request. The name must be 1-63 characters
        long, and comply withRFC1035.
    - name: requestId
      value: "{{ requestId }}"
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

Deletes the specified, inactive resize request. Requests that are still<br />active cannot be deleted. Deleting request does not delete instances that<br />were provisioned previously.

```sql
DELETE FROM google.compute.instance_group_manager_resize_requests
WHERE project = '{{ project }}' --required
AND zone = '{{ zone }}' --required
AND instanceGroupManager = '{{ instanceGroupManager }}' --required
AND resizeRequest = '{{ resizeRequest }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel"
    values={[
        { label: 'cancel', value: 'cancel' }
    ]}
>
<TabItem value="cancel">

Cancels the specified resize request and removes it from the queue.<br />Cancelled resize request does no longer wait for the resources to be<br />provisioned. Cancel is only possible for requests that are accepted in the<br />queue.

```sql
EXEC google.compute.instance_group_manager_resize_requests.cancel 
@project='{{ project }}' --required, 
@zone='{{ zone }}' --required, 
@instanceGroupManager='{{ instanceGroupManager }}' --required, 
@resizeRequest='{{ resizeRequest }}' --required, 
@requestId='{{ requestId }}'
;
```
</TabItem>
</Tabs>
