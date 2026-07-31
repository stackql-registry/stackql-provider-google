--- 
title: attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - attributes
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

Creates, updates, deletes, gets or lists an <code>attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apihub.attributes" /></td></tr>
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
    <td>Identifier. The name of the attribute in the API Hub. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/attributes/&#123;attribute&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="allowedValues" /></td>
    <td><code>array</code></td>
    <td>Optional. The list of allowed values when the attribute value is of type enum. This is required when the data_type of the attribute is ENUM. The maximum number of allowed values of an attribute will be 1000.</td>
</tr>
<tr>
    <td><CopyableCode code="cardinality" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. The maximum number of values that the attribute can have when associated with an API Hub resource. Cardinality 1 would represent a single-valued attribute. It must not be less than 1 or greater than 20. If not specified, the cardinality would be set to 1 by default and represent a single-valued attribute.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the attribute was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataType" /></td>
    <td><code>string</code></td>
    <td>Required. The type of the data of the attribute. (DATA_TYPE_UNSPECIFIED, ENUM, JSON, STRING, URI)</td>
</tr>
<tr>
    <td><CopyableCode code="definitionType" /></td>
    <td><code>string</code></td>
    <td>Output only. The definition type of the attribute. (DEFINITION_TYPE_UNSPECIFIED, SYSTEM_DEFINED, USER_DEFINED)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the attribute.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the attribute.</td>
</tr>
<tr>
    <td><CopyableCode code="mandatory" /></td>
    <td><code>boolean</code></td>
    <td>Output only. When mandatory is true, the attribute is mandatory for the resource specified in the scope. Only System defined attributes can be mandatory.</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>Required. The scope of the attribute. It represents the resource in the API Hub to which the attribute can be linked. (SCOPE_UNSPECIFIED, API, VERSION, SPEC, API_OPERATION, DEPLOYMENT, DEPENDENCY, DEFINITION, EXTERNAL_API, PLUGIN)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the attribute was last updated.</td>
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
    <td>Identifier. The name of the attribute in the API Hub. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/attributes/&#123;attribute&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="allowedValues" /></td>
    <td><code>array</code></td>
    <td>Optional. The list of allowed values when the attribute value is of type enum. This is required when the data_type of the attribute is ENUM. The maximum number of allowed values of an attribute will be 1000.</td>
</tr>
<tr>
    <td><CopyableCode code="cardinality" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. The maximum number of values that the attribute can have when associated with an API Hub resource. Cardinality 1 would represent a single-valued attribute. It must not be less than 1 or greater than 20. If not specified, the cardinality would be set to 1 by default and represent a single-valued attribute.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the attribute was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataType" /></td>
    <td><code>string</code></td>
    <td>Required. The type of the data of the attribute. (DATA_TYPE_UNSPECIFIED, ENUM, JSON, STRING, URI)</td>
</tr>
<tr>
    <td><CopyableCode code="definitionType" /></td>
    <td><code>string</code></td>
    <td>Output only. The definition type of the attribute. (DEFINITION_TYPE_UNSPECIFIED, SYSTEM_DEFINED, USER_DEFINED)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the attribute.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the attribute.</td>
</tr>
<tr>
    <td><CopyableCode code="mandatory" /></td>
    <td><code>boolean</code></td>
    <td>Output only. When mandatory is true, the attribute is mandatory for the resource specified in the scope. Only System defined attributes can be mandatory.</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>Required. The scope of the attribute. It represents the resource in the API Hub to which the attribute can be linked. (SCOPE_UNSPECIFIED, API, VERSION, SPEC, API_OPERATION, DEPLOYMENT, DEPENDENCY, DEFINITION, EXTERNAL_API, PLUGIN)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the attribute was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-attributesId"><code>attributesId</code></a></td>
    <td></td>
    <td>Get details about the attribute.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>List all attributes.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-attributeId"><code>attributeId</code></a></td>
    <td>Create a user defined attribute. Certain pre defined attributes are already created by the API hub. These attributes will have type as `SYSTEM_DEFINED` and can be listed via ListAttributes method. Allowed values for the same can be updated via UpdateAttribute method.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-attributesId"><code>attributesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update the attribute. The following fields in the Attribute resource can be updated: * display_name The display name can be updated for user defined attributes only. * description The description can be updated for user defined attributes only. * allowed_values To update the list of allowed values, clients need to use the fetched list of allowed values and add or remove values to or from the same list. The mutable allowed values can be updated for both user defined and System defined attributes. The immutable allowed values cannot be updated or deleted. The updated list of allowed values cannot be empty. If an allowed value that is already used by some resource's attribute is deleted, then the association between the resource and the attribute value will also be deleted. * cardinality The cardinality can be updated for user defined attributes only. Cardinality can only be increased during an update. The update_mask should be used to specify the fields being updated.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-attributesId"><code>attributesId</code></a></td>
    <td></td>
    <td>Delete an attribute. Note: System defined attributes cannot be deleted. All associations of the attribute being deleted with any API hub resource will also get deleted.</td>
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
<tr id="parameter-attributesId">
    <td><CopyableCode code="attributesId" /></td>
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
<tr id="parameter-attributeId">
    <td><CopyableCode code="attributeId" /></td>
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

