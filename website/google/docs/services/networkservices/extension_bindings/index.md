--- 
title: extension_bindings
hide_title: false
hide_table_of_contents: false
keywords:
  - extension_bindings
  - networkservices
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

Creates, updates, deletes, gets or lists an <code>extension_bindings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="extension_bindings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkservices.extension_bindings" /></td></tr>
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
    <td>Identifier. Name of the `ExtensionBinding` resource in the following format: `projects/&#123;project&#125;/locations/&#123;location&#125;/extensionBindings/&#123;extension_binding&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A human-readable description of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Etag of the resource. If provided, it must match the server's etag. If the provided etag does not match the server's etag, the request will fail with a 409 ABORTED error.</td>
</tr>
<tr>
    <td><CopyableCode code="failOpen" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Determines the behavior of the extension binding when the call to the extension fails or times out. Default value is `FALSE`. When set to `TRUE`, failures of the extension are silently ignored.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Set of labels associated with the `ExtensionBinding` resource. The format must comply with [the following requirements](https://cloud.google.com/compute/docs/labeling-resources#requirements).</td>
</tr>
<tr>
    <td><CopyableCode code="matchConditions" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of match conditions to match against the incoming request. The extension will be invoked if at least one condition matches the request, or if no match conditions are specified. Limited to 5 conditions.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. Priority of the extension binding. Lower numbers indicate higher priority. Priority of extension bindings are used to determine the order in which extension bindings are applied to a request.</td>
</tr>
<tr>
    <td><CopyableCode code="producerExtension" /></td>
    <td><code>string</code></td>
    <td>Required. The name of the extension that this binding should attach to target resources. Format: For Google-provided extensions, specify the service endpoint (see [Model Armor integration](https://docs.cloud.google.com/model-armor/integrations))</td>
</tr>
<tr>
    <td><CopyableCode code="producerMetadata" /></td>
    <td><code>object</code></td>
    <td>Optional. Additional metadata that should be passed to the attached extension with each request.</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>object</code></td>
    <td>Required. Specifies a target to which this `ExtensionBinding` should be attached. The target can be either a single resource or a scope of resources. (id: ExtensionBindingTarget)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was updated.</td>
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
    <td>Identifier. Name of the `ExtensionBinding` resource in the following format: `projects/&#123;project&#125;/locations/&#123;location&#125;/extensionBindings/&#123;extension_binding&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A human-readable description of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Etag of the resource. If provided, it must match the server's etag. If the provided etag does not match the server's etag, the request will fail with a 409 ABORTED error.</td>
