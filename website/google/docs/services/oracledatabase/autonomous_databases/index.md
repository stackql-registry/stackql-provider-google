--- 
title: autonomous_databases
hide_title: false
hide_table_of_contents: false
keywords:
  - autonomous_databases
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

Creates, updates, deletes, gets or lists an <code>autonomous_databases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="autonomous_databases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.oracledatabase.autonomous_databases" /></td></tr>
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
    <td>Identifier. The name of the Autonomous Database resource in the following format: projects/&#123;project&#125;/locations/&#123;region&#125;/autonomousDatabases/&#123;autonomous_database&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="adminPassword" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The password for the default ADMIN user. Note: Only one of `admin_password_secret_version` or `admin_password` can be populated.</td>
</tr>
<tr>
    <td><CopyableCode code="adminPasswordSecretVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The resource name of a secret version in Secret Manager which contains the database admin user's password. Format: projects/&#123;project&#125;/secrets/&#123;secret&#125;/versions/&#123;version&#125;. Note: Only one of `admin_password_secret_version` or `admin_password` can be populated.</td>
</tr>
<tr>
    <td><CopyableCode code="cidr" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The subnet CIDR range for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The date and time that the Autonomous Database was created.</td>
</tr>
<tr>
    <td><CopyableCode code="database" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The name of the Autonomous Database. The database name must be unique in the project. The name must begin with a letter and can contain a maximum of 30 alphanumeric characters.</td>
</tr>
<tr>
    <td><CopyableCode code="disasterRecoverySupportedLocations" /></td>
    <td><code>array</code></td>
    <td>Output only. List of supported GCP region to clone the Autonomous Database for disaster recovery. Format: `project/&#123;project&#125;/locations/&#123;location&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The display name for the Autonomous Database. The name does not have to be unique within your project.</td>
</tr>
<tr>
    <td><CopyableCode code="entitlementId" /></td>
    <td><code>string</code></td>
    <td>Output only. The ID of the subscription entitlement associated with the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels or tags associated with the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The name of the VPC network used by the Autonomous Database in the following format: projects/&#123;project&#125;/global/networks/&#123;network&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="odbNetwork" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The name of the OdbNetwork associated with the Autonomous Database. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/odbNetworks/&#123;odb_network&#125; It is optional but if specified, this should match the parent ODBNetwork of the OdbSubnet.</td>
</tr>
<tr>
    <td><CopyableCode code="odbSubnet" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The name of the OdbSubnet associated with the Autonomous Database. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/odbNetworks/&#123;odb_network&#125;/odbSubnets/&#123;odb_subnet&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="peerAutonomousDatabases" /></td>
    <td><code>array</code></td>
    <td>Output only. The peer Autonomous Database names of the given Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>Optional. The properties of the Autonomous Database. (id: AutonomousDatabaseProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Immutable. The source Autonomous Database configuration for the standby Autonomous Database. The source Autonomous Database is configured while creating the Peer Autonomous Database and can't be updated after creation. (id: SourceConfig)</td>
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
    <td>Identifier. The name of the Autonomous Database resource in the following format: projects/&#123;project&#125;/locations/&#123;region&#125;/autonomousDatabases/&#123;autonomous_database&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="adminPassword" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The password for the default ADMIN user. Note: Only one of `admin_password_secret_version` or `admin_password` can be populated.</td>
</tr>
<tr>
    <td><CopyableCode code="adminPasswordSecretVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The resource name of a secret version in Secret Manager which contains the database admin user's password. Format: projects/&#123;project&#125;/secrets/&#123;secret&#125;/versions/&#123;version&#125;. Note: Only one of `admin_password_secret_version` or `admin_password` can be populated.</td>
</tr>
<tr>
    <td><CopyableCode code="cidr" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The subnet CIDR range for the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The date and time that the Autonomous Database was created.</td>
</tr>
<tr>
    <td><CopyableCode code="database" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The name of the Autonomous Database. The database name must be unique in the project. The name must begin with a letter and can contain a maximum of 30 alphanumeric characters.</td>
</tr>
<tr>
    <td><CopyableCode code="disasterRecoverySupportedLocations" /></td>
    <td><code>array</code></td>
    <td>Output only. List of supported GCP region to clone the Autonomous Database for disaster recovery. Format: `project/&#123;project&#125;/locations/&#123;location&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The display name for the Autonomous Database. The name does not have to be unique within your project.</td>
