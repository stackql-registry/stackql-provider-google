--- 
title: access_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - access_summaries
  - agentidentity
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

Creates, updates, deletes, gets or lists an <code>access_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.agentidentity.access_summaries" /></td></tr>
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
    <td>Output only. Identifier. Name of the AccessSummary</td>
</tr>
<tr>
    <td><CopyableCode code="authProvider" /></td>
    <td><code>string</code></td>
    <td>Output only. The auth_provider that this access summary is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="authProviderType" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of the connector that was used to create this access summary. (AUTH_PROVIDER_TYPE_UNSPECIFIED, AUTH_PROVIDER_TYPE_THREE_LEGGED_OAUTH, AUTH_PROVIDER_TYPE_TWO_LEGGED_OAUTH, AUTH_PROVIDER_TYPE_API_KEY, AUTH_PROVIDER_TYPE_GEMINI_ENTERPRISE)</td>
</tr>
<tr>
    <td><CopyableCode code="firstAccessTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The first time this user has interacted with this workload. Rounded to the previous hour.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="lastAccessTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time this user has interacted with this workload. Rounded to the previous hour.</td>
</tr>
<tr>
    <td><CopyableCode code="purgeTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when this access summary is permanently deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>array</code></td>
    <td>Output only. All scopes that have been used by this user with this workload. The number of scopes is limited to 200.</td>
</tr>
<tr>
    <td><CopyableCode code="tokenUrl" /></td>
    <td><code>string</code></td>
    <td>Output only. The url of the authentication server that was accessed.</td>
</tr>
<tr>
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>Output only. The user_id provided by the workload application for this user. Not verified by Google.</td>
</tr>
<tr>
    <td><CopyableCode code="workloadId" /></td>
    <td><code>string</code></td>
    <td>Output only. The identity bound to the workload that this user interacted with to produce this AccessSummary. Will typically be an agentic spiffe id</td>
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
    <td>Output only. Identifier. Name of the AccessSummary</td>
</tr>
<tr>
    <td><CopyableCode code="authProvider" /></td>
    <td><code>string</code></td>
    <td>Output only. The auth_provider that this access summary is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="authProviderType" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of the connector that was used to create this access summary. (AUTH_PROVIDER_TYPE_UNSPECIFIED, AUTH_PROVIDER_TYPE_THREE_LEGGED_OAUTH, AUTH_PROVIDER_TYPE_TWO_LEGGED_OAUTH, AUTH_PROVIDER_TYPE_API_KEY, AUTH_PROVIDER_TYPE_GEMINI_ENTERPRISE)</td>
</tr>
<tr>
    <td><CopyableCode code="firstAccessTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The first time this user has interacted with this workload. Rounded to the previous hour.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="lastAccessTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time this user has interacted with this workload. Rounded to the previous hour.</td>
</tr>
<tr>
    <td><CopyableCode code="purgeTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when this access summary is permanently deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>array</code></td>
    <td>Output only. All scopes that have been used by this user with this workload. The number of scopes is limited to 200.</td>
</tr>
<tr>
    <td><CopyableCode code="tokenUrl" /></td>
    <td><code>string</code></td>
    <td>Output only. The url of the authentication server that was accessed.</td>
</tr>
<tr>
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>Output only. The user_id provided by the workload application for this user. Not verified by Google.</td>
</tr>
<tr>
    <td><CopyableCode code="workloadId" /></td>
    <td><code>string</code></td>
    <td>Output only. The identity bound to the workload that this user interacted with to produce this AccessSummary. Will typically be an agentic spiffe id</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-accessSummariesId"><code>accessSummariesId</code></a></td>
    <td></td>
    <td>Gets details of a single AccessSummary.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists AccessSummaries in a given project and location. Supported Filters: - `workload_id`: Filter by the SPIFFE ID of the agent. Example: `workload_id="spiffe://example.com/ns/default/sa/my-agent"`</td>
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
<tr id="parameter-accessSummariesId">
    <td><CopyableCode code="accessSummariesId" /></td>
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

Gets details of a single AccessSummary.

```sql
SELECT
name,
authProvider,
authProviderType,
firstAccessTime,
labels,
lastAccessTime,
purgeTime,
scopes,
tokenUrl,
userId,
workloadId
FROM google.agentidentity.access_summaries
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND accessSummariesId = '{{ accessSummariesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists AccessSummaries in a given project and location. Supported Filters: - `workload_id`: Filter by the SPIFFE ID of the agent. Example: `workload_id="spiffe://example.com/ns/default/sa/my-agent"`

```sql
SELECT
name,
authProvider,
authProviderType,
firstAccessTime,
labels,
lastAccessTime,
purgeTime,
scopes,
tokenUrl,
userId,
workloadId
FROM google.agentidentity.access_summaries
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
