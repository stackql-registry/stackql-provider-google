--- 
title: disk_migration_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - disk_migration_jobs
  - vmmigration
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

Creates, updates, deletes, gets or lists a <code>disk_migration_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="disk_migration_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.vmmigration.disk_migration_jobs" /></td></tr>
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
    <td>Output only. Identifier. The identifier of the DiskMigrationJob.</td>
</tr>
<tr>
    <td><CopyableCode code="awsSourceDiskDetails" /></td>
    <td><code>object</code></td>
    <td>Details of the unattached AWS source disk. (id: AwsSourceDiskDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the DiskMigrationJob resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. Provides details on the errors that led to the disk migration job's state in case of an error.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the DiskMigrationJob. (STATE_UNSPECIFIED, READY, RUNNING, SUCCEEDED, CANCELLING, CANCELLED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="steps" /></td>
    <td><code>array</code></td>
    <td>Output only. The disk migration steps list representing its progress.</td>
</tr>
<tr>
    <td><CopyableCode code="targetDetails" /></td>
    <td><code>object</code></td>
    <td>Required. Details of the target Disk in Compute Engine. (id: DiskMigrationJobTargetDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last time the DiskMigrationJob resource was updated.</td>
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
    <td>Output only. Identifier. The identifier of the DiskMigrationJob.</td>
</tr>
<tr>
    <td><CopyableCode code="awsSourceDiskDetails" /></td>
    <td><code>object</code></td>
    <td>Details of the unattached AWS source disk. (id: AwsSourceDiskDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the DiskMigrationJob resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. Provides details on the errors that led to the disk migration job's state in case of an error.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the DiskMigrationJob. (STATE_UNSPECIFIED, READY, RUNNING, SUCCEEDED, CANCELLING, CANCELLED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="steps" /></td>
    <td><code>array</code></td>
    <td>Output only. The disk migration steps list representing its progress.</td>
</tr>
<tr>
    <td><CopyableCode code="targetDetails" /></td>
    <td><code>object</code></td>
    <td>Required. Details of the target Disk in Compute Engine. (id: DiskMigrationJobTargetDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last time the DiskMigrationJob resource was updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-diskMigrationJobsId"><code>diskMigrationJobsId</code></a></td>
    <td></td>
    <td>Gets details of a single DiskMigrationJob.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists DiskMigrationJobs in a given Source.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td><a href="#parameter-diskMigrationJobId"><code>diskMigrationJobId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new disk migration job in a given Source.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-diskMigrationJobsId"><code>diskMigrationJobsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single DiskMigrationJob.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-diskMigrationJobsId"><code>diskMigrationJobsId</code></a></td>
    <td></td>
    <td>Deletes a single DiskMigrationJob.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-diskMigrationJobsId"><code>diskMigrationJobsId</code></a></td>
    <td></td>
    <td>Cancels the disk migration job.</td>
</tr>
<tr>
    <td><a href="#run"><CopyableCode code="run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-diskMigrationJobsId"><code>diskMigrationJobsId</code></a></td>
    <td></td>
    <td>Runs the disk migration job.</td>
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
<tr id="parameter-diskMigrationJobsId">
    <td><CopyableCode code="diskMigrationJobsId" /></td>
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
<tr id="parameter-sourcesId">
    <td><CopyableCode code="sourcesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-diskMigrationJobId">
    <td><CopyableCode code="diskMigrationJobId" /></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
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

Gets details of a single DiskMigrationJob.

```sql
SELECT
name,
awsSourceDiskDetails,
createTime,
errors,
state,
steps,
targetDetails,
updateTime
FROM google.vmmigration.disk_migration_jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND sourcesId = '{{ sourcesId }}' -- required
AND diskMigrationJobsId = '{{ diskMigrationJobsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists DiskMigrationJobs in a given Source.

```sql
SELECT
name,
awsSourceDiskDetails,
createTime,
errors,
state,
steps,
targetDetails,
updateTime
FROM google.vmmigration.disk_migration_jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND sourcesId = '{{ sourcesId }}' -- required
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

Creates a new disk migration job in a given Source.

```sql
INSERT INTO google.vmmigration.disk_migration_jobs (
data__awsSourceDiskDetails,
data__targetDetails,
projectsId,
locationsId,
sourcesId,
diskMigrationJobId,
requestId
)
SELECT 
'{{ awsSourceDiskDetails }}',
'{{ targetDetails }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ sourcesId }}',
'{{ diskMigrationJobId }}',
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
- name: disk_migration_jobs
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the disk_migration_jobs resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the disk_migration_jobs resource.
    - name: sourcesId
      value: "{{ sourcesId }}"
      description: Required parameter for the disk_migration_jobs resource.
    - name: awsSourceDiskDetails
      description: |
        Details of the unattached AWS source disk.
      value:
        diskType: "{{ diskType }}"
        sizeGib: "{{ sizeGib }}"
        tags: "{{ tags }}"
        volumeId: "{{ volumeId }}"
    - name: targetDetails
      description: |
        Required. Details of the target Disk in Compute Engine.
      value:
        encryption:
          kmsKey: "{{ kmsKey }}"
        labels: "{{ labels }}"
        targetDisk:
          diskId: "{{ diskId }}"
          diskType: "{{ diskType }}"
          replicaZones:
            - "{{ replicaZones }}"
          zone: "{{ zone }}"
        targetProject: "{{ targetProject }}"
    - name: diskMigrationJobId
      value: "{{ diskMigrationJobId }}"
    - name: requestId
      value: "{{ requestId }}"
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

Updates the parameters of a single DiskMigrationJob.

```sql
UPDATE google.vmmigration.disk_migration_jobs
SET 
data__awsSourceDiskDetails = '{{ awsSourceDiskDetails }}',
data__targetDetails = '{{ targetDetails }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND sourcesId = '{{ sourcesId }}' --required
AND diskMigrationJobsId = '{{ diskMigrationJobsId }}' --required
AND requestId = '{{ requestId}}'
AND updateMask = '{{ updateMask}}'
RETURNING
name,
done,
error,
metadata,
response;
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

Deletes a single DiskMigrationJob.

```sql
DELETE FROM google.vmmigration.disk_migration_jobs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND sourcesId = '{{ sourcesId }}' --required
AND diskMigrationJobsId = '{{ diskMigrationJobsId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel"
    values={[
        { label: 'cancel', value: 'cancel' },
        { label: 'run', value: 'run' }
    ]}
>
<TabItem value="cancel">

Cancels the disk migration job.

```sql
EXEC google.vmmigration.disk_migration_jobs.cancel 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sourcesId='{{ sourcesId }}' --required, 
@diskMigrationJobsId='{{ diskMigrationJobsId }}' --required
;
```
</TabItem>
<TabItem value="run">

Runs the disk migration job.

```sql
EXEC google.vmmigration.disk_migration_jobs.run 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@sourcesId='{{ sourcesId }}' --required, 
@diskMigrationJobsId='{{ diskMigrationJobsId }}' --required
;
```
</TabItem>
</Tabs>
