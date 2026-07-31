--- 
title: node_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - node_templates
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

Creates, updates, deletes, gets or lists a <code>node_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="node_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.node_templates" /></td></tr>
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
    <td>The name of the resource, provided by the client when initially creating the resource. The resource name must be 1-63 characters long, and comply withRFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.</td>
</tr>
<tr>
    <td><CopyableCode code="accelerators" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="cpuOvercommitType" /></td>
    <td><code>string</code></td>
    <td>CPU overcommit. (CPU_OVERCOMMIT_TYPE_UNSPECIFIED, ENABLED, NONE)</td>
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
    <td><CopyableCode code="disks" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The type of the resource. Alwayscompute#nodeTemplate for node templates. (default: compute#nodeTemplate)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeAffinityLabels" /></td>
    <td><code>object</code></td>
    <td>Labels to use for node affinity, which will be used in instance scheduling.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeType" /></td>
    <td><code>string</code></td>
    <td>The node type to use for nodes group that are created from this template.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeTypeFlexibility" /></td>
    <td><code>object</code></td>
    <td>Do not use. Instead, use the node_type property. (id: NodeTemplateNodeTypeFlexibility)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The name of the region where the node template resides, such as us-central1.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="serverBinding" /></td>
    <td><code>object</code></td>
    <td>Sets the binding properties for the physical server. Valid values include:        - *[Default]* RESTART_NODE_ON_ANY_SERVER:    Restarts VMs on any available    physical server    - RESTART_NODE_ON_MINIMAL_SERVER: Restarts VMs on the same    physical server whenever possible    See Sole-tenant node options for more information. (id: ServerBinding)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The status of the node template. One of the following values:CREATING, READY, and DELETING. (CREATING, DELETING, INVALID, READY)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] An optional, human-readable explanation of the status.</td>
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
    <td>A list of NodeTemplate resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of resource.Always compute#nodeTemplateList for lists of node templates. (default: compute#nodeTemplateList)</td>
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
    <td>The name of the resource, provided by the client when initially creating the resource. The resource name must be 1-63 characters long, and comply withRFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.</td>
</tr>
<tr>
    <td><CopyableCode code="accelerators" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="cpuOvercommitType" /></td>
    <td><code>string</code></td>
    <td>CPU overcommit. (CPU_OVERCOMMIT_TYPE_UNSPECIFIED, ENABLED, NONE)</td>
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
    <td><CopyableCode code="disks" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The type of the resource. Alwayscompute#nodeTemplate for node templates. (default: compute#nodeTemplate)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeAffinityLabels" /></td>
    <td><code>object</code></td>
    <td>Labels to use for node affinity, which will be used in instance scheduling.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeType" /></td>
    <td><code>string</code></td>
    <td>The node type to use for nodes group that are created from this template.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeTypeFlexibility" /></td>
    <td><code>object</code></td>
    <td>Do not use. Instead, use the node_type property. (id: NodeTemplateNodeTypeFlexibility)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The name of the region where the node template resides, such as us-central1.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="serverBinding" /></td>
    <td><code>object</code></td>
    <td>Sets the binding properties for the physical server. Valid values include:        - *[Default]* RESTART_NODE_ON_ANY_SERVER:    Restarts VMs on any available    physical server    - RESTART_NODE_ON_MINIMAL_SERVER: Restarts VMs on the same    physical server whenever possible    See Sole-tenant node options for more information. (id: ServerBinding)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The status of the node template. One of the following values:CREATING, READY, and DELETING. (CREATING, DELETING, INVALID, READY)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] An optional, human-readable explanation of the status.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-nodeTemplate"><code>nodeTemplate</code></a></td>
    <td></td>
    <td>Returns the specified node template.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Retrieves a list of node templates available to the specified<br />project.</td>
</tr>
<tr>
    <td><a href="#aggregated_list"><CopyableCode code="aggregated_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a>, <a href="#parameter-includeAllScopes"><code>includeAllScopes</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-serviceProjectNumber"><code>serviceProjectNumber</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Retrieves an aggregated list of node templates.<br /><br />To prevent failure, Google recommends that you set the<br />`returnPartialSuccess` parameter to `true`.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a NodeTemplate resource in the specified project using the data<br />included in the request.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-nodeTemplate"><code>nodeTemplate</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified NodeTemplate resource.</td>
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
<tr id="parameter-nodeTemplate">
    <td><CopyableCode code="nodeTemplate" /></td>
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

