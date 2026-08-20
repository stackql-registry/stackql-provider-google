--- 
title: entity_types
hide_title: false
hide_table_of_contents: false
keywords:
  - entity_types
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

Creates, updates, deletes, gets or lists an <code>entity_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="entity_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.entity_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_agents_environments_sessions_entity_types_get"
    values={[
        { label: 'projects_locations_agents_environments_sessions_entity_types_get', value: 'projects_locations_agents_environments_sessions_entity_types_get' },
        { label: 'projects_locations_agents_environments_sessions_entity_types_list', value: 'projects_locations_agents_environments_sessions_entity_types_list' },
        { label: 'projects_locations_agents_sessions_entity_types_get', value: 'projects_locations_agents_sessions_entity_types_get' },
        { label: 'projects_locations_agents_entity_types_get', value: 'projects_locations_agents_entity_types_get' },
        { label: 'projects_locations_agents_sessions_entity_types_list', value: 'projects_locations_agents_sessions_entity_types_list' },
        { label: 'projects_locations_agents_entity_types_list', value: 'projects_locations_agents_entity_types_list' }
    ]}
>
<TabItem value="projects_locations_agents_environments_sessions_entity_types_get">

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
    <td><CopyableCode code="entities" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="entityOverrideMode" /></td>
    <td><code>string</code></td>
    <td> (ENTITY_OVERRIDE_MODE_UNSPECIFIED, ENTITY_OVERRIDE_MODE_OVERRIDE, ENTITY_OVERRIDE_MODE_SUPPLEMENT)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_environments_sessions_entity_types_list">

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
    <td><CopyableCode code="entities" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="entityOverrideMode" /></td>
    <td><code>string</code></td>
    <td> (ENTITY_OVERRIDE_MODE_UNSPECIFIED, ENTITY_OVERRIDE_MODE_OVERRIDE, ENTITY_OVERRIDE_MODE_SUPPLEMENT)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_sessions_entity_types_get">

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
    <td><CopyableCode code="entities" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="entityOverrideMode" /></td>
    <td><code>string</code></td>
    <td> (ENTITY_OVERRIDE_MODE_UNSPECIFIED, ENTITY_OVERRIDE_MODE_OVERRIDE, ENTITY_OVERRIDE_MODE_SUPPLEMENT)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_entity_types_get">

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
    <td><CopyableCode code="autoExpansionMode" /></td>
    <td><code>string</code></td>
    <td> (AUTO_EXPANSION_MODE_UNSPECIFIED, AUTO_EXPANSION_MODE_DEFAULT)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="enableFuzzyExtraction" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="entities" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="excludedPhrases" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td> (KIND_UNSPECIFIED, KIND_MAP, KIND_LIST, KIND_REGEXP)</td>
</tr>
<tr>
    <td><CopyableCode code="redact" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_sessions_entity_types_list">

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
    <td><CopyableCode code="entities" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="entityOverrideMode" /></td>
    <td><code>string</code></td>
    <td> (ENTITY_OVERRIDE_MODE_UNSPECIFIED, ENTITY_OVERRIDE_MODE_OVERRIDE, ENTITY_OVERRIDE_MODE_SUPPLEMENT)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_entity_types_list">

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
    <td><CopyableCode code="autoExpansionMode" /></td>
    <td><code>string</code></td>
    <td> (AUTO_EXPANSION_MODE_UNSPECIFIED, AUTO_EXPANSION_MODE_DEFAULT)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="enableFuzzyExtraction" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="entities" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="excludedPhrases" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td> (KIND_UNSPECIFIED, KIND_MAP, KIND_LIST, KIND_REGEXP)</td>
