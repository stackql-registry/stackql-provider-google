--- 
title: db_systems
hide_title: false
hide_table_of_contents: false
keywords:
  - db_systems
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

Creates, updates, deletes, gets or lists a <code>db_systems</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_systems" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.oracledatabase.db_systems" /></td></tr>
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
    <td>Identifier. The name of the DbSystem resource in the following format: projects/&#123;project&#125;/locations/&#123;region&#125;/dbSystems/&#123;db_system&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The date and time that the DbSystem was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name for the System db. The name does not have to be unique within your project.</td>
</tr>
<tr>
    <td><CopyableCode code="entitlementId" /></td>
    <td><code>string</code></td>
    <td>Output only. The ID of the subscription entitlement associated with the DbSystem</td>
</tr>
<tr>
    <td><CopyableCode code="gcpOracleZone" /></td>
    <td><code>string</code></td>
    <td>Optional. The GCP Oracle zone where Oracle DbSystem is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels or tags associated with the DbSystem.</td>
</tr>
<tr>
    <td><CopyableCode code="ociUrl" /></td>
    <td><code>string</code></td>
    <td>Output only. HTTPS link to OCI resources exposed to Customer via UI Interface.</td>
</tr>
<tr>
    <td><CopyableCode code="odbNetwork" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the OdbNetwork associated with the DbSystem. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/odbNetworks/&#123;odb_network&#125; It is optional but if specified, this should match the parent ODBNetwork of the OdbSubnet.</td>
</tr>
<tr>
    <td><CopyableCode code="odbSubnet" /></td>
    <td><code>string</code></td>
    <td>Required. The name of the OdbSubnet associated with the DbSystem for IP allocation. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/odbNetworks/&#123;odb_network&#125;/odbSubnets/&#123;odb_subnet&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>Optional. The properties of the DbSystem. (id: DbSystemProperties)</td>
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
    <td>Identifier. The name of the DbSystem resource in the following format: projects/&#123;project&#125;/locations/&#123;region&#125;/dbSystems/&#123;db_system&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The date and time that the DbSystem was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name for the System db. The name does not have to be unique within your project.</td>
</tr>
<tr>
    <td><CopyableCode code="entitlementId" /></td>
    <td><code>string</code></td>
    <td>Output only. The ID of the subscription entitlement associated with the DbSystem</td>
</tr>
<tr>
    <td><CopyableCode code="gcpOracleZone" /></td>
    <td><code>string</code></td>
    <td>Optional. The GCP Oracle zone where Oracle DbSystem is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels or tags associated with the DbSystem.</td>
</tr>
<tr>
    <td><CopyableCode code="ociUrl" /></td>
    <td><code>string</code></td>
    <td>Output only. HTTPS link to OCI resources exposed to Customer via UI Interface.</td>
</tr>
<tr>
    <td><CopyableCode code="odbNetwork" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the OdbNetwork associated with the DbSystem. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/odbNetworks/&#123;odb_network&#125; It is optional but if specified, this should match the parent ODBNetwork of the OdbSubnet.</td>
</tr>
<tr>
    <td><CopyableCode code="odbSubnet" /></td>
    <td><code>string</code></td>
    <td>Required. The name of the OdbSubnet associated with the DbSystem for IP allocation. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/odbNetworks/&#123;odb_network&#125;/odbSubnets/&#123;odb_subnet&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>Optional. The properties of the DbSystem. (id: DbSystemProperties)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dbSystemsId"><code>dbSystemsId</code></a></td>
    <td></td>
    <td>Gets details of a single DbSystem.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all the DbSystems for the given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-dbSystemId"><code>dbSystemId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new DbSystem in a given project and location.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dbSystemsId"><code>dbSystemsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single DbSystem.</td>
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
<tr id="parameter-dbSystemsId">
    <td><CopyableCode code="dbSystemsId" /></td>
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
<tr id="parameter-dbSystemId">
    <td><CopyableCode code="dbSystemId" /></td>
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

Gets details of a single DbSystem.

```sql
SELECT
name,
createTime,
displayName,
entitlementId,
gcpOracleZone,
labels,
ociUrl,
odbNetwork,
odbSubnet,
properties
FROM google.oracledatabase.db_systems
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dbSystemsId = '{{ dbSystemsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists all the DbSystems for the given project and location.

```sql
SELECT
name,
createTime,
displayName,
entitlementId,
gcpOracleZone,
labels,
ociUrl,
odbNetwork,
odbSubnet,
properties
FROM google.oracledatabase.db_systems
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a new DbSystem in a given project and location.

