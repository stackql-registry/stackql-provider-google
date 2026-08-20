--- 
title: rapid_caches
hide_title: false
hide_table_of_contents: false
keywords:
  - rapid_caches
  - storage
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

Creates, updates, deletes, gets or lists a <code>rapid_caches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rapid_caches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.storage.rapid_caches" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource, including the project number, bucket name and rapid cache ID.</td>
</tr>
<tr>
    <td><CopyableCode code="admissionPolicy" /></td>
    <td><code>string</code></td>
    <td>The cache-level entry admission policy.</td>
</tr>
<tr>
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the bucket containing this cache instance.</td>
</tr>
<tr>
    <td><CopyableCode code="cacheType" /></td>
    <td><code>string</code></td>
    <td>The type of Rapid Cache this represents. Valid values include: "rapid-cache" and "rapid-cache-ultra".</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the cache instance in RFC 3339 format.</td>
</tr>
<tr>
    <td><CopyableCode code="ingestOnWrite" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether objects are ingested into the cache upon write.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The kind of item this is. For Rapid Cache, this is always storage#rapidCache. (default: storage#rapidCache)</td>
</tr>
<tr>
    <td><CopyableCode code="pendingUpdate" /></td>
    <td><code>boolean</code></td>
    <td>True if the cache instance has an active Update long-running operation.</td>
</tr>
<tr>
    <td><CopyableCode code="rapidCacheId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Rapid cache instance.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>The link to this cache instance.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the cache instance.</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>The TTL of all cache entries in whole seconds. e.g., "7200s".</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The modification time of the cache instance metadata in RFC 3339 format.</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>The zone in which the cache instance is running. For example, us-central1-a.</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource, including the project number, bucket name and rapid cache ID.</td>
</tr>
<tr>
    <td><CopyableCode code="admissionPolicy" /></td>
    <td><code>string</code></td>
    <td>The cache-level entry admission policy.</td>
</tr>
<tr>
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the bucket containing this cache instance.</td>
</tr>
<tr>
    <td><CopyableCode code="cacheType" /></td>
    <td><code>string</code></td>
    <td>The type of Rapid Cache this represents. Valid values include: "rapid-cache" and "rapid-cache-ultra".</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the cache instance in RFC 3339 format.</td>
</tr>
<tr>
    <td><CopyableCode code="ingestOnWrite" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether objects are ingested into the cache upon write.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The kind of item this is. For Rapid Cache, this is always storage#rapidCache. (default: storage#rapidCache)</td>
</tr>
<tr>
    <td><CopyableCode code="pendingUpdate" /></td>
    <td><code>boolean</code></td>
    <td>True if the cache instance has an active Update long-running operation.</td>
</tr>
<tr>
    <td><CopyableCode code="rapidCacheId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Rapid cache instance.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>The link to this cache instance.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the cache instance.</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>The TTL of all cache entries in whole seconds. e.g., "7200s".</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The modification time of the cache instance metadata in RFC 3339 format.</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>The zone in which the cache instance is running. For example, us-central1-a.</td>
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
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-rapidCacheId"><code>rapidCacheId</code></a></td>
    <td></td>
    <td>Returns the metadata of a Rapid Cache instance.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns a list of Rapid Cache instances of the bucket.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a></td>
    <td></td>
    <td>Creates a Rapid Cache instance.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-rapidCacheId"><code>rapidCacheId</code></a></td>
    <td></td>
    <td>Updates the configuration of a Rapid Cache instance.</td>
</tr>
<tr>
    <td><a href="#disable"><CopyableCode code="disable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-rapidCacheId"><code>rapidCacheId</code></a></td>
    <td></td>
    <td>Disables a Rapid Cache instance.</td>
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
<tr id="parameter-bucket">
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-rapidCacheId">
    <td><CopyableCode code="rapidCacheId" /></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Returns the metadata of a Rapid Cache instance.

