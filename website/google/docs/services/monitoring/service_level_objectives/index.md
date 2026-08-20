--- 
title: service_level_objectives
hide_title: false
hide_table_of_contents: false
keywords:
  - service_level_objectives
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

Creates, updates, deletes, gets or lists a <code>service_level_objectives</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_level_objectives" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.monitoring.service_level_objectives" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="services_service_level_objectives_list"
    values={[
        { label: 'services_service_level_objectives_list', value: 'services_service_level_objectives_list' }
    ]}
>
<TabItem value="services_service_level_objectives_list">

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
    <td>Identifier. Resource name for this ServiceLevelObjective. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]/serviceLevelObjectives/[SLO_NAME] </td>
</tr>
<tr>
    <td><CopyableCode code="calendarPeriod" /></td>
    <td><code>string</code></td>
    <td>A calendar period, semantically "since the start of the current ". At this time, only DAY, WEEK, FORTNIGHT, and MONTH are supported. (CALENDAR_PERIOD_UNSPECIFIED, DAY, WEEK, FORTNIGHT, MONTH, QUARTER, HALF, YEAR)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Name used for UI elements listing this SLO.</td>
</tr>
<tr>
    <td><CopyableCode code="goal" /></td>
    <td><code>number (double)</code></td>
    <td>The fraction of service that must be good in order for this objective to be met. 0 &lt; goal &lt;= 0.9999.</td>
</tr>
<tr>
    <td><CopyableCode code="rollingPeriod" /></td>
    <td><code>string (google-duration)</code></td>
    <td>A rolling time period, semantically "in the past ". Must be an integer multiple of 1 day no larger than 30 days.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceLevelIndicator" /></td>
    <td><code>object</code></td>
    <td>The definition of good service, used to measure and calculate the quality of the Service's performance with respect to a single aspect of service quality. (id: ServiceLevelIndicator)</td>
</tr>
<tr>
    <td><CopyableCode code="userLabels" /></td>
    <td><code>object</code></td>
    <td>Labels which have been used to annotate the service-level objective. Label keys must start with a letter. Label keys and values may contain lowercase letters, numbers, underscores, and dashes. Label keys and values have a maximum length of 63 characters, and must be less than 128 bytes in size. Up to 64 label entries may be stored. For labels which do not have a semantic value, the empty string may be supplied for the label value.</td>
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
    <td><a href="#services_service_level_objectives_list"><CopyableCode code="services_service_level_objectives_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-parentType"><code>parentType</code></a>, <a href="#parameter-parent"><code>parent</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>List the ServiceLevelObjectives for the given Service.</td>
</tr>
<tr>
    <td><a href="#services_service_level_objectives_create"><CopyableCode code="services_service_level_objectives_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-parentType"><code>parentType</code></a>, <a href="#parameter-parent"><code>parent</code></a></td>
    <td><a href="#parameter-serviceLevelObjectiveId"><code>serviceLevelObjectiveId</code></a></td>
    <td>Create a ServiceLevelObjective for the given Service.</td>
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
<tr id="parameter-parent">
    <td><CopyableCode code="parent" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-parentType">
    <td><CopyableCode code="parentType" /></td>
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
<tr id="parameter-serviceLevelObjectiveId">
    <td><CopyableCode code="serviceLevelObjectiveId" /></td>
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
    defaultValue="services_service_level_objectives_list"
    values={[
        { label: 'services_service_level_objectives_list', value: 'services_service_level_objectives_list' }
    ]}
>
<TabItem value="services_service_level_objectives_list">

List the ServiceLevelObjectives for the given Service.

