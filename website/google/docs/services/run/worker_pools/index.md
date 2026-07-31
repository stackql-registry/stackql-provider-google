--- 
title: worker_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - worker_pools
  - run
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

Creates, updates, deletes, gets or lists a <code>worker_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="worker_pools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.run.worker_pools" /></td></tr>
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
    <td>The fully qualified name of this WorkerPool. In CreateWorkerPoolRequest, this field is ignored, and instead composed from CreateWorkerPoolRequest.parent and CreateWorkerPoolRequest.worker_id. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/workerPools/&#123;worker_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected in new resources. All system annotations in v1 now have a corresponding field in v2 WorkerPool. This field follows Kubernetes annotations' namespacing, limits, and rules.</td>
</tr>
<tr>
    <td><CopyableCode code="binaryAuthorization" /></td>
    <td><code>object</code></td>
    <td>Optional. Settings for the Binary Authorization feature. (id: GoogleCloudRunV2BinaryAuthorization)</td>
</tr>
<tr>
    <td><CopyableCode code="client" /></td>
    <td><code>string</code></td>
    <td>Arbitrary identifier for the API client.</td>
</tr>
<tr>
    <td><CopyableCode code="clientVersion" /></td>
    <td><code>string</code></td>
    <td>Arbitrary version identifier for the API client.</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>Output only. The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the WorkerPool does not reach its Serving state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>string</code></td>
    <td>Output only. Email address of the authenticated creator.</td>
</tr>
<tr>
    <td><CopyableCode code="customAudiences" /></td>
    <td><code>array</code></td>
    <td>Deprecated: Not supported, and ignored by Cloud Run.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The deletion time. It is only populated as a response to a Delete request.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User-provided description of the WorkerPool. This field currently has a 512-character limit.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. For a deleted resource, the time after which it will be permamently deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="generation" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. A number that monotonically increases every time the user modifies the desired state. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceSplitStatuses" /></td>
    <td><code>array</code></td>
    <td>Output only. Detailed status information for corresponding instance splits. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceSplits" /></td>
    <td><code>array</code></td>
    <td>Optional. Specifies how to distribute instances over a collection of Revisions belonging to the WorkerPool. If instance split is empty or not provided, defaults to 100% instances assigned to the latest `Ready` Revision.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 WorkerPool.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifier" /></td>
    <td><code>string</code></td>
    <td>Output only. Email address of the last authenticated modifier.</td>
</tr>
<tr>
    <td><CopyableCode code="latestCreatedRevision" /></td>
    <td><code>string</code></td>
    <td>Output only. Name of the last created revision. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.</td>
</tr>
<tr>
    <td><CopyableCode code="latestReadyRevision" /></td>
    <td><code>string</code></td>
    <td>Output only. Name of the latest revision that is serving workloads. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.</td>
</tr>
<tr>
    <td><CopyableCode code="launchStage" /></td>
    <td><code>string</code></td>
    <td>Optional. The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. (LAUNCH_STAGE_UNSPECIFIED, UNIMPLEMENTED, PRELAUNCH, EARLY_ACCESS, ALPHA, BETA, GA, DEPRECATED)</td>
</tr>
<tr>
    <td><CopyableCode code="observedGeneration" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The generation of this WorkerPool currently serving workloads. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Returns true if the WorkerPool is currently being acted upon by the system to bring it into the desired state. When a new WorkerPool is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the WorkerPool to the desired serving state. This process is called reconciliation. While reconciliation is in process, `observed_generation`, `latest_ready_revison`, `instance_split_statuses`, and `uri` will have transient values that might mismatch the intended state: Once reconciliation is over (and this field is false), there are two possible outcomes: reconciliation succeeded and the serving state matches the WorkerPool, or there was an error, and reconciliation failed. This state can be found in `terminal_condition.state`. If reconciliation succeeded, the following fields will match: `instance_splits` and `instance_split_statuses`, `observed_generation` and `generation`, `latest_ready_revision` and `latest_created_revision`. If reconciliation failed, `instance_split_statuses`, `observed_generation`, and `latest_ready_revision` will have the state of the last serving revision, or empty for newly created WorkerPools. Additional information on the failure can be found in `terminal_condition` and `conditions`.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="scaling" /></td>
    <td><code>object</code></td>
    <td>Optional. Specifies worker-pool-level scaling settings (id: GoogleCloudRunV2WorkerPoolScaling)</td>
