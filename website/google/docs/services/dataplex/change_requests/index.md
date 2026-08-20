--- 
title: change_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - change_requests
  - dataplex
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

Creates, updates, deletes, gets or lists a <code>change_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="change_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.change_requests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_change_requests_get"
    values={[
        { label: 'projects_locations_change_requests_get', value: 'projects_locations_change_requests_get' },
        { label: 'projects_locations_change_requests_list', value: 'projects_locations_change_requests_list' }
    ]}
>
<TabItem value="projects_locations_change_requests_get">

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
    <td>Identifier. The relative resource name of the ChangeRequest, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/changeRequests/&#123;change_request_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="approver" /></td>
    <td><code>string</code></td>
    <td>Output only. The email address of the user who approved/rejected the ChangeRequest.</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>string</code></td>
    <td>Output only. The email address of the user who created the ChangeRequest.</td>
</tr>
<tr>
    <td><CopyableCode code="changeType" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of change represented by the change_payload. This field is derived from the populated field in the change_payload oneof. (CHANGE_TYPE_UNSPECIFIED, CREATE_ENTRY, UPDATE_ENTRY, DELETE_ENTRY, CREATE_ENTRY_LINK, DELETE_ENTRY_LINK, CREATE_GLOSSARY, UPDATE_GLOSSARY, DELETE_GLOSSARY, CREATE_GLOSSARY_CATEGORY, UPDATE_GLOSSARY_CATEGORY, DELETE_GLOSSARY_CATEGORY, CREATE_GLOSSARY_TERM, UPDATE_GLOSSARY_TERM, DELETE_GLOSSARY_TERM, REQUEST_DATA_PRODUCT_ACCESS)</td>
