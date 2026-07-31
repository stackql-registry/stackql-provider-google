--- 
title: replies
hide_title: false
hide_table_of_contents: false
keywords:
  - replies
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

Creates, updates, deletes, gets or lists a <code>replies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="replies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivev2.replies" /></td></tr>
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
    <td><CopyableCode code="author" /></td>
    <td><code>object</code></td>
    <td>Information about a Drive user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>The plain text content used to create this reply. This is not HTML safe and should only be used as a starting point to make edits to a reply's content. This field is required on inserts if no verb is specified (resolve/reopen).</td>
</tr>
<tr>
    <td><CopyableCode code="createdDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when this reply was first created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Whether this reply has been deleted. If a reply has been deleted the content will be cleared and this will only represent a reply that once existed.</td>
</tr>
<tr>
    <td><CopyableCode code="htmlContent" /></td>
    <td><code>string</code></td>
    <td>HTML formatted content for this reply.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always drive#commentReply. (default: drive#commentReply)</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when this reply was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="replyId" /></td>
    <td><code>string</code></td>
    <td>The ID of the reply.</td>
</tr>
<tr>
    <td><CopyableCode code="verb" /></td>
    <td><code>string</code></td>
    <td>The action this reply performed to the parent comment. When creating a new reply this is the action to be perform tSo the parent comment. Possible values are: * `resolve` - To resolve a comment. * `reopen` - To reopen (un-resolve) a comment.</td>
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
    <td><CopyableCode code="author" /></td>
    <td><code>object</code></td>
    <td>Information about a Drive user. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>The plain text content used to create this reply. This is not HTML safe and should only be used as a starting point to make edits to a reply's content. This field is required on inserts if no verb is specified (resolve/reopen).</td>
</tr>
<tr>
    <td><CopyableCode code="createdDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when this reply was first created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Whether this reply has been deleted. If a reply has been deleted the content will be cleared and this will only represent a reply that once existed.</td>
</tr>
<tr>
    <td><CopyableCode code="htmlContent" /></td>
    <td><code>string</code></td>
    <td>HTML formatted content for this reply.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always drive#commentReply. (default: drive#commentReply)</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when this reply was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="replyId" /></td>
    <td><code>string</code></td>
    <td>The ID of the reply.</td>
</tr>
<tr>
    <td><CopyableCode code="verb" /></td>
    <td><code>string</code></td>
    <td>The action this reply performed to the parent comment. When creating a new reply this is the action to be perform tSo the parent comment. Possible values are: * `resolve` - To resolve a comment. * `reopen` - To reopen (un-resolve) a comment.</td>
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
    <td>Gets a reply.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-commentId"><code>commentId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-includeDeleted"><code>includeDeleted</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all of the replies to a comment.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-commentId"><code>commentId</code></a></td>
    <td></td>
    <td>Creates a new reply to the given comment.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-commentId"><code>commentId</code></a>, <a href="#parameter-replyId"><code>replyId</code></a></td>
    <td></td>
    <td>Updates an existing reply.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-commentId"><code>commentId</code></a>, <a href="#parameter-replyId"><code>replyId</code></a></td>
    <td></td>
    <td>Updates an existing reply.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-commentId"><code>commentId</code></a>, <a href="#parameter-replyId"><code>replyId</code></a></td>
    <td></td>
    <td>Deletes a reply.</td>
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

Gets a reply.

```sql
SELECT
author,
content,
createdDate,
deleted,
htmlContent,
kind,
modifiedDate,
replyId,
verb
FROM googleworkspace.drivev2.replies
WHERE fileId = '{{ fileId }}' -- required
AND commentId = '{{ commentId }}' -- required
AND replyId = '{{ replyId }}' -- required
AND includeDeleted = '{{ includeDeleted }}'
;
```
</TabItem>
<TabItem value="list">

Lists all of the replies to a comment.