</tr>
<tr>
    <td><CopyableCode code="template" /></td>
    <td><code>object</code></td>
    <td>Required. The template used to create revisions for this WorkerPool. (id: GoogleCloudRunV2WorkerPoolRevisionTemplate)</td>
</tr>
<tr>
    <td><CopyableCode code="terminalCondition" /></td>
    <td><code>object</code></td>
    <td>Defines a status condition for a resource. (id: GoogleCloudRunV2Condition)</td>
</tr>
<tr>
    <td><CopyableCode code="threatDetectionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether Cloud Run Threat Detection monitoring is enabled for the parent project of this worker pool.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Server assigned unique identifier for the trigger. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last-modified time.</td>
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
    <td>The fully qualified name of this WorkerPool. In CreateWorkerPoolRequest, this field is ignored, and instead composed from CreateWorkerPoolRequest.parent and CreateWorkerPoolRequest.worker_id. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/workerPools/&#123;worker_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected in new resources. All system annotations in v1 now have a corresponding field in v2 WorkerPool. This field follows Kubernetes annotations' namespacing, limits, and rules.</td>
</tr>
<tr>
    <td><CopyableCode code="binaryAuthorization" /></td>
    <td><code>object</code></td>
    <td>Optional. Settings for the Binary Authorization feature. (id: GoogleCloudRunV2BinaryAuthorization)</td>
</tr>
<tr>
    <td><CopyableCode code="client" /></td>
    <td><code>string</code></td>
    <td>Arbitrary identifier for the API client.</td>
</tr>
<tr>
    <td><CopyableCode code="clientVersion" /></td>
    <td><code>string</code></td>
    <td>Arbitrary version identifier for the API client.</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>Output only. The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the WorkerPool does not reach its Serving state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>string</code></td>
    <td>Output only. Email address of the authenticated creator.</td>
</tr>
<tr>
    <td><CopyableCode code="customAudiences" /></td>
    <td><code>array</code></td>
    <td>Deprecated: Not supported, and ignored by Cloud Run.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The deletion time. It is only populated as a response to a Delete request.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User-provided description of the WorkerPool. This field currently has a 512-character limit.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. For a deleted resource, the time after which it will be permamently deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="generation" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. A number that monotonically increases every time the user modifies the desired state. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceSplitStatuses" /></td>
    <td><code>array</code></td>
    <td>Output only. Detailed status information for corresponding instance splits. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceSplits" /></td>
    <td><code>array</code></td>
    <td>Optional. Specifies how to distribute instances over a collection of Revisions belonging to the WorkerPool. If instance split is empty or not provided, defaults to 100% instances assigned to the latest `Ready` Revision.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 WorkerPool.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifier" /></td>
    <td><code>string</code></td>
    <td>Output only. Email address of the last authenticated modifier.</td>
</tr>
<tr>
    <td><CopyableCode code="latestCreatedRevision" /></td>
    <td><code>string</code></td>
    <td>Output only. Name of the last created revision. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.</td>
</tr>
<tr>
    <td><CopyableCode code="latestReadyRevision" /></td>
    <td><code>string</code></td>
    <td>Output only. Name of the latest revision that is serving workloads. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.</td>
</tr>
<tr>
    <td><CopyableCode code="launchStage" /></td>
    <td><code>string</code></td>
    <td>Optional. The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. (LAUNCH_STAGE_UNSPECIFIED, UNIMPLEMENTED, PRELAUNCH, EARLY_ACCESS, ALPHA, BETA, GA, DEPRECATED)</td>
