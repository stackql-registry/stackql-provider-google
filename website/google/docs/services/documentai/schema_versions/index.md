--- 
title: schema_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - schema_versions
  - documentai
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

Creates, updates, deletes, gets or lists a <code>schema_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="schema_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.documentai.schema_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_schemas_schema_versions_get"
    values={[
        { label: 'projects_locations_schemas_schema_versions_get', value: 'projects_locations_schemas_schema_versions_get' },
        { label: 'projects_locations_schemas_schema_versions_list', value: 'projects_locations_schemas_schema_versions_list' }
    ]}
>
<TabItem value="projects_locations_schemas_schema_versions_get">

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
    <td>Identifier. The resource name of the SchemaVersion. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/schemas/&#123;schema&#125;/schemaVersions/&#123;schema_version&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the SchemaVersion was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The user-defined name of the SchemaVersion.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The &#123;&#123;gcp_name_short&#125;&#125; labels for the SchemaVersion.</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>object</code></td>
    <td>Required. The schema of the SchemaVersion. (id: GoogleCloudDocumentaiV1DocumentSchema)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_schemas_schema_versions_list">

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
    <td>Identifier. The resource name of the SchemaVersion. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/schemas/&#123;schema&#125;/schemaVersions/&#123;schema_version&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the SchemaVersion was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The user-defined name of the SchemaVersion.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The &#123;&#123;gcp_name_short&#125;&#125; labels for the SchemaVersion.</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>object</code></td>
    <td>Required. The schema of the SchemaVersion. (id: GoogleCloudDocumentaiV1DocumentSchema)</td>
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
    <td><a href="#projects_locations_schemas_schema_versions_get"><CopyableCode code="projects_locations_schemas_schema_versions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-schemasId"><code>schemasId</code></a>, <a href="#parameter-schemaVersionsId"><code>schemaVersionsId</code></a></td>
    <td></td>
    <td>Gets a schema version.</td>
</tr>
<tr>
    <td><a href="#projects_locations_schemas_schema_versions_list"><CopyableCode code="projects_locations_schemas_schema_versions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-schemasId"><code>schemasId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists SchemaVersions.</td>
</tr>
<tr>
    <td><a href="#projects_locations_schemas_schema_versions_create"><CopyableCode code="projects_locations_schemas_schema_versions_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-schemasId"><code>schemasId</code></a></td>
    <td></td>
    <td>Creates a schema version.</td>
</tr>
<tr>
    <td><a href="#projects_locations_schemas_schema_versions_patch"><CopyableCode code="projects_locations_schemas_schema_versions_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-schemasId"><code>schemasId</code></a>, <a href="#parameter-schemaVersionsId"><code>schemaVersionsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a schema version. Editable fields are: - `display_name` - `labels`</td>
</tr>
<tr>
    <td><a href="#projects_locations_schemas_schema_versions_delete"><CopyableCode code="projects_locations_schemas_schema_versions_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-schemasId"><code>schemasId</code></a>, <a href="#parameter-schemaVersionsId"><code>schemaVersionsId</code></a></td>
    <td></td>
    <td>Deletes a schema version.</td>
</tr>
<tr>
    <td><a href="#projects_locations_schemas_schema_versions_generate"><CopyableCode code="projects_locations_schemas_schema_versions_generate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-schemasId"><code>schemasId</code></a></td>
    <td></td>
    <td>Generates a schema version.</td>
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
<tr id="parameter-schemaVersionsId">
    <td><CopyableCode code="schemaVersionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-schemasId">
    <td><CopyableCode code="schemasId" /></td>
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
    defaultValue="projects_locations_schemas_schema_versions_get"
    values={[
        { label: 'projects_locations_schemas_schema_versions_get', value: 'projects_locations_schemas_schema_versions_get' },
        { label: 'projects_locations_schemas_schema_versions_list', value: 'projects_locations_schemas_schema_versions_list' }
    ]}
>
<TabItem value="projects_locations_schemas_schema_versions_get">

Gets a schema version.

