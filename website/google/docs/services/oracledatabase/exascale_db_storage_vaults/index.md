--- 
title: exascale_db_storage_vaults
hide_title: false
hide_table_of_contents: false
keywords:
  - exascale_db_storage_vaults
  - oracledatabase
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

Creates, updates, deletes, gets or lists an <code>exascale_db_storage_vaults</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="exascale_db_storage_vaults" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.oracledatabase.exascale_db_storage_vaults" /></td></tr>
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
    <td>Identifier. The resource name of the ExascaleDbStorageVault. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/exascaleDbStorageVaults/&#123;exascale_db_storage_vault&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The date and time when the ExascaleDbStorageVault was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name for the ExascaleDbStorageVault. The name does not have to be unique within your project. The name must be 1-255 characters long and can only contain alphanumeric characters.</td>
</tr>
<tr>
    <td><CopyableCode code="entitlementId" /></td>
    <td><code>string</code></td>
    <td>Output only. The ID of the subscription entitlement associated with the ExascaleDbStorageVault.</td>
</tr>
<tr>
    <td><CopyableCode code="exadataInfrastructure" /></td>
    <td><code>string</code></td>
    <td>Optional. The Exadata Infrastructure resource on which ExascaleDbStorageVault resource is created, in the following format: projects/&#123;project&#125;/locations/&#123;region&#125;/cloudExadataInfrastuctures/&#123;cloud_extradata_infrastructure&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="gcpOracleZone" /></td>
    <td><code>string</code></td>
    <td>Optional. The GCP Oracle zone where Oracle ExascaleDbStorageVault is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels or tags associated with the ExascaleDbStorageVault.</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>Required. The properties of the ExascaleDbStorageVault. (id: ExascaleDbStorageVaultProperties)</td>
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
    <td>Identifier. The resource name of the ExascaleDbStorageVault. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/exascaleDbStorageVaults/&#123;exascale_db_storage_vault&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The date and time when the ExascaleDbStorageVault was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name for the ExascaleDbStorageVault. The name does not have to be unique within your project. The name must be 1-255 characters long and can only contain alphanumeric characters.</td>
</tr>
<tr>
    <td><CopyableCode code="entitlementId" /></td>
    <td><code>string</code></td>
    <td>Output only. The ID of the subscription entitlement associated with the ExascaleDbStorageVault.</td>
</tr>
<tr>
    <td><CopyableCode code="exadataInfrastructure" /></td>
    <td><code>string</code></td>
    <td>Optional. The Exadata Infrastructure resource on which ExascaleDbStorageVault resource is created, in the following format: projects/&#123;project&#125;/locations/&#123;region&#125;/cloudExadataInfrastuctures/&#123;cloud_extradata_infrastructure&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="gcpOracleZone" /></td>
    <td><code>string</code></td>
    <td>Optional. The GCP Oracle zone where Oracle ExascaleDbStorageVault is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels or tags associated with the ExascaleDbStorageVault.</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>Required. The properties of the ExascaleDbStorageVault. (id: ExascaleDbStorageVaultProperties)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-exascaleDbStorageVaultsId"><code>exascaleDbStorageVaultsId</code></a></td>
    <td></td>
    <td>Gets details of a single ExascaleDB Storage Vault.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all the ExascaleDB Storage Vaults for the given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-exascaleDbStorageVaultId"><code>exascaleDbStorageVaultId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new ExascaleDB Storage Vault resource.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-exascaleDbStorageVaultsId"><code>exascaleDbStorageVaultsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single ExascaleDB Storage Vault.</td>
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
<tr id="parameter-exascaleDbStorageVaultsId">
    <td><CopyableCode code="exascaleDbStorageVaultsId" /></td>
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
<tr id="parameter-exascaleDbStorageVaultId">
    <td><CopyableCode code="exascaleDbStorageVaultId" /></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
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

Gets details of a single ExascaleDB Storage Vault.

```sql
SELECT
name,
createTime,
displayName,
entitlementId,
exadataInfrastructure,
gcpOracleZone,
labels,
properties
FROM google.oracledatabase.exascale_db_storage_vaults
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND exascaleDbStorageVaultsId = '{{ exascaleDbStorageVaultsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists all the ExascaleDB Storage Vaults for the given project and location.

```sql
SELECT
name,
createTime,
displayName,
entitlementId,
exadataInfrastructure,
gcpOracleZone,
labels,
properties
FROM google.oracledatabase.exascale_db_storage_vaults
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND orderBy = '{{ orderBy }}'
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

Creates a new ExascaleDB Storage Vault resource.

```sql
INSERT INTO google.oracledatabase.exascale_db_storage_vaults (
data__displayName,
data__labels,
data__name,
data__gcpOracleZone,
data__properties,
data__exadataInfrastructure,
projectsId,
locationsId,
exascaleDbStorageVaultId,
requestId
)
SELECT 
'{{ displayName }}',
'{{ labels }}',
'{{ name }}',
'{{ gcpOracleZone }}',
'{{ properties }}',
'{{ exadataInfrastructure }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ exascaleDbStorageVaultId }}',
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
- name: exascale_db_storage_vaults
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the exascale_db_storage_vaults resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the exascale_db_storage_vaults resource.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. The display name for the ExascaleDbStorageVault. The name does not have to be unique within your project. The name must be 1-255 characters long and can only contain alphanumeric characters.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. The labels or tags associated with the ExascaleDbStorageVault.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The resource name of the ExascaleDbStorageVault. Format: projects/{project}/locations/{location}/exascaleDbStorageVaults/{exascale_db_storage_vault}
    - name: gcpOracleZone
      value: "{{ gcpOracleZone }}"
      description: |
        Optional. The GCP Oracle zone where Oracle ExascaleDbStorageVault is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability.
    - name: properties
      description: |
        Required. The properties of the ExascaleDbStorageVault.
      value:
        ocid: "{{ ocid }}"
        state: "{{ state }}"
        timeZone:
          id: "{{ id }}"
          version: "{{ version }}"
        attachedShapeAttributes:
          - "{{ attachedShapeAttributes }}"
        ociUri: "{{ ociUri }}"
        description: "{{ description }}"
        additionalFlashCachePercent: {{ additionalFlashCachePercent }}
        exascaleDbStorageDetails:
          availableSizeGbs: {{ availableSizeGbs }}
          totalSizeGbs: {{ totalSizeGbs }}
        availableShapeAttributes:
          - "{{ availableShapeAttributes }}"
        vmClusterIds:
          - "{{ vmClusterIds }}"
        vmClusterCount: {{ vmClusterCount }}
    - name: exadataInfrastructure
      value: "{{ exadataInfrastructure }}"
      description: |
        Optional. The Exadata Infrastructure resource on which ExascaleDbStorageVault resource is created, in the following format: projects/{project}/locations/{region}/cloudExadataInfrastuctures/{cloud_extradata_infrastructure}
    - name: exascaleDbStorageVaultId
      value: "{{ exascaleDbStorageVaultId }}"
    - name: requestId
      value: "{{ requestId }}"
`}</CodeBlock>

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

Deletes a single ExascaleDB Storage Vault.

```sql
DELETE FROM google.oracledatabase.exascale_db_storage_vaults
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND exascaleDbStorageVaultsId = '{{ exascaleDbStorageVaultsId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
