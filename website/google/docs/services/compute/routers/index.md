--- 
title: routers
hide_title: false
hide_table_of_contents: false
keywords:
  - routers
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

Creates, updates, deletes, gets or lists a <code>routers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="routers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.routers" /></td></tr>
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
    <td>[Output Only] The unique identifier for the resource. This identifier is defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply withRFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: <code>&#91;a-z&#93;(?:&#91;-a-z0-9&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="bgp" /></td>
    <td><code>object</code></td>
    <td>BGP information specific to this router. (id: RouterBgp)</td>
</tr>
<tr>
    <td><CopyableCode code="bgpPeers" /></td>
    <td><code>array</code></td>
    <td>BGP information that must be configured into the routing stack to establish BGP peering. This information must specify the peer ASN and either the interface name, IP address, or peer IP address. Please refer toRFC4273.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Creation timestamp inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptedInterconnectRouter" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if a router is dedicated for use with encrypted VLAN attachments (interconnectAttachments).</td>
</tr>
<tr>
    <td><CopyableCode code="interfaces" /></td>
    <td><code>array</code></td>
    <td>Router interfaces. To create a BGP peer that uses a router interface, the interface must have one of the following fields specified:        - linkedVpnTunnel    - linkedInterconnectAttachment    - subnetwork   You can create a router interface without any of these fields specified. However, you cannot create a BGP peer that uses that interface.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of resource. Always compute#router for routers. (default: compute#router)</td>
</tr>
<tr>
    <td><CopyableCode code="md5AuthenticationKeys" /></td>
    <td><code>array</code></td>
    <td>Keys used for MD5 authentication.</td>
</tr>
<tr>
    <td><CopyableCode code="nats" /></td>
    <td><code>array</code></td>
    <td>A list of NAT services created in this router.</td>
</tr>
<tr>
    <td><CopyableCode code="nccGateway" /></td>
    <td><code>string</code></td>
    <td>URI of the ncc_gateway to which this router associated.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>URI of the network to which this router belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>object</code></td>
    <td>Input only. [Input Only] Additional params passed with the request, but not persisted as part of resource payload. (id: RouterParams)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>[Output Only] URI of the region where the router resides. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for the resource.</td>
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
    <td>A list of Router resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of resource. Always compute#router for routers. (default: compute#routerList)</td>
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
    <td>[Output Only] The unique identifier for the resource. This identifier is defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply withRFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: <code>&#91;a-z&#93;(?:&#91;-a-z0-9&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="bgp" /></td>
    <td><code>object</code></td>
    <td>BGP information specific to this router. (id: RouterBgp)</td>
</tr>
<tr>
    <td><CopyableCode code="bgpPeers" /></td>
    <td><code>array</code></td>
    <td>BGP information that must be configured into the routing stack to establish BGP peering. This information must specify the peer ASN and either the interface name, IP address, or peer IP address. Please refer toRFC4273.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Creation timestamp inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptedInterconnectRouter" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if a router is dedicated for use with encrypted VLAN attachments (interconnectAttachments).</td>
</tr>
<tr>
    <td><CopyableCode code="interfaces" /></td>
    <td><code>array</code></td>
    <td>Router interfaces. To create a BGP peer that uses a router interface, the interface must have one of the following fields specified:        - linkedVpnTunnel    - linkedInterconnectAttachment    - subnetwork   You can create a router interface without any of these fields specified. However, you cannot create a BGP peer that uses that interface.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of resource. Always compute#router for routers. (default: compute#router)</td>
</tr>
<tr>
    <td><CopyableCode code="md5AuthenticationKeys" /></td>
    <td><code>array</code></td>
    <td>Keys used for MD5 authentication.</td>
</tr>
<tr>
    <td><CopyableCode code="nats" /></td>
    <td><code>array</code></td>
    <td>A list of NAT services created in this router.</td>
</tr>
<tr>
    <td><CopyableCode code="nccGateway" /></td>
    <td><code>string</code></td>
    <td>URI of the ncc_gateway to which this router associated.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>URI of the network to which this router belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>object</code></td>
    <td>Input only. [Input Only] Additional params passed with the request, but not persisted as part of resource payload. (id: RouterParams)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>[Output Only] URI of the region where the router resides. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for the resource.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-router"><code>router</code></a></td>
    <td></td>
    <td>Returns the specified Router resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Retrieves a list of Router resources available to the specified project.</td>
