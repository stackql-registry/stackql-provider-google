--- 
title: firewall_policies_rule
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_policies_rule
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

Creates, updates, deletes, gets or lists a <code>firewall_policies_rule</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="firewall_policies_rule" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.firewall_policies_rule" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_rule"
    values={[
        { label: 'get_rule', value: 'get_rule' }
    ]}
>
<TabItem value="get_rule">

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
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The Action to perform when the client connection triggers the rule. Valid actions for firewall rules are: "allow", "deny", "apply_security_profile_group" and "goto_next" ( "apply_security_profile_group" can be specified only for global network firewall policies or hierarchical firewall policies). Valid actions for packet mirroring rules are: "mirror", "do_not_mirror" and "goto_next".</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="direction" /></td>
    <td><code>string</code></td>
    <td>The direction in which this rule applies. (EGRESS, INGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Denotes whether the firewall policy rule is disabled. When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist. If this is unspecified, the firewall policy rule will be enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="enableLogging" /></td>
    <td><code>boolean</code></td>
    <td>Denotes whether to enable logging for a particular rule. If logging is enabled, logs will be exported to the configured export destination in Stackdriver. Logs may be exported to BigQuery or Pub/Sub. Note: you cannot enable logging on "goto_next" rules.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output only] Type of the resource. Returnscompute#firewallPolicyRule for firewall rules andcompute#packetMirroringRule for packet mirroring rules. (default: compute#firewallPolicyRule)</td>
</tr>
<tr>
    <td><CopyableCode code="match" /></td>
    <td><code>object</code></td>
    <td>A match condition that incoming traffic is evaluated against. If it evaluates to true, the corresponding 'action' is enforced. (id: FirewallPolicyRuleMatcher)</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer (int32)</code></td>
    <td>An integer indicating the priority of a rule in the list. The priority must be a positive value between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest priority.</td>
</tr>
<tr>
    <td><CopyableCode code="ruleName" /></td>
    <td><code>string</code></td>
    <td>An optional name for the rule. This field is not a unique identifier and can be updated.</td>
</tr>
<tr>
    <td><CopyableCode code="ruleTupleCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. [Output Only] Calculation of the complexity of a single firewall policy rule.</td>
</tr>
<tr>
    <td><CopyableCode code="securityProfileGroup" /></td>
    <td><code>string</code></td>
    <td>A fully-qualified URL of a SecurityProfileGroup resource instance. Example: https://networksecurity.googleapis.com/v1/projects/&#123;project&#125;/locations/&#123;location&#125;/securityProfileGroups/my-security-profile-group Must be specified if action is one of 'apply_security_profile_group' or 'mirror'. Cannot be specified for other actions. Can be specified only for global network firewall policies or hierarchical firewall policies.</td>
</tr>
<tr>
    <td><CopyableCode code="targetForwardingRules" /></td>
    <td><code>array</code></td>
    <td>A list of forwarding rules to which this rule applies. This field allows you to control which load balancers get this rule. For example, the following are valid values:              - https://www.googleapis.com/compute/v1/projects/project/global/forwardingRules/forwardingRule      - https://www.googleapis.com/compute/v1/projects/project/regions/region/forwardingRules/forwardingRule      - projects/project/global/      forwardingRules/forwardingRule      - projects/project/regions/region/forwardingRules/      forwardingRule</td>
</tr>
<tr>
    <td><CopyableCode code="targetResources" /></td>
    <td><code>array</code></td>
    <td>A list of network resource URLs to which this rule applies.  This field allows you to control which network's VMs get this rule.  If this field is left blank, all VMs within the organization will receive the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="targetSecureTags" /></td>
    <td><code>array</code></td>
    <td>A list of secure tags that controls which instances the firewall rule applies to. If targetSecureTag are specified, then the firewall rule applies only to instances in the VPC network that have one of those EFFECTIVE secure tags, if all the target_secure_tag are in INEFFECTIVE state, then this rule will be ignored.targetSecureTag may not be set at the same time astargetServiceAccounts. If neither targetServiceAccounts nortargetSecureTag are specified, the firewall rule applies to all instances on the specified network. Maximum number of target label tags allowed is 256.</td>
