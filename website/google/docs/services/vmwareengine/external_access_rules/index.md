--- 
title: external_access_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - external_access_rules
  - vmwareengine
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

Creates, updates, deletes, gets or lists an <code>external_access_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="external_access_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.vmwareengine.external_access_rules" /></td></tr>
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
    <td>Output only. The resource name of this external access rule. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-policy/externalAccessRules/my-rule`</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The action that the external access rule performs. (ACTION_UNSPECIFIED, ALLOW, DENY)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation time of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User-provided description for this external access rule.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationIpRanges" /></td>
    <td><code>array</code></td>
    <td>If destination ranges are specified, the external access rule applies only to the traffic that has a destination IP address in these ranges. The specified IP addresses must have reserved external IP addresses in the scope of the parent network policy. To match all external IP addresses in the scope of the parent network policy, specify `0.0.0.0/0`. To match a specific external IP address, specify it using the `IpRange.external_address` property.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationPorts" /></td>
    <td><code>array</code></td>
    <td>A list of destination ports to which the external access rule applies. This field is only applicable for the UDP or TCP protocol. Each entry must be either an integer or a range. For example: `["22"]`, `["80","443"]`, or `["12345-12349"]`. To match all destination ports, specify `["0-65535"]`.</td>
</tr>
<tr>
    <td><CopyableCode code="ipProtocol" /></td>
    <td><code>string</code></td>
    <td>The IP protocol to which the external access rule applies. This value can be one of the following three protocol strings (not case-sensitive): `tcp`, `udp`, or `icmp`.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer (int32)</code></td>
    <td>External access rule priority, which determines the external access rule to use when multiple rules apply. If multiple rules have the same priority, their ordering is non-deterministic. If specific ordering is required, assign unique priorities to enforce such ordering. The external access rule priority is an integer from 100 to 4096, both inclusive. Lower integers indicate higher precedence. For example, a rule with priority `100` has higher precedence than a rule with priority `101`.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceIpRanges" /></td>
    <td><code>array</code></td>
    <td>If source ranges are specified, the external access rule applies only to traffic that has a source IP address in these ranges. These ranges can either be expressed in the CIDR format or as an IP address. As only inbound rules are supported, `ExternalAddress` resources cannot be the source IP addresses of an external access rule. To match all source addresses, specify `0.0.0.0/0`.</td>
</tr>
<tr>
    <td><CopyableCode code="sourcePorts" /></td>
    <td><code>array</code></td>
    <td>A list of source ports to which the external access rule applies. This field is only applicable for the UDP or TCP protocol. Each entry must be either an integer or a range. For example: `["22"]`, `["80","443"]`, or `["12345-12349"]`. To match all source ports, specify `["0-65535"]`.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the resource. (STATE_UNSPECIFIED, ACTIVE, CREATING, UPDATING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System-generated unique identifier for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update time of this resource.</td>
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
    <td>Output only. The resource name of this external access rule. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-policy/externalAccessRules/my-rule`</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The action that the external access rule performs. (ACTION_UNSPECIFIED, ALLOW, DENY)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation time of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User-provided description for this external access rule.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationIpRanges" /></td>
    <td><code>array</code></td>
    <td>If destination ranges are specified, the external access rule applies only to the traffic that has a destination IP address in these ranges. The specified IP addresses must have reserved external IP addresses in the scope of the parent network policy. To match all external IP addresses in the scope of the parent network policy, specify `0.0.0.0/0`. To match a specific external IP address, specify it using the `IpRange.external_address` property.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationPorts" /></td>
    <td><code>array</code></td>
    <td>A list of destination ports to which the external access rule applies. This field is only applicable for the UDP or TCP protocol. Each entry must be either an integer or a range. For example: `["22"]`, `["80","443"]`, or `["12345-12349"]`. To match all destination ports, specify `["0-65535"]`.</td>
