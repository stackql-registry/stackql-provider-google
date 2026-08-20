--- 
title: instances_network_interface
hide_title: false
hide_table_of_contents: false
keywords:
  - instances_network_interface
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

Creates, updates, deletes, gets or lists an <code>instances_network_interface</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instances_network_interface" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.instances_network_interface" /></td></tr>
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
    <td><a href="#add_network_interface"><CopyableCode code="add_network_interface" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Adds one dynamic network interface to an active instance.</td>
</tr>
<tr>
    <td><a href="#delete_network_interface"><CopyableCode code="delete_network_interface" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-instance"><code>instance</code></a>, <a href="#parameter-networkInterfaceName"><code>networkInterfaceName</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes one dynamic network interface from an active instance.<br />InstancesDeleteNetworkInterfaceRequest indicates:<br />- instance from which to delete, using project+zone+resource_id fields;<br />- dynamic network interface to be deleted, using network_interface_name<br />field;</td>
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
<tr id="parameter-instance">
    <td><CopyableCode code="instance" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-networkInterfaceName">
    <td><CopyableCode code="networkInterfaceName" /></td>
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
    defaultValue="add_network_interface"
    values={[
        { label: 'add_network_interface', value: 'add_network_interface' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_network_interface">

Adds one dynamic network interface to an active instance.

```sql
INSERT INTO google.compute.instances_network_interface (
data__accessConfigs,
data__aliasIpRanges,
data__aliasIpv6Ranges,
data__enableVpcScopedDns,
data__fingerprint,
data__igmpQuery,
data__internalIpv6PrefixLength,
data__ipv6AccessConfigs,
data__ipv6Address,
data__name,
data__network,
data__networkAttachment,
data__networkIP,
data__nicType,
data__parentNicName,
data__queueCount,
data__serviceClassId,
data__stackType,
data__subnetwork,
data__vlan,
project,
zone,
instance,
requestId
)
SELECT 
'{{ accessConfigs }}',
'{{ aliasIpRanges }}',
'{{ aliasIpv6Ranges }}',
{{ enableVpcScopedDns }},
'{{ fingerprint }}',
'{{ igmpQuery }}',
{{ internalIpv6PrefixLength }},
'{{ ipv6AccessConfigs }}',
'{{ ipv6Address }}',
'{{ name }}',
'{{ network }}',
'{{ networkAttachment }}',
'{{ networkIP }}',
'{{ nicType }}',
'{{ parentNicName }}',
{{ queueCount }},
'{{ serviceClassId }}',
'{{ stackType }}',
'{{ subnetwork }}',
{{ vlan }},
'{{ project }}',
'{{ zone }}',
'{{ instance }}',
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
- name: instances_network_interface
  props:
    - name: project
      value: "{{ project }}"
      description: Required parameter for the instances_network_interface resource.
    - name: zone
      value: "{{ zone }}"
      description: Required parameter for the instances_network_interface resource.
    - name: instance
      value: "{{ instance }}"
      description: Required parameter for the instances_network_interface resource.
    - name: accessConfigs
      description: |
        An array of configurations for this interface. Currently, only one access
        config, ONE_TO_ONE_NAT, is supported. If there are noaccessConfigs specified, then this instance will have
        no external internet access.
      value:
        - externalIpv6: "{{ externalIpv6 }}"
          externalIpv6PrefixLength: {{ externalIpv6PrefixLength }}
          kind: "{{ kind }}"
          name: "{{ name }}"
          natIP: "{{ natIP }}"
          networkTier: "{{ networkTier }}"
          publicPtrDomainName: "{{ publicPtrDomainName }}"
          securityPolicy: "{{ securityPolicy }}"
          setPublicPtr: {{ setPublicPtr }}
          type: "{{ type }}"
    - name: aliasIpRanges
      description: |
        An array of alias IP ranges for this network interface.
        You can only specify this field for network interfaces in VPC networks.
      value:
        - ipCidrRange: "{{ ipCidrRange }}"
          subnetworkRangeName: "{{ subnetworkRangeName }}"
    - name: aliasIpv6Ranges
      description: |
        An array of alias IPv6 ranges for this network interface.
        You can only specify this field for network interfaces in VPC networks.
      value:
        - ipCidrRange: "{{ ipCidrRange }}"
          subnetworkRangeName: "{{ subnetworkRangeName }}"
    - name: enableVpcScopedDns
      value: {{ enableVpcScopedDns }}
      description: |
        Optional. If true, DNS resolution will be enabled over this interface. Only valid
        with network_attachment.
    - name: fingerprint
      value: "{{ fingerprint }}"
      description: |
        Fingerprint hash of contents stored in this network interface.
        This field will be ignored when inserting an Instance or
        adding a NetworkInterface. An up-to-date
        fingerprint must be provided in order to update theNetworkInterface. The request will fail with error400 Bad Request if the fingerprint is not provided, or412 Precondition Failed if the fingerprint is out of date.
    - name: igmpQuery
      value: "{{ igmpQuery }}"
      description: |
        Indicate whether igmp query is enabled on the network interface
        or not. If enabled, also indicates the version of IGMP supported.
      valid_values: ['IGMP_QUERY_DISABLED', 'IGMP_QUERY_V2']
    - name: internalIpv6PrefixLength
      value: {{ internalIpv6PrefixLength }}
      description: |
        The prefix length of the primary internal IPv6 range.
    - name: ipv6AccessConfigs
      description: |
        An array of IPv6 access configurations for this interface. Currently, only
        one IPv6 access config, DIRECT_IPV6, is supported. If there
        is no ipv6AccessConfig specified, then this instance will
        have no external IPv6 Internet access.
      value:
        - externalIpv6: "{{ externalIpv6 }}"
          externalIpv6PrefixLength: {{ externalIpv6PrefixLength }}
          kind: "{{ kind }}"
          name: "{{ name }}"
          natIP: "{{ natIP }}"
          networkTier: "{{ networkTier }}"
          publicPtrDomainName: "{{ publicPtrDomainName }}"
          securityPolicy: "{{ securityPolicy }}"
          setPublicPtr: {{ setPublicPtr }}
          type: "{{ type }}"
    - name: ipv6Address
      value: "{{ ipv6Address }}"
      description: |
        An IPv6 internal network address for this network interface. To
        use a static internal IP address, it must be unused and in the same region
        as the instance's zone. If not specified, Google Cloud will automatically
        assign an internal IPv6 address from the instance's subnetwork.
    - name: name
      value: "{{ name }}"
      description: |
        [Output Only] The name of the network interface, which is generated by the
        server. For a VM, the network interface uses the nicN naming
        format. Where N is a value between 0 and7. The default interface value is nic0.
    - name: network
      value: "{{ network }}"
      description: |
        URL of the VPC network resource for this instance. When creating an
        instance, if neither the network nor the subnetwork is specified, the
        default network global/networks/default is used. If the
        selected project doesn't have the default network, you must specify a
        network or subnet. If the network is not specified but the subnetwork is
        specified, the network is inferred.
        If you specify this property, you can specify the network as
        a full or partial URL. For example, the following are all valid URLs:
        - https://www.googleapis.com/compute/v1/projects/project/global/networks/network
        - projects/project/global/networks/network
        - global/networks/default
    - name: networkAttachment
      value: "{{ networkAttachment }}"
      description: |
        The URL of the network attachment that this interface should connect
        to in the following format:
        projects/{project_number}/regions/{region_name}/networkAttachments/{network_attachment_name}.
    - name: networkIP
      value: "{{ networkIP }}"
      description: |
        An IPv4 internal IP address to assign to the instance for this network
        interface. If not specified by the user, an unused internal IP is
        assigned by the system.
    - name: nicType
      value: "{{ nicType }}"
      description: |
        The type of vNIC to be used on this interface. This may be gVNIC or
        VirtioNet.
      valid_values: ['GVNIC', 'IDPF', 'IRDMA', 'MRDMA', 'UNSPECIFIED_NIC_TYPE', 'VIRTIO_NET']
    - name: parentNicName
      value: "{{ parentNicName }}"
      description: |
        Name of the parent network interface of a dynamic network interface.
    - name: queueCount
      value: {{ queueCount }}
      description: |
        The networking queue count that's specified by users for the network
        interface. Both Rx and Tx queues will be set to this number. It'll be empty
        if not specified by the users.
    - name: serviceClassId
      value: "{{ serviceClassId }}"
      description: |
        Optional. Producer Service's Service class Id for the region of this network
        interface. Can only be used with network_attachment. It is not possible to
        use on its own however, network_attachment can be used without
        service_class_id.
    - name: stackType
      value: "{{ stackType }}"
      description: |
        The stack type for this network interface. To assign only IPv4 addresses,
        use IPV4_ONLY. To assign both IPv4 and IPv6 addresses, useIPV4_IPV6. If not specified, IPV4_ONLY is used.
        This field can be both set at instance creation and update network
        interface operations.
      valid_values: ['IPV4_IPV6', 'IPV4_ONLY', 'IPV6_ONLY']
    - name: subnetwork
      value: "{{ subnetwork }}"
      description: |
        The URL of the Subnetwork resource for this instance. If the network
        resource is inlegacy
        mode, do not specify this field. If the network is in auto subnet
        mode, specifying the subnetwork is optional. If the network is in custom
        subnet mode, specifying the subnetwork is required. If you specify this
        field, you can specify the subnetwork as a full or partial URL. For
        example, the following are all valid URLs:
        - https://www.googleapis.com/compute/v1/projects/project/regions/region/subnetworks/subnetwork
        - regions/region/subnetworks/subnetwork
    - name: vlan
      value: {{ vlan }}
      description: |
        VLAN tag of a dynamic network interface, must be  an integer in the range
        from 2 to 255 inclusively.
    - name: requestId
      value: "{{ requestId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_network_interface"
    values={[
        { label: 'delete_network_interface', value: 'delete_network_interface' }
    ]}
>
<TabItem value="delete_network_interface">

Deletes one dynamic network interface from an active instance.<br />InstancesDeleteNetworkInterfaceRequest indicates:<br />- instance from which to delete, using project+zone+resource_id fields;<br />- dynamic network interface to be deleted, using network_interface_name<br />field;

```sql
DELETE FROM google.compute.instances_network_interface
WHERE project = '{{ project }}' --required
AND zone = '{{ zone }}' --required
AND instance = '{{ instance }}' --required
AND networkInterfaceName = '{{ networkInterfaceName }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