</tr>
<tr>
    <td><CopyableCode code="targetServiceAccounts" /></td>
    <td><code>array</code></td>
    <td>A list of service accounts indicating the sets of instances that are applied with this rule.</td>
</tr>
<tr>
    <td><CopyableCode code="targetType" /></td>
    <td><code>string</code></td>
    <td>Target types of the firewall policy rule. Default value is INSTANCES. (INSTANCES, INTERNAL_MANAGED_LB)</td>
</tr>
<tr>
    <td><CopyableCode code="tlsInspect" /></td>
    <td><code>boolean</code></td>
    <td>Boolean flag indicating if the traffic should be TLS decrypted. Can be set only if action = 'apply_security_profile_group' and cannot be set for other actions.</td>
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
    <td><a href="#get_rule"><CopyableCode code="get_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-firewallPolicy"><code>firewallPolicy</code></a></td>
    <td><a href="#parameter-priority"><code>priority</code></a></td>
    <td>Gets a rule of the specified priority.</td>
</tr>
<tr>
    <td><a href="#add_rule"><CopyableCode code="add_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-firewallPolicy"><code>firewallPolicy</code></a></td>
    <td><a href="#parameter-maxPriority"><code>maxPriority</code></a>, <a href="#parameter-minPriority"><code>minPriority</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Inserts a rule into a firewall policy.</td>
</tr>
<tr>
    <td><a href="#patch_rule"><CopyableCode code="patch_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-firewallPolicy"><code>firewallPolicy</code></a></td>
    <td><a href="#parameter-priority"><code>priority</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Patches a rule of the specified priority.</td>
</tr>
<tr>
    <td><a href="#remove_rule"><CopyableCode code="remove_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-firewallPolicy"><code>firewallPolicy</code></a></td>
    <td><a href="#parameter-priority"><code>priority</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a rule of the specified priority.</td>
</tr>
<tr>
    <td><a href="#clone_rules"><CopyableCode code="clone_rules" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-firewallPolicy"><code>firewallPolicy</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-sourceFirewallPolicy"><code>sourceFirewallPolicy</code></a></td>
    <td>Copies rules to the specified firewall policy.</td>
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
<tr id="parameter-firewallPolicy">
    <td><CopyableCode code="firewallPolicy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxPriority">
    <td><CopyableCode code="maxPriority" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-minPriority">
    <td><CopyableCode code="minPriority" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-priority">
    <td><CopyableCode code="priority" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sourceFirewallPolicy">
    <td><CopyableCode code="sourceFirewallPolicy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_rule"
    values={[
        { label: 'get_rule', value: 'get_rule' }
    ]}
>
<TabItem value="get_rule">

Gets a rule of the specified priority.

