--- 
title: interconnect_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - interconnect_attachments
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

Creates, updates, deletes, gets or lists an <code>interconnect_attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="interconnect_attachments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.interconnect_attachments" /></td></tr>
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
    <td>Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply withRFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: <code>&#91;a-z&#93;(?:&#91;-a-z0-9&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="adminEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Determines whether this Attachment will carry packets. Not present for PARTNER_PROVIDER.</td>
</tr>
<tr>
    <td><CopyableCode code="attachmentGroup" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] URL of the AttachmentGroup that includes this Attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="bandwidth" /></td>
    <td><code>string</code></td>
    <td>Provisioned bandwidth capacity for the interconnect attachment. For attachments of type DEDICATED, the user can set the bandwidth. For attachments of type PARTNER, the Google Partner that is operating the interconnect must set the bandwidth. Output only for PARTNER type, mutable for PARTNER_PROVIDER and DEDICATED, and can take one of the following values:        - BPS_50M: 50 Mbit/s    - BPS_100M: 100 Mbit/s    - BPS_200M: 200 Mbit/s    - BPS_300M: 300 Mbit/s    - BPS_400M: 400 Mbit/s    - BPS_500M: 500 Mbit/s    - BPS_1G: 1 Gbit/s    - BPS_2G: 2 Gbit/s    - BPS_5G: 5 Gbit/s    - BPS_10G: 10 Gbit/s    - BPS_20G: 20 Gbit/s    - BPS_50G: 50 Gbit/s    - BPS_100G: 100 Gbit/s    - BPS_400G: 400 Gbit/s (BPS_100G, BPS_100M, BPS_10G, BPS_1G, BPS_200M, BPS_20G, BPS_2G, BPS_300M, BPS_400G, BPS_400M, BPS_500M, BPS_50G, BPS_50M, BPS_5G)</td>
</tr>
<tr>
    <td><CopyableCode code="candidateCloudRouterIpAddress" /></td>
    <td><code>string</code></td>
    <td>Single IPv4 address + prefix length to be configured on the cloud router interface for this interconnect attachment.        - Both candidate_cloud_router_ip_address and    candidate_customer_router_ip_address fields must be set or both must be    unset.    - Prefix length of both candidate_cloud_router_ip_address and    candidate_customer_router_ip_address must be the same.    - Max prefix length is 31.</td>
</tr>
<tr>
    <td><CopyableCode code="candidateCloudRouterIpv6Address" /></td>
    <td><code>string</code></td>
    <td>Single IPv6 address + prefix length to be configured on the cloud router interface for this interconnect attachment.        - Both candidate_cloud_router_ipv6_address and    candidate_customer_router_ipv6_address fields must be set or both must be    unset.    - Prefix length of both candidate_cloud_router_ipv6_address and    candidate_customer_router_ipv6_address must be the same.    - Max prefix length is 126.</td>
</tr>
<tr>
    <td><CopyableCode code="candidateCustomerRouterIpAddress" /></td>
    <td><code>string</code></td>
    <td>Single IPv4 address + prefix length to be configured on the customer router interface for this interconnect attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="candidateCustomerRouterIpv6Address" /></td>
    <td><code>string</code></td>
    <td>Single IPv6 address + prefix length to be configured on the customer router interface for this interconnect attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="candidateIpv6Subnets" /></td>
    <td><code>array</code></td>
    <td>This field is not available.</td>
</tr>
<tr>
    <td><CopyableCode code="candidateSubnets" /></td>
    <td><code>array</code></td>
    <td>Input only. Up to 16 candidate prefixes that can be used to restrict the allocation of cloudRouterIpAddress and customerRouterIpAddress for this attachment. All prefixes must be within link-local address space (169.254.0.0/16) and must be /29 or shorter (/28, /27, etc). Google will attempt to select an unused /29 from the supplied candidate prefix(es). The request will fail if all possible /29s are in use on Google's edge. If not supplied, Google will randomly select an unused /29 from all of link-local space.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudRouterIpAddress" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] IPv4 address + prefix length to be configured on Cloud Router Interface for this interconnect attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudRouterIpv6Address" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] IPv6 address + prefix length to be configured on Cloud Router Interface for this interconnect attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudRouterIpv6InterfaceId" /></td>
    <td><code>string</code></td>
    <td>This field is not available.</td>
</tr>
<tr>
    <td><CopyableCode code="configurationConstraints" /></td>
    <td><code>object</code></td>
    <td>Output only. [Output Only] Constraints for this attachment, if any. The attachment does not work if these constraints are not met. (id: InterconnectAttachmentConfigurationConstraints)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Creation timestamp inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="customerRouterIpAddress" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] IPv4 address + prefix length to be configured on the customer router subinterface for this interconnect attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="customerRouterIpv6Address" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] IPv6 address + prefix length to be configured on the customer router subinterface for this interconnect attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="customerRouterIpv6InterfaceId" /></td>
    <td><code>string</code></td>
    <td>This field is not available.</td>
</tr>
<tr>
    <td><CopyableCode code="dataplaneVersion" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. [Output Only] Dataplane version for this InterconnectAttachment. This field is only present for Dataplane version 2 and higher. Absence of this field in the API output indicates that the Dataplane is version 1.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="edgeAvailabilityDomain" /></td>
    <td><code>string</code></td>
    <td>Input only. Desired availability domain for the attachment. Only available for type PARTNER, at creation time, and can take one of the following values:        - AVAILABILITY_DOMAIN_ANY    - AVAILABILITY_DOMAIN_1    - AVAILABILITY_DOMAIN_2   For improved reliability, customers should configure a pair of attachments, one per availability domain. The selected availability domain will be provided to the Partner via the pairing key, so that the provisioned circuit will lie in the specified domain. If not specified, the value will default to AVAILABILITY_DOMAIN_ANY. (AVAILABILITY_DOMAIN_1, AVAILABILITY_DOMAIN_2, AVAILABILITY_DOMAIN_ANY)</td>