</tr>
<tr>
    <td><CopyableCode code="entitlementId" /></td>
    <td><code>string</code></td>
    <td>Output only. The ID of the subscription entitlement associated with the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels or tags associated with the Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The name of the VPC network used by the Autonomous Database in the following format: projects/&#123;project&#125;/global/networks/&#123;network&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="odbNetwork" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The name of the OdbNetwork associated with the Autonomous Database. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/odbNetworks/&#123;odb_network&#125; It is optional but if specified, this should match the parent ODBNetwork of the OdbSubnet.</td>
</tr>
<tr>
    <td><CopyableCode code="odbSubnet" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The name of the OdbSubnet associated with the Autonomous Database. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/odbNetworks/&#123;odb_network&#125;/odbSubnets/&#123;odb_subnet&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="peerAutonomousDatabases" /></td>
    <td><code>array</code></td>
    <td>Output only. The peer Autonomous Database names of the given Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>Optional. The properties of the Autonomous Database. (id: AutonomousDatabaseProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Immutable. The source Autonomous Database configuration for the standby Autonomous Database. The source Autonomous Database is configured while creating the Peer Autonomous Database and can't be updated after creation. (id: SourceConfig)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-autonomousDatabasesId"><code>autonomousDatabasesId</code></a></td>
    <td></td>
    <td>Gets the details of a single Autonomous Database.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the Autonomous Databases in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new Autonomous Database in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-autonomousDatabasesId"><code>autonomousDatabasesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single Autonomous Database.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-autonomousDatabasesId"><code>autonomousDatabasesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single Autonomous Database.</td>
</tr>
<tr>
    <td><a href="#failover"><CopyableCode code="failover" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-autonomousDatabasesId"><code>autonomousDatabasesId</code></a></td>
    <td></td>
    <td>Initiates a failover to target autonomous database from the associated primary database.</td>
</tr>
<tr>
    <td><a href="#generate_wallet"><CopyableCode code="generate_wallet" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-autonomousDatabasesId"><code>autonomousDatabasesId</code></a></td>
    <td></td>
    <td>Generates a wallet for an Autonomous Database.</td>
</tr>
<tr>
    <td><a href="#refresh"><CopyableCode code="refresh" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-autonomousDatabasesId"><code>autonomousDatabasesId</code></a></td>
    <td></td>
    <td>Refreshes the refreshable clone of an Autonomous Database.</td>
</tr>
<tr>
    <td><a href="#restart"><CopyableCode code="restart" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-autonomousDatabasesId"><code>autonomousDatabasesId</code></a></td>
    <td></td>
    <td>Restarts an Autonomous Database.</td>
</tr>
<tr>
    <td><a href="#restore"><CopyableCode code="restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-autonomousDatabasesId"><code>autonomousDatabasesId</code></a></td>
    <td></td>
    <td>Restores a single Autonomous Database.</td>
</tr>
<tr>
    <td><a href="#start"><CopyableCode code="start" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-autonomousDatabasesId"><code>autonomousDatabasesId</code></a></td>
    <td></td>
    <td>Starts an Autonomous Database.</td>
</tr>
<tr>
    <td><a href="#stop"><CopyableCode code="stop" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-autonomousDatabasesId"><code>autonomousDatabasesId</code></a></td>
    <td></td>
    <td>Stops an Autonomous Database.</td>
</tr>
<tr>
    <td><a href="#switchover"><CopyableCode code="switchover" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-autonomousDatabasesId"><code>autonomousDatabasesId</code></a></td>
    <td></td>
    <td>Initiates a switchover of specified autonomous database to the associated peer database.</td>
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
<tr id="parameter-autonomousDatabasesId">
    <td><CopyableCode code="autonomousDatabasesId" /></td>
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
<tr id="parameter-autonomousDatabaseId">
    <td><CopyableCode code="autonomousDatabaseId" /></td>
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

Gets the details of a single Autonomous Database.

```sql
SELECT
name,
adminPassword,
adminPasswordSecretVersion,
cidr,
createTime,
database,
disasterRecoverySupportedLocations,
displayName,
entitlementId,
labels,
network,
odbNetwork,
odbSubnet,
peerAutonomousDatabases,
properties,
sourceConfig
FROM google.oracledatabase.autonomous_databases
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND autonomousDatabasesId = '{{ autonomousDatabasesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the Autonomous Databases in a given project and location.

```sql
SELECT
name,
adminPassword,
adminPasswordSecretVersion,
cidr,
createTime,
database,
disasterRecoverySupportedLocations,
displayName,
entitlementId,
labels,
network,
odbNetwork,
odbSubnet,
peerAutonomousDatabases,
properties,
sourceConfig
FROM google.oracledatabase.autonomous_databases
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

Creates a new Autonomous Database in a given project and location.

```sql
INSERT INTO google.oracledatabase.autonomous_databases (
data__adminPassword,
data__adminPasswordSecretVersion,
data__cidr,
data__database,
data__displayName,
data__labels,
data__name,
data__network,
data__odbNetwork,
data__odbSubnet,
data__properties,
data__sourceConfig,
projectsId,
locationsId,
autonomousDatabaseId,
requestId
)
SELECT 
'{{ adminPassword }}',
'{{ adminPasswordSecretVersion }}',
'{{ cidr }}',
'{{ database }}',
'{{ displayName }}',
'{{ labels }}',
'{{ name }}',
'{{ network }}',
'{{ odbNetwork }}',
'{{ odbSubnet }}',
'{{ properties }}',
'{{ sourceConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ autonomousDatabaseId }}',
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
- name: autonomous_databases
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the autonomous_databases resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the autonomous_databases resource.
    - name: adminPassword
      value: "{{ adminPassword }}"
      description: |
        Optional. Immutable. The password for the default ADMIN user. Note: Only one of \`admin_password_secret_version\` or \`admin_password\` can be populated.
    - name: adminPasswordSecretVersion
      value: "{{ adminPasswordSecretVersion }}"
      description: |
        Optional. Immutable. The resource name of a secret version in Secret Manager which contains the database admin user's password. Format: projects/{project}/secrets/{secret}/versions/{version}. Note: Only one of \`admin_password_secret_version\` or \`admin_password\` can be populated.
    - name: cidr
      value: "{{ cidr }}"
      description: |
        Optional. Immutable. The subnet CIDR range for the Autonomous Database.
    - name: database
      value: "{{ database }}"
      description: |
        Optional. Immutable. The name of the Autonomous Database. The database name must be unique in the project. The name must begin with a letter and can contain a maximum of 30 alphanumeric characters.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Optional. Immutable. The display name for the Autonomous Database. The name does not have to be unique within your project.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. The labels or tags associated with the Autonomous Database.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The name of the Autonomous Database resource in the following format: projects/{project}/locations/{region}/autonomousDatabases/{autonomous_database}
    - name: network
      value: "{{ network }}"
      description: |
        Optional. Immutable. The name of the VPC network used by the Autonomous Database in the following format: projects/{project}/global/networks/{network}
    - name: odbNetwork
      value: "{{ odbNetwork }}"
      description: |
        Optional. Immutable. The name of the OdbNetwork associated with the Autonomous Database. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network} It is optional but if specified, this should match the parent ODBNetwork of the OdbSubnet.
    - name: odbSubnet
      value: "{{ odbSubnet }}"
      description: |
        Optional. Immutable. The name of the OdbSubnet associated with the Autonomous Database. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}
    - name: properties
      description: |
        Optional. The properties of the Autonomous Database.
      value:
        actualUsedDataStorageSizeTb: {{ actualUsedDataStorageSizeTb }}
        allocatedStorageSizeTb: {{ allocatedStorageSizeTb }}
        allowlistedIps:
          - "{{ allowlistedIps }}"
        apexDetails:
          apexVersion: "{{ apexVersion }}"
          ordsVersion: "{{ ordsVersion }}"
        arePrimaryAllowlistedIpsUsed: {{ arePrimaryAllowlistedIpsUsed }}
        autonomousContainerDatabaseId: "{{ autonomousContainerDatabaseId }}"
        availableUpgradeVersions:
          - "{{ availableUpgradeVersions }}"
        backupRetentionPeriodDays: {{ backupRetentionPeriodDays }}
        characterSet: "{{ characterSet }}"
        computeCount: {{ computeCount }}
        connectionStrings:
          allConnectionStrings:
            high: "{{ high }}"
            low: "{{ low }}"
            medium: "{{ medium }}"
          dedicated: "{{ dedicated }}"
          high: "{{ high }}"
          low: "{{ low }}"
          medium: "{{ medium }}"
          profiles:
            - consumerGroup: "{{ consumerGroup }}"
              displayName: "{{ displayName }}"
              hostFormat: "{{ hostFormat }}"
              isRegional: {{ isRegional }}
              protocol: "{{ protocol }}"
              sessionMode: "{{ sessionMode }}"
              syntaxFormat: "{{ syntaxFormat }}"
              tlsAuthentication: "{{ tlsAuthentication }}"
              value: "{{ value }}"
        connectionUrls:
          apexUri: "{{ apexUri }}"
          databaseTransformsUri: "{{ databaseTransformsUri }}"
          graphStudioUri: "{{ graphStudioUri }}"
          machineLearningNotebookUri: "{{ machineLearningNotebookUri }}"
          machineLearningUserManagementUri: "{{ machineLearningUserManagementUri }}"
          mongoDbUri: "{{ mongoDbUri }}"
          ordsUri: "{{ ordsUri }}"
          sqlDevWebUri: "{{ sqlDevWebUri }}"
        cpuCoreCount: {{ cpuCoreCount }}
        customerContacts:
          - email: "{{ email }}"
        dataGuardRoleChangedTime: "{{ dataGuardRoleChangedTime }}"
        dataSafeState: "{{ dataSafeState }}"
        dataStorageSizeGb: {{ dataStorageSizeGb }}
        dataStorageSizeTb: {{ dataStorageSizeTb }}
        databaseManagementState: "{{ databaseManagementState }}"
        dbEdition: "{{ dbEdition }}"
        dbVersion: "{{ dbVersion }}"
        dbWorkload: "{{ dbWorkload }}"
        disasterRecoveryRoleChangedTime: "{{ disasterRecoveryRoleChangedTime }}"
        encryptionKey:
          kmsKey: "{{ kmsKey }}"
          provider: "{{ provider }}"
        encryptionKeyHistoryEntries:
          - activationTime: "{{ activationTime }}"
            encryptionKey:
              kmsKey: "{{ kmsKey }}"
              provider: "{{ provider }}"
        failedDataRecoveryDuration: "{{ failedDataRecoveryDuration }}"
        isAutoScalingEnabled: {{ isAutoScalingEnabled }}
        isLocalDataGuardEnabled: {{ isLocalDataGuardEnabled }}
        isStorageAutoScalingEnabled: {{ isStorageAutoScalingEnabled }}
        licenseType: "{{ licenseType }}"
        lifecycleDetails: "{{ lifecycleDetails }}"
        localAdgAutoFailoverMaxDataLossLimit: {{ localAdgAutoFailoverMaxDataLossLimit }}
        localAdgAutoFailoverMaxDataLossLimitDuration: {{ localAdgAutoFailoverMaxDataLossLimitDuration }}
        localDataGuardEnabled: {{ localDataGuardEnabled }}
        localDisasterRecoveryType: "{{ localDisasterRecoveryType }}"
        localStandbyDb:
          dataGuardRoleChangedTime: "{{ dataGuardRoleChangedTime }}"
          disasterRecoveryRoleChangedTime: "{{ disasterRecoveryRoleChangedTime }}"
          lagTimeDuration: "{{ lagTimeDuration }}"
          lifecycleDetails: "{{ lifecycleDetails }}"
          state: "{{ state }}"
        maintenanceBeginTime: "{{ maintenanceBeginTime }}"
        maintenanceEndTime: "{{ maintenanceEndTime }}"
        maintenanceScheduleType: "{{ maintenanceScheduleType }}"
        memoryPerOracleComputeUnitGbs: {{ memoryPerOracleComputeUnitGbs }}
        memoryTableGbs: {{ memoryTableGbs }}
        mtlsConnectionRequired: {{ mtlsConnectionRequired }}
        nCharacterSet: "{{ nCharacterSet }}"
        nextLongTermBackupTime: "{{ nextLongTermBackupTime }}"
        ociUrl: "{{ ociUrl }}"
        ocid: "{{ ocid }}"
        openMode: "{{ openMode }}"
        operationsInsightsState: "{{ operationsInsightsState }}"
        peerDbIds:
          - "{{ peerDbIds }}"
        permissionLevel: "{{ permissionLevel }}"
        privateEndpoint: "{{ privateEndpoint }}"
        privateEndpointIp: "{{ privateEndpointIp }}"
        privateEndpointLabel: "{{ privateEndpointLabel }}"
        refreshableClone: {{ refreshableClone }}
        refreshableMode: "{{ refreshableMode }}"
        refreshableState: "{{ refreshableState }}"
        role: "{{ role }}"
        scheduledOperationDetails:
          - dayOfWeek: "{{ dayOfWeek }}"
            startTime:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
            stopTime:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
        secretId: "{{ secretId }}"
        serviceAgentEmail: "{{ serviceAgentEmail }}"
        sqlWebDeveloperUrl: "{{ sqlWebDeveloperUrl }}"
        state: "{{ state }}"
        supportedCloneRegions:
          - "{{ supportedCloneRegions }}"
        totalAutoBackupStorageSizeGbs: {{ totalAutoBackupStorageSizeGbs }}
        usedDataStorageSizeTbs: {{ usedDataStorageSizeTbs }}
        vaultId: "{{ vaultId }}"
    - name: sourceConfig
      description: |
        Optional. Immutable. The source Autonomous Database configuration for the standby Autonomous Database. The source Autonomous Database is configured while creating the Peer Autonomous Database and can't be updated after creation.
      value:
        autoRefreshFrequencySeconds: {{ autoRefreshFrequencySeconds }}
        autoRefreshPointLagSeconds: {{ autoRefreshPointLagSeconds }}
        autoRefreshStartTime: "{{ autoRefreshStartTime }}"
        automaticBackupsReplicationEnabled: {{ automaticBackupsReplicationEnabled }}
        autonomousDatabase: "{{ autonomousDatabase }}"
        autonomousDatabaseBackup: "{{ autonomousDatabaseBackup }}"
        backupTime: "{{ backupTime }}"
        cloneType: "{{ cloneType }}"
        refreshableMode: "{{ refreshableMode }}"
        sourceType: "{{ sourceType }}"
        useLatestAvailableBackup: {{ useLatestAvailableBackup }}
    - name: autonomousDatabaseId
      value: "{{ autonomousDatabaseId }}"
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

Updates the parameters of a single Autonomous Database.

```sql
UPDATE google.oracledatabase.autonomous_databases
SET 
data__adminPassword = '{{ adminPassword }}',
data__adminPasswordSecretVersion = '{{ adminPasswordSecretVersion }}',
data__cidr = '{{ cidr }}',
data__database = '{{ database }}',
data__displayName = '{{ displayName }}',
data__labels = '{{ labels }}',
data__name = '{{ name }}',
data__network = '{{ network }}',
data__odbNetwork = '{{ odbNetwork }}',
data__odbSubnet = '{{ odbSubnet }}',
data__properties = '{{ properties }}',
data__sourceConfig = '{{ sourceConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND autonomousDatabasesId = '{{ autonomousDatabasesId }}' --required
AND requestId = '{{ requestId}}'
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

Deletes a single Autonomous Database.

```sql
DELETE FROM google.oracledatabase.autonomous_databases
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND autonomousDatabasesId = '{{ autonomousDatabasesId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="failover"
    values={[
        { label: 'failover', value: 'failover' },
        { label: 'generate_wallet', value: 'generate_wallet' },
        { label: 'refresh', value: 'refresh' },
        { label: 'restart', value: 'restart' },
        { label: 'restore', value: 'restore' },
        { label: 'start', value: 'start' },
        { label: 'stop', value: 'stop' },
        { label: 'switchover', value: 'switchover' }
    ]}
>
<TabItem value="failover">

Initiates a failover to target autonomous database from the associated primary database.

```sql
EXEC google.oracledatabase.autonomous_databases.failover 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@autonomousDatabasesId='{{ autonomousDatabasesId }}' --required 
@@json=
'{
"peerAutonomousDatabase": "{{ peerAutonomousDatabase }}"
}'
;
```
</TabItem>
<TabItem value="generate_wallet">

Generates a wallet for an Autonomous Database.

```sql
EXEC google.oracledatabase.autonomous_databases.generate_wallet 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@autonomousDatabasesId='{{ autonomousDatabasesId }}' --required 
@@json=
'{
"isRegional": {{ isRegional }}, 
"password": "{{ password }}", 
"type": "{{ type }}"
}'
;
```
</TabItem>
<TabItem value="refresh">

Refreshes the refreshable clone of an Autonomous Database.

```sql
EXEC google.oracledatabase.autonomous_databases.refresh 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@autonomousDatabasesId='{{ autonomousDatabasesId }}' --required 
@@json=
'{
"refreshCutoffTime": "{{ refreshCutoffTime }}"
}'
;
```
</TabItem>
<TabItem value="restart">

Restarts an Autonomous Database.

```sql
EXEC google.oracledatabase.autonomous_databases.restart 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@autonomousDatabasesId='{{ autonomousDatabasesId }}' --required
;
```
</TabItem>
<TabItem value="restore">

Restores a single Autonomous Database.

```sql
EXEC google.oracledatabase.autonomous_databases.restore 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@autonomousDatabasesId='{{ autonomousDatabasesId }}' --required 
@@json=
'{
"restoreTime": "{{ restoreTime }}"
}'
;
```
</TabItem>
<TabItem value="start">

Starts an Autonomous Database.

```sql
EXEC google.oracledatabase.autonomous_databases.start 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@autonomousDatabasesId='{{ autonomousDatabasesId }}' --required
;
```
</TabItem>
<TabItem value="stop">

Stops an Autonomous Database.

```sql
EXEC google.oracledatabase.autonomous_databases.stop 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@autonomousDatabasesId='{{ autonomousDatabasesId }}' --required
;
```
</TabItem>
<TabItem value="switchover">

Initiates a switchover of specified autonomous database to the associated peer database.

```sql
EXEC google.oracledatabase.autonomous_databases.switchover 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@autonomousDatabasesId='{{ autonomousDatabasesId }}' --required 
@@json=
'{
"peerAutonomousDatabase": "{{ peerAutonomousDatabase }}"
}'
;
```
</TabItem>
</Tabs>
