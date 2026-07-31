--- 
title: approvals
hide_title: false
hide_table_of_contents: false
keywords:
  - approvals
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

Creates, updates, deletes, gets or lists an <code>approvals</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="approvals" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivev3.approvals" /></td></tr>
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
    <td><CopyableCode code="approvalId" /></td>
    <td><code>string</code></td>
    <td>The approval ID.</td>
</tr>
<tr>
    <td><CopyableCode code="completeTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the approval was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the approval was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dueTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time that the approval is due.</td>
</tr>
<tr>
    <td><CopyableCode code="fileContentChangeBehavior" /></td>
    <td><code>string</code></td>
    <td>Output only. The behavior of the approval when the file content changes. (FILE_CONTENT_CHANGE_BEHAVIOR_UNSPECIFIED, RESET_APPROVAL, NO_APPROVAL_ACTION)</td>
</tr>
<tr>
    <td><CopyableCode code="initiator" /></td>
    <td><code>object</code></td>
    <td>The user that requested the approval. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always drive#approval.</td>
</tr>
<tr>
    <td><CopyableCode code="modifyTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time the approval was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="reviewerResponses" /></td>
    <td><code>array</code></td>
    <td>The responses made on the approval by reviewers.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Output only. The status of the approval at the time this resource was requested. (STATUS_UNSPECIFIED, IN_PROGRESS, APPROVED, CANCELLED, DECLINED)</td>
</tr>
<tr>
    <td><CopyableCode code="targetFileId" /></td>
    <td><code>string</code></td>
    <td>Target file id of the approval.</td>
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
    <td><CopyableCode code="approvalId" /></td>
    <td><code>string</code></td>
    <td>The approval ID.</td>
</tr>
<tr>
    <td><CopyableCode code="completeTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the approval was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the approval was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dueTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time that the approval is due.</td>
</tr>
<tr>
    <td><CopyableCode code="fileContentChangeBehavior" /></td>
    <td><code>string</code></td>
    <td>Output only. The behavior of the approval when the file content changes. (FILE_CONTENT_CHANGE_BEHAVIOR_UNSPECIFIED, RESET_APPROVAL, NO_APPROVAL_ACTION)</td>
</tr>
<tr>
    <td><CopyableCode code="initiator" /></td>
    <td><code>object</code></td>
    <td>The user that requested the approval. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always drive#approval.</td>
</tr>
<tr>
    <td><CopyableCode code="modifyTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time the approval was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="reviewerResponses" /></td>
    <td><code>array</code></td>
    <td>The responses made on the approval by reviewers.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Output only. The status of the approval at the time this resource was requested. (STATUS_UNSPECIFIED, IN_PROGRESS, APPROVED, CANCELLED, DECLINED)</td>
</tr>
<tr>
    <td><CopyableCode code="targetFileId" /></td>
    <td><code>string</code></td>
    <td>Target file id of the approval.</td>
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
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-approvalId"><code>approvalId</code></a></td>
    <td></td>
    <td>Gets an approval by ID. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals).</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the approvals on a file. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals).</td>
</tr>
<tr>
    <td><a href="#decline"><CopyableCode code="decline" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-approvalId"><code>approvalId</code></a></td>
    <td></td>
    <td>Declines an approval. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals). This is used to update the ReviewerResponse of the requesting user with a Response of `DECLINED`. This also completes the approval and sets the approval Status to `DECLINED`.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-approvalId"><code>approvalId</code></a></td>
    <td></td>
    <td>Cancels an approval. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals). Updates the approval Status to `CANCELLED`. This can be called by any user with the `writer` permission on the file while the approval Status is `IN_PROGRESS`.</td>
</tr>
<tr>
    <td><a href="#start"><CopyableCode code="start" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td></td>
    <td>Starts an approval on a file. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals).</td>
</tr>
<tr>
    <td><a href="#comment"><CopyableCode code="comment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-approvalId"><code>approvalId</code></a></td>
    <td></td>
    <td>Comments on an approval. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals). This sends a notification to both the initiator and the reviewers. Additionally, a message is also added to the approval activity log.</td>
</tr>
<tr>
    <td><a href="#reassign"><CopyableCode code="reassign" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-approvalId"><code>approvalId</code></a></td>
    <td></td>
    <td>Reassigns the reviewers on an approval. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals). Adds or replaces reviewers in the ReviewerResponse of the approval. This can be called by any user with the `writer` permission on the file while the approval Status is `IN_PROGRESS` and the Response for the reviewer being reassigned is `NO_RESPONSE`. A user with the `reader` permission can only reassign an approval that's assigned to themselves. Removing a reviewer isn't allowed.</td>