```sql
INSERT INTO google.oracledatabase.db_systems (
data__displayName,
data__gcpOracleZone,
data__labels,
data__name,
data__odbNetwork,
data__odbSubnet,
data__properties,
projectsId,
locationsId,
dbSystemId,
requestId
)
SELECT 
'{{ displayName }}',
'{{ gcpOracleZone }}',
'{{ labels }}',
'{{ name }}',
'{{ odbNetwork }}',
'{{ odbSubnet }}',
'{{ properties }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ dbSystemId }}',
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
- name: db_systems
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the db_systems resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the db_systems resource.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. The display name for the System db. The name does not have to be unique within your project.
    - name: gcpOracleZone
      value: "{{ gcpOracleZone }}"
      description: |
        Optional. The GCP Oracle zone where Oracle DbSystem is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. The labels or tags associated with the DbSystem.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The name of the DbSystem resource in the following format: projects/{project}/locations/{region}/dbSystems/{db_system}
    - name: odbNetwork
      value: "{{ odbNetwork }}"
      description: |
        Optional. The name of the OdbNetwork associated with the DbSystem. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network} It is optional but if specified, this should match the parent ODBNetwork of the OdbSubnet.
    - name: odbSubnet
      value: "{{ odbSubnet }}"
      description: |
        Required. The name of the OdbSubnet associated with the DbSystem for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}
    - name: properties
      description: |
        Optional. The properties of the DbSystem.
      value:
        computeCount: {{ computeCount }}
        computeModel: "{{ computeModel }}"
        dataCollectionOptions:
          isDiagnosticsEventsEnabled: {{ isDiagnosticsEventsEnabled }}
          isIncidentLogsEnabled: {{ isIncidentLogsEnabled }}
        dataStorageSizeGb: {{ dataStorageSizeGb }}
        databaseEdition: "{{ databaseEdition }}"
        dbHome:
          database:
            adminPassword: "{{ adminPassword }}"
            adminPasswordSecretVersion: "{{ adminPasswordSecretVersion }}"
            characterSet: "{{ characterSet }}"
            createTime: "{{ createTime }}"
            databaseId: "{{ databaseId }}"
            dbHomeName: "{{ dbHomeName }}"
            dbName: "{{ dbName }}"
            dbUniqueName: "{{ dbUniqueName }}"
            gcpOracleZone: "{{ gcpOracleZone }}"
            name: "{{ name }}"
            ncharacterSet: "{{ ncharacterSet }}"
            ociUrl: "{{ ociUrl }}"
            opsInsightsStatus: "{{ opsInsightsStatus }}"
            pluggableDatabaseId: "{{ pluggableDatabaseId }}"
            pluggableDatabaseName: "{{ pluggableDatabaseName }}"
            properties:
              databaseManagementConfig:
                managementState: "{{ managementState }}"
                managementType: "{{ managementType }}"
              dbBackupConfig:
                autoBackupEnabled: {{ autoBackupEnabled }}
                autoFullBackupDay: "{{ autoFullBackupDay }}"
                autoFullBackupWindow: "{{ autoFullBackupWindow }}"
                autoIncrementalBackupWindow: "{{ autoIncrementalBackupWindow }}"
                backupDeletionPolicy: "{{ backupDeletionPolicy }}"
                backupDestinationDetails: "{{ backupDestinationDetails }}"
                retentionPeriodDays: {{ retentionPeriodDays }}
              dbVersion: "{{ dbVersion }}"
              state: "{{ state }}"
            tdeWalletPassword: "{{ tdeWalletPassword }}"
            tdeWalletPasswordSecretVersion: "{{ tdeWalletPasswordSecretVersion }}"
          dbVersion: "{{ dbVersion }}"
          displayName: "{{ displayName }}"
          isUnifiedAuditingEnabled: {{ isUnifiedAuditingEnabled }}
        dbSystemOptions:
          storageManagement: "{{ storageManagement }}"
        domain: "{{ domain }}"
        hostname: "{{ hostname }}"
        hostnamePrefix: "{{ hostnamePrefix }}"
        initialDataStorageSizeGb: {{ initialDataStorageSizeGb }}
        licenseModel: "{{ licenseModel }}"
        lifecycleState: "{{ lifecycleState }}"
        memorySizeGb: {{ memorySizeGb }}
        nodeCount: {{ nodeCount }}
        ocid: "{{ ocid }}"
        privateIp: "{{ privateIp }}"
        recoStorageSizeGb: {{ recoStorageSizeGb }}
        shape: "{{ shape }}"
        sshPublicKeys:
          - "{{ sshPublicKeys }}"
        timeZone:
          id: "{{ id }}"
          version: "{{ version }}"
    - name: dbSystemId
      value: "{{ dbSystemId }}"
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

Deletes a single DbSystem.

```sql
DELETE FROM google.oracledatabase.db_systems
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dbSystemsId = '{{ dbSystemsId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
