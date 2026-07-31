--- 
title: tools
hide_title: false
hide_table_of_contents: false
keywords:
  - tools
  - dialogflow
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

Creates, updates, deletes, gets or lists a <code>tools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.tools" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_agents_tools_get"
    values={[
        { label: 'projects_locations_agents_tools_get', value: 'projects_locations_agents_tools_get' },
        { label: 'projects_locations_agents_tools_list', value: 'projects_locations_agents_tools_list' }
    ]}
>
<TabItem value="projects_locations_agents_tools_get">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="dataStoreSpec" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3ToolDataStoreTool)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="functionSpec" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3ToolFunctionTool)</td>
</tr>
<tr>
    <td><CopyableCode code="openApiSpec" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3ToolOpenApiTool)</td>
</tr>
<tr>
    <td><CopyableCode code="toolType" /></td>
    <td><code>string</code></td>
    <td> (TOOL_TYPE_UNSPECIFIED, CUSTOMIZED_TOOL, BUILTIN_TOOL)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_tools_list">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="dataStoreSpec" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3ToolDataStoreTool)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="functionSpec" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3ToolFunctionTool)</td>
</tr>
<tr>
    <td><CopyableCode code="openApiSpec" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3ToolOpenApiTool)</td>
</tr>
<tr>
    <td><CopyableCode code="toolType" /></td>
    <td><code>string</code></td>
    <td> (TOOL_TYPE_UNSPECIFIED, CUSTOMIZED_TOOL, BUILTIN_TOOL)</td>
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
    <td><a href="#projects_locations_agents_tools_get"><CopyableCode code="projects_locations_agents_tools_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-toolsId"><code>toolsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_tools_list"><CopyableCode code="projects_locations_agents_tools_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_tools_create"><CopyableCode code="projects_locations_agents_tools_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_tools_patch"><CopyableCode code="projects_locations_agents_tools_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-toolsId"><code>toolsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_tools_delete"><CopyableCode code="projects_locations_agents_tools_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-toolsId"><code>toolsId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td></td>
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
<tr id="parameter-toolsId">
    <td><CopyableCode code="toolsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
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
    defaultValue="projects_locations_agents_tools_get"
    values={[
        { label: 'projects_locations_agents_tools_get', value: 'projects_locations_agents_tools_get' },
        { label: 'projects_locations_agents_tools_list', value: 'projects_locations_agents_tools_list' }
    ]}
>
<TabItem value="projects_locations_agents_tools_get">

Successful response

```sql
SELECT
name,
dataStoreSpec,
description,
displayName,
functionSpec,
openApiSpec,
toolType
FROM google.dialogflow.tools
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND toolsId = '{{ toolsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_agents_tools_list">

Successful response

```sql
SELECT
name,
dataStoreSpec,
description,
displayName,
functionSpec,
openApiSpec,
toolType
FROM google.dialogflow.tools
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_agents_tools_create"
    values={[
        { label: 'projects_locations_agents_tools_create', value: 'projects_locations_agents_tools_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_agents_tools_create">

No description available.

```sql
INSERT INTO google.dialogflow.tools (
data__displayName,
data__functionSpec,
data__openApiSpec,
data__name,
data__description,
data__dataStoreSpec,
projectsId,
locationsId,
agentsId
)
SELECT 
'{{ displayName }}',
'{{ functionSpec }}',
'{{ openApiSpec }}',
'{{ name }}',
'{{ description }}',
'{{ dataStoreSpec }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}'
RETURNING
name,
dataStoreSpec,
description,
displayName,
functionSpec,
openApiSpec,
toolType
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tools
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the tools resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the tools resource.
    - name: agentsId
      value: "{{ agentsId }}"
      description: Required parameter for the tools resource.
    - name: displayName
      value: "{{ displayName }}"
    - name: functionSpec
      value:
        inputSchema: "{{ inputSchema }}"
        outputSchema: "{{ outputSchema }}"
    - name: openApiSpec
      value:
        authentication:
          bearerTokenConfig:
            secretVersionForToken: "{{ secretVersionForToken }}"
            token: "{{ token }}"
          serviceAccountAuthConfig:
            serviceAccount: "{{ serviceAccount }}"
          apiKeyConfig:
            keyName: "{{ keyName }}"
            apiKey: "{{ apiKey }}"
            secretVersionForApiKey: "{{ secretVersionForApiKey }}"
            requestLocation: "{{ requestLocation }}"
          serviceAgentAuthConfig:
            serviceAgentAuth: "{{ serviceAgentAuth }}"
          oauthConfig:
            secretVersionForClientSecret: "{{ secretVersionForClientSecret }}"
            oauthGrantType: "{{ oauthGrantType }}"
            scopes:
              - "{{ scopes }}"
            clientSecret: "{{ clientSecret }}"
            clientId: "{{ clientId }}"
            tokenEndpoint: "{{ tokenEndpoint }}"
        textSchema: "{{ textSchema }}"
        tlsConfig:
          caCerts:
            - displayName: "{{ displayName }}"
              cert: "{{ cert }}"
        serviceDirectoryConfig:
          service: "{{ service }}"
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: dataStoreSpec
      value:
        dataStoreConnections:
          - dataStore: "{{ dataStore }}"
            documentProcessingMode: "{{ documentProcessingMode }}"
            dataStoreType: "{{ dataStoreType }}"
        fallbackPrompt: "{{ fallbackPrompt }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_agents_tools_patch"
    values={[
        { label: 'projects_locations_agents_tools_patch', value: 'projects_locations_agents_tools_patch' }
    ]}
>
<TabItem value="projects_locations_agents_tools_patch">

No description available.

```sql
UPDATE google.dialogflow.tools
SET 
data__displayName = '{{ displayName }}',
data__functionSpec = '{{ functionSpec }}',
data__openApiSpec = '{{ openApiSpec }}',
data__name = '{{ name }}',
data__description = '{{ description }}',
data__dataStoreSpec = '{{ dataStoreSpec }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND toolsId = '{{ toolsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
dataStoreSpec,
description,
displayName,
functionSpec,
openApiSpec,
toolType;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_agents_tools_delete"
    values={[
        { label: 'projects_locations_agents_tools_delete', value: 'projects_locations_agents_tools_delete' }
    ]}
>
<TabItem value="projects_locations_agents_tools_delete">

No description available.

```sql
DELETE FROM google.dialogflow.tools
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND toolsId = '{{ toolsId }}' --required
AND force = '{{ force }}'
;
```
</TabItem>
</Tabs>
