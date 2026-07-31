--- 
title: accessproposals
hide_title: false
hide_table_of_contents: false
keywords:
  - accessproposals
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

Creates, updates, deletes, gets or lists an <code>accessproposals</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="accessproposals" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleworkspace.drivev3.accessproposals" /></td></tr>
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
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="fileId" /></td>
    <td><code>string</code></td>
    <td>The file ID that the proposal for access is on.</td>
</tr>
<tr>
    <td><CopyableCode code="proposalId" /></td>
    <td><code>string</code></td>
    <td>The ID of the access proposal.</td>
</tr>
<tr>
    <td><CopyableCode code="recipientEmailAddress" /></td>
    <td><code>string</code></td>
    <td>The email address of the user that will receive permissions, if accepted.</td>
</tr>
<tr>
    <td><CopyableCode code="requestMessage" /></td>
    <td><code>string</code></td>
    <td>The message that the requester added to the proposal.</td>
</tr>
<tr>
    <td><CopyableCode code="requesterEmailAddress" /></td>
    <td><code>string</code></td>
    <td>The email address of the requesting user.</td>
</tr>
<tr>
    <td><CopyableCode code="rolesAndViews" /></td>
    <td><code>array</code></td>
    <td>A wrapper for the role and view of an access proposal. For more information, see [Roles and permissions](https://developers.google.com/workspace/drive/api/guides/ref-roles).</td>
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
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="fileId" /></td>
    <td><code>string</code></td>
    <td>The file ID that the proposal for access is on.</td>
</tr>
<tr>
    <td><CopyableCode code="proposalId" /></td>
    <td><code>string</code></td>
    <td>The ID of the access proposal.</td>
</tr>
<tr>
    <td><CopyableCode code="recipientEmailAddress" /></td>
    <td><code>string</code></td>
    <td>The email address of the user that will receive permissions, if accepted.</td>
</tr>
<tr>
    <td><CopyableCode code="requestMessage" /></td>
    <td><code>string</code></td>
    <td>The message that the requester added to the proposal.</td>
</tr>
<tr>
    <td><CopyableCode code="requesterEmailAddress" /></td>
    <td><code>string</code></td>
    <td>The email address of the requesting user.</td>
</tr>
<tr>
    <td><CopyableCode code="rolesAndViews" /></td>
    <td><code>array</code></td>
    <td>A wrapper for the role and view of an access proposal. For more information, see [Roles and permissions](https://developers.google.com/workspace/drive/api/guides/ref-roles).</td>
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
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-proposalId"><code>proposalId</code></a></td>
    <td></td>
    <td>Retrieves an access proposal by ID. For more information, see [Manage pending access proposals](https://developers.google.com/workspace/drive/api/guides/pending-access).</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>List the access proposals on a file. For more information, see [Manage pending access proposals](https://developers.google.com/workspace/drive/api/guides/pending-access). Note: Only approvers are able to list access proposals on a file. If the user isn't an approver, a 403 error is returned.</td>
</tr>
<tr>
    <td><a href="#resolve"><CopyableCode code="resolve" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-fileId"><code>fileId</code></a>, <a href="#parameter-proposalId"><code>proposalId</code></a></td>
    <td></td>
    <td>Approves or denies an access proposal. For more information, see [Manage pending access proposals](https://developers.google.com/workspace/drive/api/guides/pending-access).</td>
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
<tr id="parameter-proposalId">
    <td><CopyableCode code="proposalId" /></td>
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

Retrieves an access proposal by ID. For more information, see [Manage pending access proposals](https://developers.google.com/workspace/drive/api/guides/pending-access).

```sql
SELECT
createTime,
fileId,
proposalId,
recipientEmailAddress,
requestMessage,
requesterEmailAddress,
rolesAndViews
FROM googleworkspace.drivev3.accessproposals
WHERE fileId = '{{ fileId }}' -- required
AND proposalId = '{{ proposalId }}' -- required
;
```
</TabItem>
<TabItem value="list">

List the access proposals on a file. For more information, see [Manage pending access proposals](https://developers.google.com/workspace/drive/api/guides/pending-access). Note: Only approvers are able to list access proposals on a file. If the user isn't an approver, a 403 error is returned.

```sql
SELECT
createTime,
fileId,
proposalId,
recipientEmailAddress,
requestMessage,
requesterEmailAddress,
rolesAndViews
FROM googleworkspace.drivev3.accessproposals
WHERE fileId = '{{ fileId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="resolve"
    values={[
        { label: 'resolve', value: 'resolve' }
    ]}
>
<TabItem value="resolve">

Approves or denies an access proposal. For more information, see [Manage pending access proposals](https://developers.google.com/workspace/drive/api/guides/pending-access).

```sql
EXEC googleworkspace.drivev3.accessproposals.resolve 
@fileId='{{ fileId }}' --required, 
@proposalId='{{ proposalId }}' --required 
@@json=
'{
"role": "{{ role }}", 
"view": "{{ view }}", 
"action": "{{ action }}", 
"sendNotification": {{ sendNotification }}
}'
;
```
</TabItem>
</Tabs>
