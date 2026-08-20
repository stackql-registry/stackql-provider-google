--- 
title: discovery_clients
hide_title: false
hide_table_of_contents: false
keywords:
  - discovery_clients
  - migrationcenter
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

Creates, updates, deletes, gets or lists a <code>discovery_clients</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="discovery_clients" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.migrationcenter.discovery_clients" /></td></tr>
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
    <td>Output only. Identifier. Full name of this discovery client.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the discovery client was first created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Free text description. Maximum length is 1000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Free text display name. Maximum length is 63 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. Errors affecting client functionality.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Client expiration time in UTC. If specified, the backend will not accept new frames after this time.</td>
</tr>
<tr>
    <td><CopyableCode code="heartbeatTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last heartbeat time. Healthy clients are expected to send heartbeats regularly (normally every few minutes).</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>Required. Service account used by the discovery client for various operation.</td>
</tr>
<tr>
    <td><CopyableCode code="signalsEndpoint" /></td>
    <td><code>string</code></td>
    <td>Output only. This field is intended for internal use.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. Full name of the source object associated with this discovery client.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the discovery client. (STATE_UNSPECIFIED, ACTIVE, OFFLINE, DEGRADED, EXPIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. Input only. Client time-to-live. If specified, the backend will not accept new frames after this time. This field is input only. The derived expiration time is provided as output through the `expire_time` field.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the discovery client was last updated. This value is not updated by heartbeats, to view the last heartbeat time please refer to the `heartbeat_time` field.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Output only. Client version, as reported in recent heartbeat.</td>
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
    <td>Output only. Identifier. Full name of this discovery client.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the discovery client was first created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Free text description. Maximum length is 1000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Free text display name. Maximum length is 63 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. Errors affecting client functionality.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Client expiration time in UTC. If specified, the backend will not accept new frames after this time.</td>
</tr>
<tr>
    <td><CopyableCode code="heartbeatTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last heartbeat time. Healthy clients are expected to send heartbeats regularly (normally every few minutes).</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>Required. Service account used by the discovery client for various operation.</td>
</tr>
<tr>
    <td><CopyableCode code="signalsEndpoint" /></td>
    <td><code>string</code></td>
    <td>Output only. This field is intended for internal use.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. Full name of the source object associated with this discovery client.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the discovery client. (STATE_UNSPECIFIED, ACTIVE, OFFLINE, DEGRADED, EXPIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. Input only. Client time-to-live. If specified, the backend will not accept new frames after this time. This field is input only. The derived expiration time is provided as output through the `expire_time` field.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the discovery client was last updated. This value is not updated by heartbeats, to view the last heartbeat time please refer to the `heartbeat_time` field.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Output only. Client version, as reported in recent heartbeat.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-discoveryClientsId"><code>discoveryClientsId</code></a></td>
    <td></td>
    <td>Gets the details of a discovery client.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all the discovery clients in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-discoveryClientId"><code>discoveryClientId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new discovery client.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-discoveryClientsId"><code>discoveryClientsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a discovery client.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-discoveryClientsId"><code>discoveryClientsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a discovery client.</td>
</tr>
<tr>
    <td><a href="#send_heartbeat"><CopyableCode code="send_heartbeat" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-discoveryClientsId"><code>discoveryClientsId</code></a></td>
    <td></td>
    <td>Sends a discovery client heartbeat. Healthy clients are expected to send heartbeats regularly (normally every few minutes).</td>
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
<tr id="parameter-discoveryClientsId">
    <td><CopyableCode code="discoveryClientsId" /></td>
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
<tr id="parameter-discoveryClientId">
    <td><CopyableCode code="discoveryClientId" /></td>
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
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets the details of a discovery client.

```sql
SELECT
name,
createTime,
description,
displayName,
errors,
expireTime,
heartbeatTime,
labels,
serviceAccount,
signalsEndpoint,
source,
state,
ttl,
updateTime,
version
FROM google.migrationcenter.discovery_clients
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND discoveryClientsId = '{{ discoveryClientsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists all the discovery clients in a given project and location.

```sql
SELECT
name,
createTime,
description,
displayName,
errors,
expireTime,
heartbeatTime,
labels,
serviceAccount,
signalsEndpoint,
source,
state,
ttl,
updateTime,
version
FROM google.migrationcenter.discovery_clients
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

Creates a new discovery client.

```sql
INSERT INTO google.migrationcenter.discovery_clients (
data__description,
data__displayName,
data__expireTime,
data__labels,
data__serviceAccount,
data__source,
data__ttl,
projectsId,
locationsId,
discoveryClientId,
requestId
)
SELECT 
'{{ description }}',
'{{ displayName }}',
'{{ expireTime }}',
'{{ labels }}',
'{{ serviceAccount }}',
'{{ source }}',
'{{ ttl }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ discoveryClientId }}',
'{{ requestId }}'
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
- name: discovery_clients
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the discovery_clients resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the discovery_clients resource.
    - name: description
      value: "{{ description }}"
      description: |
        Optional. Free text description. Maximum length is 1000 characters.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Optional. Free text display name. Maximum length is 63 characters.
    - name: expireTime
      value: "{{ expireTime }}"
      description: |
        Optional. Client expiration time in UTC. If specified, the backend will not accept new frames after this time.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Labels as key value pairs.
    - name: serviceAccount
      value: "{{ serviceAccount }}"
      description: |
        Required. Service account used by the discovery client for various operation.
    - name: source
      value: "{{ source }}"
      description: |
        Required. Immutable. Full name of the source object associated with this discovery client.
    - name: ttl
      value: "{{ ttl }}"
      description: |
        Optional. Input only. Client time-to-live. If specified, the backend will not accept new frames after this time. This field is input only. The derived expiration time is provided as output through the \`expire_time\` field.
    - name: discoveryClientId
      value: "{{ discoveryClientId }}"
    - name: requestId
      value: "{{ requestId }}"
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

Updates a discovery client.

```sql
UPDATE google.migrationcenter.discovery_clients
SET 
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__expireTime = '{{ expireTime }}',
data__labels = '{{ labels }}',
data__serviceAccount = '{{ serviceAccount }}',
data__source = '{{ source }}',
data__ttl = '{{ ttl }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND discoveryClientsId = '{{ discoveryClientsId }}' --required
AND requestId = '{{ requestId}}'
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

Deletes a discovery client.

```sql
DELETE FROM google.migrationcenter.discovery_clients
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND discoveryClientsId = '{{ discoveryClientsId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="send_heartbeat"
    values={[
        { label: 'send_heartbeat', value: 'send_heartbeat' }
    ]}
>
<TabItem value="send_heartbeat">

Sends a discovery client heartbeat. Healthy clients are expected to send heartbeats regularly (normally every few minutes).

```sql
EXEC google.migrationcenter.discovery_clients.send_heartbeat 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@discoveryClientsId='{{ discoveryClientsId }}' --required 
@@json=
'{
"errors": "{{ errors }}", 
"version": "{{ version }}"
}'
;
```
</TabItem>
</Tabs>
