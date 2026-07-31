--- 
title: agents
hide_title: false
hide_table_of_contents: false
keywords:
  - agents
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

Creates, updates, deletes, gets or lists an <code>agents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.agents" /></td></tr>
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
    <td><code>string</code></td>
    <td>Immutable. The user-specified ID for the agent. This ID becomes the final component of the agent resource name. If not provided, Vertex AI will generate a value for this ID. The ID can be up to 63 characters and must match the regular expression `[a-z]([a-z0-9-]&#123;0,61&#125;[a-z0-9])?`.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Identifier. The resource name of the agent. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/agents/&#123;agent&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="base_agent" /></td>
    <td><code>string</code></td>
    <td>Required. The base agent for the agent. Supported values: * `antigravity-preview-05-2026`</td>
</tr>
<tr>
    <td><CopyableCode code="base_environment" /></td>
    <td><code>any</code></td>
    <td>Optional. The base environment configuration for the agent. Valid types: * A string value for the environment ID, or `remote` for the default. * A struct value for the `environment_config`.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the agent was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Optional. The metadata for the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="object" /></td>
    <td><code>string</code></td>
    <td>Output only. The object type of the resource. For agents, the value is `agent`.</td>
</tr>
<tr>
    <td><CopyableCode code="system_instruction" /></td>
    <td><code>string</code></td>
    <td>Optional. The instructions for the agent to follow. These instructions are passed to the LLM as a system instruction.</td>
</tr>
<tr>
    <td><CopyableCode code="tools" /></td>
    <td><code>array</code></td>
    <td>Optional. The tools available to the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the agent was last updated.</td>
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
    <td>Immutable. The user-specified ID for the agent. This ID becomes the final component of the agent resource name. If not provided, Vertex AI will generate a value for this ID. The ID can be up to 63 characters and must match the regular expression `[a-z]([a-z0-9-]&#123;0,61&#125;[a-z0-9])?`.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Identifier. The resource name of the agent. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/agents/&#123;agent&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="base_agent" /></td>
    <td><code>string</code></td>
    <td>Required. The base agent for the agent. Supported values: * `antigravity-preview-05-2026`</td>
</tr>
<tr>
    <td><CopyableCode code="base_environment" /></td>
    <td><code>any</code></td>
    <td>Optional. The base environment configuration for the agent. Valid types: * A string value for the environment ID, or `remote` for the default. * A struct value for the `environment_config`.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the agent was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Optional. The metadata for the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="object" /></td>
    <td><code>string</code></td>
    <td>Output only. The object type of the resource. For agents, the value is `agent`.</td>
</tr>
<tr>
    <td><CopyableCode code="system_instruction" /></td>
    <td><code>string</code></td>
    <td>Optional. The instructions for the agent to follow. These instructions are passed to the LLM as a system instruction.</td>
</tr>
<tr>
    <td><CopyableCode code="tools" /></td>
    <td><code>array</code></td>
    <td>Optional. The tools available to the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the agent was last updated.</td>
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
    <td>Retrieves an agent.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists agents in a location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates an agent.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an agent.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td>Deletes an agent.</td>
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

Retrieves an agent.

```sql
SELECT
id,
name,
base_agent,
base_environment,
created,
description,
metadata,
object,
system_instruction,
tools,
updated
FROM google.aiplatform.agents
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists agents in a location.

```sql
SELECT
id,
name,
base_agent,
base_environment,
created,
description,
metadata,
object,
system_instruction,
tools,
updated
FROM google.aiplatform.agents
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
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

Creates an agent.

```sql
INSERT INTO google.aiplatform.agents (
data__description,
data__name,
data__metadata,
data__id,
data__base_environment,
data__tools,
data__base_agent,
data__system_instruction,
projectsId,
locationsId
)
SELECT 
'{{ description }}',
'{{ name }}',
'{{ metadata }}',
'{{ id }}',
'{{ base_environment }}',
'{{ tools }}',
'{{ base_agent }}',
'{{ system_instruction }}',
'{{ projectsId }}',
'{{ locationsId }}'
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
- name: agents
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the agents resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the agents resource.
    - name: description
      value: "{{ description }}"
      description: |
        Optional. The description of the agent.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The resource name of the agent. Format: \`projects/{project}/locations/{location}/agents/{agent}\`.
    - name: metadata
      value: "{{ metadata }}"
      description: |
        Optional. The metadata for the agent.
    - name: id
      value: "{{ id }}"
      description: |
        Immutable. The user-specified ID for the agent. This ID becomes the final component of the agent resource name. If not provided, Vertex AI will generate a value for this ID. The ID can be up to 63 characters and must match the regular expression \`[a-z]([a-z0-9-]{0,61}[a-z0-9])?\`.
    - name: base_environment
      value: "{{ base_environment }}"
      description: |
        Optional. The base environment configuration for the agent. Valid types: * A string value for the environment ID, or \`remote\` for the default. * A struct value for the \`environment_config\`.
    - name: tools
      description: |
        Optional. The tools available to the agent.
      value:
        - url: "{{ url }}"
          type: "{{ type }}"
          headers: "{{ headers }}"
          name: "{{ name }}"
    - name: base_agent
      value: "{{ base_agent }}"
      description: |
        Required. The base agent for the agent. Supported values: * \`antigravity-preview-05-2026\`
    - name: system_instruction
      value: "{{ system_instruction }}"
      description: |
        Optional. The instructions for the agent to follow. These instructions are passed to the LLM as a system instruction.
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

Updates an agent.

```sql
UPDATE google.aiplatform.agents
SET 
data__description = '{{ description }}',
data__name = '{{ name }}',
data__metadata = '{{ metadata }}',
data__id = '{{ id }}',
data__base_environment = '{{ base_environment }}',
data__tools = '{{ tools }}',
data__base_agent = '{{ base_agent }}',
data__system_instruction = '{{ system_instruction }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
id,
name,
base_agent,
base_environment,
created,
description,
metadata,
object,
system_instruction,
tools,
updated;
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

Deletes an agent.

```sql
DELETE FROM google.aiplatform.agents
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
;
```
</TabItem>
</Tabs>
