--- 
title: notification_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - notification_configs
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

Creates, updates, deletes, gets or lists a <code>notification_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notification_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securitycenter.notification_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="folders_notification_configs_get"
    values={[
        { label: 'folders_notification_configs_get', value: 'folders_notification_configs_get' },
        { label: 'organizations_notification_configs_get', value: 'organizations_notification_configs_get' },
        { label: 'projects_notification_configs_get', value: 'projects_notification_configs_get' },
        { label: 'folders_notification_configs_list', value: 'folders_notification_configs_list' },
        { label: 'organizations_notification_configs_list', value: 'organizations_notification_configs_list' },
        { label: 'projects_notification_configs_list', value: 'projects_notification_configs_list' }
    ]}
>
<TabItem value="folders_notification_configs_get">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pubsubTopic" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="streamingConfig" /></td>
    <td><code>object</code></td>
    <td> (id: StreamingConfig)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_notification_configs_get">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pubsubTopic" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="streamingConfig" /></td>
    <td><code>object</code></td>
    <td> (id: StreamingConfig)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_notification_configs_get">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pubsubTopic" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="streamingConfig" /></td>
    <td><code>object</code></td>
    <td> (id: StreamingConfig)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_notification_configs_list">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pubsubTopic" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="streamingConfig" /></td>
    <td><code>object</code></td>
    <td> (id: StreamingConfig)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_notification_configs_list">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pubsubTopic" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="streamingConfig" /></td>
    <td><code>object</code></td>
    <td> (id: StreamingConfig)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_notification_configs_list">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pubsubTopic" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="streamingConfig" /></td>
    <td><code>object</code></td>
    <td> (id: StreamingConfig)</td>
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
    <td><a href="#folders_notification_configs_get"><CopyableCode code="folders_notification_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-notificationConfigsId"><code>notificationConfigsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_notification_configs_get"><CopyableCode code="organizations_notification_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-notificationConfigsId"><code>notificationConfigsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_notification_configs_get"><CopyableCode code="projects_notification_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-notificationConfigsId"><code>notificationConfigsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_notification_configs_list"><CopyableCode code="folders_notification_configs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_notification_configs_list"><CopyableCode code="organizations_notification_configs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_notification_configs_list"><CopyableCode code="projects_notification_configs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_notification_configs_create"><CopyableCode code="folders_notification_configs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-configId"><code>configId</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_notification_configs_create"><CopyableCode code="organizations_notification_configs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-configId"><code>configId</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_notification_configs_create"><CopyableCode code="projects_notification_configs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-configId"><code>configId</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_notification_configs_patch"><CopyableCode code="folders_notification_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-notificationConfigsId"><code>notificationConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_notification_configs_patch"><CopyableCode code="organizations_notification_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-notificationConfigsId"><code>notificationConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_notification_configs_patch"><CopyableCode code="projects_notification_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-notificationConfigsId"><code>notificationConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_notification_configs_delete"><CopyableCode code="folders_notification_configs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-notificationConfigsId"><code>notificationConfigsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_notification_configs_delete"><CopyableCode code="organizations_notification_configs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-notificationConfigsId"><code>notificationConfigsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_notification_configs_delete"><CopyableCode code="projects_notification_configs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-notificationConfigsId"><code>notificationConfigsId</code></a></td>
    <td></td>
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
<tr id="parameter-foldersId">
    <td><CopyableCode code="foldersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-notificationConfigsId">
    <td><CopyableCode code="notificationConfigsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-configId">
    <td><CopyableCode code="configId" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="folders_notification_configs_get"
    values={[
        { label: 'folders_notification_configs_get', value: 'folders_notification_configs_get' },
        { label: 'organizations_notification_configs_get', value: 'organizations_notification_configs_get' },
        { label: 'projects_notification_configs_get', value: 'projects_notification_configs_get' },
        { label: 'folders_notification_configs_list', value: 'folders_notification_configs_list' },
        { label: 'organizations_notification_configs_list', value: 'organizations_notification_configs_list' },
        { label: 'projects_notification_configs_list', value: 'projects_notification_configs_list' }
    ]}
>
<TabItem value="folders_notification_configs_get">

Successful response

```sql
SELECT
name,
description,
pubsubTopic,
serviceAccount,
streamingConfig
FROM google.securitycenter.notification_configs
WHERE foldersId = '{{ foldersId }}' -- required
AND notificationConfigsId = '{{ notificationConfigsId }}' -- required
;
```
</TabItem>
<TabItem value="organizations_notification_configs_get">

Successful response

```sql
SELECT
name,
description,
pubsubTopic,
serviceAccount,
streamingConfig
FROM google.securitycenter.notification_configs
WHERE organizationsId = '{{ organizationsId }}' -- required
AND notificationConfigsId = '{{ notificationConfigsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_notification_configs_get">

Successful response

```sql
SELECT
name,
description,
pubsubTopic,
serviceAccount,
streamingConfig
FROM google.securitycenter.notification_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND notificationConfigsId = '{{ notificationConfigsId }}' -- required
;
```
</TabItem>
<TabItem value="folders_notification_configs_list">

Successful response

```sql
SELECT
name,
description,
pubsubTopic,
serviceAccount,
streamingConfig
FROM google.securitycenter.notification_configs
WHERE foldersId = '{{ foldersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
<TabItem value="organizations_notification_configs_list">

Successful response

