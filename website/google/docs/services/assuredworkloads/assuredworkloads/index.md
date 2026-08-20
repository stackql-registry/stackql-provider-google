--- 
title: assuredworkloads
hide_title: false
hide_table_of_contents: false
keywords:
  - assuredworkloads
  - assuredworkloads
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

Creates, updates, deletes, gets or lists an <code>assuredworkloads</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assuredworkloads" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.assuredworkloads.assuredworkloads" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#archive_resource_events"><CopyableCode code="archive_resource_events" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Finds orphan ResourceEvents matching the criteria and moves them to the ArchivedResourceEvents table.</td>
</tr>
<tr>
    <td><a href="#revert_archived_resource_events"><CopyableCode code="revert_archived_resource_events" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Finds matching ArchivedResourceEvents and moves them back to the ResourceEvents table.</td>
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
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="archive_resource_events"
    values={[
        { label: 'archive_resource_events', value: 'archive_resource_events' },
        { label: 'revert_archived_resource_events', value: 'revert_archived_resource_events' }
    ]}
>
<TabItem value="archive_resource_events">

Finds orphan ResourceEvents matching the criteria and moves them to the ArchivedResourceEvents table.

```sql
EXEC google.assuredworkloads.assuredworkloads.archive_resource_events 
@@json=
'{
"archiveTime": "{{ archiveTime }}", 
"batchSize": {{ batchSize }}, 
"eventCutoffTime": "{{ eventCutoffTime }}", 
"maxEventsMove": {{ maxEventsMove }}, 
"organizationId": "{{ organizationId }}", 
"region": "{{ region }}"
}'
;
```
</TabItem>
<TabItem value="revert_archived_resource_events">

Finds matching ArchivedResourceEvents and moves them back to the ResourceEvents table.

```sql
EXEC google.assuredworkloads.assuredworkloads.revert_archived_resource_events 
@@json=
'{
"archiveEndTime": "{{ archiveEndTime }}", 
"archiveStartTime": "{{ archiveStartTime }}", 
"batchSize": {{ batchSize }}, 
"maxEventsMove": {{ maxEventsMove }}, 
"organizationId": "{{ organizationId }}", 
"region": "{{ region }}"
}'
;
```
</TabItem>
</Tabs>
