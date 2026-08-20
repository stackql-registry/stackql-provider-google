--- 
title: agents
hide_title: false
hide_table_of_contents: false
keywords:
  - agents
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

Creates, updates, deletes, gets or lists an <code>agents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.ces.agents" /></td></tr>
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
    <td>Identifier. The unique identifier of the agent. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/agents/&#123;agent&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="afterAgentCallbacks" /></td>
    <td><code>array</code></td>
    <td>Optional. The callbacks to execute after the agent is called. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped.</td>
</tr>
<tr>
    <td><CopyableCode code="afterModelCallbacks" /></td>
    <td><code>array</code></td>
    <td>Optional. The callbacks to execute after the model is called. If there are multiple calls to the model, the callback will be executed multiple times. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped.</td>
</tr>
<tr>
    <td><CopyableCode code="afterToolCallbacks" /></td>
    <td><code>array</code></td>
    <td>Optional. The callbacks to execute after the tool is invoked. If there are multiple tool invocations, the callback will be executed multiple times. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped.</td>
</tr>
<tr>
    <td><CopyableCode code="beforeAgentCallbacks" /></td>
    <td><code>array</code></td>
    <td>Optional. The callbacks to execute before the agent is called. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped.</td>
</tr>
<tr>
    <td><CopyableCode code="beforeModelCallbacks" /></td>
    <td><code>array</code></td>
    <td>Optional. The callbacks to execute before the model is called. If there are multiple calls to the model, the callback will be executed multiple times. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped.</td>
</tr>
<tr>
    <td><CopyableCode code="beforeToolCallbacks" /></td>
    <td><code>array</code></td>
    <td>Optional. The callbacks to execute before the tool is invoked. If there are multiple tool invocations, the callback will be executed multiple times. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped.</td>
</tr>
<tr>
    <td><CopyableCode code="childAgents" /></td>
    <td><code>array</code></td>
    <td>Optional. List of child agents in the agent tree. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/agents/&#123;agent&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the agent was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Human-readable description of the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Display name of the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.</td>
</tr>
<tr>
    <td><CopyableCode code="generatedSummary" /></td>
    <td><code>string</code></td>
    <td>Output only. If the agent is generated by the LLM assistant, this field contains a descriptive summary of the generation.</td>
</tr>
<tr>
    <td><CopyableCode code="guardrails" /></td>
    <td><code>array</code></td>
    <td>Optional. List of guardrails for the agent. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/guardrails/&#123;guardrail&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="instruction" /></td>
    <td><code>string</code></td>
    <td>Optional. Instructions for the LLM model to guide the agent's behavior.</td>
</tr>
<tr>
    <td><CopyableCode code="llmAgent" /></td>
    <td><code>object</code></td>
    <td>Optional. The default agent type. (id: AgentLlmAgent)</td>
</tr>
<tr>
    <td><CopyableCode code="modelSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Configurations for the LLM model. (id: ModelSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="remoteDialogflowAgent" /></td>
    <td><code>object</code></td>
    <td>Optional. The remote [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents) agent to be used for the agent execution. If this field is set, all other agent level properties will be ignored. Note: If the Dialogflow agent is in a different project from the app, you should grant `roles/dialogflow.client` to the CES service agent `service-@gcp-sa-ces.iam.gserviceaccount.com`. (id: AgentRemoteDialogflowAgent)</td>
</tr>
<tr>
    <td><CopyableCode code="tools" /></td>
    <td><code>array</code></td>
    <td>Optional. List of available tools for the agent. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/tools/&#123;tool&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="toolsets" /></td>
    <td><code>array</code></td>
    <td>Optional. List of toolsets for the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="transferRules" /></td>
    <td><code>array</code></td>
    <td>Optional. Agent transfer rules. If multiple rules match, the first one in the list will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the agent was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="validationErrors" /></td>
    <td><code>array</code></td>
    <td>Output only. Misconfigurations or errors in the agent that may affect agent quality.</td>
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
    <td>Identifier. The unique identifier of the agent. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/agents/&#123;agent&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="afterAgentCallbacks" /></td>
    <td><code>array</code></td>
    <td>Optional. The callbacks to execute after the agent is called. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped.</td>
</tr>
<tr>
    <td><CopyableCode code="afterModelCallbacks" /></td>
    <td><code>array</code></td>
    <td>Optional. The callbacks to execute after the model is called. If there are multiple calls to the model, the callback will be executed multiple times. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped.</td>
