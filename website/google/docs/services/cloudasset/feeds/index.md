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
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>feeds</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>feeds</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudasset.feeds" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
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
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-parentType"><code>parentType</code></a>, <a href="#parameter-parent"><code>parent</code></a></td>
    <td></td>
    <td>Creates a feed in a parent project/folder/organization to listen to its asset updates.</td>
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
        { label: 'list', value: 'list' }
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

```yaml
# Description fields are for documentation purposes
- name: feeds
  props:
    - name: parentType
      value: string
      description: Required parameter for the feeds resource.
    - name: parent
      value: string
      description: Required parameter for the feeds resource.
    - name: feed
      value: object
      description: >
        An asset feed used to export asset updates to a destinations. An asset feed filter controls what updates are exported. The asset feed must be created within a project, organization, or folder. Supported destinations are: Pub/Sub topics.
        
    - name: feedId
      value: string
      description: >
        Required. This is the client-assigned asset feed identifier and it needs to be unique under a specific parent project/folder/organization.
        
```
</TabItem>
</Tabs>
