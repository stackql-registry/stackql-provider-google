--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
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

Creates, updates, deletes, gets or lists an <code>instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.run.instances" /></td></tr>
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
    <td>The fully qualified name of this Instance. In `CreateInstanceRequest`, this field is ignored, and instead composed from `CreateInstanceRequest.parent` and `CreateInstanceRequest.instance_id`.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="binaryAuthorization" /></td>
    <td><code>object</code></td>
    <td>Settings for the Binary Authorization feature. (id: GoogleCloudRunV2BinaryAuthorization)</td>
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
    <td>Output only. The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the Instance does not reach its Serving state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.</td>
</tr>
<tr>
    <td><CopyableCode code="containerStatuses" /></td>
    <td><code>array</code></td>
    <td>Output only. Status information for each of the specified containers. The status includes the resolved digest for specified images.</td>
</tr>
<tr>
    <td><CopyableCode code="containers" /></td>
    <td><code>array</code></td>
    <td>Required. Holds the single container that defines the unit of execution for this Instance.</td>
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
    <td><CopyableCode code="defaultUriDisabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Disables public resolution of the default URI of this Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The deletion time.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User-provided description of the Instance. This field currently has a 512-character limit.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionKey" /></td>
    <td><code>string</code></td>
    <td>A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionKeyRevocationAction" /></td>
    <td><code>string</code></td>
    <td>The action to take if the encryption key is revoked. (ENCRYPTION_KEY_REVOCATION_ACTION_UNSPECIFIED, PREVENT_NEW, SHUTDOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionKeyShutdownDuration" /></td>
    <td><code>string (google-duration)</code></td>
    <td>If `encryption_key_revocation_action` is `SHUTDOWN`, the duration before shutting down all instances. The minimum increment is 1 hour.</td>
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
    <td>Output only. A number that monotonically increases every time the user modifies the desired state. Please note that unlike v1, this is an `int64` value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`.</td>
</tr>
<tr>
    <td><CopyableCode code="gpuZonalRedundancyDisabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. True if GPU zonal redundancy is disabled on this instance.</td>
</tr>
<tr>
    <td><CopyableCode code="iapEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. IAP settings on the Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="ingress" /></td>
    <td><code>string</code></td>
    <td>Optional. Provides the ingress settings for this Instance. On output, returns the currently observed ingress settings, or `INGRESS_TRAFFIC_UNSPECIFIED` if no revision is active. (INGRESS_TRAFFIC_UNSPECIFIED, INGRESS_TRAFFIC_ALL, INGRESS_TRAFFIC_INTERNAL_ONLY, INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER, INGRESS_TRAFFIC_NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="invokerIamDisabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Disables IAM permission check for `run.routes.invoke` for callers of this Instance. For more information, visit https://cloud.google.com/run/docs/securing/managing-access#invoker_check.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="lastModifier" /></td>
    <td><code>string</code></td>
    <td>Output only. Email address of the last authenticated modifier.</td>
</tr>
<tr>
    <td><CopyableCode code="launchStage" /></td>
    <td><code>string</code></td>
    <td>The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, `GA` is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if `ALPHA` is provided as input, but only `BETA` and `GA`-level features are used, this field will be `BETA` on output. (LAUNCH_STAGE_UNSPECIFIED, UNIMPLEMENTED, PRELAUNCH, EARLY_ACCESS, ALPHA, BETA, GA, DEPRECATED)</td>
</tr>
<tr>
    <td><CopyableCode code="logUri" /></td>
    <td><code>string</code></td>
    <td>Output only. The Google Console URI to obtain logs for the Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeSelector" /></td>
    <td><code>object</code></td>
    <td>Optional. The node selector for the instance. (id: GoogleCloudRunV2NodeSelector)</td>
</tr>
<tr>
    <td><CopyableCode code="observedGeneration" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The generation of this Instance currently serving traffic. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. Please note that unlike v1, this is an `int64` value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Returns `true` if the Instance is currently being acted upon by the system to bring it into the desired state. When a new Instance is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the Instance to the desired serving state. This process is called reconciliation. While reconciliation is in process, `observed_generation` will have a transient value that might mismatch the intended state. Once reconciliation is over (and this field is `false`), there are two possible outcomes: reconciliation succeeded and the serving state matches the Instance, or there was an error, and reconciliation failed. This state can be found in `terminal_condition.state`.</td>
</tr>
<tr>
    <td><CopyableCode code="restartPolicy" /></td>
    <td><code>string</code></td>
    <td>Optional. Restart policy for the Instance. (RESTART_POLICY_UNSPECIFIED, ALWAYS, ON_FAILURE, NEVER)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="terminalCondition" /></td>
    <td><code>object</code></td>
    <td>Defines a status condition for a resource. (id: GoogleCloudRunV2Condition)</td>
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
<tr>
    <td><CopyableCode code="urls" /></td>
    <td><code>array</code></td>
    <td>Output only. All URLs serving traffic for this Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="volumes" /></td>
    <td><code>array</code></td>
    <td>A list of Volumes to make available to containers.</td>
</tr>
<tr>
    <td><CopyableCode code="vpcAccess" /></td>
    <td><code>object</code></td>
    <td>Optional. VPC Access configuration to use for this Revision. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc. (id: GoogleCloudRunV2VpcAccess)</td>
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
    <td>The fully qualified name of this Instance. In `CreateInstanceRequest`, this field is ignored, and instead composed from `CreateInstanceRequest.parent` and `CreateInstanceRequest.instance_id`.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="binaryAuthorization" /></td>
    <td><code>object</code></td>
    <td>Settings for the Binary Authorization feature. (id: GoogleCloudRunV2BinaryAuthorization)</td>
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
    <td>Output only. The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the Instance does not reach its Serving state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.</td>
</tr>
<tr>
    <td><CopyableCode code="containerStatuses" /></td>
    <td><code>array</code></td>
    <td>Output only. Status information for each of the specified containers. The status includes the resolved digest for specified images.</td>
</tr>
<tr>
    <td><CopyableCode code="containers" /></td>
    <td><code>array</code></td>
    <td>Required. Holds the single container that defines the unit of execution for this Instance.</td>
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
    <td><CopyableCode code="defaultUriDisabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Disables public resolution of the default URI of this Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The deletion time.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User-provided description of the Instance. This field currently has a 512-character limit.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionKey" /></td>
    <td><code>string</code></td>
    <td>A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionKeyRevocationAction" /></td>
    <td><code>string</code></td>
    <td>The action to take if the encryption key is revoked. (ENCRYPTION_KEY_REVOCATION_ACTION_UNSPECIFIED, PREVENT_NEW, SHUTDOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionKeyShutdownDuration" /></td>
    <td><code>string (google-duration)</code></td>
    <td>If `encryption_key_revocation_action` is `SHUTDOWN`, the duration before shutting down all instances. The minimum increment is 1 hour.</td>
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
    <td>Output only. A number that monotonically increases every time the user modifies the desired state. Please note that unlike v1, this is an `int64` value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`.</td>
</tr>
<tr>
    <td><CopyableCode code="gpuZonalRedundancyDisabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. True if GPU zonal redundancy is disabled on this instance.</td>
</tr>
<tr>
    <td><CopyableCode code="iapEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. IAP settings on the Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="ingress" /></td>
    <td><code>string</code></td>
    <td>Optional. Provides the ingress settings for this Instance. On output, returns the currently observed ingress settings, or `INGRESS_TRAFFIC_UNSPECIFIED` if no revision is active. (INGRESS_TRAFFIC_UNSPECIFIED, INGRESS_TRAFFIC_ALL, INGRESS_TRAFFIC_INTERNAL_ONLY, INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER, INGRESS_TRAFFIC_NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="invokerIamDisabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Disables IAM permission check for `run.routes.invoke` for callers of this Instance. For more information, visit https://cloud.google.com/run/docs/securing/managing-access#invoker_check.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="lastModifier" /></td>
    <td><code>string</code></td>
    <td>Output only. Email address of the last authenticated modifier.</td>
</tr>
<tr>
    <td><CopyableCode code="launchStage" /></td>
    <td><code>string</code></td>
    <td>The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, `GA` is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if `ALPHA` is provided as input, but only `BETA` and `GA`-level features are used, this field will be `BETA` on output. (LAUNCH_STAGE_UNSPECIFIED, UNIMPLEMENTED, PRELAUNCH, EARLY_ACCESS, ALPHA, BETA, GA, DEPRECATED)</td>
</tr>
<tr>
    <td><CopyableCode code="logUri" /></td>
    <td><code>string</code></td>
    <td>Output only. The Google Console URI to obtain logs for the Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeSelector" /></td>
    <td><code>object</code></td>
    <td>Optional. The node selector for the instance. (id: GoogleCloudRunV2NodeSelector)</td>
</tr>
<tr>
    <td><CopyableCode code="observedGeneration" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The generation of this Instance currently serving traffic. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. Please note that unlike v1, this is an `int64` value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Returns `true` if the Instance is currently being acted upon by the system to bring it into the desired state. When a new Instance is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the Instance to the desired serving state. This process is called reconciliation. While reconciliation is in process, `observed_generation` will have a transient value that might mismatch the intended state. Once reconciliation is over (and this field is `false`), there are two possible outcomes: reconciliation succeeded and the serving state matches the Instance, or there was an error, and reconciliation failed. This state can be found in `terminal_condition.state`.</td>
</tr>
<tr>
    <td><CopyableCode code="restartPolicy" /></td>
    <td><code>string</code></td>
    <td>Optional. Restart policy for the Instance. (RESTART_POLICY_UNSPECIFIED, ALWAYS, ON_FAILURE, NEVER)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="terminalCondition" /></td>
    <td><code>object</code></td>
    <td>Defines a status condition for a resource. (id: GoogleCloudRunV2Condition)</td>
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
<tr>
    <td><CopyableCode code="urls" /></td>
    <td><code>array</code></td>
    <td>Output only. All URLs serving traffic for this Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="volumes" /></td>
    <td><code>array</code></td>
    <td>A list of Volumes to make available to containers.</td>
</tr>
<tr>
    <td><CopyableCode code="vpcAccess" /></td>
    <td><code>object</code></td>
    <td>Optional. VPC Access configuration to use for this Revision. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc. (id: GoogleCloudRunV2VpcAccess)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Gets an Instance</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-showDeleted"><code>showDeleted</code></a></td>
    <td>Lists Instances. Results are sorted by creation time, descending.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates an Instance.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates an Instance.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Deletes an Instance</td>
</tr>
<tr>
    <td><a href="#start"><CopyableCode code="start" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Starts an Instance.</td>
</tr>
<tr>
    <td><a href="#stop"><CopyableCode code="stop" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Stops an Instance.</td>
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
<tr id="parameter-instancesId">
    <td><CopyableCode code="instancesId" /></td>
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
<tr id="parameter-instanceId">
    <td><CopyableCode code="instanceId" /></td>
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

Gets an Instance

```sql
SELECT
name,
annotations,
binaryAuthorization,
client,
clientVersion,
conditions,
containerStatuses,
containers,
createTime,
creator,
defaultUriDisabled,
deleteTime,
description,
encryptionKey,
encryptionKeyRevocationAction,
encryptionKeyShutdownDuration,
etag,
expireTime,
generation,
gpuZonalRedundancyDisabled,
iapEnabled,
ingress,
invokerIamDisabled,
labels,
lastModifier,
launchStage,
logUri,
nodeSelector,
observedGeneration,
reconciling,
restartPolicy,
satisfiesPzs,
serviceAccount,
terminalCondition,
uid,
updateTime,
urls,
volumes,
vpcAccess
FROM google.run.instances
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Instances. Results are sorted by creation time, descending.

```sql
SELECT
name,
annotations,
binaryAuthorization,
client,
clientVersion,
conditions,
containerStatuses,
containers,
createTime,
creator,
defaultUriDisabled,
deleteTime,
description,
encryptionKey,
encryptionKeyRevocationAction,
encryptionKeyShutdownDuration,
etag,
expireTime,
generation,
gpuZonalRedundancyDisabled,
iapEnabled,
ingress,
invokerIamDisabled,
labels,
lastModifier,
launchStage,
logUri,
nodeSelector,
observedGeneration,
reconciling,
restartPolicy,
satisfiesPzs,
serviceAccount,
terminalCondition,
uid,
updateTime,
urls,
volumes,
vpcAccess
FROM google.run.instances
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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

Creates an Instance.

```sql
INSERT INTO google.run.instances (
data__annotations,
data__binaryAuthorization,
data__client,
data__clientVersion,
data__containers,
data__defaultUriDisabled,
data__description,
data__encryptionKey,
data__encryptionKeyRevocationAction,
data__encryptionKeyShutdownDuration,
data__etag,
data__gpuZonalRedundancyDisabled,
data__iapEnabled,
data__ingress,
data__invokerIamDisabled,
data__labels,
data__launchStage,
data__name,
data__nodeSelector,
data__restartPolicy,
data__serviceAccount,
data__volumes,
data__vpcAccess,
projectsId,
locationsId,
instanceId,
validateOnly
)
SELECT 
'{{ annotations }}',
'{{ binaryAuthorization }}',
'{{ client }}',
'{{ clientVersion }}',
'{{ containers }}',
{{ defaultUriDisabled }},
'{{ description }}',
'{{ encryptionKey }}',
'{{ encryptionKeyRevocationAction }}',
'{{ encryptionKeyShutdownDuration }}',
'{{ etag }}',
{{ gpuZonalRedundancyDisabled }},
{{ iapEnabled }},
'{{ ingress }}',
{{ invokerIamDisabled }},
'{{ labels }}',
'{{ launchStage }}',
'{{ name }}',
'{{ nodeSelector }}',
'{{ restartPolicy }}',
'{{ serviceAccount }}',
'{{ volumes }}',
'{{ vpcAccess }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ instanceId }}',
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
- name: instances
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the instances resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the instances resource.
    - name: annotations
      value: "{{ annotations }}"
    - name: binaryAuthorization
      description: |
        Settings for the Binary Authorization feature.
      value:
        breakglassJustification: "{{ breakglassJustification }}"
        policy: "{{ policy }}"
        useDefault: {{ useDefault }}
    - name: client
      value: "{{ client }}"
      description: |
        Arbitrary identifier for the API client.
    - name: clientVersion
      value: "{{ clientVersion }}"
      description: |
        Arbitrary version identifier for the API client.
    - name: containers
      description: |
        Required. Holds the single container that defines the unit of execution for this Instance.
      value:
        - args: "{{ args }}"
          baseImageUri: "{{ baseImageUri }}"
          buildInfo:
            functionTarget: "{{ functionTarget }}"
            sourceLocation: "{{ sourceLocation }}"
          command: "{{ command }}"
          dependsOn: "{{ dependsOn }}"
          env: "{{ env }}"
          image: "{{ image }}"
          livenessProbe:
            failureThreshold: {{ failureThreshold }}
            grpc:
              port: {{ port }}
              service: "{{ service }}"
            httpGet:
              httpHeaders:
                - name: "{{ name }}"
                  value: "{{ value }}"
              path: "{{ path }}"
              port: {{ port }}
            initialDelaySeconds: {{ initialDelaySeconds }}
            periodSeconds: {{ periodSeconds }}
            tcpSocket:
              port: {{ port }}
            timeoutSeconds: {{ timeoutSeconds }}
          name: "{{ name }}"
          ports: "{{ ports }}"
          readinessProbe:
            failureThreshold: {{ failureThreshold }}
            grpc:
              port: {{ port }}
              service: "{{ service }}"
            httpGet:
              httpHeaders:
                - name: "{{ name }}"
                  value: "{{ value }}"
              path: "{{ path }}"
              port: {{ port }}
            initialDelaySeconds: {{ initialDelaySeconds }}
            periodSeconds: {{ periodSeconds }}
            tcpSocket:
              port: {{ port }}
            timeoutSeconds: {{ timeoutSeconds }}
          resources:
            cpuIdle: {{ cpuIdle }}
            limits: "{{ limits }}"
            startupCpuBoost: {{ startupCpuBoost }}
          sandboxLauncher: {{ sandboxLauncher }}
          sourceCode:
            cloudStorageSource:
              bucket: "{{ bucket }}"
              generation: "{{ generation }}"
              object: "{{ object }}"
            inlinedSource:
              sources:
                - content: "{{ content }}"
                  filename: "{{ filename }}"
          startupProbe:
            failureThreshold: {{ failureThreshold }}
            grpc:
              port: {{ port }}
              service: "{{ service }}"
            httpGet:
              httpHeaders:
                - name: "{{ name }}"
                  value: "{{ value }}"
              path: "{{ path }}"
              port: {{ port }}
            initialDelaySeconds: {{ initialDelaySeconds }}
            periodSeconds: {{ periodSeconds }}
            tcpSocket:
              port: {{ port }}
            timeoutSeconds: {{ timeoutSeconds }}
          volumeMounts: "{{ volumeMounts }}"
          workingDir: "{{ workingDir }}"
    - name: defaultUriDisabled
      value: {{ defaultUriDisabled }}
      description: |
        Optional. Disables public resolution of the default URI of this Instance.
    - name: description
      value: "{{ description }}"
      description: |
        User-provided description of the Instance. This field currently has a 512-character limit.
    - name: encryptionKey
      value: "{{ encryptionKey }}"
      description: |
        A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek
    - name: encryptionKeyRevocationAction
      value: "{{ encryptionKeyRevocationAction }}"
      description: |
        The action to take if the encryption key is revoked.
      valid_values: ['ENCRYPTION_KEY_REVOCATION_ACTION_UNSPECIFIED', 'PREVENT_NEW', 'SHUTDOWN']
    - name: encryptionKeyShutdownDuration
      value: "{{ encryptionKeyShutdownDuration }}"
      description: |
        If \`encryption_key_revocation_action\` is \`SHUTDOWN\`, the duration before shutting down all instances. The minimum increment is 1 hour.
    - name: etag
      value: "{{ etag }}"
      description: |
        Optional. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
    - name: gpuZonalRedundancyDisabled
      value: {{ gpuZonalRedundancyDisabled }}
      description: |
        Optional. True if GPU zonal redundancy is disabled on this instance.
    - name: iapEnabled
      value: {{ iapEnabled }}
      description: |
        Optional. IAP settings on the Instance.
    - name: ingress
      value: "{{ ingress }}"
      description: |
        Optional. Provides the ingress settings for this Instance. On output, returns the currently observed ingress settings, or \`INGRESS_TRAFFIC_UNSPECIFIED\` if no revision is active.
      valid_values: ['INGRESS_TRAFFIC_UNSPECIFIED', 'INGRESS_TRAFFIC_ALL', 'INGRESS_TRAFFIC_INTERNAL_ONLY', 'INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER', 'INGRESS_TRAFFIC_NONE']
    - name: invokerIamDisabled
      value: {{ invokerIamDisabled }}
      description: |
        Optional. Disables IAM permission check for \`run.routes.invoke\` for callers of this Instance. For more information, visit https://cloud.google.com/run/docs/securing/managing-access#invoker_check.
    - name: labels
      value: "{{ labels }}"
    - name: launchStage
      value: "{{ launchStage }}"
      description: |
        The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports \`ALPHA\`, \`BETA\`, and \`GA\`. If no value is specified, \`GA\` is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if \`ALPHA\` is provided as input, but only \`BETA\` and \`GA\`-level features are used, this field will be \`BETA\` on output.
      valid_values: ['LAUNCH_STAGE_UNSPECIFIED', 'UNIMPLEMENTED', 'PRELAUNCH', 'EARLY_ACCESS', 'ALPHA', 'BETA', 'GA', 'DEPRECATED']
    - name: name
      value: "{{ name }}"
      description: |
        The fully qualified name of this Instance. In \`CreateInstanceRequest\`, this field is ignored, and instead composed from \`CreateInstanceRequest.parent\` and \`CreateInstanceRequest.instance_id\`.
    - name: nodeSelector
      description: |
        Optional. The node selector for the instance.
      value:
        accelerator: "{{ accelerator }}"
    - name: restartPolicy
      value: "{{ restartPolicy }}"
      description: |
        Optional. Restart policy for the Instance.
      valid_values: ['RESTART_POLICY_UNSPECIFIED', 'ALWAYS', 'ON_FAILURE', 'NEVER']
    - name: serviceAccount
      value: "{{ serviceAccount }}"
    - name: volumes
      description: |
        A list of Volumes to make available to containers.
      value:
        - cloudSqlInstance:
            instances:
              - "{{ instances }}"
          emptyDir:
            medium: "{{ medium }}"
            sizeLimit: "{{ sizeLimit }}"
          gcs:
            bucket: "{{ bucket }}"
            mountOptions:
              - "{{ mountOptions }}"
            readOnly: {{ readOnly }}
          name: "{{ name }}"
          nfs:
            path: "{{ path }}"
            readOnly: {{ readOnly }}
            server: "{{ server }}"
          secret:
            defaultMode: {{ defaultMode }}
            items:
              - mode: {{ mode }}
                path: "{{ path }}"
                version: "{{ version }}"
            secret: "{{ secret }}"
    - name: vpcAccess
      description: |
        Optional. VPC Access configuration to use for this Revision. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc.
      value:
        connector: "{{ connector }}"
        egress: "{{ egress }}"
        networkInterfaces:
          - network: "{{ network }}"
            subnetwork: "{{ subnetwork }}"
            tags: "{{ tags }}"
    - name: instanceId
      value: "{{ instanceId }}"
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

Updates an Instance.

```sql
UPDATE google.run.instances
SET 
data__annotations = '{{ annotations }}',
data__binaryAuthorization = '{{ binaryAuthorization }}',
data__client = '{{ client }}',
data__clientVersion = '{{ clientVersion }}',
data__containers = '{{ containers }}',
data__defaultUriDisabled = {{ defaultUriDisabled }},
data__description = '{{ description }}',
data__encryptionKey = '{{ encryptionKey }}',
data__encryptionKeyRevocationAction = '{{ encryptionKeyRevocationAction }}',
data__encryptionKeyShutdownDuration = '{{ encryptionKeyShutdownDuration }}',
data__etag = '{{ etag }}',
data__gpuZonalRedundancyDisabled = {{ gpuZonalRedundancyDisabled }},
data__iapEnabled = {{ iapEnabled }},
data__ingress = '{{ ingress }}',
data__invokerIamDisabled = {{ invokerIamDisabled }},
data__labels = '{{ labels }}',
data__launchStage = '{{ launchStage }}',
data__name = '{{ name }}',
data__nodeSelector = '{{ nodeSelector }}',
data__restartPolicy = '{{ restartPolicy }}',
data__serviceAccount = '{{ serviceAccount }}',
data__volumes = '{{ volumes }}',
data__vpcAccess = '{{ vpcAccess }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND allowMissing = {{ allowMissing}}
AND updateMask = '{{ updateMask}}'
AND validateOnly = {{ validateOnly}}
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

Deletes an Instance

```sql
DELETE FROM google.run.instances
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND etag = '{{ etag }}'
AND validateOnly = '{{ validateOnly }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start"
    values={[
        { label: 'start', value: 'start' },
        { label: 'stop', value: 'stop' }
    ]}
>
<TabItem value="start">

Starts an Instance.

```sql
EXEC google.run.instances.start 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"etag": "{{ etag }}", 
"validateOnly": {{ validateOnly }}
}'
;
```
</TabItem>
<TabItem value="stop">

Stops an Instance.

```sql
EXEC google.run.instances.stop 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"etag": "{{ etag }}", 
"validateOnly": {{ validateOnly }}
}'
;
```
</TabItem>
</Tabs>
