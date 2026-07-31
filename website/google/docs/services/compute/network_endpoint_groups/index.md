--- 
title: network_endpoint_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - network_endpoint_groups
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

Creates, updates, deletes, gets or lists a <code>network_endpoint_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_endpoint_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.network_endpoint_groups" /></td></tr>
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
    <td>Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply withRFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Metadata defined as annotations on the network endpoint group.</td>
</tr>
<tr>
    <td><CopyableCode code="appEngine" /></td>
    <td><code>object</code></td>
    <td>Optional. Only valid when networkEndpointType isSERVERLESS. Only one of cloudRun,appEngine or cloudFunction may be set. (id: NetworkEndpointGroupAppEngine)</td>
</tr>
<tr>
    <td><CopyableCode code="cloudFunction" /></td>
    <td><code>object</code></td>
    <td>Optional. Only valid when networkEndpointType isSERVERLESS. Only one of cloudRun,appEngine or cloudFunction may be set. (id: NetworkEndpointGroupCloudFunction)</td>
</tr>
<tr>
    <td><CopyableCode code="cloudRun" /></td>
    <td><code>object</code></td>
    <td>Optional. Only valid when networkEndpointType isSERVERLESS. Only one of cloudRun,appEngine or cloudFunction may be set. (id: NetworkEndpointGroupCloudRun)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Creation timestamp inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultPort" /></td>
    <td><code>integer (int32)</code></td>
    <td>The default port used if the port number is not specified in the network endpoint.  Optional. If the network endpoint type is either GCE_VM_IP,SERVERLESS or PRIVATE_SERVICE_CONNECT, this field must not be specified.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of the resource. Alwayscompute#networkEndpointGroup for network endpoint group. (default: compute#networkEndpointGroup)</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>The URL of the network to which all network endpoints in the NEG belong. For networkEndpointType GCE_VM_IP_PORT,GCE_VM_IP_PORTMAP or NON_GCP_PRIVATE_IP_PORT, if this field is not specified, a default network will be used. This field cannot be set for NEGs with networkEndpointType set toSERVERLESS or PRIVATE_SERVICE_CONNECT and for global NEGs. For all other network endpoint types, this field is required.</td>
</tr>
<tr>
    <td><CopyableCode code="networkEndpointType" /></td>
    <td><code>string</code></td>
    <td>Type of network endpoints in this network endpoint group. Can be one ofGCE_VM_IP, GCE_VM_IP_PORT,NON_GCP_PRIVATE_IP_PORT, INTERNET_FQDN_PORT,INTERNET_IP_PORT, SERVERLESS,PRIVATE_SERVICE_CONNECT, GCE_VM_IP_PORTMAP. (GCE_VM_IP, GCE_VM_IP_PORT, GCE_VM_IP_PORTMAP, INTERNET_FQDN_PORT, INTERNET_IP_PORT, NON_GCP_PRIVATE_IP_PORT, PRIVATE_SERVICE_CONNECT, SERVERLESS)</td>
</tr>
<tr>
    <td><CopyableCode code="pscData" /></td>
    <td><code>object</code></td>
    <td>Optional. Only valid when networkEndpointType isPRIVATE_SERVICE_CONNECT. (id: NetworkEndpointGroupPscData)</td>
</tr>
<tr>
    <td><CopyableCode code="pscTargetService" /></td>
    <td><code>string</code></td>
    <td>The target service url used to set up private service connection to a Google API or a PSC Producer Service Attachment. An example value is: asia-northeast3-cloudkms.googleapis.com.  Optional. Only valid when networkEndpointType isPRIVATE_SERVICE_CONNECT.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The URL of theregion where the network endpoint group is located.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. [Output only] Number of network endpoints in the network endpoint group.</td>
</tr>
<tr>
    <td><CopyableCode code="subnetwork" /></td>
    <td><code>string</code></td>
    <td>Optional URL of the subnetwork to which all network endpoints in the NEG belong.</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The URL of thezone where the network endpoint group is located.</td>
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
    <td>A list of NetworkEndpointGroup resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The resource type, which is alwayscompute#networkEndpointGroupList for network endpoint group lists. (default: compute#networkEndpointGroupList)</td>
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
    <td>Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply withRFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Metadata defined as annotations on the network endpoint group.</td>
</tr>
<tr>
    <td><CopyableCode code="appEngine" /></td>
    <td><code>object</code></td>
    <td>Optional. Only valid when networkEndpointType isSERVERLESS. Only one of cloudRun,appEngine or cloudFunction may be set. (id: NetworkEndpointGroupAppEngine)</td>
