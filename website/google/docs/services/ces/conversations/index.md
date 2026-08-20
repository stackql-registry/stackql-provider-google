--- 
title: conversations
hide_title: false
hide_table_of_contents: false
keywords:
  - conversations
  - ces
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

Creates, updates, deletes, gets or lists a <code>conversations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="conversations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.ces.conversations" /></td></tr>
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
    <td>Identifier. The unique identifier of the conversation. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/conversations/&#123;conversation&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="appVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The version of the app used for processing the conversation. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/versions/&#123;version&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="channelType" /></td>
    <td><code>string</code></td>
    <td>DEPRECATED. Please use input_types instead. (CHANNEL_TYPE_UNSPECIFIED, TEXT, AUDIO, MULTIMODAL)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment" /></td>
    <td><code>string</code></td>
    <td>Output only. The deployment of the app used for processing the conversation. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/deployments/&#123;deployment&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the conversation was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="entryAgent" /></td>
    <td><code>string</code></td>
    <td>Output only. The agent that initially handles the conversation. If not specified, the conversation is handled by the root agent. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/agents/&#123;agent&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="inputTypes" /></td>
    <td><code>array</code></td>
    <td>Output only. The input types of the conversation.</td>
</tr>
<tr>
    <td><CopyableCode code="languageCode" /></td>
    <td><code>string</code></td>
    <td>Output only. The language code of the conversation.</td>
</tr>
<tr>
    <td><CopyableCode code="messages" /></td>
    <td><code>array</code></td>
    <td>Deprecated. Use turns instead.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>Output only. Indicate the source of the conversation. (SOURCE_UNSPECIFIED, LIVE, SIMULATOR, EVAL, AGENT_TOOL)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the conversation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="turnCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of turns in the conversation.</td>
</tr>
<tr>
    <td><CopyableCode code="turns" /></td>
    <td><code>array</code></td>
    <td>Required. The turns in the conversation.</td>
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
    <td>Identifier. The unique identifier of the conversation. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/conversations/&#123;conversation&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="appVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The version of the app used for processing the conversation. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/versions/&#123;version&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="channelType" /></td>
    <td><code>string</code></td>
    <td>DEPRECATED. Please use input_types instead. (CHANNEL_TYPE_UNSPECIFIED, TEXT, AUDIO, MULTIMODAL)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment" /></td>
    <td><code>string</code></td>
    <td>Output only. The deployment of the app used for processing the conversation. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/deployments/&#123;deployment&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the conversation was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="entryAgent" /></td>
    <td><code>string</code></td>
    <td>Output only. The agent that initially handles the conversation. If not specified, the conversation is handled by the root agent. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/agents/&#123;agent&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="inputTypes" /></td>
    <td><code>array</code></td>
    <td>Output only. The input types of the conversation.</td>
</tr>
<tr>
    <td><CopyableCode code="languageCode" /></td>
    <td><code>string</code></td>
    <td>Output only. The language code of the conversation.</td>
</tr>
<tr>
    <td><CopyableCode code="messages" /></td>
    <td><code>array</code></td>
    <td>Deprecated. Use turns instead.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>Output only. Indicate the source of the conversation. (SOURCE_UNSPECIFIED, LIVE, SIMULATOR, EVAL, AGENT_TOOL)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the conversation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="turnCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of turns in the conversation.</td>
</tr>
<tr>
    <td><CopyableCode code="turns" /></td>
    <td><code>array</code></td>
    <td>Required. The turns in the conversation.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a></td>
    <td><a href="#parameter-source"><code>source</code></a></td>
    <td>Gets details of the specified conversation.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-source"><code>source</code></a>, <a href="#parameter-sources"><code>sources</code></a></td>
    <td>Lists conversations in the given app.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-conversationsId"><code>conversationsId</code></a></td>
    <td><a href="#parameter-source"><code>source</code></a></td>
    <td>Deletes the specified conversation.</td>
</tr>
<tr>
    <td><a href="#batch_delete"><CopyableCode code="batch_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Batch deletes the specified conversations.</td>
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
<tr id="parameter-appsId">
    <td><CopyableCode code="appsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-conversationsId">
    <td><CopyableCode code="conversationsId" /></td>
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
<tr id="parameter-source">
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sources">
    <td><CopyableCode code="sources" /></td>
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

Gets details of the specified conversation.

```sql
SELECT
name,
appVersion,
channelType,
deployment,
endTime,
entryAgent,
inputTypes,
languageCode,
messages,
source,
startTime,
turnCount,
turns
FROM google.ces.conversations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND appsId = '{{ appsId }}' -- required
AND conversationsId = '{{ conversationsId }}' -- required
AND source = '{{ source }}'
;
```
</TabItem>
<TabItem value="list">

Lists conversations in the given app.

```sql
SELECT
name,
appVersion,
channelType,
deployment,
endTime,
entryAgent,
inputTypes,
languageCode,
messages,
source,
startTime,
turnCount,
turns
FROM google.ces.conversations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND appsId = '{{ appsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND source = '{{ source }}'
AND sources = '{{ sources }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' },
        { label: 'batch_delete', value: 'batch_delete' }
    ]}
>
<TabItem value="delete">

Deletes the specified conversation.

```sql
DELETE FROM google.ces.conversations
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND appsId = '{{ appsId }}' --required
AND conversationsId = '{{ conversationsId }}' --required
AND source = '{{ source }}'
;
```
</TabItem>
<TabItem value="batch_delete">

Batch deletes the specified conversations.

```sql
DELETE FROM google.ces.conversations
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND appsId = '{{ appsId }}' --required
;
```
</TabItem>
</Tabs>
