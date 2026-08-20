--- 
title: notebook_execution_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - notebook_execution_jobs
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

Creates, updates, deletes, gets or lists a <code>notebook_execution_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notebook_execution_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.notebook_execution_jobs" /></td></tr>
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
    <td>Output only. The resource name of this NotebookExecutionJob. Format: `projects/&#123;project_id&#125;/locations/&#123;location&#125;/notebookExecutionJobs/&#123;job_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this NotebookExecutionJob was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customEnvironmentSpec" /></td>
    <td><code>object</code></td>
    <td>The custom compute configuration for an execution job. (id: GoogleCloudAiplatformV1NotebookExecutionJobCustomEnvironmentSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="dataformRepositorySource" /></td>
    <td><code>object</code></td>
    <td>The Dataform Repository pointing to a single file notebook repository. (id: GoogleCloudAiplatformV1NotebookExecutionJobDataformRepositorySource)</td>
</tr>
<tr>
    <td><CopyableCode code="directNotebookSource" /></td>
    <td><code>object</code></td>
    <td>The contents of an input notebook file. (id: GoogleCloudAiplatformV1NotebookExecutionJobDirectNotebookSource)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the NotebookExecutionJob. The name can be up to 128 characters long and can consist of any UTF-8 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Customer-managed encryption key spec for the notebook execution job. This field is auto-populated if the NotebookRuntimeTemplate has an encryption spec. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="executionTimeout" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Max running time of the execution job in seconds (default 86400s / 24 hrs).</td>
</tr>
<tr>
    <td><CopyableCode code="executionUser" /></td>
    <td><code>string</code></td>
    <td>The user email to run the execution as. Only supported by Colab runtimes.</td>
</tr>
<tr>
    <td><CopyableCode code="gcsNotebookSource" /></td>
    <td><code>object</code></td>
    <td>The Cloud Storage url pointing to the ipynb file. Format: `gs://bucket/notebook_file.ipynb` (id: GoogleCloudAiplatformV1NotebookExecutionJobGcsNotebookSource)</td>
</tr>
<tr>
    <td><CopyableCode code="gcsOutputUri" /></td>
    <td><code>string</code></td>
    <td>The Cloud Storage location to upload the result to. Format: `gs://bucket-name`</td>
</tr>
<tr>
    <td><CopyableCode code="jobState" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the NotebookExecutionJob. (JOB_STATE_UNSPECIFIED, JOB_STATE_QUEUED, JOB_STATE_PENDING, JOB_STATE_RUNNING, JOB_STATE_SUCCEEDED, JOB_STATE_FAILED, JOB_STATE_CANCELLING, JOB_STATE_CANCELLED, JOB_STATE_PAUSED, JOB_STATE_EXPIRED, JOB_STATE_UPDATING, JOB_STATE_PARTIALLY_SUCCEEDED)</td>
</tr>
<tr>
    <td><CopyableCode code="kernelName" /></td>
    <td><code>string</code></td>
    <td>The name of the kernel to use during notebook execution. If unset, the default kernel is used.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels with user-defined metadata to organize NotebookExecutionJobs. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "aiplatform.googleapis.com/" and are immutable.</td>
