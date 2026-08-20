--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
  - dataflow
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

Creates, updates, deletes, gets or lists a <code>jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataflow.jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_jobs_get"
    values={[
        { label: 'projects_locations_jobs_get', value: 'projects_locations_jobs_get' },
        { label: 'projects_jobs_get', value: 'projects_jobs_get' },
        { label: 'projects_locations_jobs_list', value: 'projects_locations_jobs_list' },
        { label: 'projects_jobs_list', value: 'projects_jobs_list' }
    ]}
>
<TabItem value="projects_locations_jobs_get">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of this job. This field is set by the Dataflow service when the job is created, and is immutable for the life of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-specified Dataflow job name. Only one active job with a given name can exist in a project within one region at any given time. Jobs in different regions can have the same name. If a caller attempts to create a job with the same name as an active job that already exists, the attempt returns the existing job. The name must match the regular expression `[a-z]([-a-z0-9]&#123;0,1022&#125;[a-z0-9])?`</td>
</tr>
<tr>
    <td><CopyableCode code="clientRequestId" /></td>
    <td><code>string</code></td>
    <td>The client's unique identifier of the job, re-used across retried attempts. If this field is set, the service will ensure its uniqueness. The request to create a job will fail if the service has knowledge of a previously submitted job with the same client's ID and job name. The caller may use this field to ensure idempotence of job creation across retried attempts to create a job. By default, the field is empty and, in that case, the service ignores it.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The timestamp when the job was initially created. Immutable and set by the Cloud Dataflow service.</td>
</tr>
<tr>
    <td><CopyableCode code="createdFromSnapshotId" /></td>
    <td><code>string</code></td>
    <td>If this is specified, the job's initial state is populated from the given snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="currentState" /></td>
    <td><code>string</code></td>
    <td>The current state of the job. Jobs are created in the `JOB_STATE_STOPPED` state unless otherwise specified. A job in the `JOB_STATE_RUNNING` state may asynchronously enter a terminal state. After a job has reached a terminal state, no further state updates may be made. This field might be mutated by the Dataflow service; callers cannot mutate it. (JOB_STATE_UNKNOWN, JOB_STATE_STOPPED, JOB_STATE_RUNNING, JOB_STATE_DONE, JOB_STATE_FAILED, JOB_STATE_CANCELLED, JOB_STATE_UPDATED, JOB_STATE_DRAINING, JOB_STATE_DRAINED, JOB_STATE_PENDING, JOB_STATE_CANCELLING, JOB_STATE_QUEUED, JOB_STATE_RESOURCE_CLEANING_UP, JOB_STATE_PAUSING, JOB_STATE_PAUSED)</td>
</tr>
<tr>
    <td><CopyableCode code="currentStateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The timestamp associated with the current state.</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>object</code></td>
    <td>Optional. The environment for the job. (id: Environment)</td>
