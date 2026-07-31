--- 
title: subnetworks
hide_title: false
hide_table_of_contents: false
keywords:
  - subnetworks
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

Creates, updates, deletes, gets or lists a <code>subnetworks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subnetworks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.subnetworks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' },
        { label: 'aggregated_list', value: 'aggregated_list' }
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
    <td>The name of the resource, provided by the client when initially creating the resource. The name must be 1-63 characters long, and comply withRFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: <code>&#91;a-z&#93;(?:&#91;-a-z0-9&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="allowSubnetCidrRoutesOverlap" /></td>
    <td><code>boolean</code></td>
    <td>Whether this subnetwork's ranges can conflict with existing custom routes. Setting this to true allows this subnetwork's primary and secondary ranges to overlap with (and contain) custom routes that have already been configured on the corresponding network.  For example if a static route has range 10.1.0.0/16, a subnet range 10.0.0.0/8 could only be created if allow_conflicting_routes=true.  Overlapping is only allowed on subnetwork operations; routes whose ranges conflict with this subnetwork's ranges won't be allowed unless route.allow_conflicting_subnetworks is set to true.  Typically packets destined to IPs within the subnetwork (which may contain private/sensitive data) are prevented from leaving the virtual network. Setting this field to true will disable this feature.  The default value is false and applies to all existing subnetworks and automatically created subnetworks.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Creation timestamp inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource. This field can be set only at resource creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="enableFlowLogs" /></td>
    <td><code>boolean</code></td>
    <td>Whether to enable flow logging for this subnetwork. If this field is not explicitly set, it will not appear in get listings. If not set the default behavior is determined by the org policy, if there is no org policy specified, then it will default to disabled. This field isn't supported if the subnet purpose field is set toREGIONAL_MANAGED_PROXY. It is recommended to uselogConfig.enable field instead.</td>
</tr>
<tr>
    <td><CopyableCode code="externalIpv6Prefix" /></td>
    <td><code>string</code></td>
    <td>The external IPv6 address range that is owned by this subnetwork.</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string (byte)</code></td>
    <td>Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a Subnetwork. An up-to-date fingerprint must be provided in order to update the Subnetwork, otherwise the request will fail with error 412 conditionNotMet.  To see the latest fingerprint, make a get() request to retrieve a Subnetwork.</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayAddress" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The gateway address for default routes to reach destination addresses outside this subnetwork.</td>
</tr>
<tr>
    <td><CopyableCode code="internalIpv6Prefix" /></td>
    <td><code>string</code></td>
    <td>The internal IPv6 address range that is owned by this subnetwork.</td>
</tr>
<tr>
    <td><CopyableCode code="ipCidrRange" /></td>
    <td><code>string</code></td>
    <td>The range of internal addresses that are owned by this subnetwork. Provide this property when you create the subnetwork. For example,10.0.0.0/8 or 100.64.0.0/10. Ranges must be unique and non-overlapping within a network. Only IPv4 is supported. This field is set at resource creation time. The range can be any range listed in theValid ranges list. The range can be expanded after creation usingexpandIpCidrRange.</td>
</tr>
<tr>
    <td><CopyableCode code="ipCollection" /></td>
    <td><code>string</code></td>
    <td>Reference to the source of IP, like a PublicDelegatedPrefix (PDP) for BYOIP. The PDP must be a sub-PDP in EXTERNAL_IPV6_SUBNETWORK_CREATION or INTERNAL_IPV6_SUBNETWORK_CREATION mode.  Use one of the following formats to specify a sub-PDP when creating a dual stack or IPv6-only subnetwork with external access using BYOIP:        -     Full resource URL, as inhttps://www.googleapis.com/compute/v1/projects/projectId/regions/region/publicDelegatedPrefixes/sub-pdp-name    -     Partial URL, as in                        - projects/projectId/regions/region/publicDelegatedPrefixes/sub-pdp-name           - regions/region/publicDelegatedPrefixes/sub-pdp-name</td>
</tr>
<tr>
    <td><CopyableCode code="ipv6AccessType" /></td>
    <td><code>string</code></td>
    <td>The access type of IPv6 address this subnet holds. It's immutable and can only be specified during creation or the first time the subnet is updated into IPV4_IPV6 dual stack. (EXTERNAL, INTERNAL)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv6CidrRange" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] This field is for internal use.</td>
