--- 
title: issues
hide_title: false
hide_table_of_contents: false
keywords:
  - issues
  - firebasecrashlytics
  - firebase
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage firebase resources using SQL
custom_edit_url: null
image: /img/stackql-firebase-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>issues</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="issues" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.firebasecrashlytics.issues" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. Unique identifier for the issue.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Required. Output only. Immutable. Identifier. The name of the issue resource. Format: "projects/&#123;project&#125;/apps/&#123;app&#125;/issues/&#123;issue&#125;".</td>
</tr>
<tr>
    <td><CopyableCode code="errorType" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. Indicates whether this issue is a crash, non-fatal exception, or ANR. (ERROR_TYPE_UNSPECIFIED, FATAL, NON_FATAL, ANR)</td>
</tr>
<tr>
    <td><CopyableCode code="firstSeenTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Immutable. The first time this issue was seen.</td>
</tr>
<tr>
    <td><CopyableCode code="firstSeenVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The first app display_version in which this issue was seen, populated for mobile issues only.</td>
</tr>
<tr>
    <td><CopyableCode code="lastSeenTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time this issue was seen.</td>
</tr>
<tr>
    <td><CopyableCode code="lastSeenVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The most recent app display_version in which this issue was seen, populated for mobile issues only.</td>
</tr>
<tr>
    <td><CopyableCode code="notesCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The number of notes attached to an issue.</td>
</tr>
<tr>
    <td><CopyableCode code="sampleEvent" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name for a sample event in this issue.</td>
</tr>
<tr>
    <td><CopyableCode code="signals" /></td>
    <td><code>array</code></td>
    <td>Output only. Immutable. Distinctive characteristics assigned by the Crashlytics analyzer.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Indicates whether this issue is open, closed or muted. For details on how issue states change without user actions, see [Regressed Issues](https://firebase.google.com/docs/crashlytics/troubleshooting?platform=ios#regressed-issues). (STATE_UNSPECIFIED, OPEN, CLOSED, MUTED)</td>
</tr>
<tr>
    <td><CopyableCode code="stateUpdateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the issue state was last changed.</td>
</tr>
<tr>
    <td><CopyableCode code="subtitle" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. Caption subtitle. This is usually a symbol or an exception message.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. Caption title. This is usually a source file or method name.</td>
</tr>
<tr>
    <td><CopyableCode code="uri" /></td>
    <td><code>string</code></td>
    <td>Output only. Provides a link to the Issue on the Firebase console. When this Issue is obtained as part of a Report, then the link will be configured with the same time interval and filters as the request.</td>
</tr>
<tr>
    <td><CopyableCode code="variants" /></td>
    <td><code>array</code></td>
    <td>Output only. Immutable. The top 12 variants (subgroups) within the issue. Variants group events within an issue that are very similar. A single result implies that the variant is the same as the parent issue. This field will be empty when multiple issues are requested. Request a single issue to list variants.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-issuesId"><code>issuesId</code></a></td>
    <td></td>
    <td>Retrieve an issue.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-issuesId"><code>issuesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Change the state of an issue.</td>
</tr>
<tr>
    <td><a href="#batch_update"><CopyableCode code="batch_update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td></td>
    <td>Change the state of a group of issues. This method is not atomic, so partial failures can occur. In the event of a partial failure, the request will fail and you will need to call `GetIssue` to see which issues were not updated.</td>
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
<tr id="parameter-issuesId">
    <td><CopyableCode code="issuesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
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
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Retrieve an issue.

```sql
SELECT
id,
name,
errorType,
firstSeenTime,
firstSeenVersion,
lastSeenTime,
lastSeenVersion,
notesCount,
sampleEvent,
signals,
state,
stateUpdateTime,
subtitle,
title,
uri,
variants
FROM firebase.firebasecrashlytics.issues
WHERE projectsId = '{{ projectsId }}' -- required
AND appsId = '{{ appsId }}' -- required
AND issuesId = '{{ issuesId }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' },
        { label: 'batch_update', value: 'batch_update' }
    ]}
>
<TabItem value="patch">

Change the state of an issue.

```sql
UPDATE firebase.firebasecrashlytics.issues
SET 
-- No updatable properties
WHERE 
projectsId = '{{ projectsId }}' --required
AND appsId = '{{ appsId }}' --required
AND issuesId = '{{ issuesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
id,
name,
errorType,
firstSeenTime,
firstSeenVersion,
lastSeenTime,
lastSeenVersion,
notesCount,
sampleEvent,
signals,
state,
stateUpdateTime,
subtitle,
title,
uri,
variants;
```
</TabItem>
<TabItem value="batch_update">

Change the state of a group of issues. This method is not atomic, so partial failures can occur. In the event of a partial failure, the request will fail and you will need to call `GetIssue` to see which issues were not updated.

```sql
UPDATE firebase.firebasecrashlytics.issues
SET 
data__requests = '{{ requests }}',
data__updateMask = '{{ updateMask }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND appsId = '{{ appsId }}' --required
RETURNING
issues;
```
</TabItem>
</Tabs>