</tr>
<tr>
    <td><a href="#aggregated_list"><CopyableCode code="aggregated_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-includeAllScopes"><code>includeAllScopes</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a>, <a href="#parameter-serviceProjectNumber"><code>serviceProjectNumber</code></a></td>
    <td>Retrieves an aggregated list of routers.<br /><br />To prevent failure, Google recommends that you set the<br />`returnPartialSuccess` parameter to `true`.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a Router resource in the specified project and region using<br />the data included in the request.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-router"><code>router</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Patches the specified Router resource with the data included in the<br />request. This method supportsPATCH<br />semantics and usesJSON merge<br />patch format and processing rules.</td>
</tr>
<tr>
    <td><a href="#patch_named_set"><CopyableCode code="patch_named_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-router"><code>router</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Patches Named Set</td>
</tr>
<tr>
    <td><a href="#patch_route_policy"><CopyableCode code="patch_route_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-router"><code>router</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Patches Route Policy</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-router"><code>router</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the specified Router resource with the data included in the<br />request.  This method conforms toPUT semantics, which requests that the state of the<br />target resource be created or replaced with the state defined by the<br />representation enclosed in the request message payload.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-router"><code>router</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified Router resource.</td>
</tr>
<tr>
    <td><a href="#preview"><CopyableCode code="preview" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-router"><code>router</code></a></td>
    <td></td>
    <td>Preview fields auto-generated during router create andupdate operations.<br />Calling this method does NOT create or update the router.</td>
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
<tr id="parameter-router">
    <td><CopyableCode code="router" /></td>
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

Returns the specified Router resource.

```sql
SELECT
id,
name,
bgp,
bgpPeers,
creationTimestamp,
description,
encryptedInterconnectRouter,
interfaces,
kind,
md5AuthenticationKeys,
nats,
nccGateway,
network,
params,
region,
selfLink
FROM google.compute.routers
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND router = '{{ router }}' -- required
;
```
</TabItem>
<TabItem value="list">

Retrieves a list of Router resources available to the specified project.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.routers
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND filter = '{{ filter }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
;
```
</TabItem>
<TabItem value="aggregated_list">

Retrieves an aggregated list of routers.<br /><br />To prevent failure, Google recommends that you set the<br />`returnPartialSuccess` parameter to `true`.

```sql
SELECT
id,
name,
bgp,
bgpPeers,
creationTimestamp,
description,
encryptedInterconnectRouter,
interfaces,
kind,
md5AuthenticationKeys,
nats,
nccGateway,
network,
params,
region,
selfLink
FROM google.compute.routers
WHERE project = '{{ project }}' -- required
AND filter = '{{ filter }}'
AND includeAllScopes = '{{ includeAllScopes }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
AND serviceProjectNumber = '{{ serviceProjectNumber }}'
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

Creates a Router resource in the specified project and region using<br />the data included in the request.

