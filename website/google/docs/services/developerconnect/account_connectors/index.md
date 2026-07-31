--- 
title: account_connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - account_connectors
  - developerconnect
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

Creates, updates, deletes, gets or lists an <code>account_connectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_connectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.developerconnect.account_connectors" /></td></tr>
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
    <td>Identifier. The resource name of the accountConnector, in the format `projects/&#123;project&#125;/locations/&#123;location&#125;/accountConnectors/&#123;account_connector_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Allows users to store small amounts of arbitrary data.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the accountConnector was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customOauthConfig" /></td>
    <td><code>object</code></td>
    <td>Custom OAuth config. (id: CustomOAuthConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="oauthStartUri" /></td>
    <td><code>string</code></td>
    <td>Output only. Start OAuth flow by clicking on this URL.</td>
</tr>
<tr>
    <td><CopyableCode code="providerOauthConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Provider OAuth config. (id: ProviderOAuthConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="proxyConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for the http and git proxy features. (id: ProxyConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. A system-assigned unique identifier for the Account Connector.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the accountConnector was updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-accountConnectorsId"><code>accountConnectorsId</code></a></td>
    <td></td>
    <td>Gets details of a single AccountConnector.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists AccountConnectors in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-accountConnectorId"><code>accountConnectorId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new AccountConnector in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-accountConnectorsId"><code>accountConnectorsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single AccountConnector.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-accountConnectorsId"><code>accountConnectorsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a single AccountConnector.</td>
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
<tr id="parameter-accountConnectorsId">
    <td><CopyableCode code="accountConnectorsId" /></td>
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
<tr id="parameter-accountConnectorId">
    <td><CopyableCode code="accountConnectorId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
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

Gets details of a single AccountConnector.

```sql
SELECT
name,
annotations,
createTime,
customOauthConfig,
etag,
labels,
oauthStartUri,
providerOauthConfig,
proxyConfig,
uid,
updateTime
FROM google.developerconnect.account_connectors
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND accountConnectorsId = '{{ accountConnectorsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists AccountConnectors in a given project and location.

```sql
SELECT
*
FROM google.developerconnect.account_connectors
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
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

Creates a new AccountConnector in a given project and location.

```sql
INSERT INTO google.developerconnect.account_connectors (
data__annotations,
data__customOauthConfig,
data__providerOauthConfig,
data__name,
data__labels,
data__etag,
data__proxyConfig,
projectsId,
locationsId,
accountConnectorId,
validateOnly,
requestId
)
SELECT 
'{{ annotations }}',
'{{ customOauthConfig }}',
'{{ providerOauthConfig }}',
'{{ name }}',
'{{ labels }}',
'{{ etag }}',
'{{ proxyConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ accountConnectorId }}',
'{{ validateOnly }}',
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
- name: account_connectors
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the account_connectors resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the account_connectors resource.
    - name: annotations
      value: "{{ annotations }}"
      description: |
        Optional. Allows users to store small amounts of arbitrary data.
    - name: customOauthConfig
      description: |
        Custom OAuth config.
      value:
        clientSecret: "{{ clientSecret }}"
        authUri: "{{ authUri }}"
        hostUri: "{{ hostUri }}"
        scmProvider: "{{ scmProvider }}"
        serviceDirectoryConfig:
          service: "{{ service }}"
        scopes:
          - "{{ scopes }}"
        clientId: "{{ clientId }}"
        sslCaCertificate: "{{ sslCaCertificate }}"
        pkceDisabled: {{ pkceDisabled }}
        serverVersion: "{{ serverVersion }}"
        tokenUri: "{{ tokenUri }}"
    - name: providerOauthConfig
      description: |
        Optional. Provider OAuth config.
      value:
        systemProviderId: "{{ systemProviderId }}"
        scopes:
          - "{{ scopes }}"
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The resource name of the accountConnector, in the format \`projects/{project}/locations/{location}/accountConnectors/{account_connector_id}\`.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Labels as key value pairs
    - name: etag
      value: "{{ etag }}"
      description: |
        Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
    - name: proxyConfig
      description: |
        Optional. Configuration for the http and git proxy features.
      value:
        enabled: {{ enabled }}
        httpProxyBaseUri: "{{ httpProxyBaseUri }}"
    - name: accountConnectorId
      value: "{{ accountConnectorId }}"
    - name: validateOnly
      value: {{ validateOnly }}
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

Updates the parameters of a single AccountConnector.

```sql
UPDATE google.developerconnect.account_connectors
SET 
data__annotations = '{{ annotations }}',
data__customOauthConfig = '{{ customOauthConfig }}',
data__providerOauthConfig = '{{ providerOauthConfig }}',
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__etag = '{{ etag }}',
data__proxyConfig = '{{ proxyConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND accountConnectorsId = '{{ accountConnectorsId }}' --required
AND requestId = '{{ requestId}}'
AND allowMissing = {{ allowMissing}}
AND validateOnly = {{ validateOnly}}
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

Deletes a single AccountConnector.

```sql
DELETE FROM google.developerconnect.account_connectors
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND accountConnectorsId = '{{ accountConnectorsId }}' --required
AND requestId = '{{ requestId }}'
AND validateOnly = '{{ validateOnly }}'
AND etag = '{{ etag }}'
AND force = '{{ force }}'
;
```
</TabItem>
</Tabs>