</tr>
<tr>
    <td><CopyableCode code="encryption" /></td>
    <td><code>string</code></td>
    <td>Indicates the user-supplied encryption option of this VLAN attachment (interconnectAttachment). Can only be specified at attachment creation for PARTNER or DEDICATED attachments. Possible values are:        - NONE - This is the default value, which means that the    VLAN attachment carries unencrypted traffic. VMs are able to send    traffic to, or receive traffic from, such a VLAN attachment.    - IPSEC - The VLAN attachment carries only encrypted    traffic that is encrypted by an IPsec device, such as an HA VPN gateway or    third-party IPsec VPN. VMs cannot directly send traffic to, or receive    traffic from, such a VLAN attachment. To use *HA VPN over Cloud    Interconnect*, the VLAN attachment must be created with this    option. (IPSEC, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="googleReferenceId" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Google reference ID, to be used when raising support tickets with Google or otherwise to debug backend connectivity issues. [Deprecated] This field is not used.</td>
</tr>
<tr>
    <td><CopyableCode code="interconnect" /></td>
    <td><code>string</code></td>
    <td>URL of the underlying Interconnect object that this attachment's traffic will traverse through.</td>
</tr>
<tr>
    <td><CopyableCode code="ipsecInternalAddresses" /></td>
    <td><code>array</code></td>
    <td>A list of URLs of addresses that have been reserved for the VLAN attachment. Used only for the VLAN attachment that has the encryption option as IPSEC. The addresses must be regional internal IP address ranges. When creating an HA VPN gateway over the VLAN attachment, if the attachment is configured to use a regional internal IP address, then the VPN gateway's IP address is allocated from the IP address range specified here. For example, if the HA VPN gateway's interface 0 is paired to this VLAN attachment, then a regional internal IP address for the VPN gateway interface 0 will be allocated from the IP address specified for this VLAN attachment. If this field is not specified when creating the VLAN attachment, then later on when creating an HA VPN gateway on this VLAN attachment, the HA VPN gateway's IP address is allocated from the regional external IP address pool.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of the resource. Alwayscompute#interconnectAttachment for interconnect attachments. (default: compute#interconnectAttachment)</td>
</tr>
<tr>
    <td><CopyableCode code="l2Forwarding" /></td>
    <td><code>object</code></td>
    <td>L2 Interconnect Attachment related config. This field is required if the type is L2_DEDICATED.  The configuration specifies how VLAN tags (like dot1q, qinq, or dot1ad) within L2 packets are mapped to the destination appliances IP addresses. The packet is then encapsulated with the appliance IP address and sent to the edge appliance. (id: InterconnectAttachmentL2Forwarding)</td>
</tr>
<tr>
    <td><CopyableCode code="labelFingerprint" /></td>
    <td><code>string (byte)</code></td>
    <td>A fingerprint for the labels being applied to this InterconnectAttachment, which is essentially a hash of the labels set used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash in order to update or change labels, otherwise the request will fail with error412 conditionNotMet.  To see the latest fingerprint, make a get() request to retrieve an InterconnectAttachment.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels for this resource. These can only be added or modified by thesetLabels method. Each label key/value pair must comply withRFC1035. Label values may be empty.</td>
</tr>
<tr>
    <td><CopyableCode code="mtu" /></td>
    <td><code>integer (int32)</code></td>
    <td>Maximum Transmission Unit (MTU), in bytes, of packets passing through this interconnect attachment. Valid values are 1440, 1460, 1500, and 8896. If not specified, the value will default to 1440.</td>
</tr>
<tr>
    <td><CopyableCode code="operationalStatus" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The current status of whether or not this interconnect attachment is functional, which can take one of the following values:        - OS_ACTIVE: The attachment has been turned up and is ready to    use.     - OS_UNPROVISIONED: The attachment is not ready to use yet,    because turnup is not complete. (OS_ACTIVE, OS_UNPROVISIONED)</td>
</tr>
<tr>
    <td><CopyableCode code="pairingKey" /></td>
    <td><code>string</code></td>
    <td>[Output only for type PARTNER. Input only for PARTNER_PROVIDER. Not present for DEDICATED]. The opaque identifier of a PARTNER attachment used to initiate provisioning with a selected partner. Of the form "XXXXX/region/domain"</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>object</code></td>
    <td>Input only. [Input Only] Additional params passed with the request, but not persisted as part of resource payload. (id: InterconnectAttachmentParams)</td>
</tr>
<tr>
    <td><CopyableCode code="partnerAsn" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional BGP ASN for the router supplied by a Layer 3 Partner if they configured BGP on behalf of the customer. Output only for PARTNER type, input only for PARTNER_PROVIDER, not available for DEDICATED.</td>
</tr>
<tr>
    <td><CopyableCode code="partnerMetadata" /></td>
    <td><code>object</code></td>
    <td>Informational metadata about Partner attachments from Partners to display to customers. Output only for PARTNER type, mutable for PARTNER_PROVIDER, not available for DEDICATED. (id: InterconnectAttachmentPartnerMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="privateInterconnectInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. [Output Only] Information specific to an InterconnectAttachment. This property is populated if the interconnect that this is attached to is of type DEDICATED. (id: InterconnectAttachmentPrivateInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] URL of the region where the regional interconnect attachment resides. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.</td>
</tr>
<tr>
    <td><CopyableCode code="remoteService" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] If the attachment is on a Cross-Cloud Interconnect connection, this field contains the interconnect's remote location service provider. Example values: "Amazon Web Services" "Microsoft Azure".  The field is set only for attachments on Cross-Cloud Interconnect connections. Its value is copied from the InterconnectRemoteLocation remoteService field.</td>
</tr>
<tr>
    <td><CopyableCode code="router" /></td>
    <td><code>string</code></td>
    <td>URL of the Cloud Router to be used for dynamic routing. This router must be in the same region as this InterconnectAttachment. The InterconnectAttachment will automatically connect the Interconnect to the network & region within which the Cloud Router is configured.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. [Output Only] Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="stackType" /></td>
    <td><code>string</code></td>
    <td>The stack type for this interconnect attachment to identify whether the IPv6 feature is enabled or not. If not specified, IPV4_ONLY will be used.  This field can be both set at interconnect attachments creation and update interconnect attachment operations. (IPV4_IPV6, IPV4_ONLY)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The current state of this attachment's functionality. Enum values ACTIVE and UNPROVISIONED are shared by DEDICATED/PRIVATE, PARTNER, and PARTNER_PROVIDER interconnect attachments, while enum values PENDING_PARTNER, PARTNER_REQUEST_RECEIVED, and PENDING_CUSTOMER are used for only PARTNER and PARTNER_PROVIDER interconnect attachments. This state can take one of the following values:        - ACTIVE: The attachment has been turned up and is ready to use.    - UNPROVISIONED: The attachment is not ready to use yet, because turnup    is not complete.    - PENDING_PARTNER: A newly-created PARTNER attachment that has not yet    been configured on the Partner side.    - PARTNER_REQUEST_RECEIVED: A PARTNER attachment is in the process of    provisioning after a PARTNER_PROVIDER attachment was created that    references it.     - PENDING_CUSTOMER: A PARTNER or PARTNER_PROVIDER    attachment that is waiting for a customer to activate it.     - DEFUNCT:    The attachment was deleted externally and is no longer functional. This    could be because the associated Interconnect was removed, or because the    other side of a Partner attachment was deleted. (ACTIVE, DEFUNCT, PARTNER_REQUEST_RECEIVED, PENDING_CUSTOMER, PENDING_PARTNER, STATE_UNSPECIFIED, UNPROVISIONED)</td>
</tr>
<tr>
    <td><CopyableCode code="subnetLength" /></td>
    <td><code>integer (int32)</code></td>
    <td>Input only. Length of the IPv4 subnet mask. Allowed values:             - 29 (default)     - 30  The default value is 29, except for Cross-Cloud Interconnect connections that use an InterconnectRemoteLocation with a constraints.subnetLengthRange.min equal to 30. For example, connections that use an Azure remote location fall into this category. In these cases, the default value is 30, and requesting 29 returns an error.  Where both 29 and 30 are allowed, 29 is preferred, because it gives Google Cloud Support more debugging visibility.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of interconnect attachment this is, which can take one of the following values:        - DEDICATED: an attachment to a Dedicated Interconnect.    - PARTNER: an attachment to a Partner Interconnect, created by the    customer.    - PARTNER_PROVIDER: an attachment to a Partner Interconnect, created by    the partner.  - L2_DEDICATED: a L2 attachment to a Dedicated Interconnect. (DEDICATED, L2_DEDICATED, PARTNER, PARTNER_PROVIDER)</td>
</tr>
<tr>
    <td><CopyableCode code="vlanTag8021q" /></td>
    <td><code>integer (int32)</code></td>
    <td>The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4093. Only specified at creation time.</td>
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
    <td>A list of InterconnectAttachment resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of resource. Alwayscompute#interconnectAttachmentList for lists of interconnect attachments. (default: compute#interconnectAttachmentList)</td>
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
    <td>Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply withRFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: <code>&#91;a-z&#93;(?:&#91;-a-z0-9&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="adminEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Determines whether this Attachment will carry packets. Not present for PARTNER_PROVIDER.</td>
</tr>
<tr>
    <td><CopyableCode code="attachmentGroup" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] URL of the AttachmentGroup that includes this Attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="bandwidth" /></td>
    <td><code>string</code></td>
    <td>Provisioned bandwidth capacity for the interconnect attachment. For attachments of type DEDICATED, the user can set the bandwidth. For attachments of type PARTNER, the Google Partner that is operating the interconnect must set the bandwidth. Output only for PARTNER type, mutable for PARTNER_PROVIDER and DEDICATED, and can take one of the following values:        - BPS_50M: 50 Mbit/s    - BPS_100M: 100 Mbit/s    - BPS_200M: 200 Mbit/s    - BPS_300M: 300 Mbit/s    - BPS_400M: 400 Mbit/s    - BPS_500M: 500 Mbit/s    - BPS_1G: 1 Gbit/s    - BPS_2G: 2 Gbit/s    - BPS_5G: 5 Gbit/s    - BPS_10G: 10 Gbit/s    - BPS_20G: 20 Gbit/s    - BPS_50G: 50 Gbit/s    - BPS_100G: 100 Gbit/s    - BPS_400G: 400 Gbit/s (BPS_100G, BPS_100M, BPS_10G, BPS_1G, BPS_200M, BPS_20G, BPS_2G, BPS_300M, BPS_400G, BPS_400M, BPS_500M, BPS_50G, BPS_50M, BPS_5G)</td>
