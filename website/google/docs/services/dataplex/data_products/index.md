--- 
title: data_products
hide_title: false
hide_table_of_contents: false
keywords:
  - data_products
  - dataplex
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

Creates, updates, deletes, gets or lists a <code>data_products</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_products" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.data_products" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_data_products_get"
    values={[
        { label: 'projects_locations_data_products_get', value: 'projects_locations_data_products_get' },
        { label: 'projects_locations_data_products_list', value: 'projects_locations_data_products_list' }
    ]}
>
<TabItem value="projects_locations_data_products_get">

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
    <td>Identifier. Resource name of the data product. Format: projects/&#123;project_id_or_number&#125;/locations/&#123;location_id&#125;/dataProducts/&#123;data_product_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="accessApprovalConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for access approval for the data product. (id: GoogleCloudDataplexV1DataProductAccessApprovalConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="accessGroups" /></td>
    <td><code>object</code></td>
    <td>Optional. Data product access groups by access group id as key. If data product is used only for packaging data assets, then access groups may be empty. However, if a data product is used for sharing data assets, then at least one access group must be specified.Example: &#123; "analyst": &#123; "id": "analyst", "displayName": "Analyst", "description": "Access group for analysts", "principal": &#123; "googleGroup": "analysts@example.com" &#125; &#125; &#125; </td>
</tr>
<tr>
    <td><CopyableCode code="assetCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Number of data assets associated with this data product.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the data product was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the data product.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. User-friendly display name of the data product.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="icon" /></td>
    <td><code>string (byte)</code></td>
    <td>Optional. Base64 encoded image representing the data product. Max Size: 3.0MiB Expected image dimensions are 512x512 pixels, however the API only performs validation on size of the encoded data. Note: For byte fields, the content of the fields are base64-encoded (which increases the size of the data by 33-36%) when using JSON on the wire.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the data product.Example: &#123; "environment": "production", "billing": "marketing-department" &#125; </td>
</tr>
<tr>
    <td><CopyableCode code="ownerEmails" /></td>
    <td><code>array</code></td>
    <td>Required. Emails of the data product owners.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated unique ID for the data product. This ID will be different if the data product is deleted and re-created with the same name.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the data product was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_products_list">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
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
    <td><a href="#projects_locations_data_products_get"><CopyableCode code="projects_locations_data_products_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataProductsId"><code>dataProductsId</code></a></td>
    <td></td>
    <td>Gets a data product.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_products_list"><CopyableCode code="projects_locations_data_products_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists data products for a given project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_products_create"><CopyableCode code="projects_locations_data_products_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-dataProductId"><code>dataProductId</code></a></td>
    <td>Creates a data product.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_products_patch"><CopyableCode code="projects_locations_data_products_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataProductsId"><code>dataProductsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates a data product.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_products_delete"><CopyableCode code="projects_locations_data_products_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataProductsId"><code>dataProductsId</code></a></td>
    <td><a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a data product. The deletion will fail if the data product is not empty (i.e. contains at least one data asset).</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_products_request_access"><CopyableCode code="projects_locations_data_products_request_access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataProductsId"><code>dataProductsId</code></a></td>
    <td></td>
    <td>Requests access to a data product. This will trigger an access approval workflow, and the requester will need to wait for the approval to be granted before they will be able to access the data product assets.</td>
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
<tr id="parameter-dataProductsId">
    <td><CopyableCode code="dataProductsId" /></td>
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
<tr id="parameter-dataProductId">
    <td><CopyableCode code="dataProductId" /></td>
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
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_data_products_get"
    values={[
        { label: 'projects_locations_data_products_get', value: 'projects_locations_data_products_get' },
        { label: 'projects_locations_data_products_list', value: 'projects_locations_data_products_list' }
    ]}
>
<TabItem value="projects_locations_data_products_get">

Gets a data product.

