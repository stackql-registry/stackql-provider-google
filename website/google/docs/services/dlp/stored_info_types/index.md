--- 
title: stored_info_types
hide_title: false
hide_table_of_contents: false
keywords:
  - stored_info_types
  - dlp
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

Creates, updates, deletes, gets or lists a <code>stored_info_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stored_info_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dlp.stored_info_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_locations_stored_info_types_get"
    values={[
        { label: 'organizations_locations_stored_info_types_get', value: 'organizations_locations_stored_info_types_get' },
        { label: 'projects_locations_stored_info_types_get', value: 'projects_locations_stored_info_types_get' },
        { label: 'organizations_locations_stored_info_types_list', value: 'organizations_locations_stored_info_types_list' },
        { label: 'organizations_stored_info_types_get', value: 'organizations_stored_info_types_get' },
        { label: 'projects_locations_stored_info_types_list', value: 'projects_locations_stored_info_types_list' },
        { label: 'projects_stored_info_types_get', value: 'projects_stored_info_types_get' },
        { label: 'organizations_stored_info_types_list', value: 'organizations_stored_info_types_list' },
        { label: 'projects_stored_info_types_list', value: 'projects_stored_info_types_list' }
    ]}
>
<TabItem value="organizations_locations_stored_info_types_get">

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
    <td>Output only. Resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="currentVersion" /></td>
    <td><code>object</code></td>
    <td>Current version of the stored info type. (id: GooglePrivacyDlpV2StoredInfoTypeVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="pendingVersions" /></td>
    <td><code>array</code></td>
    <td>Pending versions of the stored info type. Empty if no versions are pending.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_stored_info_types_get">

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
    <td>Output only. Resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="currentVersion" /></td>
    <td><code>object</code></td>
    <td>Current version of the stored info type. (id: GooglePrivacyDlpV2StoredInfoTypeVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="pendingVersions" /></td>
    <td><code>array</code></td>
    <td>Pending versions of the stored info type. Empty if no versions are pending.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_stored_info_types_list">

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
    <td>Output only. Resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="currentVersion" /></td>
    <td><code>object</code></td>
    <td>Current version of the stored info type. (id: GooglePrivacyDlpV2StoredInfoTypeVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="pendingVersions" /></td>
    <td><code>array</code></td>
    <td>Pending versions of the stored info type. Empty if no versions are pending.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_stored_info_types_get">

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
    <td>Output only. Resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="currentVersion" /></td>
    <td><code>object</code></td>
    <td>Current version of the stored info type. (id: GooglePrivacyDlpV2StoredInfoTypeVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="pendingVersions" /></td>
    <td><code>array</code></td>
    <td>Pending versions of the stored info type. Empty if no versions are pending.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_stored_info_types_list">

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
    <td>Output only. Resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="currentVersion" /></td>
    <td><code>object</code></td>
    <td>Current version of the stored info type. (id: GooglePrivacyDlpV2StoredInfoTypeVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="pendingVersions" /></td>
    <td><code>array</code></td>
    <td>Pending versions of the stored info type. Empty if no versions are pending.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_stored_info_types_get">

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
    <td>Output only. Resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="currentVersion" /></td>
    <td><code>object</code></td>
    <td>Current version of the stored info type. (id: GooglePrivacyDlpV2StoredInfoTypeVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="pendingVersions" /></td>
    <td><code>array</code></td>
    <td>Pending versions of the stored info type. Empty if no versions are pending.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_stored_info_types_list">

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
    <td>Output only. Resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="currentVersion" /></td>
    <td><code>object</code></td>
    <td>Current version of the stored info type. (id: GooglePrivacyDlpV2StoredInfoTypeVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="pendingVersions" /></td>
    <td><code>array</code></td>
    <td>Pending versions of the stored info type. Empty if no versions are pending.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_stored_info_types_list">

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
    <td>Output only. Resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="currentVersion" /></td>
    <td><code>object</code></td>
    <td>Current version of the stored info type. (id: GooglePrivacyDlpV2StoredInfoTypeVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="pendingVersions" /></td>
    <td><code>array</code></td>
    <td>Pending versions of the stored info type. Empty if no versions are pending.</td>
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
    <td><a href="#organizations_locations_stored_info_types_get"><CopyableCode code="organizations_locations_stored_info_types_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-storedInfoTypesId"><code>storedInfoTypesId</code></a></td>
    <td></td>
    <td>Gets a stored infoType. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_locations_stored_info_types_get"><CopyableCode code="projects_locations_stored_info_types_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-storedInfoTypesId"><code>storedInfoTypesId</code></a></td>
    <td></td>
    <td>Gets a stored infoType. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_stored_info_types_list"><CopyableCode code="organizations_locations_stored_info_types_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-locationId"><code>locationId</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists stored infoTypes. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_stored_info_types_get"><CopyableCode code="organizations_stored_info_types_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-storedInfoTypesId"><code>storedInfoTypesId</code></a></td>
    <td></td>
    <td>Gets a stored infoType. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_locations_stored_info_types_list"><CopyableCode code="projects_locations_stored_info_types_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-locationId"><code>locationId</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists stored infoTypes. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_stored_info_types_get"><CopyableCode code="projects_stored_info_types_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-storedInfoTypesId"><code>storedInfoTypesId</code></a></td>
    <td></td>
    <td>Gets a stored infoType. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_stored_info_types_list"><CopyableCode code="organizations_stored_info_types_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-locationId"><code>locationId</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists stored infoTypes. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_stored_info_types_list"><CopyableCode code="projects_stored_info_types_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-locationId"><code>locationId</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists stored infoTypes. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_stored_info_types_create"><CopyableCode code="organizations_locations_stored_info_types_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a pre-built stored infoType to be used for inspection. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_locations_stored_info_types_create"><CopyableCode code="projects_locations_stored_info_types_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a pre-built stored infoType to be used for inspection. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_stored_info_types_create"><CopyableCode code="organizations_stored_info_types_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Creates a pre-built stored infoType to be used for inspection. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_stored_info_types_create"><CopyableCode code="projects_stored_info_types_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates a pre-built stored infoType to be used for inspection. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_stored_info_types_patch"><CopyableCode code="organizations_locations_stored_info_types_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-storedInfoTypesId"><code>storedInfoTypesId</code></a></td>
    <td></td>
    <td>Updates the stored infoType by creating a new version. The existing version will continue to be used until the new version is ready. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_locations_stored_info_types_patch"><CopyableCode code="projects_locations_stored_info_types_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-storedInfoTypesId"><code>storedInfoTypesId</code></a></td>
    <td></td>
    <td>Updates the stored infoType by creating a new version. The existing version will continue to be used until the new version is ready. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_stored_info_types_patch"><CopyableCode code="organizations_stored_info_types_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-storedInfoTypesId"><code>storedInfoTypesId</code></a></td>
    <td></td>
    <td>Updates the stored infoType by creating a new version. The existing version will continue to be used until the new version is ready. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_stored_info_types_patch"><CopyableCode code="projects_stored_info_types_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-storedInfoTypesId"><code>storedInfoTypesId</code></a></td>
    <td></td>
    <td>Updates the stored infoType by creating a new version. The existing version will continue to be used until the new version is ready. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_stored_info_types_delete"><CopyableCode code="organizations_locations_stored_info_types_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-storedInfoTypesId"><code>storedInfoTypesId</code></a></td>
    <td></td>
    <td>Deletes a stored infoType. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_locations_stored_info_types_delete"><CopyableCode code="projects_locations_stored_info_types_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-storedInfoTypesId"><code>storedInfoTypesId</code></a></td>
    <td></td>
    <td>Deletes a stored infoType. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_stored_info_types_delete"><CopyableCode code="organizations_stored_info_types_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-storedInfoTypesId"><code>storedInfoTypesId</code></a></td>
    <td></td>
    <td>Deletes a stored infoType. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_stored_info_types_delete"><CopyableCode code="projects_stored_info_types_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-storedInfoTypesId"><code>storedInfoTypesId</code></a></td>
    <td></td>
    <td>Deletes a stored infoType. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.</td>
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
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-storedInfoTypesId">
    <td><CopyableCode code="storedInfoTypesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationId">
    <td><CopyableCode code="locationId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_locations_stored_info_types_get"
    values={[
        { label: 'organizations_locations_stored_info_types_get', value: 'organizations_locations_stored_info_types_get' },
        { label: 'projects_locations_stored_info_types_get', value: 'projects_locations_stored_info_types_get' },
        { label: 'organizations_locations_stored_info_types_list', value: 'organizations_locations_stored_info_types_list' },
        { label: 'organizations_stored_info_types_get', value: 'organizations_stored_info_types_get' },
        { label: 'projects_locations_stored_info_types_list', value: 'projects_locations_stored_info_types_list' },
        { label: 'projects_stored_info_types_get', value: 'projects_stored_info_types_get' },
        { label: 'organizations_stored_info_types_list', value: 'organizations_stored_info_types_list' },
        { label: 'projects_stored_info_types_list', value: 'projects_stored_info_types_list' }
    ]}
>
<TabItem value="organizations_locations_stored_info_types_get">

Gets a stored infoType. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.

```sql
SELECT
name,
currentVersion,
pendingVersions
FROM google.dlp.stored_info_types
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND storedInfoTypesId = '{{ storedInfoTypesId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_stored_info_types_get">

Gets a stored infoType. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.

```sql
SELECT
name,
currentVersion,
pendingVersions
FROM google.dlp.stored_info_types
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND storedInfoTypesId = '{{ storedInfoTypesId }}' -- required
;
```
</TabItem>
<TabItem value="organizations_locations_stored_info_types_list">

Lists stored infoTypes. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.

```sql
SELECT
name,
currentVersion,
pendingVersions
FROM google.dlp.stored_info_types
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND locationId = '{{ locationId }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
<TabItem value="organizations_stored_info_types_get">

Gets a stored infoType. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.

```sql
SELECT
name,
currentVersion,
pendingVersions
FROM google.dlp.stored_info_types
WHERE organizationsId = '{{ organizationsId }}' -- required
AND storedInfoTypesId = '{{ storedInfoTypesId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_stored_info_types_list">

Lists stored infoTypes. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.

```sql
SELECT
name,
currentVersion,
pendingVersions
FROM google.dlp.stored_info_types
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND locationId = '{{ locationId }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
<TabItem value="projects_stored_info_types_get">

Gets a stored infoType. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.

```sql
SELECT
name,
currentVersion,
pendingVersions
FROM google.dlp.stored_info_types
WHERE projectsId = '{{ projectsId }}' -- required
AND storedInfoTypesId = '{{ storedInfoTypesId }}' -- required
;
```
</TabItem>
<TabItem value="organizations_stored_info_types_list">

Lists stored infoTypes. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.

```sql
SELECT
name,
currentVersion,
pendingVersions
FROM google.dlp.stored_info_types
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationId = '{{ locationId }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
<TabItem value="projects_stored_info_types_list">

Lists stored infoTypes. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.

```sql
SELECT
name,
currentVersion,
pendingVersions
FROM google.dlp.stored_info_types
WHERE projectsId = '{{ projectsId }}' -- required
AND locationId = '{{ locationId }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_locations_stored_info_types_create"
    values={[
        { label: 'organizations_locations_stored_info_types_create', value: 'organizations_locations_stored_info_types_create' },
        { label: 'projects_locations_stored_info_types_create', value: 'projects_locations_stored_info_types_create' },
        { label: 'organizations_stored_info_types_create', value: 'organizations_stored_info_types_create' },
        { label: 'projects_stored_info_types_create', value: 'projects_stored_info_types_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_locations_stored_info_types_create">

Creates a pre-built stored infoType to be used for inspection. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.

```sql
INSERT INTO google.dlp.stored_info_types (
data__config,
data__locationId,
data__storedInfoTypeId,
organizationsId,
locationsId
)
SELECT 
'{{ config }}',
'{{ locationId }}',
'{{ storedInfoTypeId }}',
'{{ organizationsId }}',
'{{ locationsId }}'
RETURNING
name,
currentVersion,
pendingVersions
;
```
</TabItem>
<TabItem value="projects_locations_stored_info_types_create">

Creates a pre-built stored infoType to be used for inspection. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.

```sql
INSERT INTO google.dlp.stored_info_types (
data__config,
data__locationId,
data__storedInfoTypeId,
projectsId,
locationsId
)
SELECT 
'{{ config }}',
'{{ locationId }}',
'{{ storedInfoTypeId }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
currentVersion,
pendingVersions
;
```
</TabItem>
<TabItem value="organizations_stored_info_types_create">

Creates a pre-built stored infoType to be used for inspection. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.

```sql
INSERT INTO google.dlp.stored_info_types (
data__config,
data__locationId,
data__storedInfoTypeId,
organizationsId
)
SELECT 
'{{ config }}',
'{{ locationId }}',
'{{ storedInfoTypeId }}',
'{{ organizationsId }}'
RETURNING
name,
currentVersion,
pendingVersions
;
```
</TabItem>
<TabItem value="projects_stored_info_types_create">

Creates a pre-built stored infoType to be used for inspection. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.

```sql
INSERT INTO google.dlp.stored_info_types (
data__config,
data__locationId,
data__storedInfoTypeId,
projectsId
)
SELECT 
'{{ config }}',
'{{ locationId }}',
'{{ storedInfoTypeId }}',
'{{ projectsId }}'
RETURNING
name,
currentVersion,
pendingVersions
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: stored_info_types
  props:
    - name: organizationsId
      value: "{{ organizationsId }}"
      description: Required parameter for the stored_info_types resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the stored_info_types resource.
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the stored_info_types resource.
    - name: config
      description: |
        Required. Configuration of the storedInfoType to create.
      value:
        description: "{{ description }}"
        dictionary:
          cloudStoragePath:
            path: "{{ path }}"
          wordList:
            words:
              - "{{ words }}"
        displayName: "{{ displayName }}"
        largeCustomDictionary:
          bigQueryField:
            field:
              name: "{{ name }}"
            table:
              datasetId: "{{ datasetId }}"
              projectId: "{{ projectId }}"
              tableId: "{{ tableId }}"
          cloudStorageFileSet:
            url: "{{ url }}"
          outputPath:
            path: "{{ path }}"
        regex:
          groupIndexes:
            - {{ groupIndexes }}
          pattern: "{{ pattern }}"
    - name: locationId
      value: "{{ locationId }}"
      description: |
        Deprecated. This field has no effect.
    - name: storedInfoTypeId
      value: "{{ storedInfoTypeId }}"
      description: |
        The storedInfoType ID can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: \`[a-zA-Zd-_]+\`. The maximum length is 100 characters. Can be empty to allow the system to generate one.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_locations_stored_info_types_patch"
    values={[
        { label: 'organizations_locations_stored_info_types_patch', value: 'organizations_locations_stored_info_types_patch' },
        { label: 'projects_locations_stored_info_types_patch', value: 'projects_locations_stored_info_types_patch' },
        { label: 'organizations_stored_info_types_patch', value: 'organizations_stored_info_types_patch' },
        { label: 'projects_stored_info_types_patch', value: 'projects_stored_info_types_patch' }
    ]}
>
<TabItem value="organizations_locations_stored_info_types_patch">

Updates the stored infoType by creating a new version. The existing version will continue to be used until the new version is ready. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.

```sql
UPDATE google.dlp.stored_info_types
SET 
data__config = '{{ config }}',
data__updateMask = '{{ updateMask }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND storedInfoTypesId = '{{ storedInfoTypesId }}' --required
RETURNING
name,
currentVersion,
pendingVersions;
```
</TabItem>
<TabItem value="projects_locations_stored_info_types_patch">

Updates the stored infoType by creating a new version. The existing version will continue to be used until the new version is ready. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.

```sql
UPDATE google.dlp.stored_info_types
SET 
data__config = '{{ config }}',
data__updateMask = '{{ updateMask }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND storedInfoTypesId = '{{ storedInfoTypesId }}' --required
RETURNING
name,
currentVersion,
pendingVersions;
```
</TabItem>
<TabItem value="organizations_stored_info_types_patch">

Updates the stored infoType by creating a new version. The existing version will continue to be used until the new version is ready. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.

```sql
UPDATE google.dlp.stored_info_types
SET 
data__config = '{{ config }}',
data__updateMask = '{{ updateMask }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND storedInfoTypesId = '{{ storedInfoTypesId }}' --required
RETURNING
name,
currentVersion,
pendingVersions;
```
</TabItem>
<TabItem value="projects_stored_info_types_patch">

Updates the stored infoType by creating a new version. The existing version will continue to be used until the new version is ready. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.

```sql
UPDATE google.dlp.stored_info_types
SET 
data__config = '{{ config }}',
data__updateMask = '{{ updateMask }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND storedInfoTypesId = '{{ storedInfoTypesId }}' --required
RETURNING
name,
currentVersion,
pendingVersions;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_locations_stored_info_types_delete"
    values={[
        { label: 'organizations_locations_stored_info_types_delete', value: 'organizations_locations_stored_info_types_delete' },
        { label: 'projects_locations_stored_info_types_delete', value: 'projects_locations_stored_info_types_delete' },
        { label: 'organizations_stored_info_types_delete', value: 'organizations_stored_info_types_delete' },
        { label: 'projects_stored_info_types_delete', value: 'projects_stored_info_types_delete' }
    ]}
>
<TabItem value="organizations_locations_stored_info_types_delete">

Deletes a stored infoType. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.

```sql
DELETE FROM google.dlp.stored_info_types
WHERE organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND storedInfoTypesId = '{{ storedInfoTypesId }}' --required
;
```
</TabItem>
<TabItem value="projects_locations_stored_info_types_delete">

Deletes a stored infoType. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.

```sql
DELETE FROM google.dlp.stored_info_types
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND storedInfoTypesId = '{{ storedInfoTypesId }}' --required
;
```
</TabItem>
<TabItem value="organizations_stored_info_types_delete">

Deletes a stored infoType. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.

```sql
DELETE FROM google.dlp.stored_info_types
WHERE organizationsId = '{{ organizationsId }}' --required
AND storedInfoTypesId = '{{ storedInfoTypesId }}' --required
;
```
</TabItem>
<TabItem value="projects_stored_info_types_delete">

Deletes a stored infoType. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.

```sql
DELETE FROM google.dlp.stored_info_types
WHERE projectsId = '{{ projectsId }}' --required
AND storedInfoTypesId = '{{ storedInfoTypesId }}' --required
;
```
</TabItem>
</Tabs>