```sql
SELECT
author,
content,
createdDate,
deleted,
htmlContent,
kind,
modifiedDate,
replyId,
verb
FROM googleworkspace.drivev2.replies
WHERE fileId = '{{ fileId }}' -- required
AND commentId = '{{ commentId }}' -- required
AND pageToken = '{{ pageToken }}'
AND includeDeleted = '{{ includeDeleted }}'
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

Creates a new reply to the given comment.

```sql
INSERT INTO googleworkspace.drivev2.replies (
data__createdDate,
data__author,
data__replyId,
data__deleted,
data__kind,
data__htmlContent,
data__content,
data__modifiedDate,
data__verb,
fileId,
commentId
)
SELECT 
'{{ createdDate }}',
'{{ author }}',
'{{ replyId }}',
{{ deleted }},
'{{ kind }}',
'{{ htmlContent }}',
'{{ content }}',
'{{ modifiedDate }}',
'{{ verb }}',
'{{ fileId }}',
'{{ commentId }}'
RETURNING
author,
content,
createdDate,
deleted,
htmlContent,
kind,
modifiedDate,
replyId,
verb
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
    - name: createdDate
      value: "{{ createdDate }}"
      description: |
        The date when this reply was first created.
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
    - name: replyId
      value: "{{ replyId }}"
      description: |
        The ID of the reply.
    - name: deleted
      value: {{ deleted }}
      description: |
        Whether this reply has been deleted. If a reply has been deleted the content will be cleared and this will only represent a reply that once existed.
    - name: kind
      value: "{{ kind }}"
      description: |
        This is always drive#commentReply.
      default: drive#commentReply
    - name: htmlContent
      value: "{{ htmlContent }}"
      description: |
        HTML formatted content for this reply.
    - name: content
      value: "{{ content }}"
      description: |
        The plain text content used to create this reply. This is not HTML safe and should only be used as a starting point to make edits to a reply's content. This field is required on inserts if no verb is specified (resolve/reopen).
    - name: modifiedDate
      value: "{{ modifiedDate }}"
      description: |
        The date when this reply was last modified.
    - name: verb
      value: "{{ verb }}"
      description: |
        The action this reply performed to the parent comment. When creating a new reply this is the action to be perform tSo the parent comment. Possible values are: * \`resolve\` - To resolve a comment. * \`reopen\` - To reopen (un-resolve) a comment.
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

Updates an existing reply.

```sql
UPDATE googleworkspace.drivev2.replies
SET 
data__createdDate = '{{ createdDate }}',
data__author = '{{ author }}',
data__replyId = '{{ replyId }}',
data__deleted = {{ deleted }},
data__kind = '{{ kind }}',
data__htmlContent = '{{ htmlContent }}',
data__content = '{{ content }}',
data__modifiedDate = '{{ modifiedDate }}',
data__verb = '{{ verb }}'
WHERE 
fileId = '{{ fileId }}' --required
AND commentId = '{{ commentId }}' --required
AND replyId = '{{ replyId }}' --required
RETURNING
author,
content,
createdDate,
deleted,
htmlContent,
kind,
modifiedDate,
replyId,
verb;
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

Updates an existing reply.

```sql
REPLACE googleworkspace.drivev2.replies
SET 
data__createdDate = '{{ createdDate }}',
data__author = '{{ author }}',
data__replyId = '{{ replyId }}',
data__deleted = {{ deleted }},
data__kind = '{{ kind }}',
data__htmlContent = '{{ htmlContent }}',
data__content = '{{ content }}',
data__modifiedDate = '{{ modifiedDate }}',
data__verb = '{{ verb }}'
WHERE 
fileId = '{{ fileId }}' --required
AND commentId = '{{ commentId }}' --required
AND replyId = '{{ replyId }}' --required
RETURNING
author,
content,
createdDate,
deleted,
htmlContent,
kind,
modifiedDate,
replyId,
verb;
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

Deletes a reply.

```sql
DELETE FROM googleworkspace.drivev2.replies
WHERE fileId = '{{ fileId }}' --required
AND commentId = '{{ commentId }}' --required
AND replyId = '{{ replyId }}' --required
;
```
</TabItem>
</Tabs>
