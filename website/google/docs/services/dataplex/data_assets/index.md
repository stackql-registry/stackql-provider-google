--- 
title: data_assets
hide_title: false
hide_table_of_contents: false
keywords:
  - data_assets
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

Creates, updates, deletes, gets or lists a <code>data_assets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_assets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.data_assets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_data_products_data_assets_get"
    values={[
        { label: 'projects_locations_data_products_data_assets_get', value: 'projects_locations_data_products_data_assets_get' },
        { label: 'projects_locations_data_products_data_assets_list', value: 'projects_locations_data_products_data_assets_list' }
    ]}
>
<TabItem value="projects_locations_data_products_data_assets_get">

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
    <td>Identifier. Resource name of the data asset. Format: projects/&#123;project_id_or_number&#125;/locations/&#123;location_id&#125;/dataProducts/&#123;data_product_id&#125;/dataAssets/&#123;data_asset_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="accessGroupConfigs" /></td>
    <td><code>object</code></td>
    <td>Optional. Access groups configurations for this data asset.The key is DataProduct.AccessGroup.id and the value is AccessGroupConfig.Example: &#123; "analyst": &#123; "iamRoles": ["roles/bigquery.dataViewer"] &#125; &#125; Currently, at most one IAM role is allowed per access group. For providing multiple predefined IAM roles, wrap them in a custom IAM role as per https://cloud.google.com/iam/docs/creating-custom-roles.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the data asset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the data asset.Example: &#123; "environment": "production", "billing": "marketing-department" &#125; </td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. Full resource name of the cloud resource represented by the data asset. This must follow https://cloud.google.com/iam/docs/full-resource-names. Example: //bigquery.googleapis.com/projects/my_project_123/datasets/dataset_456/tables/table_789 Only BigQuery tables and datasets are currently supported. Data asset creator must have getIamPolicy and setIamPolicy permissions on the resource. Data asset creator must also have resource specific get permission, for instance, bigquery.tables.get for BigQuery tables.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated globally unique ID for the data asset. This ID will be different if the data asset is deleted and re-created with the same name.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the data asset was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_products_data_assets_list">

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
    <td>Identifier. Resource name of the data asset. Format: projects/&#123;project_id_or_number&#125;/locations/&#123;location_id&#125;/dataProducts/&#123;data_product_id&#125;/dataAssets/&#123;data_asset_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="accessGroupConfigs" /></td>
    <td><code>object</code></td>
    <td>Optional. Access groups configurations for this data asset.The key is DataProduct.AccessGroup.id and the value is AccessGroupConfig.Example: &#123; "analyst": &#123; "iamRoles": ["roles/bigquery.dataViewer"] &#125; &#125; Currently, at most one IAM role is allowed per access group. For providing multiple predefined IAM roles, wrap them in a custom IAM role as per https://cloud.google.com/iam/docs/creating-custom-roles.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the data asset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the data asset.Example: &#123; "environment": "production", "billing": "marketing-department" &#125; </td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. Full resource name of the cloud resource represented by the data asset. This must follow https://cloud.google.com/iam/docs/full-resource-names. Example: //bigquery.googleapis.com/projects/my_project_123/datasets/dataset_456/tables/table_789 Only BigQuery tables and datasets are currently supported. Data asset creator must have getIamPolicy and setIamPolicy permissions on the resource. Data asset creator must also have resource specific get permission, for instance, bigquery.tables.get for BigQuery tables.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated globally unique ID for the data asset. This ID will be different if the data asset is deleted and re-created with the same name.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the data asset was last updated.</td>
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
    <td><a href="#projects_locations_data_products_data_assets_get"><CopyableCode code="projects_locations_data_products_data_assets_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataProductsId"><code>dataProductsId</code></a>, <a href="#parameter-dataAssetsId"><code>dataAssetsId</code></a></td>
    <td></td>
    <td>Gets a data asset.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_products_data_assets_list"><CopyableCode code="projects_locations_data_products_data_assets_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataProductsId"><code>dataProductsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists data assets for a given data product.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_products_data_assets_create"><CopyableCode code="projects_locations_data_products_data_assets_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataProductsId"><code>dataProductsId</code></a></td>
    <td><a href="#parameter-dataAssetId"><code>dataAssetId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a data asset.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_products_data_assets_patch"><CopyableCode code="projects_locations_data_products_data_assets_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataProductsId"><code>dataProductsId</code></a>, <a href="#parameter-dataAssetsId"><code>dataAssetsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates a data asset.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_products_data_assets_delete"><CopyableCode code="projects_locations_data_products_data_assets_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataProductsId"><code>dataProductsId</code></a>, <a href="#parameter-dataAssetsId"><code>dataAssetsId</code></a></td>
    <td><a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a data asset.</td>
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
<tr id="parameter-dataAssetsId">
    <td><CopyableCode code="dataAssetsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-dataAssetId">
    <td><CopyableCode code="dataAssetId" /></td>
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
    defaultValue="projects_locations_data_products_data_assets_get"
    values={[
        { label: 'projects_locations_data_products_data_assets_get', value: 'projects_locations_data_products_data_assets_get' },
        { label: 'projects_locations_data_products_data_assets_list', value: 'projects_locations_data_products_data_assets_list' }
    ]}
