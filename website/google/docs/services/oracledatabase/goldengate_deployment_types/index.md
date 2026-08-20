--- 
title: goldengate_deployment_types
hide_title: false
hide_table_of_contents: false
keywords:
  - goldengate_deployment_types
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

Creates, updates, deletes, gets or lists a <code>goldengate_deployment_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="goldengate_deployment_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.oracledatabase.goldengate_deployment_types" /></td></tr>
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
    <td>Identifier. The name of the Goldengate Deployment Type resource with the format: projects/&#123;project&#125;/locations/&#123;region&#125;/goldengateDeploymentTypes/&#123;goldengate_deployment_type&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Output only. The category of the Goldengate Deployment Type resource. (DEPLOYMENT_CATEGORY_UNSPECIFIED, DATA_REPLICATION_CATEGORY, DATA_TRANSFORMS_CATEGORY)</td>
</tr>
<tr>
    <td><CopyableCode code="connectionTypes" /></td>
    <td><code>array</code></td>
    <td>Output only. The connection types of the Goldengate Deployment Type resource.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultUsername" /></td>
    <td><code>string</code></td>
    <td>Output only. The default username of the Goldengate Deployment Type resource.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentType" /></td>
    <td><code>string</code></td>
    <td>Output only. The deployment type of the Goldengate Deployment Type resource. (DEPLOYMENT_TYPE_UNSPECIFIED, OGG, DATABASE_ORACLE, BIGDATA, DATABASE_MICROSOFT_SQLSERVER, DATABASE_MYSQL, DATABASE_POSTGRESQL, DATABASE_DB2ZOS, DATABASE_DB2I, GGSA, DATA_TRANSFORMS)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. The display name of the Goldengate Deployment Type resource.</td>
</tr>
<tr>
    <td><CopyableCode code="oggVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The Ogg version of the Goldengate Deployment Type resource.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceTechnologies" /></td>
    <td><code>array</code></td>
    <td>Output only. The source technologies of the Goldengate Deployment Type resource.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedCapabilities" /></td>
    <td><code>array</code></td>
    <td>Output only. The supported capabilities of the Goldengate Deployment Type resource.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedTechnologiesUrl" /></td>
    <td><code>string</code></td>
    <td>Output only. The supported technologies URL of the Goldengate Deployment Type resource.</td>
</tr>
<tr>
    <td><CopyableCode code="targetTechnologies" /></td>
    <td><code>array</code></td>
    <td>Output only. The target technologies of the Goldengate Deployment Type resource.</td>
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
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists GoldenGateDeploymentTypes in a given project and location.</td>
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

Lists GoldenGateDeploymentTypes in a given project and location.

```sql
SELECT
name,
category,
connectionTypes,
defaultUsername,
deploymentType,
displayName,
oggVersion,
sourceTechnologies,
supportedCapabilities,
supportedTechnologiesUrl,
targetTechnologies
FROM google.oracledatabase.goldengate_deployment_types
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