</tr>
<tr>
    <td><CopyableCode code="observedGeneration" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The generation of this WorkerPool currently serving workloads. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Returns true if the WorkerPool is currently being acted upon by the system to bring it into the desired state. When a new WorkerPool is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the WorkerPool to the desired serving state. This process is called reconciliation. While reconciliation is in process, `observed_generation`, `latest_ready_revison`, `instance_split_statuses`, and `uri` will have transient values that might mismatch the intended state: Once reconciliation is over (and this field is false), there are two possible outcomes: reconciliation succeeded and the serving state matches the WorkerPool, or there was an error, and reconciliation failed. This state can be found in `terminal_condition.state`. If reconciliation succeeded, the following fields will match: `instance_splits` and `instance_split_statuses`, `observed_generation` and `generation`, `latest_ready_revision` and `latest_created_revision`. If reconciliation failed, `instance_split_statuses`, `observed_generation`, and `latest_ready_revision` will have the state of the last serving revision, or empty for newly created WorkerPools. Additional information on the failure can be found in `terminal_condition` and `conditions`.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="scaling" /></td>
    <td><code>object</code></td>
    <td>Optional. Specifies worker-pool-level scaling settings (id: GoogleCloudRunV2WorkerPoolScaling)</td>
</tr>
<tr>
    <td><CopyableCode code="template" /></td>
    <td><code>object</code></td>
    <td>Required. The template used to create revisions for this WorkerPool. (id: GoogleCloudRunV2WorkerPoolRevisionTemplate)</td>
</tr>
<tr>
    <td><CopyableCode code="terminalCondition" /></td>
    <td><code>object</code></td>
    <td>Defines a status condition for a resource. (id: GoogleCloudRunV2Condition)</td>
</tr>
<tr>
    <td><CopyableCode code="threatDetectionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether Cloud Run Threat Detection monitoring is enabled for the parent project of this worker pool.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Server assigned unique identifier for the trigger. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last-modified time.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workerPoolsId"><code>workerPoolsId</code></a></td>
    <td></td>
    <td>Gets information about a WorkerPool.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-showDeleted"><code>showDeleted</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists WorkerPools. Results are sorted by creation time, descending.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-workerPoolId"><code>workerPoolId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a new WorkerPool in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workerPoolsId"><code>workerPoolsId</code></a></td>
    <td><a href="#parameter-forceNewRevision"><code>forceNewRevision</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a WorkerPool.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-workerPoolsId"><code>workerPoolsId</code></a></td>
    <td><a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a WorkerPool.</td>
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
<tr id="parameter-workerPoolsId">
    <td><CopyableCode code="workerPoolsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-forceNewRevision">
    <td><CopyableCode code="forceNewRevision" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-workerPoolId">
    <td><CopyableCode code="workerPoolId" /></td>
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

Gets information about a WorkerPool.

```sql
SELECT
name,
annotations,
binaryAuthorization,
client,
clientVersion,
conditions,
createTime,
creator,
customAudiences,
deleteTime,
description,
etag,
expireTime,
generation,
instanceSplitStatuses,
instanceSplits,
labels,
lastModifier,
latestCreatedRevision,
latestReadyRevision,
launchStage,
observedGeneration,
reconciling,
satisfiesPzs,
scaling,
template,
terminalCondition,
threatDetectionEnabled,
uid,
updateTime
FROM google.run.worker_pools
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND workerPoolsId = '{{ workerPoolsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists WorkerPools. Results are sorted by creation time, descending.

```sql
SELECT
name,
annotations,
binaryAuthorization,
client,
clientVersion,
conditions,
createTime,
creator,
customAudiences,
deleteTime,
description,
etag,
expireTime,
generation,
instanceSplitStatuses,
instanceSplits,
labels,
lastModifier,
latestCreatedRevision,
latestReadyRevision,
launchStage,
observedGeneration,
reconciling,
satisfiesPzs,
scaling,
template,
terminalCondition,
threatDetectionEnabled,
uid,
updateTime
FROM google.run.worker_pools
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND showDeleted = '{{ showDeleted }}'
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

Creates a new WorkerPool in a given project and location.

