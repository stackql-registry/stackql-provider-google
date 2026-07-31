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
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
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
*
FROM google.oracledatabase.goldengate_connections
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageToken = '{{ pageToken }}'
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

Creates a new GoldengateConnection in a given project and location.

```sql
INSERT INTO google.oracledatabase.goldengate_connections (
data__properties,
data__odbSubnet,
data__odbNetwork,
data__name,
data__gcpOracleZone,
data__labels,
projectsId,
locationsId,
goldengateConnectionId,
requestId
)
SELECT 
'{{ properties }}',
'{{ odbSubnet }}',
'{{ odbNetwork }}',
'{{ name }}',
'{{ gcpOracleZone }}',
'{{ labels }}',
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
    - name: properties
      description: |
        Required. The properties of the GoldengateConnection.
      value:
        googleBigQueryConnectionProperties:
          technologyType: "{{ technologyType }}"
          serviceAccountKeyFile: "{{ serviceAccountKeyFile }}"
        oracleNosqlConnectionProperties:
          technologyType: "{{ technologyType }}"
          privateKeyPassphraseSecret: "{{ privateKeyPassphraseSecret }}"
          tenancyId: "{{ tenancyId }}"
          publicKeyFingerprint: "{{ publicKeyFingerprint }}"
          privateKeyFile: "{{ privateKeyFile }}"
          useResourcePrincipal: {{ useResourcePrincipal }}
          region: "{{ region }}"
          userId: "{{ userId }}"
        googleCloudStorageConnectionProperties:
          serviceAccountKeyFile: "{{ serviceAccountKeyFile }}"
          technologyType: "{{ technologyType }}"
        mysqlConnectionProperties:
          technologyType: "{{ technologyType }}"
          sslCertFile: "{{ sslCertFile }}"
          sslCaFile: "{{ sslCaFile }}"
          sslCrlFile: "{{ sslCrlFile }}"
          username: "{{ username }}"
          securityProtocol: "{{ securityProtocol }}"
          database: "{{ database }}"
          host: "{{ host }}"
          dbSystemId: "{{ dbSystemId }}"
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          sslKeyFile: "{{ sslKeyFile }}"
          port: {{ port }}
          password: "{{ password }}"
          sslMode: "{{ sslMode }}"
          additionalAttributes:
            - key: "{{ key }}"
              value: "{{ value }}"
        kafkaSchemaRegistryConnectionProperties:
          keyStorePassword: "{{ keyStorePassword }}"
          technologyType: "{{ technologyType }}"
          username: "{{ username }}"
          authenticationType: "{{ authenticationType }}"
          url: "{{ url }}"
          keyStoreFile: "{{ keyStoreFile }}"
          trustStoreFile: "{{ trustStoreFile }}"
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          trustStorePassword: "{{ trustStorePassword }}"
          sslKeyPassword: "{{ sslKeyPassword }}"
          password: "{{ password }}"
          keyStorePasswordSecretVersion: "{{ keyStorePasswordSecretVersion }}"
          trustStorePasswordSecretVersion: "{{ trustStorePasswordSecretVersion }}"
          sslKeyPasswordSecretVersion: "{{ sslKeyPasswordSecretVersion }}"
        microsoftFabricConnectionProperties:
          tenantId: "{{ tenantId }}"
          endpoint: "{{ endpoint }}"
          clientId: "{{ clientId }}"
          technologyType: "{{ technologyType }}"
          clientSecret: "{{ clientSecret }}"
        lifecycleDetails: "{{ lifecycleDetails }}"
        javaMessageServiceConnectionProperties:
          trustStoreFile: "{{ trustStoreFile }}"
          keyStoreFile: "{{ keyStoreFile }}"
          jndiConnectionFactory: "{{ jndiConnectionFactory }}"
          authenticationType: "{{ authenticationType }}"
          jndiInitialContextFactory: "{{ jndiInitialContextFactory }}"
          username: "{{ username }}"
          securityProtocol: "{{ securityProtocol }}"
          jndiSecurityCredentialsSecret: "{{ jndiSecurityCredentialsSecret }}"
          keyStorePassword: "{{ keyStorePassword }}"
          technologyType: "{{ technologyType }}"
          connectionUrl: "{{ connectionUrl }}"
          trustStorePasswordSecretVersion: "{{ trustStorePasswordSecretVersion }}"
          useJndi: {{ useJndi }}
          jndiProviderUrl: "{{ jndiProviderUrl }}"
          sslKeyPasswordSecretVersion: "{{ sslKeyPasswordSecretVersion }}"
          connectionFactory: "{{ connectionFactory }}"
          keyStorePasswordSecretVersion: "{{ keyStorePasswordSecretVersion }}"
          jndiSecurityPrincipal: "{{ jndiSecurityPrincipal }}"
          password: "{{ password }}"
          sslKeyPassword: "{{ sslKeyPassword }}"
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          trustStorePassword: "{{ trustStorePassword }}"
        postgresqlConnectionProperties:
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          sslKeyFile: "{{ sslKeyFile }}"
          port: {{ port }}
          password: "{{ password }}"
          additionalAttributes:
            - key: "{{ key }}"
              value: "{{ value }}"
          sslMode: "{{ sslMode }}"
          sslCrlFile: "{{ sslCrlFile }}"
          technologyType: "{{ technologyType }}"
          sslCertFile: "{{ sslCertFile }}"
          sslCaFile: "{{ sslCaFile }}"
          username: "{{ username }}"
          securityProtocol: "{{ securityProtocol }}"
          host: "{{ host }}"
          dbSystemId: "{{ dbSystemId }}"
          database: "{{ database }}"
        microsoftSqlserverConnectionProperties:
          additionalAttributes:
            - key: "{{ key }}"
              value: "{{ value }}"
          password: "{{ password }}"
          host: "{{ host }}"
          database: "{{ database }}"
          port: {{ port }}
          serverCertificateValidationRequired: {{ serverCertificateValidationRequired }}
          username: "{{ username }}"
          securityProtocol: "{{ securityProtocol }}"
          sslCaFile: "{{ sslCaFile }}"
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          technologyType: "{{ technologyType }}"
        goldengateConnectionProperties:
          username: "{{ username }}"
          port: {{ port }}
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          technologyType: "{{ technologyType }}"
          goldengateDeploymentId: "{{ goldengateDeploymentId }}"
          password: "{{ password }}"
          host: "{{ host }}"
        routingMethod: "{{ routingMethod }}"
        azureDataLakeStorageConnectionProperties:
          azureTenantId: "{{ azureTenantId }}"
          clientId: "{{ clientId }}"
          account: "{{ account }}"
          endpoint: "{{ endpoint }}"
          authenticationType: "{{ authenticationType }}"
          accountKeySecret: "{{ accountKeySecret }}"
          azureAuthorityHost: "{{ azureAuthorityHost }}"
          sasTokenSecret: "{{ sasTokenSecret }}"
          technologyType: "{{ technologyType }}"
          clientSecret: "{{ clientSecret }}"
        elasticsearchConnectionProperties:
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          technologyType: "{{ technologyType }}"
          password: "{{ password }}"
          servers: "{{ servers }}"
          authenticationType: "{{ authenticationType }}"
          securityProtocol: "{{ securityProtocol }}"
          username: "{{ username }}"
          fingerprint: "{{ fingerprint }}"
        connectionType: "{{ connectionType }}"
        googlePubsubConnectionProperties:
          technologyType: "{{ technologyType }}"
          serviceAccountKeyFile: "{{ serviceAccountKeyFile }}"
        genericConnectionProperties:
          technologyType: "{{ technologyType }}"
          host: "{{ host }}"
        hdfsConnectionProperties:
          technologyType: "{{ technologyType }}"
          coreSiteXml: "{{ coreSiteXml }}"
        kafkaConnectionProperties:
          streamPoolId: "{{ streamPoolId }}"
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          trustStorePassword: "{{ trustStorePassword }}"
          sslKeyPassword: "{{ sslKeyPassword }}"
          bootstrapServers:
            - privateIpAddress: "{{ privateIpAddress }}"
              host: "{{ host }}"
              port: {{ port }}
          password: "{{ password }}"
          keyStorePasswordSecretVersion: "{{ keyStorePasswordSecretVersion }}"
          trustStorePasswordSecretVersion: "{{ trustStorePasswordSecretVersion }}"
          sslKeyPasswordSecretVersion: "{{ sslKeyPasswordSecretVersion }}"
          producerPropertiesFile: "{{ producerPropertiesFile }}"
          keyStorePassword: "{{ keyStorePassword }}"
          technologyType: "{{ technologyType }}"
          clusterId: "{{ clusterId }}"
          useResourcePrincipal: {{ useResourcePrincipal }}
          securityProtocol: "{{ securityProtocol }}"
          username: "{{ username }}"
          keyStoreFile: "{{ keyStoreFile }}"
          consumerPropertiesFile: "{{ consumerPropertiesFile }}"
          trustStoreFile: "{{ trustStoreFile }}"
        description: "{{ description }}"
        oracleConnectionProperties:
          authenticationMode: "{{ authenticationMode }}"
          password: "{{ password }}"
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          technologyType: "{{ technologyType }}"
          sessionMode: "{{ sessionMode }}"
          gcpOracleDatabaseId: "{{ gcpOracleDatabaseId }}"
          connectionString: "{{ connectionString }}"
          username: "{{ username }}"
          walletFile: "{{ walletFile }}"
        mongodbConnectionProperties:
          tlsCertificateKeyFilePasswordSecretVersion: "{{ tlsCertificateKeyFilePasswordSecretVersion }}"
          password: "{{ password }}"
          tlsCertificateKeyFile: "{{ tlsCertificateKeyFile }}"
          username: "{{ username }}"
          securityProtocol: "{{ securityProtocol }}"
          tlsCaFile: "{{ tlsCaFile }}"
          connectionString: "{{ connectionString }}"
          databaseId: "{{ databaseId }}"
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          technologyType: "{{ technologyType }}"
          tlsCertificateKeyFilePassword: "{{ tlsCertificateKeyFilePassword }}"
        db2ConnectionProperties:
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          technologyType: "{{ technologyType }}"
          port: {{ port }}
          sslServerCertificateFile: "{{ sslServerCertificateFile }}"
          username: "{{ username }}"
          securityProtocol: "{{ securityProtocol }}"
          sslClientKeystashFile: "{{ sslClientKeystashFile }}"
          password: "{{ password }}"
          host: "{{ host }}"
          database: "{{ database }}"
          additionalAttributes:
            - key: "{{ key }}"
              value: "{{ value }}"
          sslClientKeystoredbFile: "{{ sslClientKeystoredbFile }}"
        redisConnectionProperties:
          authenticationType: "{{ authenticationType }}"
          trustStoreFile: "{{ trustStoreFile }}"
          redisClusterId: "{{ redisClusterId }}"
          keyStoreFile: "{{ keyStoreFile }}"
          technologyType: "{{ technologyType }}"
          keyStorePassword: "{{ keyStorePassword }}"
          securityProtocol: "{{ securityProtocol }}"
          username: "{{ username }}"
          keyStorePasswordSecretVersion: "{{ keyStorePasswordSecretVersion }}"
          password: "{{ password }}"
          trustStorePasswordSecretVersion: "{{ trustStorePasswordSecretVersion }}"
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          trustStorePassword: "{{ trustStorePassword }}"
          servers: "{{ servers }}"
        amazonKinesisConnectionProperties:
          secretAccessKeySecret: "{{ secretAccessKeySecret }}"
          awsRegion: "{{ awsRegion }}"
          accessKeyId: "{{ accessKeyId }}"
          endpoint: "{{ endpoint }}"
          technologyType: "{{ technologyType }}"
        ociObjectStorageConnectionProperties:
          technologyType: "{{ technologyType }}"
          privateKeyPassphraseSecret: "{{ privateKeyPassphraseSecret }}"
          tenancyId: "{{ tenancyId }}"
          publicKeyFingerprint: "{{ publicKeyFingerprint }}"
          privateKeyFile: "{{ privateKeyFile }}"
          useResourcePrincipal: {{ useResourcePrincipal }}
          region: "{{ region }}"
          userId: "{{ userId }}"
        amazonS3ConnectionProperties:
          region: "{{ region }}"
          secretAccessKeySecret: "{{ secretAccessKeySecret }}"
          accessKeyId: "{{ accessKeyId }}"
          endpoint: "{{ endpoint }}"
          technologyType: "{{ technologyType }}"
        updateTime: "{{ updateTime }}"
        amazonRedshiftConnectionProperties:
          connectionUrl: "{{ connectionUrl }}"
          username: "{{ username }}"
          password: "{{ password }}"
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          technologyType: "{{ technologyType }}"
        azureSynapseAnalyticsConnectionProperties:
          connectionString: "{{ connectionString }}"
          username: "{{ username }}"
          password: "{{ password }}"
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          technologyType: "{{ technologyType }}"
        databricksConnectionProperties:
          clientId: "{{ clientId }}"
          connectionUrl: "{{ connectionUrl }}"
          storageCredential: "{{ storageCredential }}"
          authenticationType: "{{ authenticationType }}"
          password: "{{ password }}"
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          technologyType: "{{ technologyType }}"
          clientSecret: "{{ clientSecret }}"
        lifecycleState: "{{ lifecycleState }}"
        ingressIpAddresses:
          - "{{ ingressIpAddresses }}"
        ocid: "{{ ocid }}"
        snowflakeConnectionProperties:
          connectionUrl: "{{ connectionUrl }}"
          username: "{{ username }}"
          privateKeyFile: "{{ privateKeyFile }}"
          password: "{{ password }}"
          authenticationType: "{{ authenticationType }}"
          passwordSecretVersion: "{{ passwordSecretVersion }}"
          technologyType: "{{ technologyType }}"
          privateKeyPassphraseSecret: "{{ privateKeyPassphraseSecret }}"
        icebergConnectionProperties:
          storage:
            googleCloudStorageIcebergStorage:
              bucket: "{{ bucket }}"
              projectId: "{{ projectId }}"
              serviceAccountKeyFile: "{{ serviceAccountKeyFile }}"
            storageType: "{{ storageType }}"
            amazonS3IcebergStorage:
              schemeType: "{{ schemeType }}"
              secretAccessKeySecret: "{{ secretAccessKeySecret }}"
              region: "{{ region }}"
              endpoint: "{{ endpoint }}"
              accessKeyId: "{{ accessKeyId }}"
              bucket: "{{ bucket }}"
            azureDataLakeStorageIcebergStorage:
              container: "{{ container }}"
              accountKeySecret: "{{ accountKeySecret }}"
              azureAccount: "{{ azureAccount }}"
              endpoint: "{{ endpoint }}"
          technologyType: "{{ technologyType }}"
          catalog:
            polarisIcebergCatalog:
              clientSecret: "{{ clientSecret }}"
              uri: "{{ uri }}"
              principalRole: "{{ principalRole }}"
              clientId: "{{ clientId }}"
              polarisCatalog: "{{ polarisCatalog }}"
            catalogType: "{{ catalogType }}"
            glueIcebergCatalog:
              glueId: "{{ glueId }}"
            nessieIcebergCatalog:
              uri: "{{ uri }}"
              branch: "{{ branch }}"
            restIcebergCatalog:
              uri: "{{ uri }}"
              properties: "{{ properties }}"
        displayName: "{{ displayName }}"
        oracleAiDataPlatformConnectionProperties:
          tenancyId: "{{ tenancyId }}"
          technologyType: "{{ technologyType }}"
          privateKeyPassphraseSecret: "{{ privateKeyPassphraseSecret }}"
          publicKeyFingerprint: "{{ publicKeyFingerprint }}"
          userId: "{{ userId }}"
          useResourcePrincipal: {{ useResourcePrincipal }}
          connectionUrl: "{{ connectionUrl }}"
          privateKeyFile: "{{ privateKeyFile }}"
          region: "{{ region }}"
    - name: odbSubnet
      value: "{{ odbSubnet }}"
      description: |
        Optional. The name of the OdbSubnet associated with the GoldengateConnection for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}
    - name: odbNetwork
      value: "{{ odbNetwork }}"
      description: |
        Optional. The name of the OdbNetwork associated with the GoldengateConnection. The format is projects/{project}/locations/{location}/odbNetworks/{odb_network}. It is optional but if specified, this should match the parent ODBNetwork of the OdbSubnet.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The name of the GoldengateConnection resource in the following format: projects/{project}/locations/{region}/goldengateConnections/{goldengate_connection}
    - name: gcpOracleZone
      value: "{{ gcpOracleZone }}"
      description: |
        Optional. The GCP Oracle zone where Oracle GoldengateConnection is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. The labels or tags associated with the GoldengateConnection.
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
