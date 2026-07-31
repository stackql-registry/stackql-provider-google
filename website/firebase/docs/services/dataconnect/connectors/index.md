--- 
title: connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - connectors
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

Creates, updates, deletes, gets or lists a <code>connectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.dataconnect.connectors" /></td></tr>
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
    <td>Identifier. The relative resource name of the connector, in the format: ``` projects/&#123;project&#125;/locations/&#123;location&#125;/services/&#123;service&#125;/connectors/&#123;connector&#125; ```</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Stores small amounts of arbitrary data.</td>
</tr>
<tr>
    <td><CopyableCode code="clientCache" /></td>
    <td><code>object</code></td>
    <td>Optional. The client cache settings of the connector. (id: ClientCache)</td>
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
    <td>Output only. A field that if true, indicates that the system is working to compile and deploy the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>Required. The source files that comprise the connector. (id: Source)</td>
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
    <td>Identifier. The relative resource name of the connector, in the format: ``` projects/&#123;project&#125;/locations/&#123;location&#125;/services/&#123;service&#125;/connectors/&#123;connector&#125; ```</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Stores small amounts of arbitrary data.</td>
</tr>
<tr>
    <td><CopyableCode code="clientCache" /></td>
    <td><code>object</code></td>
    <td>Optional. The client cache settings of the connector. (id: ClientCache)</td>
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
    <td>Output only. A field that if true, indicates that the system is working to compile and deploy the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>Required. The source files that comprise the connector. (id: Source)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-connectorsId"><code>connectorsId</code></a></td>
    <td></td>
    <td>Gets details of a single Connector.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists Connectors in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td><a href="#parameter-connectorId"><code>connectorId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new Connector in a given project and location. The operations are validated against and must be compatible with the active schema. If the operations and schema are not compatible or if the schema is not present, this will result in an error.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-connectorsId"><code>connectorsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Updates the parameters of a single Connector, and creates a new ConnectorRevision with the updated Connector. The operations are validated against and must be compatible with the live schema. If the operations and schema are not compatible or if the schema is not present, this will result in an error.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-connectorsId"><code>connectorsId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a>, <a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Deletes a single Connector.</td>
</tr>
<tr>
    <td><a href="#execute_query"><CopyableCode code="execute_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-connectorsId"><code>connectorsId</code></a></td>
    <td></td>
    <td>Execute a predefined query in a Connector.</td>
</tr>
<tr>
    <td><a href="#impersonate_query"><CopyableCode code="impersonate_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-connectorsId"><code>connectorsId</code></a></td>
    <td></td>
    <td>Impersonate a query defined on a Firebase SQL Connect connector. It grants the admin SDK access to queries defined in the given connector. The caller can choose to impersonate a particular Firebase Auth user, or skip @auth completely.</td>
</tr>
<tr>
    <td><a href="#execute_mutation"><CopyableCode code="execute_mutation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-connectorsId"><code>connectorsId</code></a></td>
    <td></td>
    <td>Execute a predefined mutation in a Connector.</td>
</tr>
<tr>
    <td><a href="#impersonate_mutation"><CopyableCode code="impersonate_mutation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-connectorsId"><code>connectorsId</code></a></td>
    <td></td>
    <td>Impersonate a mutation defined on a Firebase SQL Connect connector. It grants the admin SDK access to mutations defined in the given connector. The caller can choose to impersonate a particular Firebase Auth user, or skip @auth completely.</td>
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
<tr id="parameter-connectorsId">
    <td><CopyableCode code="connectorsId" /></td>
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
<tr id="parameter-connectorId">
    <td><CopyableCode code="connectorId" /></td>
    <td><code>string</code></td>
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

Gets details of a single Connector.

```sql
SELECT
name,
annotations,
clientCache,
createTime,
displayName,
etag,
labels,
reconciling,
source,
uid,
updateTime
FROM firebase.dataconnect.connectors
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND servicesId = '{{ servicesId }}' -- required
AND connectorsId = '{{ connectorsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Connectors in a given project and location.

```sql
SELECT
name,
annotations,
clientCache,
createTime,
displayName,
etag,
labels,
reconciling,
source,
uid,
updateTime
FROM firebase.dataconnect.connectors
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND servicesId = '{{ servicesId }}' -- required
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

Creates a new Connector in a given project and location. The operations are validated against and must be compatible with the active schema. If the operations and schema are not compatible or if the schema is not present, this will result in an error.

