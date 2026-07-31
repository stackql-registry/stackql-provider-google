--- 
title: interconnects
hide_title: false
hide_table_of_contents: false
keywords:
  - interconnects
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

Creates, updates, deletes, gets or lists an <code>interconnects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="interconnects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.interconnects" /></td></tr>
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
    <td>Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply withRFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: <code>&#91;a-z&#93;(?:&#91;-a-z0-9&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="aaiEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Enable or disable the application awareness feature on this Cloud Interconnect.</td>
</tr>
<tr>
    <td><CopyableCode code="adminEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Administrative status of the interconnect. When this is set to true, the Interconnect is functional and can carry traffic. When set to false, no packets can be carried over the interconnect and no BGP routes are exchanged over it. By default, the status is set to true.</td>
</tr>
<tr>
    <td><CopyableCode code="applicationAwareInterconnect" /></td>
    <td><code>object</code></td>
    <td>Configuration information for application awareness on this Cloud Interconnect. (id: InterconnectApplicationAwareInterconnect)</td>
</tr>
<tr>
    <td><CopyableCode code="availableFeatures" /></td>
    <td><code>array</code></td>
    <td>[Output only] List of features available for this Interconnect connection, which can take one of the following values:        - IF_MACSEC: If present, then the Interconnect connection is    provisioned on MACsec capable hardware ports. If not present, then the    Interconnect connection is provisioned on non-MACsec capable ports. Any    attempt to enable MACsec will fail.    - IF_CROSS_SITE_NETWORK: If present, then the Interconnect connection is    provisioned exclusively for Cross-Site Networking. Any attempt to configure    VLAN attachments will fail. If not present, then the Interconnect    connection is not provisioned for Cross-Site Networking. Any attempt to use    it for Cross-Site Networking will fail.</td>
</tr>
<tr>
    <td><CopyableCode code="circuitInfos" /></td>
    <td><code>array</code></td>
    <td>Output only. [Output Only] A list of CircuitInfo objects, that describe the individual circuits in this LAG.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Creation timestamp inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="customerName" /></td>
    <td><code>string</code></td>
    <td>Customer name, to put in the Letter of Authorization as the party authorized to request a crossconnect.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="effectiveLocation" /></td>
    <td><code>string</code></td>
    <td>Output only. URL of the InterconnectLocation object that represents where this connection is to be provisioned. By default it will be the same as the location field.</td>
</tr>
<tr>
    <td><CopyableCode code="expectedOutages" /></td>
    <td><code>array</code></td>
    <td>Output only. [Output Only] A list of outages expected for this Interconnect.</td>
</tr>
<tr>
    <td><CopyableCode code="googleIpAddress" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] IP address configured on the Google side of the Interconnect link. This can be used only for ping tests.</td>
</tr>
<tr>
    <td><CopyableCode code="googleReferenceId" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Google reference ID to be used when raising support tickets with Google or otherwise to debug backend connectivity issues.</td>
</tr>
<tr>
    <td><CopyableCode code="interconnectAttachments" /></td>
    <td><code>array</code></td>
    <td>Output only. [Output Only] A list of the URLs of all InterconnectAttachments configured to use  this Interconnect.</td>
</tr>
<tr>
    <td><CopyableCode code="interconnectGroups" /></td>
    <td><code>array</code></td>
    <td>Output only. [Output Only] URLs of InterconnectGroups that include this Interconnect. Order is arbitrary and items are unique.</td>
</tr>
<tr>
    <td><CopyableCode code="interconnectType" /></td>
    <td><code>string</code></td>
    <td>Type of interconnect, which can take one of the following values:        - PARTNER: A partner-managed interconnection shared between customers    though a partner.    - DEDICATED: A dedicated physical interconnection with the    customer.   Note that a value IT_PRIVATE has been deprecated in favor of DEDICATED. (DEDICATED, IT_PRIVATE, PARTNER)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of the resource. Alwayscompute#interconnect for interconnects. (default: compute#interconnect)</td>
</tr>
<tr>
    <td><CopyableCode code="labelFingerprint" /></td>
    <td><code>string (byte)</code></td>
    <td>A fingerprint for the labels being applied to this Interconnect, which is essentially a hash of the labels set used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash in order to update or change labels, otherwise the request will fail with error412 conditionNotMet.  To see the latest fingerprint, make a get() request to retrieve an Interconnect.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels for this resource. These can only be added or modified by thesetLabels method. Each label key/value pair must comply withRFC1035. Label values may be empty.</td>
