--- 
title: mute_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - mute_configs
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

Creates, updates, deletes, gets or lists a <code>mute_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mute_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securitycenter.mute_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="folders_locations_mute_configs_get"
    values={[
        { label: 'folders_locations_mute_configs_get', value: 'folders_locations_mute_configs_get' },
        { label: 'organizations_locations_mute_configs_get', value: 'organizations_locations_mute_configs_get' },
        { label: 'projects_locations_mute_configs_get', value: 'projects_locations_mute_configs_get' },
        { label: 'folders_mute_configs_get', value: 'folders_mute_configs_get' },
        { label: 'organizations_mute_configs_get', value: 'organizations_mute_configs_get' },
        { label: 'projects_mute_configs_get', value: 'projects_mute_configs_get' },
        { label: 'folders_mute_configs_list', value: 'folders_mute_configs_list' },
        { label: 'organizations_mute_configs_list', value: 'organizations_mute_configs_list' },
        { label: 'projects_mute_configs_list', value: 'projects_mute_configs_list' }
    ]}
>
<TabItem value="folders_locations_mute_configs_get">

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
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
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
    <td><CopyableCode code="expiryTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="mostRecentEditor" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (MUTE_CONFIG_TYPE_UNSPECIFIED, STATIC, DYNAMIC)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_mute_configs_get">

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
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
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
    <td><CopyableCode code="expiryTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="mostRecentEditor" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (MUTE_CONFIG_TYPE_UNSPECIFIED, STATIC, DYNAMIC)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_mute_configs_get">

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
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
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
    <td><CopyableCode code="expiryTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="mostRecentEditor" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (MUTE_CONFIG_TYPE_UNSPECIFIED, STATIC, DYNAMIC)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_mute_configs_get">

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
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
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
    <td><CopyableCode code="expiryTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="mostRecentEditor" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (MUTE_CONFIG_TYPE_UNSPECIFIED, STATIC, DYNAMIC)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_mute_configs_get">

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
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
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
    <td><CopyableCode code="expiryTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="mostRecentEditor" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (MUTE_CONFIG_TYPE_UNSPECIFIED, STATIC, DYNAMIC)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_mute_configs_get">

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
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
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
    <td><CopyableCode code="expiryTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="mostRecentEditor" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (MUTE_CONFIG_TYPE_UNSPECIFIED, STATIC, DYNAMIC)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_mute_configs_list">

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
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
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
    <td><CopyableCode code="expiryTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="mostRecentEditor" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (MUTE_CONFIG_TYPE_UNSPECIFIED, STATIC, DYNAMIC)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_mute_configs_list">

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
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
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
    <td><CopyableCode code="expiryTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="mostRecentEditor" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (MUTE_CONFIG_TYPE_UNSPECIFIED, STATIC, DYNAMIC)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_mute_configs_list">

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
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
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
    <td><CopyableCode code="expiryTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="mostRecentEditor" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (MUTE_CONFIG_TYPE_UNSPECIFIED, STATIC, DYNAMIC)</td>
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
    <td><a href="#folders_locations_mute_configs_get"><CopyableCode code="folders_locations_mute_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-muteConfigsId"><code>muteConfigsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_locations_mute_configs_get"><CopyableCode code="organizations_locations_mute_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-muteConfigsId"><code>muteConfigsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_mute_configs_get"><CopyableCode code="projects_locations_mute_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-muteConfigsId"><code>muteConfigsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_mute_configs_get"><CopyableCode code="folders_mute_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-muteConfigsId"><code>muteConfigsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_mute_configs_get"><CopyableCode code="organizations_mute_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-muteConfigsId"><code>muteConfigsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_mute_configs_get"><CopyableCode code="projects_mute_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-muteConfigsId"><code>muteConfigsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_mute_configs_list"><CopyableCode code="folders_mute_configs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_mute_configs_list"><CopyableCode code="organizations_mute_configs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_mute_configs_list"><CopyableCode code="projects_mute_configs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_mute_configs_create"><CopyableCode code="folders_mute_configs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-muteConfigId"><code>muteConfigId</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_mute_configs_create"><CopyableCode code="organizations_mute_configs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-muteConfigId"><code>muteConfigId</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_mute_configs_create"><CopyableCode code="projects_mute_configs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-muteConfigId"><code>muteConfigId</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_locations_mute_configs_patch"><CopyableCode code="folders_locations_mute_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-muteConfigsId"><code>muteConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_locations_mute_configs_patch"><CopyableCode code="organizations_locations_mute_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-muteConfigsId"><code>muteConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_mute_configs_patch"><CopyableCode code="projects_locations_mute_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-muteConfigsId"><code>muteConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_mute_configs_patch"><CopyableCode code="folders_mute_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-muteConfigsId"><code>muteConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_mute_configs_patch"><CopyableCode code="organizations_mute_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-muteConfigsId"><code>muteConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_mute_configs_patch"><CopyableCode code="projects_mute_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-muteConfigsId"><code>muteConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_locations_mute_configs_delete"><CopyableCode code="folders_locations_mute_configs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-muteConfigsId"><code>muteConfigsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_locations_mute_configs_delete"><CopyableCode code="organizations_locations_mute_configs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-muteConfigsId"><code>muteConfigsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_mute_configs_delete"><CopyableCode code="projects_locations_mute_configs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-muteConfigsId"><code>muteConfigsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_mute_configs_delete"><CopyableCode code="folders_mute_configs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-muteConfigsId"><code>muteConfigsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_mute_configs_delete"><CopyableCode code="organizations_mute_configs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-muteConfigsId"><code>muteConfigsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_mute_configs_delete"><CopyableCode code="projects_mute_configs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-muteConfigsId"><code>muteConfigsId</code></a></td>
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
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-muteConfigsId">
    <td><CopyableCode code="muteConfigsId" /></td>
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
<tr id="parameter-muteConfigId">
    <td><CopyableCode code="muteConfigId" /></td>
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
    defaultValue="folders_locations_mute_configs_get"
    values={[
        { label: 'folders_locations_mute_configs_get', value: 'folders_locations_mute_configs_get' },
        { label: 'organizations_locations_mute_configs_get', value: 'organizations_locations_mute_configs_get' },
        { label: 'projects_locations_mute_configs_get', value: 'projects_locations_mute_configs_get' },
        { label: 'folders_mute_configs_get', value: 'folders_mute_configs_get' },
        { label: 'organizations_mute_configs_get', value: 'organizations_mute_configs_get' },
        { label: 'projects_mute_configs_get', value: 'projects_mute_configs_get' },
        { label: 'folders_mute_configs_list', value: 'folders_mute_configs_list' },
        { label: 'organizations_mute_configs_list', value: 'organizations_mute_configs_list' },
        { label: 'projects_mute_configs_list', value: 'projects_mute_configs_list' }
    ]}
