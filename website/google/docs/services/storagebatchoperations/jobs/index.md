--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
  - storagebatchoperations
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.storagebatchoperations.jobs" /></td></tr>
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
    <td>Identifier. The resource name of the job. Format: `projects/&#123;project_id&#125;/locations/global/jobs/&#123;job_id&#125;`. For example: `projects/123456/locations/global/jobs/job01`. `job_id` is unique in a given project.</td>
</tr>
<tr>
    <td><CopyableCode code="bucketList" /></td>
    <td><code>object</code></td>
    <td>Specifies a list of buckets and their objects to be transformed. (id: BucketList)</td>
</tr>
<tr>
    <td><CopyableCode code="completeTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time that the job was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="counters" /></td>
    <td><code>object</code></td>
    <td>Output only. Information about the progress of the job. (id: Counters)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time that the job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteObject" /></td>
    <td><code>object</code></td>
    <td>Delete objects. (id: DeleteObject)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A user-provided description for the job. Maximum length: 1024 bytes when unicode-encoded.</td>
</tr>
<tr>
    <td><CopyableCode code="dryRun" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If true, the job runs in dry run mode, returning the total object count and, if the object configuration is a prefix list, the bytes found from source. No transformations are performed.</td>
</tr>
<tr>
    <td><CopyableCode code="errorSummaries" /></td>
    <td><code>array</code></td>
    <td>Output only. Summarizes errors encountered with sample error log entries.</td>
</tr>
<tr>
    <td><CopyableCode code="isMultiBucketJob" /></td>
    <td><code>boolean</code></td>
    <td>Output only. If true, this job operates on multiple buckets. Multi-bucket jobs are subject to different quota limits than single-bucket jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="loggingConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Logging configuration. (id: LoggingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="projectSource" /></td>
    <td><code>object</code></td>
    <td>Specifies a project source and filters to identify objects to be transformed. (id: ProjectSource)</td>
