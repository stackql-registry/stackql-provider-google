--- 
title: transports
hide_title: false
hide_table_of_contents: false
keywords:
  - transports
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

Creates, updates, deletes, gets or lists a <code>transports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkconnectivity.transports" /></td></tr>
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
    <td>Identifier. Name of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="advertisedRoutes" /></td>
    <td><code>array</code></td>
    <td>Optional. List of IP Prefixes that will be advertised to the remote provider. Both IPv4 and IPv6 addresses are supported.</td>
</tr>
<tr>
    <td><CopyableCode code="bandwidth" /></td>
    <td><code>string</code></td>
    <td>Optional. Bandwidth of the Transport. This must be one of the supported bandwidths for the remote profile, and must be set when no activation key is being provided. (BANDWIDTH_UNSPECIFIED, BPS_50M, BPS_100M, BPS_200M, BPS_300M, BPS_400M, BPS_500M, BPS_1G, BPS_2G, BPS_5G, BPS_10G, BPS_20G, BPS_50G, BPS_100G)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time stamp.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the Transport.</td>
</tr>
<tr>
    <td><CopyableCode code="generatedActivationKey" /></td>
    <td><code>string</code></td>
    <td>Output only. Google-generated activation key. This is only output if the selected profile supports an OUTPUT key flow. Inputting this to the provider is only valid while the resource is in a PENDING_KEY state. Once the provider has accepted the key, the resource will move to the CONFIGURING state.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="mtuLimit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The maximum transmission unit (MTU) of a packet that can be sent over this transport.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. Resource URI of the Network that will be peered with this Transport. This field must be provided during resource creation and cannot be changed.</td>
</tr>
<tr>
    <td><CopyableCode code="peeringNetwork" /></td>
    <td><code>string</code></td>
    <td>Output only. VPC Network URI that was created for the VPC Peering connection to the provided `network`. If VPC Peering is disconnected, this can be used to re-establish.</td>
</tr>
<tr>
    <td><CopyableCode code="providedActivationKey" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. Key used for establishing a connection with the remote transport. This key can only be provided if the profile supports an INPUT key flow and the resource is in the PENDING_KEY state.</td>
</tr>
<tr>
    <td><CopyableCode code="remoteAccountId" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The user supplied account id for the CSP associated with the remote profile.</td>
</tr>
<tr>
    <td><CopyableCode code="remoteProfile" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. Name of the remoteTransportProfile that this Transport is connecting to.</td>
