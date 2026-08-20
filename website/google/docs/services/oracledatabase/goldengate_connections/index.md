--- 
title: goldengate_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - goldengate_connections
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

Creates, updates, deletes, gets or lists a <code>goldengate_connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="goldengate_connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.oracledatabase.goldengate_connections" /></td></tr>
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
    <td>Identifier. The name of the GoldengateConnection resource in the following format: projects/&#123;project&#125;/locations/&#123;region&#125;/goldengateConnections/&#123;goldengate_connection&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The date and time that the GoldengateConnection was created.</td>
</tr>
<tr>
    <td><CopyableCode code="entitlementId" /></td>
    <td><code>string</code></td>
    <td>Output only. The ID of the subscription entitlement associated with the GoldengateConnection.</td>
</tr>
<tr>
    <td><CopyableCode code="gcpOracleZone" /></td>
    <td><code>string</code></td>
    <td>Optional. The GCP Oracle zone where Oracle GoldengateConnection is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels or tags associated with the GoldengateConnection.</td>
</tr>
<tr>
    <td><CopyableCode code="ociUrl" /></td>
    <td><code>string</code></td>
    <td>Output only. HTTPS link to OCI resources exposed to Customer via UI Interface.</td>
</tr>
<tr>
    <td><CopyableCode code="odbNetwork" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the OdbNetwork associated with the GoldengateConnection. The format is projects/&#123;project&#125;/locations/&#123;location&#125;/odbNetworks/&#123;odb_network&#125;. It is optional but if specified, this should match the parent ODBNetwork of the OdbSubnet.</td>
</tr>
<tr>
    <td><CopyableCode code="odbSubnet" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the OdbSubnet associated with the GoldengateConnection for IP allocation. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/odbNetworks/&#123;odb_network&#125;/odbSubnets/&#123;odb_subnet&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>Required. The properties of the GoldengateConnection. (id: GoldengateConnectionProperties)</td>
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
    <td>Identifier. The name of the GoldengateConnection resource in the following format: projects/&#123;project&#125;/locations/&#123;region&#125;/goldengateConnections/&#123;goldengate_connection&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The date and time that the GoldengateConnection was created.</td>
</tr>
<tr>
    <td><CopyableCode code="entitlementId" /></td>
    <td><code>string</code></td>
    <td>Output only. The ID of the subscription entitlement associated with the GoldengateConnection.</td>
</tr>
<tr>
    <td><CopyableCode code="gcpOracleZone" /></td>
    <td><code>string</code></td>
    <td>Optional. The GCP Oracle zone where Oracle GoldengateConnection is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels or tags associated with the GoldengateConnection.</td>
</tr>
<tr>
    <td><CopyableCode code="ociUrl" /></td>
    <td><code>string</code></td>
    <td>Output only. HTTPS link to OCI resources exposed to Customer via UI Interface.</td>
</tr>
<tr>
    <td><CopyableCode code="odbNetwork" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the OdbNetwork associated with the GoldengateConnection. The format is projects/&#123;project&#125;/locations/&#123;location&#125;/odbNetworks/&#123;odb_network&#125;. It is optional but if specified, this should match the parent ODBNetwork of the OdbSubnet.</td>
</tr>
<tr>
    <td><CopyableCode code="odbSubnet" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the OdbSubnet associated with the GoldengateConnection for IP allocation. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/odbNetworks/&#123;odb_network&#125;/odbSubnets/&#123;odb_subnet&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>Required. The properties of the GoldengateConnection. (id: GoldengateConnectionProperties)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-goldengateConnectionsId"><code>goldengateConnectionsId</code></a></td>
    <td></td>
    <td>Gets details of a single GoldengateConnection.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all the GoldengateConnections for the given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-goldengateConnectionId"><code>goldengateConnectionId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new GoldengateConnection in a given project and location.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-goldengateConnectionsId"><code>goldengateConnectionsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single GoldengateConnection.</td>
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
<tr id="parameter-goldengateConnectionsId">
    <td><CopyableCode code="goldengateConnectionsId" /></td>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-goldengateConnectionId">
    <td><CopyableCode code="goldengateConnectionId" /></td>
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

Gets details of a single GoldengateConnection.

