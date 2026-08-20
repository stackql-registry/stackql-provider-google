--- 
title: plugins
hide_title: false
hide_table_of_contents: false
keywords:
  - plugins
  - apihub
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

Creates, updates, deletes, gets or lists a <code>plugins</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="plugins" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apihub.plugins" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

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
    <td>Identifier. The name of the plugin. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/plugins/&#123;plugin&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="actionsConfig" /></td>
    <td><code>array</code></td>
    <td>Optional. The configuration of actions supported by the plugin. **REQUIRED**: This field must be provided when creating or updating a Plugin. The server will reject requests if this field is missing.</td>
</tr>
<tr>
    <td><CopyableCode code="configTemplate" /></td>
    <td><code>object</code></td>
    <td>Optional. The configuration template for the plugin. (id: GoogleCloudApihubV1ConfigTemplate)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp indicating when the plugin was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The plugin description. Max length is 2000 characters (Unicode code points).</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the plugin. Max length is 50 characters (Unicode code points).</td>
</tr>
<tr>
    <td><CopyableCode code="documentation" /></td>
    <td><code>object</code></td>
    <td>Optional. The documentation of the plugin, that explains how to set up and use the plugin. (id: GoogleCloudApihubV1Documentation)</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayType" /></td>
    <td><code>string</code></td>
    <td>Optional. The type of the gateway. (GATEWAY_TYPE_UNSPECIFIED, APIGEE_X_AND_HYBRID, APIGEE_EDGE_PUBLIC_CLOUD, APIGEE_EDGE_PRIVATE_CLOUD, CLOUD_API_GATEWAY, CLOUD_ENDPOINTS, API_DISCOVERY, OTHERS, AWS_API_GATEWAY, AZURE_API_MANAGEMENT)</td>
</tr>
<tr>
    <td><CopyableCode code="hostingService" /></td>
    <td><code>object</code></td>
    <td>Optional. This field is optional. It is used to notify the plugin hosting service for any lifecycle changes of the plugin instance and trigger execution of plugin instance actions in case of API hub managed actions. This field should be provided if the plugin instance lifecycle of the developed plugin needs to be managed from API hub. Also, in this case the plugin hosting service interface needs to be implemented. This field should not be provided if the plugin wants to manage plugin instance lifecycle events outside of hub interface and use plugin framework for only registering of plugin and plugin instances to capture the source of data into hub. Note, in this case the plugin hosting service interface is not required to be implemented. Also, the plugin instance lifecycle actions will be disabled from API hub's UI. (id: GoogleCloudApihubV1HostingService)</td>
</tr>
<tr>
    <td><CopyableCode code="ownershipType" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of the plugin, indicating whether it is 'SYSTEM_OWNED' or 'USER_OWNED'. (OWNERSHIP_TYPE_UNSPECIFIED, SYSTEM_OWNED, USER_OWNED)</td>
