--- 
title: connection_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - connection_profiles
  - datastream
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.datastream.connection_profiles" /></td></tr>
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
    <td>Output only. Identifier. The resource's name.</td>
</tr>
<tr>
    <td><CopyableCode code="bigqueryProfile" /></td>
    <td><code>object</code></td>
    <td>Profile for connecting to a BigQuery destination. (id: BigQueryProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The create time of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="dataverseProfile" /></td>
    <td><code>object</code></td>
    <td>Profile for connecting to a Dataverse source. (id: DataverseProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Display name.</td>
</tr>
<tr>
    <td><CopyableCode code="forwardSshConnectivity" /></td>
    <td><code>object</code></td>
    <td>Forward SSH tunnel connectivity. (id: ForwardSshTunnelConnectivity)</td>
</tr>
<tr>
    <td><CopyableCode code="gcsProfile" /></td>
    <td><code>object</code></td>
    <td>Profile for connecting to a Cloud Storage destination. (id: GcsProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels.</td>
</tr>
<tr>
    <td><CopyableCode code="mongodbProfile" /></td>
    <td><code>object</code></td>
    <td>Profile for connecting to a MongoDB source. (id: MongodbProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="mysqlProfile" /></td>
    <td><code>object</code></td>
    <td>Profile for connecting to a MySQL source. (id: MysqlProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="oracleProfile" /></td>
    <td><code>object</code></td>
    <td>Profile for connecting to an Oracle source. (id: OracleProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="postgresqlProfile" /></td>
    <td><code>object</code></td>
    <td>Profile for connecting to a PostgreSQL source. (id: PostgresqlProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="privateConnectivity" /></td>
    <td><code>object</code></td>
    <td>Private connectivity. (id: PrivateConnectivity)</td>
</tr>
<tr>
    <td><CopyableCode code="salesforceMarketingCloudProfile" /></td>
    <td><code>object</code></td>
    <td>Profile for connecting to a Salesforce Marketing Cloud source. (id: SalesforceMarketingCloudProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="salesforceProfile" /></td>
    <td><code>object</code></td>
    <td>Profile for connecting to a Salesforce source. (id: SalesforceProfile)</td>
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
    <td><CopyableCode code="serviceNowProfile" /></td>
    <td><code>object</code></td>
    <td>Profile for connecting to a ServiceNow source. (id: ServiceNowProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="spannerProfile" /></td>
    <td><code>object</code></td>
    <td>Profile for connecting to a Spanner source. (id: SpannerProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="sqlServerProfile" /></td>
    <td><code>object</code></td>
    <td>Profile for connecting to a SQLServer source. (id: SqlServerProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="staticServiceIpConnectivity" /></td>
    <td><code>object</code></td>
    <td>Static Service IP connectivity. (id: StaticServiceIpConnectivity)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The update time of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="workdayProfile" /></td>
    <td><code>object</code></td>
    <td>Optional. Profile for connecting to a Workday source. (id: WorkdayProfile)</td>
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
    <td>Output only. Identifier. The resource's name.</td>
</tr>
<tr>
    <td><CopyableCode code="bigqueryProfile" /></td>
    <td><code>object</code></td>
    <td>Profile for connecting to a BigQuery destination. (id: BigQueryProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The create time of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="dataverseProfile" /></td>
    <td><code>object</code></td>
    <td>Profile for connecting to a Dataverse source. (id: DataverseProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Display name.</td>
</tr>
<tr>
    <td><CopyableCode code="forwardSshConnectivity" /></td>
    <td><code>object</code></td>
    <td>Forward SSH tunnel connectivity. (id: ForwardSshTunnelConnectivity)</td>
</tr>
<tr>
    <td><CopyableCode code="gcsProfile" /></td>
    <td><code>object</code></td>
    <td>Profile for connecting to a Cloud Storage destination. (id: GcsProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels.</td>
</tr>
<tr>
    <td><CopyableCode code="mongodbProfile" /></td>
    <td><code>object</code></td>
    <td>Profile for connecting to a MongoDB source. (id: MongodbProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="mysqlProfile" /></td>
    <td><code>object</code></td>
    <td>Profile for connecting to a MySQL source. (id: MysqlProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="oracleProfile" /></td>
    <td><code>object</code></td>
    <td>Profile for connecting to an Oracle source. (id: OracleProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="postgresqlProfile" /></td>
    <td><code>object</code></td>
    <td>Profile for connecting to a PostgreSQL source. (id: PostgresqlProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="privateConnectivity" /></td>
    <td><code>object</code></td>
    <td>Private connectivity. (id: PrivateConnectivity)</td>
</tr>
<tr>
    <td><CopyableCode code="salesforceMarketingCloudProfile" /></td>
    <td><code>object</code></td>
    <td>Profile for connecting to a Salesforce Marketing Cloud source. (id: SalesforceMarketingCloudProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="salesforceProfile" /></td>
    <td><code>object</code></td>
    <td>Profile for connecting to a Salesforce source. (id: SalesforceProfile)</td>
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
    <td><CopyableCode code="serviceNowProfile" /></td>
    <td><code>object</code></td>
    <td>Profile for connecting to a ServiceNow source. (id: ServiceNowProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="spannerProfile" /></td>
    <td><code>object</code></td>
    <td>Profile for connecting to a Spanner source. (id: SpannerProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="sqlServerProfile" /></td>
    <td><code>object</code></td>
    <td>Profile for connecting to a SQLServer source. (id: SqlServerProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="staticServiceIpConnectivity" /></td>
    <td><code>object</code></td>
    <td>Static Service IP connectivity. (id: StaticServiceIpConnectivity)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The update time of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="workdayProfile" /></td>
    <td><code>object</code></td>
    <td>Optional. Profile for connecting to a Workday source. (id: WorkdayProfile)</td>
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
    <td>Use this method to get details about a connection profile.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Use this method to list connection profiles created in a project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a>, <a href="#parameter-connectionProfileId"><code>connectionProfileId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Use this method to create a connection profile in a project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionProfilesId"><code>connectionProfilesId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Use this method to update the parameters of a connection profile.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionProfilesId"><code>connectionProfilesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Use this method to delete a connection profile.</td>
</tr>
<tr>
    <td><a href="#discover"><CopyableCode code="discover" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.</td>
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

Use this method to get details about a connection profile.

```sql
SELECT
name,
bigqueryProfile,
createTime,
dataverseProfile,
displayName,
forwardSshConnectivity,
gcsProfile,
labels,
mongodbProfile,
mysqlProfile,
oracleProfile,
postgresqlProfile,
privateConnectivity,
salesforceMarketingCloudProfile,
salesforceProfile,
satisfiesPzi,
satisfiesPzs,
serviceNowProfile,
spannerProfile,
sqlServerProfile,
staticServiceIpConnectivity,
updateTime,
workdayProfile
FROM google.datastream.connection_profiles
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND connectionProfilesId = '{{ connectionProfilesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Use this method to list connection profiles created in a project and location.

```sql
SELECT
name,
bigqueryProfile,
createTime,
dataverseProfile,
displayName,
forwardSshConnectivity,
gcsProfile,
labels,
mongodbProfile,
mysqlProfile,
oracleProfile,
postgresqlProfile,
privateConnectivity,
salesforceMarketingCloudProfile,
salesforceProfile,
satisfiesPzi,
satisfiesPzs,
serviceNowProfile,
spannerProfile,
sqlServerProfile,
staticServiceIpConnectivity,
updateTime,
workdayProfile
FROM google.datastream.connection_profiles
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
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Use this method to create a connection profile in a project and location.

```sql
INSERT INTO google.datastream.connection_profiles (
data__bigqueryProfile,
data__staticServiceIpConnectivity,
data__workdayProfile,
data__privateConnectivity,
data__sqlServerProfile,
data__mongodbProfile,
data__salesforceProfile,
data__oracleProfile,
data__forwardSshConnectivity,
data__spannerProfile,
data__mysqlProfile,
data__displayName,
data__postgresqlProfile,
data__serviceNowProfile,
data__gcsProfile,
data__labels,
data__salesforceMarketingCloudProfile,
data__dataverseProfile,
projectsId,
locationsId,
force,
connectionProfileId,
requestId,
validateOnly
)
SELECT 
'{{ bigqueryProfile }}',
'{{ staticServiceIpConnectivity }}',
'{{ workdayProfile }}',
'{{ privateConnectivity }}',
'{{ sqlServerProfile }}',
'{{ mongodbProfile }}',
'{{ salesforceProfile }}',
'{{ oracleProfile }}',
'{{ forwardSshConnectivity }}',
'{{ spannerProfile }}',
'{{ mysqlProfile }}',
'{{ displayName }}',
'{{ postgresqlProfile }}',
'{{ serviceNowProfile }}',
'{{ gcsProfile }}',
'{{ labels }}',
'{{ salesforceMarketingCloudProfile }}',
'{{ dataverseProfile }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ force }}',
'{{ connectionProfileId }}',
'{{ requestId }}',
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
    - name: bigqueryProfile
      value: "{{ bigqueryProfile }}"
      description: |
        Profile for connecting to a BigQuery destination.
    - name: staticServiceIpConnectivity
      value: "{{ staticServiceIpConnectivity }}"
      description: |
        Static Service IP connectivity.
    - name: workdayProfile
      description: |
        Optional. Profile for connecting to a Workday source.
      value:
        host: "{{ host }}"
        oauthRefreshTokenCredentials:
          oauthClientCredentials:
            clientId: "{{ clientId }}"
            clientSecret:
              rawValue: "{{ rawValue }}"
              secretVersion: "{{ secretVersion }}"
          refreshToken:
            rawValue: "{{ rawValue }}"
            secretVersion: "{{ secretVersion }}"
        tenant: "{{ tenant }}"
    - name: privateConnectivity
      description: |
        Private connectivity.
      value:
        privateConnection: "{{ privateConnection }}"
    - name: sqlServerProfile
      description: |
        Profile for connecting to a SQLServer source.
      value:
        secretManagerStoredPassword: "{{ secretManagerStoredPassword }}"
        username: "{{ username }}"
        port: {{ port }}
        password: "{{ password }}"
        database: "{{ database }}"
        hostname: "{{ hostname }}"
        sslConfig:
          encryptionNotEnforced: "{{ encryptionNotEnforced }}"
          basicEncryption: "{{ basicEncryption }}"
          encryptionAndServerValidation:
            caCertificate: "{{ caCertificate }}"
            serverCertificateHostname: "{{ serverCertificateHostname }}"
    - name: mongodbProfile
      description: |
        Profile for connecting to a MongoDB source.
      value:
        srvConnectionFormat: "{{ srvConnectionFormat }}"
        secretManagerStoredPassword: "{{ secretManagerStoredPassword }}"
        username: "{{ username }}"
        password: "{{ password }}"
        replicaSet: "{{ replicaSet }}"
        sslConfig:
          clientKeySet: {{ clientKeySet }}
          caCertificateSet: {{ caCertificateSet }}
          caCertificate: "{{ caCertificate }}"
          clientCertificateSet: {{ clientCertificateSet }}
          clientKey: "{{ clientKey }}"
          secretManagerStoredClientKey: "{{ secretManagerStoredClientKey }}"
          clientCertificate: "{{ clientCertificate }}"
        additionalOptions: "{{ additionalOptions }}"
        standardConnectionFormat:
          directConnection: {{ directConnection }}
        hostAddresses:
          - port: {{ port }}
            hostname: "{{ hostname }}"
    - name: salesforceProfile
      description: |
        Profile for connecting to a Salesforce source.
      value:
        userCredentials:
          username: "{{ username }}"
          secretManagerStoredPassword: "{{ secretManagerStoredPassword }}"
          secretManagerStoredSecurityToken: "{{ secretManagerStoredSecurityToken }}"
          securityToken: "{{ securityToken }}"
          password: "{{ password }}"
        oauth2ClientCredentials:
          clientSecret: "{{ clientSecret }}"
          clientId: "{{ clientId }}"
          secretManagerStoredClientSecret: "{{ secretManagerStoredClientSecret }}"
        domain: "{{ domain }}"
    - name: oracleProfile
      description: |
        Profile for connecting to an Oracle source.
      value:
        connectionAttributes: "{{ connectionAttributes }}"
        oracleAsmConfig:
          port: {{ port }}
          connectionAttributes: "{{ connectionAttributes }}"
          password: "{{ password }}"
          hostname: "{{ hostname }}"
          asmService: "{{ asmService }}"
          oracleSslConfig:
            caCertificate: "{{ caCertificate }}"
            serverCertificateDistinguishedName: "{{ serverCertificateDistinguishedName }}"
            caCertificateSet: {{ caCertificateSet }}
          secretManagerStoredPassword: "{{ secretManagerStoredPassword }}"
          username: "{{ username }}"
        hostname: "{{ hostname }}"
        databaseService: "{{ databaseService }}"
        port: {{ port }}
        password: "{{ password }}"
        oracleSslConfig:
          caCertificate: "{{ caCertificate }}"
          serverCertificateDistinguishedName: "{{ serverCertificateDistinguishedName }}"
          caCertificateSet: {{ caCertificateSet }}
        secretManagerStoredPassword: "{{ secretManagerStoredPassword }}"
        username: "{{ username }}"
    - name: forwardSshConnectivity
      description: |
        Forward SSH tunnel connectivity.
      value:
        hostname: "{{ hostname }}"
        privateKey: "{{ privateKey }}"
        password: "{{ password }}"
        port: {{ port }}
        username: "{{ username }}"
    - name: spannerProfile
      description: |
        Profile for connecting to a Spanner source.
      value:
        host: "{{ host }}"
        database: "{{ database }}"
    - name: mysqlProfile
      description: |
        Profile for connecting to a MySQL source.
      value:
        port: {{ port }}
        password: "{{ password }}"
        hostname: "{{ hostname }}"
        sslConfig:
          caCertificate: "{{ caCertificate }}"
          clientCertificateSet: {{ clientCertificateSet }}
          clientKey: "{{ clientKey }}"
          clientCertificate: "{{ clientCertificate }}"
          clientKeySet: {{ clientKeySet }}
          caCertificateSet: {{ caCertificateSet }}
        secretManagerStoredPassword: "{{ secretManagerStoredPassword }}"
        username: "{{ username }}"
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. Display name.
    - name: postgresqlProfile
      description: |
        Profile for connecting to a PostgreSQL source.
      value:
        secretManagerStoredPassword: "{{ secretManagerStoredPassword }}"
        username: "{{ username }}"
        password: "{{ password }}"
        database: "{{ database }}"
        hostname: "{{ hostname }}"
        sslConfig:
          serverAndClientVerification:
            caCertificate: "{{ caCertificate }}"
            serverCertificateHostname: "{{ serverCertificateHostname }}"
            clientCertificate: "{{ clientCertificate }}"
            clientKey: "{{ clientKey }}"
          serverVerification:
            caCertificate: "{{ caCertificate }}"
            serverCertificateHostname: "{{ serverCertificateHostname }}"
        port: {{ port }}
    - name: serviceNowProfile
      description: |
        Profile for connecting to a ServiceNow source.
      value:
        instance: "{{ instance }}"
        oauthClientCredentials:
          clientId: "{{ clientId }}"
          clientSecret:
            rawValue: "{{ rawValue }}"
            secretVersion: "{{ secretVersion }}"
        userPasswordCredentials:
          password:
            rawValue: "{{ rawValue }}"
            secretVersion: "{{ secretVersion }}"
          username: "{{ username }}"
    - name: gcsProfile
      description: |
        Profile for connecting to a Cloud Storage destination.
      value:
        bucket: "{{ bucket }}"
        rootPath: "{{ rootPath }}"
    - name: labels
      value: "{{ labels }}"
      description: |
        Labels.
    - name: salesforceMarketingCloudProfile
      description: |
        Profile for connecting to a Salesforce Marketing Cloud source.
      value:
        subdomain: "{{ subdomain }}"
        oauthClientCredentials:
          clientId: "{{ clientId }}"
          clientSecret:
            rawValue: "{{ rawValue }}"
            secretVersion: "{{ secretVersion }}"
    - name: dataverseProfile
      description: |
        Profile for connecting to a Dataverse source.
      value:
        tenantId: "{{ tenantId }}"
        environmentUrl: "{{ environmentUrl }}"
        oauthClientCredentials:
          clientId: "{{ clientId }}"
          clientSecret:
            rawValue: "{{ rawValue }}"
            secretVersion: "{{ secretVersion }}"
    - name: force
      value: {{ force }}
    - name: connectionProfileId
      value: "{{ connectionProfileId }}"
    - name: requestId
      value: "{{ requestId }}"
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

Use this method to update the parameters of a connection profile.

```sql
UPDATE google.datastream.connection_profiles
SET 
data__bigqueryProfile = '{{ bigqueryProfile }}',
data__staticServiceIpConnectivity = '{{ staticServiceIpConnectivity }}',
data__workdayProfile = '{{ workdayProfile }}',
data__privateConnectivity = '{{ privateConnectivity }}',
data__sqlServerProfile = '{{ sqlServerProfile }}',
data__mongodbProfile = '{{ mongodbProfile }}',
data__salesforceProfile = '{{ salesforceProfile }}',
data__oracleProfile = '{{ oracleProfile }}',
data__forwardSshConnectivity = '{{ forwardSshConnectivity }}',
data__spannerProfile = '{{ spannerProfile }}',
data__mysqlProfile = '{{ mysqlProfile }}',
data__displayName = '{{ displayName }}',
data__postgresqlProfile = '{{ postgresqlProfile }}',
data__serviceNowProfile = '{{ serviceNowProfile }}',
data__gcsProfile = '{{ gcsProfile }}',
data__labels = '{{ labels }}',
data__salesforceMarketingCloudProfile = '{{ salesforceMarketingCloudProfile }}',
data__dataverseProfile = '{{ dataverseProfile }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectionProfilesId = '{{ connectionProfilesId }}' --required
AND force = {{ force}}
AND validateOnly = {{ validateOnly}}
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

Use this method to delete a connection profile.

```sql
DELETE FROM google.datastream.connection_profiles
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectionProfilesId = '{{ connectionProfilesId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="discover"
    values={[
        { label: 'discover', value: 'discover' }
    ]}
>
<TabItem value="discover">

Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.

```sql
EXEC google.datastream.connection_profiles.discover 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"postgresqlRdbms": "{{ postgresqlRdbms }}", 
"spannerDatabase": "{{ spannerDatabase }}", 
"mysqlRdbms": "{{ mysqlRdbms }}", 
"salesforceOrg": "{{ salesforceOrg }}", 
"oracleRdbms": "{{ oracleRdbms }}", 
"sourceCatalog": "{{ sourceCatalog }}", 
"sqlServerRdbms": "{{ sqlServerRdbms }}", 
"connectionProfileName": "{{ connectionProfileName }}", 
"mongodbCluster": "{{ mongodbCluster }}", 
"connectionProfile": "{{ connectionProfile }}", 
"fullHierarchy": {{ fullHierarchy }}, 
"hierarchyDepth": {{ hierarchyDepth }}
}'
;
```
</TabItem>
</Tabs>
