--- 
title: executions
hide_title: false
hide_table_of_contents: false
keywords:
  - executions
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

Creates, updates, deletes, gets or lists an <code>executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.executions" /></td></tr>
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
    <td>Output only. The resource name of the Execution.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Execution was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the Execution</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User provided display name of the Execution. May be up to 128 Unicode characters.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>An eTag used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels with user-defined metadata to organize your Executions. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one Execution (System labels are excluded).</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Properties of the Execution. Top level metadata keys' heading and trailing spaces will be trimmed. The size of this field should not exceed 200KB.</td>
</tr>
<tr>
    <td><CopyableCode code="schemaTitle" /></td>
    <td><code>string</code></td>
    <td>The title of the schema describing the metadata. Schema title and version is expected to be registered in earlier Create Schema calls. And both are used together as unique identifiers to identify schemas within the local metadata store.</td>
</tr>
<tr>
    <td><CopyableCode code="schemaVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the schema in `schema_title` to use. Schema title and version is expected to be registered in earlier Create Schema calls. And both are used together as unique identifiers to identify schemas within the local metadata store.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of this Execution. This is a property of the Execution, and does not imply or capture any ongoing process. This property is managed by clients (such as Vertex AI Pipelines) and the system does not prescribe or check the validity of state transitions. (STATE_UNSPECIFIED, NEW, RUNNING, COMPLETE, FAILED, CACHED, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Execution was last updated.</td>
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
    <td>Output only. The resource name of the Execution.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Execution was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the Execution</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User provided display name of the Execution. May be up to 128 Unicode characters.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>An eTag used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels with user-defined metadata to organize your Executions. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one Execution (System labels are excluded).</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Properties of the Execution. Top level metadata keys' heading and trailing spaces will be trimmed. The size of this field should not exceed 200KB.</td>
</tr>
<tr>
    <td><CopyableCode code="schemaTitle" /></td>
    <td><code>string</code></td>
    <td>The title of the schema describing the metadata. Schema title and version is expected to be registered in earlier Create Schema calls. And both are used together as unique identifiers to identify schemas within the local metadata store.</td>
</tr>
<tr>
    <td><CopyableCode code="schemaVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the schema in `schema_title` to use. Schema title and version is expected to be registered in earlier Create Schema calls. And both are used together as unique identifiers to identify schemas within the local metadata store.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of this Execution. This is a property of the Execution, and does not imply or capture any ongoing process. This property is managed by clients (such as Vertex AI Pipelines) and the system does not prescribe or check the validity of state transitions. (STATE_UNSPECIFIED, NEW, RUNNING, COMPLETE, FAILED, CACHED, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this Execution was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-metadataStoresId"><code>metadataStoresId</code></a>, <a href="#parameter-executionsId"><code>executionsId</code></a></td>
    <td></td>
    <td>Retrieves a specific Execution.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-metadataStoresId"><code>metadataStoresId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists Executions in the MetadataStore.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-metadataStoresId"><code>metadataStoresId</code></a></td>
    <td><a href="#parameter-executionId"><code>executionId</code></a></td>
    <td>Creates an Execution associated with a MetadataStore.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-metadataStoresId"><code>metadataStoresId</code></a>, <a href="#parameter-executionsId"><code>executionsId</code></a></td>
    <td><a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a stored Execution.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-metadataStoresId"><code>metadataStoresId</code></a>, <a href="#parameter-executionsId"><code>executionsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes an Execution.</td>
</tr>
<tr>
    <td><a href="#purge"><CopyableCode code="purge" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-metadataStoresId"><code>metadataStoresId</code></a></td>
    <td></td>
    <td>Purges Executions.</td>
</tr>
<tr>
    <td><a href="#add_execution_events"><CopyableCode code="add_execution_events" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-metadataStoresId"><code>metadataStoresId</code></a>, <a href="#parameter-executionsId"><code>executionsId</code></a></td>
    <td></td>
    <td>Adds Events to the specified Execution. An Event indicates whether an Artifact was used as an input or output for an Execution. If an Event already exists between the Execution and the Artifact, the Event is skipped.</td>
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
<tr id="parameter-executionsId">
    <td><CopyableCode code="executionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-metadataStoresId">
    <td><CopyableCode code="metadataStoresId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-executionId">
    <td><CopyableCode code="executionId" /></td>
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

Retrieves a specific Execution.

```sql
SELECT
name,
createTime,
description,
displayName,
etag,
labels,
metadata,
schemaTitle,
schemaVersion,
state,
updateTime
FROM google.aiplatform.executions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND metadataStoresId = '{{ metadataStoresId }}' -- required
AND executionsId = '{{ executionsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Executions in the MetadataStore.

```sql
SELECT
name,
createTime,
description,
displayName,
etag,
labels,
metadata,
schemaTitle,
schemaVersion,
state,
updateTime
FROM google.aiplatform.executions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND metadataStoresId = '{{ metadataStoresId }}' -- required
AND filter = '{{ filter }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
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

