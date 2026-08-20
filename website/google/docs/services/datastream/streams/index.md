--- 
title: streams
hide_title: false
hide_table_of_contents: false
keywords:
  - streams
  - datastream
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

Creates, updates, deletes, gets or lists a <code>streams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="streams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datastream.streams" /></td></tr>
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
    <td>Output only. Identifier. The stream's name.</td>
</tr>
<tr>
    <td><CopyableCode code="backfillAll" /></td>
    <td><code>object</code></td>
    <td>Automatically backfill objects included in the stream source configuration. Specific objects can be excluded. (id: BackfillAllStrategy)</td>
</tr>
<tr>
    <td><CopyableCode code="backfillNone" /></td>
    <td><code>object</code></td>
    <td>Do not automatically backfill any objects. (id: BackfillNoneStrategy)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation time of the stream.</td>
</tr>
<tr>
    <td><CopyableCode code="customerManagedEncryptionKey" /></td>
    <td><code>string</code></td>
    <td>Immutable. A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data will be encrypted using an internal Stream-specific encryption key provisioned through KMS.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Destination connection profile configuration. (id: DestinationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Display name.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. Errors on the Stream.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels.</td>
</tr>
<tr>
    <td><CopyableCode code="lastRecoveryTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. If the stream was recovered, the time of the last recovery. Note: This field is currently experimental.</td>
</tr>
<tr>
    <td><CopyableCode code="ruleSets" /></td>
    <td><code>array</code></td>
    <td>Optional. Rule sets to apply to the stream.</td>
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
    <td><CopyableCode code="sourceConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Source connection profile configuration. (id: SourceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the stream. (STATE_UNSPECIFIED, NOT_STARTED, RUNNING, PAUSED, MAINTENANCE, FAILED, FAILED_PERMANENTLY, STARTING, DRAINING)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update time of the stream.</td>
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
    <td>Output only. Identifier. The stream's name.</td>
</tr>
<tr>
    <td><CopyableCode code="backfillAll" /></td>
    <td><code>object</code></td>
    <td>Automatically backfill objects included in the stream source configuration. Specific objects can be excluded. (id: BackfillAllStrategy)</td>
</tr>
<tr>
    <td><CopyableCode code="backfillNone" /></td>
    <td><code>object</code></td>
    <td>Do not automatically backfill any objects. (id: BackfillNoneStrategy)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation time of the stream.</td>
</tr>
<tr>
    <td><CopyableCode code="customerManagedEncryptionKey" /></td>
    <td><code>string</code></td>
    <td>Immutable. A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data will be encrypted using an internal Stream-specific encryption key provisioned through KMS.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Destination connection profile configuration. (id: DestinationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Display name.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. Errors on the Stream.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels.</td>
</tr>
<tr>
    <td><CopyableCode code="lastRecoveryTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. If the stream was recovered, the time of the last recovery. Note: This field is currently experimental.</td>
</tr>
<tr>
    <td><CopyableCode code="ruleSets" /></td>
    <td><code>array</code></td>
    <td>Optional. Rule sets to apply to the stream.</td>
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
    <td><CopyableCode code="sourceConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Source connection profile configuration. (id: SourceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the stream. (STATE_UNSPECIFIED, NOT_STARTED, RUNNING, PAUSED, MAINTENANCE, FAILED, FAILED_PERMANENTLY, STARTING, DRAINING)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update time of the stream.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-streamsId"><code>streamsId</code></a></td>
    <td></td>
    <td>Use this method to get details about a stream.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Use this method to list streams in a project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-streamId"><code>streamId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Use this method to create a stream.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-streamsId"><code>streamsId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Use this method to update the configuration of a stream.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-streamsId"><code>streamsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Use this method to delete a stream.</td>
</tr>
<tr>
    <td><a href="#run"><CopyableCode code="run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-streamsId"><code>streamsId</code></a></td>
    <td></td>
    <td>Use this method to start, resume or recover a stream with a non default CDC strategy.</td>
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
<tr id="parameter-streamsId">
    <td><CopyableCode code="streamsId" /></td>
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
<tr id="parameter-streamId">
    <td><CopyableCode code="streamId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
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

Use this method to get details about a stream.

```sql
SELECT
name,
backfillAll,
backfillNone,
createTime,
customerManagedEncryptionKey,
destinationConfig,
displayName,
errors,
labels,
lastRecoveryTime,
ruleSets,
satisfiesPzi,
satisfiesPzs,
sourceConfig,
state,
updateTime
FROM google.datastream.streams
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND streamsId = '{{ streamsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Use this method to list streams in a project and location.

```sql
SELECT
name,
backfillAll,
backfillNone,
createTime,
customerManagedEncryptionKey,
destinationConfig,
displayName,
errors,
labels,
lastRecoveryTime,
ruleSets,
satisfiesPzi,
satisfiesPzs,
sourceConfig,
state,
updateTime
FROM google.datastream.streams
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

Use this method to create a stream.

```sql
INSERT INTO google.datastream.streams (
data__backfillAll,
data__backfillNone,
data__customerManagedEncryptionKey,
data__destinationConfig,
data__displayName,
data__labels,
data__ruleSets,
data__sourceConfig,
data__state,
projectsId,
locationsId,
force,
requestId,
streamId,
validateOnly
)
SELECT 
'{{ backfillAll }}',
'{{ backfillNone }}',
'{{ customerManagedEncryptionKey }}',
'{{ destinationConfig }}',
'{{ displayName }}',
'{{ labels }}',
'{{ ruleSets }}',
'{{ sourceConfig }}',
'{{ state }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ force }}',
'{{ requestId }}',
'{{ streamId }}',
'{{ validateOnly }}'
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
- name: streams
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the streams resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the streams resource.
    - name: backfillAll
      description: |
        Automatically backfill objects included in the stream source configuration. Specific objects can be excluded.
      value:
        mongodbExcludedObjects:
          databases:
            - collections: "{{ collections }}"
              database: "{{ database }}"
        mysqlExcludedObjects:
          mysqlDatabases:
            - database: "{{ database }}"
              mysqlTables: "{{ mysqlTables }}"
        oracleExcludedObjects:
          oracleSchemas:
            - oracleTables: "{{ oracleTables }}"
              schema: "{{ schema }}"
        postgresqlExcludedObjects:
          postgresqlSchemas:
            - postgresqlTables: "{{ postgresqlTables }}"
              schema: "{{ schema }}"
        saasExcludedObjects:
          objects:
            - objectName: "{{ objectName }}"
              properties: "{{ properties }}"
        salesforceExcludedObjects:
          objects:
            - fields: "{{ fields }}"
              objectName: "{{ objectName }}"
        spannerExcludedObjects:
          schemas:
            - schema: "{{ schema }}"
              tables: "{{ tables }}"
        sqlServerExcludedObjects:
          schemas:
            - schema: "{{ schema }}"
              tables: "{{ tables }}"
    - name: backfillNone
      value: "{{ backfillNone }}"
      description: |
        Do not automatically backfill any objects.
    - name: customerManagedEncryptionKey
      value: "{{ customerManagedEncryptionKey }}"
      description: |
        Immutable. A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data will be encrypted using an internal Stream-specific encryption key provisioned through KMS.
    - name: destinationConfig
      description: |
        Required. Destination connection profile configuration.
      value:
        bigqueryDestinationConfig:
          appendOnly: "{{ appendOnly }}"
          blmtConfig:
            bucket: "{{ bucket }}"
            connectionName: "{{ connectionName }}"
            fileFormat: "{{ fileFormat }}"
            rootPath: "{{ rootPath }}"
            tableFormat: "{{ tableFormat }}"
          dataFreshness: "{{ dataFreshness }}"
          merge: "{{ merge }}"
          singleTargetDataset:
            datasetId: "{{ datasetId }}"
          sourceHierarchyDatasets:
            datasetTemplate:
              datasetIdPrefix: "{{ datasetIdPrefix }}"
              kmsKeyName: "{{ kmsKeyName }}"
              location: "{{ location }}"
            projectId: "{{ projectId }}"
        destinationConnectionProfile: "{{ destinationConnectionProfile }}"
        gcsDestinationConfig:
          avroFileFormat: "{{ avroFileFormat }}"
          fileRotationInterval: "{{ fileRotationInterval }}"
          fileRotationMb: {{ fileRotationMb }}
          jsonFileFormat:
            compression: "{{ compression }}"
            schemaFileFormat: "{{ schemaFileFormat }}"
          path: "{{ path }}"
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. Display name.
    - name: labels
      value: "{{ labels }}"
      description: |
        Labels.
    - name: ruleSets
      description: |
        Optional. Rule sets to apply to the stream.
      value:
        - customizationRules: "{{ customizationRules }}"
          objectFilter:
            sourceObjectIdentifier:
              mongodbIdentifier:
                collection: "{{ collection }}"
                database: "{{ database }}"
              mysqlIdentifier:
                database: "{{ database }}"
                table: "{{ table }}"
              oracleIdentifier:
                schema: "{{ schema }}"
                table: "{{ table }}"
              postgresqlIdentifier:
                schema: "{{ schema }}"
                table: "{{ table }}"
              salesforceIdentifier:
                objectName: "{{ objectName }}"
              spannerIdentifier:
                schema: "{{ schema }}"
                table: "{{ table }}"
              sqlServerIdentifier:
                schema: "{{ schema }}"
                table: "{{ table }}"
    - name: sourceConfig
      description: |
        Required. Source connection profile configuration.
      value:
        dataverseSourceConfig:
          excludeObjects:
            objects:
              - objectName: "{{ objectName }}"
                properties: "{{ properties }}"
          includeObjects:
            objects:
              - objectName: "{{ objectName }}"
                properties: "{{ properties }}"
          pollingInterval: "{{ pollingInterval }}"
        mongodbSourceConfig:
          excludeObjects:
            databases:
              - collections: "{{ collections }}"
                database: "{{ database }}"
          includeObjects:
            databases:
              - collections: "{{ collections }}"
                database: "{{ database }}"
          jsonMode: "{{ jsonMode }}"
          maxConcurrentBackfillTasks: {{ maxConcurrentBackfillTasks }}
        mysqlSourceConfig:
          binaryLogPosition: "{{ binaryLogPosition }}"
          excludeObjects:
            mysqlDatabases:
              - database: "{{ database }}"
                mysqlTables: "{{ mysqlTables }}"
          gtid: "{{ gtid }}"
          includeObjects:
            mysqlDatabases:
              - database: "{{ database }}"
                mysqlTables: "{{ mysqlTables }}"
          maxConcurrentBackfillTasks: {{ maxConcurrentBackfillTasks }}
          maxConcurrentCdcTasks: {{ maxConcurrentCdcTasks }}
        oracleSourceConfig:
          binaryLogParser:
            logFileDirectories:
              archivedLogDirectory: "{{ archivedLogDirectory }}"
              onlineLogDirectory: "{{ onlineLogDirectory }}"
            oracleAsmLogFileAccess: "{{ oracleAsmLogFileAccess }}"
          dropLargeObjects: "{{ dropLargeObjects }}"
          excludeObjects:
            oracleSchemas:
              - oracleTables: "{{ oracleTables }}"
                schema: "{{ schema }}"
          includeObjects:
            oracleSchemas:
              - oracleTables: "{{ oracleTables }}"
                schema: "{{ schema }}"
          logMiner: "{{ logMiner }}"
          maxConcurrentBackfillTasks: {{ maxConcurrentBackfillTasks }}
          maxConcurrentCdcTasks: {{ maxConcurrentCdcTasks }}
          streamLargeObjects: "{{ streamLargeObjects }}"
        postgresqlSourceConfig:
          excludeObjects:
            postgresqlSchemas:
              - postgresqlTables: "{{ postgresqlTables }}"
                schema: "{{ schema }}"
          includeObjects:
            postgresqlSchemas:
              - postgresqlTables: "{{ postgresqlTables }}"
                schema: "{{ schema }}"
          maxConcurrentBackfillTasks: {{ maxConcurrentBackfillTasks }}
          publication: "{{ publication }}"
          replicationSlot: "{{ replicationSlot }}"
        salesforceMarketingCloudSourceConfig:
          excludeObjects:
            objects:
              - objectName: "{{ objectName }}"
                properties: "{{ properties }}"
          fullRefreshPollingInterval: "{{ fullRefreshPollingInterval }}"
          includeObjects:
            objects:
              - objectName: "{{ objectName }}"
                properties: "{{ properties }}"
          pollingInterval: "{{ pollingInterval }}"
        salesforceSourceConfig:
          excludeObjects:
            objects:
              - fields: "{{ fields }}"
                objectName: "{{ objectName }}"
          includeObjects:
            objects:
              - fields: "{{ fields }}"
                objectName: "{{ objectName }}"
          pollingInterval: "{{ pollingInterval }}"
        serviceNowSourceConfig:
          excludeObjects:
            objects:
              - objectName: "{{ objectName }}"
                properties: "{{ properties }}"
          includeObjects:
            objects:
              - objectName: "{{ objectName }}"
                properties: "{{ properties }}"
          pollingInterval: "{{ pollingInterval }}"
        sourceConnectionProfile: "{{ sourceConnectionProfile }}"
        spannerSourceConfig:
          backfillDataBoostEnabled: {{ backfillDataBoostEnabled }}
          changeStreamName: "{{ changeStreamName }}"
          excludeObjects:
            schemas:
              - schema: "{{ schema }}"
                tables: "{{ tables }}"
          fgacRole: "{{ fgacRole }}"
          includeObjects:
            schemas:
              - schema: "{{ schema }}"
                tables: "{{ tables }}"
          maxConcurrentBackfillTasks: {{ maxConcurrentBackfillTasks }}
          maxConcurrentCdcTasks: {{ maxConcurrentCdcTasks }}
          spannerRpcPriority: "{{ spannerRpcPriority }}"
        sqlServerSourceConfig:
          changeTables: "{{ changeTables }}"
          excludeObjects:
            schemas:
              - schema: "{{ schema }}"
                tables: "{{ tables }}"
          includeObjects:
            schemas:
              - schema: "{{ schema }}"
                tables: "{{ tables }}"
          maxConcurrentBackfillTasks: {{ maxConcurrentBackfillTasks }}
          maxConcurrentCdcTasks: {{ maxConcurrentCdcTasks }}
          transactionLogs: "{{ transactionLogs }}"
        workdaySourceConfig:
          excludeObjects:
            objects:
              - objectName: "{{ objectName }}"
                properties: "{{ properties }}"
          includeObjects:
            objects:
              - objectName: "{{ objectName }}"
                properties: "{{ properties }}"
          pollingInterval: "{{ pollingInterval }}"
    - name: state
      value: "{{ state }}"
      description: |
        The state of the stream.
      valid_values: ['STATE_UNSPECIFIED', 'NOT_STARTED', 'RUNNING', 'PAUSED', 'MAINTENANCE', 'FAILED', 'FAILED_PERMANENTLY', 'STARTING', 'DRAINING']
    - name: force
      value: {{ force }}
    - name: requestId
      value: "{{ requestId }}"
    - name: streamId
      value: "{{ streamId }}"
    - name: validateOnly
      value: {{ validateOnly }}
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

Use this method to update the configuration of a stream.

```sql
UPDATE google.datastream.streams
SET 
data__backfillAll = '{{ backfillAll }}',
data__backfillNone = '{{ backfillNone }}',
data__customerManagedEncryptionKey = '{{ customerManagedEncryptionKey }}',
data__destinationConfig = '{{ destinationConfig }}',
data__displayName = '{{ displayName }}',
data__labels = '{{ labels }}',
data__ruleSets = '{{ ruleSets }}',
data__sourceConfig = '{{ sourceConfig }}',
data__state = '{{ state }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND streamsId = '{{ streamsId }}' --required
AND force = {{ force}}
AND requestId = '{{ requestId}}'
AND updateMask = '{{ updateMask}}'
AND validateOnly = {{ validateOnly}}
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

Use this method to delete a stream.

```sql
DELETE FROM google.datastream.streams
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND streamsId = '{{ streamsId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="run"
    values={[
        { label: 'run', value: 'run' }
    ]}
>
<TabItem value="run">

Use this method to start, resume or recover a stream with a non default CDC strategy.

```sql
EXEC google.datastream.streams.run 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@streamsId='{{ streamsId }}' --required 
@@json=
'{
"cdcStrategy": "{{ cdcStrategy }}", 
"force": {{ force }}
}'
;
```
</TabItem>
</Tabs>
