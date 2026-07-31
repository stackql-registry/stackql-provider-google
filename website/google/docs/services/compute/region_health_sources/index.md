--- 
title: region_health_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - region_health_sources
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

Creates, updates, deletes, gets or lists a <code>region_health_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="region_health_sources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.region_health_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' },
        { label: 'aggregated_list', value: 'aggregated_list' }
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
    <td><code>string (uint64)</code></td>
    <td>Output only. [Output Only] A unique identifier for this resource type. The server generates this identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply withRFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: <code>&#91;a-z&#93;(?:&#91;-a-z0-9&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Creation timestamp inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string (byte)</code></td>
    <td>Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a HealthSource. An up-to-date fingerprint must be provided in order to patch the HealthSource; Otherwise, the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve the HealthSource.</td>
</tr>
<tr>
    <td><CopyableCode code="healthAggregationPolicy" /></td>
    <td><code>string</code></td>
    <td>URL to the HealthAggregationPolicy resource. Must be set. Must be regional and in the same region as the HealthSource. Can be mutated.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of the resource. Alwayscompute#healthSource for health sources. (default: compute#healthSource)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] URL of the region where the health source resides. This field applies only to the regional resource. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLinkWithId" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined URL with id for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceType" /></td>
    <td><code>string</code></td>
    <td>Specifies the type of the HealthSource. The only allowed value is BACKEND_SERVICE. Must be specified when theHealthSource is created, and cannot be mutated. (BACKEND_SERVICE)</td>
</tr>
<tr>
    <td><CopyableCode code="sources" /></td>
    <td><code>array</code></td>
    <td>URLs to the source resources. Must be size 1. Must be aBackendService if the sourceType is BACKEND_SERVICE. TheBackendService must have load balancing schemeINTERNAL or INTERNAL_MANAGED and must be regional and in the same region as the HealthSource (cross-region deployment for INTERNAL_MANAGED is not supported). TheBackendService may use only IGs, MIGs, or NEGs of typeGCE_VM_IP or GCE_VM_IP_PORT. TheBackendService may not use haPolicy. Can be mutated.</td>
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
    <td>[Output Only] Unique identifier for the resource; defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>A list of HealthSource resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of the resource. Alwayscompute#healthSource for health sources. (default: compute#healthSourceList)</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>[Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger thanmaxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="warning" /></td>
    <td><code>object</code></td>
    <td>[Output Only] Informational warning message.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="aggregated_list">

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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-healthSource"><code>healthSource</code></a></td>
    <td></td>
    <td>Returns the specified HealthSource resource in the given region.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Lists the HealthSources for a project in the given region.</td>
</tr>
<tr>
    <td><a href="#aggregated_list"><CopyableCode code="aggregated_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a>, <a href="#parameter-includeAllScopes"><code>includeAllScopes</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-serviceProjectNumber"><code>serviceProjectNumber</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Retrieves the list of all HealthSource resources (all<br />regional) available to the specified project.<br /><br />To prevent failure, Google recommends that you set the<br />`returnPartialSuccess` parameter to `true`.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Create a HealthSource in the specified project in the given region<br />using the parameters that are included in the request.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-healthSource"><code>healthSource</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the specified regional HealthSource resource<br />with the data included in the request.  This method supportsPATCH<br />semantics and uses theJSON merge<br />patch format and processing rules.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-healthSource"><code>healthSource</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified HealthSource in the given region</td>
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
<tr id="parameter-healthSource">
    <td><CopyableCode code="healthSource" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includeAllScopes">
    <td><CopyableCode code="includeAllScopes" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-returnPartialSuccess">
    <td><CopyableCode code="returnPartialSuccess" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-serviceProjectNumber">
    <td><CopyableCode code="serviceProjectNumber" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' },
        { label: 'aggregated_list', value: 'aggregated_list' }
    ]}
>
<TabItem value="get">

Returns the specified HealthSource resource in the given region.

```sql
SELECT
id,
name,
creationTimestamp,
description,
fingerprint,
healthAggregationPolicy,
kind,
region,
selfLink,
selfLinkWithId,
sourceType,
sources
FROM google.compute.region_health_sources
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND healthSource = '{{ healthSource }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the HealthSources for a project in the given region.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.region_health_sources
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND filter = '{{ filter }}'
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
;
```
</TabItem>
<TabItem value="aggregated_list">

