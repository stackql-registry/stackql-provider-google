--- 
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
  - apphosting
  - firebase
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage firebase resources using SQL
custom_edit_url: null
image: /img/stackql-firebase-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.apphosting.domains" /></td></tr>
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
    <td>Identifier. The resource name of the domain, e.g. `/projects/p/locations/l/backends/b/domains/foo.com`</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Annotations as key value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the domain was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customDomainStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. Represents the state and configuration of a `CUSTOM` type domain. It is only present on Domains of that type. (id: CustomDomainStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the domain was deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the domain is disabled. Defaults to false.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Mutable human-readable name for the domain. 63 character limit. e.g. `prod domain`.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. Server-computed checksum based on other values; may be sent on update or delete to ensure operation is done on expected resource.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. A field that, if true, indicates that the build has an ongoing LRO.</td>
</tr>
<tr>
    <td><CopyableCode code="serve" /></td>
    <td><code>object</code></td>
    <td>Optional. The serving behavior of the domain. If specified, the domain will serve content other than its backend's live content. (id: ServingBehavior)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of the domain. (TYPE_UNSPECIFIED, DEFAULT, CUSTOM)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System-assigned, unique identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the domain was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backendsId"><code>backendsId</code></a>, <a href="#parameter-domainsId"><code>domainsId</code></a></td>
    <td></td>
    <td>Gets information about a domain.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backendsId"><code>backendsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-showDeleted"><code>showDeleted</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists domains of a backend.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backendsId"><code>backendsId</code></a></td>
    <td><a href="#parameter-domainId"><code>domainId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Links a new domain to a backend.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backendsId"><code>backendsId</code></a>, <a href="#parameter-domainsId"><code>domainsId</code></a></td>
    <td><a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the information for a single domain.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-backendsId"><code>backendsId</code></a>, <a href="#parameter-domainsId"><code>domainsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Deletes a single domain.</td>
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
<tr id="parameter-backendsId">
    <td><CopyableCode code="backendsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-domainsId">
    <td><CopyableCode code="domainsId" /></td>
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
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-domainId">
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
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
<tr id="parameter-showDeleted">
    <td><CopyableCode code="showDeleted" /></td>
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

Gets information about a domain.

```sql
SELECT
name,
annotations,
createTime,
customDomainStatus,
deleteTime,
disabled,
displayName,
etag,
labels,
reconciling,
serve,
type,
uid,
updateTime
FROM firebase.apphosting.domains
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND backendsId = '{{ backendsId }}' -- required
AND domainsId = '{{ domainsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists domains of a backend.

```sql
SELECT
*
FROM firebase.apphosting.domains
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND backendsId = '{{ backendsId }}' -- required
AND filter = '{{ filter }}'
AND showDeleted = '{{ showDeleted }}'
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

Links a new domain to a backend.

```sql
INSERT INTO firebase.apphosting.domains (
data__labels,
data__disabled,
data__name,
data__displayName,
data__serve,
data__annotations,
projectsId,
locationsId,
backendsId,
domainId,
validateOnly,
requestId
)
SELECT 
'{{ labels }}',
{{ disabled }},
'{{ name }}',
'{{ displayName }}',
'{{ serve }}',
'{{ annotations }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ backendsId }}',
'{{ domainId }}',
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
- name: domains
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the domains resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the domains resource.
    - name: backendsId
      value: "{{ backendsId }}"
      description: Required parameter for the domains resource.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Labels as key value pairs.
    - name: disabled
      value: {{ disabled }}
      description: |
        Optional. Whether the domain is disabled. Defaults to false.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The resource name of the domain, e.g. \`/projects/p/locations/l/backends/b/domains/foo.com\`
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Optional. Mutable human-readable name for the domain. 63 character limit. e.g. \`prod domain\`.
    - name: serve
      description: |
        Optional. The serving behavior of the domain. If specified, the domain will serve content other than its backend's live content.
      value:
        redirect:
          status: "{{ status }}"
          uri: "{{ uri }}"
    - name: annotations
      value: "{{ annotations }}"
      description: |
        Optional. Annotations as key value pairs.
    - name: domainId
      value: "{{ domainId }}"
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

Updates the information for a single domain.

```sql
UPDATE firebase.apphosting.domains
SET 
data__labels = '{{ labels }}',
data__disabled = {{ disabled }},
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__serve = '{{ serve }}',
data__annotations = '{{ annotations }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND backendsId = '{{ backendsId }}' --required
AND domainsId = '{{ domainsId }}' --required
AND allowMissing = {{ allowMissing}}
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

Deletes a single domain.

```sql
DELETE FROM firebase.apphosting.domains
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND backendsId = '{{ backendsId }}' --required
AND domainsId = '{{ domainsId }}' --required
AND requestId = '{{ requestId }}'
AND etag = '{{ etag }}'
AND validateOnly = '{{ validateOnly }}'
;
```
</TabItem>
</Tabs>