</tr>
<tr>
    <td><CopyableCode code="candidateCloudRouterIpAddress" /></td>
    <td><code>string</code></td>
    <td>Single IPv4 address + prefix length to be configured on the cloud router interface for this interconnect attachment.        - Both candidate_cloud_router_ip_address and    candidate_customer_router_ip_address fields must be set or both must be    unset.    - Prefix length of both candidate_cloud_router_ip_address and    candidate_customer_router_ip_address must be the same.    - Max prefix length is 31.</td>
</tr>
<tr>
    <td><CopyableCode code="candidateCloudRouterIpv6Address" /></td>
    <td><code>string</code></td>
    <td>Single IPv6 address + prefix length to be configured on the cloud router interface for this interconnect attachment.        - Both candidate_cloud_router_ipv6_address and    candidate_customer_router_ipv6_address fields must be set or both must be    unset.    - Prefix length of both candidate_cloud_router_ipv6_address and    candidate_customer_router_ipv6_address must be the same.    - Max prefix length is 126.</td>
</tr>
<tr>
    <td><CopyableCode code="candidateCustomerRouterIpAddress" /></td>
    <td><code>string</code></td>
    <td>Single IPv4 address + prefix length to be configured on the customer router interface for this interconnect attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="candidateCustomerRouterIpv6Address" /></td>
    <td><code>string</code></td>
    <td>Single IPv6 address + prefix length to be configured on the customer router interface for this interconnect attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="candidateIpv6Subnets" /></td>
    <td><code>array</code></td>
    <td>This field is not available.</td>
</tr>
<tr>
    <td><CopyableCode code="candidateSubnets" /></td>
    <td><code>array</code></td>
    <td>Input only. Up to 16 candidate prefixes that can be used to restrict the allocation of cloudRouterIpAddress and customerRouterIpAddress for this attachment. All prefixes must be within link-local address space (169.254.0.0/16) and must be /29 or shorter (/28, /27, etc). Google will attempt to select an unused /29 from the supplied candidate prefix(es). The request will fail if all possible /29s are in use on Google's edge. If not supplied, Google will randomly select an unused /29 from all of link-local space.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudRouterIpAddress" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] IPv4 address + prefix length to be configured on Cloud Router Interface for this interconnect attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudRouterIpv6Address" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] IPv6 address + prefix length to be configured on Cloud Router Interface for this interconnect attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudRouterIpv6InterfaceId" /></td>
    <td><code>string</code></td>
    <td>This field is not available.</td>