</tr>
<tr>
    <td><CopyableCode code="cloudFunction" /></td>
    <td><code>object</code></td>
    <td>Optional. Only valid when networkEndpointType isSERVERLESS. Only one of cloudRun,appEngine or cloudFunction may be set. (id: NetworkEndpointGroupCloudFunction)</td>
</tr>
<tr>
    <td><CopyableCode code="cloudRun" /></td>
    <td><code>object</code></td>
    <td>Optional. Only valid when networkEndpointType isSERVERLESS. Only one of cloudRun,appEngine or cloudFunction may be set. (id: NetworkEndpointGroupCloudRun)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Creation timestamp inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultPort" /></td>
    <td><code>integer (int32)</code></td>
    <td>The default port used if the port number is not specified in the network endpoint.  Optional. If the network endpoint type is either GCE_VM_IP,SERVERLESS or PRIVATE_SERVICE_CONNECT, this field must not be specified.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of the resource. Alwayscompute#networkEndpointGroup for network endpoint group. (default: compute#networkEndpointGroup)</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>The URL of the network to which all network endpoints in the NEG belong. For networkEndpointType GCE_VM_IP_PORT,GCE_VM_IP_PORTMAP or NON_GCP_PRIVATE_IP_PORT, if this field is not specified, a default network will be used. This field cannot be set for NEGs with networkEndpointType set toSERVERLESS or PRIVATE_SERVICE_CONNECT and for global NEGs. For all other network endpoint types, this field is required.</td>
</tr>
<tr>
    <td><CopyableCode code="networkEndpointType" /></td>
    <td><code>string</code></td>
    <td>Type of network endpoints in this network endpoint group. Can be one ofGCE_VM_IP, GCE_VM_IP_PORT,NON_GCP_PRIVATE_IP_PORT, INTERNET_FQDN_PORT,INTERNET_IP_PORT, SERVERLESS,PRIVATE_SERVICE_CONNECT, GCE_VM_IP_PORTMAP. (GCE_VM_IP, GCE_VM_IP_PORT, GCE_VM_IP_PORTMAP, INTERNET_FQDN_PORT, INTERNET_IP_PORT, NON_GCP_PRIVATE_IP_PORT, PRIVATE_SERVICE_CONNECT, SERVERLESS)</td>
</tr>
<tr>
    <td><CopyableCode code="pscData" /></td>
    <td><code>object</code></td>
    <td>Optional. Only valid when networkEndpointType isPRIVATE_SERVICE_CONNECT. (id: NetworkEndpointGroupPscData)</td>
</tr>
<tr>
    <td><CopyableCode code="pscTargetService" /></td>
    <td><code>string</code></td>
    <td>The target service url used to set up private service connection to a Google API or a PSC Producer Service Attachment. An example value is: asia-northeast3-cloudkms.googleapis.com.  Optional. Only valid when networkEndpointType isPRIVATE_SERVICE_CONNECT.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The URL of theregion where the network endpoint group is located.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. [Output only] Number of network endpoints in the network endpoint group.</td>
</tr>
<tr>
    <td><CopyableCode code="subnetwork" /></td>
    <td><code>string</code></td>
    <td>Optional URL of the subnetwork to which all network endpoints in the NEG belong.</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The URL of thezone where the network endpoint group is located.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-networkEndpointGroup"><code>networkEndpointGroup</code></a></td>
    <td></td>
    <td>Returns the specified network endpoint group.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td><a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Retrieves the list of network endpoint groups that are located in the<br />specified project and zone.</td>
</tr>
<tr>
    <td><a href="#aggregated_list"><CopyableCode code="aggregated_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-serviceProjectNumber"><code>serviceProjectNumber</code></a>, <a href="#parameter-includeAllScopes"><code>includeAllScopes</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Retrieves the list of network endpoint groups and sorts them by zone.<br /><br />To prevent failure, Google recommends that you set the<br />`returnPartialSuccess` parameter to `true`.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a network endpoint group in the specified project using the<br />parameters that are included in the request.<br /><br />Note: Use the following APIs to manage network endpoint groups:<br />   <br />   - <br />   To manage NEGs with zonal scope (such as zonal NEGs, hybrid connectivity<br />   NEGs): zonal<br />   API<br />   - <br />   To manage NEGs with regional scope (such as regional internet NEGs,<br />   serverless NEGs, Private Service Connect NEGs): regional<br />   API<br />   - <br />   To manage NEGs with global scope (such as global internet NEGs):global<br />   API</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-networkEndpointGroup"><code>networkEndpointGroup</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified network endpoint group. The network endpoints in the<br />NEG and the VM instances they belong to are not terminated when the NEG is<br />deleted. Note that the NEG cannot be deleted if there are backend services<br />referencing it.</td>
