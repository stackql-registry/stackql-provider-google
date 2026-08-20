--- 
title: future_reservations
hide_title: false
hide_table_of_contents: false
keywords:
  - future_reservations
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

Creates, updates, deletes, gets or lists a <code>future_reservations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="future_reservations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.future_reservations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' },
        { label: 'aggregated_list', value: 'aggregated_list' }
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
    <td>Output only. [Output Only] A unique identifier for this future reservation. The server defines this identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource, provided by the client when initially creating the resource. The resource name must be 1-63 characters long, and comply withRFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: <code>&#91;a-z&#93;(?:&#91;-a-z0-9&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="aggregateReservation" /></td>
    <td><code>object</code></td>
    <td>Aggregate reservation details for the future reservation. (id: AllocationAggregateReservation)</td>
</tr>
<tr>
    <td><CopyableCode code="autoCreatedReservationsDeleteTime" /></td>
    <td><code>string</code></td>
    <td>Future timestamp when the FR auto-created reservations will be deleted by Compute Engine. Format of this field must be a valid href="https://www.ietf.org/rfc/rfc3339.txt"&gt;RFC3339 value.</td>
</tr>
<tr>
    <td><CopyableCode code="autoCreatedReservationsDuration" /></td>
    <td><code>object</code></td>
    <td>Specifies the duration of auto-created reservations. It represents relative time to future reservation start_time when auto-created reservations will be automatically deleted by Compute Engine. Duration time unit is represented as a count of seconds and fractions of seconds at nanosecond resolution. (id: Duration)</td>
</tr>
<tr>
    <td><CopyableCode code="autoDeleteAutoCreatedReservations" /></td>
    <td><code>boolean</code></td>
    <td>Setting for enabling or disabling automatic deletion for auto-created reservation. If set to true, auto-created reservations will be deleted at Future Reservation's end time (default) or at user's defined timestamp if any of the [auto_created_reservations_delete_time, auto_created_reservations_duration] values is specified. For keeping auto-created reservation indefinitely, this value should be set to false.</td>