```sql
SELECT
id,
admissionPolicy,
bucket,
cacheType,
createTime,
ingestOnWrite,
kind,
pendingUpdate,
rapidCacheId,
selfLink,
state,
ttl,
updateTime,
zone
FROM google.storage.rapid_caches
WHERE bucket = '{{ bucket }}' -- required
AND rapidCacheId = '{{ rapidCacheId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns a list of Rapid Cache instances of the bucket.

```sql
SELECT
id,
admissionPolicy,
bucket,
cacheType,
createTime,
ingestOnWrite,
kind,
pendingUpdate,
rapidCacheId,
selfLink,
state,
ttl,
updateTime,
zone
FROM google.storage.rapid_caches
WHERE bucket = '{{ bucket }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="insert"
    values={[
        { label: 'insert', value: 'insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert">

Creates a Rapid Cache instance.

```sql
INSERT INTO google.storage.rapid_caches (
data__admissionPolicy,
data__bucket,
data__cacheType,
data__createTime,
data__id,
data__ingestOnWrite,
data__kind,
data__pendingUpdate,
data__rapidCacheId,
data__selfLink,
data__state,
data__ttl,
data__updateTime,
data__zone,
bucket
)
SELECT 
'{{ admissionPolicy }}',
'{{ bucket }}',
'{{ cacheType }}',
'{{ createTime }}',
'{{ id }}',
{{ ingestOnWrite }},
'{{ kind }}',
{{ pendingUpdate }},
'{{ rapidCacheId }}',
'{{ selfLink }}',
'{{ state }}',
'{{ ttl }}',
'{{ updateTime }}',
'{{ zone }}',
'{{ bucket }}'
RETURNING
name,
done,
error,
kind,
metadata,
response,
selfLink
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rapid_caches
  props:
    - name: bucket
      value: "{{ bucket }}"
      description: Required parameter for the rapid_caches resource.
    - name: admissionPolicy
      value: "{{ admissionPolicy }}"
      description: |
        The cache-level entry admission policy.
    - name: bucket
      value: "{{ bucket }}"
      description: |
        The name of the bucket containing this cache instance.
    - name: cacheType
      value: "{{ cacheType }}"
      description: |
        The type of Rapid Cache this represents. Valid values include: "rapid-cache" and "rapid-cache-ultra".
    - name: createTime
      value: "{{ createTime }}"
      description: |
        The creation time of the cache instance in RFC 3339 format.
    - name: id
      value: "{{ id }}"
      description: |
        The ID of the resource, including the project number, bucket name and rapid cache ID.
    - name: ingestOnWrite
      value: {{ ingestOnWrite }}
      description: |
        Specifies whether objects are ingested into the cache upon write.
    - name: kind
      value: "{{ kind }}"
      description: |
        The kind of item this is. For Rapid Cache, this is always storage#rapidCache.
      default: storage#rapidCache
    - name: pendingUpdate
      value: {{ pendingUpdate }}
      description: |
        True if the cache instance has an active Update long-running operation.
    - name: rapidCacheId
      value: "{{ rapidCacheId }}"
      description: |
        The ID of the Rapid cache instance.
    - name: selfLink
      value: "{{ selfLink }}"
      description: |
        The link to this cache instance.
    - name: state
      value: "{{ state }}"
      description: |
        The current state of the cache instance.
    - name: ttl
      value: "{{ ttl }}"
      description: |
        The TTL of all cache entries in whole seconds. e.g., "7200s".
    - name: updateTime
      value: "{{ updateTime }}"
      description: |
        The modification time of the cache instance metadata in RFC 3339 format.
    - name: zone
      value: "{{ zone }}"
      description: |
        The zone in which the cache instance is running. For example, us-central1-a.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates the configuration of a Rapid Cache instance.

```sql
UPDATE google.storage.rapid_caches
SET 
data__admissionPolicy = '{{ admissionPolicy }}',
data__bucket = '{{ bucket }}',
data__cacheType = '{{ cacheType }}',
data__createTime = '{{ createTime }}',
data__id = '{{ id }}',
data__ingestOnWrite = {{ ingestOnWrite }},
data__kind = '{{ kind }}',
data__pendingUpdate = {{ pendingUpdate }},
data__rapidCacheId = '{{ rapidCacheId }}',
data__selfLink = '{{ selfLink }}',
data__state = '{{ state }}',
data__ttl = '{{ ttl }}',
data__updateTime = '{{ updateTime }}',
data__zone = '{{ zone }}'
WHERE 
bucket = '{{ bucket }}' --required
AND rapidCacheId = '{{ rapidCacheId }}' --required
RETURNING
name,
done,
error,
kind,
metadata,
response,
selfLink;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable"
    values={[
        { label: 'disable', value: 'disable' }
    ]}
>
<TabItem value="disable">

Disables a Rapid Cache instance.

```sql
EXEC google.storage.rapid_caches.disable 
@bucket='{{ bucket }}' --required, 
@rapidCacheId='{{ rapidCacheId }}' --required
;
```
</TabItem>
</Tabs>
