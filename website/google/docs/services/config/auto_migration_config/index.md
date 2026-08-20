--- 
title: auto_migration_config
hide_title: false
hide_table_of_contents: false
keywords:
  - auto_migration_config
  - config
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

Creates, updates, deletes, gets or lists an <code>auto_migration_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="auto_migration_config" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.config.auto_migration_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_auto_migration_config"
    values={[
        { label: 'get_auto_migration_config', value: 'get_auto_migration_config' }
    ]}
>
<TabItem value="get_auto_migration_config">

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
    <td>Identifier. The name of the AutoMigrationConfig. Format: 'projects/&#123;project_id&#125;/locations/&#123;location&#125;/AutoMigrationConfig'.</td>
</tr>
<tr>
    <td><CopyableCode code="autoMigrationEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the auto migration is enabled for the project.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time the AutoMigrationConfig was last updated.</td>
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
    <td><a href="#get_auto_migration_config"><CopyableCode code="get_auto_migration_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Get the AutoMigrationConfig for a given project and location.</td>
</tr>
<tr>
    <td><a href="#update_auto_migration_config"><CopyableCode code="update_auto_migration_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the AutoMigrationConfig for a given project and location.</td>
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
    defaultValue="get_auto_migration_config"
    values={[
        { label: 'get_auto_migration_config', value: 'get_auto_migration_config' }
    ]}
>
<TabItem value="get_auto_migration_config">

Get the AutoMigrationConfig for a given project and location.

```sql
SELECT
name,
autoMigrationEnabled,
updateTime
FROM google.config.auto_migration_config
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_auto_migration_config"
    values={[
        { label: 'update_auto_migration_config', value: 'update_auto_migration_config' }
    ]}
>
<TabItem value="update_auto_migration_config">

Updates the AutoMigrationConfig for a given project and location.

```sql
UPDATE google.config.auto_migration_config
SET 
data__autoMigrationEnabled = {{ autoMigrationEnabled }},
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
