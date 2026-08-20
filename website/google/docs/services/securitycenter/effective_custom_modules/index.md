--- 
title: effective_custom_modules
hide_title: false
hide_table_of_contents: false
keywords:
  - effective_custom_modules
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

Creates, updates, deletes, gets or lists an <code>effective_custom_modules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="effective_custom_modules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securitycenter.effective_custom_modules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="folders_event_threat_detection_settings_effective_custom_modules_get"
    values={[
        { label: 'folders_event_threat_detection_settings_effective_custom_modules_get', value: 'folders_event_threat_detection_settings_effective_custom_modules_get' },
        { label: 'folders_security_health_analytics_settings_effective_custom_modules_get', value: 'folders_security_health_analytics_settings_effective_custom_modules_get' },
        { label: 'organizations_event_threat_detection_settings_effective_custom_modules_get', value: 'organizations_event_threat_detection_settings_effective_custom_modules_get' },
        { label: 'organizations_security_health_analytics_settings_effective_custom_modules_get', value: 'organizations_security_health_analytics_settings_effective_custom_modules_get' },
        { label: 'projects_event_threat_detection_settings_effective_custom_modules_get', value: 'projects_event_threat_detection_settings_effective_custom_modules_get' },
        { label: 'projects_security_health_analytics_settings_effective_custom_modules_get', value: 'projects_security_health_analytics_settings_effective_custom_modules_get' },
        { label: 'folders_event_threat_detection_settings_effective_custom_modules_list', value: 'folders_event_threat_detection_settings_effective_custom_modules_list' },
        { label: 'folders_security_health_analytics_settings_effective_custom_modules_list', value: 'folders_security_health_analytics_settings_effective_custom_modules_list' },
        { label: 'organizations_event_threat_detection_settings_effective_custom_modules_list', value: 'organizations_event_threat_detection_settings_effective_custom_modules_list' },
        { label: 'organizations_security_health_analytics_settings_effective_custom_modules_list', value: 'organizations_security_health_analytics_settings_effective_custom_modules_list' },
        { label: 'projects_event_threat_detection_settings_effective_custom_modules_list', value: 'projects_event_threat_detection_settings_effective_custom_modules_list' },
        { label: 'projects_security_health_analytics_settings_effective_custom_modules_list', value: 'projects_security_health_analytics_settings_effective_custom_modules_list' }
    ]}
