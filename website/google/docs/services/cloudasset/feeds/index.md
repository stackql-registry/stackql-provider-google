--- 
title: feeds
hide_title: false
hide_table_of_contents: false
keywords:
  - feeds
  - cloudasset
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

Creates, updates, deletes, gets or lists a <code>feeds</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="feeds" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudasset.feeds" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' },
        { label: 'get', value: 'get' }
    ]}
>
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
    <td><CopyableCode code="feeds" /></td>
    <td><code>array</code></td>
    <td>A list of feeds.</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td>Required. The format will be projects/&#123;project_number&#125;/feeds/&#123;client-assigned_feed_identifier&#125; or folders/&#123;folder_number&#125;/feeds/&#123;client-assigned_feed_identifier&#125; or organizations/&#123;organization_number&#125;/feeds/&#123;client-assigned_feed_identifier&#125; The client-assigned feed identifier must be unique within the parent project/folder/organization.</td>
</tr>
<tr>
    <td><CopyableCode code="assetNames" /></td>
    <td><code>array</code></td>
    <td>A list of the full names of the assets to receive updates. You must specify either or both of asset_names and asset_types. Only asset updates matching specified asset_names or asset_types are exported to the feed. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. For a list of the full names for supported asset types, see [Resource name format](/asset-inventory/docs/resource-name-format).</td>
</tr>
<tr>
    <td><CopyableCode code="assetTypes" /></td>
    <td><code>array</code></td>
    <td>A list of types of the assets to receive updates. You must specify either or both of asset_names and asset_types. Only asset updates matching specified asset_names or asset_types are exported to the feed. Example: `"compute.googleapis.com/Disk"` For a list of all supported asset types, see [Supported asset types](/asset-inventory/docs/supported-asset-types).</td>
</tr>
<tr>
    <td><CopyableCode code="condition" /></td>
    <td><code>object</code></td>
    <td>A condition which determines whether an asset update should be published. If specified, an asset will be returned only when the expression evaluates to true. When set, `expression` field in the `Expr` must be a valid [CEL expression] (https://github.com/google/cel-spec) on a TemporalAsset with name `temporal_asset`. Example: a Feed with expression ("temporal_asset.deleted == true") will only publish Asset deletions. Other fields of `Expr` are optional. See our [user guide](https://cloud.google.com/asset-inventory/docs/monitoring-asset-changes-with-condition) for detailed instructions. (id: Expr)</td>
</tr>
<tr>
    <td><CopyableCode code="contentType" /></td>
    <td><code>string</code></td>
    <td>Asset content type. If not specified, no content but the asset name and type will be returned. (CONTENT_TYPE_UNSPECIFIED, RESOURCE, IAM_POLICY, ORG_POLICY, ACCESS_POLICY, OS_INVENTORY, RELATIONSHIP)</td>
</tr>
<tr>
    <td><CopyableCode code="feedOutputConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Feed output configuration defining where the asset updates are published to. (id: FeedOutputConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="relationshipTypes" /></td>
    <td><code>array</code></td>
    <td>A list of relationship types to output, for example: `INSTANCE_TO_INSTANCEGROUP`. This field should only be specified if content_type=RELATIONSHIP. * If specified: it outputs specified relationship updates on the [asset_names] or the [asset_types]. It returns an error if any of the [relationship_types] doesn't belong to the supported relationship types of the [asset_names] or [asset_types], or any of the [asset_names] or the [asset_types] doesn't belong to the source types of the [relationship_types]. * Otherwise: it outputs the supported relationships of the types of [asset_names] and [asset_types] or returns an error if any of the [asset_names] or the [asset_types] has no replationship support. See [Introduction to Cloud Asset Inventory](https://cloud.google.com/asset-inventory/docs/overview) for all supported asset types and relationship types.</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-parentType"><code>parentType</code></a>, <a href="#parameter-parent"><code>parent</code></a></td>
    <td></td>
    <td>Lists all asset feeds in a parent project/folder/organization.</td>
</tr>
<tr>
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Gets details about an asset feed.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-parentType"><code>parentType</code></a>, <a href="#parameter-parent"><code>parent</code></a></td>
    <td></td>
    <td>Creates a feed in a parent project/folder/organization to listen to its asset updates.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Updates an asset feed configuration.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Deletes an asset feed.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-parent">
    <td><CopyableCode code="parent" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-parentType">
    <td><CopyableCode code="parentType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' },
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="list">

Lists all asset feeds in a parent project/folder/organization.

```sql
SELECT
feeds
FROM google.cloudasset.feeds
WHERE parentType = '{{ parentType }}' -- required
AND parent = '{{ parent }}' -- required
;
```
</TabItem>
<TabItem value="get">

Gets details about an asset feed.

```sql
SELECT
name,
assetNames,
assetTypes,
condition,
contentType,
feedOutputConfig,
relationshipTypes
FROM google.cloudasset.feeds
WHERE name = '{{ name }}' -- required
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

Creates a feed in a parent project/folder/organization to listen to its asset updates.

```sql
INSERT INTO google.cloudasset.feeds (
data__feed,
data__feedId,
parentType,
parent
)
SELECT 
'{{ feed }}',
'{{ feedId }}',
'{{ parentType }}',
'{{ parent }}'
RETURNING
name,
assetNames,
assetTypes,
condition,
contentType,
feedOutputConfig,
relationshipTypes
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: feeds
  props:
    - name: parentType
      value: "{{ parentType }}"
      description: Required parameter for the feeds resource.
    - name: parent
      value: "{{ parent }}"
      description: Required parameter for the feeds resource.
    - name: feed
      description: |
        Required. The feed details. The field \`name\` must be empty and it will be generated in the format of: projects/project_number/feeds/feed_id folders/folder_number/feeds/feed_id organizations/organization_number/feeds/feed_id
      value:
        assetNames:
          - "{{ assetNames }}"
        assetTypes:
          - "{{ assetTypes }}"
        condition:
          description: "{{ description }}"
          expression: "{{ expression }}"
          location: "{{ location }}"
          title: "{{ title }}"
        contentType: "{{ contentType }}"
        feedOutputConfig:
          pubsubDestination:
            topic: "{{ topic }}"
        name: "{{ name }}"
        relationshipTypes:
          - "{{ relationshipTypes }}"
    - name: feedId
      value: "{{ feedId }}"
      description: |
        Required. This is the client-assigned asset feed identifier and it needs to be unique under a specific parent project/folder/organization.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' }
    ]}
>
<TabItem value="patch">

Updates an asset feed configuration.

```sql
UPDATE google.cloudasset.feeds
SET 
data__feed = '{{ feed }}',
data__updateMask = '{{ updateMask }}'
WHERE 
name = '{{ name }}' --required
RETURNING
name,
assetNames,
assetTypes,
condition,
contentType,
feedOutputConfig,
relationshipTypes;
```
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

Deletes an asset feed.

```sql
DELETE FROM google.cloudasset.feeds
WHERE name = '{{ name }}' --required
;
```
</TabItem>
</Tabs>
