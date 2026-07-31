--- 
title: security_gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - security_gateways
  - beyondcorp
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

Creates, updates, deletes, gets or lists a <code>security_gateways</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_gateways" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.beyondcorp.security_gateways" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_security_gateways_get"
    values={[
        { label: 'projects_locations_security_gateways_get', value: 'projects_locations_security_gateways_get' },
        { label: 'projects_locations_security_gateways_list', value: 'projects_locations_security_gateways_list' }
    ]}
>
<TabItem value="projects_locations_security_gateways_get">

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
    <td>Identifier. Name of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="delegatingServiceAccount" /></td>
    <td><code>string</code></td>
    <td>Output only. Service account used for operations that involve resources in consumer projects.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. An arbitrary user-provided name for the SecurityGateway. Cannot exceed 64 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="externalIps" /></td>
    <td><code>array</code></td>
    <td>Output only. IP addresses that will be used for establishing connection to the endpoints.</td>
</tr>
<tr>
    <td><CopyableCode code="hubs" /></td>
    <td><code>object</code></td>
    <td>Optional. Map of Hubs that represents regional data path deployment with GCP region as a key.</td>
</tr>
<tr>
    <td><CopyableCode code="logging" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for Cloud Logging. If this field is present, the logging will be enabled. (id: GoogleCloudBeyondcorpSecuritygatewaysV1LoggingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="proxyProtocolConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Shared proxy configuration for all apps. (id: GoogleCloudBeyondcorpSecuritygatewaysV1ProxyProtocolConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceDiscovery" /></td>
    <td><code>object</code></td>
    <td>Optional. Settings related to the Service Discovery. (id: GoogleCloudBeyondcorpSecuritygatewaysV1ServiceDiscovery)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The operational state of the SecurityGateway. (STATE_UNSPECIFIED, CREATING, UPDATING, DELETING, RUNNING, DOWN, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the resource was last modified.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_security_gateways_list">

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
    <td><a href="#projects_locations_security_gateways_get"><CopyableCode code="projects_locations_security_gateways_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-securityGatewaysId"><code>securityGatewaysId</code></a></td>
    <td></td>
    <td>Gets details of a single SecurityGateway.</td>
</tr>
<tr>
    <td><a href="#projects_locations_security_gateways_list"><CopyableCode code="projects_locations_security_gateways_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists SecurityGateways in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_security_gateways_create"><CopyableCode code="projects_locations_security_gateways_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-securityGatewayId"><code>securityGatewayId</code></a></td>
    <td>Creates a new Security Gateway in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_security_gateways_patch"><CopyableCode code="projects_locations_security_gateways_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-securityGatewaysId"><code>securityGatewaysId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single SecurityGateway.</td>
</tr>
<tr>
    <td><a href="#projects_locations_security_gateways_delete"><CopyableCode code="projects_locations_security_gateways_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-securityGatewaysId"><code>securityGatewaysId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Deletes a single SecurityGateway.</td>
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
<tr id="parameter-securityGatewaysId">
    <td><CopyableCode code="securityGatewaysId" /></td>
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
<tr id="parameter-securityGatewayId">
    <td><CopyableCode code="securityGatewayId" /></td>
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
    defaultValue="projects_locations_security_gateways_get"
    values={[
        { label: 'projects_locations_security_gateways_get', value: 'projects_locations_security_gateways_get' },
        { label: 'projects_locations_security_gateways_list', value: 'projects_locations_security_gateways_list' }
    ]}
>
<TabItem value="projects_locations_security_gateways_get">

Gets details of a single SecurityGateway.

```sql
SELECT
name,
createTime,
delegatingServiceAccount,
displayName,
externalIps,
hubs,
logging,
proxyProtocolConfig,
serviceDiscovery,
state,
updateTime
FROM google.beyondcorp.security_gateways
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND securityGatewaysId = '{{ securityGatewaysId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_security_gateways_list">

Lists SecurityGateways in a given project and location.

```sql
SELECT
*
FROM google.beyondcorp.security_gateways
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND filter = '{{ filter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_security_gateways_create"
    values={[
        { label: 'projects_locations_security_gateways_create', value: 'projects_locations_security_gateways_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_security_gateways_create">

Creates a new Security Gateway in a given project and location.

```sql
INSERT INTO google.beyondcorp.security_gateways (
data__hubs,
data__displayName,
data__name,
data__logging,
data__proxyProtocolConfig,
data__serviceDiscovery,
projectsId,
locationsId,
requestId,
securityGatewayId
)
SELECT 
'{{ hubs }}',
'{{ displayName }}',
'{{ name }}',
'{{ logging }}',
'{{ proxyProtocolConfig }}',
'{{ serviceDiscovery }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ requestId }}',
'{{ securityGatewayId }}'
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
- name: security_gateways
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the security_gateways resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the security_gateways resource.
    - name: hubs
      value: "{{ hubs }}"
      description: |
        Optional. Map of Hubs that represents regional data path deployment with GCP region as a key.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Optional. An arbitrary user-provided name for the SecurityGateway. Cannot exceed 64 characters.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. Name of the resource.
    - name: logging
      value: "{{ logging }}"
      description: |
        Optional. Configuration for Cloud Logging. If this field is present, the logging will be enabled.
    - name: proxyProtocolConfig
      description: |
        Optional. Shared proxy configuration for all apps.
      value:
        gatewayIdentity: "{{ gatewayIdentity }}"
        contextualHeaders:
          userInfo:
            outputType: "{{ outputType }}"
          deviceInfo:
            outputType: "{{ outputType }}"
          outputType: "{{ outputType }}"
          groupInfo:
            outputType: "{{ outputType }}"
        clientIp: {{ clientIp }}
        allowedClientHeaders:
          - "{{ allowedClientHeaders }}"
        metadataHeaders: "{{ metadataHeaders }}"
    - name: serviceDiscovery
      description: |
        Optional. Settings related to the Service Discovery.
      value:
        apiGateway:
          resourceOverride:
            path: "{{ path }}"
    - name: requestId
      value: "{{ requestId }}"
    - name: securityGatewayId
      value: "{{ securityGatewayId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_security_gateways_patch"
    values={[
        { label: 'projects_locations_security_gateways_patch', value: 'projects_locations_security_gateways_patch' }
    ]}
>
<TabItem value="projects_locations_security_gateways_patch">

Updates the parameters of a single SecurityGateway.

```sql
UPDATE google.beyondcorp.security_gateways
SET 
data__hubs = '{{ hubs }}',
data__displayName = '{{ displayName }}',
data__name = '{{ name }}',
data__logging = '{{ logging }}',
data__proxyProtocolConfig = '{{ proxyProtocolConfig }}',
data__serviceDiscovery = '{{ serviceDiscovery }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND securityGatewaysId = '{{ securityGatewaysId }}' --required
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
    defaultValue="projects_locations_security_gateways_delete"
    values={[
        { label: 'projects_locations_security_gateways_delete', value: 'projects_locations_security_gateways_delete' }
    ]}
>
<TabItem value="projects_locations_security_gateways_delete">

Deletes a single SecurityGateway.

```sql
DELETE FROM google.beyondcorp.security_gateways
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND securityGatewaysId = '{{ securityGatewaysId }}' --required
AND requestId = '{{ requestId }}'
AND validateOnly = '{{ validateOnly }}'
;
```
</TabItem>
</Tabs>
