--- 
title: custom_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_jobs
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

Creates, updates, deletes, gets or lists a <code>custom_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.custom_jobs" /></td></tr>
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
    <td>Output only. Resource name of a CustomJob.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the CustomJob was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the CustomJob. The name can be up to 128 characters long and can consist of any UTF-8 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Customer-managed encryption key options for a CustomJob. If this is set, then all resources created by the CustomJob will be encrypted with the provided encryption key. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the CustomJob entered any of the following states: `JOB_STATE_SUCCEEDED`, `JOB_STATE_FAILED`, `JOB_STATE_CANCELLED`.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). (id: GoogleRpcStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="jobSpec" /></td>
    <td><code>object</code></td>
    <td>Required. Job spec. (id: GoogleCloudAiplatformV1CustomJobSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels with user-defined metadata to organize CustomJobs. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the CustomJob for the first time entered the `JOB_STATE_RUNNING` state.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The detailed state of the job. (JOB_STATE_UNSPECIFIED, JOB_STATE_QUEUED, JOB_STATE_PENDING, JOB_STATE_RUNNING, JOB_STATE_SUCCEEDED, JOB_STATE_FAILED, JOB_STATE_CANCELLING, JOB_STATE_CANCELLED, JOB_STATE_PAUSED, JOB_STATE_EXPIRED, JOB_STATE_UPDATING, JOB_STATE_PARTIALLY_SUCCEEDED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the CustomJob was most recently updated.</td>
</tr>
<tr>
    <td><CopyableCode code="webAccessUris" /></td>
    <td><code>object</code></td>
    <td>Output only. URIs for accessing [interactive shells](https://cloud.google.com/vertex-ai/docs/training/monitor-debug-interactive-shell) (one URI for each training node). Only available if job_spec.enable_web_access is `true`. The keys are names of each node in the training job; for example, `workerpool0-0` for the primary node, `workerpool1-0` for the first node in the second worker pool, and `workerpool1-1` for the second node in the second worker pool. The values are the URIs for each node's interactive shell.</td>
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
    <td>Output only. Resource name of a CustomJob.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the CustomJob was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the CustomJob. The name can be up to 128 characters long and can consist of any UTF-8 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Customer-managed encryption key options for a CustomJob. If this is set, then all resources created by the CustomJob will be encrypted with the provided encryption key. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the CustomJob entered any of the following states: `JOB_STATE_SUCCEEDED`, `JOB_STATE_FAILED`, `JOB_STATE_CANCELLED`.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). (id: GoogleRpcStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="jobSpec" /></td>
    <td><code>object</code></td>
    <td>Required. Job spec. (id: GoogleCloudAiplatformV1CustomJobSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels with user-defined metadata to organize CustomJobs. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the CustomJob for the first time entered the `JOB_STATE_RUNNING` state.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The detailed state of the job. (JOB_STATE_UNSPECIFIED, JOB_STATE_QUEUED, JOB_STATE_PENDING, JOB_STATE_RUNNING, JOB_STATE_SUCCEEDED, JOB_STATE_FAILED, JOB_STATE_CANCELLING, JOB_STATE_CANCELLED, JOB_STATE_PAUSED, JOB_STATE_EXPIRED, JOB_STATE_UPDATING, JOB_STATE_PARTIALLY_SUCCEEDED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the CustomJob was most recently updated.</td>
</tr>
<tr>
    <td><CopyableCode code="webAccessUris" /></td>
    <td><code>object</code></td>
    <td>Output only. URIs for accessing [interactive shells](https://cloud.google.com/vertex-ai/docs/training/monitor-debug-interactive-shell) (one URI for each training node). Only available if job_spec.enable_web_access is `true`. The keys are names of each node in the training job; for example, `workerpool0-0` for the primary node, `workerpool1-0` for the first node in the second worker pool, and `workerpool1-1` for the second node in the second worker pool. The values are the URIs for each node's interactive shell.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-customJobsId"><code>customJobsId</code></a></td>
    <td></td>
    <td>Gets a CustomJob.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-readMask"><code>readMask</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists CustomJobs in a Location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a CustomJob. A created CustomJob right away will be attempted to be run.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-customJobsId"><code>customJobsId</code></a></td>
    <td></td>
    <td>Deletes a CustomJob.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-customJobsId"><code>customJobsId</code></a></td>
    <td></td>
    <td>Cancels a CustomJob. Starts asynchronous cancellation on the CustomJob. The server makes a best effort to cancel the job, but success is not guaranteed. Clients can use JobService.GetCustomJob or other methods to check whether the cancellation succeeded or whether the job completed despite cancellation. On successful cancellation, the CustomJob is not deleted; instead it becomes a job with a CustomJob.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`, and CustomJob.state is set to `CANCELLED`.</td>
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
<tr id="parameter-customJobsId">
    <td><CopyableCode code="customJobsId" /></td>
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
<tr id="parameter-readMask">
    <td><CopyableCode code="readMask" /></td>
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

Gets a CustomJob.

```sql
SELECT
name,
createTime,
displayName,
encryptionSpec,
endTime,
error,
jobSpec,
labels,
satisfiesPzi,
satisfiesPzs,
startTime,
state,
updateTime,
webAccessUris
FROM google.aiplatform.custom_jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND customJobsId = '{{ customJobsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists CustomJobs in a Location.

```sql
SELECT
name,
createTime,
displayName,
encryptionSpec,
endTime,
error,
jobSpec,
labels,
satisfiesPzi,
satisfiesPzs,
startTime,
state,
updateTime,
webAccessUris
FROM google.aiplatform.custom_jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND readMask = '{{ readMask }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
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

Creates a CustomJob. A created CustomJob right away will be attempted to be run.

```sql
INSERT INTO google.aiplatform.custom_jobs (
data__labels,
data__encryptionSpec,
data__displayName,
data__jobSpec,
projectsId,
locationsId
)
SELECT 
'{{ labels }}',
'{{ encryptionSpec }}',
'{{ displayName }}',
'{{ jobSpec }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
createTime,
displayName,
encryptionSpec,
endTime,
error,
jobSpec,
labels,
satisfiesPzi,
satisfiesPzs,
startTime,
state,
updateTime,
webAccessUris
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: custom_jobs
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the custom_jobs resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the custom_jobs resource.
    - name: labels
      value: "{{ labels }}"
      description: |
        The labels with user-defined metadata to organize CustomJobs. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.
    - name: encryptionSpec
      description: |
        Customer-managed encryption key options for a CustomJob. If this is set, then all resources created by the CustomJob will be encrypted with the provided encryption key.
      value:
        kmsKeyName: "{{ kmsKeyName }}"
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. The display name of the CustomJob. The name can be up to 128 characters long and can consist of any UTF-8 characters.
    - name: jobSpec
      description: |
        Required. Job spec.
      value:
        pscInterfaceConfig:
          networkAttachment: "{{ networkAttachment }}"
          dnsPeeringConfigs:
            - targetNetwork: "{{ targetNetwork }}"
              domain: "{{ domain }}"
              targetProject: "{{ targetProject }}"
        persistentResourceId: "{{ persistentResourceId }}"
        enableWebAccess: {{ enableWebAccess }}
        tensorboard: "{{ tensorboard }}"
        enableDashboardAccess: {{ enableDashboardAccess }}
        reservedIpRanges:
          - "{{ reservedIpRanges }}"
        models:
          - "{{ models }}"
        protectedArtifactLocationId: "{{ protectedArtifactLocationId }}"
        experiment: "{{ experiment }}"
        baseOutputDirectory:
          outputUriPrefix: "{{ outputUriPrefix }}"
        scheduling:
          timeout: "{{ timeout }}"
          restartJobOnWorkerRestart: {{ restartJobOnWorkerRestart }}
          disableRetries: {{ disableRetries }}
          maxWaitDuration: "{{ maxWaitDuration }}"
          strategy: "{{ strategy }}"
        network: "{{ network }}"
        workerPoolSpecs:
          - containerSpec:
              imageUri: "{{ imageUri }}"
              command:
                - "{{ command }}"
              args:
                - "{{ args }}"
              env:
                - name: "{{ name }}"
                  value: "{{ value }}"
            lustreMounts: "{{ lustreMounts }}"
            machineSpec:
              machineType: "{{ machineType }}"
              tpuTopology: "{{ tpuTopology }}"
              reservationAffinity:
                reservationAffinityType: "{{ reservationAffinityType }}"
                key: "{{ key }}"
                values:
                  - "{{ values }}"
              acceleratorCount: {{ acceleratorCount }}
              acceleratorType: "{{ acceleratorType }}"
              gpuPartitionSize: "{{ gpuPartitionSize }}"
            nfsMounts: "{{ nfsMounts }}"
            pythonPackageSpec:
              executorImageUri: "{{ executorImageUri }}"
              args:
                - "{{ args }}"
              env:
                - name: "{{ name }}"
                  value: "{{ value }}"
              pythonModule: "{{ pythonModule }}"
              packageUris:
                - "{{ packageUris }}"
            diskSpec:
              bootDiskType: "{{ bootDiskType }}"
              bootDiskSizeGb: {{ bootDiskSizeGb }}
            replicaCount: "{{ replicaCount }}"
        experimentRun: "{{ experimentRun }}"
        serviceAccount: "{{ serviceAccount }}"
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

Deletes a CustomJob.

```sql
DELETE FROM google.aiplatform.custom_jobs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND customJobsId = '{{ customJobsId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel"
    values={[
        { label: 'cancel', value: 'cancel' }
    ]}
>
<TabItem value="cancel">

Cancels a CustomJob. Starts asynchronous cancellation on the CustomJob. The server makes a best effort to cancel the job, but success is not guaranteed. Clients can use JobService.GetCustomJob or other methods to check whether the cancellation succeeded or whether the job completed despite cancellation. On successful cancellation, the CustomJob is not deleted; instead it becomes a job with a CustomJob.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`, and CustomJob.state is set to `CANCELLED`.

```sql
EXEC google.aiplatform.custom_jobs.cancel 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@customJobsId='{{ customJobsId }}' --required
;
```
</TabItem>
</Tabs>
