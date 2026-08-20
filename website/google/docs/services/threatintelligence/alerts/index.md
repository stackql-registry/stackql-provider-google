--- 
title: alerts
hide_title: false
hide_table_of_contents: false
keywords:
  - alerts
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

Creates, updates, deletes, gets or lists an <code>alerts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alerts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.threatintelligence.alerts" /></td></tr>
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
    <td>Identifier. Server generated name for the alert. format is projects/&#123;project&#125;/alerts/&#123;alert&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="aiSummary" /></td>
    <td><code>string</code></td>
    <td>Optional. AI summary of the alert.</td>
</tr>
<tr>
    <td><CopyableCode code="audit" /></td>
    <td><code>object</code></td>
    <td>Output only. Audit information for the alert. (id: Audit)</td>
</tr>
<tr>
    <td><CopyableCode code="configurations" /></td>
    <td><code>array</code></td>
    <td>Output only. The resource names of the Configurations bound to this alert. Format: projects/&#123;project&#125;/configurations/&#123;configuration&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="detail" /></td>
    <td><code>object</code></td>
    <td>Output only. Details object for the alert, not all alerts will have a details object. (id: AlertDetail)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. A short title for the alert.</td>
</tr>
<tr>
    <td><CopyableCode code="duplicateOf" /></td>
    <td><code>string</code></td>
    <td>Output only. alert name of the alert this alert is a duplicate of. Format: projects/&#123;project&#125;/alerts/&#123;alert&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="duplicatedBy" /></td>
    <td><code>array</code></td>
    <td>Output only. alert names of the alerts that are duplicates of this alert. Format: projects/&#123;project&#125;/alerts/&#123;alert&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. If included when updating an alert, this should be set to the current etag of the alert. If the etags do not match, the update will be rejected and an ABORTED error will be returned.</td>
</tr>
<tr>
    <td><CopyableCode code="externalId" /></td>
    <td><code>string</code></td>
    <td>Output only. External ID for the alert. This is used internally to provide protection against out of order updates.</td>
</tr>
<tr>
    <td><CopyableCode code="findingCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The number of findings associated with this alert.</td>
</tr>
<tr>
    <td><CopyableCode code="findings" /></td>
    <td><code>array</code></td>
    <td>Output only. Findings that are covered by this alert.</td>
</tr>
<tr>
    <td><CopyableCode code="priorityAnalysis" /></td>
    <td><code>object</code></td>
    <td>Output only. High-Precision Priority Analysis for the alert. (id: PriorityAnalysis)</td>
</tr>
<tr>
    <td><CopyableCode code="relevanceAnalysis" /></td>
    <td><code>object</code></td>
    <td>Output only. High-Precision Relevance Analysis verdict for the alert. (id: RelevanceAnalysis)</td>
</tr>
<tr>
    <td><CopyableCode code="severityAnalysis" /></td>
    <td><code>object</code></td>
    <td>Output only. High-Precision Severity Analysis for the alert. (id: SeverityAnalysis)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the alert. (STATE_UNSPECIFIED, NEW, READ, TRIAGED, ESCALATED, RESOLVED, DUPLICATE, FALSE_POSITIVE, NOT_ACTIONABLE, BENIGN, TRACKED_EXTERNALLY)</td>
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
    <td>Identifier. Server generated name for the alert. format is projects/&#123;project&#125;/alerts/&#123;alert&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="aiSummary" /></td>
    <td><code>string</code></td>
    <td>Optional. AI summary of the alert.</td>
</tr>
<tr>
    <td><CopyableCode code="audit" /></td>
    <td><code>object</code></td>
    <td>Output only. Audit information for the alert. (id: Audit)</td>
</tr>
<tr>
    <td><CopyableCode code="configurations" /></td>
    <td><code>array</code></td>
    <td>Output only. The resource names of the Configurations bound to this alert. Format: projects/&#123;project&#125;/configurations/&#123;configuration&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="detail" /></td>
    <td><code>object</code></td>
    <td>Output only. Details object for the alert, not all alerts will have a details object. (id: AlertDetail)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. A short title for the alert.</td>
