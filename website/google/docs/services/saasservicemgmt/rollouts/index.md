--- 
title: rollouts
hide_title: false
hide_table_of_contents: false
keywords:
  - rollouts
  - saasservicemgmt
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

Creates, updates, deletes, gets or lists a <code>rollouts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rollouts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.saasservicemgmt.rollouts" /></td></tr>
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
    <td>Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/&#123;project&#125;/locations/&#123;location&#125;/rollout/&#123;rollout_id&#125;"</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations</td>
</tr>
<tr>
    <td><CopyableCode code="control" /></td>
    <td><code>object</code></td>
    <td>Optional. Requested change to the execution of this rollout. Default RolloutControl.action is ROLLOUT_ACTION_RUN meaning the rollout will be executed to completion while progressing through all natural Rollout States (such as RUNNING -&gt; SUCCEEDED or RUNNING -&gt; FAILED). Requests can only be made when the Rollout is in a non-terminal state. (id: RolloutControl)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was marked for deletion (deletion is an asynchronous operation).</td>
</tr>
<tr>
    <td><CopyableCode code="effectiveUnitFilter" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. Output only snapshot of the effective unit filter at Rollout start time. Contains a CEL(https://github.com/google/cel-spec) expression consisting of a conjunction of Rollout.unit_filter and RolloutKind.unit_filter. This field captures the filter applied by the Rollout to determine the Unit population. If the associated RolloutKind's unit_filter is modified after the rollout is started, it will not be updated here.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Output only. The time when the rollout finished execution (regardless of success, failure, or cancellation). Will be empty if the rollout hasn't finished yet. Once set, the rollout is in terminal state and all the results are final.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written.</td>
</tr>
<tr>
    <td><CopyableCode code="flagRelease" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. Name of the FlagRelease to be rolled out to the target Units. Release and FlagRelease are mutually exclusive. Note: `release` comment needs to be adjusted to mention that "Release and FlagRelease are mutually exclusive" when visibility restriction will be lifted.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.</td>
</tr>
<tr>
    <td><CopyableCode code="parentRollout" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. The direct parent rollout that this rollout is stemming from. The resource name (full URI of the resource) following the standard naming scheme: "projects/&#123;project&#125;/locations/&#123;location&#125;/rollouts/&#123;rollout_id&#125;"</td>
</tr>
<tr>
    <td><CopyableCode code="release" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. Name of the Release that gets rolled out to target Units. Required if no other type of release is specified.</td>
</tr>
<tr>
    <td><CopyableCode code="rolloutKind" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. Name of the RolloutKind this rollout is stemming from and adhering to.</td>
</tr>
<tr>
    <td><CopyableCode code="rolloutOrchestrationStrategy" /></td>
    <td><code>string</code></td>
    <td>Optional. The strategy used for executing this Rollout. This strategy will override whatever strategy is specified in the RolloutKind. If not specified on creation, the strategy from RolloutKind will be used. There are two supported values strategies which are used to control - "Google.Cloud.Simple.AllAtOnce" - "Google.Cloud.Simple.OneLocationAtATime" A rollout with one of these simple strategies will rollout across all locations defined in the targeted UnitKind's Saas Locations.</td>
</tr>
<tr>
    <td><CopyableCode code="rootRollout" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. The root rollout that this rollout is stemming from. The resource name (full URI of the resource) following the standard naming scheme: "projects/&#123;project&#125;/locations/&#123;location&#125;/rollouts/&#123;rollout_id&#125;"</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Output only. The time when the rollout started executing. Will be empty if the rollout hasn't started yet.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the rollout. (ROLLOUT_STATE_UNSPECIFIED, ROLLOUT_STATE_RUNNING, ROLLOUT_STATE_PAUSED, ROLLOUT_STATE_SUCCEEDED, ROLLOUT_STATE_FAILED, ROLLOUT_STATE_CANCELLED, ROLLOUT_STATE_WAITING, ROLLOUT_STATE_CANCELLING, ROLLOUT_STATE_RESUMING, ROLLOUT_STATE_PAUSING)</td>
</tr>
<tr>
    <td><CopyableCode code="stateMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Human readable message indicating details about the last state transition.</td>
</tr>
<tr>
    <td><CopyableCode code="stateTransitionTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Output only. The time when the rollout transitioned into its current state.</td>
</tr>
<tr>
    <td><CopyableCode code="stats" /></td>
    <td><code>object</code></td>
    <td>Optional. Output only. Details about the progress of the rollout. (id: RolloutStats)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4.</td>
</tr>
<tr>
    <td><CopyableCode code="unitFilter" /></td>
    <td><code>string</code></td>
    <td>Optional. CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout. If not provided, the unit_filter from the RolloutKind will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value.</td>
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
    <td>Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/&#123;project&#125;/locations/&#123;location&#125;/rollout/&#123;rollout_id&#125;"</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations</td>
</tr>
<tr>
    <td><CopyableCode code="control" /></td>
    <td><code>object</code></td>
    <td>Optional. Requested change to the execution of this rollout. Default RolloutControl.action is ROLLOUT_ACTION_RUN meaning the rollout will be executed to completion while progressing through all natural Rollout States (such as RUNNING -&gt; SUCCEEDED or RUNNING -&gt; FAILED). Requests can only be made when the Rollout is in a non-terminal state. (id: RolloutControl)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was marked for deletion (deletion is an asynchronous operation).</td>
</tr>
<tr>
    <td><CopyableCode code="effectiveUnitFilter" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. Output only snapshot of the effective unit filter at Rollout start time. Contains a CEL(https://github.com/google/cel-spec) expression consisting of a conjunction of Rollout.unit_filter and RolloutKind.unit_filter. This field captures the filter applied by the Rollout to determine the Unit population. If the associated RolloutKind's unit_filter is modified after the rollout is started, it will not be updated here.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Output only. The time when the rollout finished execution (regardless of success, failure, or cancellation). Will be empty if the rollout hasn't finished yet. Once set, the rollout is in terminal state and all the results are final.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written.</td>
</tr>
<tr>
    <td><CopyableCode code="flagRelease" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. Name of the FlagRelease to be rolled out to the target Units. Release and FlagRelease are mutually exclusive. Note: `release` comment needs to be adjusted to mention that "Release and FlagRelease are mutually exclusive" when visibility restriction will be lifted.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.</td>
</tr>
<tr>
    <td><CopyableCode code="parentRollout" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. The direct parent rollout that this rollout is stemming from. The resource name (full URI of the resource) following the standard naming scheme: "projects/&#123;project&#125;/locations/&#123;location&#125;/rollouts/&#123;rollout_id&#125;"</td>
</tr>
<tr>
    <td><CopyableCode code="release" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. Name of the Release that gets rolled out to target Units. Required if no other type of release is specified.</td>
</tr>
<tr>
    <td><CopyableCode code="rolloutKind" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. Name of the RolloutKind this rollout is stemming from and adhering to.</td>
</tr>
<tr>
    <td><CopyableCode code="rolloutOrchestrationStrategy" /></td>
    <td><code>string</code></td>
    <td>Optional. The strategy used for executing this Rollout. This strategy will override whatever strategy is specified in the RolloutKind. If not specified on creation, the strategy from RolloutKind will be used. There are two supported values strategies which are used to control - "Google.Cloud.Simple.AllAtOnce" - "Google.Cloud.Simple.OneLocationAtATime" A rollout with one of these simple strategies will rollout across all locations defined in the targeted UnitKind's Saas Locations.</td>
</tr>
<tr>
    <td><CopyableCode code="rootRollout" /></td>
    <td><code>string</code></td>
    <td>Optional. Output only. The root rollout that this rollout is stemming from. The resource name (full URI of the resource) following the standard naming scheme: "projects/&#123;project&#125;/locations/&#123;location&#125;/rollouts/&#123;rollout_id&#125;"</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Output only. The time when the rollout started executing. Will be empty if the rollout hasn't started yet.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the rollout. (ROLLOUT_STATE_UNSPECIFIED, ROLLOUT_STATE_RUNNING, ROLLOUT_STATE_PAUSED, ROLLOUT_STATE_SUCCEEDED, ROLLOUT_STATE_FAILED, ROLLOUT_STATE_CANCELLED, ROLLOUT_STATE_WAITING, ROLLOUT_STATE_CANCELLING, ROLLOUT_STATE_RESUMING, ROLLOUT_STATE_PAUSING)</td>
</tr>
<tr>
    <td><CopyableCode code="stateMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Human readable message indicating details about the last state transition.</td>
</tr>
<tr>
    <td><CopyableCode code="stateTransitionTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Output only. The time when the rollout transitioned into its current state.</td>
</tr>
<tr>
    <td><CopyableCode code="stats" /></td>
    <td><code>object</code></td>
    <td>Optional. Output only. Details about the progress of the rollout. (id: RolloutStats)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4.</td>
</tr>
<tr>
    <td><CopyableCode code="unitFilter" /></td>
    <td><code>string</code></td>
    <td>Optional. CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout. If not provided, the unit_filter from the RolloutKind will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-rolloutsId"><code>rolloutsId</code></a></td>
    <td></td>
    <td>Retrieve a single rollout.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Retrieve a collection of rollouts.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-rolloutId"><code>rolloutId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Create a new rollout.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-rolloutsId"><code>rolloutsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Update a single rollout.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-rolloutsId"><code>rolloutsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Delete a single rollout.</td>
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
<tr id="parameter-rolloutsId">
    <td><CopyableCode code="rolloutsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-rolloutId">
    <td><CopyableCode code="rolloutId" /></td>
    <td><code>string</code></td>
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

Retrieve a single rollout.

```sql
SELECT
name,
annotations,
control,
createTime,
deleteTime,
effectiveUnitFilter,
endTime,
etag,
flagRelease,
labels,
parentRollout,
release,
rolloutKind,
rolloutOrchestrationStrategy,
rootRollout,
startTime,
state,
stateMessage,
stateTransitionTime,
stats,
uid,
unitFilter,
updateTime
FROM google.saasservicemgmt.rollouts
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND rolloutsId = '{{ rolloutsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Retrieve a collection of rollouts.

```sql
SELECT
name,
annotations,
control,
createTime,
deleteTime,
effectiveUnitFilter,
endTime,
etag,
flagRelease,
labels,
parentRollout,
release,
rolloutKind,
rolloutOrchestrationStrategy,
rootRollout,
startTime,
state,
stateMessage,
stateTransitionTime,
stats,
uid,
unitFilter,
updateTime
FROM google.saasservicemgmt.rollouts
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
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

Create a new rollout.

```sql
INSERT INTO google.saasservicemgmt.rollouts (
data__annotations,
data__control,
data__flagRelease,
data__labels,
data__name,
data__release,
data__rolloutKind,
data__rolloutOrchestrationStrategy,
data__unitFilter,
projectsId,
locationsId,
requestId,
rolloutId,
validateOnly
)
SELECT 
'{{ annotations }}',
'{{ control }}',
'{{ flagRelease }}',
'{{ labels }}',
'{{ name }}',
'{{ release }}',
'{{ rolloutKind }}',
'{{ rolloutOrchestrationStrategy }}',
'{{ unitFilter }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ requestId }}',
'{{ rolloutId }}',
'{{ validateOnly }}'
RETURNING
name,
annotations,
control,
createTime,
deleteTime,
effectiveUnitFilter,
endTime,
etag,
flagRelease,
labels,
parentRollout,
release,
rolloutKind,
rolloutOrchestrationStrategy,
rootRollout,
startTime,
state,
stateMessage,
stateTransitionTime,
stats,
uid,
unitFilter,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rollouts
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the rollouts resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the rollouts resource.
    - name: annotations
      value: "{{ annotations }}"
      description: |
        Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations
    - name: control
      description: |
        Optional. Requested change to the execution of this rollout. Default RolloutControl.action is ROLLOUT_ACTION_RUN meaning the rollout will be executed to completion while progressing through all natural Rollout States (such as RUNNING -> SUCCEEDED or RUNNING -> FAILED). Requests can only be made when the Rollout is in a non-terminal state.
      value:
        action: "{{ action }}"
        runParams:
          retryFailedOperations: {{ retryFailedOperations }}
    - name: flagRelease
      value: "{{ flagRelease }}"
      description: |
        Optional. Immutable. Name of the FlagRelease to be rolled out to the target Units. Release and FlagRelease are mutually exclusive. Note: \`release\` comment needs to be adjusted to mention that "Release and FlagRelease are mutually exclusive" when visibility restriction will be lifted.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/rollout/{rollout_id}"
    - name: release
      value: "{{ release }}"
      description: |
        Optional. Immutable. Name of the Release that gets rolled out to target Units. Required if no other type of release is specified.
    - name: rolloutKind
      value: "{{ rolloutKind }}"
      description: |
        Required. Immutable. Name of the RolloutKind this rollout is stemming from and adhering to.
    - name: rolloutOrchestrationStrategy
      value: "{{ rolloutOrchestrationStrategy }}"
      description: |
        Optional. The strategy used for executing this Rollout. This strategy will override whatever strategy is specified in the RolloutKind. If not specified on creation, the strategy from RolloutKind will be used. There are two supported values strategies which are used to control - "Google.Cloud.Simple.AllAtOnce" - "Google.Cloud.Simple.OneLocationAtATime" A rollout with one of these simple strategies will rollout across all locations defined in the targeted UnitKind's Saas Locations.
    - name: unitFilter
      value: "{{ unitFilter }}"
      description: |
        Optional. CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout. If not provided, the unit_filter from the RolloutKind will be used.
    - name: requestId
      value: "{{ requestId }}"
    - name: rolloutId
      value: "{{ rolloutId }}"
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

Update a single rollout.

```sql
UPDATE google.saasservicemgmt.rollouts
SET 
data__annotations = '{{ annotations }}',
data__control = '{{ control }}',
data__flagRelease = '{{ flagRelease }}',
data__labels = '{{ labels }}',
data__name = '{{ name }}',
data__release = '{{ release }}',
data__rolloutKind = '{{ rolloutKind }}',
data__rolloutOrchestrationStrategy = '{{ rolloutOrchestrationStrategy }}',
data__unitFilter = '{{ unitFilter }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND rolloutsId = '{{ rolloutsId }}' --required
AND requestId = '{{ requestId}}'
AND updateMask = '{{ updateMask}}'
AND validateOnly = {{ validateOnly}}
RETURNING
name,
annotations,
control,
createTime,
deleteTime,
effectiveUnitFilter,
endTime,
etag,
flagRelease,
labels,
parentRollout,
release,
rolloutKind,
rolloutOrchestrationStrategy,
rootRollout,
startTime,
state,
stateMessage,
stateTransitionTime,
stats,
uid,
unitFilter,
updateTime;
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

Delete a single rollout.

```sql
DELETE FROM google.saasservicemgmt.rollouts
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND rolloutsId = '{{ rolloutsId }}' --required
AND etag = '{{ etag }}'
AND requestId = '{{ requestId }}'
AND validateOnly = '{{ validateOnly }}'
;
```
</TabItem>
</Tabs>
