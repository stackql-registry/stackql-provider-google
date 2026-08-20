--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - hypercomputecluster
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

Creates, updates, deletes, gets or lists a <code>clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.hypercomputecluster.clusters" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Identifier. [Relative resource name](https://google.aip.dev/122) of the cluster, in the format `projects/&#123;project&#125;/locations/&#123;location&#125;/clusters/&#123;cluster&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="computeResources" /></td>
    <td><code>object</code></td>
    <td>Optional. Compute resources available to the cluster. Keys specify the ID of the compute resource by which it can be referenced elsewhere, and must conform to [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case, alphanumeric, and at most 63 characters).</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time that the cluster was originally created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description for your cluster. You can use up to 2,048 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. [Labels](https://cloud.google.com/compute/docs/labeling-resources) applied to the cluster. Labels can be used to organize clusters and to filter them in queries.</td>
</tr>
<tr>
    <td><CopyableCode code="networkResources" /></td>
    <td><code>object</code></td>
    <td>Optional. Network resources available to the cluster. Must contain exactly one value. Keys specify the ID of the network resource by which it can be referenced elsewhere, and must conform to [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case, alphanumeric, and at most 63 characters).</td>
</tr>
<tr>
    <td><CopyableCode code="orchestrator" /></td>
    <td><code>object</code></td>
    <td>Optional. Orchestrator that is responsible for scheduling and running jobs on the cluster. (id: Orchestrator)</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether changes to the cluster are currently in flight. If this is `true`, then the current state might not match the cluster's intended state.</td>
</tr>
<tr>
    <td><CopyableCode code="storageResources" /></td>
    <td><code>object</code></td>
    <td>Optional. Storage resources available to the cluster. Keys specify the ID of the storage resource by which it can be referenced elsewhere, and must conform to [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case, alphanumeric, and at most 63 characters).</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time that the cluster was most recently updated.</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Identifier. [Relative resource name](https://google.aip.dev/122) of the cluster, in the format `projects/&#123;project&#125;/locations/&#123;location&#125;/clusters/&#123;cluster&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="computeResources" /></td>
    <td><code>object</code></td>
    <td>Optional. Compute resources available to the cluster. Keys specify the ID of the compute resource by which it can be referenced elsewhere, and must conform to [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case, alphanumeric, and at most 63 characters).</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time that the cluster was originally created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description for your cluster. You can use up to 2,048 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. [Labels](https://cloud.google.com/compute/docs/labeling-resources) applied to the cluster. Labels can be used to organize clusters and to filter them in queries.</td>
</tr>
<tr>
    <td><CopyableCode code="networkResources" /></td>
    <td><code>object</code></td>
    <td>Optional. Network resources available to the cluster. Must contain exactly one value. Keys specify the ID of the network resource by which it can be referenced elsewhere, and must conform to [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case, alphanumeric, and at most 63 characters).</td>
</tr>
<tr>
    <td><CopyableCode code="orchestrator" /></td>
    <td><code>object</code></td>
    <td>Optional. Orchestrator that is responsible for scheduling and running jobs on the cluster. (id: Orchestrator)</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether changes to the cluster are currently in flight. If this is `true`, then the current state might not match the cluster's intended state.</td>
</tr>
<tr>
    <td><CopyableCode code="storageResources" /></td>
    <td><code>object</code></td>
    <td>Optional. Storage resources available to the cluster. Keys specify the ID of the storage resource by which it can be referenced elsewhere, and must conform to [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case, alphanumeric, and at most 63 characters).</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time that the cluster was most recently updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Gets details of a single Cluster.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists Clusters in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new Cluster in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single Cluster.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single Cluster.</td>
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
<tr id="parameter-clustersId">
    <td><CopyableCode code="clustersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-clusterId">
    <td><CopyableCode code="clusterId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-pageSize">
    <td><CopyableCode code="pageSize" /></td>
    <td><code>integer (int32)</code></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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

Gets details of a single Cluster.

```sql
SELECT
name,
computeResources,
createTime,
description,
labels,
networkResources,
orchestrator,
reconciling,
storageResources,
updateTime
FROM google.hypercomputecluster.clusters
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND clustersId = '{{ clustersId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Clusters in a given project and location.

```sql
SELECT
name,
computeResources,
createTime,
description,
labels,
networkResources,
orchestrator,
reconciling,
storageResources,
updateTime
FROM google.hypercomputecluster.clusters
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a new Cluster in a given project and location.

```sql
INSERT INTO google.hypercomputecluster.clusters (
data__computeResources,
data__description,
data__labels,
data__name,
data__networkResources,
data__orchestrator,
data__storageResources,
projectsId,
locationsId,
clusterId,
requestId
)
SELECT 
'{{ computeResources }}',
'{{ description }}',
'{{ labels }}',
'{{ name }}',
'{{ networkResources }}',
'{{ orchestrator }}',
'{{ storageResources }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ clusterId }}',
'{{ requestId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: clusters
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the clusters resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the clusters resource.
    - name: computeResources
      value: "{{ computeResources }}"
      description: |
        Optional. Compute resources available to the cluster. Keys specify the ID of the compute resource by which it can be referenced elsewhere, and must conform to [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case, alphanumeric, and at most 63 characters).
    - name: description
      value: "{{ description }}"
      description: |
        Optional. A description for your cluster. You can use up to 2,048 characters.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. [Labels](https://cloud.google.com/compute/docs/labeling-resources) applied to the cluster. Labels can be used to organize clusters and to filter them in queries.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. [Relative resource name](https://google.aip.dev/122) of the cluster, in the format \`projects/{project}/locations/{location}/clusters/{cluster}\`.
    - name: networkResources
      value: "{{ networkResources }}"
      description: |
        Optional. Network resources available to the cluster. Must contain exactly one value. Keys specify the ID of the network resource by which it can be referenced elsewhere, and must conform to [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case, alphanumeric, and at most 63 characters).
    - name: orchestrator
      description: |
        Optional. Orchestrator that is responsible for scheduling and running jobs on the cluster.
      value:
        slurm:
          defaultPartition: "{{ defaultPartition }}"
          epilogBashScripts:
            - "{{ epilogBashScripts }}"
          loginNodes:
            bootDisk:
              sizeGb: "{{ sizeGb }}"
              type: "{{ type }}"
            count: "{{ count }}"
            enableOsLogin: {{ enableOsLogin }}
            enablePublicIps: {{ enablePublicIps }}
            instances:
              - instance: "{{ instance }}"
            labels: "{{ labels }}"
            machineType: "{{ machineType }}"
            startupScript: "{{ startupScript }}"
            storageConfigs:
              - id: "{{ id }}"
                localMount: "{{ localMount }}"
            zone: "{{ zone }}"
          nodeSets:
            - computeId: "{{ computeId }}"
              computeInstance:
                bootDisk:
                  sizeGb: "{{ sizeGb }}"
                  type: "{{ type }}"
                labels: "{{ labels }}"
                startupScript: "{{ startupScript }}"
              id: "{{ id }}"
              maxDynamicNodeCount: "{{ maxDynamicNodeCount }}"
              staticNodeCount: "{{ staticNodeCount }}"
              storageConfigs: "{{ storageConfigs }}"
          partitions:
            - id: "{{ id }}"
              nodeSetIds: "{{ nodeSetIds }}"
          prologBashScripts:
            - "{{ prologBashScripts }}"
    - name: storageResources
      value: "{{ storageResources }}"
      description: |
        Optional. Storage resources available to the cluster. Keys specify the ID of the storage resource by which it can be referenced elsewhere, and must conform to [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case, alphanumeric, and at most 63 characters).
    - name: clusterId
      value: "{{ clusterId }}"
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

Updates the parameters of a single Cluster.

```sql
UPDATE google.hypercomputecluster.clusters
SET 
data__computeResources = '{{ computeResources }}',
data__description = '{{ description }}',
data__labels = '{{ labels }}',
data__name = '{{ name }}',
data__networkResources = '{{ networkResources }}',
data__orchestrator = '{{ orchestrator }}',
data__storageResources = '{{ storageResources }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND clustersId = '{{ clustersId }}' --required
AND requestId = '{{ requestId}}'
AND updateMask = '{{ updateMask}}'
RETURNING
name,
done,
error,
metadata,
response;
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

Deletes a single Cluster.

```sql
DELETE FROM google.hypercomputecluster.clusters
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND clustersId = '{{ clustersId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