</tr>
<tr>
    <td><a href="#attach_network_endpoints"><CopyableCode code="attach_network_endpoints" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-networkEndpointGroup"><code>networkEndpointGroup</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Attach a list of network endpoints to the specified network endpoint group.</td>
</tr>
<tr>
    <td><a href="#detach_network_endpoints"><CopyableCode code="detach_network_endpoints" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-networkEndpointGroup"><code>networkEndpointGroup</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Detach a list of network endpoints from the specified network endpoint<br />group.</td>
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
<tr id="parameter-networkEndpointGroup">
    <td><CopyableCode code="networkEndpointGroup" /></td>
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

Returns the specified network endpoint group.

```sql
SELECT
id,
name,
annotations,
appEngine,
cloudFunction,
cloudRun,
creationTimestamp,
defaultPort,
description,
kind,
network,
networkEndpointType,
pscData,
pscTargetService,
region,
selfLink,
size,
subnetwork,
zone
FROM google.compute.network_endpoint_groups
WHERE project = '{{ project }}' -- required
AND zone = '{{ zone }}' -- required
AND networkEndpointGroup = '{{ networkEndpointGroup }}' -- required
;
```
</TabItem>
<TabItem value="list">

Retrieves the list of network endpoint groups that are located in the<br />specified project and zone.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.network_endpoint_groups
WHERE project = '{{ project }}' -- required
AND zone = '{{ zone }}' -- required
AND orderBy = '{{ orderBy }}'
AND filter = '{{ filter }}'
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
;
```
</TabItem>
<TabItem value="aggregated_list">

Retrieves the list of network endpoint groups and sorts them by zone.<br /><br />To prevent failure, Google recommends that you set the<br />`returnPartialSuccess` parameter to `true`.

```sql
SELECT
id,
name,
annotations,
appEngine,
cloudFunction,
cloudRun,
creationTimestamp,
defaultPort,
description,
kind,
network,
networkEndpointType,
pscData,
pscTargetService,
region,
selfLink,
size,
subnetwork,
zone
FROM google.compute.network_endpoint_groups
WHERE project = '{{ project }}' -- required
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND serviceProjectNumber = '{{ serviceProjectNumber }}'
AND includeAllScopes = '{{ includeAllScopes }}'
AND orderBy = '{{ orderBy }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
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

Creates a network endpoint group in the specified project using the<br />parameters that are included in the request.<br /><br />Note: Use the following APIs to manage network endpoint groups:<br />   <br />   - <br />   To manage NEGs with zonal scope (such as zonal NEGs, hybrid connectivity<br />   NEGs): zonal<br />   API<br />   - <br />   To manage NEGs with regional scope (such as regional internet NEGs,<br />   serverless NEGs, Private Service Connect NEGs): regional<br />   API<br />   - <br />   To manage NEGs with global scope (such as global internet NEGs):global<br />   API

