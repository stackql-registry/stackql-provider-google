--- 
title: db_framework_compliance_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - db_framework_compliance_summaries
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

Creates, updates, deletes, gets or lists a <code>db_framework_compliance_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_framework_compliance_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.assuredworkloads.db_framework_compliance_summaries" /></td></tr>
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
    <td>Identifier. The name of the framework compliance summary.</td>
</tr>
<tr>
    <td><CopyableCode code="controlAssessmentDetails" /></td>
    <td><code>object</code></td>
    <td>The control assessment details of the framework. (id: GoogleCloudAssuredworkloadsV1ControlAssessmentDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="controlsPassingTrend" /></td>
    <td><code>object</code></td>
    <td>Output only. The trend of controls that are passing for the given duration. (id: GoogleCloudAssuredworkloadsV1Trend)</td>
</tr>
<tr>
    <td><CopyableCode code="findingCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The count of the findings generated against the framework.</td>
</tr>
<tr>
    <td><CopyableCode code="framework" /></td>
    <td><code>string</code></td>
    <td>The name of the framework.</td>
</tr>
<tr>
    <td><CopyableCode code="frameworkCategories" /></td>
    <td><code>array</code></td>
    <td>The list of framework categories supported by the framework.</td>
</tr>
<tr>
    <td><CopyableCode code="frameworkDisplayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The display name for the framework.</td>
</tr>
<tr>
    <td><CopyableCode code="frameworkType" /></td>
    <td><code>string</code></td>
    <td>The type of framework. (FRAMEWORK_TYPE_UNSPECIFIED, BUILT_IN, CUSTOM)</td>
</tr>
<tr>
    <td><CopyableCode code="majorRevisionId" /></td>
    <td><code>string (int64)</code></td>
    <td>The major revision ID of the framework.</td>
</tr>
<tr>
    <td><CopyableCode code="minorRevisionId" /></td>
    <td><code>string (int64)</code></td>
    <td>The minor revision ID of the framework.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedCloudProviders" /></td>
    <td><code>array</code></td>
    <td>The list of cloud providers supported by the framework.</td>
</tr>
<tr>
    <td><CopyableCode code="targetResourceDetails" /></td>
    <td><code>array</code></td>
    <td>The target resource details for the framework.</td>
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
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Lists the framework compliance summary for a given scope.</td>
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
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
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

Lists the framework compliance summary for a given scope.

```sql
SELECT
name,
controlAssessmentDetails,
controlsPassingTrend,
findingCount,
framework,
frameworkCategories,
frameworkDisplayName,
frameworkType,
majorRevisionId,
minorRevisionId,
supportedCloudProviders,
targetResourceDetails
FROM google.assuredworkloads.db_framework_compliance_summaries
WHERE foldersId = '{{ foldersId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND view = '{{ view }}'
;
```
</TabItem>
</Tabs>
