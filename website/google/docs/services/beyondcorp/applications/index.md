--- 
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
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

Creates, updates, deletes, gets or lists an <code>applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.beyondcorp.applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_security_gateways_applications_get"
    values={[
        { label: 'projects_locations_security_gateways_applications_get', value: 'projects_locations_security_gateways_applications_get' },
        { label: 'projects_locations_security_gateways_applications_list', value: 'projects_locations_security_gateways_applications_list' }
    ]}
>
<TabItem value="projects_locations_security_gateways_applications_get">

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
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. An arbitrary user-provided name for the application resource. Cannot exceed 64 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="endpointMatchers" /></td>
    <td><code>array</code></td>
    <td>Optional. An array of conditions to match the application's network endpoint. Each element in the array is an EndpointMatcher object, which defines a specific combination of a hostname pattern and one or more ports. The application is considered matched if at least one of the EndpointMatcher conditions in this array is met (the conditions are combined using OR logic). Each EndpointMatcher must contain a hostname pattern, such as "example.com", and one or more port numbers specified as a string, such as "443". Hostname and port number examples: "*.example.com", "443" "example.com" and "22" "example.com" and "22,33"</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>string</code></td>
    <td>Optional. Type of the external application. (SCHEMA_UNSPECIFIED, PROXY_GATEWAY, API_GATEWAY)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="upstreams" /></td>
    <td><code>array</code></td>
    <td>Optional. Which upstream resources to forward traffic to.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_security_gateways_applications_list">

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
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. An arbitrary user-provided name for the application resource. Cannot exceed 64 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="endpointMatchers" /></td>
    <td><code>array</code></td>
    <td>Optional. An array of conditions to match the application's network endpoint. Each element in the array is an EndpointMatcher object, which defines a specific combination of a hostname pattern and one or more ports. The application is considered matched if at least one of the EndpointMatcher conditions in this array is met (the conditions are combined using OR logic). Each EndpointMatcher must contain a hostname pattern, such as "example.com", and one or more port numbers specified as a string, such as "443". Hostname and port number examples: "*.example.com", "443" "example.com" and "22" "example.com" and "22,33"</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>string</code></td>
    <td>Optional. Type of the external application. (SCHEMA_UNSPECIFIED, PROXY_GATEWAY, API_GATEWAY)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="upstreams" /></td>
    <td><code>array</code></td>
    <td>Optional. Which upstream resources to forward traffic to.</td>
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
    <td><a href="#projects_locations_security_gateways_applications_get"><CopyableCode code="projects_locations_security_gateways_applications_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-securityGatewaysId"><code>securityGatewaysId</code></a>, <a href="#parameter-applicationsId"><code>applicationsId</code></a></td>
    <td></td>
    <td>Gets details of a single Application.</td>
</tr>
<tr>
    <td><a href="#projects_locations_security_gateways_applications_list"><CopyableCode code="projects_locations_security_gateways_applications_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-securityGatewaysId"><code>securityGatewaysId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists Applications in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_security_gateways_applications_create"><CopyableCode code="projects_locations_security_gateways_applications_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-securityGatewaysId"><code>securityGatewaysId</code></a></td>
    <td><a href="#parameter-applicationId"><code>applicationId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new Application in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_security_gateways_applications_patch"><CopyableCode code="projects_locations_security_gateways_applications_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-securityGatewaysId"><code>securityGatewaysId</code></a>, <a href="#parameter-applicationsId"><code>applicationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single Application.</td>
</tr>
<tr>
    <td><a href="#projects_locations_security_gateways_applications_delete"><CopyableCode code="projects_locations_security_gateways_applications_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-securityGatewaysId"><code>securityGatewaysId</code></a>, <a href="#parameter-applicationsId"><code>applicationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Deletes a single application.</td>
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
<tr id="parameter-applicationsId">
    <td><CopyableCode code="applicationsId" /></td>
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
<tr id="parameter-securityGatewaysId">
    <td><CopyableCode code="securityGatewaysId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-applicationId">
    <td><CopyableCode code="applicationId" /></td>
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
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_security_gateways_applications_get"
    values={[
        { label: 'projects_locations_security_gateways_applications_get', value: 'projects_locations_security_gateways_applications_get' },
        { label: 'projects_locations_security_gateways_applications_list', value: 'projects_locations_security_gateways_applications_list' }
    ]}
>
<TabItem value="projects_locations_security_gateways_applications_get">

Gets details of a single Application.

