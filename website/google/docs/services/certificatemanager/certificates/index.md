--- 
title: certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - certificates
  - certificatemanager
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

Creates, updates, deletes, gets or lists a <code>certificates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="certificates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.certificatemanager.certificates" /></td></tr>
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
    <td>Identifier. A user-defined name of the certificate. Certificate names must be unique globally and match pattern `projects/*/locations/*/certificates/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of a Certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. One or more paragraphs of text description of a certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The expiry timestamp of a Certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Set of labels associated with a Certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="managed" /></td>
    <td><code>object</code></td>
    <td>If set, contains configuration and state of a managed certificate. (id: ManagedCertificate)</td>
</tr>
<tr>
    <td><CopyableCode code="managedIdentity" /></td>
    <td><code>object</code></td>
    <td>If set, contains configuration and state of a managed identity certificate. (id: ManagedIdentityCertificate)</td>
</tr>
<tr>
    <td><CopyableCode code="pemCertificate" /></td>
    <td><code>string</code></td>
    <td>Output only. The PEM-encoded certificate chain.</td>
</tr>
<tr>
    <td><CopyableCode code="sanDnsnames" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of Subject Alternative Names of dnsName type defined in the certificate (see RFC 5280 4.2.1.6). Managed certificates that haven't been provisioned yet have this field populated with a value of the managed.domains field.</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The scope of the certificate. (DEFAULT, EDGE_CACHE, ALL_REGIONS, CLIENT_AUTH)</td>
</tr>
<tr>
    <td><CopyableCode code="selfManaged" /></td>
    <td><code>object</code></td>
    <td>If set, defines data of a self-managed certificate. (id: SelfManagedCertificate)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing"</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of a Certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="usedBy" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of resources that use this Certificate.</td>
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
    <td>Identifier. A user-defined name of the certificate. Certificate names must be unique globally and match pattern `projects/*/locations/*/certificates/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of a Certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. One or more paragraphs of text description of a certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The expiry timestamp of a Certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Set of labels associated with a Certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="managed" /></td>
    <td><code>object</code></td>
    <td>If set, contains configuration and state of a managed certificate. (id: ManagedCertificate)</td>
</tr>
<tr>
    <td><CopyableCode code="managedIdentity" /></td>
    <td><code>object</code></td>
    <td>If set, contains configuration and state of a managed identity certificate. (id: ManagedIdentityCertificate)</td>
</tr>
<tr>
    <td><CopyableCode code="pemCertificate" /></td>
    <td><code>string</code></td>
    <td>Output only. The PEM-encoded certificate chain.</td>
</tr>
<tr>
    <td><CopyableCode code="sanDnsnames" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of Subject Alternative Names of dnsName type defined in the certificate (see RFC 5280 4.2.1.6). Managed certificates that haven't been provisioned yet have this field populated with a value of the managed.domains field.</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The scope of the certificate. (DEFAULT, EDGE_CACHE, ALL_REGIONS, CLIENT_AUTH)</td>
</tr>
<tr>
    <td><CopyableCode code="selfManaged" /></td>
    <td><code>object</code></td>
    <td>If set, defines data of a self-managed certificate. (id: SelfManagedCertificate)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing"</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of a Certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="usedBy" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of resources that use this Certificate.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-certificatesId"><code>certificatesId</code></a></td>
    <td></td>
    <td>Gets details of a single Certificate.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Certificates in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-certificateId"><code>certificateId</code></a></td>
    <td>Creates a new Certificate in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-certificatesId"><code>certificatesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a Certificate.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-certificatesId"><code>certificatesId</code></a></td>
    <td></td>
    <td>Deletes a single Certificate.</td>
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
<tr id="parameter-certificatesId">
    <td><CopyableCode code="certificatesId" /></td>
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
<tr id="parameter-certificateId">
    <td><CopyableCode code="certificateId" /></td>
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

Gets details of a single Certificate.

