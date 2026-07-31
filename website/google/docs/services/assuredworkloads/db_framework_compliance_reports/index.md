--- 
title: db_framework_compliance_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - db_framework_compliance_reports
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

Creates, updates, deletes, gets or lists a <code>db_framework_compliance_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_framework_compliance_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.assuredworkloads.db_framework_compliance_reports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="fetch"
    values={[
        { label: 'fetch', value: 'fetch' }
    ]}
>
<TabItem value="fetch">

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
    <td>The name of the framework compliance report.</td>
</tr>
<tr>
    <td><CopyableCode code="controlAssessmentDetails" /></td>
    <td><code>object</code></td>
    <td>The control assessment details of the framework. (id: GoogleCloudAssuredworkloadsV1ControlAssessmentDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="framework" /></td>
    <td><code>string</code></td>
    <td>The name of the framework.</td>
</tr>
<tr>
    <td><CopyableCode code="frameworkCategories" /></td>
    <td><code>array</code></td>
    <td>The list of framework categories supported.</td>
</tr>
<tr>
    <td><CopyableCode code="frameworkDescription" /></td>
    <td><code>string</code></td>
    <td>The description of the framework.</td>
</tr>
<tr>
    <td><CopyableCode code="frameworkDisplayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The display name for the framework.</td>
</tr>
<tr>
    <td><CopyableCode code="frameworkType" /></td>
    <td><code>string</code></td>
    <td>The type of the framework. (FRAMEWORK_TYPE_UNSPECIFIED, BUILT_IN, CUSTOM)</td>
</tr>
<tr>
    <td><CopyableCode code="majorRevisionId" /></td>
    <td><code>string (int64)</code></td>
    <td>The latest major revision ID of the framework.</td>
</tr>
<tr>
    <td><CopyableCode code="minorRevisionId" /></td>
    <td><code>string (int64)</code></td>
    <td>The latest minor revision ID of the latest major revision of the framework.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedCloudProviders" /></td>
    <td><code>array</code></td>
    <td>The list of cloud providers that are supported by the framework.</td>
</tr>
<tr>
    <td><CopyableCode code="targetResourceDetails" /></td>
    <td><code>array</code></td>
    <td>The target resource details of the framework.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last updated time of the report.</td>
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
    <td><a href="#fetch"><CopyableCode code="fetch" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dbFrameworkComplianceReportsId"><code>dbFrameworkComplianceReportsId</code></a></td>
    <td><a href="#parameter-endTime"><code>endTime</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Fetches the framework compliance report for a given scope.</td>
</tr>
<tr>
    <td><a href="#aggregate"><CopyableCode code="aggregate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dbFrameworkComplianceReportsId"><code>dbFrameworkComplianceReportsId</code></a></td>
    <td><a href="#parameter-interval.startTime"><code>interval.startTime</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-interval.endTime"><code>interval.endTime</code></a></td>
    <td>Gets the aggregated compliance report over time for a given scope.</td>
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
<tr id="parameter-endTime">
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-interval.endTime">
    <td><CopyableCode code="interval.endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr id="parameter-interval.startTime">
    <td><CopyableCode code="interval.startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="fetch"
    values={[
        { label: 'fetch', value: 'fetch' }
    ]}
>
<TabItem value="fetch">

Fetches the framework compliance report for a given scope.

```sql
SELECT
name,
controlAssessmentDetails,
framework,
frameworkCategories,
frameworkDescription,
frameworkDisplayName,
frameworkType,
majorRevisionId,
minorRevisionId,
supportedCloudProviders,
targetResourceDetails,
updateTime
FROM google.assuredworkloads.db_framework_compliance_reports
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dbFrameworkComplianceReportsId = '{{ dbFrameworkComplianceReportsId }}' -- required
AND endTime = '{{ endTime }}'
AND filter = '{{ filter }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="aggregate"
    values={[
        { label: 'aggregate', value: 'aggregate' }
    ]}
>
<TabItem value="aggregate">

Gets the aggregated compliance report over time for a given scope.

```sql
EXEC google.assuredworkloads.db_framework_compliance_reports.aggregate 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dbFrameworkComplianceReportsId='{{ dbFrameworkComplianceReportsId }}' --required, 
@interval.startTime='{{ interval.startTime }}', 
@filter='{{ filter }}', 
@interval.endTime='{{ interval.endTime }}'
;
```
</TabItem>
</Tabs>