>
<TabItem value="folders_locations_mute_configs_get">

Successful response

```sql
SELECT
name,
createTime,
description,
displayName,
expiryTime,
filter,
mostRecentEditor,
type,
updateTime
FROM google.securitycenter.mute_configs
WHERE foldersId = '{{ foldersId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND muteConfigsId = '{{ muteConfigsId }}' -- required
;
```
</TabItem>
<TabItem value="organizations_locations_mute_configs_get">

Successful response

```sql
SELECT
name,
createTime,
description,
displayName,
expiryTime,
filter,
mostRecentEditor,
type,
updateTime
FROM google.securitycenter.mute_configs
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND muteConfigsId = '{{ muteConfigsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_mute_configs_get">

Successful response

```sql
SELECT
name,
createTime,
description,
displayName,
expiryTime,
filter,
mostRecentEditor,
type,
updateTime
FROM google.securitycenter.mute_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND muteConfigsId = '{{ muteConfigsId }}' -- required
;
```
</TabItem>
<TabItem value="folders_mute_configs_get">

Successful response

```sql
SELECT
name,
createTime,
description,
displayName,
expiryTime,
filter,
mostRecentEditor,
type,
updateTime
FROM google.securitycenter.mute_configs
WHERE foldersId = '{{ foldersId }}' -- required
AND muteConfigsId = '{{ muteConfigsId }}' -- required
;
```
</TabItem>
<TabItem value="organizations_mute_configs_get">

Successful response

```sql
SELECT
name,
createTime,
description,
displayName,
expiryTime,
filter,
mostRecentEditor,
type,
updateTime
FROM google.securitycenter.mute_configs
WHERE organizationsId = '{{ organizationsId }}' -- required
AND muteConfigsId = '{{ muteConfigsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_mute_configs_get">

Successful response

```sql
SELECT
name,
createTime,
description,
displayName,
expiryTime,
filter,
mostRecentEditor,
type,
updateTime
FROM google.securitycenter.mute_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND muteConfigsId = '{{ muteConfigsId }}' -- required
;
```
</TabItem>
<TabItem value="folders_mute_configs_list">

Successful response

