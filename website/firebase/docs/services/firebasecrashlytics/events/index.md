--- 
title: events
hide_title: false
hide_table_of_contents: false
keywords:
  - events
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

Creates, updates, deletes, gets or lists an <code>events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.firebasecrashlytics.events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get"
    values={[
        { label: 'batch_get', value: 'batch_get' },
        { label: 'list', value: 'list' }
    ]}
>
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
    <td><CopyableCode code="events" /></td>
    <td><code>array</code></td>
    <td>The list of retrieved events.</td>
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
    <td>Required. Output only. Immutable. Identifier. The name of the event resource. Format: "projects/&#123;project&#125;/apps/&#123;app_id&#125;/events/&#123;event&#125;".</td>
</tr>
<tr>
    <td><CopyableCode code="appOrientation" /></td>
    <td><code>string</code></td>
    <td>App orientation at the time of the crash (portrait or landscape).</td>
</tr>
<tr>
    <td><CopyableCode code="blameFrame" /></td>
    <td><code>object</code></td>
    <td>A frame in a stacktrace. (id: Frame)</td>
</tr>
<tr>
    <td><CopyableCode code="breadcrumbs" /></td>
    <td><code>array</code></td>
    <td>Analytics events recorded by the analytics SDK during the session.</td>
</tr>
<tr>
    <td><CopyableCode code="browser" /></td>
    <td><code>object</code></td>
    <td>Browser and version. (id: Browser)</td>
</tr>
<tr>
    <td><CopyableCode code="buildStamp" /></td>
    <td><code>string</code></td>
    <td>Metadata provided by the app's build system, including version control repository info.</td>
</tr>
<tr>
    <td><CopyableCode code="bundleOrPackage" /></td>
    <td><code>string</code></td>
    <td>The bundle name for iOS apps or the package name of Android apps. Format: "com.mycompany.myapp".</td>
</tr>
<tr>
    <td><CopyableCode code="crashlyticsSdkVersion" /></td>
    <td><code>string</code></td>
    <td>Crashlytics SDK version.</td>
</tr>
<tr>
    <td><CopyableCode code="customKeys" /></td>
    <td><code>object</code></td>
    <td>Custom keys set by the developer during the session.</td>
</tr>
<tr>
    <td><CopyableCode code="device" /></td>
    <td><code>object</code></td>
    <td>Mobile device metadata. (id: Device)</td>
</tr>
<tr>
    <td><CopyableCode code="deviceOrientation" /></td>
    <td><code>string</code></td>
    <td>Device orientation at the time of the crash (portrait or landscape).</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Apple only. A non-fatal error captured by the iOS SDK and its stacktrace.</td>
</tr>
<tr>
    <td><CopyableCode code="eventId" /></td>
    <td><code>string</code></td>
    <td>Output only. Immutable. The unique event identifier is assigned during processing.</td>
</tr>
<tr>
    <td><CopyableCode code="eventTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Device timestamp that the event was recorded.</td>
</tr>
<tr>
    <td><CopyableCode code="exceptions" /></td>
    <td><code>array</code></td>
    <td>Android and web only. Exceptions that occurred during this event. Nested exceptions are presented in reverse chronological order, so that the last record is the first exception thrown.</td>
</tr>
<tr>
    <td><CopyableCode code="installationUuid" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the device-app installation. This field is used to compute the unique number of impacted users.</td>
</tr>
<tr>
    <td><CopyableCode code="issue" /></td>
    <td><code>object</code></td>
    <td>Details for the [Issue] assigned to this [Event]. (id: Issue)</td>
</tr>
<tr>
    <td><CopyableCode code="issueSubtitle" /></td>
    <td><code>string</code></td>
    <td>The subtitle of the issue in which the event was grouped. This is usually a symbol or an exception message.</td>
</tr>
<tr>
    <td><CopyableCode code="issueTitle" /></td>
    <td><code>string</code></td>
    <td>The title of the issue in which the event was grouped. This is usually a source file or method name.</td>
</tr>
<tr>
    <td><CopyableCode code="issueVariant" /></td>
    <td><code>object</code></td>
    <td>Details for the [IssueVariant] assigned to this [Event]. (id: IssueVariant)</td>
</tr>
<tr>
    <td><CopyableCode code="logs" /></td>
    <td><code>array</code></td>
    <td>Log messages recorded by the developer during the session.</td>
</tr>
<tr>
    <td><CopyableCode code="memory" /></td>
    <td><code>object</code></td>
    <td>Mobile device memory usage. (id: Memory)</td>
</tr>
<tr>
    <td><CopyableCode code="operatingSystem" /></td>
    <td><code>object</code></td>
    <td>Operating system and version. (id: OperatingSystem)</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>ANDROID, IOS, or WEB.</td>
</tr>
<tr>
    <td><CopyableCode code="processState" /></td>
    <td><code>string</code></td>
    <td>The state of the app process at the time of the event.</td>
</tr>
<tr>
    <td><CopyableCode code="receivedTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Server timestamp that the event was received by Crashlytics.</td>
</tr>
<tr>
    <td><CopyableCode code="routePath" /></td>
    <td><code>string</code></td>
    <td>Output only. Web only. The route path of the web application when the event occurred, excluding query parameters and fragment.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the Firebase session.</td>
</tr>
<tr>
    <td><CopyableCode code="storage" /></td>
    <td><code>object</code></td>
    <td>Mobile device disk/flash usage. (id: Storage)</td>
