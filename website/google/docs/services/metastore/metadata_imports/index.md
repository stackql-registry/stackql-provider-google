--- 
title: metadata_imports
hide_title: false
hide_table_of_contents: false
keywords:
  - metadata_imports
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

Creates, updates, deletes, gets or lists a <code>metadata_imports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="metadata_imports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.metastore.metadata_imports" /></td></tr>
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
    <td>Immutable. Identifier. The relative resource name of the metadata import, of the form:projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/services/&#123;service_id&#125;/metadataImports/&#123;metadata_import_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the metadata import was started.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseDump" /></td>
    <td><code>object</code></td>
    <td>Immutable. A database dump from a pre-existing metastore's database. (id: DatabaseDump)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the metadata import.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the metadata import finished.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the metadata import. (STATE_UNSPECIFIED, RUNNING, SUCCEEDED, UPDATING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the metadata import was last updated.</td>
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
    <td>Immutable. Identifier. The relative resource name of the metadata import, of the form:projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/services/&#123;service_id&#125;/metadataImports/&#123;metadata_import_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the metadata import was started.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseDump" /></td>
    <td><code>object</code></td>
    <td>Immutable. A database dump from a pre-existing metastore's database. (id: DatabaseDump)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the metadata import.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the metadata import finished.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the metadata import. (STATE_UNSPECIFIED, RUNNING, SUCCEEDED, UPDATING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the metadata import was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-metadataImportsId"><code>metadataImportsId</code></a></td>
    <td></td>
    <td>Gets details of a single import.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td><a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists imports in a service.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-metadataImportId"><code>metadataImportId</code></a></td>
    <td>Creates a new MetadataImport in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-metadataImportsId"><code>metadataImportsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a single import. Only the description field of MetadataImport is supported to be updated.</td>
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
<tr id="parameter-metadataImportsId">
    <td><CopyableCode code="metadataImportsId" /></td>
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
<tr id="parameter-metadataImportId">
    <td><CopyableCode code="metadataImportId" /></td>
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

Gets details of a single import.

```sql
SELECT
name,
createTime,
databaseDump,
description,
endTime,
state,
updateTime
FROM google.metastore.metadata_imports
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND servicesId = '{{ servicesId }}' -- required
AND metadataImportsId = '{{ metadataImportsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists imports in a service.

```sql
SELECT
name,
createTime,
databaseDump,
description,
endTime,
state,
updateTime
FROM google.metastore.metadata_imports
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND servicesId = '{{ servicesId }}' -- required
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND filter = '{{ filter }}'
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

Creates a new MetadataImport in a given project and location.

```sql
INSERT INTO google.metastore.metadata_imports (
data__description,
data__databaseDump,
data__name,
projectsId,
locationsId,
servicesId,
requestId,
metadataImportId
)
SELECT 
'{{ description }}',
'{{ databaseDump }}',
'{{ name }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ servicesId }}',
'{{ requestId }}',
'{{ metadataImportId }}'
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
- name: metadata_imports
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the metadata_imports resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the metadata_imports resource.
    - name: servicesId
      value: "{{ servicesId }}"
      description: Required parameter for the metadata_imports resource.
    - name: description
      value: "{{ description }}"
      description: |
        Optional. The description of the metadata import.
    - name: databaseDump
      description: |
        Immutable. A database dump from a pre-existing metastore's database.
      value:
        databaseType: "{{ databaseType }}"
        type: "{{ type }}"
        sourceDatabase: "{{ sourceDatabase }}"
        gcsUri: "{{ gcsUri }}"
    - name: name
      value: "{{ name }}"
      description: |
        Immutable. Identifier. The relative resource name of the metadata import, of the form:projects/{project_number}/locations/{location_id}/services/{service_id}/metadataImports/{metadata_import_id}.
    - name: requestId
      value: "{{ requestId }}"
    - name: metadataImportId
      value: "{{ metadataImportId }}"
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

Updates a single import. Only the description field of MetadataImport is supported to be updated.

```sql
UPDATE google.metastore.metadata_imports
SET 
data__description = '{{ description }}',
data__databaseDump = '{{ databaseDump }}',
data__name = '{{ name }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND servicesId = '{{ servicesId }}' --required
AND metadataImportsId = '{{ metadataImportsId }}' --required
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