Retrieves the list of all HealthSource resources (all<br />regional) available to the specified project.<br /><br />To prevent failure, Google recommends that you set the<br />`returnPartialSuccess` parameter to `true`.

```sql
SELECT
*
FROM google.compute.region_health_sources
WHERE project = '{{ project }}' -- required
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
AND includeAllScopes = '{{ includeAllScopes }}'
AND orderBy = '{{ orderBy }}'
AND filter = '{{ filter }}'
AND serviceProjectNumber = '{{ serviceProjectNumber }}'
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="insert"
    values={[
        { label: 'insert', value: 'insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert">

Create a HealthSource in the specified project in the given region<br />using the parameters that are included in the request.

```sql
INSERT INTO google.compute.region_health_sources (
data__fingerprint,
data__name,
data__healthAggregationPolicy,
data__description,
data__sourceType,
data__sources,
project,
region,
requestId
)
SELECT 
'{{ fingerprint }}',
'{{ name }}',
'{{ healthAggregationPolicy }}',
'{{ description }}',
'{{ sourceType }}',
'{{ sources }}',
'{{ project }}',
'{{ region }}',
'{{ requestId }}'
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
zone
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: region_health_sources
  props:
    - name: project
      value: "{{ project }}"
      description: Required parameter for the region_health_sources resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the region_health_sources resource.
    - name: fingerprint
      value: "{{ fingerprint }}"
      description: |
        Fingerprint of this resource. A hash of the contents stored in this object.
        This field is used in optimistic locking. This field will be ignored when
        inserting a HealthSource. An up-to-date fingerprint
        must be provided in order to patch the HealthSource; Otherwise, the request
        will fail with error 412 conditionNotMet. To see the latest
        fingerprint, make a get() request to retrieve the
        HealthSource.
    - name: name
      value: "{{ name }}"
      description: |
        Name of the resource. Provided by the client when the resource is created.
        The name must be 1-63 characters long, and comply withRFC1035.
        Specifically, the name must be 1-63 characters long and match the regular
        expression \`[a-z]([-a-z0-9]*[a-z0-9])?\` which means the first
        character must be a lowercase letter, and all following characters must
        be a dash, lowercase letter, or digit, except the last character, which
        cannot be a dash.
    - name: healthAggregationPolicy
      value: "{{ healthAggregationPolicy }}"
      description: |
        URL to the HealthAggregationPolicy resource. Must be set. Must
        be regional and in the same region as the HealthSource. Can be
        mutated.
    - name: description
      value: "{{ description }}"
      description: |
        An optional description of this resource. Provide this property when you
        create the resource.
    - name: sourceType
      value: "{{ sourceType }}"
      description: |
        Specifies the type of the HealthSource. The only allowed value
        is BACKEND_SERVICE. Must be specified when theHealthSource is created, and cannot be mutated.
      valid_values: ['BACKEND_SERVICE']
    - name: sources
      value:
        - "{{ sources }}"
      description: |
        URLs to the source resources. Must be size 1. Must be aBackendService if
        the sourceType is BACKEND_SERVICE. TheBackendService must have load balancing schemeINTERNAL or INTERNAL_MANAGED and must be regional
        and in the same region as the HealthSource (cross-region
        deployment for INTERNAL_MANAGED is not supported). TheBackendService may use only IGs, MIGs, or NEGs of typeGCE_VM_IP or GCE_VM_IP_PORT. TheBackendService may not use haPolicy. Can be
        mutated.
    - name: requestId
      value: "{{ requestId }}"
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

Updates the specified regional HealthSource resource<br />with the data included in the request.  This method supportsPATCH<br />semantics and uses theJSON merge<br />patch format and processing rules.

```sql
UPDATE google.compute.region_health_sources
SET 
data__fingerprint = '{{ fingerprint }}',
data__name = '{{ name }}',
data__healthAggregationPolicy = '{{ healthAggregationPolicy }}',
data__description = '{{ description }}',
data__sourceType = '{{ sourceType }}',
data__sources = '{{ sources }}'
WHERE 
project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND healthSource = '{{ healthSource }}' --required
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
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes the specified HealthSource in the given region

```sql
DELETE FROM google.compute.region_health_sources
WHERE project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND healthSource = '{{ healthSource }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
