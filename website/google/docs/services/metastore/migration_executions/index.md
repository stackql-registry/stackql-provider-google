--- 
title: migration_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - migration_executions
  - metastore
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

Creates, updates, deletes, gets or lists a <code>migration_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="migration_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.metastore.migration_executions" /></td></tr>
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
    <td>Output only. The relative resource name of the migration execution, in the following form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/services/&#123;service_id&#125;/migrationExecutions/&#123;migration_execution_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="cloudSqlMigrationConfig" /></td>
    <td><code>object</code></td>
    <td>Deprecated: Migrations to Dataproc Metastore are no longer supported. Use BigLake Metastore migration instead. Configuration information specific to migrating from self-managed hive metastore on Google Cloud using Cloud SQL as the backend database to Dataproc Metastore. (id: CloudSQLMigrationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the migration execution was started.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the migration execution finished.</td>
</tr>
<tr>
    <td><CopyableCode code="phase" /></td>
    <td><code>string</code></td>
    <td>Output only. Deprecated: Phase was designed for incoming migrations to Dataproc Metastore, not applicable when migrating away from it. The current phase of the migration execution. (PHASE_UNSPECIFIED, REPLICATION, CUTOVER)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the migration execution. (STATE_UNSPECIFIED, STARTING, RUNNING, CANCELLING, AWAITING_USER_ACTION, SUCCEEDED, FAILED, CANCELLED, DELETING, ROLLED_BACK)</td>
</tr>
<tr>
    <td><CopyableCode code="stateMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Additional information about the current state of the migration execution.</td>
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
    <td>Output only. The relative resource name of the migration execution, in the following form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/services/&#123;service_id&#125;/migrationExecutions/&#123;migration_execution_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="cloudSqlMigrationConfig" /></td>
    <td><code>object</code></td>
    <td>Deprecated: Migrations to Dataproc Metastore are no longer supported. Use BigLake Metastore migration instead. Configuration information specific to migrating from self-managed hive metastore on Google Cloud using Cloud SQL as the backend database to Dataproc Metastore. (id: CloudSQLMigrationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the migration execution was started.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the migration execution finished.</td>
</tr>
<tr>
    <td><CopyableCode code="phase" /></td>
    <td><code>string</code></td>
    <td>Output only. Deprecated: Phase was designed for incoming migrations to Dataproc Metastore, not applicable when migrating away from it. The current phase of the migration execution. (PHASE_UNSPECIFIED, REPLICATION, CUTOVER)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the migration execution. (STATE_UNSPECIFIED, STARTING, RUNNING, CANCELLING, AWAITING_USER_ACTION, SUCCEEDED, FAILED, CANCELLED, DELETING, ROLLED_BACK)</td>
</tr>
<tr>
    <td><CopyableCode code="stateMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Additional information about the current state of the migration execution.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-migrationExecutionsId"><code>migrationExecutionsId</code></a></td>
    <td></td>
    <td>Gets details of a single migration execution.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists migration executions on a service.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-migrationExecutionsId"><code>migrationExecutionsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single migration execution.</td>
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
<tr id="parameter-migrationExecutionsId">
    <td><CopyableCode code="migrationExecutionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-servicesId">
    <td><CopyableCode code="servicesId" /></td>
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

Gets details of a single migration execution.

```sql
SELECT
name,
cloudSqlMigrationConfig,
createTime,
endTime,
phase,
state,
stateMessage
FROM google.metastore.migration_executions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND servicesId = '{{ servicesId }}' -- required
AND migrationExecutionsId = '{{ migrationExecutionsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists migration executions on a service.

```sql
SELECT
name,
cloudSqlMigrationConfig,
createTime,
endTime,
phase,
state,
stateMessage
FROM google.metastore.migration_executions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND servicesId = '{{ servicesId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
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

Deletes a single migration execution.

```sql
DELETE FROM google.metastore.migration_executions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND servicesId = '{{ servicesId }}' --required
AND migrationExecutionsId = '{{ migrationExecutionsId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
