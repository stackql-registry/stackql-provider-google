--- 
title: engines
hide_title: false
hide_table_of_contents: false
keywords:
  - engines
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

Creates, updates, deletes, gets or lists an <code>engines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="engines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.engines" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_collections_engines_get"
    values={[
        { label: 'projects_locations_collections_engines_get', value: 'projects_locations_collections_engines_get' },
        { label: 'projects_locations_collections_engines_list', value: 'projects_locations_collections_engines_list' }
    ]}
>
<TabItem value="projects_locations_collections_engines_get">

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
    <td>Immutable. Identifier. The fully qualified resource name of the engine. This field must be a UTF-8 encoded string with a length limit of 1024 characters. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/collections/&#123;collection&#125;/engines/&#123;engine&#125;` engine should be 1-63 characters, and valid characters are /a-z0-9*/. Otherwise, an INVALID_ARGUMENT error is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="agentGatewaySetting" /></td>
    <td><code>object</code></td>
    <td>Optional. The agent gateway setting for the engine. (id: GoogleCloudDiscoveryengineV1AgentGatewaySetting)</td>
</tr>
<tr>
    <td><CopyableCode code="appType" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. This the application type which this engine resource represents. NOTE: this is a new concept independ of existing industry vertical or solution type. (APP_TYPE_UNSPECIFIED, APP_TYPE_INTRANET)</td>
</tr>
<tr>
    <td><CopyableCode code="associatedAgentRegistry" /></td>
    <td><code>string</code></td>
    <td>Output only. The Agent registry containing the agents, MCP servers and tools associated with this engine. Derived server-side from the linked Agent Gateway's registry.</td>
