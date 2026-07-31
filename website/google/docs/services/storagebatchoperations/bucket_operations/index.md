--- 
title: bucket_operations
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_operations
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

Creates, updates, deletes, gets or lists a <code>bucket_operations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bucket_operations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.storagebatchoperations.bucket_operations" /></td></tr>
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
    <td>Identifier. The resource name of the BucketOperation. This is defined by the service. Format: `projects/&#123;project_id&#125;/locations/global/jobs/&#123;job_id&#125;/bucketOperations/&#123;bucket_operation&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="bucketName" /></td>
    <td><code>string</code></td>
    <td>The bucket name of the objects to be transformed in the BucketOperation.</td>
</tr>
<tr>
    <td><CopyableCode code="completeTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time that the BucketOperation was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="counters" /></td>
    <td><code>object</code></td>
    <td>Output only. Information about the progress of the bucket operation. (id: Counters)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time that the BucketOperation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteObject" /></td>
    <td><code>object</code></td>
    <td>Delete objects. (id: DeleteObject)</td>
</tr>
<tr>
    <td><CopyableCode code="errorSummaries" /></td>
    <td><code>array</code></td>
    <td>Output only. Summarizes errors encountered with sample error log entries.</td>
</tr>
<tr>
    <td><CopyableCode code="manifest" /></td>
    <td><code>object</code></td>
    <td>Specifies objects in a manifest file. (id: Manifest)</td>
</tr>
<tr>
    <td><CopyableCode code="prefixList" /></td>
    <td><code>object</code></td>
    <td>Specifies objects matching a prefix set. (id: PrefixList)</td>
</tr>
<tr>
    <td><CopyableCode code="projectSource" /></td>
    <td><code>object</code></td>
    <td>Specifies objects matching the object filters in a project source. (id: ProjectSource)</td>
</tr>
<tr>
    <td><CopyableCode code="putMetadata" /></td>
    <td><code>object</code></td>
    <td>Updates object metadata. Allows updating fixed-key and custom metadata and fixed-key metadata i.e. Cache-Control, Content-Disposition, Content-Encoding, Content-Language, Content-Type, Custom-Time. (id: PutMetadata)</td>
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
    <td><CopyableCode code="setObjectAcls" /></td>
    <td><code>object</code></td>
    <td>Updates object ACLs. (id: SetObjectAcls)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time that the BucketOperation was started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the BucketOperation. (STATE_UNSPECIFIED, QUEUED, RUNNING, SUCCEEDED, CANCELED, FAILED)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobsId"><code>jobsId</code></a>, <a href="#parameter-bucketOperationsId"><code>bucketOperationsId</code></a></td>
    <td></td>
    <td>Gets a BucketOperation.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobsId"><code>jobsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists BucketOperations in a given project and job.</td>
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
<tr id="parameter-bucketOperationsId">
    <td><CopyableCode code="bucketOperationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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

Gets a BucketOperation.

```sql
SELECT
name,
bucketName,
completeTime,
counters,
createTime,
deleteObject,
errorSummaries,
manifest,
prefixList,
projectSource,
putMetadata,
putObjectHold,
rewriteObject,
setObjectAcls,
startTime,
state,
updateObjectCustomContext
FROM google.storagebatchoperations.bucket_operations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND jobsId = '{{ jobsId }}' -- required
AND bucketOperationsId = '{{ bucketOperationsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists BucketOperations in a given project and job.

```sql
SELECT
*
FROM google.storagebatchoperations.bucket_operations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND jobsId = '{{ jobsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>
