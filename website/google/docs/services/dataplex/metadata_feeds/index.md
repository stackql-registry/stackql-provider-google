--- 
title: metadata_feeds
hide_title: false
hide_table_of_contents: false
keywords:
  - metadata_feeds
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

Creates, updates, deletes, gets or lists a <code>metadata_feeds</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="metadata_feeds" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.metadata_feeds" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_metadata_feeds_get"
    values={[
        { label: 'projects_locations_metadata_feeds_get', value: 'projects_locations_metadata_feeds_get' },
        { label: 'projects_locations_metadata_feeds_list', value: 'projects_locations_metadata_feeds_list' }
    ]}
>
<TabItem value="projects_locations_metadata_feeds_get">

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
    <td>Identifier. The resource name of the metadata feed, in the format projects/&#123;project_id_or_number&#125;/locations/&#123;location_id&#125;/metadataFeeds/&#123;metadata_feed_id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the feed was created.</td>
</tr>
<tr>
    <td><CopyableCode code="filters" /></td>
    <td><code>object</code></td>
    <td>Optional. The filters of the metadata feed. Only the changes that match the filters are published. (id: GoogleCloudDataplexV1MetadataFeedFilters)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels.</td>
</tr>
<tr>
    <td><CopyableCode code="pubsubTopic" /></td>
    <td><code>string</code></td>
    <td>Optional. The pubsub topic that you want the metadata feed messages to publish to. Please grant Dataplex service account the permission to publish messages to the topic. The service account is: service-&#123;PROJECT_NUMBER&#125;@gcp-sa-dataplex.iam.gserviceaccount.com.</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>object</code></td>
    <td>Required. The scope of the metadata feed. Only the in scope changes are published. (id: GoogleCloudDataplexV1MetadataFeedScope)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. A system-generated, globally unique ID for the metadata job. If the metadata job is deleted and then re-created with the same name, this ID is different.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the feed was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_metadata_feeds_list">

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
    <td><a href="#projects_locations_metadata_feeds_get"><CopyableCode code="projects_locations_metadata_feeds_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-metadataFeedsId"><code>metadataFeedsId</code></a></td>
    <td></td>
    <td>Gets a MetadataFeed.</td>
</tr>
<tr>
    <td><a href="#projects_locations_metadata_feeds_list"><CopyableCode code="projects_locations_metadata_feeds_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Retrieve a list of MetadataFeeds.</td>
</tr>
<tr>
    <td><a href="#projects_locations_metadata_feeds_create"><CopyableCode code="projects_locations_metadata_feeds_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-metadataFeedId"><code>metadataFeedId</code></a></td>
    <td>Creates a MetadataFeed.</td>
</tr>
<tr>
    <td><a href="#projects_locations_metadata_feeds_patch"><CopyableCode code="projects_locations_metadata_feeds_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-metadataFeedsId"><code>metadataFeedsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates a MetadataFeed.</td>
</tr>
<tr>
    <td><a href="#projects_locations_metadata_feeds_delete"><CopyableCode code="projects_locations_metadata_feeds_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-metadataFeedsId"><code>metadataFeedsId</code></a></td>
    <td></td>
    <td>Deletes a MetadataFeed.</td>
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
<tr id="parameter-metadataFeedsId">
    <td><CopyableCode code="metadataFeedsId" /></td>
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
<tr id="parameter-metadataFeedId">
    <td><CopyableCode code="metadataFeedId" /></td>
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
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_metadata_feeds_get"
    values={[
        { label: 'projects_locations_metadata_feeds_get', value: 'projects_locations_metadata_feeds_get' },
        { label: 'projects_locations_metadata_feeds_list', value: 'projects_locations_metadata_feeds_list' }
    ]}
>
<TabItem value="projects_locations_metadata_feeds_get">

Gets a MetadataFeed.

```sql
SELECT
name,
createTime,
filters,
labels,
pubsubTopic,
scope,
uid,
updateTime
FROM google.dataplex.metadata_feeds
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND metadataFeedsId = '{{ metadataFeedsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_metadata_feeds_list">

Retrieve a list of MetadataFeeds.

```sql
SELECT
*
FROM google.dataplex.metadata_feeds
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND orderBy = '{{ orderBy }}'
AND filter = '{{ filter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_metadata_feeds_create"
    values={[
        { label: 'projects_locations_metadata_feeds_create', value: 'projects_locations_metadata_feeds_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_metadata_feeds_create">

Creates a MetadataFeed.

```sql
INSERT INTO google.dataplex.metadata_feeds (
data__scope,
data__filters,
data__labels,
data__name,
data__pubsubTopic,
projectsId,
locationsId,
validateOnly,
metadataFeedId
)
SELECT 
'{{ scope }}',
'{{ filters }}',
'{{ labels }}',
'{{ name }}',
'{{ pubsubTopic }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ validateOnly }}',
'{{ metadataFeedId }}'
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
- name: metadata_feeds
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the metadata_feeds resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the metadata_feeds resource.
    - name: scope
      description: |
        Required. The scope of the metadata feed. Only the in scope changes are published.
      value:
        organizationLevel: {{ organizationLevel }}
        projects:
          - "{{ projects }}"
        entryGroups:
          - "{{ entryGroups }}"
    - name: filters
      description: |
        Optional. The filters of the metadata feed. Only the changes that match the filters are published.
      value:
        changeTypes:
          - "{{ changeTypes }}"
        entryTypes:
          - "{{ entryTypes }}"
        aspectTypes:
          - "{{ aspectTypes }}"
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. User-defined labels.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The resource name of the metadata feed, in the format projects/{project_id_or_number}/locations/{location_id}/metadataFeeds/{metadata_feed_id}.
    - name: pubsubTopic
      value: "{{ pubsubTopic }}"
      description: |
        Optional. The pubsub topic that you want the metadata feed messages to publish to. Please grant Dataplex service account the permission to publish messages to the topic. The service account is: service-{PROJECT_NUMBER}@gcp-sa-dataplex.iam.gserviceaccount.com.
    - name: validateOnly
      value: {{ validateOnly }}
    - name: metadataFeedId
      value: "{{ metadataFeedId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_metadata_feeds_patch"
    values={[
        { label: 'projects_locations_metadata_feeds_patch', value: 'projects_locations_metadata_feeds_patch' }
    ]}
>
<TabItem value="projects_locations_metadata_feeds_patch">

Updates a MetadataFeed.

```sql
UPDATE google.dataplex.metadata_feeds
SET 
data__scope = '{{ scope }}',
data__filters = '{{ filters }}',
data__labels = '{{ labels }}',
data__name = '{{ name }}',
data__pubsubTopic = '{{ pubsubTopic }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND metadataFeedsId = '{{ metadataFeedsId }}' --required
AND updateMask = '{{ updateMask}}'
AND validateOnly = {{ validateOnly}}
RETURNING
name,
done,
error,
metadata,
response;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_metadata_feeds_delete"
    values={[
        { label: 'projects_locations_metadata_feeds_delete', value: 'projects_locations_metadata_feeds_delete' }
    ]}
>
<TabItem value="projects_locations_metadata_feeds_delete">

Deletes a MetadataFeed.

```sql
DELETE FROM google.dataplex.metadata_feeds
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND metadataFeedsId = '{{ metadataFeedsId }}' --required
;
```
</TabItem>
</Tabs>
