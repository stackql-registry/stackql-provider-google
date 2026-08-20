--- 
title: inspect_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - inspect_templates
  - dlp
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

Creates, updates, deletes, gets or lists an <code>inspect_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="inspect_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dlp.inspect_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_locations_inspect_templates_get"
    values={[
        { label: 'organizations_locations_inspect_templates_get', value: 'organizations_locations_inspect_templates_get' },
        { label: 'projects_locations_inspect_templates_get', value: 'projects_locations_inspect_templates_get' },
        { label: 'organizations_inspect_templates_get', value: 'organizations_inspect_templates_get' },
        { label: 'organizations_locations_inspect_templates_list', value: 'organizations_locations_inspect_templates_list' },
        { label: 'projects_inspect_templates_get', value: 'projects_inspect_templates_get' },
        { label: 'projects_locations_inspect_templates_list', value: 'projects_locations_inspect_templates_list' },
        { label: 'organizations_inspect_templates_list', value: 'organizations_inspect_templates_list' },
        { label: 'projects_inspect_templates_list', value: 'projects_inspect_templates_list' }
    ]}
>
<TabItem value="organizations_locations_inspect_templates_get">

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
    <td>Output only. The template name. The template will have one of the following formats: `projects/PROJECT_ID/inspectTemplates/TEMPLATE_ID` OR `organizations/ORGANIZATION_ID/inspectTemplates/TEMPLATE_ID`;</td>