```sql
INSERT INTO google.compute.network_endpoint_groups (
data__cloudFunction,
data__description,
data__name,
data__defaultPort,
data__network,
data__annotations,
data__appEngine,
data__pscData,
data__networkEndpointType,
data__subnetwork,
data__cloudRun,
data__pscTargetService,
project,
zone,
requestId
)
SELECT 
'{{ cloudFunction }}',
'{{ description }}',
'{{ name }}',
{{ defaultPort }},
'{{ network }}',
'{{ annotations }}',
'{{ appEngine }}',
'{{ pscData }}',
'{{ networkEndpointType }}',
'{{ subnetwork }}',
'{{ cloudRun }}',
'{{ pscTargetService }}',
'{{ project }}',
'{{ zone }}',
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
- name: network_endpoint_groups
  props:
    - name: project
      value: "{{ project }}"
      description: Required parameter for the network_endpoint_groups resource.
    - name: zone
      value: "{{ zone }}"
      description: Required parameter for the network_endpoint_groups resource.
    - name: cloudFunction
      description: |
        Optional. Only valid when networkEndpointType isSERVERLESS. Only one of cloudRun,appEngine or cloudFunction may be set.
      value:
        function: "{{ function }}"
        urlMask: "{{ urlMask }}"
    - name: description
      value: "{{ description }}"
      description: |
        An optional description of this resource. Provide this property when you
        create the resource.
    - name: name
      value: "{{ name }}"
      description: |
        Name of the resource; provided by the client when the resource is created.
        The name must be 1-63 characters long, and comply withRFC1035.
        Specifically, the name must be 1-63 characters long and match the regular
        expression \`[a-z]([-a-z0-9]*[a-z0-9])?\` which means the first
        character must be a lowercase letter, and all following characters must be
        a dash, lowercase letter, or digit, except the last character, which cannot
        be a dash.
    - name: defaultPort
      value: {{ defaultPort }}
      description: |
        The default port used if the port number is not specified in the network
        endpoint.
        Optional. If the network endpoint type is either GCE_VM_IP,SERVERLESS or PRIVATE_SERVICE_CONNECT, this
        field must not be specified.
    - name: network
      value: "{{ network }}"
      description: |
        The URL of the network to which all network endpoints in the NEG belong.
        For networkEndpointType GCE_VM_IP_PORT,GCE_VM_IP_PORTMAP or NON_GCP_PRIVATE_IP_PORT,
        if this field is not specified, a default network will be used.
        This field cannot be set for NEGs with networkEndpointType set toSERVERLESS or PRIVATE_SERVICE_CONNECT and for
        global NEGs.
        For all other network endpoint types, this field is required.
    - name: annotations
      value: "{{ annotations }}"
      description: |
        Optional. Metadata defined as annotations on the network endpoint group.
    - name: appEngine
      description: |
        Optional. Only valid when networkEndpointType isSERVERLESS. Only one of cloudRun,appEngine or cloudFunction may be set.
      value:
        urlMask: "{{ urlMask }}"
        version: "{{ version }}"
        service: "{{ service }}"
    - name: pscData
      description: |
        Optional. Only valid when networkEndpointType isPRIVATE_SERVICE_CONNECT.
      value:
        consumerPscAddress: "{{ consumerPscAddress }}"
        producerPort: {{ producerPort }}
        pscConnectionId: "{{ pscConnectionId }}"
        pscConnectionStatus: "{{ pscConnectionStatus }}"
    - name: networkEndpointType
      value: "{{ networkEndpointType }}"
      description: |
        Type of network endpoints in this network endpoint group. Can be one ofGCE_VM_IP, GCE_VM_IP_PORT,NON_GCP_PRIVATE_IP_PORT, INTERNET_FQDN_PORT,INTERNET_IP_PORT, SERVERLESS,PRIVATE_SERVICE_CONNECT, GCE_VM_IP_PORTMAP.
      valid_values: ['GCE_VM_IP', 'GCE_VM_IP_PORT', 'GCE_VM_IP_PORTMAP', 'INTERNET_FQDN_PORT', 'INTERNET_IP_PORT', 'NON_GCP_PRIVATE_IP_PORT', 'PRIVATE_SERVICE_CONNECT', 'SERVERLESS']
    - name: subnetwork
      value: "{{ subnetwork }}"
      description: |
        Optional URL of the subnetwork to which all network endpoints in the NEG
        belong.
    - name: cloudRun
      description: |
        Optional. Only valid when networkEndpointType isSERVERLESS. Only one of cloudRun,appEngine or cloudFunction may be set.
      value:
        service: "{{ service }}"
        tag: "{{ tag }}"
        urlMask: "{{ urlMask }}"
    - name: pscTargetService
      value: "{{ pscTargetService }}"
      description: |
        The target service url used to set up private service connection to
        a Google API or a PSC Producer Service Attachment.
        An example value is: asia-northeast3-cloudkms.googleapis.com.
        Optional. Only valid when networkEndpointType isPRIVATE_SERVICE_CONNECT.
    - name: requestId
      value: "{{ requestId }}"
`}</CodeBlock>

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

Deletes the specified network endpoint group. The network endpoints in the<br />NEG and the VM instances they belong to are not terminated when the NEG is<br />deleted. Note that the NEG cannot be deleted if there are backend services<br />referencing it.

```sql
DELETE FROM google.compute.network_endpoint_groups
WHERE project = '{{ project }}' --required
AND zone = '{{ zone }}' --required
AND networkEndpointGroup = '{{ networkEndpointGroup }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="attach_network_endpoints"
    values={[
        { label: 'attach_network_endpoints', value: 'attach_network_endpoints' },
        { label: 'detach_network_endpoints', value: 'detach_network_endpoints' }
    ]}
>
<TabItem value="attach_network_endpoints">

Attach a list of network endpoints to the specified network endpoint group.

```sql
EXEC google.compute.network_endpoint_groups.attach_network_endpoints 
@project='{{ project }}' --required, 
@zone='{{ zone }}' --required, 
@networkEndpointGroup='{{ networkEndpointGroup }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"networkEndpoints": "{{ networkEndpoints }}"
}'
;
```
</TabItem>
<TabItem value="detach_network_endpoints">

Detach a list of network endpoints from the specified network endpoint<br />group.

```sql
EXEC google.compute.network_endpoint_groups.detach_network_endpoints 
@project='{{ project }}' --required, 
@zone='{{ zone }}' --required, 
@networkEndpointGroup='{{ networkEndpointGroup }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"networkEndpoints": "{{ networkEndpoints }}"
}'
;
```
</TabItem>
</Tabs>