</tr>
<tr>
    <td><CopyableCode code="threads" /></td>
    <td><code>array</code></td>
    <td>Application threads present at the time the event was recorded. Each contains a stacktrace. One thread will be blamed for the error.</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>object</code></td>
    <td>End user identifiers for the device owner. (id: User)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>object</code></td>
    <td>Mobile application version. (id: Version)</td>
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
    <td><a href="#batch_get"><CopyableCode code="batch_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td><a href="#parameter-names"><code>names</code></a>, <a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>Fetch a batch of up to 100 events by name.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td><a href="#parameter-filter.issue.states"><code>filter.issue.states</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter.issue.content"><code>filter.issue.content</code></a>, <a href="#parameter-filter.issue.variantId"><code>filter.issue.variantId</code></a>, <a href="#parameter-filter.issue.signals"><code>filter.issue.signals</code></a>, <a href="#parameter-readMask"><code>readMask</code></a>, <a href="#parameter-filter.device.displayNames"><code>filter.device.displayNames</code></a>, <a href="#parameter-filter.operatingSystem.displayNames"><code>filter.operatingSystem.displayNames</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter.issue.id"><code>filter.issue.id</code></a>, <a href="#parameter-filter.browser.displayNames"><code>filter.browser.displayNames</code></a>, <a href="#parameter-filter.issue.errorTypes"><code>filter.issue.errorTypes</code></a>, <a href="#parameter-filter.interval.startTime"><code>filter.interval.startTime</code></a>, <a href="#parameter-filter.version.displayNames"><code>filter.version.displayNames</code></a>, <a href="#parameter-filter.device.formFactors"><code>filter.device.formFactors</code></a>, <a href="#parameter-filter.interval.endTime"><code>filter.interval.endTime</code></a>, <a href="#parameter-filter.issue.state"><code>filter.issue.state</code></a></td>
    <td>List the events for an issue matching filter criteria, sorted in descending order by timestamp.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter.browser.displayNames">
    <td><CopyableCode code="filter.browser.displayNames" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter.device.displayNames">
    <td><CopyableCode code="filter.device.displayNames" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter.device.formFactors">
    <td><CopyableCode code="filter.device.formFactors" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter.interval.endTime">
    <td><CopyableCode code="filter.interval.endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr id="parameter-filter.interval.startTime">
    <td><CopyableCode code="filter.interval.startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr id="parameter-filter.issue.content">
    <td><CopyableCode code="filter.issue.content" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter.issue.errorTypes">
    <td><CopyableCode code="filter.issue.errorTypes" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter.issue.id">
    <td><CopyableCode code="filter.issue.id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter.issue.signals">
    <td><CopyableCode code="filter.issue.signals" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter.issue.state">
    <td><CopyableCode code="filter.issue.state" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter.issue.states">
    <td><CopyableCode code="filter.issue.states" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter.issue.variantId">
    <td><CopyableCode code="filter.issue.variantId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter.operatingSystem.displayNames">
    <td><CopyableCode code="filter.operatingSystem.displayNames" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter.version.displayNames">
    <td><CopyableCode code="filter.version.displayNames" /></td>
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
<tr id="parameter-readMask">
    <td><CopyableCode code="readMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="batch_get"
    values={[
        { label: 'batch_get', value: 'batch_get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="batch_get">

Fetch a batch of up to 100 events by name.

```sql
SELECT
events
FROM firebase.firebasecrashlytics.events
WHERE projectsId = '{{ projectsId }}' -- required
AND appsId = '{{ appsId }}' -- required
AND names = '{{ names }}'
AND readMask = '{{ readMask }}'
;
```
</TabItem>
<TabItem value="list">

List the events for an issue matching filter criteria, sorted in descending order by timestamp.

```sql
SELECT
name,
appOrientation,
blameFrame,
breadcrumbs,
browser,
buildStamp,
bundleOrPackage,
crashlyticsSdkVersion,
customKeys,
device,
deviceOrientation,
errors,
eventId,
eventTime,
exceptions,
installationUuid,
issue,
issueSubtitle,
issueTitle,
issueVariant,
logs,
memory,
operatingSystem,
platform,
processState,
receivedTime,
routePath,
sessionId,
storage,
threads,
user,
version
FROM firebase.firebasecrashlytics.events
WHERE projectsId = '{{ projectsId }}' -- required
AND appsId = '{{ appsId }}' -- required
AND filter.issue.states = '{{ filter.issue.states }}'
AND pageToken = '{{ pageToken }}'
AND filter.issue.content = '{{ filter.issue.content }}'
AND filter.issue.variantId = '{{ filter.issue.variantId }}'
AND filter.issue.signals = '{{ filter.issue.signals }}'
AND readMask = '{{ readMask }}'
AND filter.device.displayNames = '{{ filter.device.displayNames }}'
AND filter.operatingSystem.displayNames = '{{ filter.operatingSystem.displayNames }}'
AND pageSize = '{{ pageSize }}'
AND filter.issue.id = '{{ filter.issue.id }}'
AND filter.browser.displayNames = '{{ filter.browser.displayNames }}'
AND filter.issue.errorTypes = '{{ filter.issue.errorTypes }}'
AND filter.interval.startTime = '{{ filter.interval.startTime }}'
AND filter.version.displayNames = '{{ filter.version.displayNames }}'
AND filter.device.formFactors = '{{ filter.device.formFactors }}'
AND filter.interval.endTime = '{{ filter.interval.endTime }}'
AND filter.issue.state = '{{ filter.issue.state }}'
;
```
</TabItem>
</Tabs>