```sql
SELECT
name,
createTime,
entitlementId,
gcpOracleZone,
labels,
ociUrl,
odbNetwork,
odbSubnet,
properties
FROM google.oracledatabase.goldengate_connections
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND goldengateConnectionsId = '{{ goldengateConnectionsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists all the GoldengateConnections for the given project and location.

```sql
SELECT
name,
createTime,
entitlementId,
gcpOracleZone,
labels,
ociUrl,
odbNetwork,
odbSubnet,
properties
FROM google.oracledatabase.goldengate_connections
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

Creates a new GoldengateConnection in a given project and location.

```sql
INSERT INTO google.oracledatabase.goldengate_connections (
data__gcpOracleZone,
data__labels,
data__name,
data__odbNetwork,
data__odbSubnet,
data__properties,
projectsId,
locationsId,
goldengateConnectionId,
requestId
)
SELECT 
'{{ gcpOracleZone }}',
'{{ labels }}',
'{{ name }}',
'{{ odbNetwork }}',
'{{ odbSubnet }}',
'{{ properties }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ goldengateConnectionId }}',
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
- name: goldengate_connections
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the goldengate_connections resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the goldengate_connections resource.
    - name: gcpOracleZone
      value: "{{ gcpOracleZone }}"
      description: |
        Optional. The GCP Oracle zone where Oracle GoldengateConnection is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. The labels or tags associated with the GoldengateConnection.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The name of the GoldengateConnection resource in the following format: projects/{project}/locations/{region}/goldengateConnections/{goldengate_connection}
    - name: odbNetwork
      value: "{{ odbNetwork }}"
      description: |
        Optional. The name of the OdbNetwork associated with the GoldengateConnection. The format is projects/{project}/locations/{location}/odbNetworks/{odb_network}. It is optional but if specified, this should match the parent ODBNetwork of the OdbSubnet.
    - name: odbSubnet
      value: "{{ odbSubnet }}"
      description: |
        Optional. The name of the OdbSubnet associated with the GoldengateConnection for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}
    - name: properties
      description: |
        Required. The properties of the GoldengateConnection.
      value:
        amazonKinesisConnectionProperties:
          accessKeyId: "{{ accessKeyId }}"
          awsRegion: "{{ awsRegion }}"
          endpoint: "{{ endpoint }}"
          secretAccessKeySecret: "{{ secretAccessKeySecret }}"
          technologyType: "{{ technologyType }}"
        amazonRedshiftConnectionProperties:
          connectionUrl: "{{ connectionUrl }}"
          password: "{{ password }}"
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          technologyType: "{{ technologyType }}"
          username: "{{ username }}"
        amazonS3ConnectionProperties:
          accessKeyId: "{{ accessKeyId }}"
          endpoint: "{{ endpoint }}"
          region: "{{ region }}"
          secretAccessKeySecret: "{{ secretAccessKeySecret }}"
          technologyType: "{{ technologyType }}"
        azureDataLakeStorageConnectionProperties:
          account: "{{ account }}"
          accountKeySecret: "{{ accountKeySecret }}"
          authenticationType: "{{ authenticationType }}"
          azureAuthorityHost: "{{ azureAuthorityHost }}"
          azureTenantId: "{{ azureTenantId }}"
          clientId: "{{ clientId }}"
          clientSecret: "{{ clientSecret }}"
          endpoint: "{{ endpoint }}"
          sasTokenSecret: "{{ sasTokenSecret }}"
          technologyType: "{{ technologyType }}"
        azureSynapseAnalyticsConnectionProperties:
          connectionString: "{{ connectionString }}"
          password: "{{ password }}"
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          technologyType: "{{ technologyType }}"
          username: "{{ username }}"
        connectionType: "{{ connectionType }}"
        databricksConnectionProperties:
          authenticationType: "{{ authenticationType }}"
          clientId: "{{ clientId }}"
          clientSecret: "{{ clientSecret }}"
          connectionUrl: "{{ connectionUrl }}"
          password: "{{ password }}"
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          storageCredential: "{{ storageCredential }}"
          technologyType: "{{ technologyType }}"
        db2ConnectionProperties:
          additionalAttributes:
            - key: "{{ key }}"
              value: "{{ value }}"
          database: "{{ database }}"
          host: "{{ host }}"
          password: "{{ password }}"
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          port: {{ port }}
          securityProtocol: "{{ securityProtocol }}"
          sslClientKeystashFile: "{{ sslClientKeystashFile }}"
          sslClientKeystoredbFile: "{{ sslClientKeystoredbFile }}"
          sslServerCertificateFile: "{{ sslServerCertificateFile }}"
          technologyType: "{{ technologyType }}"
          username: "{{ username }}"
        description: "{{ description }}"
        displayName: "{{ displayName }}"
        elasticsearchConnectionProperties:
          authenticationType: "{{ authenticationType }}"
          fingerprint: "{{ fingerprint }}"
          password: "{{ password }}"
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          securityProtocol: "{{ securityProtocol }}"
          servers: "{{ servers }}"
          technologyType: "{{ technologyType }}"
          username: "{{ username }}"
        genericConnectionProperties:
          host: "{{ host }}"
          technologyType: "{{ technologyType }}"
        goldengateConnectionProperties:
          goldengateDeploymentId: "{{ goldengateDeploymentId }}"
          host: "{{ host }}"
          password: "{{ password }}"
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          port: {{ port }}
          technologyType: "{{ technologyType }}"
          username: "{{ username }}"
        googleBigQueryConnectionProperties:
          serviceAccountKeyFile: "{{ serviceAccountKeyFile }}"
          technologyType: "{{ technologyType }}"
        googleCloudStorageConnectionProperties:
          serviceAccountKeyFile: "{{ serviceAccountKeyFile }}"
          technologyType: "{{ technologyType }}"
        googlePubsubConnectionProperties:
          serviceAccountKeyFile: "{{ serviceAccountKeyFile }}"
          technologyType: "{{ technologyType }}"
        hdfsConnectionProperties:
          coreSiteXml: "{{ coreSiteXml }}"
          technologyType: "{{ technologyType }}"
        icebergConnectionProperties:
          catalog:
            catalogType: "{{ catalogType }}"
            glueIcebergCatalog:
              glueId: "{{ glueId }}"
            nessieIcebergCatalog:
              branch: "{{ branch }}"
              uri: "{{ uri }}"
            polarisIcebergCatalog:
              clientId: "{{ clientId }}"
              clientSecret: "{{ clientSecret }}"
              polarisCatalog: "{{ polarisCatalog }}"
              principalRole: "{{ principalRole }}"
              uri: "{{ uri }}"
            restIcebergCatalog:
              properties: "{{ properties }}"
              uri: "{{ uri }}"
          storage:
            amazonS3IcebergStorage:
              accessKeyId: "{{ accessKeyId }}"
              bucket: "{{ bucket }}"
              endpoint: "{{ endpoint }}"
              region: "{{ region }}"
              schemeType: "{{ schemeType }}"
              secretAccessKeySecret: "{{ secretAccessKeySecret }}"
            azureDataLakeStorageIcebergStorage:
              accountKeySecret: "{{ accountKeySecret }}"
              azureAccount: "{{ azureAccount }}"
              container: "{{ container }}"
              endpoint: "{{ endpoint }}"
            googleCloudStorageIcebergStorage:
              bucket: "{{ bucket }}"
              projectId: "{{ projectId }}"
              serviceAccountKeyFile: "{{ serviceAccountKeyFile }}"
            storageType: "{{ storageType }}"
          technologyType: "{{ technologyType }}"
        ingressIpAddresses:
          - "{{ ingressIpAddresses }}"
        javaMessageServiceConnectionProperties:
          authenticationType: "{{ authenticationType }}"
          connectionFactory: "{{ connectionFactory }}"
          connectionUrl: "{{ connectionUrl }}"
          jndiConnectionFactory: "{{ jndiConnectionFactory }}"
          jndiInitialContextFactory: "{{ jndiInitialContextFactory }}"
          jndiProviderUrl: "{{ jndiProviderUrl }}"
          jndiSecurityCredentialsSecret: "{{ jndiSecurityCredentialsSecret }}"
          jndiSecurityPrincipal: "{{ jndiSecurityPrincipal }}"
          keyStoreFile: "{{ keyStoreFile }}"
          keyStorePassword: "{{ keyStorePassword }}"
          keyStorePasswordSecretVersion: "{{ keyStorePasswordSecretVersion }}"
          password: "{{ password }}"
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          securityProtocol: "{{ securityProtocol }}"
          sslKeyPassword: "{{ sslKeyPassword }}"
          sslKeyPasswordSecretVersion: "{{ sslKeyPasswordSecretVersion }}"
          technologyType: "{{ technologyType }}"
          trustStoreFile: "{{ trustStoreFile }}"
          trustStorePassword: "{{ trustStorePassword }}"
          trustStorePasswordSecretVersion: "{{ trustStorePasswordSecretVersion }}"
          useJndi: {{ useJndi }}
          username: "{{ username }}"
        kafkaConnectionProperties:
          bootstrapServers:
            - host: "{{ host }}"
              port: {{ port }}
              privateIpAddress: "{{ privateIpAddress }}"
          clusterId: "{{ clusterId }}"
          consumerPropertiesFile: "{{ consumerPropertiesFile }}"
          keyStoreFile: "{{ keyStoreFile }}"
          keyStorePassword: "{{ keyStorePassword }}"
          keyStorePasswordSecretVersion: "{{ keyStorePasswordSecretVersion }}"
          password: "{{ password }}"
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          producerPropertiesFile: "{{ producerPropertiesFile }}"
          securityProtocol: "{{ securityProtocol }}"
          sslKeyPassword: "{{ sslKeyPassword }}"
          sslKeyPasswordSecretVersion: "{{ sslKeyPasswordSecretVersion }}"
          streamPoolId: "{{ streamPoolId }}"
          technologyType: "{{ technologyType }}"
          trustStoreFile: "{{ trustStoreFile }}"
          trustStorePassword: "{{ trustStorePassword }}"
          trustStorePasswordSecretVersion: "{{ trustStorePasswordSecretVersion }}"
          useResourcePrincipal: {{ useResourcePrincipal }}
          username: "{{ username }}"
        kafkaSchemaRegistryConnectionProperties:
          authenticationType: "{{ authenticationType }}"
          keyStoreFile: "{{ keyStoreFile }}"
          keyStorePassword: "{{ keyStorePassword }}"
          keyStorePasswordSecretVersion: "{{ keyStorePasswordSecretVersion }}"
          password: "{{ password }}"
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          sslKeyPassword: "{{ sslKeyPassword }}"
          sslKeyPasswordSecretVersion: "{{ sslKeyPasswordSecretVersion }}"
          technologyType: "{{ technologyType }}"
          trustStoreFile: "{{ trustStoreFile }}"
          trustStorePassword: "{{ trustStorePassword }}"
          trustStorePasswordSecretVersion: "{{ trustStorePasswordSecretVersion }}"
          url: "{{ url }}"
          username: "{{ username }}"
        lifecycleDetails: "{{ lifecycleDetails }}"
        lifecycleState: "{{ lifecycleState }}"
        microsoftFabricConnectionProperties:
          clientId: "{{ clientId }}"
          clientSecret: "{{ clientSecret }}"
          endpoint: "{{ endpoint }}"
          technologyType: "{{ technologyType }}"
          tenantId: "{{ tenantId }}"
        microsoftSqlserverConnectionProperties:
          additionalAttributes:
            - key: "{{ key }}"
              value: "{{ value }}"
          database: "{{ database }}"
          host: "{{ host }}"
          password: "{{ password }}"
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          port: {{ port }}
          securityProtocol: "{{ securityProtocol }}"
          serverCertificateValidationRequired: {{ serverCertificateValidationRequired }}
          sslCaFile: "{{ sslCaFile }}"
          technologyType: "{{ technologyType }}"
          username: "{{ username }}"
        mongodbConnectionProperties:
          connectionString: "{{ connectionString }}"
          databaseId: "{{ databaseId }}"
          password: "{{ password }}"
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          securityProtocol: "{{ securityProtocol }}"
          technologyType: "{{ technologyType }}"
          tlsCaFile: "{{ tlsCaFile }}"
          tlsCertificateKeyFile: "{{ tlsCertificateKeyFile }}"
          tlsCertificateKeyFilePassword: "{{ tlsCertificateKeyFilePassword }}"
          tlsCertificateKeyFilePasswordSecretVersion: "{{ tlsCertificateKeyFilePasswordSecretVersion }}"
          username: "{{ username }}"
        mysqlConnectionProperties:
          additionalAttributes:
            - key: "{{ key }}"
              value: "{{ value }}"
          database: "{{ database }}"
          dbSystemId: "{{ dbSystemId }}"
          host: "{{ host }}"
          password: "{{ password }}"
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          port: {{ port }}
          securityProtocol: "{{ securityProtocol }}"
          sslCaFile: "{{ sslCaFile }}"
          sslCertFile: "{{ sslCertFile }}"
          sslCrlFile: "{{ sslCrlFile }}"
          sslKeyFile: "{{ sslKeyFile }}"
          sslMode: "{{ sslMode }}"
          technologyType: "{{ technologyType }}"
          username: "{{ username }}"
        ociObjectStorageConnectionProperties:
          privateKeyFile: "{{ privateKeyFile }}"
          privateKeyPassphraseSecret: "{{ privateKeyPassphraseSecret }}"
          publicKeyFingerprint: "{{ publicKeyFingerprint }}"
          region: "{{ region }}"
          technologyType: "{{ technologyType }}"
          tenancyId: "{{ tenancyId }}"
          useResourcePrincipal: {{ useResourcePrincipal }}
          userId: "{{ userId }}"
        ocid: "{{ ocid }}"
        oracleAiDataPlatformConnectionProperties:
          connectionUrl: "{{ connectionUrl }}"
          privateKeyFile: "{{ privateKeyFile }}"
          privateKeyPassphraseSecret: "{{ privateKeyPassphraseSecret }}"
          publicKeyFingerprint: "{{ publicKeyFingerprint }}"
          region: "{{ region }}"
          technologyType: "{{ technologyType }}"
          tenancyId: "{{ tenancyId }}"
          useResourcePrincipal: {{ useResourcePrincipal }}
          userId: "{{ userId }}"
        oracleConnectionProperties:
          authenticationMode: "{{ authenticationMode }}"
          connectionString: "{{ connectionString }}"
          gcpOracleDatabaseId: "{{ gcpOracleDatabaseId }}"
          password: "{{ password }}"
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          sessionMode: "{{ sessionMode }}"
          technologyType: "{{ technologyType }}"
          username: "{{ username }}"
          walletFile: "{{ walletFile }}"
        oracleNosqlConnectionProperties:
          privateKeyFile: "{{ privateKeyFile }}"
          privateKeyPassphraseSecret: "{{ privateKeyPassphraseSecret }}"
          publicKeyFingerprint: "{{ publicKeyFingerprint }}"
          region: "{{ region }}"
          technologyType: "{{ technologyType }}"
          tenancyId: "{{ tenancyId }}"
          useResourcePrincipal: {{ useResourcePrincipal }}
          userId: "{{ userId }}"
        postgresqlConnectionProperties:
          additionalAttributes:
            - key: "{{ key }}"
              value: "{{ value }}"
          database: "{{ database }}"
          dbSystemId: "{{ dbSystemId }}"
          host: "{{ host }}"
          password: "{{ password }}"
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          port: {{ port }}
          securityProtocol: "{{ securityProtocol }}"
          sslCaFile: "{{ sslCaFile }}"
          sslCertFile: "{{ sslCertFile }}"
          sslCrlFile: "{{ sslCrlFile }}"
          sslKeyFile: "{{ sslKeyFile }}"
          sslMode: "{{ sslMode }}"
          technologyType: "{{ technologyType }}"
          username: "{{ username }}"
        redisConnectionProperties:
          authenticationType: "{{ authenticationType }}"
          keyStoreFile: "{{ keyStoreFile }}"
          keyStorePassword: "{{ keyStorePassword }}"
          keyStorePasswordSecretVersion: "{{ keyStorePasswordSecretVersion }}"
          password: "{{ password }}"
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          redisClusterId: "{{ redisClusterId }}"
          securityProtocol: "{{ securityProtocol }}"
          servers: "{{ servers }}"
          technologyType: "{{ technologyType }}"
          trustStoreFile: "{{ trustStoreFile }}"
          trustStorePassword: "{{ trustStorePassword }}"
          trustStorePasswordSecretVersion: "{{ trustStorePasswordSecretVersion }}"
          username: "{{ username }}"
        routingMethod: "{{ routingMethod }}"
        snowflakeConnectionProperties:
          authenticationType: "{{ authenticationType }}"
          connectionUrl: "{{ connectionUrl }}"
          password: "{{ password }}"
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          privateKeyFile: "{{ privateKeyFile }}"
          privateKeyPassphraseSecret: "{{ privateKeyPassphraseSecret }}"
          technologyType: "{{ technologyType }}"
          username: "{{ username }}"
        updateTime: "{{ updateTime }}"
    - name: goldengateConnectionId
      value: "{{ goldengateConnectionId }}"
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

Deletes a single GoldengateConnection.

```sql
DELETE FROM google.oracledatabase.goldengate_connections
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND goldengateConnectionsId = '{{ goldengateConnectionsId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