</tr>
<tr>
    <td><CopyableCode code="notebookRuntimeTemplateResourceName" /></td>
    <td><code>string</code></td>
    <td>The NotebookRuntimeTemplate to source compute configuration from.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleResourceName" /></td>
    <td><code>string</code></td>
    <td>The Schedule resource name if this job is triggered by one. Format: `projects/&#123;project_id&#125;/locations/&#123;location&#125;/schedules/&#123;schedule_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>The service account to run the execution as.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). (id: GoogleRpcStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this NotebookExecutionJob was most recently updated.</td>
</tr>
<tr>
    <td><CopyableCode code="workbenchRuntime" /></td>
    <td><code>object</code></td>
    <td>The Workbench runtime configuration to use for the notebook execution. (id: GoogleCloudAiplatformV1NotebookExecutionJobWorkbenchRuntime)</td>
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
    <td>Output only. The resource name of this NotebookExecutionJob. Format: `projects/&#123;project_id&#125;/locations/&#123;location&#125;/notebookExecutionJobs/&#123;job_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this NotebookExecutionJob was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customEnvironmentSpec" /></td>
    <td><code>object</code></td>
    <td>The custom compute configuration for an execution job. (id: GoogleCloudAiplatformV1NotebookExecutionJobCustomEnvironmentSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="dataformRepositorySource" /></td>
    <td><code>object</code></td>
    <td>The Dataform Repository pointing to a single file notebook repository. (id: GoogleCloudAiplatformV1NotebookExecutionJobDataformRepositorySource)</td>
</tr>
<tr>
    <td><CopyableCode code="directNotebookSource" /></td>
    <td><code>object</code></td>
    <td>The contents of an input notebook file. (id: GoogleCloudAiplatformV1NotebookExecutionJobDirectNotebookSource)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the NotebookExecutionJob. The name can be up to 128 characters long and can consist of any UTF-8 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Customer-managed encryption key spec for the notebook execution job. This field is auto-populated if the NotebookRuntimeTemplate has an encryption spec. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="executionTimeout" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Max running time of the execution job in seconds (default 86400s / 24 hrs).</td>
</tr>
<tr>
    <td><CopyableCode code="executionUser" /></td>
    <td><code>string</code></td>
    <td>The user email to run the execution as. Only supported by Colab runtimes.</td>
</tr>
<tr>
    <td><CopyableCode code="gcsNotebookSource" /></td>
    <td><code>object</code></td>
    <td>The Cloud Storage url pointing to the ipynb file. Format: `gs://bucket/notebook_file.ipynb` (id: GoogleCloudAiplatformV1NotebookExecutionJobGcsNotebookSource)</td>
</tr>
<tr>
    <td><CopyableCode code="gcsOutputUri" /></td>
    <td><code>string</code></td>
    <td>The Cloud Storage location to upload the result to. Format: `gs://bucket-name`</td>
</tr>
<tr>
    <td><CopyableCode code="jobState" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the NotebookExecutionJob. (JOB_STATE_UNSPECIFIED, JOB_STATE_QUEUED, JOB_STATE_PENDING, JOB_STATE_RUNNING, JOB_STATE_SUCCEEDED, JOB_STATE_FAILED, JOB_STATE_CANCELLING, JOB_STATE_CANCELLED, JOB_STATE_PAUSED, JOB_STATE_EXPIRED, JOB_STATE_UPDATING, JOB_STATE_PARTIALLY_SUCCEEDED)</td>
</tr>
<tr>
    <td><CopyableCode code="kernelName" /></td>
    <td><code>string</code></td>
    <td>The name of the kernel to use during notebook execution. If unset, the default kernel is used.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels with user-defined metadata to organize NotebookExecutionJobs. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "aiplatform.googleapis.com/" and are immutable.</td>
</tr>
<tr>
    <td><CopyableCode code="notebookRuntimeTemplateResourceName" /></td>
    <td><code>string</code></td>
    <td>The NotebookRuntimeTemplate to source compute configuration from.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleResourceName" /></td>
    <td><code>string</code></td>
    <td>The Schedule resource name if this job is triggered by one. Format: `projects/&#123;project_id&#125;/locations/&#123;location&#125;/schedules/&#123;schedule_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>The service account to run the execution as.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). (id: GoogleRpcStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this NotebookExecutionJob was most recently updated.</td>
</tr>
<tr>
    <td><CopyableCode code="workbenchRuntime" /></td>
    <td><code>object</code></td>
    <td>The Workbench runtime configuration to use for the notebook execution. (id: GoogleCloudAiplatformV1NotebookExecutionJobWorkbenchRuntime)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-notebookExecutionJobsId"><code>notebookExecutionJobsId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Gets a NotebookExecutionJob.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Lists NotebookExecutionJobs in a Location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-notebookExecutionJobId"><code>notebookExecutionJobId</code></a></td>
    <td>Creates a NotebookExecutionJob.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-notebookExecutionJobsId"><code>notebookExecutionJobsId</code></a></td>
    <td></td>
    <td>Deletes a NotebookExecutionJob.</td>
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
<tr id="parameter-notebookExecutionJobsId">
    <td><CopyableCode code="notebookExecutionJobsId" /></td>
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
<tr id="parameter-notebookExecutionJobId">
    <td><CopyableCode code="notebookExecutionJobId" /></td>
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
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
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

Gets a NotebookExecutionJob.

```sql
SELECT
name,
createTime,
customEnvironmentSpec,
dataformRepositorySource,
directNotebookSource,
displayName,
encryptionSpec,
executionTimeout,
executionUser,
gcsNotebookSource,
gcsOutputUri,
jobState,
kernelName,
labels,
notebookRuntimeTemplateResourceName,
scheduleResourceName,
serviceAccount,
status,
updateTime,
workbenchRuntime
FROM google.aiplatform.notebook_execution_jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND notebookExecutionJobsId = '{{ notebookExecutionJobsId }}' -- required
AND view = '{{ view }}'
;
```
</TabItem>
<TabItem value="list">

Lists NotebookExecutionJobs in a Location.

```sql
SELECT
name,
createTime,
customEnvironmentSpec,
dataformRepositorySource,
directNotebookSource,
displayName,
encryptionSpec,
executionTimeout,
executionUser,
gcsNotebookSource,
gcsOutputUri,
jobState,
kernelName,
labels,
notebookRuntimeTemplateResourceName,
scheduleResourceName,
serviceAccount,
status,
updateTime,
workbenchRuntime
FROM google.aiplatform.notebook_execution_jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND view = '{{ view }}'
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

Creates a NotebookExecutionJob.

```sql
INSERT INTO google.aiplatform.notebook_execution_jobs (
data__customEnvironmentSpec,
data__dataformRepositorySource,
data__directNotebookSource,
data__displayName,
data__encryptionSpec,
data__executionTimeout,
data__executionUser,
data__gcsNotebookSource,
data__gcsOutputUri,
data__kernelName,
data__labels,
data__notebookRuntimeTemplateResourceName,
data__scheduleResourceName,
data__serviceAccount,
data__workbenchRuntime,
projectsId,
locationsId,
notebookExecutionJobId
)
SELECT 
'{{ customEnvironmentSpec }}',
'{{ dataformRepositorySource }}',
'{{ directNotebookSource }}',
'{{ displayName }}',
'{{ encryptionSpec }}',
'{{ executionTimeout }}',
'{{ executionUser }}',
'{{ gcsNotebookSource }}',
'{{ gcsOutputUri }}',
'{{ kernelName }}',
'{{ labels }}',
'{{ notebookRuntimeTemplateResourceName }}',
'{{ scheduleResourceName }}',
'{{ serviceAccount }}',
'{{ workbenchRuntime }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ notebookExecutionJobId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: notebook_execution_jobs
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the notebook_execution_jobs resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the notebook_execution_jobs resource.
    - name: customEnvironmentSpec
      description: |
        The custom compute configuration for an execution job.
      value:
        machineSpec:
          acceleratorCount: {{ acceleratorCount }}
          acceleratorType: "{{ acceleratorType }}"
          gpuPartitionSize: "{{ gpuPartitionSize }}"
          machineType: "{{ machineType }}"
          reservationAffinity:
            key: "{{ key }}"
            reservationAffinityType: "{{ reservationAffinityType }}"
            values:
              - "{{ values }}"
          tpuTopology: "{{ tpuTopology }}"
        networkSpec:
          enableInternetAccess: {{ enableInternetAccess }}
          network: "{{ network }}"
          subnetwork: "{{ subnetwork }}"
        persistentDiskSpec:
          diskSizeGb: "{{ diskSizeGb }}"
          diskType: "{{ diskType }}"
        shieldedInstanceConfig:
          enableIntegrityMonitoring: {{ enableIntegrityMonitoring }}
          enableSecureBoot: {{ enableSecureBoot }}
          enableVtpm: {{ enableVtpm }}
    - name: dataformRepositorySource
      description: |
        The Dataform Repository pointing to a single file notebook repository.
      value:
        commitSha: "{{ commitSha }}"
        dataformRepositoryResourceName: "{{ dataformRepositoryResourceName }}"
    - name: directNotebookSource
      description: |
        The contents of an input notebook file.
      value:
        content: "{{ content }}"
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The display name of the NotebookExecutionJob. The name can be up to 128 characters long and can consist of any UTF-8 characters.
    - name: encryptionSpec
      description: |
        Customer-managed encryption key spec for the notebook execution job. This field is auto-populated if the NotebookRuntimeTemplate has an encryption spec.
      value:
        kmsKeyName: "{{ kmsKeyName }}"
    - name: executionTimeout
      value: "{{ executionTimeout }}"
      description: |
        Max running time of the execution job in seconds (default 86400s / 24 hrs).
    - name: executionUser
      value: "{{ executionUser }}"
      description: |
        The user email to run the execution as. Only supported by Colab runtimes.
    - name: gcsNotebookSource
      description: |
        The Cloud Storage url pointing to the ipynb file. Format: \`gs://bucket/notebook_file.ipynb\`
      value:
        generation: "{{ generation }}"
        uri: "{{ uri }}"
    - name: gcsOutputUri
      value: "{{ gcsOutputUri }}"
      description: |
        The Cloud Storage location to upload the result to. Format: \`gs://bucket-name\`
    - name: kernelName
      value: "{{ kernelName }}"
      description: |
        The name of the kernel to use during notebook execution. If unset, the default kernel is used.
    - name: labels
      value: "{{ labels }}"
      description: |
        The labels with user-defined metadata to organize NotebookExecutionJobs. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "aiplatform.googleapis.com/" and are immutable.
    - name: notebookRuntimeTemplateResourceName
      value: "{{ notebookRuntimeTemplateResourceName }}"
      description: |
        The NotebookRuntimeTemplate to source compute configuration from.
    - name: scheduleResourceName
      value: "{{ scheduleResourceName }}"
      description: |
        The Schedule resource name if this job is triggered by one. Format: \`projects/{project_id}/locations/{location}/schedules/{schedule_id}\`
    - name: serviceAccount
      value: "{{ serviceAccount }}"
      description: |
        The service account to run the execution as.
    - name: workbenchRuntime
      description: |
        The Workbench runtime configuration to use for the notebook execution.
      value:
        customContainerImage:
          repository: "{{ repository }}"
          tag: "{{ tag }}"
        vmImage:
          family: "{{ family }}"
          name: "{{ name }}"
          project: "{{ project }}"
    - name: notebookExecutionJobId
      value: "{{ notebookExecutionJobId }}"
`}</CodeBlock>

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

Deletes a NotebookExecutionJob.

```sql
DELETE FROM google.aiplatform.notebook_execution_jobs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND notebookExecutionJobsId = '{{ notebookExecutionJobsId }}' --required
;
```
</TabItem>
</Tabs>