</tr>
<tr>
    <td><CopyableCode code="commitmentInfo" /></td>
    <td><code>object</code></td>
    <td>If not present, then FR will not deliver a new commitment or update an existing commitment. (id: FutureReservationCommitmentInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="confidentialComputeType" /></td>
    <td><code>string</code></td>
    <td> (CONFIDENTIAL_COMPUTE_TYPE_TDX, CONFIDENTIAL_COMPUTE_TYPE_UNSPECIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The creation timestamp for this future reservation inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentType" /></td>
    <td><code>string</code></td>
    <td>Type of the deployment requested as part of future reservation. (DENSE, DEPLOYMENT_TYPE_UNSPECIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the future reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="enableEmergentMaintenance" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if this group of VMs have emergent maintenance enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of the resource. Alwayscompute#futureReservation for future reservations. (default: compute#futureReservation)</td>
</tr>
<tr>
    <td><CopyableCode code="namePrefix" /></td>
    <td><code>string</code></td>
    <td>Name prefix for the reservations to be created at the time of delivery. The name prefix must comply with RFC1035. Maximum allowed length for name prefix is 20. Automatically created reservations name format will be -date-####.</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>object</code></td>
    <td>Input only. Additional params passed with the request, but not persisted as part of resource payload. (id: FutureReservationParams)</td>
</tr>
<tr>
    <td><CopyableCode code="planningStatus" /></td>
    <td><code>string</code></td>
    <td>Planning state before being submitted for evaluation (DRAFT, PLANNING_STATUS_UNSPECIFIED, SUBMITTED)</td>
</tr>
<tr>
    <td><CopyableCode code="reservationMode" /></td>
    <td><code>string</code></td>
    <td>The reservation mode which determines reservation-termination behavior and expected pricing. (CALENDAR, DEFAULT, RESERVATION_MODE_UNSPECIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="reservationName" /></td>
    <td><code>string</code></td>
    <td>Name of reservations where the capacity is provisioned at the time of delivery of  future reservations. If the reservation with the given name does not exist already, it is created automatically at the time of Approval with INACTIVE state till specified start-time. Either provide the reservation_name or a name_prefix.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Contains standard resource metadata for an FutureReservation resource. It is populated for each instance of the FutureReservation resource, and includes the api_version the instance was retrieved through, and its canonical resource_type name. (id: ResourceMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceName" /></td>
    <td><code>string</code></td>
    <td>Name of the resource intended to be delivered. Name should conform to RFC1035. This will be the name of storage pool or Exapool for persistent disk FRs.</td>
</tr>
<tr>
    <td><CopyableCode code="schedulingType" /></td>
    <td><code>string</code></td>
    <td>Maintenance information for this reservation (GROUPED, GROUP_MAINTENANCE_TYPE_UNSPECIFIED, INDEPENDENT)</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined fully-qualified URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLinkWithId" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined URL for this resource with the resource id.</td>
</tr>
<tr>
    <td><CopyableCode code="shareSettings" /></td>
    <td><code>object</code></td>
    <td>List of Projects/Folders to share with. (id: ShareSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="specificReservationRequired" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the auto-created reservation can be consumed by VMs with affinity for "any" reservation. If the field is set, then only VMs that target the reservation by name can consume from the delivered reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="specificSkuProperties" /></td>
    <td><code>object</code></td>
    <td>Future Reservation configuration to indicate instance properties and total count. (id: FutureReservationSpecificSKUProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Output only. [Output only] Status of the Future Reservation (id: FutureReservationStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="storagePoolProperties" /></td>
    <td><code>object</code></td>
    <td>Storage pool details for the future reservation. (id: FutureReservationStoragePoolProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="timeWindow" /></td>
    <td><code>object</code></td>
    <td>Time window for this Future Reservation. (id: FutureReservationTimeWindow)</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] URL of the Zone where this future reservation resides.</td>
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
    <td>[Output Only] The unique identifier for the resource. This identifier is defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>[Output Only] A list of future reservation resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of resource.Alwayscompute#FutureReservationsListResponse for lists of reservations (default: compute#futureReservationsListResponse)</td>
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
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string (uint64)</code></td>
    <td>Output only. [Output Only] A unique identifier for this future reservation. The server defines this identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource, provided by the client when initially creating the resource. The resource name must be 1-63 characters long, and comply withRFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: <code>&#91;a-z&#93;(?:&#91;-a-z0-9&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="aggregateReservation" /></td>
    <td><code>object</code></td>
    <td>Aggregate reservation details for the future reservation. (id: AllocationAggregateReservation)</td>
</tr>
<tr>
    <td><CopyableCode code="autoCreatedReservationsDeleteTime" /></td>
    <td><code>string</code></td>
    <td>Future timestamp when the FR auto-created reservations will be deleted by Compute Engine. Format of this field must be a valid href="https://www.ietf.org/rfc/rfc3339.txt"&gt;RFC3339 value.</td>
</tr>
<tr>
    <td><CopyableCode code="autoCreatedReservationsDuration" /></td>
    <td><code>object</code></td>
    <td>Specifies the duration of auto-created reservations. It represents relative time to future reservation start_time when auto-created reservations will be automatically deleted by Compute Engine. Duration time unit is represented as a count of seconds and fractions of seconds at nanosecond resolution. (id: Duration)</td>
</tr>
<tr>
    <td><CopyableCode code="autoDeleteAutoCreatedReservations" /></td>
    <td><code>boolean</code></td>
    <td>Setting for enabling or disabling automatic deletion for auto-created reservation. If set to true, auto-created reservations will be deleted at Future Reservation's end time (default) or at user's defined timestamp if any of the [auto_created_reservations_delete_time, auto_created_reservations_duration] values is specified. For keeping auto-created reservation indefinitely, this value should be set to false.</td>
</tr>
<tr>
    <td><CopyableCode code="commitmentInfo" /></td>
    <td><code>object</code></td>
    <td>If not present, then FR will not deliver a new commitment or update an existing commitment. (id: FutureReservationCommitmentInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="confidentialComputeType" /></td>
    <td><code>string</code></td>
    <td> (CONFIDENTIAL_COMPUTE_TYPE_TDX, CONFIDENTIAL_COMPUTE_TYPE_UNSPECIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The creation timestamp for this future reservation inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentType" /></td>
    <td><code>string</code></td>
    <td>Type of the deployment requested as part of future reservation. (DENSE, DEPLOYMENT_TYPE_UNSPECIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the future reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="enableEmergentMaintenance" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if this group of VMs have emergent maintenance enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of the resource. Alwayscompute#futureReservation for future reservations. (default: compute#futureReservation)</td>
</tr>
<tr>
    <td><CopyableCode code="namePrefix" /></td>
    <td><code>string</code></td>
    <td>Name prefix for the reservations to be created at the time of delivery. The name prefix must comply with RFC1035. Maximum allowed length for name prefix is 20. Automatically created reservations name format will be -date-####.</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>object</code></td>
    <td>Input only. Additional params passed with the request, but not persisted as part of resource payload. (id: FutureReservationParams)</td>
</tr>
<tr>
    <td><CopyableCode code="planningStatus" /></td>
    <td><code>string</code></td>
    <td>Planning state before being submitted for evaluation (DRAFT, PLANNING_STATUS_UNSPECIFIED, SUBMITTED)</td>
</tr>
<tr>
    <td><CopyableCode code="reservationMode" /></td>
    <td><code>string</code></td>
    <td>The reservation mode which determines reservation-termination behavior and expected pricing. (CALENDAR, DEFAULT, RESERVATION_MODE_UNSPECIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="reservationName" /></td>
    <td><code>string</code></td>
    <td>Name of reservations where the capacity is provisioned at the time of delivery of  future reservations. If the reservation with the given name does not exist already, it is created automatically at the time of Approval with INACTIVE state till specified start-time. Either provide the reservation_name or a name_prefix.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Contains standard resource metadata for an FutureReservation resource. It is populated for each instance of the FutureReservation resource, and includes the api_version the instance was retrieved through, and its canonical resource_type name. (id: ResourceMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceName" /></td>
    <td><code>string</code></td>
    <td>Name of the resource intended to be delivered. Name should conform to RFC1035. This will be the name of storage pool or Exapool for persistent disk FRs.</td>
</tr>
<tr>
    <td><CopyableCode code="schedulingType" /></td>
    <td><code>string</code></td>
    <td>Maintenance information for this reservation (GROUPED, GROUP_MAINTENANCE_TYPE_UNSPECIFIED, INDEPENDENT)</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined fully-qualified URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLinkWithId" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined URL for this resource with the resource id.</td>
</tr>
<tr>
    <td><CopyableCode code="shareSettings" /></td>
    <td><code>object</code></td>
    <td>List of Projects/Folders to share with. (id: ShareSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="specificReservationRequired" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the auto-created reservation can be consumed by VMs with affinity for "any" reservation. If the field is set, then only VMs that target the reservation by name can consume from the delivered reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="specificSkuProperties" /></td>
    <td><code>object</code></td>
    <td>Future Reservation configuration to indicate instance properties and total count. (id: FutureReservationSpecificSKUProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Output only. [Output only] Status of the Future Reservation (id: FutureReservationStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="storagePoolProperties" /></td>
    <td><code>object</code></td>
    <td>Storage pool details for the future reservation. (id: FutureReservationStoragePoolProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="timeWindow" /></td>
    <td><code>object</code></td>
    <td>Time window for this Future Reservation. (id: FutureReservationTimeWindow)</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] URL of the Zone where this future reservation resides.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-futureReservation"><code>futureReservation</code></a></td>
    <td></td>
    <td>Retrieves information about the specified future reservation.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>A list of all the future reservations that have been configured for the<br />specified project in specified zone.</td>
</tr>
<tr>
    <td><a href="#aggregated_list"><CopyableCode code="aggregated_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-includeAllScopes"><code>includeAllScopes</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a>, <a href="#parameter-serviceProjectNumber"><code>serviceProjectNumber</code></a></td>
    <td>Retrieves an aggregated list of future reservations.<br /><br />To prevent failure, it is recommended that you set the<br />`returnPartialSuccess` parameter to `true`.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new Future Reservation.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-futureReservation"><code>futureReservation</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified future reservation.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-futureReservation"><code>futureReservation</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified future reservation.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-futureReservation"><code>futureReservation</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Cancel the specified future reservation.</td>
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
<tr id="parameter-futureReservation">
    <td><CopyableCode code="futureReservation" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
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
        { label: 'list', value: 'list' },
        { label: 'aggregated_list', value: 'aggregated_list' }
    ]}
>
<TabItem value="get">

Retrieves information about the specified future reservation.

```sql
SELECT
id,
name,
aggregateReservation,
autoCreatedReservationsDeleteTime,
autoCreatedReservationsDuration,
autoDeleteAutoCreatedReservations,
commitmentInfo,
confidentialComputeType,
creationTimestamp,
deploymentType,
description,
enableEmergentMaintenance,
kind,
namePrefix,
params,
planningStatus,
reservationMode,
reservationName,
resourceMetadata,
resourceName,
schedulingType,
selfLink,
selfLinkWithId,
shareSettings,
specificReservationRequired,
specificSkuProperties,
status,
storagePoolProperties,
timeWindow,
zone
FROM google.compute.future_reservations
WHERE project = '{{ project }}' -- required
AND zone = '{{ zone }}' -- required
AND futureReservation = '{{ futureReservation }}' -- required
;
```
</TabItem>
<TabItem value="list">

A list of all the future reservations that have been configured for the<br />specified project in specified zone.

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
FROM google.compute.future_reservations
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
<TabItem value="aggregated_list">

Retrieves an aggregated list of future reservations.<br /><br />To prevent failure, it is recommended that you set the<br />`returnPartialSuccess` parameter to `true`.

```sql
SELECT
id,
name,
aggregateReservation,
autoCreatedReservationsDeleteTime,
autoCreatedReservationsDuration,
autoDeleteAutoCreatedReservations,
commitmentInfo,
confidentialComputeType,
creationTimestamp,
deploymentType,
description,
enableEmergentMaintenance,
kind,
namePrefix,
params,
planningStatus,
reservationMode,
reservationName,
resourceMetadata,
resourceName,
schedulingType,
selfLink,
selfLinkWithId,
shareSettings,
specificReservationRequired,
specificSkuProperties,
status,
storagePoolProperties,
timeWindow,
zone
FROM google.compute.future_reservations
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

Creates a new Future Reservation.

```sql
INSERT INTO google.compute.future_reservations (
data__aggregateReservation,
data__autoCreatedReservationsDeleteTime,
data__autoCreatedReservationsDuration,
data__autoDeleteAutoCreatedReservations,
data__commitmentInfo,
data__confidentialComputeType,
data__deploymentType,
data__description,
data__enableEmergentMaintenance,
data__name,
data__namePrefix,
data__params,
data__planningStatus,
data__reservationMode,
data__reservationName,
data__resourceName,
data__schedulingType,
data__shareSettings,
data__specificReservationRequired,
data__specificSkuProperties,
data__storagePoolProperties,
data__timeWindow,
project,
zone,
requestId
)
SELECT 
'{{ aggregateReservation }}',
'{{ autoCreatedReservationsDeleteTime }}',
'{{ autoCreatedReservationsDuration }}',
{{ autoDeleteAutoCreatedReservations }},
'{{ commitmentInfo }}',
'{{ confidentialComputeType }}',
'{{ deploymentType }}',
'{{ description }}',
{{ enableEmergentMaintenance }},
'{{ name }}',
'{{ namePrefix }}',
'{{ params }}',
'{{ planningStatus }}',
'{{ reservationMode }}',
'{{ reservationName }}',
'{{ resourceName }}',
'{{ schedulingType }}',
'{{ shareSettings }}',
{{ specificReservationRequired }},
'{{ specificSkuProperties }}',
'{{ storagePoolProperties }}',
'{{ timeWindow }}',
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
- name: future_reservations
  props:
    - name: project
      value: "{{ project }}"
      description: Required parameter for the future_reservations resource.
    - name: zone
      value: "{{ zone }}"
      description: Required parameter for the future_reservations resource.
    - name: aggregateReservation
      description: |
        Aggregate reservation details for the future reservation.
      value:
        inUseResources:
          - accelerator:
              acceleratorCount: {{ acceleratorCount }}
              acceleratorType: "{{ acceleratorType }}"
        reservedResources:
          - accelerator:
              acceleratorCount: {{ acceleratorCount }}
              acceleratorType: "{{ acceleratorType }}"
        vmFamily: "{{ vmFamily }}"
        workloadType: "{{ workloadType }}"
    - name: autoCreatedReservationsDeleteTime
      value: "{{ autoCreatedReservationsDeleteTime }}"
      description: |
        Future timestamp when the FR auto-created reservations will be deleted by
        Compute Engine. Format of this field must be a valid
        href="https://www.ietf.org/rfc/rfc3339.txt">RFC3339 value.
    - name: autoCreatedReservationsDuration
      description: |
        Specifies the duration of auto-created reservations.
        It represents relative time to future reservation start_time when
        auto-created reservations will be automatically deleted by Compute
        Engine. Duration time unit is represented as a count of seconds
        and fractions of seconds at nanosecond resolution.
      value:
        nanos: {{ nanos }}
        seconds: "{{ seconds }}"
    - name: autoDeleteAutoCreatedReservations
      value: {{ autoDeleteAutoCreatedReservations }}
      description: |
        Setting for enabling or disabling automatic deletion for auto-created
        reservation. If set to true, auto-created reservations will be
        deleted at Future Reservation's end time (default) or at user's defined
        timestamp if any of the
        [auto_created_reservations_delete_time, auto_created_reservations_duration]
        values is specified.
        For keeping auto-created reservation indefinitely, this value should be set
        to false.
    - name: commitmentInfo
      description: |
        If not present, then FR will not deliver a new commitment or update an
        existing commitment.
      value:
        commitmentName: "{{ commitmentName }}"
        commitmentPlan: "{{ commitmentPlan }}"
        previousCommitmentTerms: "{{ previousCommitmentTerms }}"
    - name: confidentialComputeType
      value: "{{ confidentialComputeType }}"
      valid_values: ['CONFIDENTIAL_COMPUTE_TYPE_TDX', 'CONFIDENTIAL_COMPUTE_TYPE_UNSPECIFIED']
    - name: deploymentType
      value: "{{ deploymentType }}"
      description: |
        Type of the deployment requested as part of future reservation.
      valid_values: ['DENSE', 'DEPLOYMENT_TYPE_UNSPECIFIED']
    - name: description
      value: "{{ description }}"
      description: |
        An optional description of this resource. Provide this property when you
        create the future reservation.
    - name: enableEmergentMaintenance
      value: {{ enableEmergentMaintenance }}
      description: |
        Indicates if this group of VMs have emergent maintenance enabled.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the resource, provided by the client when initially creating
        the resource. The resource name must be 1-63 characters long, and comply
        withRFC1035.
        Specifically, the name must be 1-63 characters long and match the regular
        expression \`[a-z]([-a-z0-9]*[a-z0-9])?\` which means the first
        character must be a lowercase letter, and all following characters must be
        a dash, lowercase letter, or digit, except the last character, which cannot
        be a dash.
    - name: namePrefix
      value: "{{ namePrefix }}"
      description: |
        Name prefix for the reservations to be created at the time of
        delivery. The name prefix must comply with RFC1035.
        Maximum allowed length for name prefix is 20. Automatically created
        reservations name format will be -date-####.
    - name: params
      description: |
        Input only. Additional params passed with the request, but not persisted
        as part of resource payload.
      value:
        resourceManagerTags: "{{ resourceManagerTags }}"
    - name: planningStatus
      value: "{{ planningStatus }}"
      description: |
        Planning state before being submitted for evaluation
      valid_values: ['DRAFT', 'PLANNING_STATUS_UNSPECIFIED', 'SUBMITTED']
    - name: reservationMode
      value: "{{ reservationMode }}"
      description: |
        The reservation mode which determines reservation-termination behavior and
        expected pricing.
      valid_values: ['CALENDAR', 'DEFAULT', 'RESERVATION_MODE_UNSPECIFIED']
    - name: reservationName
      value: "{{ reservationName }}"
      description: |
        Name of reservations where the capacity is provisioned at the time of
        delivery of  future reservations. If the reservation with the given name
        does not exist already, it is created automatically at the time of Approval
        with INACTIVE state till specified start-time. Either provide the
        reservation_name or a name_prefix.
    - name: resourceName
      value: "{{ resourceName }}"
      description: |
        Name of the resource intended to be delivered. Name should conform to
        RFC1035. This will be the name of storage pool or Exapool for persistent
        disk FRs.
    - name: schedulingType
      value: "{{ schedulingType }}"
      description: |
        Maintenance information for this reservation
      valid_values: ['GROUPED', 'GROUP_MAINTENANCE_TYPE_UNSPECIFIED', 'INDEPENDENT']
    - name: shareSettings
      description: |
        List of Projects/Folders to share with.
      value:
        projectMap: "{{ projectMap }}"
        shareType: "{{ shareType }}"
    - name: specificReservationRequired
      value: {{ specificReservationRequired }}
      description: |
        Indicates whether the auto-created reservation can be consumed by VMs with
        affinity for "any" reservation. If the field is set, then only VMs that
        target the reservation by name can consume from the delivered reservation.
    - name: specificSkuProperties
      description: |
        Future Reservation configuration to indicate instance properties and
        total count.
      value:
        instanceProperties:
          guestAccelerators:
            - acceleratorCount: {{ acceleratorCount }}
              acceleratorType: "{{ acceleratorType }}"
          localSsds:
            - diskSizeGb: "{{ diskSizeGb }}"
              interface: "{{ interface }}"
          locationHint: "{{ locationHint }}"
          machineType: "{{ machineType }}"
          minCpuPlatform: "{{ minCpuPlatform }}"
        sourceInstanceTemplate: "{{ sourceInstanceTemplate }}"
        totalCount: "{{ totalCount }}"
    - name: storagePoolProperties
      description: |
        Storage pool details for the future reservation.
      value:
        requestedExapoolProvisionedCapacityGb:
          capacityOptimized: "{{ capacityOptimized }}"
          readOptimized: "{{ readOptimized }}"
          writeOptimized: "{{ writeOptimized }}"
        requestedStoragePoolProvisionedCapacity:
          poolProvisionedCapacityGb: "{{ poolProvisionedCapacityGb }}"
          poolProvisionedIops: "{{ poolProvisionedIops }}"
          poolProvisionedThroughput: "{{ poolProvisionedThroughput }}"
        storagePoolType: "{{ storagePoolType }}"
    - name: timeWindow
      description: |
        Time window for this Future Reservation.
      value:
        duration:
          nanos: {{ nanos }}
          seconds: "{{ seconds }}"
        endTime: "{{ endTime }}"
        startTime: "{{ startTime }}"
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

Updates the specified future reservation.

```sql
UPDATE google.compute.future_reservations
SET 
data__aggregateReservation = '{{ aggregateReservation }}',
data__autoCreatedReservationsDeleteTime = '{{ autoCreatedReservationsDeleteTime }}',
data__autoCreatedReservationsDuration = '{{ autoCreatedReservationsDuration }}',
data__autoDeleteAutoCreatedReservations = {{ autoDeleteAutoCreatedReservations }},
data__commitmentInfo = '{{ commitmentInfo }}',
data__confidentialComputeType = '{{ confidentialComputeType }}',
data__deploymentType = '{{ deploymentType }}',
data__description = '{{ description }}',
data__enableEmergentMaintenance = {{ enableEmergentMaintenance }},
data__name = '{{ name }}',
data__namePrefix = '{{ namePrefix }}',
data__params = '{{ params }}',
data__planningStatus = '{{ planningStatus }}',
data__reservationMode = '{{ reservationMode }}',
data__reservationName = '{{ reservationName }}',
data__resourceName = '{{ resourceName }}',
data__schedulingType = '{{ schedulingType }}',
data__shareSettings = '{{ shareSettings }}',
data__specificReservationRequired = {{ specificReservationRequired }},
data__specificSkuProperties = '{{ specificSkuProperties }}',
data__storagePoolProperties = '{{ storagePoolProperties }}',
data__timeWindow = '{{ timeWindow }}'
WHERE 
project = '{{ project }}' --required
AND zone = '{{ zone }}' --required
AND futureReservation = '{{ futureReservation }}' --required
AND requestId = '{{ requestId}}'
AND updateMask = '{{ updateMask}}'
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

Deletes the specified future reservation.

```sql
DELETE FROM google.compute.future_reservations
WHERE project = '{{ project }}' --required
AND zone = '{{ zone }}' --required
AND futureReservation = '{{ futureReservation }}' --required
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

Cancel the specified future reservation.

```sql
EXEC google.compute.future_reservations.cancel 
@project='{{ project }}' --required, 
@zone='{{ zone }}' --required, 
@futureReservation='{{ futureReservation }}' --required, 
@requestId='{{ requestId }}'
;
```
</TabItem>
</Tabs>
