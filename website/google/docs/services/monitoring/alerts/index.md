--- 
title: alerts
hide_title: false
hide_table_of_contents: false
keywords:
  - alerts
  - monitoring
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.monitoring.alerts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_alerts_get"
    values={[
        { label: 'projects_alerts_get', value: 'projects_alerts_get' },
        { label: 'projects_alerts_list', value: 'projects_alerts_list' }
    ]}
>
<TabItem value="projects_alerts_get">

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
    <td>Identifier. The name of the alert.The format is: projects/[PROJECT_ID_OR_NUMBER]/alerts/[ALERT_ID] The [ALERT_ID] is a system-assigned unique identifier for the alert.</td>
</tr>
<tr>
    <td><CopyableCode code="closeTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time when the alert was closed.</td>
</tr>
<tr>
    <td><CopyableCode code="log" /></td>
    <td><code>object</code></td>
    <td>The log information associated with the alert. This field is only populated for log-based alerts. (id: LogMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The metadata of the monitored resource. (id: MonitoredResourceMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="metric" /></td>
    <td><code>object</code></td>
    <td>The metric type and any metric labels preserved from the incident's generating condition. (id: Metric)</td>
</tr>
<tr>
    <td><CopyableCode code="openTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time when the alert was opened.</td>
</tr>
<tr>
    <td><CopyableCode code="policy" /></td>
    <td><code>object</code></td>
    <td>The snapshot of the alert policy that generated this alert. (id: PolicySnapshot)</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td>The monitored resource type and any monitored resource labels preserved from the incident's generating condition. (id: MonitoredResource)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the alert. (STATE_UNSPECIFIED, OPEN, CLOSED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_alerts_list">

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
    <td>Identifier. The name of the alert.The format is: projects/[PROJECT_ID_OR_NUMBER]/alerts/[ALERT_ID] The [ALERT_ID] is a system-assigned unique identifier for the alert.</td>
</tr>
<tr>
    <td><CopyableCode code="closeTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time when the alert was closed.</td>
</tr>
<tr>
    <td><CopyableCode code="log" /></td>
    <td><code>object</code></td>
    <td>The log information associated with the alert. This field is only populated for log-based alerts. (id: LogMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The metadata of the monitored resource. (id: MonitoredResourceMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="metric" /></td>
    <td><code>object</code></td>
    <td>The metric type and any metric labels preserved from the incident's generating condition. (id: Metric)</td>
</tr>
<tr>
    <td><CopyableCode code="openTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time when the alert was opened.</td>
</tr>
<tr>
    <td><CopyableCode code="policy" /></td>
    <td><code>object</code></td>
    <td>The snapshot of the alert policy that generated this alert. (id: PolicySnapshot)</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td>The monitored resource type and any monitored resource labels preserved from the incident's generating condition. (id: MonitoredResource)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the alert. (STATE_UNSPECIFIED, OPEN, CLOSED)</td>
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
    <td><a href="#projects_alerts_get"><CopyableCode code="projects_alerts_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-alertsId"><code>alertsId</code></a></td>
    <td></td>
    <td>Gets a single alert.</td>
</tr>
<tr>
    <td><a href="#projects_alerts_list"><CopyableCode code="projects_alerts_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the existing alerts for the metrics scope of the project.</td>
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
    defaultValue="projects_alerts_get"
    values={[
        { label: 'projects_alerts_get', value: 'projects_alerts_get' },
        { label: 'projects_alerts_list', value: 'projects_alerts_list' }
    ]}
>
<TabItem value="projects_alerts_get">

Gets a single alert.

```sql
SELECT
name,
closeTime,
log,
metadata,
metric,
openTime,
policy,
resource,
state
FROM google.monitoring.alerts
WHERE projectsId = '{{ projectsId }}' -- required
AND alertsId = '{{ alertsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_alerts_list">

Lists the existing alerts for the metrics scope of the project.

```sql
SELECT
name,
closeTime,
log,
metadata,
metric,
openTime,
policy,
resource,
state
FROM google.monitoring.alerts
WHERE projectsId = '{{ projectsId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>
