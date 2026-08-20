--- 
title: db_control_compliance_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - db_control_compliance_summaries
  - assuredworkloads
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

Creates, updates, deletes, gets or lists a <code>db_control_compliance_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_control_compliance_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.assuredworkloads.db_control_compliance_summaries" /></td></tr>
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
    <td>Identifier. The name of the control compliance summary.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudControlReports" /></td>
    <td><code>array</code></td>
    <td>The list of cloud control reports.</td>
</tr>
<tr>
    <td><CopyableCode code="complianceFrameworks" /></td>
    <td><code>array</code></td>
    <td>The list of compliance frameworks that the control belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="control" /></td>
    <td><code>string</code></td>
    <td>The name of the control.</td>
</tr>
<tr>
    <td><CopyableCode code="controlResponsibilityType" /></td>
    <td><code>string</code></td>
    <td>The responsibility type for the control. (REGULATORY_CONTROL_RESPONSIBILITY_TYPE_UNSPECIFIED, GOOGLE, CUSTOMER, SHARED)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the control.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the control.</td>
</tr>
<tr>
    <td><CopyableCode code="isFakeControl" /></td>
    <td><code>boolean</code></td>
    <td>Whether the control is a fake control. Fake controls are created and mapped to cloud controls that don't belong to a control group.</td>
</tr>
<tr>
    <td><CopyableCode code="overallEvaluationState" /></td>
    <td><code>string</code></td>
    <td>Output only. The overall evaluation status of the control. (EVALUATION_STATE_UNSPECIFIED, EVALUATION_STATE_PASSED, EVALUATION_STATE_FAILED, EVALUATION_STATE_NOT_ASSESSED)</td>
</tr>
<tr>
    <td><CopyableCode code="similarControls" /></td>
    <td><code>array</code></td>
    <td>The list of similar controls.</td>
</tr>
<tr>
    <td><CopyableCode code="totalFindingsCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The total number of findings for the control.</td>
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
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dbFrameworkComplianceReportsId"><code>dbFrameworkComplianceReportsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the control compliance summary for a given scope.</td>
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
<tr id="parameter-dbFrameworkComplianceReportsId">
    <td><CopyableCode code="dbFrameworkComplianceReportsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-foldersId">
    <td><CopyableCode code="foldersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Lists the control compliance summary for a given scope.

```sql
SELECT
name,
cloudControlReports,
complianceFrameworks,
control,
controlResponsibilityType,
description,
displayName,
isFakeControl,
overallEvaluationState,
similarControls,
totalFindingsCount
FROM google.assuredworkloads.db_control_compliance_summaries
WHERE foldersId = '{{ foldersId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dbFrameworkComplianceReportsId = '{{ dbFrameworkComplianceReportsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>