</tr>
<tr>
    <td><CopyableCode code="linkType" /></td>
    <td><code>string</code></td>
    <td>Type of link requested, which can take one of the following values:        - LINK_TYPE_ETHERNET_10G_LR: A 10G Ethernet with LR optics    - LINK_TYPE_ETHERNET_100G_LR: A 100G Ethernet with LR optics.    - LINK_TYPE_ETHERNET_400G_LR4: A 400G Ethernet with LR4 optics.    Note that this field indicates the speed of each of the links in the bundle, not the speed of the entire bundle. (LINK_TYPE_ETHERNET_100G_LR, LINK_TYPE_ETHERNET_10G_LR, LINK_TYPE_ETHERNET_400G_LR4)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>URL of the InterconnectLocation object that represents where this connection is to be provisioned.</td>
</tr>
<tr>
    <td><CopyableCode code="macsec" /></td>
    <td><code>object</code></td>
    <td>Configuration that enables Media Access Control security (MACsec) on the Cloud Interconnect connection between Google and your on-premises router. (id: InterconnectMacsec)</td>
</tr>
<tr>
    <td><CopyableCode code="macsecEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Enable or disable MACsec on this Interconnect connection. MACsec enablement fails if the MACsec object is not specified.</td>
</tr>
<tr>
    <td><CopyableCode code="nocContactEmail" /></td>
    <td><code>string</code></td>
    <td>Email address to contact the customer NOC for operations and maintenance notifications regarding this Interconnect. If specified, this will be used for notifications in addition to all other forms described, such as Cloud Monitoring logs alerting and Cloud Notifications. This field is required for users who sign up for Cloud Interconnect using workforce identity federation.</td>
</tr>
<tr>
    <td><CopyableCode code="operationalStatus" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The current status of this Interconnect's functionality, which can take one of the following values:        - OS_ACTIVE: A valid Interconnect, which is turned up and is ready to    use. Attachments may be provisioned on this Interconnect.  - OS_UNPROVISIONED: An Interconnect that has not completed turnup. No attachments may be provisioned on this Interconnect. - OS_UNDER_MAINTENANCE: An Interconnect that is undergoing internal maintenance. No attachments may be provisioned or updated on this Interconnect. (OS_ACTIVE, OS_UNPROVISIONED)</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>object</code></td>
    <td>Input only. [Input Only] Additional params passed with the request, but not persisted as part of resource payload. (id: InterconnectParams)</td>
</tr>
<tr>
    <td><CopyableCode code="peerIpAddress" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] IP address configured on the customer side of the Interconnect link. The customer should configure this IP address during turnup when prompted by Google NOC. This can be used only for ping tests.</td>
</tr>
<tr>
    <td><CopyableCode code="provisionedLinkCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. [Output Only] Number of links actually provisioned in this interconnect.</td>
</tr>
<tr>
    <td><CopyableCode code="remoteLocation" /></td>
    <td><code>string</code></td>
    <td>Indicates that this is a Cross-Cloud Interconnect. This field specifies the location outside of Google's network that the interconnect is connected to.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedFeatures" /></td>
    <td><code>array</code></td>
    <td>Optional. This parameter can be provided only with Interconnect INSERT. It isn't valid for Interconnect PATCH. List of features requested for this Interconnect connection, which can take one of the following values:        - IF_MACSEC: If specified, then the connection is created on MACsec    capable hardware ports. If not specified, non-MACsec capable ports will    also be considered.    - IF_CROSS_SITE_NETWORK: If specified, then the connection is created    exclusively for Cross-Site Networking. The connection can not be used for    Cross-Site Networking unless this feature is specified.</td>
</tr>
<tr>
    <td><CopyableCode code="requestedLinkCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Target number of physical links in the link bundle, as requested by the customer.</td>
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
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The current state of Interconnect functionality, which can take one of the following values:        - ACTIVE: The Interconnect is valid, turned up and ready to use.    Attachments may be provisioned on this Interconnect.    - UNPROVISIONED: The Interconnect has not completed turnup. No    attachments may be provisioned on this Interconnect.    - UNDER_MAINTENANCE: The Interconnect is undergoing internal maintenance.    No attachments may be provisioned or updated on this    Interconnect. (ACTIVE, UNPROVISIONED)</td>
</tr>
<tr>
    <td><CopyableCode code="subzone" /></td>
    <td><code>string</code></td>
    <td>To be deprecated. (SUBZONE_A, SUBZONE_B)</td>
