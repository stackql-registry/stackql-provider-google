--- 
title: cmek_config
hide_title: false
hide_table_of_contents: false
keywords:
  - cmek_config
  - cloudscheduler
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

Creates, updates, deletes, gets or lists a <code>cmek_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cmek_config" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudscheduler.cmek_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cmek_config"
    values={[
        { label: 'get_cmek_config', value: 'get_cmek_config' }
    ]}
>
<TabItem value="get_cmek_config">

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
    <td>Identifier. The config resource name which includes the project and location and must end in 'cmekConfig', in the format projects/PROJECT_ID/locations/LOCATION_ID/cmekConfig`</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td>Optional. Resource name of the Cloud KMS key, of the form `projects/PROJECT_ID/locations/LOCATION_ID/keyRings/KEY_RING_ID/cryptoKeys/KEY_ID`, that will be used to encrypt Jobs in the region. Setting this as blank will turn off CMEK encryption.</td>
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
    <td><a href="#get_cmek_config"><CopyableCode code="get_cmek_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Gets the Scheduler config in the project/region.</td>
</tr>
<tr>
    <td><a href="#update_cmek_config"><CopyableCode code="update_cmek_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Initializes or Updates the a scheduler config.</td>
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
    defaultValue="get_cmek_config"
    values={[
        { label: 'get_cmek_config', value: 'get_cmek_config' }
    ]}
>
<TabItem value="get_cmek_config">

Gets the Scheduler config in the project/region.

```sql
SELECT
name,
kmsKeyName
FROM google.cloudscheduler.cmek_config
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_cmek_config"
    values={[
        { label: 'update_cmek_config', value: 'update_cmek_config' }
    ]}
>
<TabItem value="update_cmek_config">

Initializes or Updates the a scheduler config.

```sql
UPDATE google.cloudscheduler.cmek_config
SET 
data__kmsKeyName = '{{ kmsKeyName }}',
data__name = '{{ name }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
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
