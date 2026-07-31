--- 
title: deployments_extended_agent_card
hide_title: false
hide_table_of_contents: false
keywords:
  - deployments_extended_agent_card
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

Creates, updates, deletes, gets or lists a <code>deployments_extended_agent_card</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deployments_extended_agent_card" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.ces.deployments_extended_agent_card" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_extended_agent_card"
    values={[
        { label: 'get_extended_agent_card', value: 'get_extended_agent_card' }
    ]}
>
<TabItem value="get_extended_agent_card">

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
    <td>Required. A human readable name for the agent. Example: "Recipe Agent"</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td>Required. A2A Capability set supported by the agent. (id: LfA2aV1AgentCapabilities)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultInputModes" /></td>
    <td><code>array</code></td>
    <td>Required. protolint:enable REPEATED_FIELD_NAMES_PLURALIZED The set of interaction modes that the agent supports across all skills. This can be overridden per skill. Defined as media types.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultOutputModes" /></td>
    <td><code>array</code></td>
    <td>Required. The media types supported as outputs from this agent.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Required. A human-readable description of the agent, assisting users and other agents in understanding its purpose. Example: "Agent that helps users with recipes and cooking."</td>
</tr>
<tr>
    <td><CopyableCode code="documentationUrl" /></td>
    <td><code>string</code></td>
    <td>A URL providing additional documentation about the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="iconUrl" /></td>
    <td><code>string</code></td>
    <td>Optional. A URL to an icon for the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>object</code></td>
    <td>The service provider of the agent. (id: LfA2aV1AgentProvider)</td>
</tr>
<tr>
    <td><CopyableCode code="securityRequirements" /></td>
    <td><code>array</code></td>
    <td>Security requirements for contacting the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="securitySchemes" /></td>
    <td><code>object</code></td>
    <td>The security scheme details used for authenticating with this agent.</td>
</tr>
<tr>
    <td><CopyableCode code="signatures" /></td>
    <td><code>array</code></td>
    <td>JSON Web Signatures computed for this `AgentCard`.</td>
</tr>
<tr>
    <td><CopyableCode code="skills" /></td>
    <td><code>array</code></td>
    <td>Required. Skills represent the abilities of an agent. It is largely a descriptive concept but represents a more focused set of behaviors that the agent is likely to succeed at.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedInterfaces" /></td>
    <td><code>array</code></td>
    <td>Required. Ordered list of supported interfaces. The first entry is preferred.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Required. The version of the agent. Example: "1.0.0"</td>
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
    <td><a href="#get_extended_agent_card"><CopyableCode code="get_extended_agent_card" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td></td>
    <td>Gets the extended agent card for the authenticated agent.</td>
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
<tr id="parameter-deploymentsId">
    <td><CopyableCode code="deploymentsId" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_extended_agent_card"
    values={[
        { label: 'get_extended_agent_card', value: 'get_extended_agent_card' }
    ]}
>
<TabItem value="get_extended_agent_card">

Gets the extended agent card for the authenticated agent.

```sql
SELECT
name,
capabilities,
defaultInputModes,
defaultOutputModes,
description,
documentationUrl,
iconUrl,
provider,
securityRequirements,
securitySchemes,
signatures,
skills,
supportedInterfaces,
version
FROM google.ces.deployments_extended_agent_card
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND appsId = '{{ appsId }}' -- required
AND deploymentsId = '{{ deploymentsId }}' -- required
;
```
</TabItem>
</Tabs>
