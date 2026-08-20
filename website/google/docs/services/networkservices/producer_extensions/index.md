--- 
title: producer_extensions
hide_title: false
hide_table_of_contents: false
keywords:
  - producer_extensions
  - networkservices
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

Creates, updates, deletes, gets or lists a <code>producer_extensions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="producer_extensions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkservices.producer_extensions" /></td></tr>
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
    <td>Identifier. Name of the `ProducerExtension` resource in the following format: `projects/&#123;project&#125;/locations/&#123;location&#125;/producerExtensions/&#123;producer_extension&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A human-readable description of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Etag of the resource. If this is provided, it must match the server's etag. If the provided etag does not match the server's etag, the request will fail with a 409 ABORTED error.</td>
</tr>
<tr>
    <td><CopyableCode code="extensionSettings" /></td>
    <td><code>object</code></td>
    <td>Required. The configuration for the service that this `ProducerExtension` offers. (id: ProducerExtensionExtensionSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Set of labels associated with the `ProducerExtension` resource. The format must comply with [the following requirements]((https://cloud.google.com/compute/docs/labeling-resources#requirements).</td>
</tr>
<tr>
    <td><CopyableCode code="phase" /></td>
    <td><code>string</code></td>
    <td>Required. The phase in which this `ProducerExtension` should execute. (PHASE_UNSPECIFIED, TRAFFIC, AUTHZ)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was updated.</td>
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
    <td>Identifier. Name of the `ProducerExtension` resource in the following format: `projects/&#123;project&#125;/locations/&#123;location&#125;/producerExtensions/&#123;producer_extension&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A human-readable description of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Etag of the resource. If this is provided, it must match the server's etag. If the provided etag does not match the server's etag, the request will fail with a 409 ABORTED error.</td>
</tr>
<tr>
    <td><CopyableCode code="extensionSettings" /></td>
    <td><code>object</code></td>
    <td>Required. The configuration for the service that this `ProducerExtension` offers. (id: ProducerExtensionExtensionSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Set of labels associated with the `ProducerExtension` resource. The format must comply with [the following requirements]((https://cloud.google.com/compute/docs/labeling-resources#requirements).</td>
</tr>
<tr>
    <td><CopyableCode code="phase" /></td>
    <td><code>string</code></td>
    <td>Required. The phase in which this `ProducerExtension` should execute. (PHASE_UNSPECIFIED, TRAFFIC, AUTHZ)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-producerExtensionsId"><code>producerExtensionsId</code></a></td>
    <td></td>
    <td>Gets details of the specified `ProducerExtension` resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists `ProducerExtension` resources in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-producerExtensionId"><code>producerExtensionId</code></a></td>
    <td>Creates a new `ProducerExtension` resource in a given project and location.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-producerExtensionsId"><code>producerExtensionsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes the specified `ProducerExtension` resource.</td>
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
<tr id="parameter-producerExtensionsId">
    <td><CopyableCode code="producerExtensionsId" /></td>
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
<tr id="parameter-producerExtensionId">
    <td><CopyableCode code="producerExtensionId" /></td>
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

Gets details of the specified `ProducerExtension` resource.

```sql
SELECT
name,
createTime,
description,
etag,
extensionSettings,
labels,
phase,
updateTime
FROM google.networkservices.producer_extensions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND producerExtensionsId = '{{ producerExtensionsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists `ProducerExtension` resources in a given project and location.

```sql
SELECT
name,
createTime,
description,
etag,
extensionSettings,
labels,
phase,
updateTime
FROM google.networkservices.producer_extensions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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

Creates a new `ProducerExtension` resource in a given project and location.

```sql
INSERT INTO google.networkservices.producer_extensions (
data__description,
data__etag,
data__extensionSettings,
data__labels,
data__name,
data__phase,
projectsId,
locationsId,
producerExtensionId
)
SELECT 
'{{ description }}',
'{{ etag }}',
'{{ extensionSettings }}',
'{{ labels }}',
'{{ name }}',
'{{ phase }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ producerExtensionId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: producer_extensions
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the producer_extensions resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the producer_extensions resource.
    - name: description
      value: "{{ description }}"
      description: |
        Optional. A human-readable description of the resource.
    - name: etag
      value: "{{ etag }}"
      description: |
        Optional. Etag of the resource. If this is provided, it must match the server's etag. If the provided etag does not match the server's etag, the request will fail with a 409 ABORTED error.
    - name: extensionSettings
      description: |
        Required. The configuration for the service that this \`ProducerExtension\` offers.
      value:
        authority: "{{ authority }}"
        observabilityMode: {{ observabilityMode }}
        service: "{{ service }}"
        supportedEvents:
          - "{{ supportedEvents }}"
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Set of labels associated with the \`ProducerExtension\` resource. The format must comply with [the following requirements]((https://cloud.google.com/compute/docs/labeling-resources#requirements).
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. Name of the \`ProducerExtension\` resource in the following format: \`projects/{project}/locations/{location}/producerExtensions/{producer_extension}\`.
    - name: phase
      value: "{{ phase }}"
      description: |
        Required. The phase in which this \`ProducerExtension\` should execute.
      valid_values: ['PHASE_UNSPECIFIED', 'TRAFFIC', 'AUTHZ']
    - name: producerExtensionId
      value: "{{ producerExtensionId }}"
`}</CodeBlock>

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

Deletes the specified `ProducerExtension` resource.

```sql
DELETE FROM google.networkservices.producer_extensions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND producerExtensionsId = '{{ producerExtensionsId }}' --required
AND etag = '{{ etag }}'
;
```
</TabItem>
</Tabs>