```sql
INSERT INTO google.run.worker_pools (
data__instanceSplits,
data__name,
data__description,
data__launchStage,
data__etag,
data__annotations,
data__scaling,
data__binaryAuthorization,
data__client,
data__template,
data__clientVersion,
data__customAudiences,
data__labels,
projectsId,
locationsId,
workerPoolId,
validateOnly
)
SELECT 
'{{ instanceSplits }}',
'{{ name }}',
'{{ description }}',
'{{ launchStage }}',
'{{ etag }}',
'{{ annotations }}',
'{{ scaling }}',
'{{ binaryAuthorization }}',
'{{ client }}',
'{{ template }}',
'{{ clientVersion }}',
'{{ customAudiences }}',
'{{ labels }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ workerPoolId }}',
'{{ validateOnly }}'
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
- name: worker_pools
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the worker_pools resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the worker_pools resource.
    - name: instanceSplits
      description: |
        Optional. Specifies how to distribute instances over a collection of Revisions belonging to the WorkerPool. If instance split is empty or not provided, defaults to 100% instances assigned to the latest \`Ready\` Revision.
      value:
        - revision: "{{ revision }}"
          type: "{{ type }}"
          percent: {{ percent }}
    - name: name
      value: "{{ name }}"
      description: |
        The fully qualified name of this WorkerPool. In CreateWorkerPoolRequest, this field is ignored, and instead composed from CreateWorkerPoolRequest.parent and CreateWorkerPoolRequest.worker_id. Format: \`projects/{project}/locations/{location}/workerPools/{worker_id}\`
    - name: description
      value: "{{ description }}"
      description: |
        User-provided description of the WorkerPool. This field currently has a 512-character limit.
    - name: launchStage
      value: "{{ launchStage }}"
      description: |
        Optional. The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports \`ALPHA\`, \`BETA\`, and \`GA\`. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.
      valid_values: ['LAUNCH_STAGE_UNSPECIFIED', 'UNIMPLEMENTED', 'PRELAUNCH', 'EARLY_ACCESS', 'ALPHA', 'BETA', 'GA', 'DEPRECATED']
    - name: etag
      value: "{{ etag }}"
      description: |
        Optional. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
    - name: annotations
      value: "{{ annotations }}"
      description: |
        Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with \`run.googleapis.com\`, \`cloud.googleapis.com\`, \`serving.knative.dev\`, or \`autoscaling.knative.dev\` namespaces, and they will be rejected in new resources. All system annotations in v1 now have a corresponding field in v2 WorkerPool. This field follows Kubernetes annotations' namespacing, limits, and rules.
    - name: scaling
      description: |
        Optional. Specifies worker-pool-level scaling settings
      value:
        manualInstanceCount: {{ manualInstanceCount }}
    - name: binaryAuthorization
      description: |
        Optional. Settings for the Binary Authorization feature.
      value:
        useDefault: {{ useDefault }}
        breakglassJustification: "{{ breakglassJustification }}"
        policy: "{{ policy }}"
    - name: client
      value: "{{ client }}"
      description: |
        Arbitrary identifier for the API client.
    - name: template
      description: |
        Required. The template used to create revisions for this WorkerPool.
      value:
        labels: "{{ labels }}"
        gpuZonalRedundancyDisabled: {{ gpuZonalRedundancyDisabled }}
        clientVersion: "{{ clientVersion }}"
        serviceAccount: "{{ serviceAccount }}"
        containers:
          - readinessProbe:
              timeoutSeconds: {{ timeoutSeconds }}
              grpc:
                port: {{ port }}
                service: "{{ service }}"
              periodSeconds: {{ periodSeconds }}
              initialDelaySeconds: {{ initialDelaySeconds }}
              failureThreshold: {{ failureThreshold }}
              httpGet:
                port: {{ port }}
                path: "{{ path }}"
                httpHeaders:
                  - name: "{{ name }}"
                    value: "{{ value }}"
              tcpSocket:
                port: {{ port }}
            ports: "{{ ports }}"
            command: "{{ command }}"
            env: "{{ env }}"
            resources:
              startupCpuBoost: {{ startupCpuBoost }}
              limits: "{{ limits }}"
              cpuIdle: {{ cpuIdle }}
            livenessProbe:
              timeoutSeconds: {{ timeoutSeconds }}
              grpc:
                port: {{ port }}
                service: "{{ service }}"
              periodSeconds: {{ periodSeconds }}
              initialDelaySeconds: {{ initialDelaySeconds }}
              failureThreshold: {{ failureThreshold }}
              httpGet:
                port: {{ port }}
                path: "{{ path }}"
                httpHeaders:
                  - name: "{{ name }}"
                    value: "{{ value }}"
              tcpSocket:
                port: {{ port }}
            image: "{{ image }}"
            args: "{{ args }}"
            sourceCode:
              inlinedSource:
                sources:
                  - content: "{{ content }}"
                    filename: "{{ filename }}"
              cloudStorageSource:
                generation: "{{ generation }}"
                bucket: "{{ bucket }}"
                object: "{{ object }}"
            name: "{{ name }}"
            workingDir: "{{ workingDir }}"
            startupProbe:
              timeoutSeconds: {{ timeoutSeconds }}
              grpc:
                port: {{ port }}
                service: "{{ service }}"
              periodSeconds: {{ periodSeconds }}
              initialDelaySeconds: {{ initialDelaySeconds }}
              failureThreshold: {{ failureThreshold }}
              httpGet:
                port: {{ port }}
                path: "{{ path }}"
                httpHeaders:
                  - name: "{{ name }}"
                    value: "{{ value }}"
              tcpSocket:
                port: {{ port }}
            dependsOn: "{{ dependsOn }}"
            sandboxLauncher: {{ sandboxLauncher }}
            volumeMounts: "{{ volumeMounts }}"
            baseImageUri: "{{ baseImageUri }}"
            buildInfo:
              sourceLocation: "{{ sourceLocation }}"
              functionTarget: "{{ functionTarget }}"
        encryptionKey: "{{ encryptionKey }}"
        annotations: "{{ annotations }}"
        nodeSelector:
          accelerator: "{{ accelerator }}"
        vpcAccess:
          egress: "{{ egress }}"
          networkInterfaces:
            - tags: "{{ tags }}"
              network: "{{ network }}"
              subnetwork: "{{ subnetwork }}"
          connector: "{{ connector }}"
        revision: "{{ revision }}"
        encryptionKeyRevocationAction: "{{ encryptionKeyRevocationAction }}"
        serviceMesh:
          mesh: "{{ mesh }}"
        encryptionKeyShutdownDuration: "{{ encryptionKeyShutdownDuration }}"
        client: "{{ client }}"
        volumes:
          - gcs:
              mountOptions:
                - "{{ mountOptions }}"
              readOnly: {{ readOnly }}
              bucket: "{{ bucket }}"
            nfs:
              server: "{{ server }}"
              path: "{{ path }}"
              readOnly: {{ readOnly }}
            cloudSqlInstance:
              instances:
                - "{{ instances }}"
            emptyDir:
              sizeLimit: "{{ sizeLimit }}"
              medium: "{{ medium }}"
            secret:
              secret: "{{ secret }}"
              items:
                - version: "{{ version }}"
                  mode: {{ mode }}
                  path: "{{ path }}"
              defaultMode: {{ defaultMode }}
            name: "{{ name }}"
    - name: clientVersion
      value: "{{ clientVersion }}"
      description: |
        Arbitrary version identifier for the API client.
    - name: customAudiences
      value:
        - "{{ customAudiences }}"
      description: |
        Deprecated: Not supported, and ignored by Cloud Run.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with \`run.googleapis.com\`, \`cloud.googleapis.com\`, \`serving.knative.dev\`, or \`autoscaling.knative.dev\` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 WorkerPool.
    - name: workerPoolId
      value: "{{ workerPoolId }}"
    - name: validateOnly
      value: {{ validateOnly }}
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

Updates a WorkerPool.

```sql
UPDATE google.run.worker_pools
SET 
data__instanceSplits = '{{ instanceSplits }}',
data__name = '{{ name }}',
data__description = '{{ description }}',
data__launchStage = '{{ launchStage }}',
data__etag = '{{ etag }}',
data__annotations = '{{ annotations }}',
data__scaling = '{{ scaling }}',
data__binaryAuthorization = '{{ binaryAuthorization }}',
data__client = '{{ client }}',
data__template = '{{ template }}',
data__clientVersion = '{{ clientVersion }}',
data__customAudiences = '{{ customAudiences }}',
data__labels = '{{ labels }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND workerPoolsId = '{{ workerPoolsId }}' --required
AND forceNewRevision = {{ forceNewRevision}}
AND validateOnly = {{ validateOnly}}
AND allowMissing = {{ allowMissing}}
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

Deletes a WorkerPool.

```sql
DELETE FROM google.run.worker_pools
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND workerPoolsId = '{{ workerPoolsId }}' --required
AND validateOnly = '{{ validateOnly }}'
AND etag = '{{ etag }}'
;
```
</TabItem>
</Tabs>
