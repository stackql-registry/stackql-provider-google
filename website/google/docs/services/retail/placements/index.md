--- 
title: placements
hide_title: false
hide_table_of_contents: false
keywords:
  - placements
  - retail
  - google
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage google resources using SQL
custom_edit_url: null
image: /img/stackql-google-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>placements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>placements</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.retail.placements" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#projects_locations_catalogs_placements_predict"><CopyableCode code="projects_locations_catalogs_placements_predict" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-placementsId"><code>placementsId</code></a></td>
    <td></td>
    <td>Makes a recommendation prediction.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_placements_search"><CopyableCode code="projects_locations_catalogs_placements_search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-placementsId"><code>placementsId</code></a></td>
    <td></td>
    <td>Performs a search. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.</td>
</tr>
<tr>
    <td><a href="#projects_locations_catalogs_placements_conversational_search"><CopyableCode code="projects_locations_catalogs_placements_conversational_search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-catalogsId"><code>catalogsId</code></a>, <a href="#parameter-placementsId"><code>placementsId</code></a></td>
    <td></td>
    <td>Performs a conversational search. This feature is only available for users who have Conversational Search enabled.</td>
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
<tr id="parameter-catalogsId">
    <td><CopyableCode code="catalogsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-placementsId">
    <td><CopyableCode code="placementsId" /></td>
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

## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_catalogs_placements_predict"
    values={[
        { label: 'projects_locations_catalogs_placements_predict', value: 'projects_locations_catalogs_placements_predict' },
        { label: 'projects_locations_catalogs_placements_search', value: 'projects_locations_catalogs_placements_search' },
        { label: 'projects_locations_catalogs_placements_conversational_search', value: 'projects_locations_catalogs_placements_conversational_search' }
    ]}
>
<TabItem value="projects_locations_catalogs_placements_predict">

Makes a recommendation prediction.

```sql
EXEC google.retail.placements.projects_locations_catalogs_placements_predict 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@catalogsId='{{ catalogsId }}' --required, 
@placementsId='{{ placementsId }}' --required 
@@json=
'{
"userEvent": "{{ userEvent }}", 
"pageSize": {{ pageSize }}, 
"labels": "{{ labels }}", 
"validateOnly": {{ validateOnly }}, 
"filter": "{{ filter }}", 
"pageToken": "{{ pageToken }}", 
"params": "{{ params }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_catalogs_placements_search">

Performs a search. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.

```sql
EXEC google.retail.placements.projects_locations_catalogs_placements_search 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@catalogsId='{{ catalogsId }}' --required, 
@placementsId='{{ placementsId }}' --required 
@@json=
'{
"canonicalFilter": "{{ canonicalFilter }}", 
"conversationalSearchSpec": "{{ conversationalSearchSpec }}", 
"placeId": "{{ placeId }}", 
"searchMode": "{{ searchMode }}", 
"pageToken": "{{ pageToken }}", 
"userAttributes": "{{ userAttributes }}", 
"dynamicFacetSpec": "{{ dynamicFacetSpec }}", 
"offset": {{ offset }}, 
"query": "{{ query }}", 
"facetSpecs": "{{ facetSpecs }}", 
"languageCode": "{{ languageCode }}", 
"personalizationSpec": "{{ personalizationSpec }}", 
"queryExpansionSpec": "{{ queryExpansionSpec }}", 
"variantRollupKeys": "{{ variantRollupKeys }}", 
"tileNavigationSpec": "{{ tileNavigationSpec }}", 
"pageSize": {{ pageSize }}, 
"regionCode": "{{ regionCode }}", 
"pageCategories": "{{ pageCategories }}", 
"userInfo": "{{ userInfo }}", 
"visitorId": "{{ visitorId }}", 
"labels": "{{ labels }}", 
"spellCorrectionSpec": "{{ spellCorrectionSpec }}", 
"filter": "{{ filter }}", 
"boostSpec": "{{ boostSpec }}", 
"branch": "{{ branch }}", 
"entity": "{{ entity }}", 
"orderBy": "{{ orderBy }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_catalogs_placements_conversational_search">

Performs a conversational search. This feature is only available for users who have Conversational Search enabled.

```sql
EXEC google.retail.placements.projects_locations_catalogs_placements_conversational_search 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@catalogsId='{{ catalogsId }}' --required, 
@placementsId='{{ placementsId }}' --required 
@@json=
'{
"pageCategories": "{{ pageCategories }}", 
"userInfo": "{{ userInfo }}", 
"conversationalFilteringSpec": "{{ conversationalFilteringSpec }}", 
"query": "{{ query }}", 
"branch": "{{ branch }}", 
"safetySettings": "{{ safetySettings }}", 
"searchParams": "{{ searchParams }}", 
"visitorId": "{{ visitorId }}", 
"conversationId": "{{ conversationId }}", 
"userLabels": "{{ userLabels }}"
}'
;
```
</TabItem>
</Tabs>