</tr>
<tr>
    <td><CopyableCode code="ipv6GceEndpoint" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Possible endpoints of this subnetwork. It can be one of the following:        - VM_ONLY: The subnetwork can be used for creating instances and    IPv6 addresses with VM endpoint type. Such a subnetwork gets external IPv6    ranges from a public delegated prefix and cannot be used to create NetLb.    - VM_AND_FR: The subnetwork can be used for creating both VM    instances and Forwarding Rules. It can also be used to reserve IPv6    addresses with both VM and FR endpoint types. Such a subnetwork gets its    IPv6 range from Google IP Pool directly. (VM_AND_FR, VM_ONLY)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of the resource. Always compute#subnetwork for Subnetwork resources. (default: compute#subnetwork)</td>
</tr>
<tr>
    <td><CopyableCode code="logConfig" /></td>
    <td><code>object</code></td>
    <td>This field denotes the VPC flow logging options for this subnetwork. If logging is enabled, logs are exported to Cloud Logging. (id: SubnetworkLogConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>The URL of the network to which this subnetwork belongs, provided by the client when initially creating the subnetwork. This field can be set only at resource creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>object</code></td>
    <td>Input only. [Input Only] Additional params passed with the request, but not persisted as part of resource payload. (id: SubnetworkParams)</td>
</tr>
<tr>
    <td><CopyableCode code="privateIpGoogleAccess" /></td>
    <td><code>boolean</code></td>
    <td>Whether the VMs in this subnet can access Google services without assigned external IP addresses. This field can be both set at resource creation time and updated using setPrivateIpGoogleAccess.</td>
</tr>
<tr>
    <td><CopyableCode code="privateIpv6GoogleAccess" /></td>
    <td><code>string</code></td>
    <td>This field is for internal use.  This field can be both set at resource creation time and updated usingpatch. (DISABLE_GOOGLE_ACCESS, ENABLE_BIDIRECTIONAL_ACCESS_TO_GOOGLE, ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE)</td>
</tr>
<tr>
    <td><CopyableCode code="purpose" /></td>
    <td><code>string</code></td>
    <td> (GLOBAL_MANAGED_PROXY, INTERNAL_HTTPS_LOAD_BALANCER, PEER_MIGRATION, PRIVATE, PRIVATE_NAT, PRIVATE_RFC_1918, PRIVATE_SERVICE_CONNECT, REGIONAL_MANAGED_PROXY)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>URL of the region where the Subnetwork resides. This field can be set only at resource creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="reservedInternalRange" /></td>
    <td><code>string</code></td>
    <td>The URL of the reserved internal range.</td>
</tr>
<tr>
    <td><CopyableCode code="resolveSubnetMask" /></td>
    <td><code>string</code></td>
    <td>Configures subnet mask resolution for this subnetwork. (ARP_ALL_RANGES, ARP_PRIMARY_RANGE)</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The role of subnetwork. Currently, this field is only used when purpose is set to GLOBAL_MANAGED_PROXY orREGIONAL_MANAGED_PROXY. The value can be set toACTIVE or BACKUP. An ACTIVE subnetwork is one that is currently being used for Envoy-based load balancers in a region. A BACKUP subnetwork is one that is ready to be promoted to ACTIVE or is currently draining. This field can be updated with a patch request. (ACTIVE, BACKUP)</td>
</tr>
<tr>
    <td><CopyableCode code="secondaryIpRanges" /></td>
    <td><code>array</code></td>
    <td>An array of configurations for secondary IP ranges for VM instances contained in this subnetwork. The primary IP of such VM must belong to the primary ipCidrRange of the subnetwork. The alias IPs may belong to either primary or secondary ranges. This field can be updated with apatch request. Supports both IPv4 and IPv6 ranges.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="stackType" /></td>
    <td><code>string</code></td>
    <td>The stack type for the subnet. If set to IPV4_ONLY, new VMs in the subnet are assigned IPv4 addresses only. If set toIPV4_IPV6, new VMs in the subnet can be assigned both IPv4 and IPv6 addresses. If not specified, IPV4_ONLY is used.  This field can be both set at resource creation time and updated usingpatch. (IPV4_IPV6, IPV4_ONLY, IPV6_ONLY)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The state of the subnetwork, which can be one of the following values:READY: Subnetwork is created and ready to useDRAINING: only applicable to subnetworks that have the purpose set to INTERNAL_HTTPS_LOAD_BALANCER and indicates that connections to the load balancer are being drained. A subnetwork that is draining cannot be used or modified until it reaches a status ofREADY (DRAINING, READY)</td>
</tr>
<tr>
    <td><CopyableCode code="systemReservedExternalIpv6Ranges" /></td>
    <td><code>array</code></td>
    <td>Output only. [Output Only] The array of external IPv6 network ranges reserved from the subnetwork's external IPv6 range for system use.</td>
</tr>
<tr>
    <td><CopyableCode code="systemReservedInternalIpv6Ranges" /></td>
    <td><code>array</code></td>
    <td>Output only. [Output Only] The array of internal IPv6 network ranges reserved from the subnetwork's internal IPv6 range for system use.</td>
</tr>
<tr>
    <td><CopyableCode code="utilizationDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. [Output Only] The current IP utilization of all subnetwork ranges. Contains the total number of allocated and free IPs in each range. (id: SubnetworkUtilizationDetails)</td>
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
    <td>A list of Subnetwork resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of resource. Always compute#subnetworkList for lists of subnetworks. (default: compute#subnetworkList)</td>
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
<TabItem value="aggregated_list">

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
    <td>The name of the resource, provided by the client when initially creating the resource. The name must be 1-63 characters long, and comply withRFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: <code>&#91;a-z&#93;(?:&#91;-a-z0-9&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="allowSubnetCidrRoutesOverlap" /></td>
    <td><code>boolean</code></td>
    <td>Whether this subnetwork's ranges can conflict with existing custom routes. Setting this to true allows this subnetwork's primary and secondary ranges to overlap with (and contain) custom routes that have already been configured on the corresponding network.  For example if a static route has range 10.1.0.0/16, a subnet range 10.0.0.0/8 could only be created if allow_conflicting_routes=true.  Overlapping is only allowed on subnetwork operations; routes whose ranges conflict with this subnetwork's ranges won't be allowed unless route.allow_conflicting_subnetworks is set to true.  Typically packets destined to IPs within the subnetwork (which may contain private/sensitive data) are prevented from leaving the virtual network. Setting this field to true will disable this feature.  The default value is false and applies to all existing subnetworks and automatically created subnetworks.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Creation timestamp inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource. This field can be set only at resource creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="enableFlowLogs" /></td>
    <td><code>boolean</code></td>
    <td>Whether to enable flow logging for this subnetwork. If this field is not explicitly set, it will not appear in get listings. If not set the default behavior is determined by the org policy, if there is no org policy specified, then it will default to disabled. This field isn't supported if the subnet purpose field is set toREGIONAL_MANAGED_PROXY. It is recommended to uselogConfig.enable field instead.</td>
</tr>
<tr>
    <td><CopyableCode code="externalIpv6Prefix" /></td>
    <td><code>string</code></td>
    <td>The external IPv6 address range that is owned by this subnetwork.</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string (byte)</code></td>
    <td>Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a Subnetwork. An up-to-date fingerprint must be provided in order to update the Subnetwork, otherwise the request will fail with error 412 conditionNotMet.  To see the latest fingerprint, make a get() request to retrieve a Subnetwork.</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayAddress" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The gateway address for default routes to reach destination addresses outside this subnetwork.</td>
</tr>
<tr>
    <td><CopyableCode code="internalIpv6Prefix" /></td>
    <td><code>string</code></td>
    <td>The internal IPv6 address range that is owned by this subnetwork.</td>
</tr>
<tr>
    <td><CopyableCode code="ipCidrRange" /></td>
    <td><code>string</code></td>
    <td>The range of internal addresses that are owned by this subnetwork. Provide this property when you create the subnetwork. For example,10.0.0.0/8 or 100.64.0.0/10. Ranges must be unique and non-overlapping within a network. Only IPv4 is supported. This field is set at resource creation time. The range can be any range listed in theValid ranges list. The range can be expanded after creation usingexpandIpCidrRange.</td>
</tr>
<tr>
    <td><CopyableCode code="ipCollection" /></td>
    <td><code>string</code></td>
    <td>Reference to the source of IP, like a PublicDelegatedPrefix (PDP) for BYOIP. The PDP must be a sub-PDP in EXTERNAL_IPV6_SUBNETWORK_CREATION or INTERNAL_IPV6_SUBNETWORK_CREATION mode.  Use one of the following formats to specify a sub-PDP when creating a dual stack or IPv6-only subnetwork with external access using BYOIP:        -     Full resource URL, as inhttps://www.googleapis.com/compute/v1/projects/projectId/regions/region/publicDelegatedPrefixes/sub-pdp-name    -     Partial URL, as in                        - projects/projectId/regions/region/publicDelegatedPrefixes/sub-pdp-name           - regions/region/publicDelegatedPrefixes/sub-pdp-name</td>
</tr>
<tr>
    <td><CopyableCode code="ipv6AccessType" /></td>
    <td><code>string</code></td>
    <td>The access type of IPv6 address this subnet holds. It's immutable and can only be specified during creation or the first time the subnet is updated into IPV4_IPV6 dual stack. (EXTERNAL, INTERNAL)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv6CidrRange" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] This field is for internal use.</td>
</tr>
<tr>
    <td><CopyableCode code="ipv6GceEndpoint" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Possible endpoints of this subnetwork. It can be one of the following:        - VM_ONLY: The subnetwork can be used for creating instances and    IPv6 addresses with VM endpoint type. Such a subnetwork gets external IPv6    ranges from a public delegated prefix and cannot be used to create NetLb.    - VM_AND_FR: The subnetwork can be used for creating both VM    instances and Forwarding Rules. It can also be used to reserve IPv6    addresses with both VM and FR endpoint types. Such a subnetwork gets its    IPv6 range from Google IP Pool directly. (VM_AND_FR, VM_ONLY)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of the resource. Always compute#subnetwork for Subnetwork resources. (default: compute#subnetwork)</td>
</tr>
<tr>
    <td><CopyableCode code="logConfig" /></td>
    <td><code>object</code></td>
    <td>This field denotes the VPC flow logging options for this subnetwork. If logging is enabled, logs are exported to Cloud Logging. (id: SubnetworkLogConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>The URL of the network to which this subnetwork belongs, provided by the client when initially creating the subnetwork. This field can be set only at resource creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>object</code></td>
    <td>Input only. [Input Only] Additional params passed with the request, but not persisted as part of resource payload. (id: SubnetworkParams)</td>
</tr>
<tr>
    <td><CopyableCode code="privateIpGoogleAccess" /></td>
    <td><code>boolean</code></td>
    <td>Whether the VMs in this subnet can access Google services without assigned external IP addresses. This field can be both set at resource creation time and updated using setPrivateIpGoogleAccess.</td>
</tr>
<tr>
    <td><CopyableCode code="privateIpv6GoogleAccess" /></td>
    <td><code>string</code></td>
    <td>This field is for internal use.  This field can be both set at resource creation time and updated usingpatch. (DISABLE_GOOGLE_ACCESS, ENABLE_BIDIRECTIONAL_ACCESS_TO_GOOGLE, ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE)</td>
</tr>
<tr>
    <td><CopyableCode code="purpose" /></td>
    <td><code>string</code></td>
    <td> (GLOBAL_MANAGED_PROXY, INTERNAL_HTTPS_LOAD_BALANCER, PEER_MIGRATION, PRIVATE, PRIVATE_NAT, PRIVATE_RFC_1918, PRIVATE_SERVICE_CONNECT, REGIONAL_MANAGED_PROXY)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>URL of the region where the Subnetwork resides. This field can be set only at resource creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="reservedInternalRange" /></td>
    <td><code>string</code></td>
    <td>The URL of the reserved internal range.</td>
</tr>
<tr>
    <td><CopyableCode code="resolveSubnetMask" /></td>
    <td><code>string</code></td>
    <td>Configures subnet mask resolution for this subnetwork. (ARP_ALL_RANGES, ARP_PRIMARY_RANGE)</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The role of subnetwork. Currently, this field is only used when purpose is set to GLOBAL_MANAGED_PROXY orREGIONAL_MANAGED_PROXY. The value can be set toACTIVE or BACKUP. An ACTIVE subnetwork is one that is currently being used for Envoy-based load balancers in a region. A BACKUP subnetwork is one that is ready to be promoted to ACTIVE or is currently draining. This field can be updated with a patch request. (ACTIVE, BACKUP)</td>
</tr>
<tr>
    <td><CopyableCode code="secondaryIpRanges" /></td>
    <td><code>array</code></td>
    <td>An array of configurations for secondary IP ranges for VM instances contained in this subnetwork. The primary IP of such VM must belong to the primary ipCidrRange of the subnetwork. The alias IPs may belong to either primary or secondary ranges. This field can be updated with apatch request. Supports both IPv4 and IPv6 ranges.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="stackType" /></td>
    <td><code>string</code></td>
    <td>The stack type for the subnet. If set to IPV4_ONLY, new VMs in the subnet are assigned IPv4 addresses only. If set toIPV4_IPV6, new VMs in the subnet can be assigned both IPv4 and IPv6 addresses. If not specified, IPV4_ONLY is used.  This field can be both set at resource creation time and updated usingpatch. (IPV4_IPV6, IPV4_ONLY, IPV6_ONLY)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The state of the subnetwork, which can be one of the following values:READY: Subnetwork is created and ready to useDRAINING: only applicable to subnetworks that have the purpose set to INTERNAL_HTTPS_LOAD_BALANCER and indicates that connections to the load balancer are being drained. A subnetwork that is draining cannot be used or modified until it reaches a status ofREADY (DRAINING, READY)</td>
</tr>
<tr>
    <td><CopyableCode code="systemReservedExternalIpv6Ranges" /></td>
    <td><code>array</code></td>
    <td>Output only. [Output Only] The array of external IPv6 network ranges reserved from the subnetwork's external IPv6 range for system use.</td>
</tr>
<tr>
    <td><CopyableCode code="systemReservedInternalIpv6Ranges" /></td>
    <td><code>array</code></td>
    <td>Output only. [Output Only] The array of internal IPv6 network ranges reserved from the subnetwork's internal IPv6 range for system use.</td>
</tr>
<tr>
    <td><CopyableCode code="utilizationDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. [Output Only] The current IP utilization of all subnetwork ranges. Contains the total number of allocated and free IPs in each range. (id: SubnetworkUtilizationDetails)</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-subnetwork"><code>subnetwork</code></a></td>
    <td><a href="#parameter-views"><code>views</code></a></td>
    <td>Returns the specified subnetwork.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-views"><code>views</code></a></td>
    <td>Retrieves a list of subnetworks available to the specified<br />project.</td>
</tr>
<tr>
    <td><a href="#aggregated_list"><CopyableCode code="aggregated_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-serviceProjectNumber"><code>serviceProjectNumber</code></a>, <a href="#parameter-includeAllScopes"><code>includeAllScopes</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-views"><code>views</code></a></td>
    <td>Retrieves an aggregated list of subnetworks.<br /><br />To prevent failure, Google recommends that you set the<br />`returnPartialSuccess` parameter to `true`.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a subnetwork in the specified project using the data<br />included in the request.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-subnetwork"><code>subnetwork</code></a></td>
    <td><a href="#parameter-drainTimeoutSeconds"><code>drainTimeoutSeconds</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Patches the specified subnetwork with the data included in the request.<br />Only certain fields can be updated with a patch request<br />as indicated in the field descriptions.<br />You must specify the current fingerprint of the<br />subnetwork resource being patched.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-subnetwork"><code>subnetwork</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified subnetwork.</td>
</tr>
<tr>
    <td><a href="#set_private_ip_google_access"><CopyableCode code="set_private_ip_google_access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-subnetwork"><code>subnetwork</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Set whether VMs in this subnet can access Google services without assigning<br />external IP addresses through Private Google Access.</td>
</tr>
<tr>
    <td><a href="#expand_ip_cidr_range"><CopyableCode code="expand_ip_cidr_range" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-subnetwork"><code>subnetwork</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Expands the IP CIDR range of the subnetwork to a specified value.</td>
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
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-subnetwork">
    <td><CopyableCode code="subnetwork" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-drainTimeoutSeconds">
    <td><CopyableCode code="drainTimeoutSeconds" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includeAllScopes">
    <td><CopyableCode code="includeAllScopes" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-serviceProjectNumber">
    <td><CopyableCode code="serviceProjectNumber" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-views">
    <td><CopyableCode code="views" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' },
        { label: 'aggregated_list', value: 'aggregated_list' }
    ]}
