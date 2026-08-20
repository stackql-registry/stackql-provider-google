--- 
title: sandbox_environments
hide_title: false
hide_table_of_contents: false
keywords:
  - sandbox_environments
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

Creates, updates, deletes, gets or lists a <code>sandbox_environments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sandbox_environments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.sandbox_environments" /></td></tr>
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
    <td>Identifier. The name of the SandboxEnvironment.</td>
</tr>
<tr>
    <td><CopyableCode code="connectionInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. The connection information of the SandboxEnvironment. (id: GoogleCloudAiplatformV1SandboxEnvironmentConnectionInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this SandboxEnvironment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the SandboxEnvironment.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Timestamp in UTC of when this SandboxEnvironment is considered expired. This is *always* provided on output, regardless of what `expiration` was sent on input.</td>
</tr>
<tr>
    <td><CopyableCode code="latestSandboxEnvironmentSnapshot" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the latest snapshot taken for this SandboxEnvironment.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>Optional. Owner information for this sandbox environment. A Sandbox can only be restored from a snapshot that belongs to the same owner. If not set, sandbox will be created as the default owner.</td>
</tr>
<tr>
    <td><CopyableCode code="sandboxEnvironmentSnapshot" /></td>
    <td><code>string</code></td>
    <td>Optional. The resource name of the SandboxEnvironmentSnapshot to use for creating this SandboxEnvironment. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/reasoningEngines/&#123;reasoning_engine&#125;/sandboxEnvironmentSnapshots/&#123;sandbox_environment_snapshot&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="sandboxEnvironmentTemplate" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the SandboxEnvironmentTemplate specified in the parent Agent Engine resource that this SandboxEnvironment is created from.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>Optional. The configuration of the SandboxEnvironment. (id: GoogleCloudAiplatformV1SandboxEnvironmentSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The runtime state of the SandboxEnvironment. (STATE_UNSPECIFIED, STATE_PROVISIONING, STATE_RUNNING, STATE_DEPROVISIONING, STATE_TERMINATED, STATE_DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. Input only. The TTL for the sandbox environment. The expiration time is computed: now + TTL.</td>
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
    <td>Identifier. The name of the SandboxEnvironment.</td>
</tr>
<tr>
    <td><CopyableCode code="connectionInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. The connection information of the SandboxEnvironment. (id: GoogleCloudAiplatformV1SandboxEnvironmentConnectionInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this SandboxEnvironment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the SandboxEnvironment.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Timestamp in UTC of when this SandboxEnvironment is considered expired. This is *always* provided on output, regardless of what `expiration` was sent on input.</td>
</tr>
<tr>
    <td><CopyableCode code="latestSandboxEnvironmentSnapshot" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the latest snapshot taken for this SandboxEnvironment.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>Optional. Owner information for this sandbox environment. A Sandbox can only be restored from a snapshot that belongs to the same owner. If not set, sandbox will be created as the default owner.</td>
</tr>
<tr>
    <td><CopyableCode code="sandboxEnvironmentSnapshot" /></td>
    <td><code>string</code></td>
    <td>Optional. The resource name of the SandboxEnvironmentSnapshot to use for creating this SandboxEnvironment. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/reasoningEngines/&#123;reasoning_engine&#125;/sandboxEnvironmentSnapshots/&#123;sandbox_environment_snapshot&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="sandboxEnvironmentTemplate" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the SandboxEnvironmentTemplate specified in the parent Agent Engine resource that this SandboxEnvironment is created from.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>Optional. The configuration of the SandboxEnvironment. (id: GoogleCloudAiplatformV1SandboxEnvironmentSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The runtime state of the SandboxEnvironment. (STATE_UNSPECIFIED, STATE_PROVISIONING, STATE_RUNNING, STATE_DEPROVISIONING, STATE_TERMINATED, STATE_DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. Input only. The TTL for the sandbox environment. The expiration time is computed: now + TTL.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a>, <a href="#parameter-sandboxEnvironmentsId"><code>sandboxEnvironmentsId</code></a></td>
    <td></td>
    <td>Gets details of the specific SandboxEnvironment.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists SandboxEnvironments in a given reasoning engine.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a></td>
    <td></td>
    <td>Creates a SandboxEnvironment in a given reasoning engine.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a>, <a href="#parameter-sandboxEnvironmentsId"><code>sandboxEnvironmentsId</code></a></td>
    <td></td>
    <td>Deletes the specific SandboxEnvironment.</td>