```sql
SELECT
action,
description,
direction,
disabled,
enableLogging,
kind,
match,
priority,
ruleName,
ruleTupleCount,
securityProfileGroup,
targetForwardingRules,
targetResources,
targetSecureTags,
targetServiceAccounts,
targetType,
tlsInspect
FROM google.compute.firewall_policies_rule
WHERE project = '{{ project }}' -- required
AND firewallPolicy = '{{ firewallPolicy }}' -- required
AND priority = '{{ priority }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="add_rule"
    values={[
        { label: 'add_rule', value: 'add_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_rule">

Inserts a rule into a firewall policy.

```sql
INSERT INTO google.compute.firewall_policies_rule (
data__action,
data__description,
data__direction,
data__disabled,
data__enableLogging,
data__match,
data__priority,
data__ruleName,
data__securityProfileGroup,
data__targetForwardingRules,
data__targetResources,
data__targetSecureTags,
data__targetServiceAccounts,
data__targetType,
data__tlsInspect,
project,
firewallPolicy,
maxPriority,
minPriority,
requestId
)
SELECT 
'{{ action }}',
'{{ description }}',
'{{ direction }}',
{{ disabled }},
{{ enableLogging }},
'{{ match }}',
{{ priority }},
'{{ ruleName }}',
'{{ securityProfileGroup }}',
'{{ targetForwardingRules }}',
'{{ targetResources }}',
'{{ targetSecureTags }}',
'{{ targetServiceAccounts }}',
'{{ targetType }}',
{{ tlsInspect }},
'{{ project }}',
'{{ firewallPolicy }}',
'{{ maxPriority }}',
'{{ minPriority }}',
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
- name: firewall_policies_rule
  props:
    - name: project
      value: "{{ project }}"
      description: Required parameter for the firewall_policies_rule resource.
    - name: firewallPolicy
      value: "{{ firewallPolicy }}"
      description: Required parameter for the firewall_policies_rule resource.
    - name: action
      value: "{{ action }}"
      description: |
        The Action to perform when the client connection triggers the rule.
        Valid actions for firewall rules are: "allow", "deny",
        "apply_security_profile_group" and "goto_next" (
        "apply_security_profile_group" can be specified only for global
        network firewall policies or hierarchical firewall policies).
        Valid actions for packet mirroring rules are: "mirror", "do_not_mirror"
        and "goto_next".
    - name: description
      value: "{{ description }}"
      description: |
        An optional description for this resource.
    - name: direction
      value: "{{ direction }}"
      description: |
        The direction in which this rule applies.
      valid_values: ['EGRESS', 'INGRESS']
    - name: disabled
      value: {{ disabled }}
      description: |
        Denotes whether the firewall policy rule is disabled. When set to true,
        the firewall policy rule is not enforced and traffic behaves as if it did
        not exist. If this is unspecified, the firewall policy rule will be
        enabled.
    - name: enableLogging
      value: {{ enableLogging }}
      description: |
        Denotes whether to enable logging for a particular rule. If logging is
        enabled, logs will be exported to the configured export destination in
        Stackdriver. Logs may be exported to BigQuery or Pub/Sub. Note: you
        cannot enable logging on "goto_next" rules.
    - name: match
      description: |
        A match condition that incoming traffic is evaluated against.
        If it evaluates to true, the corresponding 'action' is enforced.
      value:
        destAddressGroups:
          - "{{ destAddressGroups }}"
        destFqdns:
          - "{{ destFqdns }}"
        destIpRanges:
          - "{{ destIpRanges }}"
        destNetworkContext: "{{ destNetworkContext }}"
        destNetworkType: "{{ destNetworkType }}"
        destRegionCodes:
          - "{{ destRegionCodes }}"
        destThreatIntelligences:
          - "{{ destThreatIntelligences }}"
        layer4Configs:
          - ipProtocol: "{{ ipProtocol }}"
            ports: "{{ ports }}"
        srcAddressGroups:
          - "{{ srcAddressGroups }}"
        srcFqdns:
          - "{{ srcFqdns }}"
        srcIpRanges:
          - "{{ srcIpRanges }}"
        srcNetworkContext: "{{ srcNetworkContext }}"
        srcNetworkType: "{{ srcNetworkType }}"
        srcNetworks:
          - "{{ srcNetworks }}"
        srcRegionCodes:
          - "{{ srcRegionCodes }}"
        srcSecureTags:
          - name: "{{ name }}"
            state: "{{ state }}"
        srcThreatIntelligences:
          - "{{ srcThreatIntelligences }}"
    - name: priority
      value: {{ priority }}
      description: |
        An integer indicating the priority of a rule in the list. The priority
        must be a positive value between 0 and 2147483647.
        Rules are evaluated from highest to lowest priority where 0 is the
        highest priority and 2147483647 is the lowest priority.
    - name: ruleName
      value: "{{ ruleName }}"
      description: |
        An optional name for the rule. This field is not a unique identifier
        and can be updated.
    - name: securityProfileGroup
      value: "{{ securityProfileGroup }}"
      description: |
        A fully-qualified URL of a SecurityProfileGroup resource instance.
        Example:
        https://networksecurity.googleapis.com/v1/projects/{project}/locations/{location}/securityProfileGroups/my-security-profile-group
        Must be specified if action is one of 'apply_security_profile_group' or
        'mirror'. Cannot be specified for other actions. Can be specified only
        for global network firewall policies or hierarchical firewall policies.
    - name: targetForwardingRules
      value:
        - "{{ targetForwardingRules }}"
      description: |
        A list of forwarding rules to which this rule applies.
        This field allows you to control which load balancers get this rule.
        For example, the following are valid values:
        - https://www.googleapis.com/compute/v1/projects/project/global/forwardingRules/forwardingRule
        - https://www.googleapis.com/compute/v1/projects/project/regions/region/forwardingRules/forwardingRule
        - projects/project/global/
        forwardingRules/forwardingRule
        - projects/project/regions/region/forwardingRules/
        forwardingRule
    - name: targetResources
      value:
        - "{{ targetResources }}"
      description: |
        A list of network resource URLs to which this rule applies.  This field
        allows you to control which network's VMs get this rule.  If this field
        is left blank, all VMs within the organization will receive the rule.
    - name: targetSecureTags
      description: |
        A list of secure tags that controls which instances the firewall rule
        applies to. If targetSecureTag are specified, then the
        firewall rule applies only to instances in the VPC network that have one
        of those EFFECTIVE secure tags, if all the target_secure_tag are in
        INEFFECTIVE state, then this rule will be ignored.targetSecureTag may not be set at the same time astargetServiceAccounts.
        If neither targetServiceAccounts nortargetSecureTag are specified, the firewall rule applies
        to all instances on the specified network.
        Maximum number of target label tags allowed is 256.
      value:
        - name: "{{ name }}"
          state: "{{ state }}"
    - name: targetServiceAccounts
      value:
        - "{{ targetServiceAccounts }}"
      description: |
        A list of service accounts indicating the sets of instances that are
        applied with this rule.
    - name: targetType
      value: "{{ targetType }}"
      description: |
        Target types of the firewall policy rule.
        Default value is INSTANCES.
      valid_values: ['INSTANCES', 'INTERNAL_MANAGED_LB']
    - name: tlsInspect
      value: {{ tlsInspect }}
      description: |
        Boolean flag indicating if the traffic should be TLS decrypted.
        Can be set only if action = 'apply_security_profile_group' and cannot
        be set for other actions.
    - name: maxPriority
      value: "{{ maxPriority }}"
    - name: minPriority
      value: "{{ minPriority }}"
    - name: requestId
      value: "{{ requestId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch_rule"
    values={[
        { label: 'patch_rule', value: 'patch_rule' }
    ]}
