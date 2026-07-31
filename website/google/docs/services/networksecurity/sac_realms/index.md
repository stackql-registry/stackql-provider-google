--- 
title: sac_realms
hide_title: false
hide_table_of_contents: false
keywords:
  - sac_realms
  - networksecurity
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

Creates, updates, deletes, gets or lists a <code>sac_realms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sac_realms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networksecurity.sac_realms" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_sac_realms_get"
    values={[
        { label: 'projects_locations_sac_realms_get', value: 'projects_locations_sac_realms_get' },
        { label: 'projects_locations_sac_realms_list', value: 'projects_locations_sac_realms_list' }
    ]}
>
<TabItem value="projects_locations_sac_realms_get">

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
    <td>Identifier. Resource name, in the form `projects/&#123;project&#125;/locations/global/sacRealms/&#123;sacRealm&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the realm was created.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Optional list of labels applied to the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="pairingKey" /></td>
    <td><code>object</code></td>
    <td>Output only. Key to be shared with SSE service provider during pairing. (id: SACRealmPairingKey)</td>
</tr>
<tr>
    <td><CopyableCode code="securityService" /></td>
    <td><code>string</code></td>
    <td>Immutable. SSE service provider associated with the realm. (SECURITY_SERVICE_UNSPECIFIED, PALO_ALTO_PRISMA_ACCESS)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the realm. (STATE_UNSPECIFIED, PENDING_PARTNER_ATTACHMENT, PARTNER_ATTACHED, PARTNER_DETACHED, KEY_EXPIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the realm was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_sac_realms_list">

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
    <td>Identifier. Resource name, in the form `projects/&#123;project&#125;/locations/global/sacRealms/&#123;sacRealm&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the realm was created.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Optional list of labels applied to the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="pairingKey" /></td>
    <td><code>object</code></td>
    <td>Output only. Key to be shared with SSE service provider during pairing. (id: SACRealmPairingKey)</td>
</tr>
<tr>
    <td><CopyableCode code="securityService" /></td>
    <td><code>string</code></td>
    <td>Immutable. SSE service provider associated with the realm. (SECURITY_SERVICE_UNSPECIFIED, PALO_ALTO_PRISMA_ACCESS)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the realm. (STATE_UNSPECIFIED, PENDING_PARTNER_ATTACHMENT, PARTNER_ATTACHED, PARTNER_DETACHED, KEY_EXPIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the realm was last updated.</td>
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
    <td><a href="#projects_locations_sac_realms_get"><CopyableCode code="projects_locations_sac_realms_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sacRealmsId"><code>sacRealmsId</code></a></td>
    <td></td>
    <td>Returns the specified realm.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sac_realms_list"><CopyableCode code="projects_locations_sac_realms_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists SACRealms in a given project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sac_realms_create"><CopyableCode code="projects_locations_sac_realms_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-sacRealmId"><code>sacRealmId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new SACRealm in a given project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sac_realms_delete"><CopyableCode code="projects_locations_sac_realms_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sacRealmsId"><code>sacRealmsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified realm.</td>
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
<tr id="parameter-sacRealmsId">
    <td><CopyableCode code="sacRealmsId" /></td>
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
<tr id="parameter-sacRealmId">
    <td><CopyableCode code="sacRealmId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_sac_realms_get"
    values={[
        { label: 'projects_locations_sac_realms_get', value: 'projects_locations_sac_realms_get' },
        { label: 'projects_locations_sac_realms_list', value: 'projects_locations_sac_realms_list' }
    ]}
>
<TabItem value="projects_locations_sac_realms_get">

Returns the specified realm.

```sql
SELECT
name,
createTime,
labels,
pairingKey,
securityService,
state,
updateTime
FROM google.networksecurity.sac_realms
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND sacRealmsId = '{{ sacRealmsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_sac_realms_list">

Lists SACRealms in a given project.

```sql
SELECT
name,
createTime,
labels,
pairingKey,
securityService,
state,
updateTime
FROM google.networksecurity.sac_realms
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_sac_realms_create"
    values={[
        { label: 'projects_locations_sac_realms_create', value: 'projects_locations_sac_realms_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_sac_realms_create">

Creates a new SACRealm in a given project.

```sql
INSERT INTO google.networksecurity.sac_realms (
data__labels,
data__securityService,
data__name,
projectsId,
locationsId,
sacRealmId,
requestId
)
SELECT 
'{{ labels }}',
'{{ securityService }}',
'{{ name }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ sacRealmId }}',
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
- name: sac_realms
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the sac_realms resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the sac_realms resource.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Optional list of labels applied to the resource.
    - name: securityService
      value: "{{ securityService }}"
      description: |
        Immutable. SSE service provider associated with the realm.
      valid_values: ['SECURITY_SERVICE_UNSPECIFIED', 'PALO_ALTO_PRISMA_ACCESS']
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. Resource name, in the form \`projects/{project}/locations/global/sacRealms/{sacRealm}\`.
    - name: sacRealmId
      value: "{{ sacRealmId }}"
    - name: requestId
      value: "{{ requestId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_sac_realms_delete"
    values={[
        { label: 'projects_locations_sac_realms_delete', value: 'projects_locations_sac_realms_delete' }
    ]}
>
<TabItem value="projects_locations_sac_realms_delete">

Deletes the specified realm.

```sql
DELETE FROM google.networksecurity.sac_realms
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND sacRealmsId = '{{ sacRealmsId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
