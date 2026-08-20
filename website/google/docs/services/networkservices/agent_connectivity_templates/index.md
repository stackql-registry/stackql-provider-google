--- 
title: agent_connectivity_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_connectivity_templates
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

Creates, updates, deletes, gets or lists an <code>agent_connectivity_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_connectivity_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkservices.agent_connectivity_templates" /></td></tr>
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
    <td>Identifier. Name of the AgentConnectivityTemplate resource. It matches pattern `projects/*/locations/*/agentConnectivityTemplates/`.</td>
</tr>
<tr>
    <td><CopyableCode code="accessPath" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The path of the access. Maps roughly to ingress/egress, though we keep CLIENT_TO_AGENT and AGENT_TO_ANYWHERE as carryovers from Agent Gateway's original resource model. The path is immutable once set. Exactly one path can be set. (ACCESS_PATH_UNSPECIFIED, CLIENT_TO_AGENT, AGENT_TO_ANYWHERE)</td>
</tr>
<tr>
    <td><CopyableCode code="accessTypes" /></td>
    <td><code>array</code></td>
    <td>Optional. The types of network access provided to the gateway. Both PUBLIC and PRIVATE can be configured.</td>
</tr>
<tr>
    <td><CopyableCode code="agentCompute" /></td>
    <td><code>string</code></td>
    <td>Optional. The compute environment where the agent is hosted. Exactly one type of compute must be chosen. (AGENT_COMPUTE_UNSPECIFIED, GKE, CLOUD_RUN, BORG)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentModel" /></td>
    <td><code>string</code></td>
    <td>Required. The deployment model for the gateway. (DEPLOYMENT_MODEL_UNSPECIFIED, CENTRALIZED, AMBIENT)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A free-text description of the resource. Max length 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="egressNetworkConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for egress network traffic. (id: EgressNetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Etag of the resource. If this is provided, it must match the server's etag. If the provided etag does not match the server's etag, the request will fail with a 409 ABORTED error.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Set of label tags associated with the AgentConnectivityTemplate resource.</td>
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
    <td>Identifier. Name of the AgentConnectivityTemplate resource. It matches pattern `projects/*/locations/*/agentConnectivityTemplates/`.</td>
</tr>
<tr>
    <td><CopyableCode code="accessPath" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The path of the access. Maps roughly to ingress/egress, though we keep CLIENT_TO_AGENT and AGENT_TO_ANYWHERE as carryovers from Agent Gateway's original resource model. The path is immutable once set. Exactly one path can be set. (ACCESS_PATH_UNSPECIFIED, CLIENT_TO_AGENT, AGENT_TO_ANYWHERE)</td>
</tr>
<tr>
    <td><CopyableCode code="accessTypes" /></td>
    <td><code>array</code></td>
    <td>Optional. The types of network access provided to the gateway. Both PUBLIC and PRIVATE can be configured.</td>
</tr>
<tr>
    <td><CopyableCode code="agentCompute" /></td>
    <td><code>string</code></td>
    <td>Optional. The compute environment where the agent is hosted. Exactly one type of compute must be chosen. (AGENT_COMPUTE_UNSPECIFIED, GKE, CLOUD_RUN, BORG)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentModel" /></td>
    <td><code>string</code></td>
    <td>Required. The deployment model for the gateway. (DEPLOYMENT_MODEL_UNSPECIFIED, CENTRALIZED, AMBIENT)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A free-text description of the resource. Max length 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="egressNetworkConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for egress network traffic. (id: EgressNetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Etag of the resource. If this is provided, it must match the server's etag. If the provided etag does not match the server's etag, the request will fail with a 409 ABORTED error.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Set of label tags associated with the AgentConnectivityTemplate resource.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentConnectivityTemplatesId"><code>agentConnectivityTemplatesId</code></a></td>
    <td></td>
    <td>Gets details of a single AgentConnectivityTemplate.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Lists AgentConnectivityTemplates in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-agentConnectivityTemplateId"><code>agentConnectivityTemplateId</code></a></td>
    <td>Creates a new AgentConnectivityTemplate in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentConnectivityTemplatesId"><code>agentConnectivityTemplatesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single AgentConnectivityTemplate.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentConnectivityTemplatesId"><code>agentConnectivityTemplatesId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a single AgentConnectivityTemplate.</td>
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
<tr id="parameter-agentConnectivityTemplatesId">
    <td><CopyableCode code="agentConnectivityTemplatesId" /></td>
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
<tr id="parameter-agentConnectivityTemplateId">
    <td><CopyableCode code="agentConnectivityTemplateId" /></td>
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

Gets details of a single AgentConnectivityTemplate.