```sql
SELECT
name,
createTime,
displayName,
endpointMatchers,
schema,
updateTime,
upstreams
FROM google.beyondcorp.applications
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND securityGatewaysId = '{{ securityGatewaysId }}' -- required
AND applicationsId = '{{ applicationsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_security_gateways_applications_list">

Lists Applications in a given project and location.

```sql
SELECT
name,
createTime,
displayName,
endpointMatchers,
schema,
updateTime,
upstreams
FROM google.beyondcorp.applications
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND securityGatewaysId = '{{ securityGatewaysId }}' -- required
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
    defaultValue="projects_locations_security_gateways_applications_create"
    values={[
        { label: 'projects_locations_security_gateways_applications_create', value: 'projects_locations_security_gateways_applications_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_security_gateways_applications_create">

Creates a new Application in a given project and location.

```sql
INSERT INTO google.beyondcorp.applications (
data__displayName,
data__endpointMatchers,
data__name,
data__schema,
data__upstreams,
projectsId,
locationsId,
securityGatewaysId,
applicationId,
requestId
)
SELECT 
'{{ displayName }}',
'{{ endpointMatchers }}',
'{{ name }}',
'{{ schema }}',
'{{ upstreams }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ securityGatewaysId }}',
'{{ applicationId }}',
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
- name: applications
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the applications resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the applications resource.
    - name: securityGatewaysId
      value: "{{ securityGatewaysId }}"
      description: Required parameter for the applications resource.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Optional. An arbitrary user-provided name for the application resource. Cannot exceed 64 characters.
    - name: endpointMatchers
      description: |
        Optional. An array of conditions to match the application's network endpoint. Each element in the array is an EndpointMatcher object, which defines a specific combination of a hostname pattern and one or more ports. The application is considered matched if at least one of the EndpointMatcher conditions in this array is met (the conditions are combined using OR logic). Each EndpointMatcher must contain a hostname pattern, such as "example.com", and one or more port numbers specified as a string, such as "443". Hostname and port number examples: "*.example.com", "443" "example.com" and "22" "example.com" and "22,33"
      value:
        - hostname: "{{ hostname }}"
          ports: "{{ ports }}"
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. Name of the resource.
    - name: schema
      value: "{{ schema }}"
      description: |
        Optional. Type of the external application.
      valid_values: ['SCHEMA_UNSPECIFIED', 'PROXY_GATEWAY', 'API_GATEWAY']
    - name: upstreams
      description: |
        Optional. Which upstream resources to forward traffic to.
      value:
        - egressPolicy:
            regions:
              - "{{ regions }}"
          external:
            endpoints:
              - hostname: "{{ hostname }}"
                port: {{ port }}
          network:
            name: "{{ name }}"
          proxyProtocol:
            allowedClientHeaders:
              - "{{ allowedClientHeaders }}"
            clientIp: {{ clientIp }}
            contextualHeaders:
              deviceInfo:
                outputType: "{{ outputType }}"
              dispatchInfo:
                outputType: "{{ outputType }}"
              groupInfo:
                outputType: "{{ outputType }}"
              outputType: "{{ outputType }}"
              userInfo:
                outputType: "{{ outputType }}"
            gatewayIdentity: "{{ gatewayIdentity }}"
            metadataHeaders: "{{ metadataHeaders }}"
    - name: applicationId
      value: "{{ applicationId }}"
    - name: requestId
      value: "{{ requestId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_security_gateways_applications_patch"
    values={[
        { label: 'projects_locations_security_gateways_applications_patch', value: 'projects_locations_security_gateways_applications_patch' }
    ]}
>
<TabItem value="projects_locations_security_gateways_applications_patch">

Updates the parameters of a single Application.

```sql
UPDATE google.beyondcorp.applications
SET 
data__displayName = '{{ displayName }}',
data__endpointMatchers = '{{ endpointMatchers }}',
data__name = '{{ name }}',
data__schema = '{{ schema }}',
data__upstreams = '{{ upstreams }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND securityGatewaysId = '{{ securityGatewaysId }}' --required
AND applicationsId = '{{ applicationsId }}' --required
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
    defaultValue="projects_locations_security_gateways_applications_delete"
    values={[
        { label: 'projects_locations_security_gateways_applications_delete', value: 'projects_locations_security_gateways_applications_delete' }
    ]}
>
<TabItem value="projects_locations_security_gateways_applications_delete">

Deletes a single application.

```sql
DELETE FROM google.beyondcorp.applications
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND securityGatewaysId = '{{ securityGatewaysId }}' --required
AND applicationsId = '{{ applicationsId }}' --required
AND requestId = '{{ requestId }}'
AND validateOnly = '{{ validateOnly }}'
;
```
</TabItem>
</Tabs>
