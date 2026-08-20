--- 
title: documents
hide_title: false
hide_table_of_contents: false
keywords:
  - documents
  - developerknowledge
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.developerknowledge.documents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'batch_get', value: 'batch_get' }
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
    <td>Identifier. Contains the resource name of the document. Format: `documents/&#123;uri_without_scheme&#125;` Example: `documents/docs.cloud.google.com/storage/docs/creating-buckets`</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>Output only. Contains the full content of the document in Markdown format.</td>
</tr>
<tr>
    <td><CopyableCode code="contentLengthBytes" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The length of the `content` field in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSource" /></td>
    <td><code>string</code></td>
    <td>Output only. Specifies the data source of the document. Example data source: `firebase.google.com`</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Output only. Provides a description of the document.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Output only. Provides the title of the document.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Represents the timestamp when the content or metadata of the document was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="uri" /></td>
    <td><code>string</code></td>
    <td>Output only. Provides the URI of the content, such as `docs.cloud.google.com/storage/docs/creating-buckets`.</td>
</tr>
<tr>
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
    <td>Output only. Specifies the DocumentView of the document. (DOCUMENT_VIEW_UNSPECIFIED, DOCUMENT_VIEW_BASIC, DOCUMENT_VIEW_FULL, DOCUMENT_VIEW_CONTENT)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="batch_get">

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
    <td><CopyableCode code="documents" /></td>
    <td><code>array</code></td>
    <td>Contains the documents requested.</td>
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
    <td><a href="#parameter-documentsId"><code>documentsId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Retrieves a single document with its full Markdown content.</td>
</tr>
<tr>
    <td><a href="#batch_get"><CopyableCode code="batch_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-names"><code>names</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Retrieves multiple documents, each with its full Markdown content.</td>
</tr>
<tr>
    <td><a href="#search_document_chunks"><CopyableCode code="search_document_chunks" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-query"><code>query</code></a></td>
    <td>Searches for developer knowledge across Google's developer documentation. Returns DocumentChunks based on the user's query. There may be many chunks from the same Document. To retrieve full documents, use DeveloperKnowledge.GetDocument or DeveloperKnowledge.BatchGetDocuments with the DocumentChunk.parent returned in the SearchDocumentChunksResponse.results.</td>
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
<tr id="parameter-documentsId">
    <td><CopyableCode code="documentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-names">
    <td><CopyableCode code="names" /></td>
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
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
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
        { label: 'batch_get', value: 'batch_get' }
    ]}
>
<TabItem value="get">

Retrieves a single document with its full Markdown content.

```sql
SELECT
name,
content,
contentLengthBytes,
dataSource,
description,
title,
updateTime,
uri,
view
FROM google.developerknowledge.documents
WHERE documentsId = '{{ documentsId }}' -- required
AND view = '{{ view }}'
;
```
</TabItem>
<TabItem value="batch_get">

Retrieves multiple documents, each with its full Markdown content.

```sql
SELECT
documents
FROM google.developerknowledge.documents
WHERE names = '{{ names }}'
AND view = '{{ view }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="search_document_chunks"
    values={[
        { label: 'search_document_chunks', value: 'search_document_chunks' }
    ]}
>
<TabItem value="search_document_chunks">

Searches for developer knowledge across Google's developer documentation. Returns DocumentChunks based on the user's query. There may be many chunks from the same Document. To retrieve full documents, use DeveloperKnowledge.GetDocument or DeveloperKnowledge.BatchGetDocuments with the DocumentChunk.parent returned in the SearchDocumentChunksResponse.results.

```sql
EXEC google.developerknowledge.documents.search_document_chunks 
@filter='{{ filter }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}', 
@query='{{ query }}'
;
```
</TabItem>
</Tabs>
