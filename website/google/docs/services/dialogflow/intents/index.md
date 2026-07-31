--- 
title: intents
hide_title: false
hide_table_of_contents: false
keywords:
  - intents
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

Creates, updates, deletes, gets or lists an <code>intents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="intents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.intents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_agents_intents_get"
    values={[
        { label: 'projects_locations_agents_intents_get', value: 'projects_locations_agents_intents_get' },
        { label: 'projects_locations_agents_intents_list', value: 'projects_locations_agents_intents_list' }
    ]}
>
<TabItem value="projects_locations_agents_intents_get">

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
    <td><CopyableCode code="dtmfPattern" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="isFallback" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="trainingPhrases" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_intents_list">

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
    <td><CopyableCode code="dtmfPattern" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="isFallback" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="trainingPhrases" /></td>
    <td><code>array</code></td>
    <td></td>
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
    <td><a href="#projects_locations_agents_intents_get"><CopyableCode code="projects_locations_agents_intents_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-intentsId"><code>intentsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_intents_list"><CopyableCode code="projects_locations_agents_intents_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-intentView"><code>intentView</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_intents_create"><CopyableCode code="projects_locations_agents_intents_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_intents_patch"><CopyableCode code="projects_locations_agents_intents_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-intentsId"><code>intentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_intents_delete"><CopyableCode code="projects_locations_agents_intents_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-intentsId"><code>intentsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_intents_import"><CopyableCode code="projects_locations_agents_intents_import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_intents_export"><CopyableCode code="projects_locations_agents_intents_export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
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
<tr id="parameter-intentsId">
    <td><CopyableCode code="intentsId" /></td>
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
<tr id="parameter-intentView">
    <td><CopyableCode code="intentView" /></td>
    <td><code>string</code></td>
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
    defaultValue="projects_locations_agents_intents_get"
    values={[
        { label: 'projects_locations_agents_intents_get', value: 'projects_locations_agents_intents_get' },
        { label: 'projects_locations_agents_intents_list', value: 'projects_locations_agents_intents_list' }
    ]}
>
<TabItem value="projects_locations_agents_intents_get">

Successful response

```sql
SELECT
name,
description,
displayName,
dtmfPattern,
isFallback,
labels,
parameters,
priority,
trainingPhrases
FROM google.dialogflow.intents
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND intentsId = '{{ intentsId }}' -- required
AND languageCode = '{{ languageCode }}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_intents_list">

Successful response

```sql
SELECT
name,
description,
displayName,
dtmfPattern,
isFallback,
labels,
parameters,
priority,
trainingPhrases
FROM google.dialogflow.intents
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND languageCode = '{{ languageCode }}'
AND intentView = '{{ intentView }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_agents_intents_create"
    values={[
        { label: 'projects_locations_agents_intents_create', value: 'projects_locations_agents_intents_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_agents_intents_create">

No description available.

```sql
INSERT INTO google.dialogflow.intents (
data__trainingPhrases,
data__priority,
data__displayName,
data__parameters,
data__isFallback,
data__dtmfPattern,
data__name,
data__labels,
data__description,
projectsId,
locationsId,
agentsId,
languageCode
)
SELECT 
'{{ trainingPhrases }}',
{{ priority }},
'{{ displayName }}',
'{{ parameters }}',
{{ isFallback }},
'{{ dtmfPattern }}',
'{{ name }}',
'{{ labels }}',
'{{ description }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}',
'{{ languageCode }}'
RETURNING
name,
description,
displayName,
dtmfPattern,
isFallback,
labels,
parameters,
priority,
trainingPhrases
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: intents
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the intents resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the intents resource.
    - name: agentsId
      value: "{{ agentsId }}"
      description: Required parameter for the intents resource.
    - name: trainingPhrases
      value:
        - parts: "{{ parts }}"
          repeatCount: {{ repeatCount }}
          id: "{{ id }}"
    - name: priority
      value: {{ priority }}
    - name: displayName
      value: "{{ displayName }}"
    - name: parameters
      value:
        - entityType: "{{ entityType }}"
          redact: {{ redact }}
          id: "{{ id }}"
          isList: {{ isList }}
    - name: isFallback
      value: {{ isFallback }}
    - name: dtmfPattern
      value: "{{ dtmfPattern }}"
    - name: name
      value: "{{ name }}"
    - name: labels
      value: "{{ labels }}"
    - name: description
      value: "{{ description }}"
    - name: languageCode
      value: "{{ languageCode }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_agents_intents_patch"
    values={[
        { label: 'projects_locations_agents_intents_patch', value: 'projects_locations_agents_intents_patch' }
    ]}
>
<TabItem value="projects_locations_agents_intents_patch">

No description available.

```sql
UPDATE google.dialogflow.intents
SET 
data__trainingPhrases = '{{ trainingPhrases }}',
data__priority = {{ priority }},
data__displayName = '{{ displayName }}',
data__parameters = '{{ parameters }}',
data__isFallback = {{ isFallback }},
data__dtmfPattern = '{{ dtmfPattern }}',
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__description = '{{ description }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND intentsId = '{{ intentsId }}' --required
AND updateMask = '{{ updateMask}}'
AND languageCode = '{{ languageCode}}'
RETURNING
name,
description,
displayName,
dtmfPattern,
isFallback,
labels,
parameters,
priority,
trainingPhrases;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_agents_intents_delete"
    values={[
        { label: 'projects_locations_agents_intents_delete', value: 'projects_locations_agents_intents_delete' }
    ]}
>
<TabItem value="projects_locations_agents_intents_delete">

No description available.

```sql
DELETE FROM google.dialogflow.intents
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND intentsId = '{{ intentsId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_agents_intents_import"
    values={[
        { label: 'projects_locations_agents_intents_import', value: 'projects_locations_agents_intents_import' },
        { label: 'projects_locations_agents_intents_export', value: 'projects_locations_agents_intents_export' }
    ]}
>
<TabItem value="projects_locations_agents_intents_import">

Successful response

```sql
EXEC google.dialogflow.intents.projects_locations_agents_intents_import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required 
@@json=
'{
"intentsUri": "{{ intentsUri }}", 
"intentsContent": "{{ intentsContent }}", 
"mergeOption": "{{ mergeOption }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_intents_export">

Successful response

```sql
EXEC google.dialogflow.intents.projects_locations_agents_intents_export 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required 
@@json=
'{
"dataFormat": "{{ dataFormat }}", 
"intents": "{{ intents }}", 
"intentsUri": "{{ intentsUri }}", 
"intentsContentInline": {{ intentsContentInline }}
}'
;
```
</TabItem>
</Tabs>
