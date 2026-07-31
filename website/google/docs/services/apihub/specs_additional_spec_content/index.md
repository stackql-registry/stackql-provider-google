--- 
title: specs_additional_spec_content
hide_title: false
hide_table_of_contents: false
keywords:
  - specs_additional_spec_content
  - apihub
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

Creates, updates, deletes, gets or lists a <code>specs_additional_spec_content</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="specs_additional_spec_content" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apihub.specs_additional_spec_content" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="fetch_additional_spec_content"
    values={[
        { label: 'fetch_additional_spec_content', value: 'fetch_additional_spec_content' }
    ]}
>
<TabItem value="fetch_additional_spec_content">

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
    <td><CopyableCode code="additionalSpecContent" /></td>
    <td><code>object</code></td>
    <td>The additional spec content for the spec. This contains the metadata and the last update time for the additional spec content. (id: GoogleCloudApihubV1AdditionalSpecContent)</td>
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
    <td><a href="#fetch_additional_spec_content"><CopyableCode code="fetch_additional_spec_content" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-apisId"><code>apisId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a>, <a href="#parameter-specsId"><code>specsId</code></a></td>
    <td><a href="#parameter-specContentType"><code>specContentType</code></a></td>
    <td>Fetch additional spec content.</td>
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
<tr id="parameter-apisId">
    <td><CopyableCode code="apisId" /></td>
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
<tr id="parameter-specsId">
    <td><CopyableCode code="specsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-versionsId">
    <td><CopyableCode code="versionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-specContentType">
    <td><CopyableCode code="specContentType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="fetch_additional_spec_content"
    values={[
        { label: 'fetch_additional_spec_content', value: 'fetch_additional_spec_content' }
    ]}
>
<TabItem value="fetch_additional_spec_content">

Fetch additional spec content.

```sql
SELECT
additionalSpecContent
FROM google.apihub.specs_additional_spec_content
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND apisId = '{{ apisId }}' -- required
AND versionsId = '{{ versionsId }}' -- required
AND specsId = '{{ specsId }}' -- required
AND specContentType = '{{ specContentType }}'
;
```
</TabItem>
</Tabs>