>
<TabItem value="get">

Returns the specified subnetwork.

```sql
SELECT
id,
name,
allowSubnetCidrRoutesOverlap,
creationTimestamp,
description,
enableFlowLogs,
externalIpv6Prefix,
fingerprint,
gatewayAddress,
internalIpv6Prefix,
ipCidrRange,
ipCollection,
ipv6AccessType,
ipv6CidrRange,
ipv6GceEndpoint,
kind,
logConfig,
network,
params,
privateIpGoogleAccess,
privateIpv6GoogleAccess,
purpose,
region,
reservedInternalRange,
resolveSubnetMask,
role,
secondaryIpRanges,
selfLink,
stackType,
state,
systemReservedExternalIpv6Ranges,
systemReservedInternalIpv6Ranges,
utilizationDetails
FROM google.compute.subnetworks
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND subnetwork = '{{ subnetwork }}' -- required
AND views = '{{ views }}'
;
```
</TabItem>
<TabItem value="list">

Retrieves a list of subnetworks available to the specified<br />project.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.subnetworks
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND views = '{{ views }}'
;
```
</TabItem>
<TabItem value="aggregated_list">

Retrieves an aggregated list of subnetworks.<br /><br />To prevent failure, Google recommends that you set the<br />`returnPartialSuccess` parameter to `true`.

```sql
SELECT
id,
name,
allowSubnetCidrRoutesOverlap,
creationTimestamp,
description,
enableFlowLogs,
externalIpv6Prefix,
fingerprint,
gatewayAddress,
internalIpv6Prefix,
ipCidrRange,
ipCollection,
ipv6AccessType,
ipv6CidrRange,
ipv6GceEndpoint,
kind,
logConfig,
network,
params,
privateIpGoogleAccess,
privateIpv6GoogleAccess,
purpose,
region,
reservedInternalRange,
resolveSubnetMask,
role,
secondaryIpRanges,
selfLink,
stackType,
state,
systemReservedExternalIpv6Ranges,
systemReservedInternalIpv6Ranges,
utilizationDetails
FROM google.compute.subnetworks
WHERE project = '{{ project }}' -- required
AND maxResults = '{{ maxResults }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND serviceProjectNumber = '{{ serviceProjectNumber }}'
AND includeAllScopes = '{{ includeAllScopes }}'
AND orderBy = '{{ orderBy }}'
AND views = '{{ views }}'
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

