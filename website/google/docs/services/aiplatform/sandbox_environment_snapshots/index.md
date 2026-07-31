--- 
title: sandbox_environment_snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - sandbox_environment_snapshots
  - aiplatform
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

Creates, updates, deletes, gets or lists a <code>sandbox_environment_snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sandbox_environment_snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.sandbox_environment_snapshots" /></td></tr>
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
    <td>Identifier. The resource name of the SandboxEnvironmentSnapshot. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/reasoningEngines/&#123;reasoning_engine&#125;/sandboxEnvironmentSnapshots/&#123;sandbox_environment_snapshot&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this SandboxEnvironmentSnapshot was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the SandboxEnvironmentSnapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Timestamp in UTC of when this SandboxEnvironmentSnapshot is considered expired. This is *always* provided on output, regardless of what `expiration` was sent on input.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>Optional. Owner information for this sandbox snapshot. Different owners will have isolations on snapshot storage and identity. If not set, snapshot will be created as the default owner.</td>
</tr>
<tr>
    <td><CopyableCode code="parentSnapshot" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the parent SandboxEnvironmentSnapshot. Empty if this is a root Snapshot (the first snapshot from a newly created sandbox). Can be used to reconstruct the whole ancestry tree of snapshots.</td>
</tr>
<tr>
    <td><CopyableCode code="postSnapshotAction" /></td>
    <td><code>string</code></td>
    <td>Optional. Input only. Action to take on the source SandboxEnvironment after the snapshot is taken. This field is only used in CreateSandboxEnvironmentSnapshotRequest and it is not stored in the resource. (POST_SNAPSHOT_ACTION_UNSPECIFIED, RUNNING, PAUSE)</td>
</tr>
<tr>
    <td><CopyableCode code="sizeBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. Output only. Size of the snapshot data in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceSandboxEnvironment" /></td>
    <td><code>string</code></td>
    <td>Required. The resource name of the source SandboxEnvironment this snapshot was taken from.</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. Input only. The TTL for the sandbox environment snapshot. The expiration time is computed: now + TTL.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this SandboxEnvironment was most recently updated.</td>
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
    <td>Identifier. The resource name of the SandboxEnvironmentSnapshot. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/reasoningEngines/&#123;reasoning_engine&#125;/sandboxEnvironmentSnapshots/&#123;sandbox_environment_snapshot&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this SandboxEnvironmentSnapshot was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the SandboxEnvironmentSnapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Timestamp in UTC of when this SandboxEnvironmentSnapshot is considered expired. This is *always* provided on output, regardless of what `expiration` was sent on input.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>Optional. Owner information for this sandbox snapshot. Different owners will have isolations on snapshot storage and identity. If not set, snapshot will be created as the default owner.</td>
</tr>
<tr>
    <td><CopyableCode code="parentSnapshot" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the parent SandboxEnvironmentSnapshot. Empty if this is a root Snapshot (the first snapshot from a newly created sandbox). Can be used to reconstruct the whole ancestry tree of snapshots.</td>
</tr>
<tr>
    <td><CopyableCode code="postSnapshotAction" /></td>
    <td><code>string</code></td>
    <td>Optional. Input only. Action to take on the source SandboxEnvironment after the snapshot is taken. This field is only used in CreateSandboxEnvironmentSnapshotRequest and it is not stored in the resource. (POST_SNAPSHOT_ACTION_UNSPECIFIED, RUNNING, PAUSE)</td>
</tr>
<tr>
    <td><CopyableCode code="sizeBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. Output only. Size of the snapshot data in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceSandboxEnvironment" /></td>
    <td><code>string</code></td>
    <td>Required. The resource name of the source SandboxEnvironment this snapshot was taken from.</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. Input only. The TTL for the sandbox environment snapshot. The expiration time is computed: now + TTL.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this SandboxEnvironment was most recently updated.</td>
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
    <td><a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a>, <a href="#parameter-sandboxEnvironmentSnapshotsId"><code>sandboxEnvironmentSnapshotsId</code></a></td>
    <td></td>
    <td>Gets details of the specific SandboxEnvironmentSnapshot.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists SandboxEnvironmentSnapshots in a given reasoning engine.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a>, <a href="#parameter-sandboxEnvironmentSnapshotsId"><code>sandboxEnvironmentSnapshotsId</code></a></td>
    <td></td>
    <td>Deletes the specific SandboxEnvironmentSnapshot.</td>
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
<tr id="parameter-reasoningEnginesId">
    <td><CopyableCode code="reasoningEnginesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sandboxEnvironmentSnapshotsId">
    <td><CopyableCode code="sandboxEnvironmentSnapshotsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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

Gets details of the specific SandboxEnvironmentSnapshot.

```sql
SELECT
name,
createTime,
displayName,
expireTime,
owner,
parentSnapshot,
postSnapshotAction,
sizeBytes,
sourceSandboxEnvironment,
ttl,
updateTime
FROM google.aiplatform.sandbox_environment_snapshots
WHERE reasoningEnginesId = '{{ reasoningEnginesId }}' -- required
AND sandboxEnvironmentSnapshotsId = '{{ sandboxEnvironmentSnapshotsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists SandboxEnvironmentSnapshots in a given reasoning engine.

```sql
SELECT
name,
createTime,
displayName,
expireTime,
owner,
parentSnapshot,
postSnapshotAction,
sizeBytes,
sourceSandboxEnvironment,
ttl,
updateTime
FROM google.aiplatform.sandbox_environment_snapshots
WHERE reasoningEnginesId = '{{ reasoningEnginesId }}' -- required
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
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

Deletes the specific SandboxEnvironmentSnapshot.

```sql
DELETE FROM google.aiplatform.sandbox_environment_snapshots
WHERE reasoningEnginesId = '{{ reasoningEnginesId }}' --required
AND sandboxEnvironmentSnapshotsId = '{{ sandboxEnvironmentSnapshotsId }}' --required
;
```
</TabItem>
</Tabs>