>
<TabItem value="patch_rule">

Patches a rule of the specified priority.

```sql
UPDATE google.compute.firewall_policies_rule
SET 
data__action = '{{ action }}',
data__description = '{{ description }}',
data__direction = '{{ direction }}',
data__disabled = {{ disabled }},
data__enableLogging = {{ enableLogging }},
data__match = '{{ match }}',
data__priority = {{ priority }},
data__ruleName = '{{ ruleName }}',
data__securityProfileGroup = '{{ securityProfileGroup }}',
data__targetForwardingRules = '{{ targetForwardingRules }}',
data__targetResources = '{{ targetResources }}',
data__targetSecureTags = '{{ targetSecureTags }}',
data__targetServiceAccounts = '{{ targetServiceAccounts }}',
data__targetType = '{{ targetType }}',
data__tlsInspect = {{ tlsInspect }}
WHERE 
project = '{{ project }}' --required
AND firewallPolicy = '{{ firewallPolicy }}' --required
AND priority = '{{ priority}}'
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
    defaultValue="remove_rule"
    values={[
        { label: 'remove_rule', value: 'remove_rule' }
    ]}
>
<TabItem value="remove_rule">

Deletes a rule of the specified priority.

```sql
DELETE FROM google.compute.firewall_policies_rule
WHERE project = '{{ project }}' --required
AND firewallPolicy = '{{ firewallPolicy }}' --required
AND priority = '{{ priority }}'
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="clone_rules"
    values={[
        { label: 'clone_rules', value: 'clone_rules' }
    ]}
>
<TabItem value="clone_rules">

Copies rules to the specified firewall policy.

```sql
EXEC google.compute.firewall_policies_rule.clone_rules 
@firewallPolicy='{{ firewallPolicy }}' --required, 
@requestId='{{ requestId }}', 
@sourceFirewallPolicy='{{ sourceFirewallPolicy }}'
;
```
</TabItem>
</Tabs>
