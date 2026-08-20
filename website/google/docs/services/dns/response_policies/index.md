--- 
title: response_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - response_policies
  - dns
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

Creates, updates, deletes, gets or lists a <code>response_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="response_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dns.response_policies" /></td></tr>
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
    <td><code>string (int64)</code></td>
    <td>Unique identifier for the resource; defined by the server (output only).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User-provided description for this Response Policy.</td>
</tr>
<tr>
    <td><CopyableCode code="gkeClusters" /></td>
    <td><code>array</code></td>
    <td>The list of Google Kubernetes Engine clusters to which this response policy is applied.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td> (default: dns#responsePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User labels.</td>
</tr>
<tr>
    <td><CopyableCode code="networks" /></td>
    <td><code>array</code></td>
    <td>List of network names specifying networks to which this policy is applied.</td>
</tr>
<tr>
    <td><CopyableCode code="responsePolicyName" /></td>
    <td><code>string</code></td>
    <td>User assigned name for this Response Policy.</td>
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
    <td><code>string (int64)</code></td>
    <td>Unique identifier for the resource; defined by the server (output only).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User-provided description for this Response Policy.</td>
</tr>
<tr>
    <td><CopyableCode code="gkeClusters" /></td>
    <td><code>array</code></td>
    <td>The list of Google Kubernetes Engine clusters to which this response policy is applied.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td> (default: dns#responsePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User labels.</td>
</tr>
<tr>
    <td><CopyableCode code="networks" /></td>
    <td><code>array</code></td>
    <td>List of network names specifying networks to which this policy is applied.</td>
</tr>
<tr>
    <td><CopyableCode code="responsePolicyName" /></td>
    <td><code>string</code></td>
    <td>User assigned name for this Response Policy.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-responsePolicy"><code>responsePolicy</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Fetches the representation of an existing Response Policy.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Enumerates all Response Policies associated with a project.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Creates a new Response Policy</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-responsePolicy"><code>responsePolicy</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Applies a partial update to an existing Response Policy.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-responsePolicy"><code>responsePolicy</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Updates an existing Response Policy.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-responsePolicy"><code>responsePolicy</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.</td>
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
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-responsePolicy">
    <td><CopyableCode code="responsePolicy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-clientOperationId">
    <td><CopyableCode code="clientOperationId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
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

Fetches the representation of an existing Response Policy.

```sql
SELECT
id,
description,
gkeClusters,
kind,
labels,
networks,
responsePolicyName
FROM google.dns.response_policies
WHERE project = '{{ project }}' -- required
AND responsePolicy = '{{ responsePolicy }}' -- required
AND clientOperationId = '{{ clientOperationId }}'
;
```
</TabItem>
<TabItem value="list">

Enumerates all Response Policies associated with a project.

```sql
SELECT
id,
description,
gkeClusters,
kind,
labels,
networks,
responsePolicyName
FROM google.dns.response_policies
WHERE project = '{{ project }}' -- required
AND maxResults = '{{ maxResults }}'
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

Creates a new Response Policy

```sql
INSERT INTO google.dns.response_policies (
data__description,
data__gkeClusters,
data__id,
data__kind,
data__labels,
data__networks,
data__responsePolicyName,
project,
clientOperationId
)
SELECT 
'{{ description }}',
'{{ gkeClusters }}',
'{{ id }}',
'{{ kind }}',
'{{ labels }}',
'{{ networks }}',
'{{ responsePolicyName }}',
'{{ project }}',
'{{ clientOperationId }}'
RETURNING
id,
description,
gkeClusters,
kind,
labels,
networks,
responsePolicyName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: response_policies
  props:
    - name: project
      value: "{{ project }}"
      description: Required parameter for the response_policies resource.
    - name: description
      value: "{{ description }}"
      description: |
        User-provided description for this Response Policy.
    - name: gkeClusters
      description: |
        The list of Google Kubernetes Engine clusters to which this response policy is applied.
      value:
        - gkeClusterName: "{{ gkeClusterName }}"
          kind: "{{ kind }}"
    - name: id
      value: "{{ id }}"
      description: |
        Unique identifier for the resource; defined by the server (output only).
    - name: kind
      value: "{{ kind }}"
      default: dns#responsePolicy
    - name: labels
      value: "{{ labels }}"
      description: |
        User labels.
    - name: networks
      description: |
        List of network names specifying networks to which this policy is applied.
      value:
        - kind: "{{ kind }}"
          networkUrl: "{{ networkUrl }}"
    - name: responsePolicyName
      value: "{{ responsePolicyName }}"
      description: |
        User assigned name for this Response Policy.
    - name: clientOperationId
      value: "{{ clientOperationId }}"
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

Applies a partial update to an existing Response Policy.

```sql
UPDATE google.dns.response_policies
SET 
data__description = '{{ description }}',
data__gkeClusters = '{{ gkeClusters }}',
data__id = '{{ id }}',
data__kind = '{{ kind }}',
data__labels = '{{ labels }}',
data__networks = '{{ networks }}',
data__responsePolicyName = '{{ responsePolicyName }}'
WHERE 
project = '{{ project }}' --required
AND responsePolicy = '{{ responsePolicy }}' --required
AND clientOperationId = '{{ clientOperationId}}'
RETURNING
responsePolicy;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates an existing Response Policy.

```sql
REPLACE google.dns.response_policies
SET 
data__description = '{{ description }}',
data__gkeClusters = '{{ gkeClusters }}',
data__id = '{{ id }}',
data__kind = '{{ kind }}',
data__labels = '{{ labels }}',
data__networks = '{{ networks }}',
data__responsePolicyName = '{{ responsePolicyName }}'
WHERE 
project = '{{ project }}' --required
AND responsePolicy = '{{ responsePolicy }}' --required
AND clientOperationId = '{{ clientOperationId}}'
RETURNING
responsePolicy;
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

Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.

```sql
DELETE FROM google.dns.response_policies
WHERE project = '{{ project }}' --required
AND responsePolicy = '{{ responsePolicy }}' --required
AND clientOperationId = '{{ clientOperationId }}'
;
```
</TabItem>
</Tabs>
