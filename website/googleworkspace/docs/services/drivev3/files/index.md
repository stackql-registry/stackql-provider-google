--- 
title: files
hide_title: false
hide_table_of_contents: false
keywords:
  - files
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

Creates, updates, deletes, gets or lists a <code>files</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="files" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivev3.files" /></td></tr>
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
    <td>The ID of the file.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the file. This isn't necessarily unique within a folder. Note that for immutable items such as the top-level folders of shared drives, the My Drive root folder, and the Application Data folder, the name is constant.</td>
</tr>
<tr>
    <td><CopyableCode code="appProperties" /></td>
    <td><code>object</code></td>
    <td>A collection of arbitrary key-value pairs which are private to the requesting app. Entries with null values are cleared in update and copy requests. These properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with a OAuth 2 client ID. You cannot use an API key to retrieve private properties.</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td>Output only. Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take. For more information, see [Understand file capabilities](https://developers.google.com/workspace/drive/api/guides/manage-sharing#capabilities).</td>
</tr>
<tr>
    <td><CopyableCode code="clientEncryptionDetails" /></td>
    <td><code>object</code></td>
    <td>Client Side Encryption related details. Contains details about the encryption state of the file and details regarding the encryption mechanism that clients need to use when decrypting the contents of this item. This will only be present on files and not on folders or shortcuts. (id: ClientEncryptionDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="contentHints" /></td>
    <td><code>object</code></td>
    <td>Additional information about the content of the file. These fields are never populated in responses.</td>
</tr>
<tr>
    <td><CopyableCode code="contentRestrictions" /></td>
    <td><code>array</code></td>
    <td>Restrictions for accessing the content of the file. Only populated if such a restriction exists.</td>
</tr>
<tr>
    <td><CopyableCode code="copyRequiresWriterPermission" /></td>
    <td><code>boolean</code></td>
    <td>Whether the options to copy, print, or download this file should be disabled for readers and commenters.</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the file was created (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A short description of the file.</td>
</tr>
<tr>
    <td><CopyableCode code="downloadRestrictions" /></td>
    <td><code>object</code></td>
    <td>Download restrictions applied on the file. (id: DownloadRestrictionsMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="driveId" /></td>
    <td><code>string</code></td>
    <td>Output only. ID of the shared drive the file resides in. Only populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="explicitlyTrashed" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.</td>
</tr>
<tr>
    <td><CopyableCode code="exportLinks" /></td>
    <td><code>object</code></td>
    <td>Output only. Links for exporting Docs Editors files to specific formats.</td>
</tr>
<tr>
    <td><CopyableCode code="fileExtension" /></td>
    <td><code>string</code></td>
    <td>Output only. The final component of `fullFileExtension`. This is only available for files with binary content in Google Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="folderColorRgb" /></td>
    <td><code>string</code></td>
    <td>The color for a folder or a shortcut to a folder as an RGB hex string. The supported colors are published in the `folderColorPalette` field of the [`about`](/workspace/drive/api/reference/rest/v3/about) resource. If an unsupported color is specified, the closest color in the palette is used instead.</td>
</tr>
<tr>
    <td><CopyableCode code="fullFileExtension" /></td>
    <td><code>string</code></td>
    <td>Output only. The full file extension extracted from the `name` field. May contain multiple concatenated extensions, such as "tar.gz". This is only available for files with binary content in Google Drive. This is automatically updated when the `name` field changes, however it's not cleared if the new name doesn't contain a valid extension.</td>
</tr>
<tr>
    <td><CopyableCode code="hasAugmentedPermissions" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether there are permissions directly on this file. This field is only populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="hasThumbnail" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether this file has a thumbnail. This doesn't indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field.</td>
</tr>
<tr>
    <td><CopyableCode code="headRevisionId" /></td>
    <td><code>string</code></td>
    <td>Output only. The ID of the file's head revision. This is currently only available for files with binary content in Google Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="iconLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A static, unauthenticated link to the file's icon.</td>
</tr>
<tr>
    <td><CopyableCode code="imageMediaMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Additional metadata about image media, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="inheritedPermissionsDisabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether this file has inherited permissions disabled. Inherited permissions are enabled by default.</td>
</tr>
<tr>
    <td><CopyableCode code="isAppAuthorized" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the file was created or opened by the requesting app.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#file"`. (default: drive#file)</td>
</tr>
<tr>
    <td><CopyableCode code="labelInfo" /></td>
    <td><code>object</code></td>
    <td>Label information on the file.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifyingUser" /></td>
    <td><code>object</code></td>
    <td>Information about a Drive user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="linkShareMetadata" /></td>
    <td><code>object</code></td>
    <td>Contains details about the link URLs that clients are using to refer to this item.</td>
</tr>
<tr>
    <td><CopyableCode code="md5Checksum" /></td>
    <td><code>string</code></td>
    <td>Output only. The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="mimeType" /></td>
    <td><code>string</code></td>
    <td>The MIME type of the file. Google Drive attempts to automatically detect an appropriate value from uploaded content, if no value is provided. The value cannot be changed unless a new revision is uploaded. If a file is created with a Google Doc MIME type, the uploaded content is imported, if possible. The supported import formats are published in the [`about`](/workspace/drive/api/reference/rest/v3/about) resource.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedByMe" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the file has been modified by this user.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedByMeTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the file was modified by the user (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>he last time the file was modified by anyone (RFC 3339 date-time). Note that setting modifiedTime will also update modifiedByMeTime for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="originalFilename" /></td>
    <td><code>string</code></td>
    <td>The original filename of the uploaded content if available, or else the original value of the `name` field. This is only available for files with binary content in Google Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="ownedByMe" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the user owns the file. Not populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="owners" /></td>
    <td><code>array</code></td>
    <td>Output only. The owner of this file. Only certain legacy files may have more than one owner. This field isn't populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="parents" /></td>
    <td><code>array</code></td>
    <td>The ID of the parent folder containing the file. A file can only have one parent folder; specifying multiple parents isn't supported. If not specified as part of a create request, the file is placed directly in the user's My Drive folder. If not specified as part of a copy request, the file inherits any discoverable parent of the source file. Update requests must use the `addParents` and `removeParents` parameters to modify the parents list.</td>
</tr>
<tr>
    <td><CopyableCode code="permissionIds" /></td>
    <td><code>array</code></td>
    <td>Output only. List of permission IDs for users with access to this file.</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>array</code></td>
    <td>Output only. The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>A collection of arbitrary key-value pairs which are visible to all apps. Entries with null values are cleared in update and copy requests.</td>
</tr>
<tr>
    <td><CopyableCode code="quotaBytesUsed" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with `keepForever` enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceKey" /></td>
    <td><code>string</code></td>
    <td>Output only. A key needed to access the item via a shared link.</td>
</tr>
<tr>
    <td><CopyableCode code="sha1Checksum" /></td>
    <td><code>string</code></td>
    <td>Output only. The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it's not populated for Docs Editors or shortcut files.</td>
</tr>
<tr>
    <td><CopyableCode code="sha256Checksum" /></td>
    <td><code>string</code></td>
    <td>Output only. The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it's not populated for Docs Editors or shortcut files.</td>
</tr>
<tr>
    <td><CopyableCode code="shared" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the file has been shared. Not populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="sharedWithMeTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the file was shared with the user, if applicable (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="sharingUser" /></td>
    <td><code>object</code></td>
    <td>Information about a Drive user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="shortcutDetails" /></td>
    <td><code>object</code></td>
    <td>Information about a shortcut file.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Size in bytes of blobs and Google Workspace editor files. Won't be populated for files that have no size, like shortcuts and folders.</td>
</tr>
<tr>
    <td><CopyableCode code="spaces" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of spaces which contain the file. The currently supported values are `drive`, `appDataFolder`, and `photos`.</td>
</tr>
<tr>
    <td><CopyableCode code="starred" /></td>
    <td><code>boolean</code></td>
    <td>Whether the user has starred the file.</td>
</tr>
<tr>
    <td><CopyableCode code="teamDriveId" /></td>
    <td><code>string</code></td>
    <td>Deprecated: Output only. Use `driveId` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="thumbnailLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Not intended for direct usage on web applications due to [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) policies. Consider using a proxy server. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in `files.thumbnailLink` must be fetched using a credentialed request.</td>
</tr>
<tr>
    <td><CopyableCode code="thumbnailVersion" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The thumbnail version for use in thumbnail cache invalidation.</td>
</tr>
<tr>
    <td><CopyableCode code="trashed" /></td>
    <td><code>boolean</code></td>
    <td>Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file, but other users can still access the file in the owner's trash until it's permanently deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="trashedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="trashingUser" /></td>
    <td><code>object</code></td>
    <td>Information about a Drive user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.</td>
</tr>
<tr>
    <td><CopyableCode code="videoMediaMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Additional metadata about video media. This may not be available immediately upon upload.</td>
</tr>
<tr>
    <td><CopyableCode code="viewedByMe" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the file has been viewed by this user.</td>
</tr>
<tr>
    <td><CopyableCode code="viewedByMeTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the file was viewed by the user (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="viewersCanCopyContent" /></td>
    <td><code>boolean</code></td>
    <td>Deprecated: Use `copyRequiresWriterPermission` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="webContentLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="webViewLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link for opening the file in a relevant Google editor or viewer in a browser.</td>
</tr>
<tr>
    <td><CopyableCode code="writersCanShare" /></td>
    <td><code>boolean</code></td>
    <td>Whether users with only `writer` permission can modify the file's permissions. Not populated for items in shared drives.</td>
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
    <td>The ID of the file.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the file. This isn't necessarily unique within a folder. Note that for immutable items such as the top-level folders of shared drives, the My Drive root folder, and the Application Data folder, the name is constant.</td>
</tr>
<tr>
    <td><CopyableCode code="appProperties" /></td>
    <td><code>object</code></td>
    <td>A collection of arbitrary key-value pairs which are private to the requesting app. Entries with null values are cleared in update and copy requests. These properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with a OAuth 2 client ID. You cannot use an API key to retrieve private properties.</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td>Output only. Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take. For more information, see [Understand file capabilities](https://developers.google.com/workspace/drive/api/guides/manage-sharing#capabilities).</td>
</tr>
<tr>
    <td><CopyableCode code="clientEncryptionDetails" /></td>
    <td><code>object</code></td>
    <td>Client Side Encryption related details. Contains details about the encryption state of the file and details regarding the encryption mechanism that clients need to use when decrypting the contents of this item. This will only be present on files and not on folders or shortcuts. (id: ClientEncryptionDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="contentHints" /></td>
    <td><code>object</code></td>
    <td>Additional information about the content of the file. These fields are never populated in responses.</td>
</tr>
<tr>
    <td><CopyableCode code="contentRestrictions" /></td>
    <td><code>array</code></td>
    <td>Restrictions for accessing the content of the file. Only populated if such a restriction exists.</td>
</tr>
<tr>
    <td><CopyableCode code="copyRequiresWriterPermission" /></td>
    <td><code>boolean</code></td>
    <td>Whether the options to copy, print, or download this file should be disabled for readers and commenters.</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the file was created (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A short description of the file.</td>
</tr>
<tr>
    <td><CopyableCode code="downloadRestrictions" /></td>
    <td><code>object</code></td>
    <td>Download restrictions applied on the file. (id: DownloadRestrictionsMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="driveId" /></td>
    <td><code>string</code></td>
    <td>Output only. ID of the shared drive the file resides in. Only populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="explicitlyTrashed" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.</td>
</tr>
<tr>
    <td><CopyableCode code="exportLinks" /></td>
    <td><code>object</code></td>
    <td>Output only. Links for exporting Docs Editors files to specific formats.</td>
</tr>
<tr>
    <td><CopyableCode code="fileExtension" /></td>
    <td><code>string</code></td>
    <td>Output only. The final component of `fullFileExtension`. This is only available for files with binary content in Google Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="folderColorRgb" /></td>
    <td><code>string</code></td>
    <td>The color for a folder or a shortcut to a folder as an RGB hex string. The supported colors are published in the `folderColorPalette` field of the [`about`](/workspace/drive/api/reference/rest/v3/about) resource. If an unsupported color is specified, the closest color in the palette is used instead.</td>
</tr>
<tr>
    <td><CopyableCode code="fullFileExtension" /></td>
    <td><code>string</code></td>
    <td>Output only. The full file extension extracted from the `name` field. May contain multiple concatenated extensions, such as "tar.gz". This is only available for files with binary content in Google Drive. This is automatically updated when the `name` field changes, however it's not cleared if the new name doesn't contain a valid extension.</td>
</tr>
<tr>
    <td><CopyableCode code="hasAugmentedPermissions" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether there are permissions directly on this file. This field is only populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="hasThumbnail" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether this file has a thumbnail. This doesn't indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field.</td>
</tr>
<tr>
    <td><CopyableCode code="headRevisionId" /></td>
    <td><code>string</code></td>
    <td>Output only. The ID of the file's head revision. This is currently only available for files with binary content in Google Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="iconLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A static, unauthenticated link to the file's icon.</td>
</tr>
<tr>
    <td><CopyableCode code="imageMediaMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Additional metadata about image media, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="inheritedPermissionsDisabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether this file has inherited permissions disabled. Inherited permissions are enabled by default.</td>
</tr>
<tr>
    <td><CopyableCode code="isAppAuthorized" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the file was created or opened by the requesting app.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#file"`. (default: drive#file)</td>
</tr>
<tr>
    <td><CopyableCode code="labelInfo" /></td>
    <td><code>object</code></td>
    <td>Label information on the file.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifyingUser" /></td>
    <td><code>object</code></td>
    <td>Information about a Drive user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="linkShareMetadata" /></td>
    <td><code>object</code></td>
    <td>Contains details about the link URLs that clients are using to refer to this item.</td>
</tr>
<tr>
    <td><CopyableCode code="md5Checksum" /></td>
    <td><code>string</code></td>
    <td>Output only. The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="mimeType" /></td>
    <td><code>string</code></td>
    <td>The MIME type of the file. Google Drive attempts to automatically detect an appropriate value from uploaded content, if no value is provided. The value cannot be changed unless a new revision is uploaded. If a file is created with a Google Doc MIME type, the uploaded content is imported, if possible. The supported import formats are published in the [`about`](/workspace/drive/api/reference/rest/v3/about) resource.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedByMe" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the file has been modified by this user.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedByMeTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the file was modified by the user (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>he last time the file was modified by anyone (RFC 3339 date-time). Note that setting modifiedTime will also update modifiedByMeTime for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="originalFilename" /></td>
    <td><code>string</code></td>
    <td>The original filename of the uploaded content if available, or else the original value of the `name` field. This is only available for files with binary content in Google Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="ownedByMe" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the user owns the file. Not populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="owners" /></td>
    <td><code>array</code></td>
    <td>Output only. The owner of this file. Only certain legacy files may have more than one owner. This field isn't populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="parents" /></td>
    <td><code>array</code></td>
    <td>The ID of the parent folder containing the file. A file can only have one parent folder; specifying multiple parents isn't supported. If not specified as part of a create request, the file is placed directly in the user's My Drive folder. If not specified as part of a copy request, the file inherits any discoverable parent of the source file. Update requests must use the `addParents` and `removeParents` parameters to modify the parents list.</td>
</tr>
<tr>
    <td><CopyableCode code="permissionIds" /></td>
    <td><code>array</code></td>
    <td>Output only. List of permission IDs for users with access to this file.</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>array</code></td>
    <td>Output only. The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>A collection of arbitrary key-value pairs which are visible to all apps. Entries with null values are cleared in update and copy requests.</td>
</tr>
<tr>
    <td><CopyableCode code="quotaBytesUsed" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with `keepForever` enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceKey" /></td>
    <td><code>string</code></td>
    <td>Output only. A key needed to access the item via a shared link.</td>
</tr>
<tr>
    <td><CopyableCode code="sha1Checksum" /></td>
    <td><code>string</code></td>
    <td>Output only. The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it's not populated for Docs Editors or shortcut files.</td>
</tr>
<tr>
    <td><CopyableCode code="sha256Checksum" /></td>
    <td><code>string</code></td>
    <td>Output only. The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it's not populated for Docs Editors or shortcut files.</td>
</tr>
<tr>
    <td><CopyableCode code="shared" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the file has been shared. Not populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="sharedWithMeTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the file was shared with the user, if applicable (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="sharingUser" /></td>
    <td><code>object</code></td>
    <td>Information about a Drive user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="shortcutDetails" /></td>
    <td><code>object</code></td>
    <td>Information about a shortcut file.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Size in bytes of blobs and Google Workspace editor files. Won't be populated for files that have no size, like shortcuts and folders.</td>
</tr>
<tr>
    <td><CopyableCode code="spaces" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of spaces which contain the file. The currently supported values are `drive`, `appDataFolder`, and `photos`.</td>
</tr>
<tr>
    <td><CopyableCode code="starred" /></td>
    <td><code>boolean</code></td>
    <td>Whether the user has starred the file.</td>
</tr>
<tr>
    <td><CopyableCode code="teamDriveId" /></td>
    <td><code>string</code></td>
    <td>Deprecated: Output only. Use `driveId` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="thumbnailLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Not intended for direct usage on web applications due to [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) policies. Consider using a proxy server. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in `files.thumbnailLink` must be fetched using a credentialed request.</td>
</tr>
<tr>
    <td><CopyableCode code="thumbnailVersion" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The thumbnail version for use in thumbnail cache invalidation.</td>
</tr>
<tr>
    <td><CopyableCode code="trashed" /></td>
    <td><code>boolean</code></td>
    <td>Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file, but other users can still access the file in the owner's trash until it's permanently deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="trashedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives.</td>
</tr>
<tr>
    <td><CopyableCode code="trashingUser" /></td>
    <td><code>object</code></td>
    <td>Information about a Drive user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.</td>
</tr>
<tr>
    <td><CopyableCode code="videoMediaMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Additional metadata about video media. This may not be available immediately upon upload.</td>
</tr>
<tr>
    <td><CopyableCode code="viewedByMe" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the file has been viewed by this user.</td>
</tr>
<tr>
    <td><CopyableCode code="viewedByMeTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the file was viewed by the user (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="viewersCanCopyContent" /></td>
    <td><code>boolean</code></td>
    <td>Deprecated: Use `copyRequiresWriterPermission` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="webContentLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.</td>
</tr>
<tr>
    <td><CopyableCode code="webViewLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A link for opening the file in a relevant Google editor or viewer in a browser.</td>
</tr>
<tr>
    <td><CopyableCode code="writersCanShare" /></td>
    <td><code>boolean</code></td>
    <td>Whether users with only `writer` permission can modify the file's permissions. Not populated for items in shared drives.</td>
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
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td><a href="#parameter-acknowledgeAbuse"><code>acknowledgeAbuse</code></a>, <a href="#parameter-includeLabels"><code>includeLabels</code></a>, <a href="#parameter-includePermissionsForView"><code>includePermissionsForView</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a></td>
    <td> Gets a file's metadata or content by ID. For more information, see [Search for files and folders](https://developers.google.com/workspace/drive/api/guides/search-files). If you provide the URL parameter `alt=media`, then the response includes the file contents in the response body. Downloading content with `alt=media` only works if the file is stored in Drive. To download Google Docs, Sheets, and Slides use [`files.export`](https://developers.google.com/workspace/drive/api/reference/rest/v3/files/export) instead. For more information, see [Download and export files](https://developers.google.com/workspace/drive/api/guides/manage-downloads).</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-q"><code>q</code></a>, <a href="#parameter-includePermissionsForView"><code>includePermissionsForView</code></a>, <a href="#parameter-driveId"><code>driveId</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-includeTeamDriveItems"><code>includeTeamDriveItems</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-corpora"><code>corpora</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-includeItemsFromAllDrives"><code>includeItemsFromAllDrives</code></a>, <a href="#parameter-spaces"><code>spaces</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-corpus"><code>corpus</code></a>, <a href="#parameter-includeLabels"><code>includeLabels</code></a>, <a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-teamDriveId"><code>teamDriveId</code></a></td>
    <td> Lists the user's files. For more information, see [Search for files and folders](https://developers.google.com/workspace/drive/api/guides/search-files). This method accepts the `q` parameter, which is a search query combining one or more search terms. This method returns *all* files by default, including trashed files. If you don't want trashed files to appear in the list, use the `trashed=false` query parameter to remove trashed files from the results.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td><a href="#parameter-ocrLanguage"><code>ocrLanguage</code></a>, <a href="#parameter-includePermissionsForView"><code>includePermissionsForView</code></a>, <a href="#parameter-ignoreDefaultVisibility"><code>ignoreDefaultVisibility</code></a>, <a href="#parameter-keepRevisionForever"><code>keepRevisionForever</code></a>, <a href="#parameter-enforceSingleParent"><code>enforceSingleParent</code></a>, <a href="#parameter-includeLabels"><code>includeLabels</code></a>, <a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-useContentAsIndexableText"><code>useContentAsIndexableText</code></a></td>
    <td> Creates a file. For more information, see [Create and manage files](https://developers.google.com/workspace/drive/api/guides/create-file). This method supports an */upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:* `*/*` (Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information, see [Google Workspace and Google Drive supported MIME types](https://developers.google.com/workspace/drive/api/guides/mime-types).) For more information on uploading files, see [Upload file data](https://developers.google.com/workspace/drive/api/guides/manage-uploads). Apps creating shortcuts with the `create` method must specify the MIME type `application/vnd.google-apps.shortcut`. Apps should specify a file extension in the `name` property when inserting files with the API. For example, an operation to insert a JPEG file should specify something like `"name": "cat.jpg"` in the metadata. Subsequent `GET` requests include the read-only `fileExtension` property populated with the extension originally specified in the `name` property. When a Google Drive user requests to download a file, or when the file is downloaded through the sync client, Drive builds a full filename (with extension) based on the name. In cases where the extension is missing, Drive attempts to determine the extension based on the file's MIME type.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td><a href="#parameter-removeParents"><code>removeParents</code></a>, <a href="#parameter-includePermissionsForView"><code>includePermissionsForView</code></a>, <a href="#parameter-ocrLanguage"><code>ocrLanguage</code></a>, <a href="#parameter-keepRevisionForever"><code>keepRevisionForever</code></a>, <a href="#parameter-includeLabels"><code>includeLabels</code></a>, <a href="#parameter-enforceSingleParent"><code>enforceSingleParent</code></a>, <a href="#parameter-addParents"><code>addParents</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-useContentAsIndexableText"><code>useContentAsIndexableText</code></a>, <a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a></td>
    <td> Updates a file's metadata, content, or both. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as `modifiedDate`. This method supports patch semantics. This method supports an */upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:* `*/*` (Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information, see [Google Workspace and Google Drive supported MIME types](https://developers.google.com/workspace/drive/api/guides/mime-types).) For more information on uploading files, see [Upload file data](https://developers.google.com/workspace/drive/api/guides/manage-uploads).</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td><a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-enforceSingleParent"><code>enforceSingleParent</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a></td>
    <td>Permanently deletes a file owned by the user without moving it to the trash. For more information, see [Trash or delete files and folders](https://developers.google.com/workspace/drive/api/guides/delete). If the file belongs to a shared drive, the user must be an `organizer` on the parent folder. If the target is a folder, all descendants owned by the user are also deleted.</td>
</tr>
<tr>
    <td><a href="#watch"><CopyableCode code="watch" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td><a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-includePermissionsForView"><code>includePermissionsForView</code></a>, <a href="#parameter-acknowledgeAbuse"><code>acknowledgeAbuse</code></a>, <a href="#parameter-includeLabels"><code>includeLabels</code></a></td>
    <td>Subscribes to changes to a file. For more information, see [Notifications for resource changes](https://developers.google.com/workspace/drive/api/guides/push).</td>
</tr>
<tr>
    <td><a href="#empty_trash"><CopyableCode code="empty_trash" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-enforceSingleParent"><code>enforceSingleParent</code></a>, <a href="#parameter-driveId"><code>driveId</code></a></td>
    <td>Permanently deletes all of the user's trashed files. For more information, see [Trash or delete files and folders](https://developers.google.com/workspace/drive/api/guides/delete).</td>
</tr>
<tr>
    <td><a href="#download"><CopyableCode code="download" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td><a href="#parameter-mimeType"><code>mimeType</code></a>, <a href="#parameter-revisionId"><code>revisionId</code></a></td>
    <td>Downloads the content of a file. For more information, see [Download and export files](https://developers.google.com/workspace/drive/api/guides/manage-downloads). Operations are valid for 24 hours from the time of creation.</td>
</tr>
<tr>
    <td><a href="#export"><CopyableCode code="export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-mimeType"><code>mimeType</code></a></td>
    <td></td>
    <td>Exports a Google Workspace document to the requested MIME type and returns exported byte content. For more information, see [Download and export files](https://developers.google.com/workspace/drive/api/guides/manage-downloads). Note that the exported content is limited to 10 MB.</td>
</tr>
<tr>
    <td><a href="#generate_ids"><CopyableCode code="generate_ids" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-count"><code>count</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-space"><code>space</code></a></td>
    <td>Generates a set of file IDs which can be provided in create or copy requests. For more information, see [Create and manage files](https://developers.google.com/workspace/drive/api/guides/create-file).</td>
</tr>
<tr>
    <td><a href="#copy"><CopyableCode code="copy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td><a href="#parameter-supportsAllDrives"><code>supportsAllDrives</code></a>, <a href="#parameter-supportsTeamDrives"><code>supportsTeamDrives</code></a>, <a href="#parameter-enforceSingleParent"><code>enforceSingleParent</code></a>, <a href="#parameter-includeLabels"><code>includeLabels</code></a>, <a href="#parameter-ignoreDefaultVisibility"><code>ignoreDefaultVisibility</code></a>, <a href="#parameter-keepRevisionForever"><code>keepRevisionForever</code></a>, <a href="#parameter-ocrLanguage"><code>ocrLanguage</code></a>, <a href="#parameter-includePermissionsForView"><code>includePermissionsForView</code></a></td>
    <td>Creates a copy of a file and applies any requested updates with patch semantics. For more information, see [Create and manage files](https://developers.google.com/workspace/drive/api/guides/create-file).</td>
</tr>
<tr>
    <td><a href="#modify_labels"><CopyableCode code="modify_labels" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td></td>
    <td>Modifies the set of labels applied to a file. For more information, see [Set a label field on a file](https://developers.google.com/workspace/drive/api/guides/set-label). Returns a list of the labels that were added or modified.</td>
</tr>
<tr>
    <td><a href="#generate_cse_token"><CopyableCode code="generate_cse_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-parent"><code>parent</code></a></td>
    <td>Generates a CSE token which can be used to create or update CSE files.</td>
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
<tr id="parameter-mimeType">
    <td><CopyableCode code="mimeType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-acknowledgeAbuse">
    <td><CopyableCode code="acknowledgeAbuse" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-addParents">
    <td><CopyableCode code="addParents" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-corpora">
    <td><CopyableCode code="corpora" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-corpus">
    <td><CopyableCode code="corpus" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-count">
    <td><CopyableCode code="count" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-driveId">
    <td><CopyableCode code="driveId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-enforceSingleParent">
    <td><CopyableCode code="enforceSingleParent" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-fileId">
    <td><CopyableCode code="fileId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ignoreDefaultVisibility">
    <td><CopyableCode code="ignoreDefaultVisibility" /></td>
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
<tr id="parameter-includeTeamDriveItems">
    <td><CopyableCode code="includeTeamDriveItems" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-keepRevisionForever">
    <td><CopyableCode code="keepRevisionForever" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-mimeType">
    <td><CopyableCode code="mimeType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ocrLanguage">
    <td><CopyableCode code="ocrLanguage" /></td>
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
<tr id="parameter-parent">
    <td><CopyableCode code="parent" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-q">
    <td><CopyableCode code="q" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-removeParents">
    <td><CopyableCode code="removeParents" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-revisionId">
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-space">
    <td><CopyableCode code="space" /></td>
    <td><code>string</code></td>
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
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-useContentAsIndexableText">
    <td><CopyableCode code="useContentAsIndexableText" /></td>
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

 Gets a file's metadata or content by ID. For more information, see [Search for files and folders](https://developers.google.com/workspace/drive/api/guides/search-files). If you provide the URL parameter `alt=media`, then the response includes the file contents in the response body. Downloading content with `alt=media` only works if the file is stored in Drive. To download Google Docs, Sheets, and Slides use [`files.export`](https://developers.google.com/workspace/drive/api/reference/rest/v3/files/export) instead. For more information, see [Download and export files](https://developers.google.com/workspace/drive/api/guides/manage-downloads).

```sql
SELECT
id,
name,
appProperties,
capabilities,
clientEncryptionDetails,
contentHints,
contentRestrictions,
copyRequiresWriterPermission,
createdTime,
description,
downloadRestrictions,
driveId,
explicitlyTrashed,
exportLinks,
fileExtension,
folderColorRgb,
fullFileExtension,
hasAugmentedPermissions,
hasThumbnail,
headRevisionId,
iconLink,
imageMediaMetadata,
inheritedPermissionsDisabled,
isAppAuthorized,
kind,
labelInfo,
lastModifyingUser,
linkShareMetadata,
md5Checksum,
mimeType,
modifiedByMe,
modifiedByMeTime,
modifiedTime,
originalFilename,
ownedByMe,
owners,
parents,
permissionIds,
permissions,
properties,
quotaBytesUsed,
resourceKey,
sha1Checksum,
sha256Checksum,
shared,
sharedWithMeTime,
sharingUser,
shortcutDetails,
size,
spaces,
starred,
teamDriveId,
thumbnailLink,
thumbnailVersion,
trashed,
trashedTime,
trashingUser,
version,
videoMediaMetadata,
viewedByMe,
viewedByMeTime,
viewersCanCopyContent,
webContentLink,
webViewLink,
writersCanShare
FROM googleworkspace.drivev3.files
WHERE fileId = '{{ fileId }}' -- required
AND acknowledgeAbuse = '{{ acknowledgeAbuse }}'
AND includeLabels = '{{ includeLabels }}'
AND includePermissionsForView = '{{ includePermissionsForView }}'
AND supportsTeamDrives = '{{ supportsTeamDrives }}'
AND supportsAllDrives = '{{ supportsAllDrives }}'
;
```
</TabItem>
<TabItem value="list">

 Lists the user's files. For more information, see [Search for files and folders](https://developers.google.com/workspace/drive/api/guides/search-files). This method accepts the `q` parameter, which is a search query combining one or more search terms. This method returns *all* files by default, including trashed files. If you don't want trashed files to appear in the list, use the `trashed=false` query parameter to remove trashed files from the results.

```sql
SELECT
id,
name,
appProperties,
capabilities,
clientEncryptionDetails,
contentHints,
contentRestrictions,
copyRequiresWriterPermission,
createdTime,
description,
downloadRestrictions,
driveId,
explicitlyTrashed,
exportLinks,
fileExtension,
folderColorRgb,
fullFileExtension,
hasAugmentedPermissions,
hasThumbnail,
headRevisionId,
iconLink,
imageMediaMetadata,
inheritedPermissionsDisabled,
isAppAuthorized,
kind,
labelInfo,
lastModifyingUser,
linkShareMetadata,
md5Checksum,
mimeType,
modifiedByMe,
modifiedByMeTime,
modifiedTime,
originalFilename,
ownedByMe,
owners,
parents,
permissionIds,
permissions,
properties,
quotaBytesUsed,
resourceKey,
sha1Checksum,
sha256Checksum,
shared,
sharedWithMeTime,
sharingUser,
shortcutDetails,
size,
spaces,
starred,
teamDriveId,
thumbnailLink,
thumbnailVersion,
trashed,
trashedTime,
trashingUser,
version,
videoMediaMetadata,
viewedByMe,
viewedByMeTime,
viewersCanCopyContent,
webContentLink,
webViewLink,
writersCanShare
FROM googleworkspace.drivev3.files
WHERE q = '{{ q }}'
AND includePermissionsForView = '{{ includePermissionsForView }}'
AND driveId = '{{ driveId }}'
AND pageSize = '{{ pageSize }}'
AND includeTeamDriveItems = '{{ includeTeamDriveItems }}'
AND orderBy = '{{ orderBy }}'
AND corpora = '{{ corpora }}'
AND supportsTeamDrives = '{{ supportsTeamDrives }}'
AND includeItemsFromAllDrives = '{{ includeItemsFromAllDrives }}'
AND spaces = '{{ spaces }}'
AND pageToken = '{{ pageToken }}'
AND corpus = '{{ corpus }}'
AND includeLabels = '{{ includeLabels }}'
AND supportsAllDrives = '{{ supportsAllDrives }}'
AND teamDriveId = '{{ teamDriveId }}'
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

 Creates a file. For more information, see [Create and manage files](https://developers.google.com/workspace/drive/api/guides/create-file). This method supports an */upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:* `*/*` (Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information, see [Google Workspace and Google Drive supported MIME types](https://developers.google.com/workspace/drive/api/guides/mime-types).) For more information on uploading files, see [Upload file data](https://developers.google.com/workspace/drive/api/guides/manage-uploads). Apps creating shortcuts with the `create` method must specify the MIME type `application/vnd.google-apps.shortcut`. Apps should specify a file extension in the `name` property when inserting files with the API. For example, an operation to insert a JPEG file should specify something like `"name": "cat.jpg"` in the metadata. Subsequent `GET` requests include the read-only `fileExtension` property populated with the extension originally specified in the `name` property. When a Google Drive user requests to download a file, or when the file is downloaded through the sync client, Drive builds a full filename (with extension) based on the name. In cases where the extension is missing, Drive attempts to determine the extension based on the file's MIME type.

```sql
INSERT INTO googleworkspace.drivev3.files (
data__kind,
data__sharingUser,
data__thumbnailLink,
data__viewedByMeTime,
data__webViewLink,
data__modifiedByMeTime,
data__fullFileExtension,
data__trashingUser,
data__size,
data__trashed,
data__permissions,
data__videoMediaMetadata,
data__id,
data__isAppAuthorized,
data__contentRestrictions,
data__shared,
data__lastModifyingUser,
data__sha256Checksum,
data__iconLink,
data__properties,
data__driveId,
data__parents,
data__inheritedPermissionsDisabled,
data__starred,
data__version,
data__trashedTime,
data__contentHints,
data__quotaBytesUsed,
data__clientEncryptionDetails,
data__hasThumbnail,
data__copyRequiresWriterPermission,
data__headRevisionId,
data__sha1Checksum,
data__explicitlyTrashed,
data__createdTime,
data__permissionIds,
data__md5Checksum,
data__ownedByMe,
data__imageMediaMetadata,
data__hasAugmentedPermissions,
data__modifiedByMe,
data__labelInfo,
data__linkShareMetadata,
data__downloadRestrictions,
data__originalFilename,
data__teamDriveId,
data__sharedWithMeTime,
data__owners,
data__writersCanShare,
data__shortcutDetails,
data__description,
data__mimeType,
data__webContentLink,
data__capabilities,
data__viewedByMe,
data__spaces,
data__appProperties,
data__folderColorRgb,
data__thumbnailVersion,
data__resourceKey,
data__fileExtension,
data__viewersCanCopyContent,
data__modifiedTime,
data__name,
ocrLanguage,
includePermissionsForView,
ignoreDefaultVisibility,
keepRevisionForever,
enforceSingleParent,
includeLabels,
supportsAllDrives,
supportsTeamDrives,
useContentAsIndexableText
)
SELECT 
'{{ kind }}',
'{{ sharingUser }}',
'{{ thumbnailLink }}',
'{{ viewedByMeTime }}',
'{{ webViewLink }}',
'{{ modifiedByMeTime }}',
'{{ fullFileExtension }}',
'{{ trashingUser }}',
'{{ size }}',
{{ trashed }},
'{{ permissions }}',
'{{ videoMediaMetadata }}',
'{{ id }}',
{{ isAppAuthorized }},
'{{ contentRestrictions }}',
{{ shared }},
'{{ lastModifyingUser }}',
'{{ sha256Checksum }}',
'{{ iconLink }}',
'{{ properties }}',
'{{ driveId }}',
'{{ parents }}',
{{ inheritedPermissionsDisabled }},
{{ starred }},
'{{ version }}',
'{{ trashedTime }}',
'{{ contentHints }}',
'{{ quotaBytesUsed }}',
'{{ clientEncryptionDetails }}',
{{ hasThumbnail }},
{{ copyRequiresWriterPermission }},
'{{ headRevisionId }}',
'{{ sha1Checksum }}',
{{ explicitlyTrashed }},
'{{ createdTime }}',
'{{ permissionIds }}',
'{{ md5Checksum }}',
{{ ownedByMe }},
'{{ imageMediaMetadata }}',
{{ hasAugmentedPermissions }},
{{ modifiedByMe }},
'{{ labelInfo }}',
'{{ linkShareMetadata }}',
'{{ downloadRestrictions }}',
'{{ originalFilename }}',
'{{ teamDriveId }}',
'{{ sharedWithMeTime }}',
'{{ owners }}',
{{ writersCanShare }},
'{{ shortcutDetails }}',
'{{ description }}',
'{{ mimeType }}',
'{{ webContentLink }}',
'{{ capabilities }}',
{{ viewedByMe }},
'{{ spaces }}',
'{{ appProperties }}',
'{{ folderColorRgb }}',
'{{ thumbnailVersion }}',
'{{ resourceKey }}',
'{{ fileExtension }}',
{{ viewersCanCopyContent }},
'{{ modifiedTime }}',
'{{ name }}',
'{{ ocrLanguage }}',
'{{ includePermissionsForView }}',
'{{ ignoreDefaultVisibility }}',
'{{ keepRevisionForever }}',
'{{ enforceSingleParent }}',
'{{ includeLabels }}',
'{{ supportsAllDrives }}',
'{{ supportsTeamDrives }}',
'{{ useContentAsIndexableText }}'
RETURNING
id,
name,
appProperties,
capabilities,
clientEncryptionDetails,
contentHints,
contentRestrictions,
copyRequiresWriterPermission,
createdTime,
description,
downloadRestrictions,
driveId,
explicitlyTrashed,
exportLinks,
fileExtension,
folderColorRgb,
fullFileExtension,
hasAugmentedPermissions,
hasThumbnail,
headRevisionId,
iconLink,
imageMediaMetadata,
inheritedPermissionsDisabled,
isAppAuthorized,
kind,
labelInfo,
lastModifyingUser,
linkShareMetadata,
md5Checksum,
mimeType,
modifiedByMe,
modifiedByMeTime,
modifiedTime,
originalFilename,
ownedByMe,
owners,
parents,
permissionIds,
permissions,
properties,
quotaBytesUsed,
resourceKey,
sha1Checksum,
sha256Checksum,
shared,
sharedWithMeTime,
sharingUser,
shortcutDetails,
size,
spaces,
starred,
teamDriveId,
thumbnailLink,
thumbnailVersion,
trashed,
trashedTime,
trashingUser,
version,
videoMediaMetadata,
viewedByMe,
viewedByMeTime,
viewersCanCopyContent,
webContentLink,
webViewLink,
writersCanShare
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: files
  props:
    - name: kind
      value: "{{ kind }}"
      description: |
        Output only. Identifies what kind of resource this is. Value: the fixed string \`"drive#file"\`.
      default: drive#file
    - name: sharingUser
      description: |
        Information about a Drive user.
      value:
        emailAddress: "{{ emailAddress }}"
        permissionId: "{{ permissionId }}"
        photoLink: "{{ photoLink }}"
        displayName: "{{ displayName }}"
        kind: "{{ kind }}"
        me: {{ me }}
    - name: thumbnailLink
      value: "{{ thumbnailLink }}"
      description: |
        Output only. A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Not intended for direct usage on web applications due to [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) policies. Consider using a proxy server. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in \`files.thumbnailLink\` must be fetched using a credentialed request.
    - name: viewedByMeTime
      value: "{{ viewedByMeTime }}"
      description: |
        The last time the file was viewed by the user (RFC 3339 date-time).
    - name: webViewLink
      value: "{{ webViewLink }}"
      description: |
        Output only. A link for opening the file in a relevant Google editor or viewer in a browser.
    - name: modifiedByMeTime
      value: "{{ modifiedByMeTime }}"
      description: |
        The last time the file was modified by the user (RFC 3339 date-time).
    - name: fullFileExtension
      value: "{{ fullFileExtension }}"
      description: |
        Output only. The full file extension extracted from the \`name\` field. May contain multiple concatenated extensions, such as "tar.gz". This is only available for files with binary content in Google Drive. This is automatically updated when the \`name\` field changes, however it's not cleared if the new name doesn't contain a valid extension.
    - name: trashingUser
      description: |
        Information about a Drive user.
      value:
        emailAddress: "{{ emailAddress }}"
        permissionId: "{{ permissionId }}"
        photoLink: "{{ photoLink }}"
        displayName: "{{ displayName }}"
        kind: "{{ kind }}"
        me: {{ me }}
    - name: size
      value: "{{ size }}"
      description: |
        Output only. Size in bytes of blobs and Google Workspace editor files. Won't be populated for files that have no size, like shortcuts and folders.
    - name: trashed
      value: {{ trashed }}
      description: |
        Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file, but other users can still access the file in the owner's trash until it's permanently deleted.
    - name: permissions
      description: |
        Output only. The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives.
      value:
        - teamDrivePermissionDetails: "{{ teamDrivePermissionDetails }}"
          kind: "{{ kind }}"
          pendingOwner: {{ pendingOwner }}
          type: "{{ type }}"
          deleted: {{ deleted }}
          view: "{{ view }}"
          inheritedPermissionsDisabled: {{ inheritedPermissionsDisabled }}
          photoLink: "{{ photoLink }}"
          emailAddress: "{{ emailAddress }}"
          allowFileDiscovery: {{ allowFileDiscovery }}
          permissionDetails: "{{ permissionDetails }}"
          displayName: "{{ displayName }}"
          expirationTime: "{{ expirationTime }}"
          role: "{{ role }}"
          id: "{{ id }}"
          domain: "{{ domain }}"
    - name: videoMediaMetadata
      description: |
        Output only. Additional metadata about video media. This may not be available immediately upon upload.
      value:
        height: {{ height }}
        durationMillis: "{{ durationMillis }}"
        width: {{ width }}
    - name: id
      value: "{{ id }}"
      description: |
        The ID of the file.
    - name: isAppAuthorized
      value: {{ isAppAuthorized }}
      description: |
        Output only. Whether the file was created or opened by the requesting app.
    - name: contentRestrictions
      description: |
        Restrictions for accessing the content of the file. Only populated if such a restriction exists.
      value:
        - ownerRestricted: {{ ownerRestricted }}
          type: "{{ type }}"
          restrictingUser:
            emailAddress: "{{ emailAddress }}"
            permissionId: "{{ permissionId }}"
            photoLink: "{{ photoLink }}"
            displayName: "{{ displayName }}"
            kind: "{{ kind }}"
            me: {{ me }}
          systemRestricted: {{ systemRestricted }}
          restrictionTime: "{{ restrictionTime }}"
          reason: "{{ reason }}"
          readOnly: {{ readOnly }}
    - name: shared
      value: {{ shared }}
      description: |
        Output only. Whether the file has been shared. Not populated for items in shared drives.
    - name: lastModifyingUser
      description: |
        Information about a Drive user.
      value:
        emailAddress: "{{ emailAddress }}"
        permissionId: "{{ permissionId }}"
        photoLink: "{{ photoLink }}"
        displayName: "{{ displayName }}"
        kind: "{{ kind }}"
        me: {{ me }}
    - name: sha256Checksum
      value: "{{ sha256Checksum }}"
      description: |
        Output only. The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it's not populated for Docs Editors or shortcut files.
    - name: iconLink
      value: "{{ iconLink }}"
      description: |
        Output only. A static, unauthenticated link to the file's icon.
    - name: properties
      value: "{{ properties }}"
      description: |
        A collection of arbitrary key-value pairs which are visible to all apps.
        Entries with null values are cleared in update and copy requests.
    - name: driveId
      value: "{{ driveId }}"
      description: |
        Output only. ID of the shared drive the file resides in. Only populated for items in shared drives.
    - name: parents
      value:
        - "{{ parents }}"
      description: |
        The ID of the parent folder containing the file. A file can only have one parent folder; specifying multiple parents isn't supported. If not specified as part of a create request, the file is placed directly in the user's My Drive folder. If not specified as part of a copy request, the file inherits any discoverable parent of the source file. Update requests must use the \`addParents\` and \`removeParents\` parameters to modify the parents list.
    - name: inheritedPermissionsDisabled
      value: {{ inheritedPermissionsDisabled }}
      description: |
        Whether this file has inherited permissions disabled. Inherited permissions are enabled by default.
    - name: starred
      value: {{ starred }}
      description: |
        Whether the user has starred the file.
    - name: version
      value: "{{ version }}"
      description: |
        Output only. A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.
    - name: trashedTime
      value: "{{ trashedTime }}"
      description: |
        The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives.
    - name: contentHints
      description: |
        Additional information about the content of the file. These fields are never populated in responses.
      value:
        indexableText: "{{ indexableText }}"
        thumbnail:
          image: "{{ image }}"
          mimeType: "{{ mimeType }}"
    - name: quotaBytesUsed
      value: "{{ quotaBytesUsed }}"
      description: |
        Output only. The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with \`keepForever\` enabled.
    - name: clientEncryptionDetails
      description: |
        Client Side Encryption related details. Contains details about the encryption state of the file and details regarding the encryption mechanism that clients need to use when decrypting the contents of this item. This will only be present on files and not on folders or shortcuts.
      value:
        encryptionState: "{{ encryptionState }}"
        decryptionMetadata:
          jwt: "{{ jwt }}"
          wrappedKey: "{{ wrappedKey }}"
          kaclsName: "{{ kaclsName }}"
          aes256GcmChunkSize: "{{ aes256GcmChunkSize }}"
          encryptionResourceKeyHash: "{{ encryptionResourceKeyHash }}"
          kaclsId: "{{ kaclsId }}"
          keyFormat: "{{ keyFormat }}"
    - name: hasThumbnail
      value: {{ hasThumbnail }}
      description: |
        Output only. Whether this file has a thumbnail. This doesn't indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field.
    - name: copyRequiresWriterPermission
      value: {{ copyRequiresWriterPermission }}
      description: |
        Whether the options to copy, print, or download this file should be disabled for readers and commenters.
    - name: headRevisionId
      value: "{{ headRevisionId }}"
      description: |
        Output only. The ID of the file's head revision. This is currently only available for files with binary content in Google Drive.
    - name: sha1Checksum
      value: "{{ sha1Checksum }}"
      description: |
        Output only. The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it's not populated for Docs Editors or shortcut files.
    - name: explicitlyTrashed
      value: {{ explicitlyTrashed }}
      description: |
        Output only. Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.
    - name: createdTime
      value: "{{ createdTime }}"
      description: |
        The time at which the file was created (RFC 3339 date-time).
    - name: permissionIds
      value:
        - "{{ permissionIds }}"
      description: |
        Output only. List of permission IDs for users with access to this file.
    - name: md5Checksum
      value: "{{ md5Checksum }}"
      description: |
        Output only. The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.
    - name: ownedByMe
      value: {{ ownedByMe }}
      description: |
        Output only. Whether the user owns the file. Not populated for items in shared drives.
    - name: imageMediaMetadata
      description: |
        Output only. Additional metadata about image media, if available.
      value:
        sensor: "{{ sensor }}"
        rotation: {{ rotation }}
        cameraModel: "{{ cameraModel }}"
        exposureBias: {{ exposureBias }}
        time: "{{ time }}"
        focalLength: {{ focalLength }}
        location:
          altitude: {{ altitude }}
          latitude: {{ latitude }}
          longitude: {{ longitude }}
        flashUsed: {{ flashUsed }}
        meteringMode: "{{ meteringMode }}"
        exposureTime: {{ exposureTime }}
        aperture: {{ aperture }}
        exposureMode: "{{ exposureMode }}"
        isoSpeed: {{ isoSpeed }}
        maxApertureValue: {{ maxApertureValue }}
        width: {{ width }}
        subjectDistance: {{ subjectDistance }}
        lens: "{{ lens }}"
        cameraMake: "{{ cameraMake }}"
        colorSpace: "{{ colorSpace }}"
        whiteBalance: "{{ whiteBalance }}"
        height: {{ height }}
    - name: hasAugmentedPermissions
      value: {{ hasAugmentedPermissions }}
      description: |
        Output only. Whether there are permissions directly on this file. This field is only populated for items in shared drives.
    - name: modifiedByMe
      value: {{ modifiedByMe }}
      description: |
        Output only. Whether the file has been modified by this user.
    - name: labelInfo
      description: |
        Label information on the file.
      value:
        labels:
          - id: "{{ id }}"
            revisionId: "{{ revisionId }}"
            fields: "{{ fields }}"
            kind: "{{ kind }}"
    - name: linkShareMetadata
      description: |
        Contains details about the link URLs that clients are using to refer to this item.
      value:
        securityUpdateEligible: {{ securityUpdateEligible }}
        securityUpdateEnabled: {{ securityUpdateEnabled }}
    - name: downloadRestrictions
      description: |
        Download restrictions applied on the file.
      value:
        itemDownloadRestriction:
          restrictedForReaders: {{ restrictedForReaders }}
          restrictedForWriters: {{ restrictedForWriters }}
        effectiveDownloadRestrictionWithContext:
          restrictedForReaders: {{ restrictedForReaders }}
          restrictedForWriters: {{ restrictedForWriters }}
    - name: originalFilename
      value: "{{ originalFilename }}"
      description: |
        The original filename of the uploaded content if available, or else the original value of the \`name\` field. This is only available for files with binary content in Google Drive.
    - name: teamDriveId
      value: "{{ teamDriveId }}"
      description: |
        Deprecated: Output only. Use \`driveId\` instead.
    - name: sharedWithMeTime
      value: "{{ sharedWithMeTime }}"
      description: |
        The time at which the file was shared with the user, if applicable (RFC 3339 date-time).
    - name: owners
      description: |
        Output only. The owner of this file. Only certain legacy files may have more than one owner. This field isn't populated for items in shared drives.
      value:
        - emailAddress: "{{ emailAddress }}"
          permissionId: "{{ permissionId }}"
          photoLink: "{{ photoLink }}"
          displayName: "{{ displayName }}"
          kind: "{{ kind }}"
          me: {{ me }}
    - name: writersCanShare
      value: {{ writersCanShare }}
      description: |
        Whether users with only \`writer\` permission can modify the file's permissions. Not populated for items in shared drives.
    - name: shortcutDetails
      description: |
        Information about a shortcut file.
      value:
        targetId: "{{ targetId }}"
        targetMimeType: "{{ targetMimeType }}"
        targetResourceKey: "{{ targetResourceKey }}"
    - name: description
      value: "{{ description }}"
      description: |
        A short description of the file.
    - name: mimeType
      value: "{{ mimeType }}"
      description: |
        The MIME type of the file. Google Drive attempts to automatically detect an appropriate value from uploaded content, if no value is provided. The value cannot be changed unless a new revision is uploaded. If a file is created with a Google Doc MIME type, the uploaded content is imported, if possible. The supported import formats are published in the [\`about\`](/workspace/drive/api/reference/rest/v3/about) resource.
    - name: webContentLink
      value: "{{ webContentLink }}"
      description: |
        Output only. A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.
    - name: capabilities
      description: |
        Output only. Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take. For more information, see [Understand file capabilities](https://developers.google.com/workspace/drive/api/guides/manage-sharing#capabilities).
      value:
        canTrash: {{ canTrash }}
        canChangeViewersCanCopyContent: {{ canChangeViewersCanCopyContent }}
        canAddMyDriveParent: {{ canAddMyDriveParent }}
        canChangeSecurityUpdateEnabled: {{ canChangeSecurityUpdateEnabled }}
        canRemoveMyDriveParent: {{ canRemoveMyDriveParent }}
        canComment: {{ canComment }}
        canModifyContentRestriction: {{ canModifyContentRestriction }}
        canModifyLabels: {{ canModifyLabels }}
        canReadRevisions: {{ canReadRevisions }}
        canMoveChildrenOutOfTeamDrive: {{ canMoveChildrenOutOfTeamDrive }}
        canShare: {{ canShare }}
        canRemoveChildren: {{ canRemoveChildren }}
        canMoveTeamDriveItem: {{ canMoveTeamDriveItem }}
        canModifyContent: {{ canModifyContent }}
        canModifyOwnerContentRestriction: {{ canModifyOwnerContentRestriction }}
        canMoveItemOutOfTeamDrive: {{ canMoveItemOutOfTeamDrive }}
        canReadTeamDrive: {{ canReadTeamDrive }}
        canDisableInheritedPermissions: {{ canDisableInheritedPermissions }}
        canAcceptOwnership: {{ canAcceptOwnership }}
        canMoveChildrenWithinTeamDrive: {{ canMoveChildrenWithinTeamDrive }}
        canMoveItemWithinTeamDrive: {{ canMoveItemWithinTeamDrive }}
        canAddChildren: {{ canAddChildren }}
        canMoveItemIntoTeamDrive: {{ canMoveItemIntoTeamDrive }}
        canStartApproval: {{ canStartApproval }}
        canEdit: {{ canEdit }}
        canModifyEditorContentRestriction: {{ canModifyEditorContentRestriction }}
        canReadLabels: {{ canReadLabels }}
        canChangeItemDownloadRestriction: {{ canChangeItemDownloadRestriction }}
        canAddFolderFromAnotherDrive: {{ canAddFolderFromAnotherDrive }}
        canUntrash: {{ canUntrash }}
        canDelete: {{ canDelete }}
        canAccessViaGenAi: {{ canAccessViaGenAi }}
        canRename: {{ canRename }}
        canMoveItemWithinDrive: {{ canMoveItemWithinDrive }}
        canCopy: {{ canCopy }}
        canDeleteChildren: {{ canDeleteChildren }}
        canMoveChildrenWithinDrive: {{ canMoveChildrenWithinDrive }}
        canDownload: {{ canDownload }}
        canEnableInheritedPermissions: {{ canEnableInheritedPermissions }}
        canRemoveContentRestriction: {{ canRemoveContentRestriction }}
        canReadDrive: {{ canReadDrive }}
        canListChildren: {{ canListChildren }}
        canChangeCopyRequiresWriterPermission: {{ canChangeCopyRequiresWriterPermission }}
        canMoveChildrenOutOfDrive: {{ canMoveChildrenOutOfDrive }}
        canTrashChildren: {{ canTrashChildren }}
        canMoveItemOutOfDrive: {{ canMoveItemOutOfDrive }}
    - name: viewedByMe
      value: {{ viewedByMe }}
      description: |
        Output only. Whether the file has been viewed by this user.
    - name: spaces
      value:
        - "{{ spaces }}"
      description: |
        Output only. The list of spaces which contain the file. The currently supported values are \`drive\`, \`appDataFolder\`, and \`photos\`.
    - name: appProperties
      value: "{{ appProperties }}"
      description: |
        A collection of arbitrary key-value pairs which are private to the requesting app.
        Entries with null values are cleared in update and copy requests. These properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with a OAuth 2 client ID. You cannot use an API key to retrieve private properties.
    - name: folderColorRgb
      value: "{{ folderColorRgb }}"
      description: |
        The color for a folder or a shortcut to a folder as an RGB hex string. The supported colors are published in the \`folderColorPalette\` field of the [\`about\`](/workspace/drive/api/reference/rest/v3/about) resource. If an unsupported color is specified, the closest color in the palette is used instead.
    - name: thumbnailVersion
      value: "{{ thumbnailVersion }}"
      description: |
        Output only. The thumbnail version for use in thumbnail cache invalidation.
    - name: resourceKey
      value: "{{ resourceKey }}"
      description: |
        Output only. A key needed to access the item via a shared link.
    - name: fileExtension
      value: "{{ fileExtension }}"
      description: |
        Output only. The final component of \`fullFileExtension\`. This is only available for files with binary content in Google Drive.
    - name: viewersCanCopyContent
      value: {{ viewersCanCopyContent }}
      description: |
        Deprecated: Use \`copyRequiresWriterPermission\` instead.
    - name: modifiedTime
      value: "{{ modifiedTime }}"
      description: |
        he last time the file was modified by anyone (RFC 3339 date-time). Note that setting modifiedTime will also update modifiedByMeTime for the user.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the file. This isn't necessarily unique within a folder. Note that for immutable items such as the top-level folders of shared drives, the My Drive root folder, and the Application Data folder, the name is constant.
    - name: ocrLanguage
      value: "{{ ocrLanguage }}"
    - name: includePermissionsForView
      value: "{{ includePermissionsForView }}"
    - name: ignoreDefaultVisibility
      value: {{ ignoreDefaultVisibility }}
    - name: keepRevisionForever
      value: {{ keepRevisionForever }}
    - name: enforceSingleParent
      value: {{ enforceSingleParent }}
    - name: includeLabels
      value: "{{ includeLabels }}"
    - name: supportsAllDrives
      value: {{ supportsAllDrives }}
    - name: supportsTeamDrives
      value: {{ supportsTeamDrives }}
    - name: useContentAsIndexableText
      value: {{ useContentAsIndexableText }}
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

 Updates a file's metadata, content, or both. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as `modifiedDate`. This method supports patch semantics. This method supports an */upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:* `*/*` (Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information, see [Google Workspace and Google Drive supported MIME types](https://developers.google.com/workspace/drive/api/guides/mime-types).) For more information on uploading files, see [Upload file data](https://developers.google.com/workspace/drive/api/guides/manage-uploads).

```sql
UPDATE googleworkspace.drivev3.files
SET 
data__kind = '{{ kind }}',
data__sharingUser = '{{ sharingUser }}',
data__thumbnailLink = '{{ thumbnailLink }}',
data__viewedByMeTime = '{{ viewedByMeTime }}',
data__webViewLink = '{{ webViewLink }}',
data__modifiedByMeTime = '{{ modifiedByMeTime }}',
data__fullFileExtension = '{{ fullFileExtension }}',
data__trashingUser = '{{ trashingUser }}',
data__size = '{{ size }}',
data__trashed = {{ trashed }},
data__permissions = '{{ permissions }}',
data__videoMediaMetadata = '{{ videoMediaMetadata }}',
data__id = '{{ id }}',
data__isAppAuthorized = {{ isAppAuthorized }},
data__contentRestrictions = '{{ contentRestrictions }}',
data__shared = {{ shared }},
data__lastModifyingUser = '{{ lastModifyingUser }}',
data__sha256Checksum = '{{ sha256Checksum }}',
data__iconLink = '{{ iconLink }}',
data__properties = '{{ properties }}',
data__driveId = '{{ driveId }}',
data__parents = '{{ parents }}',
data__inheritedPermissionsDisabled = {{ inheritedPermissionsDisabled }},
data__starred = {{ starred }},
data__version = '{{ version }}',
data__trashedTime = '{{ trashedTime }}',
data__contentHints = '{{ contentHints }}',
data__quotaBytesUsed = '{{ quotaBytesUsed }}',
data__clientEncryptionDetails = '{{ clientEncryptionDetails }}',
data__hasThumbnail = {{ hasThumbnail }},
data__copyRequiresWriterPermission = {{ copyRequiresWriterPermission }},
data__headRevisionId = '{{ headRevisionId }}',
data__sha1Checksum = '{{ sha1Checksum }}',
data__explicitlyTrashed = {{ explicitlyTrashed }},
data__createdTime = '{{ createdTime }}',
data__permissionIds = '{{ permissionIds }}',
data__md5Checksum = '{{ md5Checksum }}',
data__ownedByMe = {{ ownedByMe }},
data__imageMediaMetadata = '{{ imageMediaMetadata }}',
data__hasAugmentedPermissions = {{ hasAugmentedPermissions }},
data__modifiedByMe = {{ modifiedByMe }},
data__labelInfo = '{{ labelInfo }}',
data__linkShareMetadata = '{{ linkShareMetadata }}',
data__downloadRestrictions = '{{ downloadRestrictions }}',
data__originalFilename = '{{ originalFilename }}',
data__teamDriveId = '{{ teamDriveId }}',
data__sharedWithMeTime = '{{ sharedWithMeTime }}',
data__owners = '{{ owners }}',
data__writersCanShare = {{ writersCanShare }},
data__shortcutDetails = '{{ shortcutDetails }}',
data__description = '{{ description }}',
data__mimeType = '{{ mimeType }}',
data__webContentLink = '{{ webContentLink }}',
data__capabilities = '{{ capabilities }}',
data__viewedByMe = {{ viewedByMe }},
data__spaces = '{{ spaces }}',
data__appProperties = '{{ appProperties }}',
data__folderColorRgb = '{{ folderColorRgb }}',
data__thumbnailVersion = '{{ thumbnailVersion }}',
data__resourceKey = '{{ resourceKey }}',
data__fileExtension = '{{ fileExtension }}',
data__viewersCanCopyContent = {{ viewersCanCopyContent }},
data__modifiedTime = '{{ modifiedTime }}',
data__name = '{{ name }}'
WHERE 
fileId = '{{ fileId }}' --required
AND removeParents = '{{ removeParents}}'
AND includePermissionsForView = '{{ includePermissionsForView}}'
AND ocrLanguage = '{{ ocrLanguage}}'
AND keepRevisionForever = {{ keepRevisionForever}}
AND includeLabels = '{{ includeLabels}}'
AND enforceSingleParent = {{ enforceSingleParent}}
AND addParents = '{{ addParents}}'
AND supportsTeamDrives = {{ supportsTeamDrives}}
AND useContentAsIndexableText = {{ useContentAsIndexableText}}
AND supportsAllDrives = {{ supportsAllDrives}}
RETURNING
id,
name,
appProperties,
capabilities,
clientEncryptionDetails,
contentHints,
contentRestrictions,
copyRequiresWriterPermission,
createdTime,
description,
downloadRestrictions,
driveId,
explicitlyTrashed,
exportLinks,
fileExtension,
folderColorRgb,
fullFileExtension,
hasAugmentedPermissions,
hasThumbnail,
headRevisionId,
iconLink,
imageMediaMetadata,
inheritedPermissionsDisabled,
isAppAuthorized,
kind,
labelInfo,
lastModifyingUser,
linkShareMetadata,
md5Checksum,
mimeType,
modifiedByMe,
modifiedByMeTime,
modifiedTime,
originalFilename,
ownedByMe,
owners,
parents,
permissionIds,
permissions,
properties,
quotaBytesUsed,
resourceKey,
sha1Checksum,
sha256Checksum,
shared,
sharedWithMeTime,
sharingUser,
shortcutDetails,
size,
spaces,
starred,
teamDriveId,
thumbnailLink,
thumbnailVersion,
trashed,
trashedTime,
trashingUser,
version,
videoMediaMetadata,
viewedByMe,
viewedByMeTime,
viewersCanCopyContent,
webContentLink,
webViewLink,
writersCanShare;
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

Permanently deletes a file owned by the user without moving it to the trash. For more information, see [Trash or delete files and folders](https://developers.google.com/workspace/drive/api/guides/delete). If the file belongs to a shared drive, the user must be an `organizer` on the parent folder. If the target is a folder, all descendants owned by the user are also deleted.

```sql
DELETE FROM googleworkspace.drivev3.files
WHERE fileId = '{{ fileId }}' --required
AND supportsAllDrives = '{{ supportsAllDrives }}'
AND enforceSingleParent = '{{ enforceSingleParent }}'
AND supportsTeamDrives = '{{ supportsTeamDrives }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="watch"
    values={[
        { label: 'watch', value: 'watch' },
        { label: 'empty_trash', value: 'empty_trash' },
        { label: 'download', value: 'download' },
        { label: 'export', value: 'export' },
        { label: 'generate_ids', value: 'generate_ids' },
        { label: 'copy', value: 'copy' },
        { label: 'modify_labels', value: 'modify_labels' },
        { label: 'generate_cse_token', value: 'generate_cse_token' }
    ]}
>
<TabItem value="watch">

Subscribes to changes to a file. For more information, see [Notifications for resource changes](https://developers.google.com/workspace/drive/api/guides/push).

```sql
EXEC googleworkspace.drivev3.files.watch 
@fileId='{{ fileId }}' --required, 
@supportsAllDrives={{ supportsAllDrives }}, 
@supportsTeamDrives={{ supportsTeamDrives }}, 
@includePermissionsForView='{{ includePermissionsForView }}', 
@acknowledgeAbuse={{ acknowledgeAbuse }}, 
@includeLabels='{{ includeLabels }}' 
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
<TabItem value="empty_trash">

Permanently deletes all of the user's trashed files. For more information, see [Trash or delete files and folders](https://developers.google.com/workspace/drive/api/guides/delete).

```sql
EXEC googleworkspace.drivev3.files.empty_trash 
@enforceSingleParent={{ enforceSingleParent }}, 
@driveId='{{ driveId }}'
;
```
</TabItem>
<TabItem value="download">

Downloads the content of a file. For more information, see [Download and export files](https://developers.google.com/workspace/drive/api/guides/manage-downloads). Operations are valid for 24 hours from the time of creation.

```sql
EXEC googleworkspace.drivev3.files.download 
@fileId='{{ fileId }}' --required, 
@mimeType='{{ mimeType }}', 
@revisionId='{{ revisionId }}'
;
```
</TabItem>
<TabItem value="export">

Exports a Google Workspace document to the requested MIME type and returns exported byte content. For more information, see [Download and export files](https://developers.google.com/workspace/drive/api/guides/manage-downloads). Note that the exported content is limited to 10 MB.

```sql
EXEC googleworkspace.drivev3.files.export 
@fileId='{{ fileId }}' --required, 
@mimeType='{{ mimeType }}' --required
;
```
</TabItem>
<TabItem value="generate_ids">

Generates a set of file IDs which can be provided in create or copy requests. For more information, see [Create and manage files](https://developers.google.com/workspace/drive/api/guides/create-file).

```sql
EXEC googleworkspace.drivev3.files.generate_ids 
@count='{{ count }}', 
@type='{{ type }}', 
@space='{{ space }}'
;
```
</TabItem>
<TabItem value="copy">

Creates a copy of a file and applies any requested updates with patch semantics. For more information, see [Create and manage files](https://developers.google.com/workspace/drive/api/guides/create-file).

```sql
EXEC googleworkspace.drivev3.files.copy 
@fileId='{{ fileId }}' --required, 
@supportsAllDrives={{ supportsAllDrives }}, 
@supportsTeamDrives={{ supportsTeamDrives }}, 
@enforceSingleParent={{ enforceSingleParent }}, 
@includeLabels='{{ includeLabels }}', 
@ignoreDefaultVisibility={{ ignoreDefaultVisibility }}, 
@keepRevisionForever={{ keepRevisionForever }}, 
@ocrLanguage='{{ ocrLanguage }}', 
@includePermissionsForView='{{ includePermissionsForView }}' 
@@json=
'{
"kind": "{{ kind }}", 
"sharingUser": "{{ sharingUser }}", 
"thumbnailLink": "{{ thumbnailLink }}", 
"viewedByMeTime": "{{ viewedByMeTime }}", 
"webViewLink": "{{ webViewLink }}", 
"modifiedByMeTime": "{{ modifiedByMeTime }}", 
"fullFileExtension": "{{ fullFileExtension }}", 
"trashingUser": "{{ trashingUser }}", 
"size": "{{ size }}", 
"trashed": {{ trashed }}, 
"permissions": "{{ permissions }}", 
"videoMediaMetadata": "{{ videoMediaMetadata }}", 
"id": "{{ id }}", 
"isAppAuthorized": {{ isAppAuthorized }}, 
"contentRestrictions": "{{ contentRestrictions }}", 
"shared": {{ shared }}, 
"lastModifyingUser": "{{ lastModifyingUser }}", 
"sha256Checksum": "{{ sha256Checksum }}", 
"iconLink": "{{ iconLink }}", 
"properties": "{{ properties }}", 
"driveId": "{{ driveId }}", 
"parents": "{{ parents }}", 
"inheritedPermissionsDisabled": {{ inheritedPermissionsDisabled }}, 
"starred": {{ starred }}, 
"version": "{{ version }}", 
"trashedTime": "{{ trashedTime }}", 
"contentHints": "{{ contentHints }}", 
"quotaBytesUsed": "{{ quotaBytesUsed }}", 
"clientEncryptionDetails": "{{ clientEncryptionDetails }}", 
"hasThumbnail": {{ hasThumbnail }}, 
"copyRequiresWriterPermission": {{ copyRequiresWriterPermission }}, 
"headRevisionId": "{{ headRevisionId }}", 
"sha1Checksum": "{{ sha1Checksum }}", 
"explicitlyTrashed": {{ explicitlyTrashed }}, 
"createdTime": "{{ createdTime }}", 
"permissionIds": "{{ permissionIds }}", 
"md5Checksum": "{{ md5Checksum }}", 
"ownedByMe": {{ ownedByMe }}, 
"imageMediaMetadata": "{{ imageMediaMetadata }}", 
"hasAugmentedPermissions": {{ hasAugmentedPermissions }}, 
"modifiedByMe": {{ modifiedByMe }}, 
"labelInfo": "{{ labelInfo }}", 
"linkShareMetadata": "{{ linkShareMetadata }}", 
"downloadRestrictions": "{{ downloadRestrictions }}", 
"originalFilename": "{{ originalFilename }}", 
"teamDriveId": "{{ teamDriveId }}", 
"sharedWithMeTime": "{{ sharedWithMeTime }}", 
"owners": "{{ owners }}", 
"writersCanShare": {{ writersCanShare }}, 
"shortcutDetails": "{{ shortcutDetails }}", 
"description": "{{ description }}", 
"mimeType": "{{ mimeType }}", 
"webContentLink": "{{ webContentLink }}", 
"capabilities": "{{ capabilities }}", 
"viewedByMe": {{ viewedByMe }}, 
"spaces": "{{ spaces }}", 
"appProperties": "{{ appProperties }}", 
"folderColorRgb": "{{ folderColorRgb }}", 
"thumbnailVersion": "{{ thumbnailVersion }}", 
"resourceKey": "{{ resourceKey }}", 
"fileExtension": "{{ fileExtension }}", 
"viewersCanCopyContent": {{ viewersCanCopyContent }}, 
"modifiedTime": "{{ modifiedTime }}", 
"name": "{{ name }}"
}'
;
```
</TabItem>
<TabItem value="modify_labels">

Modifies the set of labels applied to a file. For more information, see [Set a label field on a file](https://developers.google.com/workspace/drive/api/guides/set-label). Returns a list of the labels that were added or modified.

```sql
EXEC googleworkspace.drivev3.files.modify_labels 
@fileId='{{ fileId }}' --required 
@@json=
'{
"labelModifications": "{{ labelModifications }}", 
"kind": "{{ kind }}"
}'
;
```
</TabItem>
<TabItem value="generate_cse_token">

Generates a CSE token which can be used to create or update CSE files.

```sql
EXEC googleworkspace.drivev3.files.generate_cse_token 
@fileId='{{ fileId }}', 
@parent='{{ parent }}'
;
```
</TabItem>
</Tabs>
