--- 
title: tag_binding_collections
hide_title: false
hide_table_of_contents: false
keywords:
  - tag_binding_collections
  - cloudresourcemanager
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

Creates, updates, deletes, gets or lists a <code>tag_binding_collections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tag_binding_collections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudresourcemanager.tag_binding_collections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
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
    <td>Identifier. The name of the TagBindingCollection, following the convention: `locations/&#123;location&#125;/tagBindingCollections/&#123;encoded-full-resource-name&#125;` where the encoded-full-resource-name is the UTF-8 encoded name of the GCP resource the TagBindings are bound to. "locations/global/tagBindingCollections/%2f%2fcloudresourcemanager.googleapis.com%2fprojects%2f123"</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. A checksum based on the current bindings which can be passed to prevent race conditions. This field is always set in server responses.</td>
</tr>
<tr>
    <td><CopyableCode code="fullResourceName" /></td>
    <td><code>string</code></td>
    <td>The full resource name of the resource the TagBindings are bound to. E.g. `//cloudresourcemanager.googleapis.com/projects/123`</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tag keys/values directly bound to this resource, specified in namespaced format. For example: "123/environment": "production"</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tagBindingCollectionsId"><code>tagBindingCollectionsId</code></a></td>
    <td></td>
    <td>Returns tag bindings directly attached to a GCP resource.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tagBindingCollectionsId"><code>tagBindingCollectionsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates tag bindings directly attached to a GCP resource. Update_mask can be kept empty or "*".</td>
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
<tr id="parameter-tagBindingCollectionsId">
    <td><CopyableCode code="tagBindingCollectionsId" /></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Returns tag bindings directly attached to a GCP resource.

```sql
SELECT
name,
etag,
fullResourceName,
tags
FROM google.cloudresourcemanager.tag_binding_collections
WHERE locationsId = '{{ locationsId }}' -- required
AND tagBindingCollectionsId = '{{ tagBindingCollectionsId }}' -- required
;
```
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

Updates tag bindings directly attached to a GCP resource. Update_mask can be kept empty or "*".

```sql
UPDATE google.cloudresourcemanager.tag_binding_collections
SET 
data__name = '{{ name }}',
data__tags = '{{ tags }}',
data__etag = '{{ etag }}',
data__fullResourceName = '{{ fullResourceName }}'
WHERE 
locationsId = '{{ locationsId }}' --required
AND tagBindingCollectionsId = '{{ tagBindingCollectionsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
done,
error,
metadata,
response;
```
</TabItem>
</Tabs>
