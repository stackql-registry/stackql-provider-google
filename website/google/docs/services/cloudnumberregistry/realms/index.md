--- 
title: realms
hide_title: false
hide_table_of_contents: false
keywords:
  - realms
  - cloudnumberregistry
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

Creates, updates, deletes, gets or lists a <code>realms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="realms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudnumberregistry.realms" /></td></tr>
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
    <td>Required. Identifier. The resource name of the Realm.</td>
</tr>
<tr>
    <td><CopyableCode code="aggregatedData" /></td>
    <td><code>object</code></td>
    <td>Output only. Aggregated data for the Realm. Populated only when the view is AGGREGATE. (id: RealmAggregatedData)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the Realm was created.</td>
</tr>
<tr>
    <td><CopyableCode code="discoveryMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Discovery metadata of the Realm. (id: DiscoveryMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="ipVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. IP version of the Realm. (IP_VERSION_UNSPECIFIED, IPV4, IPV6)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels.</td>
</tr>
<tr>
    <td><CopyableCode code="managementType" /></td>
    <td><code>string</code></td>
    <td>Optional. Management type of the Realm. (MANAGEMENT_TYPE_UNSPECIFIED, CNR, USER)</td>
</tr>
<tr>
    <td><CopyableCode code="registryBook" /></td>
    <td><code>string</code></td>
    <td>Required. Name of the RegistryBook that claims the Realm.</td>
</tr>
<tr>
    <td><CopyableCode code="trafficType" /></td>
    <td><code>string</code></td>
    <td>Required. Traffic type of the Realm. (TRAFFIC_TYPE_UNSPECIFIED, UNSET, INTERNET, PRIVATE, LINKLOCAL)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the Realm was last updated.</td>
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
    <td>Required. Identifier. The resource name of the Realm.</td>
</tr>
<tr>
    <td><CopyableCode code="aggregatedData" /></td>
    <td><code>object</code></td>
    <td>Output only. Aggregated data for the Realm. Populated only when the view is AGGREGATE. (id: RealmAggregatedData)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the Realm was created.</td>
</tr>
<tr>
    <td><CopyableCode code="discoveryMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Discovery metadata of the Realm. (id: DiscoveryMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="ipVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. IP version of the Realm. (IP_VERSION_UNSPECIFIED, IPV4, IPV6)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels.</td>
</tr>
<tr>
    <td><CopyableCode code="managementType" /></td>
    <td><code>string</code></td>
    <td>Optional. Management type of the Realm. (MANAGEMENT_TYPE_UNSPECIFIED, CNR, USER)</td>
</tr>
<tr>
    <td><CopyableCode code="registryBook" /></td>
    <td><code>string</code></td>
    <td>Required. Name of the RegistryBook that claims the Realm.</td>
</tr>
<tr>
    <td><CopyableCode code="trafficType" /></td>
    <td><code>string</code></td>
    <td>Required. Traffic type of the Realm. (TRAFFIC_TYPE_UNSPECIFIED, UNSET, INTERNET, PRIVATE, LINKLOCAL)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the Realm was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-realmsId"><code>realmsId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Gets details of a single Realm.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Lists Realms in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-realmId"><code>realmId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new Realm in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-realmsId"><code>realmsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single Realm.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-realmsId"><code>realmsId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single Realm.</td>
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
<tr id="parameter-realmsId">
    <td><CopyableCode code="realmsId" /></td>
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
<tr id="parameter-realmId">
    <td><CopyableCode code="realmId" /></td>
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
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
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

Gets details of a single Realm.

```sql
SELECT
name,
aggregatedData,
createTime,
discoveryMetadata,
ipVersion,
labels,
managementType,
registryBook,
trafficType,
updateTime
FROM google.cloudnumberregistry.realms
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND realmsId = '{{ realmsId }}' -- required
AND view = '{{ view }}'
;
```
</TabItem>
<TabItem value="list">

Lists Realms in a given project and location.

```sql
SELECT
name,
aggregatedData,
createTime,
discoveryMetadata,
ipVersion,
labels,
managementType,
registryBook,
trafficType,
updateTime
FROM google.cloudnumberregistry.realms
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND view = '{{ view }}'
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

Creates a new Realm in a given project and location.

```sql
INSERT INTO google.cloudnumberregistry.realms (
data__ipVersion,
data__labels,
data__managementType,
data__name,
data__registryBook,
data__trafficType,
projectsId,
locationsId,
realmId,
requestId
)
SELECT 
'{{ ipVersion }}',
'{{ labels }}',
'{{ managementType }}',
'{{ name }}',
'{{ registryBook }}',
'{{ trafficType }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ realmId }}',
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
- name: realms
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the realms resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the realms resource.
    - name: ipVersion
      value: "{{ ipVersion }}"
      description: |
        Optional. IP version of the Realm.
      valid_values: ['IP_VERSION_UNSPECIFIED', 'IPV4', 'IPV6']
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. User-defined labels.
    - name: managementType
      value: "{{ managementType }}"
      description: |
        Optional. Management type of the Realm.
      valid_values: ['MANAGEMENT_TYPE_UNSPECIFIED', 'CNR', 'USER']
    - name: name
      value: "{{ name }}"
      description: |
        Required. Identifier. The resource name of the Realm.
    - name: registryBook
      value: "{{ registryBook }}"
      description: |
        Required. Name of the RegistryBook that claims the Realm.
    - name: trafficType
      value: "{{ trafficType }}"
      description: |
        Required. Traffic type of the Realm.
      valid_values: ['TRAFFIC_TYPE_UNSPECIFIED', 'UNSET', 'INTERNET', 'PRIVATE', 'LINKLOCAL']
    - name: realmId
      value: "{{ realmId }}"
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

Updates the parameters of a single Realm.

```sql
UPDATE google.cloudnumberregistry.realms
SET 
data__ipVersion = '{{ ipVersion }}',
data__labels = '{{ labels }}',
data__managementType = '{{ managementType }}',
data__name = '{{ name }}',
data__registryBook = '{{ registryBook }}',
data__trafficType = '{{ trafficType }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND realmsId = '{{ realmsId }}' --required
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

Deletes a single Realm.

```sql
DELETE FROM google.cloudnumberregistry.realms
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND realmsId = '{{ realmsId }}' --required
AND force = '{{ force }}'
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