</tr>
<tr>
    <td><CopyableCode code="duplicateOf" /></td>
    <td><code>string</code></td>
    <td>Output only. alert name of the alert this alert is a duplicate of. Format: projects/&#123;project&#125;/alerts/&#123;alert&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="duplicatedBy" /></td>
    <td><code>array</code></td>
    <td>Output only. alert names of the alerts that are duplicates of this alert. Format: projects/&#123;project&#125;/alerts/&#123;alert&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. If included when updating an alert, this should be set to the current etag of the alert. If the etags do not match, the update will be rejected and an ABORTED error will be returned.</td>
</tr>
<tr>
    <td><CopyableCode code="externalId" /></td>
    <td><code>string</code></td>
    <td>Output only. External ID for the alert. This is used internally to provide protection against out of order updates.</td>
</tr>
<tr>
    <td><CopyableCode code="findingCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The number of findings associated with this alert.</td>
</tr>
<tr>
    <td><CopyableCode code="findings" /></td>
    <td><code>array</code></td>
    <td>Output only. Findings that are covered by this alert.</td>
</tr>
<tr>
    <td><CopyableCode code="priorityAnalysis" /></td>
    <td><code>object</code></td>
    <td>Output only. High-Precision Priority Analysis for the alert. (id: PriorityAnalysis)</td>
</tr>
<tr>
    <td><CopyableCode code="relevanceAnalysis" /></td>
    <td><code>object</code></td>
    <td>Output only. High-Precision Relevance Analysis verdict for the alert. (id: RelevanceAnalysis)</td>
</tr>
<tr>
    <td><CopyableCode code="severityAnalysis" /></td>
    <td><code>object</code></td>
    <td>Output only. High-Precision Severity Analysis for the alert. (id: SeverityAnalysis)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the alert. (STATE_UNSPECIFIED, NEW, READ, TRIAGED, ESCALATED, RESOLVED, DUPLICATE, FALSE_POSITIVE, NOT_ACTIONABLE, BENIGN, TRACKED_EXTERNALLY)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-alertsId"><code>alertsId</code></a></td>
    <td></td>
    <td>Get an alert by name.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Get a list of alerts that meet the filter criteria.</td>
</tr>
<tr>
    <td><a href="#benign"><CopyableCode code="benign" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-alertsId"><code>alertsId</code></a></td>
    <td></td>
    <td>Marks an alert as benign - BENIGN.</td>
</tr>
<tr>
    <td><a href="#duplicate"><CopyableCode code="duplicate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-alertsId"><code>alertsId</code></a></td>
    <td></td>
    <td>Marks an alert as a duplicate of another alert. - DUPLICATE.</td>
</tr>
<tr>
    <td><a href="#enumerate_facets"><CopyableCode code="enumerate_facets" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a></td>
    <td>EnumerateAlertFacets returns the facets and the number of alerts that meet the filter criteria and have that value for each facet.</td>
</tr>
<tr>
    <td><a href="#escalate"><CopyableCode code="escalate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-alertsId"><code>alertsId</code></a></td>
    <td></td>
    <td>Marks an alert as escalated - ESCALATED.</td>
</tr>
<tr>
    <td><a href="#false_positive"><CopyableCode code="false_positive" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-alertsId"><code>alertsId</code></a></td>
    <td></td>
    <td>Marks an alert as a false positive - FALSE_POSITIVE.</td>
</tr>
<tr>
    <td><a href="#not_actionable"><CopyableCode code="not_actionable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-alertsId"><code>alertsId</code></a></td>
    <td></td>
    <td>Marks an alert as not actionable - NOT_ACTIONABLE.</td>
</tr>
<tr>
    <td><a href="#read"><CopyableCode code="read" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-alertsId"><code>alertsId</code></a></td>
    <td></td>
    <td>Marks an alert as read - READ.</td>
</tr>
<tr>
    <td><a href="#resolve"><CopyableCode code="resolve" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-alertsId"><code>alertsId</code></a></td>
    <td></td>
    <td>Marks an alert to closed state - RESOLVED.</td>
</tr>
<tr>
    <td><a href="#track_externally"><CopyableCode code="track_externally" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-alertsId"><code>alertsId</code></a></td>
    <td></td>
    <td>Marks an alert as tracked externally - TRACKED_EXTERNALLY.</td>
</tr>
<tr>
    <td><a href="#triage"><CopyableCode code="triage" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-alertsId"><code>alertsId</code></a></td>
    <td></td>
    <td>Marks an alert as triaged - TRIAGED.</td>
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
<tr id="parameter-alertsId">
    <td><CopyableCode code="alertsId" /></td>
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

