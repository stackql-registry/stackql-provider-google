--- 
title: charts
hide_title: false
hide_table_of_contents: false
keywords:
  - charts
  - contactcenterinsights
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

Creates, updates, deletes, gets or lists a <code>charts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="charts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.contactcenterinsights.charts" /></td></tr>
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
    <td>Identifier. Chart resource name. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/dashboards/&#123;dashboard&#125;/charts/&#123;chart&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>object</code></td>
    <td>Optional action to be taken when the chart is clicked. (id: GoogleCloudContactcenterinsightsV1ChartAction)</td>
</tr>
<tr>
    <td><CopyableCode code="chartType" /></td>
    <td><code>string</code></td>
    <td>Output only. Chart type. (CHART_TYPE_UNSPECIFIED, SYSTEM_DEFINED, USER_DEFINED)</td>
</tr>
<tr>
    <td><CopyableCode code="chartVisualizationType" /></td>
    <td><code>string</code></td>
    <td>Chart visualization type. (CHART_VISUALIZATION_TYPE_UNSPECIFIED, BAR, LINE, AREA, PIE, SCATTER, TABLE, SCORE_CARD, SUNBURST, GAUGE, SANKEY)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Chart create time.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSource" /></td>
    <td><code>object</code></td>
    <td>The request data for visualizing the dataset in the chart. (id: GoogleCloudContactcenterinsightsV1ChartDataSource)</td>