</tr>
<tr>
    <td><CopyableCode code="wireGroups" /></td>
    <td><code>array</code></td>
    <td>Output only. [Output Only] A list of the URLs of all CrossSiteNetwork WireGroups configured to use this Interconnect. The Interconnect cannot be deleted if this list is non-empty.</td>
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
    <td>A list of Interconnect resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of resource. Alwayscompute#interconnectList for lists of interconnects. (default: compute#interconnectList)</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-interconnect"><code>interconnect</code></a></td>
    <td></td>
    <td>Returns the specified Interconnect. Get a list of available Interconnects<br />by making a list() request.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Retrieves the list of Interconnects available to the specified project.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates an Interconnect in the specified project using<br />the data included in the request.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-interconnect"><code>interconnect</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the specified Interconnect with the data included in the request.<br />This method supportsPATCH<br />semantics and uses theJSON merge<br />patch format and processing rules.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-interconnect"><code>interconnect</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified Interconnect.</td>
</tr>
<tr>
    <td><a href="#set_labels"><CopyableCode code="set_labels" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-resource"><code>resource</code></a></td>
    <td></td>
    <td>Sets the labels on an Interconnect. To learn more about labels,<br />read the Labeling<br />Resources documentation.</td>
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
<tr id="parameter-interconnect">
    <td><CopyableCode code="interconnect" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
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

Returns the specified Interconnect. Get a list of available Interconnects<br />by making a list() request.

```sql
SELECT
id,
name,
aaiEnabled,
adminEnabled,
applicationAwareInterconnect,
availableFeatures,
circuitInfos,
creationTimestamp,
customerName,
description,
effectiveLocation,
expectedOutages,
googleIpAddress,
googleReferenceId,
interconnectAttachments,
interconnectGroups,
interconnectType,
kind,
labelFingerprint,
labels,
linkType,
location,
macsec,
macsecEnabled,
nocContactEmail,
operationalStatus,
params,
peerIpAddress,
provisionedLinkCount,
remoteLocation,
requestedFeatures,
requestedLinkCount,
satisfiesPzs,
selfLink,
state,
subzone,
wireGroups
FROM google.compute.interconnects
WHERE project = '{{ project }}' -- required
AND interconnect = '{{ interconnect }}' -- required
;
```
</TabItem>
<TabItem value="list">

Retrieves the list of Interconnects available to the specified project.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.interconnects
WHERE project = '{{ project }}' -- required
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
AND orderBy = '{{ orderBy }}'
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
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

Creates an Interconnect in the specified project using<br />the data included in the request.

