--- 
title: status
hide_title: false
hide_table_of_contents: false
keywords:
  - status
  - contentwarehouse
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

Creates, updates, deletes, gets or lists a <code>status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.contentwarehouse.status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_status"
    values={[
        { label: 'get_status', value: 'get_status' }
    ]}
>
<TabItem value="get_status">

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
    <td><CopyableCode code="accessControlMode" /></td>
    <td><code>string</code></td>
    <td>Access control mode. (ACL_MODE_UNKNOWN, ACL_MODE_UNIVERSAL_ACCESS, ACL_MODE_DOCUMENT_LEVEL_ACCESS_CONTROL_BYOID, ACL_MODE_DOCUMENT_LEVEL_ACCESS_CONTROL_GCI)</td>
</tr>
<tr>
    <td><CopyableCode code="databaseType" /></td>
    <td><code>string</code></td>
    <td>Database type. (DB_UNKNOWN, DB_INFRA_SPANNER, DB_CLOUD_SQL_POSTGRES)</td>
</tr>
<tr>
    <td><CopyableCode code="documentCreatorDefaultRole" /></td>
    <td><code>string</code></td>
    <td>The default role for the person who create a document.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The location of the queried project.</td>
</tr>
<tr>
    <td><CopyableCode code="qaEnabled" /></td>
    <td><code>boolean</code></td>
    <td>If the qa is enabled on this project.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the project. (PROJECT_STATE_UNSPECIFIED, PROJECT_STATE_PENDING, PROJECT_STATE_COMPLETED, PROJECT_STATE_FAILED, PROJECT_STATE_DELETING, PROJECT_STATE_DELETING_FAILED, PROJECT_STATE_DELETED, PROJECT_STATE_NOT_FOUND)</td>
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
    <td><a href="#get_status"><CopyableCode code="get_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Get the project status.</td>
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
    defaultValue="get_status"
    values={[
        { label: 'get_status', value: 'get_status' }
    ]}
>
<TabItem value="get_status">

Get the project status.

```sql
SELECT
accessControlMode,
databaseType,
documentCreatorDefaultRole,
location,
qaEnabled,
state
FROM google.contentwarehouse.status
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
;
```
</TabItem>
</Tabs>
