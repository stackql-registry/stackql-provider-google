--- 
title: comments
hide_title: false
hide_table_of_contents: false
keywords:
  - comments
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

Creates, updates, deletes, gets or lists a <code>comments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="comments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivev2.comments" /></td></tr>
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
    <td><CopyableCode code="anchor" /></td>
    <td><code>string</code></td>
    <td>A region of the document represented as a JSON string. For details on defining anchor properties, refer to [Manage comments and replies](https://developers.google.com/workspace/drive/api/v3/manage-comments).</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>object</code></td>
    <td>Information about a Drive user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="commentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the comment.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>The plain text content used to create this comment. This is not HTML safe and should only be used as a starting point to make edits to a comment's content.</td>
</tr>
<tr>
    <td><CopyableCode code="context" /></td>
    <td><code>object</code></td>
    <td>Context of a file which is being commented on.</td>
</tr>
<tr>
    <td><CopyableCode code="createdDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when this comment was first created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Whether this comment has been deleted. If a comment has been deleted the content will be cleared and this will only represent a comment that once existed.</td>
</tr>
<tr>
    <td><CopyableCode code="fileId" /></td>
    <td><code>string</code></td>
    <td>The file which this comment is addressing.</td>
</tr>
<tr>
    <td><CopyableCode code="fileTitle" /></td>
    <td><code>string</code></td>
    <td>The title of the file which this comment is addressing.</td>
</tr>
<tr>
    <td><CopyableCode code="htmlContent" /></td>
    <td><code>string</code></td>
    <td>HTML formatted content for this comment.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always drive#comment. (default: drive#comment)</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when this comment or any of its replies were last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="replies" /></td>
    <td><code>array</code></td>
    <td>Replies to this post.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>A link back to this comment.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of this comment. Status can be changed by posting a reply to a comment with the desired status. Possible values are: * `open` - The comment is still open. * `resolved` - The comment has been resolved by one of its replies.</td>
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
    <td><CopyableCode code="anchor" /></td>
    <td><code>string</code></td>
    <td>A region of the document represented as a JSON string. For details on defining anchor properties, refer to [Manage comments and replies](https://developers.google.com/workspace/drive/api/v3/manage-comments).</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>object</code></td>
    <td>Information about a Drive user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="commentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the comment.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>The plain text content used to create this comment. This is not HTML safe and should only be used as a starting point to make edits to a comment's content.</td>
</tr>
<tr>
    <td><CopyableCode code="context" /></td>
    <td><code>object</code></td>
    <td>Context of a file which is being commented on.</td>
</tr>
<tr>
    <td><CopyableCode code="createdDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when this comment was first created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Whether this comment has been deleted. If a comment has been deleted the content will be cleared and this will only represent a comment that once existed.</td>
</tr>
<tr>
    <td><CopyableCode code="fileId" /></td>
    <td><code>string</code></td>
    <td>The file which this comment is addressing.</td>
</tr>
<tr>
    <td><CopyableCode code="fileTitle" /></td>
    <td><code>string</code></td>
    <td>The title of the file which this comment is addressing.</td>
</tr>
<tr>
    <td><CopyableCode code="htmlContent" /></td>
    <td><code>string</code></td>
    <td>HTML formatted content for this comment.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always drive#comment. (default: drive#comment)</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when this comment or any of its replies were last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="replies" /></td>
    <td><code>array</code></td>
    <td>Replies to this post.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>A link back to this comment.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of this comment. Status can be changed by posting a reply to a comment with the desired status. Possible values are: * `open` - The comment is still open. * `resolved` - The comment has been resolved by one of its replies.</td>
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
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-commentId"><code>commentId</code></a></td>
    <td><a href="#parameter-includeDeleted"><code>includeDeleted</code></a></td>
    <td>Gets a comment by ID.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td><a href="#parameter-includeDeleted"><code>includeDeleted</code></a>, <a href="#parameter-updatedMin"><code>updatedMin</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists a file's comments.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td></td>
    <td>Creates a new comment on the given file.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-commentId"><code>commentId</code></a></td>
    <td></td>
    <td>Updates an existing comment.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-commentId"><code>commentId</code></a></td>
    <td></td>
    <td>Updates an existing comment.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-commentId"><code>commentId</code></a></td>
    <td></td>
    <td>Deletes a comment.</td>
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
<tr id="parameter-includeDeleted">
    <td><CopyableCode code="includeDeleted" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-updatedMin">
    <td><CopyableCode code="updatedMin" /></td>
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

Gets a comment by ID.

```sql
SELECT
anchor,
author,
commentId,
content,
context,
createdDate,
deleted,
fileId,
fileTitle,
htmlContent,
kind,
modifiedDate,
replies,
selfLink,
status
FROM googleworkspace.drivev2.comments
WHERE fileId = '{{ fileId }}' -- required
AND commentId = '{{ commentId }}' -- required
AND includeDeleted = '{{ includeDeleted }}'
;
```
</TabItem>
<TabItem value="list">

Lists a file's comments.

```sql
SELECT
anchor,
author,
commentId,
content,
context,
createdDate,
deleted,
fileId,
fileTitle,
htmlContent,
kind,
modifiedDate,
replies,
selfLink,
status
FROM googleworkspace.drivev2.comments
WHERE fileId = '{{ fileId }}' -- required
AND includeDeleted = '{{ includeDeleted }}'
AND updatedMin = '{{ updatedMin }}'
AND pageToken = '{{ pageToken }}'
AND maxResults = '{{ maxResults }}'
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

Creates a new comment on the given file.

```sql
INSERT INTO googleworkspace.drivev2.comments (
data__kind,
data__content,
data__context,
data__createdDate,
data__selfLink,
data__deleted,
data__anchor,
data__htmlContent,
data__modifiedDate,
data__fileTitle,
data__status,
data__author,
data__fileId,
data__replies,
data__commentId,
fileId
)
SELECT 
'{{ kind }}',
'{{ content }}',
'{{ context }}',
'{{ createdDate }}',
'{{ selfLink }}',
{{ deleted }},
'{{ anchor }}',
'{{ htmlContent }}',
'{{ modifiedDate }}',
'{{ fileTitle }}',
'{{ status }}',
'{{ author }}',
'{{ fileId }}',
'{{ replies }}',
'{{ commentId }}',
'{{ fileId }}'
RETURNING
anchor,
author,
commentId,
content,
context,
createdDate,
deleted,
fileId,
fileTitle,
htmlContent,
kind,
modifiedDate,
replies,
selfLink,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: comments
  props:
    - name: fileId
      value: "{{ fileId }}"
      description: Required parameter for the comments resource.
    - name: kind
      value: "{{ kind }}"
      description: |
        This is always drive#comment.
      default: drive#comment
    - name: content
      value: "{{ content }}"
      description: |
        The plain text content used to create this comment. This is not HTML safe and should only be used as a starting point to make edits to a comment's content.
    - name: context
      description: |
        Context of a file which is being commented on.
      value:
        type: "{{ type }}"
        value: "{{ value }}"
    - name: createdDate
      value: "{{ createdDate }}"
      description: |
        The date when this comment was first created.
    - name: selfLink
      value: "{{ selfLink }}"
      description: |
        A link back to this comment.
    - name: deleted
      value: {{ deleted }}
      description: |
        Whether this comment has been deleted. If a comment has been deleted the content will be cleared and this will only represent a comment that once existed.
    - name: anchor
      value: "{{ anchor }}"
      description: |
        A region of the document represented as a JSON string. For details on defining anchor properties, refer to [Manage comments and replies](https://developers.google.com/workspace/drive/api/v3/manage-comments).
    - name: htmlContent
      value: "{{ htmlContent }}"
      description: |
        HTML formatted content for this comment.
    - name: modifiedDate
      value: "{{ modifiedDate }}"
      description: |
        The date when this comment or any of its replies were last modified.
    - name: fileTitle
      value: "{{ fileTitle }}"
      description: |
        The title of the file which this comment is addressing.
    - name: status
      value: "{{ status }}"
      description: |
        The status of this comment. Status can be changed by posting a reply to a comment with the desired status. Possible values are: * \`open\` - The comment is still open. * \`resolved\` - The comment has been resolved by one of its replies.
    - name: author
      description: |
        Information about a Drive user.
      value:
        permissionId: "{{ permissionId }}"
        picture:
          url: "{{ url }}"
        kind: "{{ kind }}"
        emailAddress: "{{ emailAddress }}"
        displayName: "{{ displayName }}"
        isAuthenticatedUser: {{ isAuthenticatedUser }}
    - name: fileId
      value: "{{ fileId }}"
      description: |
        The file which this comment is addressing.
    - name: replies
      description: |
        Replies to this post.
      value:
        - createdDate: "{{ createdDate }}"
          author:
            permissionId: "{{ permissionId }}"
            picture:
              url: "{{ url }}"
            kind: "{{ kind }}"
            emailAddress: "{{ emailAddress }}"
            displayName: "{{ displayName }}"
            isAuthenticatedUser: {{ isAuthenticatedUser }}
          replyId: "{{ replyId }}"
          deleted: {{ deleted }}
          kind: "{{ kind }}"
          htmlContent: "{{ htmlContent }}"
          content: "{{ content }}"
          modifiedDate: "{{ modifiedDate }}"
          verb: "{{ verb }}"
    - name: commentId
      value: "{{ commentId }}"
      description: |
        The ID of the comment.
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

Updates an existing comment.

```sql
UPDATE googleworkspace.drivev2.comments
SET 
data__kind = '{{ kind }}',
data__content = '{{ content }}',
data__context = '{{ context }}',
data__createdDate = '{{ createdDate }}',
data__selfLink = '{{ selfLink }}',
data__deleted = {{ deleted }},
data__anchor = '{{ anchor }}',
data__htmlContent = '{{ htmlContent }}',
data__modifiedDate = '{{ modifiedDate }}',
data__fileTitle = '{{ fileTitle }}',
data__status = '{{ status }}',
data__author = '{{ author }}',
data__fileId = '{{ fileId }}',
data__replies = '{{ replies }}',
data__commentId = '{{ commentId }}'
WHERE 
fileId = '{{ fileId }}' --required
AND commentId = '{{ commentId }}' --required
RETURNING
anchor,
author,
commentId,
content,
context,
createdDate,
deleted,
fileId,
fileTitle,
htmlContent,
kind,
modifiedDate,
replies,
selfLink,
status;
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

Updates an existing comment.

```sql
REPLACE googleworkspace.drivev2.comments
SET 
data__kind = '{{ kind }}',
data__content = '{{ content }}',
data__context = '{{ context }}',
data__createdDate = '{{ createdDate }}',
data__selfLink = '{{ selfLink }}',
data__deleted = {{ deleted }},
data__anchor = '{{ anchor }}',
data__htmlContent = '{{ htmlContent }}',
data__modifiedDate = '{{ modifiedDate }}',
data__fileTitle = '{{ fileTitle }}',
data__status = '{{ status }}',
data__author = '{{ author }}',
data__fileId = '{{ fileId }}',
data__replies = '{{ replies }}',
data__commentId = '{{ commentId }}'
WHERE 
fileId = '{{ fileId }}' --required
AND commentId = '{{ commentId }}' --required
RETURNING
anchor,
author,
commentId,
content,
context,
createdDate,
deleted,
fileId,
fileTitle,
htmlContent,
kind,
modifiedDate,
replies,
selfLink,
status;
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

Deletes a comment.

```sql
DELETE FROM googleworkspace.drivev2.comments
WHERE fileId = '{{ fileId }}' --required
AND commentId = '{{ commentId }}' --required
;
```
</TabItem>
</Tabs>
