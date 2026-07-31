--- 
title: region_health_sources_health
hide_title: false
hide_table_of_contents: false
keywords:
  - region_health_sources_health
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

Creates, updates, deletes, gets or lists a <code>region_health_sources_health</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="region_health_sources_health" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.region_health_sources_health" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_health"
    values={[
        { label: 'get_health', value: 'get_health' }
    ]}
>
<TabItem value="get_health">

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
    <td><CopyableCode code="healthState" /></td>
    <td><code>string</code></td>
    <td>Health state of the HealthSource. (HEALTHY, UNHEALTHY, UNKNOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of resource. Alwayscompute#healthSourceHealth for the health of health sources. (default: compute#healthSourceHealth)</td>
</tr>
<tr>
    <td><CopyableCode code="sources" /></td>
    <td><code>array</code></td>
    <td>Health state details of the sources.</td>
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
    <td><a href="#get_health"><CopyableCode code="get_health" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-healthSource"><code>healthSource</code></a></td>
    <td></td>
    <td>Gets the most recent health check results for this<br />regional HealthSource.</td>
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
<tr id="parameter-healthSource">
    <td><CopyableCode code="healthSource" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_health"
    values={[
        { label: 'get_health', value: 'get_health' }
    ]}
>
<TabItem value="get_health">

Gets the most recent health check results for this<br />regional HealthSource.

```sql
SELECT
healthState,
kind,
sources
FROM google.compute.region_health_sources_health
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND healthSource = '{{ healthSource }}' -- required
;
```
</TabItem>
</Tabs>
