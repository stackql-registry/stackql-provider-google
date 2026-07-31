--- 
title: assistants
hide_title: false
hide_table_of_contents: false
keywords:
  - assistants
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

Creates, updates, deletes, gets or lists an <code>assistants</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assistants" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.assistants" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_collections_engines_assistants_get"
    values={[
        { label: 'projects_locations_collections_engines_assistants_get', value: 'projects_locations_collections_engines_assistants_get' },
        { label: 'projects_locations_collections_engines_assistants_list', value: 'projects_locations_collections_engines_assistants_list' }
    ]}
>
<TabItem value="projects_locations_collections_engines_assistants_get">

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
    <td>Immutable. Resource name of the assistant. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/collections/&#123;collection&#125;/engines/&#123;engine&#125;/assistants/&#123;assistant&#125;` It must be a UTF-8 encoded string with a length limit of 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Represents the time when this Assistant was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customerPolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. Customer policy for the assistant. (id: GoogleCloudDiscoveryengineV1AssistantCustomerPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultWebGroundingToggleOff" /></td>
    <td><code>boolean</code></td>
    <td>Optional. This field controls the default web grounding toggle for end users if `web_grounding_type` is set to `WEB_GROUNDING_TYPE_GOOGLE_SEARCH` or `WEB_GROUNDING_TYPE_ENTERPRISE_WEB_SEARCH`. By default, this field is set to false. If `web_grounding_type` is `WEB_GROUNDING_TYPE_GOOGLE_SEARCH` or `WEB_GROUNDING_TYPE_ENTERPRISE_WEB_SEARCH`, end users will have web grounding enabled by default on UI. If true, grounding toggle will be disabled by default on UI. End users can still enable web grounding in the UI if web grounding is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description for additional information. Expected to be shown on the configuration UI, not to the users of the assistant.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The assistant display name. It must be a UTF-8 encoded string with a length limit of 128 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="enabledTools" /></td>
    <td><code>object</code></td>
    <td>Optional. Note: not implemented yet. Use enabled_actions instead. The enabled tools on this assistant. The keys are connector name, for example "projects/&#123;projectId&#125;/locations/&#123;locationId&#125;/collections/&#123;collectionId&#125;/dataconnector The values consist of admin enabled tools towards the connector instance. Admin can selectively enable multiple tools on any of the connector instances that they created in the project. For example &#123;"jira1ConnectorName": [(toolId1, "createTicket"), (toolId2, "transferTicket")], "gmail1ConnectorName": [(toolId3, "sendEmail"),..] &#125;</td>
</tr>
<tr>
    <td><CopyableCode code="generationConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for the generation of the assistant response. (id: GoogleCloudDiscoveryengineV1AssistantGenerationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Represents the time when this Assistant was most recently updated.</td>
</tr>
<tr>
    <td><CopyableCode code="webGroundingType" /></td>
    <td><code>string</code></td>
    <td>Optional. The type of web grounding to use. (WEB_GROUNDING_TYPE_UNSPECIFIED, WEB_GROUNDING_TYPE_DISABLED, WEB_GROUNDING_TYPE_GOOGLE_SEARCH, WEB_GROUNDING_TYPE_ENTERPRISE_WEB_SEARCH)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_collections_engines_assistants_list">

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
    <td>Immutable. Resource name of the assistant. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/collections/&#123;collection&#125;/engines/&#123;engine&#125;/assistants/&#123;assistant&#125;` It must be a UTF-8 encoded string with a length limit of 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Represents the time when this Assistant was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customerPolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. Customer policy for the assistant. (id: GoogleCloudDiscoveryengineV1AssistantCustomerPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultWebGroundingToggleOff" /></td>
    <td><code>boolean</code></td>
    <td>Optional. This field controls the default web grounding toggle for end users if `web_grounding_type` is set to `WEB_GROUNDING_TYPE_GOOGLE_SEARCH` or `WEB_GROUNDING_TYPE_ENTERPRISE_WEB_SEARCH`. By default, this field is set to false. If `web_grounding_type` is `WEB_GROUNDING_TYPE_GOOGLE_SEARCH` or `WEB_GROUNDING_TYPE_ENTERPRISE_WEB_SEARCH`, end users will have web grounding enabled by default on UI. If true, grounding toggle will be disabled by default on UI. End users can still enable web grounding in the UI if web grounding is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description for additional information. Expected to be shown on the configuration UI, not to the users of the assistant.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The assistant display name. It must be a UTF-8 encoded string with a length limit of 128 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="enabledTools" /></td>
    <td><code>object</code></td>
    <td>Optional. Note: not implemented yet. Use enabled_actions instead. The enabled tools on this assistant. The keys are connector name, for example "projects/&#123;projectId&#125;/locations/&#123;locationId&#125;/collections/&#123;collectionId&#125;/dataconnector The values consist of admin enabled tools towards the connector instance. Admin can selectively enable multiple tools on any of the connector instances that they created in the project. For example &#123;"jira1ConnectorName": [(toolId1, "createTicket"), (toolId2, "transferTicket")], "gmail1ConnectorName": [(toolId3, "sendEmail"),..] &#125;</td>
