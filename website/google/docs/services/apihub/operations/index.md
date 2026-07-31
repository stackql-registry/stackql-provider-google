--- 
title: operations
hide_title: false
hide_table_of_contents: false
keywords:
  - operations
  - apihub
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

Creates, updates, deletes, gets or lists an <code>operations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="operations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apihub.operations" /></td></tr>
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
    <td>The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/&#123;unique_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="done" /></td>
    <td><code>boolean</code></td>
    <td>If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>The error result of the operation in case of failure or cancellation. (id: GoogleRpcStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="response" /></td>
    <td><code>object</code></td>
    <td>The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.</td>
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
    <td>The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/&#123;unique_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="done" /></td>
    <td><code>boolean</code></td>
    <td>If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>The error result of the operation in case of failure or cancellation. (id: GoogleRpcStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="response" /></td>
    <td><code>object</code></td>
    <td>The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-operationsId"><code>operationsId</code></a></td>
    <td></td>
    <td>Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td><a href="#parameter-apiOperationId"><code>apiOperationId</code></a></td>
    <td>Create an apiOperation in an API version. An apiOperation can be created only if the version has no apiOperations which were created by parsing a spec.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a>, <a href="#parameter-operationsId"><code>operationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update an operation in an API version. The following fields in the ApiOperation resource can be updated: * details.description * details.documentation * details.http_operation.path * details.http_operation.method * details.deprecated * attributes * details.mcp_tool.title * details.mcp_tool.description * details.mcp_tool.input_schema * details.mcp_tool.output_schema * details.input_schema * details.output_schema * details.mcp_tool.annotations.title * details.mcp_tool.annotations.read_only_hint * details.mcp_tool.annotations.destructive_hint * details.mcp_tool.annotations.idempotent_hint * details.mcp_tool.annotations.open_world_hint * details.mcp_tool.annotations.additional_hints The update_mask should be used to specify the fields being updated. An operation can be updated only if the operation was created via CreateApiOperation API. If the operation was created by parsing the spec, then it can be edited by updating the spec.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-operationsId"><code>operationsId</code></a></td>
    <td></td>
    <td>Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-operationsId"><code>operationsId</code></a></td>
    <td></td>
    <td>Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.</td>
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
<tr id="parameter-apisId">
    <td><CopyableCode code="apisId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-operationsId">
    <td><CopyableCode code="operationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-versionsId">
    <td><CopyableCode code="versionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-apiOperationId">
    <td><CopyableCode code="apiOperationId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
<tr id="parameter-returnPartialSuccess">
    <td><CopyableCode code="returnPartialSuccess" /></td>
    <td><code>boolean</code></td>
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

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

```sql
SELECT
name,
done,
error,
metadata,
response
FROM google.apihub.operations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND operationsId = '{{ operationsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

```sql
SELECT
name,
done,
error,
metadata,
response
FROM google.apihub.operations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND filter = '{{ filter }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
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

Create an apiOperation in an API version. An apiOperation can be created only if the version has no apiOperations which were created by parsing a spec.

```sql
INSERT INTO google.apihub.operations (
data__attributes,
data__details,
data__name,
projectsId,
locationsId,
apisId,
versionsId,
apiOperationId
)
SELECT 
'{{ attributes }}',
'{{ details }}',
'{{ name }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ apisId }}',
'{{ versionsId }}',
'{{ apiOperationId }}'
RETURNING
name,
attributes,
createTime,
details,
sourceMetadata,
spec,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: operations
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the operations resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the operations resource.
    - name: apisId
      value: "{{ apisId }}"
      description: Required parameter for the operations resource.
    - name: versionsId
      value: "{{ versionsId }}"
      description: Required parameter for the operations resource.
    - name: attributes
      value: "{{ attributes }}"
      description: |
        Optional. The list of user defined attributes associated with the API operation resource. The key is the attribute name. It will be of the format: \`projects/{project}/locations/{location}/attributes/{attribute}\`. The value is the attribute values associated with the resource.
    - name: details
      description: |
        Optional. Operation details. Note: Even though this field is optional, it is required for CreateApiOperation API and we will fail the request if not provided.
      value:
        deprecated: {{ deprecated }}
        mcpTool:
          title: "{{ title }}"
          inputSchema:
            jsonSchema: "{{ jsonSchema }}"
          outputSchema:
            jsonSchema: "{{ jsonSchema }}"
          description: "{{ description }}"
          name: "{{ name }}"
          annotations:
            title: "{{ title }}"
            readOnlyHint: {{ readOnlyHint }}
            idempotentHint: {{ idempotentHint }}
            additionalHints: "{{ additionalHints }}"
            destructiveHint: {{ destructiveHint }}
            openWorldHint: {{ openWorldHint }}
        description: "{{ description }}"
        httpOperation:
          path:
            path: "{{ path }}"
            description: "{{ description }}"
          method: "{{ method }}"
        documentation:
          externalUri: "{{ externalUri }}"
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The name of the operation. Format: \`projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}\`
    - name: apiOperationId
      value: "{{ apiOperationId }}"
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

Update an operation in an API version. The following fields in the ApiOperation resource can be updated: * details.description * details.documentation * details.http_operation.path * details.http_operation.method * details.deprecated * attributes * details.mcp_tool.title * details.mcp_tool.description * details.mcp_tool.input_schema * details.mcp_tool.output_schema * details.input_schema * details.output_schema * details.mcp_tool.annotations.title * details.mcp_tool.annotations.read_only_hint * details.mcp_tool.annotations.destructive_hint * details.mcp_tool.annotations.idempotent_hint * details.mcp_tool.annotations.open_world_hint * details.mcp_tool.annotations.additional_hints The update_mask should be used to specify the fields being updated. An operation can be updated only if the operation was created via CreateApiOperation API. If the operation was created by parsing the spec, then it can be edited by updating the spec.

```sql
UPDATE google.apihub.operations
SET 
data__attributes = '{{ attributes }}',
data__details = '{{ details }}',
data__name = '{{ name }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND apisId = '{{ apisId }}' --required
AND versionsId = '{{ versionsId }}' --required
AND operationsId = '{{ operationsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
attributes,
createTime,
details,
sourceMetadata,
spec,
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

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

```sql
DELETE FROM google.apihub.operations
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND operationsId = '{{ operationsId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel"
    values={[
        { label: 'cancel', value: 'cancel' }
    ]}
>
<TabItem value="cancel">

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

```sql
EXEC google.apihub.operations.cancel 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@operationsId='{{ operationsId }}' --required
;
```
</TabItem>
</Tabs>