```sql
INSERT INTO google.compute.routers (
data__bgp,
data__bgpPeers,
data__description,
data__encryptedInterconnectRouter,
data__id,
data__interfaces,
data__md5AuthenticationKeys,
data__name,
data__nats,
data__nccGateway,
data__network,
data__params,
data__region,
data__selfLink,
project,
region,
requestId
)
SELECT 
'{{ bgp }}',
'{{ bgpPeers }}',
'{{ description }}',
{{ encryptedInterconnectRouter }},
'{{ id }}',
'{{ interfaces }}',
'{{ md5AuthenticationKeys }}',
'{{ name }}',
'{{ nats }}',
'{{ nccGateway }}',
'{{ network }}',
'{{ params }}',
'{{ region }}',
'{{ selfLink }}',
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
- name: routers
  props:
    - name: project
      value: "{{ project }}"
      description: Required parameter for the routers resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the routers resource.
    - name: bgp
      description: |
        BGP information specific to this router.
      value:
        advertiseMode: "{{ advertiseMode }}"
        advertisedGroups:
          - "{{ advertisedGroups }}"
        advertisedIpRanges:
          - description: "{{ description }}"
            range: "{{ range }}"
        asn: {{ asn }}
        identifierRange: "{{ identifierRange }}"
        keepaliveInterval: {{ keepaliveInterval }}
    - name: bgpPeers
      description: |
        BGP information that must be configured into the routing stack to
        establish BGP peering. This information must specify the peer ASN and
        either the interface name, IP address, or peer IP address. Please refer toRFC4273.
      value:
        - advertiseMode: "{{ advertiseMode }}"
          advertisedGroups: "{{ advertisedGroups }}"
          advertisedIpRanges: "{{ advertisedIpRanges }}"
          advertisedRoutePriority: {{ advertisedRoutePriority }}
          bfd:
            minReceiveInterval: {{ minReceiveInterval }}
            minTransmitInterval: {{ minTransmitInterval }}
            multiplier: {{ multiplier }}
            sessionInitializationMode: "{{ sessionInitializationMode }}"
          customLearnedIpRanges: "{{ customLearnedIpRanges }}"
          customLearnedRoutePriority: {{ customLearnedRoutePriority }}
          enable: "{{ enable }}"
          enableIpv4: {{ enableIpv4 }}
          enableIpv6: {{ enableIpv6 }}
          exportPolicies: "{{ exportPolicies }}"
          importPolicies: "{{ importPolicies }}"
          interfaceName: "{{ interfaceName }}"
          ipAddress: "{{ ipAddress }}"
          ipv4NexthopAddress: "{{ ipv4NexthopAddress }}"
          ipv6NexthopAddress: "{{ ipv6NexthopAddress }}"
          managementType: "{{ managementType }}"
          md5AuthenticationKeyName: "{{ md5AuthenticationKeyName }}"
          name: "{{ name }}"
          peerAsn: {{ peerAsn }}
          peerIpAddress: "{{ peerIpAddress }}"
          peerIpv4NexthopAddress: "{{ peerIpv4NexthopAddress }}"
          peerIpv6NexthopAddress: "{{ peerIpv6NexthopAddress }}"
          routerApplianceInstance: "{{ routerApplianceInstance }}"
    - name: description
      value: "{{ description }}"
      description: |
        An optional description of this resource. Provide this property when you
        create the resource.
    - name: encryptedInterconnectRouter
      value: {{ encryptedInterconnectRouter }}
      description: |
        Indicates if a router is dedicated for use with encrypted VLAN
        attachments (interconnectAttachments).
    - name: id
      value: "{{ id }}"
      description: |
        [Output Only] The unique identifier for the resource. This identifier is
        defined by the server.
    - name: interfaces
      description: |
        Router interfaces.
        To create a BGP peer that uses a router interface,
        the interface must have one of the following fields specified:
        - linkedVpnTunnel
        - linkedInterconnectAttachment
        - subnetwork
        You can create a router interface without any of these fields specified.
        However, you cannot create a BGP peer that uses that interface.
      value:
        - ipRange: "{{ ipRange }}"
          ipVersion: "{{ ipVersion }}"
          linkedInterconnectAttachment: "{{ linkedInterconnectAttachment }}"
          linkedVpnTunnel: "{{ linkedVpnTunnel }}"
          managementType: "{{ managementType }}"
          name: "{{ name }}"
          privateIpAddress: "{{ privateIpAddress }}"
          redundantInterface: "{{ redundantInterface }}"
          subnetwork: "{{ subnetwork }}"
    - name: md5AuthenticationKeys
      description: |
        Keys used for MD5 authentication.
      value:
        - key: "{{ key }}"
          name: "{{ name }}"
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
    - name: nats
      description: |
        A list of NAT services created in this router.
      value:
        - autoNetworkTier: "{{ autoNetworkTier }}"
          drainNatIps: "{{ drainNatIps }}"
          effectiveTcpTimeWaitTimeoutSec: {{ effectiveTcpTimeWaitTimeoutSec }}
          enableDynamicPortAllocation: {{ enableDynamicPortAllocation }}
          enableEndpointIndependentMapping: {{ enableEndpointIndependentMapping }}
          endpointTypes: "{{ endpointTypes }}"
          icmpIdleTimeoutSec: {{ icmpIdleTimeoutSec }}
          logConfig:
            enable: {{ enable }}
            filter: "{{ filter }}"
          maxPortsPerVm: {{ maxPortsPerVm }}
          minPortsPerVm: {{ minPortsPerVm }}
          name: "{{ name }}"
          nat64Subnetworks: "{{ nat64Subnetworks }}"
          natIpAllocateOption: "{{ natIpAllocateOption }}"
          natIps: "{{ natIps }}"
          rules: "{{ rules }}"
          sourceSubnetworkIpRangesToNat: "{{ sourceSubnetworkIpRangesToNat }}"
          sourceSubnetworkIpRangesToNat64: "{{ sourceSubnetworkIpRangesToNat64 }}"
          subnetworks: "{{ subnetworks }}"
          tcpEstablishedIdleTimeoutSec: {{ tcpEstablishedIdleTimeoutSec }}
          tcpTimeWaitTimeoutSec: {{ tcpTimeWaitTimeoutSec }}
          tcpTransitoryIdleTimeoutSec: {{ tcpTransitoryIdleTimeoutSec }}
          type: "{{ type }}"
          udpIdleTimeoutSec: {{ udpIdleTimeoutSec }}
    - name: nccGateway
      value: "{{ nccGateway }}"
      description: |
        URI of the ncc_gateway to which this router associated.
    - name: network
      value: "{{ network }}"
      description: |
        URI of the network to which this router belongs.
    - name: params
      description: |
        Input only. [Input Only] Additional params passed with the request, but not persisted
        as part of resource payload.
      value:
        resourceManagerTags: "{{ resourceManagerTags }}"
    - name: region
      value: "{{ region }}"
      description: |
        [Output Only] URI of the region where the router resides.
        You must specify this field as part of the HTTP request URL. It is
        not settable as a field in the request body.
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
        { label: 'patch', value: 'patch' },
        { label: 'patch_named_set', value: 'patch_named_set' },
        { label: 'patch_route_policy', value: 'patch_route_policy' }
    ]}
>
<TabItem value="patch">

Patches the specified Router resource with the data included in the<br />request. This method supportsPATCH<br />semantics and usesJSON merge<br />patch format and processing rules.

```sql
UPDATE google.compute.routers
SET 
data__bgp = '{{ bgp }}',
data__bgpPeers = '{{ bgpPeers }}',
data__description = '{{ description }}',
data__encryptedInterconnectRouter = {{ encryptedInterconnectRouter }},
data__id = '{{ id }}',
data__interfaces = '{{ interfaces }}',
data__md5AuthenticationKeys = '{{ md5AuthenticationKeys }}',
data__name = '{{ name }}',
data__nats = '{{ nats }}',
data__nccGateway = '{{ nccGateway }}',
data__network = '{{ network }}',
data__params = '{{ params }}',
data__region = '{{ region }}',
data__selfLink = '{{ selfLink }}'
WHERE 
project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND router = '{{ router }}' --required
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
<TabItem value="patch_named_set">

