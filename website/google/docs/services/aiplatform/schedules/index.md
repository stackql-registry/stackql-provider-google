--- 
title: schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - schedules
  - aiplatform
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

Creates, updates, deletes, gets or lists a <code>schedules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="schedules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.schedules" /></td></tr>
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
    <td>Immutable. The resource name of the Schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="allowQueueing" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether new scheduled runs can be queued when max_concurrent_runs limit is reached. If set to true, new runs will be queued instead of skipped. Default to false.</td>
</tr>
<tr>
    <td><CopyableCode code="catchUp" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether to backfill missed runs when the schedule is resumed from PAUSED state. If set to true, all missed runs will be scheduled. New runs will be scheduled after the backfill is complete. Default to false.</td>
</tr>
<tr>
    <td><CopyableCode code="createNotebookExecutionJobRequest" /></td>
    <td><code>object</code></td>
    <td>Request for NotebookService.CreateNotebookExecutionJob. (id: GoogleCloudAiplatformV1CreateNotebookExecutionJobRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="createPipelineJobRequest" /></td>
    <td><code>object</code></td>
    <td>Request for PipelineService.CreatePipelineJob. CreatePipelineJobRequest.parent field is required (format: projects/&#123;project&#125;/locations/&#123;location&#125;). (id: GoogleCloudAiplatformV1CreatePipelineJobRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Schedule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="cron" /></td>
    <td><code>string</code></td>
    <td>Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=$&#123;IANA_TIME_ZONE&#125;" or "TZ=$&#123;IANA_TIME_ZONE&#125;". The $&#123;IANA_TIME_ZONE&#125; may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 * * * *", or "TZ=America/New_York 1 * * * *".</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. User provided name of the Schedule. The name can be up to 128 characters long and can consist of any UTF-8 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Timestamp after which no new runs can be scheduled. If specified, The schedule will be completed when either end_time is reached or when scheduled_run_count &gt;= max_run_count. If not specified, new runs will keep getting scheduled until this Schedule is paused or deleted. Already scheduled runs will be allowed to complete. Unset if not specified.</td>
</tr>
<tr>
    <td><CopyableCode code="lastPauseTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Schedule was last paused. Unset if never paused.</td>
</tr>
<tr>
    <td><CopyableCode code="lastResumeTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Schedule was last resumed. Unset if never resumed from pause.</td>
</tr>
<tr>
    <td><CopyableCode code="lastScheduledRunResponse" /></td>
    <td><code>object</code></td>
    <td>Output only. Response of the last scheduled run. This is the response for starting the scheduled requests and not the execution of the operations/jobs created by the requests (if applicable). Unset if no run has been scheduled yet. (id: GoogleCloudAiplatformV1ScheduleRunResponse)</td>
</tr>
<tr>
    <td><CopyableCode code="maxConcurrentActiveRunCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. Specifies the maximum number of active runs that can be executed concurrently for this Schedule. This limits the number of runs that can be in a non-terminal state at the same time. Currently, this field is only supported for requests of type CreatePipelineJobRequest.</td>
</tr>
<tr>
    <td><CopyableCode code="maxConcurrentRunCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Required. Maximum number of runs that can be started concurrently for this Schedule. This is the limit for starting the scheduled requests and not the execution of the operations/jobs created by the requests (if applicable).</td>
</tr>
<tr>
    <td><CopyableCode code="maxRunCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. Maximum run count of the schedule. If specified, The schedule will be completed when either started_run_count &gt;= max_run_count or when end_time is reached. If not specified, new runs will keep getting scheduled until this Schedule is paused or deleted. Already scheduled runs will be allowed to complete. Unset if not specified.</td>
</tr>
<tr>
    <td><CopyableCode code="nextRunTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Schedule should schedule the next run. Having a next_run_time in the past means the runs are being started behind schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Timestamp after which the first run can be scheduled. Default to Schedule create time if not specified.</td>
</tr>
<tr>
    <td><CopyableCode code="startedRunCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The number of runs started by this schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of this Schedule. (STATE_UNSPECIFIED, ACTIVE, PAUSED, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Schedule was updated.</td>
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
    <td>Immutable. The resource name of the Schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="allowQueueing" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether new scheduled runs can be queued when max_concurrent_runs limit is reached. If set to true, new runs will be queued instead of skipped. Default to false.</td>
</tr>
<tr>
    <td><CopyableCode code="catchUp" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether to backfill missed runs when the schedule is resumed from PAUSED state. If set to true, all missed runs will be scheduled. New runs will be scheduled after the backfill is complete. Default to false.</td>
</tr>
<tr>
    <td><CopyableCode code="createNotebookExecutionJobRequest" /></td>
    <td><code>object</code></td>
    <td>Request for NotebookService.CreateNotebookExecutionJob. (id: GoogleCloudAiplatformV1CreateNotebookExecutionJobRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="createPipelineJobRequest" /></td>
    <td><code>object</code></td>
    <td>Request for PipelineService.CreatePipelineJob. CreatePipelineJobRequest.parent field is required (format: projects/&#123;project&#125;/locations/&#123;location&#125;). (id: GoogleCloudAiplatformV1CreatePipelineJobRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Schedule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="cron" /></td>
    <td><code>string</code></td>
    <td>Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=$&#123;IANA_TIME_ZONE&#125;" or "TZ=$&#123;IANA_TIME_ZONE&#125;". The $&#123;IANA_TIME_ZONE&#125; may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 * * * *", or "TZ=America/New_York 1 * * * *".</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. User provided name of the Schedule. The name can be up to 128 characters long and can consist of any UTF-8 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Timestamp after which no new runs can be scheduled. If specified, The schedule will be completed when either end_time is reached or when scheduled_run_count &gt;= max_run_count. If not specified, new runs will keep getting scheduled until this Schedule is paused or deleted. Already scheduled runs will be allowed to complete. Unset if not specified.</td>
</tr>
<tr>
    <td><CopyableCode code="lastPauseTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Schedule was last paused. Unset if never paused.</td>
</tr>
<tr>
    <td><CopyableCode code="lastResumeTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Schedule was last resumed. Unset if never resumed from pause.</td>
</tr>
<tr>
    <td><CopyableCode code="lastScheduledRunResponse" /></td>
    <td><code>object</code></td>
    <td>Output only. Response of the last scheduled run. This is the response for starting the scheduled requests and not the execution of the operations/jobs created by the requests (if applicable). Unset if no run has been scheduled yet. (id: GoogleCloudAiplatformV1ScheduleRunResponse)</td>
</tr>
<tr>
    <td><CopyableCode code="maxConcurrentActiveRunCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. Specifies the maximum number of active runs that can be executed concurrently for this Schedule. This limits the number of runs that can be in a non-terminal state at the same time. Currently, this field is only supported for requests of type CreatePipelineJobRequest.</td>
</tr>
<tr>
    <td><CopyableCode code="maxConcurrentRunCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Required. Maximum number of runs that can be started concurrently for this Schedule. This is the limit for starting the scheduled requests and not the execution of the operations/jobs created by the requests (if applicable).</td>
</tr>
<tr>
    <td><CopyableCode code="maxRunCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. Maximum run count of the schedule. If specified, The schedule will be completed when either started_run_count &gt;= max_run_count or when end_time is reached. If not specified, new runs will keep getting scheduled until this Schedule is paused or deleted. Already scheduled runs will be allowed to complete. Unset if not specified.</td>
</tr>
<tr>
    <td><CopyableCode code="nextRunTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Schedule should schedule the next run. Having a next_run_time in the past means the runs are being started behind schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Timestamp after which the first run can be scheduled. Default to Schedule create time if not specified.</td>
</tr>
<tr>
    <td><CopyableCode code="startedRunCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The number of runs started by this schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of this Schedule. (STATE_UNSPECIFIED, ACTIVE, PAUSED, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Schedule was updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-schedulesId"><code>schedulesId</code></a></td>
    <td></td>
    <td>Gets a Schedule.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists Schedules in a Location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a Schedule.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-schedulesId"><code>schedulesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an active or paused Schedule. When the Schedule is updated, new runs will be scheduled starting from the updated next execution time after the update time based on the time_specification in the updated Schedule. All unstarted runs before the update time will be skipped while already created runs will NOT be paused or canceled.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-schedulesId"><code>schedulesId</code></a></td>
    <td></td>
    <td>Deletes a Schedule.</td>
</tr>
<tr>
    <td><a href="#pause"><CopyableCode code="pause" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-schedulesId"><code>schedulesId</code></a></td>
    <td></td>
    <td>Pauses a Schedule. Will mark Schedule.state to 'PAUSED'. If the schedule is paused, no new runs will be created. Already created runs will NOT be paused or canceled.</td>
</tr>
<tr>
    <td><a href="#resume"><CopyableCode code="resume" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-schedulesId"><code>schedulesId</code></a></td>
    <td></td>
    <td>Resumes a paused Schedule to start scheduling new runs. Will mark Schedule.state to 'ACTIVE'. Only paused Schedule can be resumed. When the Schedule is resumed, new runs will be scheduled starting from the next execution time after the current time based on the time_specification in the Schedule. If Schedule.catch_up is set up true, all missed runs will be scheduled for backfill first.</td>
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
<tr id="parameter-schedulesId">
    <td><CopyableCode code="schedulesId" /></td>
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

Gets a Schedule.

```sql
SELECT
name,
allowQueueing,
catchUp,
createNotebookExecutionJobRequest,
createPipelineJobRequest,
createTime,
cron,
displayName,
endTime,
lastPauseTime,
lastResumeTime,
lastScheduledRunResponse,
maxConcurrentActiveRunCount,
maxConcurrentRunCount,
maxRunCount,
nextRunTime,
startTime,
startedRunCount,
state,
updateTime
FROM google.aiplatform.schedules
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND schedulesId = '{{ schedulesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Schedules in a Location.

```sql
SELECT
name,
allowQueueing,
catchUp,
createNotebookExecutionJobRequest,
createPipelineJobRequest,
createTime,
cron,
displayName,
endTime,
lastPauseTime,
lastResumeTime,
lastScheduledRunResponse,
maxConcurrentActiveRunCount,
maxConcurrentRunCount,
maxRunCount,
nextRunTime,
startTime,
startedRunCount,
state,
updateTime
FROM google.aiplatform.schedules
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
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

Creates a Schedule.

```sql
INSERT INTO google.aiplatform.schedules (
data__allowQueueing,
data__maxRunCount,
data__maxConcurrentRunCount,
data__endTime,
data__createPipelineJobRequest,
data__displayName,
data__name,
data__cron,
data__startTime,
data__maxConcurrentActiveRunCount,
data__createNotebookExecutionJobRequest,
projectsId,
locationsId
)
SELECT 
{{ allowQueueing }},
'{{ maxRunCount }}',
'{{ maxConcurrentRunCount }}',
'{{ endTime }}',
'{{ createPipelineJobRequest }}',
'{{ displayName }}',
'{{ name }}',
'{{ cron }}',
'{{ startTime }}',
'{{ maxConcurrentActiveRunCount }}',
'{{ createNotebookExecutionJobRequest }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
allowQueueing,
catchUp,
createNotebookExecutionJobRequest,
createPipelineJobRequest,
createTime,
cron,
displayName,
endTime,
lastPauseTime,
lastResumeTime,
lastScheduledRunResponse,
maxConcurrentActiveRunCount,
maxConcurrentRunCount,
maxRunCount,
nextRunTime,
startTime,
startedRunCount,
state,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: schedules
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the schedules resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the schedules resource.
    - name: allowQueueing
      value: {{ allowQueueing }}
      description: |
        Optional. Whether new scheduled runs can be queued when max_concurrent_runs limit is reached. If set to true, new runs will be queued instead of skipped. Default to false.
    - name: maxRunCount
      value: "{{ maxRunCount }}"
      description: |
        Optional. Maximum run count of the schedule. If specified, The schedule will be completed when either started_run_count >= max_run_count or when end_time is reached. If not specified, new runs will keep getting scheduled until this Schedule is paused or deleted. Already scheduled runs will be allowed to complete. Unset if not specified.
    - name: maxConcurrentRunCount
      value: "{{ maxConcurrentRunCount }}"
      description: |
        Required. Maximum number of runs that can be started concurrently for this Schedule. This is the limit for starting the scheduled requests and not the execution of the operations/jobs created by the requests (if applicable).
    - name: endTime
      value: "{{ endTime }}"
      description: |
        Optional. Timestamp after which no new runs can be scheduled. If specified, The schedule will be completed when either end_time is reached or when scheduled_run_count >= max_run_count. If not specified, new runs will keep getting scheduled until this Schedule is paused or deleted. Already scheduled runs will be allowed to complete. Unset if not specified.
    - name: createPipelineJobRequest
      description: |
        Request for PipelineService.CreatePipelineJob. CreatePipelineJobRequest.parent field is required (format: projects/{project}/locations/{location}).
      value:
        pipelineJobId: "{{ pipelineJobId }}"
        parent: "{{ parent }}"
        pipelineJob:
          displayName: "{{ displayName }}"
          endTime: "{{ endTime }}"
          templateMetadata:
            version: "{{ version }}"
          updateTime: "{{ updateTime }}"
          pipelineSpec: "{{ pipelineSpec }}"
          reservedIpRanges:
            - "{{ reservedIpRanges }}"
          state: "{{ state }}"
          pscInterfaceConfig:
            networkAttachment: "{{ networkAttachment }}"
            dnsPeeringConfigs:
              - targetNetwork: "{{ targetNetwork }}"
                domain: "{{ domain }}"
                targetProject: "{{ targetProject }}"
          network: "{{ network }}"
          scheduleName: "{{ scheduleName }}"
          serviceAccount: "{{ serviceAccount }}"
          createTime: "{{ createTime }}"
          jobDetail:
            pipelineContext:
              displayName: "{{ displayName }}"
              etag: "{{ etag }}"
              updateTime: "{{ updateTime }}"
              schemaTitle: "{{ schemaTitle }}"
              createTime: "{{ createTime }}"
              schemaVersion: "{{ schemaVersion }}"
              metadata: "{{ metadata }}"
              labels: "{{ labels }}"
              parentContexts:
                - "{{ parentContexts }}"
              description: "{{ description }}"
              name: "{{ name }}"
            taskDetails:
              - executorDetail:
                  customJobDetail: "{{ customJobDetail }}"
                  containerDetail: "{{ containerDetail }}"
                pipelineTaskStatus: "{{ pipelineTaskStatus }}"
                execution:
                  name: "{{ name }}"
                  description: "{{ description }}"
                  state: "{{ state }}"
                  metadata: "{{ metadata }}"
                  labels: "{{ labels }}"
                  createTime: "{{ createTime }}"
                  schemaVersion: "{{ schemaVersion }}"
                  updateTime: "{{ updateTime }}"
                  schemaTitle: "{{ schemaTitle }}"
                  displayName: "{{ displayName }}"
                  etag: "{{ etag }}"
                taskUniqueName: "{{ taskUniqueName }}"
                state: "{{ state }}"
                endTime: "{{ endTime }}"
                parentTaskId: "{{ parentTaskId }}"
                outputs: "{{ outputs }}"
                startTime: "{{ startTime }}"
                taskId: "{{ taskId }}"
                taskName: "{{ taskName }}"
                error:
                  message: "{{ message }}"
                  details: "{{ details }}"
                  code: {{ code }}
                inputs: "{{ inputs }}"
                createTime: "{{ createTime }}"
            pipelineRunContext:
              displayName: "{{ displayName }}"
              etag: "{{ etag }}"
              updateTime: "{{ updateTime }}"
              schemaTitle: "{{ schemaTitle }}"
              createTime: "{{ createTime }}"
              schemaVersion: "{{ schemaVersion }}"
              metadata: "{{ metadata }}"
              labels: "{{ labels }}"
              parentContexts:
                - "{{ parentContexts }}"
              description: "{{ description }}"
              name: "{{ name }}"
          labels: "{{ labels }}"
          startTime: "{{ startTime }}"
          runtimeConfig:
            gcsOutputDirectory: "{{ gcsOutputDirectory }}"
            parameterValues: "{{ parameterValues }}"
            inputArtifacts: "{{ inputArtifacts }}"
            failurePolicy: "{{ failurePolicy }}"
            parameters: "{{ parameters }}"
          preflightValidations: {{ preflightValidations }}
          encryptionSpec:
            kmsKeyName: "{{ kmsKeyName }}"
          name: "{{ name }}"
          error:
            message: "{{ message }}"
            details: "{{ details }}"
            code: {{ code }}
          templateUri: "{{ templateUri }}"
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. User provided name of the Schedule. The name can be up to 128 characters long and can consist of any UTF-8 characters.
    - name: name
      value: "{{ name }}"
      description: |
        Immutable. The resource name of the Schedule.
    - name: cron
      value: "{{ cron }}"
      description: |
        Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=\${IANA_TIME_ZONE}" or "TZ=\${IANA_TIME_ZONE}". The \${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 * * * *", or "TZ=America/New_York 1 * * * *".
    - name: startTime
      value: "{{ startTime }}"
      description: |
        Optional. Timestamp after which the first run can be scheduled. Default to Schedule create time if not specified.
    - name: maxConcurrentActiveRunCount
      value: "{{ maxConcurrentActiveRunCount }}"
      description: |
        Optional. Specifies the maximum number of active runs that can be executed concurrently for this Schedule. This limits the number of runs that can be in a non-terminal state at the same time. Currently, this field is only supported for requests of type CreatePipelineJobRequest.
    - name: createNotebookExecutionJobRequest
      description: |
        Request for NotebookService.CreateNotebookExecutionJob.
      value:
        notebookExecutionJob:
          notebookRuntimeTemplateResourceName: "{{ notebookRuntimeTemplateResourceName }}"
          jobState: "{{ jobState }}"
          directNotebookSource:
            content: "{{ content }}"
          customEnvironmentSpec:
            networkSpec:
              network: "{{ network }}"
              enableInternetAccess: {{ enableInternetAccess }}
              subnetwork: "{{ subnetwork }}"
            machineSpec:
              machineType: "{{ machineType }}"
              tpuTopology: "{{ tpuTopology }}"
              reservationAffinity:
                reservationAffinityType: "{{ reservationAffinityType }}"
                key: "{{ key }}"
                values: "{{ values }}"
              acceleratorCount: {{ acceleratorCount }}
              acceleratorType: "{{ acceleratorType }}"
              gpuPartitionSize: "{{ gpuPartitionSize }}"
            persistentDiskSpec:
              diskType: "{{ diskType }}"
              diskSizeGb: "{{ diskSizeGb }}"
            shieldedInstanceConfig:
              enableVtpm: {{ enableVtpm }}
              enableIntegrityMonitoring: {{ enableIntegrityMonitoring }}
              enableSecureBoot: {{ enableSecureBoot }}
          workbenchRuntime:
            vmImage:
              family: "{{ family }}"
              project: "{{ project }}"
              name: "{{ name }}"
            customContainerImage:
              repository: "{{ repository }}"
              tag: "{{ tag }}"
          updateTime: "{{ updateTime }}"
          executionUser: "{{ executionUser }}"
          displayName: "{{ displayName }}"
          name: "{{ name }}"
          encryptionSpec:
            kmsKeyName: "{{ kmsKeyName }}"
          gcsOutputUri: "{{ gcsOutputUri }}"
          executionTimeout: "{{ executionTimeout }}"
          labels: "{{ labels }}"
          dataformRepositorySource:
            dataformRepositoryResourceName: "{{ dataformRepositoryResourceName }}"
            commitSha: "{{ commitSha }}"
          kernelName: "{{ kernelName }}"
          scheduleResourceName: "{{ scheduleResourceName }}"
          createTime: "{{ createTime }}"
          gcsNotebookSource:
            uri: "{{ uri }}"
            generation: "{{ generation }}"
          serviceAccount: "{{ serviceAccount }}"
          status:
            message: "{{ message }}"
            details: "{{ details }}"
            code: {{ code }}
        notebookExecutionJobId: "{{ notebookExecutionJobId }}"
        parent: "{{ parent }}"
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

Updates an active or paused Schedule. When the Schedule is updated, new runs will be scheduled starting from the updated next execution time after the update time based on the time_specification in the updated Schedule. All unstarted runs before the update time will be skipped while already created runs will NOT be paused or canceled.

```sql
UPDATE google.aiplatform.schedules
SET 
data__allowQueueing = {{ allowQueueing }},
data__maxRunCount = '{{ maxRunCount }}',
data__maxConcurrentRunCount = '{{ maxConcurrentRunCount }}',
data__endTime = '{{ endTime }}',
data__createPipelineJobRequest = '{{ createPipelineJobRequest }}',
data__displayName = '{{ displayName }}',
data__name = '{{ name }}',
data__cron = '{{ cron }}',
data__startTime = '{{ startTime }}',
data__maxConcurrentActiveRunCount = '{{ maxConcurrentActiveRunCount }}',
data__createNotebookExecutionJobRequest = '{{ createNotebookExecutionJobRequest }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND schedulesId = '{{ schedulesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
allowQueueing,
catchUp,
createNotebookExecutionJobRequest,
createPipelineJobRequest,
createTime,
cron,
displayName,
endTime,
lastPauseTime,
lastResumeTime,
lastScheduledRunResponse,
maxConcurrentActiveRunCount,
maxConcurrentRunCount,
maxRunCount,
nextRunTime,
startTime,
startedRunCount,
state,
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

Deletes a Schedule.

```sql
DELETE FROM google.aiplatform.schedules
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND schedulesId = '{{ schedulesId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="pause"
    values={[
        { label: 'pause', value: 'pause' },
        { label: 'resume', value: 'resume' }
    ]}
>
<TabItem value="pause">

Pauses a Schedule. Will mark Schedule.state to 'PAUSED'. If the schedule is paused, no new runs will be created. Already created runs will NOT be paused or canceled.

```sql
EXEC google.aiplatform.schedules.pause 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@schedulesId='{{ schedulesId }}' --required
;
```
</TabItem>
<TabItem value="resume">

Resumes a paused Schedule to start scheduling new runs. Will mark Schedule.state to 'ACTIVE'. Only paused Schedule can be resumed. When the Schedule is resumed, new runs will be scheduled starting from the next execution time after the current time based on the time_specification in the Schedule. If Schedule.catch_up is set up true, all missed runs will be scheduled for backfill first.

```sql
EXEC google.aiplatform.schedules.resume 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@schedulesId='{{ schedulesId }}' --required 
@@json=
'{
"catchUp": {{ catchUp }}
}'
;
```
</TabItem>
</Tabs>