</tr>
<tr>
    <td><CopyableCode code="afterToolCallbacks" /></td>
    <td><code>array</code></td>
    <td>Optional. The callbacks to execute after the tool is invoked. If there are multiple tool invocations, the callback will be executed multiple times. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped.</td>
</tr>
<tr>
    <td><CopyableCode code="beforeAgentCallbacks" /></td>
    <td><code>array</code></td>
    <td>Optional. The callbacks to execute before the agent is called. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped.</td>
</tr>
<tr>
    <td><CopyableCode code="beforeModelCallbacks" /></td>
    <td><code>array</code></td>
    <td>Optional. The callbacks to execute before the model is called. If there are multiple calls to the model, the callback will be executed multiple times. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped.</td>
</tr>
<tr>
    <td><CopyableCode code="beforeToolCallbacks" /></td>
    <td><code>array</code></td>
    <td>Optional. The callbacks to execute before the tool is invoked. If there are multiple tool invocations, the callback will be executed multiple times. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped.</td>
</tr>
<tr>
    <td><CopyableCode code="childAgents" /></td>
    <td><code>array</code></td>
    <td>Optional. List of child agents in the agent tree. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/agents/&#123;agent&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the agent was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Human-readable description of the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Display name of the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.</td>
</tr>
<tr>
    <td><CopyableCode code="generatedSummary" /></td>
    <td><code>string</code></td>
    <td>Output only. If the agent is generated by the LLM assistant, this field contains a descriptive summary of the generation.</td>
</tr>
<tr>
    <td><CopyableCode code="guardrails" /></td>
    <td><code>array</code></td>
    <td>Optional. List of guardrails for the agent. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/guardrails/&#123;guardrail&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="instruction" /></td>
    <td><code>string</code></td>
    <td>Optional. Instructions for the LLM model to guide the agent's behavior.</td>
</tr>
<tr>
    <td><CopyableCode code="llmAgent" /></td>
    <td><code>object</code></td>
    <td>Optional. The default agent type. (id: AgentLlmAgent)</td>
</tr>
<tr>
    <td><CopyableCode code="modelSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Configurations for the LLM model. (id: ModelSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="remoteDialogflowAgent" /></td>
    <td><code>object</code></td>
    <td>Optional. The remote [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents) agent to be used for the agent execution. If this field is set, all other agent level properties will be ignored. Note: If the Dialogflow agent is in a different project from the app, you should grant `roles/dialogflow.client` to the CES service agent `service-@gcp-sa-ces.iam.gserviceaccount.com`. (id: AgentRemoteDialogflowAgent)</td>
</tr>
<tr>
    <td><CopyableCode code="tools" /></td>
    <td><code>array</code></td>
    <td>Optional. List of available tools for the agent. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/tools/&#123;tool&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="toolsets" /></td>
    <td><code>array</code></td>
    <td>Optional. List of toolsets for the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="transferRules" /></td>
    <td><code>array</code></td>
    <td>Optional. Agent transfer rules. If multiple rules match, the first one in the list will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the agent was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="validationErrors" /></td>
    <td><code>array</code></td>
    <td>Output only. Misconfigurations or errors in the agent that may affect agent quality.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td>Gets details of the specified agent.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists agents in the given app.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td><a href="#parameter-agentId"><code>agentId</code></a></td>
    <td>Creates a new agent in the given app.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified agent.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes the specified agent.</td>
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
<tr id="parameter-appsId">
    <td><CopyableCode code="appsId" /></td>
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
<tr id="parameter-agentId">
    <td><CopyableCode code="agentId" /></td>
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
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
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

Gets details of the specified agent.

```sql
SELECT
name,
afterAgentCallbacks,
afterModelCallbacks,
afterToolCallbacks,
beforeAgentCallbacks,
beforeModelCallbacks,
beforeToolCallbacks,
childAgents,
createTime,
description,
displayName,
etag,
generatedSummary,
guardrails,
instruction,
llmAgent,
modelSettings,
remoteDialogflowAgent,
tools,
toolsets,
transferRules,
updateTime,
validationErrors
FROM google.ces.agents
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND appsId = '{{ appsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists agents in the given app.

```sql
SELECT
name,
afterAgentCallbacks,
afterModelCallbacks,
afterToolCallbacks,
beforeAgentCallbacks,
beforeModelCallbacks,
beforeToolCallbacks,
childAgents,
createTime,
description,
displayName,
etag,
generatedSummary,
guardrails,
instruction,
llmAgent,
modelSettings,
remoteDialogflowAgent,
tools,
toolsets,
transferRules,
updateTime,
validationErrors
FROM google.ces.agents
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND appsId = '{{ appsId }}' -- required
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