</tr>
<tr>
    <td><CopyableCode code="configurationConstraints" /></td>
    <td><code>object</code></td>
    <td>Output only. [Output Only] Constraints for this attachment, if any. The attachment does not work if these constraints are not met. (id: InterconnectAttachmentConfigurationConstraints)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Creation timestamp inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="customerRouterIpAddress" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] IPv4 address + prefix length to be configured on the customer router subinterface for this interconnect attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="customerRouterIpv6Address" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] IPv6 address + prefix length to be configured on the customer router subinterface for this interconnect attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="customerRouterIpv6InterfaceId" /></td>
    <td><code>string</code></td>
    <td>This field is not available.</td>
</tr>
<tr>
    <td><CopyableCode code="dataplaneVersion" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. [Output Only] Dataplane version for this InterconnectAttachment. This field is only present for Dataplane version 2 and higher. Absence of this field in the API output indicates that the Dataplane is version 1.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="edgeAvailabilityDomain" /></td>
    <td><code>string</code></td>
    <td>Input only. Desired availability domain for the attachment. Only available for type PARTNER, at creation time, and can take one of the following values:        - AVAILABILITY_DOMAIN_ANY    - AVAILABILITY_DOMAIN_1    - AVAILABILITY_DOMAIN_2   For improved reliability, customers should configure a pair of attachments, one per availability domain. The selected availability domain will be provided to the Partner via the pairing key, so that the provisioned circuit will lie in the specified domain. If not specified, the value will default to AVAILABILITY_DOMAIN_ANY. (AVAILABILITY_DOMAIN_1, AVAILABILITY_DOMAIN_2, AVAILABILITY_DOMAIN_ANY)</td>
</tr>
<tr>
    <td><CopyableCode code="encryption" /></td>
    <td><code>string</code></td>
    <td>Indicates the user-supplied encryption option of this VLAN attachment (interconnectAttachment). Can only be specified at attachment creation for PARTNER or DEDICATED attachments. Possible values are:        - NONE - This is the default value, which means that the    VLAN attachment carries unencrypted traffic. VMs are able to send    traffic to, or receive traffic from, such a VLAN attachment.    - IPSEC - The VLAN attachment carries only encrypted    traffic that is encrypted by an IPsec device, such as an HA VPN gateway or    third-party IPsec VPN. VMs cannot directly send traffic to, or receive    traffic from, such a VLAN attachment. To use *HA VPN over Cloud    Interconnect*, the VLAN attachment must be created with this    option. (IPSEC, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="googleReferenceId" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Google reference ID, to be used when raising support tickets with Google or otherwise to debug backend connectivity issues. [Deprecated] This field is not used.</td>
</tr>
<tr>
    <td><CopyableCode code="interconnect" /></td>
    <td><code>string</code></td>
    <td>URL of the underlying Interconnect object that this attachment's traffic will traverse through.</td>
</tr>
<tr>
    <td><CopyableCode code="ipsecInternalAddresses" /></td>
    <td><code>array</code></td>
    <td>A list of URLs of addresses that have been reserved for the VLAN attachment. Used only for the VLAN attachment that has the encryption option as IPSEC. The addresses must be regional internal IP address ranges. When creating an HA VPN gateway over the VLAN attachment, if the attachment is configured to use a regional internal IP address, then the VPN gateway's IP address is allocated from the IP address range specified here. For example, if the HA VPN gateway's interface 0 is paired to this VLAN attachment, then a regional internal IP address for the VPN gateway interface 0 will be allocated from the IP address specified for this VLAN attachment. If this field is not specified when creating the VLAN attachment, then later on when creating an HA VPN gateway on this VLAN attachment, the HA VPN gateway's IP address is allocated from the regional external IP address pool.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of the resource. Alwayscompute#interconnectAttachment for interconnect attachments. (default: compute#interconnectAttachment)</td>
</tr>
<tr>
    <td><CopyableCode code="l2Forwarding" /></td>
    <td><code>object</code></td>
    <td>L2 Interconnect Attachment related config. This field is required if the type is L2_DEDICATED.  The configuration specifies how VLAN tags (like dot1q, qinq, or dot1ad) within L2 packets are mapped to the destination appliances IP addresses. The packet is then encapsulated with the appliance IP address and sent to the edge appliance. (id: InterconnectAttachmentL2Forwarding)</td>
</tr>
<tr>
    <td><CopyableCode code="labelFingerprint" /></td>
    <td><code>string (byte)</code></td>
    <td>A fingerprint for the labels being applied to this InterconnectAttachment, which is essentially a hash of the labels set used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash in order to update or change labels, otherwise the request will fail with error412 conditionNotMet.  To see the latest fingerprint, make a get() request to retrieve an InterconnectAttachment.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels for this resource. These can only be added or modified by thesetLabels method. Each label key/value pair must comply withRFC1035. Label values may be empty.</td>
</tr>
<tr>
    <td><CopyableCode code="mtu" /></td>
    <td><code>integer (int32)</code></td>
    <td>Maximum Transmission Unit (MTU), in bytes, of packets passing through this interconnect attachment. Valid values are 1440, 1460, 1500, and 8896. If not specified, the value will default to 1440.</td>
</tr>
<tr>
    <td><CopyableCode code="operationalStatus" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The current status of whether or not this interconnect attachment is functional, which can take one of the following values:        - OS_ACTIVE: The attachment has been turned up and is ready to    use.     - OS_UNPROVISIONED: The attachment is not ready to use yet,    because turnup is not complete. (OS_ACTIVE, OS_UNPROVISIONED)</td>
</tr>
<tr>
    <td><CopyableCode code="pairingKey" /></td>
    <td><code>string</code></td>
    <td>[Output only for type PARTNER. Input only for PARTNER_PROVIDER. Not present for DEDICATED]. The opaque identifier of a PARTNER attachment used to initiate provisioning with a selected partner. Of the form "XXXXX/region/domain"</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>object</code></td>
    <td>Input only. [Input Only] Additional params passed with the request, but not persisted as part of resource payload. (id: InterconnectAttachmentParams)</td>
</tr>
<tr>
    <td><CopyableCode code="partnerAsn" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional BGP ASN for the router supplied by a Layer 3 Partner if they configured BGP on behalf of the customer. Output only for PARTNER type, input only for PARTNER_PROVIDER, not available for DEDICATED.</td>
</tr>
<tr>
    <td><CopyableCode code="partnerMetadata" /></td>
    <td><code>object</code></td>
    <td>Informational metadata about Partner attachments from Partners to display to customers. Output only for PARTNER type, mutable for PARTNER_PROVIDER, not available for DEDICATED. (id: InterconnectAttachmentPartnerMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="privateInterconnectInfo" /></td>
    <td><code>object</code></td>
    <td>Output only. [Output Only] Information specific to an InterconnectAttachment. This property is populated if the interconnect that this is attached to is of type DEDICATED. (id: InterconnectAttachmentPrivateInfo)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] URL of the region where the regional interconnect attachment resides. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.</td>
</tr>
<tr>
    <td><CopyableCode code="remoteService" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] If the attachment is on a Cross-Cloud Interconnect connection, this field contains the interconnect's remote location service provider. Example values: "Amazon Web Services" "Microsoft Azure".  The field is set only for attachments on Cross-Cloud Interconnect connections. Its value is copied from the InterconnectRemoteLocation remoteService field.</td>
