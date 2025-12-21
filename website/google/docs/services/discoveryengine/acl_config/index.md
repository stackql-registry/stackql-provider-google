--- 
title: acl_config
hide_title: false
hide_table_of_contents: false
keywords:
  - acl_config
  - discoveryengine
  - google
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage google resources using SQL
custom_edit_url: null
image: /img/stackql-google-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>acl_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>acl_config</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.acl_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_get_acl_config"
    values={[
        { label: 'projects_locations_get_acl_config', value: 'projects_locations_get_acl_config' }
    ]}
>
<TabItem value="projects_locations_get_acl_config">

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
    <td>Immutable. The full resource name of the acl configuration. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/aclConfig`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="idpConfig" /></td>
    <td><code>object</code></td>
    <td>Identity provider config. (id: GoogleCloudDiscoveryengineV1IdpConfig)</td>
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
    <td><a href="#projects_locations_get_acl_config"><CopyableCode code="projects_locations_get_acl_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Gets the AclConfig.</td>
</tr>
<tr>
    <td><a href="#projects_locations_update_acl_config"><CopyableCode code="projects_locations_update_acl_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Default ACL configuration for use in a location of a customer's project. Updates will only reflect to new data stores. Existing data stores will still use the old value.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_get_acl_config"
    values={[
        { label: 'projects_locations_get_acl_config', value: 'projects_locations_get_acl_config' }
    ]}
>
<TabItem value="projects_locations_get_acl_config">

Gets the AclConfig.

```sql
SELECT
name,
idpConfig
FROM google.discoveryengine.acl_config
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_update_acl_config"
    values={[
        { label: 'projects_locations_update_acl_config', value: 'projects_locations_update_acl_config' }
    ]}
>
<TabItem value="projects_locations_update_acl_config">

Default ACL configuration for use in a location of a customer's project. Updates will only reflect to new data stores. Existing data stores will still use the old value.

```sql
UPDATE google.discoveryengine.acl_config
SET 
data__name = '{{ name }}',
data__idpConfig = '{{ idpConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
RETURNING
name,
idpConfig;
```
</TabItem>
</Tabs>
