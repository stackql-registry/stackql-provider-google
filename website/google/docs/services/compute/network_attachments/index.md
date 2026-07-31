--- 
title: network_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - network_attachments
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

Creates, updates, deletes, gets or lists a <code>network_attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_attachments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.network_attachments" /></td></tr>
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
    <td>Output only. [Output Only] The unique identifier for the resource type. The server generates this identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply withRFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: <code>&#91;a-z&#93;(?:&#91;-a-z0-9&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="connectionEndpoints" /></td>
    <td><code>array</code></td>
    <td>Output only. [Output Only] An array of connections for all the producers connected to this network attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="connectionPreference" /></td>
    <td><code>string</code></td>
    <td> (ACCEPT_AUTOMATIC, ACCEPT_MANUAL, INVALID)</td>
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
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string (byte)</code></td>
    <td>Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. An up-to-date fingerprint must be provided in order to patch.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of the resource. (default: compute#networkAttachment)</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The URL of the network which the Network Attachment belongs to. Practically it is inferred by fetching the network of the first subnetwork associated. Because it is required that all the subnetworks must be from the same network, it is assured that the Network Attachment belongs to the same network as all the subnetworks.</td>
</tr>
<tr>
    <td><CopyableCode code="producerAcceptLists" /></td>
    <td><code>array</code></td>
    <td>Projects or service class ids that are allowed to connect to this network attachment. The project can be specified using its id or number. Service class id can be specified as "serviceclasses/&#123;service_class_id&#125;".</td>
</tr>
<tr>
    <td><CopyableCode code="producerRejectLists" /></td>
    <td><code>array</code></td>
    <td>Projects or service class ids that are not allowed to connect to this network attachment. The project can be specified using its id or number. Service class id can be specified as "serviceclasses/&#123;service_class_id&#125;".</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] URL of the region where the network attachment resides. This field applies only to the region resource. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLinkWithId" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined URL for this resource's resource id.</td>