```sql
SELECT
name,
createTime,
displayName,
labels,
schema
FROM google.documentai.schema_versions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND schemasId = '{{ schemasId }}' -- required
AND schemaVersionsId = '{{ schemaVersionsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_schemas_schema_versions_list">

Lists SchemaVersions.

```sql
SELECT
name,
createTime,
displayName,
labels,
schema
FROM google.documentai.schema_versions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND schemasId = '{{ schemasId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_schemas_schema_versions_create"
    values={[
        { label: 'projects_locations_schemas_schema_versions_create', value: 'projects_locations_schemas_schema_versions_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_schemas_schema_versions_create">

Creates a schema version.

```sql
INSERT INTO google.documentai.schema_versions (
data__displayName,
data__labels,
data__name,
data__schema,
projectsId,
locationsId,
schemasId
)
SELECT 
'{{ displayName }}',
'{{ labels }}',
'{{ name }}',
'{{ schema }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ schemasId }}'
RETURNING
name,
createTime,
displayName,
labels,
schema
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: schema_versions
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the schema_versions resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the schema_versions resource.
    - name: schemasId
      value: "{{ schemasId }}"
      description: Required parameter for the schema_versions resource.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. The user-defined name of the SchemaVersion.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. The {{gcp_name_short}} labels for the SchemaVersion.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The resource name of the SchemaVersion. Format: \`projects/{project}/locations/{location}/schemas/{schema}/schemaVersions/{schema_version}\`
    - name: schema
      description: |
        Required. The schema of the SchemaVersion.
      value:
        description: "{{ description }}"
        displayName: "{{ displayName }}"
        documentPrompt: "{{ documentPrompt }}"
        entityTypes:
          - baseTypes: "{{ baseTypes }}"
            displayName: "{{ displayName }}"
            enumValues:
              values:
                - "{{ values }}"
            name: "{{ name }}"
            properties: "{{ properties }}"
        metadata:
          documentAllowMultipleLabels: {{ documentAllowMultipleLabels }}
          documentSplitter: {{ documentSplitter }}
          prefixedNamingOnProperties: {{ prefixedNamingOnProperties }}
          skipNamingValidation: {{ skipNamingValidation }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_schemas_schema_versions_patch"
    values={[
        { label: 'projects_locations_schemas_schema_versions_patch', value: 'projects_locations_schemas_schema_versions_patch' }
    ]}
>
<TabItem value="projects_locations_schemas_schema_versions_patch">

Updates a schema version. Editable fields are: - `display_name` - `labels`

```sql
UPDATE google.documentai.schema_versions
SET 
data__displayName = '{{ displayName }}',
data__labels = '{{ labels }}',
data__name = '{{ name }}',
data__schema = '{{ schema }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND schemasId = '{{ schemasId }}' --required
AND schemaVersionsId = '{{ schemaVersionsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
displayName,
labels,
schema;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_schemas_schema_versions_delete"
    values={[
        { label: 'projects_locations_schemas_schema_versions_delete', value: 'projects_locations_schemas_schema_versions_delete' }
    ]}
>
<TabItem value="projects_locations_schemas_schema_versions_delete">

Deletes a schema version.

```sql
DELETE FROM google.documentai.schema_versions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND schemasId = '{{ schemasId }}' --required
AND schemaVersionsId = '{{ schemaVersionsId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_schemas_schema_versions_generate"
    values={[
        { label: 'projects_locations_schemas_schema_versions_generate', value: 'projects_locations_schemas_schema_versions_generate' }
    ]}
>
<TabItem value="projects_locations_schemas_schema_versions_generate">

Generates a schema version.

```sql
EXEC google.documentai.schema_versions.projects_locations_schemas_schema_versions_generate 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@schemasId='{{ schemasId }}' --required 
@@json=
'{
"baseSchemaVersion": "{{ baseSchemaVersion }}", 
"gcsDocuments": "{{ gcsDocuments }}", 
"gcsPrefix": "{{ gcsPrefix }}", 
"generateSchemaVersionParams": "{{ generateSchemaVersionParams }}", 
"inlineDocuments": "{{ inlineDocuments }}", 
"rawDocuments": "{{ rawDocuments }}"
}'
;
```
</TabItem>
</Tabs>