```sql
SELECT
name,
accessApprovalConfig,
accessGroups,
assetCount,
createTime,
description,
displayName,
etag,
icon,
labels,
ownerEmails,
uid,
updateTime
FROM google.dataplex.data_products
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataProductsId = '{{ dataProductsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_data_products_list">

Lists data products for a given project.

```sql
SELECT
*
FROM google.dataplex.data_products
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND orderBy = '{{ orderBy }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_data_products_create"
    values={[
        { label: 'projects_locations_data_products_create', value: 'projects_locations_data_products_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_data_products_create">

Creates a data product.

```sql
INSERT INTO google.dataplex.data_products (
data__accessGroups,
data__labels,
data__ownerEmails,
data__accessApprovalConfig,
data__description,
data__etag,
data__icon,
data__displayName,
data__name,
projectsId,
locationsId,
validateOnly,
dataProductId
)
SELECT 
'{{ accessGroups }}',
'{{ labels }}',
'{{ ownerEmails }}',
'{{ accessApprovalConfig }}',
'{{ description }}',
'{{ etag }}',
'{{ icon }}',
'{{ displayName }}',
'{{ name }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ validateOnly }}',
'{{ dataProductId }}'
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
- name: data_products
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the data_products resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the data_products resource.
    - name: accessGroups
      value: "{{ accessGroups }}"
      description: |
        Optional. Data product access groups by access group id as key. If data product is used only for packaging data assets, then access groups may be empty. However, if a data product is used for sharing data assets, then at least one access group must be specified.Example: { "analyst": { "id": "analyst", "displayName": "Analyst", "description": "Access group for analysts", "principal": { "googleGroup": "analysts@example.com" } } }
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. User-defined labels for the data product.Example: { "environment": "production", "billing": "marketing-department" }
    - name: ownerEmails
      value:
        - "{{ ownerEmails }}"
      description: |
        Required. Emails of the data product owners.
    - name: accessApprovalConfig
      description: |
        Optional. Configuration for access approval for the data product.
      value:
        approverEmails:
          - "{{ approverEmails }}"
    - name: description
      value: "{{ description }}"
      description: |
        Optional. Description of the data product.
    - name: etag
      value: "{{ etag }}"
      description: |
        Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
    - name: icon
      value: "{{ icon }}"
      description: |
        Optional. Base64 encoded image representing the data product. Max Size: 3.0MiB Expected image dimensions are 512x512 pixels, however the API only performs validation on size of the encoded data. Note: For byte fields, the content of the fields are base64-encoded (which increases the size of the data by 33-36%) when using JSON on the wire.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. User-friendly display name of the data product.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. Resource name of the data product. Format: projects/{project_id_or_number}/locations/{location_id}/dataProducts/{data_product_id}.
    - name: validateOnly
      value: {{ validateOnly }}
    - name: dataProductId
      value: "{{ dataProductId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_data_products_patch"
    values={[
        { label: 'projects_locations_data_products_patch', value: 'projects_locations_data_products_patch' }
    ]}
>
<TabItem value="projects_locations_data_products_patch">

Updates a data product.

```sql
UPDATE google.dataplex.data_products
SET 
data__accessGroups = '{{ accessGroups }}',
data__labels = '{{ labels }}',
data__ownerEmails = '{{ ownerEmails }}',
data__accessApprovalConfig = '{{ accessApprovalConfig }}',
data__description = '{{ description }}',
data__etag = '{{ etag }}',
data__icon = '{{ icon }}',
data__displayName = '{{ displayName }}',
data__name = '{{ name }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataProductsId = '{{ dataProductsId }}' --required
AND updateMask = '{{ updateMask}}'
AND validateOnly = {{ validateOnly}}
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
    defaultValue="projects_locations_data_products_delete"
    values={[
        { label: 'projects_locations_data_products_delete', value: 'projects_locations_data_products_delete' }
    ]}
>
<TabItem value="projects_locations_data_products_delete">

Deletes a data product. The deletion will fail if the data product is not empty (i.e. contains at least one data asset).

```sql
DELETE FROM google.dataplex.data_products
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataProductsId = '{{ dataProductsId }}' --required
AND validateOnly = '{{ validateOnly }}'
AND etag = '{{ etag }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_data_products_request_access"
    values={[
        { label: 'projects_locations_data_products_request_access', value: 'projects_locations_data_products_request_access' }
    ]}
>
<TabItem value="projects_locations_data_products_request_access">

Requests access to a data product. This will trigger an access approval workflow, and the requester will need to wait for the approval to be granted before they will be able to access the data product assets.

```sql
EXEC google.dataplex.data_products.projects_locations_data_products_request_access 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataProductsId='{{ dataProductsId }}' --required 
@@json=
'{
"validateOnly": {{ validateOnly }}, 
"changeRequest": "{{ changeRequest }}"
}'
;
```
</TabItem>
</Tabs>
