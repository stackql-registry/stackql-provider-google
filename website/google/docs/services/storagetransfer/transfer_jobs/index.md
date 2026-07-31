--- 
title: transfer_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - transfer_jobs
  - storagetransfer
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

Creates, updates, deletes, gets or lists a <code>transfer_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transfer_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.storagetransfer.transfer_jobs" /></td></tr>
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
    <td>A unique name (within the transfer project) assigned when the job is created. If this field is empty in a CreateTransferJobRequest, Storage Transfer Service assigns a unique name. Otherwise, the specified name is used as the unique name for this job. If the specified name is in use by a job, the creation request fails with an ALREADY_EXISTS error. This name must start with `"transferJobs/"` prefix and end with a letter or a number, and should be no more than 128 characters. For transfers involving PosixFilesystem, this name must start with `transferJobs/OPI` specifically. For all other transfer types, this name must not start with `transferJobs/OPI`. Non-PosixFilesystem example: `"transferJobs/^(?!OPI)[A-Za-z0-9-._~]*[A-Za-z0-9]$"` PosixFilesystem example: `"transferJobs/OPI^[A-Za-z0-9-._~]*[A-Za-z0-9]$"` Applications must not rely on the enforcement of naming requirements involving OPI. Invalid job names fail with an INVALID_ARGUMENT error.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time that the transfer job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deletionTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time that the transfer job was deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description provided by the user for the job. Its max length is 1024 bytes when Unicode-encoded.</td>