</tr>
<tr>
    <td><CopyableCode code="redact" /></td>
    <td><code>boolean</code></td>
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
    <td><a href="#projects_locations_agents_environments_sessions_entity_types_get"><CopyableCode code="projects_locations_agents_environments_sessions_entity_types_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_sessions_entity_types_list"><CopyableCode code="projects_locations_agents_environments_sessions_entity_types_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_sessions_entity_types_get"><CopyableCode code="projects_locations_agents_sessions_entity_types_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_entity_types_get"><CopyableCode code="projects_locations_agents_entity_types_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_sessions_entity_types_list"><CopyableCode code="projects_locations_agents_sessions_entity_types_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_entity_types_list"><CopyableCode code="projects_locations_agents_entity_types_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_sessions_entity_types_create"><CopyableCode code="projects_locations_agents_environments_sessions_entity_types_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_sessions_entity_types_create"><CopyableCode code="projects_locations_agents_sessions_entity_types_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_entity_types_create"><CopyableCode code="projects_locations_agents_entity_types_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_sessions_entity_types_patch"><CopyableCode code="projects_locations_agents_environments_sessions_entity_types_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_sessions_entity_types_patch"><CopyableCode code="projects_locations_agents_sessions_entity_types_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_entity_types_patch"><CopyableCode code="projects_locations_agents_entity_types_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_sessions_entity_types_delete"><CopyableCode code="projects_locations_agents_environments_sessions_entity_types_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_sessions_entity_types_delete"><CopyableCode code="projects_locations_agents_sessions_entity_types_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_entity_types_delete"><CopyableCode code="projects_locations_agents_entity_types_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-entityTypesId"><code>entityTypesId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_entity_types_export"><CopyableCode code="projects_locations_agents_entity_types_export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_entity_types_import"><CopyableCode code="projects_locations_agents_entity_types_import" /></a></td>
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
<tr id="parameter-entityTypesId">
    <td><CopyableCode code="entityTypesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-environmentsId">
    <td><CopyableCode code="environmentsId" /></td>
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
<tr id="parameter-sessionsId">
    <td><CopyableCode code="sessionsId" /></td>
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
    defaultValue="projects_locations_agents_environments_sessions_entity_types_get"
    values={[
        { label: 'projects_locations_agents_environments_sessions_entity_types_get', value: 'projects_locations_agents_environments_sessions_entity_types_get' },
        { label: 'projects_locations_agents_environments_sessions_entity_types_list', value: 'projects_locations_agents_environments_sessions_entity_types_list' },
        { label: 'projects_locations_agents_sessions_entity_types_get', value: 'projects_locations_agents_sessions_entity_types_get' },
        { label: 'projects_locations_agents_entity_types_get', value: 'projects_locations_agents_entity_types_get' },
        { label: 'projects_locations_agents_sessions_entity_types_list', value: 'projects_locations_agents_sessions_entity_types_list' },
        { label: 'projects_locations_agents_entity_types_list', value: 'projects_locations_agents_entity_types_list' }
    ]}
>
<TabItem value="projects_locations_agents_environments_sessions_entity_types_get">

Successful response

```sql
SELECT
name,
entities,
entityOverrideMode
FROM google.dialogflow.entity_types
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND sessionsId = '{{ sessionsId }}' -- required
AND entityTypesId = '{{ entityTypesId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_agents_environments_sessions_entity_types_list">

Successful response

```sql
SELECT
name,
entities,
entityOverrideMode
FROM google.dialogflow.entity_types
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND sessionsId = '{{ sessionsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_sessions_entity_types_get">

Successful response

```sql
SELECT
name,
entities,
entityOverrideMode
FROM google.dialogflow.entity_types
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND sessionsId = '{{ sessionsId }}' -- required
AND entityTypesId = '{{ entityTypesId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_agents_entity_types_get">

Successful response

```sql
SELECT
name,
autoExpansionMode,
displayName,
enableFuzzyExtraction,
entities,
excludedPhrases,
kind,
redact
FROM google.dialogflow.entity_types
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND entityTypesId = '{{ entityTypesId }}' -- required
AND languageCode = '{{ languageCode }}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_sessions_entity_types_list">

Successful response

