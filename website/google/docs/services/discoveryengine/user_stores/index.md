--- 
title: user_stores
hide_title: false
hide_table_of_contents: false
keywords:
  - user_stores
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

Creates, updates, deletes, gets or lists a <code>user_stores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>user_stores</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.user_stores" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_user_stores_get"
    values={[
        { label: 'projects_locations_user_stores_get', value: 'projects_locations_user_stores_get' }
    ]}
>
<TabItem value="projects_locations_user_stores_get">

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
    <td>Immutable. The full resource name of the User Store, in the format of `projects/&#123;project&#125;/locations/&#123;location&#125;/userStores/&#123;user_store&#125;`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultLicenseConfig" /></td>
    <td><code>string</code></td>
    <td>Optional. The default subscription LicenseConfig for the UserStore, if UserStore.enable_license_auto_register is true, new users will automatically register under the default subscription. If default LicenseConfig doesn't have remaining license seats left, new users will not be assigned with license and will be blocked for Vertex AI Search features. This is used if `license_assignment_tier_rules` is not configured.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the User Store.</td>
</tr>
<tr>
    <td><CopyableCode code="enableExpiredLicenseAutoUpdate" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether to enable license auto update for users in this User Store. If true, users with expired licenses will automatically be updated to use the default license config as long as the default license config has seats left.</td>
</tr>
<tr>
    <td><CopyableCode code="enableLicenseAutoRegister" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether to enable license auto register for users in this User Store. If true, new users will automatically register under the default license config as long as the default license config has seats left.</td>
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
    <td><a href="#projects_locations_user_stores_get"><CopyableCode code="projects_locations_user_stores_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-userStoresId"><code>userStoresId</code></a></td>
    <td></td>
    <td>Gets the User Store.</td>
</tr>
<tr>
    <td><a href="#projects_locations_user_stores_create"><CopyableCode code="projects_locations_user_stores_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-userStoreId"><code>userStoreId</code></a></td>
    <td>Creates a new User Store.</td>
</tr>
<tr>
    <td><a href="#projects_locations_user_stores_patch"><CopyableCode code="projects_locations_user_stores_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-userStoresId"><code>userStoresId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the User Store.</td>
</tr>
<tr>
    <td><a href="#projects_locations_user_stores_batch_update_user_licenses"><CopyableCode code="projects_locations_user_stores_batch_update_user_licenses" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-userStoresId"><code>userStoresId</code></a></td>
    <td></td>
    <td>Updates the User License. This method is used for batch assign/unassign licenses to users.</td>
</tr>
<tr>
    <td><a href="#projects_locations_user_stores_delete"><CopyableCode code="projects_locations_user_stores_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-userStoresId"><code>userStoresId</code></a></td>
    <td></td>
    <td>Deletes the User Store.</td>
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
<tr id="parameter-userStoresId">
    <td><CopyableCode code="userStoresId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-userStoreId">
    <td><CopyableCode code="userStoreId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_user_stores_get"
    values={[
        { label: 'projects_locations_user_stores_get', value: 'projects_locations_user_stores_get' }
    ]}
>
<TabItem value="projects_locations_user_stores_get">

Gets the User Store.

```sql
SELECT
name,
defaultLicenseConfig,
displayName,
enableExpiredLicenseAutoUpdate,
enableLicenseAutoRegister
FROM google.discoveryengine.user_stores
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND userStoresId = '{{ userStoresId }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_user_stores_create"
    values={[
        { label: 'projects_locations_user_stores_create', value: 'projects_locations_user_stores_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_user_stores_create">

Creates a new User Store.

```sql
INSERT INTO google.discoveryengine.user_stores (
data__displayName,
data__defaultLicenseConfig,
data__enableLicenseAutoRegister,
data__enableExpiredLicenseAutoUpdate,
data__name,
projectsId,
locationsId,
userStoreId
)
SELECT 
'{{ displayName }}',
'{{ defaultLicenseConfig }}',
{{ enableLicenseAutoRegister }},
{{ enableExpiredLicenseAutoUpdate }},
'{{ name }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ userStoreId }}'
RETURNING
name,
defaultLicenseConfig,
displayName,
enableExpiredLicenseAutoUpdate,
enableLicenseAutoRegister
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: user_stores
  props:
    - name: projectsId
      value: string
      description: Required parameter for the user_stores resource.
    - name: locationsId
      value: string
      description: Required parameter for the user_stores resource.
    - name: displayName
      value: string
      description: >
        The display name of the User Store.
        
    - name: defaultLicenseConfig
      value: string
      description: >
        Optional. The default subscription LicenseConfig for the UserStore, if UserStore.enable_license_auto_register is true, new users will automatically register under the default subscription. If default LicenseConfig doesn't have remaining license seats left, new users will not be assigned with license and will be blocked for Vertex AI Search features. This is used if `license_assignment_tier_rules` is not configured.
        
    - name: enableLicenseAutoRegister
      value: boolean
      description: >
        Optional. Whether to enable license auto register for users in this User Store. If true, new users will automatically register under the default license config as long as the default license config has seats left.
        
    - name: enableExpiredLicenseAutoUpdate
      value: boolean
      description: >
        Optional. Whether to enable license auto update for users in this User Store. If true, users with expired licenses will automatically be updated to use the default license config as long as the default license config has seats left.
        
    - name: name
      value: string
      description: >
        Immutable. The full resource name of the User Store, in the format of `projects/{project}/locations/{location}/userStores/{user_store}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
        
    - name: userStoreId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_user_stores_patch"
    values={[
        { label: 'projects_locations_user_stores_patch', value: 'projects_locations_user_stores_patch' },
        { label: 'projects_locations_user_stores_batch_update_user_licenses', value: 'projects_locations_user_stores_batch_update_user_licenses' }
    ]}
>
<TabItem value="projects_locations_user_stores_patch">

Updates the User Store.

```sql
UPDATE google.discoveryengine.user_stores
SET 
data__displayName = '{{ displayName }}',
data__defaultLicenseConfig = '{{ defaultLicenseConfig }}',
data__enableLicenseAutoRegister = {{ enableLicenseAutoRegister }},
data__enableExpiredLicenseAutoUpdate = {{ enableExpiredLicenseAutoUpdate }},
data__name = '{{ name }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND userStoresId = '{{ userStoresId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
defaultLicenseConfig,
displayName,
enableExpiredLicenseAutoUpdate,
enableLicenseAutoRegister;
```
</TabItem>
<TabItem value="projects_locations_user_stores_batch_update_user_licenses">

Updates the User License. This method is used for batch assign/unassign licenses to users.

```sql
UPDATE google.discoveryengine.user_stores
SET 
data__inlineSource = '{{ inlineSource }}',
data__deleteUnassignedUserLicenses = {{ deleteUnassignedUserLicenses }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND userStoresId = '{{ userStoresId }}' --required
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
    defaultValue="projects_locations_user_stores_delete"
    values={[
        { label: 'projects_locations_user_stores_delete', value: 'projects_locations_user_stores_delete' }
    ]}
>
<TabItem value="projects_locations_user_stores_delete">

Deletes the User Store.

```sql
DELETE FROM google.discoveryengine.user_stores
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND userStoresId = '{{ userStoresId }}' --required
;
```
</TabItem>
</Tabs>
