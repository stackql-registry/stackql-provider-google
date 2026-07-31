--- 
title: events
hide_title: false
hide_table_of_contents: false
keywords:
  - events
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

Creates, updates, deletes, gets or lists an <code>events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
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
    <td>Identifier. The resource name of the event. Format:`projects/&#123;project&#125;/locations/&#123;location&#125;/reasoningEngines/&#123;reasoning_engine&#125;/sessions/&#123;session&#125;/events/&#123;event&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="actions" /></td>
    <td><code>object</code></td>
    <td>Optional. Actions executed by the agent. (id: GoogleCloudAiplatformV1EventActions)</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>string</code></td>
    <td>Required. The name of the agent that sent the event, or user.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>The structured data content of a message. A Content message contains a `role` field, which indicates the producer of the content, and a `parts` field, which contains the multi-part data of the message. (id: GoogleCloudAiplatformV1Content)</td>
</tr>
<tr>
    <td><CopyableCode code="errorCode" /></td>
    <td><code>string</code></td>
    <td>Optional. Error code if the response is an error. Code varies by model.</td>
</tr>
<tr>
    <td><CopyableCode code="errorMessage" /></td>
    <td><code>string</code></td>
    <td>Optional. Error message if the response is an error.</td>
</tr>
<tr>
    <td><CopyableCode code="eventMetadata" /></td>
    <td><code>object</code></td>
    <td>Optional. Metadata relating to this event. (id: GoogleCloudAiplatformV1EventMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="invocationId" /></td>
    <td><code>string</code></td>
    <td>Required. The invocation id of the event, multiple events can have the same invocation id.</td>
</tr>
<tr>
    <td><CopyableCode code="rawEvent" /></td>
    <td><code>object</code></td>
    <td>Optional. Weakly typed raw event data in proto struct format.</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Required. Timestamp when the event was created on client side.</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Events in a given session.</td>
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
<tr id="parameter-sessionsId">
    <td><CopyableCode code="sessionsId" /></td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Lists Events in a given session.

```sql
SELECT
name,
actions,
author,
content,
errorCode,
errorMessage,
eventMetadata,
invocationId,
rawEvent,
timestamp
FROM google.aiplatform.events
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND reasoningEnginesId = '{{ reasoningEnginesId }}' -- required
AND sessionsId = '{{ sessionsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND filter = '{{ filter }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
;
```
</TabItem>
</Tabs>
