--- 
title: firewall_policies_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_policies_associations
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

Creates, updates, deletes, gets or lists a <code>firewall_policies_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="firewall_policies_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.firewall_policies_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_association"
    values={[
        { label: 'get_association', value: 'get_association' },
        { label: 'list_associations', value: 'list_associations' }
    ]}
>
<TabItem value="get_association">

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
    <td>The name for an association.</td>
</tr>
<tr>
    <td><CopyableCode code="attachmentTarget" /></td>
    <td><code>string</code></td>
    <td>The target that the firewall policy is attached to.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Deprecated, please use short name instead. The display name of the firewall policy of the association.</td>
</tr>
<tr>
    <td><CopyableCode code="firewallPolicyId" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The firewall policy ID of the association.</td>
</tr>
<tr>
    <td><CopyableCode code="shortName" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The short name of the firewall policy of the association.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_associations">

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
    <td><CopyableCode code="associations" /></td>
    <td><code>array</code></td>
    <td>A list of associations.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of firewallPolicy associations. Alwayscompute#FirewallPoliciesListAssociations for lists of firewallPolicy associations. (default: compute#firewallPoliciesListAssociationsResponse)</td>
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
    <td><a href="#get_association"><CopyableCode code="get_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-firewallPolicy"><code>firewallPolicy</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td>Gets an association with the specified name.</td>
</tr>
<tr>
    <td><a href="#list_associations"><CopyableCode code="list_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-targetResource"><code>targetResource</code></a>, <a href="#parameter-includeInheritedPolicies"><code>includeInheritedPolicies</code></a></td>
    <td>Lists associations of a specified target, i.e., organization or folder.</td>
</tr>
<tr>
    <td><a href="#add_association"><CopyableCode code="add_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-firewallPolicy"><code>firewallPolicy</code></a></td>
    <td><a href="#parameter-replaceExistingAssociation"><code>replaceExistingAssociation</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Inserts an association for the specified firewall policy.</td>
</tr>
<tr>
    <td><a href="#remove_association"><CopyableCode code="remove_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-firewallPolicy"><code>firewallPolicy</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Removes an association for the specified firewall policy.</td>
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
<tr id="parameter-includeInheritedPolicies">
    <td><CopyableCode code="includeInheritedPolicies" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-replaceExistingAssociation">
    <td><CopyableCode code="replaceExistingAssociation" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-targetResource">
    <td><CopyableCode code="targetResource" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_association"
    values={[
        { label: 'get_association', value: 'get_association' },
        { label: 'list_associations', value: 'list_associations' }
    ]}
>
<TabItem value="get_association">

Gets an association with the specified name.

```sql
SELECT
name,
attachmentTarget,
displayName,
firewallPolicyId,
shortName
FROM google.compute.firewall_policies_associations
WHERE firewallPolicy = '{{ firewallPolicy }}' -- required
AND name = '{{ name }}'
;
```
</TabItem>
<TabItem value="list_associations">

Lists associations of a specified target, i.e., organization or folder.

```sql
SELECT
associations,
kind
FROM google.compute.firewall_policies_associations
WHERE targetResource = '{{ targetResource }}'
AND includeInheritedPolicies = '{{ includeInheritedPolicies }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="add_association"
    values={[
        { label: 'add_association', value: 'add_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_association">

Inserts an association for the specified firewall policy.

```sql
INSERT INTO google.compute.firewall_policies_associations (
data__name,
data__displayName,
data__attachmentTarget,
firewallPolicy,
replaceExistingAssociation,
requestId
)
SELECT 
'{{ name }}',
'{{ displayName }}',
'{{ attachmentTarget }}',
'{{ firewallPolicy }}',
'{{ replaceExistingAssociation }}',
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
- name: firewall_policies_associations
  props:
    - name: firewallPolicy
      value: "{{ firewallPolicy }}"
      description: Required parameter for the firewall_policies_associations resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name for an association.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        [Output Only] Deprecated, please use short name instead. The display name
        of the firewall policy of the association.
    - name: attachmentTarget
      value: "{{ attachmentTarget }}"
      description: |
        The target that the firewall policy is attached to.
    - name: replaceExistingAssociation
      value: {{ replaceExistingAssociation }}
    - name: requestId
      value: "{{ requestId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_association"
    values={[
        { label: 'remove_association', value: 'remove_association' }
    ]}
>
<TabItem value="remove_association">

Removes an association for the specified firewall policy.

```sql
DELETE FROM google.compute.firewall_policies_associations
WHERE firewallPolicy = '{{ firewallPolicy }}' --required
AND name = '{{ name }}'
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
