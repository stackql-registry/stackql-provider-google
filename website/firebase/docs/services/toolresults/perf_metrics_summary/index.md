--- 
title: perf_metrics_summary
hide_title: false
hide_table_of_contents: false
keywords:
  - perf_metrics_summary
  - toolresults
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

Creates, updates, deletes, gets or lists a <code>perf_metrics_summary</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="perf_metrics_summary" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.toolresults.perf_metrics_summary" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-historyId"><code>historyId</code></a>, <a href="#parameter-executionId"><code>executionId</code></a>, <a href="#parameter-stepId"><code>stepId</code></a></td>
    <td></td>
    <td>Creates a PerfMetricsSummary resource. Returns the existing one if it has already been created. May return any of the following error code(s): - NOT_FOUND - The containing Step does not exist</td>
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
<tr id="parameter-executionId">
    <td><CopyableCode code="executionId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-historyId">
    <td><CopyableCode code="historyId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-stepId">
    <td><CopyableCode code="stepId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a PerfMetricsSummary resource. Returns the existing one if it has already been created. May return any of the following error code(s): - NOT_FOUND - The containing Step does not exist

```sql
INSERT INTO firebase.toolresults.perf_metrics_summary (
data__graphicsStats,
data__perfEnvironment,
data__stepId,
data__executionId,
data__perfMetrics,
data__projectId,
data__historyId,
data__appStartTime,
projectId,
historyId,
executionId,
stepId
)
SELECT 
'{{ graphicsStats }}',
'{{ perfEnvironment }}',
'{{ stepId }}',
'{{ executionId }}',
'{{ perfMetrics }}',
'{{ projectId }}',
'{{ historyId }}',
'{{ appStartTime }}',
'{{ projectId }}',
'{{ historyId }}',
'{{ executionId }}',
'{{ stepId }}'
RETURNING
appStartTime,
executionId,
graphicsStats,
historyId,
perfEnvironment,
perfMetrics,
projectId,
stepId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: perf_metrics_summary
  props:
    - name: projectId
      value: "{{ projectId }}"
      description: Required parameter for the perf_metrics_summary resource.
    - name: historyId
      value: "{{ historyId }}"
      description: Required parameter for the perf_metrics_summary resource.
    - name: executionId
      value: "{{ executionId }}"
      description: Required parameter for the perf_metrics_summary resource.
    - name: stepId
      value: "{{ stepId }}"
      description: Required parameter for the perf_metrics_summary resource.
    - name: graphicsStats
      description: |
        Graphics statistics for the entire run. Statistics are reset at the beginning of the run and collected at the end of the run.
      value:
        p95Millis: "{{ p95Millis }}"
        slowDrawCount: "{{ slowDrawCount }}"
        p50Millis: "{{ p50Millis }}"
        highInputLatencyCount: "{{ highInputLatencyCount }}"
        p90Millis: "{{ p90Millis }}"
        slowBitmapUploadCount: "{{ slowBitmapUploadCount }}"
        buckets:
          - renderMillis: "{{ renderMillis }}"
            frameCount: "{{ frameCount }}"
        slowUiThreadCount: "{{ slowUiThreadCount }}"
        jankyFrames: "{{ jankyFrames }}"
        p99Millis: "{{ p99Millis }}"
        missedVsyncCount: "{{ missedVsyncCount }}"
        totalFrames: "{{ totalFrames }}"
    - name: perfEnvironment
      description: |
        Describes the environment in which the performance metrics were collected
      value:
        cpuInfo:
          cpuSpeedInGhz: {{ cpuSpeedInGhz }}
          cpuProcessor: "{{ cpuProcessor }}"
          numberOfCores: {{ numberOfCores }}
        memoryInfo:
          memoryTotalInKibibyte: "{{ memoryTotalInKibibyte }}"
          memoryCapInKibibyte: "{{ memoryCapInKibibyte }}"
    - name: stepId
      value: "{{ stepId }}"
      description: |
        A tool results step ID. @OutputOnly
    - name: executionId
      value: "{{ executionId }}"
      description: |
        A tool results execution ID. @OutputOnly
    - name: perfMetrics
      value:
        - "{{ perfMetrics }}"
      description: |
        Set of resource collected
    - name: projectId
      value: "{{ projectId }}"
      description: |
        The cloud project @OutputOnly
    - name: historyId
      value: "{{ historyId }}"
      description: |
        A tool results history ID. @OutputOnly
    - name: appStartTime
      value:
        initialDisplayTime:
          seconds: "{{ seconds }}"
          nanos: {{ nanos }}
        fullyDrawnTime:
          seconds: "{{ seconds }}"
          nanos: {{ nanos }}
`}</CodeBlock>

</TabItem>
</Tabs>
