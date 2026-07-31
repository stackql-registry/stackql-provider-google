--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
  - dataconnect
  - firebase
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage firebase resources using SQL
custom_edit_url: null
image: /img/stackql-firebase-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.dataconnect.services" /></td></tr>
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
    <td>Identifier. The relative resource name of the Firebase SQL Connect service, in the format: ``` projects/&#123;project&#125;/locations/&#123;location&#125;/services/&#123;service&#125; ``` Note that the service ID is specific to Firebase SQL Connect and does not correspond to any of the instance IDs of the underlying data source connections.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Stores small amounts of arbitrary data.</td>
</tr>
<tr>
    <td><CopyableCode code="connectors" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of connectors in this service.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Create time stamp.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Mutable human-readable name. 63 character limit.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. [AIP-154](https://google.aip.dev/154)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. A field that if true, indicates that the system is working update the service.</td>
</tr>
<tr>
    <td><CopyableCode code="schemas" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of schemas in this service.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. The source files for service, schemas, and connectors. (id: Source)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System-assigned, unique identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Update time stamp.</td>
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
    <td>Identifier. The relative resource name of the Firebase SQL Connect service, in the format: ``` projects/&#123;project&#125;/locations/&#123;location&#125;/services/&#123;service&#125; ``` Note that the service ID is specific to Firebase SQL Connect and does not correspond to any of the instance IDs of the underlying data source connections.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Stores small amounts of arbitrary data.</td>
</tr>
<tr>
    <td><CopyableCode code="connectors" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of connectors in this service.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Create time stamp.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Mutable human-readable name. 63 character limit.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. [AIP-154](https://google.aip.dev/154)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. A field that if true, indicates that the system is working update the service.</td>
</tr>
<tr>
    <td><CopyableCode code="schemas" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of schemas in this service.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. The source files for service, schemas, and connectors. (id: Source)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System-assigned, unique identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Update time stamp.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Gets details of a single Service.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists Services in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-serviceId"><code>serviceId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a new Service in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the parameters of a single Service.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a>, <a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Deletes a single Service.</td>
</tr>
<tr>
    <td><a href="#execute_graphql"><CopyableCode code="execute_graphql" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Execute any GraphQL query or mutation against the Firebase SQL Connect's generated GraphQL schema. Grants full read and write access to the connected data sources. Note: Use introspection query to explore the generated GraphQL schema.</td>
</tr>
<tr>
    <td><a href="#introspect_graphql"><CopyableCode code="introspect_graphql" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Execute introspection query against the Firebase SQL Connect's generated GraphQL schema. GraphQL introspection query provides metadata such as what tables the schema have, what queries and mutations can be performed on the schema, and so on. Read more at https://graphql.org/learn/introspection. IntrospectGraphql can read schema metadata but cannot read rows from Cloud SQL instance, which can be done via ExecuteGraphqlRead.</td>
</tr>
<tr>
    <td><a href="#generate_query"><CopyableCode code="generate_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Generates a GraphQL query based on a natural language prompt and the provided schema context. This is a stateless method; the schema is provided per request to support local development states. Streams results with real-time status and output chunks.</td>
</tr>
<tr>
    <td><a href="#execute_graphql_read"><CopyableCode code="execute_graphql_read" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Execute any GraphQL query against the Firebase SQL Connect's generated GraphQL schema. Grants full read to the connected data sources. `ExecuteGraphqlRead` is identical to `ExecuteGraphql` except it only accepts read-only query.</td>
</tr>
<tr>
    <td><a href="#generate_schema"><CopyableCode code="generate_schema" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Generates GraphQL schema based on a natural language prompt or data description. This allows users to scaffold new types and tables quickly. Streams results with real-time status and output chunks.</td>
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
<tr id="parameter-servicesId">
    <td><CopyableCode code="servicesId" /></td>
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
<tr id="parameter-serviceId">
    <td><CopyableCode code="serviceId" /></td>
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

Gets details of a single Service.

```sql
SELECT
name,
annotations,
connectors,
createTime,
displayName,
etag,
labels,
reconciling,
schemas,
source,
uid,
updateTime
FROM firebase.dataconnect.services
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND servicesId = '{{ servicesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Services in a given project and location.

```sql
SELECT
name,
annotations,
connectors,
createTime,
displayName,
etag,
labels,
reconciling,
schemas,
source,
uid,
updateTime
FROM firebase.dataconnect.services
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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

Creates a new Service in a given project and location.

```sql
INSERT INTO firebase.dataconnect.services (
data__annotations,
data__displayName,
data__source,
data__name,
data__labels,
projectsId,
locationsId,
requestId,
serviceId,
validateOnly
)
SELECT 
'{{ annotations }}',
'{{ displayName }}',
'{{ source }}',
'{{ name }}',
'{{ labels }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ requestId }}',
'{{ serviceId }}',
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
- name: services
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the services resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the services resource.
    - name: annotations
      value: "{{ annotations }}"
      description: |
        Optional. Stores small amounts of arbitrary data.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Optional. Mutable human-readable name. 63 character limit.
    - name: source
      description: |
        Optional. Input only. The source files for service, schemas, and connectors.
      value:
        files:
          - path: "{{ path }}"
            content: "{{ content }}"
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The relative resource name of the Firebase SQL Connect service, in the format: \`\`\` projects/{project}/locations/{location}/services/{service} \`\`\` Note that the service ID is specific to Firebase SQL Connect and does not correspond to any of the instance IDs of the underlying data source connections.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Labels as key value pairs.
    - name: requestId
      value: "{{ requestId }}"
    - name: serviceId
      value: "{{ serviceId }}"
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

Updates the parameters of a single Service.

```sql
UPDATE firebase.dataconnect.services
SET 
data__annotations = '{{ annotations }}',
data__displayName = '{{ displayName }}',
data__source = '{{ source }}',
data__name = '{{ name }}',
data__labels = '{{ labels }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND servicesId = '{{ servicesId }}' --required
AND updateMask = '{{ updateMask}}'
AND allowMissing = {{ allowMissing}}
AND validateOnly = {{ validateOnly}}
AND requestId = '{{ requestId}}'
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

Deletes a single Service.

```sql
DELETE FROM firebase.dataconnect.services
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND servicesId = '{{ servicesId }}' --required
AND force = '{{ force }}'
AND etag = '{{ etag }}'
AND validateOnly = '{{ validateOnly }}'
AND requestId = '{{ requestId }}'
AND allowMissing = '{{ allowMissing }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="execute_graphql"
    values={[
        { label: 'execute_graphql', value: 'execute_graphql' },
        { label: 'introspect_graphql', value: 'introspect_graphql' },
        { label: 'generate_query', value: 'generate_query' },
        { label: 'execute_graphql_read', value: 'execute_graphql_read' },
        { label: 'generate_schema', value: 'generate_schema' }
    ]}
>
<TabItem value="execute_graphql">

Execute any GraphQL query or mutation against the Firebase SQL Connect's generated GraphQL schema. Grants full read and write access to the connected data sources. Note: Use introspection query to explore the generated GraphQL schema.

```sql
EXEC firebase.dataconnect.services.execute_graphql 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@servicesId='{{ servicesId }}' --required 
@@json=
'{
"query": "{{ query }}", 
"operationName": "{{ operationName }}", 
"variables": "{{ variables }}", 
"extensions": "{{ extensions }}"
}'
;
```
</TabItem>
<TabItem value="introspect_graphql">

Execute introspection query against the Firebase SQL Connect's generated GraphQL schema. GraphQL introspection query provides metadata such as what tables the schema have, what queries and mutations can be performed on the schema, and so on. Read more at https://graphql.org/learn/introspection. IntrospectGraphql can read schema metadata but cannot read rows from Cloud SQL instance, which can be done via ExecuteGraphqlRead.

```sql
EXEC firebase.dataconnect.services.introspect_graphql 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@servicesId='{{ servicesId }}' --required 
@@json=
'{
"query": "{{ query }}", 
"operationName": "{{ operationName }}", 
"variables": "{{ variables }}", 
"extensions": "{{ extensions }}"
}'
;
```
</TabItem>
<TabItem value="generate_query">

Generates a GraphQL query based on a natural language prompt and the provided schema context. This is a stateless method; the schema is provided per request to support local development states. Streams results with real-time status and output chunks.

```sql
EXEC firebase.dataconnect.services.generate_query 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@servicesId='{{ servicesId }}' --required 
@@json=
'{
"prompt": "{{ prompt }}", 
"schemas": "{{ schemas }}"
}'
;
```
</TabItem>
<TabItem value="execute_graphql_read">

Execute any GraphQL query against the Firebase SQL Connect's generated GraphQL schema. Grants full read to the connected data sources. `ExecuteGraphqlRead` is identical to `ExecuteGraphql` except it only accepts read-only query.

```sql
EXEC firebase.dataconnect.services.execute_graphql_read 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@servicesId='{{ servicesId }}' --required 
@@json=
'{
"query": "{{ query }}", 
"operationName": "{{ operationName }}", 
"variables": "{{ variables }}", 
"extensions": "{{ extensions }}"
}'
;
```
</TabItem>
<TabItem value="generate_schema">

Generates GraphQL schema based on a natural language prompt or data description. This allows users to scaffold new types and tables quickly. Streams results with real-time status and output chunks.

```sql
EXEC firebase.dataconnect.services.generate_schema 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@servicesId='{{ servicesId }}' --required 
@@json=
'{
"prompt": "{{ prompt }}"
}'
;
```
</TabItem>
</Tabs>
