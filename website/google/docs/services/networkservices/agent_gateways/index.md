--- 
title: agent_gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_gateways
  - networkservices
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

Creates, updates, deletes, gets or lists an <code>agent_gateways</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_gateways" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkservices.agent_gateways" /></td></tr>
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
    <td>Identifier. Name of the AgentGateway resource. It matches pattern `projects/*/locations/*/agentGateways/`.</td>
</tr>
<tr>
    <td><CopyableCode code="agentGatewayCard" /></td>
    <td><code>object</code></td>
    <td>Output only. Field for populated AgentGateway card. (id: AgentGatewayAgentGatewayOutputCard)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A free-text description of the resource. Max length 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Etag of the resource. If this is provided, it must match the server's etag. If the provided etag does not match the server's etag, the request will fail with a 409 ABORTED error.</td>
</tr>
<tr>
    <td><CopyableCode code="googleManaged" /></td>
    <td><code>object</code></td>
    <td>Optional. Proxy is orchestrated and managed by GoogleCloud in a tenant project. (id: AgentGatewayGoogleManaged)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Set of label tags associated with the AgentGateway resource.</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Network configuration for the AgentGateway. (id: AgentGatewayNetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="protocols" /></td>
    <td><code>array</code></td>
    <td>Optional. Deprecated.</td>
</tr>
<tr>
    <td><CopyableCode code="registries" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of Agent registries containing the agents, MCP servers and tools governed by the Agent Gateway. Note: Currently limited to project-scoped registries Must be of format `//agentregistry.googleapis.com/projects/&#123;project&#125;/locations/&#123;location&#125;/`</td>
</tr>
<tr>
    <td><CopyableCode code="selfManaged" /></td>
    <td><code>object</code></td>
    <td>Optional. Attach to existing Application Load Balancers or Secure Web Proxies. (id: AgentGatewaySelfManaged)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was updated.</td>
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
    <td>Identifier. Name of the AgentGateway resource. It matches pattern `projects/*/locations/*/agentGateways/`.</td>
</tr>
<tr>
    <td><CopyableCode code="agentGatewayCard" /></td>
    <td><code>object</code></td>
    <td>Output only. Field for populated AgentGateway card. (id: AgentGatewayAgentGatewayOutputCard)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A free-text description of the resource. Max length 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Etag of the resource. If this is provided, it must match the server's etag. If the provided etag does not match the server's etag, the request will fail with a 409 ABORTED error.</td>
</tr>
<tr>
    <td><CopyableCode code="googleManaged" /></td>
    <td><code>object</code></td>
    <td>Optional. Proxy is orchestrated and managed by GoogleCloud in a tenant project. (id: AgentGatewayGoogleManaged)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Set of label tags associated with the AgentGateway resource.</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Network configuration for the AgentGateway. (id: AgentGatewayNetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="protocols" /></td>
    <td><code>array</code></td>
    <td>Optional. Deprecated.</td>
</tr>
<tr>
    <td><CopyableCode code="registries" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of Agent registries containing the agents, MCP servers and tools governed by the Agent Gateway. Note: Currently limited to project-scoped registries Must be of format `//agentregistry.googleapis.com/projects/&#123;project&#125;/locations/&#123;location&#125;/`</td>
</tr>
<tr>
    <td><CopyableCode code="selfManaged" /></td>
    <td><code>object</code></td>
    <td>Optional. Attach to existing Application Load Balancers or Secure Web Proxies. (id: AgentGatewaySelfManaged)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentGatewaysId"><code>agentGatewaysId</code></a></td>
    <td></td>
    <td>Gets details of a single AgentGateway.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Lists AgentGateways in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-agentGatewayId"><code>agentGatewayId</code></a></td>
    <td>Creates a new AgentGateway in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentGatewaysId"><code>agentGatewaysId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single AgentGateway.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentGatewaysId"><code>agentGatewaysId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a single AgentGateway.</td>
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
<tr id="parameter-agentGatewaysId">
    <td><CopyableCode code="agentGatewaysId" /></td>
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
<tr id="parameter-agentGatewayId">
    <td><CopyableCode code="agentGatewayId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
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
<tr id="parameter-returnPartialSuccess">
    <td><CopyableCode code="returnPartialSuccess" /></td>
    <td><code>boolean</code></td>
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

Gets details of a single AgentGateway.

```sql
SELECT
name,
agentGatewayCard,
createTime,
description,
etag,
googleManaged,
labels,
networkConfig,
protocols,
registries,
selfManaged,
updateTime
FROM google.networkservices.agent_gateways
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentGatewaysId = '{{ agentGatewaysId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists AgentGateways in a given project and location.

```sql
SELECT
name,
agentGatewayCard,
createTime,
description,
etag,
googleManaged,
labels,
networkConfig,
protocols,
registries,
selfManaged,
updateTime
FROM google.networkservices.agent_gateways
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
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

Creates a new AgentGateway in a given project and location.

```sql
INSERT INTO google.networkservices.agent_gateways (
data__googleManaged,
data__selfManaged,
data__name,
data__labels,
data__description,
data__etag,
data__protocols,
data__registries,
data__networkConfig,
projectsId,
locationsId,
agentGatewayId
)
SELECT 
'{{ googleManaged }}',
'{{ selfManaged }}',
'{{ name }}',
'{{ labels }}',
'{{ description }}',
'{{ etag }}',
'{{ protocols }}',
'{{ registries }}',
'{{ networkConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentGatewayId }}'
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
- name: agent_gateways
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the agent_gateways resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the agent_gateways resource.
    - name: googleManaged
      description: |
        Optional. Proxy is orchestrated and managed by GoogleCloud in a tenant project.
      value:
        governedAccessPath: "{{ governedAccessPath }}"
    - name: selfManaged
      description: |
        Optional. Attach to existing Application Load Balancers or Secure Web Proxies.
      value:
        resourceUri: "{{ resourceUri }}"
        resourceUris:
          - "{{ resourceUris }}"
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. Name of the AgentGateway resource. It matches pattern \`projects/*/locations/*/agentGateways/\`.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Set of label tags associated with the AgentGateway resource.
    - name: description
      value: "{{ description }}"
      description: |
        Optional. A free-text description of the resource. Max length 1024 characters.
    - name: etag
      value: "{{ etag }}"
      description: |
        Optional. Etag of the resource. If this is provided, it must match the server's etag. If the provided etag does not match the server's etag, the request will fail with a 409 ABORTED error.
    - name: protocols
      value:
        - "{{ protocols }}"
      description: |
        Optional. Deprecated.
    - name: registries
      value:
        - "{{ registries }}"
      description: |
        Optional. A list of Agent registries containing the agents, MCP servers and tools governed by the Agent Gateway. Note: Currently limited to project-scoped registries Must be of format \`//agentregistry.googleapis.com/projects/{project}/locations/{location}/\`
    - name: networkConfig
      description: |
        Optional. Network configuration for the AgentGateway.
      value:
        egress:
          networkAttachment: "{{ networkAttachment }}"
        dnsPeeringConfig:
          domains:
            - "{{ domains }}"
          targetProject: "{{ targetProject }}"
          targetNetwork: "{{ targetNetwork }}"
    - name: agentGatewayId
      value: "{{ agentGatewayId }}"
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

Updates the parameters of a single AgentGateway.

```sql
UPDATE google.networkservices.agent_gateways
SET 
data__googleManaged = '{{ googleManaged }}',
data__selfManaged = '{{ selfManaged }}',
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__description = '{{ description }}',
data__etag = '{{ etag }}',
data__protocols = '{{ protocols }}',
data__registries = '{{ registries }}',
data__networkConfig = '{{ networkConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentGatewaysId = '{{ agentGatewaysId }}' --required
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

Deletes a single AgentGateway.

```sql
DELETE FROM google.networkservices.agent_gateways
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentGatewaysId = '{{ agentGatewaysId }}' --required
AND etag = '{{ etag }}'
;
```
</TabItem>
</Tabs>