Creates an Execution associated with a MetadataStore.

```sql
INSERT INTO google.aiplatform.executions (
data__description,
data__state,
data__metadata,
data__labels,
data__schemaVersion,
data__schemaTitle,
data__displayName,
data__etag,
projectsId,
locationsId,
metadataStoresId,
executionId
)
SELECT 
'{{ description }}',
'{{ state }}',
'{{ metadata }}',
'{{ labels }}',
'{{ schemaVersion }}',
'{{ schemaTitle }}',
'{{ displayName }}',
'{{ etag }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ metadataStoresId }}',
'{{ executionId }}'
RETURNING
name,
createTime,
description,
displayName,
etag,
labels,
metadata,
schemaTitle,
schemaVersion,
state,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: executions
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the executions resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the executions resource.
    - name: metadataStoresId
      value: "{{ metadataStoresId }}"
      description: Required parameter for the executions resource.
    - name: description
      value: "{{ description }}"
      description: |
        Description of the Execution
    - name: state
      value: "{{ state }}"
      description: |
        The state of this Execution. This is a property of the Execution, and does not imply or capture any ongoing process. This property is managed by clients (such as Vertex AI Pipelines) and the system does not prescribe or check the validity of state transitions.
      valid_values: ['STATE_UNSPECIFIED', 'NEW', 'RUNNING', 'COMPLETE', 'FAILED', 'CACHED', 'CANCELLED']
    - name: metadata
      value: "{{ metadata }}"
      description: |
        Properties of the Execution. Top level metadata keys' heading and trailing spaces will be trimmed. The size of this field should not exceed 200KB.
    - name: labels
      value: "{{ labels }}"
      description: |
        The labels with user-defined metadata to organize your Executions. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one Execution (System labels are excluded).
    - name: schemaVersion
      value: "{{ schemaVersion }}"
      description: |
        The version of the schema in \`schema_title\` to use. Schema title and version is expected to be registered in earlier Create Schema calls. And both are used together as unique identifiers to identify schemas within the local metadata store.
    - name: schemaTitle
      value: "{{ schemaTitle }}"
      description: |
        The title of the schema describing the metadata. Schema title and version is expected to be registered in earlier Create Schema calls. And both are used together as unique identifiers to identify schemas within the local metadata store.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        User provided display name of the Execution. May be up to 128 Unicode characters.
    - name: etag
      value: "{{ etag }}"
      description: |
        An eTag used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.
    - name: executionId
      value: "{{ executionId }}"
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

Updates a stored Execution.

```sql
UPDATE google.aiplatform.executions
SET 
data__description = '{{ description }}',
data__state = '{{ state }}',
data__metadata = '{{ metadata }}',
data__labels = '{{ labels }}',
data__schemaVersion = '{{ schemaVersion }}',
data__schemaTitle = '{{ schemaTitle }}',
data__displayName = '{{ displayName }}',
data__etag = '{{ etag }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND metadataStoresId = '{{ metadataStoresId }}' --required
AND executionsId = '{{ executionsId }}' --required
AND allowMissing = {{ allowMissing}}
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
description,
displayName,
etag,
labels,
metadata,
schemaTitle,
schemaVersion,
state,
updateTime;
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

Deletes an Execution.

```sql
DELETE FROM google.aiplatform.executions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND metadataStoresId = '{{ metadataStoresId }}' --required
AND executionsId = '{{ executionsId }}' --required
AND etag = '{{ etag }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="purge"
    values={[
        { label: 'purge', value: 'purge' },
        { label: 'add_execution_events', value: 'add_execution_events' }
    ]}
>
<TabItem value="purge">

Purges Executions.

```sql
EXEC google.aiplatform.executions.purge 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@metadataStoresId='{{ metadataStoresId }}' --required 
@@json=
'{
"filter": "{{ filter }}", 
"force": {{ force }}
}'
;
```
</TabItem>
<TabItem value="add_execution_events">

Adds Events to the specified Execution. An Event indicates whether an Artifact was used as an input or output for an Execution. If an Event already exists between the Execution and the Artifact, the Event is skipped.

```sql
EXEC google.aiplatform.executions.add_execution_events 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@metadataStoresId='{{ metadataStoresId }}' --required, 
@executionsId='{{ executionsId }}' --required 
@@json=
'{
"events": "{{ events }}"
}'
;
```
</TabItem>
</Tabs>
