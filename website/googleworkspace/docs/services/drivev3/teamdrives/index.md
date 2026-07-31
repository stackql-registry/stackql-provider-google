--- 
title: teamdrives
hide_title: false
hide_table_of_contents: false
keywords:
  - teamdrives
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

Creates, updates, deletes, gets or lists a <code>teamdrives</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="teamdrives" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivev3.teamdrives" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of this Team Drive which is also the ID of the top level folder of this Team Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of this Team Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="backgroundImageFile" /></td>
    <td><code>object</code></td>
    <td>The background image file for a Team Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="backgroundImageLink" /></td>
    <td><code>string</code></td>
    <td>A short-lived link to this Team Drive's background image.</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td>Capabilities the current user has on this Team Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="colorRgb" /></td>
    <td><code>string</code></td>
    <td>The color of this Team Drive as an RGB hex string. It can only be set on a `drive.teamdrives.update` request that does not set `themeId`.</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the Team Drive was created (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Identifies what kind of resource this is. Value: the fixed string `"drive#teamDrive"`. (default: drive#teamDrive)</td>
</tr>
<tr>
    <td><CopyableCode code="orgUnitId" /></td>
    <td><code>string</code></td>
    <td>The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`.</td>
</tr>
<tr>
    <td><CopyableCode code="restrictions" /></td>
    <td><code>object</code></td>
    <td>A set of restrictions that apply to this Team Drive or items inside this Team Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="themeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the theme from which the background image and color will be set. The set of possible `teamDriveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.teamdrives.create` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`.</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of this Team Drive which is also the ID of the top level folder of this Team Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of this Team Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="backgroundImageFile" /></td>
    <td><code>object</code></td>
    <td>The background image file for a Team Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="backgroundImageLink" /></td>
    <td><code>string</code></td>
    <td>A short-lived link to this Team Drive's background image.</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td>Capabilities the current user has on this Team Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="colorRgb" /></td>
    <td><code>string</code></td>
    <td>The color of this Team Drive as an RGB hex string. It can only be set on a `drive.teamdrives.update` request that does not set `themeId`.</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the Team Drive was created (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Identifies what kind of resource this is. Value: the fixed string `"drive#teamDrive"`. (default: drive#teamDrive)</td>
</tr>
<tr>
    <td><CopyableCode code="orgUnitId" /></td>
    <td><code>string</code></td>
    <td>The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`.</td>
</tr>
<tr>
    <td><CopyableCode code="restrictions" /></td>
    <td><code>object</code></td>
    <td>A set of restrictions that apply to this Team Drive or items inside this Team Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="themeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the theme from which the background image and color will be set. The set of possible `teamDriveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.teamdrives.create` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`.</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-teamDriveId"><code>teamDriveId</code></a></td>
    <td><a href="#parameter-useDomainAdminAccess"><code>useDomainAdminAccess</code></a></td>
    <td>Deprecated: Use `drives.get` instead.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-useDomainAdminAccess"><code>useDomainAdminAccess</code></a>, <a href="#parameter-q"><code>q</code></a></td>
    <td>Deprecated: Use `drives.list` instead.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td></td>
    <td>Deprecated: Use `drives.create` instead.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-teamDriveId"><code>teamDriveId</code></a></td>
    <td><a href="#parameter-useDomainAdminAccess"><code>useDomainAdminAccess</code></a></td>
    <td>Deprecated: Use `drives.update` instead.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-teamDriveId"><code>teamDriveId</code></a></td>
    <td></td>
    <td>Deprecated: Use `drives.delete` instead.</td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-teamDriveId">
    <td><CopyableCode code="teamDriveId" /></td>
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
<tr id="parameter-q">
    <td><CopyableCode code="q" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-useDomainAdminAccess">
    <td><CopyableCode code="useDomainAdminAccess" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Deprecated: Use `drives.get` instead.

```sql
SELECT
id,
name,
backgroundImageFile,
backgroundImageLink,
capabilities,
colorRgb,
createdTime,
kind,
orgUnitId,
restrictions,
themeId
FROM googleworkspace.drivev3.teamdrives
WHERE teamDriveId = '{{ teamDriveId }}' -- required
AND useDomainAdminAccess = '{{ useDomainAdminAccess }}'
;
```
</TabItem>
<TabItem value="list">

Deprecated: Use `drives.list` instead.

```sql
SELECT
id,
name,
backgroundImageFile,
backgroundImageLink,
capabilities,
colorRgb,
createdTime,
kind,
orgUnitId,
restrictions,
themeId
FROM googleworkspace.drivev3.teamdrives
WHERE pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND useDomainAdminAccess = '{{ useDomainAdminAccess }}'
AND q = '{{ q }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Deprecated: Use `drives.create` instead.

```sql
INSERT INTO googleworkspace.drivev3.teamdrives (
data__id,
data__backgroundImageFile,
data__orgUnitId,
data__kind,
data__themeId,
data__restrictions,
data__name,
data__capabilities,
data__colorRgb,
data__backgroundImageLink,
data__createdTime,
requestId
)
SELECT 
'{{ id }}',
'{{ backgroundImageFile }}',
'{{ orgUnitId }}',
'{{ kind }}',
'{{ themeId }}',
'{{ restrictions }}',
'{{ name }}',
'{{ capabilities }}',
'{{ colorRgb }}',
'{{ backgroundImageLink }}',
'{{ createdTime }}',
'{{ requestId }}'
RETURNING
id,
name,
backgroundImageFile,
backgroundImageLink,
capabilities,
colorRgb,
createdTime,
kind,
orgUnitId,
restrictions,
themeId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: teamdrives
  props:
    - name: requestId
      value: "{{ requestId }}"
      description: Required parameter for the teamdrives resource.
    - name: id
      value: "{{ id }}"
      description: |
        The ID of this Team Drive which is also the ID of the top level folder of this Team Drive.
    - name: backgroundImageFile
      description: |
        The background image file for a Team Drive.
      value:
        xCoordinate: {{ xCoordinate }}
        id: "{{ id }}"
        yCoordinate: {{ yCoordinate }}
        width: {{ width }}
    - name: orgUnitId
      value: "{{ orgUnitId }}"
      description: |
        The organizational unit of this shared drive. This field is only populated on \`drives.list\` responses when the \`useDomainAdminAccess\` parameter is set to \`true\`.
    - name: kind
      value: "{{ kind }}"
      description: |
        Identifies what kind of resource this is. Value: the fixed string \`"drive#teamDrive"\`.
      default: drive#teamDrive
    - name: themeId
      value: "{{ themeId }}"
      description: |
        The ID of the theme from which the background image and color will be set. The set of possible \`teamDriveThemes\` can be retrieved from a \`drive.about.get\` response. When not specified on a \`drive.teamdrives.create\` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set \`colorRgb\` or \`backgroundImageFile\`.
    - name: restrictions
      description: |
        A set of restrictions that apply to this Team Drive or items inside this Team Drive.
      value:
        domainUsersOnly: {{ domainUsersOnly }}
        teamMembersOnly: {{ teamMembersOnly }}
        adminManagedRestrictions: {{ adminManagedRestrictions }}
        copyRequiresWriterPermission: {{ copyRequiresWriterPermission }}
        sharingFoldersRequiresOrganizerPermission: {{ sharingFoldersRequiresOrganizerPermission }}
        downloadRestriction:
          restrictedForReaders: {{ restrictedForReaders }}
          restrictedForWriters: {{ restrictedForWriters }}
    - name: name
      value: "{{ name }}"
      description: |
        The name of this Team Drive.
    - name: capabilities
      description: |
        Capabilities the current user has on this Team Drive.
      value:
        canChangeSharingFoldersRequiresOrganizerPermissionRestriction: {{ canChangeSharingFoldersRequiresOrganizerPermissionRestriction }}
        canComment: {{ canComment }}
        canResetTeamDriveRestrictions: {{ canResetTeamDriveRestrictions }}
        canCopy: {{ canCopy }}
        canShare: {{ canShare }}
        canDeleteChildren: {{ canDeleteChildren }}
        canRename: {{ canRename }}
        canReadRevisions: {{ canReadRevisions }}
        canChangeTeamMembersOnlyRestriction: {{ canChangeTeamMembersOnlyRestriction }}
        canListChildren: {{ canListChildren }}
        canChangeDomainUsersOnlyRestriction: {{ canChangeDomainUsersOnlyRestriction }}
        canChangeDownloadRestriction: {{ canChangeDownloadRestriction }}
        canRenameTeamDrive: {{ canRenameTeamDrive }}
        canDeleteTeamDrive: {{ canDeleteTeamDrive }}
        canDownload: {{ canDownload }}
        canChangeTeamDriveBackground: {{ canChangeTeamDriveBackground }}
        canRemoveChildren: {{ canRemoveChildren }}
        canEdit: {{ canEdit }}
        canTrashChildren: {{ canTrashChildren }}
        canAddChildren: {{ canAddChildren }}
        canManageMembers: {{ canManageMembers }}
        canChangeCopyRequiresWriterPermissionRestriction: {{ canChangeCopyRequiresWriterPermissionRestriction }}
    - name: colorRgb
      value: "{{ colorRgb }}"
      description: |
        The color of this Team Drive as an RGB hex string. It can only be set on a \`drive.teamdrives.update\` request that does not set \`themeId\`.
    - name: backgroundImageLink
      value: "{{ backgroundImageLink }}"
      description: |
        A short-lived link to this Team Drive's background image.
    - name: createdTime
      value: "{{ createdTime }}"
      description: |
        The time at which the Team Drive was created (RFC 3339 date-time).
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Deprecated: Use `drives.update` instead.

```sql
UPDATE googleworkspace.drivev3.teamdrives
SET 
data__id = '{{ id }}',
data__backgroundImageFile = '{{ backgroundImageFile }}',
data__orgUnitId = '{{ orgUnitId }}',
data__kind = '{{ kind }}',
data__themeId = '{{ themeId }}',
data__restrictions = '{{ restrictions }}',
data__name = '{{ name }}',
data__capabilities = '{{ capabilities }}',
data__colorRgb = '{{ colorRgb }}',
data__backgroundImageLink = '{{ backgroundImageLink }}',
data__createdTime = '{{ createdTime }}'
WHERE 
teamDriveId = '{{ teamDriveId }}' --required
AND useDomainAdminAccess = {{ useDomainAdminAccess}}
RETURNING
id,
name,
backgroundImageFile,
backgroundImageLink,
capabilities,
colorRgb,
createdTime,
kind,
orgUnitId,
restrictions,
themeId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deprecated: Use `drives.delete` instead.

```sql
DELETE FROM googleworkspace.drivev3.teamdrives
WHERE teamDriveId = '{{ teamDriveId }}' --required
;
```
</TabItem>
</Tabs>