</tr>
<tr>
    <td><CopyableCode code="putMetadata" /></td>
    <td><code>object</code></td>
    <td>Updates object metadata. Allows updating fixed-key and custom metadata. For example, `Cache-Control`, `Content-Disposition`, `Content-Encoding`, `Content-Language`, `Content-Type`, `Custom-Time`, and `Retention configuration`. (id: PutMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="putObjectHold" /></td>
    <td><code>object</code></td>
    <td>Changes object hold status. (id: PutObjectHold)</td>
</tr>
<tr>
    <td><CopyableCode code="rewriteObject" /></td>
    <td><code>object</code></td>
    <td>Rewrite the object and updates metadata like KMS key. (id: RewriteObject)</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time that the job was scheduled.</td>
</tr>
<tr>
    <td><CopyableCode code="setObjectAcls" /></td>
    <td><code>object</code></td>
    <td>Updates object ACLs. (id: SetObjectAcls)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the job. (STATE_UNSPECIFIED, RUNNING, SUCCEEDED, CANCELED, FAILED, QUEUED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateObjectCustomContext" /></td>
    <td><code>object</code></td>
    <td>Update object custom context. (id: UpdateObjectCustomContext)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobsId"><code>jobsId</code></a></td>
    <td></td>
    <td>Gets a batch job.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists Jobs in a given project.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-jobId"><code>jobId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a batch job.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobsId"><code>jobsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a batch job.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobsId"><code>jobsId</code></a></td>
    <td></td>
    <td>Cancels a batch job.</td>
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
<tr id="parameter-jobsId">
    <td><CopyableCode code="jobsId" /></td>
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
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-jobId">
    <td><CopyableCode code="jobId" /></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
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

Gets a batch job.

```sql
SELECT
name,
bucketList,
completeTime,
counters,
createTime,
deleteObject,
description,
dryRun,
errorSummaries,
isMultiBucketJob,
loggingConfig,
projectSource,
putMetadata,
putObjectHold,
rewriteObject,
scheduleTime,
setObjectAcls,
state,
updateObjectCustomContext
FROM google.storagebatchoperations.jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND jobsId = '{{ jobsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Jobs in a given project.

```sql
SELECT
*
FROM google.storagebatchoperations.jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND orderBy = '{{ orderBy }}'
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

Creates a batch job.

```sql
INSERT INTO google.storagebatchoperations.jobs (
data__updateObjectCustomContext,
data__setObjectAcls,
data__name,
data__putMetadata,
data__bucketList,
data__putObjectHold,
data__projectSource,
data__rewriteObject,
data__dryRun,
data__deleteObject,
data__description,
data__loggingConfig,
projectsId,
locationsId,
jobId,
requestId
)
SELECT 
'{{ updateObjectCustomContext }}',
'{{ setObjectAcls }}',
'{{ name }}',
'{{ putMetadata }}',
'{{ bucketList }}',
'{{ putObjectHold }}',
'{{ projectSource }}',
'{{ rewriteObject }}',
{{ dryRun }},
'{{ deleteObject }}',
'{{ description }}',
'{{ loggingConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ jobId }}',
'{{ requestId }}'
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
- name: jobs
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the jobs resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the jobs resource.
    - name: updateObjectCustomContext
      description: |
        Update object custom context.
      value:
        customContextUpdates:
          keysToClear:
            - "{{ keysToClear }}"
          updates: "{{ updates }}"
        clearAll: {{ clearAll }}
    - name: setObjectAcls
      description: |
        Updates object ACLs.
      value:
        accessControlsUpdates:
          removeEntities:
            - "{{ removeEntities }}"
          grants:
            - entity: "{{ entity }}"
              role: "{{ role }}"
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The resource name of the job. Format: \`projects/{project_id}/locations/global/jobs/{job_id}\`. For example: \`projects/123456/locations/global/jobs/job01\`. \`job_id\` is unique in a given project.
    - name: putMetadata
      description: |
        Updates object metadata. Allows updating fixed-key and custom metadata. For example, \`Cache-Control\`, \`Content-Disposition\`, \`Content-Encoding\`, \`Content-Language\`, \`Content-Type\`, \`Custom-Time\`, and \`Retention configuration\`.
      value:
        objectRetention:
          retainUntilTime: "{{ retainUntilTime }}"
          retentionMode: "{{ retentionMode }}"
        contentType: "{{ contentType }}"
        contentDisposition: "{{ contentDisposition }}"
        contentEncoding: "{{ contentEncoding }}"
        contentLanguage: "{{ contentLanguage }}"
        customTime: "{{ customTime }}"
        customMetadata: "{{ customMetadata }}"
        cacheControl: "{{ cacheControl }}"
    - name: bucketList
      description: |
        Specifies a list of buckets and their objects to be transformed.
      value:
        buckets:
          - bucket: "{{ bucket }}"
            prefixList:
              includedObjectPrefixes:
                - "{{ includedObjectPrefixes }}"
            manifest:
              manifestLocation: "{{ manifestLocation }}"
    - name: putObjectHold
      description: |
        Changes object hold status.
      value:
        eventBasedHold: "{{ eventBasedHold }}"
        temporaryHold: "{{ temporaryHold }}"
    - name: projectSource
      description: |
        Specifies a project source and filters to identify objects to be transformed.
      value:
        project: "{{ project }}"
        bucketFilters:
          title: "{{ title }}"
          description: "{{ description }}"
          expression: "{{ expression }}"
          location: "{{ location }}"
        dryRunJobId: "{{ dryRunJobId }}"
        snapshotTime: "{{ snapshotTime }}"
        insightsDatasetConfig: "{{ insightsDatasetConfig }}"
        objectFilters:
          title: "{{ title }}"
          description: "{{ description }}"
          expression: "{{ expression }}"
          location: "{{ location }}"
        targetLocations:
          snapshotTime: "{{ snapshotTime }}"
          locations:
            - "{{ locations }}"
    - name: rewriteObject
      description: |
        Rewrite the object and updates metadata like KMS key.
      value:
        kmsKey: "{{ kmsKey }}"
        storageClass: "{{ storageClass }}"
    - name: dryRun
      value: {{ dryRun }}
      description: |
        Optional. If true, the job runs in dry run mode, returning the total object count and, if the object configuration is a prefix list, the bytes found from source. No transformations are performed.
    - name: deleteObject
      description: |
        Delete objects.
      value:
        permanentObjectDeletionEnabled: {{ permanentObjectDeletionEnabled }}
    - name: description
      value: "{{ description }}"
      description: |
        Optional. A user-provided description for the job. Maximum length: 1024 bytes when unicode-encoded.
    - name: loggingConfig
      description: |
        Optional. Logging configuration.
      value:
        logActions:
          - "{{ logActions }}"
        logActionStates:
          - "{{ logActionStates }}"
    - name: jobId
      value: "{{ jobId }}"
    - name: requestId
      value: "{{ requestId }}"
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

Deletes a batch job.

```sql
DELETE FROM google.storagebatchoperations.jobs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND jobsId = '{{ jobsId }}' --required
AND requestId = '{{ requestId }}'
AND force = '{{ force }}'
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

Cancels a batch job.

```sql
EXEC google.storagebatchoperations.jobs.cancel 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@jobsId='{{ jobsId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}"
}'
;
```
</TabItem>
</Tabs>
