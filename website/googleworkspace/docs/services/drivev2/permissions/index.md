--- 
title: permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - permissions
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

Creates, updates, deletes, gets or lists a <code>permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivev2.permissions" /></td></tr>
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
    <td>The ID of the user this permission refers to, and identical to the `permissionId` in the About and Files resources. When making a `drive.permissions.insert` request, exactly one of the `id` or `value` fields must be specified unless the permission type is `anyone`, in which case both `id` and `value` are ignored.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. The name for this permission.</td>
</tr>
<tr>
    <td><CopyableCode code="additionalRoles" /></td>
    <td><code>array</code></td>
    <td>Additional roles for this user. Only `commenter` is currently allowed, though more may be supported in the future.</td>
</tr>
<tr>
    <td><CopyableCode code="authKey" /></td>
    <td><code>string</code></td>
    <td>Output only. Deprecated.</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Output only. The domain name of the entity this permission refers to. This is an output-only field which is present when the permission type is `user`, `group` or `domain`.</td>
</tr>
<tr>
    <td><CopyableCode code="emailAddress" /></td>
    <td><code>string</code></td>
    <td>Output only. The email address of the user or group this permission refers to. This is an output-only field which is present when the permission type is `user` or `group`.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. The ETag of the permission.</td>
</tr>
<tr>
    <td><CopyableCode code="expirationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which this permission will expire (RFC 3339 date-time). Expiration dates have the following restrictions: - They can only be set on user and group permissions - The date must be in the future - The date cannot be more than a year in the future - The date can only be set on drive.permissions.update or drive.permissions.patch requests</td>
