--- 
title: token_auth_users_auth_token
hide_title: false
hide_table_of_contents: false
keywords:
  - token_auth_users_auth_token
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

Creates, updates, deletes, gets or lists a <code>token_auth_users_auth_token</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="token_auth_users_auth_token" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.redis.token_auth_users_auth_token" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#add_auth_token"><CopyableCode code="add_auth_token" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a>, <a href="#parameter-tokenAuthUsersId"><code>tokenAuthUsersId</code></a></td>
    <td></td>
    <td>Adds a auth token for a user of a token based auth enabled cluster.</td>
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
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="add_auth_token"
    values={[
        { label: 'add_auth_token', value: 'add_auth_token' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_auth_token">

Adds a auth token for a user of a token based auth enabled cluster.

```sql
INSERT INTO google.redis.token_auth_users_auth_token (
data__authToken,
projectsId,
locationsId,
clustersId,
tokenAuthUsersId
)
SELECT 
'{{ authToken }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ clustersId }}',
'{{ tokenAuthUsersId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: token_auth_users_auth_token
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the token_auth_users_auth_token resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the token_auth_users_auth_token resource.
    - name: clustersId
      value: "{{ clustersId }}"
      description: Required parameter for the token_auth_users_auth_token resource.
    - name: tokenAuthUsersId
      value: "{{ tokenAuthUsersId }}"
      description: Required parameter for the token_auth_users_auth_token resource.
    - name: authToken
      description: |
        Auth token for the cluster.
      value:
        state: "{{ state }}"
        name: "{{ name }}"
        token: "{{ token }}"
        createTime: "{{ createTime }}"
`}</CodeBlock>

</TabItem>
</Tabs>
