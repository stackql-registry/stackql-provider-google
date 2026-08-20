--- 
title: saved_queries
hide_title: false
hide_table_of_contents: false
keywords:
  - saved_queries
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

Creates, updates, deletes, gets or lists a <code>saved_queries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="saved_queries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudasset.saved_queries" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The resource name of the saved query. The format must be: * projects/project_number/savedQueries/saved_query_id * folders/folder_number/savedQueries/saved_query_id * organizations/organization_number/savedQueries/saved_query_id</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>The query content. (id: QueryContent)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The create time of this saved query.</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>string</code></td>
    <td>Output only. The account's email address who has created this saved query.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of this saved query. This value should be fewer than 255 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels applied on the resource. This value should not contain more than 10 entries. The key and value of each entry must be non-empty and fewer than 64 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update time of this saved query.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdater" /></td>
    <td><code>string</code></td>
    <td>Output only. The account's email address who has updated this saved query most recently.</td>
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
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all saved queries in a parent project/folder/organization.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-parentType"><code>parentType</code></a>, <a href="#parameter-parent"><code>parent</code></a></td>
    <td><a href="#parameter-savedQueryId"><code>savedQueryId</code></a></td>
    <td>Creates a saved query in a parent project/folder/organization.</td>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
<tr id="parameter-savedQueryId">
    <td><CopyableCode code="savedQueryId" /></td>
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

Lists all saved queries in a parent project/folder/organization.

```sql
SELECT
name,
content,
createTime,
creator,
description,
labels,
lastUpdateTime,
lastUpdater
FROM google.cloudasset.saved_queries
WHERE parentType = '{{ parentType }}' -- required
AND parent = '{{ parent }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
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

Creates a saved query in a parent project/folder/organization.

```sql
INSERT INTO google.cloudasset.saved_queries (
data__content,
data__description,
data__labels,
data__name,
parentType,
parent,
savedQueryId
)
SELECT 
'{{ content }}',
'{{ description }}',
'{{ labels }}',
'{{ name }}',
'{{ parentType }}',
'{{ parent }}',
'{{ savedQueryId }}'
RETURNING
name,
content,
createTime,
creator,
description,
labels,
lastUpdateTime,
lastUpdater
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: saved_queries
  props:
    - name: parentType
      value: "{{ parentType }}"
      description: Required parameter for the saved_queries resource.
    - name: parent
      value: "{{ parent }}"
      description: Required parameter for the saved_queries resource.
    - name: content
      description: |
        The query content.
      value:
        iamPolicyAnalysisQuery:
          accessSelector:
            permissions:
              - "{{ permissions }}"
            roles:
              - "{{ roles }}"
          conditionContext:
            accessTime: "{{ accessTime }}"
          identitySelector:
            identity: "{{ identity }}"
          options:
            analyzeServiceAccountImpersonation: {{ analyzeServiceAccountImpersonation }}
            expandGroups: {{ expandGroups }}
            expandResources: {{ expandResources }}
            expandRoles: {{ expandRoles }}
            outputGroupEdges: {{ outputGroupEdges }}
            outputResourceEdges: {{ outputResourceEdges }}
          resourceSelector:
            fullResourceName: "{{ fullResourceName }}"
          scope: "{{ scope }}"
    - name: description
      value: "{{ description }}"
      description: |
        The description of this saved query. This value should be fewer than 255 characters.
    - name: labels
      value: "{{ labels }}"
      description: |
        Labels applied on the resource. This value should not contain more than 10 entries. The key and value of each entry must be non-empty and fewer than 64 characters.
    - name: name
      value: "{{ name }}"
      description: |
        The resource name of the saved query. The format must be: * projects/project_number/savedQueries/saved_query_id * folders/folder_number/savedQueries/saved_query_id * organizations/organization_number/savedQueries/saved_query_id
    - name: savedQueryId
      value: "{{ savedQueryId }}"
`}</CodeBlock>

</TabItem>
</Tabs>
