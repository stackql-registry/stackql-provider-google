--- 
title: reports
hide_title: false
hide_table_of_contents: false
keywords:
  - reports
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

Creates, updates, deletes, gets or lists a <code>reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.firebasecrashlytics.reports" /></td></tr>
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
    <td>The name of the report. Format: "projects/&#123;project&#125;/apps/&#123;app_id&#125;/reports/&#123;report&#125;".</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. The displayable title of the report.</td>
</tr>
<tr>
    <td><CopyableCode code="groups" /></td>
    <td><code>array</code></td>
    <td>Aggregate event statistics in the report will be grouped by a dimension, such as by issue or by version. The response contains one element per group, and all ReportGroup messages will have the same parent field.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Output only. A page token used to retrieve additional report groups. If this field is not present, there are no subsequent pages available to retrieve.</td>
</tr>
<tr>
    <td><CopyableCode code="totalSize" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The total number of groups retrievable by the request.</td>
</tr>
<tr>
    <td><CopyableCode code="usage" /></td>
    <td><code>string</code></td>
    <td>Usage instructions for the report with a description of the result metrics. This field contains a description of the underlying query and describes the expected response data with any known caveats. This string can be displayed in the UI of any integration that offers comprehensive access to all Crashlytics reports.</td>
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
    <td><CopyableCode code="reports" /></td>
    <td><code>array</code></td>
    <td>The report objects returned will contain their names and usage instructions, but include no results. Use the `GetReport` method to run the report and obtain the paged results.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-reportsId"><code>reportsId</code></a></td>
    <td><a href="#parameter-filter.device.displayNames"><code>filter.device.displayNames</code></a>, <a href="#parameter-filter.issue.signals"><code>filter.issue.signals</code></a>, <a href="#parameter-filter.issue.variantId"><code>filter.issue.variantId</code></a>, <a href="#parameter-filter.issue.content"><code>filter.issue.content</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter.issue.states"><code>filter.issue.states</code></a>, <a href="#parameter-filter.issue.state"><code>filter.issue.state</code></a>, <a href="#parameter-filter.interval.endTime"><code>filter.interval.endTime</code></a>, <a href="#parameter-filter.device.formFactors"><code>filter.device.formFactors</code></a>, <a href="#parameter-granularity"><code>granularity</code></a>, <a href="#parameter-filter.issue.errorTypes"><code>filter.issue.errorTypes</code></a>, <a href="#parameter-filter.interval.startTime"><code>filter.interval.startTime</code></a>, <a href="#parameter-filter.version.displayNames"><code>filter.version.displayNames</code></a>, <a href="#parameter-filter.issue.id"><code>filter.issue.id</code></a>, <a href="#parameter-filter.browser.displayNames"><code>filter.browser.displayNames</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter.operatingSystem.displayNames"><code>filter.operatingSystem.displayNames</code></a></td>
    <td>Get a report with its computed results.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>List all of the available reports.</td>
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
<tr id="parameter-reportsId">
    <td><CopyableCode code="reportsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter.browser.displayNames">
    <td><CopyableCode code="filter.browser.displayNames" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter.device.displayNames">
    <td><CopyableCode code="filter.device.displayNames" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter.device.formFactors">
    <td><CopyableCode code="filter.device.formFactors" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter.interval.endTime">
    <td><CopyableCode code="filter.interval.endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr id="parameter-filter.interval.startTime">
    <td><CopyableCode code="filter.interval.startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr id="parameter-filter.issue.content">
    <td><CopyableCode code="filter.issue.content" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter.issue.errorTypes">
    <td><CopyableCode code="filter.issue.errorTypes" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter.issue.id">
    <td><CopyableCode code="filter.issue.id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter.issue.signals">
    <td><CopyableCode code="filter.issue.signals" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter.issue.state">
    <td><CopyableCode code="filter.issue.state" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter.issue.states">
    <td><CopyableCode code="filter.issue.states" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter.issue.variantId">
    <td><CopyableCode code="filter.issue.variantId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter.operatingSystem.displayNames">
    <td><CopyableCode code="filter.operatingSystem.displayNames" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter.version.displayNames">
    <td><CopyableCode code="filter.version.displayNames" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-granularity">
    <td><CopyableCode code="granularity" /></td>
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

Get a report with its computed results.

```sql
SELECT
name,
displayName,
groups,
nextPageToken,
totalSize,
usage
FROM firebase.firebasecrashlytics.reports
WHERE projectsId = '{{ projectsId }}' -- required
AND appsId = '{{ appsId }}' -- required
AND reportsId = '{{ reportsId }}' -- required
AND filter.device.displayNames = '{{ filter.device.displayNames }}'
AND filter.issue.signals = '{{ filter.issue.signals }}'
AND filter.issue.variantId = '{{ filter.issue.variantId }}'
AND filter.issue.content = '{{ filter.issue.content }}'
AND pageToken = '{{ pageToken }}'
AND filter.issue.states = '{{ filter.issue.states }}'
AND filter.issue.state = '{{ filter.issue.state }}'
AND filter.interval.endTime = '{{ filter.interval.endTime }}'
AND filter.device.formFactors = '{{ filter.device.formFactors }}'
AND granularity = '{{ granularity }}'
AND filter.issue.errorTypes = '{{ filter.issue.errorTypes }}'
AND filter.interval.startTime = '{{ filter.interval.startTime }}'
AND filter.version.displayNames = '{{ filter.version.displayNames }}'
AND filter.issue.id = '{{ filter.issue.id }}'
AND filter.browser.displayNames = '{{ filter.browser.displayNames }}'
AND pageSize = '{{ pageSize }}'
AND filter.operatingSystem.displayNames = '{{ filter.operatingSystem.displayNames }}'
;
```
</TabItem>
<TabItem value="list">

List all of the available reports.

```sql
SELECT
reports
FROM firebase.firebasecrashlytics.reports
WHERE projectsId = '{{ projectsId }}' -- required
AND appsId = '{{ appsId }}' -- required
;
```
</TabItem>
</Tabs>