```sql
SELECT
name,
createTime,
description,
expireTime,
labels,
managed,
managedIdentity,
pemCertificate,
sanDnsnames,
scope,
selfManaged,
tags,
updateTime,
usedBy
FROM google.certificatemanager.certificates
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND certificatesId = '{{ certificatesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Certificates in a given project and location.

```sql
SELECT
name,
createTime,
description,
expireTime,
labels,
managed,
managedIdentity,
pemCertificate,
sanDnsnames,
scope,
selfManaged,
tags,
updateTime,
usedBy
FROM google.certificatemanager.certificates
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
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

Creates a new Certificate in a given project and location.

```sql
INSERT INTO google.certificatemanager.certificates (
data__selfManaged,
data__tags,
data__description,
data__managed,
data__labels,
data__name,
data__managedIdentity,
data__scope,
projectsId,
locationsId,
certificateId
)
SELECT 
'{{ selfManaged }}',
'{{ tags }}',
'{{ description }}',
'{{ managed }}',
'{{ labels }}',
'{{ name }}',
'{{ managedIdentity }}',
'{{ scope }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ certificateId }}'
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
- name: certificates
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the certificates resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the certificates resource.
    - name: selfManaged
      description: |
        If set, defines data of a self-managed certificate.
      value:
        pemCertificate: "{{ pemCertificate }}"
        pemPrivateKey: "{{ pemPrivateKey }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing"
    - name: description
      value: "{{ description }}"
      description: |
        Optional. One or more paragraphs of text description of a certificate.
    - name: managed
      description: |
        If set, contains configuration and state of a managed certificate.
      value:
        dnsAuthorizations:
          - "{{ dnsAuthorizations }}"
        state: "{{ state }}"
        authorizationAttemptInfo:
          - state: "{{ state }}"
            troubleshooting:
              issues:
                - "{{ issues }}"
              cname:
                name: "{{ name }}"
                resolvedData:
                  - "{{ resolvedData }}"
                expectedData: "{{ expectedData }}"
              ips:
                serving:
                  - "{{ serving }}"
                servingOnAltPorts:
                  - "{{ servingOnAltPorts }}"
                resolved:
                  - "{{ resolved }}"
            details: "{{ details }}"
            domain: "{{ domain }}"
            attemptTime: "{{ attemptTime }}"
            failureReason: "{{ failureReason }}"
        issuanceConfig: "{{ issuanceConfig }}"
        domains:
          - "{{ domains }}"
        provisioningIssue:
          reason: "{{ reason }}"
          details: "{{ details }}"
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Set of labels associated with a Certificate.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. A user-defined name of the certificate. Certificate names must be unique globally and match pattern \`projects/*/locations/*/certificates/*\`.
    - name: managedIdentity
      description: |
        If set, contains configuration and state of a managed identity certificate.
      value:
        state: "{{ state }}"
        identity: "{{ identity }}"
        provisioningIssue:
          reason: "{{ reason }}"
          details: "{{ details }}"
    - name: scope
      value: "{{ scope }}"
      description: |
        Optional. Immutable. The scope of the certificate.
      valid_values: ['DEFAULT', 'EDGE_CACHE', 'ALL_REGIONS', 'CLIENT_AUTH']
    - name: certificateId
      value: "{{ certificateId }}"
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

Updates a Certificate.

```sql
UPDATE google.certificatemanager.certificates
SET 
data__selfManaged = '{{ selfManaged }}',
data__tags = '{{ tags }}',
data__description = '{{ description }}',
data__managed = '{{ managed }}',
data__labels = '{{ labels }}',
data__name = '{{ name }}',
data__managedIdentity = '{{ managedIdentity }}',
data__scope = '{{ scope }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND certificatesId = '{{ certificatesId }}' --required
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

Deletes a single Certificate.

```sql
DELETE FROM google.certificatemanager.certificates
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND certificatesId = '{{ certificatesId }}' --required
;
```
</TabItem>
</Tabs>