```sql
SELECT
name,
entities,
entityOverrideMode
FROM google.dialogflow.entity_types
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND sessionsId = '{{ sessionsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_entity_types_list">

Successful response

```sql
SELECT
name,
autoExpansionMode,
displayName,
enableFuzzyExtraction,
entities,
excludedPhrases,
kind,
redact
FROM google.dialogflow.entity_types
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
    defaultValue="projects_locations_agents_environments_sessions_entity_types_create"
    values={[
        { label: 'projects_locations_agents_environments_sessions_entity_types_create', value: 'projects_locations_agents_environments_sessions_entity_types_create' },
        { label: 'projects_locations_agents_sessions_entity_types_create', value: 'projects_locations_agents_sessions_entity_types_create' },
        { label: 'projects_locations_agents_entity_types_create', value: 'projects_locations_agents_entity_types_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_agents_environments_sessions_entity_types_create">

No description available.

```sql
INSERT INTO google.dialogflow.entity_types (
data__entities,
data__entityOverrideMode,
data__name,
projectsId,
locationsId,
agentsId,
environmentsId,
sessionsId
)
SELECT 
'{{ entities }}',
'{{ entityOverrideMode }}',
'{{ name }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}',
'{{ environmentsId }}',
'{{ sessionsId }}'
RETURNING
name,
entities,
entityOverrideMode
;
```
</TabItem>
<TabItem value="projects_locations_agents_sessions_entity_types_create">

No description available.

```sql
INSERT INTO google.dialogflow.entity_types (
data__entities,
data__entityOverrideMode,
data__name,
projectsId,
locationsId,
agentsId,
sessionsId
)
SELECT 
'{{ entities }}',
'{{ entityOverrideMode }}',
'{{ name }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}',
'{{ sessionsId }}'
RETURNING
name,
entities,
entityOverrideMode
;
```
</TabItem>
<TabItem value="projects_locations_agents_entity_types_create">

No description available.

```sql
INSERT INTO google.dialogflow.entity_types (
data__autoExpansionMode,
data__displayName,
data__enableFuzzyExtraction,
data__entities,
data__excludedPhrases,
data__kind,
data__name,
data__redact,
projectsId,
locationsId,
agentsId,
languageCode
)
SELECT 
'{{ autoExpansionMode }}',
'{{ displayName }}',
{{ enableFuzzyExtraction }},
'{{ entities }}',
'{{ excludedPhrases }}',
'{{ kind }}',
'{{ name }}',
{{ redact }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}',
'{{ languageCode }}'
RETURNING
name,
autoExpansionMode,
displayName,
enableFuzzyExtraction,
entities,
excludedPhrases,
kind,
redact
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: entity_types
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the entity_types resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the entity_types resource.
    - name: agentsId
      value: "{{ agentsId }}"
      description: Required parameter for the entity_types resource.
    - name: environmentsId
      value: "{{ environmentsId }}"
      description: Required parameter for the entity_types resource.
    - name: sessionsId
      value: "{{ sessionsId }}"
      description: Required parameter for the entity_types resource.
    - name: entities
      value:
        - synonyms: "{{ synonyms }}"
          value: "{{ value }}"
    - name: entityOverrideMode
      value: "{{ entityOverrideMode }}"
      valid_values: ['ENTITY_OVERRIDE_MODE_UNSPECIFIED', 'ENTITY_OVERRIDE_MODE_OVERRIDE', 'ENTITY_OVERRIDE_MODE_SUPPLEMENT']
    - name: name
      value: "{{ name }}"
    - name: autoExpansionMode
      value: "{{ autoExpansionMode }}"
      valid_values: ['AUTO_EXPANSION_MODE_UNSPECIFIED', 'AUTO_EXPANSION_MODE_DEFAULT']
    - name: displayName
      value: "{{ displayName }}"
    - name: enableFuzzyExtraction
      value: {{ enableFuzzyExtraction }}
    - name: excludedPhrases
      value:
        - value: "{{ value }}"
    - name: kind
      value: "{{ kind }}"
      valid_values: ['KIND_UNSPECIFIED', 'KIND_MAP', 'KIND_LIST', 'KIND_REGEXP']
    - name: redact
      value: {{ redact }}
    - name: languageCode
      value: "{{ languageCode }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_agents_environments_sessions_entity_types_patch"
    values={[
        { label: 'projects_locations_agents_environments_sessions_entity_types_patch', value: 'projects_locations_agents_environments_sessions_entity_types_patch' },
        { label: 'projects_locations_agents_sessions_entity_types_patch', value: 'projects_locations_agents_sessions_entity_types_patch' },
        { label: 'projects_locations_agents_entity_types_patch', value: 'projects_locations_agents_entity_types_patch' }
    ]}
>
<TabItem value="projects_locations_agents_environments_sessions_entity_types_patch">

No description available.

```sql
UPDATE google.dialogflow.entity_types
SET 
data__entities = '{{ entities }}',
data__entityOverrideMode = '{{ entityOverrideMode }}',
data__name = '{{ name }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND sessionsId = '{{ sessionsId }}' --required
AND entityTypesId = '{{ entityTypesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
entities,
entityOverrideMode;
```
</TabItem>
<TabItem value="projects_locations_agents_sessions_entity_types_patch">

No description available.

```sql
UPDATE google.dialogflow.entity_types
SET 
data__entities = '{{ entities }}',
data__entityOverrideMode = '{{ entityOverrideMode }}',
data__name = '{{ name }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND sessionsId = '{{ sessionsId }}' --required
AND entityTypesId = '{{ entityTypesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
entities,
entityOverrideMode;
```
</TabItem>
<TabItem value="projects_locations_agents_entity_types_patch">

No description available.

```sql
UPDATE google.dialogflow.entity_types
SET 
data__autoExpansionMode = '{{ autoExpansionMode }}',
data__displayName = '{{ displayName }}',
data__enableFuzzyExtraction = {{ enableFuzzyExtraction }},
data__entities = '{{ entities }}',
data__excludedPhrases = '{{ excludedPhrases }}',
data__kind = '{{ kind }}',
data__name = '{{ name }}',
data__redact = {{ redact }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND entityTypesId = '{{ entityTypesId }}' --required
AND languageCode = '{{ languageCode}}'
AND updateMask = '{{ updateMask}}'
RETURNING
name,
autoExpansionMode,
displayName,
enableFuzzyExtraction,
entities,
excludedPhrases,
kind,
redact;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_agents_environments_sessions_entity_types_delete"
    values={[
        { label: 'projects_locations_agents_environments_sessions_entity_types_delete', value: 'projects_locations_agents_environments_sessions_entity_types_delete' },
        { label: 'projects_locations_agents_sessions_entity_types_delete', value: 'projects_locations_agents_sessions_entity_types_delete' },
        { label: 'projects_locations_agents_entity_types_delete', value: 'projects_locations_agents_entity_types_delete' }
    ]}
>
<TabItem value="projects_locations_agents_environments_sessions_entity_types_delete">

No description available.

```sql
DELETE FROM google.dialogflow.entity_types
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND sessionsId = '{{ sessionsId }}' --required
AND entityTypesId = '{{ entityTypesId }}' --required
;
```
</TabItem>
<TabItem value="projects_locations_agents_sessions_entity_types_delete">

No description available.

```sql
DELETE FROM google.dialogflow.entity_types
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND sessionsId = '{{ sessionsId }}' --required
AND entityTypesId = '{{ entityTypesId }}' --required
;
```
</TabItem>
<TabItem value="projects_locations_agents_entity_types_delete">

No description available.

```sql
DELETE FROM google.dialogflow.entity_types
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND entityTypesId = '{{ entityTypesId }}' --required
AND force = '{{ force }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_agents_entity_types_export"
    values={[
        { label: 'projects_locations_agents_entity_types_export', value: 'projects_locations_agents_entity_types_export' },
        { label: 'projects_locations_agents_entity_types_import', value: 'projects_locations_agents_entity_types_import' }
    ]}
>
<TabItem value="projects_locations_agents_entity_types_export">

Successful response

```sql
EXEC google.dialogflow.entity_types.projects_locations_agents_entity_types_export 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required 
@@json=
'{
"dataFormat": "{{ dataFormat }}", 
"entityTypes": "{{ entityTypes }}", 
"entityTypesContentInline": {{ entityTypesContentInline }}, 
"entityTypesUri": "{{ entityTypesUri }}", 
"languageCode": "{{ languageCode }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_entity_types_import">

Successful response

```sql
EXEC google.dialogflow.entity_types.projects_locations_agents_entity_types_import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required 
@@json=
'{
"entityTypesContent": "{{ entityTypesContent }}", 
"entityTypesUri": "{{ entityTypesUri }}", 
"mergeOption": "{{ mergeOption }}", 
"targetEntityType": "{{ targetEntityType }}"
}'
;
```
</TabItem>
</Tabs>
