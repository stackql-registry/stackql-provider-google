--- 
title: organization_security_policies_association
hide_title: false
hide_table_of_contents: false
keywords:
  - organization_security_policies_association
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

Creates, updates, deletes, gets or lists an <code>organization_security_policies_association</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organization_security_policies_association" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.organization_security_policies_association" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_association"
    values={[
        { label: 'get_association', value: 'get_association' }
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
    <td><CopyableCode code="attachmentId" /></td>
    <td><code>string</code></td>
    <td>The resource that the security policy is attached to.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The display name of the security policy of the association.</td>
</tr>
<tr>
    <td><CopyableCode code="excludedFolders" /></td>
    <td><code>array</code></td>
    <td>A list of folders to exclude from the security policy.</td>
</tr>
<tr>
    <td><CopyableCode code="excludedProjects" /></td>
    <td><code>array</code></td>
    <td>A list of projects to exclude from the security policy.</td>
</tr>
<tr>
    <td><CopyableCode code="securityPolicyId" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The security policy ID of the association.</td>
</tr>
<tr>
    <td><CopyableCode code="shortName" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The short name of the security policy of the association.</td>
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
    <td><a href="#parameter-securityPolicy"><code>securityPolicy</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td>Gets an association with the specified name.<br /><br />Use this API to read Cloud Armor policies. Previously, alpha and beta<br />versions of this API were used to read firewall policies. This usage is<br />now disabled for most organizations. Use firewallPolicies.getAssociation<br />instead.</td>
</tr>
<tr>
    <td><a href="#add_association"><CopyableCode code="add_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-securityPolicy"><code>securityPolicy</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-replaceExistingAssociation"><code>replaceExistingAssociation</code></a></td>
    <td>Inserts an association for the specified security policy.<br /><br />This has billing implications.  Projects in the hierarchy with effective<br />hierarchical security policies will be automatically enrolled into Cloud<br />Armor Enterprise if not already enrolled.<br /><br />Use this API to modify Cloud Armor policies. Previously, alpha and beta<br />versions of this API were used to modify firewall policies. This usage is<br />now disabled for most organizations. Use firewallPolicies.addAssociation<br />instead.</td>
</tr>
<tr>
    <td><a href="#remove_association"><CopyableCode code="remove_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-securityPolicy"><code>securityPolicy</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td>Removes an association for the specified security policy.<br /><br />Use this API to modify Cloud Armor policies. Previously, alpha and beta<br />versions of this API were used to modify firewall policies. This usage is<br />now disabled for most organizations. Use firewallPolicies.removeAssociation<br />instead.</td>
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
<tr id="parameter-securityPolicy">
    <td><CopyableCode code="securityPolicy" /></td>
    <td><code>string</code></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_association"
    values={[
        { label: 'get_association', value: 'get_association' }
    ]}
>
<TabItem value="get_association">

Gets an association with the specified name.<br /><br />Use this API to read Cloud Armor policies. Previously, alpha and beta<br />versions of this API were used to read firewall policies. This usage is<br />now disabled for most organizations. Use firewallPolicies.getAssociation<br />instead.

```sql
SELECT
name,
attachmentId,
displayName,
excludedFolders,
excludedProjects,
securityPolicyId,
shortName
FROM google.compute.organization_security_policies_association
WHERE securityPolicy = '{{ securityPolicy }}' -- required
AND name = '{{ name }}'
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

Inserts an association for the specified security policy.<br /><br />This has billing implications.  Projects in the hierarchy with effective<br />hierarchical security policies will be automatically enrolled into Cloud<br />Armor Enterprise if not already enrolled.<br /><br />Use this API to modify Cloud Armor policies. Previously, alpha and beta<br />versions of this API were used to modify firewall policies. This usage is<br />now disabled for most organizations. Use firewallPolicies.addAssociation<br />instead.

```sql
INSERT INTO google.compute.organization_security_policies_association (
data__excludedProjects,
data__name,
data__attachmentId,
data__excludedFolders,
securityPolicy,
requestId,
replaceExistingAssociation
)
SELECT 
'{{ excludedProjects }}',
'{{ name }}',
'{{ attachmentId }}',
'{{ excludedFolders }}',
'{{ securityPolicy }}',
'{{ requestId }}',
'{{ replaceExistingAssociation }}'
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
- name: organization_security_policies_association
  props:
    - name: securityPolicy
      value: "{{ securityPolicy }}"
      description: Required parameter for the organization_security_policies_association resource.
    - name: excludedProjects
      value:
        - "{{ excludedProjects }}"
      description: |
        A list of projects to exclude from the security policy.
    - name: name
      value: "{{ name }}"
      description: |
        The name for an association.
    - name: attachmentId
      value: "{{ attachmentId }}"
      description: |
        The resource that the security policy is attached to.
    - name: excludedFolders
      value:
        - "{{ excludedFolders }}"
      description: |
        A list of folders to exclude from the security policy.
    - name: requestId
      value: "{{ requestId }}"
    - name: replaceExistingAssociation
      value: {{ replaceExistingAssociation }}
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

Removes an association for the specified security policy.<br /><br />Use this API to modify Cloud Armor policies. Previously, alpha and beta<br />versions of this API were used to modify firewall policies. This usage is<br />now disabled for most organizations. Use firewallPolicies.removeAssociation<br />instead.

```sql
DELETE FROM google.compute.organization_security_policies_association
WHERE securityPolicy = '{{ securityPolicy }}' --required
AND requestId = '{{ requestId }}'
AND name = '{{ name }}'
;
```
</TabItem>
</Tabs>