</tr>
<tr>
    <td><CopyableCode code="dateRangeConfig" /></td>
    <td><code>object</code></td>
    <td>Date range config applied to the chart. (id: GoogleCloudContactcenterinsightsV1DateRangeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Chart description</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User provided display name of the chart.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Filter applied to all charts in the container. Should support scope later.</td>
</tr>
<tr>
    <td><CopyableCode code="height" /></td>
    <td><code>integer (int32)</code></td>
    <td>The height of the chart in grid units.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Chart last update time.</td>
</tr>
<tr>
    <td><CopyableCode code="width" /></td>
    <td><code>integer (int32)</code></td>
    <td>The width of the chart in grid units.</td>
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
    <td>Identifier. Chart resource name. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/dashboards/&#123;dashboard&#125;/charts/&#123;chart&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>object</code></td>
    <td>Optional action to be taken when the chart is clicked. (id: GoogleCloudContactcenterinsightsV1ChartAction)</td>
</tr>
<tr>
    <td><CopyableCode code="chartType" /></td>
    <td><code>string</code></td>
    <td>Output only. Chart type. (CHART_TYPE_UNSPECIFIED, SYSTEM_DEFINED, USER_DEFINED)</td>
</tr>
<tr>
    <td><CopyableCode code="chartVisualizationType" /></td>
    <td><code>string</code></td>
    <td>Chart visualization type. (CHART_VISUALIZATION_TYPE_UNSPECIFIED, BAR, LINE, AREA, PIE, SCATTER, TABLE, SCORE_CARD, SUNBURST, GAUGE, SANKEY)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Chart create time.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSource" /></td>
    <td><code>object</code></td>
    <td>The request data for visualizing the dataset in the chart. (id: GoogleCloudContactcenterinsightsV1ChartDataSource)</td>
</tr>
<tr>
    <td><CopyableCode code="dateRangeConfig" /></td>
    <td><code>object</code></td>
    <td>Date range config applied to the chart. (id: GoogleCloudContactcenterinsightsV1DateRangeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Chart description</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User provided display name of the chart.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Filter applied to all charts in the container. Should support scope later.</td>
</tr>
<tr>
    <td><CopyableCode code="height" /></td>
    <td><code>integer (int32)</code></td>
    <td>The height of the chart in grid units.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Chart last update time.</td>
</tr>
<tr>
    <td><CopyableCode code="width" /></td>
    <td><code>integer (int32)</code></td>
    <td>The width of the chart in grid units.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dashboardsId"><code>dashboardsId</code></a>, <a href="#parameter-chartsId"><code>chartsId</code></a></td>
    <td></td>
    <td>Gets a Chart.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dashboardsId"><code>dashboardsId</code></a></td>
    <td></td>
    <td>Lists Charts.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dashboardsId"><code>dashboardsId</code></a></td>
    <td><a href="#parameter-chartId"><code>chartId</code></a></td>
    <td>Creates a Chart.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dashboardsId"><code>dashboardsId</code></a>, <a href="#parameter-chartsId"><code>chartsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a Chart.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dashboardsId"><code>dashboardsId</code></a>, <a href="#parameter-chartsId"><code>chartsId</code></a></td>
    <td></td>
    <td>Deletes a Chart.</td>
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
<tr id="parameter-chartsId">
    <td><CopyableCode code="chartsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-dashboardsId">
    <td><CopyableCode code="dashboardsId" /></td>
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
<tr id="parameter-chartId">
    <td><CopyableCode code="chartId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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

Gets a Chart.

```sql
SELECT
name,
action,
chartType,
chartVisualizationType,
createTime,
dataSource,
dateRangeConfig,
description,
displayName,
filter,
height,
updateTime,
width
FROM google.contactcenterinsights.charts
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dashboardsId = '{{ dashboardsId }}' -- required
AND chartsId = '{{ chartsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Charts.

```sql
SELECT
name,
action,
chartType,
chartVisualizationType,
createTime,
dataSource,
dateRangeConfig,
description,
displayName,
filter,
height,
updateTime,
width
FROM google.contactcenterinsights.charts
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dashboardsId = '{{ dashboardsId }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a Chart.

```sql
INSERT INTO google.contactcenterinsights.charts (
data__description,
data__height,
data__action,
data__width,
data__dataSource,
data__filter,
data__name,
data__dateRangeConfig,
data__displayName,
data__chartVisualizationType,
projectsId,
locationsId,
dashboardsId,
chartId
)
SELECT 
'{{ description }}',
{{ height }},
'{{ action }}',
{{ width }},
'{{ dataSource }}',
'{{ filter }}',
'{{ name }}',
'{{ dateRangeConfig }}',
'{{ displayName }}',
'{{ chartVisualizationType }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ dashboardsId }}',
'{{ chartId }}'
RETURNING
name,
action,
chartType,
chartVisualizationType,
createTime,
dataSource,
dateRangeConfig,
description,
displayName,
filter,
height,
updateTime,
width
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: charts
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the charts resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the charts resource.
    - name: dashboardsId
      value: "{{ dashboardsId }}"
      description: Required parameter for the charts resource.
    - name: description
      value: "{{ description }}"
      description: |
        Chart description
    - name: height
      value: {{ height }}
      description: |
        The height of the chart in grid units.
    - name: action
      description: |
        Optional action to be taken when the chart is clicked.
      value:
        conversationFilter: "{{ conversationFilter }}"
        redirectAction:
          relativePath: "{{ relativePath }}"
          queryParams: "{{ queryParams }}"
    - name: width
      value: {{ width }}
      description: |
        The width of the chart in grid units.
    - name: dataSource
      description: |
        The request data for visualizing the dataset in the chart.
      value:
        generativeInsights:
          chartSpec: "{{ chartSpec }}"
          sqlQuery: "{{ sqlQuery }}"
          chartCheckpoint:
            sessionId: "{{ sessionId }}"
            revisionId: "{{ revisionId }}"
          chartConversations:
            - messages: "{{ messages }}"
              updateTime: "{{ updateTime }}"
              conversationId: "{{ conversationId }}"
              createTime: "{{ createTime }}"
          request: "{{ request }}"
          sqlComparisonKey: "{{ sqlComparisonKey }}"
        queryMetrics:
          request: "{{ request }}"
    - name: filter
      value: "{{ filter }}"
      description: |
        Filter applied to all charts in the container. Should support scope later.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. Chart resource name. Format: projects/{project}/locations/{location}/dashboards/{dashboard}/charts/{chart}
    - name: dateRangeConfig
      description: |
        Date range config applied to the chart.
      value:
        absoluteDateRange:
          startTime: "{{ startTime }}"
          endTime: "{{ endTime }}"
        relativeDateRange:
          quantity: "{{ quantity }}"
          unit: "{{ unit }}"
    - name: displayName
      value: "{{ displayName }}"
      description: |
        User provided display name of the chart.
    - name: chartVisualizationType
      value: "{{ chartVisualizationType }}"
      description: |
        Chart visualization type.
      valid_values: ['CHART_VISUALIZATION_TYPE_UNSPECIFIED', 'BAR', 'LINE', 'AREA', 'PIE', 'SCATTER', 'TABLE', 'SCORE_CARD', 'SUNBURST', 'GAUGE', 'SANKEY']
    - name: chartId
      value: "{{ chartId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' }
    ]}
>
<TabItem value="patch">

Updates a Chart.

```sql
UPDATE google.contactcenterinsights.charts
SET 
data__description = '{{ description }}',
data__height = {{ height }},
data__action = '{{ action }}',
data__width = {{ width }},
data__dataSource = '{{ dataSource }}',
data__filter = '{{ filter }}',
data__name = '{{ name }}',
data__dateRangeConfig = '{{ dateRangeConfig }}',
data__displayName = '{{ displayName }}',
data__chartVisualizationType = '{{ chartVisualizationType }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dashboardsId = '{{ dashboardsId }}' --required
AND chartsId = '{{ chartsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
action,
chartType,
chartVisualizationType,
createTime,
dataSource,
dateRangeConfig,
description,
displayName,
filter,
height,
updateTime,
width;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes a Chart.

```sql
DELETE FROM google.contactcenterinsights.charts
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dashboardsId = '{{ dashboardsId }}' --required
AND chartsId = '{{ chartsId }}' --required
;
```
</TabItem>
</Tabs>
