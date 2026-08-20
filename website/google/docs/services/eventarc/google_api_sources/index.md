--- 
title: google_api_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - google_api_sources
  - eventarc
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

Creates, updates, deletes, gets or lists a <code>google_api_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="google_api_sources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.eventarc.google_api_sources" /></td></tr>
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
    <td>Identifier. Resource name of the form projects/&#123;project&#125;/locations/&#123;location&#125;/googleApiSources/&#123;google_api_source&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Resource annotations.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="cryptoKeyName" /></td>
    <td><code>string</code></td>
    <td>Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern `projects/*/locations/*/keyRings/*/cryptoKeys/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>Required. Destination is the message bus that the GoogleApiSource is delivering to. It must be point to the full resource name of a MessageBus. Format: "projects/&#123;PROJECT_ID&#125;/locations/&#123;region&#125;/messagesBuses/&#123;MESSAGE_BUS_ID)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Resource display name.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. This checksum is computed by the server based on the value of other fields, and might be sent only on update and delete requests to ensure that the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Resource labels.</td>
</tr>
<tr>
    <td><CopyableCode code="loggingConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Config to control Platform logging for the GoogleApiSource. (id: LoggingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="organizationSubscription" /></td>
    <td><code>object</code></td>
    <td>Optional. Config to enable subscribing to events from all projects in the GoogleApiSource's org. (id: OrganizationSubscription)</td>
</tr>
<tr>
    <td><CopyableCode code="projectSubscriptions" /></td>
    <td><code>object</code></td>
    <td>Optional. Config to enable subscribing to all events from a list of projects. All the projects must be in the same org as the GoogleApiSource. (id: ProjectSubscriptions)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Server assigned unique identifier for the channel. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last-modified time.</td>
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
    <td>Identifier. Resource name of the form projects/&#123;project&#125;/locations/&#123;location&#125;/googleApiSources/&#123;google_api_source&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Resource annotations.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="cryptoKeyName" /></td>
    <td><code>string</code></td>
    <td>Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern `projects/*/locations/*/keyRings/*/cryptoKeys/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>Required. Destination is the message bus that the GoogleApiSource is delivering to. It must be point to the full resource name of a MessageBus. Format: "projects/&#123;PROJECT_ID&#125;/locations/&#123;region&#125;/messagesBuses/&#123;MESSAGE_BUS_ID)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Resource display name.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. This checksum is computed by the server based on the value of other fields, and might be sent only on update and delete requests to ensure that the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Resource labels.</td>
</tr>
<tr>
    <td><CopyableCode code="loggingConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Config to control Platform logging for the GoogleApiSource. (id: LoggingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="organizationSubscription" /></td>
    <td><code>object</code></td>
    <td>Optional. Config to enable subscribing to events from all projects in the GoogleApiSource's org. (id: OrganizationSubscription)</td>
</tr>
<tr>
    <td><CopyableCode code="projectSubscriptions" /></td>
    <td><code>object</code></td>
    <td>Optional. Config to enable subscribing to all events from a list of projects. All the projects must be in the same org as the GoogleApiSource. (id: ProjectSubscriptions)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Server assigned unique identifier for the channel. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last-modified time.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-googleApiSourcesId"><code>googleApiSourcesId</code></a></td>
    <td></td>
    <td>Get a single GoogleApiSource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>List GoogleApiSources.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-googleApiSourceId"><code>googleApiSourceId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Create a new GoogleApiSource in a particular project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-googleApiSourcesId"><code>googleApiSourcesId</code></a></td>
    <td><a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Update a single GoogleApiSource.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-googleApiSourcesId"><code>googleApiSourcesId</code></a></td>
    <td><a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Delete a single GoogleApiSource.</td>
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
<tr id="parameter-googleApiSourcesId">
    <td><CopyableCode code="googleApiSourcesId" /></td>
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
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-googleApiSourceId">
    <td><CopyableCode code="googleApiSourceId" /></td>
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
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
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

Get a single GoogleApiSource.

```sql
SELECT
name,
annotations,
createTime,
cryptoKeyName,
destination,
displayName,
etag,
labels,
loggingConfig,
organizationSubscription,
projectSubscriptions,
uid,
updateTime
FROM google.eventarc.google_api_sources
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND googleApiSourcesId = '{{ googleApiSourcesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

List GoogleApiSources.

```sql
SELECT
name,
annotations,
createTime,
cryptoKeyName,
destination,
displayName,
etag,
labels,
loggingConfig,
organizationSubscription,
projectSubscriptions,
uid,
updateTime
FROM google.eventarc.google_api_sources
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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

Create a new GoogleApiSource in a particular project and location.

```sql
INSERT INTO google.eventarc.google_api_sources (
data__annotations,
data__cryptoKeyName,
data__destination,
data__displayName,
data__labels,
data__loggingConfig,
data__name,
data__organizationSubscription,
data__projectSubscriptions,
projectsId,
locationsId,
googleApiSourceId,
validateOnly
)
SELECT 
'{{ annotations }}',
'{{ cryptoKeyName }}',
'{{ destination }}',
'{{ displayName }}',
'{{ labels }}',
'{{ loggingConfig }}',
'{{ name }}',
'{{ organizationSubscription }}',
'{{ projectSubscriptions }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ googleApiSourceId }}',
'{{ validateOnly }}'
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
- name: google_api_sources
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the google_api_sources resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the google_api_sources resource.
    - name: annotations
      value: "{{ annotations }}"
      description: |
        Optional. Resource annotations.
    - name: cryptoKeyName
      value: "{{ cryptoKeyName }}"
      description: |
        Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern \`projects/*/locations/*/keyRings/*/cryptoKeys/*\`.
    - name: destination
      value: "{{ destination }}"
      description: |
        Required. Destination is the message bus that the GoogleApiSource is delivering to. It must be point to the full resource name of a MessageBus. Format: "projects/{PROJECT_ID}/locations/{region}/messagesBuses/{MESSAGE_BUS_ID)
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Optional. Resource display name.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Resource labels.
    - name: loggingConfig
      description: |
        Optional. Config to control Platform logging for the GoogleApiSource.
      value:
        logSeverity: "{{ logSeverity }}"
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. Resource name of the form projects/{project}/locations/{location}/googleApiSources/{google_api_source}
    - name: organizationSubscription
      description: |
        Optional. Config to enable subscribing to events from all projects in the GoogleApiSource's org.
      value:
        enabled: {{ enabled }}
    - name: projectSubscriptions
      description: |
        Optional. Config to enable subscribing to all events from a list of projects. All the projects must be in the same org as the GoogleApiSource.
      value:
        list:
          - "{{ list }}"
    - name: googleApiSourceId
      value: "{{ googleApiSourceId }}"
    - name: validateOnly
      value: {{ validateOnly }}
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

Update a single GoogleApiSource.

```sql
UPDATE google.eventarc.google_api_sources
SET 
data__annotations = '{{ annotations }}',
data__cryptoKeyName = '{{ cryptoKeyName }}',
data__destination = '{{ destination }}',
data__displayName = '{{ displayName }}',
data__labels = '{{ labels }}',
data__loggingConfig = '{{ loggingConfig }}',
data__name = '{{ name }}',
data__organizationSubscription = '{{ organizationSubscription }}',
data__projectSubscriptions = '{{ projectSubscriptions }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND googleApiSourcesId = '{{ googleApiSourcesId }}' --required
AND allowMissing = {{ allowMissing}}
AND updateMask = '{{ updateMask}}'
AND validateOnly = {{ validateOnly}}
RETURNING
name,
done,
error,
metadata,
response;
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

Delete a single GoogleApiSource.

```sql
DELETE FROM google.eventarc.google_api_sources
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND googleApiSourcesId = '{{ googleApiSourcesId }}' --required
AND allowMissing = '{{ allowMissing }}'
AND etag = '{{ etag }}'
AND validateOnly = '{{ validateOnly }}'
;
```
</TabItem>
</Tabs>