</tr>
<tr>
    <td><CopyableCode code="generationConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for the generation of the assistant response. (id: GoogleCloudDiscoveryengineV1AssistantGenerationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Represents the time when this Assistant was most recently updated.</td>
</tr>
<tr>
    <td><CopyableCode code="webGroundingType" /></td>
    <td><code>string</code></td>
    <td>Optional. The type of web grounding to use. (WEB_GROUNDING_TYPE_UNSPECIFIED, WEB_GROUNDING_TYPE_DISABLED, WEB_GROUNDING_TYPE_GOOGLE_SEARCH, WEB_GROUNDING_TYPE_ENTERPRISE_WEB_SEARCH)</td>
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
    <td><a href="#projects_locations_collections_engines_assistants_get"><CopyableCode code="projects_locations_collections_engines_assistants_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-assistantsId"><code>assistantsId</code></a></td>
    <td></td>
    <td>Gets an Assistant.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_assistants_list"><CopyableCode code="projects_locations_collections_engines_assistants_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists all Assistants under an Engine.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_assistants_create"><CopyableCode code="projects_locations_collections_engines_assistants_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a></td>
    <td><a href="#parameter-assistantId"><code>assistantId</code></a></td>
    <td>Creates an Assistant.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_assistants_patch"><CopyableCode code="projects_locations_collections_engines_assistants_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-assistantsId"><code>assistantsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an Assistant</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_assistants_delete"><CopyableCode code="projects_locations_collections_engines_assistants_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-assistantsId"><code>assistantsId</code></a></td>
    <td></td>
    <td>Deletes an Assistant.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_assistants_stream_assist"><CopyableCode code="projects_locations_collections_engines_assistants_stream_assist" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-assistantsId"><code>assistantsId</code></a></td>
    <td></td>
    <td>Assists the user with a query in a streaming fashion.</td>
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
<tr id="parameter-assistantId">
    <td><CopyableCode code="assistantId" /></td>
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
    defaultValue="projects_locations_collections_engines_assistants_get"
    values={[
        { label: 'projects_locations_collections_engines_assistants_get', value: 'projects_locations_collections_engines_assistants_get' },
        { label: 'projects_locations_collections_engines_assistants_list', value: 'projects_locations_collections_engines_assistants_list' }
    ]}
>
<TabItem value="projects_locations_collections_engines_assistants_get">

Gets an Assistant.

