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
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Use this method to list streams in a project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-streamId"><code>streamId</code></a>, <a href="#parameter-force"><code>force</code></a></td>
    <td>Use this method to create a stream.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-streamsId"><code>streamsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-force"><code>force</code></a></td>
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
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND orderBy = '{{ orderBy }}'
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
data__displayName,
data__destinationConfig,
data__backfillAll,
data__sourceConfig,
data__labels,
data__customerManagedEncryptionKey,
data__backfillNone,
data__state,
data__ruleSets,
projectsId,
locationsId,
requestId,
validateOnly,
streamId,
force
)
SELECT 
'{{ displayName }}',
'{{ destinationConfig }}',
'{{ backfillAll }}',
'{{ sourceConfig }}',
'{{ labels }}',
'{{ customerManagedEncryptionKey }}',
'{{ backfillNone }}',
'{{ state }}',
'{{ ruleSets }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ requestId }}',
'{{ validateOnly }}',
'{{ streamId }}',
'{{ force }}'
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
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. Display name.
    - name: destinationConfig
      description: |
        Required. Destination connection profile configuration.
      value:
        bigqueryDestinationConfig:
          appendOnly: "{{ appendOnly }}"
          dataFreshness: "{{ dataFreshness }}"
          singleTargetDataset:
            datasetId: "{{ datasetId }}"
          sourceHierarchyDatasets:
            datasetTemplate:
              datasetIdPrefix: "{{ datasetIdPrefix }}"
              location: "{{ location }}"
              kmsKeyName: "{{ kmsKeyName }}"
            projectId: "{{ projectId }}"
          blmtConfig:
            rootPath: "{{ rootPath }}"
            bucket: "{{ bucket }}"
            tableFormat: "{{ tableFormat }}"
            connectionName: "{{ connectionName }}"
            fileFormat: "{{ fileFormat }}"
          merge: "{{ merge }}"
        gcsDestinationConfig:
          avroFileFormat: "{{ avroFileFormat }}"
          jsonFileFormat:
            schemaFileFormat: "{{ schemaFileFormat }}"
            compression: "{{ compression }}"
          path: "{{ path }}"
          fileRotationMb: {{ fileRotationMb }}
          fileRotationInterval: "{{ fileRotationInterval }}"
        destinationConnectionProfile: "{{ destinationConnectionProfile }}"
    - name: backfillAll
      description: |
        Automatically backfill objects included in the stream source configuration. Specific objects can be excluded.
      value:
        mongodbExcludedObjects:
          databases:
            - database: "{{ database }}"
              collections: "{{ collections }}"
        salesforceExcludedObjects:
          objects:
            - objectName: "{{ objectName }}"
              fields: "{{ fields }}"
        spannerExcludedObjects:
          schemas:
            - tables: "{{ tables }}"
              schema: "{{ schema }}"
        saasExcludedObjects:
          objects:
            - properties: "{{ properties }}"
              objectName: "{{ objectName }}"
        oracleExcludedObjects:
          oracleSchemas:
            - schema: "{{ schema }}"
              oracleTables: "{{ oracleTables }}"
        mysqlExcludedObjects:
          mysqlDatabases:
            - database: "{{ database }}"
              mysqlTables: "{{ mysqlTables }}"
        sqlServerExcludedObjects:
          schemas:
            - schema: "{{ schema }}"
              tables: "{{ tables }}"
        postgresqlExcludedObjects:
          postgresqlSchemas:
            - schema: "{{ schema }}"
              postgresqlTables: "{{ postgresqlTables }}"
    - name: sourceConfig
      description: |
        Required. Source connection profile configuration.
      value:
        serviceNowSourceConfig:
          includeObjects:
            objects:
              - properties: "{{ properties }}"
                objectName: "{{ objectName }}"
          excludeObjects:
            objects:
              - properties: "{{ properties }}"
                objectName: "{{ objectName }}"
          pollingInterval: "{{ pollingInterval }}"
        postgresqlSourceConfig:
          includeObjects:
            postgresqlSchemas:
              - schema: "{{ schema }}"
                postgresqlTables: "{{ postgresqlTables }}"
          publication: "{{ publication }}"
          replicationSlot: "{{ replicationSlot }}"
          excludeObjects:
            postgresqlSchemas:
              - schema: "{{ schema }}"
                postgresqlTables: "{{ postgresqlTables }}"
          maxConcurrentBackfillTasks: {{ maxConcurrentBackfillTasks }}
        mysqlSourceConfig:
          excludeObjects:
            mysqlDatabases:
              - database: "{{ database }}"
                mysqlTables: "{{ mysqlTables }}"
          maxConcurrentBackfillTasks: {{ maxConcurrentBackfillTasks }}
          binaryLogPosition: "{{ binaryLogPosition }}"
          gtid: "{{ gtid }}"
          maxConcurrentCdcTasks: {{ maxConcurrentCdcTasks }}
          includeObjects:
            mysqlDatabases:
              - database: "{{ database }}"
                mysqlTables: "{{ mysqlTables }}"
        spannerSourceConfig:
          changeStreamName: "{{ changeStreamName }}"
          includeObjects:
            schemas:
              - tables: "{{ tables }}"
                schema: "{{ schema }}"
          fgacRole: "{{ fgacRole }}"
          maxConcurrentCdcTasks: {{ maxConcurrentCdcTasks }}
          backfillDataBoostEnabled: {{ backfillDataBoostEnabled }}
          excludeObjects:
            schemas:
              - tables: "{{ tables }}"
                schema: "{{ schema }}"
          maxConcurrentBackfillTasks: {{ maxConcurrentBackfillTasks }}
          spannerRpcPriority: "{{ spannerRpcPriority }}"
        salesforceSourceConfig:
          pollingInterval: "{{ pollingInterval }}"
          includeObjects:
            objects:
              - objectName: "{{ objectName }}"
                fields: "{{ fields }}"
          excludeObjects:
            objects:
              - objectName: "{{ objectName }}"
                fields: "{{ fields }}"
        sourceConnectionProfile: "{{ sourceConnectionProfile }}"
        oracleSourceConfig:
          includeObjects:
            oracleSchemas:
              - schema: "{{ schema }}"
                oracleTables: "{{ oracleTables }}"
          logMiner: "{{ logMiner }}"
          maxConcurrentCdcTasks: {{ maxConcurrentCdcTasks }}
          maxConcurrentBackfillTasks: {{ maxConcurrentBackfillTasks }}
          excludeObjects:
            oracleSchemas:
              - schema: "{{ schema }}"
                oracleTables: "{{ oracleTables }}"
          binaryLogParser:
            logFileDirectories:
              onlineLogDirectory: "{{ onlineLogDirectory }}"
              archivedLogDirectory: "{{ archivedLogDirectory }}"
            oracleAsmLogFileAccess: "{{ oracleAsmLogFileAccess }}"
          dropLargeObjects: "{{ dropLargeObjects }}"
          streamLargeObjects: "{{ streamLargeObjects }}"
        mongodbSourceConfig:
          includeObjects:
            databases:
              - database: "{{ database }}"
                collections: "{{ collections }}"
          excludeObjects:
            databases:
              - database: "{{ database }}"
                collections: "{{ collections }}"
          maxConcurrentBackfillTasks: {{ maxConcurrentBackfillTasks }}
          jsonMode: "{{ jsonMode }}"
        salesforceMarketingCloudSourceConfig:
          includeObjects:
            objects:
              - properties: "{{ properties }}"
                objectName: "{{ objectName }}"
          excludeObjects:
            objects:
              - properties: "{{ properties }}"
                objectName: "{{ objectName }}"
          fullRefreshPollingInterval: "{{ fullRefreshPollingInterval }}"
          pollingInterval: "{{ pollingInterval }}"
        dataverseSourceConfig:
          includeObjects:
            objects:
              - properties: "{{ properties }}"
                objectName: "{{ objectName }}"
          excludeObjects:
            objects:
              - properties: "{{ properties }}"
                objectName: "{{ objectName }}"
          pollingInterval: "{{ pollingInterval }}"
        sqlServerSourceConfig:
          includeObjects:
            schemas:
              - schema: "{{ schema }}"
                tables: "{{ tables }}"
          transactionLogs: "{{ transactionLogs }}"
          maxConcurrentCdcTasks: {{ maxConcurrentCdcTasks }}
          excludeObjects:
            schemas:
              - schema: "{{ schema }}"
                tables: "{{ tables }}"
          maxConcurrentBackfillTasks: {{ maxConcurrentBackfillTasks }}
          changeTables: "{{ changeTables }}"
        workdaySourceConfig:
          pollingInterval: "{{ pollingInterval }}"
          includeObjects:
            objects:
              - properties: "{{ properties }}"
                objectName: "{{ objectName }}"
          excludeObjects:
            objects:
              - properties: "{{ properties }}"
                objectName: "{{ objectName }}"
    - name: labels
      value: "{{ labels }}"
      description: |
        Labels.
    - name: customerManagedEncryptionKey
      value: "{{ customerManagedEncryptionKey }}"
      description: |
        Immutable. A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data will be encrypted using an internal Stream-specific encryption key provisioned through KMS.
    - name: backfillNone
      value: "{{ backfillNone }}"
      description: |
        Do not automatically backfill any objects.
    - name: state
      value: "{{ state }}"
      description: |
        The state of the stream.
      valid_values: ['STATE_UNSPECIFIED', 'NOT_STARTED', 'RUNNING', 'PAUSED', 'MAINTENANCE', 'FAILED', 'FAILED_PERMANENTLY', 'STARTING', 'DRAINING']
    - name: ruleSets
      description: |
        Optional. Rule sets to apply to the stream.
      value:
        - customizationRules: "{{ customizationRules }}"
          objectFilter:
            sourceObjectIdentifier:
              mongodbIdentifier:
                database: "{{ database }}"
                collection: "{{ collection }}"
              salesforceIdentifier:
                objectName: "{{ objectName }}"
              sqlServerIdentifier:
                schema: "{{ schema }}"
                table: "{{ table }}"
              spannerIdentifier:
                schema: "{{ schema }}"
                table: "{{ table }}"
              mysqlIdentifier:
                database: "{{ database }}"
                table: "{{ table }}"
              oracleIdentifier:
                schema: "{{ schema }}"
                table: "{{ table }}"
              postgresqlIdentifier:
                schema: "{{ schema }}"
                table: "{{ table }}"
    - name: requestId
      value: "{{ requestId }}"
    - name: validateOnly
      value: {{ validateOnly }}
    - name: streamId
      value: "{{ streamId }}"
    - name: force
      value: {{ force }}
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
data__displayName = '{{ displayName }}',
data__destinationConfig = '{{ destinationConfig }}',
data__backfillAll = '{{ backfillAll }}',
data__sourceConfig = '{{ sourceConfig }}',
data__labels = '{{ labels }}',
data__customerManagedEncryptionKey = '{{ customerManagedEncryptionKey }}',
data__backfillNone = '{{ backfillNone }}',
data__state = '{{ state }}',
data__ruleSets = '{{ ruleSets }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND streamsId = '{{ streamsId }}' --required
AND requestId = '{{ requestId}}'
AND updateMask = '{{ updateMask}}'
AND validateOnly = {{ validateOnly}}
AND force = {{ force}}
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