```sql
SELECT
name,
description,
pubsubTopic,
serviceAccount,
streamingConfig
FROM google.securitycenter.notification_configs
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
<TabItem value="projects_notification_configs_list">

Successful response

```sql
SELECT
name,
description,
pubsubTopic,
serviceAccount,
streamingConfig
FROM google.securitycenter.notification_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="folders_notification_configs_create"
    values={[
        { label: 'folders_notification_configs_create', value: 'folders_notification_configs_create' },
        { label: 'organizations_notification_configs_create', value: 'organizations_notification_configs_create' },
        { label: 'projects_notification_configs_create', value: 'projects_notification_configs_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="folders_notification_configs_create">

No description available.

```sql
INSERT INTO google.securitycenter.notification_configs (
data__description,
data__name,
data__pubsubTopic,
data__streamingConfig,
foldersId,
configId
)
SELECT 
'{{ description }}',
'{{ name }}',
'{{ pubsubTopic }}',
'{{ streamingConfig }}',
'{{ foldersId }}',
'{{ configId }}'
RETURNING
name,
description,
pubsubTopic,
serviceAccount,
streamingConfig
;
```
</TabItem>
<TabItem value="organizations_notification_configs_create">

No description available.

```sql
INSERT INTO google.securitycenter.notification_configs (
data__description,
data__name,
data__pubsubTopic,
data__streamingConfig,
organizationsId,
configId
)
SELECT 
'{{ description }}',
'{{ name }}',
'{{ pubsubTopic }}',
'{{ streamingConfig }}',
'{{ organizationsId }}',
'{{ configId }}'
RETURNING
name,
description,
pubsubTopic,
serviceAccount,
streamingConfig
;
```
</TabItem>
<TabItem value="projects_notification_configs_create">

No description available.

```sql
INSERT INTO google.securitycenter.notification_configs (
data__description,
data__name,
data__pubsubTopic,
data__streamingConfig,
projectsId,
configId
)
SELECT 
'{{ description }}',
'{{ name }}',
'{{ pubsubTopic }}',
'{{ streamingConfig }}',
'{{ projectsId }}',
'{{ configId }}'
RETURNING
name,
description,
pubsubTopic,
serviceAccount,
streamingConfig
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: notification_configs
  props:
    - name: foldersId
      value: "{{ foldersId }}"
      description: Required parameter for the notification_configs resource.
    - name: organizationsId
      value: "{{ organizationsId }}"
      description: Required parameter for the notification_configs resource.
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the notification_configs resource.
    - name: description
      value: "{{ description }}"
    - name: name
      value: "{{ name }}"
    - name: pubsubTopic
      value: "{{ pubsubTopic }}"
    - name: streamingConfig
      value:
        filter: "{{ filter }}"
    - name: configId
      value: "{{ configId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="folders_notification_configs_patch"
    values={[
        { label: 'folders_notification_configs_patch', value: 'folders_notification_configs_patch' },
        { label: 'organizations_notification_configs_patch', value: 'organizations_notification_configs_patch' },
        { label: 'projects_notification_configs_patch', value: 'projects_notification_configs_patch' }
    ]}
>
<TabItem value="folders_notification_configs_patch">

No description available.

```sql
UPDATE google.securitycenter.notification_configs
SET 
data__description = '{{ description }}',
data__name = '{{ name }}',
data__pubsubTopic = '{{ pubsubTopic }}',
data__streamingConfig = '{{ streamingConfig }}'
WHERE 
foldersId = '{{ foldersId }}' --required
AND notificationConfigsId = '{{ notificationConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
description,
pubsubTopic,
serviceAccount,
streamingConfig;
```
</TabItem>
<TabItem value="organizations_notification_configs_patch">

No description available.

```sql
UPDATE google.securitycenter.notification_configs
SET 
data__description = '{{ description }}',
data__name = '{{ name }}',
data__pubsubTopic = '{{ pubsubTopic }}',
data__streamingConfig = '{{ streamingConfig }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND notificationConfigsId = '{{ notificationConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
description,
pubsubTopic,
serviceAccount,
streamingConfig;
```
</TabItem>
<TabItem value="projects_notification_configs_patch">

No description available.

```sql
UPDATE google.securitycenter.notification_configs
SET 
data__description = '{{ description }}',
data__name = '{{ name }}',
data__pubsubTopic = '{{ pubsubTopic }}',
data__streamingConfig = '{{ streamingConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND notificationConfigsId = '{{ notificationConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
description,
pubsubTopic,
serviceAccount,
streamingConfig;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="folders_notification_configs_delete"
    values={[
        { label: 'folders_notification_configs_delete', value: 'folders_notification_configs_delete' },
        { label: 'organizations_notification_configs_delete', value: 'organizations_notification_configs_delete' },
        { label: 'projects_notification_configs_delete', value: 'projects_notification_configs_delete' }
    ]}
>
<TabItem value="folders_notification_configs_delete">

No description available.

```sql
DELETE FROM google.securitycenter.notification_configs
WHERE foldersId = '{{ foldersId }}' --required
AND notificationConfigsId = '{{ notificationConfigsId }}' --required
;
```
</TabItem>
<TabItem value="organizations_notification_configs_delete">

No description available.

```sql
DELETE FROM google.securitycenter.notification_configs
WHERE organizationsId = '{{ organizationsId }}' --required
AND notificationConfigsId = '{{ notificationConfigsId }}' --required
;
```
</TabItem>
<TabItem value="projects_notification_configs_delete">

No description available.

```sql
DELETE FROM google.securitycenter.notification_configs
WHERE projectsId = '{{ projectsId }}' --required
AND notificationConfigsId = '{{ notificationConfigsId }}' --required
;
```
</TabItem>
</Tabs>