</tr>
<tr>
    <td><a href="#execute"><CopyableCode code="execute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a>, <a href="#parameter-sandboxEnvironmentsId"><code>sandboxEnvironmentsId</code></a></td>
    <td></td>
    <td>Executes using a sandbox environment.</td>
</tr>
<tr>
    <td><a href="#pause"><CopyableCode code="pause" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a>, <a href="#parameter-sandboxEnvironmentsId"><code>sandboxEnvironmentsId</code></a></td>
    <td></td>
    <td>Pauses the specific SandboxEnvironment.</td>
</tr>
<tr>
    <td><a href="#resume"><CopyableCode code="resume" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a>, <a href="#parameter-sandboxEnvironmentsId"><code>sandboxEnvironmentsId</code></a></td>
    <td></td>
    <td>Resumes the specific SandboxEnvironment.</td>
</tr>
<tr>
    <td><a href="#snapshot"><CopyableCode code="snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a>, <a href="#parameter-sandboxEnvironmentsId"><code>sandboxEnvironmentsId</code></a></td>
    <td></td>
    <td>Snapshots the specific SandboxEnvironment resource and creates a SandboxEnvironmentSnapshot resource.</td>
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
<tr id="parameter-reasoningEnginesId">
    <td><CopyableCode code="reasoningEnginesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sandboxEnvironmentsId">
    <td><CopyableCode code="sandboxEnvironmentsId" /></td>
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

Gets details of the specific SandboxEnvironment.

```sql
SELECT
name,
connectionInfo,
createTime,
displayName,
expireTime,
latestSandboxEnvironmentSnapshot,
owner,
sandboxEnvironmentSnapshot,
sandboxEnvironmentTemplate,
spec,
state,
ttl,
updateTime
FROM google.aiplatform.sandbox_environments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND reasoningEnginesId = '{{ reasoningEnginesId }}' -- required
AND sandboxEnvironmentsId = '{{ sandboxEnvironmentsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists SandboxEnvironments in a given reasoning engine.

```sql
SELECT
name,
connectionInfo,
createTime,
displayName,
expireTime,
latestSandboxEnvironmentSnapshot,
owner,
sandboxEnvironmentSnapshot,
sandboxEnvironmentTemplate,
spec,
state,
ttl,
updateTime
FROM google.aiplatform.sandbox_environments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND reasoningEnginesId = '{{ reasoningEnginesId }}' -- required
AND filter = '{{ filter }}'
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

Creates a SandboxEnvironment in a given reasoning engine.