Creates a new agent in the given app.

```sql
INSERT INTO google.ces.agents (
data__afterAgentCallbacks,
data__afterModelCallbacks,
data__afterToolCallbacks,
data__beforeAgentCallbacks,
data__beforeModelCallbacks,
data__beforeToolCallbacks,
data__childAgents,
data__description,
data__displayName,
data__etag,
data__guardrails,
data__instruction,
data__llmAgent,
data__modelSettings,
data__name,
data__remoteDialogflowAgent,
data__tools,
data__toolsets,
data__transferRules,
projectsId,
locationsId,
appsId,
agentId
)
SELECT 
'{{ afterAgentCallbacks }}',
'{{ afterModelCallbacks }}',
'{{ afterToolCallbacks }}',
'{{ beforeAgentCallbacks }}',
'{{ beforeModelCallbacks }}',
'{{ beforeToolCallbacks }}',
'{{ childAgents }}',
'{{ description }}',
'{{ displayName }}',
'{{ etag }}',
'{{ guardrails }}',
'{{ instruction }}',
'{{ llmAgent }}',
'{{ modelSettings }}',
'{{ name }}',
'{{ remoteDialogflowAgent }}',
'{{ tools }}',
'{{ toolsets }}',
'{{ transferRules }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ appsId }}',
'{{ agentId }}'
RETURNING
name,
afterAgentCallbacks,
afterModelCallbacks,
afterToolCallbacks,
beforeAgentCallbacks,
beforeModelCallbacks,
beforeToolCallbacks,
childAgents,
createTime,
description,
displayName,
etag,
generatedSummary,
guardrails,
instruction,
llmAgent,
modelSettings,
remoteDialogflowAgent,
tools,
toolsets,
transferRules,
updateTime,
validationErrors
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: agents
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the agents resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the agents resource.
    - name: appsId
      value: "{{ appsId }}"
      description: Required parameter for the agents resource.
    - name: afterAgentCallbacks
      description: |
        Optional. The callbacks to execute after the agent is called. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped.
      value:
        - description: "{{ description }}"
          disabled: {{ disabled }}
          proactiveExecutionEnabled: {{ proactiveExecutionEnabled }}
          pythonCode: "{{ pythonCode }}"
    - name: afterModelCallbacks
      description: |
        Optional. The callbacks to execute after the model is called. If there are multiple calls to the model, the callback will be executed multiple times. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped.
      value:
        - description: "{{ description }}"
          disabled: {{ disabled }}
          proactiveExecutionEnabled: {{ proactiveExecutionEnabled }}
          pythonCode: "{{ pythonCode }}"
    - name: afterToolCallbacks
      description: |
        Optional. The callbacks to execute after the tool is invoked. If there are multiple tool invocations, the callback will be executed multiple times. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped.
      value:
        - description: "{{ description }}"
          disabled: {{ disabled }}
          proactiveExecutionEnabled: {{ proactiveExecutionEnabled }}
          pythonCode: "{{ pythonCode }}"
    - name: beforeAgentCallbacks
      description: |
        Optional. The callbacks to execute before the agent is called. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped.
      value:
        - description: "{{ description }}"
          disabled: {{ disabled }}
          proactiveExecutionEnabled: {{ proactiveExecutionEnabled }}
          pythonCode: "{{ pythonCode }}"
    - name: beforeModelCallbacks
      description: |
        Optional. The callbacks to execute before the model is called. If there are multiple calls to the model, the callback will be executed multiple times. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped.
      value:
        - description: "{{ description }}"
          disabled: {{ disabled }}
          proactiveExecutionEnabled: {{ proactiveExecutionEnabled }}
          pythonCode: "{{ pythonCode }}"
    - name: beforeToolCallbacks
      description: |
        Optional. The callbacks to execute before the tool is invoked. If there are multiple tool invocations, the callback will be executed multiple times. The provided callbacks are executed sequentially in the exact order they are given in the list. If a callback returns an overridden response, execution stops and any remaining callbacks are skipped.
      value:
        - description: "{{ description }}"
          disabled: {{ disabled }}
          proactiveExecutionEnabled: {{ proactiveExecutionEnabled }}
          pythonCode: "{{ pythonCode }}"
    - name: childAgents
      value:
        - "{{ childAgents }}"
      description: |
        Optional. List of child agents in the agent tree. Format: \`projects/{project}/locations/{location}/apps/{app}/agents/{agent}\`
    - name: description
      value: "{{ description }}"
      description: |
        Optional. Human-readable description of the agent.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. Display name of the agent.
    - name: etag
      value: "{{ etag }}"
      description: |
        Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.
    - name: guardrails
      value:
        - "{{ guardrails }}"
      description: |
        Optional. List of guardrails for the agent. Format: \`projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}\`
    - name: instruction
      value: "{{ instruction }}"
      description: |
        Optional. Instructions for the LLM model to guide the agent's behavior.
    - name: llmAgent
      value: "{{ llmAgent }}"
      description: |
        Optional. The default agent type.
    - name: modelSettings
      description: |
        Optional. Configurations for the LLM model.
      value:
        model: "{{ model }}"
        temperature: {{ temperature }}
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The unique identifier of the agent. Format: \`projects/{project}/locations/{location}/apps/{app}/agents/{agent}\`
    - name: remoteDialogflowAgent
      description: |
        Optional. The remote [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents) agent to be used for the agent execution. If this field is set, all other agent level properties will be ignored. Note: If the Dialogflow agent is in a different project from the app, you should grant \`roles/dialogflow.client\` to the CES service agent \`service-@gcp-sa-ces.iam.gserviceaccount.com\`.
      value:
        agent: "{{ agent }}"
        environmentId: "{{ environmentId }}"
        flowId: "{{ flowId }}"
        inputVariableMapping: "{{ inputVariableMapping }}"
        languageCodeVariable: "{{ languageCodeVariable }}"
        outputVariableMapping: "{{ outputVariableMapping }}"
        respectResponseInterruptionSettings: {{ respectResponseInterruptionSettings }}
    - name: tools
      value:
        - "{{ tools }}"
      description: |
        Optional. List of available tools for the agent. Format: \`projects/{project}/locations/{location}/apps/{app}/tools/{tool}\`
    - name: toolsets
      description: |
        Optional. List of toolsets for the agent.
      value:
        - toolIds: "{{ toolIds }}"
          toolset: "{{ toolset }}"
    - name: transferRules
      description: |
        Optional. Agent transfer rules. If multiple rules match, the first one in the list will be used.
      value:
        - childAgent: "{{ childAgent }}"
          deterministicTransfer:
            expressionCondition:
              expression: "{{ expression }}"
            pythonCodeCondition:
              pythonCode: "{{ pythonCode }}"
          direction: "{{ direction }}"
          disablePlannerTransfer:
            expressionCondition:
              expression: "{{ expression }}"
    - name: agentId
      value: "{{ agentId }}"
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

Updates the specified agent.

```sql
UPDATE google.ces.agents
SET 
data__afterAgentCallbacks = '{{ afterAgentCallbacks }}',
data__afterModelCallbacks = '{{ afterModelCallbacks }}',
data__afterToolCallbacks = '{{ afterToolCallbacks }}',
data__beforeAgentCallbacks = '{{ beforeAgentCallbacks }}',
data__beforeModelCallbacks = '{{ beforeModelCallbacks }}',
data__beforeToolCallbacks = '{{ beforeToolCallbacks }}',
data__childAgents = '{{ childAgents }}',
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__etag = '{{ etag }}',
data__guardrails = '{{ guardrails }}',
data__instruction = '{{ instruction }}',
data__llmAgent = '{{ llmAgent }}',
data__modelSettings = '{{ modelSettings }}',
data__name = '{{ name }}',
data__remoteDialogflowAgent = '{{ remoteDialogflowAgent }}',
data__tools = '{{ tools }}',
data__toolsets = '{{ toolsets }}',
data__transferRules = '{{ transferRules }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND appsId = '{{ appsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
afterAgentCallbacks,
afterModelCallbacks,
afterToolCallbacks,
beforeAgentCallbacks,
beforeModelCallbacks,
beforeToolCallbacks,
childAgents,
createTime,
description,
displayName,
etag,
generatedSummary,
guardrails,
instruction,
llmAgent,
modelSettings,
remoteDialogflowAgent,
tools,
toolsets,
transferRules,
updateTime,
validationErrors;
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

Deletes the specified agent.

```sql
DELETE FROM google.ces.agents
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND appsId = '{{ appsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND etag = '{{ etag }}'
AND force = '{{ force }}'
;
```
</TabItem>
</Tabs>
