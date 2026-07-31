--- 
title: aliases
hide_title: false
hide_table_of_contents: false
keywords:
  - aliases
  - directory
  - googleadmin
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage googleadmin resources using SQL
custom_edit_url: null
image: /img/stackql-googleadmin-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>aliases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aliases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleadmin.directory.aliases" /></td></tr>
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
    <td><CopyableCode code="aliases" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td> (default: admin#directory#aliases)</td>
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
    <td><a href="#parameter-userKey"><code>userKey</code></a></td>
    <td><a href="#parameter-event"><code>event</code></a></td>
    <td>Lists all aliases for a user.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-userKey"><code>userKey</code></a></td>
    <td></td>
    <td>Adds an alias.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-userKey"><code>userKey</code></a>, <a href="#parameter-alias"><code>alias</code></a></td>
    <td></td>
    <td>Removes an alias.</td>
</tr>
<tr>
    <td><a href="#watch"><CopyableCode code="watch" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-userKey"><code>userKey</code></a></td>
    <td><a href="#parameter-event"><code>event</code></a></td>
    <td>Watches for changes in users list.</td>
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
<tr id="parameter-alias">
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-userKey">
    <td><CopyableCode code="userKey" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-event">
    <td><CopyableCode code="event" /></td>
    <td><code>string</code></td>
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

Lists all aliases for a user.

```sql
SELECT
aliases,
etag,
kind
FROM googleadmin.directory.aliases
WHERE userKey = '{{ userKey }}' -- required
AND event = '{{ event }}'
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

Adds an alias.

```sql
INSERT INTO googleadmin.directory.aliases (
data__id,
data__alias,
data__primaryEmail,
data__kind,
data__etag,
userKey
)
SELECT 
'{{ id }}',
'{{ alias }}',
'{{ primaryEmail }}',
'{{ kind }}',
'{{ etag }}',
'{{ userKey }}'
RETURNING
id,
alias,
etag,
kind,
primaryEmail
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: aliases
  props:
    - name: userKey
      value: "{{ userKey }}"
      description: Required parameter for the aliases resource.
    - name: id
      value: "{{ id }}"
    - name: alias
      value: "{{ alias }}"
    - name: primaryEmail
      value: "{{ primaryEmail }}"
    - name: kind
      value: "{{ kind }}"
      default: admin#directory#alias
    - name: etag
      value: "{{ etag }}"
`}</CodeBlock>

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

Removes an alias.

```sql
DELETE FROM googleadmin.directory.aliases
WHERE userKey = '{{ userKey }}' --required
AND alias = '{{ alias }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="watch"
    values={[
        { label: 'watch', value: 'watch' }
    ]}
>
<TabItem value="watch">

Watches for changes in users list.

```sql
EXEC googleadmin.directory.aliases.watch 
@userKey='{{ userKey }}' --required, 
@event='{{ event }}' 
@@json=
'{
"address": "{{ address }}", 
"token": "{{ token }}", 
"resourceId": "{{ resourceId }}", 
"params": "{{ params }}", 
"type": "{{ type }}", 
"kind": "{{ kind }}", 
"id": "{{ id }}", 
"resourceUri": "{{ resourceUri }}", 
"payload": {{ payload }}, 
"expiration": "{{ expiration }}"
}'
;
```
</TabItem>
</Tabs>
