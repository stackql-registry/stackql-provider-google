--- 
title: multicast_consumer_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - multicast_consumer_associations
  - networkservices
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

Creates, updates, deletes, gets or lists a <code>multicast_consumer_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="multicast_consumer_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkservices.multicast_consumer_associations" /></td></tr>
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
    <td>Identifier. The resource name of the multicast consumer association. Use the following format: `projects/*/locations/*/multicastConsumerAssociations/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] The timestamp when the multicast consumer association was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. An optional text description of the multicast consumer association.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key-value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="multicastDomainActivation" /></td>
    <td><code>string</code></td>
    <td>Optional. The resource name of the multicast domain activation that is in the same zone as this multicast consumer association. Use the following format: `projects/*/locations/*/multicastDomainActivations/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Required. The resource name of the multicast consumer VPC network. Use following format: `projects/&#123;project&#125;/locations/global/networks/&#123;network&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="placementPolicy" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output only] A Compute Engine (placement policy)[https://cloud.google.com/compute/docs/instances/placement-policies-overview] that can be used to place virtual machine (VM) instances as multicast consumers close to the multicast infrastructure created for this domain, on a best effort basis.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceState" /></td>
    <td><code>string</code></td>
    <td>Output only. [Deprecated] The resource state of the multicast consumer association. Use the state field instead. (CONSUMER_RESOURCE_STATE_UNSPECIFIED, ACTIVE, OBSOLETE)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>object</code></td>
    <td>Output only. [Output only] The state of the resource. (id: MulticastResourceState)</td>
</tr>
<tr>
    <td><CopyableCode code="uniqueId" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output only] The Google-generated UUID for the resource. This value is unique across all multicast consumer association resources. If a consumer association is deleted and another with the same name is created, the new consumer association is assigned a different unique_id.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] The timestamp when the Multicast Consumer Association was most recently updated.</td>
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
    <td>Identifier. The resource name of the multicast consumer association. Use the following format: `projects/*/locations/*/multicastConsumerAssociations/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] The timestamp when the multicast consumer association was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. An optional text description of the multicast consumer association.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key-value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="multicastDomainActivation" /></td>
    <td><code>string</code></td>
    <td>Optional. The resource name of the multicast domain activation that is in the same zone as this multicast consumer association. Use the following format: `projects/*/locations/*/multicastDomainActivations/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Required. The resource name of the multicast consumer VPC network. Use following format: `projects/&#123;project&#125;/locations/global/networks/&#123;network&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="placementPolicy" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output only] A Compute Engine (placement policy)[https://cloud.google.com/compute/docs/instances/placement-policies-overview] that can be used to place virtual machine (VM) instances as multicast consumers close to the multicast infrastructure created for this domain, on a best effort basis.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceState" /></td>
    <td><code>string</code></td>
    <td>Output only. [Deprecated] The resource state of the multicast consumer association. Use the state field instead. (CONSUMER_RESOURCE_STATE_UNSPECIFIED, ACTIVE, OBSOLETE)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>object</code></td>
    <td>Output only. [Output only] The state of the resource. (id: MulticastResourceState)</td>
</tr>
<tr>
    <td><CopyableCode code="uniqueId" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output only] The Google-generated UUID for the resource. This value is unique across all multicast consumer association resources. If a consumer association is deleted and another with the same name is created, the new consumer association is assigned a different unique_id.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] The timestamp when the Multicast Consumer Association was most recently updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-multicastConsumerAssociationsId"><code>multicastConsumerAssociationsId</code></a></td>
    <td></td>
    <td>Gets details of a single multicast consumer association.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists multicast consumer associations in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-multicastConsumerAssociationId"><code>multicastConsumerAssociationId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new multicast consumer association in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-multicastConsumerAssociationsId"><code>multicastConsumerAssociationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the parameters of a single multicast consumer association.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-multicastConsumerAssociationsId"><code>multicastConsumerAssociationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single multicast consumer association.</td>
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
<tr id="parameter-multicastConsumerAssociationsId">
    <td><CopyableCode code="multicastConsumerAssociationsId" /></td>
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
<tr id="parameter-multicastConsumerAssociationId">
    <td><CopyableCode code="multicastConsumerAssociationId" /></td>
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

Gets details of a single multicast consumer association.

```sql
SELECT
name,
createTime,
description,
labels,
multicastDomainActivation,
network,
placementPolicy,
resourceState,
state,
uniqueId,
updateTime
FROM google.networkservices.multicast_consumer_associations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND multicastConsumerAssociationsId = '{{ multicastConsumerAssociationsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists multicast consumer associations in a given project and location.

```sql
SELECT
name,
createTime,
description,
labels,
multicastDomainActivation,
network,
placementPolicy,
resourceState,
state,
uniqueId,
updateTime
FROM google.networkservices.multicast_consumer_associations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
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

Creates a new multicast consumer association in a given project and location.

```sql
INSERT INTO google.networkservices.multicast_consumer_associations (
data__name,
data__labels,
data__multicastDomainActivation,
data__network,
data__description,
projectsId,
locationsId,
multicastConsumerAssociationId,
requestId
)
SELECT 
'{{ name }}',
'{{ labels }}',
'{{ multicastDomainActivation }}',
'{{ network }}',
'{{ description }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ multicastConsumerAssociationId }}',
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
- name: multicast_consumer_associations
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the multicast_consumer_associations resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the multicast_consumer_associations resource.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The resource name of the multicast consumer association. Use the following format: \`projects/*/locations/*/multicastConsumerAssociations/*\`.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Labels as key-value pairs
    - name: multicastDomainActivation
      value: "{{ multicastDomainActivation }}"
      description: |
        Optional. The resource name of the multicast domain activation that is in the same zone as this multicast consumer association. Use the following format: \`projects/*/locations/*/multicastDomainActivations/*\`.
    - name: network
      value: "{{ network }}"
      description: |
        Required. The resource name of the multicast consumer VPC network. Use following format: \`projects/{project}/locations/global/networks/{network}\`.
    - name: description
      value: "{{ description }}"
      description: |
        Optional. An optional text description of the multicast consumer association.
    - name: multicastConsumerAssociationId
      value: "{{ multicastConsumerAssociationId }}"
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

Updates the parameters of a single multicast consumer association.

```sql
UPDATE google.networkservices.multicast_consumer_associations
SET 
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__multicastDomainActivation = '{{ multicastDomainActivation }}',
data__network = '{{ network }}',
data__description = '{{ description }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND multicastConsumerAssociationsId = '{{ multicastConsumerAssociationsId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
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

Deletes a single multicast consumer association.

```sql
DELETE FROM google.networkservices.multicast_consumer_associations
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND multicastConsumerAssociationsId = '{{ multicastConsumerAssociationsId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