</tr>
<tr>
    <td><CopyableCode code="router" /></td>
    <td><code>string</code></td>
    <td>URL of the Cloud Router to be used for dynamic routing. This router must be in the same region as this InterconnectAttachment. The InterconnectAttachment will automatically connect the Interconnect to the network & region within which the Cloud Router is configured.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. [Output Only] Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="stackType" /></td>
    <td><code>string</code></td>
    <td>The stack type for this interconnect attachment to identify whether the IPv6 feature is enabled or not. If not specified, IPV4_ONLY will be used.  This field can be both set at interconnect attachments creation and update interconnect attachment operations. (IPV4_IPV6, IPV4_ONLY)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The current state of this attachment's functionality. Enum values ACTIVE and UNPROVISIONED are shared by DEDICATED/PRIVATE, PARTNER, and PARTNER_PROVIDER interconnect attachments, while enum values PENDING_PARTNER, PARTNER_REQUEST_RECEIVED, and PENDING_CUSTOMER are used for only PARTNER and PARTNER_PROVIDER interconnect attachments. This state can take one of the following values:        - ACTIVE: The attachment has been turned up and is ready to use.    - UNPROVISIONED: The attachment is not ready to use yet, because turnup    is not complete.    - PENDING_PARTNER: A newly-created PARTNER attachment that has not yet    been configured on the Partner side.    - PARTNER_REQUEST_RECEIVED: A PARTNER attachment is in the process of    provisioning after a PARTNER_PROVIDER attachment was created that    references it.     - PENDING_CUSTOMER: A PARTNER or PARTNER_PROVIDER    attachment that is waiting for a customer to activate it.     - DEFUNCT:    The attachment was deleted externally and is no longer functional. This    could be because the associated Interconnect was removed, or because the    other side of a Partner attachment was deleted. (ACTIVE, DEFUNCT, PARTNER_REQUEST_RECEIVED, PENDING_CUSTOMER, PENDING_PARTNER, STATE_UNSPECIFIED, UNPROVISIONED)</td>
</tr>
<tr>
    <td><CopyableCode code="subnetLength" /></td>
    <td><code>integer (int32)</code></td>
    <td>Input only. Length of the IPv4 subnet mask. Allowed values:             - 29 (default)     - 30  The default value is 29, except for Cross-Cloud Interconnect connections that use an InterconnectRemoteLocation with a constraints.subnetLengthRange.min equal to 30. For example, connections that use an Azure remote location fall into this category. In these cases, the default value is 30, and requesting 29 returns an error.  Where both 29 and 30 are allowed, 29 is preferred, because it gives Google Cloud Support more debugging visibility.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of interconnect attachment this is, which can take one of the following values:        - DEDICATED: an attachment to a Dedicated Interconnect.    - PARTNER: an attachment to a Partner Interconnect, created by the    customer.    - PARTNER_PROVIDER: an attachment to a Partner Interconnect, created by    the partner.  - L2_DEDICATED: a L2 attachment to a Dedicated Interconnect. (DEDICATED, L2_DEDICATED, PARTNER, PARTNER_PROVIDER)</td>
</tr>
<tr>
    <td><CopyableCode code="vlanTag8021q" /></td>
    <td><code>integer (int32)</code></td>
    <td>The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4093. Only specified at creation time.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-interconnectAttachment"><code>interconnectAttachment</code></a></td>
    <td></td>
    <td>Returns the specified interconnect attachment.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Retrieves the list of interconnect attachments contained within<br />the specified region.</td>
</tr>
<tr>
    <td><a href="#aggregated_list"><CopyableCode code="aggregated_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a>, <a href="#parameter-includeAllScopes"><code>includeAllScopes</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-serviceProjectNumber"><code>serviceProjectNumber</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Retrieves an aggregated list of interconnect attachments.<br /><br />To prevent failure, Google recommends that you set the<br />`returnPartialSuccess` parameter to `true`.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates an InterconnectAttachment in the specified project using the data<br />included in the request.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-interconnectAttachment"><code>interconnectAttachment</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the specified interconnect attachment with the data included in the<br />request. This method supportsPATCH<br />semantics and uses theJSON merge<br />patch format and processing rules.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-interconnectAttachment"><code>interconnectAttachment</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified interconnect attachment.</td>
</tr>
<tr>
    <td><a href="#set_labels"><CopyableCode code="set_labels" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resource"><code>resource</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Sets the labels on an InterconnectAttachment. To learn more about labels,<br />read the Labeling<br />Resources documentation.</td>
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
<tr id="parameter-interconnectAttachment">
    <td><CopyableCode code="interconnectAttachment" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-resource">
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
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
        { label: 'list', value: 'list' },
        { label: 'aggregated_list', value: 'aggregated_list' }
    ]}
>
<TabItem value="get">

Returns the specified interconnect attachment.

```sql
SELECT
id,
name,
adminEnabled,
attachmentGroup,
bandwidth,
candidateCloudRouterIpAddress,
candidateCloudRouterIpv6Address,
candidateCustomerRouterIpAddress,
candidateCustomerRouterIpv6Address,
candidateIpv6Subnets,
candidateSubnets,
cloudRouterIpAddress,
cloudRouterIpv6Address,
cloudRouterIpv6InterfaceId,
configurationConstraints,
creationTimestamp,
customerRouterIpAddress,
customerRouterIpv6Address,
customerRouterIpv6InterfaceId,
dataplaneVersion,
description,
edgeAvailabilityDomain,
encryption,
googleReferenceId,
interconnect,
ipsecInternalAddresses,
kind,
l2Forwarding,
labelFingerprint,
labels,
mtu,
operationalStatus,
pairingKey,
params,
partnerAsn,
partnerMetadata,
privateInterconnectInfo,
region,
remoteService,
router,
satisfiesPzs,
selfLink,
stackType,
state,
subnetLength,
type,
vlanTag8021q
FROM google.compute.interconnect_attachments
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND interconnectAttachment = '{{ interconnectAttachment }}' -- required
;
```
</TabItem>
<TabItem value="list">

