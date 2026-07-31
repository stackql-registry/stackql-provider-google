--- 
title: permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - permissions
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

Creates, updates, deletes, gets or lists a <code>permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivev3.permissions" /></td></tr>
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
    <td>Output only. The ID of this permission. This is a unique identifier for the grantee, and is published in the [User resource](https://developers.google.com/workspace/drive/api/reference/rest/v3/User) as `permissionId`. IDs should be treated as opaque values.</td>
</tr>
<tr>
    <td><CopyableCode code="allowFileDiscovery" /></td>
    <td><code>boolean</code></td>
    <td>Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type `domain` or `anyone`.</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the account associated with this permission has been deleted. This field only pertains to permissions of type `user` or `group`.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. The "pretty" name of the value of the permission. The following is a list of examples for each type of permission: * `user` - User's full name, as defined for their Google Account, such as "Dana A." * `group` - Name of the Google Group, such as "The Company Administrators." * `domain` - String domain name, such as "cymbalgroup.com." * `anyone` - No `displayName` is present.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Output only. The domain to which this permission refers.</td>
</tr>
<tr>
    <td><CopyableCode code="emailAddress" /></td>
    <td><code>string</code></td>
    <td>Output only. The email address of the user or group to which this permission refers.</td>
</tr>
<tr>
    <td><CopyableCode code="expirationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions: - They can only be set on user and group permissions - The time must be in the future - The time cannot be more than a year in the future</td>
</tr>
<tr>
    <td><CopyableCode code="inheritedPermissionsDisabled" /></td>
    <td><code>boolean</code></td>
    <td>When `true`, only organizers, owners, and users with permissions added directly on the item can access it.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#permission"`. (default: drive#permission)</td>
</tr>
<tr>
    <td><CopyableCode code="pendingOwner" /></td>
    <td><code>boolean</code></td>
    <td>Whether the account associated with this permission is a pending owner. Only populated for permissions of type `user` for files that aren't in a shared drive.</td>
</tr>
<tr>
    <td><CopyableCode code="permissionDetails" /></td>
    <td><code>array</code></td>
    <td>Output only. Details of whether the permissions on this item are inherited or are directly on this item.</td>
</tr>
<tr>
    <td><CopyableCode code="photoLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link to the user's profile photo, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The role granted by this permission. Supported values include: * `owner` * `organizer` * `fileOrganizer` * `writer` * `commenter` * `reader` For more information, see [Roles and permissions](https://developers.google.com/workspace/drive/api/guides/ref-roles).</td>
</tr>
<tr>
    <td><CopyableCode code="teamDrivePermissionDetails" /></td>
    <td><code>array</code></td>
    <td>Output only. Deprecated: Output only. Use `permissionDetails` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the grantee. Supported values include: * `user` * `group` * `domain` * `anyone` When creating a permission, if `type` is `user` or `group`, you must provide an `emailAddress` for the user or group. If `type` is `domain`, you must provide a `domain`. If `type` is `anyone`, no extra information is required.</td>
</tr>
<tr>
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
    <td>Indicates the view for this permission. Only populated for permissions that belong to a view. The only supported values are `published` and `metadata`: * `published`: The permission's role is `publishedReader`. * `metadata`: The item is only visible to the `metadata` view because the item has limited access and the scope has at least read access to the parent. The `metadata` view is only supported on folders. For more information, see [Views](https://developers.google.com/workspace/drive/api/guides/ref-roles#views).</td>
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
    <td>Output only. The ID of this permission. This is a unique identifier for the grantee, and is published in the [User resource](https://developers.google.com/workspace/drive/api/reference/rest/v3/User) as `permissionId`. IDs should be treated as opaque values.</td>
</tr>
<tr>
    <td><CopyableCode code="allowFileDiscovery" /></td>
    <td><code>boolean</code></td>
    <td>Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type `domain` or `anyone`.</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the account associated with this permission has been deleted. This field only pertains to permissions of type `user` or `group`.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. The "pretty" name of the value of the permission. The following is a list of examples for each type of permission: * `user` - User's full name, as defined for their Google Account, such as "Dana A." * `group` - Name of the Google Group, such as "The Company Administrators." * `domain` - String domain name, such as "cymbalgroup.com." * `anyone` - No `displayName` is present.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Output only. The domain to which this permission refers.</td>
</tr>
<tr>
    <td><CopyableCode code="emailAddress" /></td>
    <td><code>string</code></td>
    <td>Output only. The email address of the user or group to which this permission refers.</td>
</tr>
<tr>
    <td><CopyableCode code="expirationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions: - They can only be set on user and group permissions - The time must be in the future - The time cannot be more than a year in the future</td>
</tr>
<tr>
    <td><CopyableCode code="inheritedPermissionsDisabled" /></td>
    <td><code>boolean</code></td>
    <td>When `true`, only organizers, owners, and users with permissions added directly on the item can access it.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#permission"`. (default: drive#permission)</td>
</tr>
<tr>
    <td><CopyableCode code="pendingOwner" /></td>
    <td><code>boolean</code></td>
    <td>Whether the account associated with this permission is a pending owner. Only populated for permissions of type `user` for files that aren't in a shared drive.</td>
</tr>
<tr>
    <td><CopyableCode code="permissionDetails" /></td>
    <td><code>array</code></td>
    <td>Output only. Details of whether the permissions on this item are inherited or are directly on this item.</td>
</tr>
<tr>
    <td><CopyableCode code="photoLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link to the user's profile photo, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The role granted by this permission. Supported values include: * `owner` * `organizer` * `fileOrganizer` * `writer` * `commenter` * `reader` For more information, see [Roles and permissions](https://developers.google.com/workspace/drive/api/guides/ref-roles).</td>
</tr>
<tr>
    <td><CopyableCode code="teamDrivePermissionDetails" /></td>
    <td><code>array</code></td>
    <td>Output only. Deprecated: Output only. Use `permissionDetails` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the grantee. Supported values include: * `user` * `group` * `domain` * `anyone` When creating a permission, if `type` is `user` or `group`, you must provide an `emailAddress` for the user or group. If `type` is `domain`, you must provide a `domain`. If `type` is `anyone`, no extra information is required.</td>
</tr>
<tr>
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
    <td>Indicates the view for this permission. Only populated for permissions that belong to a view. The only supported values are `published` and `metadata`: * `published`: The permission's role is `publishedReader`. * `metadata`: The item is only visible to the `metadata` view because the item has limited access and the scope has at least read access to the parent. The `metadata` view is only supported on folders. For more information, see [Views](https://developers.google.com/workspace/drive/api/guides/ref-roles#views).</td>
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
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-permissionId"><code>permissionId</code></a></td>
    <td><a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-useDomainAdminAccess"><code>useDomainAdminAccess</code></a></td>
    <td>Gets a permission by ID. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing).</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-includePermissionsForView"><code>includePermissionsForView</code></a>, <a href="#parameter-useDomainAdminAccess"><code>useDomainAdminAccess</code></a></td>
    <td>Lists a file's or shared drive's permissions. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing).</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td><a href="#parameter-enforceSingleParent"><code>enforceSingleParent</code></a>, <a href="#parameter-moveToNewOwnersRoot"><code>moveToNewOwnersRoot</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-transferOwnership"><code>transferOwnership</code></a>, <a href="#parameter-enforceExpansiveAccess"><code>enforceExpansiveAccess</code></a>, <a href="#parameter-useDomainAdminAccess"><code>useDomainAdminAccess</code></a>, <a href="#parameter-emailMessage"><code>emailMessage</code></a>, <a href="#parameter-sendNotificationEmail"><code>sendNotificationEmail</code></a></td>
    <td>Creates a permission for a file or shared drive. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing). **Warning:** Concurrent permissions operations on the same file aren't supported; only the last update is applied.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-permissionId"><code>permissionId</code></a></td>
    <td><a href="#parameter-removeExpiration"><code>removeExpiration</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-transferOwnership"><code>transferOwnership</code></a>, <a href="#parameter-enforceExpansiveAccess"><code>enforceExpansiveAccess</code></a>, <a href="#parameter-useDomainAdminAccess"><code>useDomainAdminAccess</code></a></td>
    <td>Updates a permission with patch semantics. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing). **Warning:** Concurrent permissions operations on the same file aren't supported; only the last update is applied.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-permissionId"><code>permissionId</code></a></td>
    <td><a href="#parameter-useDomainAdminAccess"><code>useDomainAdminAccess</code></a>, <a href="#parameter-enforceExpansiveAccess"><code>enforceExpansiveAccess</code></a>, <a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a></td>
    <td>Deletes a permission. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing). **Warning:** Concurrent permissions operations on the same file aren't supported; only the last update is applied.</td>
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
<tr id="parameter-fileId">
    <td><CopyableCode code="fileId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-permissionId">
    <td><CopyableCode code="permissionId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-emailMessage">
    <td><CopyableCode code="emailMessage" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-enforceExpansiveAccess">
    <td><CopyableCode code="enforceExpansiveAccess" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-enforceSingleParent">
    <td><CopyableCode code="enforceSingleParent" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-includePermissionsForView">
    <td><CopyableCode code="includePermissionsForView" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-moveToNewOwnersRoot">
    <td><CopyableCode code="moveToNewOwnersRoot" /></td>
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
<tr id="parameter-removeExpiration">
    <td><CopyableCode code="removeExpiration" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-sendNotificationEmail">
    <td><CopyableCode code="sendNotificationEmail" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-transferOwnership">
    <td><CopyableCode code="transferOwnership" /></td>
    <td><code>boolean</code></td>
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