Creates a subnetwork in the specified project using the data<br />included in the request.

```sql
INSERT INTO google.compute.subnetworks (
data__description,
data__externalIpv6Prefix,
data__ipCollection,
data__name,
data__logConfig,
data__ipv6AccessType,
data__reservedInternalRange,
data__secondaryIpRanges,
data__enableFlowLogs,
data__internalIpv6Prefix,
data__role,
data__privateIpGoogleAccess,
data__selfLink,
data__purpose,
data__params,
data__allowSubnetCidrRoutesOverlap,
data__resolveSubnetMask,
data__network,
data__stackType,
data__ipCidrRange,
data__privateIpv6GoogleAccess,
data__region,
data__fingerprint,
project,
region,
requestId
)
SELECT 
'{{ description }}',
'{{ externalIpv6Prefix }}',
'{{ ipCollection }}',
'{{ name }}',
'{{ logConfig }}',
'{{ ipv6AccessType }}',
'{{ reservedInternalRange }}',
'{{ secondaryIpRanges }}',
{{ enableFlowLogs }},
'{{ internalIpv6Prefix }}',
'{{ role }}',
{{ privateIpGoogleAccess }},
'{{ selfLink }}',
'{{ purpose }}',
'{{ params }}',
{{ allowSubnetCidrRoutesOverlap }},
'{{ resolveSubnetMask }}',
'{{ network }}',
'{{ stackType }}',
'{{ ipCidrRange }}',
'{{ privateIpv6GoogleAccess }}',
'{{ region }}',
'{{ fingerprint }}',
'{{ project }}',
'{{ region }}',
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
- name: subnetworks
  props:
    - name: project
      value: "{{ project }}"
      description: Required parameter for the subnetworks resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the subnetworks resource.
    - name: description
      value: "{{ description }}"
      description: |
        An optional description of this resource. Provide this property when you
        create the resource. This field can be set only at resource creation time.
    - name: externalIpv6Prefix
      value: "{{ externalIpv6Prefix }}"
      description: |
        The external IPv6 address range that is owned by this
        subnetwork.
    - name: ipCollection
      value: "{{ ipCollection }}"
      description: |
        Reference to the source of IP, like a PublicDelegatedPrefix
        (PDP) for BYOIP. The PDP must be a sub-PDP in
        EXTERNAL_IPV6_SUBNETWORK_CREATION or INTERNAL_IPV6_SUBNETWORK_CREATION
        mode.
        Use one of the following formats to specify a sub-PDP when creating a dual
        stack or IPv6-only subnetwork with external access using BYOIP:
        -
        Full resource URL, as inhttps://www.googleapis.com/compute/v1/projects/projectId/regions/region/publicDelegatedPrefixes/sub-pdp-name
        -
        Partial URL, as in
        - projects/projectId/regions/region/publicDelegatedPrefixes/sub-pdp-name
        - regions/region/publicDelegatedPrefixes/sub-pdp-name
    - name: name
      value: "{{ name }}"
      description: |
        The name of the resource, provided by the client when initially creating
        the resource. The name must be 1-63 characters long, and comply withRFC1035.
        Specifically, the name must be 1-63 characters long and match the regular
        expression \`[a-z]([-a-z0-9]*[a-z0-9])?\` which means the first
        character must be a lowercase letter, and all following characters must
        be a dash, lowercase letter, or digit, except the last character, which
        cannot be a dash.
    - name: logConfig
      description: |
        This field denotes the VPC flow logging options for this subnetwork.
        If logging is enabled, logs are exported to Cloud Logging.
      value:
        enable: {{ enable }}
        metadata: "{{ metadata }}"
        metadataFields:
          - "{{ metadataFields }}"
        flowSampling: {{ flowSampling }}
        aggregationInterval: "{{ aggregationInterval }}"
        filterExpr: "{{ filterExpr }}"
    - name: ipv6AccessType
      value: "{{ ipv6AccessType }}"
      description: |
        The access type of IPv6 address this subnet holds. It's immutable and can
        only be specified during creation or the first time the subnet is updated
        into IPV4_IPV6 dual stack.
      valid_values: ['EXTERNAL', 'INTERNAL']
    - name: reservedInternalRange
      value: "{{ reservedInternalRange }}"
      description: |
        The URL of the reserved internal range.
    - name: secondaryIpRanges
      description: |
        An array of configurations for secondary IP ranges for VM instances
        contained in this subnetwork. The primary IP of such VM must belong to the
        primary ipCidrRange of the subnetwork. The alias IPs may belong to either
        primary or secondary ranges. This field can be updated with apatch request. Supports both IPv4 and IPv6 ranges.
      value:
        - reservedInternalRange: "{{ reservedInternalRange }}"
          ipCollection: "{{ ipCollection }}"
          ipCidrRange: "{{ ipCidrRange }}"
          ipVersion: "{{ ipVersion }}"
          rangeName: "{{ rangeName }}"
    - name: enableFlowLogs
      value: {{ enableFlowLogs }}
      description: |
        Whether to enable flow logging for this subnetwork. If this field is not
        explicitly set, it will not appear in get listings. If not set
        the default behavior is determined by the org policy, if there is no org
        policy specified, then it will default to disabled. This field isn't
        supported if the subnet purpose field is set toREGIONAL_MANAGED_PROXY. It is recommended to uselogConfig.enable field instead.
    - name: internalIpv6Prefix
      value: "{{ internalIpv6Prefix }}"
      description: |
        The internal IPv6 address range that is owned by this
        subnetwork.
    - name: role
      value: "{{ role }}"
      description: |
        The role of subnetwork. Currently, this field is only used when
        purpose is set to GLOBAL_MANAGED_PROXY orREGIONAL_MANAGED_PROXY. The value can be set toACTIVE or BACKUP. An ACTIVE
        subnetwork is one that is currently being used for Envoy-based load
        balancers in a region. A BACKUP subnetwork is one that is
        ready to be promoted to ACTIVE or is currently draining.
        This field can be updated with a patch request.
      valid_values: ['ACTIVE', 'BACKUP']
    - name: privateIpGoogleAccess
      value: {{ privateIpGoogleAccess }}
      description: |
        Whether the VMs in this subnet can access Google services without assigned
        external IP addresses. This field can be both set at resource creation
        time and updated using setPrivateIpGoogleAccess.
    - name: selfLink
      value: "{{ selfLink }}"
      description: |
        [Output Only] Server-defined URL for the resource.
    - name: purpose
      value: "{{ purpose }}"
      valid_values: ['GLOBAL_MANAGED_PROXY', 'INTERNAL_HTTPS_LOAD_BALANCER', 'PEER_MIGRATION', 'PRIVATE', 'PRIVATE_NAT', 'PRIVATE_RFC_1918', 'PRIVATE_SERVICE_CONNECT', 'REGIONAL_MANAGED_PROXY']
    - name: params
      description: |
        Input only. [Input Only] Additional params passed with the request, but not persisted
        as part of resource payload.
      value:
        resourceManagerTags: "{{ resourceManagerTags }}"
    - name: allowSubnetCidrRoutesOverlap
      value: {{ allowSubnetCidrRoutesOverlap }}
      description: |
        Whether this subnetwork's ranges can conflict with existing custom routes.
        Setting this to true allows this subnetwork's primary and secondary ranges
        to overlap with (and contain) custom routes that have already been
        configured on the corresponding network.
        For example if a static route has range 10.1.0.0/16, a subnet
        range 10.0.0.0/8 could only be created if allow_conflicting_routes=true.
        Overlapping is only allowed on subnetwork operations; routes
        whose ranges conflict with this subnetwork's ranges won't be allowed unless
        route.allow_conflicting_subnetworks is set to true.
        Typically packets destined to IPs within the subnetwork (which may contain
        private/sensitive data) are prevented from leaving the virtual network.
        Setting this field to true will disable this feature.
        The default value is false and applies to all existing subnetworks and
        automatically created subnetworks.
    - name: resolveSubnetMask
      value: "{{ resolveSubnetMask }}"
      description: |
        Configures subnet mask resolution for this subnetwork.
      valid_values: ['ARP_ALL_RANGES', 'ARP_PRIMARY_RANGE']
    - name: network
      value: "{{ network }}"
      description: |
        The URL of the network to which this subnetwork belongs, provided by the
        client when initially creating the subnetwork. This field can be set only
        at resource creation time.
    - name: stackType
      value: "{{ stackType }}"
      description: |
        The stack type for the subnet. If set to IPV4_ONLY, new VMs
        in the subnet are assigned IPv4 addresses only. If set toIPV4_IPV6, new VMs in the subnet can be assigned both IPv4 and
        IPv6 addresses. If not specified, IPV4_ONLY is used.
        This field can be both set at resource creation time and updated usingpatch.
      valid_values: ['IPV4_IPV6', 'IPV4_ONLY', 'IPV6_ONLY']
    - name: ipCidrRange
      value: "{{ ipCidrRange }}"
      description: |
        The range of internal addresses that are owned by this subnetwork.
        Provide this property when you create the subnetwork. For example,10.0.0.0/8 or 100.64.0.0/10. Ranges must
        be unique and non-overlapping within a network. Only IPv4 is supported.
        This field is set at resource creation time. The range can be any range
        listed in theValid
        ranges list. The range can be expanded after creation usingexpandIpCidrRange.
    - name: privateIpv6GoogleAccess
      value: "{{ privateIpv6GoogleAccess }}"
      description: |
        This field is for internal use.
        This field can be both set at resource creation time and updated usingpatch.
      valid_values: ['DISABLE_GOOGLE_ACCESS', 'ENABLE_BIDIRECTIONAL_ACCESS_TO_GOOGLE', 'ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE']
    - name: region
      value: "{{ region }}"
      description: |
        URL of the region where the Subnetwork resides. This
        field can be set only at resource creation time.
    - name: fingerprint
      value: "{{ fingerprint }}"
      description: |
        Fingerprint of this resource. A hash of the contents stored in this object.
        This field is used in optimistic locking. This field will be ignored when
        inserting a Subnetwork. An up-to-date fingerprint must be
        provided in order to update the Subnetwork, otherwise the
        request will fail with error 412 conditionNotMet.
        To see the latest fingerprint, make a get() request to
        retrieve a Subnetwork.
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

Patches the specified subnetwork with the data included in the request.<br />Only certain fields can be updated with a patch request<br />as indicated in the field descriptions.<br />You must specify the current fingerprint of the<br />subnetwork resource being patched.

```sql
UPDATE google.compute.subnetworks
SET 
data__description = '{{ description }}',
data__externalIpv6Prefix = '{{ externalIpv6Prefix }}',
data__ipCollection = '{{ ipCollection }}',
data__name = '{{ name }}',
data__logConfig = '{{ logConfig }}',
data__ipv6AccessType = '{{ ipv6AccessType }}',
data__reservedInternalRange = '{{ reservedInternalRange }}',
data__secondaryIpRanges = '{{ secondaryIpRanges }}',
data__enableFlowLogs = {{ enableFlowLogs }},
data__internalIpv6Prefix = '{{ internalIpv6Prefix }}',
data__role = '{{ role }}',
data__privateIpGoogleAccess = {{ privateIpGoogleAccess }},
data__selfLink = '{{ selfLink }}',
data__purpose = '{{ purpose }}',
data__params = '{{ params }}',
data__allowSubnetCidrRoutesOverlap = {{ allowSubnetCidrRoutesOverlap }},
data__resolveSubnetMask = '{{ resolveSubnetMask }}',
data__network = '{{ network }}',
data__stackType = '{{ stackType }}',
data__ipCidrRange = '{{ ipCidrRange }}',
data__privateIpv6GoogleAccess = '{{ privateIpv6GoogleAccess }}',
data__region = '{{ region }}',
data__fingerprint = '{{ fingerprint }}'
WHERE 
project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND subnetwork = '{{ subnetwork }}' --required
AND drainTimeoutSeconds = '{{ drainTimeoutSeconds}}'
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

Deletes the specified subnetwork.

```sql
DELETE FROM google.compute.subnetworks
WHERE project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND subnetwork = '{{ subnetwork }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="set_private_ip_google_access"
    values={[
        { label: 'set_private_ip_google_access', value: 'set_private_ip_google_access' },
        { label: 'expand_ip_cidr_range', value: 'expand_ip_cidr_range' }
    ]}
>
<TabItem value="set_private_ip_google_access">

Set whether VMs in this subnet can access Google services without assigning<br />external IP addresses through Private Google Access.

```sql
EXEC google.compute.subnetworks.set_private_ip_google_access 
@project='{{ project }}' --required, 
@region='{{ region }}' --required, 
@subnetwork='{{ subnetwork }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"privateIpGoogleAccess": {{ privateIpGoogleAccess }}
}'
;
```
</TabItem>
<TabItem value="expand_ip_cidr_range">

Expands the IP CIDR range of the subnetwork to a specified value.

```sql
EXEC google.compute.subnetworks.expand_ip_cidr_range 
@project='{{ project }}' --required, 
@region='{{ region }}' --required, 
@subnetwork='{{ subnetwork }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"ipCidrRange": "{{ ipCidrRange }}"
}'
;
```
</TabItem>
</Tabs>