Patches Named Set

```sql
UPDATE google.compute.routers
SET 
data__description = '{{ description }}',
data__elements = '{{ elements }}',
data__fingerprint = '{{ fingerprint }}',
data__name = '{{ name }}',
data__type = '{{ type }}'
WHERE 
project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND router = '{{ router }}' --required
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
<TabItem value="patch_route_policy">

Patches Route Policy

```sql
UPDATE google.compute.routers
SET 
data__description = '{{ description }}',
data__fingerprint = '{{ fingerprint }}',
data__name = '{{ name }}',
data__terms = '{{ terms }}',
data__type = '{{ type }}'
WHERE 
project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND router = '{{ router }}' --required
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


## `REPLACE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates the specified Router resource with the data included in the<br />request.  This method conforms toPUT semantics, which requests that the state of the<br />target resource be created or replaced with the state defined by the<br />representation enclosed in the request message payload.

```sql
REPLACE google.compute.routers
SET 
data__bgp = '{{ bgp }}',
data__bgpPeers = '{{ bgpPeers }}',
data__description = '{{ description }}',
data__encryptedInterconnectRouter = {{ encryptedInterconnectRouter }},
data__id = '{{ id }}',
data__interfaces = '{{ interfaces }}',
data__md5AuthenticationKeys = '{{ md5AuthenticationKeys }}',
data__name = '{{ name }}',
data__nats = '{{ nats }}',
data__nccGateway = '{{ nccGateway }}',
data__network = '{{ network }}',
data__params = '{{ params }}',
data__region = '{{ region }}',
data__selfLink = '{{ selfLink }}'
WHERE 
project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND router = '{{ router }}' --required
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

Deletes the specified Router resource.

```sql
DELETE FROM google.compute.routers
WHERE project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND router = '{{ router }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="preview"
    values={[
        { label: 'preview', value: 'preview' }
    ]}
>
<TabItem value="preview">

Preview fields auto-generated during router create andupdate operations.<br />Calling this method does NOT create or update the router.

```sql
EXEC google.compute.routers.preview 
@project='{{ project }}' --required, 
@region='{{ region }}' --required, 
@router='{{ router }}' --required 
@@json=
'{
"bgp": "{{ bgp }}", 
"bgpPeers": "{{ bgpPeers }}", 
"description": "{{ description }}", 
"encryptedInterconnectRouter": {{ encryptedInterconnectRouter }}, 
"id": "{{ id }}", 
"interfaces": "{{ interfaces }}", 
"md5AuthenticationKeys": "{{ md5AuthenticationKeys }}", 
"name": "{{ name }}", 
"nats": "{{ nats }}", 
"nccGateway": "{{ nccGateway }}", 
"network": "{{ network }}", 
"params": "{{ params }}", 
"region": "{{ region }}", 
"selfLink": "{{ selfLink }}"
}'
;
```
</TabItem>
</Tabs>
