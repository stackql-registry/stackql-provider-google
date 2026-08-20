--- 
title: message
hide_title: false
hide_table_of_contents: false
keywords:
  - message
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

Creates, updates, deletes, gets or lists a <code>message</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="message" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.message" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#projects_locations_collections_engines_assistants_agents_a2a_v1_message_send"><CopyableCode code="projects_locations_collections_engines_assistants_agents_a2a_v1_message_send" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-assistantsId"><code>assistantsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td>Send a message to the agent. This is a blocking call that will return the task once it is completed, or a LRO if requested.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_assistants_agents_a2a_v1_message_stream"><CopyableCode code="projects_locations_collections_engines_assistants_agents_a2a_v1_message_stream" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-assistantsId"><code>assistantsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td>SendStreamingMessage is a streaming call that will return a stream of task update events until the Task is in an interrupted or terminal state.</td>
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
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_collections_engines_assistants_agents_a2a_v1_message_send"
    values={[
        { label: 'projects_locations_collections_engines_assistants_agents_a2a_v1_message_send', value: 'projects_locations_collections_engines_assistants_agents_a2a_v1_message_send' },
        { label: 'projects_locations_collections_engines_assistants_agents_a2a_v1_message_stream', value: 'projects_locations_collections_engines_assistants_agents_a2a_v1_message_stream' }
    ]}
>
<TabItem value="projects_locations_collections_engines_assistants_agents_a2a_v1_message_send">

Send a message to the agent. This is a blocking call that will return the task once it is completed, or a LRO if requested.

```sql
EXEC google.discoveryengine.message.projects_locations_collections_engines_assistants_agents_a2a_v1_message_send 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@enginesId='{{ enginesId }}' --required, 
@assistantsId='{{ assistantsId }}' --required, 
@agentsId='{{ agentsId }}' --required 
@@json=
'{
"configuration": "{{ configuration }}", 
"message": "{{ message }}", 
"metadata": "{{ metadata }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_collections_engines_assistants_agents_a2a_v1_message_stream">

SendStreamingMessage is a streaming call that will return a stream of task update events until the Task is in an interrupted or terminal state.

```sql
EXEC google.discoveryengine.message.projects_locations_collections_engines_assistants_agents_a2a_v1_message_stream 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@enginesId='{{ enginesId }}' --required, 
@assistantsId='{{ assistantsId }}' --required, 
@agentsId='{{ agentsId }}' --required 
@@json=
'{
"configuration": "{{ configuration }}", 
"message": "{{ message }}", 
"metadata": "{{ metadata }}"
}'
;
```
</TabItem>
</Tabs>
