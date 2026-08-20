--- 
title: generators
hide_title: false
hide_table_of_contents: false
keywords:
  - generators
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

Creates, updates, deletes, gets or lists a <code>generators</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="generators" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.generators" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_agents_generators_get"
    values={[
        { label: 'projects_locations_agents_generators_get', value: 'projects_locations_agents_generators_get' },
        { label: 'projects_locations_agents_generators_list', value: 'projects_locations_agents_generators_list' }
    ]}
>
<TabItem value="projects_locations_agents_generators_get">

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
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="llmModelSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3LlmModelSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="modelParameter" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3GeneratorModelParameter)</td>
</tr>
<tr>
    <td><CopyableCode code="placeholders" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="promptText" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3Phrase)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_generators_list">

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
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="llmModelSettings" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3LlmModelSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="modelParameter" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3GeneratorModelParameter)</td>
</tr>
<tr>
    <td><CopyableCode code="placeholders" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="promptText" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3Phrase)</td>
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
    <td><a href="#projects_locations_agents_generators_get"><CopyableCode code="projects_locations_agents_generators_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-generatorsId"><code>generatorsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_generators_list"><CopyableCode code="projects_locations_agents_generators_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_generators_create"><CopyableCode code="projects_locations_agents_generators_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_generators_patch"><CopyableCode code="projects_locations_agents_generators_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-generatorsId"><code>generatorsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_generators_delete"><CopyableCode code="projects_locations_agents_generators_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-generatorsId"><code>generatorsId</code></a></td>
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
<tr id="parameter-generatorsId">
    <td><CopyableCode code="generatorsId" /></td>
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
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-languageCode">
    <td><CopyableCode code="languageCode" /></td>
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
    defaultValue="projects_locations_agents_generators_get"
    values={[
        { label: 'projects_locations_agents_generators_get', value: 'projects_locations_agents_generators_get' },
        { label: 'projects_locations_agents_generators_list', value: 'projects_locations_agents_generators_list' }
    ]}
>
<TabItem value="projects_locations_agents_generators_get">

Successful response

```sql
SELECT
name,
displayName,
llmModelSettings,
modelParameter,
placeholders,
promptText
FROM google.dialogflow.generators
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND generatorsId = '{{ generatorsId }}' -- required
AND languageCode = '{{ languageCode }}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_generators_list">

Successful response

```sql
SELECT
name,
displayName,
llmModelSettings,
modelParameter,
placeholders,
promptText
FROM google.dialogflow.generators
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND languageCode = '{{ languageCode }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_agents_generators_create"
    values={[
        { label: 'projects_locations_agents_generators_create', value: 'projects_locations_agents_generators_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_agents_generators_create">

No description available.

```sql
INSERT INTO google.dialogflow.generators (
data__displayName,
data__llmModelSettings,
data__modelParameter,
data__name,
data__placeholders,
data__promptText,
projectsId,
locationsId,
agentsId,
languageCode
)
SELECT 
'{{ displayName }}',
'{{ llmModelSettings }}',
'{{ modelParameter }}',
'{{ name }}',
'{{ placeholders }}',
'{{ promptText }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}',
'{{ languageCode }}'
RETURNING
name,
displayName,
llmModelSettings,
modelParameter,
placeholders,
promptText
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: generators
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the generators resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the generators resource.
    - name: agentsId
      value: "{{ agentsId }}"
      description: Required parameter for the generators resource.
    - name: displayName
      value: "{{ displayName }}"
    - name: llmModelSettings
      value:
        model: "{{ model }}"
        promptText: "{{ promptText }}"
    - name: modelParameter
      value:
        maxDecodeSteps: {{ maxDecodeSteps }}
        temperature: {{ temperature }}
        topK: {{ topK }}
        topP: {{ topP }}
    - name: name
      value: "{{ name }}"
    - name: placeholders
      value:
        - id: "{{ id }}"
          name: "{{ name }}"
    - name: promptText
      value:
        text: "{{ text }}"
    - name: languageCode
      value: "{{ languageCode }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_agents_generators_patch"
    values={[
        { label: 'projects_locations_agents_generators_patch', value: 'projects_locations_agents_generators_patch' }
    ]}
>
<TabItem value="projects_locations_agents_generators_patch">

No description available.

```sql
UPDATE google.dialogflow.generators
SET 
data__displayName = '{{ displayName }}',
data__llmModelSettings = '{{ llmModelSettings }}',
data__modelParameter = '{{ modelParameter }}',
data__name = '{{ name }}',
data__placeholders = '{{ placeholders }}',
data__promptText = '{{ promptText }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND generatorsId = '{{ generatorsId }}' --required
AND languageCode = '{{ languageCode}}'
AND updateMask = '{{ updateMask}}'
RETURNING
name,
displayName,
llmModelSettings,
modelParameter,
placeholders,
promptText;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_agents_generators_delete"
    values={[
        { label: 'projects_locations_agents_generators_delete', value: 'projects_locations_agents_generators_delete' }
    ]}
>
<TabItem value="projects_locations_agents_generators_delete">

No description available.

```sql
DELETE FROM google.dialogflow.generators
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND generatorsId = '{{ generatorsId }}' --required
AND force = '{{ force }}'
;
```
</TabItem>
</Tabs>
