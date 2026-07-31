--- 
title: users_crash_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - users_crash_reports
  - firebasecrashlytics
  - firebase
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage firebase resources using SQL
custom_edit_url: null
image: /img/stackql-firebase-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>users_crash_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users_crash_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.firebasecrashlytics.users_crash_reports" /></td></tr>
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
    <td><a href="#delete_crash_reports"><CopyableCode code="delete_crash_reports" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-usersId"><code>usersId</code></a></td>
    <td></td>
    <td>Enqueues a request to permanently remove crash reports associated with the specified user. All reports belonging to the specified user will be deleted typically within 24 hours of receiving the crash report.</td>
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
<tr id="parameter-appsId">
    <td><CopyableCode code="appsId" /></td>
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
</tbody>
</table>

## `DELETE` examples

<Tabs
    defaultValue="delete_crash_reports"
    values={[
        { label: 'delete_crash_reports', value: 'delete_crash_reports' }
    ]}
>
<TabItem value="delete_crash_reports">

Enqueues a request to permanently remove crash reports associated with the specified user. All reports belonging to the specified user will be deleted typically within 24 hours of receiving the crash report.

```sql
DELETE FROM firebase.firebasecrashlytics.users_crash_reports
WHERE projectsId = '{{ projectsId }}' --required
AND appsId = '{{ appsId }}' --required
AND usersId = '{{ usersId }}' --required
;
```
</TabItem>
</Tabs>
