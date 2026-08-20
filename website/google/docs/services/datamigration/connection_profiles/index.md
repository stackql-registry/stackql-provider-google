--- 
title: connection_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - connection_profiles
  - datamigration
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

Creates, updates, deletes, gets or lists a <code>connection_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connection_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datamigration.connection_profiles" /></td></tr>
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
    <td>The name of this connection profile resource in the form of projects/&#123;project&#125;/locations/&#123;location&#125;/connectionProfiles/&#123;connectionProfile&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="alloydb" /></td>
    <td><code>object</code></td>
    <td>An AlloyDB cluster connection profile. (id: AlloyDbConnectionProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="cloudsql" /></td>
    <td><code>object</code></td>
    <td>A CloudSQL database connection profile. (id: CloudSqlConnectionProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The connection profile display name.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. The error details in case of state FAILED. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `&#123; "name": "wrench", "mass": "1.3kg", "count": "3" &#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="mysql" /></td>
    <td><code>object</code></td>
    <td>A MySQL database connection profile. (id: MySqlConnectionProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="oracle" /></td>
    <td><code>object</code></td>
    <td>An Oracle database connection profile. (id: OracleConnectionProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="postgresql" /></td>
    <td><code>object</code></td>
    <td>A PostgreSQL database connection profile. (id: PostgreSqlConnectionProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>The database provider. (DATABASE_PROVIDER_UNSPECIFIED, CLOUDSQL, RDS, AURORA, ALLOYDB, AZURE_DATABASE)</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>Optional. The connection profile role. (ROLE_UNSPECIFIED, SOURCE, DESTINATION)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="sqlserver" /></td>
    <td><code>object</code></td>
    <td>Connection profile for a SQL Server data source. (id: SqlServerConnectionProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current connection profile state (e.g. DRAFT, READY, or FAILED). (STATE_UNSPECIFIED, DRAFT, CREATING, READY, UPDATING, DELETING, DELETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was last updated. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".</td>
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
    <td>The name of this connection profile resource in the form of projects/&#123;project&#125;/locations/&#123;location&#125;/connectionProfiles/&#123;connectionProfile&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="alloydb" /></td>
    <td><code>object</code></td>
    <td>An AlloyDB cluster connection profile. (id: AlloyDbConnectionProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="cloudsql" /></td>
    <td><code>object</code></td>
    <td>A CloudSQL database connection profile. (id: CloudSqlConnectionProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The connection profile display name.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. The error details in case of state FAILED. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `&#123; "name": "wrench", "mass": "1.3kg", "count": "3" &#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="mysql" /></td>
    <td><code>object</code></td>
    <td>A MySQL database connection profile. (id: MySqlConnectionProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="oracle" /></td>
    <td><code>object</code></td>
    <td>An Oracle database connection profile. (id: OracleConnectionProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="postgresql" /></td>
    <td><code>object</code></td>
    <td>A PostgreSQL database connection profile. (id: PostgreSqlConnectionProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>The database provider. (DATABASE_PROVIDER_UNSPECIFIED, CLOUDSQL, RDS, AURORA, ALLOYDB, AZURE_DATABASE)</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>Optional. The connection profile role. (ROLE_UNSPECIFIED, SOURCE, DESTINATION)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="sqlserver" /></td>
    <td><code>object</code></td>
    <td>Connection profile for a SQL Server data source. (id: SqlServerConnectionProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current connection profile state (e.g. DRAFT, READY, or FAILED). (STATE_UNSPECIFIED, DRAFT, CREATING, READY, UPDATING, DELETING, DELETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was last updated. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionProfilesId"><code>connectionProfilesId</code></a></td>
    <td></td>
    <td>Gets details of a single connection profile.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Retrieves a list of all connection profiles in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-connectionProfileId"><code>connectionProfileId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-skipValidation"><code>skipValidation</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a new connection profile in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionProfilesId"><code>connectionProfilesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-skipValidation"><code>skipValidation</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Update the configuration of a single connection profile.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionProfilesId"><code>connectionProfilesId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single Database Migration Service connection profile. A connection profile can only be deleted if it is not in use by any active migration jobs.</td>
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
<tr id="parameter-connectionProfilesId">
    <td><CopyableCode code="connectionProfilesId" /></td>
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
<tr id="parameter-connectionProfileId">
    <td><CopyableCode code="connectionProfileId" /></td>
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
<tr id="parameter-skipValidation">
    <td><CopyableCode code="skipValidation" /></td>
    <td><code>boolean</code></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets details of a single connection profile.

```sql
SELECT
name,
alloydb,
cloudsql,
createTime,
displayName,
error,
labels,
mysql,
oracle,
postgresql,
provider,
role,
satisfiesPzi,
satisfiesPzs,
sqlserver,
state,
updateTime
FROM google.datamigration.connection_profiles
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND connectionProfilesId = '{{ connectionProfilesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Retrieves a list of all connection profiles in a given project and location.

```sql
SELECT
name,
alloydb,
cloudsql,
createTime,
displayName,
error,
labels,
mysql,
oracle,
postgresql,
provider,
role,
satisfiesPzi,
satisfiesPzs,
sqlserver,
state,
updateTime
FROM google.datamigration.connection_profiles
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

Creates a new connection profile in a given project and location.

```sql
INSERT INTO google.datamigration.connection_profiles (
data__alloydb,
data__cloudsql,
data__displayName,
data__labels,
data__mysql,
data__name,
data__oracle,
data__postgresql,
data__provider,
data__role,
data__sqlserver,
data__state,
projectsId,
locationsId,
connectionProfileId,
requestId,
skipValidation,
validateOnly
)
SELECT 
'{{ alloydb }}',
'{{ cloudsql }}',
'{{ displayName }}',
'{{ labels }}',
'{{ mysql }}',
'{{ name }}',
'{{ oracle }}',
'{{ postgresql }}',
'{{ provider }}',
'{{ role }}',
'{{ sqlserver }}',
'{{ state }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ connectionProfileId }}',
'{{ requestId }}',
'{{ skipValidation }}',
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
- name: connection_profiles
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the connection_profiles resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the connection_profiles resource.
    - name: alloydb
      description: |
        An AlloyDB cluster connection profile.
      value:
        clusterId: "{{ clusterId }}"
        settings:
          databaseVersion: "{{ databaseVersion }}"
          encryptionConfig:
            kmsKeyName: "{{ kmsKeyName }}"
          initialUser:
            password: "{{ password }}"
            passwordSet: {{ passwordSet }}
            user: "{{ user }}"
          labels: "{{ labels }}"
          primaryInstanceSettings:
            databaseFlags: "{{ databaseFlags }}"
            id: "{{ id }}"
            instanceNetworkConfig:
              authorizedExternalNetworks:
                - cidrRange: "{{ cidrRange }}"
              enableOutboundPublicIp: {{ enableOutboundPublicIp }}
              enablePublicIp: {{ enablePublicIp }}
            labels: "{{ labels }}"
            machineConfig:
              cpuCount: {{ cpuCount }}
              machineType: "{{ machineType }}"
            outboundPublicIpAddresses:
              - "{{ outboundPublicIpAddresses }}"
            privateIp: "{{ privateIp }}"
          vpcNetwork: "{{ vpcNetwork }}"
    - name: cloudsql
      description: |
        A CloudSQL database connection profile.
      value:
        additionalPublicIp: "{{ additionalPublicIp }}"
        cloudSqlId: "{{ cloudSqlId }}"
        privateIp: "{{ privateIp }}"
        publicIp: "{{ publicIp }}"
        settings:
          activationPolicy: "{{ activationPolicy }}"
          autoStorageIncrease: {{ autoStorageIncrease }}
          availabilityType: "{{ availabilityType }}"
          cmekKeyName: "{{ cmekKeyName }}"
          collation: "{{ collation }}"
          dataCacheConfig:
            dataCacheEnabled: {{ dataCacheEnabled }}
          dataDiskProvisionedIops: "{{ dataDiskProvisionedIops }}"
          dataDiskProvisionedThroughput: "{{ dataDiskProvisionedThroughput }}"
          dataDiskSizeGb: "{{ dataDiskSizeGb }}"
          dataDiskType: "{{ dataDiskType }}"
          databaseFlags: "{{ databaseFlags }}"
          databaseVersion: "{{ databaseVersion }}"
          databaseVersionName: "{{ databaseVersionName }}"
          edition: "{{ edition }}"
          ipConfig:
            allocatedIpRange: "{{ allocatedIpRange }}"
            authorizedNetworks:
              - expireTime: "{{ expireTime }}"
                label: "{{ label }}"
                ttl: "{{ ttl }}"
                value: "{{ value }}"
            enableIpv4: {{ enableIpv4 }}
            privateNetwork: "{{ privateNetwork }}"
            requireSsl: {{ requireSsl }}
          rootPassword: "{{ rootPassword }}"
          rootPasswordSet: {{ rootPasswordSet }}
          secondaryZone: "{{ secondaryZone }}"
          sourceId: "{{ sourceId }}"
          storageAutoResizeLimit: "{{ storageAutoResizeLimit }}"
          tier: "{{ tier }}"
          userLabels: "{{ userLabels }}"
          zone: "{{ zone }}"
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The connection profile display name.
    - name: labels
      value: "{{ labels }}"
      description: |
        The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: \`{ "name": "wrench", "mass": "1.3kg", "count": "3" }\`.
    - name: mysql
      description: |
        A MySQL database connection profile.
      value:
        cloudSqlId: "{{ cloudSqlId }}"
        host: "{{ host }}"
        password: "{{ password }}"
        passwordSet: {{ passwordSet }}
        port: {{ port }}
        ssl:
          caCertificate: "{{ caCertificate }}"
          clientCertificate: "{{ clientCertificate }}"
          clientKey: "{{ clientKey }}"
          sslFlags: "{{ sslFlags }}"
          type: "{{ type }}"
        username: "{{ username }}"
    - name: name
      value: "{{ name }}"
      description: |
        The name of this connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{connectionProfile}.
    - name: oracle
      description: |
        An Oracle database connection profile.
      value:
        databaseService: "{{ databaseService }}"
        forwardSshConnectivity:
          hostname: "{{ hostname }}"
          password: "{{ password }}"
          port: {{ port }}
          privateKey: "{{ privateKey }}"
          username: "{{ username }}"
        host: "{{ host }}"
        oracleAsmConfig:
          asmService: "{{ asmService }}"
          hostname: "{{ hostname }}"
          password: "{{ password }}"
          passwordSet: {{ passwordSet }}
          port: {{ port }}
          ssl:
            caCertificate: "{{ caCertificate }}"
            clientCertificate: "{{ clientCertificate }}"
            clientKey: "{{ clientKey }}"
            sslFlags: "{{ sslFlags }}"
            type: "{{ type }}"
          username: "{{ username }}"
        password: "{{ password }}"
        passwordSet: {{ passwordSet }}
        port: {{ port }}
        privateConnectivity:
          privateConnection: "{{ privateConnection }}"
        ssl:
          caCertificate: "{{ caCertificate }}"
          clientCertificate: "{{ clientCertificate }}"
          clientKey: "{{ clientKey }}"
          sslFlags: "{{ sslFlags }}"
          type: "{{ type }}"
        staticServiceIpConnectivity: "{{ staticServiceIpConnectivity }}"
        username: "{{ username }}"
    - name: postgresql
      description: |
        A PostgreSQL database connection profile.
      value:
        alloydbClusterId: "{{ alloydbClusterId }}"
        cloudSqlId: "{{ cloudSqlId }}"
        database: "{{ database }}"
        enableIamAuthentication: {{ enableIamAuthentication }}
        forwardSshConnectivity:
          hostname: "{{ hostname }}"
          password: "{{ password }}"
          port: {{ port }}
          privateKey: "{{ privateKey }}"
          username: "{{ username }}"
        host: "{{ host }}"
        networkArchitecture: "{{ networkArchitecture }}"
        password: "{{ password }}"
        passwordSet: {{ passwordSet }}
        port: {{ port }}
        privateConnectivity:
          privateConnection: "{{ privateConnection }}"
        privateServiceConnectConnectivity:
          serviceAttachment: "{{ serviceAttachment }}"
        ssl:
          caCertificate: "{{ caCertificate }}"
          clientCertificate: "{{ clientCertificate }}"
          clientKey: "{{ clientKey }}"
          sslFlags: "{{ sslFlags }}"
          type: "{{ type }}"
        staticIpConnectivity: "{{ staticIpConnectivity }}"
        username: "{{ username }}"
    - name: provider
      value: "{{ provider }}"
      description: |
        The database provider.
      valid_values: ['DATABASE_PROVIDER_UNSPECIFIED', 'CLOUDSQL', 'RDS', 'AURORA', 'ALLOYDB', 'AZURE_DATABASE']
    - name: role
      value: "{{ role }}"
      description: |
        Optional. The connection profile role.
      valid_values: ['ROLE_UNSPECIFIED', 'SOURCE', 'DESTINATION']
    - name: sqlserver
      description: |
        Connection profile for a SQL Server data source.
      value:
        backups:
          gcsBucket: "{{ gcsBucket }}"
          gcsPrefix: "{{ gcsPrefix }}"
        cloudSqlId: "{{ cloudSqlId }}"
        cloudSqlProjectId: "{{ cloudSqlProjectId }}"
        database: "{{ database }}"
        dbmPort: {{ dbmPort }}
        forwardSshConnectivity:
          hostname: "{{ hostname }}"
          password: "{{ password }}"
          port: {{ port }}
          privateKey: "{{ privateKey }}"
          username: "{{ username }}"
        host: "{{ host }}"
        password: "{{ password }}"
        passwordSet: {{ passwordSet }}
        port: {{ port }}
        privateConnectivity:
          privateConnection: "{{ privateConnection }}"
        privateServiceConnectConnectivity:
          serviceAttachment: "{{ serviceAttachment }}"
        ssl:
          caCertificate: "{{ caCertificate }}"
          clientCertificate: "{{ clientCertificate }}"
          clientKey: "{{ clientKey }}"
          sslFlags: "{{ sslFlags }}"
          type: "{{ type }}"
        staticIpConnectivity: "{{ staticIpConnectivity }}"
        username: "{{ username }}"
    - name: state
      value: "{{ state }}"
      description: |
        The current connection profile state (e.g. DRAFT, READY, or FAILED).
      valid_values: ['STATE_UNSPECIFIED', 'DRAFT', 'CREATING', 'READY', 'UPDATING', 'DELETING', 'DELETED', 'FAILED']
    - name: connectionProfileId
      value: "{{ connectionProfileId }}"
    - name: requestId
      value: "{{ requestId }}"
    - name: skipValidation
      value: {{ skipValidation }}
    - name: validateOnly
      value: {{ validateOnly }}
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

Update the configuration of a single connection profile.

```sql
UPDATE google.datamigration.connection_profiles
SET 
data__alloydb = '{{ alloydb }}',
data__cloudsql = '{{ cloudsql }}',
data__displayName = '{{ displayName }}',
data__labels = '{{ labels }}',
data__mysql = '{{ mysql }}',
data__name = '{{ name }}',
data__oracle = '{{ oracle }}',
data__postgresql = '{{ postgresql }}',
data__provider = '{{ provider }}',
data__role = '{{ role }}',
data__sqlserver = '{{ sqlserver }}',
data__state = '{{ state }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectionProfilesId = '{{ connectionProfilesId }}' --required
AND requestId = '{{ requestId}}'
AND skipValidation = {{ skipValidation}}
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
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes a single Database Migration Service connection profile. A connection profile can only be deleted if it is not in use by any active migration jobs.

```sql
DELETE FROM google.datamigration.connection_profiles
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectionProfilesId = '{{ connectionProfilesId }}' --required
AND force = '{{ force }}'
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