Get details about the attribute.

```sql
SELECT
name,
allowedValues,
cardinality,
createTime,
dataType,
definitionType,
description,
displayName,
mandatory,
scope,
updateTime
FROM google.apihub.attributes
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND attributesId = '{{ attributesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

List all attributes.

```sql
SELECT
name,
allowedValues,
cardinality,
createTime,
dataType,
definitionType,
description,
displayName,
mandatory,
scope,
updateTime
FROM google.apihub.attributes
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
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

Create a user defined attribute. Certain pre defined attributes are already created by the API hub. These attributes will have type as `SYSTEM_DEFINED` and can be listed via ListAttributes method. Allowed values for the same can be updated via UpdateAttribute method.

```sql
INSERT INTO google.apihub.attributes (
data__description,
data__scope,
data__dataType,
data__cardinality,
data__name,
data__displayName,
data__allowedValues,
projectsId,
locationsId,
attributeId
)
SELECT 
'{{ description }}',
'{{ scope }}',
'{{ dataType }}',
{{ cardinality }},
'{{ name }}',
'{{ displayName }}',
'{{ allowedValues }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ attributeId }}'
RETURNING
name,
allowedValues,
cardinality,
createTime,
dataType,
definitionType,
description,
displayName,
mandatory,
scope,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: attributes
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the attributes resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the attributes resource.
    - name: description
      value: "{{ description }}"
      description: |
        Optional. The description of the attribute.
    - name: scope
      value: "{{ scope }}"
      description: |
        Required. The scope of the attribute. It represents the resource in the API Hub to which the attribute can be linked.
      valid_values: ['SCOPE_UNSPECIFIED', 'API', 'VERSION', 'SPEC', 'API_OPERATION', 'DEPLOYMENT', 'DEPENDENCY', 'DEFINITION', 'EXTERNAL_API', 'PLUGIN']
    - name: dataType
      value: "{{ dataType }}"
      description: |
        Required. The type of the data of the attribute.
      valid_values: ['DATA_TYPE_UNSPECIFIED', 'ENUM', 'JSON', 'STRING', 'URI']
    - name: cardinality
      value: {{ cardinality }}
      description: |
        Optional. The maximum number of values that the attribute can have when associated with an API Hub resource. Cardinality 1 would represent a single-valued attribute. It must not be less than 1 or greater than 20. If not specified, the cardinality would be set to 1 by default and represent a single-valued attribute.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The name of the attribute in the API Hub. Format: \`projects/{project}/locations/{location}/attributes/{attribute}\`
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. The display name of the attribute.
    - name: allowedValues
      description: |
        Optional. The list of allowed values when the attribute value is of type enum. This is required when the data_type of the attribute is ENUM. The maximum number of allowed values of an attribute will be 1000.
      value:
        - description: "{{ description }}"
          id: "{{ id }}"
          displayName: "{{ displayName }}"
          immutable: {{ immutable }}
    - name: attributeId
      value: "{{ attributeId }}"
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

Update the attribute. The following fields in the Attribute resource can be updated: * display_name The display name can be updated for user defined attributes only. * description The description can be updated for user defined attributes only. * allowed_values To update the list of allowed values, clients need to use the fetched list of allowed values and add or remove values to or from the same list. The mutable allowed values can be updated for both user defined and System defined attributes. The immutable allowed values cannot be updated or deleted. The updated list of allowed values cannot be empty. If an allowed value that is already used by some resource's attribute is deleted, then the association between the resource and the attribute value will also be deleted. * cardinality The cardinality can be updated for user defined attributes only. Cardinality can only be increased during an update. The update_mask should be used to specify the fields being updated.

```sql
UPDATE google.apihub.attributes
SET 
data__description = '{{ description }}',
data__scope = '{{ scope }}',
data__dataType = '{{ dataType }}',
data__cardinality = {{ cardinality }},
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__allowedValues = '{{ allowedValues }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND attributesId = '{{ attributesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
allowedValues,
cardinality,
createTime,
dataType,
definitionType,
description,
displayName,
mandatory,
scope,
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

Delete an attribute. Note: System defined attributes cannot be deleted. All associations of the attribute being deleted with any API hub resource will also get deleted.

```sql
DELETE FROM google.apihub.attributes
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND attributesId = '{{ attributesId }}' --required
;
```
</TabItem>
</Tabs>
