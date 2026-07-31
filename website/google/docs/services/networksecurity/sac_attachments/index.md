--- 
title: sac_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - sac_attachments
  - networksecurity
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

Creates, updates, deletes, gets or lists a <code>sac_attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sac_attachments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networksecurity.sac_attachments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_sac_attachments_get"
    values={[
        { label: 'projects_locations_sac_attachments_get', value: 'projects_locations_sac_attachments_get' },
        { label: 'projects_locations_sac_attachments_list', value: 'projects_locations_sac_attachments_list' }
    ]}
>
<TabItem value="projects_locations_sac_attachments_get">

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
    <td>Identifier. Resource name, in the form `projects/&#123;project&#125;/locations/&#123;location&#125;/sacAttachments/&#123;sac_attachment&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the attachment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Optional list of labels applied to the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="nccGateway" /></td>
    <td><code>string</code></td>
    <td>Required. NCC Gateway associated with the attachment. This can be input as an ID or a full resource name. The output always has the form `projects/&#123;project_number&#125;/locations/&#123;location&#125;/spokes/&#123;ncc_gateway&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="sacRealm" /></td>
    <td><code>string</code></td>
    <td>Required. SAC Realm which owns the attachment. This can be input as an ID or a full resource name. The output always has the form `projects/&#123;project_number&#125;/locations/&#123;location&#125;/sacRealms/&#123;sac_realm&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the attachment. (STATE_UNSPECIFIED, PENDING_PARTNER_ATTACHMENT, PARTNER_ATTACHED, PARTNER_DETACHED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the attachment was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_sac_attachments_list">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
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
    <td><a href="#projects_locations_sac_attachments_get"><CopyableCode code="projects_locations_sac_attachments_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sacAttachmentsId"><code>sacAttachmentsId</code></a></td>
    <td></td>
    <td>Returns the specified attachment.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sac_attachments_list"><CopyableCode code="projects_locations_sac_attachments_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists SACAttachments in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sac_attachments_create"><CopyableCode code="projects_locations_sac_attachments_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-sacAttachmentId"><code>sacAttachmentId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new SACAttachment in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_sac_attachments_delete"><CopyableCode code="projects_locations_sac_attachments_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sacAttachmentsId"><code>sacAttachmentsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified attachment.</td>
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
<tr id="parameter-sacAttachmentsId">
    <td><CopyableCode code="sacAttachmentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sacAttachmentId">
    <td><CopyableCode code="sacAttachmentId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_sac_attachments_get"
    values={[
        { label: 'projects_locations_sac_attachments_get', value: 'projects_locations_sac_attachments_get' },
        { label: 'projects_locations_sac_attachments_list', value: 'projects_locations_sac_attachments_list' }
    ]}
>
<TabItem value="projects_locations_sac_attachments_get">

Returns the specified attachment.

```sql
SELECT
name,
createTime,
labels,
nccGateway,
sacRealm,
state,
updateTime
FROM google.networksecurity.sac_attachments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND sacAttachmentsId = '{{ sacAttachmentsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_sac_attachments_list">

Lists SACAttachments in a given project and location.

```sql
SELECT
*
FROM google.networksecurity.sac_attachments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND filter = '{{ filter }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_sac_attachments_create"
    values={[
        { label: 'projects_locations_sac_attachments_create', value: 'projects_locations_sac_attachments_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_sac_attachments_create">

Creates a new SACAttachment in a given project and location.

```sql
INSERT INTO google.networksecurity.sac_attachments (
data__labels,
data__name,
data__nccGateway,
data__sacRealm,
projectsId,
locationsId,
sacAttachmentId,
requestId
)
SELECT 
'{{ labels }}',
'{{ name }}',
'{{ nccGateway }}',
'{{ sacRealm }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ sacAttachmentId }}',
'{{ requestId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sac_attachments
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the sac_attachments resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the sac_attachments resource.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Optional list of labels applied to the resource.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. Resource name, in the form \`projects/{project}/locations/{location}/sacAttachments/{sac_attachment}\`.
    - name: nccGateway
      value: "{{ nccGateway }}"
      description: |
        Required. NCC Gateway associated with the attachment. This can be input as an ID or a full resource name. The output always has the form \`projects/{project_number}/locations/{location}/spokes/{ncc_gateway}\`.
    - name: sacRealm
      value: "{{ sacRealm }}"
      description: |
        Required. SAC Realm which owns the attachment. This can be input as an ID or a full resource name. The output always has the form \`projects/{project_number}/locations/{location}/sacRealms/{sac_realm}\`.
    - name: sacAttachmentId
      value: "{{ sacAttachmentId }}"
    - name: requestId
      value: "{{ requestId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_sac_attachments_delete"
    values={[
        { label: 'projects_locations_sac_attachments_delete', value: 'projects_locations_sac_attachments_delete' }
    ]}
>
<TabItem value="projects_locations_sac_attachments_delete">

Deletes the specified attachment.

```sql
DELETE FROM google.networksecurity.sac_attachments
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND sacAttachmentsId = '{{ sacAttachmentsId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