```sql
INSERT INTO google.compute.interconnects (
data__subzone,
data__interconnectType,
data__adminEnabled,
data__requestedFeatures,
data__macsecEnabled,
data__linkType,
data__requestedLinkCount,
data__location,
data__labelFingerprint,
data__params,
data__labels,
data__aaiEnabled,
data__nocContactEmail,
data__customerName,
data__macsec,
data__availableFeatures,
data__applicationAwareInterconnect,
data__name,
data__remoteLocation,
data__description,
project,
requestId
)
SELECT 
'{{ subzone }}',
'{{ interconnectType }}',
{{ adminEnabled }},
'{{ requestedFeatures }}',
{{ macsecEnabled }},
'{{ linkType }}',
{{ requestedLinkCount }},
'{{ location }}',
'{{ labelFingerprint }}',
'{{ params }}',
'{{ labels }}',
{{ aaiEnabled }},
'{{ nocContactEmail }}',
'{{ customerName }}',
'{{ macsec }}',
'{{ availableFeatures }}',
'{{ applicationAwareInterconnect }}',
'{{ name }}',
'{{ remoteLocation }}',
'{{ description }}',
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
- name: interconnects
  props:
    - name: project
      value: "{{ project }}"
      description: Required parameter for the interconnects resource.
    - name: subzone
      value: "{{ subzone }}"
      description: |
        To be deprecated.
      valid_values: ['SUBZONE_A', 'SUBZONE_B']
    - name: interconnectType
      value: "{{ interconnectType }}"
      description: |
        Type of interconnect, which can take one of the following values:
        - PARTNER: A partner-managed interconnection shared between customers
        though a partner.
        - DEDICATED: A dedicated physical interconnection with the
        customer.
        Note that a value IT_PRIVATE has been deprecated in favor of DEDICATED.
      valid_values: ['DEDICATED', 'IT_PRIVATE', 'PARTNER']
    - name: adminEnabled
      value: {{ adminEnabled }}
      description: |
        Administrative status of the interconnect. When this is set to true, the
        Interconnect is functional and can carry traffic.
        When set to false, no packets can be carried over the interconnect and
        no BGP routes are exchanged over it. By default, the status is set to true.
    - name: requestedFeatures
      value:
        - "{{ requestedFeatures }}"
      description: |
        Optional. This parameter can be provided only with Interconnect INSERT. It
        isn't valid for Interconnect PATCH. List of features requested for this
        Interconnect connection, which can take one of the following values:
        - IF_MACSEC: If specified, then the connection is created on MACsec
        capable hardware ports. If not specified, non-MACsec capable ports will
        also be considered.
        - IF_CROSS_SITE_NETWORK: If specified, then the connection is created
        exclusively for Cross-Site Networking. The connection can not be used for
        Cross-Site Networking unless this feature is specified.
    - name: macsecEnabled
      value: {{ macsecEnabled }}
      description: |
        Enable or disable MACsec on this Interconnect connection. MACsec enablement
        fails if the MACsec object is not specified.
    - name: linkType
      value: "{{ linkType }}"
      description: |
        Type of link requested, which can take one of the following values:
        - LINK_TYPE_ETHERNET_10G_LR: A 10G Ethernet with LR optics
        - LINK_TYPE_ETHERNET_100G_LR: A 100G Ethernet with LR optics.
        - LINK_TYPE_ETHERNET_400G_LR4: A 400G Ethernet with LR4 optics.
        Note that this field indicates the speed of each of
        the links in the bundle, not the speed of the entire bundle.
      valid_values: ['LINK_TYPE_ETHERNET_100G_LR', 'LINK_TYPE_ETHERNET_10G_LR', 'LINK_TYPE_ETHERNET_400G_LR4']
    - name: requestedLinkCount
      value: {{ requestedLinkCount }}
      description: |
        Target number of physical links in the link bundle, as requested by the
        customer.
    - name: location
      value: "{{ location }}"
      description: |
        URL of the InterconnectLocation object that represents where this
        connection is to be provisioned.
    - name: labelFingerprint
      value: "{{ labelFingerprint }}"
      description: |
        A fingerprint for the labels being applied to this Interconnect, which
        is essentially a hash of the labels set used for optimistic locking. The
        fingerprint is initially generated by Compute Engine and changes after
        every request to modify or update labels. You must always provide an
        up-to-date fingerprint hash in order to update or change labels,
        otherwise the request will fail with error412 conditionNotMet.
        To see the latest fingerprint, make a get() request to
        retrieve an Interconnect.
    - name: params
      description: |
        Input only. [Input Only] Additional params passed with the request, but not persisted
        as part of resource payload.
      value:
        resourceManagerTags: "{{ resourceManagerTags }}"
    - name: labels
      value: "{{ labels }}"
      description: |
        Labels for this resource. These can only be added or modified by thesetLabels method. Each label key/value pair must comply withRFC1035.
        Label values may be empty.
    - name: aaiEnabled
      value: {{ aaiEnabled }}
      description: |
        Enable or disable the application awareness feature on this Cloud
        Interconnect.
    - name: nocContactEmail
      value: "{{ nocContactEmail }}"
      description: |
        Email address to contact the customer NOC for operations and maintenance
        notifications regarding this Interconnect. If specified, this will be used
        for notifications in addition to all other forms described, such as
        Cloud Monitoring logs alerting and Cloud Notifications. This field is
        required for users who sign up for Cloud Interconnect using
        workforce identity federation.
    - name: customerName
      value: "{{ customerName }}"
      description: |
        Customer name, to put in the Letter of Authorization as the party
        authorized to request a crossconnect.
    - name: macsec
      description: |
        Configuration that enables Media Access Control security (MACsec) on the
        Cloud Interconnect connection between Google and your on-premises router.
      value:
        failOpen: {{ failOpen }}
        preSharedKeys:
          - startTime: "{{ startTime }}"
            name: "{{ name }}"
    - name: availableFeatures
      value:
        - "{{ availableFeatures }}"
      description: |
        [Output only] List of features available for this Interconnect connection,
        which can take one of the following values:
        - IF_MACSEC: If present, then the Interconnect connection is
        provisioned on MACsec capable hardware ports. If not present, then the
        Interconnect connection is provisioned on non-MACsec capable ports. Any
        attempt to enable MACsec will fail.
        - IF_CROSS_SITE_NETWORK: If present, then the Interconnect connection is
        provisioned exclusively for Cross-Site Networking. Any attempt to configure
        VLAN attachments will fail. If not present, then the Interconnect
        connection is not provisioned for Cross-Site Networking. Any attempt to use
        it for Cross-Site Networking will fail.
    - name: applicationAwareInterconnect
      description: |
        Configuration information for application awareness on this Cloud
        Interconnect.
      value:
        strictPriorityPolicy: "{{ strictPriorityPolicy }}"
        profileDescription: "{{ profileDescription }}"
        shapeAveragePercentages:
          - percentage: {{ percentage }}
            trafficClass: "{{ trafficClass }}"
        bandwidthPercentagePolicy:
          bandwidthPercentages:
            - percentage: {{ percentage }}
              trafficClass: "{{ trafficClass }}"
    - name: name
      value: "{{ name }}"
      description: |
        Name of the resource. Provided by the client when the resource is created.
        The name must be 1-63 characters long, and comply withRFC1035.
        Specifically, the name must be 1-63 characters long and match the regular
        expression \`[a-z]([-a-z0-9]*[a-z0-9])?\` which means the first
        character must be a lowercase letter, and all following characters must be
        a dash, lowercase letter, or digit, except the last character, which cannot
        be a dash.
    - name: remoteLocation
      value: "{{ remoteLocation }}"
      description: |
        Indicates that this is a Cross-Cloud Interconnect. This field specifies the
        location outside of Google's network that the interconnect is connected to.
    - name: description
      value: "{{ description }}"
      description: |
        An optional description of this resource. Provide this property when you
        create the resource.
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

Updates the specified Interconnect with the data included in the request.<br />This method supportsPATCH<br />semantics and uses theJSON merge<br />patch format and processing rules.

```sql
UPDATE google.compute.interconnects
SET 
data__subzone = '{{ subzone }}',
data__interconnectType = '{{ interconnectType }}',
data__adminEnabled = {{ adminEnabled }},
data__requestedFeatures = '{{ requestedFeatures }}',
data__macsecEnabled = {{ macsecEnabled }},
data__linkType = '{{ linkType }}',
data__requestedLinkCount = {{ requestedLinkCount }},
data__location = '{{ location }}',
data__labelFingerprint = '{{ labelFingerprint }}',
data__params = '{{ params }}',
data__labels = '{{ labels }}',
data__aaiEnabled = {{ aaiEnabled }},
data__nocContactEmail = '{{ nocContactEmail }}',
data__customerName = '{{ customerName }}',
data__macsec = '{{ macsec }}',
data__availableFeatures = '{{ availableFeatures }}',
data__applicationAwareInterconnect = '{{ applicationAwareInterconnect }}',
data__name = '{{ name }}',
data__remoteLocation = '{{ remoteLocation }}',
data__description = '{{ description }}'
WHERE 
project = '{{ project }}' --required
AND interconnect = '{{ interconnect }}' --required
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

Deletes the specified Interconnect.

```sql
DELETE FROM google.compute.interconnects
WHERE project = '{{ project }}' --required
AND interconnect = '{{ interconnect }}' --required
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

Sets the labels on an Interconnect. To learn more about labels,<br />read the Labeling<br />Resources documentation.

```sql
EXEC google.compute.interconnects.set_labels 
@project='{{ project }}' --required, 
@resource='{{ resource }}' --required 
@@json=
'{
"labels": "{{ labels }}", 
"labelFingerprint": "{{ labelFingerprint }}"
}'
;
```
</TabItem>
</Tabs>