</tr>
<tr>
    <td><CopyableCode code="pluginCategory" /></td>
    <td><code>string</code></td>
    <td>Optional. The category of the plugin, identifying its primary category or purpose. This field is required for all plugins. (PLUGIN_CATEGORY_UNSPECIFIED, API_GATEWAY, API_PRODUCER)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Represents the state of the plugin. Note this field will not be set for plugins developed via plugin framework as the state will be managed at plugin instance level. (STATE_UNSPECIFIED, ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>object</code></td>
    <td>The attribute values associated with resource. (id: GoogleCloudApihubV1AttributeValues)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp indicating when the plugin was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td>Identifier. The name of the plugin. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/plugins/&#123;plugin&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="actionsConfig" /></td>
    <td><code>array</code></td>
    <td>Optional. The configuration of actions supported by the plugin. **REQUIRED**: This field must be provided when creating or updating a Plugin. The server will reject requests if this field is missing.</td>
</tr>
<tr>
    <td><CopyableCode code="configTemplate" /></td>
    <td><code>object</code></td>
    <td>Optional. The configuration template for the plugin. (id: GoogleCloudApihubV1ConfigTemplate)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp indicating when the plugin was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The plugin description. Max length is 2000 characters (Unicode code points).</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the plugin. Max length is 50 characters (Unicode code points).</td>
</tr>
<tr>
    <td><CopyableCode code="documentation" /></td>
    <td><code>object</code></td>
    <td>Optional. The documentation of the plugin, that explains how to set up and use the plugin. (id: GoogleCloudApihubV1Documentation)</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayType" /></td>
    <td><code>string</code></td>
    <td>Optional. The type of the gateway. (GATEWAY_TYPE_UNSPECIFIED, APIGEE_X_AND_HYBRID, APIGEE_EDGE_PUBLIC_CLOUD, APIGEE_EDGE_PRIVATE_CLOUD, CLOUD_API_GATEWAY, CLOUD_ENDPOINTS, API_DISCOVERY, OTHERS, AWS_API_GATEWAY, AZURE_API_MANAGEMENT)</td>
</tr>
<tr>
    <td><CopyableCode code="hostingService" /></td>
    <td><code>object</code></td>
    <td>Optional. This field is optional. It is used to notify the plugin hosting service for any lifecycle changes of the plugin instance and trigger execution of plugin instance actions in case of API hub managed actions. This field should be provided if the plugin instance lifecycle of the developed plugin needs to be managed from API hub. Also, in this case the plugin hosting service interface needs to be implemented. This field should not be provided if the plugin wants to manage plugin instance lifecycle events outside of hub interface and use plugin framework for only registering of plugin and plugin instances to capture the source of data into hub. Note, in this case the plugin hosting service interface is not required to be implemented. Also, the plugin instance lifecycle actions will be disabled from API hub's UI. (id: GoogleCloudApihubV1HostingService)</td>
</tr>
<tr>
    <td><CopyableCode code="ownershipType" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of the plugin, indicating whether it is 'SYSTEM_OWNED' or 'USER_OWNED'. (OWNERSHIP_TYPE_UNSPECIFIED, SYSTEM_OWNED, USER_OWNED)</td>
</tr>
<tr>
    <td><CopyableCode code="pluginCategory" /></td>
    <td><code>string</code></td>
    <td>Optional. The category of the plugin, identifying its primary category or purpose. This field is required for all plugins. (PLUGIN_CATEGORY_UNSPECIFIED, API_GATEWAY, API_PRODUCER)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Represents the state of the plugin. Note this field will not be set for plugins developed via plugin framework as the state will be managed at plugin instance level. (STATE_UNSPECIFIED, ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>object</code></td>
    <td>The attribute values associated with resource. (id: GoogleCloudApihubV1AttributeValues)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp indicating when the plugin was last updated.</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-pluginsId"><code>pluginsId</code></a></td>
    <td></td>
    <td>Get an API Hub plugin.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>List all the plugins in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pluginId"><code>pluginId</code></a></td>
    <td>Create an API Hub plugin resource in the API hub. Once a plugin is created, it can be used to create plugin instances.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-pluginsId"><code>pluginsId</code></a></td>
    <td></td>
    <td>Delete a Plugin in API hub. Note, only user owned plugins can be deleted via this method.</td>
</tr>
<tr>
    <td><a href="#disable"><CopyableCode code="disable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-pluginsId"><code>pluginsId</code></a></td>
    <td></td>
    <td>Disables a plugin. The `state` of the plugin after disabling is `DISABLED`</td>
</tr>
<tr>
    <td><a href="#enable"><CopyableCode code="enable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-pluginsId"><code>pluginsId</code></a></td>
    <td></td>
    <td>Enables a plugin. The `state` of the plugin after enabling is `ENABLED`</td>
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
<tr id="parameter-pluginsId">
    <td><CopyableCode code="pluginsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
<tr id="parameter-pluginId">
    <td><CopyableCode code="pluginId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get an API Hub plugin.

```sql
SELECT
name,
actionsConfig,
configTemplate,
createTime,
description,
displayName,
documentation,
gatewayType,
hostingService,
ownershipType,
pluginCategory,
state,
type,
updateTime
FROM google.apihub.plugins
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pluginsId = '{{ pluginsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

List all the plugins in a given project and location.

```sql
SELECT
name,
actionsConfig,
configTemplate,
createTime,
description,
displayName,
documentation,
gatewayType,
hostingService,
ownershipType,
pluginCategory,
state,
type,
updateTime
FROM google.apihub.plugins
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Create an API Hub plugin resource in the API hub. Once a plugin is created, it can be used to create plugin instances.

```sql
INSERT INTO google.apihub.plugins (
data__actionsConfig,
data__configTemplate,
data__description,
data__displayName,
data__documentation,
data__gatewayType,
data__hostingService,
data__name,
data__pluginCategory,
data__type,
projectsId,
locationsId,
pluginId
)
SELECT 
'{{ actionsConfig }}',
'{{ configTemplate }}',
'{{ description }}',
'{{ displayName }}',
'{{ documentation }}',
'{{ gatewayType }}',
'{{ hostingService }}',
'{{ name }}',
'{{ pluginCategory }}',
'{{ type }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ pluginId }}'
RETURNING
name,
actionsConfig,
configTemplate,
createTime,
description,
displayName,
documentation,
gatewayType,
hostingService,
ownershipType,
pluginCategory,
state,
type,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: plugins
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the plugins resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the plugins resource.
    - name: actionsConfig
      description: |
        Optional. The configuration of actions supported by the plugin. **REQUIRED**: This field must be provided when creating or updating a Plugin. The server will reject requests if this field is missing.
      value:
        - description: "{{ description }}"
          displayName: "{{ displayName }}"
          id: "{{ id }}"
          triggerMode: "{{ triggerMode }}"
    - name: configTemplate
      description: |
        Optional. The configuration template for the plugin.
      value:
        additionalConfigTemplate:
          - description: "{{ description }}"
            enumOptions: "{{ enumOptions }}"
            id: "{{ id }}"
            multiSelectOptions: "{{ multiSelectOptions }}"
            required: {{ required }}
            validationRegex: "{{ validationRegex }}"
            valueType: "{{ valueType }}"
        authConfigTemplate:
          serviceAccount:
            serviceAccount: "{{ serviceAccount }}"
          supportedAuthTypes:
            - "{{ supportedAuthTypes }}"
    - name: description
      value: "{{ description }}"
      description: |
        Optional. The plugin description. Max length is 2000 characters (Unicode code points).
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. The display name of the plugin. Max length is 50 characters (Unicode code points).
    - name: documentation
      description: |
        Optional. The documentation of the plugin, that explains how to set up and use the plugin.
      value:
        externalUri: "{{ externalUri }}"
    - name: gatewayType
      value: "{{ gatewayType }}"
      description: |
        Optional. The type of the gateway.
      valid_values: ['GATEWAY_TYPE_UNSPECIFIED', 'APIGEE_X_AND_HYBRID', 'APIGEE_EDGE_PUBLIC_CLOUD', 'APIGEE_EDGE_PRIVATE_CLOUD', 'CLOUD_API_GATEWAY', 'CLOUD_ENDPOINTS', 'API_DISCOVERY', 'OTHERS', 'AWS_API_GATEWAY', 'AZURE_API_MANAGEMENT']
    - name: hostingService
      description: |
        Optional. This field is optional. It is used to notify the plugin hosting service for any lifecycle changes of the plugin instance and trigger execution of plugin instance actions in case of API hub managed actions. This field should be provided if the plugin instance lifecycle of the developed plugin needs to be managed from API hub. Also, in this case the plugin hosting service interface needs to be implemented. This field should not be provided if the plugin wants to manage plugin instance lifecycle events outside of hub interface and use plugin framework for only registering of plugin and plugin instances to capture the source of data into hub. Note, in this case the plugin hosting service interface is not required to be implemented. Also, the plugin instance lifecycle actions will be disabled from API hub's UI.
      value:
        serviceUri: "{{ serviceUri }}"
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The name of the plugin. Format: \`projects/{project}/locations/{location}/plugins/{plugin}\`
    - name: pluginCategory
      value: "{{ pluginCategory }}"
      description: |
        Optional. The category of the plugin, identifying its primary category or purpose. This field is required for all plugins.
      valid_values: ['PLUGIN_CATEGORY_UNSPECIFIED', 'API_GATEWAY', 'API_PRODUCER']
    - name: type
      description: |
        The attribute values associated with resource.
      value:
        attribute: "{{ attribute }}"
        enumValues:
          values:
            - description: "{{ description }}"
              displayName: "{{ displayName }}"
              id: "{{ id }}"
              immutable: {{ immutable }}
        jsonValues:
          values:
            - "{{ values }}"
        stringValues:
          values:
            - "{{ values }}"
        uriValues:
          values:
            - "{{ values }}"
    - name: pluginId
      value: "{{ pluginId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Delete a Plugin in API hub. Note, only user owned plugins can be deleted via this method.

```sql
DELETE FROM google.apihub.plugins
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND pluginsId = '{{ pluginsId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable"
    values={[
        { label: 'disable', value: 'disable' },
        { label: 'enable', value: 'enable' }
    ]}
>
<TabItem value="disable">

Disables a plugin. The `state` of the plugin after disabling is `DISABLED`

```sql
EXEC google.apihub.plugins.disable 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@pluginsId='{{ pluginsId }}' --required
;
```
</TabItem>
<TabItem value="enable">

Enables a plugin. The `state` of the plugin after enabling is `ENABLED`

```sql
EXEC google.apihub.plugins.enable 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@pluginsId='{{ pluginsId }}' --required
;
```
</TabItem>
</Tabs>
