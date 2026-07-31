--- 
title: changes
hide_title: false
hide_table_of_contents: false
keywords:
  - changes
  - drivev3
  - googleworkspace
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage googleworkspace resources using SQL
custom_edit_url: null
image: /img/stackql-googleworkspace-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>changes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="changes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivev3.changes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

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
    <td><CopyableCode code="changeType" /></td>
    <td><code>string</code></td>
    <td>The type of the change. Possible values are `file` and `drive`.</td>
</tr>
<tr>
    <td><CopyableCode code="drive" /></td>
    <td><code>object</code></td>
    <td>The updated state of the shared drive. Present if the changeType is drive, the user is still a member of the shared drive, and the shared drive has not been deleted. (id: Drive)</td>
</tr>
<tr>
    <td><CopyableCode code="driveId" /></td>
    <td><code>string</code></td>
    <td>The ID of the shared drive associated with this change.</td>
</tr>
<tr>
    <td><CopyableCode code="file" /></td>
    <td><code>object</code></td>
    <td>The updated state of the file. Present if the type is file and the file has not been removed from this list of changes. (id: File)</td>
</tr>
<tr>
    <td><CopyableCode code="fileId" /></td>
    <td><code>string</code></td>
    <td>The ID of the file which has changed.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Identifies what kind of resource this is. Value: the fixed string `"drive#change"`. (default: drive#change)</td>
</tr>
<tr>
    <td><CopyableCode code="removed" /></td>
    <td><code>boolean</code></td>
    <td>Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access.</td>
</tr>
<tr>
    <td><CopyableCode code="teamDrive" /></td>
    <td><code>object</code></td>
    <td>Deprecated: use the drive collection instead. Next ID: 33 (id: TeamDrive)</td>
</tr>
<tr>
    <td><CopyableCode code="teamDriveId" /></td>
    <td><code>string</code></td>
    <td>Deprecated: Use `driveId` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time of this change (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Deprecated: Use `changeType` instead.</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td><a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-teamDriveId"><code>teamDriveId</code></a>, <a href="#parameter-includeLabels"><code>includeLabels</code></a>, <a href="#parameter-spaces"><code>spaces</code></a>, <a href="#parameter-restrictToMyDrive"><code>restrictToMyDrive</code></a>, <a href="#parameter-includeCorpusRemovals"><code>includeCorpusRemovals</code></a>, <a href="#parameter-includeItemsFromAllDrives"><code>includeItemsFromAllDrives</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-includeTeamDriveItems"><code>includeTeamDriveItems</code></a>, <a href="#parameter-driveId"><code>driveId</code></a>, <a href="#parameter-includeRemoved"><code>includeRemoved</code></a>, <a href="#parameter-includePermissionsForView"><code>includePermissionsForView</code></a></td>
    <td>Lists the changes for a user or shared drive. For more information, see [Retrieve changes](https://developers.google.com/workspace/drive/api/guides/manage-changes).</td>
</tr>
<tr>
    <td><a href="#watch"><CopyableCode code="watch" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td><a href="#parameter-includeTeamDriveItems"><code>includeTeamDriveItems</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-includeRemoved"><code>includeRemoved</code></a>, <a href="#parameter-includePermissionsForView"><code>includePermissionsForView</code></a>, <a href="#parameter-driveId"><code>driveId</code></a>, <a href="#parameter-includeLabels"><code>includeLabels</code></a>, <a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-teamDriveId"><code>teamDriveId</code></a>, <a href="#parameter-includeCorpusRemovals"><code>includeCorpusRemovals</code></a>, <a href="#parameter-restrictToMyDrive"><code>restrictToMyDrive</code></a>, <a href="#parameter-includeItemsFromAllDrives"><code>includeItemsFromAllDrives</code></a>, <a href="#parameter-spaces"><code>spaces</code></a></td>
    <td>Subscribes to changes for a user. For more information, see [Notifications for resource changes](https://developers.google.com/workspace/drive/api/guides/push).</td>
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
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-driveId">
    <td><CopyableCode code="driveId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includeCorpusRemovals">
    <td><CopyableCode code="includeCorpusRemovals" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-includeItemsFromAllDrives">
    <td><CopyableCode code="includeItemsFromAllDrives" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-includeLabels">
    <td><CopyableCode code="includeLabels" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includePermissionsForView">
    <td><CopyableCode code="includePermissionsForView" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includeRemoved">
    <td><CopyableCode code="includeRemoved" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-includeTeamDriveItems">
    <td><CopyableCode code="includeTeamDriveItems" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-pageSize">
    <td><CopyableCode code="pageSize" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-restrictToMyDrive">
    <td><CopyableCode code="restrictToMyDrive" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-spaces">
    <td><CopyableCode code="spaces" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-supportsAllDrives">
    <td><CopyableCode code="supportsAllDrives" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-supportsTeamDrives">
    <td><CopyableCode code="supportsTeamDrives" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-teamDriveId">
    <td><CopyableCode code="teamDriveId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Lists the changes for a user or shared drive. For more information, see [Retrieve changes](https://developers.google.com/workspace/drive/api/guides/manage-changes).

```sql
SELECT
changeType,
drive,
driveId,
file,
fileId,
kind,
removed,
teamDrive,
teamDriveId,
time,
type
FROM googleworkspace.drivev3.changes
WHERE pageToken = '{{ pageToken }}' -- required
AND supportsAllDrives = '{{ supportsAllDrives }}'
AND teamDriveId = '{{ teamDriveId }}'
AND includeLabels = '{{ includeLabels }}'
AND spaces = '{{ spaces }}'
AND restrictToMyDrive = '{{ restrictToMyDrive }}'
AND includeCorpusRemovals = '{{ includeCorpusRemovals }}'
AND includeItemsFromAllDrives = '{{ includeItemsFromAllDrives }}'
AND supportsTeamDrives = '{{ supportsTeamDrives }}'
AND pageSize = '{{ pageSize }}'
AND includeTeamDriveItems = '{{ includeTeamDriveItems }}'
AND driveId = '{{ driveId }}'
AND includeRemoved = '{{ includeRemoved }}'
AND includePermissionsForView = '{{ includePermissionsForView }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="watch"
    values={[
        { label: 'watch', value: 'watch' }
    ]}
>
<TabItem value="watch">

Subscribes to changes for a user. For more information, see [Notifications for resource changes](https://developers.google.com/workspace/drive/api/guides/push).

```sql
EXEC googleworkspace.drivev3.changes.watch 
@pageToken='{{ pageToken }}' --required, 
@includeTeamDriveItems={{ includeTeamDriveItems }}, 
@pageSize='{{ pageSize }}', 
@supportsTeamDrives={{ supportsTeamDrives }}, 
@includeRemoved={{ includeRemoved }}, 
@includePermissionsForView='{{ includePermissionsForView }}', 
@driveId='{{ driveId }}', 
@includeLabels='{{ includeLabels }}', 
@supportsAllDrives={{ supportsAllDrives }}, 
@teamDriveId='{{ teamDriveId }}', 
@includeCorpusRemovals={{ includeCorpusRemovals }}, 
@restrictToMyDrive={{ restrictToMyDrive }}, 
@includeItemsFromAllDrives={{ includeItemsFromAllDrives }}, 
@spaces='{{ spaces }}' 
@@json=
'{
"token": "{{ token }}", 
"params": "{{ params }}", 
"address": "{{ address }}", 
"payload": {{ payload }}, 
"resourceId": "{{ resourceId }}", 
"id": "{{ id }}", 
"kind": "{{ kind }}", 
"type": "{{ type }}", 
"resourceUri": "{{ resourceUri }}", 
"expiration": "{{ expiration }}"
}'
;
```
</TabItem>
</Tabs>