Gets a permission by ID. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing).

```sql
SELECT
id,
allowFileDiscovery,
deleted,
displayName,
domain,
emailAddress,
expirationTime,
inheritedPermissionsDisabled,
kind,
pendingOwner,
permissionDetails,
photoLink,
role,
teamDrivePermissionDetails,
type,
view
FROM googleworkspace.drivev3.permissions
WHERE fileId = '{{ fileId }}' -- required
AND permissionId = '{{ permissionId }}' -- required
AND supportsAllDrives = '{{ supportsAllDrives }}'
AND supportsTeamDrives = '{{ supportsTeamDrives }}'
AND useDomainAdminAccess = '{{ useDomainAdminAccess }}'
;
```
</TabItem>
<TabItem value="list">

Lists a file's or shared drive's permissions. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing).

```sql
SELECT
id,
allowFileDiscovery,
deleted,
displayName,
domain,
emailAddress,
expirationTime,
inheritedPermissionsDisabled,
kind,
pendingOwner,
permissionDetails,
photoLink,
role,
teamDrivePermissionDetails,
type,
view
FROM googleworkspace.drivev3.permissions
WHERE fileId = '{{ fileId }}' -- required
AND pageToken = '{{ pageToken }}'
AND supportsTeamDrives = '{{ supportsTeamDrives }}'
AND supportsAllDrives = '{{ supportsAllDrives }}'
AND pageSize = '{{ pageSize }}'
AND includePermissionsForView = '{{ includePermissionsForView }}'
AND useDomainAdminAccess = '{{ useDomainAdminAccess }}'
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

Creates a permission for a file or shared drive. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing). **Warning:** Concurrent permissions operations on the same file aren't supported; only the last update is applied.

```sql
INSERT INTO googleworkspace.drivev3.permissions (
data__kind,
data__pendingOwner,
data__type,
data__deleted,
data__view,
data__inheritedPermissionsDisabled,
data__photoLink,
data__allowFileDiscovery,
data__displayName,
data__expirationTime,
data__role,
data__id,
fileId,
enforceSingleParent,
moveToNewOwnersRoot,
supportsTeamDrives,
supportsAllDrives,
transferOwnership,
enforceExpansiveAccess,
useDomainAdminAccess,
emailMessage,
sendNotificationEmail
)
SELECT 
'{{ kind }}',
{{ pendingOwner }},
'{{ type }}',
{{ deleted }},
'{{ view }}',
{{ inheritedPermissionsDisabled }},
'{{ photoLink }}',
{{ allowFileDiscovery }},
'{{ displayName }}',
'{{ expirationTime }}',
'{{ role }}',
'{{ id }}',
'{{ fileId }}',
'{{ enforceSingleParent }}',
'{{ moveToNewOwnersRoot }}',
'{{ supportsTeamDrives }}',
'{{ supportsAllDrives }}',
'{{ transferOwnership }}',
'{{ enforceExpansiveAccess }}',
'{{ useDomainAdminAccess }}',
'{{ emailMessage }}',
'{{ sendNotificationEmail }}'
RETURNING
id,
allowFileDiscovery,
deleted,
displayName,
domain,
emailAddress,
expirationTime,
inheritedPermissionsDisabled,
kind,
pendingOwner,
permissionDetails,
photoLink,
role,
teamDrivePermissionDetails,
type,
view
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: permissions
  props:
    - name: fileId
      value: "{{ fileId }}"
      description: Required parameter for the permissions resource.
    - name: kind
      value: "{{ kind }}"
      description: |
        Output only. Identifies what kind of resource this is. Value: the fixed string \`"drive#permission"\`.
      default: drive#permission
    - name: pendingOwner
      value: {{ pendingOwner }}
      description: |
        Whether the account associated with this permission is a pending owner. Only populated for permissions of type \`user\` for files that aren't in a shared drive.
    - name: type
      value: "{{ type }}"
      description: |
        The type of the grantee. Supported values include: * \`user\` * \`group\` * \`domain\` * \`anyone\` When creating a permission, if \`type\` is \`user\` or \`group\`, you must provide an \`emailAddress\` for the user or group. If \`type\` is \`domain\`, you must provide a \`domain\`. If \`type\` is \`anyone\`, no extra information is required.
    - name: deleted
      value: {{ deleted }}
      description: |
        Output only. Whether the account associated with this permission has been deleted. This field only pertains to permissions of type \`user\` or \`group\`.
    - name: view
      value: "{{ view }}"
      description: |
        Indicates the view for this permission. Only populated for permissions that belong to a view. The only supported values are \`published\` and \`metadata\`: * \`published\`: The permission's role is \`publishedReader\`. * \`metadata\`: The item is only visible to the \`metadata\` view because the item has limited access and the scope has at least read access to the parent. The \`metadata\` view is only supported on folders. For more information, see [Views](https://developers.google.com/workspace/drive/api/guides/ref-roles#views).
    - name: inheritedPermissionsDisabled
      value: {{ inheritedPermissionsDisabled }}
      description: |
        When \`true\`, only organizers, owners, and users with permissions added directly on the item can access it.
    - name: photoLink
      value: "{{ photoLink }}"
      description: |
        Output only. A link to the user's profile photo, if available.
    - name: allowFileDiscovery
      value: {{ allowFileDiscovery }}
      description: |
        Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type \`domain\` or \`anyone\`.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Output only. The "pretty" name of the value of the permission. The following is a list of examples for each type of permission: * \`user\` - User's full name, as defined for their Google Account, such as "Dana A." * \`group\` - Name of the Google Group, such as "The Company Administrators." * \`domain\` - String domain name, such as "cymbalgroup.com." * \`anyone\` - No \`displayName\` is present.
    - name: expirationTime
      value: "{{ expirationTime }}"
      description: |
        The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions: - They can only be set on user and group permissions - The time must be in the future - The time cannot be more than a year in the future
    - name: role
      value: "{{ role }}"
      description: |
        The role granted by this permission. Supported values include: * \`owner\` * \`organizer\` * \`fileOrganizer\` * \`writer\` * \`commenter\` * \`reader\` For more information, see [Roles and permissions](https://developers.google.com/workspace/drive/api/guides/ref-roles).
    - name: id
      value: "{{ id }}"
      description: |
        Output only. The ID of this permission. This is a unique identifier for the grantee, and is published in the [User resource](https://developers.google.com/workspace/drive/api/reference/rest/v3/User) as \`permissionId\`. IDs should be treated as opaque values.
    - name: enforceSingleParent
      value: {{ enforceSingleParent }}
    - name: moveToNewOwnersRoot
      value: {{ moveToNewOwnersRoot }}
    - name: supportsTeamDrives
      value: {{ supportsTeamDrives }}
    - name: supportsAllDrives
      value: {{ supportsAllDrives }}
    - name: transferOwnership
      value: {{ transferOwnership }}
    - name: enforceExpansiveAccess
      value: {{ enforceExpansiveAccess }}
    - name: useDomainAdminAccess
      value: {{ useDomainAdminAccess }}
    - name: emailMessage
      value: "{{ emailMessage }}"
    - name: sendNotificationEmail
      value: {{ sendNotificationEmail }}
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

Updates a permission with patch semantics. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing). **Warning:** Concurrent permissions operations on the same file aren't supported; only the last update is applied.

```sql
UPDATE googleworkspace.drivev3.permissions
SET 
data__kind = '{{ kind }}',
data__pendingOwner = {{ pendingOwner }},
data__type = '{{ type }}',
data__deleted = {{ deleted }},
data__view = '{{ view }}',
data__inheritedPermissionsDisabled = {{ inheritedPermissionsDisabled }},
data__photoLink = '{{ photoLink }}',
data__allowFileDiscovery = {{ allowFileDiscovery }},
data__displayName = '{{ displayName }}',
data__expirationTime = '{{ expirationTime }}',
data__role = '{{ role }}',
data__id = '{{ id }}'
WHERE 
fileId = '{{ fileId }}' --required
AND permissionId = '{{ permissionId }}' --required
AND removeExpiration = {{ removeExpiration}}
AND supportsTeamDrives = {{ supportsTeamDrives}}
AND supportsAllDrives = {{ supportsAllDrives}}
AND transferOwnership = {{ transferOwnership}}
AND enforceExpansiveAccess = {{ enforceExpansiveAccess}}
AND useDomainAdminAccess = {{ useDomainAdminAccess}}
RETURNING
id,
allowFileDiscovery,
deleted,
displayName,
domain,
emailAddress,
expirationTime,
inheritedPermissionsDisabled,
kind,
pendingOwner,
permissionDetails,
photoLink,
role,
teamDrivePermissionDetails,
type,
view;
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

Deletes a permission. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing). **Warning:** Concurrent permissions operations on the same file aren't supported; only the last update is applied.

```sql
DELETE FROM googleworkspace.drivev3.permissions
WHERE fileId = '{{ fileId }}' --required
AND permissionId = '{{ permissionId }}' --required
AND useDomainAdminAccess = '{{ useDomainAdminAccess }}'
AND enforceExpansiveAccess = '{{ enforceExpansiveAccess }}'
AND supportsAllDrives = '{{ supportsAllDrives }}'
AND supportsTeamDrives = '{{ supportsTeamDrives }}'
;
```
</TabItem>
</Tabs>