>
<TabItem value="projects_locations_data_products_data_assets_get">

Gets a data asset.

```sql
SELECT
name,
accessGroupConfigs,
createTime,
etag,
labels,
resource,
uid,
updateTime
FROM google.dataplex.data_assets
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataProductsId = '{{ dataProductsId }}' -- required
AND dataAssetsId = '{{ dataAssetsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_data_products_data_assets_list">

Lists data assets for a given data product.

```sql
SELECT
name,
accessGroupConfigs,
createTime,
etag,
labels,
resource,
uid,
updateTime
FROM google.dataplex.data_assets
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataProductsId = '{{ dataProductsId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_data_products_data_assets_create"
    values={[
        { label: 'projects_locations_data_products_data_assets_create', value: 'projects_locations_data_products_data_assets_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_data_products_data_assets_create">

Creates a data asset.

```sql
INSERT INTO google.dataplex.data_assets (
data__etag,
data__labels,
data__accessGroupConfigs,
data__name,
data__resource,
projectsId,
locationsId,
dataProductsId,
dataAssetId,
validateOnly
)
SELECT 
'{{ etag }}',
'{{ labels }}',
'{{ accessGroupConfigs }}',
'{{ name }}',
'{{ resource }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ dataProductsId }}',
'{{ dataAssetId }}',
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
- name: data_assets
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the data_assets resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the data_assets resource.
    - name: dataProductsId
      value: "{{ dataProductsId }}"
      description: Required parameter for the data_assets resource.
    - name: etag
      value: "{{ etag }}"
      description: |
        Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. User-defined labels for the data asset.Example: { "environment": "production", "billing": "marketing-department" }
    - name: accessGroupConfigs
      value: "{{ accessGroupConfigs }}"
      description: |
        Optional. Access groups configurations for this data asset.The key is DataProduct.AccessGroup.id and the value is AccessGroupConfig.Example: { "analyst": { "iamRoles": ["roles/bigquery.dataViewer"] } } Currently, at most one IAM role is allowed per access group. For providing multiple predefined IAM roles, wrap them in a custom IAM role as per https://cloud.google.com/iam/docs/creating-custom-roles.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. Resource name of the data asset. Format: projects/{project_id_or_number}/locations/{location_id}/dataProducts/{data_product_id}/dataAssets/{data_asset_id}
    - name: resource
      value: "{{ resource }}"
      description: |
        Required. Immutable. Full resource name of the cloud resource represented by the data asset. This must follow https://cloud.google.com/iam/docs/full-resource-names. Example: //bigquery.googleapis.com/projects/my_project_123/datasets/dataset_456/tables/table_789 Only BigQuery tables and datasets are currently supported. Data asset creator must have getIamPolicy and setIamPolicy permissions on the resource. Data asset creator must also have resource specific get permission, for instance, bigquery.tables.get for BigQuery tables.
    - name: dataAssetId
      value: "{{ dataAssetId }}"
    - name: validateOnly
      value: {{ validateOnly }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_data_products_data_assets_patch"
    values={[
        { label: 'projects_locations_data_products_data_assets_patch', value: 'projects_locations_data_products_data_assets_patch' }
    ]}
>
<TabItem value="projects_locations_data_products_data_assets_patch">

Updates a data asset.

```sql
UPDATE google.dataplex.data_assets
SET 
data__etag = '{{ etag }}',
data__labels = '{{ labels }}',
data__accessGroupConfigs = '{{ accessGroupConfigs }}',
data__name = '{{ name }}',
data__resource = '{{ resource }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataProductsId = '{{ dataProductsId }}' --required
AND dataAssetsId = '{{ dataAssetsId }}' --required
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
    defaultValue="projects_locations_data_products_data_assets_delete"
    values={[
        { label: 'projects_locations_data_products_data_assets_delete', value: 'projects_locations_data_products_data_assets_delete' }
    ]}
>
<TabItem value="projects_locations_data_products_data_assets_delete">

Deletes a data asset.

```sql
DELETE FROM google.dataplex.data_assets
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataProductsId = '{{ dataProductsId }}' --required
AND dataAssetsId = '{{ dataAssetsId }}' --required
AND validateOnly = '{{ validateOnly }}'
AND etag = '{{ etag }}'
;
```
</TabItem>
</Tabs>
