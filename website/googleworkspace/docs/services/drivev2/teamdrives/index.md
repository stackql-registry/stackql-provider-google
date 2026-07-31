--- 
title: teamdrives
hide_title: false
hide_table_of_contents: false
keywords:
  - teamdrives
  - drivev2
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
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivev2.teamdrives" /></td></tr>
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
    <td>An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on `drive.teamdrives.update` requests that don't set `themeId`. When specified, all fields of the `backgroundImageFile` must be set.</td>
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
    <td><CopyableCode code="createdDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the Team Drive was created (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always `drive#teamDrive` (default: drive#teamDrive)</td>
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
    <td>The ID of the theme from which the background image and color will be set. The set of possible `teamDriveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.teamdrives.insert` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`.</td>
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
    <td>An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on `drive.teamdrives.update` requests that don't set `themeId`. When specified, all fields of the `backgroundImageFile` must be set.</td>
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
    <td><CopyableCode code="createdDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the Team Drive was created (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always `drive#teamDrive` (default: drive#teamDrive)</td>
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
    <td>The ID of the theme from which the background image and color will be set. The set of possible `teamDriveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.teamdrives.insert` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`.</td>
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
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-q"><code>q</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-useDomainAdminAccess"><code>useDomainAdminAccess</code></a></td>
    <td>Deprecated: Use `drives.list` instead.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td></td>
    <td>Deprecated: Use `drives.insert` instead.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
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
createdDate,
kind,
orgUnitId,
restrictions,
themeId
FROM googleworkspace.drivev2.teamdrives
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
createdDate,
kind,
orgUnitId,
restrictions,
themeId
FROM googleworkspace.drivev2.teamdrives
WHERE pageToken = '{{ pageToken }}'
AND q = '{{ q }}'
AND maxResults = '{{ maxResults }}'
AND useDomainAdminAccess = '{{ useDomainAdminAccess }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="insert"
    values={[
        { label: 'insert', value: 'insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert">

Deprecated: Use `drives.insert` instead.

```sql
INSERT INTO googleworkspace.drivev2.teamdrives (
data__colorRgb,
data__createdDate,
data__backgroundImageLink,
data__backgroundImageFile,
data__kind,
data__restrictions,
data__id,
data__orgUnitId,
data__capabilities,
data__themeId,
data__name,
requestId
)
SELECT 
'{{ colorRgb }}',
'{{ createdDate }}',
'{{ backgroundImageLink }}',
'{{ backgroundImageFile }}',
'{{ kind }}',
'{{ restrictions }}',
'{{ id }}',
'{{ orgUnitId }}',
'{{ capabilities }}',
'{{ themeId }}',
'{{ name }}',
'{{ requestId }}'
RETURNING
id,
name,
backgroundImageFile,
backgroundImageLink,
capabilities,
colorRgb,
createdDate,
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
    - name: colorRgb
      value: "{{ colorRgb }}"
      description: |
        The color of this Team Drive as an RGB hex string. It can only be set on a \`drive.teamdrives.update\` request that does not set \`themeId\`.
    - name: createdDate
      value: "{{ createdDate }}"
      description: |
        The time at which the Team Drive was created (RFC 3339 date-time).
    - name: backgroundImageLink
      value: "{{ backgroundImageLink }}"
      description: |
        A short-lived link to this Team Drive's background image.
    - name: backgroundImageFile
      description: |
        An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on \`drive.teamdrives.update\` requests that don't set \`themeId\`. When specified, all fields of the \`backgroundImageFile\` must be set.
      value:
        id: "{{ id }}"
        width: {{ width }}
        xCoordinate: {{ xCoordinate }}
        yCoordinate: {{ yCoordinate }}
    - name: kind
      value: "{{ kind }}"
      description: |
        This is always \`drive#teamDrive\`
      default: drive#teamDrive
    - name: restrictions
      description: |
        A set of restrictions that apply to this Team Drive or items inside this Team Drive.
      value:
        teamMembersOnly: {{ teamMembersOnly }}
        copyRequiresWriterPermission: {{ copyRequiresWriterPermission }}
        adminManagedRestrictions: {{ adminManagedRestrictions }}
        sharingFoldersRequiresOrganizerPermission: {{ sharingFoldersRequiresOrganizerPermission }}
        domainUsersOnly: {{ domainUsersOnly }}
    - name: id
      value: "{{ id }}"
      description: |
        The ID of this Team Drive which is also the ID of the top level folder of this Team Drive.
    - name: orgUnitId
      value: "{{ orgUnitId }}"
      description: |
        The organizational unit of this shared drive. This field is only populated on \`drives.list\` responses when the \`useDomainAdminAccess\` parameter is set to \`true\`.
    - name: capabilities
      description: |
        Capabilities the current user has on this Team Drive.
      value:
        canComment: {{ canComment }}
        canEdit: {{ canEdit }}
        canRenameTeamDrive: {{ canRenameTeamDrive }}
        canDeleteChildren: {{ canDeleteChildren }}
        canDeleteTeamDrive: {{ canDeleteTeamDrive }}
        canChangeTeamDriveBackground: {{ canChangeTeamDriveBackground }}
        canShare: {{ canShare }}
        canAddChildren: {{ canAddChildren }}
        canChangeTeamMembersOnlyRestriction: {{ canChangeTeamMembersOnlyRestriction }}
        canResetTeamDriveRestrictions: {{ canResetTeamDriveRestrictions }}
        canReadRevisions: {{ canReadRevisions }}
        canRemoveChildren: {{ canRemoveChildren }}
        canChangeCopyRequiresWriterPermissionRestriction: {{ canChangeCopyRequiresWriterPermissionRestriction }}
        canDownload: {{ canDownload }}
        canChangeSharingFoldersRequiresOrganizerPermissionRestriction: {{ canChangeSharingFoldersRequiresOrganizerPermissionRestriction }}
        canTrashChildren: {{ canTrashChildren }}
        canManageMembers: {{ canManageMembers }}
        canChangeDomainUsersOnlyRestriction: {{ canChangeDomainUsersOnlyRestriction }}
        canCopy: {{ canCopy }}
        canListChildren: {{ canListChildren }}
        canRename: {{ canRename }}
    - name: themeId
      value: "{{ themeId }}"
      description: |
        The ID of the theme from which the background image and color will be set. The set of possible \`teamDriveThemes\` can be retrieved from a \`drive.about.get\` response. When not specified on a \`drive.teamdrives.insert\` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set \`colorRgb\` or \`backgroundImageFile\`.
    - name: name
      value: "{{ name }}"
      description: |
        The name of this Team Drive.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Deprecated: Use `drives.update` instead.

```sql
REPLACE googleworkspace.drivev2.teamdrives
SET 
data__colorRgb = '{{ colorRgb }}',
data__createdDate = '{{ createdDate }}',
data__backgroundImageLink = '{{ backgroundImageLink }}',
data__backgroundImageFile = '{{ backgroundImageFile }}',
data__kind = '{{ kind }}',
data__restrictions = '{{ restrictions }}',
data__id = '{{ id }}',
data__orgUnitId = '{{ orgUnitId }}',
data__capabilities = '{{ capabilities }}',
data__themeId = '{{ themeId }}',
data__name = '{{ name }}'
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
createdDate,
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
DELETE FROM googleworkspace.drivev2.teamdrives
WHERE teamDriveId = '{{ teamDriveId }}' --required
;
```
</TabItem>
</Tabs>