</tr>
<tr>
    <td><CopyableCode code="allowLimitedAvailabilityInfoTypes" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Enables the use of [limited-availability built-in infoTypes](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference#limited-availability-infotypes) in inspect_config. These infoTypes are supported only in specific regions and can cause scanning errors if used elsewhere.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of an inspectTemplate.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Short description (max 256 chars).</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name (max 256 chars).</td>
</tr>
<tr>
    <td><CopyableCode code="inspectConfig" /></td>
    <td><code>object</code></td>
    <td>The core content of the template. Configuration of the scanning process. (id: GooglePrivacyDlpV2InspectConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of an inspectTemplate.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_inspect_templates_get">

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
    <td>Output only. The template name. The template will have one of the following formats: `projects/PROJECT_ID/inspectTemplates/TEMPLATE_ID` OR `organizations/ORGANIZATION_ID/inspectTemplates/TEMPLATE_ID`;</td>
</tr>
<tr>
    <td><CopyableCode code="allowLimitedAvailabilityInfoTypes" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Enables the use of [limited-availability built-in infoTypes](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference#limited-availability-infotypes) in inspect_config. These infoTypes are supported only in specific regions and can cause scanning errors if used elsewhere.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of an inspectTemplate.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Short description (max 256 chars).</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name (max 256 chars).</td>
</tr>
<tr>
    <td><CopyableCode code="inspectConfig" /></td>
    <td><code>object</code></td>
    <td>The core content of the template. Configuration of the scanning process. (id: GooglePrivacyDlpV2InspectConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of an inspectTemplate.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_inspect_templates_get">

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
    <td>Output only. The template name. The template will have one of the following formats: `projects/PROJECT_ID/inspectTemplates/TEMPLATE_ID` OR `organizations/ORGANIZATION_ID/inspectTemplates/TEMPLATE_ID`;</td>
</tr>
<tr>
    <td><CopyableCode code="allowLimitedAvailabilityInfoTypes" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Enables the use of [limited-availability built-in infoTypes](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference#limited-availability-infotypes) in inspect_config. These infoTypes are supported only in specific regions and can cause scanning errors if used elsewhere.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of an inspectTemplate.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Short description (max 256 chars).</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name (max 256 chars).</td>
</tr>
<tr>
    <td><CopyableCode code="inspectConfig" /></td>
    <td><code>object</code></td>
    <td>The core content of the template. Configuration of the scanning process. (id: GooglePrivacyDlpV2InspectConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of an inspectTemplate.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_inspect_templates_list">

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
    <td>Output only. The template name. The template will have one of the following formats: `projects/PROJECT_ID/inspectTemplates/TEMPLATE_ID` OR `organizations/ORGANIZATION_ID/inspectTemplates/TEMPLATE_ID`;</td>
</tr>
<tr>
    <td><CopyableCode code="allowLimitedAvailabilityInfoTypes" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Enables the use of [limited-availability built-in infoTypes](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference#limited-availability-infotypes) in inspect_config. These infoTypes are supported only in specific regions and can cause scanning errors if used elsewhere.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of an inspectTemplate.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Short description (max 256 chars).</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name (max 256 chars).</td>
</tr>
<tr>
    <td><CopyableCode code="inspectConfig" /></td>
    <td><code>object</code></td>
    <td>The core content of the template. Configuration of the scanning process. (id: GooglePrivacyDlpV2InspectConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of an inspectTemplate.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_inspect_templates_get">

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
    <td>Output only. The template name. The template will have one of the following formats: `projects/PROJECT_ID/inspectTemplates/TEMPLATE_ID` OR `organizations/ORGANIZATION_ID/inspectTemplates/TEMPLATE_ID`;</td>
</tr>
<tr>
    <td><CopyableCode code="allowLimitedAvailabilityInfoTypes" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Enables the use of [limited-availability built-in infoTypes](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference#limited-availability-infotypes) in inspect_config. These infoTypes are supported only in specific regions and can cause scanning errors if used elsewhere.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of an inspectTemplate.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Short description (max 256 chars).</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name (max 256 chars).</td>
</tr>
<tr>
    <td><CopyableCode code="inspectConfig" /></td>
    <td><code>object</code></td>
    <td>The core content of the template. Configuration of the scanning process. (id: GooglePrivacyDlpV2InspectConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of an inspectTemplate.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_inspect_templates_list">

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
    <td>Output only. The template name. The template will have one of the following formats: `projects/PROJECT_ID/inspectTemplates/TEMPLATE_ID` OR `organizations/ORGANIZATION_ID/inspectTemplates/TEMPLATE_ID`;</td>
</tr>
<tr>
    <td><CopyableCode code="allowLimitedAvailabilityInfoTypes" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Enables the use of [limited-availability built-in infoTypes](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference#limited-availability-infotypes) in inspect_config. These infoTypes are supported only in specific regions and can cause scanning errors if used elsewhere.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of an inspectTemplate.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Short description (max 256 chars).</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name (max 256 chars).</td>
</tr>
<tr>
    <td><CopyableCode code="inspectConfig" /></td>
    <td><code>object</code></td>
    <td>The core content of the template. Configuration of the scanning process. (id: GooglePrivacyDlpV2InspectConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of an inspectTemplate.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_inspect_templates_list">

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
    <td>Output only. The template name. The template will have one of the following formats: `projects/PROJECT_ID/inspectTemplates/TEMPLATE_ID` OR `organizations/ORGANIZATION_ID/inspectTemplates/TEMPLATE_ID`;</td>
</tr>
<tr>
    <td><CopyableCode code="allowLimitedAvailabilityInfoTypes" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Enables the use of [limited-availability built-in infoTypes](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference#limited-availability-infotypes) in inspect_config. These infoTypes are supported only in specific regions and can cause scanning errors if used elsewhere.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of an inspectTemplate.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Short description (max 256 chars).</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name (max 256 chars).</td>
</tr>
<tr>
    <td><CopyableCode code="inspectConfig" /></td>
    <td><code>object</code></td>
    <td>The core content of the template. Configuration of the scanning process. (id: GooglePrivacyDlpV2InspectConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of an inspectTemplate.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_inspect_templates_list">

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
    <td>Output only. The template name. The template will have one of the following formats: `projects/PROJECT_ID/inspectTemplates/TEMPLATE_ID` OR `organizations/ORGANIZATION_ID/inspectTemplates/TEMPLATE_ID`;</td>
</tr>
<tr>
    <td><CopyableCode code="allowLimitedAvailabilityInfoTypes" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Enables the use of [limited-availability built-in infoTypes](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference#limited-availability-infotypes) in inspect_config. These infoTypes are supported only in specific regions and can cause scanning errors if used elsewhere.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of an inspectTemplate.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Short description (max 256 chars).</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name (max 256 chars).</td>
</tr>
<tr>
    <td><CopyableCode code="inspectConfig" /></td>
    <td><code>object</code></td>
    <td>The core content of the template. Configuration of the scanning process. (id: GooglePrivacyDlpV2InspectConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of an inspectTemplate.</td>
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
    <td><a href="#organizations_locations_inspect_templates_get"><CopyableCode code="organizations_locations_inspect_templates_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-inspectTemplatesId"><code>inspectTemplatesId</code></a></td>
    <td></td>
    <td>Gets an InspectTemplate. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_locations_inspect_templates_get"><CopyableCode code="projects_locations_inspect_templates_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-inspectTemplatesId"><code>inspectTemplatesId</code></a></td>
    <td></td>
    <td>Gets an InspectTemplate. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_inspect_templates_get"><CopyableCode code="organizations_inspect_templates_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-inspectTemplatesId"><code>inspectTemplatesId</code></a></td>
    <td></td>
    <td>Gets an InspectTemplate. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_inspect_templates_list"><CopyableCode code="organizations_locations_inspect_templates_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-locationId"><code>locationId</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists InspectTemplates. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_inspect_templates_get"><CopyableCode code="projects_inspect_templates_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-inspectTemplatesId"><code>inspectTemplatesId</code></a></td>
    <td></td>
    <td>Gets an InspectTemplate. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_locations_inspect_templates_list"><CopyableCode code="projects_locations_inspect_templates_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-locationId"><code>locationId</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists InspectTemplates. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_inspect_templates_list"><CopyableCode code="organizations_inspect_templates_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-locationId"><code>locationId</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists InspectTemplates. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_inspect_templates_list"><CopyableCode code="projects_inspect_templates_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-locationId"><code>locationId</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists InspectTemplates. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_inspect_templates_create"><CopyableCode code="organizations_locations_inspect_templates_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates an InspectTemplate for reusing frequently used configuration for inspecting content, images, and storage. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_locations_inspect_templates_create"><CopyableCode code="projects_locations_inspect_templates_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates an InspectTemplate for reusing frequently used configuration for inspecting content, images, and storage. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_inspect_templates_create"><CopyableCode code="organizations_inspect_templates_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Creates an InspectTemplate for reusing frequently used configuration for inspecting content, images, and storage. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_inspect_templates_create"><CopyableCode code="projects_inspect_templates_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates an InspectTemplate for reusing frequently used configuration for inspecting content, images, and storage. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_inspect_templates_patch"><CopyableCode code="organizations_locations_inspect_templates_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-inspectTemplatesId"><code>inspectTemplatesId</code></a></td>
    <td></td>
    <td>Updates the InspectTemplate. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_locations_inspect_templates_patch"><CopyableCode code="projects_locations_inspect_templates_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-inspectTemplatesId"><code>inspectTemplatesId</code></a></td>
    <td></td>
    <td>Updates the InspectTemplate. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_inspect_templates_patch"><CopyableCode code="organizations_inspect_templates_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-inspectTemplatesId"><code>inspectTemplatesId</code></a></td>
    <td></td>
    <td>Updates the InspectTemplate. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_inspect_templates_patch"><CopyableCode code="projects_inspect_templates_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-inspectTemplatesId"><code>inspectTemplatesId</code></a></td>
    <td></td>
    <td>Updates the InspectTemplate. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_inspect_templates_delete"><CopyableCode code="organizations_locations_inspect_templates_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-inspectTemplatesId"><code>inspectTemplatesId</code></a></td>
    <td></td>
    <td>Deletes an InspectTemplate. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_locations_inspect_templates_delete"><CopyableCode code="projects_locations_inspect_templates_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-inspectTemplatesId"><code>inspectTemplatesId</code></a></td>
    <td></td>
    <td>Deletes an InspectTemplate. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_inspect_templates_delete"><CopyableCode code="organizations_inspect_templates_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-inspectTemplatesId"><code>inspectTemplatesId</code></a></td>
    <td></td>
    <td>Deletes an InspectTemplate. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_inspect_templates_delete"><CopyableCode code="projects_inspect_templates_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-inspectTemplatesId"><code>inspectTemplatesId</code></a></td>
    <td></td>
    <td>Deletes an InspectTemplate. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.</td>
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
<tr id="parameter-inspectTemplatesId">
    <td><CopyableCode code="inspectTemplatesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
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
<tr id="parameter-locationId">
    <td><CopyableCode code="locationId" /></td>
    <td><code>string</code></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_locations_inspect_templates_get"
    values={[
        { label: 'organizations_locations_inspect_templates_get', value: 'organizations_locations_inspect_templates_get' },
        { label: 'projects_locations_inspect_templates_get', value: 'projects_locations_inspect_templates_get' },
        { label: 'organizations_inspect_templates_get', value: 'organizations_inspect_templates_get' },
        { label: 'organizations_locations_inspect_templates_list', value: 'organizations_locations_inspect_templates_list' },
        { label: 'projects_inspect_templates_get', value: 'projects_inspect_templates_get' },
        { label: 'projects_locations_inspect_templates_list', value: 'projects_locations_inspect_templates_list' },
        { label: 'organizations_inspect_templates_list', value: 'organizations_inspect_templates_list' },
        { label: 'projects_inspect_templates_list', value: 'projects_inspect_templates_list' }
    ]}
>
<TabItem value="organizations_locations_inspect_templates_get">

Gets an InspectTemplate. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.

```sql
SELECT
name,
allowLimitedAvailabilityInfoTypes,
createTime,
description,
displayName,
inspectConfig,
updateTime
FROM google.dlp.inspect_templates
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND inspectTemplatesId = '{{ inspectTemplatesId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_inspect_templates_get">

Gets an InspectTemplate. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.

```sql
SELECT
name,
allowLimitedAvailabilityInfoTypes,
createTime,
description,
displayName,
inspectConfig,
updateTime
FROM google.dlp.inspect_templates
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND inspectTemplatesId = '{{ inspectTemplatesId }}' -- required
;
```
</TabItem>
<TabItem value="organizations_inspect_templates_get">

Gets an InspectTemplate. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.

```sql
SELECT
name,
allowLimitedAvailabilityInfoTypes,
createTime,
description,
displayName,
inspectConfig,
updateTime
FROM google.dlp.inspect_templates
WHERE organizationsId = '{{ organizationsId }}' -- required
AND inspectTemplatesId = '{{ inspectTemplatesId }}' -- required
;
```
</TabItem>
<TabItem value="organizations_locations_inspect_templates_list">

Lists InspectTemplates. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.

```sql
SELECT
name,
allowLimitedAvailabilityInfoTypes,
createTime,
description,
displayName,
inspectConfig,
updateTime
FROM google.dlp.inspect_templates
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND locationId = '{{ locationId }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
<TabItem value="projects_inspect_templates_get">

Gets an InspectTemplate. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.

```sql
SELECT
name,
allowLimitedAvailabilityInfoTypes,
createTime,
description,
displayName,
inspectConfig,
updateTime
FROM google.dlp.inspect_templates
WHERE projectsId = '{{ projectsId }}' -- required
AND inspectTemplatesId = '{{ inspectTemplatesId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_inspect_templates_list">

Lists InspectTemplates. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.

```sql
SELECT
name,
allowLimitedAvailabilityInfoTypes,
createTime,
description,
displayName,
inspectConfig,
updateTime
FROM google.dlp.inspect_templates
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND locationId = '{{ locationId }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
<TabItem value="organizations_inspect_templates_list">

Lists InspectTemplates. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.

```sql
SELECT
name,
allowLimitedAvailabilityInfoTypes,
createTime,
description,
displayName,
inspectConfig,
updateTime
FROM google.dlp.inspect_templates
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationId = '{{ locationId }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
<TabItem value="projects_inspect_templates_list">

Lists InspectTemplates. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.

```sql
SELECT
name,
allowLimitedAvailabilityInfoTypes,
createTime,
description,
displayName,
inspectConfig,
updateTime
FROM google.dlp.inspect_templates
WHERE projectsId = '{{ projectsId }}' -- required
AND locationId = '{{ locationId }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_locations_inspect_templates_create"
    values={[
        { label: 'organizations_locations_inspect_templates_create', value: 'organizations_locations_inspect_templates_create' },
        { label: 'projects_locations_inspect_templates_create', value: 'projects_locations_inspect_templates_create' },
        { label: 'organizations_inspect_templates_create', value: 'organizations_inspect_templates_create' },
        { label: 'projects_inspect_templates_create', value: 'projects_inspect_templates_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_locations_inspect_templates_create">

Creates an InspectTemplate for reusing frequently used configuration for inspecting content, images, and storage. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.

```sql
INSERT INTO google.dlp.inspect_templates (
data__inspectTemplate,
data__locationId,
data__templateId,
organizationsId,
locationsId
)
SELECT 
'{{ inspectTemplate }}',
'{{ locationId }}',
'{{ templateId }}',
'{{ organizationsId }}',
'{{ locationsId }}'
RETURNING
name,
allowLimitedAvailabilityInfoTypes,
createTime,
description,
displayName,
inspectConfig,
updateTime
;
```
</TabItem>
<TabItem value="projects_locations_inspect_templates_create">

Creates an InspectTemplate for reusing frequently used configuration for inspecting content, images, and storage. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.

```sql
INSERT INTO google.dlp.inspect_templates (
data__inspectTemplate,
data__locationId,
data__templateId,
projectsId,
locationsId
)
SELECT 
'{{ inspectTemplate }}',
'{{ locationId }}',
'{{ templateId }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
allowLimitedAvailabilityInfoTypes,
createTime,
description,
displayName,
inspectConfig,
updateTime
;
```
</TabItem>
<TabItem value="organizations_inspect_templates_create">

Creates an InspectTemplate for reusing frequently used configuration for inspecting content, images, and storage. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.

```sql
INSERT INTO google.dlp.inspect_templates (
data__inspectTemplate,
data__locationId,
data__templateId,
organizationsId
)
SELECT 
'{{ inspectTemplate }}',
'{{ locationId }}',
'{{ templateId }}',
'{{ organizationsId }}'
RETURNING
name,
allowLimitedAvailabilityInfoTypes,
createTime,
description,
displayName,
inspectConfig,
updateTime
;
```
</TabItem>
<TabItem value="projects_inspect_templates_create">

Creates an InspectTemplate for reusing frequently used configuration for inspecting content, images, and storage. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.

```sql
INSERT INTO google.dlp.inspect_templates (
data__inspectTemplate,
data__locationId,
data__templateId,
projectsId
)
SELECT 
'{{ inspectTemplate }}',
'{{ locationId }}',
'{{ templateId }}',
'{{ projectsId }}'
RETURNING
name,
allowLimitedAvailabilityInfoTypes,
createTime,
description,
displayName,
inspectConfig,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: inspect_templates
  props:
    - name: organizationsId
      value: "{{ organizationsId }}"
      description: Required parameter for the inspect_templates resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the inspect_templates resource.
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the inspect_templates resource.
    - name: inspectTemplate
      description: |
        Required. The InspectTemplate to create.
      value:
        allowLimitedAvailabilityInfoTypes: {{ allowLimitedAvailabilityInfoTypes }}
        createTime: "{{ createTime }}"
        description: "{{ description }}"
        displayName: "{{ displayName }}"
        inspectConfig:
          contentOptions:
            - "{{ contentOptions }}"
          customInfoTypes:
            - detectionRules: "{{ detectionRules }}"
              dictionary:
                cloudStoragePath:
                  path: "{{ path }}"
                wordList:
                  words: "{{ words }}"
              exclusionType: "{{ exclusionType }}"
              fileLabelInfoType:
                googleDriveLabel:
                  labelFieldsToMatch: "{{ labelFieldsToMatch }}"
                  labelId: "{{ labelId }}"
                sensitivityLabel:
                  guid: "{{ guid }}"
              infoType:
                name: "{{ name }}"
                sensitivityScore:
                  score: "{{ score }}"
                version: "{{ version }}"
              likelihood: "{{ likelihood }}"
              metadataKeyValueExpression:
                keyRegex: "{{ keyRegex }}"
                valueRegex: "{{ valueRegex }}"
              regex:
                groupIndexes:
                  - {{ groupIndexes }}
                pattern: "{{ pattern }}"
              sensitivityScore:
                score: "{{ score }}"
              storedType:
                createTime: "{{ createTime }}"
                name: "{{ name }}"
              surrogateType: "{{ surrogateType }}"
          excludeInfoTypes: {{ excludeInfoTypes }}
          includeQuote: {{ includeQuote }}
          infoTypes:
            - name: "{{ name }}"
              sensitivityScore:
                score: "{{ score }}"
              version: "{{ version }}"
          limits:
            maxFindingsPerInfoType:
              - infoType:
                  name: "{{ name }}"
                  sensitivityScore: "{{ sensitivityScore }}"
                  version: "{{ version }}"
                maxFindings: {{ maxFindings }}
            maxFindingsPerItem: {{ maxFindingsPerItem }}
            maxFindingsPerRequest: {{ maxFindingsPerRequest }}
          minLikelihood: "{{ minLikelihood }}"
          minLikelihoodPerInfoType:
            - infoType:
                name: "{{ name }}"
                sensitivityScore:
                  score: "{{ score }}"
                version: "{{ version }}"
              minLikelihood: "{{ minLikelihood }}"
          ruleSet:
            - infoTypes: "{{ infoTypes }}"
              rules: "{{ rules }}"
        name: "{{ name }}"
        updateTime: "{{ updateTime }}"
    - name: locationId
      value: "{{ locationId }}"
      description: |
        Deprecated. This field has no effect.
    - name: templateId
      value: "{{ templateId }}"
      description: |
        The template id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: \`[a-zA-Zd-_]+\`. The maximum length is 100 characters. Can be empty to allow the system to generate one.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_locations_inspect_templates_patch"
    values={[
        { label: 'organizations_locations_inspect_templates_patch', value: 'organizations_locations_inspect_templates_patch' },
        { label: 'projects_locations_inspect_templates_patch', value: 'projects_locations_inspect_templates_patch' },
        { label: 'organizations_inspect_templates_patch', value: 'organizations_inspect_templates_patch' },
        { label: 'projects_inspect_templates_patch', value: 'projects_inspect_templates_patch' }
    ]}
>
<TabItem value="organizations_locations_inspect_templates_patch">

Updates the InspectTemplate. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.

```sql
UPDATE google.dlp.inspect_templates
SET 
data__inspectTemplate = '{{ inspectTemplate }}',
data__updateMask = '{{ updateMask }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND inspectTemplatesId = '{{ inspectTemplatesId }}' --required
RETURNING
name,
allowLimitedAvailabilityInfoTypes,
createTime,
description,
displayName,
inspectConfig,
updateTime;
```
</TabItem>
<TabItem value="projects_locations_inspect_templates_patch">

Updates the InspectTemplate. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.

```sql
UPDATE google.dlp.inspect_templates
SET 
data__inspectTemplate = '{{ inspectTemplate }}',
data__updateMask = '{{ updateMask }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND inspectTemplatesId = '{{ inspectTemplatesId }}' --required
RETURNING
name,
allowLimitedAvailabilityInfoTypes,
createTime,
description,
displayName,
inspectConfig,
updateTime;
```
</TabItem>
<TabItem value="organizations_inspect_templates_patch">

Updates the InspectTemplate. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.

```sql
UPDATE google.dlp.inspect_templates
SET 
data__inspectTemplate = '{{ inspectTemplate }}',
data__updateMask = '{{ updateMask }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND inspectTemplatesId = '{{ inspectTemplatesId }}' --required
RETURNING
name,
allowLimitedAvailabilityInfoTypes,
createTime,
description,
displayName,
inspectConfig,
updateTime;
```
</TabItem>
<TabItem value="projects_inspect_templates_patch">

Updates the InspectTemplate. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.

```sql
UPDATE google.dlp.inspect_templates
SET 
data__inspectTemplate = '{{ inspectTemplate }}',
data__updateMask = '{{ updateMask }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND inspectTemplatesId = '{{ inspectTemplatesId }}' --required
RETURNING
name,
allowLimitedAvailabilityInfoTypes,
createTime,
description,
displayName,
inspectConfig,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_locations_inspect_templates_delete"
    values={[
        { label: 'organizations_locations_inspect_templates_delete', value: 'organizations_locations_inspect_templates_delete' },
        { label: 'projects_locations_inspect_templates_delete', value: 'projects_locations_inspect_templates_delete' },
        { label: 'organizations_inspect_templates_delete', value: 'organizations_inspect_templates_delete' },
        { label: 'projects_inspect_templates_delete', value: 'projects_inspect_templates_delete' }
    ]}
>
<TabItem value="organizations_locations_inspect_templates_delete">

Deletes an InspectTemplate. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.

```sql
DELETE FROM google.dlp.inspect_templates
WHERE organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND inspectTemplatesId = '{{ inspectTemplatesId }}' --required
;
```
</TabItem>
<TabItem value="projects_locations_inspect_templates_delete">

Deletes an InspectTemplate. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.

```sql
DELETE FROM google.dlp.inspect_templates
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND inspectTemplatesId = '{{ inspectTemplatesId }}' --required
;
```
</TabItem>
<TabItem value="organizations_inspect_templates_delete">

Deletes an InspectTemplate. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.

```sql
DELETE FROM google.dlp.inspect_templates
WHERE organizationsId = '{{ organizationsId }}' --required
AND inspectTemplatesId = '{{ inspectTemplatesId }}' --required
;
```
</TabItem>
<TabItem value="projects_inspect_templates_delete">

Deletes an InspectTemplate. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.

```sql
DELETE FROM google.dlp.inspect_templates
WHERE projectsId = '{{ projectsId }}' --required
AND inspectTemplatesId = '{{ inspectTemplatesId }}' --required
;
```
</TabItem>
</Tabs>