```sql
INSERT INTO google.aiplatform.sandbox_environments (
data__displayName,
data__expireTime,
data__name,
data__owner,
data__sandboxEnvironmentSnapshot,
data__sandboxEnvironmentTemplate,
data__spec,
data__ttl,
projectsId,
locationsId,
reasoningEnginesId
)
SELECT 
'{{ displayName }}',
'{{ expireTime }}',
'{{ name }}',
'{{ owner }}',
'{{ sandboxEnvironmentSnapshot }}',
'{{ sandboxEnvironmentTemplate }}',
'{{ spec }}',
'{{ ttl }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ reasoningEnginesId }}'
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
- name: sandbox_environments
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the sandbox_environments resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the sandbox_environments resource.
    - name: reasoningEnginesId
      value: "{{ reasoningEnginesId }}"
      description: Required parameter for the sandbox_environments resource.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. The display name of the SandboxEnvironment.
    - name: expireTime
      value: "{{ expireTime }}"
      description: |
        Optional. Timestamp in UTC of when this SandboxEnvironment is considered expired. This is *always* provided on output, regardless of what \`expiration\` was sent on input.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The name of the SandboxEnvironment.
    - name: owner
      value: "{{ owner }}"
      description: |
        Optional. Owner information for this sandbox environment. A Sandbox can only be restored from a snapshot that belongs to the same owner. If not set, sandbox will be created as the default owner.
    - name: sandboxEnvironmentSnapshot
      value: "{{ sandboxEnvironmentSnapshot }}"
      description: |
        Optional. The resource name of the SandboxEnvironmentSnapshot to use for creating this SandboxEnvironment. Format: \`projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/sandboxEnvironmentSnapshots/{sandbox_environment_snapshot}\`
    - name: sandboxEnvironmentTemplate
      value: "{{ sandboxEnvironmentTemplate }}"
      description: |
        Optional. The name of the SandboxEnvironmentTemplate specified in the parent Agent Engine resource that this SandboxEnvironment is created from.
    - name: spec
      description: |
        Optional. The configuration of the SandboxEnvironment.
      value:
        codeExecutionEnvironment:
          codeLanguage: "{{ codeLanguage }}"
          machineConfig: "{{ machineConfig }}"
    - name: ttl
      value: "{{ ttl }}"
      description: |
        Optional. Input only. The TTL for the sandbox environment. The expiration time is computed: now + TTL.
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

Deletes the specific SandboxEnvironment.

```sql
DELETE FROM google.aiplatform.sandbox_environments
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND reasoningEnginesId = '{{ reasoningEnginesId }}' --required
AND sandboxEnvironmentsId = '{{ sandboxEnvironmentsId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="execute"
    values={[
        { label: 'execute', value: 'execute' },
        { label: 'pause', value: 'pause' },
        { label: 'resume', value: 'resume' },
        { label: 'snapshot', value: 'snapshot' }
    ]}
>
<TabItem value="execute">

Executes using a sandbox environment.

```sql
EXEC google.aiplatform.sandbox_environments.execute 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@reasoningEnginesId='{{ reasoningEnginesId }}' --required, 
@sandboxEnvironmentsId='{{ sandboxEnvironmentsId }}' --required 
@@json=
'{
"inputs": "{{ inputs }}"
}'
;
```
</TabItem>
<TabItem value="pause">

Pauses the specific SandboxEnvironment.

```sql
EXEC google.aiplatform.sandbox_environments.pause 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@reasoningEnginesId='{{ reasoningEnginesId }}' --required, 
@sandboxEnvironmentsId='{{ sandboxEnvironmentsId }}' --required
;
```
</TabItem>
<TabItem value="resume">

Resumes the specific SandboxEnvironment.

```sql
EXEC google.aiplatform.sandbox_environments.resume 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@reasoningEnginesId='{{ reasoningEnginesId }}' --required, 
@sandboxEnvironmentsId='{{ sandboxEnvironmentsId }}' --required
;
```
</TabItem>
<TabItem value="snapshot">

Snapshots the specific SandboxEnvironment resource and creates a SandboxEnvironmentSnapshot resource.

```sql
EXEC google.aiplatform.sandbox_environments.snapshot 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@reasoningEnginesId='{{ reasoningEnginesId }}' --required, 
@sandboxEnvironmentsId='{{ sandboxEnvironmentsId }}' --required 
@@json=
'{
"displayName": "{{ displayName }}", 
"expireTime": "{{ expireTime }}", 
"name": "{{ name }}", 
"owner": "{{ owner }}", 
"postSnapshotAction": "{{ postSnapshotAction }}", 
"sourceSandboxEnvironment": "{{ sourceSandboxEnvironment }}", 
"ttl": "{{ ttl }}"
}'
;
```
</TabItem>
</Tabs>
