--- 
title: agents
hide_title: false
hide_table_of_contents: false
keywords:
  - agents
  - agentregistry
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

Creates, updates, deletes, gets or lists an <code>agents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.agentregistry.agents" /></td></tr>
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
    <td>Identifier. The resource name of an Agent. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/agents/&#123;agent&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="agentId" /></td>
    <td><code>string</code></td>
    <td>Output only. A stable, globally unique identifier for agents.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Output only. Attributes of the Agent. Valid values: * `agentregistry.googleapis.com/system/Framework`: &#123;"framework": "google-adk"&#125; - the agent framework used to develop the Agent. Example values: "google-adk", "langchain", "custom". * `agentregistry.googleapis.com/system/RuntimeIdentity`: &#123;"principal": "principal://..."&#125; - the runtime identity associated with the Agent. * `agentregistry.googleapis.com/system/RuntimeReference`: &#123;"uri": "//..."&#125; - the URI of the underlying resource hosting the Agent, for example, the Reasoning Engine URI.</td>
</tr>
<tr>
    <td><CopyableCode code="card" /></td>
    <td><code>object</code></td>
    <td>Output only. Full Agent Card payload, when available. (id: Card)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Output only. The description of the Agent, often obtained from the A2A Agent Card. Empty if Agent Card has no description.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. The display name of the agent, often obtained from the A2A Agent Card.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Output only. The location where agent is hosted. The value is defined by the hosting environment (i.e. cloud provider).</td>
</tr>
<tr>
    <td><CopyableCode code="protocols" /></td>
    <td><code>array</code></td>
    <td>Output only. The connection details for the Agent.</td>
</tr>
<tr>
    <td><CopyableCode code="skills" /></td>
    <td><code>array</code></td>
    <td>Output only. Skills the agent possesses, often obtained from the A2A Agent Card.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. A universally unique identifier for the Agent.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update time.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Output only. The version of the Agent, often obtained from the A2A Agent Card. Empty if Agent Card has no version or agent is not an A2A Agent.</td>
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
    <td>Identifier. The resource name of an Agent. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/agents/&#123;agent&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="agentId" /></td>
    <td><code>string</code></td>
    <td>Output only. A stable, globally unique identifier for agents.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Output only. Attributes of the Agent. Valid values: * `agentregistry.googleapis.com/system/Framework`: &#123;"framework": "google-adk"&#125; - the agent framework used to develop the Agent. Example values: "google-adk", "langchain", "custom". * `agentregistry.googleapis.com/system/RuntimeIdentity`: &#123;"principal": "principal://..."&#125; - the runtime identity associated with the Agent. * `agentregistry.googleapis.com/system/RuntimeReference`: &#123;"uri": "//..."&#125; - the URI of the underlying resource hosting the Agent, for example, the Reasoning Engine URI.</td>
</tr>
<tr>
    <td><CopyableCode code="card" /></td>
    <td><code>object</code></td>
    <td>Output only. Full Agent Card payload, when available. (id: Card)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Output only. The description of the Agent, often obtained from the A2A Agent Card. Empty if Agent Card has no description.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. The display name of the agent, often obtained from the A2A Agent Card.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Output only. The location where agent is hosted. The value is defined by the hosting environment (i.e. cloud provider).</td>
</tr>
<tr>
    <td><CopyableCode code="protocols" /></td>
    <td><code>array</code></td>
    <td>Output only. The connection details for the Agent.</td>
</tr>
<tr>
    <td><CopyableCode code="skills" /></td>
    <td><code>array</code></td>
    <td>Output only. Skills the agent possesses, often obtained from the A2A Agent Card.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. A universally unique identifier for the Agent.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update time.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Output only. The version of the Agent, often obtained from the A2A Agent Card. Empty if Agent Card has no version or agent is not an A2A Agent.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td>Gets details of a single Agent.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Agents in a given project and location.</td>
</tr>
<tr>
    <td><a href="#search"><CopyableCode code="search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Searches Agents in a given project and location.</td>
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
<tr id="parameter-agentsId">
    <td><CopyableCode code="agentsId" /></td>
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

Gets details of a single Agent.

```sql
SELECT
name,
agentId,
attributes,
card,
createTime,
description,
displayName,
location,
protocols,
skills,
uid,
updateTime,
version
FROM google.agentregistry.agents
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Agents in a given project and location.

```sql
SELECT
name,
agentId,
attributes,
card,
createTime,
description,
displayName,
location,
protocols,
skills,
uid,
updateTime,
version
FROM google.agentregistry.agents
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="search"
    values={[
        { label: 'search', value: 'search' }
    ]}
>
<TabItem value="search">

Searches Agents in a given project and location.

```sql
EXEC google.agentregistry.agents.search 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"pageSize": {{ pageSize }}, 
"searchString": "{{ searchString }}", 
"pageToken": "{{ pageToken }}"
}'
;
```
</TabItem>
</Tabs>
