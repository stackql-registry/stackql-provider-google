--- 
title: rollouts
hide_title: false
hide_table_of_contents: false
keywords:
  - rollouts
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

Creates, updates, deletes, gets or lists a <code>rollouts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rollouts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.rollouts" /></td></tr>
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
    <td><CopyableCode code="cancellationTime" /></td>
    <td><code>string</code></td>
    <td>Output only. The timestamp at which the Rollout was cancelled.</td>
</tr>
<tr>
    <td><CopyableCode code="completionTime" /></td>
    <td><code>string</code></td>
    <td>Output only. The timestamp at which the Rollout was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Creation timestamp inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="currentWaveNumber" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The number of the currently running wave. Ex. 1</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. etag of the Rollout Ex. abc1234</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of the resource. Always compute#rollout for rollouts. (default: compute#rollout)</td>
</tr>
<tr>
    <td><CopyableCode code="pauseTime" /></td>
    <td><code>string</code></td>
    <td>Output only. The timestamp at which the Rollout was paused.</td>
</tr>
<tr>
    <td><CopyableCode code="resumeTime" /></td>
    <td><code>string</code></td>
    <td>Output only. The timestamp at which the Rollout was resumed.</td>
</tr>
<tr>
    <td><CopyableCode code="rolloutEntity" /></td>
    <td><code>object</code></td>
    <td>Required. The resource being rolled out. (id: RolloutRolloutEntity)</td>
</tr>
<tr>
    <td><CopyableCode code="rolloutPlan" /></td>
    <td><code>string</code></td>
    <td>Required. Rollout Plan used to model the Rollout. Ex. compute.googleapis.com/v1/projects/1234/rolloutPlans/rp1</td>
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
    <td>Output only. The current state of the Rollout. (CANCELLED, CANCELLING, CANCEL_FAILED, COMPLETED, COMPLETE_FAILED, COMPLETING, FAILED, PAUSED, PAUSE_FAILED, PAUSING, PROCESSING, READY, RESUMING, ROLLBACK_WAVE_FAILED, ROLLING_BACK, STATE_UNSPECIFIED, UNINITIALIZED, WAVE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="waveDetails" /></td>
    <td><code>array</code></td>
    <td>Output only. Details about each wave of the rollout.</td>
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
    <td>A list of Rollout resources.</td>
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
    <td>Output only. [Output Only] Unreachable resources. end_interface: MixerListResponseWithEtagBuilder</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-rollout"><code>rollout</code></a></td>
    <td></td>
    <td>Gets details of a single project-scoped Rollout.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Lists Rollouts in a given project and location.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-rollout"><code>rollout</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a Rollout.</td>
</tr>
<tr>
    <td><a href="#advance"><CopyableCode code="advance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-rollout"><code>rollout</code></a></td>
    <td><a href="#parameter-currentWaveNumber"><code>currentWaveNumber</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Advances a Rollout to the next wave, or completes it if no waves remain.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-rollout"><code>rollout</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-rollback"><code>rollback</code></a></td>
    <td>Cancels a Rollout.</td>
</tr>
<tr>
    <td><a href="#pause"><CopyableCode code="pause" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-rollout"><code>rollout</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Pauses a Rollout.</td>
</tr>
<tr>
    <td><a href="#resume"><CopyableCode code="resume" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-rollout"><code>rollout</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Resumes a Rollout.</td>
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
<tr id="parameter-rollout">
    <td><CopyableCode code="rollout" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-currentWaveNumber">
    <td><CopyableCode code="currentWaveNumber" /></td>
    <td><code>string (int64)</code></td>
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
<tr id="parameter-rollback">
    <td><CopyableCode code="rollback" /></td>
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

Gets details of a single project-scoped Rollout.

```sql
SELECT
id,
name,
cancellationTime,
completionTime,
creationTimestamp,
currentWaveNumber,
description,
etag,
kind,
pauseTime,
resumeTime,
rolloutEntity,
rolloutPlan,
selfLink,
selfLinkWithId,
state,
waveDetails
FROM google.compute.rollouts
WHERE project = '{{ project }}' -- required
AND rollout = '{{ rollout }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Rollouts in a given project and location.

```sql
SELECT
id,
etag,
items,
nextPageToken,
selfLink,
unreachables,
warning
FROM google.compute.rollouts
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


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes a Rollout.

```sql
DELETE FROM google.compute.rollouts
WHERE project = '{{ project }}' --required
AND rollout = '{{ rollout }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="advance"
    values={[
        { label: 'advance', value: 'advance' },
        { label: 'cancel', value: 'cancel' },
        { label: 'pause', value: 'pause' },
        { label: 'resume', value: 'resume' }
    ]}
>
<TabItem value="advance">

Advances a Rollout to the next wave, or completes it if no waves remain.

```sql
EXEC google.compute.rollouts.advance 
@project='{{ project }}' --required, 
@rollout='{{ rollout }}' --required, 
@currentWaveNumber='{{ currentWaveNumber }}', 
@requestId='{{ requestId }}'
;
```
</TabItem>
<TabItem value="cancel">

Cancels a Rollout.

```sql
EXEC google.compute.rollouts.cancel 
@project='{{ project }}' --required, 
@rollout='{{ rollout }}' --required, 
@requestId='{{ requestId }}', 
@rollback={{ rollback }}
;
```
</TabItem>
<TabItem value="pause">

Pauses a Rollout.

```sql
EXEC google.compute.rollouts.pause 
@project='{{ project }}' --required, 
@rollout='{{ rollout }}' --required, 
@etag='{{ etag }}', 
@requestId='{{ requestId }}'
;
```
</TabItem>
<TabItem value="resume">

Resumes a Rollout.

```sql
EXEC google.compute.rollouts.resume 
@project='{{ project }}' --required, 
@rollout='{{ rollout }}' --required, 
@etag='{{ etag }}', 
@requestId='{{ requestId }}'
;
```
</TabItem>
</Tabs>
