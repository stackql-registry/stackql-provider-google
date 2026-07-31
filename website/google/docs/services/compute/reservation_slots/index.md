--- 
title: reservation_slots
hide_title: false
hide_table_of_contents: false
keywords:
  - reservation_slots
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

Creates, updates, deletes, gets or lists a <code>reservation_slots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reservation_slots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.reservation_slots" /></td></tr>
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
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td>Represents a reservation slot resource. (id: ReservationSlot)</td>
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
    <td>The unique identifier for the resource; defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>A list of reservation slot resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The type of resource. Alwayscompute#reservationSlot for a list of reservation slots. (default: compute#reservationSlot)</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>This token allows you to get the next page of results for list requests. If the number of results is larger thanmaxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>The server-defined URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="warning" /></td>
    <td><code>object</code></td>
    <td>An informational warning message.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-reservationsId"><code>reservationsId</code></a>, <a href="#parameter-reservationBlocksId"><code>reservationBlocksId</code></a>, <a href="#parameter-reservationSubBlocksId"><code>reservationSubBlocksId</code></a>, <a href="#parameter-reservationSlot"><code>reservationSlot</code></a></td>
    <td></td>
    <td>Retrieves information about the specified reservation slot.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-reservationsId"><code>reservationsId</code></a>, <a href="#parameter-reservationBlocksId"><code>reservationBlocksId</code></a>, <a href="#parameter-reservationSubBlocksId"><code>reservationSubBlocksId</code></a></td>
    <td><a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Retrieves a list of reservation slots under a single reservation.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-reservationsId"><code>reservationsId</code></a>, <a href="#parameter-reservationBlocksId"><code>reservationBlocksId</code></a>, <a href="#parameter-reservationSubBlocksId"><code>reservationSubBlocksId</code></a>, <a href="#parameter-reservationSlot"><code>reservationSlot</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update a reservation slot in the specified sub-block.</td>
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
<tr id="parameter-reservationBlocksId">
    <td><CopyableCode code="reservationBlocksId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-reservationSlot">
    <td><CopyableCode code="reservationSlot" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-reservationSubBlocksId">
    <td><CopyableCode code="reservationSubBlocksId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-reservationsId">
    <td><CopyableCode code="reservationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-zone">
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (uint32)</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-returnPartialSuccess">
    <td><CopyableCode code="returnPartialSuccess" /></td>
    <td><code>boolean</code></td>
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

Retrieves information about the specified reservation slot.

```sql
SELECT
resource
FROM google.compute.reservation_slots
WHERE project = '{{ project }}' -- required
AND zone = '{{ zone }}' -- required
AND reservationsId = '{{ reservationsId }}' -- required
AND reservationBlocksId = '{{ reservationBlocksId }}' -- required
AND reservationSubBlocksId = '{{ reservationSubBlocksId }}' -- required
AND reservationSlot = '{{ reservationSlot }}' -- required
;
```
</TabItem>
<TabItem value="list">

Retrieves a list of reservation slots under a single reservation.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.reservation_slots
WHERE project = '{{ project }}' -- required
AND zone = '{{ zone }}' -- required
AND reservationsId = '{{ reservationsId }}' -- required
AND reservationBlocksId = '{{ reservationBlocksId }}' -- required
AND reservationSubBlocksId = '{{ reservationSubBlocksId }}' -- required
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
;
```
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

Update a reservation slot in the specified sub-block.

```sql
UPDATE google.compute.reservation_slots
SET 
data__shareSettings = '{{ shareSettings }}'
WHERE 
project = '{{ project }}' --required
AND zone = '{{ zone }}' --required
AND reservationsId = '{{ reservationsId }}' --required
AND reservationBlocksId = '{{ reservationBlocksId }}' --required
AND reservationSubBlocksId = '{{ reservationSubBlocksId }}' --required
AND reservationSlot = '{{ reservationSlot }}' --required
AND updateMask = '{{ updateMask}}'
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
