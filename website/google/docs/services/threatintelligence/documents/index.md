--- 
title: documents
hide_title: false
hide_table_of_contents: false
keywords:
  - documents
  - threatintelligence
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

Creates, updates, deletes, gets or lists a <code>documents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="documents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.threatintelligence.documents" /></td></tr>
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
    <td>Identifier. Server generated name for the alert document. format is projects/&#123;project&#125;/alerts/&#123;alert&#125;/documents/&#123;document&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="aiSummary" /></td>
    <td><code>string</code></td>
    <td>Output only. AI summary of the document.</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>string</code></td>
    <td>Output only. The author of the document.</td>
</tr>
<tr>
    <td><CopyableCode code="collectionTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the origin source collected the intel.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>Output only. The content of the document.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of the original external publication of the document.</td>
</tr>
<tr>
    <td><CopyableCode code="ingestTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when GTI received the intel.</td>
</tr>
<tr>
    <td><CopyableCode code="languageCode" /></td>
    <td><code>string</code></td>
    <td>Output only. The language code of the document.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>Output only. Source of the intel item, e.g. DarkMarket.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceUpdateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the intel was last updated by the source.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceUri" /></td>
    <td><code>string</code></td>
    <td>Output only. URI of the intel item from the source.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Output only. The title of the document, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="translation" /></td>
    <td><code>object</code></td>
    <td>Output only. The translation of the document, if available. (id: AlertDocumentTranslation)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-alertsId"><code>alertsId</code></a>, <a href="#parameter-documentsId"><code>documentsId</code></a></td>
    <td></td>
    <td>Gets a specific document associated with an alert.</td>
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
<tr id="parameter-alertsId">
    <td><CopyableCode code="alertsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-documentsId">
    <td><CopyableCode code="documentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
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

Gets a specific document associated with an alert.

```sql
SELECT
name,
aiSummary,
author,
collectionTime,
content,
createTime,
ingestTime,
languageCode,
source,
sourceUpdateTime,
sourceUri,
title,
translation
FROM google.threatintelligence.documents
WHERE projectsId = '{{ projectsId }}' -- required
AND alertsId = '{{ alertsId }}' -- required
AND documentsId = '{{ documentsId }}' -- required
;
```
</TabItem>
</Tabs>