Retrieves the list of interconnect attachments contained within<br />the specified region.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.interconnect_attachments
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
;
```
</TabItem>
<TabItem value="aggregated_list">

Retrieves an aggregated list of interconnect attachments.<br /><br />To prevent failure, Google recommends that you set the<br />`returnPartialSuccess` parameter to `true`.

```sql
SELECT
id,
name,
adminEnabled,
attachmentGroup,
bandwidth,
candidateCloudRouterIpAddress,
candidateCloudRouterIpv6Address,
candidateCustomerRouterIpAddress,
candidateCustomerRouterIpv6Address,
candidateIpv6Subnets,
candidateSubnets,
cloudRouterIpAddress,
cloudRouterIpv6Address,
cloudRouterIpv6InterfaceId,
configurationConstraints,
creationTimestamp,
customerRouterIpAddress,
customerRouterIpv6Address,
customerRouterIpv6InterfaceId,
dataplaneVersion,
description,
edgeAvailabilityDomain,
encryption,
googleReferenceId,
interconnect,
ipsecInternalAddresses,
kind,
l2Forwarding,
labelFingerprint,
labels,
mtu,
operationalStatus,
pairingKey,
params,
partnerAsn,
partnerMetadata,
privateInterconnectInfo,
region,
remoteService,
router,
satisfiesPzs,
selfLink,
stackType,
state,
subnetLength,
type,
vlanTag8021q
FROM google.compute.interconnect_attachments
WHERE project = '{{ project }}' -- required
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
AND includeAllScopes = '{{ includeAllScopes }}'
AND orderBy = '{{ orderBy }}'
AND filter = '{{ filter }}'
AND serviceProjectNumber = '{{ serviceProjectNumber }}'
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

Creates an InterconnectAttachment in the specified project using the data<br />included in the request.

