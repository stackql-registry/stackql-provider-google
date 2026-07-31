--- 
title: autonomous_databases_refreshable_clones
hide_title: false
hide_table_of_contents: false
keywords:
  - autonomous_databases_refreshable_clones
  - oracledatabase
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

Creates, updates, deletes, gets or lists an <code>autonomous_databases_refreshable_clones</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="autonomous_databases_refreshable_clones" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.oracledatabase.autonomous_databases_refreshable_clones" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_refreshable_clones"
    values={[
        { label: 'get_refreshable_clones', value: 'get_refreshable_clones' }
    ]}
>
<TabItem value="get_refreshable_clones">

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
    <td><CopyableCode code="autonomousDatabaseRefreshableClones" /></td>
    <td><code>array</code></td>
    <td>The list of Autonomous Database refreshable clones.</td>
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
    <td><a href="#get_refreshable_clones"><CopyableCode code="get_refreshable_clones" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-autonomousDatabasesId"><code>autonomousDatabasesId</code></a></td>
    <td></td>
    <td>Gets the refreshable clones for a given Autonomous Database.</td>
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
<tr id="parameter-autonomousDatabasesId">
    <td><CopyableCode code="autonomousDatabasesId" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_refreshable_clones"
    values={[
        { label: 'get_refreshable_clones', value: 'get_refreshable_clones' }
    ]}
>
<TabItem value="get_refreshable_clones">

Gets the refreshable clones for a given Autonomous Database.

```sql
SELECT
autonomousDatabaseRefreshableClones
FROM google.oracledatabase.autonomous_databases_refreshable_clones
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND autonomousDatabasesId = '{{ autonomousDatabasesId }}' -- required
;
```
</TabItem>
</Tabs>
