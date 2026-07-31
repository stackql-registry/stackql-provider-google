--- 
title: gateway_advertised_routes
hide_title: false
hide_table_of_contents: false
keywords:
  - gateway_advertised_routes
  - networkconnectivity
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

Creates, updates, deletes, gets or lists a <code>gateway_advertised_routes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="gateway_advertised_routes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkconnectivity.gateway_advertised_routes" /></td></tr>
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
    <td>Identifier. The name of the gateway advertised route. Route names must be unique and use the following form: `projects/&#123;project_number&#125;/locations/&#123;region&#125;/spokes/&#123;spoke&#125;/gatewayAdvertisedRoutes/&#123;gateway_advertised_route_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the gateway advertised route was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of the gateway advertised route.</td>
</tr>
<tr>
    <td><CopyableCode code="ipRange" /></td>
    <td><code>string</code></td>
    <td>Immutable. This route's advertised IP address range. Must be a valid CIDR-formatted prefix. If an IP address is provided without a subnet mask, it is interpreted as, for IPv4, a `/32` singular IP address range, and, for IPv6, `/128`.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. The priority of this advertised route. You can choose a value from `0` to `65335`. If you don't provide a value, Google Cloud assigns a priority of `100` to the ranges.</td>
</tr>
<tr>
    <td><CopyableCode code="recipient" /></td>
    <td><code>string</code></td>
    <td>Optional. The recipient of this advertised route. (RECIPIENT_UNSPECIFIED, ADVERTISE_TO_HUB)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current lifecycle state of this gateway advertised route. (STATE_UNSPECIFIED, CREATING, ACTIVE, DELETING, ACCEPTING, REJECTING, UPDATING, INACTIVE, OBSOLETE, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="uniqueId" /></td>
    <td><code>string</code></td>
    <td>Output only. The Google-generated UUID for the gateway advertised route. This value is unique across all gateway advertised route resources. If a gateway advertised route is deleted and another with the same name is created, the new route is assigned a different `unique_id`.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the gateway advertised route was last updated.</td>
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
    <td>Identifier. The name of the gateway advertised route. Route names must be unique and use the following form: `projects/&#123;project_number&#125;/locations/&#123;region&#125;/spokes/&#123;spoke&#125;/gatewayAdvertisedRoutes/&#123;gateway_advertised_route_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the gateway advertised route was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of the gateway advertised route.</td>
</tr>
<tr>
    <td><CopyableCode code="ipRange" /></td>
    <td><code>string</code></td>
    <td>Immutable. This route's advertised IP address range. Must be a valid CIDR-formatted prefix. If an IP address is provided without a subnet mask, it is interpreted as, for IPv4, a `/32` singular IP address range, and, for IPv6, `/128`.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. The priority of this advertised route. You can choose a value from `0` to `65335`. If you don't provide a value, Google Cloud assigns a priority of `100` to the ranges.</td>
