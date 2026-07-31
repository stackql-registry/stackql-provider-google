--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
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

Creates, updates, deletes, gets or lists a <code>services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.agentregistry.services" /></td></tr>
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
    <td>Identifier. The resource name of the Service. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/services/&#123;service&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="agentSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. The spec of the Agent. When `agent_spec` is set, the type of the service is Agent. (id: AgentSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User-defined description of an Service. Can have a maximum length of `2048` characters.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User-defined display name for the Service. Can have a maximum length of `63` characters.</td>
</tr>
<tr>
    <td><CopyableCode code="endpointSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. The spec of the Endpoint. When `endpoint_spec` is set, the type of the service is Endpoint. (id: EndpointSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="interfaces" /></td>
    <td><code>array</code></td>
    <td>Optional. The connection details for the Service.</td>
</tr>
<tr>
    <td><CopyableCode code="mcpServerSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. The spec of the MCP Server. When `mcp_server_spec` is set, the type of the service is MCP Server. (id: McpServerSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="registryResource" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the resulting Agent, MCP Server, or Endpoint. Format: * `projects/&#123;project&#125;/locations/&#123;location&#125;/mcpServers/&#123;mcp_server&#125;` * `projects/&#123;project&#125;/locations/&#123;location&#125;/agents/&#123;agent&#125;` * `projects/&#123;project&#125;/locations/&#123;location&#125;/endpoints/&#123;endpoint&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update time.</td>
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
    <td>Identifier. The resource name of the Service. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/services/&#123;service&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="agentSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. The spec of the Agent. When `agent_spec` is set, the type of the service is Agent. (id: AgentSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User-defined description of an Service. Can have a maximum length of `2048` characters.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User-defined display name for the Service. Can have a maximum length of `63` characters.</td>
</tr>
<tr>
    <td><CopyableCode code="endpointSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. The spec of the Endpoint. When `endpoint_spec` is set, the type of the service is Endpoint. (id: EndpointSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="interfaces" /></td>
    <td><code>array</code></td>
    <td>Optional. The connection details for the Service.</td>
</tr>
<tr>
    <td><CopyableCode code="mcpServerSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. The spec of the MCP Server. When `mcp_server_spec` is set, the type of the service is MCP Server. (id: McpServerSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="registryResource" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the resulting Agent, MCP Server, or Endpoint. Format: * `projects/&#123;project&#125;/locations/&#123;location&#125;/mcpServers/&#123;mcp_server&#125;` * `projects/&#123;project&#125;/locations/&#123;location&#125;/agents/&#123;agent&#125;` * `projects/&#123;project&#125;/locations/&#123;location&#125;/endpoints/&#123;endpoint&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update time.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Gets details of a single Service.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists Services in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-serviceId"><code>serviceId</code></a></td>
    <td>Creates a new Service in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the parameters of a single Service.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single Service.</td>
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
<tr id="parameter-servicesId">
    <td><CopyableCode code="servicesId" /></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-serviceId">
    <td><CopyableCode code="serviceId" /></td>
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

Gets details of a single Service.

```sql
SELECT
name,
agentSpec,
createTime,
description,
displayName,
endpointSpec,
interfaces,
mcpServerSpec,
registryResource,
updateTime
FROM google.agentregistry.services
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND servicesId = '{{ servicesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Services in a given project and location.

```sql
SELECT
name,
agentSpec,
createTime,
description,
displayName,
endpointSpec,
interfaces,
mcpServerSpec,
registryResource,
updateTime
FROM google.agentregistry.services
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
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

Creates a new Service in a given project and location.

```sql
INSERT INTO google.agentregistry.services (
data__mcpServerSpec,
data__agentSpec,
data__name,
data__displayName,
data__endpointSpec,
data__description,
data__interfaces,
projectsId,
locationsId,
requestId,
serviceId
)
SELECT 
'{{ mcpServerSpec }}',
'{{ agentSpec }}',
'{{ name }}',
'{{ displayName }}',
'{{ endpointSpec }}',
'{{ description }}',
'{{ interfaces }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ requestId }}',
'{{ serviceId }}'
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
- name: services
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the services resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the services resource.
    - name: mcpServerSpec
      description: |
        Optional. The spec of the MCP Server. When \`mcp_server_spec\` is set, the type of the service is MCP Server.
      value:
        type: "{{ type }}"
        content: "{{ content }}"
    - name: agentSpec
      description: |
        Optional. The spec of the Agent. When \`agent_spec\` is set, the type of the service is Agent.
      value:
        type: "{{ type }}"
        content: "{{ content }}"
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The resource name of the Service. Format: \`projects/{project}/locations/{location}/services/{service}\`.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Optional. User-defined display name for the Service. Can have a maximum length of \`63\` characters.
    - name: endpointSpec
      description: |
        Optional. The spec of the Endpoint. When \`endpoint_spec\` is set, the type of the service is Endpoint.
      value:
        type: "{{ type }}"
        content: "{{ content }}"
    - name: description
      value: "{{ description }}"
      description: |
        Optional. User-defined description of an Service. Can have a maximum length of \`2048\` characters.
    - name: interfaces
      description: |
        Optional. The connection details for the Service.
      value:
        - url: "{{ url }}"
          protocolBinding: "{{ protocolBinding }}"
    - name: requestId
      value: "{{ requestId }}"
    - name: serviceId
      value: "{{ serviceId }}"
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

Updates the parameters of a single Service.

```sql
UPDATE google.agentregistry.services
SET 
data__mcpServerSpec = '{{ mcpServerSpec }}',
data__agentSpec = '{{ agentSpec }}',
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__endpointSpec = '{{ endpointSpec }}',
data__description = '{{ description }}',
data__interfaces = '{{ interfaces }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND servicesId = '{{ servicesId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
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

Deletes a single Service.

```sql
DELETE FROM google.agentregistry.services
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND servicesId = '{{ servicesId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