</tr>
<tr>
    <td><CopyableCode code="executionInfo" /></td>
    <td><code>object</code></td>
    <td>Deprecated. (id: JobExecutionInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="jobMetadata" /></td>
    <td><code>object</code></td>
    <td>This field is populated by the Dataflow service to support filtering jobs by the metadata values provided here. Populated for ListJobs and all GetJob views SUMMARY and higher. (id: JobMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User-defined labels for this job. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \p&#123;Ll&#125;\p&#123;Lo&#125;&#123;0,62&#125; * Values must conform to regexp: [\p&#123;Ll&#125;\p&#123;Lo&#125;\p&#123;N&#125;_-]&#123;0,63&#125; * Both keys and values are additionally constrained to be &lt;= 128 bytes in size.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Optional. The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.</td>
</tr>
<tr>
    <td><CopyableCode code="pausable" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether the job can be paused.</td>
</tr>
<tr>
    <td><CopyableCode code="pipelineDescription" /></td>
    <td><code>object</code></td>
    <td>Preliminary field: The format of this data may change at any time. A description of the user pipeline and stages through which it is executed. Created by Cloud Dataflow service. Only retrieved with JOB_VIEW_DESCRIPTION or JOB_VIEW_ALL. (id: PipelineDescription)</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Google Cloud project that the job belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="replaceJobId" /></td>
    <td><code>string</code></td>
    <td>If this job is an update of an existing job, this field is the job ID of the job it replaced. When sending a `CreateJobRequest`, you can update a job by specifying it here. The job named here is stopped, and its intermediate state is transferred to this job.</td>
</tr>
<tr>
    <td><CopyableCode code="replacedByJobId" /></td>
    <td><code>string</code></td>
    <td>If another job is an update of this job (and thus, this job is in `JOB_STATE_UPDATED`), this field contains the ID of that job.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedState" /></td>
    <td><code>string</code></td>
    <td>The job's requested state. Applies to `UpdateJob` requests. Set `requested_state` with `UpdateJob` requests to switch between the states `JOB_STATE_STOPPED` and `JOB_STATE_RUNNING`. You can also use `UpdateJob` requests to change a job's state from `JOB_STATE_RUNNING` to `JOB_STATE_CANCELLED`, `JOB_STATE_DONE`, or `JOB_STATE_DRAINED`. These states irrevocably terminate the job if it hasn't already reached a terminal state. This field has no effect on `CreateJob` requests. (JOB_STATE_UNKNOWN, JOB_STATE_STOPPED, JOB_STATE_RUNNING, JOB_STATE_DONE, JOB_STATE_FAILED, JOB_STATE_CANCELLED, JOB_STATE_UPDATED, JOB_STATE_DRAINING, JOB_STATE_DRAINED, JOB_STATE_PENDING, JOB_STATE_CANCELLING, JOB_STATE_QUEUED, JOB_STATE_RESOURCE_CLEANING_UP, JOB_STATE_PAUSING, JOB_STATE_PAUSED)</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeUpdatableParams" /></td>
    <td><code>object</code></td>
    <td>This field may ONLY be modified at runtime using the projects.jobs.update method to adjust job behavior. This field has no effect when specified at job creation. (id: RuntimeUpdatableParams)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceResources" /></td>
    <td><code>object</code></td>
    <td>Output only. Resources used by the Dataflow Service to run the job. (id: ServiceResources)</td>
</tr>
<tr>
    <td><CopyableCode code="stageStates" /></td>
    <td><code>array</code></td>
    <td>This field may be mutated by the Cloud Dataflow service; callers cannot mutate it.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The timestamp when the job was started (transitioned to JOB_STATE_PENDING). Flexible resource scheduling jobs are started with some delay after job creation, so start_time is unset before start and is updated when the job is started by the Cloud Dataflow service. For other jobs, start_time always equals to create_time and is immutable and set by the Cloud Dataflow service.</td>
</tr>
<tr>
    <td><CopyableCode code="steps" /></td>
    <td><code>array</code></td>
    <td>Exactly one of step or steps_location should be specified. The top-level steps that constitute the entire job. Only retrieved with JOB_VIEW_ALL.</td>
</tr>
<tr>
    <td><CopyableCode code="stepsLocation" /></td>
    <td><code>string</code></td>
    <td>The Cloud Storage location where the steps are stored.</td>
</tr>
<tr>
    <td><CopyableCode code="tempFiles" /></td>
    <td><code>array</code></td>
    <td>A set of files the system should be aware of that are used for temporary storage. These temporary files will be removed on job completion. No duplicates are allowed. No file patterns are supported. The supported files are: Google Cloud Storage: storage.googleapis.com/&#123;bucket&#125;/&#123;object&#125; bucket.storage.googleapis.com/&#123;object&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="transformNameMapping" /></td>
    <td><code>object</code></td>
    <td>Optional. The map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Optional. The type of Dataflow job. (JOB_TYPE_UNKNOWN, JOB_TYPE_BATCH, JOB_TYPE_STREAMING)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_jobs_get">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of this job. This field is set by the Dataflow service when the job is created, and is immutable for the life of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-specified Dataflow job name. Only one active job with a given name can exist in a project within one region at any given time. Jobs in different regions can have the same name. If a caller attempts to create a job with the same name as an active job that already exists, the attempt returns the existing job. The name must match the regular expression `[a-z]([-a-z0-9]&#123;0,1022&#125;[a-z0-9])?`</td>
</tr>
<tr>
    <td><CopyableCode code="clientRequestId" /></td>
    <td><code>string</code></td>
    <td>The client's unique identifier of the job, re-used across retried attempts. If this field is set, the service will ensure its uniqueness. The request to create a job will fail if the service has knowledge of a previously submitted job with the same client's ID and job name. The caller may use this field to ensure idempotence of job creation across retried attempts to create a job. By default, the field is empty and, in that case, the service ignores it.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The timestamp when the job was initially created. Immutable and set by the Cloud Dataflow service.</td>
</tr>
<tr>
    <td><CopyableCode code="createdFromSnapshotId" /></td>
    <td><code>string</code></td>
    <td>If this is specified, the job's initial state is populated from the given snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="currentState" /></td>
    <td><code>string</code></td>
    <td>The current state of the job. Jobs are created in the `JOB_STATE_STOPPED` state unless otherwise specified. A job in the `JOB_STATE_RUNNING` state may asynchronously enter a terminal state. After a job has reached a terminal state, no further state updates may be made. This field might be mutated by the Dataflow service; callers cannot mutate it. (JOB_STATE_UNKNOWN, JOB_STATE_STOPPED, JOB_STATE_RUNNING, JOB_STATE_DONE, JOB_STATE_FAILED, JOB_STATE_CANCELLED, JOB_STATE_UPDATED, JOB_STATE_DRAINING, JOB_STATE_DRAINED, JOB_STATE_PENDING, JOB_STATE_CANCELLING, JOB_STATE_QUEUED, JOB_STATE_RESOURCE_CLEANING_UP, JOB_STATE_PAUSING, JOB_STATE_PAUSED)</td>
</tr>
<tr>
    <td><CopyableCode code="currentStateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The timestamp associated with the current state.</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>object</code></td>
    <td>Optional. The environment for the job. (id: Environment)</td>
</tr>
<tr>
    <td><CopyableCode code="executionInfo" /></td>
    <td><code>object</code></td>
    <td>Deprecated. (id: JobExecutionInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="jobMetadata" /></td>
    <td><code>object</code></td>
    <td>This field is populated by the Dataflow service to support filtering jobs by the metadata values provided here. Populated for ListJobs and all GetJob views SUMMARY and higher. (id: JobMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User-defined labels for this job. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \p&#123;Ll&#125;\p&#123;Lo&#125;&#123;0,62&#125; * Values must conform to regexp: [\p&#123;Ll&#125;\p&#123;Lo&#125;\p&#123;N&#125;_-]&#123;0,63&#125; * Both keys and values are additionally constrained to be &lt;= 128 bytes in size.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Optional. The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.</td>
</tr>
<tr>
    <td><CopyableCode code="pausable" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether the job can be paused.</td>
</tr>
<tr>
    <td><CopyableCode code="pipelineDescription" /></td>
    <td><code>object</code></td>
    <td>Preliminary field: The format of this data may change at any time. A description of the user pipeline and stages through which it is executed. Created by Cloud Dataflow service. Only retrieved with JOB_VIEW_DESCRIPTION or JOB_VIEW_ALL. (id: PipelineDescription)</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Google Cloud project that the job belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="replaceJobId" /></td>
    <td><code>string</code></td>
    <td>If this job is an update of an existing job, this field is the job ID of the job it replaced. When sending a `CreateJobRequest`, you can update a job by specifying it here. The job named here is stopped, and its intermediate state is transferred to this job.</td>
</tr>
<tr>
    <td><CopyableCode code="replacedByJobId" /></td>
    <td><code>string</code></td>
    <td>If another job is an update of this job (and thus, this job is in `JOB_STATE_UPDATED`), this field contains the ID of that job.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedState" /></td>
    <td><code>string</code></td>
    <td>The job's requested state. Applies to `UpdateJob` requests. Set `requested_state` with `UpdateJob` requests to switch between the states `JOB_STATE_STOPPED` and `JOB_STATE_RUNNING`. You can also use `UpdateJob` requests to change a job's state from `JOB_STATE_RUNNING` to `JOB_STATE_CANCELLED`, `JOB_STATE_DONE`, or `JOB_STATE_DRAINED`. These states irrevocably terminate the job if it hasn't already reached a terminal state. This field has no effect on `CreateJob` requests. (JOB_STATE_UNKNOWN, JOB_STATE_STOPPED, JOB_STATE_RUNNING, JOB_STATE_DONE, JOB_STATE_FAILED, JOB_STATE_CANCELLED, JOB_STATE_UPDATED, JOB_STATE_DRAINING, JOB_STATE_DRAINED, JOB_STATE_PENDING, JOB_STATE_CANCELLING, JOB_STATE_QUEUED, JOB_STATE_RESOURCE_CLEANING_UP, JOB_STATE_PAUSING, JOB_STATE_PAUSED)</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeUpdatableParams" /></td>
    <td><code>object</code></td>
    <td>This field may ONLY be modified at runtime using the projects.jobs.update method to adjust job behavior. This field has no effect when specified at job creation. (id: RuntimeUpdatableParams)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceResources" /></td>
    <td><code>object</code></td>
    <td>Output only. Resources used by the Dataflow Service to run the job. (id: ServiceResources)</td>
</tr>
<tr>
    <td><CopyableCode code="stageStates" /></td>
    <td><code>array</code></td>
    <td>This field may be mutated by the Cloud Dataflow service; callers cannot mutate it.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The timestamp when the job was started (transitioned to JOB_STATE_PENDING). Flexible resource scheduling jobs are started with some delay after job creation, so start_time is unset before start and is updated when the job is started by the Cloud Dataflow service. For other jobs, start_time always equals to create_time and is immutable and set by the Cloud Dataflow service.</td>
</tr>
<tr>
    <td><CopyableCode code="steps" /></td>
    <td><code>array</code></td>
    <td>Exactly one of step or steps_location should be specified. The top-level steps that constitute the entire job. Only retrieved with JOB_VIEW_ALL.</td>
</tr>
<tr>
    <td><CopyableCode code="stepsLocation" /></td>
    <td><code>string</code></td>
    <td>The Cloud Storage location where the steps are stored.</td>
</tr>
<tr>
    <td><CopyableCode code="tempFiles" /></td>
    <td><code>array</code></td>
    <td>A set of files the system should be aware of that are used for temporary storage. These temporary files will be removed on job completion. No duplicates are allowed. No file patterns are supported. The supported files are: Google Cloud Storage: storage.googleapis.com/&#123;bucket&#125;/&#123;object&#125; bucket.storage.googleapis.com/&#123;object&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="transformNameMapping" /></td>
    <td><code>object</code></td>
    <td>Optional. The map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Optional. The type of Dataflow job. (JOB_TYPE_UNKNOWN, JOB_TYPE_BATCH, JOB_TYPE_STREAMING)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_jobs_list">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of this job. This field is set by the Dataflow service when the job is created, and is immutable for the life of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-specified Dataflow job name. Only one active job with a given name can exist in a project within one region at any given time. Jobs in different regions can have the same name. If a caller attempts to create a job with the same name as an active job that already exists, the attempt returns the existing job. The name must match the regular expression `[a-z]([-a-z0-9]&#123;0,1022&#125;[a-z0-9])?`</td>
</tr>
<tr>
    <td><CopyableCode code="clientRequestId" /></td>
    <td><code>string</code></td>
    <td>The client's unique identifier of the job, re-used across retried attempts. If this field is set, the service will ensure its uniqueness. The request to create a job will fail if the service has knowledge of a previously submitted job with the same client's ID and job name. The caller may use this field to ensure idempotence of job creation across retried attempts to create a job. By default, the field is empty and, in that case, the service ignores it.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The timestamp when the job was initially created. Immutable and set by the Cloud Dataflow service.</td>
</tr>
<tr>
    <td><CopyableCode code="createdFromSnapshotId" /></td>
    <td><code>string</code></td>
    <td>If this is specified, the job's initial state is populated from the given snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="currentState" /></td>
    <td><code>string</code></td>
    <td>The current state of the job. Jobs are created in the `JOB_STATE_STOPPED` state unless otherwise specified. A job in the `JOB_STATE_RUNNING` state may asynchronously enter a terminal state. After a job has reached a terminal state, no further state updates may be made. This field might be mutated by the Dataflow service; callers cannot mutate it. (JOB_STATE_UNKNOWN, JOB_STATE_STOPPED, JOB_STATE_RUNNING, JOB_STATE_DONE, JOB_STATE_FAILED, JOB_STATE_CANCELLED, JOB_STATE_UPDATED, JOB_STATE_DRAINING, JOB_STATE_DRAINED, JOB_STATE_PENDING, JOB_STATE_CANCELLING, JOB_STATE_QUEUED, JOB_STATE_RESOURCE_CLEANING_UP, JOB_STATE_PAUSING, JOB_STATE_PAUSED)</td>
</tr>
<tr>
    <td><CopyableCode code="currentStateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The timestamp associated with the current state.</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>object</code></td>
    <td>Optional. The environment for the job. (id: Environment)</td>
</tr>
<tr>
    <td><CopyableCode code="executionInfo" /></td>
    <td><code>object</code></td>
    <td>Deprecated. (id: JobExecutionInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="jobMetadata" /></td>
    <td><code>object</code></td>
    <td>This field is populated by the Dataflow service to support filtering jobs by the metadata values provided here. Populated for ListJobs and all GetJob views SUMMARY and higher. (id: JobMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User-defined labels for this job. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \p&#123;Ll&#125;\p&#123;Lo&#125;&#123;0,62&#125; * Values must conform to regexp: [\p&#123;Ll&#125;\p&#123;Lo&#125;\p&#123;N&#125;_-]&#123;0,63&#125; * Both keys and values are additionally constrained to be &lt;= 128 bytes in size.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Optional. The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.</td>
</tr>
<tr>
    <td><CopyableCode code="pausable" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether the job can be paused.</td>
</tr>
<tr>
    <td><CopyableCode code="pipelineDescription" /></td>
    <td><code>object</code></td>
    <td>Preliminary field: The format of this data may change at any time. A description of the user pipeline and stages through which it is executed. Created by Cloud Dataflow service. Only retrieved with JOB_VIEW_DESCRIPTION or JOB_VIEW_ALL. (id: PipelineDescription)</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Google Cloud project that the job belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="replaceJobId" /></td>
    <td><code>string</code></td>
    <td>If this job is an update of an existing job, this field is the job ID of the job it replaced. When sending a `CreateJobRequest`, you can update a job by specifying it here. The job named here is stopped, and its intermediate state is transferred to this job.</td>
</tr>
<tr>
    <td><CopyableCode code="replacedByJobId" /></td>
    <td><code>string</code></td>
    <td>If another job is an update of this job (and thus, this job is in `JOB_STATE_UPDATED`), this field contains the ID of that job.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedState" /></td>
    <td><code>string</code></td>
    <td>The job's requested state. Applies to `UpdateJob` requests. Set `requested_state` with `UpdateJob` requests to switch between the states `JOB_STATE_STOPPED` and `JOB_STATE_RUNNING`. You can also use `UpdateJob` requests to change a job's state from `JOB_STATE_RUNNING` to `JOB_STATE_CANCELLED`, `JOB_STATE_DONE`, or `JOB_STATE_DRAINED`. These states irrevocably terminate the job if it hasn't already reached a terminal state. This field has no effect on `CreateJob` requests. (JOB_STATE_UNKNOWN, JOB_STATE_STOPPED, JOB_STATE_RUNNING, JOB_STATE_DONE, JOB_STATE_FAILED, JOB_STATE_CANCELLED, JOB_STATE_UPDATED, JOB_STATE_DRAINING, JOB_STATE_DRAINED, JOB_STATE_PENDING, JOB_STATE_CANCELLING, JOB_STATE_QUEUED, JOB_STATE_RESOURCE_CLEANING_UP, JOB_STATE_PAUSING, JOB_STATE_PAUSED)</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeUpdatableParams" /></td>
    <td><code>object</code></td>
    <td>This field may ONLY be modified at runtime using the projects.jobs.update method to adjust job behavior. This field has no effect when specified at job creation. (id: RuntimeUpdatableParams)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceResources" /></td>
    <td><code>object</code></td>
    <td>Output only. Resources used by the Dataflow Service to run the job. (id: ServiceResources)</td>
</tr>
<tr>
    <td><CopyableCode code="stageStates" /></td>
    <td><code>array</code></td>
    <td>This field may be mutated by the Cloud Dataflow service; callers cannot mutate it.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The timestamp when the job was started (transitioned to JOB_STATE_PENDING). Flexible resource scheduling jobs are started with some delay after job creation, so start_time is unset before start and is updated when the job is started by the Cloud Dataflow service. For other jobs, start_time always equals to create_time and is immutable and set by the Cloud Dataflow service.</td>
</tr>
<tr>
    <td><CopyableCode code="steps" /></td>
    <td><code>array</code></td>
    <td>Exactly one of step or steps_location should be specified. The top-level steps that constitute the entire job. Only retrieved with JOB_VIEW_ALL.</td>
</tr>
<tr>
    <td><CopyableCode code="stepsLocation" /></td>
    <td><code>string</code></td>
    <td>The Cloud Storage location where the steps are stored.</td>
</tr>
<tr>
    <td><CopyableCode code="tempFiles" /></td>
    <td><code>array</code></td>
    <td>A set of files the system should be aware of that are used for temporary storage. These temporary files will be removed on job completion. No duplicates are allowed. No file patterns are supported. The supported files are: Google Cloud Storage: storage.googleapis.com/&#123;bucket&#125;/&#123;object&#125; bucket.storage.googleapis.com/&#123;object&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="transformNameMapping" /></td>
    <td><code>object</code></td>
    <td>Optional. The map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Optional. The type of Dataflow job. (JOB_TYPE_UNKNOWN, JOB_TYPE_BATCH, JOB_TYPE_STREAMING)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_jobs_list">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of this job. This field is set by the Dataflow service when the job is created, and is immutable for the life of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-specified Dataflow job name. Only one active job with a given name can exist in a project within one region at any given time. Jobs in different regions can have the same name. If a caller attempts to create a job with the same name as an active job that already exists, the attempt returns the existing job. The name must match the regular expression `[a-z]([-a-z0-9]&#123;0,1022&#125;[a-z0-9])?`</td>
</tr>
<tr>
    <td><CopyableCode code="clientRequestId" /></td>
    <td><code>string</code></td>
    <td>The client's unique identifier of the job, re-used across retried attempts. If this field is set, the service will ensure its uniqueness. The request to create a job will fail if the service has knowledge of a previously submitted job with the same client's ID and job name. The caller may use this field to ensure idempotence of job creation across retried attempts to create a job. By default, the field is empty and, in that case, the service ignores it.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The timestamp when the job was initially created. Immutable and set by the Cloud Dataflow service.</td>
</tr>
<tr>
    <td><CopyableCode code="createdFromSnapshotId" /></td>
    <td><code>string</code></td>
    <td>If this is specified, the job's initial state is populated from the given snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="currentState" /></td>
    <td><code>string</code></td>
    <td>The current state of the job. Jobs are created in the `JOB_STATE_STOPPED` state unless otherwise specified. A job in the `JOB_STATE_RUNNING` state may asynchronously enter a terminal state. After a job has reached a terminal state, no further state updates may be made. This field might be mutated by the Dataflow service; callers cannot mutate it. (JOB_STATE_UNKNOWN, JOB_STATE_STOPPED, JOB_STATE_RUNNING, JOB_STATE_DONE, JOB_STATE_FAILED, JOB_STATE_CANCELLED, JOB_STATE_UPDATED, JOB_STATE_DRAINING, JOB_STATE_DRAINED, JOB_STATE_PENDING, JOB_STATE_CANCELLING, JOB_STATE_QUEUED, JOB_STATE_RESOURCE_CLEANING_UP, JOB_STATE_PAUSING, JOB_STATE_PAUSED)</td>
</tr>
<tr>
    <td><CopyableCode code="currentStateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The timestamp associated with the current state.</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>object</code></td>
    <td>Optional. The environment for the job. (id: Environment)</td>
</tr>
<tr>
    <td><CopyableCode code="executionInfo" /></td>
    <td><code>object</code></td>
    <td>Deprecated. (id: JobExecutionInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="jobMetadata" /></td>
    <td><code>object</code></td>
    <td>This field is populated by the Dataflow service to support filtering jobs by the metadata values provided here. Populated for ListJobs and all GetJob views SUMMARY and higher. (id: JobMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User-defined labels for this job. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \p&#123;Ll&#125;\p&#123;Lo&#125;&#123;0,62&#125; * Values must conform to regexp: [\p&#123;Ll&#125;\p&#123;Lo&#125;\p&#123;N&#125;_-]&#123;0,63&#125; * Both keys and values are additionally constrained to be &lt;= 128 bytes in size.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Optional. The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.</td>
</tr>
<tr>
    <td><CopyableCode code="pausable" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether the job can be paused.</td>
</tr>
<tr>
    <td><CopyableCode code="pipelineDescription" /></td>
    <td><code>object</code></td>
    <td>Preliminary field: The format of this data may change at any time. A description of the user pipeline and stages through which it is executed. Created by Cloud Dataflow service. Only retrieved with JOB_VIEW_DESCRIPTION or JOB_VIEW_ALL. (id: PipelineDescription)</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Google Cloud project that the job belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="replaceJobId" /></td>
    <td><code>string</code></td>
    <td>If this job is an update of an existing job, this field is the job ID of the job it replaced. When sending a `CreateJobRequest`, you can update a job by specifying it here. The job named here is stopped, and its intermediate state is transferred to this job.</td>
</tr>
<tr>
    <td><CopyableCode code="replacedByJobId" /></td>
    <td><code>string</code></td>
    <td>If another job is an update of this job (and thus, this job is in `JOB_STATE_UPDATED`), this field contains the ID of that job.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedState" /></td>
    <td><code>string</code></td>
    <td>The job's requested state. Applies to `UpdateJob` requests. Set `requested_state` with `UpdateJob` requests to switch between the states `JOB_STATE_STOPPED` and `JOB_STATE_RUNNING`. You can also use `UpdateJob` requests to change a job's state from `JOB_STATE_RUNNING` to `JOB_STATE_CANCELLED`, `JOB_STATE_DONE`, or `JOB_STATE_DRAINED`. These states irrevocably terminate the job if it hasn't already reached a terminal state. This field has no effect on `CreateJob` requests. (JOB_STATE_UNKNOWN, JOB_STATE_STOPPED, JOB_STATE_RUNNING, JOB_STATE_DONE, JOB_STATE_FAILED, JOB_STATE_CANCELLED, JOB_STATE_UPDATED, JOB_STATE_DRAINING, JOB_STATE_DRAINED, JOB_STATE_PENDING, JOB_STATE_CANCELLING, JOB_STATE_QUEUED, JOB_STATE_RESOURCE_CLEANING_UP, JOB_STATE_PAUSING, JOB_STATE_PAUSED)</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeUpdatableParams" /></td>
    <td><code>object</code></td>
    <td>This field may ONLY be modified at runtime using the projects.jobs.update method to adjust job behavior. This field has no effect when specified at job creation. (id: RuntimeUpdatableParams)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceResources" /></td>
    <td><code>object</code></td>
    <td>Output only. Resources used by the Dataflow Service to run the job. (id: ServiceResources)</td>
</tr>
<tr>
    <td><CopyableCode code="stageStates" /></td>
    <td><code>array</code></td>
    <td>This field may be mutated by the Cloud Dataflow service; callers cannot mutate it.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The timestamp when the job was started (transitioned to JOB_STATE_PENDING). Flexible resource scheduling jobs are started with some delay after job creation, so start_time is unset before start and is updated when the job is started by the Cloud Dataflow service. For other jobs, start_time always equals to create_time and is immutable and set by the Cloud Dataflow service.</td>
</tr>
<tr>
    <td><CopyableCode code="steps" /></td>
    <td><code>array</code></td>
    <td>Exactly one of step or steps_location should be specified. The top-level steps that constitute the entire job. Only retrieved with JOB_VIEW_ALL.</td>
</tr>
<tr>
    <td><CopyableCode code="stepsLocation" /></td>
    <td><code>string</code></td>
    <td>The Cloud Storage location where the steps are stored.</td>
</tr>
<tr>
    <td><CopyableCode code="tempFiles" /></td>
    <td><code>array</code></td>
    <td>A set of files the system should be aware of that are used for temporary storage. These temporary files will be removed on job completion. No duplicates are allowed. No file patterns are supported. The supported files are: Google Cloud Storage: storage.googleapis.com/&#123;bucket&#125;/&#123;object&#125; bucket.storage.googleapis.com/&#123;object&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="transformNameMapping" /></td>
    <td><code>object</code></td>
    <td>Optional. The map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Optional. The type of Dataflow job. (JOB_TYPE_UNKNOWN, JOB_TYPE_BATCH, JOB_TYPE_STREAMING)</td>
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
    <td><a href="#projects_locations_jobs_get"><CopyableCode code="projects_locations_jobs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-location"><code>location</code></a>, <a href="#parameter-jobId"><code>jobId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`. # IAM Permissions Requires the `dataflow.jobs.get` permission on the job.</td>
</tr>
<tr>
    <td><a href="#projects_jobs_get"><CopyableCode code="projects_jobs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-jobId"><code>jobId</code></a></td>
    <td><a href="#parameter-location"><code>location</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`. # IAM Permissions Requires the `dataflow.jobs.get` permission on the job.</td>
</tr>
<tr>
    <td><a href="#projects_locations_jobs_list"><CopyableCode code="projects_locations_jobs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-location"><code>location</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, because you can only get the list of jobs that are running in `us-central1`. `projects.locations.jobs.list` and `projects.jobs.list` support filtering the list of jobs by name. Filtering by name isn't supported by `projects.jobs.aggregated`. # IAM Permissions Requires the `dataflow.jobs.list` permission on the project.</td>
</tr>
<tr>
    <td><a href="#projects_jobs_list"><CopyableCode code="projects_jobs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-location"><code>location</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, because you can only get the list of jobs that are running in `us-central1`. `projects.locations.jobs.list` and `projects.jobs.list` support filtering the list of jobs by name. Filtering by name isn't supported by `projects.jobs.aggregated`. # IAM Permissions Requires the `dataflow.jobs.list` permission on the project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_jobs_create"><CopyableCode code="projects_locations_jobs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-location"><code>location</code></a></td>
    <td><a href="#parameter-replaceJobId"><code>replaceJobId</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Creates a Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API. # IAM Permissions 1. Requires the `dataflow.jobs.create` permission on the project. 2. `resourcemanager.projects.get` (Specifically required for regional endpoints to resolve regional resource metadata)</td>
</tr>
<tr>
    <td><a href="#projects_jobs_create"><CopyableCode code="projects_jobs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a></td>
    <td><a href="#parameter-location"><code>location</code></a>, <a href="#parameter-replaceJobId"><code>replaceJobId</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Creates a Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API. # IAM Permissions 1. Requires the `dataflow.jobs.create` permission on the project. 2. `resourcemanager.projects.get` (Specifically required for regional endpoints to resolve regional resource metadata)</td>
</tr>
<tr>
    <td><a href="#projects_locations_jobs_update"><CopyableCode code="projects_locations_jobs_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-location"><code>location</code></a>, <a href="#parameter-jobId"><code>jobId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`. # IAM Permissions 1. Requires the `dataflow.jobs.cancel` permission to cancel a job. 2. Requires the `dataflow.jobs.updateContents` permission to update runtime parameters.</td>
</tr>
<tr>
    <td><a href="#projects_jobs_update"><CopyableCode code="projects_jobs_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-jobId"><code>jobId</code></a></td>
    <td><a href="#parameter-location"><code>location</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`. # IAM Permissions 1. Requires the `dataflow.jobs.cancel` permission to cancel a job. 2. Requires the `dataflow.jobs.updateContents` permission to update runtime parameters.</td>
</tr>
<tr>
    <td><a href="#projects_jobs_aggregated"><CopyableCode code="projects_jobs_aggregated" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-location"><code>location</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>List the jobs of a project across all regions. **Note:** This method doesn't support filtering the list of jobs by name. # IAM Permissions Requires the `dataflow.jobs.list` permission on the project.</td>
</tr>
<tr>
    <td><a href="#projects_jobs_snapshot"><CopyableCode code="projects_jobs_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-jobId"><code>jobId</code></a></td>
    <td></td>
    <td>Snapshot the state of a streaming job. # IAM Permissions Requires the `dataflow.jobs.snapshot` permission on the job.</td>
</tr>
<tr>
    <td><a href="#projects_locations_jobs_snapshot"><CopyableCode code="projects_locations_jobs_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-location"><code>location</code></a>, <a href="#parameter-jobId"><code>jobId</code></a></td>
    <td></td>
    <td>Snapshot the state of a streaming job. # IAM Permissions Requires the `dataflow.jobs.snapshot` permission on the job.</td>
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
<tr id="parameter-jobId">
    <td><CopyableCode code="jobId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-location">
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-location">
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
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
<tr id="parameter-replaceJobId">
    <td><CopyableCode code="replaceJobId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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
    defaultValue="projects_locations_jobs_get"
    values={[
        { label: 'projects_locations_jobs_get', value: 'projects_locations_jobs_get' },
        { label: 'projects_jobs_get', value: 'projects_jobs_get' },
        { label: 'projects_locations_jobs_list', value: 'projects_locations_jobs_list' },
        { label: 'projects_jobs_list', value: 'projects_jobs_list' }
    ]}
>
<TabItem value="projects_locations_jobs_get">

Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`. # IAM Permissions Requires the `dataflow.jobs.get` permission on the job.

```sql
SELECT
id,
name,
clientRequestId,
createTime,
createdFromSnapshotId,
currentState,
currentStateTime,
environment,
executionInfo,
jobMetadata,
labels,
location,
pausable,
pipelineDescription,
projectId,
replaceJobId,
replacedByJobId,
requestedState,
runtimeUpdatableParams,
satisfiesPzi,
satisfiesPzs,
serviceResources,
stageStates,
startTime,
steps,
stepsLocation,
tempFiles,
transformNameMapping,
type
FROM google.dataflow.jobs
WHERE projectId = '{{ projectId }}' -- required
AND location = '{{ location }}' -- required
AND jobId = '{{ jobId }}' -- required
AND view = '{{ view }}'
;
```
</TabItem>
<TabItem value="projects_jobs_get">

Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`. # IAM Permissions Requires the `dataflow.jobs.get` permission on the job.

```sql
SELECT
id,
name,
clientRequestId,
createTime,
createdFromSnapshotId,
currentState,
currentStateTime,
environment,
executionInfo,
jobMetadata,
labels,
location,
pausable,
pipelineDescription,
projectId,
replaceJobId,
replacedByJobId,
requestedState,
runtimeUpdatableParams,
satisfiesPzi,
satisfiesPzs,
serviceResources,
stageStates,
startTime,
steps,
stepsLocation,
tempFiles,
transformNameMapping,
type
FROM google.dataflow.jobs
WHERE projectId = '{{ projectId }}' -- required
AND jobId = '{{ jobId }}' -- required
AND location = '{{ location }}'
AND view = '{{ view }}'
;
```
</TabItem>
<TabItem value="projects_locations_jobs_list">

List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, because you can only get the list of jobs that are running in `us-central1`. `projects.locations.jobs.list` and `projects.jobs.list` support filtering the list of jobs by name. Filtering by name isn't supported by `projects.jobs.aggregated`. # IAM Permissions Requires the `dataflow.jobs.list` permission on the project.

```sql
SELECT
id,
name,
clientRequestId,
createTime,
createdFromSnapshotId,
currentState,
currentStateTime,
environment,
executionInfo,
jobMetadata,
labels,
location,
pausable,
pipelineDescription,
projectId,
replaceJobId,
replacedByJobId,
requestedState,
runtimeUpdatableParams,
satisfiesPzi,
satisfiesPzs,
serviceResources,
stageStates,
startTime,
steps,
stepsLocation,
tempFiles,
transformNameMapping,
type
FROM google.dataflow.jobs
WHERE projectId = '{{ projectId }}' -- required
AND location = '{{ location }}' -- required
AND filter = '{{ filter }}'
AND name = '{{ name }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND view = '{{ view }}'
;
```
</TabItem>
<TabItem value="projects_jobs_list">

List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, because you can only get the list of jobs that are running in `us-central1`. `projects.locations.jobs.list` and `projects.jobs.list` support filtering the list of jobs by name. Filtering by name isn't supported by `projects.jobs.aggregated`. # IAM Permissions Requires the `dataflow.jobs.list` permission on the project.

```sql
SELECT
id,
name,
clientRequestId,
createTime,
createdFromSnapshotId,
currentState,
currentStateTime,
environment,
executionInfo,
jobMetadata,
labels,
location,
pausable,
pipelineDescription,
projectId,
replaceJobId,
replacedByJobId,
requestedState,
runtimeUpdatableParams,
satisfiesPzi,
satisfiesPzs,
serviceResources,
stageStates,
startTime,
steps,
stepsLocation,
tempFiles,
transformNameMapping,
type
FROM google.dataflow.jobs
WHERE projectId = '{{ projectId }}' -- required
AND filter = '{{ filter }}'
AND location = '{{ location }}'
AND name = '{{ name }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND view = '{{ view }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_jobs_create"
    values={[
        { label: 'projects_locations_jobs_create', value: 'projects_locations_jobs_create' },
        { label: 'projects_jobs_create', value: 'projects_jobs_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_jobs_create">

Creates a Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API. # IAM Permissions 1. Requires the `dataflow.jobs.create` permission on the project. 2. `resourcemanager.projects.get` (Specifically required for regional endpoints to resolve regional resource metadata)

```sql
INSERT INTO google.dataflow.jobs (
data__clientRequestId,
data__createTime,
data__createdFromSnapshotId,
data__currentState,
data__currentStateTime,
data__environment,
data__executionInfo,
data__id,
data__jobMetadata,
data__labels,
data__location,
data__name,
data__pipelineDescription,
data__projectId,
data__replaceJobId,
data__replacedByJobId,
data__requestedState,
data__runtimeUpdatableParams,
data__satisfiesPzs,
data__stageStates,
data__startTime,
data__steps,
data__stepsLocation,
data__tempFiles,
data__transformNameMapping,
data__type,
projectId,
location,
replaceJobId,
view
)
SELECT 
'{{ clientRequestId }}',
'{{ createTime }}',
'{{ createdFromSnapshotId }}',
'{{ currentState }}',
'{{ currentStateTime }}',
'{{ environment }}',
'{{ executionInfo }}',
'{{ id }}',
'{{ jobMetadata }}',
'{{ labels }}',
'{{ location }}',
'{{ name }}',
'{{ pipelineDescription }}',
'{{ projectId }}',
'{{ replaceJobId }}',
'{{ replacedByJobId }}',
'{{ requestedState }}',
'{{ runtimeUpdatableParams }}',
{{ satisfiesPzs }},
'{{ stageStates }}',
'{{ startTime }}',
'{{ steps }}',
'{{ stepsLocation }}',
'{{ tempFiles }}',
'{{ transformNameMapping }}',
'{{ type }}',
'{{ projectId }}',
'{{ location }}',
'{{ replaceJobId }}',
'{{ view }}'
RETURNING
id,
name,
clientRequestId,
createTime,
createdFromSnapshotId,
currentState,
currentStateTime,
environment,
executionInfo,
jobMetadata,
labels,
location,
pausable,
pipelineDescription,
projectId,
replaceJobId,
replacedByJobId,
requestedState,
runtimeUpdatableParams,
satisfiesPzi,
satisfiesPzs,
serviceResources,
stageStates,
startTime,
steps,
stepsLocation,
tempFiles,
transformNameMapping,
type
;
```
</TabItem>
<TabItem value="projects_jobs_create">

Creates a Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API. # IAM Permissions 1. Requires the `dataflow.jobs.create` permission on the project. 2. `resourcemanager.projects.get` (Specifically required for regional endpoints to resolve regional resource metadata)

```sql
INSERT INTO google.dataflow.jobs (
data__clientRequestId,
data__createTime,
data__createdFromSnapshotId,
data__currentState,
data__currentStateTime,
data__environment,
data__executionInfo,
data__id,
data__jobMetadata,
data__labels,
data__location,
data__name,
data__pipelineDescription,
data__projectId,
data__replaceJobId,
data__replacedByJobId,
data__requestedState,
data__runtimeUpdatableParams,
data__satisfiesPzs,
data__stageStates,
data__startTime,
data__steps,
data__stepsLocation,
data__tempFiles,
data__transformNameMapping,
data__type,
projectId,
location,
replaceJobId,
view
)
SELECT 
'{{ clientRequestId }}',
'{{ createTime }}',
'{{ createdFromSnapshotId }}',
'{{ currentState }}',
'{{ currentStateTime }}',
'{{ environment }}',
'{{ executionInfo }}',
'{{ id }}',
'{{ jobMetadata }}',
'{{ labels }}',
'{{ location }}',
'{{ name }}',
'{{ pipelineDescription }}',
'{{ projectId }}',
'{{ replaceJobId }}',
'{{ replacedByJobId }}',
'{{ requestedState }}',
'{{ runtimeUpdatableParams }}',
{{ satisfiesPzs }},
'{{ stageStates }}',
'{{ startTime }}',
'{{ steps }}',
'{{ stepsLocation }}',
'{{ tempFiles }}',
'{{ transformNameMapping }}',
'{{ type }}',
'{{ projectId }}',
'{{ location }}',
'{{ replaceJobId }}',
'{{ view }}'
RETURNING
id,
name,
clientRequestId,
createTime,
createdFromSnapshotId,
currentState,
currentStateTime,
environment,
executionInfo,
jobMetadata,
labels,
location,
pausable,
pipelineDescription,
projectId,
replaceJobId,
replacedByJobId,
requestedState,
runtimeUpdatableParams,
satisfiesPzi,
satisfiesPzs,
serviceResources,
stageStates,
startTime,
steps,
stepsLocation,
tempFiles,
transformNameMapping,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: jobs
  props:
    - name: projectId
      value: "{{ projectId }}"
      description: Required parameter for the jobs resource.
    - name: location
      value: "{{ location }}"
      description: Required parameter for the jobs resource.
    - name: clientRequestId
      value: "{{ clientRequestId }}"
      description: |
        The client's unique identifier of the job, re-used across retried attempts. If this field is set, the service will ensure its uniqueness. The request to create a job will fail if the service has knowledge of a previously submitted job with the same client's ID and job name. The caller may use this field to ensure idempotence of job creation across retried attempts to create a job. By default, the field is empty and, in that case, the service ignores it.
    - name: createTime
      value: "{{ createTime }}"
      description: |
        The timestamp when the job was initially created. Immutable and set by the Cloud Dataflow service.
    - name: createdFromSnapshotId
      value: "{{ createdFromSnapshotId }}"
      description: |
        If this is specified, the job's initial state is populated from the given snapshot.
    - name: currentState
      value: "{{ currentState }}"
      description: |
        The current state of the job. Jobs are created in the \`JOB_STATE_STOPPED\` state unless otherwise specified. A job in the \`JOB_STATE_RUNNING\` state may asynchronously enter a terminal state. After a job has reached a terminal state, no further state updates may be made. This field might be mutated by the Dataflow service; callers cannot mutate it.
      valid_values: ['JOB_STATE_UNKNOWN', 'JOB_STATE_STOPPED', 'JOB_STATE_RUNNING', 'JOB_STATE_DONE', 'JOB_STATE_FAILED', 'JOB_STATE_CANCELLED', 'JOB_STATE_UPDATED', 'JOB_STATE_DRAINING', 'JOB_STATE_DRAINED', 'JOB_STATE_PENDING', 'JOB_STATE_CANCELLING', 'JOB_STATE_QUEUED', 'JOB_STATE_RESOURCE_CLEANING_UP', 'JOB_STATE_PAUSING', 'JOB_STATE_PAUSED']
    - name: currentStateTime
      value: "{{ currentStateTime }}"
      description: |
        The timestamp associated with the current state.
    - name: environment
      description: |
        Optional. The environment for the job.
      value:
        clusterManagerApiService: "{{ clusterManagerApiService }}"
        dataset: "{{ dataset }}"
        debugOptions:
          dataSampling:
            behaviors:
              - "{{ behaviors }}"
          enableHotKeyLogging: {{ enableHotKeyLogging }}
        experiments:
          - "{{ experiments }}"
        flexResourceSchedulingGoal: "{{ flexResourceSchedulingGoal }}"
        internalExperiments: "{{ internalExperiments }}"
        sdkPipelineOptions: "{{ sdkPipelineOptions }}"
        serviceAccountEmail: "{{ serviceAccountEmail }}"
        serviceKmsKeyName: "{{ serviceKmsKeyName }}"
        serviceOptions:
          - "{{ serviceOptions }}"
        shuffleMode: "{{ shuffleMode }}"
        streamingMode: "{{ streamingMode }}"
        tempStoragePrefix: "{{ tempStoragePrefix }}"
        usePublicIps: {{ usePublicIps }}
        useStreamingEngineResourceBasedBilling: {{ useStreamingEngineResourceBasedBilling }}
        userAgent: "{{ userAgent }}"
        version: "{{ version }}"
        workerPools:
          - autoscalingSettings:
              algorithm: "{{ algorithm }}"
              maxNumWorkers: {{ maxNumWorkers }}
            dataDisks: "{{ dataDisks }}"
            defaultPackageSet: "{{ defaultPackageSet }}"
            diskProvisionedIops: "{{ diskProvisionedIops }}"
            diskProvisionedThroughputMibps: "{{ diskProvisionedThroughputMibps }}"
            diskSizeGb: {{ diskSizeGb }}
            diskSourceImage: "{{ diskSourceImage }}"
            diskType: "{{ diskType }}"
            ipConfiguration: "{{ ipConfiguration }}"
            kind: "{{ kind }}"
            machineType: "{{ machineType }}"
            metadata: "{{ metadata }}"
            network: "{{ network }}"
            numThreadsPerWorker: {{ numThreadsPerWorker }}
            numWorkers: {{ numWorkers }}
            onHostMaintenance: "{{ onHostMaintenance }}"
            packages: "{{ packages }}"
            poolArgs: "{{ poolArgs }}"
            sdkHarnessContainerImages: "{{ sdkHarnessContainerImages }}"
            subnetwork: "{{ subnetwork }}"
            taskrunnerSettings:
              alsologtostderr: {{ alsologtostderr }}
              baseTaskDir: "{{ baseTaskDir }}"
              baseUrl: "{{ baseUrl }}"
              commandlinesFileName: "{{ commandlinesFileName }}"
              continueOnException: {{ continueOnException }}
              dataflowApiVersion: "{{ dataflowApiVersion }}"
              harnessCommand: "{{ harnessCommand }}"
              languageHint: "{{ languageHint }}"
              logDir: "{{ logDir }}"
              logToSerialconsole: {{ logToSerialconsole }}
              logUploadLocation: "{{ logUploadLocation }}"
              oauthScopes:
                - "{{ oauthScopes }}"
              parallelWorkerSettings:
                baseUrl: "{{ baseUrl }}"
                reportingEnabled: {{ reportingEnabled }}
                servicePath: "{{ servicePath }}"
                shuffleServicePath: "{{ shuffleServicePath }}"
                tempStoragePrefix: "{{ tempStoragePrefix }}"
                workerId: "{{ workerId }}"
              streamingWorkerMainClass: "{{ streamingWorkerMainClass }}"
              taskGroup: "{{ taskGroup }}"
              taskUser: "{{ taskUser }}"
              tempStoragePrefix: "{{ tempStoragePrefix }}"
              vmId: "{{ vmId }}"
              workflowFileName: "{{ workflowFileName }}"
            teardownPolicy: "{{ teardownPolicy }}"
            workerHarnessContainerImage: "{{ workerHarnessContainerImage }}"
            zone: "{{ zone }}"
        workerRegion: "{{ workerRegion }}"
        workerZone: "{{ workerZone }}"
    - name: executionInfo
      description: |
        Deprecated.
      value:
        stages: "{{ stages }}"
    - name: id
      value: "{{ id }}"
      description: |
        The unique ID of this job. This field is set by the Dataflow service when the job is created, and is immutable for the life of the job.
    - name: jobMetadata
      description: |
        This field is populated by the Dataflow service to support filtering jobs by the metadata values provided here. Populated for ListJobs and all GetJob views SUMMARY and higher.
      value:
        bigTableDetails:
          - instanceId: "{{ instanceId }}"
            projectId: "{{ projectId }}"
            tableId: "{{ tableId }}"
        bigqueryDetails:
          - dataset: "{{ dataset }}"
            projectId: "{{ projectId }}"
            query: "{{ query }}"
            table: "{{ table }}"
        datastoreDetails:
          - namespace: "{{ namespace }}"
            projectId: "{{ projectId }}"
        fileDetails:
          - filePattern: "{{ filePattern }}"
        pubsubDetails:
          - subscription: "{{ subscription }}"
            topic: "{{ topic }}"
        sdkVersion:
          bugs:
            - severity: "{{ severity }}"
              type: "{{ type }}"
              uri: "{{ uri }}"
          sdkSupportStatus: "{{ sdkSupportStatus }}"
          version: "{{ version }}"
          versionDisplayName: "{{ versionDisplayName }}"
        spannerDetails:
          - databaseId: "{{ databaseId }}"
            instanceId: "{{ instanceId }}"
            projectId: "{{ projectId }}"
        userDisplayProperties: "{{ userDisplayProperties }}"
    - name: labels
      value: "{{ labels }}"
      description: |
        User-defined labels for this job. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: p{Ll}p{Lo}{0,62} * Values must conform to regexp: [p{Ll}p{Lo}p{N}_-]{0,63} * Both keys and values are additionally constrained to be <= 128 bytes in size.
    - name: location
      value: "{{ location }}"
      description: |
        Optional. The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
    - name: name
      value: "{{ name }}"
      description: |
        Optional. The user-specified Dataflow job name. Only one active job with a given name can exist in a project within one region at any given time. Jobs in different regions can have the same name. If a caller attempts to create a job with the same name as an active job that already exists, the attempt returns the existing job. The name must match the regular expression \`[a-z]([-a-z0-9]{0,1022}[a-z0-9])?\`
    - name: pipelineDescription
      description: |
        Preliminary field: The format of this data may change at any time. A description of the user pipeline and stages through which it is executed. Created by Cloud Dataflow service. Only retrieved with JOB_VIEW_DESCRIPTION or JOB_VIEW_ALL.
      value:
        displayData:
          - boolValue: {{ boolValue }}
            durationValue: "{{ durationValue }}"
            floatValue: {{ floatValue }}
            int64Value: "{{ int64Value }}"
            javaClassValue: "{{ javaClassValue }}"
            key: "{{ key }}"
            label: "{{ label }}"
            namespace: "{{ namespace }}"
            shortStrValue: "{{ shortStrValue }}"
            strValue: "{{ strValue }}"
            timestampValue: "{{ timestampValue }}"
            url: "{{ url }}"
        executionPipelineStage:
          - componentSource: "{{ componentSource }}"
            componentTransform: "{{ componentTransform }}"
            id: "{{ id }}"
            inputSource: "{{ inputSource }}"
            kind: "{{ kind }}"
            name: "{{ name }}"
            outputSource: "{{ outputSource }}"
            prerequisiteStage: "{{ prerequisiteStage }}"
        originalPipelineTransform:
          - displayData: "{{ displayData }}"
            id: "{{ id }}"
            inputCollectionName: "{{ inputCollectionName }}"
            kind: "{{ kind }}"
            name: "{{ name }}"
            outputCollectionName: "{{ outputCollectionName }}"
        stepNamesHash: "{{ stepNamesHash }}"
    - name: projectId
      value: "{{ projectId }}"
      description: |
        The ID of the Google Cloud project that the job belongs to.
    - name: replaceJobId
      value: "{{ replaceJobId }}"
      description: |
        If this job is an update of an existing job, this field is the job ID of the job it replaced. When sending a \`CreateJobRequest\`, you can update a job by specifying it here. The job named here is stopped, and its intermediate state is transferred to this job.
    - name: replacedByJobId
      value: "{{ replacedByJobId }}"
      description: |
        If another job is an update of this job (and thus, this job is in \`JOB_STATE_UPDATED\`), this field contains the ID of that job.
    - name: requestedState
      value: "{{ requestedState }}"
      description: |
        The job's requested state. Applies to \`UpdateJob\` requests. Set \`requested_state\` with \`UpdateJob\` requests to switch between the states \`JOB_STATE_STOPPED\` and \`JOB_STATE_RUNNING\`. You can also use \`UpdateJob\` requests to change a job's state from \`JOB_STATE_RUNNING\` to \`JOB_STATE_CANCELLED\`, \`JOB_STATE_DONE\`, or \`JOB_STATE_DRAINED\`. These states irrevocably terminate the job if it hasn't already reached a terminal state. This field has no effect on \`CreateJob\` requests.
      valid_values: ['JOB_STATE_UNKNOWN', 'JOB_STATE_STOPPED', 'JOB_STATE_RUNNING', 'JOB_STATE_DONE', 'JOB_STATE_FAILED', 'JOB_STATE_CANCELLED', 'JOB_STATE_UPDATED', 'JOB_STATE_DRAINING', 'JOB_STATE_DRAINED', 'JOB_STATE_PENDING', 'JOB_STATE_CANCELLING', 'JOB_STATE_QUEUED', 'JOB_STATE_RESOURCE_CLEANING_UP', 'JOB_STATE_PAUSING', 'JOB_STATE_PAUSED']
    - name: runtimeUpdatableParams
      description: |
        This field may ONLY be modified at runtime using the projects.jobs.update method to adjust job behavior. This field has no effect when specified at job creation.
      value:
        acceptableBacklogDuration: "{{ acceptableBacklogDuration }}"
        autoscalingTier: "{{ autoscalingTier }}"
        latencyTier: "{{ latencyTier }}"
        maxNumWorkers: {{ maxNumWorkers }}
        minNumWorkers: {{ minNumWorkers }}
        schedules:
          - crontab: "{{ crontab }}"
            duration: "{{ duration }}"
            name: "{{ name }}"
            parameters:
              cpuUtilizationTarget: {{ cpuUtilizationTarget }}
              latencyTarget: "{{ latencyTarget }}"
              maxWorkerCount: {{ maxWorkerCount }}
              minWorkerCount: {{ minWorkerCount }}
            priority: "{{ priority }}"
            timeZone: "{{ timeZone }}"
            updateTime: "{{ updateTime }}"
        workerUtilizationHint: {{ workerUtilizationHint }}
    - name: satisfiesPzs
      value: {{ satisfiesPzs }}
      description: |
        Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests.
    - name: stageStates
      description: |
        This field may be mutated by the Cloud Dataflow service; callers cannot mutate it.
      value:
        - currentStateTime: "{{ currentStateTime }}"
          executionStageName: "{{ executionStageName }}"
          executionStageState: "{{ executionStageState }}"
    - name: startTime
      value: "{{ startTime }}"
      description: |
        The timestamp when the job was started (transitioned to JOB_STATE_PENDING). Flexible resource scheduling jobs are started with some delay after job creation, so start_time is unset before start and is updated when the job is started by the Cloud Dataflow service. For other jobs, start_time always equals to create_time and is immutable and set by the Cloud Dataflow service.
    - name: steps
      description: |
        Exactly one of step or steps_location should be specified. The top-level steps that constitute the entire job. Only retrieved with JOB_VIEW_ALL.
      value:
        - kind: "{{ kind }}"
          name: "{{ name }}"
          properties: "{{ properties }}"
    - name: stepsLocation
      value: "{{ stepsLocation }}"
      description: |
        The Cloud Storage location where the steps are stored.
    - name: tempFiles
      value:
        - "{{ tempFiles }}"
      description: |
        A set of files the system should be aware of that are used for temporary storage. These temporary files will be removed on job completion. No duplicates are allowed. No file patterns are supported. The supported files are: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}
    - name: transformNameMapping
      value: "{{ transformNameMapping }}"
      description: |
        Optional. The map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job.
    - name: type
      value: "{{ type }}"
      description: |
        Optional. The type of Dataflow job.
      valid_values: ['JOB_TYPE_UNKNOWN', 'JOB_TYPE_BATCH', 'JOB_TYPE_STREAMING']
    - name: replaceJobId
      value: "{{ replaceJobId }}"
    - name: view
      value: "{{ view }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="projects_locations_jobs_update"
    values={[
        { label: 'projects_locations_jobs_update', value: 'projects_locations_jobs_update' },
        { label: 'projects_jobs_update', value: 'projects_jobs_update' }
    ]}
>
<TabItem value="projects_locations_jobs_update">

Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`. # IAM Permissions 1. Requires the `dataflow.jobs.cancel` permission to cancel a job. 2. Requires the `dataflow.jobs.updateContents` permission to update runtime parameters.

```sql
REPLACE google.dataflow.jobs
SET 
data__clientRequestId = '{{ clientRequestId }}',
data__createTime = '{{ createTime }}',
data__createdFromSnapshotId = '{{ createdFromSnapshotId }}',
data__currentState = '{{ currentState }}',
data__currentStateTime = '{{ currentStateTime }}',
data__environment = '{{ environment }}',
data__executionInfo = '{{ executionInfo }}',
data__id = '{{ id }}',
data__jobMetadata = '{{ jobMetadata }}',
data__labels = '{{ labels }}',
data__location = '{{ location }}',
data__name = '{{ name }}',
data__pipelineDescription = '{{ pipelineDescription }}',
data__projectId = '{{ projectId }}',
data__replaceJobId = '{{ replaceJobId }}',
data__replacedByJobId = '{{ replacedByJobId }}',
data__requestedState = '{{ requestedState }}',
data__runtimeUpdatableParams = '{{ runtimeUpdatableParams }}',
data__satisfiesPzs = {{ satisfiesPzs }},
data__stageStates = '{{ stageStates }}',
data__startTime = '{{ startTime }}',
data__steps = '{{ steps }}',
data__stepsLocation = '{{ stepsLocation }}',
data__tempFiles = '{{ tempFiles }}',
data__transformNameMapping = '{{ transformNameMapping }}',
data__type = '{{ type }}'
WHERE 
projectId = '{{ projectId }}' --required
AND location = '{{ location }}' --required
AND jobId = '{{ jobId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
id,
name,
clientRequestId,
createTime,
createdFromSnapshotId,
currentState,
currentStateTime,
environment,
executionInfo,
jobMetadata,
labels,
location,
pausable,
pipelineDescription,
projectId,
replaceJobId,
replacedByJobId,
requestedState,
runtimeUpdatableParams,
satisfiesPzi,
satisfiesPzs,
serviceResources,
stageStates,
startTime,
steps,
stepsLocation,
tempFiles,
transformNameMapping,
type;
```
</TabItem>
<TabItem value="projects_jobs_update">

Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`. # IAM Permissions 1. Requires the `dataflow.jobs.cancel` permission to cancel a job. 2. Requires the `dataflow.jobs.updateContents` permission to update runtime parameters.

```sql
REPLACE google.dataflow.jobs
SET 
data__clientRequestId = '{{ clientRequestId }}',
data__createTime = '{{ createTime }}',
data__createdFromSnapshotId = '{{ createdFromSnapshotId }}',
data__currentState = '{{ currentState }}',
data__currentStateTime = '{{ currentStateTime }}',
data__environment = '{{ environment }}',
data__executionInfo = '{{ executionInfo }}',
data__id = '{{ id }}',
data__jobMetadata = '{{ jobMetadata }}',
data__labels = '{{ labels }}',
data__location = '{{ location }}',
data__name = '{{ name }}',
data__pipelineDescription = '{{ pipelineDescription }}',
data__projectId = '{{ projectId }}',
data__replaceJobId = '{{ replaceJobId }}',
data__replacedByJobId = '{{ replacedByJobId }}',
data__requestedState = '{{ requestedState }}',
data__runtimeUpdatableParams = '{{ runtimeUpdatableParams }}',
data__satisfiesPzs = {{ satisfiesPzs }},
data__stageStates = '{{ stageStates }}',
data__startTime = '{{ startTime }}',
data__steps = '{{ steps }}',
data__stepsLocation = '{{ stepsLocation }}',
data__tempFiles = '{{ tempFiles }}',
data__transformNameMapping = '{{ transformNameMapping }}',
data__type = '{{ type }}'
WHERE 
projectId = '{{ projectId }}' --required
AND jobId = '{{ jobId }}' --required
AND location = '{{ location}}'
AND updateMask = '{{ updateMask}}'
RETURNING
id,
name,
clientRequestId,
createTime,
createdFromSnapshotId,
currentState,
currentStateTime,
environment,
executionInfo,
jobMetadata,
labels,
location,
pausable,
pipelineDescription,
projectId,
replaceJobId,
replacedByJobId,
requestedState,
runtimeUpdatableParams,
satisfiesPzi,
satisfiesPzs,
serviceResources,
stageStates,
startTime,
steps,
stepsLocation,
tempFiles,
transformNameMapping,
type;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_jobs_aggregated"
    values={[
        { label: 'projects_jobs_aggregated', value: 'projects_jobs_aggregated' },
        { label: 'projects_jobs_snapshot', value: 'projects_jobs_snapshot' },
        { label: 'projects_locations_jobs_snapshot', value: 'projects_locations_jobs_snapshot' }
    ]}
>
<TabItem value="projects_jobs_aggregated">

List the jobs of a project across all regions. **Note:** This method doesn't support filtering the list of jobs by name. # IAM Permissions Requires the `dataflow.jobs.list` permission on the project.

```sql
EXEC google.dataflow.jobs.projects_jobs_aggregated 
@projectId='{{ projectId }}' --required, 
@filter='{{ filter }}', 
@location='{{ location }}', 
@name='{{ name }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}', 
@view='{{ view }}'
;
```
</TabItem>
<TabItem value="projects_jobs_snapshot">

Snapshot the state of a streaming job. # IAM Permissions Requires the `dataflow.jobs.snapshot` permission on the job.

```sql
EXEC google.dataflow.jobs.projects_jobs_snapshot 
@projectId='{{ projectId }}' --required, 
@jobId='{{ jobId }}' --required 
@@json=
'{
"description": "{{ description }}", 
"location": "{{ location }}", 
"snapshotSources": {{ snapshotSources }}, 
"ttl": "{{ ttl }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_jobs_snapshot">

Snapshot the state of a streaming job. # IAM Permissions Requires the `dataflow.jobs.snapshot` permission on the job.

```sql
EXEC google.dataflow.jobs.projects_locations_jobs_snapshot 
@projectId='{{ projectId }}' --required, 
@location='{{ location }}' --required, 
@jobId='{{ jobId }}' --required 
@@json=
'{
"description": "{{ description }}", 
"location": "{{ location }}", 
"snapshotSources": {{ snapshotSources }}, 
"ttl": "{{ ttl }}"
}'
;
```
</TabItem>
</Tabs>
