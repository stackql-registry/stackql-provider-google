--- 
title: instances_access_config
hide_title: false
hide_table_of_contents: false
keywords:
  - instances_access_config
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

Creates, updates, deletes, gets or lists an <code>instances_access_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instances_access_config" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.instances_access_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#add_access_config"><CopyableCode code="add_access_config" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-instance"><code>instance</code></a>, <a href="#parameter-networkInterface"><code>networkInterface</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Adds an access config to an instance's network interface.</td>
</tr>
<tr>
    <td><a href="#update_access_config"><CopyableCode code="update_access_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-instance"><code>instance</code></a>, <a href="#parameter-networkInterface"><code>networkInterface</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the specified access config from an instance's network interface<br />with the data included in the request. This method supportsPATCH<br />semantics and uses theJSON merge<br />patch format and processing rules.</td>
</tr>
<tr>
    <td><a href="#delete_access_config"><CopyableCode code="delete_access_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-instance"><code>instance</code></a>, <a href="#parameter-accessConfig"><code>accessConfig</code></a>, <a href="#parameter-networkInterface"><code>networkInterface</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes an access config from an instance's network interface.</td>
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
<tr id="parameter-accessConfig">
    <td><CopyableCode code="accessConfig" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-instance">
    <td><CopyableCode code="instance" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-networkInterface">
    <td><CopyableCode code="networkInterface" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-zone">
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="add_access_config"
    values={[
        { label: 'add_access_config', value: 'add_access_config' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_access_config">

Adds an access config to an instance's network interface.

```sql
INSERT INTO google.compute.instances_access_config (
data__externalIpv6,
data__externalIpv6PrefixLength,
data__name,
data__natIP,
data__networkTier,
data__publicPtrDomainName,
data__securityPolicy,
data__setPublicPtr,
data__type,
project,
zone,
instance,
networkInterface,
requestId
)
SELECT 
'{{ externalIpv6 }}',
{{ externalIpv6PrefixLength }},
'{{ name }}',
'{{ natIP }}',
'{{ networkTier }}',
'{{ publicPtrDomainName }}',
'{{ securityPolicy }}',
{{ setPublicPtr }},
'{{ type }}',
'{{ project }}',
'{{ zone }}',
'{{ instance }}',
'{{ networkInterface }}',
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
- name: instances_access_config
  props:
    - name: project
      value: "{{ project }}"
      description: Required parameter for the instances_access_config resource.
    - name: zone
      value: "{{ zone }}"
      description: Required parameter for the instances_access_config resource.
    - name: instance
      value: "{{ instance }}"
      description: Required parameter for the instances_access_config resource.
    - name: networkInterface
      value: "{{ networkInterface }}"
      description: Required parameter for the instances_access_config resource.
    - name: externalIpv6
      value: "{{ externalIpv6 }}"
      description: |
        Applies to ipv6AccessConfigs only.
        The first IPv6 address of the external IPv6 range associated
        with this instance, prefix length is stored inexternalIpv6PrefixLength in ipv6AccessConfig. To
        use a static external IP address, it must be unused and in the same region
        as the instance's zone. If not specified, Google Cloud will automatically
        assign an external IPv6 address from the instance's subnetwork.
    - name: externalIpv6PrefixLength
      value: {{ externalIpv6PrefixLength }}
      description: |
        Applies to ipv6AccessConfigs only. The prefix length of the
        external IPv6 range.
    - name: name
      value: "{{ name }}"
      description: |
        The name of this access configuration. In accessConfigs
        (IPv4), the default and recommended name is External NAT, but
        you can use any arbitrary string, such as My external IP orNetwork Access. In ipv6AccessConfigs, the
        recommend name is External IPv6.
    - name: natIP
      value: "{{ natIP }}"
      description: |
        Applies to accessConfigs (IPv4) only. Anexternal IP
        address associated with this instance. Specify an unused static
        external IP address available to the project or leave this field undefined
        to use an IP from a shared ephemeral IP address pool. If you specify a
        static external IP address, it must live in the same region as the zone of
        the instance.
    - name: networkTier
      value: "{{ networkTier }}"
      description: |
        This signifies the networking tier used for configuring this access
        configuration and can only take the following values: PREMIUM,STANDARD.
        If an AccessConfig is specified without a valid external IP address, an
        ephemeral IP will be created with this networkTier.
        If an AccessConfig with a valid external IP address is specified, it must
        match that of the networkTier associated with the Address resource owning
        that IP.
      valid_values: ['FIXED_STANDARD', 'PREMIUM', 'STANDARD', 'STANDARD_OVERRIDES_FIXED_STANDARD']
    - name: publicPtrDomainName
      value: "{{ publicPtrDomainName }}"
      description: |
        The DNS domain name for the public PTR record.
        You can set this field only if the \`setPublicPtr\` field is enabled inaccessConfig. If this field is unspecified inipv6AccessConfig, a default PTR record will be created for
        first IP in associated external IPv6 range.
    - name: securityPolicy
      value: "{{ securityPolicy }}"
      description: |
        The resource URL for the security policy associated with this access
        config.
    - name: setPublicPtr
      value: {{ setPublicPtr }}
      description: |
        Specifies whether a public DNS 'PTR' record should be created to map the
        external IP address of the instance to a DNS domain name.
        This field is not used in ipv6AccessConfig. A default PTR
        record will be created if the VM has external IPv6 range associated.
    - name: type
      value: "{{ type }}"
      description: |
        The type of configuration. In accessConfigs (IPv4), the
        default and only option is ONE_TO_ONE_NAT. Inipv6AccessConfigs, the default and only option isDIRECT_IPV6.
      valid_values: ['DIRECT_IPV6', 'ONE_TO_ONE_NAT']
    - name: requestId
      value: "{{ requestId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_access_config"
    values={[
        { label: 'update_access_config', value: 'update_access_config' }
    ]}
>
<TabItem value="update_access_config">

Updates the specified access config from an instance's network interface<br />with the data included in the request. This method supportsPATCH<br />semantics and uses theJSON merge<br />patch format and processing rules.

```sql
UPDATE google.compute.instances_access_config
SET 
data__externalIpv6 = '{{ externalIpv6 }}',
data__externalIpv6PrefixLength = {{ externalIpv6PrefixLength }},
data__name = '{{ name }}',
data__natIP = '{{ natIP }}',
data__networkTier = '{{ networkTier }}',
data__publicPtrDomainName = '{{ publicPtrDomainName }}',
data__securityPolicy = '{{ securityPolicy }}',
data__setPublicPtr = {{ setPublicPtr }},
data__type = '{{ type }}'
WHERE 
project = '{{ project }}' --required
AND zone = '{{ zone }}' --required
AND instance = '{{ instance }}' --required
AND networkInterface = '{{ networkInterface }}' --required
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
    defaultValue="delete_access_config"
    values={[
        { label: 'delete_access_config', value: 'delete_access_config' }
    ]}
>
<TabItem value="delete_access_config">

Deletes an access config from an instance's network interface.

```sql
DELETE FROM google.compute.instances_access_config
WHERE project = '{{ project }}' --required
AND zone = '{{ zone }}' --required
AND instance = '{{ instance }}' --required
AND accessConfig = '{{ accessConfig }}' --required
AND networkInterface = '{{ networkInterface }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