</tr>
<tr>
    <td><CopyableCode code="subnetworks" /></td>
    <td><code>array</code></td>
    <td>An array of URLs where each entry is the URL of a subnet provided by the service consumer to use for endpoints in the producers that connect to this network attachment.</td>
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
    <td>A list of NetworkAttachment resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td> (default: compute#networkAttachmentList)</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>[Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger thanmaxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for this resource.</td>
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
    <td>Output only. [Output Only] The unique identifier for the resource type. The server generates this identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply withRFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: <code>&#91;a-z&#93;(?:&#91;-a-z0-9&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="connectionEndpoints" /></td>
    <td><code>array</code></td>
    <td>Output only. [Output Only] An array of connections for all the producers connected to this network attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="connectionPreference" /></td>
    <td><code>string</code></td>
    <td> (ACCEPT_AUTOMATIC, ACCEPT_MANUAL, INVALID)</td>
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
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string (byte)</code></td>
    <td>Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. An up-to-date fingerprint must be provided in order to patch.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of the resource. (default: compute#networkAttachment)</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The URL of the network which the Network Attachment belongs to. Practically it is inferred by fetching the network of the first subnetwork associated. Because it is required that all the subnetworks must be from the same network, it is assured that the Network Attachment belongs to the same network as all the subnetworks.</td>
</tr>
<tr>
    <td><CopyableCode code="producerAcceptLists" /></td>
    <td><code>array</code></td>
    <td>Projects or service class ids that are allowed to connect to this network attachment. The project can be specified using its id or number. Service class id can be specified as "serviceclasses/&#123;service_class_id&#125;".</td>
</tr>
<tr>
    <td><CopyableCode code="producerRejectLists" /></td>
    <td><code>array</code></td>
    <td>Projects or service class ids that are not allowed to connect to this network attachment. The project can be specified using its id or number. Service class id can be specified as "serviceclasses/&#123;service_class_id&#125;".</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] URL of the region where the network attachment resides. This field applies only to the region resource. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLinkWithId" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined URL for this resource's resource id.</td>
</tr>
<tr>
    <td><CopyableCode code="subnetworks" /></td>
    <td><code>array</code></td>
    <td>An array of URLs where each entry is the URL of a subnet provided by the service consumer to use for endpoints in the producers that connect to this network attachment.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-networkAttachment"><code>networkAttachment</code></a></td>
    <td></td>
    <td>Returns the specified NetworkAttachment resource in the given scope.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Lists the NetworkAttachments for a project in the given scope.</td>
</tr>
<tr>
    <td><a href="#aggregated_list"><CopyableCode code="aggregated_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-includeAllScopes"><code>includeAllScopes</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-serviceProjectNumber"><code>serviceProjectNumber</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Retrieves the list of all NetworkAttachment resources,<br />regional and global, available to the specified project.<br /><br />To prevent failure, Google recommends that you set the<br />`returnPartialSuccess` parameter to `true`.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a NetworkAttachment in the specified project in the given scope<br />using the parameters that are included in the request.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-networkAttachment"><code>networkAttachment</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Patches the specified NetworkAttachment resource with the data included in<br />the request. This method supports PATCH<br />semantics and usesJSON merge<br />patch format and processing rules.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-networkAttachment"><code>networkAttachment</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified NetworkAttachment in the given scope</td>
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
<tr id="parameter-networkAttachment">
    <td><CopyableCode code="networkAttachment" /></td>
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

Returns the specified NetworkAttachment resource in the given scope.

```sql
SELECT
id,
name,
connectionEndpoints,
connectionPreference,
creationTimestamp,
description,
fingerprint,
kind,
network,
producerAcceptLists,
producerRejectLists,
region,
selfLink,
selfLinkWithId,
subnetworks
FROM google.compute.network_attachments
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND networkAttachment = '{{ networkAttachment }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the NetworkAttachments for a project in the given scope.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.network_attachments
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND filter = '{{ filter }}'
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
;
```
</TabItem>
<TabItem value="aggregated_list">

Retrieves the list of all NetworkAttachment resources,<br />regional and global, available to the specified project.<br /><br />To prevent failure, Google recommends that you set the<br />`returnPartialSuccess` parameter to `true`.

```sql
SELECT
id,
name,
connectionEndpoints,
connectionPreference,
creationTimestamp,
description,
fingerprint,
kind,
network,
producerAcceptLists,
producerRejectLists,
region,
selfLink,
selfLinkWithId,
subnetworks
FROM google.compute.network_attachments
WHERE project = '{{ project }}' -- required
AND includeAllScopes = '{{ includeAllScopes }}'
AND orderBy = '{{ orderBy }}'
AND filter = '{{ filter }}'
AND serviceProjectNumber = '{{ serviceProjectNumber }}'
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
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

Creates a NetworkAttachment in the specified project in the given scope<br />using the parameters that are included in the request.

```sql
INSERT INTO google.compute.network_attachments (
data__subnetworks,
data__fingerprint,
data__producerRejectLists,
data__description,
data__connectionPreference,
data__producerAcceptLists,
data__name,
project,
region,
requestId
)
SELECT 
'{{ subnetworks }}',
'{{ fingerprint }}',
'{{ producerRejectLists }}',
'{{ description }}',
'{{ connectionPreference }}',
'{{ producerAcceptLists }}',
'{{ name }}',
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
- name: network_attachments
  props:
    - name: project
      value: "{{ project }}"
      description: Required parameter for the network_attachments resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the network_attachments resource.
    - name: subnetworks
      value:
        - "{{ subnetworks }}"
      description: |
        An array of URLs where each entry is the URL of a subnet
        provided by the service consumer to use for
        endpoints in the producers that connect to this network attachment.
    - name: fingerprint
      value: "{{ fingerprint }}"
      description: |
        Fingerprint of this resource. A hash of the contents stored
        in this object. This field is used in optimistic locking. An up-to-date
        fingerprint must be provided in order to patch.
    - name: producerRejectLists
      value:
        - "{{ producerRejectLists }}"
      description: |
        Projects or service class ids that are not allowed to connect to this
        network attachment. The project can be specified using its id or number.
        Service class id can be specified as "serviceclasses/{service_class_id}".
    - name: description
      value: "{{ description }}"
      description: |
        An optional description of this resource. Provide this property when you
        create the resource.
    - name: connectionPreference
      value: "{{ connectionPreference }}"
      valid_values: ['ACCEPT_AUTOMATIC', 'ACCEPT_MANUAL', 'INVALID']
    - name: producerAcceptLists
      value:
        - "{{ producerAcceptLists }}"
      description: |
        Projects or service class ids that are allowed to connect to this network
        attachment. The project can be specified using its id or number. Service
        class id can be specified as "serviceclasses/{service_class_id}".
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

Patches the specified NetworkAttachment resource with the data included in<br />the request. This method supports PATCH<br />semantics and usesJSON merge<br />patch format and processing rules.

```sql
UPDATE google.compute.network_attachments
SET 
data__subnetworks = '{{ subnetworks }}',
data__fingerprint = '{{ fingerprint }}',
data__producerRejectLists = '{{ producerRejectLists }}',
data__description = '{{ description }}',
data__connectionPreference = '{{ connectionPreference }}',
data__producerAcceptLists = '{{ producerAcceptLists }}',
data__name = '{{ name }}'
WHERE 
project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND networkAttachment = '{{ networkAttachment }}' --required
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

Deletes the specified NetworkAttachment in the given scope

```sql
DELETE FROM google.compute.network_attachments
WHERE project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND networkAttachment = '{{ networkAttachment }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
