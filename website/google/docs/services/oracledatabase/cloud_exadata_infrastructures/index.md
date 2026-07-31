--- 
title: cloud_exadata_infrastructures
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_exadata_infrastructures
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

Creates, updates, deletes, gets or lists a <code>cloud_exadata_infrastructures</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cloud_exadata_infrastructures" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.oracledatabase.cloud_exadata_infrastructures" /></td></tr>
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
    <td>Identifier. The name of the Exadata Infrastructure resource with the format: projects/&#123;project&#125;/locations/&#123;region&#125;/cloudExadataInfrastructures/&#123;cloud_exadata_infrastructure&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The date and time that the Exadata Infrastructure was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User friendly name for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="entitlementId" /></td>
    <td><code>string</code></td>
    <td>Output only. Entitlement ID of the private offer against which this infrastructure resource is provisioned.</td>
</tr>
<tr>
    <td><CopyableCode code="gcpOracleZone" /></td>
    <td><code>string</code></td>
    <td>Optional. The GCP Oracle zone where Oracle Exadata Infrastructure is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels or tags associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>Optional. Various properties of the infra. (id: CloudExadataInfrastructureProperties)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-cloudExadataInfrastructuresId"><code>cloudExadataInfrastructuresId</code></a></td>
    <td></td>
    <td>Gets details of a single Exadata Infrastructure.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists Exadata Infrastructures in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-cloudExadataInfrastructureId"><code>cloudExadataInfrastructureId</code></a></td>
    <td>Creates a new Exadata Infrastructure in a given project and location.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-cloudExadataInfrastructuresId"><code>cloudExadataInfrastructuresId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a single Exadata Infrastructure.</td>
</tr>
<tr>
    <td><a href="#configure_exascale"><CopyableCode code="configure_exascale" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-cloudExadataInfrastructuresId"><code>cloudExadataInfrastructuresId</code></a></td>
    <td></td>
    <td>Configures Exascale for a single Exadata Infrastructure.</td>
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
<tr id="parameter-cloudExadataInfrastructuresId">
    <td><CopyableCode code="cloudExadataInfrastructuresId" /></td>
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
<tr id="parameter-cloudExadataInfrastructureId">
    <td><CopyableCode code="cloudExadataInfrastructureId" /></td>
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

Gets details of a single Exadata Infrastructure.

```sql
SELECT
name,
createTime,
displayName,
entitlementId,
gcpOracleZone,
labels,
properties
FROM google.oracledatabase.cloud_exadata_infrastructures
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND cloudExadataInfrastructuresId = '{{ cloudExadataInfrastructuresId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Exadata Infrastructures in a given project and location.

```sql
SELECT
*
FROM google.oracledatabase.cloud_exadata_infrastructures
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
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

Creates a new Exadata Infrastructure in a given project and location.

```sql
INSERT INTO google.oracledatabase.cloud_exadata_infrastructures (
data__properties,
data__name,
data__gcpOracleZone,
data__labels,
data__displayName,
projectsId,
locationsId,
requestId,
cloudExadataInfrastructureId
)
SELECT 
'{{ properties }}',
'{{ name }}',
'{{ gcpOracleZone }}',
'{{ labels }}',
'{{ displayName }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ requestId }}',
'{{ cloudExadataInfrastructureId }}'
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
- name: cloud_exadata_infrastructures
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the cloud_exadata_infrastructures resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the cloud_exadata_infrastructures resource.
    - name: properties
      description: |
        Optional. Various properties of the infra.
      value:
        monthlyStorageServerVersion: "{{ monthlyStorageServerVersion }}"
        ocid: "{{ ocid }}"
        availableStorageSizeGb: {{ availableStorageSizeGb }}
        exascaleConfig:
          totalStorageSizeGb: {{ totalStorageSizeGb }}
          availableStorageSizeGb: {{ availableStorageSizeGb }}
        additionalStorageCount: {{ additionalStorageCount }}
        computeModel: "{{ computeModel }}"
        totalStorageSizeGb: {{ totalStorageSizeGb }}
        maintenanceWindow:
          weeksOfMonth:
            - {{ weeksOfMonth }}
          hoursOfDay:
            - {{ hoursOfDay }}
          months:
            - "{{ months }}"
          customActionTimeoutMins: {{ customActionTimeoutMins }}
          leadTimeWeek: {{ leadTimeWeek }}
          daysOfWeek:
            - "{{ daysOfWeek }}"
          patchingMode: "{{ patchingMode }}"
          isCustomActionTimeoutEnabled: {{ isCustomActionTimeoutEnabled }}
          preference: "{{ preference }}"
        dbServerVersion: "{{ dbServerVersion }}"
        memorySizeGb: {{ memorySizeGb }}
        maxDbNodeStorageSizeGb: {{ maxDbNodeStorageSizeGb }}
        storageServerVersion: "{{ storageServerVersion }}"
        cpuCount: {{ cpuCount }}
        nextMaintenanceRunTime: "{{ nextMaintenanceRunTime }}"
        storageServerType: "{{ storageServerType }}"
        maxDataStorageTb: {{ maxDataStorageTb }}
        nextMaintenanceRunId: "{{ nextMaintenanceRunId }}"
        shape: "{{ shape }}"
        activatedStorageCount: {{ activatedStorageCount }}
        computeCount: {{ computeCount }}
        databaseServerType: "{{ databaseServerType }}"
        maxCpuCount: {{ maxCpuCount }}
        storageCount: {{ storageCount }}
        dbNodeStorageSizeGb: {{ dbNodeStorageSizeGb }}
        monthlyDbServerVersion: "{{ monthlyDbServerVersion }}"
        maxMemoryGb: {{ maxMemoryGb }}
        dataStorageSizeTb: {{ dataStorageSizeTb }}
        state: "{{ state }}"
        ociUrl: "{{ ociUrl }}"
        customerContacts:
          - email: "{{ email }}"
        nextSecurityMaintenanceRunTime: "{{ nextSecurityMaintenanceRunTime }}"
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The name of the Exadata Infrastructure resource with the format: projects/{project}/locations/{region}/cloudExadataInfrastructures/{cloud_exadata_infrastructure}
    - name: gcpOracleZone
      value: "{{ gcpOracleZone }}"
      description: |
        Optional. The GCP Oracle zone where Oracle Exadata Infrastructure is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Labels or tags associated with the resource.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Optional. User friendly name for this resource.
    - name: requestId
      value: "{{ requestId }}"
    - name: cloudExadataInfrastructureId
      value: "{{ cloudExadataInfrastructureId }}"
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

Deletes a single Exadata Infrastructure.

```sql
DELETE FROM google.oracledatabase.cloud_exadata_infrastructures
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND cloudExadataInfrastructuresId = '{{ cloudExadataInfrastructuresId }}' --required
AND requestId = '{{ requestId }}'
AND force = '{{ force }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="configure_exascale"
    values={[
        { label: 'configure_exascale', value: 'configure_exascale' }
    ]}
>
<TabItem value="configure_exascale">

Configures Exascale for a single Exadata Infrastructure.

```sql
EXEC google.oracledatabase.cloud_exadata_infrastructures.configure_exascale 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@cloudExadataInfrastructuresId='{{ cloudExadataInfrastructuresId }}' --required 
@@json=
'{
"totalStorageSizeGb": {{ totalStorageSizeGb }}, 
"requestId": "{{ requestId }}"
}'
;
```
</TabItem>
</Tabs>
