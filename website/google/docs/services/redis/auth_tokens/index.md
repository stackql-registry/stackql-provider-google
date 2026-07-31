--- 
title: auth_tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - auth_tokens
  - redis
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

Creates, updates, deletes, gets or lists an <code>auth_tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="auth_tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.redis.auth_tokens" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Identifier. Name of the auth token. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/clusters/&#123;cluster&#125;/tokenAuthUsers/&#123;token_auth_user&#125;/authTokens/&#123;auth_token&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time of the auth token.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the auth token. (STATE_UNSPECIFIED, ACTIVE, CREATING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>Output only. The service generated authentication token used to connect to the Redis cluster.</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Identifier. Name of the auth token. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/clusters/&#123;cluster&#125;/tokenAuthUsers/&#123;token_auth_user&#125;/authTokens/&#123;auth_token&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time of the auth token.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the auth token. (STATE_UNSPECIFIED, ACTIVE, CREATING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>Output only. The service generated authentication token used to connect to the Redis cluster.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-tokenAuthUsersId"><code>tokenAuthUsersId</code></a>, <a href="#parameter-authTokensId"><code>authTokensId</code></a></td>
    <td></td>
    <td>Gets a specific auth token for a specific token auth user.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-tokenAuthUsersId"><code>tokenAuthUsersId</code></a></td>
    <td><a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists all the auth tokens for a specific token auth user.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-tokenAuthUsersId"><code>tokenAuthUsersId</code></a>, <a href="#parameter-authTokensId"><code>authTokensId</code></a></td>
    <td></td>
    <td>Removes a auth token for a user of a token based auth enabled instance.</td>
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
<tr id="parameter-authTokensId">
    <td><CopyableCode code="authTokensId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-clustersId">
    <td><CopyableCode code="clustersId" /></td>
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
<tr id="parameter-tokenAuthUsersId">
    <td><CopyableCode code="tokenAuthUsersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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

Gets a specific auth token for a specific token auth user.

```sql
SELECT
name,
createTime,
state,
token
FROM google.redis.auth_tokens
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND clustersId = '{{ clustersId }}' -- required
AND tokenAuthUsersId = '{{ tokenAuthUsersId }}' -- required
AND authTokensId = '{{ authTokensId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists all the auth tokens for a specific token auth user.

```sql
SELECT
name,
createTime,
state,
token
FROM google.redis.auth_tokens
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND clustersId = '{{ clustersId }}' -- required
AND tokenAuthUsersId = '{{ tokenAuthUsersId }}' -- required
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
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

Removes a auth token for a user of a token based auth enabled instance.

```sql
DELETE FROM google.redis.auth_tokens
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND clustersId = '{{ clustersId }}' --required
AND tokenAuthUsersId = '{{ tokenAuthUsersId }}' --required
AND authTokensId = '{{ authTokensId }}' --required
;
```
</TabItem>
</Tabs>