```sql
SELECT
name,
createTime,
description,
displayName,
expiryTime,
filter,
mostRecentEditor,
type,
updateTime
FROM google.securitycenter.mute_configs
WHERE foldersId = '{{ foldersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
<TabItem value="organizations_mute_configs_list">

Successful response

```sql
SELECT
name,
createTime,
description,
displayName,
expiryTime,
filter,
mostRecentEditor,
type,
updateTime
FROM google.securitycenter.mute_configs
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
<TabItem value="projects_mute_configs_list">

Successful response

```sql
SELECT
name,
createTime,
description,
displayName,
expiryTime,
filter,
mostRecentEditor,
type,
updateTime
FROM google.securitycenter.mute_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="folders_mute_configs_create"
    values={[
        { label: 'folders_mute_configs_create', value: 'folders_mute_configs_create' },
        { label: 'organizations_mute_configs_create', value: 'organizations_mute_configs_create' },
        { label: 'projects_mute_configs_create', value: 'projects_mute_configs_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="folders_mute_configs_create">

No description available.

```sql
INSERT INTO google.securitycenter.mute_configs (
data__description,
data__displayName,
data__expiryTime,
data__filter,
data__name,
data__type,
foldersId,
muteConfigId
)
SELECT 
'{{ description }}',
'{{ displayName }}',
'{{ expiryTime }}',
'{{ filter }}',
'{{ name }}',
'{{ type }}',
'{{ foldersId }}',
'{{ muteConfigId }}'
RETURNING
name,
createTime,
description,
displayName,
expiryTime,
filter,
mostRecentEditor,
type,
updateTime
;
```
</TabItem>
<TabItem value="organizations_mute_configs_create">

No description available.

```sql
INSERT INTO google.securitycenter.mute_configs (
data__description,
data__displayName,
data__expiryTime,
data__filter,
data__name,
data__type,
organizationsId,
muteConfigId
)
SELECT 
'{{ description }}',
'{{ displayName }}',
'{{ expiryTime }}',
'{{ filter }}',
'{{ name }}',
'{{ type }}',
'{{ organizationsId }}',
'{{ muteConfigId }}'
RETURNING
name,
createTime,
description,
displayName,
expiryTime,
filter,
mostRecentEditor,
type,
updateTime
;
```
</TabItem>
<TabItem value="projects_mute_configs_create">

No description available.

```sql
INSERT INTO google.securitycenter.mute_configs (
data__description,
data__displayName,
data__expiryTime,
data__filter,
data__name,
data__type,
projectsId,
muteConfigId
)
SELECT 
'{{ description }}',
'{{ displayName }}',
'{{ expiryTime }}',
'{{ filter }}',
'{{ name }}',
'{{ type }}',
'{{ projectsId }}',
'{{ muteConfigId }}'
RETURNING
name,
createTime,
description,
displayName,
expiryTime,
filter,
mostRecentEditor,
type,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: mute_configs
  props:
    - name: foldersId
      value: "{{ foldersId }}"
      description: Required parameter for the mute_configs resource.
    - name: organizationsId
      value: "{{ organizationsId }}"
      description: Required parameter for the mute_configs resource.
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the mute_configs resource.
    - name: description
      value: "{{ description }}"
    - name: displayName
      value: "{{ displayName }}"
    - name: expiryTime
      value: "{{ expiryTime }}"
    - name: filter
      value: "{{ filter }}"
    - name: name
      value: "{{ name }}"
    - name: type
      value: "{{ type }}"
      valid_values: ['MUTE_CONFIG_TYPE_UNSPECIFIED', 'STATIC', 'DYNAMIC']
    - name: muteConfigId
      value: "{{ muteConfigId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="folders_locations_mute_configs_patch"
    values={[
        { label: 'folders_locations_mute_configs_patch', value: 'folders_locations_mute_configs_patch' },
        { label: 'organizations_locations_mute_configs_patch', value: 'organizations_locations_mute_configs_patch' },
        { label: 'projects_locations_mute_configs_patch', value: 'projects_locations_mute_configs_patch' },
        { label: 'folders_mute_configs_patch', value: 'folders_mute_configs_patch' },
        { label: 'organizations_mute_configs_patch', value: 'organizations_mute_configs_patch' },
        { label: 'projects_mute_configs_patch', value: 'projects_mute_configs_patch' }
    ]}
>
<TabItem value="folders_locations_mute_configs_patch">

No description available.

```sql
UPDATE google.securitycenter.mute_configs
SET 
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__expiryTime = '{{ expiryTime }}',
data__filter = '{{ filter }}',
data__name = '{{ name }}',
data__type = '{{ type }}'
WHERE 
foldersId = '{{ foldersId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND muteConfigsId = '{{ muteConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
description,
displayName,
expiryTime,
filter,
mostRecentEditor,
type,
updateTime;
```
</TabItem>
<TabItem value="organizations_locations_mute_configs_patch">