</tr>
<tr>
    <td><CopyableCode code="ipProtocol" /></td>
    <td><code>string</code></td>
    <td>The IP protocol to which the external access rule applies. This value can be one of the following three protocol strings (not case-sensitive): `tcp`, `udp`, or `icmp`.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer (int32)</code></td>
    <td>External access rule priority, which determines the external access rule to use when multiple rules apply. If multiple rules have the same priority, their ordering is non-deterministic. If specific ordering is required, assign unique priorities to enforce such ordering. The external access rule priority is an integer from 100 to 4096, both inclusive. Lower integers indicate higher precedence. For example, a rule with priority `100` has higher precedence than a rule with priority `101`.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceIpRanges" /></td>
    <td><code>array</code></td>
    <td>If source ranges are specified, the external access rule applies only to traffic that has a source IP address in these ranges. These ranges can either be expressed in the CIDR format or as an IP address. As only inbound rules are supported, `ExternalAddress` resources cannot be the source IP addresses of an external access rule. To match all source addresses, specify `0.0.0.0/0`.</td>
</tr>
<tr>
    <td><CopyableCode code="sourcePorts" /></td>
    <td><code>array</code></td>
    <td>A list of source ports to which the external access rule applies. This field is only applicable for the UDP or TCP protocol. Each entry must be either an integer or a range. For example: `["22"]`, `["80","443"]`, or `["12345-12349"]`. To match all source ports, specify `["0-65535"]`.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the resource. (STATE_UNSPECIFIED, ACTIVE, CREATING, UPDATING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System-generated unique identifier for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update time of this resource.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-networkPoliciesId"><code>networkPoliciesId</code></a>, <a href="#parameter-externalAccessRulesId"><code>externalAccessRulesId</code></a></td>
    <td></td>
    <td>Gets details of a single external access rule.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-networkPoliciesId"><code>networkPoliciesId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists `ExternalAccessRule` resources in the specified network policy.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-networkPoliciesId"><code>networkPoliciesId</code></a></td>
    <td><a href="#parameter-externalAccessRuleId"><code>externalAccessRuleId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a new external access rule in a given network policy.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-networkPoliciesId"><code>networkPoliciesId</code></a>, <a href="#parameter-externalAccessRulesId"><code>externalAccessRulesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates the parameters of a single external access rule. Only fields specified in `update_mask` are applied.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-networkPoliciesId"><code>networkPoliciesId</code></a>, <a href="#parameter-externalAccessRulesId"><code>externalAccessRulesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single external access rule.</td>
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
<tr id="parameter-externalAccessRulesId">
    <td><CopyableCode code="externalAccessRulesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-networkPoliciesId">
    <td><CopyableCode code="networkPoliciesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-externalAccessRuleId">
    <td><CopyableCode code="externalAccessRuleId" /></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets details of a single external access rule.

```sql
SELECT
name,
action,
createTime,
description,
destinationIpRanges,
destinationPorts,
ipProtocol,
priority,
sourceIpRanges,
sourcePorts,
state,
uid,
updateTime
FROM google.vmwareengine.external_access_rules
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND networkPoliciesId = '{{ networkPoliciesId }}' -- required
AND externalAccessRulesId = '{{ externalAccessRulesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists `ExternalAccessRule` resources in the specified network policy.

```sql
SELECT
name,
action,
createTime,
description,
destinationIpRanges,
destinationPorts,
ipProtocol,
priority,
sourceIpRanges,
sourcePorts,
state,
uid,
updateTime
FROM google.vmwareengine.external_access_rules
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND networkPoliciesId = '{{ networkPoliciesId }}' -- required
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
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a new external access rule in a given network policy.

```sql
INSERT INTO google.vmwareengine.external_access_rules (
data__action,
data__description,
data__destinationIpRanges,
data__destinationPorts,
data__ipProtocol,
data__priority,
data__sourceIpRanges,
data__sourcePorts,
projectsId,
locationsId,
networkPoliciesId,
externalAccessRuleId,
requestId,
validateOnly
)
SELECT 
'{{ action }}',
'{{ description }}',
'{{ destinationIpRanges }}',
'{{ destinationPorts }}',
'{{ ipProtocol }}',
{{ priority }},
'{{ sourceIpRanges }}',
'{{ sourcePorts }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ networkPoliciesId }}',
'{{ externalAccessRuleId }}',
'{{ requestId }}',
'{{ validateOnly }}'
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
- name: external_access_rules
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the external_access_rules resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the external_access_rules resource.
    - name: networkPoliciesId
      value: "{{ networkPoliciesId }}"
      description: Required parameter for the external_access_rules resource.
    - name: action
      value: "{{ action }}"
      description: |
        The action that the external access rule performs.
      valid_values: ['ACTION_UNSPECIFIED', 'ALLOW', 'DENY']
    - name: description
      value: "{{ description }}"
      description: |
        User-provided description for this external access rule.
    - name: destinationIpRanges
      description: |
        If destination ranges are specified, the external access rule applies only to the traffic that has a destination IP address in these ranges. The specified IP addresses must have reserved external IP addresses in the scope of the parent network policy. To match all external IP addresses in the scope of the parent network policy, specify \`0.0.0.0/0\`. To match a specific external IP address, specify it using the \`IpRange.external_address\` property.
      value:
        - externalAddress: "{{ externalAddress }}"
          ipAddress: "{{ ipAddress }}"
          ipAddressRange: "{{ ipAddressRange }}"
    - name: destinationPorts
      value:
        - "{{ destinationPorts }}"
      description: |
        A list of destination ports to which the external access rule applies. This field is only applicable for the UDP or TCP protocol. Each entry must be either an integer or a range. For example: \`["22"]\`, \`["80","443"]\`, or \`["12345-12349"]\`. To match all destination ports, specify \`["0-65535"]\`.
    - name: ipProtocol
      value: "{{ ipProtocol }}"
      description: |
        The IP protocol to which the external access rule applies. This value can be one of the following three protocol strings (not case-sensitive): \`tcp\`, \`udp\`, or \`icmp\`.
    - name: priority
      value: {{ priority }}
      description: |
        External access rule priority, which determines the external access rule to use when multiple rules apply. If multiple rules have the same priority, their ordering is non-deterministic. If specific ordering is required, assign unique priorities to enforce such ordering. The external access rule priority is an integer from 100 to 4096, both inclusive. Lower integers indicate higher precedence. For example, a rule with priority \`100\` has higher precedence than a rule with priority \`101\`.
    - name: sourceIpRanges
      description: |
        If source ranges are specified, the external access rule applies only to traffic that has a source IP address in these ranges. These ranges can either be expressed in the CIDR format or as an IP address. As only inbound rules are supported, \`ExternalAddress\` resources cannot be the source IP addresses of an external access rule. To match all source addresses, specify \`0.0.0.0/0\`.
      value:
        - externalAddress: "{{ externalAddress }}"
          ipAddress: "{{ ipAddress }}"
          ipAddressRange: "{{ ipAddressRange }}"
    - name: sourcePorts
      value:
        - "{{ sourcePorts }}"
      description: |
        A list of source ports to which the external access rule applies. This field is only applicable for the UDP or TCP protocol. Each entry must be either an integer or a range. For example: \`["22"]\`, \`["80","443"]\`, or \`["12345-12349"]\`. To match all source ports, specify \`["0-65535"]\`.
    - name: externalAccessRuleId
      value: "{{ externalAccessRuleId }}"
    - name: requestId
      value: "{{ requestId }}"
    - name: validateOnly
      value: {{ validateOnly }}
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

Updates the parameters of a single external access rule. Only fields specified in `update_mask` are applied.

```sql
UPDATE google.vmwareengine.external_access_rules
SET 
data__action = '{{ action }}',
data__description = '{{ description }}',
data__destinationIpRanges = '{{ destinationIpRanges }}',
data__destinationPorts = '{{ destinationPorts }}',
data__ipProtocol = '{{ ipProtocol }}',
data__priority = {{ priority }},
data__sourceIpRanges = '{{ sourceIpRanges }}',
data__sourcePorts = '{{ sourcePorts }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND networkPoliciesId = '{{ networkPoliciesId }}' --required
AND externalAccessRulesId = '{{ externalAccessRulesId }}' --required
AND requestId = '{{ requestId}}'
AND updateMask = '{{ updateMask}}'
AND validateOnly = {{ validateOnly}}
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

Deletes a single external access rule.

```sql
DELETE FROM google.vmwareengine.external_access_rules
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND networkPoliciesId = '{{ networkPoliciesId }}' --required
AND externalAccessRulesId = '{{ externalAccessRulesId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