Returns the specified node template.

```sql
SELECT
id,
name,
accelerators,
cpuOvercommitType,
creationTimestamp,
description,
disks,
kind,
nodeAffinityLabels,
nodeType,
nodeTypeFlexibility,
region,
selfLink,
serverBinding,
status,
statusMessage
FROM google.compute.node_templates
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND nodeTemplate = '{{ nodeTemplate }}' -- required
;
```
</TabItem>
<TabItem value="list">

Retrieves a list of node templates available to the specified<br />project.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.node_templates
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND orderBy = '{{ orderBy }}'
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
;
```
</TabItem>
<TabItem value="aggregated_list">

Retrieves an aggregated list of node templates.<br /><br />To prevent failure, Google recommends that you set the<br />`returnPartialSuccess` parameter to `true`.

```sql
SELECT
id,
name,
accelerators,
cpuOvercommitType,
creationTimestamp,
description,
disks,
kind,
nodeAffinityLabels,
nodeType,
nodeTypeFlexibility,
region,
selfLink,
serverBinding,
status,
statusMessage
FROM google.compute.node_templates
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

Creates a NodeTemplate resource in the specified project using the data<br />included in the request.

```sql
INSERT INTO google.compute.node_templates (
data__description,
data__disks,
data__nodeType,
data__serverBinding,
data__name,
data__nodeAffinityLabels,
data__cpuOvercommitType,
data__nodeTypeFlexibility,
data__accelerators,
project,
region,
requestId
)
SELECT 
'{{ description }}',
'{{ disks }}',
'{{ nodeType }}',
'{{ serverBinding }}',
'{{ name }}',
'{{ nodeAffinityLabels }}',
'{{ cpuOvercommitType }}',
'{{ nodeTypeFlexibility }}',
'{{ accelerators }}',
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
- name: node_templates
  props:
    - name: project
      value: "{{ project }}"
      description: Required parameter for the node_templates resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the node_templates resource.
    - name: description
      value: "{{ description }}"
      description: |
        An optional description of this resource. Provide this property when you
        create the resource.
    - name: disks
      value:
        - diskSizeGb: {{ diskSizeGb }}
          diskCount: {{ diskCount }}
          diskType: "{{ diskType }}"
    - name: nodeType
      value: "{{ nodeType }}"
      description: |
        The node type to use for nodes group that are created from this template.
    - name: serverBinding
      description: |
        Sets the binding properties for the physical server. Valid values include:
        - *[Default]* RESTART_NODE_ON_ANY_SERVER:
        Restarts VMs on any available
        physical server
        - RESTART_NODE_ON_MINIMAL_SERVER: Restarts VMs on the same
        physical server whenever possible
        See Sole-tenant
        node options for more information.
      value:
        type: "{{ type }}"
    - name: name
      value: "{{ name }}"
      description: |
        The name of the resource, provided by the client when initially creating
        the resource. The resource name must be 1-63 characters long, and comply
        withRFC1035.
        Specifically, the name must be 1-63 characters long and match the regular
        expression \`[a-z]([-a-z0-9]*[a-z0-9])?\` which means the first
        character must be a lowercase letter, and all following characters must be
        a dash, lowercase letter, or digit, except the last character, which
        cannot be a dash.
    - name: nodeAffinityLabels
      value: "{{ nodeAffinityLabels }}"
      description: |
        Labels to use for node affinity, which will be used in instance scheduling.
    - name: cpuOvercommitType
      value: "{{ cpuOvercommitType }}"
      description: |
        CPU overcommit.
      valid_values: ['CPU_OVERCOMMIT_TYPE_UNSPECIFIED', 'ENABLED', 'NONE']
    - name: nodeTypeFlexibility
      description: |
        Do not use. Instead, use the node_type property.
      value:
        cpus: "{{ cpus }}"
        memory: "{{ memory }}"
        localSsd: "{{ localSsd }}"
    - name: accelerators
      value:
        - acceleratorType: "{{ acceleratorType }}"
          acceleratorCount: {{ acceleratorCount }}
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

Deletes the specified NodeTemplate resource.

```sql
DELETE FROM google.compute.node_templates
WHERE project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND nodeTemplate = '{{ nodeTemplate }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
