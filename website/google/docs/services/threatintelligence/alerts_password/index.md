--- 
title: alerts_password
hide_title: false
hide_table_of_contents: false
keywords:
  - alerts_password
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

Creates, updates, deletes, gets or lists an <code>alerts_password</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alerts_password" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.threatintelligence.alerts_password" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_password"
    values={[
        { label: 'get_password', value: 'get_password' }
    ]}
>
<TabItem value="get_password">

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
    <td><a href="#get_password"><CopyableCode code="get_password" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-alertsId"><code>alertsId</code></a></td>
    <td></td>
    <td>Get the decrypted password of an alert.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_password"
    values={[
        { label: 'get_password', value: 'get_password' }
    ]}
>
<TabItem value="get_password">

Get the decrypted password of an alert.

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
FROM google.threatintelligence.alerts_password
WHERE projectsId = '{{ projectsId }}' -- required
AND alertsId = '{{ alertsId }}' -- required
;
```
</TabItem>
</Tabs>
