--- 
title: custom_modules
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_modules
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

Creates, updates, deletes, gets or lists a <code>custom_modules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_modules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securitycenter.custom_modules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_event_threat_detection_settings_custom_modules_get"
    values={[
        { label: 'organizations_event_threat_detection_settings_custom_modules_get', value: 'organizations_event_threat_detection_settings_custom_modules_get' },
        { label: 'projects_event_threat_detection_settings_custom_modules_get', value: 'projects_event_threat_detection_settings_custom_modules_get' },
        { label: 'folders_event_threat_detection_settings_custom_modules_get', value: 'folders_event_threat_detection_settings_custom_modules_get' }
    ]}
>
<TabItem value="organizations_event_threat_detection_settings_custom_modules_get">

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
    <td><CopyableCode code="ancestorModule" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="cloudProvider" /></td>
    <td><code>string</code></td>
    <td> (CLOUD_PROVIDER_UNSPECIFIED, GOOGLE_CLOUD_PLATFORM, AMAZON_WEB_SERVICES, MICROSOFT_AZURE)</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="enablementState" /></td>
    <td><code>string</code></td>
    <td> (ENABLEMENT_STATE_UNSPECIFIED, ENABLED, DISABLED, INHERITED)</td>
</tr>
<tr>
    <td><CopyableCode code="lastEditor" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_event_threat_detection_settings_custom_modules_get">

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
    <td><CopyableCode code="ancestorModule" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="cloudProvider" /></td>
    <td><code>string</code></td>
    <td> (CLOUD_PROVIDER_UNSPECIFIED, GOOGLE_CLOUD_PLATFORM, AMAZON_WEB_SERVICES, MICROSOFT_AZURE)</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="enablementState" /></td>
    <td><code>string</code></td>
    <td> (ENABLEMENT_STATE_UNSPECIFIED, ENABLED, DISABLED, INHERITED)</td>
</tr>
<tr>
    <td><CopyableCode code="lastEditor" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_event_threat_detection_settings_custom_modules_get">

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
    <td><CopyableCode code="ancestorModule" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="cloudProvider" /></td>
    <td><code>string</code></td>
    <td> (CLOUD_PROVIDER_UNSPECIFIED, GOOGLE_CLOUD_PLATFORM, AMAZON_WEB_SERVICES, MICROSOFT_AZURE)</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="enablementState" /></td>
    <td><code>string</code></td>
    <td> (ENABLEMENT_STATE_UNSPECIFIED, ENABLED, DISABLED, INHERITED)</td>
</tr>
<tr>
    <td><CopyableCode code="lastEditor" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
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
    <td><a href="#organizations_event_threat_detection_settings_custom_modules_get"><CopyableCode code="organizations_event_threat_detection_settings_custom_modules_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-customModulesId"><code>customModulesId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_event_threat_detection_settings_custom_modules_get"><CopyableCode code="projects_event_threat_detection_settings_custom_modules_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-customModulesId"><code>customModulesId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_event_threat_detection_settings_custom_modules_get"><CopyableCode code="folders_event_threat_detection_settings_custom_modules_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-customModulesId"><code>customModulesId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_event_threat_detection_settings_custom_modules_patch"><CopyableCode code="organizations_event_threat_detection_settings_custom_modules_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-customModulesId"><code>customModulesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_security_health_analytics_settings_custom_modules_patch"><CopyableCode code="organizations_security_health_analytics_settings_custom_modules_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-customModulesId"><code>customModulesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_security_health_analytics_settings_custom_modules_patch"><CopyableCode code="projects_security_health_analytics_settings_custom_modules_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-customModulesId"><code>customModulesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_event_threat_detection_settings_custom_modules_patch"><CopyableCode code="projects_event_threat_detection_settings_custom_modules_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-customModulesId"><code>customModulesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_security_health_analytics_settings_custom_modules_patch"><CopyableCode code="folders_security_health_analytics_settings_custom_modules_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-customModulesId"><code>customModulesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_event_threat_detection_settings_custom_modules_patch"><CopyableCode code="folders_event_threat_detection_settings_custom_modules_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-customModulesId"><code>customModulesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_security_health_analytics_settings_custom_modules_simulate"><CopyableCode code="organizations_security_health_analytics_settings_custom_modules_simulate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_security_health_analytics_settings_custom_modules_simulate"><CopyableCode code="projects_security_health_analytics_settings_custom_modules_simulate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_security_health_analytics_settings_custom_modules_simulate"><CopyableCode code="folders_security_health_analytics_settings_custom_modules_simulate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
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
<tr id="parameter-customModulesId">
    <td><CopyableCode code="customModulesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-foldersId">
    <td><CopyableCode code="foldersId" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_event_threat_detection_settings_custom_modules_get"
    values={[
        { label: 'organizations_event_threat_detection_settings_custom_modules_get', value: 'organizations_event_threat_detection_settings_custom_modules_get' },
        { label: 'projects_event_threat_detection_settings_custom_modules_get', value: 'projects_event_threat_detection_settings_custom_modules_get' },
        { label: 'folders_event_threat_detection_settings_custom_modules_get', value: 'folders_event_threat_detection_settings_custom_modules_get' }
    ]}
