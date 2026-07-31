--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - developerconnect
  - google
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage google resources using SQL
custom_edit_url: null
image: /img/stackql-google-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.developerconnect.users" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Identifier. Resource name of the user, in the format `projects/*/locations/*/accountConnectors/*/users/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the user was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. Developer Connect automatically converts user identity to some human readable description, e.g., email address.</td>
</tr>
<tr>
    <td><CopyableCode code="lastTokenRequestTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the token was last requested.</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-accountConnectorsId"><code>accountConnectorsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Users in a given project, location, and account_connector.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-accountConnectorsId"><code>accountConnectorsId</code></a>, <a href="#parameter-usersId"><code>usersId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single User.</td>
</tr>
<tr>
    <td><a href="#start_oauth_flow"><CopyableCode code="start_oauth_flow" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-accountConnectorsId"><code>accountConnectorsId</code></a></td>
    <td></td>
    <td>Starts OAuth flow for an account connector.</td>
</tr>
<tr>
    <td><a href="#finish_oauth_flow"><CopyableCode code="finish_oauth_flow" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-accountConnectorsId"><code>accountConnectorsId</code></a></td>
    <td><a href="#parameter-oauthParams.code"><code>oauthParams.code</code></a>, <a href="#parameter-oauthParams.ticket"><code>oauthParams.ticket</code></a>, <a href="#parameter-googleOauthParams.scopes"><code>googleOauthParams.scopes</code></a>, <a href="#parameter-googleOauthParams.ticket"><code>googleOauthParams.ticket</code></a>, <a href="#parameter-googleOauthParams.versionInfo"><code>googleOauthParams.versionInfo</code></a></td>
    <td>Finishes OAuth flow for an account connector.</td>
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
<tr id="parameter-accountConnectorsId">
    <td><CopyableCode code="accountConnectorsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-usersId">
    <td><CopyableCode code="usersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-googleOauthParams.scopes">
    <td><CopyableCode code="googleOauthParams.scopes" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-googleOauthParams.ticket">
    <td><CopyableCode code="googleOauthParams.ticket" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-googleOauthParams.versionInfo">
    <td><CopyableCode code="googleOauthParams.versionInfo" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-oauthParams.code">
    <td><CopyableCode code="oauthParams.code" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-oauthParams.ticket">
    <td><CopyableCode code="oauthParams.ticket" /></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Lists Users in a given project, location, and account_connector.

```sql
SELECT
name,
createTime,
displayName,
lastTokenRequestTime
FROM google.developerconnect.users
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND accountConnectorsId = '{{ accountConnectorsId }}' -- required
AND filter = '{{ filter }}'
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND orderBy = '{{ orderBy }}'
;
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

Deletes a single User.

```sql
DELETE FROM google.developerconnect.users
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND accountConnectorsId = '{{ accountConnectorsId }}' --required
AND usersId = '{{ usersId }}' --required
AND etag = '{{ etag }}'
AND validateOnly = '{{ validateOnly }}'
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_oauth_flow"
    values={[
        { label: 'start_oauth_flow', value: 'start_oauth_flow' },
        { label: 'finish_oauth_flow', value: 'finish_oauth_flow' }
    ]}
>
<TabItem value="start_oauth_flow">

Starts OAuth flow for an account connector.

```sql
EXEC google.developerconnect.users.start_oauth_flow 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@accountConnectorsId='{{ accountConnectorsId }}' --required
;
```
</TabItem>
<TabItem value="finish_oauth_flow">

Finishes OAuth flow for an account connector.

```sql
EXEC google.developerconnect.users.finish_oauth_flow 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@accountConnectorsId='{{ accountConnectorsId }}' --required, 
@oauthParams.code='{{ oauthParams.code }}', 
@oauthParams.ticket='{{ oauthParams.ticket }}', 
@googleOauthParams.scopes='{{ googleOauthParams.scopes }}', 
@googleOauthParams.ticket='{{ googleOauthParams.ticket }}', 
@googleOauthParams.versionInfo='{{ googleOauthParams.versionInfo }}'
;
```
</TabItem>
</Tabs>
