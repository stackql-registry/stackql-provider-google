--- 
title: m_shl_manifest
hide_title: false
hide_table_of_contents: false
keywords:
  - m_shl_manifest
  - health
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

Creates, updates, deletes, gets or lists a <code>m_shl_manifest</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="m_shl_manifest" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.health.m_shl_manifest" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_shl_manifest"
    values={[
        { label: 'get_shl_manifest', value: 'get_shl_manifest' }
    ]}
>
<TabItem value="get_shl_manifest">

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
    <td><CopyableCode code="contentType" /></td>
    <td><code>string</code></td>
    <td>The HTTP Content-Type header value specifying the content type of the body.</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>string (byte)</code></td>
    <td>The HTTP request/response body as raw binary.</td>
</tr>
<tr>
    <td><CopyableCode code="extensions" /></td>
    <td><code>array</code></td>
    <td>Application specific response metadata. Must be set in the first response for streaming APIs.</td>
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
    <td><a href="#get_shl_manifest"><CopyableCode code="get_shl_manifest" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-externalShlId"><code>externalShlId</code></a></td>
    <td></td>
    <td>Forward a manifest request for a given SHL</td>
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
<tr id="parameter-externalShlId">
    <td><CopyableCode code="externalShlId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_shl_manifest"
    values={[
        { label: 'get_shl_manifest', value: 'get_shl_manifest' }
    ]}
>
<TabItem value="get_shl_manifest">

Forward a manifest request for a given SHL

```sql
SELECT
contentType,
data,
extensions
FROM google.health.m_shl_manifest
WHERE externalShlId = '{{ externalShlId }}' -- required
;
```
</TabItem>
</Tabs>
