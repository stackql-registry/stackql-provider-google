--- 
title: domain_mappings
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_mappings
  - appengine
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

Creates, updates, deletes, gets or lists a <code>domain_mappings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domain_mappings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.appengine.domain_mappings" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Relative name of the domain serving the application. Example: example.com.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. Full path to the DomainMapping resource in the API. Example: apps/myapp/domainMapping/example.com.@OutputOnly</td>
</tr>
<tr>
    <td><CopyableCode code="resourceRecords" /></td>
    <td><code>array</code></td>
    <td>Output only. The resource records required to configure this domain mapping. These records must be added to the domain's DNS configuration in order to serve the application via this domain mapping.@OutputOnly</td>
</tr>
<tr>
    <td><CopyableCode code="sslSettings" /></td>
    <td><code>object</code></td>
    <td>SSL configuration for this domain. If unconfigured, this domain will not serve with SSL. (id: SslSettings)</td>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Relative name of the domain serving the application. Example: example.com.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. Full path to the DomainMapping resource in the API. Example: apps/myapp/domainMapping/example.com.@OutputOnly</td>
</tr>
<tr>
    <td><CopyableCode code="resourceRecords" /></td>
    <td><code>array</code></td>
    <td>Output only. The resource records required to configure this domain mapping. These records must be added to the domain's DNS configuration in order to serve the application via this domain mapping.@OutputOnly</td>
</tr>
<tr>
    <td><CopyableCode code="sslSettings" /></td>
    <td><code>object</code></td>
    <td>SSL configuration for this domain. If unconfigured, this domain will not serve with SSL. (id: SslSettings)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-applicationsId"><code>applicationsId</code></a>, <a href="#parameter-domainMappingsId"><code>domainMappingsId</code></a></td>
    <td></td>
    <td>Gets the specified domain mapping.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-applicationsId"><code>applicationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the domain mappings on an application.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-applicationsId"><code>applicationsId</code></a></td>
    <td><a href="#parameter-overrideStrategy"><code>overrideStrategy</code></a></td>
    <td>Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-applicationsId"><code>applicationsId</code></a>, <a href="#parameter-domainMappingsId"><code>domainMappingsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-applicationsId"><code>applicationsId</code></a>, <a href="#parameter-domainMappingsId"><code>domainMappingsId</code></a></td>
    <td></td>
    <td>Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.</td>
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
<tr id="parameter-domainMappingsId">
    <td><CopyableCode code="domainMappingsId" /></td>
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
<tr id="parameter-overrideStrategy">
    <td><CopyableCode code="overrideStrategy" /></td>
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

Gets the specified domain mapping.

```sql
SELECT
id,
name,
resourceRecords,
sslSettings
FROM google.appengine.domain_mappings
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND applicationsId = '{{ applicationsId }}' -- required
AND domainMappingsId = '{{ domainMappingsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the domain mappings on an application.

```sql
SELECT
id,
name,
resourceRecords,
sslSettings
FROM google.appengine.domain_mappings
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND applicationsId = '{{ applicationsId }}' -- required
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

Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.

```sql
INSERT INTO google.appengine.domain_mappings (
data__id,
data__sslSettings,
projectsId,
locationsId,
applicationsId,
overrideStrategy
)
SELECT 
'{{ id }}',
'{{ sslSettings }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ applicationsId }}',
'{{ overrideStrategy }}'
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
- name: domain_mappings
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the domain_mappings resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the domain_mappings resource.
    - name: applicationsId
      value: "{{ applicationsId }}"
      description: Required parameter for the domain_mappings resource.
    - name: id
      value: "{{ id }}"
      description: |
        Relative name of the domain serving the application. Example: example.com.
    - name: sslSettings
      description: |
        SSL configuration for this domain. If unconfigured, this domain will not serve with SSL.
      value:
        certificateId: "{{ certificateId }}"
        pendingManagedCertificateId: "{{ pendingManagedCertificateId }}"
        sslManagementType: "{{ sslManagementType }}"
    - name: overrideStrategy
      value: "{{ overrideStrategy }}"
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

Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.

```sql
UPDATE google.appengine.domain_mappings
SET 
data__id = '{{ id }}',
data__sslSettings = '{{ sslSettings }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND applicationsId = '{{ applicationsId }}' --required
AND domainMappingsId = '{{ domainMappingsId }}' --required
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

Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.

```sql
DELETE FROM google.appengine.domain_mappings
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND applicationsId = '{{ applicationsId }}' --required
AND domainMappingsId = '{{ domainMappingsId }}' --required
;
```
</TabItem>
</Tabs>
