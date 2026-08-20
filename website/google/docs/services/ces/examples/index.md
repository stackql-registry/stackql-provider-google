--- 
title: examples
hide_title: false
hide_table_of_contents: false
keywords:
  - examples
  - ces
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

Creates, updates, deletes, gets or lists an <code>examples</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="examples" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.ces.examples" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Identifier. The unique identifier of the example. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/examples/&#123;example&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the example was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Human-readable description of the example.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Display name of the example.</td>
</tr>
<tr>
    <td><CopyableCode code="entryAgent" /></td>
    <td><code>string</code></td>
    <td>Optional. The agent that initially handles the conversation. If not specified, the example represents a conversation that is handled by the root agent. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/agents/&#123;agent&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.</td>
</tr>
<tr>
    <td><CopyableCode code="invalid" /></td>
    <td><code>boolean</code></td>
    <td>Output only. The example may become invalid if referencing resources are deleted. Invalid examples will not be used as few-shot examples.</td>
</tr>
<tr>
    <td><CopyableCode code="messages" /></td>
    <td><code>array</code></td>
    <td>Optional. The collection of messages that make up the conversation.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the example was last updated.</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Identifier. The unique identifier of the example. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/examples/&#123;example&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the example was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Human-readable description of the example.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Display name of the example.</td>
</tr>
<tr>
    <td><CopyableCode code="entryAgent" /></td>
    <td><code>string</code></td>
    <td>Optional. The agent that initially handles the conversation. If not specified, the example represents a conversation that is handled by the root agent. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/agents/&#123;agent&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.</td>
</tr>
<tr>
    <td><CopyableCode code="invalid" /></td>
    <td><code>boolean</code></td>
    <td>Output only. The example may become invalid if referencing resources are deleted. Invalid examples will not be used as few-shot examples.</td>
</tr>
<tr>
    <td><CopyableCode code="messages" /></td>
    <td><code>array</code></td>
    <td>Optional. The collection of messages that make up the conversation.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the example was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-examplesId"><code>examplesId</code></a></td>
    <td></td>
    <td>Gets details of the specified example.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists examples in the given app.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td><a href="#parameter-exampleId"><code>exampleId</code></a></td>
    <td>Creates a new example in the given app.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-examplesId"><code>examplesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified example.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-examplesId"><code>examplesId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes the specified example.</td>
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
<tr id="parameter-appsId">
    <td><CopyableCode code="appsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-examplesId">
    <td><CopyableCode code="examplesId" /></td>
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
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-exampleId">
    <td><CopyableCode code="exampleId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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

Gets details of the specified example.

```sql
SELECT
name,
createTime,
description,
displayName,
entryAgent,
etag,
invalid,
messages,
updateTime
FROM google.ces.examples
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND appsId = '{{ appsId }}' -- required
AND examplesId = '{{ examplesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists examples in the given app.

```sql
SELECT
name,
createTime,
description,
displayName,
entryAgent,
etag,
invalid,
messages,
updateTime
FROM google.ces.examples
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND appsId = '{{ appsId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
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

Creates a new example in the given app.

```sql
INSERT INTO google.ces.examples (
data__description,
data__displayName,
data__entryAgent,
data__etag,
data__messages,
data__name,
projectsId,
locationsId,
appsId,
exampleId
)
SELECT 
'{{ description }}',
'{{ displayName }}',
'{{ entryAgent }}',
'{{ etag }}',
'{{ messages }}',
'{{ name }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ appsId }}',
'{{ exampleId }}'
RETURNING
name,
createTime,
description,
displayName,
entryAgent,
etag,
invalid,
messages,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: examples
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the examples resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the examples resource.
    - name: appsId
      value: "{{ appsId }}"
      description: Required parameter for the examples resource.
    - name: description
      value: "{{ description }}"
      description: |
        Optional. Human-readable description of the example.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. Display name of the example.
    - name: entryAgent
      value: "{{ entryAgent }}"
      description: |
        Optional. The agent that initially handles the conversation. If not specified, the example represents a conversation that is handled by the root agent. Format: \`projects/{project}/locations/{location}/apps/{app}/agents/{agent}\`
    - name: etag
      value: "{{ etag }}"
      description: |
        Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.
    - name: messages
      description: |
        Optional. The collection of messages that make up the conversation.
      value:
        - chunks: "{{ chunks }}"
          eventTime: "{{ eventTime }}"
          role: "{{ role }}"
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The unique identifier of the example. Format: \`projects/{project}/locations/{location}/apps/{app}/examples/{example}\`
    - name: exampleId
      value: "{{ exampleId }}"
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

Updates the specified example.

```sql
UPDATE google.ces.examples
SET 
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__entryAgent = '{{ entryAgent }}',
data__etag = '{{ etag }}',
data__messages = '{{ messages }}',
data__name = '{{ name }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND appsId = '{{ appsId }}' --required
AND examplesId = '{{ examplesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
description,
displayName,
entryAgent,
etag,
invalid,
messages,
updateTime;
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

Deletes the specified example.

```sql
DELETE FROM google.ces.examples
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND appsId = '{{ appsId }}' --required
AND examplesId = '{{ examplesId }}' --required
AND etag = '{{ etag }}'
;
```
</TabItem>
</Tabs>