Get an alert by name.

```sql
SELECT
name,
aiSummary,
audit,
configurations,
detail,
displayName,
duplicateOf,
duplicatedBy,
etag,
externalId,
findingCount,
findings,
priorityAnalysis,
relevanceAnalysis,
severityAnalysis,
state
FROM google.threatintelligence.alerts
WHERE projectsId = '{{ projectsId }}' -- required
AND alertsId = '{{ alertsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Get a list of alerts that meet the filter criteria.

```sql
SELECT
name,
aiSummary,
audit,
configurations,
detail,
displayName,
duplicateOf,
duplicatedBy,
etag,
externalId,
findingCount,
findings,
priorityAnalysis,
relevanceAnalysis,
severityAnalysis,
state
FROM google.threatintelligence.alerts
WHERE projectsId = '{{ projectsId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="benign"
    values={[
        { label: 'benign', value: 'benign' },
        { label: 'duplicate', value: 'duplicate' },
        { label: 'enumerate_facets', value: 'enumerate_facets' },
        { label: 'escalate', value: 'escalate' },
        { label: 'false_positive', value: 'false_positive' },
        { label: 'not_actionable', value: 'not_actionable' },
        { label: 'read', value: 'read' },
        { label: 'resolve', value: 'resolve' },
        { label: 'track_externally', value: 'track_externally' },
        { label: 'triage', value: 'triage' }
    ]}
>
<TabItem value="benign">

Marks an alert as benign - BENIGN.

```sql
EXEC google.threatintelligence.alerts.benign 
@projectsId='{{ projectsId }}' --required, 
@alertsId='{{ alertsId }}' --required
;
```
</TabItem>
<TabItem value="duplicate">

Marks an alert as a duplicate of another alert. - DUPLICATE.

```sql
EXEC google.threatintelligence.alerts.duplicate 
@projectsId='{{ projectsId }}' --required, 
@alertsId='{{ alertsId }}' --required 
@@json=
'{
"duplicateOf": "{{ duplicateOf }}"
}'
;
```
</TabItem>
<TabItem value="enumerate_facets">

EnumerateAlertFacets returns the facets and the number of alerts that meet the filter criteria and have that value for each facet.

```sql
EXEC google.threatintelligence.alerts.enumerate_facets 
@projectsId='{{ projectsId }}' --required, 
@filter='{{ filter }}'
;
```
</TabItem>
<TabItem value="escalate">

Marks an alert as escalated - ESCALATED.

```sql
EXEC google.threatintelligence.alerts.escalate 
@projectsId='{{ projectsId }}' --required, 
@alertsId='{{ alertsId }}' --required
;
```
</TabItem>
<TabItem value="false_positive">

Marks an alert as a false positive - FALSE_POSITIVE.

```sql
EXEC google.threatintelligence.alerts.false_positive 
@projectsId='{{ projectsId }}' --required, 
@alertsId='{{ alertsId }}' --required
;
```
</TabItem>
<TabItem value="not_actionable">

Marks an alert as not actionable - NOT_ACTIONABLE.

```sql
EXEC google.threatintelligence.alerts.not_actionable 
@projectsId='{{ projectsId }}' --required, 
@alertsId='{{ alertsId }}' --required
;
```
</TabItem>
<TabItem value="read">

Marks an alert as read - READ.

```sql
EXEC google.threatintelligence.alerts.read 
@projectsId='{{ projectsId }}' --required, 
@alertsId='{{ alertsId }}' --required
;
```
</TabItem>
<TabItem value="resolve">

Marks an alert to closed state - RESOLVED.

```sql
EXEC google.threatintelligence.alerts.resolve 
@projectsId='{{ projectsId }}' --required, 
@alertsId='{{ alertsId }}' --required
;
```
</TabItem>
<TabItem value="track_externally">

Marks an alert as tracked externally - TRACKED_EXTERNALLY.

```sql
EXEC google.threatintelligence.alerts.track_externally 
@projectsId='{{ projectsId }}' --required, 
@alertsId='{{ alertsId }}' --required
;
```
</TabItem>
<TabItem value="triage">

Marks an alert as triaged - TRIAGED.

```sql
EXEC google.threatintelligence.alerts.triage 
@projectsId='{{ projectsId }}' --required, 
@alertsId='{{ alertsId }}' --required
;
```
</TabItem>
</Tabs>