</tr>
<tr>
    <td><CopyableCode code="recipient" /></td>
    <td><code>string</code></td>
    <td>Optional. The recipient of this advertised route. (RECIPIENT_UNSPECIFIED, ADVERTISE_TO_HUB)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current lifecycle state of this gateway advertised route. (STATE_UNSPECIFIED, CREATING, ACTIVE, DELETING, ACCEPTING, REJECTING, UPDATING, INACTIVE, OBSOLETE, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="uniqueId" /></td>
    <td><code>string</code></td>
    <td>Output only. The Google-generated UUID for the gateway advertised route. This value is unique across all gateway advertised route resources. If a gateway advertised route is deleted and another with the same name is created, the new route is assigned a different `unique_id`.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the gateway advertised route was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-spokesId"><code>spokesId</code></a>, <a href="#parameter-gatewayAdvertisedRoutesId"><code>gatewayAdvertisedRoutesId</code></a></td>
    <td></td>
    <td>Get a GatewayAdvertisedRoute</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-spokesId"><code>spokesId</code></a></td>
    <td><a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>List GatewayAdvertisedRoutes</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-spokesId"><code>spokesId</code></a></td>
    <td><a href="#parameter-gatewayAdvertisedRouteId"><code>gatewayAdvertisedRouteId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Create a GatewayAdvertisedRoute</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-spokesId"><code>spokesId</code></a>, <a href="#parameter-gatewayAdvertisedRoutesId"><code>gatewayAdvertisedRoutesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Update a GatewayAdvertisedRoute</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-spokesId"><code>spokesId</code></a>, <a href="#parameter-gatewayAdvertisedRoutesId"><code>gatewayAdvertisedRoutesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Delete a GatewayAdvertisedRoute</td>
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
<tr id="parameter-gatewayAdvertisedRoutesId">
    <td><CopyableCode code="gatewayAdvertisedRoutesId" /></td>
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
<tr id="parameter-spokesId">
    <td><CopyableCode code="spokesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-gatewayAdvertisedRouteId">
    <td><CopyableCode code="gatewayAdvertisedRouteId" /></td>
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

Get a GatewayAdvertisedRoute

```sql
SELECT
name,
createTime,
description,
ipRange,
labels,
priority,
recipient,
state,
uniqueId,
updateTime
FROM google.networkconnectivity.gateway_advertised_routes
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND spokesId = '{{ spokesId }}' -- required
AND gatewayAdvertisedRoutesId = '{{ gatewayAdvertisedRoutesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

List GatewayAdvertisedRoutes

```sql
SELECT
name,
createTime,
description,
ipRange,
labels,
priority,
recipient,
state,
uniqueId,
updateTime
FROM google.networkconnectivity.gateway_advertised_routes
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND spokesId = '{{ spokesId }}' -- required
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
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

Create a GatewayAdvertisedRoute

```sql
INSERT INTO google.networkconnectivity.gateway_advertised_routes (
data__labels,
data__priority,
data__description,
data__ipRange,
data__recipient,
data__name,
projectsId,
locationsId,
spokesId,
gatewayAdvertisedRouteId,
requestId
)
SELECT 
'{{ labels }}',
{{ priority }},
'{{ description }}',
'{{ ipRange }}',
'{{ recipient }}',
'{{ name }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ spokesId }}',
'{{ gatewayAdvertisedRouteId }}',
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
- name: gateway_advertised_routes
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the gateway_advertised_routes resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the gateway_advertised_routes resource.
    - name: spokesId
      value: "{{ spokesId }}"
      description: Required parameter for the gateway_advertised_routes resource.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).
    - name: priority
      value: {{ priority }}
      description: |
        Optional. The priority of this advertised route. You can choose a value from \`0\` to \`65335\`. If you don't provide a value, Google Cloud assigns a priority of \`100\` to the ranges.
    - name: description
      value: "{{ description }}"
      description: |
        An optional description of the gateway advertised route.
    - name: ipRange
      value: "{{ ipRange }}"
      description: |
        Immutable. This route's advertised IP address range. Must be a valid CIDR-formatted prefix. If an IP address is provided without a subnet mask, it is interpreted as, for IPv4, a \`/32\` singular IP address range, and, for IPv6, \`/128\`.
    - name: recipient
      value: "{{ recipient }}"
      description: |
        Optional. The recipient of this advertised route.
      valid_values: ['RECIPIENT_UNSPECIFIED', 'ADVERTISE_TO_HUB']
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The name of the gateway advertised route. Route names must be unique and use the following form: \`projects/{project_number}/locations/{region}/spokes/{spoke}/gatewayAdvertisedRoutes/{gateway_advertised_route_id}\`
    - name: gatewayAdvertisedRouteId
      value: "{{ gatewayAdvertisedRouteId }}"
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

Update a GatewayAdvertisedRoute

```sql
UPDATE google.networkconnectivity.gateway_advertised_routes
SET 
data__labels = '{{ labels }}',
data__priority = {{ priority }},
data__description = '{{ description }}',
data__ipRange = '{{ ipRange }}',
data__recipient = '{{ recipient }}',
data__name = '{{ name }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND spokesId = '{{ spokesId }}' --required
AND gatewayAdvertisedRoutesId = '{{ gatewayAdvertisedRoutesId }}' --required
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

Delete a GatewayAdvertisedRoute

```sql
DELETE FROM google.networkconnectivity.gateway_advertised_routes
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND spokesId = '{{ spokesId }}' --required
AND gatewayAdvertisedRoutesId = '{{ gatewayAdvertisedRoutesId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