```sql
INSERT INTO firebase.dataconnect.connectors (
data__clientCache,
data__source,
data__annotations,
data__displayName,
data__name,
data__labels,
projectsId,
locationsId,
servicesId,
connectorId,
validateOnly,
requestId
)
SELECT 
'{{ clientCache }}',
'{{ source }}',
'{{ annotations }}',
'{{ displayName }}',
'{{ name }}',
'{{ labels }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ servicesId }}',
'{{ connectorId }}',
'{{ validateOnly }}',
'{{ requestId }}'
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
- name: connectors
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the connectors resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the connectors resource.
    - name: servicesId
      value: "{{ servicesId }}"
      description: Required parameter for the connectors resource.
    - name: clientCache
      description: |
        Optional. The client cache settings of the connector.
      value:
        strictValidationEnabled: {{ strictValidationEnabled }}
        entityIdIncluded: {{ entityIdIncluded }}
    - name: source
      description: |
        Required. The source files that comprise the connector.
      value:
        files:
          - path: "{{ path }}"
            content: "{{ content }}"
    - name: annotations
      value: "{{ annotations }}"
      description: |
        Optional. Stores small amounts of arbitrary data.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Optional. Mutable human-readable name. 63 character limit.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The relative resource name of the connector, in the format: \`\`\` projects/{project}/locations/{location}/services/{service}/connectors/{connector} \`\`\`
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Labels as key value pairs.
    - name: connectorId
      value: "{{ connectorId }}"
    - name: validateOnly
      value: {{ validateOnly }}
    - name: requestId
      value: "{{ requestId }}"
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

Updates the parameters of a single Connector, and creates a new ConnectorRevision with the updated Connector. The operations are validated against and must be compatible with the live schema. If the operations and schema are not compatible or if the schema is not present, this will result in an error.

```sql
UPDATE firebase.dataconnect.connectors
SET 
data__clientCache = '{{ clientCache }}',
data__source = '{{ source }}',
data__annotations = '{{ annotations }}',
data__displayName = '{{ displayName }}',
data__name = '{{ name }}',
data__labels = '{{ labels }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND servicesId = '{{ servicesId }}' --required
AND connectorsId = '{{ connectorsId }}' --required
AND requestId = '{{ requestId}}'
AND validateOnly = {{ validateOnly}}
AND updateMask = '{{ updateMask}}'
AND allowMissing = {{ allowMissing}}
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

Deletes a single Connector.

```sql
DELETE FROM firebase.dataconnect.connectors
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND servicesId = '{{ servicesId }}' --required
AND connectorsId = '{{ connectorsId }}' --required
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
    defaultValue="execute_query"
    values={[
        { label: 'execute_query', value: 'execute_query' },
        { label: 'impersonate_query', value: 'impersonate_query' },
        { label: 'execute_mutation', value: 'execute_mutation' },
        { label: 'impersonate_mutation', value: 'impersonate_mutation' }
    ]}
>
<TabItem value="execute_query">

Execute a predefined query in a Connector.

```sql
EXEC firebase.dataconnect.connectors.execute_query 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@servicesId='{{ servicesId }}' --required, 
@connectorsId='{{ connectorsId }}' --required 
@@json=
'{
"variables": "{{ variables }}", 
"operationName": "{{ operationName }}"
}'
;
```
</TabItem>
<TabItem value="impersonate_query">

Impersonate a query defined on a Firebase SQL Connect connector. It grants the admin SDK access to queries defined in the given connector. The caller can choose to impersonate a particular Firebase Auth user, or skip @auth completely.

```sql
EXEC firebase.dataconnect.connectors.impersonate_query 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@servicesId='{{ servicesId }}' --required, 
@connectorsId='{{ connectorsId }}' --required 
@@json=
'{
"variables": "{{ variables }}", 
"extensions": "{{ extensions }}", 
"operationName": "{{ operationName }}"
}'
;
```
</TabItem>
<TabItem value="execute_mutation">

Execute a predefined mutation in a Connector.

```sql
EXEC firebase.dataconnect.connectors.execute_mutation 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@servicesId='{{ servicesId }}' --required, 
@connectorsId='{{ connectorsId }}' --required 
@@json=
'{
"variables": "{{ variables }}", 
"operationName": "{{ operationName }}"
}'
;
```
</TabItem>
<TabItem value="impersonate_mutation">

Impersonate a mutation defined on a Firebase SQL Connect connector. It grants the admin SDK access to mutations defined in the given connector. The caller can choose to impersonate a particular Firebase Auth user, or skip @auth completely.

```sql
EXEC firebase.dataconnect.connectors.impersonate_mutation 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@servicesId='{{ servicesId }}' --required, 
@connectorsId='{{ connectorsId }}' --required 
@@json=
'{
"variables": "{{ variables }}", 
"extensions": "{{ extensions }}", 
"operationName": "{{ operationName }}"
}'
;
```
</TabItem>
</Tabs>
