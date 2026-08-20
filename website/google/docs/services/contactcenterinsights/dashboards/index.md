--- 
title: dashboards
hide_title: false
hide_table_of_contents: false
keywords:
  - dashboards
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

Creates, updates, deletes, gets or lists a <code>dashboards</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dashboards" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.contactcenterinsights.dashboards" /></td></tr>
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
    <td>Identifier. Dashboard resource name. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/dashboards/&#123;dashboard&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Dashboard creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="dateRangeConfig" /></td>
    <td><code>object</code></td>
    <td>Date range config applied to all charts in the dashboard. (id: GoogleCloudContactcenterinsightsV1DateRangeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Dashboard description</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User provided display name of the dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Filter applied to all charts in the dashboard. Should support scope later.</td>
</tr>
<tr>
    <td><CopyableCode code="readOnly" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the dashboard is read-only. All predefined dashboards are read-only and cannot be modified by the user.</td>
</tr>
<tr>
    <td><CopyableCode code="rootContainer" /></td>
    <td><code>object</code></td>
    <td>The dashboard's root widget container. We want to display the dashboard layout in a tree-like structure, where the root container contains other widgets (containers or charts) as children. (id: GoogleCloudContactcenterinsightsV1Container)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Dashboard last update time.</td>
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
    <td>Identifier. Dashboard resource name. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/dashboards/&#123;dashboard&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Dashboard creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="dateRangeConfig" /></td>
    <td><code>object</code></td>
    <td>Date range config applied to all charts in the dashboard. (id: GoogleCloudContactcenterinsightsV1DateRangeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Dashboard description</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User provided display name of the dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Filter applied to all charts in the dashboard. Should support scope later.</td>
</tr>
<tr>
    <td><CopyableCode code="readOnly" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the dashboard is read-only. All predefined dashboards are read-only and cannot be modified by the user.</td>
</tr>
<tr>
    <td><CopyableCode code="rootContainer" /></td>
    <td><code>object</code></td>
    <td>The dashboard's root widget container. We want to display the dashboard layout in a tree-like structure, where the root container contains other widgets (containers or charts) as children. (id: GoogleCloudContactcenterinsightsV1Container)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Dashboard last update time.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dashboardsId"><code>dashboardsId</code></a></td>
    <td></td>
    <td>Gets a Dashboard.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists Dashboards.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-dashboardId"><code>dashboardId</code></a></td>
    <td>Creates a Dashboard.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dashboardsId"><code>dashboardsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a Dashboard.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dashboardsId"><code>dashboardsId</code></a></td>
    <td></td>
    <td>Deletes a Dashboard.</td>
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
<tr id="parameter-dashboardId">
    <td><CopyableCode code="dashboardId" /></td>
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

Gets a Dashboard.

```sql
SELECT
name,
createTime,
dateRangeConfig,
description,
displayName,
filter,
readOnly,
rootContainer,
updateTime
FROM google.contactcenterinsights.dashboards
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dashboardsId = '{{ dashboardsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Dashboards.

```sql
SELECT
name,
createTime,
dateRangeConfig,
description,
displayName,
filter,
readOnly,
rootContainer,
updateTime
FROM google.contactcenterinsights.dashboards
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
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

Creates a Dashboard.

```sql
INSERT INTO google.contactcenterinsights.dashboards (
data__dateRangeConfig,
data__description,
data__displayName,
data__filter,
data__name,
data__rootContainer,
projectsId,
locationsId,
dashboardId
)
SELECT 
'{{ dateRangeConfig }}',
'{{ description }}',
'{{ displayName }}',
'{{ filter }}',
'{{ name }}',
'{{ rootContainer }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ dashboardId }}'
RETURNING
name,
createTime,
dateRangeConfig,
description,
displayName,
filter,
readOnly,
rootContainer,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dashboards
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the dashboards resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the dashboards resource.
    - name: dateRangeConfig
      description: |
        Date range config applied to all charts in the dashboard.
      value:
        absoluteDateRange:
          endTime: "{{ endTime }}"
          startTime: "{{ startTime }}"
        relativeDateRange:
          quantity: "{{ quantity }}"
          unit: "{{ unit }}"
    - name: description
      value: "{{ description }}"
      description: |
        Dashboard description
    - name: displayName
      value: "{{ displayName }}"
      description: |
        User provided display name of the dashboard.
    - name: filter
      value: "{{ filter }}"
      description: |
        Filter applied to all charts in the dashboard. Should support scope later.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. Dashboard resource name. Format: projects/{project}/locations/{location}/dashboards/{dashboard}
    - name: rootContainer
      description: |
        The dashboard's root widget container. We want to display the dashboard layout in a tree-like structure, where the root container contains other widgets (containers or charts) as children.
      value:
        containerId: "{{ containerId }}"
        dateRangeConfig:
          absoluteDateRange:
            endTime: "{{ endTime }}"
            startTime: "{{ startTime }}"
          relativeDateRange:
            quantity: "{{ quantity }}"
            unit: "{{ unit }}"
        description: "{{ description }}"
        displayName: "{{ displayName }}"
        filter: "{{ filter }}"
        height: {{ height }}
        widgets:
          - chart:
              action:
                conversationFilter: "{{ conversationFilter }}"
                redirectAction:
                  queryParams: "{{ queryParams }}"
                  relativePath: "{{ relativePath }}"
              chartType: "{{ chartType }}"
              chartVisualizationType: "{{ chartVisualizationType }}"
              createTime: "{{ createTime }}"
              dataSource:
                generativeInsights:
                  chartCheckpoint: "{{ chartCheckpoint }}"
                  chartConversations: "{{ chartConversations }}"
                  chartSpec: "{{ chartSpec }}"
                  request: "{{ request }}"
                  sqlComparisonKey: "{{ sqlComparisonKey }}"
                  sqlQuery: "{{ sqlQuery }}"
                queryMetrics:
                  request: "{{ request }}"
              dateRangeConfig:
                absoluteDateRange:
                  endTime: "{{ endTime }}"
                  startTime: "{{ startTime }}"
                relativeDateRange:
                  quantity: "{{ quantity }}"
                  unit: "{{ unit }}"
              description: "{{ description }}"
              displayName: "{{ displayName }}"
              filter: "{{ filter }}"
              height: {{ height }}
              name: "{{ name }}"
              updateTime: "{{ updateTime }}"
              width: {{ width }}
            chartReference: "{{ chartReference }}"
            container:
              containerId: "{{ containerId }}"
              dateRangeConfig:
                absoluteDateRange:
                  endTime: "{{ endTime }}"
                  startTime: "{{ startTime }}"
                relativeDateRange:
                  quantity: "{{ quantity }}"
                  unit: "{{ unit }}"
              description: "{{ description }}"
              displayName: "{{ displayName }}"
              filter: "{{ filter }}"
              height: {{ height }}
              widgets:
                - chart:
                    action: "{{ action }}"
                    chartType: "{{ chartType }}"
                    chartVisualizationType: "{{ chartVisualizationType }}"
                    createTime: "{{ createTime }}"
                    dataSource: "{{ dataSource }}"
                    dateRangeConfig: "{{ dateRangeConfig }}"
                    description: "{{ description }}"
                    displayName: "{{ displayName }}"
                    filter: "{{ filter }}"
                    height: {{ height }}
                    name: "{{ name }}"
                    updateTime: "{{ updateTime }}"
                    width: {{ width }}
                  chartReference: "{{ chartReference }}"
                  container:
                    containerId: "{{ containerId }}"
                    dateRangeConfig: "{{ dateRangeConfig }}"
                    description: "{{ description }}"
                    displayName: "{{ displayName }}"
                    filter: "{{ filter }}"
                    height: {{ height }}
                    widgets: "{{ widgets }}"
                    width: {{ width }}
                  filter: "{{ filter }}"
              width: {{ width }}
            filter: "{{ filter }}"
        width: {{ width }}
    - name: dashboardId
      value: "{{ dashboardId }}"
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

Updates a Dashboard.

```sql
UPDATE google.contactcenterinsights.dashboards
SET 
data__dateRangeConfig = '{{ dateRangeConfig }}',
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__filter = '{{ filter }}',
data__name = '{{ name }}',
data__rootContainer = '{{ rootContainer }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dashboardsId = '{{ dashboardsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
dateRangeConfig,
description,
displayName,
filter,
readOnly,
rootContainer,
updateTime;
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

Deletes a Dashboard.

```sql
DELETE FROM google.contactcenterinsights.dashboards
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dashboardsId = '{{ dashboardsId }}' --required
;
```
</TabItem>
</Tabs>
