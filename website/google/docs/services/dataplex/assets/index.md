--- 
title: assets
hide_title: false
hide_table_of_contents: false
keywords:
  - assets
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

Creates, updates, deletes, gets or lists an <code>assets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.assets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_lakes_zones_assets_get"
    values={[
        { label: 'projects_locations_lakes_zones_assets_get', value: 'projects_locations_lakes_zones_assets_get' },
        { label: 'projects_locations_lakes_zones_assets_list', value: 'projects_locations_lakes_zones_assets_list' }
    ]}
>
<TabItem value="projects_locations_lakes_zones_assets_get">

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
    <td>Output only. The relative resource name of the asset, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/lakes/&#123;lake_id&#125;/zones/&#123;zone_id&#125;/assets/&#123;asset_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the asset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="discoverySpec" /></td>
    <td><code>object</code></td>
    <td>Optional. Specification of the discovery feature applied to data referenced by this asset. When this spec is left unset, the asset will use the spec set on the parent zone. (id: GoogleCloudDataplexV1AssetDiscoverySpec)</td>
</tr>
<tr>
    <td><CopyableCode code="discoveryStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. Status of the discovery feature applied to data referenced by this asset. (id: GoogleCloudDataplexV1AssetDiscoveryStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User friendly display name.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User defined labels for the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceSpec" /></td>
    <td><code>object</code></td>
    <td>Required. Specification of the resource that is referenced by this asset. (id: GoogleCloudDataplexV1AssetResourceSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. Status of the resource referenced by this asset. (id: GoogleCloudDataplexV1AssetResourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="securityStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. Status of the security policy applied to resource referenced by this asset. (id: GoogleCloudDataplexV1AssetSecurityStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the asset. (STATE_UNSPECIFIED, ACTIVE, CREATING, DELETING, ACTION_REQUIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated globally unique ID for the asset. This ID will be different if the asset is deleted and re-created with the same name.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the asset was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_lakes_zones_assets_list">

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
    <td>Output only. The relative resource name of the asset, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/lakes/&#123;lake_id&#125;/zones/&#123;zone_id&#125;/assets/&#123;asset_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the asset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="discoverySpec" /></td>
    <td><code>object</code></td>
    <td>Optional. Specification of the discovery feature applied to data referenced by this asset. When this spec is left unset, the asset will use the spec set on the parent zone. (id: GoogleCloudDataplexV1AssetDiscoverySpec)</td>
</tr>
<tr>
    <td><CopyableCode code="discoveryStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. Status of the discovery feature applied to data referenced by this asset. (id: GoogleCloudDataplexV1AssetDiscoveryStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User friendly display name.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User defined labels for the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceSpec" /></td>
    <td><code>object</code></td>
    <td>Required. Specification of the resource that is referenced by this asset. (id: GoogleCloudDataplexV1AssetResourceSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. Status of the resource referenced by this asset. (id: GoogleCloudDataplexV1AssetResourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="securityStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. Status of the security policy applied to resource referenced by this asset. (id: GoogleCloudDataplexV1AssetSecurityStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the asset. (STATE_UNSPECIFIED, ACTIVE, CREATING, DELETING, ACTION_REQUIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated globally unique ID for the asset. This ID will be different if the asset is deleted and re-created with the same name.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the asset was last updated.</td>
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
    <td><a href="#projects_locations_lakes_zones_assets_get"><CopyableCode code="projects_locations_lakes_zones_assets_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-zonesId"><code>zonesId</code></a>, <a href="#parameter-assetsId"><code>assetsId</code></a></td>
    <td></td>
    <td>Retrieves an asset resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_zones_assets_list"><CopyableCode code="projects_locations_lakes_zones_assets_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-zonesId"><code>zonesId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists asset resources in a zone.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_zones_assets_create"><CopyableCode code="projects_locations_lakes_zones_assets_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-zonesId"><code>zonesId</code></a></td>
    <td><a href="#parameter-assetId"><code>assetId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates an asset resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_zones_assets_patch"><CopyableCode code="projects_locations_lakes_zones_assets_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-zonesId"><code>zonesId</code></a>, <a href="#parameter-assetsId"><code>assetsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates an asset resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_lakes_zones_assets_delete"><CopyableCode code="projects_locations_lakes_zones_assets_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-lakesId"><code>lakesId</code></a>, <a href="#parameter-zonesId"><code>zonesId</code></a>, <a href="#parameter-assetsId"><code>assetsId</code></a></td>
    <td></td>
    <td>Deletes an asset resource. The referenced storage resource is detached (default) or deleted based on the associated Lifecycle policy.</td>
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
<tr id="parameter-assetsId">
    <td><CopyableCode code="assetsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-lakesId">
    <td><CopyableCode code="lakesId" /></td>
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
<tr id="parameter-zonesId">
    <td><CopyableCode code="zonesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-assetId">
    <td><CopyableCode code="assetId" /></td>
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
    defaultValue="projects_locations_lakes_zones_assets_get"
    values={[
        { label: 'projects_locations_lakes_zones_assets_get', value: 'projects_locations_lakes_zones_assets_get' },
        { label: 'projects_locations_lakes_zones_assets_list', value: 'projects_locations_lakes_zones_assets_list' }
    ]}
>
<TabItem value="projects_locations_lakes_zones_assets_get">

Retrieves an asset resource.

```sql
SELECT
name,
createTime,
description,
discoverySpec,
discoveryStatus,
displayName,
labels,
resourceSpec,
resourceStatus,
securityStatus,
state,
uid,
updateTime
FROM google.dataplex.assets
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND lakesId = '{{ lakesId }}' -- required
AND zonesId = '{{ zonesId }}' -- required
AND assetsId = '{{ assetsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_lakes_zones_assets_list">

Lists asset resources in a zone.

```sql
SELECT
name,
createTime,
description,
discoverySpec,
discoveryStatus,
displayName,
labels,
resourceSpec,
resourceStatus,
securityStatus,
state,
uid,
updateTime
FROM google.dataplex.assets
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND lakesId = '{{ lakesId }}' -- required
AND zonesId = '{{ zonesId }}' -- required
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
    defaultValue="projects_locations_lakes_zones_assets_create"
    values={[
        { label: 'projects_locations_lakes_zones_assets_create', value: 'projects_locations_lakes_zones_assets_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_lakes_zones_assets_create">

Creates an asset resource.

```sql
INSERT INTO google.dataplex.assets (
data__description,
data__discoverySpec,
data__displayName,
data__labels,
data__resourceSpec,
projectsId,
locationsId,
lakesId,
zonesId,
assetId,
validateOnly
)
SELECT 
'{{ description }}',
'{{ discoverySpec }}',
'{{ displayName }}',
'{{ labels }}',
'{{ resourceSpec }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ lakesId }}',
'{{ zonesId }}',
'{{ assetId }}',
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
- name: assets
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the assets resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the assets resource.
    - name: lakesId
      value: "{{ lakesId }}"
      description: Required parameter for the assets resource.
    - name: zonesId
      value: "{{ zonesId }}"
      description: Required parameter for the assets resource.
    - name: description
      value: "{{ description }}"
      description: |
        Optional. Description of the asset.
    - name: discoverySpec
      description: |
        Optional. Specification of the discovery feature applied to data referenced by this asset. When this spec is left unset, the asset will use the spec set on the parent zone.
      value:
        csvOptions:
          delimiter: "{{ delimiter }}"
          disableTypeInference: {{ disableTypeInference }}
          encoding: "{{ encoding }}"
          headerRows: {{ headerRows }}
        enabled: {{ enabled }}
        excludePatterns:
          - "{{ excludePatterns }}"
        includePatterns:
          - "{{ includePatterns }}"
        jsonOptions:
          disableTypeInference: {{ disableTypeInference }}
          encoding: "{{ encoding }}"
        schedule: "{{ schedule }}"
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Optional. User friendly display name.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. User defined labels for the asset.
    - name: resourceSpec
      description: |
        Required. Specification of the resource that is referenced by this asset.
      value:
        name: "{{ name }}"
        readAccessMode: "{{ readAccessMode }}"
        type: "{{ type }}"
    - name: assetId
      value: "{{ assetId }}"
    - name: validateOnly
      value: {{ validateOnly }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_lakes_zones_assets_patch"
    values={[
        { label: 'projects_locations_lakes_zones_assets_patch', value: 'projects_locations_lakes_zones_assets_patch' }
    ]}
>
<TabItem value="projects_locations_lakes_zones_assets_patch">

Updates an asset resource.

```sql
UPDATE google.dataplex.assets
SET 
data__description = '{{ description }}',
data__discoverySpec = '{{ discoverySpec }}',
data__displayName = '{{ displayName }}',
data__labels = '{{ labels }}',
data__resourceSpec = '{{ resourceSpec }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND lakesId = '{{ lakesId }}' --required
AND zonesId = '{{ zonesId }}' --required
AND assetsId = '{{ assetsId }}' --required
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
    defaultValue="projects_locations_lakes_zones_assets_delete"
    values={[
        { label: 'projects_locations_lakes_zones_assets_delete', value: 'projects_locations_lakes_zones_assets_delete' }
    ]}
>
<TabItem value="projects_locations_lakes_zones_assets_delete">

Deletes an asset resource. The referenced storage resource is detached (default) or deleted based on the associated Lifecycle policy.

```sql
DELETE FROM google.dataplex.assets
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND lakesId = '{{ lakesId }}' --required
AND zonesId = '{{ zonesId }}' --required
AND assetsId = '{{ assetsId }}' --required
;
```
</TabItem>
</Tabs>