```sql
SELECT
name,
createTime,
customerPolicy,
defaultWebGroundingToggleOff,
description,
displayName,
enabledTools,
generationConfig,
updateTime,
webGroundingType
FROM google.discoveryengine.assistants
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND enginesId = '{{ enginesId }}' -- required
AND assistantsId = '{{ assistantsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_collections_engines_assistants_list">

Lists all Assistants under an Engine.

```sql
SELECT
name,
createTime,
customerPolicy,
defaultWebGroundingToggleOff,
description,
displayName,
enabledTools,
generationConfig,
updateTime,
webGroundingType
FROM google.discoveryengine.assistants
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND enginesId = '{{ enginesId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_collections_engines_assistants_create"
    values={[
        { label: 'projects_locations_collections_engines_assistants_create', value: 'projects_locations_collections_engines_assistants_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_collections_engines_assistants_create">

Creates an Assistant.

```sql
INSERT INTO google.discoveryengine.assistants (
data__enabledTools,
data__customerPolicy,
data__description,
data__webGroundingType,
data__generationConfig,
data__defaultWebGroundingToggleOff,
data__name,
data__displayName,
projectsId,
locationsId,
collectionsId,
enginesId,
assistantId
)
SELECT 
'{{ enabledTools }}',
'{{ customerPolicy }}',
'{{ description }}',
'{{ webGroundingType }}',
'{{ generationConfig }}',
{{ defaultWebGroundingToggleOff }},
'{{ name }}',
'{{ displayName }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ collectionsId }}',
'{{ enginesId }}',
'{{ assistantId }}'
RETURNING
name,
createTime,
customerPolicy,
defaultWebGroundingToggleOff,
description,
displayName,
enabledTools,
generationConfig,
updateTime,
webGroundingType
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: assistants
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the assistants resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the assistants resource.
    - name: collectionsId
      value: "{{ collectionsId }}"
      description: Required parameter for the assistants resource.
    - name: enginesId
      value: "{{ enginesId }}"
      description: Required parameter for the assistants resource.
    - name: enabledTools
      value: "{{ enabledTools }}"
      description: |
        Optional. Note: not implemented yet. Use enabled_actions instead. The enabled tools on this assistant. The keys are connector name, for example "projects/{projectId}/locations/{locationId}/collections/{collectionId}/dataconnector The values consist of admin enabled tools towards the connector instance. Admin can selectively enable multiple tools on any of the connector instances that they created in the project. For example {"jira1ConnectorName": [(toolId1, "createTicket"), (toolId2, "transferTicket")], "gmail1ConnectorName": [(toolId3, "sendEmail"),..] }
    - name: customerPolicy
      description: |
        Optional. Customer policy for the assistant.
      value:
        modelArmorConfig:
          userPromptTemplate: "{{ userPromptTemplate }}"
          responseTemplate: "{{ responseTemplate }}"
          failureMode: "{{ failureMode }}"
        bannedPhrases:
          - ignoreDiacritics: {{ ignoreDiacritics }}
            matchType: "{{ matchType }}"
            phrase: "{{ phrase }}"
    - name: description
      value: "{{ description }}"
      description: |
        Optional. Description for additional information. Expected to be shown on the configuration UI, not to the users of the assistant.
    - name: webGroundingType
      value: "{{ webGroundingType }}"
      description: |
        Optional. The type of web grounding to use.
      valid_values: ['WEB_GROUNDING_TYPE_UNSPECIFIED', 'WEB_GROUNDING_TYPE_DISABLED', 'WEB_GROUNDING_TYPE_GOOGLE_SEARCH', 'WEB_GROUNDING_TYPE_ENTERPRISE_WEB_SEARCH']
    - name: generationConfig
      description: |
        Optional. Configuration for the generation of the assistant response.
      value:
        allowedModelIds:
          - "{{ allowedModelIds }}"
        defaultLanguage: "{{ defaultLanguage }}"
        defaultModelId: "{{ defaultModelId }}"
        systemInstruction:
          additionalSystemInstruction: "{{ additionalSystemInstruction }}"
    - name: defaultWebGroundingToggleOff
      value: {{ defaultWebGroundingToggleOff }}
      description: |
        Optional. This field controls the default web grounding toggle for end users if \`web_grounding_type\` is set to \`WEB_GROUNDING_TYPE_GOOGLE_SEARCH\` or \`WEB_GROUNDING_TYPE_ENTERPRISE_WEB_SEARCH\`. By default, this field is set to false. If \`web_grounding_type\` is \`WEB_GROUNDING_TYPE_GOOGLE_SEARCH\` or \`WEB_GROUNDING_TYPE_ENTERPRISE_WEB_SEARCH\`, end users will have web grounding enabled by default on UI. If true, grounding toggle will be disabled by default on UI. End users can still enable web grounding in the UI if web grounding is enabled.
    - name: name
      value: "{{ name }}"
      description: |
        Immutable. Resource name of the assistant. Format: \`projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/assistants/{assistant}\` It must be a UTF-8 encoded string with a length limit of 1024 characters.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. The assistant display name. It must be a UTF-8 encoded string with a length limit of 128 characters.
    - name: assistantId
      value: "{{ assistantId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_collections_engines_assistants_patch"
    values={[
        { label: 'projects_locations_collections_engines_assistants_patch', value: 'projects_locations_collections_engines_assistants_patch' }
    ]}
>
<TabItem value="projects_locations_collections_engines_assistants_patch">

Updates an Assistant

```sql
UPDATE google.discoveryengine.assistants
SET 
data__enabledTools = '{{ enabledTools }}',
data__customerPolicy = '{{ customerPolicy }}',
data__description = '{{ description }}',
data__webGroundingType = '{{ webGroundingType }}',
data__generationConfig = '{{ generationConfig }}',
data__defaultWebGroundingToggleOff = {{ defaultWebGroundingToggleOff }},
data__name = '{{ name }}',
data__displayName = '{{ displayName }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND enginesId = '{{ enginesId }}' --required
AND assistantsId = '{{ assistantsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
customerPolicy,
defaultWebGroundingToggleOff,
description,
displayName,
enabledTools,
generationConfig,
updateTime,
webGroundingType;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_collections_engines_assistants_delete"
    values={[
        { label: 'projects_locations_collections_engines_assistants_delete', value: 'projects_locations_collections_engines_assistants_delete' }
    ]}
>
<TabItem value="projects_locations_collections_engines_assistants_delete">

Deletes an Assistant.

```sql
DELETE FROM google.discoveryengine.assistants
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND enginesId = '{{ enginesId }}' --required
AND assistantsId = '{{ assistantsId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_collections_engines_assistants_stream_assist"
    values={[
        { label: 'projects_locations_collections_engines_assistants_stream_assist', value: 'projects_locations_collections_engines_assistants_stream_assist' }
    ]}
>
<TabItem value="projects_locations_collections_engines_assistants_stream_assist">

Assists the user with a query in a streaming fashion.

```sql
EXEC google.discoveryengine.assistants.projects_locations_collections_engines_assistants_stream_assist 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@enginesId='{{ enginesId }}' --required, 
@assistantsId='{{ assistantsId }}' --required 
@@json=
'{
"query": "{{ query }}", 
"session": "{{ session }}", 
"toolsSpec": "{{ toolsSpec }}", 
"userMetadata": "{{ userMetadata }}", 
"generationSpec": "{{ generationSpec }}"
}'
;
```
</TabItem>
</Tabs>
