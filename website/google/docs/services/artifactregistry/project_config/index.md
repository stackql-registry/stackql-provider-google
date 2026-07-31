--- 
title: project_config
hide_title: false
hide_table_of_contents: false
keywords:
  - project_config
  - artifactregistry
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

Creates, updates, deletes, gets or lists a <code>project_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="project_config" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.artifactregistry.project_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_project_config"
    values={[
        { label: 'get_project_config', value: 'get_project_config' }
    ]}
>
<TabItem value="get_project_config">

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
    <td>Identifier. The name of the project's configuration. Always of the form: projects/&#123;project&#125;/locations/&#123;location&#125;/projectConfig</td>
</tr>
<tr>
    <td><CopyableCode code="platformLogsConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for platform logs. (id: PlatformLogsConfig)</td>
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
    <td><a href="#get_project_config"><CopyableCode code="get_project_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Retrieves the project configuration.</td>
</tr>
<tr>
    <td><a href="#update_project_config"><CopyableCode code="update_project_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the project configuration.</td>
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
    defaultValue="get_project_config"
    values={[
        { label: 'get_project_config', value: 'get_project_config' }
    ]}
>
<TabItem value="get_project_config">

Retrieves the project configuration.

```sql
SELECT
name,
platformLogsConfig
FROM google.artifactregistry.project_config
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_project_config"
    values={[
        { label: 'update_project_config', value: 'update_project_config' }
    ]}
>
<TabItem value="update_project_config">

Updates the project configuration.

```sql
UPDATE google.artifactregistry.project_config
SET 
data__name = '{{ name }}',
data__platformLogsConfig = '{{ platformLogsConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
platformLogsConfig;
```
</TabItem>
</Tabs>
