--- 
title: reservations
hide_title: false
hide_table_of_contents: false
keywords:
  - reservations
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

Creates, updates, deletes, gets or lists a <code>reservations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reservations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.reservations" /></td></tr>
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
    <td>Output only. [Output Only] The unique identifier for the resource. This identifier is defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource, provided by the client when initially creating the resource. The resource name must be 1-63 characters long, and comply withRFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: <code>&#91;a-z&#93;(?:&#91;-a-z0-9&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="advancedDeploymentControl" /></td>
    <td><code>object</code></td>
    <td>Advanced control for cluster management, applicable only to DENSE deployment type reservations. (id: ReservationAdvancedDeploymentControl)</td>
</tr>
<tr>
    <td><CopyableCode code="aggregateReservation" /></td>
    <td><code>object</code></td>
    <td>Reservation for aggregated resources, providing shape flexibility. (id: AllocationAggregateReservation)</td>
</tr>
<tr>
    <td><CopyableCode code="commitment" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Full or partial URL to a parent commitment. This field displays for reservations that are tied to a commitment.</td>
</tr>
<tr>
    <td><CopyableCode code="confidentialComputeType" /></td>
    <td><code>string</code></td>
    <td> (CONFIDENTIAL_COMPUTE_TYPE_TDX, CONFIDENTIAL_COMPUTE_TYPE_UNSPECIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Creation timestamp inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteAfterDuration" /></td>
    <td><code>object</code></td>
    <td>Duration time relative to reservation creation when Compute Engine will automatically delete this resource. (id: Duration)</td>
</tr>
<tr>
    <td><CopyableCode code="deleteAtTime" /></td>
    <td><code>string</code></td>
    <td>Absolute time in future when the reservation will be  auto-deleted by Compute Engine. Timestamp is represented inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentType" /></td>
    <td><code>string</code></td>
    <td>Specifies the deployment strategy for this reservation. (DENSE, DEPLOYMENT_TYPE_UNSPECIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="earlyAccessMaintenance" /></td>
    <td><code>string</code></td>
    <td>Indicates the early access maintenance for the reservation. If this field is absent or set to NO_EARLY_ACCESS, the reservation is not enrolled in early access maintenance and the standard notice applies. (NO_EARLY_ACCESS, WAVE1, WAVE2)</td>
</tr>
<tr>
    <td><CopyableCode code="enableEmergentMaintenance" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether Compute Engine allows unplanned maintenance for your VMs; for example, to fix hardware errors.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of the resource. Alwayscompute#reservations for reservations. (default: compute#reservation)</td>
</tr>
<tr>
    <td><CopyableCode code="linkedCommitments" /></td>
    <td><code>array</code></td>
    <td>Output only. [Output Only] Full or partial URL to parent commitments. This field displays for reservations that are tied to multiple commitments.</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>object</code></td>
    <td>Input only. Additional params passed with the request, but not persisted as part of resource payload. (id: ReservationParams)</td>
</tr>
<tr>
    <td><CopyableCode code="protectionTier" /></td>
    <td><code>string</code></td>
    <td>Protection tier for the workload which specifies the workload expectations in the event of infrastructure failures at data center (e.g. power and/or cooling failures). (CAPACITY_OPTIMIZED, PROTECTION_TIER_UNSPECIFIED, STANDARD)</td>
</tr>
<tr>
    <td><CopyableCode code="reservationSharingPolicy" /></td>
    <td><code>object</code></td>
    <td>Specify the reservation sharing policy. If unspecified, the reservation will not be shared with Google Cloud managed services. (id: AllocationReservationSharingPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. [Output Only] Contains standard resource metadata for an Allocation resource. It is populated for each instance of the Allocation resource, and includes the api_version the instance was retrieved through, and its canonical resource_type name. (id: ResourceMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="resourcePolicies" /></td>
    <td><code>object</code></td>
    <td>Resource policies to be added to this reservation. The key is defined by user, and the value is resource policy url. This is to define placement policy with reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. [Output Only] Status information for Reservation resource. (id: AllocationResourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. [Output Only] Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="schedulingType" /></td>
    <td><code>string</code></td>
    <td>The type of maintenance for the reservation. (GROUPED, GROUP_MAINTENANCE_TYPE_UNSPECIFIED, INDEPENDENT)</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined fully-qualified URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="shareSettings" /></td>
    <td><code>object</code></td>
    <td>Specify share-settings to create a shared reservation. This property is optional. For more information about the syntax and options for this field and its subfields, see the guide for creating a shared reservation. (id: ShareSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="specificReservation" /></td>
    <td><code>object</code></td>
    <td>Reservation for instances with specific machine shapes. (id: AllocationSpecificSKUReservation)</td>
</tr>
<tr>
    <td><CopyableCode code="specificReservationRequired" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the reservation can be consumed by VMs with affinity for "any" reservation. If the field is set, then only VMs that target the reservation by name can consume from this reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The status of the reservation.              - CREATING: Reservation resources are being        allocated.      - READY: Reservation resources have been allocated,        and the reservation is ready for use.      - DELETING: Reservation deletion is in progress.      - UPDATING: Reservation update is in progress. (CREATING, DELETING, INVALID, READY, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Zone in which the reservation resides. A zone must be provided if the reservation is created within a commitment.</td>
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
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>[Output Only] A list of Allocation resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of resource.Always compute#reservationsList for listsof reservations (default: compute#reservationList)</td>
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
    <td>Output only. [Output Only] The unique identifier for the resource. This identifier is defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource, provided by the client when initially creating the resource. The resource name must be 1-63 characters long, and comply withRFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: <code>&#91;a-z&#93;(?:&#91;-a-z0-9&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="advancedDeploymentControl" /></td>
    <td><code>object</code></td>
    <td>Advanced control for cluster management, applicable only to DENSE deployment type reservations. (id: ReservationAdvancedDeploymentControl)</td>
</tr>
<tr>
    <td><CopyableCode code="aggregateReservation" /></td>
    <td><code>object</code></td>
    <td>Reservation for aggregated resources, providing shape flexibility. (id: AllocationAggregateReservation)</td>
</tr>
<tr>
    <td><CopyableCode code="commitment" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Full or partial URL to a parent commitment. This field displays for reservations that are tied to a commitment.</td>
</tr>
<tr>
    <td><CopyableCode code="confidentialComputeType" /></td>
    <td><code>string</code></td>
    <td> (CONFIDENTIAL_COMPUTE_TYPE_TDX, CONFIDENTIAL_COMPUTE_TYPE_UNSPECIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Creation timestamp inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteAfterDuration" /></td>
    <td><code>object</code></td>
    <td>Duration time relative to reservation creation when Compute Engine will automatically delete this resource. (id: Duration)</td>
</tr>
<tr>
    <td><CopyableCode code="deleteAtTime" /></td>
    <td><code>string</code></td>
    <td>Absolute time in future when the reservation will be  auto-deleted by Compute Engine. Timestamp is represented inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentType" /></td>
    <td><code>string</code></td>
    <td>Specifies the deployment strategy for this reservation. (DENSE, DEPLOYMENT_TYPE_UNSPECIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="earlyAccessMaintenance" /></td>
    <td><code>string</code></td>
    <td>Indicates the early access maintenance for the reservation. If this field is absent or set to NO_EARLY_ACCESS, the reservation is not enrolled in early access maintenance and the standard notice applies. (NO_EARLY_ACCESS, WAVE1, WAVE2)</td>
</tr>
<tr>
    <td><CopyableCode code="enableEmergentMaintenance" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether Compute Engine allows unplanned maintenance for your VMs; for example, to fix hardware errors.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of the resource. Alwayscompute#reservations for reservations. (default: compute#reservation)</td>
</tr>
<tr>
    <td><CopyableCode code="linkedCommitments" /></td>
    <td><code>array</code></td>
    <td>Output only. [Output Only] Full or partial URL to parent commitments. This field displays for reservations that are tied to multiple commitments.</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>object</code></td>
    <td>Input only. Additional params passed with the request, but not persisted as part of resource payload. (id: ReservationParams)</td>
</tr>
<tr>
    <td><CopyableCode code="protectionTier" /></td>
    <td><code>string</code></td>
    <td>Protection tier for the workload which specifies the workload expectations in the event of infrastructure failures at data center (e.g. power and/or cooling failures). (CAPACITY_OPTIMIZED, PROTECTION_TIER_UNSPECIFIED, STANDARD)</td>
</tr>
<tr>
    <td><CopyableCode code="reservationSharingPolicy" /></td>
    <td><code>object</code></td>
    <td>Specify the reservation sharing policy. If unspecified, the reservation will not be shared with Google Cloud managed services. (id: AllocationReservationSharingPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. [Output Only] Contains standard resource metadata for an Allocation resource. It is populated for each instance of the Allocation resource, and includes the api_version the instance was retrieved through, and its canonical resource_type name. (id: ResourceMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="resourcePolicies" /></td>
    <td><code>object</code></td>
    <td>Resource policies to be added to this reservation. The key is defined by user, and the value is resource policy url. This is to define placement policy with reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. [Output Only] Status information for Reservation resource. (id: AllocationResourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. [Output Only] Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="schedulingType" /></td>
    <td><code>string</code></td>
    <td>The type of maintenance for the reservation. (GROUPED, GROUP_MAINTENANCE_TYPE_UNSPECIFIED, INDEPENDENT)</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined fully-qualified URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="shareSettings" /></td>
    <td><code>object</code></td>
    <td>Specify share-settings to create a shared reservation. This property is optional. For more information about the syntax and options for this field and its subfields, see the guide for creating a shared reservation. (id: ShareSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="specificReservation" /></td>
    <td><code>object</code></td>
    <td>Reservation for instances with specific machine shapes. (id: AllocationSpecificSKUReservation)</td>
</tr>
<tr>
    <td><CopyableCode code="specificReservationRequired" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the reservation can be consumed by VMs with affinity for "any" reservation. If the field is set, then only VMs that target the reservation by name can consume from this reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The status of the reservation.              - CREATING: Reservation resources are being        allocated.      - READY: Reservation resources have been allocated,        and the reservation is ready for use.      - DELETING: Reservation deletion is in progress.      - UPDATING: Reservation update is in progress. (CREATING, DELETING, INVALID, READY, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Zone in which the reservation resides. A zone must be provided if the reservation is created within a commitment.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-reservation"><code>reservation</code></a></td>
    <td></td>
    <td>Retrieves information about the specified reservation.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>A list of all the reservations that have been configured for the<br />specified project in specified zone.</td>
</tr>
<tr>
    <td><a href="#aggregated_list"><CopyableCode code="aggregated_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-includeAllScopes"><code>includeAllScopes</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a>, <a href="#parameter-serviceProjectNumber"><code>serviceProjectNumber</code></a></td>
    <td>Retrieves an aggregated list of reservations.<br /><br />To prevent failure, it is recommended that you set the<br />`returnPartialSuccess` parameter to `true`.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new reservation. For more information, readReserving zonal<br />resources.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-reservation"><code>reservation</code></a></td>
    <td><a href="#parameter-paths"><code>paths</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update share settings of the reservation.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-reservation"><code>reservation</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified reservation.</td>
</tr>
<tr>
    <td><a href="#perform_maintenance"><CopyableCode code="perform_maintenance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-reservation"><code>reservation</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Perform maintenance on an extended reservation</td>
</tr>
<tr>
    <td><a href="#resize"><CopyableCode code="resize" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-reservation"><code>reservation</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Resizes the reservation (applicable to standalone reservations only). For<br />more information, readModifying<br />reservations.</td>
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
<tr id="parameter-reservation">
    <td><CopyableCode code="reservation" /></td>
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
<tr id="parameter-paths">
    <td><CopyableCode code="paths" /></td>
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

Retrieves information about the specified reservation.

```sql
SELECT
id,
name,
advancedDeploymentControl,
aggregateReservation,
commitment,
confidentialComputeType,
creationTimestamp,
deleteAfterDuration,
deleteAtTime,
deploymentType,
description,
earlyAccessMaintenance,
enableEmergentMaintenance,
kind,
linkedCommitments,
params,
protectionTier,
reservationSharingPolicy,
resourceMetadata,
resourcePolicies,
resourceStatus,
satisfiesPzs,
schedulingType,
selfLink,
shareSettings,
specificReservation,
specificReservationRequired,
status,
zone
FROM google.compute.reservations
WHERE project = '{{ project }}' -- required
AND zone = '{{ zone }}' -- required
AND reservation = '{{ reservation }}' -- required
;
```
</TabItem>
<TabItem value="list">

A list of all the reservations that have been configured for the<br />specified project in specified zone.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.reservations
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

Retrieves an aggregated list of reservations.<br /><br />To prevent failure, it is recommended that you set the<br />`returnPartialSuccess` parameter to `true`.

```sql
SELECT
id,
name,
advancedDeploymentControl,
aggregateReservation,
commitment,
confidentialComputeType,
creationTimestamp,
deleteAfterDuration,
deleteAtTime,
deploymentType,
description,
earlyAccessMaintenance,
enableEmergentMaintenance,
kind,
linkedCommitments,
params,
protectionTier,
reservationSharingPolicy,
resourceMetadata,
resourcePolicies,
resourceStatus,
satisfiesPzs,
schedulingType,
selfLink,
shareSettings,
specificReservation,
specificReservationRequired,
status,
zone
FROM google.compute.reservations
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

Creates a new reservation. For more information, readReserving zonal<br />resources.

```sql
INSERT INTO google.compute.reservations (
data__advancedDeploymentControl,
data__aggregateReservation,
data__confidentialComputeType,
data__deleteAfterDuration,
data__deleteAtTime,
data__deploymentType,
data__description,
data__earlyAccessMaintenance,
data__enableEmergentMaintenance,
data__name,
data__params,
data__protectionTier,
data__reservationSharingPolicy,
data__resourcePolicies,
data__schedulingType,
data__shareSettings,
data__specificReservation,
data__specificReservationRequired,
data__zone,
project,
zone,
requestId
)
SELECT 
'{{ advancedDeploymentControl }}',
'{{ aggregateReservation }}',
'{{ confidentialComputeType }}',
'{{ deleteAfterDuration }}',
'{{ deleteAtTime }}',
'{{ deploymentType }}',
'{{ description }}',
'{{ earlyAccessMaintenance }}',
{{ enableEmergentMaintenance }},
'{{ name }}',
'{{ params }}',
'{{ protectionTier }}',
'{{ reservationSharingPolicy }}',
'{{ resourcePolicies }}',
'{{ schedulingType }}',
'{{ shareSettings }}',
'{{ specificReservation }}',
{{ specificReservationRequired }},
'{{ zone }}',
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
- name: reservations
  props:
    - name: project
      value: "{{ project }}"
      description: Required parameter for the reservations resource.
    - name: zone
      value: "{{ zone }}"
      description: Required parameter for the reservations resource.
    - name: advancedDeploymentControl
      description: |
        Advanced control for cluster management, applicable only to DENSE
        deployment type reservations.
      value:
        reservationOperationalMode: "{{ reservationOperationalMode }}"
    - name: aggregateReservation
      description: |
        Reservation for aggregated resources, providing shape flexibility.
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
    - name: confidentialComputeType
      value: "{{ confidentialComputeType }}"
      valid_values: ['CONFIDENTIAL_COMPUTE_TYPE_TDX', 'CONFIDENTIAL_COMPUTE_TYPE_UNSPECIFIED']
    - name: deleteAfterDuration
      description: |
        Duration time relative to reservation creation when Compute Engine will
        automatically delete this resource.
      value:
        nanos: {{ nanos }}
        seconds: "{{ seconds }}"
    - name: deleteAtTime
      value: "{{ deleteAtTime }}"
      description: |
        Absolute time in future when the reservation will be
        auto-deleted by Compute Engine. Timestamp is represented inRFC3339 text format.
    - name: deploymentType
      value: "{{ deploymentType }}"
      description: |
        Specifies the deployment strategy for this reservation.
      valid_values: ['DENSE', 'DEPLOYMENT_TYPE_UNSPECIFIED']
    - name: description
      value: "{{ description }}"
      description: |
        An optional description of this resource. Provide this property when you
        create the resource.
    - name: earlyAccessMaintenance
      value: "{{ earlyAccessMaintenance }}"
      description: |
        Indicates the early access maintenance for the reservation.
        If this field is absent or set to NO_EARLY_ACCESS, the reservation is not
        enrolled in early access maintenance and the standard notice applies.
      valid_values: ['NO_EARLY_ACCESS', 'WAVE1', 'WAVE2']
    - name: enableEmergentMaintenance
      value: {{ enableEmergentMaintenance }}
      description: |
        Indicates whether Compute Engine allows unplanned maintenance for your VMs;
        for example, to fix hardware errors.
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
    - name: params
      description: |
        Input only. Additional params passed with the request, but not persisted
        as part of resource payload.
      value:
        resourceManagerTags: "{{ resourceManagerTags }}"
    - name: protectionTier
      value: "{{ protectionTier }}"
      description: |
        Protection tier for the workload which specifies the workload expectations
        in the event of infrastructure failures at data center (e.g. power
        and/or cooling failures).
      valid_values: ['CAPACITY_OPTIMIZED', 'PROTECTION_TIER_UNSPECIFIED', 'STANDARD']
    - name: reservationSharingPolicy
      description: |
        Specify the reservation sharing policy. If unspecified, the reservation
        will not be shared with Google Cloud managed services.
      value:
        serviceShareType: "{{ serviceShareType }}"
    - name: resourcePolicies
      value: "{{ resourcePolicies }}"
      description: |
        Resource policies to be added to this reservation. The key is defined by
        user, and the value is resource policy url. This is to define placement
        policy with reservation.
    - name: schedulingType
      value: "{{ schedulingType }}"
      description: |
        The type of maintenance for the reservation.
      valid_values: ['GROUPED', 'GROUP_MAINTENANCE_TYPE_UNSPECIFIED', 'INDEPENDENT']
    - name: shareSettings
      description: |
        Specify share-settings to create a shared reservation. This property is
        optional. For more information about the syntax and options for this
        field and its subfields, see the guide for creating
        a shared reservation.
      value:
        projectMap: "{{ projectMap }}"
        shareType: "{{ shareType }}"
    - name: specificReservation
      description: |
        Reservation for instances with specific machine shapes.
      value:
        assuredCount: "{{ assuredCount }}"
        count: "{{ count }}"
        inUseCount: "{{ inUseCount }}"
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
    - name: specificReservationRequired
      value: {{ specificReservationRequired }}
      description: |
        Indicates whether the reservation can be consumed by VMs with affinity
        for "any" reservation. If the field is set, then only VMs that target
        the reservation by name can consume from this reservation.
    - name: zone
      value: "{{ zone }}"
      description: |
        Zone in which the reservation resides. A zone must be provided if the
        reservation is created within a commitment.
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

Update share settings of the reservation.

```sql
UPDATE google.compute.reservations
SET 
data__advancedDeploymentControl = '{{ advancedDeploymentControl }}',
data__aggregateReservation = '{{ aggregateReservation }}',
data__confidentialComputeType = '{{ confidentialComputeType }}',
data__deleteAfterDuration = '{{ deleteAfterDuration }}',
data__deleteAtTime = '{{ deleteAtTime }}',
data__deploymentType = '{{ deploymentType }}',
data__description = '{{ description }}',
data__earlyAccessMaintenance = '{{ earlyAccessMaintenance }}',
data__enableEmergentMaintenance = {{ enableEmergentMaintenance }},
data__name = '{{ name }}',
data__params = '{{ params }}',
data__protectionTier = '{{ protectionTier }}',
data__reservationSharingPolicy = '{{ reservationSharingPolicy }}',
data__resourcePolicies = '{{ resourcePolicies }}',
data__schedulingType = '{{ schedulingType }}',
data__shareSettings = '{{ shareSettings }}',
data__specificReservation = '{{ specificReservation }}',
data__specificReservationRequired = {{ specificReservationRequired }},
data__zone = '{{ zone }}'
WHERE 
project = '{{ project }}' --required
AND zone = '{{ zone }}' --required
AND reservation = '{{ reservation }}' --required
AND paths = '{{ paths}}'
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

Deletes the specified reservation.

```sql
DELETE FROM google.compute.reservations
WHERE project = '{{ project }}' --required
AND zone = '{{ zone }}' --required
AND reservation = '{{ reservation }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="perform_maintenance"
    values={[
        { label: 'perform_maintenance', value: 'perform_maintenance' },
        { label: 'resize', value: 'resize' }
    ]}
>
<TabItem value="perform_maintenance">

Perform maintenance on an extended reservation

```sql
EXEC google.compute.reservations.perform_maintenance 
@project='{{ project }}' --required, 
@zone='{{ zone }}' --required, 
@reservation='{{ reservation }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"maintenanceScope": "{{ maintenanceScope }}"
}'
;
```
</TabItem>
<TabItem value="resize">

Resizes the reservation (applicable to standalone reservations only). For<br />more information, readModifying<br />reservations.

```sql
EXEC google.compute.reservations.resize 
@project='{{ project }}' --required, 
@zone='{{ zone }}' --required, 
@reservation='{{ reservation }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"specificSkuCount": "{{ specificSkuCount }}"
}'
;
```
</TabItem>
</Tabs>
