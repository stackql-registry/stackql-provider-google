--- 
title: semantic_governance_policy_engine
hide_title: false
hide_table_of_contents: false
keywords:
  - semantic_governance_policy_engine
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

Creates, updates, deletes, gets or lists a <code>semantic_governance_policy_engine</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="semantic_governance_policy_engine" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.semantic_governance_policy_engine" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_semantic_governance_policy_engine"
    values={[
        { label: 'get_semantic_governance_policy_engine', value: 'get_semantic_governance_policy_engine' }
    ]}
>
<TabItem value="get_semantic_governance_policy_engine">

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
    <td>Identifier. The resource name of the SemanticGovernancePolicyEngine. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/semanticGovernancePolicyEngine</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this SemanticGovernancePolicyEngine was created.</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayConfigs" /></td>
    <td><code>object</code></td>
    <td>Optional. Configurations for gateways. The keys are user-defined names for each gateway. At most 5 gateway configurations are allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="ipAddress" /></td>
    <td><code>string</code></td>
    <td>Output only. The private IPv4 address of the PSC endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="pscForwardingRule" /></td>
    <td><code>string</code></td>
    <td>Output only. The URI of the PSC endpoint resource created in customer project. Format: projects/&#123;project&#125;/regions/&#123;region&#125;/forwardingRules/&#123;forwarding_rule&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="pscServiceAttachment" /></td>
    <td><code>string</code></td>
    <td>Output only. URI of the PSC attachment resource provided by SGP. Format: projects/&#123;project&#125;/regions/&#123;region&#125;/serviceAttachments/&#123;service_attachment&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the SemanticGovernancePolicyEngine. (STATE_UNSPECIFIED, PROVISIONING, ACTIVE, DEPROVISIONING, INACTIVE, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this SemanticGovernancePolicyEngine was last updated.</td>
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
    <td><a href="#get_semantic_governance_policy_engine"><CopyableCode code="get_semantic_governance_policy_engine" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Gets a SemanticGovernancePolicyEngine. A SemanticGovernancePolicyEngine is a singleton resource that is created when its parent is created, and deleted when its parent is deleted. This method retrieves the current state of the Semantic Governance Policy Engine.</td>
</tr>
<tr>
    <td><a href="#update_semantic_governance_policy_engine"><CopyableCode code="update_semantic_governance_policy_engine" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a SemanticGovernancePolicyEngine. This method performs an upsert operation. If the SemanticGovernancePolicyEngine resource does not exist, it will be created. Otherwise, it will be updated.</td>
</tr>
<tr>
    <td><a href="#deprovision"><CopyableCode code="deprovision" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Deprovisions the SemanticGovernancePolicyEngine, tearing down the associated tenant project, GKE cluster, and PSC service attachments. This operation is irreversible. Returns a long-running operation; poll for completion. The response contains the SemanticGovernancePolicyEngine in DEPROVISIONING state.</td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_semantic_governance_policy_engine"
    values={[
        { label: 'get_semantic_governance_policy_engine', value: 'get_semantic_governance_policy_engine' }
    ]}
>
<TabItem value="get_semantic_governance_policy_engine">

Gets a SemanticGovernancePolicyEngine. A SemanticGovernancePolicyEngine is a singleton resource that is created when its parent is created, and deleted when its parent is deleted. This method retrieves the current state of the Semantic Governance Policy Engine.

```sql
SELECT
name,
createTime,
gatewayConfigs,
ipAddress,
pscForwardingRule,
pscServiceAttachment,
state,
updateTime
FROM google.aiplatform.semantic_governance_policy_engine
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_semantic_governance_policy_engine"
    values={[
        { label: 'update_semantic_governance_policy_engine', value: 'update_semantic_governance_policy_engine' }
    ]}
>
<TabItem value="update_semantic_governance_policy_engine">

Updates a SemanticGovernancePolicyEngine. This method performs an upsert operation. If the SemanticGovernancePolicyEngine resource does not exist, it will be created. Otherwise, it will be updated.

```sql
UPDATE google.aiplatform.semantic_governance_policy_engine
SET 
data__name = '{{ name }}',
data__gatewayConfigs = '{{ gatewayConfigs }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
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


## Lifecycle Methods

<Tabs
    defaultValue="deprovision"
    values={[
        { label: 'deprovision', value: 'deprovision' }
    ]}
>
<TabItem value="deprovision">

Deprovisions the SemanticGovernancePolicyEngine, tearing down the associated tenant project, GKE cluster, and PSC service attachments. This operation is irreversible. Returns a long-running operation; poll for completion. The response contains the SemanticGovernancePolicyEngine in DEPROVISIONING state.

```sql
EXEC google.aiplatform.semantic_governance_policy_engine.deprovision 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"force": {{ force }}
}'
;
```
</TabItem>
</Tabs>