</tr>
<tr>
    <td><a href="#approve"><CopyableCode code="approve" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-approvalId"><code>approvalId</code></a></td>
    <td></td>
    <td>Approves an approval. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals). This is used to update the ReviewerResponse of the requesting user with a Response of `APPROVED`. If this is the last required reviewer response, this also completes the approval and sets the approval Status to `APPROVED`.</td>
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
<tr id="parameter-approvalId">
    <td><CopyableCode code="approvalId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-fileId">
    <td><CopyableCode code="fileId" /></td>
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

Gets an approval by ID. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals).

```sql
SELECT
approvalId,
completeTime,
createTime,
dueTime,
fileContentChangeBehavior,
initiator,
kind,
modifyTime,
reviewerResponses,
status,
targetFileId
FROM googleworkspace.drivev3.approvals
WHERE fileId = '{{ fileId }}' -- required
AND approvalId = '{{ approvalId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the approvals on a file. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals).

```sql
SELECT
approvalId,
completeTime,
createTime,
dueTime,
fileContentChangeBehavior,
initiator,
kind,
modifyTime,
reviewerResponses,
status,
targetFileId
FROM googleworkspace.drivev3.approvals
WHERE fileId = '{{ fileId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="decline"
    values={[
        { label: 'decline', value: 'decline' },
        { label: 'cancel', value: 'cancel' },
        { label: 'start', value: 'start' },
        { label: 'comment', value: 'comment' },
        { label: 'reassign', value: 'reassign' },
        { label: 'approve', value: 'approve' }
    ]}
>
<TabItem value="decline">

Declines an approval. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals). This is used to update the ReviewerResponse of the requesting user with a Response of `DECLINED`. This also completes the approval and sets the approval Status to `DECLINED`.

```sql
EXEC googleworkspace.drivev3.approvals.decline 
@fileId='{{ fileId }}' --required, 
@approvalId='{{ approvalId }}' --required 
@@json=
'{
"message": "{{ message }}"
}'
;
```
</TabItem>
<TabItem value="cancel">

Cancels an approval. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals). Updates the approval Status to `CANCELLED`. This can be called by any user with the `writer` permission on the file while the approval Status is `IN_PROGRESS`.

```sql
EXEC googleworkspace.drivev3.approvals.cancel 
@fileId='{{ fileId }}' --required, 
@approvalId='{{ approvalId }}' --required 
@@json=
'{
"message": "{{ message }}"
}'
;
```
</TabItem>
<TabItem value="start">

Starts an approval on a file. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals).

```sql
EXEC googleworkspace.drivev3.approvals.start 
@fileId='{{ fileId }}' --required 
@@json=
'{
"message": "{{ message }}", 
"lockFile": {{ lockFile }}, 
"reviewerEmails": "{{ reviewerEmails }}", 
"dueTime": "{{ dueTime }}", 
"fileContentChangeBehavior": "{{ fileContentChangeBehavior }}"
}'
;
```
</TabItem>
<TabItem value="comment">

Comments on an approval. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals). This sends a notification to both the initiator and the reviewers. Additionally, a message is also added to the approval activity log.

```sql
EXEC googleworkspace.drivev3.approvals.comment 
@fileId='{{ fileId }}' --required, 
@approvalId='{{ approvalId }}' --required 
@@json=
'{
"message": "{{ message }}"
}'
;
```
</TabItem>
<TabItem value="reassign">

Reassigns the reviewers on an approval. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals). Adds or replaces reviewers in the ReviewerResponse of the approval. This can be called by any user with the `writer` permission on the file while the approval Status is `IN_PROGRESS` and the Response for the reviewer being reassigned is `NO_RESPONSE`. A user with the `reader` permission can only reassign an approval that's assigned to themselves. Removing a reviewer isn't allowed.

```sql
EXEC googleworkspace.drivev3.approvals.reassign 
@fileId='{{ fileId }}' --required, 
@approvalId='{{ approvalId }}' --required 
@@json=
'{
"replaceReviewers": "{{ replaceReviewers }}", 
"message": "{{ message }}", 
"addReviewers": "{{ addReviewers }}"
}'
;
```
</TabItem>
<TabItem value="approve">

Approves an approval. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals). This is used to update the ReviewerResponse of the requesting user with a Response of `APPROVED`. If this is the last required reviewer response, this also completes the approval and sets the approval Status to `APPROVED`.

```sql
EXEC googleworkspace.drivev3.approvals.approve 
@fileId='{{ fileId }}' --required, 
@approvalId='{{ approvalId }}' --required 
@@json=
'{
"message": "{{ message }}"
}'
;
```
</TabItem>
</Tabs>