>
<TabItem value="organizations_event_threat_detection_settings_custom_modules_get">

Successful response

```sql
SELECT
name,
ancestorModule,
cloudProvider,
config,
description,
displayName,
enablementState,
lastEditor,
type,
updateTime
FROM google.securitycenter.custom_modules
WHERE organizationsId = '{{ organizationsId }}' -- required
AND customModulesId = '{{ customModulesId }}' -- required
;
```
</TabItem>
<TabItem value="projects_event_threat_detection_settings_custom_modules_get">

Successful response

```sql
SELECT
name,
ancestorModule,
cloudProvider,
config,
description,
displayName,
enablementState,
lastEditor,
type,
updateTime
FROM google.securitycenter.custom_modules
WHERE projectsId = '{{ projectsId }}' -- required
AND customModulesId = '{{ customModulesId }}' -- required
;
```
</TabItem>
<TabItem value="folders_event_threat_detection_settings_custom_modules_get">

Successful response

```sql
SELECT
name,
ancestorModule,
cloudProvider,
config,
description,
displayName,
enablementState,
lastEditor,
type,
updateTime
FROM google.securitycenter.custom_modules
WHERE foldersId = '{{ foldersId }}' -- required
AND customModulesId = '{{ customModulesId }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_event_threat_detection_settings_custom_modules_patch"
    values={[
        { label: 'organizations_event_threat_detection_settings_custom_modules_patch', value: 'organizations_event_threat_detection_settings_custom_modules_patch' },
        { label: 'organizations_security_health_analytics_settings_custom_modules_patch', value: 'organizations_security_health_analytics_settings_custom_modules_patch' },
        { label: 'projects_security_health_analytics_settings_custom_modules_patch', value: 'projects_security_health_analytics_settings_custom_modules_patch' },
        { label: 'projects_event_threat_detection_settings_custom_modules_patch', value: 'projects_event_threat_detection_settings_custom_modules_patch' },
        { label: 'folders_security_health_analytics_settings_custom_modules_patch', value: 'folders_security_health_analytics_settings_custom_modules_patch' },
        { label: 'folders_event_threat_detection_settings_custom_modules_patch', value: 'folders_event_threat_detection_settings_custom_modules_patch' }
    ]}
>
<TabItem value="organizations_event_threat_detection_settings_custom_modules_patch">

No description available.

```sql
UPDATE google.securitycenter.custom_modules
SET 
data__name = '{{ name }}',
data__config = '{{ config }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__type = '{{ type }}',
data__cloudProvider = '{{ cloudProvider }}',
data__enablementState = '{{ enablementState }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND customModulesId = '{{ customModulesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
ancestorModule,
cloudProvider,
config,
description,
displayName,
enablementState,
lastEditor,
type,
updateTime;
```
</TabItem>
<TabItem value="organizations_security_health_analytics_settings_custom_modules_patch">

No description available.

```sql
UPDATE google.securitycenter.custom_modules
SET 
data__displayName = '{{ displayName }}',
data__enablementState = '{{ enablementState }}',
data__name = '{{ name }}',
data__customConfig = '{{ customConfig }}',
data__cloudProvider = '{{ cloudProvider }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND customModulesId = '{{ customModulesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
ancestorModule,
cloudProvider,
customConfig,
displayName,
enablementState,
lastEditor,
updateTime;
```
</TabItem>
<TabItem value="projects_security_health_analytics_settings_custom_modules_patch">

No description available.

```sql
UPDATE google.securitycenter.custom_modules
SET 
data__displayName = '{{ displayName }}',
data__enablementState = '{{ enablementState }}',
data__name = '{{ name }}',
data__customConfig = '{{ customConfig }}',
data__cloudProvider = '{{ cloudProvider }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND customModulesId = '{{ customModulesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
ancestorModule,
cloudProvider,
customConfig,
displayName,
enablementState,
lastEditor,
updateTime;
```
</TabItem>
<TabItem value="projects_event_threat_detection_settings_custom_modules_patch">

No description available.

```sql
UPDATE google.securitycenter.custom_modules
SET 
data__name = '{{ name }}',
data__config = '{{ config }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__type = '{{ type }}',
data__cloudProvider = '{{ cloudProvider }}',
data__enablementState = '{{ enablementState }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND customModulesId = '{{ customModulesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
ancestorModule,
cloudProvider,
config,
description,
displayName,
enablementState,
lastEditor,
type,
updateTime;
```
</TabItem>
<TabItem value="folders_security_health_analytics_settings_custom_modules_patch">

No description available.

```sql
UPDATE google.securitycenter.custom_modules
SET 
data__displayName = '{{ displayName }}',
data__enablementState = '{{ enablementState }}',
data__name = '{{ name }}',
data__customConfig = '{{ customConfig }}',
data__cloudProvider = '{{ cloudProvider }}'
WHERE 
foldersId = '{{ foldersId }}' --required
AND customModulesId = '{{ customModulesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
ancestorModule,
cloudProvider,
customConfig,
displayName,
enablementState,
lastEditor,
updateTime;
```
</TabItem>
<TabItem value="folders_event_threat_detection_settings_custom_modules_patch">

No description available.

```sql
UPDATE google.securitycenter.custom_modules
SET 
data__name = '{{ name }}',
data__config = '{{ config }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__type = '{{ type }}',
data__cloudProvider = '{{ cloudProvider }}',
data__enablementState = '{{ enablementState }}'
WHERE 
foldersId = '{{ foldersId }}' --required
AND customModulesId = '{{ customModulesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
ancestorModule,
cloudProvider,
config,
description,
displayName,
enablementState,
lastEditor,
type,
updateTime;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="organizations_security_health_analytics_settings_custom_modules_simulate"
    values={[
        { label: 'organizations_security_health_analytics_settings_custom_modules_simulate', value: 'organizations_security_health_analytics_settings_custom_modules_simulate' },
        { label: 'projects_security_health_analytics_settings_custom_modules_simulate', value: 'projects_security_health_analytics_settings_custom_modules_simulate' },
        { label: 'folders_security_health_analytics_settings_custom_modules_simulate', value: 'folders_security_health_analytics_settings_custom_modules_simulate' }
    ]}
>
<TabItem value="organizations_security_health_analytics_settings_custom_modules_simulate">

Successful response

```sql
EXEC google.securitycenter.custom_modules.organizations_security_health_analytics_settings_custom_modules_simulate 
@organizationsId='{{ organizationsId }}' --required 
@@json=
'{
"customConfig": "{{ customConfig }}", 
"resource": "{{ resource }}"
}'
;
```
</TabItem>
<TabItem value="projects_security_health_analytics_settings_custom_modules_simulate">

Successful response

```sql
EXEC google.securitycenter.custom_modules.projects_security_health_analytics_settings_custom_modules_simulate 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"customConfig": "{{ customConfig }}", 
"resource": "{{ resource }}"
}'
;
```
</TabItem>
<TabItem value="folders_security_health_analytics_settings_custom_modules_simulate">

Successful response

```sql
EXEC google.securitycenter.custom_modules.folders_security_health_analytics_settings_custom_modules_simulate 
@foldersId='{{ foldersId }}' --required 
@@json=
'{
"customConfig": "{{ customConfig }}", 
"resource": "{{ resource }}"
}'
;
```
</TabItem>
</Tabs>