</tr>
<tr>
    <td><CopyableCode code="createEntry" /></td>
    <td><code>object</code></td>
    <td>Payload for creating an Entry. (id: GoogleCloudDataplexV1CreateEntryRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="createEntryLink" /></td>
    <td><code>object</code></td>
    <td>Payload for creating an EntryLink. (id: GoogleCloudDataplexV1CreateEntryLinkRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="createGlossary" /></td>
    <td><code>object</code></td>
    <td>Payload for creating a Glossary. (id: GoogleCloudDataplexV1CreateGlossaryRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="createGlossaryCategory" /></td>
    <td><code>object</code></td>
    <td>Payload for creating a GlossaryCategory. (id: GoogleCloudDataplexV1CreateGlossaryCategoryRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="createGlossaryTerm" /></td>
    <td><code>object</code></td>
    <td>Payload for creating a GlossaryTerm. (id: GoogleCloudDataplexV1CreateGlossaryTermRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the ChangeRequest was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataProductAccessRequest" /></td>
    <td><code>object</code></td>
    <td>Payload for Data Product access request. (id: GoogleCloudDataplexV1DataProductAccessRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="deleteEntry" /></td>
    <td><code>object</code></td>
    <td>Payload for deleting an Entry. (id: GoogleCloudDataplexV1DeleteEntryRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="deleteEntryLink" /></td>
    <td><code>object</code></td>
    <td>Payload for deleting an EntryLink. (id: GoogleCloudDataplexV1DeleteEntryLinkRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="deleteGlossary" /></td>
    <td><code>object</code></td>
    <td>Payload for deleting a Glossary. (id: GoogleCloudDataplexV1DeleteGlossaryRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="deleteGlossaryCategory" /></td>
    <td><code>object</code></td>
    <td>Payload for deleting a GlossaryCategory. (id: GoogleCloudDataplexV1DeleteGlossaryCategoryRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="deleteGlossaryTerm" /></td>
    <td><code>object</code></td>
    <td>Payload for deleting a GlossaryTerm. (id: GoogleCloudDataplexV1DeleteGlossaryTermRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. This checksum is computed by the service. It can be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="justification" /></td>
    <td><code>string</code></td>
    <td>Optional. Justification of the ChangeRequest. This should explain why the change is needed or why it should be approved.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the ChangeRequest.</td>
</tr>
<tr>
    <td><CopyableCode code="rejectionComment" /></td>
    <td><code>string</code></td>
    <td>Output only. The reason provided for rejecting the ChangeRequest.</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td>Output only. The full resource name of the target resource to be modified. Example: //dataplex.googleapis.com/projects/my-project/locations/us-central1/entryGroups/my-group/entries/my-entry</td>
</tr>
<tr>
    <td><CopyableCode code="reviewerComment" /></td>
    <td><code>string</code></td>
    <td>Output only. The comment provided by the reviewer when approving or rejecting the ChangeRequest. Maximum length is 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the ChangeRequest. (STATE_UNSPECIFIED, NEW, APPROVED, REJECTED, EXPIRED, REVOKED)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated globally unique ID for the ChangeRequest.</td>
</tr>
<tr>
    <td><CopyableCode code="updateEntry" /></td>
    <td><code>object</code></td>
    <td>Payload for updating an Entry. (id: GoogleCloudDataplexV1UpdateEntryRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="updateGlossary" /></td>
    <td><code>object</code></td>
    <td>Payload for updating a Glossary. (id: GoogleCloudDataplexV1UpdateGlossaryRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="updateGlossaryCategory" /></td>
    <td><code>object</code></td>
    <td>Payload for updating a GlossaryCategory. (id: GoogleCloudDataplexV1UpdateGlossaryCategoryRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="updateGlossaryTerm" /></td>
    <td><code>object</code></td>
    <td>Payload for updating a GlossaryTerm. (id: GoogleCloudDataplexV1UpdateGlossaryTermRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the ChangeRequest was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_change_requests_list">

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
    <td>Identifier. The relative resource name of the ChangeRequest, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/changeRequests/&#123;change_request_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="approver" /></td>
    <td><code>string</code></td>
    <td>Output only. The email address of the user who approved/rejected the ChangeRequest.</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>string</code></td>
    <td>Output only. The email address of the user who created the ChangeRequest.</td>
</tr>
<tr>
    <td><CopyableCode code="changeType" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of change represented by the change_payload. This field is derived from the populated field in the change_payload oneof. (CHANGE_TYPE_UNSPECIFIED, CREATE_ENTRY, UPDATE_ENTRY, DELETE_ENTRY, CREATE_ENTRY_LINK, DELETE_ENTRY_LINK, CREATE_GLOSSARY, UPDATE_GLOSSARY, DELETE_GLOSSARY, CREATE_GLOSSARY_CATEGORY, UPDATE_GLOSSARY_CATEGORY, DELETE_GLOSSARY_CATEGORY, CREATE_GLOSSARY_TERM, UPDATE_GLOSSARY_TERM, DELETE_GLOSSARY_TERM, REQUEST_DATA_PRODUCT_ACCESS)</td>
</tr>
<tr>
    <td><CopyableCode code="createEntry" /></td>
    <td><code>object</code></td>
    <td>Payload for creating an Entry. (id: GoogleCloudDataplexV1CreateEntryRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="createEntryLink" /></td>
    <td><code>object</code></td>
    <td>Payload for creating an EntryLink. (id: GoogleCloudDataplexV1CreateEntryLinkRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="createGlossary" /></td>
    <td><code>object</code></td>
    <td>Payload for creating a Glossary. (id: GoogleCloudDataplexV1CreateGlossaryRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="createGlossaryCategory" /></td>
    <td><code>object</code></td>
    <td>Payload for creating a GlossaryCategory. (id: GoogleCloudDataplexV1CreateGlossaryCategoryRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="createGlossaryTerm" /></td>
    <td><code>object</code></td>
    <td>Payload for creating a GlossaryTerm. (id: GoogleCloudDataplexV1CreateGlossaryTermRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the ChangeRequest was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataProductAccessRequest" /></td>
    <td><code>object</code></td>
    <td>Payload for Data Product access request. (id: GoogleCloudDataplexV1DataProductAccessRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="deleteEntry" /></td>
    <td><code>object</code></td>
    <td>Payload for deleting an Entry. (id: GoogleCloudDataplexV1DeleteEntryRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="deleteEntryLink" /></td>
    <td><code>object</code></td>
    <td>Payload for deleting an EntryLink. (id: GoogleCloudDataplexV1DeleteEntryLinkRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="deleteGlossary" /></td>
    <td><code>object</code></td>
    <td>Payload for deleting a Glossary. (id: GoogleCloudDataplexV1DeleteGlossaryRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="deleteGlossaryCategory" /></td>
    <td><code>object</code></td>
    <td>Payload for deleting a GlossaryCategory. (id: GoogleCloudDataplexV1DeleteGlossaryCategoryRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="deleteGlossaryTerm" /></td>
    <td><code>object</code></td>
    <td>Payload for deleting a GlossaryTerm. (id: GoogleCloudDataplexV1DeleteGlossaryTermRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. This checksum is computed by the service. It can be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="justification" /></td>
    <td><code>string</code></td>
    <td>Optional. Justification of the ChangeRequest. This should explain why the change is needed or why it should be approved.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the ChangeRequest.</td>
</tr>
<tr>
    <td><CopyableCode code="rejectionComment" /></td>
    <td><code>string</code></td>
    <td>Output only. The reason provided for rejecting the ChangeRequest.</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td>Output only. The full resource name of the target resource to be modified. Example: //dataplex.googleapis.com/projects/my-project/locations/us-central1/entryGroups/my-group/entries/my-entry</td>
</tr>
<tr>
    <td><CopyableCode code="reviewerComment" /></td>
    <td><code>string</code></td>
    <td>Output only. The comment provided by the reviewer when approving or rejecting the ChangeRequest. Maximum length is 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the ChangeRequest. (STATE_UNSPECIFIED, NEW, APPROVED, REJECTED, EXPIRED, REVOKED)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System generated globally unique ID for the ChangeRequest.</td>
</tr>
<tr>
    <td><CopyableCode code="updateEntry" /></td>
    <td><code>object</code></td>
    <td>Payload for updating an Entry. (id: GoogleCloudDataplexV1UpdateEntryRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="updateGlossary" /></td>
    <td><code>object</code></td>
    <td>Payload for updating a Glossary. (id: GoogleCloudDataplexV1UpdateGlossaryRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="updateGlossaryCategory" /></td>
    <td><code>object</code></td>
    <td>Payload for updating a GlossaryCategory. (id: GoogleCloudDataplexV1UpdateGlossaryCategoryRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="updateGlossaryTerm" /></td>
    <td><code>object</code></td>
    <td>Payload for updating a GlossaryTerm. (id: GoogleCloudDataplexV1UpdateGlossaryTermRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the ChangeRequest was last updated.</td>
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
    <td><a href="#projects_locations_change_requests_get"><CopyableCode code="projects_locations_change_requests_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-changeRequestsId"><code>changeRequestsId</code></a></td>
    <td></td>
    <td>Gets a ChangeRequest.</td>
</tr>
<tr>
    <td><a href="#projects_locations_change_requests_list"><CopyableCode code="projects_locations_change_requests_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists ChangeRequests.</td>
</tr>
<tr>
    <td><a href="#projects_locations_change_requests_patch"><CopyableCode code="projects_locations_change_requests_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-changeRequestsId"><code>changeRequestsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a ChangeRequest. Only allowed when the state is NEW.</td>
</tr>
<tr>
    <td><a href="#projects_locations_change_requests_delete"><CopyableCode code="projects_locations_change_requests_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-changeRequestsId"><code>changeRequestsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a ChangeRequest.Behavior depends on the caller's permissions and the resource's state: 1. Callers with dataplex.changeRequests.delete can only delete ChangeRequests in the NEW state. 2. Callers with the dataplex.changeRequests.adminDelete permission can delete ChangeRequests regardless of their state.</td>
</tr>
<tr>
    <td><a href="#projects_locations_change_requests_approve"><CopyableCode code="projects_locations_change_requests_approve" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-changeRequestsId"><code>changeRequestsId</code></a></td>
    <td></td>
    <td>Approves a ChangeRequest.</td>
</tr>
<tr>
    <td><a href="#projects_locations_change_requests_reject"><CopyableCode code="projects_locations_change_requests_reject" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-changeRequestsId"><code>changeRequestsId</code></a></td>
    <td></td>
    <td>Rejects a ChangeRequest.</td>
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
<tr id="parameter-changeRequestsId">
    <td><CopyableCode code="changeRequestsId" /></td>
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
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_change_requests_get"
    values={[
        { label: 'projects_locations_change_requests_get', value: 'projects_locations_change_requests_get' },
        { label: 'projects_locations_change_requests_list', value: 'projects_locations_change_requests_list' }
    ]}
>
<TabItem value="projects_locations_change_requests_get">

Gets a ChangeRequest.

```sql
SELECT
name,
approver,
author,
changeType,
createEntry,
createEntryLink,
createGlossary,
createGlossaryCategory,
createGlossaryTerm,
createTime,
dataProductAccessRequest,
deleteEntry,
deleteEntryLink,
deleteGlossary,
deleteGlossaryCategory,
deleteGlossaryTerm,
etag,
justification,
labels,
rejectionComment,
resource,
reviewerComment,
state,
uid,
updateEntry,
updateGlossary,
updateGlossaryCategory,
updateGlossaryTerm,
updateTime
FROM google.dataplex.change_requests
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND changeRequestsId = '{{ changeRequestsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_change_requests_list">

Lists ChangeRequests.

```sql
SELECT
name,
approver,
author,
changeType,
createEntry,
createEntryLink,
createGlossary,
createGlossaryCategory,
createGlossaryTerm,
createTime,
dataProductAccessRequest,
deleteEntry,
deleteEntryLink,
deleteGlossary,
deleteGlossaryCategory,
deleteGlossaryTerm,
etag,
justification,
labels,
rejectionComment,
resource,
reviewerComment,
state,
uid,
updateEntry,
updateGlossary,
updateGlossaryCategory,
updateGlossaryTerm,
updateTime
FROM google.dataplex.change_requests
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_change_requests_patch"
    values={[
        { label: 'projects_locations_change_requests_patch', value: 'projects_locations_change_requests_patch' }
    ]}
>
<TabItem value="projects_locations_change_requests_patch">

Updates a ChangeRequest. Only allowed when the state is NEW.

```sql
UPDATE google.dataplex.change_requests
SET 
data__createEntry = '{{ createEntry }}',
data__createEntryLink = '{{ createEntryLink }}',
data__createGlossary = '{{ createGlossary }}',
data__createGlossaryCategory = '{{ createGlossaryCategory }}',
data__createGlossaryTerm = '{{ createGlossaryTerm }}',
data__dataProductAccessRequest = '{{ dataProductAccessRequest }}',
data__deleteEntry = '{{ deleteEntry }}',
data__deleteEntryLink = '{{ deleteEntryLink }}',
data__deleteGlossary = '{{ deleteGlossary }}',
data__deleteGlossaryCategory = '{{ deleteGlossaryCategory }}',
data__deleteGlossaryTerm = '{{ deleteGlossaryTerm }}',
data__etag = '{{ etag }}',
data__justification = '{{ justification }}',
data__labels = '{{ labels }}',
data__name = '{{ name }}',
data__updateEntry = '{{ updateEntry }}',
data__updateGlossary = '{{ updateGlossary }}',
data__updateGlossaryCategory = '{{ updateGlossaryCategory }}',
data__updateGlossaryTerm = '{{ updateGlossaryTerm }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND changeRequestsId = '{{ changeRequestsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
approver,
author,
changeType,
createEntry,
createEntryLink,
createGlossary,
createGlossaryCategory,
createGlossaryTerm,
createTime,
dataProductAccessRequest,
deleteEntry,
deleteEntryLink,
deleteGlossary,
deleteGlossaryCategory,
deleteGlossaryTerm,
etag,
justification,
labels,
rejectionComment,
resource,
reviewerComment,
state,
uid,
updateEntry,
updateGlossary,
updateGlossaryCategory,
updateGlossaryTerm,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_change_requests_delete"
    values={[
        { label: 'projects_locations_change_requests_delete', value: 'projects_locations_change_requests_delete' }
    ]}
>
<TabItem value="projects_locations_change_requests_delete">

Deletes a ChangeRequest.Behavior depends on the caller's permissions and the resource's state: 1. Callers with dataplex.changeRequests.delete can only delete ChangeRequests in the NEW state. 2. Callers with the dataplex.changeRequests.adminDelete permission can delete ChangeRequests regardless of their state.

```sql
DELETE FROM google.dataplex.change_requests
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND changeRequestsId = '{{ changeRequestsId }}' --required
AND etag = '{{ etag }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_change_requests_approve"
    values={[
        { label: 'projects_locations_change_requests_approve', value: 'projects_locations_change_requests_approve' },
        { label: 'projects_locations_change_requests_reject', value: 'projects_locations_change_requests_reject' }
    ]}
>
<TabItem value="projects_locations_change_requests_approve">

Approves a ChangeRequest.

```sql
EXEC google.dataplex.change_requests.projects_locations_change_requests_approve 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@changeRequestsId='{{ changeRequestsId }}' --required 
@@json=
'{
"comment": "{{ comment }}", 
"etag": "{{ etag }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_change_requests_reject">

Rejects a ChangeRequest.

```sql
EXEC google.dataplex.change_requests.projects_locations_change_requests_reject 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@changeRequestsId='{{ changeRequestsId }}' --required 
@@json=
'{
"comment": "{{ comment }}", 
"etag": "{{ etag }}"
}'
;
```
</TabItem>
</Tabs>
