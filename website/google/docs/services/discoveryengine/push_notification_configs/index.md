--- 
title: push_notification_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - push_notification_configs
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
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>push_notification_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="push_notification_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.push_notification_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_get"
    values={[
        { label: 'projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_get', value: 'projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_get' },
        { label: 'projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_list', value: 'projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_list' }
    ]}
>
<TabItem value="projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_get">

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
    <td>The resource name of the config. Format: tasks/&#123;task_id&#125;/pushNotificationConfigs/&#123;config_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="pushNotificationConfig" /></td>
    <td><code>object</code></td>
    <td>The push notification configuration details. (id: A2aV1PushNotificationConfig)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_list">

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
    <td>The resource name of the config. Format: tasks/&#123;task_id&#125;/pushNotificationConfigs/&#123;config_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="pushNotificationConfig" /></td>
    <td><code>object</code></td>
    <td>The push notification configuration details. (id: A2aV1PushNotificationConfig)</td>
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
    <td><a href="#projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_get"><CopyableCode code="projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-assistantsId"><code>assistantsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-tasksId"><code>tasksId</code></a>, <a href="#parameter-pushNotificationConfigsId"><code>pushNotificationConfigsId</code></a></td>
    <td></td>
    <td>Get a push notification config for a task.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_list"><CopyableCode code="projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-assistantsId"><code>assistantsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-tasksId"><code>tasksId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Get a list of push notifications configured for a task.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_create"><CopyableCode code="projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-assistantsId"><code>assistantsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-tasksId"><code>tasksId</code></a></td>
    <td><a href="#parameter-configId"><code>configId</code></a></td>
    <td>Set a push notification config for a task.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_delete"><CopyableCode code="projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-assistantsId"><code>assistantsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-tasksId"><code>tasksId</code></a>, <a href="#parameter-pushNotificationConfigsId"><code>pushNotificationConfigsId</code></a></td>
    <td></td>
    <td>Delete a push notification config for a task.</td>
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
<tr id="parameter-agentsId">
    <td><CopyableCode code="agentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-assistantsId">
    <td><CopyableCode code="assistantsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-collectionsId">
    <td><CopyableCode code="collectionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-enginesId">
    <td><CopyableCode code="enginesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-pushNotificationConfigsId">
    <td><CopyableCode code="pushNotificationConfigsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-tasksId">
    <td><CopyableCode code="tasksId" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_get"
    values={[
        { label: 'projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_get', value: 'projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_get' },
        { label: 'projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_list', value: 'projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_list' }
    ]}
>
<TabItem value="projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_get">

Get a push notification config for a task.

```sql
SELECT
name,
pushNotificationConfig
FROM google.discoveryengine.push_notification_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND enginesId = '{{ enginesId }}' -- required
AND assistantsId = '{{ assistantsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND tasksId = '{{ tasksId }}' -- required
AND pushNotificationConfigsId = '{{ pushNotificationConfigsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_list">

Get a list of push notifications configured for a task.

```sql
SELECT
name,
pushNotificationConfig
FROM google.discoveryengine.push_notification_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND enginesId = '{{ enginesId }}' -- required
AND assistantsId = '{{ assistantsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND tasksId = '{{ tasksId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_create"
    values={[
        { label: 'projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_create', value: 'projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_create">

Set a push notification config for a task.

```sql
INSERT INTO google.discoveryengine.push_notification_configs (
data__name,
data__pushNotificationConfig,
projectsId,
locationsId,
collectionsId,
enginesId,
assistantsId,
agentsId,
tasksId,
configId
)
SELECT 
'{{ name }}',
'{{ pushNotificationConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ collectionsId }}',
'{{ enginesId }}',
'{{ assistantsId }}',
'{{ agentsId }}',
'{{ tasksId }}',
'{{ configId }}'
RETURNING
name,
pushNotificationConfig
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: push_notification_configs
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the push_notification_configs resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the push_notification_configs resource.
    - name: collectionsId
      value: "{{ collectionsId }}"
      description: Required parameter for the push_notification_configs resource.
    - name: enginesId
      value: "{{ enginesId }}"
      description: Required parameter for the push_notification_configs resource.
    - name: assistantsId
      value: "{{ assistantsId }}"
      description: Required parameter for the push_notification_configs resource.
    - name: agentsId
      value: "{{ agentsId }}"
      description: Required parameter for the push_notification_configs resource.
    - name: tasksId
      value: "{{ tasksId }}"
      description: Required parameter for the push_notification_configs resource.
    - name: name
      value: "{{ name }}"
      description: |
        The resource name of the config. Format: tasks/{task_id}/pushNotificationConfigs/{config_id}
    - name: pushNotificationConfig
      description: |
        The push notification configuration details.
      value:
        token: "{{ token }}"
        url: "{{ url }}"
        id: "{{ id }}"
        authentication:
          credentials: "{{ credentials }}"
          schemes:
            - "{{ schemes }}"
    - name: configId
      value: "{{ configId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_delete"
    values={[
        { label: 'projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_delete', value: 'projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_delete' }
    ]}
>
<TabItem value="projects_locations_collections_engines_assistants_agents_a2a_v1_tasks_push_notification_configs_delete">

Delete a push notification config for a task.

```sql
DELETE FROM google.discoveryengine.push_notification_configs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND enginesId = '{{ enginesId }}' --required
AND assistantsId = '{{ assistantsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND tasksId = '{{ tasksId }}' --required
AND pushNotificationConfigsId = '{{ pushNotificationConfigsId }}' --required
;
```
</TabItem>
</Tabs>