```sql
SELECT
name,
calendarPeriod,
displayName,
goal,
rollingPeriod,
serviceLevelIndicator,
userLabels
FROM google.monitoring.service_level_objectives
WHERE parentType = '{{ parentType }}' -- required
AND parent = '{{ parent }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND view = '{{ view }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="services_service_level_objectives_create"
    values={[
        { label: 'services_service_level_objectives_create', value: 'services_service_level_objectives_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="services_service_level_objectives_create">

Create a ServiceLevelObjective for the given Service.

```sql
INSERT INTO google.monitoring.service_level_objectives (
data__calendarPeriod,
data__displayName,
data__goal,
data__name,
data__rollingPeriod,
data__serviceLevelIndicator,
data__userLabels,
parentType,
parent,
serviceLevelObjectiveId
)
SELECT 
'{{ calendarPeriod }}',
'{{ displayName }}',
{{ goal }},
'{{ name }}',
'{{ rollingPeriod }}',
'{{ serviceLevelIndicator }}',
'{{ userLabels }}',
'{{ parentType }}',
'{{ parent }}',
'{{ serviceLevelObjectiveId }}'
RETURNING
name,
calendarPeriod,
displayName,
goal,
rollingPeriod,
serviceLevelIndicator,
userLabels
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: service_level_objectives
  props:
    - name: parentType
      value: "{{ parentType }}"
      description: Required parameter for the service_level_objectives resource.
    - name: parent
      value: "{{ parent }}"
      description: Required parameter for the service_level_objectives resource.
    - name: calendarPeriod
      value: "{{ calendarPeriod }}"
      description: |
        A calendar period, semantically "since the start of the current ". At this time, only DAY, WEEK, FORTNIGHT, and MONTH are supported.
      valid_values: ['CALENDAR_PERIOD_UNSPECIFIED', 'DAY', 'WEEK', 'FORTNIGHT', 'MONTH', 'QUARTER', 'HALF', 'YEAR']
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Name used for UI elements listing this SLO.
    - name: goal
      value: {{ goal }}
      description: |
        The fraction of service that must be good in order for this objective to be met. 0 < goal <= 0.9999.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. Resource name for this ServiceLevelObjective. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]/serviceLevelObjectives/[SLO_NAME]
    - name: rollingPeriod
      value: "{{ rollingPeriod }}"
      description: |
        A rolling time period, semantically "in the past ". Must be an integer multiple of 1 day no larger than 30 days.
    - name: serviceLevelIndicator
      description: |
        The definition of good service, used to measure and calculate the quality of the Service's performance with respect to a single aspect of service quality.
      value:
        basicSli:
          availability: "{{ availability }}"
          latency:
            threshold: "{{ threshold }}"
          location:
            - "{{ location }}"
          method:
            - "{{ method }}"
          version:
            - "{{ version }}"
        requestBased:
          distributionCut:
            distributionFilter: "{{ distributionFilter }}"
            range:
              max: {{ max }}
              min: {{ min }}
          goodTotalRatio:
            badServiceFilter: "{{ badServiceFilter }}"
            goodServiceFilter: "{{ goodServiceFilter }}"
            totalServiceFilter: "{{ totalServiceFilter }}"
        windowsBased:
          goodBadMetricFilter: "{{ goodBadMetricFilter }}"
          goodTotalRatioThreshold:
            basicSliPerformance:
              availability: "{{ availability }}"
              latency:
                threshold: "{{ threshold }}"
              location:
                - "{{ location }}"
              method:
                - "{{ method }}"
              version:
                - "{{ version }}"
            performance:
              distributionCut:
                distributionFilter: "{{ distributionFilter }}"
                range: "{{ range }}"
              goodTotalRatio:
                badServiceFilter: "{{ badServiceFilter }}"
                goodServiceFilter: "{{ goodServiceFilter }}"
                totalServiceFilter: "{{ totalServiceFilter }}"
            threshold: {{ threshold }}
          metricMeanInRange:
            range:
              max: {{ max }}
              min: {{ min }}
            timeSeries: "{{ timeSeries }}"
          metricSumInRange:
            range:
              max: {{ max }}
              min: {{ min }}
            timeSeries: "{{ timeSeries }}"
          windowPeriod: "{{ windowPeriod }}"
    - name: userLabels
      value: "{{ userLabels }}"
      description: |
        Labels which have been used to annotate the service-level objective. Label keys must start with a letter. Label keys and values may contain lowercase letters, numbers, underscores, and dashes. Label keys and values have a maximum length of 63 characters, and must be less than 128 bytes in size. Up to 64 label entries may be stored. For labels which do not have a semantic value, the empty string may be supplied for the label value.
    - name: serviceLevelObjectiveId
      value: "{{ serviceLevelObjectiveId }}"
`}</CodeBlock>

</TabItem>
</Tabs>
