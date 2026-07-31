--- 
title: drives
hide_title: false
hide_table_of_contents: false
keywords:
  - drives
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

Creates, updates, deletes, gets or lists a <code>drives</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="drives" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivev3.drives" /></td></tr>
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
    <td>Output only. The ID of this shared drive which is also the ID of the top level folder of this shared drive.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of this shared drive.</td>
</tr>
<tr>
    <td><CopyableCode code="backgroundImageFile" /></td>
    <td><code>object</code></td>
    <td>An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on `drive.drives.update` requests that don't set `themeId`. When specified, all fields of the `backgroundImageFile` must be set.</td>
</tr>
<tr>
    <td><CopyableCode code="backgroundImageLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A short-lived link to this shared drive's background image.</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td>Output only. Capabilities the current user has on this shared drive.</td>
</tr>
<tr>
    <td><CopyableCode code="colorRgb" /></td>
    <td><code>string</code></td>
    <td>The color of this shared drive as an RGB hex string. It can only be set on a `drive.drives.update` request that does not set `themeId`.</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the shared drive was created (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="hidden" /></td>
    <td><code>boolean</code></td>
    <td>Whether the shared drive is hidden from default view.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#drive"`. (default: drive#drive)</td>
</tr>
<tr>
    <td><CopyableCode code="orgUnitId" /></td>
    <td><code>string</code></td>
    <td>Output only. The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`.</td>
</tr>
<tr>
    <td><CopyableCode code="restrictions" /></td>
    <td><code>object</code></td>
    <td>A set of restrictions that apply to this shared drive or items inside this shared drive. Note that restrictions can't be set when creating a shared drive. To add a restriction, first create a shared drive and then use `drives.update` to add restrictions.</td>
</tr>
<tr>
    <td><CopyableCode code="themeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the theme from which the background image and color will be set. The set of possible `driveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.drives.create` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`.</td>
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
    <td>Output only. The ID of this shared drive which is also the ID of the top level folder of this shared drive.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of this shared drive.</td>
</tr>
<tr>
    <td><CopyableCode code="backgroundImageFile" /></td>
    <td><code>object</code></td>
    <td>An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on `drive.drives.update` requests that don't set `themeId`. When specified, all fields of the `backgroundImageFile` must be set.</td>
</tr>
<tr>
    <td><CopyableCode code="backgroundImageLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A short-lived link to this shared drive's background image.</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td>Output only. Capabilities the current user has on this shared drive.</td>
</tr>
<tr>
    <td><CopyableCode code="colorRgb" /></td>
    <td><code>string</code></td>
    <td>The color of this shared drive as an RGB hex string. It can only be set on a `drive.drives.update` request that does not set `themeId`.</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the shared drive was created (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="hidden" /></td>
    <td><code>boolean</code></td>
    <td>Whether the shared drive is hidden from default view.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#drive"`. (default: drive#drive)</td>
</tr>
<tr>
    <td><CopyableCode code="orgUnitId" /></td>
    <td><code>string</code></td>
    <td>Output only. The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`.</td>
</tr>
<tr>
    <td><CopyableCode code="restrictions" /></td>
    <td><code>object</code></td>
    <td>A set of restrictions that apply to this shared drive or items inside this shared drive. Note that restrictions can't be set when creating a shared drive. To add a restriction, first create a shared drive and then use `drives.update` to add restrictions.</td>
</tr>
<tr>
    <td><CopyableCode code="themeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the theme from which the background image and color will be set. The set of possible `driveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.drives.create` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`.</td>
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
    <td><a href="#parameter-driveId"><code>driveId</code></a></td>
    <td><a href="#parameter-useDomainAdminAccess"><code>useDomainAdminAccess</code></a></td>
    <td>Gets a shared drive's metadata by ID. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-useDomainAdminAccess"><code>useDomainAdminAccess</code></a>, <a href="#parameter-q"><code>q</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td> Lists the user's shared drives. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for shared drives](https://developers.google.com/workspace/drive/api/guides/search-shareddrives) guide.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td></td>
    <td>Creates a shared drive. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-driveId"><code>driveId</code></a></td>
    <td><a href="#parameter-useDomainAdminAccess"><code>useDomainAdminAccess</code></a></td>
    <td>Updates the metadata for a shared drive. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-driveId"><code>driveId</code></a></td>
    <td><a href="#parameter-useDomainAdminAccess"><code>useDomainAdminAccess</code></a>, <a href="#parameter-allowItemDeletion"><code>allowItemDeletion</code></a></td>
    <td>Permanently deletes a shared drive for which the user is an `organizer`. The shared drive cannot contain any untrashed items. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).</td>
</tr>
<tr>
    <td><a href="#unhide"><CopyableCode code="unhide" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-driveId"><code>driveId</code></a></td>
    <td></td>
    <td>Restores a shared drive to the default view. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).</td>