</tr>
<tr>
    <td><CopyableCode code="stackType" /></td>
    <td><code>string</code></td>
    <td>Optional. IP version stack for the established connectivity. (STACK_TYPE_UNSPECIFIED, IPV4_ONLY, IPV4_IPV6)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the underlying connectivity. (STATE_UNSPECIFIED, CREATING, PENDING_CONFIG, PENDING_KEY, ACTIVE, DELETING, DEPROVISIONED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update time stamp.</td>
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
    <td>Identifier. Name of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="advertisedRoutes" /></td>
    <td><code>array</code></td>
    <td>Optional. List of IP Prefixes that will be advertised to the remote provider. Both IPv4 and IPv6 addresses are supported.</td>
</tr>
<tr>
    <td><CopyableCode code="bandwidth" /></td>
    <td><code>string</code></td>
    <td>Optional. Bandwidth of the Transport. This must be one of the supported bandwidths for the remote profile, and must be set when no activation key is being provided. (BANDWIDTH_UNSPECIFIED, BPS_50M, BPS_100M, BPS_200M, BPS_300M, BPS_400M, BPS_500M, BPS_1G, BPS_2G, BPS_5G, BPS_10G, BPS_20G, BPS_50G, BPS_100G)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time stamp.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the Transport.</td>
</tr>
<tr>
    <td><CopyableCode code="generatedActivationKey" /></td>
    <td><code>string</code></td>
    <td>Output only. Google-generated activation key. This is only output if the selected profile supports an OUTPUT key flow. Inputting this to the provider is only valid while the resource is in a PENDING_KEY state. Once the provider has accepted the key, the resource will move to the CONFIGURING state.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="mtuLimit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The maximum transmission unit (MTU) of a packet that can be sent over this transport.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. Resource URI of the Network that will be peered with this Transport. This field must be provided during resource creation and cannot be changed.</td>
</tr>
<tr>
    <td><CopyableCode code="peeringNetwork" /></td>
    <td><code>string</code></td>
    <td>Output only. VPC Network URI that was created for the VPC Peering connection to the provided `network`. If VPC Peering is disconnected, this can be used to re-establish.</td>
</tr>
<tr>
    <td><CopyableCode code="providedActivationKey" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. Key used for establishing a connection with the remote transport. This key can only be provided if the profile supports an INPUT key flow and the resource is in the PENDING_KEY state.</td>
</tr>
<tr>
    <td><CopyableCode code="remoteAccountId" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The user supplied account id for the CSP associated with the remote profile.</td>
</tr>
<tr>
    <td><CopyableCode code="remoteProfile" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. Name of the remoteTransportProfile that this Transport is connecting to.</td>
</tr>
<tr>
    <td><CopyableCode code="stackType" /></td>
    <td><code>string</code></td>
    <td>Optional. IP version stack for the established connectivity. (STACK_TYPE_UNSPECIFIED, IPV4_ONLY, IPV4_IPV6)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the underlying connectivity. (STATE_UNSPECIFIED, CREATING, PENDING_CONFIG, PENDING_KEY, ACTIVE, DELETING, DEPROVISIONED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update time stamp.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-transportsId"><code>transportsId</code></a></td>
    <td></td>
    <td>Gets details of a single Transport.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Transports in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-transportId"><code>transportId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new Transport in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-transportsId"><code>transportsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the parameters of a single Transport.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-transportsId"><code>transportsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single Transport.</td>
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
<tr id="parameter-transportsId">
    <td><CopyableCode code="transportsId" /></td>
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
<tr id="parameter-transportId">
    <td><CopyableCode code="transportId" /></td>
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

Gets details of a single Transport.

```sql
SELECT
name,
advertisedRoutes,
bandwidth,
createTime,
description,
generatedActivationKey,
labels,
mtuLimit,
network,
peeringNetwork,
providedActivationKey,
remoteAccountId,
remoteProfile,
stackType,
state,
updateTime
FROM google.networkconnectivity.transports
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND transportsId = '{{ transportsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Transports in a given project and location.

```sql
SELECT
name,
advertisedRoutes,
bandwidth,
createTime,
description,
generatedActivationKey,
labels,
mtuLimit,
network,
peeringNetwork,
providedActivationKey,
remoteAccountId,
remoteProfile,
stackType,
state,
updateTime
FROM google.networkconnectivity.transports
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
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

Creates a new Transport in a given project and location.

```sql
INSERT INTO google.networkconnectivity.transports (
data__labels,
data__advertisedRoutes,
data__bandwidth,
data__remoteAccountId,
data__description,
data__remoteProfile,
data__providedActivationKey,
data__stackType,
data__name,
data__network,
projectsId,
locationsId,
transportId,
requestId
)
SELECT 
'{{ labels }}',
'{{ advertisedRoutes }}',
'{{ bandwidth }}',
'{{ remoteAccountId }}',
'{{ description }}',
'{{ remoteProfile }}',
'{{ providedActivationKey }}',
'{{ stackType }}',
'{{ name }}',
'{{ network }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ transportId }}',
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
- name: transports
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the transports resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the transports resource.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Labels as key value pairs.
    - name: advertisedRoutes
      value:
        - "{{ advertisedRoutes }}"
      description: |
        Optional. List of IP Prefixes that will be advertised to the remote provider. Both IPv4 and IPv6 addresses are supported.
    - name: bandwidth
      value: "{{ bandwidth }}"
      description: |
        Optional. Bandwidth of the Transport. This must be one of the supported bandwidths for the remote profile, and must be set when no activation key is being provided.
      valid_values: ['BANDWIDTH_UNSPECIFIED', 'BPS_50M', 'BPS_100M', 'BPS_200M', 'BPS_300M', 'BPS_400M', 'BPS_500M', 'BPS_1G', 'BPS_2G', 'BPS_5G', 'BPS_10G', 'BPS_20G', 'BPS_50G', 'BPS_100G']
    - name: remoteAccountId
      value: "{{ remoteAccountId }}"
      description: |
        Optional. Immutable. The user supplied account id for the CSP associated with the remote profile.
    - name: description
      value: "{{ description }}"
      description: |
        Optional. Description of the Transport.
    - name: remoteProfile
      value: "{{ remoteProfile }}"
      description: |
        Optional. Immutable. Name of the remoteTransportProfile that this Transport is connecting to.
    - name: providedActivationKey
      value: "{{ providedActivationKey }}"
      description: |
        Optional. Immutable. Key used for establishing a connection with the remote transport. This key can only be provided if the profile supports an INPUT key flow and the resource is in the PENDING_KEY state.
    - name: stackType
      value: "{{ stackType }}"
      description: |
        Optional. IP version stack for the established connectivity.
      valid_values: ['STACK_TYPE_UNSPECIFIED', 'IPV4_ONLY', 'IPV4_IPV6']
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. Name of the resource.
    - name: network
      value: "{{ network }}"
      description: |
        Optional. Immutable. Resource URI of the Network that will be peered with this Transport. This field must be provided during resource creation and cannot be changed.
    - name: transportId
      value: "{{ transportId }}"
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

Updates the parameters of a single Transport.

```sql
UPDATE google.networkconnectivity.transports
SET 
data__labels = '{{ labels }}',
data__advertisedRoutes = '{{ advertisedRoutes }}',
data__bandwidth = '{{ bandwidth }}',
data__remoteAccountId = '{{ remoteAccountId }}',
data__description = '{{ description }}',
data__remoteProfile = '{{ remoteProfile }}',
data__providedActivationKey = '{{ providedActivationKey }}',
data__stackType = '{{ stackType }}',
data__name = '{{ name }}',
data__network = '{{ network }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND transportsId = '{{ transportsId }}' --required
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

Deletes a single Transport.

```sql
DELETE FROM google.networkconnectivity.transports
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND transportsId = '{{ transportsId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
