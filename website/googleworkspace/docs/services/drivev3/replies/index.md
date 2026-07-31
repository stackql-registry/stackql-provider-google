--- 
title: replies
hide_title: false
hide_table_of_contents: false
keywords:
  - replies
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

Creates, updates, deletes, gets or lists a <code>replies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="replies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivev3.replies" /></td></tr>
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
    <td>Output only. The ID of the reply.</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The action the reply performed to the parent comment. The supported values are: * `resolve` * `reopen`</td>
</tr>
<tr>
    <td><CopyableCode code="assigneeEmailAddress" /></td>
    <td><code>string</code></td>
    <td>Output only. The email address of the user assigned to this comment. If no user is assigned, the field is unset.</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>object</code></td>
    <td>Information about a Drive user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>The plain text content of the reply. This field is used for setting the content, while `htmlContent` should be displayed. This field is required by the `create` method if no `action` value is specified.</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the reply was created (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the reply has been deleted. A deleted reply has no content.</td>
</tr>
<tr>
    <td><CopyableCode code="htmlContent" /></td>
    <td><code>string</code></td>
    <td>Output only. The content of the reply with HTML formatting.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#reply"`. (default: drive#reply)</td>
</tr>
<tr>
    <td><CopyableCode code="mentionedEmailAddresses" /></td>
    <td><code>array</code></td>
    <td>Output only. A list of email addresses for users mentioned in this comment. If no users are mentioned, the list is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the reply was modified (RFC 3339 date-time).</td>
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
    <td>Output only. The ID of the reply.</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The action the reply performed to the parent comment. The supported values are: * `resolve` * `reopen`</td>
</tr>
<tr>
    <td><CopyableCode code="assigneeEmailAddress" /></td>
    <td><code>string</code></td>
    <td>Output only. The email address of the user assigned to this comment. If no user is assigned, the field is unset.</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>object</code></td>
    <td>Information about a Drive user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>The plain text content of the reply. This field is used for setting the content, while `htmlContent` should be displayed. This field is required by the `create` method if no `action` value is specified.</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the reply was created (RFC 3339 date-time).</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the reply has been deleted. A deleted reply has no content.</td>
</tr>
<tr>
    <td><CopyableCode code="htmlContent" /></td>
    <td><code>string</code></td>
    <td>Output only. The content of the reply with HTML formatting.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#reply"`. (default: drive#reply)</td>
</tr>
<tr>
    <td><CopyableCode code="mentionedEmailAddresses" /></td>
    <td><code>array</code></td>
    <td>Output only. A list of email addresses for users mentioned in this comment. If no users are mentioned, the list is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the reply was modified (RFC 3339 date-time).</td>
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
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-commentId"><code>commentId</code></a>, <a href="#parameter-replyId"><code>replyId</code></a></td>
    <td><a href="#parameter-includeDeleted"><code>includeDeleted</code></a></td>
    <td>Gets a reply by ID. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments).</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-commentId"><code>commentId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-includeDeleted"><code>includeDeleted</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists a comment's replies. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments).</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-commentId"><code>commentId</code></a></td>
    <td></td>
    <td>Creates a reply to a comment. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments).</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-commentId"><code>commentId</code></a>, <a href="#parameter-replyId"><code>replyId</code></a></td>
    <td></td>
    <td>Updates a reply with patch semantics. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments).</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-commentId"><code>commentId</code></a>, <a href="#parameter-replyId"><code>replyId</code></a></td>
    <td></td>
    <td>Deletes a reply. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments).</td>
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
<tr id="parameter-commentId">
    <td><CopyableCode code="commentId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-fileId">
    <td><CopyableCode code="fileId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-replyId">
    <td><CopyableCode code="replyId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includeDeleted">
    <td><CopyableCode code="includeDeleted" /></td>
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

Gets a reply by ID. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments).

```sql
SELECT
id,
action,
assigneeEmailAddress,
author,
content,
createdTime,
deleted,
htmlContent,
kind,
mentionedEmailAddresses,
modifiedTime
FROM googleworkspace.drivev3.replies
WHERE fileId = '{{ fileId }}' -- required
AND commentId = '{{ commentId }}' -- required
AND replyId = '{{ replyId }}' -- required
AND includeDeleted = '{{ includeDeleted }}'
;
```
</TabItem>
<TabItem value="list">

