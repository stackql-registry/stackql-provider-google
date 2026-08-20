--- 
title: instance_group_managers_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_group_managers_instances
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

Creates, updates, deletes, gets or lists an <code>instance_group_managers_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_group_managers_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.instance_group_managers_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_managed_instances"
    values={[
        { label: 'list_managed_instances', value: 'list_managed_instances' }
    ]}
>
<TabItem value="list_managed_instances">

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
    <td><CopyableCode code="managedInstances" /></td>
    <td><code>array</code></td>
    <td>A list of managed instances.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger thanmaxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.</td>
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
    <td><a href="#list_managed_instances"><CopyableCode code="list_managed_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceGroupManager"><code>instanceGroupManager</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Lists the instances in the managed instance group and instances that are<br />scheduled to be created. The list includes any current actions<br />that the group has scheduled for its instances. The orderBy<br />query parameter is not supported.   The `pageToken` query parameter is<br />supported only if the group's `listManagedInstancesResults` field is set<br />to `PAGINATED`.</td>
</tr>
<tr>
    <td><a href="#create_instances"><CopyableCode code="create_instances" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceGroupManager"><code>instanceGroupManager</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates instances with per-instance configurations in this regional managed<br />instance group. Instances are created using the current instance template.<br />The create instances operation is marked DONE if<br />the createInstances request is successful. The underlying<br />actions take additional time. You must separately verify the status of thecreating or actions with the listmanagedinstances<br />method.</td>
</tr>
<tr>
    <td><a href="#delete_instances"><CopyableCode code="delete_instances" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceGroupManager"><code>instanceGroupManager</code></a></td>
    <td><a href="#parameter-noGracefulShutdown"><code>noGracefulShutdown</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Flags the specified instances in the managed instance group to be<br />immediately deleted. The instances are also removed from any target<br />pools of which they were a member. This method reduces thetargetSize of the managed instance group by the number of<br />instances that you delete.<br />The deleteInstances operation is marked DONE if<br />the deleteInstances request is successful. The underlying<br />actions take additional time. You must separately verify the status of thedeleting action with thelistmanagedinstances<br />method.<br /><br />If the group is part of a backend<br />service that has enabled<br />connection draining, it can take up to 60 seconds after the connection<br />draining duration has elapsed before the VM instance is removed or deleted.<br /><br />You can specify a maximum of 1000 instances with this method per request.</td>
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
<tr id="parameter-instanceGroupManager">
    <td><CopyableCode code="instanceGroupManager" /></td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (uint32)</code></td>
    <td></td>
</tr>
<tr id="parameter-noGracefulShutdown">
    <td><CopyableCode code="noGracefulShutdown" /></td>
    <td><code>boolean</code></td>
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
    defaultValue="list_managed_instances"
    values={[
        { label: 'list_managed_instances', value: 'list_managed_instances' }
    ]}
>
<TabItem value="list_managed_instances">

Lists the instances in the managed instance group and instances that are<br />scheduled to be created. The list includes any current actions<br />that the group has scheduled for its instances. The orderBy<br />query parameter is not supported.   The `pageToken` query parameter is<br />supported only if the group's `listManagedInstancesResults` field is set<br />to `PAGINATED`.

```sql
SELECT
managedInstances,
nextPageToken
FROM google.compute.instance_group_managers_instances
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND instanceGroupManager = '{{ instanceGroupManager }}' -- required
AND filter = '{{ filter }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_instances"
    values={[
        { label: 'create_instances', value: 'create_instances' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_instances">

Creates instances with per-instance configurations in this regional managed<br />instance group. Instances are created using the current instance template.<br />The create instances operation is marked DONE if<br />the createInstances request is successful. The underlying<br />actions take additional time. You must separately verify the status of thecreating or actions with the listmanagedinstances<br />method.

```sql
INSERT INTO google.compute.instance_group_managers_instances (
data__instances,
project,
region,
instanceGroupManager,
requestId
)
SELECT 
'{{ instances }}',
'{{ project }}',
'{{ region }}',
'{{ instanceGroupManager }}',
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
- name: instance_group_managers_instances
  props:
    - name: project
      value: "{{ project }}"
      description: Required parameter for the instance_group_managers_instances resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the instance_group_managers_instances resource.
    - name: instanceGroupManager
      value: "{{ instanceGroupManager }}"
      description: Required parameter for the instance_group_managers_instances resource.
    - name: instances
      description: |
        [Required] List of specifications of per-instance configs.
      value:
        - fingerprint: "{{ fingerprint }}"
          name: "{{ name }}"
          preservedState:
            disks: "{{ disks }}"
            externalIPs: "{{ externalIPs }}"
            internalIPs: "{{ internalIPs }}"
            metadata: "{{ metadata }}"
          status: "{{ status }}"
    - name: requestId
      value: "{{ requestId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_instances"
    values={[
        { label: 'delete_instances', value: 'delete_instances' }
    ]}
>
<TabItem value="delete_instances">

Flags the specified instances in the managed instance group to be<br />immediately deleted. The instances are also removed from any target<br />pools of which they were a member. This method reduces thetargetSize of the managed instance group by the number of<br />instances that you delete.<br />The deleteInstances operation is marked DONE if<br />the deleteInstances request is successful. The underlying<br />actions take additional time. You must separately verify the status of thedeleting action with thelistmanagedinstances<br />method.<br /><br />If the group is part of a backend<br />service that has enabled<br />connection draining, it can take up to 60 seconds after the connection<br />draining duration has elapsed before the VM instance is removed or deleted.<br /><br />You can specify a maximum of 1000 instances with this method per request.

```sql
DELETE FROM google.compute.instance_group_managers_instances
WHERE project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND instanceGroupManager = '{{ instanceGroupManager }}' --required
AND noGracefulShutdown = '{{ noGracefulShutdown }}'
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
