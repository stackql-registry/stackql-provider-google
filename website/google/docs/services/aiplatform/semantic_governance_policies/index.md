--- 
title: semantic_governance_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - semantic_governance_policies
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

Creates, updates, deletes, gets or lists a <code>semantic_governance_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="semantic_governance_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.semantic_governance_policies" /></td></tr>
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
    <td>Identifier. Resource name of the SemanticGovernancePolicy.</td>
</tr>
<tr>
    <td><CopyableCode code="agent" /></td>
    <td><code>string</code></td>
    <td>Required. The name of the agent in Agent Registry that is affected by this policy.</td>
</tr>
<tr>
    <td><CopyableCode code="agentIdentity" /></td>
    <td><code>string</code></td>
    <td>Output only. Represents the principal of the agent, used by the Policy Decision Point (PDP) for governance checks. For more information, see https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity Format: `principal://TRUST_DOMAIN/NAMESPACE/AGENT_NAME` Example: `principal://agents.global.org-ORGANIZATION_ID.system.id.goog/resources/aiplatform/projects/PROJECT_NUMBER/locations/LOCATION/reasoningEngines/AGENT_ENGINE_ID`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this SemanticGovernancePolicy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the SemanticGovernancePolicy.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-defined name of the SemanticGovernancePolicy.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Used to perform consistent read-modify-write transactions. If provided, the request will only succeed if the etag matches the current value. Otherwise, an ABORTED error will be returned.</td>
</tr>
<tr>
    <td><CopyableCode code="mcpTools" /></td>
    <td><code>array</code></td>
    <td>Optional. The McpTools that are affected by this policy.</td>
</tr>
<tr>
    <td><CopyableCode code="naturalLanguageConstraint" /></td>
    <td><code>string</code></td>
    <td>Required. The natural language constraint of the SemanticGovernancePolicy.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this SemanticGovernancePolicy was last updated.</td>
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
    <td>Identifier. Resource name of the SemanticGovernancePolicy.</td>
</tr>
<tr>
    <td><CopyableCode code="agent" /></td>
    <td><code>string</code></td>
    <td>Required. The name of the agent in Agent Registry that is affected by this policy.</td>
</tr>
<tr>
    <td><CopyableCode code="agentIdentity" /></td>
    <td><code>string</code></td>
    <td>Output only. Represents the principal of the agent, used by the Policy Decision Point (PDP) for governance checks. For more information, see https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity Format: `principal://TRUST_DOMAIN/NAMESPACE/AGENT_NAME` Example: `principal://agents.global.org-ORGANIZATION_ID.system.id.goog/resources/aiplatform/projects/PROJECT_NUMBER/locations/LOCATION/reasoningEngines/AGENT_ENGINE_ID`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this SemanticGovernancePolicy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the SemanticGovernancePolicy.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-defined name of the SemanticGovernancePolicy.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Used to perform consistent read-modify-write transactions. If provided, the request will only succeed if the etag matches the current value. Otherwise, an ABORTED error will be returned.</td>
</tr>
<tr>
    <td><CopyableCode code="mcpTools" /></td>
    <td><code>array</code></td>
    <td>Optional. The McpTools that are affected by this policy.</td>
</tr>
<tr>
    <td><CopyableCode code="naturalLanguageConstraint" /></td>
    <td><code>string</code></td>
    <td>Required. The natural language constraint of the SemanticGovernancePolicy.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this SemanticGovernancePolicy was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-semanticGovernancePoliciesId"><code>semanticGovernancePoliciesId</code></a></td>
    <td></td>
    <td>Gets a SemanticGovernancePolicy.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists SemanticGovernancePolicies in a given location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-semanticGovernancePolicyId"><code>semanticGovernancePolicyId</code></a></td>
    <td>Creates a SemanticGovernancePolicy.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-semanticGovernancePoliciesId"><code>semanticGovernancePoliciesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a SemanticGovernancePolicy.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-semanticGovernancePoliciesId"><code>semanticGovernancePoliciesId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a SemanticGovernancePolicy.</td>
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
<tr id="parameter-semanticGovernancePoliciesId">
    <td><CopyableCode code="semanticGovernancePoliciesId" /></td>
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
<tr id="parameter-semanticGovernancePolicyId">
    <td><CopyableCode code="semanticGovernancePolicyId" /></td>
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

Gets a SemanticGovernancePolicy.

```sql
SELECT
name,
agent,
agentIdentity,
createTime,
description,
displayName,
etag,
mcpTools,
naturalLanguageConstraint,
updateTime
FROM google.aiplatform.semantic_governance_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND semanticGovernancePoliciesId = '{{ semanticGovernancePoliciesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists SemanticGovernancePolicies in a given location.

```sql
SELECT
name,
agent,
agentIdentity,
createTime,
description,
displayName,
etag,
mcpTools,
naturalLanguageConstraint,
updateTime
FROM google.aiplatform.semantic_governance_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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

Creates a SemanticGovernancePolicy.

```sql
INSERT INTO google.aiplatform.semantic_governance_policies (
data__mcpTools,
data__description,
data__name,
data__etag,
data__displayName,
data__agent,
data__naturalLanguageConstraint,
projectsId,
locationsId,
semanticGovernancePolicyId
)
SELECT 
'{{ mcpTools }}',
'{{ description }}',
'{{ name }}',
'{{ etag }}',
'{{ displayName }}',
'{{ agent }}',
'{{ naturalLanguageConstraint }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ semanticGovernancePolicyId }}'
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
- name: semantic_governance_policies
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the semantic_governance_policies resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the semantic_governance_policies resource.
    - name: mcpTools
      description: |
        Optional. The McpTools that are affected by this policy.
      value:
        - mcpServer: "{{ mcpServer }}"
          tools: "{{ tools }}"
    - name: description
      value: "{{ description }}"
      description: |
        Optional. The description of the SemanticGovernancePolicy.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. Resource name of the SemanticGovernancePolicy.
    - name: etag
      value: "{{ etag }}"
      description: |
        Optional. Used to perform consistent read-modify-write transactions. If provided, the request will only succeed if the etag matches the current value. Otherwise, an ABORTED error will be returned.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Optional. The user-defined name of the SemanticGovernancePolicy.
    - name: agent
      value: "{{ agent }}"
      description: |
        Required. The name of the agent in Agent Registry that is affected by this policy.
    - name: naturalLanguageConstraint
      value: "{{ naturalLanguageConstraint }}"
      description: |
        Required. The natural language constraint of the SemanticGovernancePolicy.
    - name: semanticGovernancePolicyId
      value: "{{ semanticGovernancePolicyId }}"
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

Updates a SemanticGovernancePolicy.

```sql
UPDATE google.aiplatform.semantic_governance_policies
SET 
data__mcpTools = '{{ mcpTools }}',
data__description = '{{ description }}',
data__name = '{{ name }}',
data__etag = '{{ etag }}',
data__displayName = '{{ displayName }}',
data__agent = '{{ agent }}',
data__naturalLanguageConstraint = '{{ naturalLanguageConstraint }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND semanticGovernancePoliciesId = '{{ semanticGovernancePoliciesId }}' --required
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

Deletes a SemanticGovernancePolicy.

```sql
DELETE FROM google.aiplatform.semantic_governance_policies
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND semanticGovernancePoliciesId = '{{ semanticGovernancePoliciesId }}' --required
AND etag = '{{ etag }}'
;
```
</TabItem>
</Tabs>
