--- 
title: sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - sessions
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

Creates, updates, deletes, gets or lists a <code>sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_collections_data_stores_sessions_get"
    values={[
        { label: 'projects_locations_collections_data_stores_sessions_get', value: 'projects_locations_collections_data_stores_sessions_get' },
        { label: 'projects_locations_collections_engines_sessions_get', value: 'projects_locations_collections_engines_sessions_get' },
        { label: 'projects_locations_data_stores_sessions_get', value: 'projects_locations_data_stores_sessions_get' },
        { label: 'projects_locations_collections_data_stores_sessions_list', value: 'projects_locations_collections_data_stores_sessions_list' },
        { label: 'projects_locations_collections_engines_sessions_list', value: 'projects_locations_collections_engines_sessions_list' },
        { label: 'projects_locations_data_stores_sessions_list', value: 'projects_locations_data_stores_sessions_list' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_sessions_get">

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
    <td>Immutable. Fully qualified name `projects/&#123;project&#125;/locations/global/collections/&#123;collection&#125;/engines/&#123;engine&#125;/sessions/*`</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The display name of the session. This field is used to identify the session in the UI. By default, the display name is the first turn query text in the session.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the session finished.</td>
</tr>
<tr>
    <td><CopyableCode code="isPinned" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the session is pinned, pinned session will be displayed on the top of the session list.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>array</code></td>
    <td>Optional. The labels for the session. Can be set as filter in ListSessionsRequest.</td>
</tr>
<tr>
    <td><CopyableCode code="pendingAsyncAssistOperationId" /></td>
    <td><code>string</code></td>
    <td>Output only. Full resource name of an in-progress AsyncAssist operation for this session, e.g. `projects/*/locations/*/collections/*/engines/*/sessions/*/operations/*`. Set when the operation starts and cleared when it finishes.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the session started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the session. (STATE_UNSPECIFIED, IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="turns" /></td>
    <td><code>array</code></td>
    <td>Turns.</td>
</tr>
<tr>
    <td><CopyableCode code="userPseudoId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for tracking users.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_collections_engines_sessions_get">

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
    <td>Immutable. Fully qualified name `projects/&#123;project&#125;/locations/global/collections/&#123;collection&#125;/engines/&#123;engine&#125;/sessions/*`</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The display name of the session. This field is used to identify the session in the UI. By default, the display name is the first turn query text in the session.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the session finished.</td>
</tr>
<tr>
    <td><CopyableCode code="isPinned" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the session is pinned, pinned session will be displayed on the top of the session list.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>array</code></td>
    <td>Optional. The labels for the session. Can be set as filter in ListSessionsRequest.</td>
</tr>
<tr>
    <td><CopyableCode code="pendingAsyncAssistOperationId" /></td>
    <td><code>string</code></td>
    <td>Output only. Full resource name of an in-progress AsyncAssist operation for this session, e.g. `projects/*/locations/*/collections/*/engines/*/sessions/*/operations/*`. Set when the operation starts and cleared when it finishes.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the session started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the session. (STATE_UNSPECIFIED, IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="turns" /></td>
    <td><code>array</code></td>
    <td>Turns.</td>
</tr>
<tr>
    <td><CopyableCode code="userPseudoId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for tracking users.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_stores_sessions_get">

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
    <td>Immutable. Fully qualified name `projects/&#123;project&#125;/locations/global/collections/&#123;collection&#125;/engines/&#123;engine&#125;/sessions/*`</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The display name of the session. This field is used to identify the session in the UI. By default, the display name is the first turn query text in the session.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the session finished.</td>
</tr>
<tr>
    <td><CopyableCode code="isPinned" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the session is pinned, pinned session will be displayed on the top of the session list.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>array</code></td>
    <td>Optional. The labels for the session. Can be set as filter in ListSessionsRequest.</td>
</tr>
<tr>
    <td><CopyableCode code="pendingAsyncAssistOperationId" /></td>
    <td><code>string</code></td>
    <td>Output only. Full resource name of an in-progress AsyncAssist operation for this session, e.g. `projects/*/locations/*/collections/*/engines/*/sessions/*/operations/*`. Set when the operation starts and cleared when it finishes.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the session started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the session. (STATE_UNSPECIFIED, IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="turns" /></td>
    <td><code>array</code></td>
    <td>Turns.</td>
</tr>
<tr>
    <td><CopyableCode code="userPseudoId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for tracking users.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_collections_data_stores_sessions_list">

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
    <td>Immutable. Fully qualified name `projects/&#123;project&#125;/locations/global/collections/&#123;collection&#125;/engines/&#123;engine&#125;/sessions/*`</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The display name of the session. This field is used to identify the session in the UI. By default, the display name is the first turn query text in the session.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the session finished.</td>
</tr>
<tr>
    <td><CopyableCode code="isPinned" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the session is pinned, pinned session will be displayed on the top of the session list.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>array</code></td>
    <td>Optional. The labels for the session. Can be set as filter in ListSessionsRequest.</td>
</tr>
<tr>
    <td><CopyableCode code="pendingAsyncAssistOperationId" /></td>
    <td><code>string</code></td>
    <td>Output only. Full resource name of an in-progress AsyncAssist operation for this session, e.g. `projects/*/locations/*/collections/*/engines/*/sessions/*/operations/*`. Set when the operation starts and cleared when it finishes.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the session started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the session. (STATE_UNSPECIFIED, IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="turns" /></td>
    <td><code>array</code></td>
    <td>Turns.</td>
</tr>
<tr>
    <td><CopyableCode code="userPseudoId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for tracking users.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_collections_engines_sessions_list">

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
    <td>Immutable. Fully qualified name `projects/&#123;project&#125;/locations/global/collections/&#123;collection&#125;/engines/&#123;engine&#125;/sessions/*`</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The display name of the session. This field is used to identify the session in the UI. By default, the display name is the first turn query text in the session.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the session finished.</td>
</tr>
<tr>
    <td><CopyableCode code="isPinned" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the session is pinned, pinned session will be displayed on the top of the session list.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>array</code></td>
    <td>Optional. The labels for the session. Can be set as filter in ListSessionsRequest.</td>
</tr>
<tr>
    <td><CopyableCode code="pendingAsyncAssistOperationId" /></td>
    <td><code>string</code></td>
    <td>Output only. Full resource name of an in-progress AsyncAssist operation for this session, e.g. `projects/*/locations/*/collections/*/engines/*/sessions/*/operations/*`. Set when the operation starts and cleared when it finishes.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the session started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the session. (STATE_UNSPECIFIED, IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="turns" /></td>
    <td><code>array</code></td>
    <td>Turns.</td>
</tr>
<tr>
    <td><CopyableCode code="userPseudoId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for tracking users.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_stores_sessions_list">

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
    <td>Immutable. Fully qualified name `projects/&#123;project&#125;/locations/global/collections/&#123;collection&#125;/engines/&#123;engine&#125;/sessions/*`</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The display name of the session. This field is used to identify the session in the UI. By default, the display name is the first turn query text in the session.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the session finished.</td>
</tr>
<tr>
    <td><CopyableCode code="isPinned" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the session is pinned, pinned session will be displayed on the top of the session list.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>array</code></td>
    <td>Optional. The labels for the session. Can be set as filter in ListSessionsRequest.</td>
</tr>
<tr>
    <td><CopyableCode code="pendingAsyncAssistOperationId" /></td>
    <td><code>string</code></td>
    <td>Output only. Full resource name of an in-progress AsyncAssist operation for this session, e.g. `projects/*/locations/*/collections/*/engines/*/sessions/*/operations/*`. Set when the operation starts and cleared when it finishes.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the session started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the session. (STATE_UNSPECIFIED, IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="turns" /></td>
    <td><code>array</code></td>
    <td>Turns.</td>
</tr>
<tr>
    <td><CopyableCode code="userPseudoId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for tracking users.</td>
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
    <td><a href="#projects_locations_collections_data_stores_sessions_get"><CopyableCode code="projects_locations_collections_data_stores_sessions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td><a href="#parameter-includeAnswerDetails"><code>includeAnswerDetails</code></a></td>
    <td>Gets a Session.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_sessions_get"><CopyableCode code="projects_locations_collections_engines_sessions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td><a href="#parameter-includeAnswerDetails"><code>includeAnswerDetails</code></a></td>
    <td>Gets a Session.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_sessions_get"><CopyableCode code="projects_locations_data_stores_sessions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td><a href="#parameter-includeAnswerDetails"><code>includeAnswerDetails</code></a></td>
    <td>Gets a Session.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_sessions_list"><CopyableCode code="projects_locations_collections_data_stores_sessions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists all Sessions by their parent DataStore.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_sessions_list"><CopyableCode code="projects_locations_collections_engines_sessions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all Sessions by their parent DataStore.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_sessions_list"><CopyableCode code="projects_locations_data_stores_sessions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists all Sessions by their parent DataStore.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_sessions_create"><CopyableCode code="projects_locations_collections_data_stores_sessions_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td><a href="#parameter-sessionId"><code>sessionId</code></a></td>
    <td>Creates a Session. If the Session to create already exists, an ALREADY_EXISTS error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_sessions_create"><CopyableCode code="projects_locations_collections_engines_sessions_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a></td>
    <td><a href="#parameter-sessionId"><code>sessionId</code></a></td>
    <td>Creates a Session. If the Session to create already exists, an ALREADY_EXISTS error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_sessions_create"><CopyableCode code="projects_locations_data_stores_sessions_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td><a href="#parameter-sessionId"><code>sessionId</code></a></td>
    <td>Creates a Session. If the Session to create already exists, an ALREADY_EXISTS error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_sessions_patch"><CopyableCode code="projects_locations_collections_data_stores_sessions_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a Session. Session action type cannot be changed. If the Session to update does not exist, a NOT_FOUND error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_sessions_patch"><CopyableCode code="projects_locations_collections_engines_sessions_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a Session. Session action type cannot be changed. If the Session to update does not exist, a NOT_FOUND error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_sessions_patch"><CopyableCode code="projects_locations_data_stores_sessions_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a Session. Session action type cannot be changed. If the Session to update does not exist, a NOT_FOUND error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_sessions_delete"><CopyableCode code="projects_locations_collections_data_stores_sessions_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Deletes a Session. If the Session to delete does not exist, a NOT_FOUND error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_sessions_delete"><CopyableCode code="projects_locations_collections_engines_sessions_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Deletes a Session. If the Session to delete does not exist, a NOT_FOUND error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_sessions_delete"><CopyableCode code="projects_locations_data_stores_sessions_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-sessionsId"><code>sessionsId</code></a></td>
    <td></td>
    <td>Deletes a Session. If the Session to delete does not exist, a NOT_FOUND error is returned.</td>
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
<tr id="parameter-collectionsId">
    <td><CopyableCode code="collectionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-dataStoresId">
    <td><CopyableCode code="dataStoresId" /></td>
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
<tr id="parameter-sessionsId">
    <td><CopyableCode code="sessionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includeAnswerDetails">
    <td><CopyableCode code="includeAnswerDetails" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
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
<tr id="parameter-sessionId">
    <td><CopyableCode code="sessionId" /></td>
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
    defaultValue="projects_locations_collections_data_stores_sessions_get"
    values={[
        { label: 'projects_locations_collections_data_stores_sessions_get', value: 'projects_locations_collections_data_stores_sessions_get' },
        { label: 'projects_locations_collections_engines_sessions_get', value: 'projects_locations_collections_engines_sessions_get' },
        { label: 'projects_locations_data_stores_sessions_get', value: 'projects_locations_data_stores_sessions_get' },
        { label: 'projects_locations_collections_data_stores_sessions_list', value: 'projects_locations_collections_data_stores_sessions_list' },
        { label: 'projects_locations_collections_engines_sessions_list', value: 'projects_locations_collections_engines_sessions_list' },
        { label: 'projects_locations_data_stores_sessions_list', value: 'projects_locations_data_stores_sessions_list' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_sessions_get">

Gets a Session.

```sql
SELECT
name,
displayName,
endTime,
isPinned,
labels,
pendingAsyncAssistOperationId,
startTime,
state,
turns,
userPseudoId
FROM google.discoveryengine.sessions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND sessionsId = '{{ sessionsId }}' -- required
AND includeAnswerDetails = '{{ includeAnswerDetails }}'
;
```
</TabItem>
<TabItem value="projects_locations_collections_engines_sessions_get">

Gets a Session.

```sql
SELECT
name,
displayName,
endTime,
isPinned,
labels,
pendingAsyncAssistOperationId,
startTime,
state,
turns,
userPseudoId
FROM google.discoveryengine.sessions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND enginesId = '{{ enginesId }}' -- required
AND sessionsId = '{{ sessionsId }}' -- required
AND includeAnswerDetails = '{{ includeAnswerDetails }}'
;
```
</TabItem>
<TabItem value="projects_locations_data_stores_sessions_get">

Gets a Session.

```sql
SELECT
name,
displayName,
endTime,
isPinned,
labels,
pendingAsyncAssistOperationId,
startTime,
state,
turns,
userPseudoId
FROM google.discoveryengine.sessions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND sessionsId = '{{ sessionsId }}' -- required
AND includeAnswerDetails = '{{ includeAnswerDetails }}'
;
```
</TabItem>
<TabItem value="projects_locations_collections_data_stores_sessions_list">

Lists all Sessions by their parent DataStore.

```sql
SELECT
name,
displayName,
endTime,
isPinned,
labels,
pendingAsyncAssistOperationId,
startTime,
state,
turns,
userPseudoId
FROM google.discoveryengine.sessions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
;
```
</TabItem>
<TabItem value="projects_locations_collections_engines_sessions_list">

Lists all Sessions by their parent DataStore.

```sql
SELECT
name,
displayName,
endTime,
isPinned,
labels,
pendingAsyncAssistOperationId,
startTime,
state,
turns,
userPseudoId
FROM google.discoveryengine.sessions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND enginesId = '{{ enginesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
<TabItem value="projects_locations_data_stores_sessions_list">

Lists all Sessions by their parent DataStore.

```sql
SELECT
name,
displayName,
endTime,
isPinned,
labels,
pendingAsyncAssistOperationId,
startTime,
state,
turns,
userPseudoId
FROM google.discoveryengine.sessions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_sessions_create"
    values={[
        { label: 'projects_locations_collections_data_stores_sessions_create', value: 'projects_locations_collections_data_stores_sessions_create' },
        { label: 'projects_locations_collections_engines_sessions_create', value: 'projects_locations_collections_engines_sessions_create' },
        { label: 'projects_locations_data_stores_sessions_create', value: 'projects_locations_data_stores_sessions_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_sessions_create">

Creates a Session. If the Session to create already exists, an ALREADY_EXISTS error is returned.

```sql
INSERT INTO google.discoveryengine.sessions (
data__isPinned,
data__userPseudoId,
data__labels,
data__state,
data__turns,
data__name,
data__displayName,
projectsId,
locationsId,
collectionsId,
dataStoresId,
sessionId
)
SELECT 
{{ isPinned }},
'{{ userPseudoId }}',
'{{ labels }}',
'{{ state }}',
'{{ turns }}',
'{{ name }}',
'{{ displayName }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ collectionsId }}',
'{{ dataStoresId }}',
'{{ sessionId }}'
RETURNING
name,
displayName,
endTime,
isPinned,
labels,
pendingAsyncAssistOperationId,
startTime,
state,
turns,
userPseudoId
;
```
</TabItem>
<TabItem value="projects_locations_collections_engines_sessions_create">

Creates a Session. If the Session to create already exists, an ALREADY_EXISTS error is returned.

```sql
INSERT INTO google.discoveryengine.sessions (
data__isPinned,
data__userPseudoId,
data__labels,
data__state,
data__turns,
data__name,
data__displayName,
projectsId,
locationsId,
collectionsId,
enginesId,
sessionId
)
SELECT 
{{ isPinned }},
'{{ userPseudoId }}',
'{{ labels }}',
'{{ state }}',
'{{ turns }}',
'{{ name }}',
'{{ displayName }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ collectionsId }}',
'{{ enginesId }}',
'{{ sessionId }}'
RETURNING
name,
displayName,
endTime,
isPinned,
labels,
pendingAsyncAssistOperationId,
startTime,
state,
turns,
userPseudoId
;
```
</TabItem>
<TabItem value="projects_locations_data_stores_sessions_create">

Creates a Session. If the Session to create already exists, an ALREADY_EXISTS error is returned.

```sql
INSERT INTO google.discoveryengine.sessions (
data__isPinned,
data__userPseudoId,
data__labels,
data__state,
data__turns,
data__name,
data__displayName,
projectsId,
locationsId,
dataStoresId,
sessionId
)
SELECT 
{{ isPinned }},
'{{ userPseudoId }}',
'{{ labels }}',
'{{ state }}',
'{{ turns }}',
'{{ name }}',
'{{ displayName }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ dataStoresId }}',
'{{ sessionId }}'
RETURNING
name,
displayName,
endTime,
isPinned,
labels,
pendingAsyncAssistOperationId,
startTime,
state,
turns,
userPseudoId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sessions
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the sessions resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the sessions resource.
    - name: collectionsId
      value: "{{ collectionsId }}"
      description: Required parameter for the sessions resource.
    - name: dataStoresId
      value: "{{ dataStoresId }}"
      description: Required parameter for the sessions resource.
    - name: enginesId
      value: "{{ enginesId }}"
      description: Required parameter for the sessions resource.
    - name: isPinned
      value: {{ isPinned }}
      description: |
        Optional. Whether the session is pinned, pinned session will be displayed on the top of the session list.
    - name: userPseudoId
      value: "{{ userPseudoId }}"
      description: |
        A unique identifier for tracking users.
    - name: labels
      value:
        - "{{ labels }}"
      description: |
        Optional. The labels for the session. Can be set as filter in ListSessionsRequest.
    - name: state
      value: "{{ state }}"
      description: |
        The state of the session.
      valid_values: ['STATE_UNSPECIFIED', 'IN_PROGRESS']
    - name: turns
      description: |
        Turns.
      value:
        - detailedAssistAnswer:
            assistSkippedReasons:
              - "{{ assistSkippedReasons }}"
            replies:
              - createTime: "{{ createTime }}"
                groundedContent:
                  textGroundingMetadata:
                    visualSegments: "{{ visualSegments }}"
                    segments: "{{ segments }}"
                    references: "{{ references }}"
                  content:
                    text: "{{ text }}"
                    codeExecutionResult: "{{ codeExecutionResult }}"
                    executableCode: "{{ executableCode }}"
                    file: "{{ file }}"
                    thought: {{ thought }}
                    inlineData: "{{ inlineData }}"
                    role: "{{ role }}"
                  citationMetadata:
                    citations: "{{ citations }}"
            customerPolicyEnforcementResult:
              verdict: "{{ verdict }}"
              policyResults:
                - bannedPhraseEnforcementResult:
                    bannedPhrases: "{{ bannedPhrases }}"
                  modelArmorEnforcementResult:
                    modelArmorViolation: "{{ modelArmorViolation }}"
                    error: "{{ error }}"
            state: "{{ state }}"
            name: "{{ name }}"
          live: {{ live }}
          query:
            text: "{{ text }}"
            queryId: "{{ queryId }}"
          queryConfig: "{{ queryConfig }}"
          answer: "{{ answer }}"
          detailedAnswer:
            name: "{{ name }}"
            createTime: "{{ createTime }}"
            safetyRatings:
              - probability: "{{ probability }}"
                severityScore: {{ severityScore }}
                severity: "{{ severity }}"
                blocked: {{ blocked }}
                category: "{{ category }}"
                probabilityScore: {{ probabilityScore }}
            citations:
              - endIndex: "{{ endIndex }}"
                startIndex: "{{ startIndex }}"
                sources: "{{ sources }}"
            answerText: "{{ answerText }}"
            groundingSupports:
              - endIndex: "{{ endIndex }}"
                groundingScore: {{ groundingScore }}
                groundingCheckRequired: {{ groundingCheckRequired }}
                startIndex: "{{ startIndex }}"
                sources: "{{ sources }}"
            references:
              - unstructuredDocumentInfo:
                  chunkContents:
                    - pageIdentifier: "{{ pageIdentifier }}"
                      relevanceScore: {{ relevanceScore }}
                      content: "{{ content }}"
                  document: "{{ document }}"
                  uri: "{{ uri }}"
                  title: "{{ title }}"
                  structData: "{{ structData }}"
                chunkInfo:
                  relevanceScore: {{ relevanceScore }}
                  chunk: "{{ chunk }}"
                  content: "{{ content }}"
                  documentMetadata:
                    pageIdentifier: "{{ pageIdentifier }}"
                    document: "{{ document }}"
                    uri: "{{ uri }}"
                    title: "{{ title }}"
                    structData: "{{ structData }}"
                structuredDocumentInfo:
                  structData: "{{ structData }}"
                  document: "{{ document }}"
                  title: "{{ title }}"
                  uri: "{{ uri }}"
            completeTime: "{{ completeTime }}"
            queryUnderstandingInfo:
              queryClassificationInfo:
                - type: "{{ type }}"
                  positive: {{ positive }}
            state: "{{ state }}"
            steps:
              - description: "{{ description }}"
                actions: "{{ actions }}"
                thought: "{{ thought }}"
                state: "{{ state }}"
            groundingScore: {{ groundingScore }}
            answerSkippedReasons:
              - "{{ answerSkippedReasons }}"
            relatedQuestions:
              - "{{ relatedQuestions }}"
    - name: name
      value: "{{ name }}"
      description: |
        Immutable. Fully qualified name \`projects/{project}/locations/global/collections/{collection}/engines/{engine}/sessions/*\`
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Optional. The display name of the session. This field is used to identify the session in the UI. By default, the display name is the first turn query text in the session.
    - name: sessionId
      value: "{{ sessionId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_sessions_patch"
    values={[
        { label: 'projects_locations_collections_data_stores_sessions_patch', value: 'projects_locations_collections_data_stores_sessions_patch' },
        { label: 'projects_locations_collections_engines_sessions_patch', value: 'projects_locations_collections_engines_sessions_patch' },
        { label: 'projects_locations_data_stores_sessions_patch', value: 'projects_locations_data_stores_sessions_patch' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_sessions_patch">

Updates a Session. Session action type cannot be changed. If the Session to update does not exist, a NOT_FOUND error is returned.

```sql
UPDATE google.discoveryengine.sessions
SET 
data__isPinned = {{ isPinned }},
data__userPseudoId = '{{ userPseudoId }}',
data__labels = '{{ labels }}',
data__state = '{{ state }}',
data__turns = '{{ turns }}',
data__name = '{{ name }}',
data__displayName = '{{ displayName }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND sessionsId = '{{ sessionsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
displayName,
endTime,
isPinned,
labels,
pendingAsyncAssistOperationId,
startTime,
state,
turns,
userPseudoId;
```
</TabItem>
<TabItem value="projects_locations_collections_engines_sessions_patch">

Updates a Session. Session action type cannot be changed. If the Session to update does not exist, a NOT_FOUND error is returned.

```sql
UPDATE google.discoveryengine.sessions
SET 
data__isPinned = {{ isPinned }},
data__userPseudoId = '{{ userPseudoId }}',
data__labels = '{{ labels }}',
data__state = '{{ state }}',
data__turns = '{{ turns }}',
data__name = '{{ name }}',
data__displayName = '{{ displayName }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND enginesId = '{{ enginesId }}' --required
AND sessionsId = '{{ sessionsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
displayName,
endTime,
isPinned,
labels,
pendingAsyncAssistOperationId,
startTime,
state,
turns,
userPseudoId;
```
</TabItem>
<TabItem value="projects_locations_data_stores_sessions_patch">

Updates a Session. Session action type cannot be changed. If the Session to update does not exist, a NOT_FOUND error is returned.

```sql
UPDATE google.discoveryengine.sessions
SET 
data__isPinned = {{ isPinned }},
data__userPseudoId = '{{ userPseudoId }}',
data__labels = '{{ labels }}',
data__state = '{{ state }}',
data__turns = '{{ turns }}',
data__name = '{{ name }}',
data__displayName = '{{ displayName }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND sessionsId = '{{ sessionsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
displayName,
endTime,
isPinned,
labels,
pendingAsyncAssistOperationId,
startTime,
state,
turns,
userPseudoId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_sessions_delete"
    values={[
        { label: 'projects_locations_collections_data_stores_sessions_delete', value: 'projects_locations_collections_data_stores_sessions_delete' },
        { label: 'projects_locations_collections_engines_sessions_delete', value: 'projects_locations_collections_engines_sessions_delete' },
        { label: 'projects_locations_data_stores_sessions_delete', value: 'projects_locations_data_stores_sessions_delete' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_sessions_delete">

Deletes a Session. If the Session to delete does not exist, a NOT_FOUND error is returned.

```sql
DELETE FROM google.discoveryengine.sessions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND sessionsId = '{{ sessionsId }}' --required
;
```
</TabItem>
<TabItem value="projects_locations_collections_engines_sessions_delete">

Deletes a Session. If the Session to delete does not exist, a NOT_FOUND error is returned.

```sql
DELETE FROM google.discoveryengine.sessions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND enginesId = '{{ enginesId }}' --required
AND sessionsId = '{{ sessionsId }}' --required
;
```
</TabItem>
<TabItem value="projects_locations_data_stores_sessions_delete">

Deletes a Session. If the Session to delete does not exist, a NOT_FOUND error is returned.

```sql
DELETE FROM google.discoveryengine.sessions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND sessionsId = '{{ sessionsId }}' --required
;
```
</TabItem>
</Tabs>