</tr>
<tr>
    <td><a href="#hide"><CopyableCode code="hide" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-driveId"><code>driveId</code></a></td>
    <td></td>
    <td>Hides a shared drive from the default view. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).</td>
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
<tr id="parameter-driveId">
    <td><CopyableCode code="driveId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-allowItemDeletion">
    <td><CopyableCode code="allowItemDeletion" /></td>
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

Gets a shared drive's metadata by ID. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).

```sql
SELECT
id,
name,
backgroundImageFile,
backgroundImageLink,
capabilities,
colorRgb,
createdTime,
hidden,
kind,
orgUnitId,
restrictions,
themeId
FROM googleworkspace.drivev3.drives
WHERE driveId = '{{ driveId }}' -- required
AND useDomainAdminAccess = '{{ useDomainAdminAccess }}'
;
```
</TabItem>
<TabItem value="list">

 Lists the user's shared drives. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for shared drives](https://developers.google.com/workspace/drive/api/guides/search-shareddrives) guide.

```sql
SELECT
id,
name,
backgroundImageFile,
backgroundImageLink,
capabilities,
colorRgb,
createdTime,
hidden,
kind,
orgUnitId,
restrictions,
themeId
FROM googleworkspace.drivev3.drives
WHERE useDomainAdminAccess = '{{ useDomainAdminAccess }}'
AND q = '{{ q }}'
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
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

Creates a shared drive. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).

```sql
INSERT INTO googleworkspace.drivev3.drives (
data__backgroundImageLink,
data__createdTime,
data__colorRgb,
data__capabilities,
data__name,
data__restrictions,
data__themeId,
data__kind,
data__hidden,
data__orgUnitId,
data__id,
data__backgroundImageFile,
requestId
)
SELECT 
'{{ backgroundImageLink }}',
'{{ createdTime }}',
'{{ colorRgb }}',
'{{ capabilities }}',
'{{ name }}',
'{{ restrictions }}',
'{{ themeId }}',
'{{ kind }}',
{{ hidden }},
'{{ orgUnitId }}',
'{{ id }}',
'{{ backgroundImageFile }}',
'{{ requestId }}'
RETURNING
id,
name,
backgroundImageFile,
backgroundImageLink,
capabilities,
colorRgb,
createdTime,
hidden,
kind,
orgUnitId,
restrictions,
themeId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: drives
  props:
    - name: requestId
      value: "{{ requestId }}"
      description: Required parameter for the drives resource.
    - name: backgroundImageLink
      value: "{{ backgroundImageLink }}"
      description: |
        Output only. A short-lived link to this shared drive's background image.
    - name: createdTime
      value: "{{ createdTime }}"
      description: |
        The time at which the shared drive was created (RFC 3339 date-time).
    - name: colorRgb
      value: "{{ colorRgb }}"
      description: |
        The color of this shared drive as an RGB hex string. It can only be set on a \`drive.drives.update\` request that does not set \`themeId\`.
    - name: capabilities
      description: |
        Output only. Capabilities the current user has on this shared drive.
      value:
        canDeleteDrive: {{ canDeleteDrive }}
        canChangeCopyRequiresWriterPermissionRestriction: {{ canChangeCopyRequiresWriterPermissionRestriction }}
        canManageMembers: {{ canManageMembers }}
        canRenameDrive: {{ canRenameDrive }}
        canChangeDriveMembersOnlyRestriction: {{ canChangeDriveMembersOnlyRestriction }}
        canAddChildren: {{ canAddChildren }}
        canEdit: {{ canEdit }}
        canTrashChildren: {{ canTrashChildren }}
        canResetDriveRestrictions: {{ canResetDriveRestrictions }}
        canDownload: {{ canDownload }}
        canChangeDownloadRestriction: {{ canChangeDownloadRestriction }}
        canListChildren: {{ canListChildren }}
        canChangeDomainUsersOnlyRestriction: {{ canChangeDomainUsersOnlyRestriction }}
        canReadRevisions: {{ canReadRevisions }}
        canRename: {{ canRename }}
        canCopy: {{ canCopy }}
        canShare: {{ canShare }}
        canDeleteChildren: {{ canDeleteChildren }}
        canChangeDriveBackground: {{ canChangeDriveBackground }}
        canChangeSharingFoldersRequiresOrganizerPermissionRestriction: {{ canChangeSharingFoldersRequiresOrganizerPermissionRestriction }}
        canComment: {{ canComment }}
    - name: name
      value: "{{ name }}"
      description: |
        The name of this shared drive.
    - name: restrictions
      description: |
        A set of restrictions that apply to this shared drive or items inside this shared drive. Note that restrictions can't be set when creating a shared drive. To add a restriction, first create a shared drive and then use \`drives.update\` to add restrictions.
      value:
        downloadRestriction:
          restrictedForReaders: {{ restrictedForReaders }}
          restrictedForWriters: {{ restrictedForWriters }}
        copyRequiresWriterPermission: {{ copyRequiresWriterPermission }}
        sharingFoldersRequiresOrganizerPermission: {{ sharingFoldersRequiresOrganizerPermission }}
        adminManagedRestrictions: {{ adminManagedRestrictions }}
        driveMembersOnly: {{ driveMembersOnly }}
        domainUsersOnly: {{ domainUsersOnly }}
    - name: themeId
      value: "{{ themeId }}"
      description: |
        The ID of the theme from which the background image and color will be set. The set of possible \`driveThemes\` can be retrieved from a \`drive.about.get\` response. When not specified on a \`drive.drives.create\` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set \`colorRgb\` or \`backgroundImageFile\`.
    - name: kind
      value: "{{ kind }}"
      description: |
        Output only. Identifies what kind of resource this is. Value: the fixed string \`"drive#drive"\`.
      default: drive#drive
    - name: hidden
      value: {{ hidden }}
      description: |
        Whether the shared drive is hidden from default view.
    - name: orgUnitId
      value: "{{ orgUnitId }}"
      description: |
        Output only. The organizational unit of this shared drive. This field is only populated on \`drives.list\` responses when the \`useDomainAdminAccess\` parameter is set to \`true\`.
    - name: id
      value: "{{ id }}"
      description: |
        Output only. The ID of this shared drive which is also the ID of the top level folder of this shared drive.
    - name: backgroundImageFile
      description: |
        An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on \`drive.drives.update\` requests that don't set \`themeId\`. When specified, all fields of the \`backgroundImageFile\` must be set.
      value:
        width: {{ width }}
        id: "{{ id }}"
        yCoordinate: {{ yCoordinate }}
        xCoordinate: {{ xCoordinate }}
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

Updates the metadata for a shared drive. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).

```sql
UPDATE googleworkspace.drivev3.drives
SET 
data__backgroundImageLink = '{{ backgroundImageLink }}',
data__createdTime = '{{ createdTime }}',
data__colorRgb = '{{ colorRgb }}',
data__capabilities = '{{ capabilities }}',
data__name = '{{ name }}',
data__restrictions = '{{ restrictions }}',
data__themeId = '{{ themeId }}',
data__kind = '{{ kind }}',
data__hidden = {{ hidden }},
data__orgUnitId = '{{ orgUnitId }}',
data__id = '{{ id }}',
data__backgroundImageFile = '{{ backgroundImageFile }}'
WHERE 
driveId = '{{ driveId }}' --required
AND useDomainAdminAccess = {{ useDomainAdminAccess}}
RETURNING
id,
name,
backgroundImageFile,
backgroundImageLink,
capabilities,
colorRgb,
createdTime,
hidden,
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

Permanently deletes a shared drive for which the user is an `organizer`. The shared drive cannot contain any untrashed items. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).

```sql
DELETE FROM googleworkspace.drivev3.drives
WHERE driveId = '{{ driveId }}' --required
AND useDomainAdminAccess = '{{ useDomainAdminAccess }}'
AND allowItemDeletion = '{{ allowItemDeletion }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="unhide"
    values={[
        { label: 'unhide', value: 'unhide' },
        { label: 'hide', value: 'hide' }
    ]}
>
<TabItem value="unhide">

Restores a shared drive to the default view. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).

```sql
EXEC googleworkspace.drivev3.drives.unhide 
@driveId='{{ driveId }}' --required
;
```
</TabItem>
<TabItem value="hide">

Hides a shared drive from the default view. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).

```sql
EXEC googleworkspace.drivev3.drives.hide 
@driveId='{{ driveId }}' --required
;
```
</TabItem>
</Tabs>
