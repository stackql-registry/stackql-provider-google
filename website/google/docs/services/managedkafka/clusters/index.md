--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - managedkafka
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.managedkafka.clusters" /></td></tr>
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
    <td>Identifier. The name of the cluster. Structured like: projects/&#123;project_number&#125;/locations/&#123;location&#125;/clusters/&#123;cluster_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="brokerDetails" /></td>
    <td><code>array</code></td>
    <td>Output only. Only populated when FULL view is requested. Details of each broker in the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="capacityConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Capacity configuration for the Kafka cluster. (id: CapacityConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="gcpConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Configuration properties for a Kafka cluster deployed to Google Cloud Platform. (id: GcpConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="kafkaVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. Only populated when FULL view is requested. The Kafka version of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="rebalanceConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Rebalance configuration for the Kafka cluster. (id: RebalanceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the cluster. (STATE_UNSPECIFIED, CREATING, ACTIVE, DELETING, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="tlsConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. TLS configuration for the Kafka cluster. (id: TlsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="updateOptions" /></td>
    <td><code>object</code></td>
    <td>Optional. UpdateOptions represents options that control how updates to the cluster are applied. (id: UpdateOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the cluster was last updated.</td>
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
    <td>Identifier. The name of the cluster. Structured like: projects/&#123;project_number&#125;/locations/&#123;location&#125;/clusters/&#123;cluster_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="brokerDetails" /></td>
    <td><code>array</code></td>
    <td>Output only. Only populated when FULL view is requested. Details of each broker in the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="capacityConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Capacity configuration for the Kafka cluster. (id: CapacityConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="gcpConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Configuration properties for a Kafka cluster deployed to Google Cloud Platform. (id: GcpConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="kafkaVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. Only populated when FULL view is requested. The Kafka version of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="rebalanceConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Rebalance configuration for the Kafka cluster. (id: RebalanceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the cluster. (STATE_UNSPECIFIED, CREATING, ACTIVE, DELETING, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="tlsConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. TLS configuration for the Kafka cluster. (id: TlsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="updateOptions" /></td>
    <td><code>object</code></td>
    <td>Optional. UpdateOptions represents options that control how updates to the cluster are applied. (id: UpdateOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the cluster was last updated.</td>
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
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Returns the properties of a single cluster.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the clusters in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new cluster in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the properties of a single cluster.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single cluster.</td>
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
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
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
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Returns the properties of a single cluster.

```sql
SELECT
name,
brokerDetails,
capacityConfig,
createTime,
gcpConfig,
kafkaVersion,
labels,
rebalanceConfig,
satisfiesPzi,
satisfiesPzs,
state,
tlsConfig,
updateOptions,
updateTime
FROM google.managedkafka.clusters
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND clustersId = '{{ clustersId }}' -- required
AND view = '{{ view }}'
;
```
</TabItem>
<TabItem value="list">

Lists the clusters in a given project and location.

```sql
SELECT
name,
brokerDetails,
capacityConfig,
createTime,
gcpConfig,
kafkaVersion,
labels,
rebalanceConfig,
satisfiesPzi,
satisfiesPzs,
state,
tlsConfig,
updateOptions,
updateTime
FROM google.managedkafka.clusters
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

Creates a new cluster in a given project and location.

```sql
INSERT INTO google.managedkafka.clusters (
data__capacityConfig,
data__gcpConfig,
data__labels,
data__name,
data__rebalanceConfig,
data__tlsConfig,
data__updateOptions,
projectsId,
locationsId,
clusterId,
requestId
)
SELECT 
'{{ capacityConfig }}',
'{{ gcpConfig }}',
'{{ labels }}',
'{{ name }}',
'{{ rebalanceConfig }}',
'{{ tlsConfig }}',
'{{ updateOptions }}',
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
    - name: capacityConfig
      description: |
        Required. Capacity configuration for the Kafka cluster.
      value:
        memoryBytes: "{{ memoryBytes }}"
        vcpuCount: "{{ vcpuCount }}"
    - name: gcpConfig
      description: |
        Required. Configuration properties for a Kafka cluster deployed to Google Cloud Platform.
      value:
        accessConfig:
          networkConfigs:
            - subnet: "{{ subnet }}"
        kmsKey: "{{ kmsKey }}"
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Labels as key value pairs.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The name of the cluster. Structured like: projects/{project_number}/locations/{location}/clusters/{cluster_id}
    - name: rebalanceConfig
      description: |
        Optional. Rebalance configuration for the Kafka cluster.
      value:
        mode: "{{ mode }}"
    - name: tlsConfig
      description: |
        Optional. TLS configuration for the Kafka cluster.
      value:
        sslPrincipalMappingRules: "{{ sslPrincipalMappingRules }}"
        trustConfig:
          casConfigs:
            - caPool: "{{ caPool }}"
    - name: updateOptions
      description: |
        Optional. UpdateOptions represents options that control how updates to the cluster are applied.
      value:
        allowBrokerDownscaleOnClusterUpscale: {{ allowBrokerDownscaleOnClusterUpscale }}
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

Updates the properties of a single cluster.

```sql
UPDATE google.managedkafka.clusters
SET 
data__capacityConfig = '{{ capacityConfig }}',
data__gcpConfig = '{{ gcpConfig }}',
data__labels = '{{ labels }}',
data__name = '{{ name }}',
data__rebalanceConfig = '{{ rebalanceConfig }}',
data__tlsConfig = '{{ tlsConfig }}',
data__updateOptions = '{{ updateOptions }}'
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

Deletes a single cluster.

```sql
DELETE FROM google.managedkafka.clusters
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND clustersId = '{{ clustersId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