```sql
INSERT INTO google.compute.interconnect_attachments (
data__params,
data__type,
data__labelFingerprint,
data__l2Forwarding,
data__subnetLength,
data__interconnect,
data__labels,
data__mtu,
data__candidateSubnets,
data__cloudRouterIpv6InterfaceId,
data__vlanTag8021q,
data__pairingKey,
data__bandwidth,
data__adminEnabled,
data__candidateCloudRouterIpv6Address,
data__candidateCloudRouterIpAddress,
data__stackType,
data__candidateCustomerRouterIpv6Address,
data__encryption,
data__name,
data__router,
data__candidateCustomerRouterIpAddress,
data__description,
data__partnerMetadata,
data__edgeAvailabilityDomain,
data__customerRouterIpv6InterfaceId,
data__candidateIpv6Subnets,
data__partnerAsn,
data__ipsecInternalAddresses,
project,
region,
requestId,
validateOnly
)
SELECT 
'{{ params }}',
'{{ type }}',
'{{ labelFingerprint }}',
'{{ l2Forwarding }}',
{{ subnetLength }},
'{{ interconnect }}',
'{{ labels }}',
{{ mtu }},
'{{ candidateSubnets }}',
'{{ cloudRouterIpv6InterfaceId }}',
{{ vlanTag8021q }},
'{{ pairingKey }}',
'{{ bandwidth }}',
{{ adminEnabled }},
'{{ candidateCloudRouterIpv6Address }}',
'{{ candidateCloudRouterIpAddress }}',
'{{ stackType }}',
'{{ candidateCustomerRouterIpv6Address }}',
'{{ encryption }}',
'{{ name }}',
'{{ router }}',
'{{ candidateCustomerRouterIpAddress }}',
'{{ description }}',
'{{ partnerMetadata }}',
'{{ edgeAvailabilityDomain }}',
'{{ customerRouterIpv6InterfaceId }}',
'{{ candidateIpv6Subnets }}',
'{{ partnerAsn }}',
'{{ ipsecInternalAddresses }}',
'{{ project }}',
'{{ region }}',
'{{ requestId }}',
'{{ validateOnly }}'
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
- name: interconnect_attachments
  props:
    - name: project
      value: "{{ project }}"
      description: Required parameter for the interconnect_attachments resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the interconnect_attachments resource.
    - name: params
      description: |
        Input only. [Input Only] Additional params passed with the request, but not persisted
        as part of resource payload.
      value:
        resourceManagerTags: "{{ resourceManagerTags }}"
    - name: type
      value: "{{ type }}"
      description: |
        The type of interconnect attachment this is, which can take one of the
        following values:
        - DEDICATED: an attachment to a Dedicated Interconnect.
        - PARTNER: an attachment to a Partner Interconnect, created by the
        customer.
        - PARTNER_PROVIDER: an attachment to a Partner Interconnect, created by
        the partner.
        - L2_DEDICATED: a L2 attachment to a Dedicated Interconnect.
      valid_values: ['DEDICATED', 'L2_DEDICATED', 'PARTNER', 'PARTNER_PROVIDER']
    - name: labelFingerprint
      value: "{{ labelFingerprint }}"
      description: |
        A fingerprint for the labels being applied to this InterconnectAttachment,
        which is essentially a hash of the labels set used for optimistic locking.
        The fingerprint is initially generated by Compute Engine and changes after
        every request to modify or update labels. You must always provide an
        up-to-date fingerprint hash in order to update or change labels,
        otherwise the request will fail with error412 conditionNotMet.
        To see the latest fingerprint, make a get() request to
        retrieve an InterconnectAttachment.
    - name: l2Forwarding
      description: |
        L2 Interconnect Attachment related config. This field is required if the
        type is L2_DEDICATED.
        The configuration specifies how VLAN tags (like dot1q, qinq, or dot1ad)
        within L2 packets are mapped to the destination appliances IP addresses.
        The packet is then encapsulated with the appliance IP address and sent to
        the edge appliance.
      value:
        network: "{{ network }}"
        tunnelEndpointIpAddress: "{{ tunnelEndpointIpAddress }}"
        geneveHeader:
          vni: {{ vni }}
        defaultApplianceIpAddress: "{{ defaultApplianceIpAddress }}"
        applianceMappings: "{{ applianceMappings }}"
    - name: subnetLength
      value: {{ subnetLength }}
      description: |
        Input only. Length of the IPv4 subnet mask.
        Allowed values:
        - 29 (default)
        - 30
        The default value is 29, except for Cross-Cloud Interconnect
        connections that use an InterconnectRemoteLocation with a
        constraints.subnetLengthRange.min equal to 30. For example,
        connections that use an Azure remote location fall into this
        category. In these cases, the default value is 30, and requesting
        29 returns an error.
        Where both 29 and 30 are allowed, 29 is preferred, because it gives
        Google Cloud Support more debugging visibility.
    - name: interconnect
      value: "{{ interconnect }}"
      description: |
        URL of the underlying Interconnect object that this attachment's traffic
        will traverse through.
    - name: labels
      value: "{{ labels }}"
      description: |
        Labels for this resource. These can only be added or modified by thesetLabels method. Each label key/value pair must comply withRFC1035.
        Label values may be empty.
    - name: mtu
      value: {{ mtu }}
      description: |
        Maximum Transmission Unit (MTU), in bytes, of packets passing through this
        interconnect attachment.
        Valid values are 1440, 1460, 1500, and 8896. If not specified,
        the value will default to 1440.
    - name: candidateSubnets
      value:
        - "{{ candidateSubnets }}"
      description: |
        Input only. Up to 16 candidate prefixes that can be used to restrict the allocation
        of cloudRouterIpAddress and customerRouterIpAddress for this attachment.
        All prefixes must be within link-local address space (169.254.0.0/16) and
        must be /29 or shorter (/28, /27, etc). Google will attempt to select an
        unused /29 from the supplied candidate prefix(es). The request will fail if
        all possible /29s are in use on Google's edge. If not supplied, Google will
        randomly select an unused /29 from all of link-local space.
    - name: cloudRouterIpv6InterfaceId
      value: "{{ cloudRouterIpv6InterfaceId }}"
      description: |
        This field is not available.
    - name: vlanTag8021q
      value: {{ vlanTag8021q }}
      description: |
        The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4093.
        Only specified at creation time.
    - name: pairingKey
      value: "{{ pairingKey }}"
      description: |
        [Output only for type PARTNER. Input only for PARTNER_PROVIDER. Not
        present for DEDICATED].
        The opaque identifier of a PARTNER attachment used to initiate
        provisioning with a selected partner.
        Of the form "XXXXX/region/domain"
    - name: bandwidth
      value: "{{ bandwidth }}"
      description: |
        Provisioned bandwidth capacity for the interconnect attachment. For
        attachments of type DEDICATED, the user can set the bandwidth.
        For attachments of type PARTNER, the Google Partner that is operating
        the interconnect must set the bandwidth.
        Output only for PARTNER type, mutable for PARTNER_PROVIDER and DEDICATED,
        and can take one of the following values:
        - BPS_50M: 50 Mbit/s
        - BPS_100M: 100 Mbit/s
        - BPS_200M: 200 Mbit/s
        - BPS_300M: 300 Mbit/s
        - BPS_400M: 400 Mbit/s
        - BPS_500M: 500 Mbit/s
        - BPS_1G: 1 Gbit/s
        - BPS_2G: 2 Gbit/s
        - BPS_5G: 5 Gbit/s
        - BPS_10G: 10 Gbit/s
        - BPS_20G: 20 Gbit/s
        - BPS_50G: 50 Gbit/s
        - BPS_100G: 100 Gbit/s
        - BPS_400G: 400 Gbit/s
      valid_values: ['BPS_100G', 'BPS_100M', 'BPS_10G', 'BPS_1G', 'BPS_200M', 'BPS_20G', 'BPS_2G', 'BPS_300M', 'BPS_400G', 'BPS_400M', 'BPS_500M', 'BPS_50G', 'BPS_50M', 'BPS_5G']
    - name: adminEnabled
      value: {{ adminEnabled }}
      description: |
        Determines whether this Attachment will carry packets.
        Not present for PARTNER_PROVIDER.
    - name: candidateCloudRouterIpv6Address
      value: "{{ candidateCloudRouterIpv6Address }}"
      description: |
        Single IPv6 address + prefix length to be configured on the cloud router
        interface for this interconnect attachment.
        - Both candidate_cloud_router_ipv6_address and
        candidate_customer_router_ipv6_address fields must be set or both must be
        unset.
        - Prefix length of both candidate_cloud_router_ipv6_address and
        candidate_customer_router_ipv6_address must be the same.
        - Max prefix length is 126.
    - name: candidateCloudRouterIpAddress
      value: "{{ candidateCloudRouterIpAddress }}"
      description: |
        Single IPv4 address + prefix length to be configured on the cloud router
        interface for this interconnect attachment.
        - Both candidate_cloud_router_ip_address and
        candidate_customer_router_ip_address fields must be set or both must be
        unset.
        - Prefix length of both candidate_cloud_router_ip_address and
        candidate_customer_router_ip_address must be the same.
        - Max prefix length is 31.
    - name: stackType
      value: "{{ stackType }}"
      description: |
        The stack type for this interconnect attachment to identify whether the
        IPv6 feature is enabled or not. If not specified, IPV4_ONLY
        will be used.
        This field can be both set at interconnect attachments creation and
        update interconnect attachment operations.
      valid_values: ['IPV4_IPV6', 'IPV4_ONLY']
    - name: candidateCustomerRouterIpv6Address
      value: "{{ candidateCustomerRouterIpv6Address }}"
      description: |
        Single IPv6 address + prefix length to be configured on the customer router
        interface for this interconnect attachment.
    - name: encryption
      value: "{{ encryption }}"
      description: |
        Indicates the user-supplied encryption option of this VLAN attachment
        (interconnectAttachment). Can only be specified at attachment creation
        for PARTNER or DEDICATED attachments.
        Possible values are:
        - NONE - This is the default value, which means that the
        VLAN attachment carries unencrypted traffic. VMs are able to send
        traffic to, or receive traffic from, such a VLAN attachment.
        - IPSEC - The VLAN attachment carries only encrypted
        traffic that is encrypted by an IPsec device, such as an HA VPN gateway or
        third-party IPsec VPN. VMs cannot directly send traffic to, or receive
        traffic from, such a VLAN attachment. To use *HA VPN over Cloud
        Interconnect*, the VLAN attachment must be created with this
        option.
      valid_values: ['IPSEC', 'NONE']
    - name: name
      value: "{{ name }}"
      description: |
        Name of the resource. Provided by the client when the resource is created.
        The name must be 1-63 characters long, and comply withRFC1035.
        Specifically, the name must be 1-63 characters long and match the regular
        expression \`[a-z]([-a-z0-9]*[a-z0-9])?\` which means the first
        character must be a lowercase letter, and all following characters must
        be a dash, lowercase letter, or digit, except the last character, which
        cannot be a dash.
    - name: router
      value: "{{ router }}"
      description: |
        URL of the Cloud Router to be used for dynamic routing. This router must be
        in the same region as this InterconnectAttachment. The
        InterconnectAttachment will automatically connect the Interconnect to the
        network & region within which the Cloud Router is configured.
    - name: candidateCustomerRouterIpAddress
      value: "{{ candidateCustomerRouterIpAddress }}"
      description: |
        Single IPv4 address + prefix length to be configured on the customer router
        interface for this interconnect attachment.
    - name: description
      value: "{{ description }}"
      description: |
        An optional description of this resource.
    - name: partnerMetadata
      description: |
        Informational metadata about Partner attachments from Partners to display
        to customers.
        Output only for PARTNER type, mutable for PARTNER_PROVIDER, not
        available for DEDICATED.
      value:
        interconnectName: "{{ interconnectName }}"
        portalUrl: "{{ portalUrl }}"
        partnerName: "{{ partnerName }}"
    - name: edgeAvailabilityDomain
      value: "{{ edgeAvailabilityDomain }}"
      description: |
        Input only. Desired availability domain for the attachment. Only available for type
        PARTNER, at creation time, and can take one of the following values:
        - AVAILABILITY_DOMAIN_ANY
        - AVAILABILITY_DOMAIN_1
        - AVAILABILITY_DOMAIN_2
        For improved reliability, customers should configure a pair of attachments,
        one per availability domain. The selected availability domain will be
        provided to the Partner via the pairing key, so that the provisioned
        circuit will lie in the specified domain. If not specified, the value will
        default to AVAILABILITY_DOMAIN_ANY.
      valid_values: ['AVAILABILITY_DOMAIN_1', 'AVAILABILITY_DOMAIN_2', 'AVAILABILITY_DOMAIN_ANY']
    - name: customerRouterIpv6InterfaceId
      value: "{{ customerRouterIpv6InterfaceId }}"
      description: |
        This field is not available.
    - name: candidateIpv6Subnets
      value:
        - "{{ candidateIpv6Subnets }}"
      description: |
        This field is not available.
    - name: partnerAsn
      value: "{{ partnerAsn }}"
      description: |
        Optional BGP ASN for the router supplied by a Layer 3 Partner if they
        configured BGP on behalf of the customer.
        Output only for PARTNER type, input only for PARTNER_PROVIDER, not
        available for DEDICATED.
    - name: ipsecInternalAddresses
      value:
        - "{{ ipsecInternalAddresses }}"
      description: |
        A list of URLs of addresses that have been reserved for the VLAN
        attachment. Used only for the VLAN attachment that has the encryption
        option as IPSEC. The addresses must be regional internal IP address ranges.
        When creating an HA VPN gateway over the VLAN attachment, if the attachment
        is configured to use a regional internal IP address, then the VPN gateway's
        IP address is allocated from the IP address range specified here. For
        example, if the HA VPN gateway's interface 0 is paired to this VLAN
        attachment, then a regional internal IP address for the VPN gateway
        interface 0 will be allocated from the IP address specified for this
        VLAN attachment.
        If this field is not specified when creating the VLAN attachment, then
        later on when creating an HA VPN gateway on this VLAN attachment, the HA
        VPN gateway's IP address is allocated from the regional external IP address
        pool.
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

Updates the specified interconnect attachment with the data included in the<br />request. This method supportsPATCH<br />semantics and uses theJSON merge<br />patch format and processing rules.

```sql
UPDATE google.compute.interconnect_attachments
SET 
data__params = '{{ params }}',
data__type = '{{ type }}',
data__labelFingerprint = '{{ labelFingerprint }}',
data__l2Forwarding = '{{ l2Forwarding }}',
data__subnetLength = {{ subnetLength }},
data__interconnect = '{{ interconnect }}',
data__labels = '{{ labels }}',
data__mtu = {{ mtu }},
data__candidateSubnets = '{{ candidateSubnets }}',
data__cloudRouterIpv6InterfaceId = '{{ cloudRouterIpv6InterfaceId }}',
data__vlanTag8021q = {{ vlanTag8021q }},
data__pairingKey = '{{ pairingKey }}',
data__bandwidth = '{{ bandwidth }}',
data__adminEnabled = {{ adminEnabled }},
data__candidateCloudRouterIpv6Address = '{{ candidateCloudRouterIpv6Address }}',
data__candidateCloudRouterIpAddress = '{{ candidateCloudRouterIpAddress }}',
data__stackType = '{{ stackType }}',
data__candidateCustomerRouterIpv6Address = '{{ candidateCustomerRouterIpv6Address }}',
data__encryption = '{{ encryption }}',
data__name = '{{ name }}',
data__router = '{{ router }}',
data__candidateCustomerRouterIpAddress = '{{ candidateCustomerRouterIpAddress }}',
data__description = '{{ description }}',
data__partnerMetadata = '{{ partnerMetadata }}',
data__edgeAvailabilityDomain = '{{ edgeAvailabilityDomain }}',
data__customerRouterIpv6InterfaceId = '{{ customerRouterIpv6InterfaceId }}',
data__candidateIpv6Subnets = '{{ candidateIpv6Subnets }}',
data__partnerAsn = '{{ partnerAsn }}',
data__ipsecInternalAddresses = '{{ ipsecInternalAddresses }}'
WHERE 
project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND interconnectAttachment = '{{ interconnectAttachment }}' --required
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

Deletes the specified interconnect attachment.

```sql
DELETE FROM google.compute.interconnect_attachments
WHERE project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND interconnectAttachment = '{{ interconnectAttachment }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="set_labels"
    values={[
        { label: 'set_labels', value: 'set_labels' }
    ]}
>
<TabItem value="set_labels">

Sets the labels on an InterconnectAttachment. To learn more about labels,<br />read the Labeling<br />Resources documentation.

```sql
EXEC google.compute.interconnect_attachments.set_labels 
@project='{{ project }}' --required, 
@region='{{ region }}' --required, 
@resource='{{ resource }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"labels": "{{ labels }}", 
"labelFingerprint": "{{ labelFingerprint }}"
}'
;
```
</TabItem>
</Tabs>