Lists a comment's replies. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments).

```sql
SELECT
id,
action,
assigneeEmailAddress,
author,
content,
createdTime,
deleted,
htmlContent,
kind,
mentionedEmailAddresses,
modifiedTime
FROM googleworkspace.drivev3.replies
WHERE fileId = '{{ fileId }}' -- required
AND commentId = '{{ commentId }}' -- required
AND pageToken = '{{ pageToken }}'
AND includeDeleted = '{{ includeDeleted }}'
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

Creates a reply to a comment. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments).

```sql
INSERT INTO googleworkspace.drivev3.replies (
data__modifiedTime,
data__htmlContent,
data__createdTime,
data__content,
data__author,
data__action,
data__id,
data__kind,
data__deleted,
fileId,
commentId
)
SELECT 
'{{ modifiedTime }}',
'{{ htmlContent }}',
'{{ createdTime }}',
'{{ content }}',
'{{ author }}',
'{{ action }}',
'{{ id }}',
'{{ kind }}',
{{ deleted }},
'{{ fileId }}',
'{{ commentId }}'
RETURNING
id,
action,
assigneeEmailAddress,
author,
content,
createdTime,
deleted,
htmlContent,
kind,
mentionedEmailAddresses,
modifiedTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: replies
  props:
    - name: fileId
      value: "{{ fileId }}"
      description: Required parameter for the replies resource.
    - name: commentId
      value: "{{ commentId }}"
      description: Required parameter for the replies resource.
    - name: modifiedTime
      value: "{{ modifiedTime }}"
      description: |
        The last time the reply was modified (RFC 3339 date-time).
    - name: htmlContent
      value: "{{ htmlContent }}"
      description: |
        Output only. The content of the reply with HTML formatting.
    - name: createdTime
      value: "{{ createdTime }}"
      description: |
        The time at which the reply was created (RFC 3339 date-time).
    - name: content
      value: "{{ content }}"
      description: |
        The plain text content of the reply. This field is used for setting the content, while \`htmlContent\` should be displayed. This field is required by the \`create\` method if no \`action\` value is specified.
    - name: author
      description: |
        Information about a Drive user.
      value:
        emailAddress: "{{ emailAddress }}"
        permissionId: "{{ permissionId }}"
        photoLink: "{{ photoLink }}"
        displayName: "{{ displayName }}"
        kind: "{{ kind }}"
        me: {{ me }}
    - name: action
      value: "{{ action }}"
      description: |
        The action the reply performed to the parent comment. The supported values are: * \`resolve\` * \`reopen\`
    - name: id
      value: "{{ id }}"
      description: |
        Output only. The ID of the reply.
    - name: kind
      value: "{{ kind }}"
      description: |
        Output only. Identifies what kind of resource this is. Value: the fixed string \`"drive#reply"\`.
      default: drive#reply
    - name: deleted
      value: {{ deleted }}
      description: |
        Output only. Whether the reply has been deleted. A deleted reply has no content.
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

Updates a reply with patch semantics. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments).

```sql
UPDATE googleworkspace.drivev3.replies
SET 
data__modifiedTime = '{{ modifiedTime }}',
data__htmlContent = '{{ htmlContent }}',
data__createdTime = '{{ createdTime }}',
data__content = '{{ content }}',
data__author = '{{ author }}',
data__action = '{{ action }}',
data__id = '{{ id }}',
data__kind = '{{ kind }}',
data__deleted = {{ deleted }}
WHERE 
fileId = '{{ fileId }}' --required
AND commentId = '{{ commentId }}' --required
AND replyId = '{{ replyId }}' --required
RETURNING
id,
action,
assigneeEmailAddress,
author,
content,
createdTime,
deleted,
htmlContent,
kind,
mentionedEmailAddresses,
modifiedTime;
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

Deletes a reply. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments).

```sql
DELETE FROM googleworkspace.drivev3.replies
WHERE fileId = '{{ fileId }}' --required
AND commentId = '{{ commentId }}' --required
AND replyId = '{{ replyId }}' --required
;
```
</TabItem>
</Tabs>