</tr>
<tr>
    <td><CopyableCode code="eventStream" /></td>
    <td><code>object</code></td>
    <td>Specifies the event stream for the transfer job for event-driven transfers. When EventStream is specified, the Schedule fields are ignored. (id: EventStream)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModificationTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time that the transfer job was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="latestOperationName" /></td>
    <td><code>string</code></td>
    <td>The name of the most recently started TransferOperation of this JobConfig. Present if a TransferOperation has been created for this JobConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="loggingConfig" /></td>
    <td><code>object</code></td>
    <td>Logging configuration. (id: LoggingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="notificationConfig" /></td>
    <td><code>object</code></td>
    <td>Notification configuration. (id: NotificationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Google Cloud project that owns the job.</td>
</tr>
<tr>
    <td><CopyableCode code="replicationSpec" /></td>
    <td><code>object</code></td>
    <td>Replication specification. (id: ReplicationSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>object</code></td>
    <td>Specifies schedule for the transfer job. This is an optional field. When the field is not set, the job never executes a transfer, unless you invoke RunTransferJob or update the job to have a non-empty schedule. (id: Schedule)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-managed service account to which to delegate service agent permissions. You can grant Cloud Storage bucket permissions to this service account instead of to the Transfer Service service agent. Either the service account email (`SERVICE_ACCOUNT_NAME@PROJECT_ID.iam.gserviceaccount.com`) or the unique ID (`123456789012345678901`) are accepted. See https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions for required permissions.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the job. This value MUST be specified for `CreateTransferJobRequests`. **Note:** The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation. (STATUS_UNSPECIFIED, ENABLED, DISABLED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="transferSpec" /></td>
    <td><code>object</code></td>
    <td>Transfer specification. (id: TransferSpec)</td>
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
    <td>A unique name (within the transfer project) assigned when the job is created. If this field is empty in a CreateTransferJobRequest, Storage Transfer Service assigns a unique name. Otherwise, the specified name is used as the unique name for this job. If the specified name is in use by a job, the creation request fails with an ALREADY_EXISTS error. This name must start with `"transferJobs/"` prefix and end with a letter or a number, and should be no more than 128 characters. For transfers involving PosixFilesystem, this name must start with `transferJobs/OPI` specifically. For all other transfer types, this name must not start with `transferJobs/OPI`. Non-PosixFilesystem example: `"transferJobs/^(?!OPI)[A-Za-z0-9-._~]*[A-Za-z0-9]$"` PosixFilesystem example: `"transferJobs/OPI^[A-Za-z0-9-._~]*[A-Za-z0-9]$"` Applications must not rely on the enforcement of naming requirements involving OPI. Invalid job names fail with an INVALID_ARGUMENT error.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time that the transfer job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deletionTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time that the transfer job was deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description provided by the user for the job. Its max length is 1024 bytes when Unicode-encoded.</td>
</tr>
<tr>
    <td><CopyableCode code="eventStream" /></td>
    <td><code>object</code></td>
    <td>Specifies the event stream for the transfer job for event-driven transfers. When EventStream is specified, the Schedule fields are ignored. (id: EventStream)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModificationTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time that the transfer job was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="latestOperationName" /></td>
    <td><code>string</code></td>
    <td>The name of the most recently started TransferOperation of this JobConfig. Present if a TransferOperation has been created for this JobConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="loggingConfig" /></td>
    <td><code>object</code></td>
    <td>Logging configuration. (id: LoggingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="notificationConfig" /></td>
    <td><code>object</code></td>
    <td>Notification configuration. (id: NotificationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Google Cloud project that owns the job.</td>
</tr>
<tr>
    <td><CopyableCode code="replicationSpec" /></td>
    <td><code>object</code></td>
    <td>Replication specification. (id: ReplicationSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>object</code></td>
    <td>Specifies schedule for the transfer job. This is an optional field. When the field is not set, the job never executes a transfer, unless you invoke RunTransferJob or update the job to have a non-empty schedule. (id: Schedule)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-managed service account to which to delegate service agent permissions. You can grant Cloud Storage bucket permissions to this service account instead of to the Transfer Service service agent. Either the service account email (`SERVICE_ACCOUNT_NAME@PROJECT_ID.iam.gserviceaccount.com`) or the unique ID (`123456789012345678901`) are accepted. See https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions for required permissions.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the job. This value MUST be specified for `CreateTransferJobRequests`. **Note:** The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation. (STATUS_UNSPECIFIED, ENABLED, DISABLED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="transferSpec" /></td>
    <td><code>object</code></td>
    <td>Transfer specification. (id: TransferSpec)</td>
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
    <td><a href="#parameter-transferJobsId"><code>transferJobsId</code></a>, <a href="#parameter-projectId"><code>projectId</code></a></td>
    <td></td>
    <td>Gets a transfer job.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-filter"><code>filter</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists transfer jobs.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Creates a transfer job that runs periodically.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-transferJobsId"><code>transferJobsId</code></a></td>
    <td></td>
    <td>Updates a transfer job. Updating a job's transfer spec does not affect transfer operations that are running already. **Note:** The job's status field can be modified using this RPC (for example, to set a job's status to DELETED, DISABLED, or ENABLED).</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-transferJobsId"><code>transferJobsId</code></a>, <a href="#parameter-projectId"><code>projectId</code></a></td>
    <td></td>
    <td>Deletes a transfer job. Deleting a transfer job sets its status to DELETED.</td>
</tr>
<tr>
    <td><a href="#run"><CopyableCode code="run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-transferJobsId"><code>transferJobsId</code></a></td>
    <td></td>
    <td>Starts a new operation for the specified transfer job. A `TransferJob` has a maximum of one active `TransferOperation`. If this method is called while a `TransferOperation` is active, an error is returned.</td>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-transferJobsId">
    <td><CopyableCode code="transferJobsId" /></td>
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

Gets a transfer job.

```sql
SELECT
name,
creationTime,
deletionTime,
description,
eventStream,
lastModificationTime,
latestOperationName,
loggingConfig,
notificationConfig,
projectId,
replicationSpec,
schedule,
serviceAccount,
status,
transferSpec
FROM google.storagetransfer.transfer_jobs
WHERE transferJobsId = '{{ transferJobsId }}' -- required
AND projectId = '{{ projectId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists transfer jobs.

```sql
SELECT
name,
creationTime,
deletionTime,
description,
eventStream,
lastModificationTime,
latestOperationName,
loggingConfig,
notificationConfig,
projectId,
replicationSpec,
schedule,
serviceAccount,
status,
transferSpec
FROM google.storagetransfer.transfer_jobs
WHERE filter = '{{ filter }}' -- required
AND pageToken = '{{ pageToken }}'
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

Creates a transfer job that runs periodically.

```sql
INSERT INTO google.storagetransfer.transfer_jobs (
data__latestOperationName,
data__loggingConfig,
data__name,
data__replicationSpec,
data__eventStream,
data__transferSpec,
data__description,
data__serviceAccount,
data__status,
data__projectId,
data__notificationConfig,
data__schedule
)
SELECT 
'{{ latestOperationName }}',
'{{ loggingConfig }}',
'{{ name }}',
'{{ replicationSpec }}',
'{{ eventStream }}',
'{{ transferSpec }}',
'{{ description }}',
'{{ serviceAccount }}',
'{{ status }}',
'{{ projectId }}',
'{{ notificationConfig }}',
'{{ schedule }}'
RETURNING
name,
creationTime,
deletionTime,
description,
eventStream,
lastModificationTime,
latestOperationName,
loggingConfig,
notificationConfig,
projectId,
replicationSpec,
schedule,
serviceAccount,
status,
transferSpec
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: transfer_jobs
  props:
    - name: latestOperationName
      value: "{{ latestOperationName }}"
      description: |
        The name of the most recently started TransferOperation of this JobConfig. Present if a TransferOperation has been created for this JobConfig.
    - name: loggingConfig
      description: |
        Logging configuration.
      value:
        enableOnpremGcsTransferLogs: {{ enableOnpremGcsTransferLogs }}
        logActions:
          - "{{ logActions }}"
        logActionStates:
          - "{{ logActionStates }}"
    - name: name
      value: "{{ name }}"
      description: |
        A unique name (within the transfer project) assigned when the job is created. If this field is empty in a CreateTransferJobRequest, Storage Transfer Service assigns a unique name. Otherwise, the specified name is used as the unique name for this job. If the specified name is in use by a job, the creation request fails with an ALREADY_EXISTS error. This name must start with \`"transferJobs/"\` prefix and end with a letter or a number, and should be no more than 128 characters. For transfers involving PosixFilesystem, this name must start with \`transferJobs/OPI\` specifically. For all other transfer types, this name must not start with \`transferJobs/OPI\`. Non-PosixFilesystem example: \`"transferJobs/^(?!OPI)[A-Za-z0-9-._~]*[A-Za-z0-9]$"\` PosixFilesystem example: \`"transferJobs/OPI^[A-Za-z0-9-._~]*[A-Za-z0-9]$"\` Applications must not rely on the enforcement of naming requirements involving OPI. Invalid job names fail with an INVALID_ARGUMENT error.
    - name: replicationSpec
      description: |
        Replication specification.
      value:
        transferOptions:
          deleteObjectsUniqueInSink: {{ deleteObjectsUniqueInSink }}
          overwriteObjectsAlreadyExistingInSink: {{ overwriteObjectsAlreadyExistingInSink }}
          overwriteWhen: "{{ overwriteWhen }}"
          metadataOptions:
            acl: "{{ acl }}"
            storageClass: "{{ storageClass }}"
            temporaryHold: "{{ temporaryHold }}"
            kmsKey: "{{ kmsKey }}"
            gid: "{{ gid }}"
            uid: "{{ uid }}"
            timeCreated: "{{ timeCreated }}"
            mode: "{{ mode }}"
            symlink: "{{ symlink }}"
          deleteObjectsFromSourceAfterTransfer: {{ deleteObjectsFromSourceAfterTransfer }}
        gcsDataSource:
          bucketName: "{{ bucketName }}"
          path: "{{ path }}"
          managedFolderTransferEnabled: {{ managedFolderTransferEnabled }}
        gcsDataSink:
          bucketName: "{{ bucketName }}"
          path: "{{ path }}"
          managedFolderTransferEnabled: {{ managedFolderTransferEnabled }}
        objectConditions:
          minTimeElapsedSinceLastModification: "{{ minTimeElapsedSinceLastModification }}"
          maxTimeElapsedSinceLastModification: "{{ maxTimeElapsedSinceLastModification }}"
          includePrefixes:
            - "{{ includePrefixes }}"
          excludePrefixes:
            - "{{ excludePrefixes }}"
          lastModifiedBefore: "{{ lastModifiedBefore }}"
          includeStorageClasses:
            - "{{ includeStorageClasses }}"
          matchGlob: "{{ matchGlob }}"
          lastModifiedSince: "{{ lastModifiedSince }}"
    - name: eventStream
      description: |
        Specifies the event stream for the transfer job for event-driven transfers. When EventStream is specified, the Schedule fields are ignored.
      value:
        name: "{{ name }}"
        eventStreamStartTime: "{{ eventStreamStartTime }}"
        eventStreamExpirationTime: "{{ eventStreamExpirationTime }}"
    - name: transferSpec
      description: |
        Transfer specification.
      value:
        gcsDataSource:
          bucketName: "{{ bucketName }}"
          path: "{{ path }}"
          managedFolderTransferEnabled: {{ managedFolderTransferEnabled }}
        httpDataSource:
          listUrl: "{{ listUrl }}"
        azureBlobStorageDataSource:
          azureCredentials:
            sasToken: "{{ sasToken }}"
          privateNetworkService: "{{ privateNetworkService }}"
          storageAccount: "{{ storageAccount }}"
          credentialsSecret: "{{ credentialsSecret }}"
          container: "{{ container }}"
          path: "{{ path }}"
          federatedIdentityConfig:
            clientId: "{{ clientId }}"
            tenantId: "{{ tenantId }}"
        gcsIntermediateDataLocation:
          bucketName: "{{ bucketName }}"
          path: "{{ path }}"
          managedFolderTransferEnabled: {{ managedFolderTransferEnabled }}
        posixDataSource:
          rootDirectory: "{{ rootDirectory }}"
        awsS3DataSource:
          managedPrivateNetwork: {{ managedPrivateNetwork }}
          roleArn: "{{ roleArn }}"
          cloudfrontDomain: "{{ cloudfrontDomain }}"
          privateNetworkService: "{{ privateNetworkService }}"
          credentialsSecret: "{{ credentialsSecret }}"
          bucketName: "{{ bucketName }}"
          awsAccessKey:
            accessKeyId: "{{ accessKeyId }}"
            secretAccessKey: "{{ secretAccessKey }}"
          path: "{{ path }}"
        transferManifest:
          location: "{{ location }}"
        gcsDataSink:
          bucketName: "{{ bucketName }}"
          path: "{{ path }}"
          managedFolderTransferEnabled: {{ managedFolderTransferEnabled }}
        posixDataSink:
          rootDirectory: "{{ rootDirectory }}"
        sinkAgentPoolName: "{{ sinkAgentPoolName }}"
        hdfsDataSource:
          path: "{{ path }}"
        awsS3CompatibleDataSource:
          path: "{{ path }}"
          s3Metadata:
            authMethod: "{{ authMethod }}"
            protocol: "{{ protocol }}"
            listApi: "{{ listApi }}"
            requestModel: "{{ requestModel }}"
          bucketName: "{{ bucketName }}"
          region: "{{ region }}"
          endpoint: "{{ endpoint }}"
        transferOptions:
          deleteObjectsUniqueInSink: {{ deleteObjectsUniqueInSink }}
          overwriteObjectsAlreadyExistingInSink: {{ overwriteObjectsAlreadyExistingInSink }}
          overwriteWhen: "{{ overwriteWhen }}"
          metadataOptions:
            acl: "{{ acl }}"
            storageClass: "{{ storageClass }}"
            temporaryHold: "{{ temporaryHold }}"
            kmsKey: "{{ kmsKey }}"
            gid: "{{ gid }}"
            uid: "{{ uid }}"
            timeCreated: "{{ timeCreated }}"
            mode: "{{ mode }}"
            symlink: "{{ symlink }}"
          deleteObjectsFromSourceAfterTransfer: {{ deleteObjectsFromSourceAfterTransfer }}
        sourceAgentPoolName: "{{ sourceAgentPoolName }}"
        objectConditions:
          minTimeElapsedSinceLastModification: "{{ minTimeElapsedSinceLastModification }}"
          maxTimeElapsedSinceLastModification: "{{ maxTimeElapsedSinceLastModification }}"
          includePrefixes:
            - "{{ includePrefixes }}"
          excludePrefixes:
            - "{{ excludePrefixes }}"
          lastModifiedBefore: "{{ lastModifiedBefore }}"
          includeStorageClasses:
            - "{{ includeStorageClasses }}"
          matchGlob: "{{ matchGlob }}"
          lastModifiedSince: "{{ lastModifiedSince }}"
    - name: description
      value: "{{ description }}"
      description: |
        A description provided by the user for the job. Its max length is 1024 bytes when Unicode-encoded.
    - name: serviceAccount
      value: "{{ serviceAccount }}"
      description: |
        Optional. The user-managed service account to which to delegate service agent permissions. You can grant Cloud Storage bucket permissions to this service account instead of to the Transfer Service service agent. Either the service account email (\`SERVICE_ACCOUNT_NAME@PROJECT_ID.iam.gserviceaccount.com\`) or the unique ID (\`123456789012345678901\`) are accepted. See https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions for required permissions.
    - name: status
      value: "{{ status }}"
      description: |
        Status of the job. This value MUST be specified for \`CreateTransferJobRequests\`. **Note:** The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.
      valid_values: ['STATUS_UNSPECIFIED', 'ENABLED', 'DISABLED', 'DELETED']
    - name: projectId
      value: "{{ projectId }}"
      description: |
        The ID of the Google Cloud project that owns the job.
    - name: notificationConfig
      description: |
        Notification configuration.
      value:
        eventTypes:
          - "{{ eventTypes }}"
        payloadFormat: "{{ payloadFormat }}"
        pubsubTopic: "{{ pubsubTopic }}"
    - name: schedule
      description: |
        Specifies schedule for the transfer job. This is an optional field. When the field is not set, the job never executes a transfer, unless you invoke RunTransferJob or update the job to have a non-empty schedule.
      value:
        startTimeOfDay:
          hours: {{ hours }}
          seconds: {{ seconds }}
          nanos: {{ nanos }}
          minutes: {{ minutes }}
        scheduleEndDate:
          month: {{ month }}
          year: {{ year }}
          day: {{ day }}
        scheduleStartDate:
          month: {{ month }}
          year: {{ year }}
          day: {{ day }}
        endTimeOfDay:
          hours: {{ hours }}
          seconds: {{ seconds }}
          nanos: {{ nanos }}
          minutes: {{ minutes }}
        repeatInterval: "{{ repeatInterval }}"
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

Updates a transfer job. Updating a job's transfer spec does not affect transfer operations that are running already. **Note:** The job's status field can be modified using this RPC (for example, to set a job's status to DELETED, DISABLED, or ENABLED).

```sql
UPDATE google.storagetransfer.transfer_jobs
SET 
data__projectId = '{{ projectId }}',
data__transferJob = '{{ transferJob }}',
data__updateTransferJobFieldMask = '{{ updateTransferJobFieldMask }}'
WHERE 
transferJobsId = '{{ transferJobsId }}' --required
RETURNING
name,
creationTime,
deletionTime,
description,
eventStream,
lastModificationTime,
latestOperationName,
loggingConfig,
notificationConfig,
projectId,
replicationSpec,
schedule,
serviceAccount,
status,
transferSpec;
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

Deletes a transfer job. Deleting a transfer job sets its status to DELETED.

```sql
DELETE FROM google.storagetransfer.transfer_jobs
WHERE transferJobsId = '{{ transferJobsId }}' --required
AND projectId = '{{ projectId }}' --required
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

Starts a new operation for the specified transfer job. A `TransferJob` has a maximum of one active `TransferOperation`. If this method is called while a `TransferOperation` is active, an error is returned.

```sql
EXEC google.storagetransfer.transfer_jobs.run 
@transferJobsId='{{ transferJobsId }}' --required 
@@json=
'{
"projectId": "{{ projectId }}"
}'
;
```
</TabItem>
</Tabs>