```sql
SELECT
name,
accessPath,
accessTypes,
agentCompute,
createTime,
deploymentModel,
description,
egressNetworkConfig,
etag,
labels,
updateTime
FROM google.networkservices.agent_connectivity_templates
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentConnectivityTemplatesId = '{{ agentConnectivityTemplatesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists AgentConnectivityTemplates in a given project and location.

```sql
SELECT
name,
accessPath,
accessTypes,
agentCompute,
createTime,
deploymentModel,
description,
egressNetworkConfig,
etag,
labels,
updateTime
FROM google.networkservices.agent_connectivity_templates
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

Creates a new AgentConnectivityTemplate in a given project and location.

```sql
INSERT INTO google.networkservices.agent_connectivity_templates (
data__accessPath,
data__accessTypes,
data__agentCompute,
data__deploymentModel,
data__description,
data__egressNetworkConfig,
data__etag,
data__labels,
data__name,
projectsId,
locationsId,
agentConnectivityTemplateId
)
SELECT 
'{{ accessPath }}',
'{{ accessTypes }}',
'{{ agentCompute }}',
'{{ deploymentModel }}',
'{{ description }}',
'{{ egressNetworkConfig }}',
'{{ etag }}',
'{{ labels }}',
'{{ name }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentConnectivityTemplateId }}'
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
- name: agent_connectivity_templates
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the agent_connectivity_templates resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the agent_connectivity_templates resource.
    - name: accessPath
      value: "{{ accessPath }}"
      description: |
        Required. Immutable. The path of the access. Maps roughly to ingress/egress, though we keep CLIENT_TO_AGENT and AGENT_TO_ANYWHERE as carryovers from Agent Gateway's original resource model. The path is immutable once set. Exactly one path can be set.
      valid_values: ['ACCESS_PATH_UNSPECIFIED', 'CLIENT_TO_AGENT', 'AGENT_TO_ANYWHERE']
    - name: accessTypes
      value:
        - "{{ accessTypes }}"
      description: |
        Optional. The types of network access provided to the gateway. Both PUBLIC and PRIVATE can be configured.
    - name: agentCompute
      value: "{{ agentCompute }}"
      description: |
        Optional. The compute environment where the agent is hosted. Exactly one type of compute must be chosen.
      valid_values: ['AGENT_COMPUTE_UNSPECIFIED', 'GKE', 'CLOUD_RUN', 'BORG']
    - name: deploymentModel
      value: "{{ deploymentModel }}"
      description: |
        Required. The deployment model for the gateway.
      valid_values: ['DEPLOYMENT_MODEL_UNSPECIFIED', 'CENTRALIZED', 'AMBIENT']
    - name: description
      value: "{{ description }}"
      description: |
        Optional. A free-text description of the resource. Max length 1024 characters.
    - name: egressNetworkConfig
      description: |
        Optional. Configuration for egress network traffic.
      value:
        dnsPeeringConfig:
          domain: "{{ domain }}"
          targetNetwork: "{{ targetNetwork }}"
        networkAttachment: "{{ networkAttachment }}"
        trustConfig: "{{ trustConfig }}"
        vpcEgress: "{{ vpcEgress }}"
    - name: etag
      value: "{{ etag }}"
      description: |
        Optional. Etag of the resource. If this is provided, it must match the server's etag. If the provided etag does not match the server's etag, the request will fail with a 409 ABORTED error.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Set of label tags associated with the AgentConnectivityTemplate resource.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. Name of the AgentConnectivityTemplate resource. It matches pattern \`projects/*/locations/*/agentConnectivityTemplates/\`.
    - name: agentConnectivityTemplateId
      value: "{{ agentConnectivityTemplateId }}"
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

Updates the parameters of a single AgentConnectivityTemplate.

```sql
UPDATE google.networkservices.agent_connectivity_templates
SET 
data__accessPath = '{{ accessPath }}',
data__accessTypes = '{{ accessTypes }}',
data__agentCompute = '{{ agentCompute }}',
data__deploymentModel = '{{ deploymentModel }}',
data__description = '{{ description }}',
data__egressNetworkConfig = '{{ egressNetworkConfig }}',
data__etag = '{{ etag }}',
data__labels = '{{ labels }}',
data__name = '{{ name }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentConnectivityTemplatesId = '{{ agentConnectivityTemplatesId }}' --required
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

Deletes a single AgentConnectivityTemplate.

```sql
DELETE FROM google.networkservices.agent_connectivity_templates
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentConnectivityTemplatesId = '{{ agentConnectivityTemplatesId }}' --required
AND etag = '{{ etag }}'
;
```
</TabItem>
</Tabs>
