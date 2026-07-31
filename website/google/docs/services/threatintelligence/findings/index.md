--- 
title: findings
hide_title: false
hide_table_of_contents: false
keywords:
  - findings
  - threatintelligence
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

Creates, updates, deletes, gets or lists a <code>findings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="findings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.threatintelligence.findings" /></td></tr>
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
    <td>Identifier. Server generated name for the finding (leave clear during creation). Format: projects/&#123;project&#125;/findings/&#123;finding&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="aiSummary" /></td>
    <td><code>string</code></td>
    <td>Optional. AI summary of the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="alert" /></td>
    <td><code>string</code></td>
    <td>Optional. Name of the alert that this finding is bound to.</td>
</tr>
<tr>
    <td><CopyableCode code="audit" /></td>
    <td><code>object</code></td>
    <td>Output only. Audit data about the finding. (id: Audit)</td>
</tr>
<tr>
    <td><CopyableCode code="configurations" /></td>
    <td><code>array</code></td>
    <td>Optional. Configuration names that are bound to this finding.</td>
</tr>
<tr>
    <td><CopyableCode code="detail" /></td>
    <td><code>object</code></td>
    <td>Required. Holder of the domain specific details of the finding. (id: FindingDetail)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. A short descriptive title for the finding &lt;= 250 chars. EX: "Actor 'baddy' offering $1000 for credentials of 'goodguy'".</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>Required. Logical source of this finding (name of the sub-engine).</td>
</tr>
<tr>
    <td><CopyableCode code="relevanceAnalysis" /></td>
    <td><code>object</code></td>
    <td>Output only. High-Precision Relevance Analysis verdict for the finding. (id: RelevanceAnalysis)</td>
</tr>
<tr>
    <td><CopyableCode code="reoccurrenceTimes" /></td>
    <td><code>array</code></td>
    <td>Output only. When identical finding (same labels and same details) has re-occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>number (float)</code></td>
    <td>Optional. Deprecated: Use the `severity_analysis` field instead. Base severity score from the finding source.</td>
</tr>
<tr>
    <td><CopyableCode code="severityAnalysis" /></td>
    <td><code>object</code></td>
    <td>Output only. High-Precision Severity Analysis verdict for the finding. (id: SeverityAnalysis)</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Identifier. Server generated name for the finding (leave clear during creation). Format: projects/&#123;project&#125;/findings/&#123;finding&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="aiSummary" /></td>
    <td><code>string</code></td>
    <td>Optional. AI summary of the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="alert" /></td>
    <td><code>string</code></td>
    <td>Optional. Name of the alert that this finding is bound to.</td>
</tr>
<tr>
    <td><CopyableCode code="audit" /></td>
    <td><code>object</code></td>
    <td>Output only. Audit data about the finding. (id: Audit)</td>
</tr>
<tr>
    <td><CopyableCode code="configurations" /></td>
    <td><code>array</code></td>
    <td>Optional. Configuration names that are bound to this finding.</td>
</tr>
<tr>
    <td><CopyableCode code="detail" /></td>
    <td><code>object</code></td>
    <td>Required. Holder of the domain specific details of the finding. (id: FindingDetail)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. A short descriptive title for the finding &lt;= 250 chars. EX: "Actor 'baddy' offering $1000 for credentials of 'goodguy'".</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>Required. Logical source of this finding (name of the sub-engine).</td>
</tr>
<tr>
    <td><CopyableCode code="relevanceAnalysis" /></td>
    <td><code>object</code></td>
    <td>Output only. High-Precision Relevance Analysis verdict for the finding. (id: RelevanceAnalysis)</td>
</tr>
<tr>
    <td><CopyableCode code="reoccurrenceTimes" /></td>
    <td><code>array</code></td>
    <td>Output only. When identical finding (same labels and same details) has re-occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>number (float)</code></td>
    <td>Optional. Deprecated: Use the `severity_analysis` field instead. Base severity score from the finding source.</td>
</tr>
<tr>
    <td><CopyableCode code="severityAnalysis" /></td>
    <td><code>object</code></td>
    <td>Output only. High-Precision Severity Analysis verdict for the finding. (id: SeverityAnalysis)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-findingsId"><code>findingsId</code></a></td>
    <td></td>
    <td>Get a finding by name. The `name` field should have the format: `projects/&#123;project&#125;/findings/&#123;finding&#125;`</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Get a list of findings that meet the filter criteria. The `parent` field in ListFindingsRequest should have the format: projects/&#123;project&#125;</td>
</tr>
<tr>
    <td><a href="#search"><CopyableCode code="search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-query"><code>query</code></a></td>
    <td>SearchFindings is a more powerful version of ListFindings that supports complex queries like "findings for alerts" using functions such as `has_alert` in the query string. The `parent` field in SearchFindingsRequest should have the format: projects/&#123;project&#125; Example to search for findings for a specific issue: `has_alert("name=\"projects/gti-12345/alerts/alert-12345\"")`</td>
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
<tr id="parameter-findingsId">
    <td><CopyableCode code="findingsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
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
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
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

Get a finding by name. The `name` field should have the format: `projects/&#123;project&#125;/findings/&#123;finding&#125;`

```sql
SELECT
name,
aiSummary,
alert,
audit,
configurations,
detail,
displayName,
provider,
relevanceAnalysis,
reoccurrenceTimes,
severity,
severityAnalysis
FROM google.threatintelligence.findings
WHERE projectsId = '{{ projectsId }}' -- required
AND findingsId = '{{ findingsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Get a list of findings that meet the filter criteria. The `parent` field in ListFindingsRequest should have the format: projects/&#123;project&#125;

```sql
SELECT
name,
aiSummary,
alert,
audit,
configurations,
detail,
displayName,
provider,
relevanceAnalysis,
reoccurrenceTimes,
severity,
severityAnalysis
FROM google.threatintelligence.findings
WHERE projectsId = '{{ projectsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="search"
    values={[
        { label: 'search', value: 'search' }
    ]}
>
<TabItem value="search">

SearchFindings is a more powerful version of ListFindings that supports complex queries like "findings for alerts" using functions such as `has_alert` in the query string. The `parent` field in SearchFindingsRequest should have the format: projects/&#123;project&#125; Example to search for findings for a specific issue: `has_alert("name=\"projects/gti-12345/alerts/alert-12345\"")`

```sql
EXEC google.threatintelligence.findings.search 
@projectsId='{{ projectsId }}' --required, 
@orderBy='{{ orderBy }}', 
@pageToken='{{ pageToken }}', 
@pageSize='{{ pageSize }}', 
@query='{{ query }}'
;
```
</TabItem>
</Tabs>
