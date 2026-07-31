--- 
title: networks
hide_title: false
hide_table_of_contents: false
keywords:
  - networks
  - compute
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

Creates, updates, deletes, gets or lists a <code>networks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="networks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.networks" /></td></tr>
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
    <td><code>string (uint64)</code></td>
    <td>Output only. [Output Only] The unique identifier for the resource. This identifier is defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply withRFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?`. The first character must be a lowercase letter, and all following characters (except for the last character) must be a dash, lowercase letter, or digit. The last character must be a lowercase letter or digit. (pattern: <code>&#91;a-z&#93;(?:&#91;-a-z0-9&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="IPv4Range" /></td>
    <td><code>string</code></td>
    <td>Deprecated in favor of subnet mode networks. The range of internal addresses that are legal on this network. This range is aCIDR specification, for example:192.168.0.0/16. Provided by the client when the network is created. (pattern: <code>&#91;0-9&#93;&#123;1,3&#125;(?:\.&#91;0-9&#93;&#123;1,3&#125;)&#123;3&#125;/&#91;0-9&#93;&#123;1,2&#125;</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="autoCreateSubnetworks" /></td>
    <td><code>boolean</code></td>
    <td>Must be set to create a VPC network. If not set, a legacy network is created.  When set to true, the VPC network is created in auto mode. When set to false, the VPC network is created in custom mode.  An auto mode VPC network starts with one subnet per region. Each subnet has a predetermined range as described inAuto mode VPC network IP ranges.  For custom mode VPC networks, you can add subnets using the subnetworksinsert method.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Creation timestamp inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this field when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="enableUlaInternalIpv6" /></td>
    <td><code>boolean</code></td>
    <td>Enable ULA internal ipv6 on this network. Enabling this feature will assign a /48 from google defined ULA prefix fd20::/20. .</td>
</tr>
<tr>
    <td><CopyableCode code="firewallPolicy" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] URL of the firewall policy the network is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayIPv4" /></td>
    <td><code>string</code></td>
    <td>[Output Only] The gateway address for default routing out of the network, selected by Google Cloud. (pattern: <code>&#91;0-9&#93;&#123;1,3&#125;(?:\.&#91;0-9&#93;&#123;1,3&#125;)&#123;3&#125;</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="internalIpv6Range" /></td>
    <td><code>string</code></td>
    <td>When enabling ula internal ipv6, caller optionally can specify the /48 range they want from the google defined ULA prefix fd20::/20. The input must be a valid /48 ULA IPv6 address and must be within the fd20::/20. Operation will fail if the speficied /48 is already in used by another resource. If the field is not speficied, then a /48 range will be randomly allocated from fd20::/20 and returned via this field. .</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of the resource. Always compute#network for networks. (default: compute#network)</td>
</tr>
<tr>
    <td><CopyableCode code="mtu" /></td>
    <td><code>integer (int32)</code></td>
    <td>Maximum Transmission Unit in bytes. The minimum value for this field is 1300 and the maximum value is 8896. The suggested value is 1500, which is the default MTU used on the Internet, or 8896 if you want to use Jumbo frames. If unspecified, the value defaults to 1460.</td>
</tr>
<tr>
    <td><CopyableCode code="networkFirewallPolicyEnforcementOrder" /></td>
    <td><code>string</code></td>
    <td>The network firewall policy enforcement order. Can be either AFTER_CLASSIC_FIREWALL or BEFORE_CLASSIC_FIREWALL. Defaults to AFTER_CLASSIC_FIREWALL if the field is not specified. (AFTER_CLASSIC_FIREWALL, BEFORE_CLASSIC_FIREWALL)</td>
</tr>
<tr>
    <td><CopyableCode code="networkProfile" /></td>
    <td><code>string</code></td>
    <td>A full or partial URL of the network profile to apply to this network. This field can be set only at resource creation time. For example, the following are valid URLs:         - https://www.googleapis.com/compute/&#123;api_version&#125;/projects/&#123;project_id&#125;/global/networkProfiles/&#123;network_profile_name&#125;    - projects/&#123;project_id&#125;/global/networkProfiles/&#123;network_profile_name&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>object</code></td>
    <td>Input only. [Input Only] Additional params passed with the request, but not persisted as part of resource payload. (id: NetworkParams)</td>
</tr>
<tr>
    <td><CopyableCode code="peerings" /></td>
    <td><code>array</code></td>
    <td>Output only. [Output Only] A list of network peerings for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="routingConfig" /></td>
    <td><code>object</code></td>
    <td>The network-level routing configuration for this network.  Used by Cloud Router to determine what type of network-wide routing behavior to enforce. (id: NetworkRoutingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLinkWithId" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined URL for this resource with the resource id.</td>
</tr>
<tr>
    <td><CopyableCode code="subnetworks" /></td>
    <td><code>array</code></td>
    <td>[Output Only] Server-defined fully-qualified URLs for all subnetworks in this VPC network.</td>
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
    <td>[Output Only] Unique identifier for the resource; defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>A list of Network resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of resource. Always compute#networkList for lists of networks. (default: compute#networkList)</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>[Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger thanmaxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="warning" /></td>
    <td><code>object</code></td>
    <td>[Output Only] Informational warning message.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-network"><code>network</code></a></td>
    <td></td>
    <td>Returns the specified network.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Retrieves the list of networks available to the specified project.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a network in the specified project using the data included<br />in the request.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-network"><code>network</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Patches the specified network with the data included in the request.<br />Only routingConfig can be modified.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-network"><code>network</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified network.</td>
</tr>
<tr>
    <td><a href="#cancel_request_remove_peering"><CopyableCode code="cancel_request_remove_peering" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-network"><code>network</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Cancel requests to remove a peering from the specified network. Applicable<br />only for PeeringConnection with update_strategy=CONSENSUS.  Cancels a<br />request to remove a peering from the specified network.</td>
</tr>
<tr>
    <td><a href="#switch_to_custom_mode"><CopyableCode code="switch_to_custom_mode" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-network"><code>network</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Switches the network mode from auto subnet mode to custom subnet mode.</td>
</tr>
<tr>
    <td><a href="#request_remove_peering"><CopyableCode code="request_remove_peering" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-network"><code>network</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Requests to remove a peering from the specified network. Applicable only<br />for PeeringConnection with update_strategy=CONSENSUS.</td>
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
<tr id="parameter-network">
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (uint32)</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
    <td><code>string</code></td>
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
<tr id="parameter-returnPartialSuccess">
    <td><CopyableCode code="returnPartialSuccess" /></td>
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

Returns the specified network.

```sql
SELECT
id,
name,
IPv4Range,
autoCreateSubnetworks,
creationTimestamp,
description,
enableUlaInternalIpv6,
firewallPolicy,
gatewayIPv4,
internalIpv6Range,
kind,
mtu,
networkFirewallPolicyEnforcementOrder,
networkProfile,
params,
peerings,
routingConfig,
selfLink,
selfLinkWithId,
subnetworks
FROM google.compute.networks
WHERE project = '{{ project }}' -- required
AND network = '{{ network }}' -- required
;
```
</TabItem>
<TabItem value="list">

Retrieves the list of networks available to the specified project.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.networks
WHERE project = '{{ project }}' -- required
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
AND orderBy = '{{ orderBy }}'
AND filter = '{{ filter }}'
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="insert"
    values={[
        { label: 'insert', value: 'insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert">

Creates a network in the specified project using the data included<br />in the request.

```sql
INSERT INTO google.compute.networks (
data__routingConfig,
data__networkProfile,
data__networkFirewallPolicyEnforcementOrder,
data__gatewayIPv4,
data__enableUlaInternalIpv6,
data__IPv4Range,
data__subnetworks,
data__name,
data__autoCreateSubnetworks,
data__params,
data__internalIpv6Range,
data__description,
data__mtu,
data__selfLink,
project,
requestId
)
SELECT 
'{{ routingConfig }}',
'{{ networkProfile }}',
'{{ networkFirewallPolicyEnforcementOrder }}',
'{{ gatewayIPv4 }}',
{{ enableUlaInternalIpv6 }},
'{{ IPv4Range }}',
'{{ subnetworks }}',
'{{ name }}',
{{ autoCreateSubnetworks }},
'{{ params }}',
'{{ internalIpv6Range }}',
'{{ description }}',
{{ mtu }},
'{{ selfLink }}',
'{{ project }}',
'{{ requestId }}'
RETURNING
id,
name,
clientOperationId,
creationTimestamp,
description,
endTime,
error,
getVersionOperationMetadata,
httpErrorMessage,
httpErrorStatusCode,
insertTime,
instancesBulkInsertOperationMetadata,
kind,
operationGroupId,
operationType,
progress,
region,
selfLink,
setCommonInstanceMetadataOperationMetadata,
startTime,
status,
statusMessage,
targetId,
targetLink,
user,
warnings,
zone
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: networks
  props:
    - name: project
      value: "{{ project }}"
      description: Required parameter for the networks resource.
    - name: routingConfig
      description: |
        The network-level routing configuration for this network.  Used by Cloud
        Router to determine what type of network-wide routing behavior to enforce.
      value:
        bgpInterRegionCost: "{{ bgpInterRegionCost }}"
        routingMode: "{{ routingMode }}"
        bgpAlwaysCompareMed: {{ bgpAlwaysCompareMed }}
        effectiveBgpAlwaysCompareMed: {{ effectiveBgpAlwaysCompareMed }}
        effectiveBgpInterRegionCost: "{{ effectiveBgpInterRegionCost }}"
        bgpBestPathSelectionMode: "{{ bgpBestPathSelectionMode }}"
    - name: networkProfile
      value: "{{ networkProfile }}"
      description: |
        A full or partial URL of the network profile to apply to this network.
        This field can be set only at resource creation time. For example, the
        following are valid URLs:
        - https://www.googleapis.com/compute/{api_version}/projects/{project_id}/global/networkProfiles/{network_profile_name}
        - projects/{project_id}/global/networkProfiles/{network_profile_name}
    - name: networkFirewallPolicyEnforcementOrder
      value: "{{ networkFirewallPolicyEnforcementOrder }}"
      description: |
        The network firewall policy enforcement order. Can be either
        AFTER_CLASSIC_FIREWALL or BEFORE_CLASSIC_FIREWALL. Defaults to
        AFTER_CLASSIC_FIREWALL if the field is not specified.
      valid_values: ['AFTER_CLASSIC_FIREWALL', 'BEFORE_CLASSIC_FIREWALL']
    - name: gatewayIPv4
      value: "{{ gatewayIPv4 }}"
      description: |
        [Output Only] The gateway address for default routing out of the network,
        selected by Google Cloud.
    - name: enableUlaInternalIpv6
      value: {{ enableUlaInternalIpv6 }}
      description: |
        Enable ULA internal ipv6 on this network. Enabling this feature will assign
        a /48 from google defined ULA prefix fd20::/20.
        .
    - name: IPv4Range
      value: "{{ IPv4Range }}"
      description: |
        Deprecated in favor of subnet mode networks.
        The range of internal addresses that are legal on this network. This
        range is aCIDR specification, for example:192.168.0.0/16. Provided by the client when the network is
        created.
    - name: subnetworks
      value:
        - "{{ subnetworks }}"
      description: |
        [Output Only] Server-defined fully-qualified URLs for all subnetworks
        in this VPC network.
    - name: name
      value: "{{ name }}"
      description: |
        Name of the resource. Provided by the client when the resource is created.
        The name must be 1-63 characters long, and comply withRFC1035.
        Specifically, the name must be 1-63 characters long and match the regular
        expression \`[a-z]([-a-z0-9]*[a-z0-9])?\`. The first character must be a
        lowercase letter, and all following characters (except for the last
        character) must be a dash, lowercase letter, or digit. The last character
        must be a lowercase letter or digit.
    - name: autoCreateSubnetworks
      value: {{ autoCreateSubnetworks }}
      description: |
        Must be set to create a VPC network. If not set, a legacy network is
        created.
        When set to true, the VPC network is created in auto mode.
        When set to false, the VPC network is created in custom mode.
        An auto mode VPC network starts with one subnet per region. Each subnet
        has a predetermined range as described inAuto mode VPC network IP ranges.
        For custom mode VPC networks, you can add subnets using the subnetworksinsert
        method.
    - name: params
      description: |
        Input only. [Input Only] Additional params passed with the request, but not persisted
        as part of resource payload.
      value:
        resourceManagerTags: "{{ resourceManagerTags }}"
    - name: internalIpv6Range
      value: "{{ internalIpv6Range }}"
      description: |
        When enabling ula internal ipv6, caller optionally can specify the /48
        range they want from the google defined ULA prefix fd20::/20. The input
        must be a valid /48 ULA IPv6 address and must be within the fd20::/20.
        Operation will fail if the speficied /48 is already in used by another
        resource. If the field is not speficied, then a /48 range will be randomly
        allocated from fd20::/20 and returned via this field.
        .
    - name: description
      value: "{{ description }}"
      description: |
        An optional description of this resource. Provide this field when you
        create the resource.
    - name: mtu
      value: {{ mtu }}
      description: |
        Maximum Transmission Unit in bytes.
        The minimum value for this field is 1300 and the maximum value is 8896.
        The suggested value is 1500, which is the default MTU used on the
        Internet, or 8896 if you want to use Jumbo frames. If unspecified, the
        value defaults to 1460.
    - name: selfLink
      value: "{{ selfLink }}"
      description: |
        [Output Only] Server-defined URL for the resource.
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

Patches the specified network with the data included in the request.<br />Only routingConfig can be modified.

```sql
UPDATE google.compute.networks
SET 
data__routingConfig = '{{ routingConfig }}',
data__networkProfile = '{{ networkProfile }}',
data__networkFirewallPolicyEnforcementOrder = '{{ networkFirewallPolicyEnforcementOrder }}',
data__gatewayIPv4 = '{{ gatewayIPv4 }}',
data__enableUlaInternalIpv6 = {{ enableUlaInternalIpv6 }},
data__IPv4Range = '{{ IPv4Range }}',
data__subnetworks = '{{ subnetworks }}',
data__name = '{{ name }}',
data__autoCreateSubnetworks = {{ autoCreateSubnetworks }},
data__params = '{{ params }}',
data__internalIpv6Range = '{{ internalIpv6Range }}',
data__description = '{{ description }}',
data__mtu = {{ mtu }},
data__selfLink = '{{ selfLink }}'
WHERE 
project = '{{ project }}' --required
AND network = '{{ network }}' --required
AND requestId = '{{ requestId}}'
RETURNING
id,
name,
clientOperationId,
creationTimestamp,
description,
endTime,
error,
getVersionOperationMetadata,
httpErrorMessage,
httpErrorStatusCode,
insertTime,
instancesBulkInsertOperationMetadata,
kind,
operationGroupId,
operationType,
progress,
region,
selfLink,
setCommonInstanceMetadataOperationMetadata,
startTime,
status,
statusMessage,
targetId,
targetLink,
user,
warnings,
zone;
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

