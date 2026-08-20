--- 
title: goldengate_deployment_environments
hide_title: false
hide_table_of_contents: false
keywords:
  - goldengate_deployment_environments
  - oracledatabase
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

Creates, updates, deletes, gets or lists a <code>goldengate_deployment_environments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="goldengate_deployment_environments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.oracledatabase.goldengate_deployment_environments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
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
    <td>Identifier. The name of the Goldengate Deployment Environment resource with the format: projects/&#123;project&#125;/locations/&#123;location&#125;/goldengateDeploymentEnvironments/&#123;goldengate_deployment_environment&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="autoScalingEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether auto scaling is enabled by default for the Goldengate Deployment Environment resource.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Output only. The category of the Goldengate Deployment Environment resource. (DEPLOYMENT_CATEGORY_UNSPECIFIED, DATA_REPLICATION_CATEGORY, DATA_TRANSFORMS_CATEGORY)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultCpuCoreCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The default CPU core count of the Goldengate Deployment Environment resource.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the Goldengate Deployment Environment resource.</td>
</tr>
<tr>
    <td><CopyableCode code="environmentType" /></td>
    <td><code>string</code></td>
    <td>Output only. The environment type of the Goldengate Deployment Environment resource. (DEPLOYMENT_ENVIRONMENT_TYPE_UNSPECIFIED, PRODUCTION, DEVELOPMENT_OR_TESTING)</td>
</tr>
<tr>
    <td><CopyableCode code="maxCpuCoreCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The max CPU core count of the Goldengate Deployment Environment resource.</td>
</tr>
<tr>
    <td><CopyableCode code="memoryGbPerCpuCore" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The memory per CPU core in GBs of the Goldengate Deployment Environment resource.</td>
</tr>
<tr>
    <td><CopyableCode code="minCpuCoreCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The min CPU core count of the Goldengate Deployment Environment resource.</td>
</tr>
<tr>
    <td><CopyableCode code="networkBandwidthGbpsPerCpuCore" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The network bandwidth per CPU core in Gbps of the Goldengate Deployment Environment resource.</td>
</tr>
<tr>
    <td><CopyableCode code="storageUsageLimitGbPerCpuCore" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The storage usage limit per CPU core in GBs of the Goldengate Deployment Environment resource.</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists GoldengateDeploymentEnvironments in a given project and location.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Lists GoldengateDeploymentEnvironments in a given project and location.

```sql
SELECT
name,
autoScalingEnabled,
category,
defaultCpuCoreCount,
displayName,
environmentType,
maxCpuCoreCount,
memoryGbPerCpuCore,
minCpuCoreCount,
networkBandwidthGbpsPerCpuCore,
storageUsageLimitGbPerCpuCore
FROM google.oracledatabase.goldengate_deployment_environments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>
