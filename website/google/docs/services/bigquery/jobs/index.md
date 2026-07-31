--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
  - bigquery
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigquery.jobs" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Output only. Opaque ID field of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Required. Describes the job configuration. (id: JobConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. A hash of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="jobCreationReason" /></td>
    <td><code>object</code></td>
    <td>Output only. The reason why a Job was created. (id: JobCreationReason)</td>
</tr>
<tr>
    <td><CopyableCode code="jobReference" /></td>
    <td><code>object</code></td>
    <td>Optional. Reference describing the unique-per-user name of the job. (id: JobReference)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of the resource. (default: bigquery#job)</td>
</tr>
<tr>
    <td><CopyableCode code="principal_subject" /></td>
    <td><code>string</code></td>
    <td>Output only. [Full-projection-only] String representation of identity of requesting party. Populated for both first- and third-party identities. Only present for APIs that support third-party identities.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. A URL that can be used to access the resource again.</td>
</tr>
<tr>
    <td><CopyableCode code="statistics" /></td>
    <td><code>object</code></td>
    <td>Output only. Information about the job, including starting time and ending time of the job. (id: JobStatistics)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Output only. The status of this job. Examine this value when polling an asynchronous job to see if the job is complete. (id: JobStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="user_email" /></td>
    <td><code>string</code></td>
    <td>Output only. Email address of the user who ran the job.</td>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Unique opaque ID of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Required. Describes the job configuration. (id: JobConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="errorResult" /></td>
    <td><code>object</code></td>
    <td>Error details. (id: ErrorProto)</td>
</tr>
<tr>
    <td><CopyableCode code="jobReference" /></td>
    <td><code>object</code></td>
    <td>Unique opaque ID of the job. (id: JobReference)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="principal_subject" /></td>
    <td><code>string</code></td>
    <td>[Full-projection-only] String representation of identity of requesting party. Populated for both first- and third-party identities. Only present for APIs that support third-party identities.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Running state of the job. When the state is DONE, errorResult can be checked to determine whether the job succeeded or failed.</td>
</tr>
<tr>
    <td><CopyableCode code="statistics" /></td>
    <td><code>object</code></td>
    <td>Output only. Information about the job, including starting time and ending time of the job. (id: JobStatistics)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>[Full-projection-only] Describes the status of this job. (id: JobStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="user_email" /></td>
    <td><code>string</code></td>
    <td>[Full-projection-only] Email address of the user who ran the job.</td>
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
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+jobId"><code>+jobId</code></a></td>
    <td><a href="#parameter-location"><code>location</code></a></td>
    <td>Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role. # IAM Permissions Requires the `bigquery.jobs.get` permission on the job resource. If the user matches the creator of the job, the `bigquery.jobs.create` permission on the project is required instead.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-maxCreationTime"><code>maxCreationTime</code></a>, <a href="#parameter-allUsers"><code>allUsers</code></a>, <a href="#parameter-parentJobId"><code>parentJobId</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-minCreationTime"><code>minCreationTime</code></a>, <a href="#parameter-projection"><code>projection</code></a>, <a href="#parameter-stateFilter"><code>stateFilter</code></a></td>
    <td>Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property. # IAM Permissions Requires no specific IAM permission(s) to use this method. Users are able to list the jobs they created. Additional access is granted based on the following permissions: - Users with the `bigquery.jobs.listAll` permission can list all jobs with all metadata. - Users with the `bigquery.jobs.list` permission can list all jobs, but with redacted information for jobs they did not create.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a></td>
    <td></td>
    <td>Starts a new asynchronous job. This API has two different kinds of endpoint URIs, as this method supports a variety of use cases. * The *Metadata* URI is used for most interactions, as it accepts the job configuration directly. * The *Upload* URI is ONLY for the case when you're sending both a load job configuration and a data stream together. In this case, the Upload URI accepts the job configuration and the data as two distinct multipart MIME parts. # IAM Permissions Requires the `bigquery.jobs.create` permission on the project resource. Additional permissions are required depending on the job type: - **Load, Export, and Copy jobs**: Generally require data-level permissions such as `bigquery.tables.export` or access to external storage. - **Query jobs**: Permissions are dependent on the SQL statement. Complex queries (DDL, DCL) may require additional permissions to create reservations, modify IAM policies, or update project settings.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+jobId"><code>+jobId</code></a></td>
    <td><a href="#parameter-location"><code>location</code></a></td>
    <td>Requests the deletion of the metadata of a job. This call returns when the job's metadata is deleted. # IAM Permissions Requires the `bigquery.jobs.delete` permission on the job resource.</td>
</tr>
<tr>
    <td><a href="#query"><CopyableCode code="query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a></td>
    <td></td>
    <td>Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout. # IAM Permissions Requires the `bigquery.jobs.create` permission on the project resource. Data-level permissions are highly dependent on the SQL statement being executed. While standard queries require data access (such as `bigquery.tables.getData`), complex operations like DDL or DCL may require permissions to manage reservations, IAM policies, or project settings.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-+jobId"><code>+jobId</code></a></td>
    <td><a href="#parameter-location"><code>location</code></a></td>
    <td>Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs. # IAM Permissions Requires the `bigquery.jobs.update` permission on the job resource. If the user matches the creator of the job, the `bigquery.jobs.create` permission on the project is required instead.</td>
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
<tr id="parameter-+jobId">
    <td><CopyableCode code="+jobId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-allUsers">
    <td><CopyableCode code="allUsers" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-location">
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxCreationTime">
    <td><CopyableCode code="maxCreationTime" /></td>
    <td><code>string (uint64)</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (uint32)</code></td>
    <td></td>
</tr>
<tr id="parameter-minCreationTime">
    <td><CopyableCode code="minCreationTime" /></td>
    <td><code>string (uint64)</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-parentJobId">
    <td><CopyableCode code="parentJobId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projection">
    <td><CopyableCode code="projection" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-stateFilter">
    <td><CopyableCode code="stateFilter" /></td>
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

Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role. # IAM Permissions Requires the `bigquery.jobs.get` permission on the job resource. If the user matches the creator of the job, the `bigquery.jobs.create` permission on the project is required instead.

```sql
SELECT
id,
configuration,
etag,
jobCreationReason,
jobReference,
kind,
principal_subject,
selfLink,
statistics,
status,
user_email
FROM google.bigquery.jobs
WHERE projectId = '{{ projectId }}' -- required
AND +jobId = '{{ +jobId }}' -- required
AND location = '{{ location }}'
;
```
</TabItem>
<TabItem value="list">

Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property. # IAM Permissions Requires no specific IAM permission(s) to use this method. Users are able to list the jobs they created. Additional access is granted based on the following permissions: - Users with the `bigquery.jobs.listAll` permission can list all jobs with all metadata. - Users with the `bigquery.jobs.list` permission can list all jobs, but with redacted information for jobs they did not create.

```sql
SELECT
id,
configuration,
errorResult,
jobReference,
kind,
principal_subject,
state,
statistics,
status,
user_email
FROM google.bigquery.jobs
WHERE projectId = '{{ projectId }}' -- required
AND pageToken = '{{ pageToken }}'
AND maxCreationTime = '{{ maxCreationTime }}'
AND allUsers = '{{ allUsers }}'
AND parentJobId = '{{ parentJobId }}'
AND maxResults = '{{ maxResults }}'
AND minCreationTime = '{{ minCreationTime }}'
AND projection = '{{ projection }}'
AND stateFilter = '{{ stateFilter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="insert"
    values={[
        { label: 'insert', value: 'insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert">

Starts a new asynchronous job. This API has two different kinds of endpoint URIs, as this method supports a variety of use cases. * The *Metadata* URI is used for most interactions, as it accepts the job configuration directly. * The *Upload* URI is ONLY for the case when you're sending both a load job configuration and a data stream together. In this case, the Upload URI accepts the job configuration and the data as two distinct multipart MIME parts. # IAM Permissions Requires the `bigquery.jobs.create` permission on the project resource. Additional permissions are required depending on the job type: - **Load, Export, and Copy jobs**: Generally require data-level permissions such as `bigquery.tables.export` or access to external storage. - **Query jobs**: Permissions are dependent on the SQL statement. Complex queries (DDL, DCL) may require additional permissions to create reservations, modify IAM policies, or update project settings.

```sql
INSERT INTO google.bigquery.jobs (
data__configuration,
data__jobReference,
projectId
)
SELECT 
'{{ configuration }}',
'{{ jobReference }}',
'{{ projectId }}'
RETURNING
id,
configuration,
etag,
jobCreationReason,
jobReference,
kind,
principal_subject,
selfLink,
statistics,
status,
user_email
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
    - name: configuration
      description: |
        Required. Describes the job configuration.
      value:
        copy:
          destinationExpirationTime: "{{ destinationExpirationTime }}"
          operationType: "{{ operationType }}"
          createDisposition: "{{ createDisposition }}"
          writeDisposition: "{{ writeDisposition }}"
          sourceTables:
            - tableId: "{{ tableId }}"
              datasetId: "{{ datasetId }}"
              projectId: "{{ projectId }}"
          destinationTable:
            tableId: "{{ tableId }}"
            datasetId: "{{ datasetId }}"
            projectId: "{{ projectId }}"
          destinationEncryptionConfiguration:
            kmsKeyName: "{{ kmsKeyName }}"
          sourceTable:
            tableId: "{{ tableId }}"
            datasetId: "{{ datasetId }}"
            projectId: "{{ projectId }}"
        extract:
          sourceModel:
            datasetId: "{{ datasetId }}"
            modelId: "{{ modelId }}"
            projectId: "{{ projectId }}"
          destinationFormat: "{{ destinationFormat }}"
          sourceTable:
            tableId: "{{ tableId }}"
            datasetId: "{{ datasetId }}"
            projectId: "{{ projectId }}"
          compression: "{{ compression }}"
          printHeader: {{ printHeader }}
          destinationUri: "{{ destinationUri }}"
          fieldDelimiter: "{{ fieldDelimiter }}"
          destinationUris:
            - "{{ destinationUris }}"
          modelExtractOptions:
            trialId: "{{ trialId }}"
          useAvroLogicalTypes: {{ useAvroLogicalTypes }}
        query:
          preserveNulls: {{ preserveNulls }}
          createDisposition: "{{ createDisposition }}"
          defaultDataset:
            datasetId: "{{ datasetId }}"
            projectId: "{{ projectId }}"
          parameterMode: "{{ parameterMode }}"
          writeDisposition: "{{ writeDisposition }}"
          rangePartitioning:
            field: "{{ field }}"
            range:
              interval: "{{ interval }}"
              end: "{{ end }}"
              start: "{{ start }}"
          tableDefinitions: "{{ tableDefinitions }}"
          queryParameters:
            - parameterValue:
                arrayValues:
                  - arrayValues: "{{ arrayValues }}"
                    value: "{{ value }}"
                    rangeValue:
                      end: "{{ end }}"
                      start: "{{ start }}"
                    structValues: "{{ structValues }}"
                value: "{{ value }}"
                rangeValue:
                  end: "{{ end }}"
                  start: "{{ start }}"
                structValues: "{{ structValues }}"
              parameterType:
                structTypes:
                  - description: "{{ description }}"
                    name: "{{ name }}"
                    type:
                      structTypes: "{{ structTypes }}"
                      rangeElementType: "{{ rangeElementType }}"
                      type: "{{ type }}"
                      arrayType: "{{ arrayType }}"
                      timestampPrecision: "{{ timestampPrecision }}"
                rangeElementType:
                  structTypes: "{{ structTypes }}"
                  rangeElementType: "{{ rangeElementType }}"
                  type: "{{ type }}"
                  arrayType: "{{ arrayType }}"
                  timestampPrecision: "{{ timestampPrecision }}"
                type: "{{ type }}"
                arrayType:
                  structTypes: "{{ structTypes }}"
                  rangeElementType: "{{ rangeElementType }}"
                  type: "{{ type }}"
                  arrayType: "{{ arrayType }}"
                  timestampPrecision: "{{ timestampPrecision }}"
                timestampPrecision: "{{ timestampPrecision }}"
              name: "{{ name }}"
          schemaUpdateOptions:
            - "{{ schemaUpdateOptions }}"
          userDefinedFunctionResources:
            - resourceUri: "{{ resourceUri }}"
              inlineCode: "{{ inlineCode }}"
          continuous: {{ continuous }}
          scriptOptions:
            statementByteBudget: "{{ statementByteBudget }}"
            statementTimeoutMs: "{{ statementTimeoutMs }}"
            keyResultStatement: "{{ keyResultStatement }}"
          timePartitioning:
            expirationMs: "{{ expirationMs }}"
            requirePartitionFilter: {{ requirePartitionFilter }}
            field: "{{ field }}"
            type: "{{ type }}"
          clustering:
            fields:
              - "{{ fields }}"
          allowLargeResults: {{ allowLargeResults }}
          flattenResults: {{ flattenResults }}
          systemVariables:
            types: "{{ types }}"
            values: "{{ values }}"
          connectionProperties:
            - key: "{{ key }}"
              value: "{{ value }}"
          useLegacySql: {{ useLegacySql }}
          writeIncrementalResults: {{ writeIncrementalResults }}
          useQueryCache: {{ useQueryCache }}
          maximumBytesBilled: "{{ maximumBytesBilled }}"
          query: "{{ query }}"
          createSession: {{ createSession }}
          destinationEncryptionConfiguration:
            kmsKeyName: "{{ kmsKeyName }}"
          maximumBillingTier: {{ maximumBillingTier }}
          destinationTable:
            tableId: "{{ tableId }}"
            datasetId: "{{ datasetId }}"
            projectId: "{{ projectId }}"
          priority: "{{ priority }}"
        jobType: "{{ jobType }}"
        load:
          createDisposition: "{{ createDisposition }}"
          allowJaggedRows: {{ allowJaggedRows }}
          timeZone: "{{ timeZone }}"
          timeFormat: "{{ timeFormat }}"
          timestampTargetPrecision:
            - {{ timestampTargetPrecision }}
          ignoreUnknownValues: {{ ignoreUnknownValues }}
          sourceFormat: "{{ sourceFormat }}"
          sourceColumnMatch: "{{ sourceColumnMatch }}"
          rangePartitioning:
            field: "{{ field }}"
            range:
              interval: "{{ interval }}"
              end: "{{ end }}"
              start: "{{ start }}"
          writeDisposition: "{{ writeDisposition }}"
          maxBadRecords: {{ maxBadRecords }}
          autodetect: {{ autodetect }}
          dateFormat: "{{ dateFormat }}"
          timestampFormat: "{{ timestampFormat }}"
          schemaUpdateOptions:
            - "{{ schemaUpdateOptions }}"
          allowQuotedNewlines: {{ allowQuotedNewlines }}
          projectionFields:
            - "{{ projectionFields }}"
          clustering:
            fields:
              - "{{ fields }}"
          fieldDelimiter: "{{ fieldDelimiter }}"
          useAvroLogicalTypes: {{ useAvroLogicalTypes }}
          referenceFileSchemaUri: "{{ referenceFileSchemaUri }}"
          sourceUris:
            - "{{ sourceUris }}"
          timePartitioning:
            expirationMs: "{{ expirationMs }}"
            requirePartitionFilter: {{ requirePartitionFilter }}
            field: "{{ field }}"
            type: "{{ type }}"
          schemaInline: "{{ schemaInline }}"
          encoding: "{{ encoding }}"
          fileSetSpecType: "{{ fileSetSpecType }}"
          destinationTableProperties:
            friendlyName: "{{ friendlyName }}"
            expirationTime: "{{ expirationTime }}"
            description: "{{ description }}"
            labels: "{{ labels }}"
          preserveAsciiControlCharacters: {{ preserveAsciiControlCharacters }}
          columnNameCharacterMap: "{{ columnNameCharacterMap }}"
          nullMarkers:
            - "{{ nullMarkers }}"
          connectionProperties:
            - key: "{{ key }}"
              value: "{{ value }}"
          copyFilesOnly: {{ copyFilesOnly }}
          hivePartitioningOptions:
            mode: "{{ mode }}"
            requirePartitionFilter: {{ requirePartitionFilter }}
            sourceUriPrefix: "{{ sourceUriPrefix }}"
            fields:
              - "{{ fields }}"
          quote: "{{ quote }}"
          decimalTargetTypes:
            - "{{ decimalTargetTypes }}"
          schema:
            fields:
              - categories:
                  names: "{{ names }}"
                scale: "{{ scale }}"
                roundingMode: "{{ roundingMode }}"
                foreignTypeDefinition: "{{ foreignTypeDefinition }}"
                rangeElementType:
                  type: "{{ type }}"
                type: "{{ type }}"
                dataGovernanceTagsInfo:
                  dataGovernanceTags: "{{ dataGovernanceTags }}"
                dataPolicies: "{{ dataPolicies }}"
                timestampPrecision: "{{ timestampPrecision }}"
                collation: "{{ collation }}"
                dataPolicyList:
                  dataPolicies: "{{ dataPolicies }}"
                name: "{{ name }}"
                precision: "{{ precision }}"
                defaultValueExpression: "{{ defaultValueExpression }}"
                generatedColumn:
                  generatedExpressionInfo: "{{ generatedExpressionInfo }}"
                  generatedMode: "{{ generatedMode }}"
                fields: "{{ fields }}"
                maxLength: "{{ maxLength }}"
                mode: "{{ mode }}"
                policyTags:
                  names: "{{ names }}"
                description: "{{ description }}"
            foreignTypeInfo:
              typeSystem: "{{ typeSystem }}"
          schemaInlineFormat: "{{ schemaInlineFormat }}"
          destinationEncryptionConfiguration:
            kmsKeyName: "{{ kmsKeyName }}"
          createSession: {{ createSession }}
          parquetOptions:
            mapTargetType: "{{ mapTargetType }}"
            enableListInference: {{ enableListInference }}
            enumAsString: {{ enumAsString }}
          nullMarker: "{{ nullMarker }}"
          skipLeadingRows: {{ skipLeadingRows }}
          jsonExtension: "{{ jsonExtension }}"
          datetimeFormat: "{{ datetimeFormat }}"
          destinationTable:
            tableId: "{{ tableId }}"
            datasetId: "{{ datasetId }}"
            projectId: "{{ projectId }}"
        jobTimeoutMs: "{{ jobTimeoutMs }}"
        labels: "{{ labels }}"
        reservation: "{{ reservation }}"
        dryRun: {{ dryRun }}
        maxSlots: {{ maxSlots }}
    - name: jobReference
      description: |
        Optional. Reference describing the unique-per-user name of the job.
      value:
        location: "{{ location }}"
        projectId: "{{ projectId }}"
        jobId: "{{ jobId }}"
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

Requests the deletion of the metadata of a job. This call returns when the job's metadata is deleted. # IAM Permissions Requires the `bigquery.jobs.delete` permission on the job resource.

```sql
DELETE FROM google.bigquery.jobs
WHERE projectId = '{{ projectId }}' --required
AND +jobId = '{{ +jobId }}' --required
AND location = '{{ location }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="query"
    values={[
        { label: 'query', value: 'query' },
        { label: 'cancel', value: 'cancel' }
    ]}
>
<TabItem value="query">

Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout. # IAM Permissions Requires the `bigquery.jobs.create` permission on the project resource. Data-level permissions are highly dependent on the SQL statement being executed. While standard queries require data access (such as `bigquery.tables.getData`), complex operations like DDL or DCL may require permissions to manage reservations, IAM policies, or project settings.

```sql
EXEC google.bigquery.jobs.query 
@projectId='{{ projectId }}' --required 
@@json=
'{
"preserveNulls": {{ preserveNulls }}, 
"location": "{{ location }}", 
"labels": "{{ labels }}", 
"defaultDataset": "{{ defaultDataset }}", 
"queryResultsFormat": "{{ queryResultsFormat }}", 
"timeoutMs": {{ timeoutMs }}, 
"parameterMode": "{{ parameterMode }}", 
"requestId": "{{ requestId }}", 
"queryParameters": "{{ queryParameters }}", 
"continuous": {{ continuous }}, 
"maxResults": {{ maxResults }}, 
"connectionProperties": "{{ connectionProperties }}", 
"kind": "{{ kind }}", 
"jobTimeoutMs": "{{ jobTimeoutMs }}", 
"formatOptions": "{{ formatOptions }}", 
"useLegacySql": {{ useLegacySql }}, 
"writeIncrementalResults": {{ writeIncrementalResults }}, 
"arrowSerializationOptions": "{{ arrowSerializationOptions }}", 
"maximumBytesBilled": "{{ maximumBytesBilled }}", 
"query": "{{ query }}", 
"useQueryCache": {{ useQueryCache }}, 
"destinationEncryptionConfiguration": "{{ destinationEncryptionConfiguration }}", 
"reservation": "{{ reservation }}", 
"createSession": {{ createSession }}, 
"dryRun": {{ dryRun }}, 
"maxSlots": {{ maxSlots }}, 
"jobCreationMode": "{{ jobCreationMode }}"
}'
;
```
</TabItem>
<TabItem value="cancel">

Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs. # IAM Permissions Requires the `bigquery.jobs.update` permission on the job resource. If the user matches the creator of the job, the `bigquery.jobs.create` permission on the project is required instead.

```sql
EXEC google.bigquery.jobs.cancel 
@projectId='{{ projectId }}' --required, 
@+jobId='{{ +jobId }}' --required, 
@location='{{ location }}'
;
```
</TabItem>
</Tabs>
