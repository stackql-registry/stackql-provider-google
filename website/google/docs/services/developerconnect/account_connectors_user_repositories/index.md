--- 
title: account_connectors_user_repositories
hide_title: false
hide_table_of_contents: false
keywords:
  - account_connectors_user_repositories
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

Creates, updates, deletes, gets or lists an <code>account_connectors_user_repositories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_connectors_user_repositories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.developerconnect.account_connectors_user_repositories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="fetch_user_repositories"
    values={[
        { label: 'fetch_user_repositories', value: 'fetch_user_repositories' }
    ]}
>
<TabItem value="fetch_user_repositories">

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token identifying a page of results the server should return.</td>
</tr>
<tr>
    <td><CopyableCode code="userRepos" /></td>
    <td><code>array</code></td>
    <td>The repositories that the user can access with this account connector.</td>
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
    <td><a href="#fetch_user_repositories"><CopyableCode code="fetch_user_repositories" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-accountConnectorsId"><code>accountConnectorsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-repository"><code>repository</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>FetchUserRepositories returns a list of UserRepos that are available for an account connector resource.</td>
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
<tr id="parameter-repository">
    <td><CopyableCode code="repository" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="fetch_user_repositories"
    values={[
        { label: 'fetch_user_repositories', value: 'fetch_user_repositories' }
    ]}
>
<TabItem value="fetch_user_repositories">

FetchUserRepositories returns a list of UserRepos that are available for an account connector resource.

```sql
SELECT
nextPageToken,
userRepos
FROM google.developerconnect.account_connectors_user_repositories
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND accountConnectorsId = '{{ accountConnectorsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND repository = '{{ repository }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>