</tr>
<tr>
    <td><CopyableCode code="inheritedPermissionsDisabled" /></td>
    <td><code>boolean</code></td>
    <td>When true, only organizers, owners, and users with permissions added directly on the item can access it.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. This is always `drive#permission`. (default: drive#permission)</td>
</tr>
<tr>
    <td><CopyableCode code="pendingOwner" /></td>
    <td><code>boolean</code></td>
    <td>Whether the account associated with this permission is a pending owner. Only populated for `user` type permissions for files that are not in a shared drive.</td>
</tr>
<tr>
    <td><CopyableCode code="permissionDetails" /></td>
    <td><code>array</code></td>
    <td>Output only. Details of whether the permissions on this item are inherited or directly on this item.</td>
</tr>
<tr>
    <td><CopyableCode code="photoLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link to the profile photo, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The primary role for this user. While new values may be supported in the future, the following are currently allowed: * `owner` * `organizer` * `fileOrganizer` * `writer` * `reader`</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link back to this permission.</td>
</tr>
<tr>
    <td><CopyableCode code="teamDrivePermissionDetails" /></td>
    <td><code>array</code></td>
    <td>Output only. Deprecated: Use `permissionDetails` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The account type. Allowed values are: * `user` * `group` * `domain` * `anyone`</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The email address or domain name for the entity. This is used during inserts and is not populated in responses. When making a `drive.permissions.insert` request, exactly one of the `id` or `value` fields must be specified unless the permission type is `anyone`, in which case both `id` and `value` are ignored.</td>
</tr>
<tr>
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
    <td>Indicates the view for this permission. Only populated for permissions that belong to a view. published and metadata are the only supported values. - published: The permission's role is published_reader. - metadata: The item is only visible to the metadata view because the item has limited access and the scope has at least read access to the parent. Note: The metadata view is currently only supported on folders. </td>
</tr>
<tr>
    <td><CopyableCode code="withLink" /></td>
    <td><code>boolean</code></td>
    <td>Whether the link is required for this permission.</td>
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
    <td>The ID of the user this permission refers to, and identical to the `permissionId` in the About and Files resources. When making a `drive.permissions.insert` request, exactly one of the `id` or `value` fields must be specified unless the permission type is `anyone`, in which case both `id` and `value` are ignored.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. The name for this permission.</td>
</tr>
<tr>
    <td><CopyableCode code="additionalRoles" /></td>
    <td><code>array</code></td>
    <td>Additional roles for this user. Only `commenter` is currently allowed, though more may be supported in the future.</td>
</tr>
<tr>
    <td><CopyableCode code="authKey" /></td>
    <td><code>string</code></td>
    <td>Output only. Deprecated.</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Output only. The domain name of the entity this permission refers to. This is an output-only field which is present when the permission type is `user`, `group` or `domain`.</td>
</tr>
<tr>
    <td><CopyableCode code="emailAddress" /></td>
    <td><code>string</code></td>
    <td>Output only. The email address of the user or group this permission refers to. This is an output-only field which is present when the permission type is `user` or `group`.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. The ETag of the permission.</td>
</tr>
<tr>
    <td><CopyableCode code="expirationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which this permission will expire (RFC 3339 date-time). Expiration dates have the following restrictions: - They can only be set on user and group permissions - The date must be in the future - The date cannot be more than a year in the future - The date can only be set on drive.permissions.update or drive.permissions.patch requests</td>
</tr>
<tr>
    <td><CopyableCode code="inheritedPermissionsDisabled" /></td>
    <td><code>boolean</code></td>
    <td>When true, only organizers, owners, and users with permissions added directly on the item can access it.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. This is always `drive#permission`. (default: drive#permission)</td>
</tr>
<tr>
    <td><CopyableCode code="pendingOwner" /></td>
    <td><code>boolean</code></td>
    <td>Whether the account associated with this permission is a pending owner. Only populated for `user` type permissions for files that are not in a shared drive.</td>
</tr>
<tr>
    <td><CopyableCode code="permissionDetails" /></td>
    <td><code>array</code></td>
    <td>Output only. Details of whether the permissions on this item are inherited or directly on this item.</td>
</tr>
<tr>
    <td><CopyableCode code="photoLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link to the profile photo, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The primary role for this user. While new values may be supported in the future, the following are currently allowed: * `owner` * `organizer` * `fileOrganizer` * `writer` * `reader`</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link back to this permission.</td>
</tr>
<tr>
    <td><CopyableCode code="teamDrivePermissionDetails" /></td>
    <td><code>array</code></td>
    <td>Output only. Deprecated: Use `permissionDetails` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The account type. Allowed values are: * `user` * `group` * `domain` * `anyone`</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The email address or domain name for the entity. This is used during inserts and is not populated in responses. When making a `drive.permissions.insert` request, exactly one of the `id` or `value` fields must be specified unless the permission type is `anyone`, in which case both `id` and `value` are ignored.</td>
</tr>
<tr>
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
    <td>Indicates the view for this permission. Only populated for permissions that belong to a view. published and metadata are the only supported values. - published: The permission's role is published_reader. - metadata: The item is only visible to the metadata view because the item has limited access and the scope has at least read access to the parent. Note: The metadata view is currently only supported on folders. </td>
</tr>
<tr>
    <td><CopyableCode code="withLink" /></td>
    <td><code>boolean</code></td>
    <td>Whether the link is required for this permission.</td>
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
    <td><a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-useDomainAdminAccess"><code>useDomainAdminAccess</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a></td>
    <td>Gets a permission by ID.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-includePermissionsForView"><code>includePermissionsForView</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-useDomainAdminAccess"><code>useDomainAdminAccess</code></a></td>
    <td>Lists a file's or shared drive's permissions.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td><a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-moveToNewOwnersRoot"><code>moveToNewOwnersRoot</code></a>, <a href="#parameter-enforceExpansiveAccess"><code>enforceExpansiveAccess</code></a>, <a href="#parameter-emailMessage"><code>emailMessage</code></a>, <a href="#parameter-sendNotificationEmails"><code>sendNotificationEmails</code></a>, <a href="#parameter-enforceSingleParent"><code>enforceSingleParent</code></a>, <a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-useDomainAdminAccess"><code>useDomainAdminAccess</code></a></td>
    <td>Inserts a permission for a file or shared drive. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-permissionId"><code>permissionId</code></a></td>
    <td><a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-transferOwnership"><code>transferOwnership</code></a>, <a href="#parameter-enforceExpansiveAccess"><code>enforceExpansiveAccess</code></a>, <a href="#parameter-removeExpiration"><code>removeExpiration</code></a>, <a href="#parameter-useDomainAdminAccess"><code>useDomainAdminAccess</code></a></td>
    <td>Updates a permission using patch semantics. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-permissionId"><code>permissionId</code></a></td>
    <td><a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-transferOwnership"><code>transferOwnership</code></a>, <a href="#parameter-enforceExpansiveAccess"><code>enforceExpansiveAccess</code></a>, <a href="#parameter-removeExpiration"><code>removeExpiration</code></a>, <a href="#parameter-useDomainAdminAccess"><code>useDomainAdminAccess</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a></td>
    <td>Updates a permission. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-permissionId"><code>permissionId</code></a></td>
    <td><a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-enforceExpansiveAccess"><code>enforceExpansiveAccess</code></a>, <a href="#parameter-useDomainAdminAccess"><code>useDomainAdminAccess</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a></td>
    <td>Deletes a permission from a file or shared drive. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-moveToNewOwnersRoot">
    <td><CopyableCode code="moveToNewOwnersRoot" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-sendNotificationEmails">
    <td><CopyableCode code="sendNotificationEmails" /></td>
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

Gets a permission by ID.

```sql
SELECT
id,
name,
additionalRoles,
authKey,
deleted,
domain,
emailAddress,
etag,
expirationDate,
inheritedPermissionsDisabled,
kind,
pendingOwner,
permissionDetails,
photoLink,
role,
selfLink,
teamDrivePermissionDetails,
type,
value,
view,
withLink
FROM googleworkspace.drivev2.permissions
WHERE fileId = '{{ fileId }}' -- required
AND permissionId = '{{ permissionId }}' -- required
AND supportsAllDrives = '{{ supportsAllDrives }}'
AND useDomainAdminAccess = '{{ useDomainAdminAccess }}'
AND supportsTeamDrives = '{{ supportsTeamDrives }}'
;
```
</TabItem>
<TabItem value="list">

Lists a file's or shared drive's permissions.

```sql
SELECT
id,
name,
additionalRoles,
authKey,
deleted,
domain,
emailAddress,
etag,
expirationDate,
inheritedPermissionsDisabled,
kind,
pendingOwner,
permissionDetails,
photoLink,
role,
selfLink,
teamDrivePermissionDetails,
type,
value,
view,
withLink
FROM googleworkspace.drivev2.permissions
WHERE fileId = '{{ fileId }}' -- required
AND maxResults = '{{ maxResults }}'
AND supportsTeamDrives = '{{ supportsTeamDrives }}'
AND includePermissionsForView = '{{ includePermissionsForView }}'
AND pageToken = '{{ pageToken }}'
AND supportsAllDrives = '{{ supportsAllDrives }}'
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

Inserts a permission for a file or shared drive. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.

```sql
INSERT INTO googleworkspace.drivev2.permissions (
data__selfLink,
data__etag,
data__deleted,
data__additionalRoles,
data__photoLink,
data__inheritedPermissionsDisabled,
data__id,
data__kind,
data__expirationDate,
data__withLink,
data__emailAddress,
data__type,
data__value,
data__domain,
data__pendingOwner,
data__view,
data__name,
data__authKey,
data__role,
fileId,
supportsTeamDrives,
moveToNewOwnersRoot,
enforceExpansiveAccess,
emailMessage,
sendNotificationEmails,
enforceSingleParent,
supportsAllDrives,
useDomainAdminAccess
)
SELECT 
'{{ selfLink }}',
'{{ etag }}',
{{ deleted }},
'{{ additionalRoles }}',
'{{ photoLink }}',
{{ inheritedPermissionsDisabled }},
'{{ id }}',
'{{ kind }}',
'{{ expirationDate }}',
{{ withLink }},
'{{ emailAddress }}',
'{{ type }}',
'{{ value }}',
'{{ domain }}',
{{ pendingOwner }},
'{{ view }}',
'{{ name }}',
'{{ authKey }}',
'{{ role }}',
'{{ fileId }}',
'{{ supportsTeamDrives }}',
'{{ moveToNewOwnersRoot }}',
'{{ enforceExpansiveAccess }}',
'{{ emailMessage }}',
'{{ sendNotificationEmails }}',
'{{ enforceSingleParent }}',
'{{ supportsAllDrives }}',
'{{ useDomainAdminAccess }}'
RETURNING
id,
name,
additionalRoles,
authKey,
deleted,
domain,
emailAddress,
etag,
expirationDate,
inheritedPermissionsDisabled,
kind,
pendingOwner,
permissionDetails,
photoLink,
role,
selfLink,
teamDrivePermissionDetails,
type,
value,
view,
withLink
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
    - name: selfLink
      value: "{{ selfLink }}"
      description: |
        Output only. A link back to this permission.
    - name: etag
      value: "{{ etag }}"
      description: |
        Output only. The ETag of the permission.
    - name: deleted
      value: {{ deleted }}
      description: |
        Output only. Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.
    - name: additionalRoles
      value:
        - "{{ additionalRoles }}"
      description: |
        Additional roles for this user. Only \`commenter\` is currently allowed, though more may be supported in the future.
    - name: photoLink
      value: "{{ photoLink }}"
      description: |
        Output only. A link to the profile photo, if available.
    - name: inheritedPermissionsDisabled
      value: {{ inheritedPermissionsDisabled }}
      description: |
        When true, only organizers, owners, and users with permissions added directly on the item can access it.
    - name: id
      value: "{{ id }}"
      description: |
        The ID of the user this permission refers to, and identical to the \`permissionId\` in the About and Files resources. When making a \`drive.permissions.insert\` request, exactly one of the \`id\` or \`value\` fields must be specified unless the permission type is \`anyone\`, in which case both \`id\` and \`value\` are ignored.
    - name: kind
      value: "{{ kind }}"
      description: |
        Output only. This is always \`drive#permission\`.
      default: drive#permission
    - name: expirationDate
      value: "{{ expirationDate }}"
      description: |
        The time at which this permission will expire (RFC 3339 date-time). Expiration dates have the following restrictions: - They can only be set on user and group permissions - The date must be in the future - The date cannot be more than a year in the future - The date can only be set on drive.permissions.update or drive.permissions.patch requests
    - name: withLink
      value: {{ withLink }}
      description: |
        Whether the link is required for this permission.
    - name: emailAddress
      value: "{{ emailAddress }}"
      description: |
        Output only. The email address of the user or group this permission refers to. This is an output-only field which is present when the permission type is \`user\` or \`group\`.
    - name: type
      value: "{{ type }}"
      description: |
        The account type. Allowed values are: * \`user\` * \`group\` * \`domain\` * \`anyone\`
    - name: value
      value: "{{ value }}"
      description: |
        The email address or domain name for the entity. This is used during inserts and is not populated in responses. When making a \`drive.permissions.insert\` request, exactly one of the \`id\` or \`value\` fields must be specified unless the permission type is \`anyone\`, in which case both \`id\` and \`value\` are ignored.
    - name: domain
      value: "{{ domain }}"
      description: |
        Output only. The domain name of the entity this permission refers to. This is an output-only field which is present when the permission type is \`user\`, \`group\` or \`domain\`.
    - name: pendingOwner
      value: {{ pendingOwner }}
      description: |
        Whether the account associated with this permission is a pending owner. Only populated for \`user\` type permissions for files that are not in a shared drive.
    - name: view
      value: "{{ view }}"
      description: |
        Indicates the view for this permission. Only populated for permissions that belong to a view. published and metadata are the only supported values. - published: The permission's role is published_reader. - metadata: The item is only visible to the metadata view because the item has limited access and the scope has at least read access to the parent. Note: The metadata view is currently only supported on folders.
    - name: name
      value: "{{ name }}"
      description: |
        Output only. The name for this permission.
    - name: authKey
      value: "{{ authKey }}"
      description: |
        Output only. Deprecated.
    - name: role
      value: "{{ role }}"
      description: |
        The primary role for this user. While new values may be supported in the future, the following are currently allowed: * \`owner\` * \`organizer\` * \`fileOrganizer\` * \`writer\` * \`reader\`
    - name: supportsTeamDrives
      value: {{ supportsTeamDrives }}
    - name: moveToNewOwnersRoot
      value: {{ moveToNewOwnersRoot }}
    - name: enforceExpansiveAccess
      value: {{ enforceExpansiveAccess }}
    - name: emailMessage
      value: "{{ emailMessage }}"
    - name: sendNotificationEmails
      value: {{ sendNotificationEmails }}
    - name: enforceSingleParent
      value: {{ enforceSingleParent }}
    - name: supportsAllDrives
      value: {{ supportsAllDrives }}
    - name: useDomainAdminAccess
      value: {{ useDomainAdminAccess }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' }
    ]}
>
<TabItem value="patch">

Updates a permission using patch semantics. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.

```sql
UPDATE googleworkspace.drivev2.permissions
SET 
data__selfLink = '{{ selfLink }}',
data__etag = '{{ etag }}',
data__deleted = {{ deleted }},
data__additionalRoles = '{{ additionalRoles }}',
data__photoLink = '{{ photoLink }}',
data__inheritedPermissionsDisabled = {{ inheritedPermissionsDisabled }},
data__id = '{{ id }}',
data__kind = '{{ kind }}',
data__expirationDate = '{{ expirationDate }}',
data__withLink = {{ withLink }},
data__emailAddress = '{{ emailAddress }}',
data__type = '{{ type }}',
data__value = '{{ value }}',
data__domain = '{{ domain }}',
data__pendingOwner = {{ pendingOwner }},
data__view = '{{ view }}',
data__name = '{{ name }}',
data__authKey = '{{ authKey }}',
data__role = '{{ role }}'
WHERE 
fileId = '{{ fileId }}' --required
AND permissionId = '{{ permissionId }}' --required
AND supportsTeamDrives = {{ supportsTeamDrives}}
AND supportsAllDrives = {{ supportsAllDrives}}
AND transferOwnership = {{ transferOwnership}}
AND enforceExpansiveAccess = {{ enforceExpansiveAccess}}
AND removeExpiration = {{ removeExpiration}}
AND useDomainAdminAccess = {{ useDomainAdminAccess}}
RETURNING
id,
name,
additionalRoles,
authKey,
deleted,
domain,
emailAddress,
etag,
expirationDate,
inheritedPermissionsDisabled,
kind,
pendingOwner,
permissionDetails,
photoLink,
role,
selfLink,
teamDrivePermissionDetails,
type,
value,
view,
withLink;
```
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

Updates a permission. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.

```sql
REPLACE googleworkspace.drivev2.permissions
SET 
data__selfLink = '{{ selfLink }}',
data__etag = '{{ etag }}',
data__deleted = {{ deleted }},
data__additionalRoles = '{{ additionalRoles }}',
data__photoLink = '{{ photoLink }}',
data__inheritedPermissionsDisabled = {{ inheritedPermissionsDisabled }},
data__id = '{{ id }}',
data__kind = '{{ kind }}',
data__expirationDate = '{{ expirationDate }}',
data__withLink = {{ withLink }},
data__emailAddress = '{{ emailAddress }}',
data__type = '{{ type }}',
data__value = '{{ value }}',
data__domain = '{{ domain }}',
data__pendingOwner = {{ pendingOwner }},
data__view = '{{ view }}',
data__name = '{{ name }}',
data__authKey = '{{ authKey }}',
data__role = '{{ role }}'
WHERE 
fileId = '{{ fileId }}' --required
AND permissionId = '{{ permissionId }}' --required
AND supportsAllDrives = {{ supportsAllDrives}}
AND transferOwnership = {{ transferOwnership}}
AND enforceExpansiveAccess = {{ enforceExpansiveAccess}}
AND removeExpiration = {{ removeExpiration}}
AND useDomainAdminAccess = {{ useDomainAdminAccess}}
AND supportsTeamDrives = {{ supportsTeamDrives}}
RETURNING
id,
name,
additionalRoles,
authKey,
deleted,
domain,
emailAddress,
etag,
expirationDate,
inheritedPermissionsDisabled,
kind,
pendingOwner,
permissionDetails,
photoLink,
role,
selfLink,
teamDrivePermissionDetails,
type,
value,
view,
withLink;
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

Deletes a permission from a file or shared drive. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.

```sql
DELETE FROM googleworkspace.drivev2.permissions
WHERE fileId = '{{ fileId }}' --required
AND permissionId = '{{ permissionId }}' --required
AND supportsAllDrives = '{{ supportsAllDrives }}'
AND enforceExpansiveAccess = '{{ enforceExpansiveAccess }}'
AND useDomainAdminAccess = '{{ useDomainAdminAccess }}'
AND supportsTeamDrives = '{{ supportsTeamDrives }}'
;
```
</TabItem>
</Tabs>