>
<TabItem value="folders_event_threat_detection_settings_effective_custom_modules_get">

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
    <td> (ENABLEMENT_STATE_UNSPECIFIED, ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_security_health_analytics_settings_effective_custom_modules_get">

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
    <td><CopyableCode code="cloudProvider" /></td>
    <td><code>string</code></td>
    <td> (CLOUD_PROVIDER_UNSPECIFIED, GOOGLE_CLOUD_PLATFORM, AMAZON_WEB_SERVICES, MICROSOFT_AZURE)</td>
</tr>
<tr>
    <td><CopyableCode code="customConfig" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudSecuritycenterV1CustomConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="enablementState" /></td>
    <td><code>string</code></td>
    <td> (ENABLEMENT_STATE_UNSPECIFIED, ENABLED, DISABLED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_event_threat_detection_settings_effective_custom_modules_get">

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
    <td> (ENABLEMENT_STATE_UNSPECIFIED, ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_security_health_analytics_settings_effective_custom_modules_get">

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
    <td><CopyableCode code="cloudProvider" /></td>
    <td><code>string</code></td>
    <td> (CLOUD_PROVIDER_UNSPECIFIED, GOOGLE_CLOUD_PLATFORM, AMAZON_WEB_SERVICES, MICROSOFT_AZURE)</td>
</tr>
<tr>
    <td><CopyableCode code="customConfig" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudSecuritycenterV1CustomConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="enablementState" /></td>
    <td><code>string</code></td>
    <td> (ENABLEMENT_STATE_UNSPECIFIED, ENABLED, DISABLED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_event_threat_detection_settings_effective_custom_modules_get">

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
    <td> (ENABLEMENT_STATE_UNSPECIFIED, ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_security_health_analytics_settings_effective_custom_modules_get">

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
    <td><CopyableCode code="cloudProvider" /></td>
    <td><code>string</code></td>
    <td> (CLOUD_PROVIDER_UNSPECIFIED, GOOGLE_CLOUD_PLATFORM, AMAZON_WEB_SERVICES, MICROSOFT_AZURE)</td>
</tr>
<tr>
    <td><CopyableCode code="customConfig" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudSecuritycenterV1CustomConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="enablementState" /></td>
    <td><code>string</code></td>
    <td> (ENABLEMENT_STATE_UNSPECIFIED, ENABLED, DISABLED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_event_threat_detection_settings_effective_custom_modules_list">

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
    <td> (ENABLEMENT_STATE_UNSPECIFIED, ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="folders_security_health_analytics_settings_effective_custom_modules_list">

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
    <td><CopyableCode code="cloudProvider" /></td>
    <td><code>string</code></td>
    <td> (CLOUD_PROVIDER_UNSPECIFIED, GOOGLE_CLOUD_PLATFORM, AMAZON_WEB_SERVICES, MICROSOFT_AZURE)</td>
</tr>
<tr>
    <td><CopyableCode code="customConfig" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudSecuritycenterV1CustomConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="enablementState" /></td>
    <td><code>string</code></td>
    <td> (ENABLEMENT_STATE_UNSPECIFIED, ENABLED, DISABLED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_event_threat_detection_settings_effective_custom_modules_list">

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
    <td> (ENABLEMENT_STATE_UNSPECIFIED, ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_security_health_analytics_settings_effective_custom_modules_list">

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
    <td><CopyableCode code="cloudProvider" /></td>
    <td><code>string</code></td>
    <td> (CLOUD_PROVIDER_UNSPECIFIED, GOOGLE_CLOUD_PLATFORM, AMAZON_WEB_SERVICES, MICROSOFT_AZURE)</td>
</tr>
<tr>
    <td><CopyableCode code="customConfig" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudSecuritycenterV1CustomConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="enablementState" /></td>
    <td><code>string</code></td>
    <td> (ENABLEMENT_STATE_UNSPECIFIED, ENABLED, DISABLED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_event_threat_detection_settings_effective_custom_modules_list">

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
    <td> (ENABLEMENT_STATE_UNSPECIFIED, ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_security_health_analytics_settings_effective_custom_modules_list">

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
    <td><CopyableCode code="cloudProvider" /></td>
    <td><code>string</code></td>
    <td> (CLOUD_PROVIDER_UNSPECIFIED, GOOGLE_CLOUD_PLATFORM, AMAZON_WEB_SERVICES, MICROSOFT_AZURE)</td>
</tr>
<tr>
    <td><CopyableCode code="customConfig" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudSecuritycenterV1CustomConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="enablementState" /></td>
    <td><code>string</code></td>
    <td> (ENABLEMENT_STATE_UNSPECIFIED, ENABLED, DISABLED)</td>
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
    <td><a href="#folders_event_threat_detection_settings_effective_custom_modules_get"><CopyableCode code="folders_event_threat_detection_settings_effective_custom_modules_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-effectiveCustomModulesId"><code>effectiveCustomModulesId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_security_health_analytics_settings_effective_custom_modules_get"><CopyableCode code="folders_security_health_analytics_settings_effective_custom_modules_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-effectiveCustomModulesId"><code>effectiveCustomModulesId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_event_threat_detection_settings_effective_custom_modules_get"><CopyableCode code="organizations_event_threat_detection_settings_effective_custom_modules_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-effectiveCustomModulesId"><code>effectiveCustomModulesId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_security_health_analytics_settings_effective_custom_modules_get"><CopyableCode code="organizations_security_health_analytics_settings_effective_custom_modules_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-effectiveCustomModulesId"><code>effectiveCustomModulesId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_event_threat_detection_settings_effective_custom_modules_get"><CopyableCode code="projects_event_threat_detection_settings_effective_custom_modules_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-effectiveCustomModulesId"><code>effectiveCustomModulesId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_security_health_analytics_settings_effective_custom_modules_get"><CopyableCode code="projects_security_health_analytics_settings_effective_custom_modules_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-effectiveCustomModulesId"><code>effectiveCustomModulesId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_event_threat_detection_settings_effective_custom_modules_list"><CopyableCode code="folders_event_threat_detection_settings_effective_custom_modules_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_security_health_analytics_settings_effective_custom_modules_list"><CopyableCode code="folders_security_health_analytics_settings_effective_custom_modules_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_event_threat_detection_settings_effective_custom_modules_list"><CopyableCode code="organizations_event_threat_detection_settings_effective_custom_modules_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_security_health_analytics_settings_effective_custom_modules_list"><CopyableCode code="organizations_security_health_analytics_settings_effective_custom_modules_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_event_threat_detection_settings_effective_custom_modules_list"><CopyableCode code="projects_event_threat_detection_settings_effective_custom_modules_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_security_health_analytics_settings_effective_custom_modules_list"><CopyableCode code="projects_security_health_analytics_settings_effective_custom_modules_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
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
<tr id="parameter-effectiveCustomModulesId">
    <td><CopyableCode code="effectiveCustomModulesId" /></td>
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
    defaultValue="folders_event_threat_detection_settings_effective_custom_modules_get"
    values={[
        { label: 'folders_event_threat_detection_settings_effective_custom_modules_get', value: 'folders_event_threat_detection_settings_effective_custom_modules_get' },
        { label: 'folders_security_health_analytics_settings_effective_custom_modules_get', value: 'folders_security_health_analytics_settings_effective_custom_modules_get' },
        { label: 'organizations_event_threat_detection_settings_effective_custom_modules_get', value: 'organizations_event_threat_detection_settings_effective_custom_modules_get' },
        { label: 'organizations_security_health_analytics_settings_effective_custom_modules_get', value: 'organizations_security_health_analytics_settings_effective_custom_modules_get' },
        { label: 'projects_event_threat_detection_settings_effective_custom_modules_get', value: 'projects_event_threat_detection_settings_effective_custom_modules_get' },
        { label: 'projects_security_health_analytics_settings_effective_custom_modules_get', value: 'projects_security_health_analytics_settings_effective_custom_modules_get' },
        { label: 'folders_event_threat_detection_settings_effective_custom_modules_list', value: 'folders_event_threat_detection_settings_effective_custom_modules_list' },
        { label: 'folders_security_health_analytics_settings_effective_custom_modules_list', value: 'folders_security_health_analytics_settings_effective_custom_modules_list' },
        { label: 'organizations_event_threat_detection_settings_effective_custom_modules_list', value: 'organizations_event_threat_detection_settings_effective_custom_modules_list' },
        { label: 'organizations_security_health_analytics_settings_effective_custom_modules_list', value: 'organizations_security_health_analytics_settings_effective_custom_modules_list' },
        { label: 'projects_event_threat_detection_settings_effective_custom_modules_list', value: 'projects_event_threat_detection_settings_effective_custom_modules_list' },
        { label: 'projects_security_health_analytics_settings_effective_custom_modules_list', value: 'projects_security_health_analytics_settings_effective_custom_modules_list' }
    ]}
>
<TabItem value="folders_event_threat_detection_settings_effective_custom_modules_get">

Successful response

```sql
SELECT
name,
cloudProvider,
config,
description,
displayName,
enablementState,
type
FROM google.securitycenter.effective_custom_modules
WHERE foldersId = '{{ foldersId }}' -- required
AND effectiveCustomModulesId = '{{ effectiveCustomModulesId }}' -- required
;
```
</TabItem>
<TabItem value="folders_security_health_analytics_settings_effective_custom_modules_get">

Successful response

```sql
SELECT
name,
cloudProvider,
customConfig,
displayName,
enablementState
FROM google.securitycenter.effective_custom_modules
WHERE foldersId = '{{ foldersId }}' -- required
AND effectiveCustomModulesId = '{{ effectiveCustomModulesId }}' -- required
;
```
</TabItem>
<TabItem value="organizations_event_threat_detection_settings_effective_custom_modules_get">

Successful response

```sql
SELECT
name,
cloudProvider,
config,
description,
displayName,
enablementState,
type
FROM google.securitycenter.effective_custom_modules
WHERE organizationsId = '{{ organizationsId }}' -- required
AND effectiveCustomModulesId = '{{ effectiveCustomModulesId }}' -- required
;
```
</TabItem>
<TabItem value="organizations_security_health_analytics_settings_effective_custom_modules_get">

Successful response

```sql
SELECT
name,
cloudProvider,
customConfig,
displayName,
enablementState
FROM google.securitycenter.effective_custom_modules
WHERE organizationsId = '{{ organizationsId }}' -- required
AND effectiveCustomModulesId = '{{ effectiveCustomModulesId }}' -- required
;
```
</TabItem>
<TabItem value="projects_event_threat_detection_settings_effective_custom_modules_get">

Successful response

```sql
SELECT
name,
cloudProvider,
config,
description,
displayName,
enablementState,
type
FROM google.securitycenter.effective_custom_modules
WHERE projectsId = '{{ projectsId }}' -- required
AND effectiveCustomModulesId = '{{ effectiveCustomModulesId }}' -- required
;
```
</TabItem>
<TabItem value="projects_security_health_analytics_settings_effective_custom_modules_get">

Successful response

```sql
SELECT
name,
cloudProvider,
customConfig,
displayName,
enablementState
FROM google.securitycenter.effective_custom_modules
WHERE projectsId = '{{ projectsId }}' -- required
AND effectiveCustomModulesId = '{{ effectiveCustomModulesId }}' -- required
;
```
</TabItem>
<TabItem value="folders_event_threat_detection_settings_effective_custom_modules_list">

Successful response

```sql
SELECT
name,
cloudProvider,
config,
description,
displayName,
enablementState,
type
FROM google.securitycenter.effective_custom_modules
WHERE foldersId = '{{ foldersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
<TabItem value="folders_security_health_analytics_settings_effective_custom_modules_list">

Successful response

```sql
SELECT
name,
cloudProvider,
customConfig,
displayName,
enablementState
FROM google.securitycenter.effective_custom_modules
WHERE foldersId = '{{ foldersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
<TabItem value="organizations_event_threat_detection_settings_effective_custom_modules_list">

Successful response

```sql
SELECT
name,
cloudProvider,
config,
description,
displayName,
enablementState,
type
FROM google.securitycenter.effective_custom_modules
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
<TabItem value="organizations_security_health_analytics_settings_effective_custom_modules_list">

Successful response

```sql
SELECT
name,
cloudProvider,
customConfig,
displayName,
enablementState
FROM google.securitycenter.effective_custom_modules
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
<TabItem value="projects_event_threat_detection_settings_effective_custom_modules_list">

Successful response

```sql
SELECT
name,
cloudProvider,
config,
description,
displayName,
enablementState,
type
FROM google.securitycenter.effective_custom_modules
WHERE projectsId = '{{ projectsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
<TabItem value="projects_security_health_analytics_settings_effective_custom_modules_list">

Successful response

```sql
SELECT
name,
cloudProvider,
customConfig,
displayName,
enablementState
FROM google.securitycenter.effective_custom_modules
WHERE projectsId = '{{ projectsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>
