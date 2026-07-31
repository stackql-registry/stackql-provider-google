--- 
title: routers_named_set
hide_title: false
hide_table_of_contents: false
keywords:
  - routers_named_set
  - compute
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

Creates, updates, deletes, gets or lists a <code>routers_named_set</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="routers_named_set" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.routers_named_set" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_named_set"
    values={[
        { label: 'get_named_set', value: 'get_named_set' }
    ]}
>
<TabItem value="get_named_set">

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
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>end_interface: MixerGetResponseWithEtagBuilder</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td> (id: NamedSet)</td>
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
    <td><a href="#get_named_set"><CopyableCode code="get_named_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-router"><code>router</code></a></td>
    <td><a href="#parameter-namedSet"><code>namedSet</code></a></td>
    <td>Returns specified Named Set</td>
</tr>
<tr>
    <td><a href="#update_named_set"><CopyableCode code="update_named_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-router"><code>router</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates or creates new Named Set</td>
</tr>
<tr>
    <td><a href="#delete_named_set"><CopyableCode code="delete_named_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-router"><code>router</code></a></td>
    <td><a href="#parameter-namedSet"><code>namedSet</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes Named Set</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-router">
    <td><CopyableCode code="router" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-namedSet">
    <td><CopyableCode code="namedSet" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_named_set"
    values={[
        { label: 'get_named_set', value: 'get_named_set' }
    ]}
>
<TabItem value="get_named_set">

Returns specified Named Set

```sql
SELECT
etag,
resource
FROM google.compute.routers_named_set
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND router = '{{ router }}' -- required
AND namedSet = '{{ namedSet }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_named_set"
    values={[
        { label: 'update_named_set', value: 'update_named_set' }
    ]}
>
<TabItem value="update_named_set">

Updates or creates new Named Set

```sql
UPDATE google.compute.routers_named_set
SET 
data__description = '{{ description }}',
data__name = '{{ name }}',
data__type = '{{ type }}',
data__elements = '{{ elements }}',
data__fingerprint = '{{ fingerprint }}'
WHERE 
project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND router = '{{ router }}' --required
AND requestId = '{{ requestId}}'
RETURNING
id,
name,
clientOperationId,
creationTimestamp,
description,
endTime,
error,
getVersionOperationMetadata,
httpErrorMessage,
httpErrorStatusCode,
insertTime,
instancesBulkInsertOperationMetadata,
kind,
operationGroupId,
operationType,
progress,
region,
selfLink,
setCommonInstanceMetadataOperationMetadata,
startTime,
status,
statusMessage,
targetId,
targetLink,
user,
warnings,
zone;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_named_set"
    values={[
        { label: 'delete_named_set', value: 'delete_named_set' }
    ]}
>
<TabItem value="delete_named_set">

Deletes Named Set

```sql
DELETE FROM google.compute.routers_named_set
WHERE project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND router = '{{ router }}' --required
AND namedSet = '{{ namedSet }}'
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
