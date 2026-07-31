--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
  - appcheck
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

Creates, updates, deletes, gets or lists a <code>services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="firebase.appcheck.services" /></td></tr>
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
    <td>Required. The relative resource name of the service configuration object, in the format: ``` projects/&#123;project_number&#125;/services/&#123;service_id&#125; ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported. Firebase and Google Cloud services: * `identitytoolkit.googleapis.com` (Firebase Authentication) * `firebasedataconnect.googleapis.com` (Firebase SQL Connect) * `firestore.googleapis.com` (Cloud Firestore) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebaseml.googleapis.com` (Firebase AI Logic) Google Maps Platform services: * `maps-backend.googleapis.com` (Maps JavaScript API) * `places.googleapis.com` (Places API (New)) Other supported Google services: * `oauth2.googleapis.com` (Google Identity for iOS) Note: While all the supported `service_id`s may appear to be subdomains of `googleapis.com`, the `service_id` has no semantic meaning beyond identifying the service to App Check. It is not intended to represent the actual domain to which your apps send traffic, nor is it necessarily the API that should be enabled to use the service. For information on using these Google services, consult their documentation.</td>
</tr>
<tr>
    <td><CopyableCode code="enforcementMode" /></td>
    <td><code>string</code></td>
    <td>Required. The baseline protection EnforcementMode for this service. (OFF, UNENFORCED, ENFORCED)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. This etag is strongly validated as defined by RFC 7232.</td>
</tr>
<tr>
    <td><CopyableCode code="replayProtection" /></td>
    <td><code>string</code></td>
    <td>Optional. The replay protection EnforcementMode for this service. Note that this field cannot be set to a level higher than that of baseline protection. For example, if the enforcement mode for baseline protection is set to `UNENFORCED`, this field cannot be set to `ENFORCED`. In order to enforce replay protection, you must first enforce App Check's baseline protection. An HTTP 400 error will be returned in this case. By default, this field is set to `OFF`. Setting this field to `UNENFORCED` or `ENFORCED` is considered opting into replay protection. Opting in can impact your requests by adding some latency and sometimes cost (depending on your attestation provider). To opt out of replay protection after opting in, set this field to `OFF`. (OFF, UNENFORCED, ENFORCED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this service configuration object was most recently updated.</td>
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
    <td>Required. The relative resource name of the service configuration object, in the format: ``` projects/&#123;project_number&#125;/services/&#123;service_id&#125; ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported. Firebase and Google Cloud services: * `identitytoolkit.googleapis.com` (Firebase Authentication) * `firebasedataconnect.googleapis.com` (Firebase SQL Connect) * `firestore.googleapis.com` (Cloud Firestore) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebaseml.googleapis.com` (Firebase AI Logic) Google Maps Platform services: * `maps-backend.googleapis.com` (Maps JavaScript API) * `places.googleapis.com` (Places API (New)) Other supported Google services: * `oauth2.googleapis.com` (Google Identity for iOS) Note: While all the supported `service_id`s may appear to be subdomains of `googleapis.com`, the `service_id` has no semantic meaning beyond identifying the service to App Check. It is not intended to represent the actual domain to which your apps send traffic, nor is it necessarily the API that should be enabled to use the service. For information on using these Google services, consult their documentation.</td>
</tr>
<tr>
    <td><CopyableCode code="enforcementMode" /></td>
    <td><code>string</code></td>
    <td>Required. The baseline protection EnforcementMode for this service. (OFF, UNENFORCED, ENFORCED)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. This etag is strongly validated as defined by RFC 7232.</td>
</tr>
<tr>
    <td><CopyableCode code="replayProtection" /></td>
    <td><code>string</code></td>
    <td>Optional. The replay protection EnforcementMode for this service. Note that this field cannot be set to a level higher than that of baseline protection. For example, if the enforcement mode for baseline protection is set to `UNENFORCED`, this field cannot be set to `ENFORCED`. In order to enforce replay protection, you must first enforce App Check's baseline protection. An HTTP 400 error will be returned in this case. By default, this field is set to `OFF`. Setting this field to `UNENFORCED` or `ENFORCED` is considered opting into replay protection. Opting in can impact your requests by adding some latency and sometimes cost (depending on your attestation provider). To opt out of replay protection after opting in, set this field to `OFF`. (OFF, UNENFORCED, ENFORCED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this service configuration object was most recently updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Gets the Service configuration for the specified service name.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified Service configuration.</td>
</tr>
<tr>
    <td><a href="#batch_update"><CopyableCode code="batch_update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Atomically updates the specified Service configurations.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-servicesId">
    <td><CopyableCode code="servicesId" /></td>
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

Gets the Service configuration for the specified service name.

```sql
SELECT
name,
enforcementMode,
etag,
replayProtection,
updateTime
FROM firebase.appcheck.services
WHERE projectsId = '{{ projectsId }}' -- required
AND servicesId = '{{ servicesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned.

```sql
SELECT
name,
enforcementMode,
etag,
replayProtection,
updateTime
FROM firebase.appcheck.services
WHERE projectsId = '{{ projectsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
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

Updates the specified Service configuration.

```sql
UPDATE firebase.appcheck.services
SET 
data__etag = '{{ etag }}',
data__enforcementMode = '{{ enforcementMode }}',
data__name = '{{ name }}',
data__replayProtection = '{{ replayProtection }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND servicesId = '{{ servicesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
enforcementMode,
etag,
replayProtection,
updateTime;
```
</TabItem>
<TabItem value="batch_update">

Atomically updates the specified Service configurations.

```sql
UPDATE firebase.appcheck.services
SET 
data__updateMask = '{{ updateMask }}',
data__requests = '{{ requests }}'
WHERE 
projectsId = '{{ projectsId }}' --required
RETURNING
services;
```
</TabItem>
</Tabs>
