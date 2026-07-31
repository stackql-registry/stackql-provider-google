--- 
title: reservation_slots_version
hide_title: false
hide_table_of_contents: false
keywords:
  - reservation_slots_version
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

Creates, updates, deletes, gets or lists a <code>reservation_slots_version</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reservation_slots_version" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.reservation_slots_version" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_version"
    values={[
        { label: 'get_version', value: 'get_version' }
    ]}
>
<TabItem value="get_version">

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
    <td>[Output Only] The unique identifier for the operation. This identifier is defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Name of the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="clientOperationId" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The value of `requestId` if you provided it in the request. Not present otherwise.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Deprecated] This field is deprecated.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>[Output Only] A textual description of the operation, which is set when the operation is created.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The time that this operation was completed. This value is inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>[Output Only] If errors are generated during processing of the operation, this field will be populated.</td>
</tr>
<tr>
    <td><CopyableCode code="getVersionOperationMetadata" /></td>
    <td><code>object</code></td>
    <td> (id: GetVersionOperationMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="httpErrorMessage" /></td>
    <td><code>string</code></td>
    <td>[Output Only] If the operation fails, this field contains the HTTP error message that was returned, such as `NOT FOUND`.</td>
</tr>
<tr>
    <td><CopyableCode code="httpErrorStatusCode" /></td>
    <td><code>integer (int32)</code></td>
    <td>[Output Only] If the operation fails, this field contains the HTTP error status code that was returned. For example, a `404` means the resource was not found.</td>
</tr>
<tr>
    <td><CopyableCode code="insertTime" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The time that this operation was requested. This value is inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="instancesBulkInsertOperationMetadata" /></td>
    <td><code>object</code></td>
    <td> (id: InstancesBulkInsertOperationMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of the resource. Always `compute#operation` for Operation resources. (default: compute#operation)</td>
</tr>
<tr>
    <td><CopyableCode code="operationGroupId" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] An ID that represents a group of operations, such as when a group of operations results from a `bulkInsert` API request.</td>
</tr>
<tr>
    <td><CopyableCode code="operationType" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The type of operation, such as `insert`, `update`, or `delete`, and so on.</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>integer (int32)</code></td>
    <td>[Output Only] An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess when the operation will be complete. This number should monotonically increase as the operation progresses.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The URL of the region where the operation resides. Only applicable when performing regional operations.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="setCommonInstanceMetadataOperationMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. [Output Only] If the operation is for projects.setCommonInstanceMetadata, this field will contain information on all underlying zonal actions and their state. (id: SetCommonInstanceMetadataOperationMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The time that this operation was started by the server. This value is inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The status of the operation, which can be one of the following: `PENDING`, `RUNNING`, or `DONE`. (DONE, PENDING, RUNNING)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>[Output Only] An optional textual description of the current status of the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="targetId" /></td>
    <td><code>string (uint64)</code></td>
    <td>[Output Only] The unique target ID, which identifies a specific incarnation of the target resource.</td>
</tr>
<tr>
    <td><CopyableCode code="targetLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The URL of the resource that the operation modifies. For operations related to creating a snapshot, this points to the disk that the snapshot was created from.</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>string</code></td>
    <td>[Output Only] User who requested the operation, for example: `user@example.com` or `alice_smith_identifier (global/workforcePools/example-com-us-employees)`.</td>
</tr>
<tr>
    <td><CopyableCode code="warnings" /></td>
    <td><code>array</code></td>
    <td>[Output Only] If warning messages are generated during processing of the operation, this field will be populated.</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The URL of the zone where the operation resides. Only applicable when performing per-zone operations.</td>
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
    <td><a href="#get_version"><CopyableCode code="get_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-reservationsId"><code>reservationsId</code></a>, <a href="#parameter-reservationBlocksId"><code>reservationBlocksId</code></a>, <a href="#parameter-reservationSubBlocksId"><code>reservationSubBlocksId</code></a>, <a href="#parameter-reservationSlot"><code>reservationSlot</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Allows customers to get SBOM versions of a reservation slot.</td>
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
<tr id="parameter-reservationBlocksId">
    <td><CopyableCode code="reservationBlocksId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-reservationSlot">
    <td><CopyableCode code="reservationSlot" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-reservationSubBlocksId">
    <td><CopyableCode code="reservationSubBlocksId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-reservationsId">
    <td><CopyableCode code="reservationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-zone">
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_version"
    values={[
        { label: 'get_version', value: 'get_version' }
    ]}
>
<TabItem value="get_version">

Allows customers to get SBOM versions of a reservation slot.

```sql
SELECT
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
FROM google.compute.reservation_slots_version
WHERE project = '{{ project }}' -- required
AND zone = '{{ zone }}' -- required
AND reservationsId = '{{ reservationsId }}' -- required
AND reservationBlocksId = '{{ reservationBlocksId }}' -- required
AND reservationSubBlocksId = '{{ reservationSubBlocksId }}' -- required
AND reservationSlot = '{{ reservationSlot }}' -- required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
