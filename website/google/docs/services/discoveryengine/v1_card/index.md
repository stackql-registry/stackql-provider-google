--- 
title: v1_card
hide_title: false
hide_table_of_contents: false
keywords:
  - v1_card
  - discoveryengine
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

Creates, updates, deletes, gets or lists a <code>v1_card</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="v1_card" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.v1_card" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_collections_engines_assistants_agents_a2a_v1_get_card"
    values={[
        { label: 'projects_locations_collections_engines_assistants_agents_a2a_v1_get_card', value: 'projects_locations_collections_engines_assistants_agents_a2a_v1_get_card' }
    ]}
>
<TabItem value="projects_locations_collections_engines_assistants_agents_a2a_v1_get_card">

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
    <td>A human readable name for the agent. Example: "Recipe Agent"</td>
</tr>
<tr>
    <td><CopyableCode code="additionalInterfaces" /></td>
    <td><code>array</code></td>
    <td>Announcement of additional supported transports. Client can use any of the supported transports.</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td>A2A Capability set supported by the agent. (id: A2aV1AgentCapabilities)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultInputModes" /></td>
    <td><code>array</code></td>
    <td>protolint:enable REPEATED_FIELD_NAMES_PLURALIZED The set of interaction modes that the agent supports across all skills. This can be overridden per skill. Defined as mime types.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultOutputModes" /></td>
    <td><code>array</code></td>
    <td>The mime types supported as outputs from this agent.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the agent's domain of action/solution space. Example: "Agent that helps users with recipes and cooking."</td>
</tr>
<tr>
    <td><CopyableCode code="documentationUrl" /></td>
    <td><code>string</code></td>
    <td>A url to provide additional documentation about the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="iconUrl" /></td>
    <td><code>string</code></td>
    <td>An optional URL to an icon for the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="preferredTransport" /></td>
    <td><code>string</code></td>
    <td>The transport of the preferred endpoint. If empty, defaults to JSONRPC.</td>
</tr>
<tr>
    <td><CopyableCode code="protocolVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the A2A protocol this agent supports.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>object</code></td>
    <td>The service provider of the agent. (id: A2aV1AgentProvider)</td>
</tr>
<tr>
    <td><CopyableCode code="security" /></td>
    <td><code>array</code></td>
    <td>protolint:disable REPEATED_FIELD_NAMES_PLURALIZED Security requirements for contacting the agent. This list can be seen as an OR of ANDs. Each object in the list describes one possible set of security requirements that must be present on a request. This allows specifying, for example, "callers must either use OAuth OR an API Key AND mTLS." Example: security &#123; schemes &#123; key: "oauth" value &#123; list: ["read"] &#125; &#125; &#125; security &#123; schemes &#123; key: "api-key" &#125; schemes &#123; key: "mtls" &#125; &#125;</td>
</tr>
<tr>
    <td><CopyableCode code="securitySchemes" /></td>
    <td><code>object</code></td>
    <td>The security scheme details used for authenticating with this agent.</td>
</tr>
<tr>
    <td><CopyableCode code="signatures" /></td>
    <td><code>array</code></td>
    <td>JSON Web Signatures computed for this AgentCard.</td>
</tr>
<tr>
    <td><CopyableCode code="skills" /></td>
    <td><code>array</code></td>
    <td>Skills represent a unit of ability an agent can perform. This may somewhat abstract but represents a more focused set of actions that the agent is highly likely to succeed at.</td>
</tr>
<tr>
    <td><CopyableCode code="supportsAuthenticatedExtendedCard" /></td>
    <td><code>boolean</code></td>
    <td>Whether the agent supports providing an extended agent card when the user is authenticated, i.e. is the card from .well-known different than the card from GetAgentCard.</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>A URL to the address the agent is hosted at. This represents the preferred endpoint as declared by the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the agent. Example: "1.0.0"</td>
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
    <td><a href="#projects_locations_collections_engines_assistants_agents_a2a_v1_get_card"><CopyableCode code="projects_locations_collections_engines_assistants_agents_a2a_v1_get_card" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-assistantsId"><code>assistantsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td>GetAgentCard returns the agent card for the agent.</td>
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
<tr id="parameter-assistantsId">
    <td><CopyableCode code="assistantsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-collectionsId">
    <td><CopyableCode code="collectionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-enginesId">
    <td><CopyableCode code="enginesId" /></td>
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
    defaultValue="projects_locations_collections_engines_assistants_agents_a2a_v1_get_card"
    values={[
        { label: 'projects_locations_collections_engines_assistants_agents_a2a_v1_get_card', value: 'projects_locations_collections_engines_assistants_agents_a2a_v1_get_card' }
    ]}
>
<TabItem value="projects_locations_collections_engines_assistants_agents_a2a_v1_get_card">

GetAgentCard returns the agent card for the agent.

```sql
SELECT
name,
additionalInterfaces,
capabilities,
defaultInputModes,
defaultOutputModes,
description,
documentationUrl,
iconUrl,
preferredTransport,
protocolVersion,
provider,
security,
securitySchemes,
signatures,
skills,
supportsAuthenticatedExtendedCard,
url,
version
FROM google.discoveryengine.v1_card
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND enginesId = '{{ enginesId }}' -- required
AND assistantsId = '{{ assistantsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
;
```
</TabItem>
</Tabs>
