--- 
title: correlation_config
hide_title: false
hide_table_of_contents: false
keywords:
  - correlation_config
  - contactcenterinsights
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

Creates, updates, deletes, gets or lists a <code>correlation_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="correlation_config" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.contactcenterinsights.correlation_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_correlation_config"
    values={[
        { label: 'get_correlation_config', value: 'get_correlation_config' }
    ]}
>
<TabItem value="get_correlation_config">

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
    <td>Immutable. Identifier. The resource name of the correlation config. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/correlationConfig</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the correlation config was created.</td>
</tr>
<tr>
    <td><CopyableCode code="fullConversationConfig" /></td>
    <td><code>object</code></td>
    <td>The correlation type config for full conversations. (id: GoogleCloudContactcenterinsightsV1CorrelationTypeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the correlation config was last updated.</td>
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
    <td><a href="#get_correlation_config"><CopyableCode code="get_correlation_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Gets correlation config.</td>
</tr>
<tr>
    <td><a href="#update_correlation_config"><CopyableCode code="update_correlation_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates correlation config.</td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_correlation_config"
    values={[
        { label: 'get_correlation_config', value: 'get_correlation_config' }
    ]}
>
<TabItem value="get_correlation_config">

Gets correlation config.

```sql
SELECT
name,
createTime,
fullConversationConfig,
updateTime
FROM google.contactcenterinsights.correlation_config
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_correlation_config"
    values={[
        { label: 'update_correlation_config', value: 'update_correlation_config' }
    ]}
>
<TabItem value="update_correlation_config">

Updates correlation config.

```sql
UPDATE google.contactcenterinsights.correlation_config
SET 
data__name = '{{ name }}',
data__fullConversationConfig = '{{ fullConversationConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
fullConversationConfig,
updateTime;
```
</TabItem>
</Tabs>