Deletes the specified network.

```sql
DELETE FROM google.compute.networks
WHERE project = '{{ project }}' --required
AND network = '{{ network }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_request_remove_peering"
    values={[
        { label: 'cancel_request_remove_peering', value: 'cancel_request_remove_peering' },
        { label: 'switch_to_custom_mode', value: 'switch_to_custom_mode' },
        { label: 'request_remove_peering', value: 'request_remove_peering' }
    ]}
>
<TabItem value="cancel_request_remove_peering">

Cancel requests to remove a peering from the specified network. Applicable<br />only for PeeringConnection with update_strategy=CONSENSUS.  Cancels a<br />request to remove a peering from the specified network.

```sql
EXEC google.compute.networks.cancel_request_remove_peering 
@project='{{ project }}' --required, 
@network='{{ network }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"name": "{{ name }}"
}'
;
```
</TabItem>
<TabItem value="switch_to_custom_mode">

Switches the network mode from auto subnet mode to custom subnet mode.

```sql
EXEC google.compute.networks.switch_to_custom_mode 
@project='{{ project }}' --required, 
@network='{{ network }}' --required, 
@requestId='{{ requestId }}'
;
```
</TabItem>
<TabItem value="request_remove_peering">

Requests to remove a peering from the specified network. Applicable only<br />for PeeringConnection with update_strategy=CONSENSUS.

```sql
EXEC google.compute.networks.request_remove_peering 
@project='{{ project }}' --required, 
@network='{{ network }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"name": "{{ name }}"
}'
;
```
</TabItem>
</Tabs>
