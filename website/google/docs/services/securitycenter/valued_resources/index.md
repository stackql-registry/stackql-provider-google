--- 
title: valued_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - valued_resources
  - securitycenter
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

Creates, updates, deletes, gets or lists a <code>valued_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="valued_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securitycenter.valued_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_simulations_attack_exposure_results_valued_resources_list"
    values={[
        { label: 'organizations_simulations_attack_exposure_results_valued_resources_list', value: 'organizations_simulations_attack_exposure_results_valued_resources_list' },
        { label: 'organizations_simulations_valued_resources_get', value: 'organizations_simulations_valued_resources_get' },
        { label: 'organizations_simulations_valued_resources_list', value: 'organizations_simulations_valued_resources_list' },
        { label: 'organizations_valued_resources_list', value: 'organizations_valued_resources_list' }
    ]}
>
<TabItem value="organizations_simulations_attack_exposure_results_valued_resources_list">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="exposedScore" /></td>
    <td><code>number (double)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="resourceValue" /></td>
    <td><code>string</code></td>
    <td> (RESOURCE_VALUE_UNSPECIFIED, RESOURCE_VALUE_LOW, RESOURCE_VALUE_MEDIUM, RESOURCE_VALUE_HIGH)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceValueConfigsUsed" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_simulations_valued_resources_get">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="exposedScore" /></td>
    <td><code>number (double)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="resourceValue" /></td>
    <td><code>string</code></td>
    <td> (RESOURCE_VALUE_UNSPECIFIED, RESOURCE_VALUE_LOW, RESOURCE_VALUE_MEDIUM, RESOURCE_VALUE_HIGH)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceValueConfigsUsed" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_simulations_valued_resources_list">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="exposedScore" /></td>
    <td><code>number (double)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="resourceValue" /></td>
    <td><code>string</code></td>
    <td> (RESOURCE_VALUE_UNSPECIFIED, RESOURCE_VALUE_LOW, RESOURCE_VALUE_MEDIUM, RESOURCE_VALUE_HIGH)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceValueConfigsUsed" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_valued_resources_list">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="exposedScore" /></td>
    <td><code>number (double)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="resourceValue" /></td>
    <td><code>string</code></td>
    <td> (RESOURCE_VALUE_UNSPECIFIED, RESOURCE_VALUE_LOW, RESOURCE_VALUE_MEDIUM, RESOURCE_VALUE_HIGH)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceValueConfigsUsed" /></td>
    <td><code>array</code></td>
    <td></td>
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
    <td><a href="#organizations_simulations_attack_exposure_results_valued_resources_list"><CopyableCode code="organizations_simulations_attack_exposure_results_valued_resources_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-simulationsId"><code>simulationsId</code></a>, <a href="#parameter-attackExposureResultsId"><code>attackExposureResultsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_simulations_valued_resources_get"><CopyableCode code="organizations_simulations_valued_resources_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-simulationsId"><code>simulationsId</code></a>, <a href="#parameter-valuedResourcesId"><code>valuedResourcesId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_simulations_valued_resources_list"><CopyableCode code="organizations_simulations_valued_resources_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-simulationsId"><code>simulationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_valued_resources_list"><CopyableCode code="organizations_valued_resources_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
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
<tr id="parameter-attackExposureResultsId">
    <td><CopyableCode code="attackExposureResultsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-simulationsId">
    <td><CopyableCode code="simulationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-valuedResourcesId">
    <td><CopyableCode code="valuedResourcesId" /></td>
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
    defaultValue="organizations_simulations_attack_exposure_results_valued_resources_list"
    values={[
        { label: 'organizations_simulations_attack_exposure_results_valued_resources_list', value: 'organizations_simulations_attack_exposure_results_valued_resources_list' },
        { label: 'organizations_simulations_valued_resources_get', value: 'organizations_simulations_valued_resources_get' },
        { label: 'organizations_simulations_valued_resources_list', value: 'organizations_simulations_valued_resources_list' },
        { label: 'organizations_valued_resources_list', value: 'organizations_valued_resources_list' }
    ]}
>
<TabItem value="organizations_simulations_attack_exposure_results_valued_resources_list">

Successful response

```sql
SELECT
name,
displayName,
exposedScore,
resource,
resourceType,
resourceValue,
resourceValueConfigsUsed
FROM google.securitycenter.valued_resources
WHERE organizationsId = '{{ organizationsId }}' -- required
AND simulationsId = '{{ simulationsId }}' -- required
AND attackExposureResultsId = '{{ attackExposureResultsId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
<TabItem value="organizations_simulations_valued_resources_get">

Successful response

```sql
SELECT
name,
displayName,
exposedScore,
resource,
resourceType,
resourceValue,
resourceValueConfigsUsed
FROM google.securitycenter.valued_resources
WHERE organizationsId = '{{ organizationsId }}' -- required
AND simulationsId = '{{ simulationsId }}' -- required
AND valuedResourcesId = '{{ valuedResourcesId }}' -- required
;
```
</TabItem>
<TabItem value="organizations_simulations_valued_resources_list">

Successful response

```sql
SELECT
name,
displayName,
exposedScore,
resource,
resourceType,
resourceValue,
resourceValueConfigsUsed
FROM google.securitycenter.valued_resources
WHERE organizationsId = '{{ organizationsId }}' -- required
AND simulationsId = '{{ simulationsId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
<TabItem value="organizations_valued_resources_list">

Successful response

```sql
SELECT
name,
displayName,
exposedScore,
resource,
resourceType,
resourceValue,
resourceValueConfigsUsed
FROM google.securitycenter.valued_resources
WHERE organizationsId = '{{ organizationsId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>