No description available.

```sql
UPDATE google.securitycenter.mute_configs
SET 
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__expiryTime = '{{ expiryTime }}',
data__filter = '{{ filter }}',
data__name = '{{ name }}',
data__type = '{{ type }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND muteConfigsId = '{{ muteConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
description,
displayName,
expiryTime,
filter,
mostRecentEditor,
type,
updateTime;
```
</TabItem>
<TabItem value="projects_locations_mute_configs_patch">

No description available.

```sql
UPDATE google.securitycenter.mute_configs
SET 
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__expiryTime = '{{ expiryTime }}',
data__filter = '{{ filter }}',
data__name = '{{ name }}',
data__type = '{{ type }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND muteConfigsId = '{{ muteConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
description,
displayName,
expiryTime,
filter,
mostRecentEditor,
type,
updateTime;
```
</TabItem>
<TabItem value="folders_mute_configs_patch">

No description available.

```sql
UPDATE google.securitycenter.mute_configs
SET 
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__expiryTime = '{{ expiryTime }}',
data__filter = '{{ filter }}',
data__name = '{{ name }}',
data__type = '{{ type }}'
WHERE 
foldersId = '{{ foldersId }}' --required
AND muteConfigsId = '{{ muteConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
description,
displayName,
expiryTime,
filter,
mostRecentEditor,
type,
updateTime;
```
</TabItem>
<TabItem value="organizations_mute_configs_patch">

No description available.

```sql
UPDATE google.securitycenter.mute_configs
SET 
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__expiryTime = '{{ expiryTime }}',
data__filter = '{{ filter }}',
data__name = '{{ name }}',
data__type = '{{ type }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND muteConfigsId = '{{ muteConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
description,
displayName,
expiryTime,
filter,
mostRecentEditor,
type,
updateTime;
```
</TabItem>
<TabItem value="projects_mute_configs_patch">

No description available.

```sql
UPDATE google.securitycenter.mute_configs
SET 
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__expiryTime = '{{ expiryTime }}',
data__filter = '{{ filter }}',
data__name = '{{ name }}',
data__type = '{{ type }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND muteConfigsId = '{{ muteConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
description,
displayName,
expiryTime,
filter,
mostRecentEditor,
type,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="folders_locations_mute_configs_delete"
    values={[
        { label: 'folders_locations_mute_configs_delete', value: 'folders_locations_mute_configs_delete' },
        { label: 'organizations_locations_mute_configs_delete', value: 'organizations_locations_mute_configs_delete' },
        { label: 'projects_locations_mute_configs_delete', value: 'projects_locations_mute_configs_delete' },
        { label: 'folders_mute_configs_delete', value: 'folders_mute_configs_delete' },
        { label: 'organizations_mute_configs_delete', value: 'organizations_mute_configs_delete' },
        { label: 'projects_mute_configs_delete', value: 'projects_mute_configs_delete' }
    ]}
>
<TabItem value="folders_locations_mute_configs_delete">

No description available.

```sql
DELETE FROM google.securitycenter.mute_configs
WHERE foldersId = '{{ foldersId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND muteConfigsId = '{{ muteConfigsId }}' --required
;
```
</TabItem>
<TabItem value="organizations_locations_mute_configs_delete">

No description available.

```sql
DELETE FROM google.securitycenter.mute_configs
WHERE organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND muteConfigsId = '{{ muteConfigsId }}' --required
;
```
</TabItem>
<TabItem value="projects_locations_mute_configs_delete">

No description available.

```sql
DELETE FROM google.securitycenter.mute_configs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND muteConfigsId = '{{ muteConfigsId }}' --required
;
```
</TabItem>
<TabItem value="folders_mute_configs_delete">

No description available.

```sql
DELETE FROM google.securitycenter.mute_configs
WHERE foldersId = '{{ foldersId }}' --required
AND muteConfigsId = '{{ muteConfigsId }}' --required
;
```
</TabItem>
<TabItem value="organizations_mute_configs_delete">

No description available.

```sql
DELETE FROM google.securitycenter.mute_configs
WHERE organizationsId = '{{ organizationsId }}' --required
AND muteConfigsId = '{{ muteConfigsId }}' --required
;
```
</TabItem>
<TabItem value="projects_mute_configs_delete">

No description available.

```sql
DELETE FROM google.securitycenter.mute_configs
WHERE projectsId = '{{ projectsId }}' --required
AND muteConfigsId = '{{ muteConfigsId }}' --required
;
```
</TabItem>
</Tabs>