</tr>
<tr>
    <td><CopyableCode code="failOpen" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Determines the behavior of the extension binding when the call to the extension fails or times out. Default value is `FALSE`. When set to `TRUE`, failures of the extension are silently ignored.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Set of labels associated with the `ExtensionBinding` resource. The format must comply with [the following requirements](https://cloud.google.com/compute/docs/labeling-resources#requirements).</td>
</tr>
<tr>
    <td><CopyableCode code="matchConditions" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of match conditions to match against the incoming request. The extension will be invoked if at least one condition matches the request, or if no match conditions are specified. Limited to 5 conditions.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. Priority of the extension binding. Lower numbers indicate higher priority. Priority of extension bindings are used to determine the order in which extension bindings are applied to a request.</td>
</tr>
<tr>
    <td><CopyableCode code="producerExtension" /></td>
    <td><code>string</code></td>
    <td>Required. The name of the extension that this binding should attach to target resources. Format: For Google-provided extensions, specify the service endpoint (see [Model Armor integration](https://docs.cloud.google.com/model-armor/integrations))</td>
</tr>
<tr>
    <td><CopyableCode code="producerMetadata" /></td>
    <td><code>object</code></td>
    <td>Optional. Additional metadata that should be passed to the attached extension with each request.</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>object</code></td>
    <td>Required. Specifies a target to which this `ExtensionBinding` should be attached. The target can be either a single resource or a scope of resources. (id: ExtensionBindingTarget)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-extensionBindingsId"><code>extensionBindingsId</code></a></td>
    <td></td>
    <td>Gets details of the specified `ExtensionBinding` resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists `ExtensionBinding` resources in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-extensionBindingId"><code>extensionBindingId</code></a></td>
    <td>Creates a new `ExtensionBinding` resource in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-extensionBindingsId"><code>extensionBindingsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of the specified `ExtensionBinding` resource.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-extensionBindingsId"><code>extensionBindingsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes the specified `ExtensionBinding` resource.</td>
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
<tr id="parameter-extensionBindingsId">
    <td><CopyableCode code="extensionBindingsId" /></td>
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
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-extensionBindingId">
    <td><CopyableCode code="extensionBindingId" /></td>
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

Gets details of the specified `ExtensionBinding` resource.

```sql
SELECT
name,
createTime,
description,
etag,
failOpen,
labels,
matchConditions,
priority,
producerExtension,
producerMetadata,
target,
updateTime
FROM google.networkservices.extension_bindings
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND extensionBindingsId = '{{ extensionBindingsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists `ExtensionBinding` resources in a given project and location.

```sql
SELECT
name,
createTime,
description,
etag,
failOpen,
labels,
matchConditions,
priority,
producerExtension,
producerMetadata,
target,
updateTime
FROM google.networkservices.extension_bindings
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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

Creates a new `ExtensionBinding` resource in a given project and location.

```sql
INSERT INTO google.networkservices.extension_bindings (
data__description,
data__etag,
data__failOpen,
data__labels,
data__matchConditions,
data__name,
data__priority,
data__producerExtension,
data__producerMetadata,
data__target,
projectsId,
locationsId,
extensionBindingId
)
SELECT 
'{{ description }}',
'{{ etag }}',
{{ failOpen }},
'{{ labels }}',
'{{ matchConditions }}',
'{{ name }}',
{{ priority }},
'{{ producerExtension }}',
'{{ producerMetadata }}',
'{{ target }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ extensionBindingId }}'
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
- name: extension_bindings
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the extension_bindings resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the extension_bindings resource.
    - name: description
      value: "{{ description }}"
      description: |
        Optional. A human-readable description of the resource.
    - name: etag
      value: "{{ etag }}"
      description: |
        Optional. Etag of the resource. If provided, it must match the server's etag. If the provided etag does not match the server's etag, the request will fail with a 409 ABORTED error.
    - name: failOpen
      value: {{ failOpen }}
      description: |
        Optional. Determines the behavior of the extension binding when the call to the extension fails or times out. Default value is \`FALSE\`. When set to \`TRUE\`, failures of the extension are silently ignored.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Set of labels associated with the \`ExtensionBinding\` resource. The format must comply with [the following requirements](https://cloud.google.com/compute/docs/labeling-resources#requirements).
    - name: matchConditions
      description: |
        Optional. A list of match conditions to match against the incoming request. The extension will be invoked if at least one condition matches the request, or if no match conditions are specified. Limited to 5 conditions.
      value:
        - to:
            destination:
              headerSet:
                headers:
                  - name: "{{ name }}"
                    value:
                      contains: "{{ contains }}"
                      exact: "{{ exact }}"
                      ignoreCase: {{ ignoreCase }}
                      prefix: "{{ prefix }}"
                      suffix: "{{ suffix }}"
              hosts:
                - contains: "{{ contains }}"
                  exact: "{{ exact }}"
                  ignoreCase: {{ ignoreCase }}
                  prefix: "{{ prefix }}"
                  suffix: "{{ suffix }}"
              paths:
                - contains: "{{ contains }}"
                  exact: "{{ exact }}"
                  ignoreCase: {{ ignoreCase }}
                  prefix: "{{ prefix }}"
                  suffix: "{{ suffix }}"
              resources:
                - contains: "{{ contains }}"
                  exact: "{{ exact }}"
                  ignoreCase: {{ ignoreCase }}
                  prefix: "{{ prefix }}"
                  suffix: "{{ suffix }}"
            notDestination:
              headerSet:
                headers:
                  - name: "{{ name }}"
                    value:
                      contains: "{{ contains }}"
                      exact: "{{ exact }}"
                      ignoreCase: {{ ignoreCase }}
                      prefix: "{{ prefix }}"
                      suffix: "{{ suffix }}"
              hosts:
                - contains: "{{ contains }}"
                  exact: "{{ exact }}"
                  ignoreCase: {{ ignoreCase }}
                  prefix: "{{ prefix }}"
                  suffix: "{{ suffix }}"
              paths:
                - contains: "{{ contains }}"
                  exact: "{{ exact }}"
                  ignoreCase: {{ ignoreCase }}
                  prefix: "{{ prefix }}"
                  suffix: "{{ suffix }}"
              resources:
                - contains: "{{ contains }}"
                  exact: "{{ exact }}"
                  ignoreCase: {{ ignoreCase }}
                  prefix: "{{ prefix }}"
                  suffix: "{{ suffix }}"
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. Name of the \`ExtensionBinding\` resource in the following format: \`projects/{project}/locations/{location}/extensionBindings/{extension_binding}\`.
    - name: priority
      value: {{ priority }}
      description: |
        Optional. Priority of the extension binding. Lower numbers indicate higher priority. Priority of extension bindings are used to determine the order in which extension bindings are applied to a request.
    - name: producerExtension
      value: "{{ producerExtension }}"
      description: |
        Required. The name of the extension that this binding should attach to target resources. Format: For Google-provided extensions, specify the service endpoint (see [Model Armor integration](https://docs.cloud.google.com/model-armor/integrations))
    - name: producerMetadata
      value: "{{ producerMetadata }}"
      description: |
        Optional. Additional metadata that should be passed to the attached extension with each request.
    - name: target
      description: |
        Required. Specifies a target to which this \`ExtensionBinding\` should be attached. The target can be either a single resource or a scope of resources.
      value:
        resources:
          - "{{ resources }}"
        scope:
          parent: "{{ parent }}"
          resourceTypes:
            - "{{ resourceTypes }}"
    - name: extensionBindingId
      value: "{{ extensionBindingId }}"
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

Updates the parameters of the specified `ExtensionBinding` resource.

```sql
UPDATE google.networkservices.extension_bindings
SET 
data__description = '{{ description }}',
data__etag = '{{ etag }}',
data__failOpen = {{ failOpen }},
data__labels = '{{ labels }}',
data__matchConditions = '{{ matchConditions }}',
data__name = '{{ name }}',
data__priority = {{ priority }},
data__producerExtension = '{{ producerExtension }}',
data__producerMetadata = '{{ producerMetadata }}',
data__target = '{{ target }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND extensionBindingsId = '{{ extensionBindingsId }}' --required
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


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes the specified `ExtensionBinding` resource.

```sql
DELETE FROM google.networkservices.extension_bindings
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND extensionBindingsId = '{{ extensionBindingsId }}' --required
AND etag = '{{ etag }}'
;
```
</TabItem>
</Tabs>