</tr>
<tr>
    <td><CopyableCode code="chatEngineConfig" /></td>
    <td><code>object</code></td>
    <td>Configurations for the Chat Engine. Only applicable if solution_type is SOLUTION_TYPE_CHAT. (id: GoogleCloudDiscoveryengineV1EngineChatEngineConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="chatEngineMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Additional information of the Chat Engine. Only applicable if solution_type is SOLUTION_TYPE_CHAT. (id: GoogleCloudDiscoveryengineV1EngineChatEngineMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="cmekConfig" /></td>
    <td><code>object</code></td>
    <td>Configurations used to enable CMEK data encryption with Cloud KMS keys. (id: GoogleCloudDiscoveryengineV1CmekConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="commonConfig" /></td>
    <td><code>object</code></td>
    <td>Common config spec that specifies the metadata of the engine. (id: GoogleCloudDiscoveryengineV1EngineCommonConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="configurableBillingApproach" /></td>
    <td><code>string</code></td>
    <td>Optional. Configuration for configurable billing approach. (CONFIGURABLE_BILLING_APPROACH_UNSPECIFIED, CONFIGURABLE_BILLING_APPROACH_ENABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="connectorTenantInfo" /></td>
    <td><code>object</code></td>
    <td>Optional. Maps a connector ID (e.g., "hybrid-github", "shopify") to tenant-specific information required for that connector. The structure of the tenant information string is connector-dependent.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp the Recommendation Engine was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="dataStoreIds" /></td>
    <td><code>array</code></td>
    <td>Optional. The data stores associated with this engine. For SOLUTION_TYPE_SEARCH and SOLUTION_TYPE_RECOMMENDATION type of engines, they can only associate with at most one data store. If solution_type is SOLUTION_TYPE_CHAT, multiple DataStores in the same Collection can be associated here. Note that when used in CreateEngineRequest, one DataStore id must be provided as the system will use it for necessary initializations.</td>
</tr>
<tr>
    <td><CopyableCode code="disableAnalytics" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether to disable analytics for searches performed on this engine.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="features" /></td>
    <td><code>object</code></td>
    <td>Optional. Feature config for the engine to opt in or opt out of features. Supported keys: * `*`: all features, if it's present, all other feature state settings are ignored. * `agent-gallery` * `no-code-agent-builder` * `prompt-gallery` * `model-selector` * `notebook-lm` * `people-search` * `people-search-org-chart` * `bi-directional-audio` * `feedback` * `session-sharing` * `personalization-memory` * `personalization-suggested-highlights` * `mobile-app-access` * `disable-agent-sharing` * `disable-image-generation` * `disable-video-generation` * `disable-onedrive-upload` * `disable-talk-to-content` * `disable-google-drive-upload` * `disable-welcome-emails` * `disable-canvas` * `canvas-workspace` * `disable-skills` * `disable-projects` * `enable-end-user-sharing-with-groups` * `single-agent-orchestration` * `multi-agent-orchestration` * `cross-product-intelligence`</td>
</tr>
<tr>
    <td><CopyableCode code="industryVertical" /></td>
    <td><code>string</code></td>
    <td>Optional. The industry vertical that the engine registers. The restriction of the Engine industry vertical is based on DataStore: Vertical on Engine has to match vertical of the DataStore linked to the engine. (INDUSTRY_VERTICAL_UNSPECIFIED, GENERIC, MEDIA, HEALTHCARE_FHIR)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeGraphConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configurations for the Knowledge Graph. Only applicable if solution_type is SOLUTION_TYPE_SEARCH. (id: GoogleCloudDiscoveryengineV1EngineKnowledgeGraphConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="marketplaceAgentVisibility" /></td>
    <td><code>string</code></td>
    <td>Optional. The visibility of marketplace agents in the agent gallery. (MARKETPLACE_AGENT_VISIBILITY_UNSPECIFIED, SHOW_AVAILABLE_AGENTS_ONLY, SHOW_AGENTS_ALREADY_INTEGRATED, SHOW_AGENTS_ALREADY_PURCHASED, SHOW_ALL_AGENTS)</td>
</tr>
<tr>
    <td><CopyableCode code="mediaRecommendationEngineConfig" /></td>
    <td><code>object</code></td>
    <td>Configurations for the Media Engine. Only applicable on the data stores with solution_type SOLUTION_TYPE_RECOMMENDATION and IndustryVertical.MEDIA vertical. (id: GoogleCloudDiscoveryengineV1EngineMediaRecommendationEngineConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="modelConfigs" /></td>
    <td><code>object</code></td>
    <td>Optional. Maps a model name to its specific configuration for this engine. This allows admin users to turn on/off individual models. This only stores models whose states are overridden by the admin. When the state is unspecified, or model_configs is empty for this model, the system will decide if this model should be available or not based on the default configuration. For example, a preview model should be disabled by default if the admin has not chosen to enable it.</td>
</tr>
<tr>
    <td><CopyableCode code="observabilityConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Observability config for the engine. (id: GoogleCloudDiscoveryengineV1ObservabilityConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="procurementContactEmails" /></td>
    <td><code>array</code></td>
    <td>Optional. The emails of the procurement contacts.</td>
</tr>
<tr>
    <td><CopyableCode code="searchEngineConfig" /></td>
    <td><code>object</code></td>
    <td>Configurations for the Search Engine. Only applicable if solution_type is SOLUTION_TYPE_SEARCH. (id: GoogleCloudDiscoveryengineV1EngineSearchEngineConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="solutionType" /></td>
    <td><code>string</code></td>
    <td>Required. The solutions of the engine. (SOLUTION_TYPE_UNSPECIFIED, SOLUTION_TYPE_RECOMMENDATION, SOLUTION_TYPE_SEARCH, SOLUTION_TYPE_CHAT, SOLUTION_TYPE_GENERATIVE_CHAT, SOLUTION_TYPE_AI_MODE)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp the Recommendation Engine was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_collections_engines_list">

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
    <td>Immutable. Identifier. The fully qualified resource name of the engine. This field must be a UTF-8 encoded string with a length limit of 1024 characters. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/collections/&#123;collection&#125;/engines/&#123;engine&#125;` engine should be 1-63 characters, and valid characters are /a-z0-9*/. Otherwise, an INVALID_ARGUMENT error is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="agentGatewaySetting" /></td>
    <td><code>object</code></td>
    <td>Optional. The agent gateway setting for the engine. (id: GoogleCloudDiscoveryengineV1AgentGatewaySetting)</td>
</tr>
<tr>
    <td><CopyableCode code="appType" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. This the application type which this engine resource represents. NOTE: this is a new concept independ of existing industry vertical or solution type. (APP_TYPE_UNSPECIFIED, APP_TYPE_INTRANET)</td>
</tr>
<tr>
    <td><CopyableCode code="associatedAgentRegistry" /></td>
    <td><code>string</code></td>
    <td>Output only. The Agent registry containing the agents, MCP servers and tools associated with this engine. Derived server-side from the linked Agent Gateway's registry.</td>
</tr>
<tr>
    <td><CopyableCode code="chatEngineConfig" /></td>
    <td><code>object</code></td>
    <td>Configurations for the Chat Engine. Only applicable if solution_type is SOLUTION_TYPE_CHAT. (id: GoogleCloudDiscoveryengineV1EngineChatEngineConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="chatEngineMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Additional information of the Chat Engine. Only applicable if solution_type is SOLUTION_TYPE_CHAT. (id: GoogleCloudDiscoveryengineV1EngineChatEngineMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="cmekConfig" /></td>
    <td><code>object</code></td>
    <td>Configurations used to enable CMEK data encryption with Cloud KMS keys. (id: GoogleCloudDiscoveryengineV1CmekConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="commonConfig" /></td>
    <td><code>object</code></td>
    <td>Common config spec that specifies the metadata of the engine. (id: GoogleCloudDiscoveryengineV1EngineCommonConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="configurableBillingApproach" /></td>
    <td><code>string</code></td>
    <td>Optional. Configuration for configurable billing approach. (CONFIGURABLE_BILLING_APPROACH_UNSPECIFIED, CONFIGURABLE_BILLING_APPROACH_ENABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="connectorTenantInfo" /></td>
    <td><code>object</code></td>
    <td>Optional. Maps a connector ID (e.g., "hybrid-github", "shopify") to tenant-specific information required for that connector. The structure of the tenant information string is connector-dependent.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp the Recommendation Engine was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="dataStoreIds" /></td>
    <td><code>array</code></td>
    <td>Optional. The data stores associated with this engine. For SOLUTION_TYPE_SEARCH and SOLUTION_TYPE_RECOMMENDATION type of engines, they can only associate with at most one data store. If solution_type is SOLUTION_TYPE_CHAT, multiple DataStores in the same Collection can be associated here. Note that when used in CreateEngineRequest, one DataStore id must be provided as the system will use it for necessary initializations.</td>
</tr>
<tr>
    <td><CopyableCode code="disableAnalytics" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether to disable analytics for searches performed on this engine.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="features" /></td>
    <td><code>object</code></td>
    <td>Optional. Feature config for the engine to opt in or opt out of features. Supported keys: * `*`: all features, if it's present, all other feature state settings are ignored. * `agent-gallery` * `no-code-agent-builder` * `prompt-gallery` * `model-selector` * `notebook-lm` * `people-search` * `people-search-org-chart` * `bi-directional-audio` * `feedback` * `session-sharing` * `personalization-memory` * `personalization-suggested-highlights` * `mobile-app-access` * `disable-agent-sharing` * `disable-image-generation` * `disable-video-generation` * `disable-onedrive-upload` * `disable-talk-to-content` * `disable-google-drive-upload` * `disable-welcome-emails` * `disable-canvas` * `canvas-workspace` * `disable-skills` * `disable-projects` * `enable-end-user-sharing-with-groups` * `single-agent-orchestration` * `multi-agent-orchestration` * `cross-product-intelligence`</td>
</tr>
<tr>
    <td><CopyableCode code="industryVertical" /></td>
    <td><code>string</code></td>
    <td>Optional. The industry vertical that the engine registers. The restriction of the Engine industry vertical is based on DataStore: Vertical on Engine has to match vertical of the DataStore linked to the engine. (INDUSTRY_VERTICAL_UNSPECIFIED, GENERIC, MEDIA, HEALTHCARE_FHIR)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeGraphConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configurations for the Knowledge Graph. Only applicable if solution_type is SOLUTION_TYPE_SEARCH. (id: GoogleCloudDiscoveryengineV1EngineKnowledgeGraphConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="marketplaceAgentVisibility" /></td>
    <td><code>string</code></td>
    <td>Optional. The visibility of marketplace agents in the agent gallery. (MARKETPLACE_AGENT_VISIBILITY_UNSPECIFIED, SHOW_AVAILABLE_AGENTS_ONLY, SHOW_AGENTS_ALREADY_INTEGRATED, SHOW_AGENTS_ALREADY_PURCHASED, SHOW_ALL_AGENTS)</td>
</tr>
<tr>
    <td><CopyableCode code="mediaRecommendationEngineConfig" /></td>
    <td><code>object</code></td>
    <td>Configurations for the Media Engine. Only applicable on the data stores with solution_type SOLUTION_TYPE_RECOMMENDATION and IndustryVertical.MEDIA vertical. (id: GoogleCloudDiscoveryengineV1EngineMediaRecommendationEngineConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="modelConfigs" /></td>
    <td><code>object</code></td>
    <td>Optional. Maps a model name to its specific configuration for this engine. This allows admin users to turn on/off individual models. This only stores models whose states are overridden by the admin. When the state is unspecified, or model_configs is empty for this model, the system will decide if this model should be available or not based on the default configuration. For example, a preview model should be disabled by default if the admin has not chosen to enable it.</td>
</tr>
<tr>
    <td><CopyableCode code="observabilityConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Observability config for the engine. (id: GoogleCloudDiscoveryengineV1ObservabilityConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="procurementContactEmails" /></td>
    <td><code>array</code></td>
    <td>Optional. The emails of the procurement contacts.</td>
</tr>
<tr>
    <td><CopyableCode code="searchEngineConfig" /></td>
    <td><code>object</code></td>
    <td>Configurations for the Search Engine. Only applicable if solution_type is SOLUTION_TYPE_SEARCH. (id: GoogleCloudDiscoveryengineV1EngineSearchEngineConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="solutionType" /></td>
    <td><code>string</code></td>
    <td>Required. The solutions of the engine. (SOLUTION_TYPE_UNSPECIFIED, SOLUTION_TYPE_RECOMMENDATION, SOLUTION_TYPE_SEARCH, SOLUTION_TYPE_CHAT, SOLUTION_TYPE_GENERATIVE_CHAT, SOLUTION_TYPE_AI_MODE)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp the Recommendation Engine was last updated.</td>
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
    <td><a href="#projects_locations_collections_engines_get"><CopyableCode code="projects_locations_collections_engines_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a></td>
    <td></td>
    <td>Gets an Engine.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_list"><CopyableCode code="projects_locations_collections_engines_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists all the Engines associated with the project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_create"><CopyableCode code="projects_locations_collections_engines_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a></td>
    <td><a href="#parameter-engineId"><code>engineId</code></a></td>
    <td>Creates an Engine.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_patch"><CopyableCode code="projects_locations_collections_engines_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an Engine</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_delete"><CopyableCode code="projects_locations_collections_engines_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a></td>
    <td></td>
    <td>Deletes an Engine.</td>
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
<tr id="parameter-engineId">
    <td><CopyableCode code="engineId" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_collections_engines_get"
    values={[
        { label: 'projects_locations_collections_engines_get', value: 'projects_locations_collections_engines_get' },
        { label: 'projects_locations_collections_engines_list', value: 'projects_locations_collections_engines_list' }
    ]}
>
<TabItem value="projects_locations_collections_engines_get">

Gets an Engine.

```sql
SELECT
name,
agentGatewaySetting,
appType,
associatedAgentRegistry,
chatEngineConfig,
chatEngineMetadata,
cmekConfig,
commonConfig,
configurableBillingApproach,
connectorTenantInfo,
createTime,
dataStoreIds,
disableAnalytics,
displayName,
features,
industryVertical,
knowledgeGraphConfig,
marketplaceAgentVisibility,
mediaRecommendationEngineConfig,
modelConfigs,
observabilityConfig,
procurementContactEmails,
searchEngineConfig,
solutionType,
updateTime
FROM google.discoveryengine.engines
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND enginesId = '{{ enginesId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_collections_engines_list">

Lists all the Engines associated with the project.

```sql
SELECT
name,
agentGatewaySetting,
appType,
associatedAgentRegistry,
chatEngineConfig,
chatEngineMetadata,
cmekConfig,
commonConfig,
configurableBillingApproach,
connectorTenantInfo,
createTime,
dataStoreIds,
disableAnalytics,
displayName,
features,
industryVertical,
knowledgeGraphConfig,
marketplaceAgentVisibility,
mediaRecommendationEngineConfig,
modelConfigs,
observabilityConfig,
procurementContactEmails,
searchEngineConfig,
solutionType,
updateTime
FROM google.discoveryengine.engines
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_collections_engines_create"
    values={[
        { label: 'projects_locations_collections_engines_create', value: 'projects_locations_collections_engines_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_collections_engines_create">

Creates an Engine.

```sql
INSERT INTO google.discoveryengine.engines (
data__configurableBillingApproach,
data__mediaRecommendationEngineConfig,
data__marketplaceAgentVisibility,
data__procurementContactEmails,
data__name,
data__industryVertical,
data__modelConfigs,
data__solutionType,
data__knowledgeGraphConfig,
data__dataStoreIds,
data__observabilityConfig,
data__displayName,
data__appType,
data__disableAnalytics,
data__chatEngineConfig,
data__connectorTenantInfo,
data__agentGatewaySetting,
data__searchEngineConfig,
data__features,
data__commonConfig,
projectsId,
locationsId,
collectionsId,
engineId
)
SELECT 
'{{ configurableBillingApproach }}',
'{{ mediaRecommendationEngineConfig }}',
'{{ marketplaceAgentVisibility }}',
'{{ procurementContactEmails }}',
'{{ name }}',
'{{ industryVertical }}',
'{{ modelConfigs }}',
'{{ solutionType }}',
'{{ knowledgeGraphConfig }}',
'{{ dataStoreIds }}',
'{{ observabilityConfig }}',
'{{ displayName }}',
'{{ appType }}',
{{ disableAnalytics }},
'{{ chatEngineConfig }}',
'{{ connectorTenantInfo }}',
'{{ agentGatewaySetting }}',
'{{ searchEngineConfig }}',
'{{ features }}',
'{{ commonConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ collectionsId }}',
'{{ engineId }}'
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
- name: engines
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the engines resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the engines resource.
    - name: collectionsId
      value: "{{ collectionsId }}"
      description: Required parameter for the engines resource.
    - name: configurableBillingApproach
      value: "{{ configurableBillingApproach }}"
      description: |
        Optional. Configuration for configurable billing approach.
      valid_values: ['CONFIGURABLE_BILLING_APPROACH_UNSPECIFIED', 'CONFIGURABLE_BILLING_APPROACH_ENABLED']
    - name: mediaRecommendationEngineConfig
      description: |
        Configurations for the Media Engine. Only applicable on the data stores with solution_type SOLUTION_TYPE_RECOMMENDATION and IndustryVertical.MEDIA vertical.
      value:
        engineFeaturesConfig:
          mostPopularConfig:
            timeWindowDays: "{{ timeWindowDays }}"
          recommendedForYouConfig:
            contextEventType: "{{ contextEventType }}"
        optimizationObjective: "{{ optimizationObjective }}"
        optimizationObjectiveConfig:
          targetField: "{{ targetField }}"
          targetFieldValueFloat: {{ targetFieldValueFloat }}
        type: "{{ type }}"
        trainingState: "{{ trainingState }}"
    - name: marketplaceAgentVisibility
      value: "{{ marketplaceAgentVisibility }}"
      description: |
        Optional. The visibility of marketplace agents in the agent gallery.
      valid_values: ['MARKETPLACE_AGENT_VISIBILITY_UNSPECIFIED', 'SHOW_AVAILABLE_AGENTS_ONLY', 'SHOW_AGENTS_ALREADY_INTEGRATED', 'SHOW_AGENTS_ALREADY_PURCHASED', 'SHOW_ALL_AGENTS']
    - name: procurementContactEmails
      value:
        - "{{ procurementContactEmails }}"
      description: |
        Optional. The emails of the procurement contacts.
    - name: name
      value: "{{ name }}"
      description: |
        Immutable. Identifier. The fully qualified resource name of the engine. This field must be a UTF-8 encoded string with a length limit of 1024 characters. Format: \`projects/{project}/locations/{location}/collections/{collection}/engines/{engine}\` engine should be 1-63 characters, and valid characters are /a-z0-9*/. Otherwise, an INVALID_ARGUMENT error is returned.
    - name: industryVertical
      value: "{{ industryVertical }}"
      description: |
        Optional. The industry vertical that the engine registers. The restriction of the Engine industry vertical is based on DataStore: Vertical on Engine has to match vertical of the DataStore linked to the engine.
      valid_values: ['INDUSTRY_VERTICAL_UNSPECIFIED', 'GENERIC', 'MEDIA', 'HEALTHCARE_FHIR']
    - name: modelConfigs
      value: "{{ modelConfigs }}"
      description: |
        Optional. Maps a model name to its specific configuration for this engine. This allows admin users to turn on/off individual models. This only stores models whose states are overridden by the admin. When the state is unspecified, or model_configs is empty for this model, the system will decide if this model should be available or not based on the default configuration. For example, a preview model should be disabled by default if the admin has not chosen to enable it.
    - name: solutionType
      value: "{{ solutionType }}"
      description: |
        Required. The solutions of the engine.
      valid_values: ['SOLUTION_TYPE_UNSPECIFIED', 'SOLUTION_TYPE_RECOMMENDATION', 'SOLUTION_TYPE_SEARCH', 'SOLUTION_TYPE_CHAT', 'SOLUTION_TYPE_GENERATIVE_CHAT', 'SOLUTION_TYPE_AI_MODE']
    - name: knowledgeGraphConfig
      description: |
        Optional. Configurations for the Knowledge Graph. Only applicable if solution_type is SOLUTION_TYPE_SEARCH.
      value:
        featureConfig:
          disablePrivateKgAutoComplete: {{ disablePrivateKgAutoComplete }}
          disablePrivateKgQueryUiChips: {{ disablePrivateKgQueryUiChips }}
          disablePrivateKgEnrichment: {{ disablePrivateKgEnrichment }}
          disablePrivateKgQueryUnderstanding: {{ disablePrivateKgQueryUnderstanding }}
        cloudKnowledgeGraphTypes:
          - "{{ cloudKnowledgeGraphTypes }}"
        enableCloudKnowledgeGraph: {{ enableCloudKnowledgeGraph }}
        enablePrivateKnowledgeGraph: {{ enablePrivateKnowledgeGraph }}
        privateKnowledgeGraphTypes:
          - "{{ privateKnowledgeGraphTypes }}"
    - name: dataStoreIds
      value:
        - "{{ dataStoreIds }}"
      description: |
        Optional. The data stores associated with this engine. For SOLUTION_TYPE_SEARCH and SOLUTION_TYPE_RECOMMENDATION type of engines, they can only associate with at most one data store. If solution_type is SOLUTION_TYPE_CHAT, multiple DataStores in the same Collection can be associated here. Note that when used in CreateEngineRequest, one DataStore id must be provided as the system will use it for necessary initializations.
    - name: observabilityConfig
      description: |
        Optional. Observability config for the engine.
      value:
        observabilityEnabled: {{ observabilityEnabled }}
        sensitiveLoggingEnabled: {{ sensitiveLoggingEnabled }}
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.
    - name: appType
      value: "{{ appType }}"
      description: |
        Optional. Immutable. This the application type which this engine resource represents. NOTE: this is a new concept independ of existing industry vertical or solution type.
      valid_values: ['APP_TYPE_UNSPECIFIED', 'APP_TYPE_INTRANET']
    - name: disableAnalytics
      value: {{ disableAnalytics }}
      description: |
        Optional. Whether to disable analytics for searches performed on this engine.
    - name: chatEngineConfig
      description: |
        Configurations for the Chat Engine. Only applicable if solution_type is SOLUTION_TYPE_CHAT.
      value:
        allowCrossRegion: {{ allowCrossRegion }}
        agentCreationConfig:
          location: "{{ location }}"
          defaultLanguageCode: "{{ defaultLanguageCode }}"
          business: "{{ business }}"
          timeZone: "{{ timeZone }}"
        dialogflowAgentToLink: "{{ dialogflowAgentToLink }}"
    - name: connectorTenantInfo
      value: "{{ connectorTenantInfo }}"
      description: |
        Optional. Maps a connector ID (e.g., "hybrid-github", "shopify") to tenant-specific information required for that connector. The structure of the tenant information string is connector-dependent.
    - name: agentGatewaySetting
      description: |
        Optional. The agent gateway setting for the engine.
      value:
        defaultEgressAgentGateway:
          name: "{{ name }}"
    - name: searchEngineConfig
      description: |
        Configurations for the Search Engine. Only applicable if solution_type is SOLUTION_TYPE_SEARCH.
      value:
        searchTier: "{{ searchTier }}"
        searchAddOns:
          - "{{ searchAddOns }}"
        requiredSubscriptionTier: "{{ requiredSubscriptionTier }}"
    - name: features
      value: "{{ features }}"
      description: |
        Optional. Feature config for the engine to opt in or opt out of features. Supported keys: * \`*\`: all features, if it's present, all other feature state settings are ignored. * \`agent-gallery\` * \`no-code-agent-builder\` * \`prompt-gallery\` * \`model-selector\` * \`notebook-lm\` * \`people-search\` * \`people-search-org-chart\` * \`bi-directional-audio\` * \`feedback\` * \`session-sharing\` * \`personalization-memory\` * \`personalization-suggested-highlights\` * \`mobile-app-access\` * \`disable-agent-sharing\` * \`disable-image-generation\` * \`disable-video-generation\` * \`disable-onedrive-upload\` * \`disable-talk-to-content\` * \`disable-google-drive-upload\` * \`disable-welcome-emails\` * \`disable-canvas\` * \`canvas-workspace\` * \`disable-skills\` * \`disable-projects\` * \`enable-end-user-sharing-with-groups\` * \`single-agent-orchestration\` * \`multi-agent-orchestration\` * \`cross-product-intelligence\`
    - name: commonConfig
      description: |
        Common config spec that specifies the metadata of the engine.
      value:
        companyName: "{{ companyName }}"
    - name: engineId
      value: "{{ engineId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_collections_engines_patch"
    values={[
        { label: 'projects_locations_collections_engines_patch', value: 'projects_locations_collections_engines_patch' }
    ]}
>
<TabItem value="projects_locations_collections_engines_patch">

Updates an Engine

```sql
UPDATE google.discoveryengine.engines
SET 
data__configurableBillingApproach = '{{ configurableBillingApproach }}',
data__mediaRecommendationEngineConfig = '{{ mediaRecommendationEngineConfig }}',
data__marketplaceAgentVisibility = '{{ marketplaceAgentVisibility }}',
data__procurementContactEmails = '{{ procurementContactEmails }}',
data__name = '{{ name }}',
data__industryVertical = '{{ industryVertical }}',
data__modelConfigs = '{{ modelConfigs }}',
data__solutionType = '{{ solutionType }}',
data__knowledgeGraphConfig = '{{ knowledgeGraphConfig }}',
data__dataStoreIds = '{{ dataStoreIds }}',
data__observabilityConfig = '{{ observabilityConfig }}',
data__displayName = '{{ displayName }}',
data__appType = '{{ appType }}',
data__disableAnalytics = {{ disableAnalytics }},
data__chatEngineConfig = '{{ chatEngineConfig }}',
data__connectorTenantInfo = '{{ connectorTenantInfo }}',
data__agentGatewaySetting = '{{ agentGatewaySetting }}',
data__searchEngineConfig = '{{ searchEngineConfig }}',
data__features = '{{ features }}',
data__commonConfig = '{{ commonConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND enginesId = '{{ enginesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
agentGatewaySetting,
appType,
associatedAgentRegistry,
chatEngineConfig,
chatEngineMetadata,
cmekConfig,
commonConfig,
configurableBillingApproach,
connectorTenantInfo,
createTime,
dataStoreIds,
disableAnalytics,
displayName,
features,
industryVertical,
knowledgeGraphConfig,
marketplaceAgentVisibility,
mediaRecommendationEngineConfig,
modelConfigs,
observabilityConfig,
procurementContactEmails,
searchEngineConfig,
solutionType,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_collections_engines_delete"
    values={[
        { label: 'projects_locations_collections_engines_delete', value: 'projects_locations_collections_engines_delete' }
    ]}
>
<TabItem value="projects_locations_collections_engines_delete">

Deletes an Engine.

```sql
DELETE FROM google.discoveryengine.engines
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND enginesId = '{{ enginesId }}' --required
;
```
</TabItem>
</Tabs>
