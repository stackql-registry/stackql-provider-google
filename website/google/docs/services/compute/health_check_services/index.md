--- 
title: health_check_services
hide_title: false
hide_table_of_contents: false
keywords:
  - health_check_services
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

Creates, updates, deletes, gets or lists a <code>health_check_services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="health_check_services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.health_check_services" /></td></tr>
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
    <td><code>string (uint64)</code></td>
    <td>Output only. [Output Only] The unique identifier for the resource. This identifier is defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the resource. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: <code>&#91;a-z&#93;(?:&#91;-a-z0-9&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?</code>)</td>
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
    <td>Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a HealthCheckService. An up-to-date fingerprint must be provided in order to patch/update the HealthCheckService; Otherwise, the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve the HealthCheckService.</td>
</tr>
<tr>
    <td><CopyableCode code="healthChecks" /></td>
    <td><code>array</code></td>
    <td>A list of URLs to the HealthCheck resources. Must have at least one HealthCheck, and not more than 10 for regionalHealthCheckService, and not more than 1 for globalHealthCheckService.HealthCheck resources must haveportSpecification=USE_SERVING_PORT orportSpecification=USE_FIXED_PORT. For regional HealthCheckService, theHealthCheck must be regional and in the same region. For global HealthCheckService,HealthCheck must be global. Mix of regional and globalHealthChecks is not supported. Multiple regionalHealthChecks must belong to the same region. RegionalHealthChecks must belong to the same region as zones ofNetworkEndpointGroups. For globalHealthCheckService using globalINTERNET_IP_PORT NetworkEndpointGroups, the global HealthChecks must specify sourceRegions, and HealthChecks that specify sourceRegions can only be used with global INTERNET_IP_PORTNetworkEndpointGroups.</td>
</tr>
<tr>
    <td><CopyableCode code="healthStatusAggregationPolicy" /></td>
    <td><code>string</code></td>
    <td>Optional. Policy for how the results from multiple health checks for the same endpoint are aggregated. Defaults to NO_AGGREGATION if unspecified.        - NO_AGGREGATION. An EndpointHealth message is    returned for each  pair in the health check    service.    - AND. If any health check of an endpoint reportsUNHEALTHY, then UNHEALTHY is theHealthState of the endpoint. If all health checks reportHEALTHY, the HealthState of the endpoint isHEALTHY.  . This is only allowed with regional HealthCheckService. (AND, NO_AGGREGATION)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output only] Type of the resource. Alwayscompute#healthCheckServicefor health check services. (default: compute#healthCheckService)</td>
</tr>
<tr>
    <td><CopyableCode code="networkEndpointGroups" /></td>
    <td><code>array</code></td>
    <td>A list of URLs to the NetworkEndpointGroup resources. Must not have more than 100.  For regionalHealthCheckService, NEGs must be in zones in the region of the HealthCheckService. For globalHealthCheckServices, the NetworkEndpointGroups must be global INTERNET_IP_PORT.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationEndpoints" /></td>
    <td><code>array</code></td>
    <td>A list of URLs to the NotificationEndpoint resources. Must not have more than 10.  A list of endpoints for receiving notifications of change in health status. For regionalHealthCheckService,NotificationEndpoint must be regional and in the same region. For global HealthCheckService,NotificationEndpoint must be global.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] URL of the region where the health check service resides. This field is not applicable to global health check services. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined URL for the resource.</td>
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
    <td>Output only. [Output Only] Unique identifier for the resource; defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>Output only. A list of HealthCheckService resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of the resource. Alwayscompute#healthCheckServicesList for lists of HealthCheckServices. (default: compute#healthCheckServicesList)</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger thanmaxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="warning" /></td>
    <td><code>object</code></td>
    <td>[Output Only] Informational warning message.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-healthCheckService"><code>healthCheckService</code></a></td>
    <td></td>
    <td>Returns the specified regional HealthCheckService resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Lists all the HealthCheckService resources that have been<br />configured for the specified project in the given region.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a regional HealthCheckService resource in the<br />specified project and region using the data included in the request.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-healthCheckService"><code>healthCheckService</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the specified regional HealthCheckService resource<br />with the data included in the request.  This method supportsPATCH<br />semantics and uses theJSON merge<br />patch format and processing rules.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-healthCheckService"><code>healthCheckService</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified regional HealthCheckService.</td>
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
<tr id="parameter-healthCheckService">
    <td><CopyableCode code="healthCheckService" /></td>
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

Returns the specified regional HealthCheckService resource.

```sql
SELECT
id,
name,
creationTimestamp,
description,
fingerprint,
healthChecks,
healthStatusAggregationPolicy,
kind,
networkEndpointGroups,
notificationEndpoints,
region,
selfLink
FROM google.compute.health_check_services
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND healthCheckService = '{{ healthCheckService }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists all the HealthCheckService resources that have been<br />configured for the specified project in the given region.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.health_check_services
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND filter = '{{ filter }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
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

Creates a regional HealthCheckService resource in the<br />specified project and region using the data included in the request.

```sql
INSERT INTO google.compute.health_check_services (
data__description,
data__fingerprint,
data__healthChecks,
data__healthStatusAggregationPolicy,
data__name,
data__networkEndpointGroups,
data__notificationEndpoints,
project,
region,
requestId
)
SELECT 
'{{ description }}',
'{{ fingerprint }}',
'{{ healthChecks }}',
'{{ healthStatusAggregationPolicy }}',
'{{ name }}',
'{{ networkEndpointGroups }}',
'{{ notificationEndpoints }}',
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
- name: health_check_services
  props:
    - name: project
      value: "{{ project }}"
      description: Required parameter for the health_check_services resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the health_check_services resource.
    - name: description
      value: "{{ description }}"
      description: |
        An optional description of this resource. Provide this property when you
        create the resource.
    - name: fingerprint
      value: "{{ fingerprint }}"
      description: |
        Fingerprint of this resource. A hash of the contents stored in this object.
        This field is used in optimistic locking. This field will be ignored when
        inserting a HealthCheckService. An up-to-date fingerprint must
        be provided in order to patch/update the HealthCheckService; Otherwise, the
        request will fail with error 412 conditionNotMet. To see the
        latest fingerprint, make a get() request to retrieve the
        HealthCheckService.
    - name: healthChecks
      value:
        - "{{ healthChecks }}"
      description: |
        A list of URLs to the HealthCheck resources. Must have
        at least one HealthCheck, and not more than 10 for regionalHealthCheckService, and not more than 1 for globalHealthCheckService.HealthCheck resources must haveportSpecification=USE_SERVING_PORT orportSpecification=USE_FIXED_PORT. For
        regional HealthCheckService, theHealthCheck must be regional and in the same
        region. For global HealthCheckService,HealthCheck must be global. Mix of regional and globalHealthChecks is not supported. Multiple regionalHealthChecks must belong to the same region. RegionalHealthChecks must belong to the same region as zones ofNetworkEndpointGroups. For globalHealthCheckService using globalINTERNET_IP_PORT NetworkEndpointGroups, the
        global HealthChecks must specify sourceRegions,
        and HealthChecks that specify sourceRegions can
        only be used with global INTERNET_IP_PORTNetworkEndpointGroups.
    - name: healthStatusAggregationPolicy
      value: "{{ healthStatusAggregationPolicy }}"
      description: |
        Optional. Policy for how the results from multiple health checks
        for the same endpoint are aggregated. Defaults to NO_AGGREGATION
        if unspecified.
        - NO_AGGREGATION. An EndpointHealth message is
        returned for each  pair in the health check
        service.
        - AND. If any health check of an endpoint reportsUNHEALTHY, then UNHEALTHY is theHealthState of the endpoint. If all health checks reportHEALTHY, the HealthState of the endpoint isHEALTHY.
        .
        This is only allowed with regional HealthCheckService.
      valid_values: ['AND', 'NO_AGGREGATION']
    - name: name
      value: "{{ name }}"
      description: |
        Name of the resource. The name must be 1-63 characters long, and comply
        with RFC1035. Specifically, the name must be 1-63 characters
        long and match the regular expression
        \`[a-z]([-a-z0-9]*[a-z0-9])?\` which means the first character
        must be a lowercase letter, and all following characters must be a dash,
        lowercase letter, or digit, except the last character, which cannot be a
        dash.
    - name: networkEndpointGroups
      value:
        - "{{ networkEndpointGroups }}"
      description: |
        A list of URLs to the NetworkEndpointGroup
        resources. Must not have more than 100.  For regionalHealthCheckService, NEGs must be in
        zones in the region of the HealthCheckService. For globalHealthCheckServices, the NetworkEndpointGroups
        must be global INTERNET_IP_PORT.
    - name: notificationEndpoints
      value:
        - "{{ notificationEndpoints }}"
      description: |
        A list of URLs to the NotificationEndpoint
        resources. Must not have more than 10.  A list of endpoints for
        receiving notifications of change in health status. For regionalHealthCheckService,NotificationEndpoint must be regional and in the
        same region. For global HealthCheckService,NotificationEndpoint must be global.
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

Updates the specified regional HealthCheckService resource<br />with the data included in the request.  This method supportsPATCH<br />semantics and uses theJSON merge<br />patch format and processing rules.

```sql
UPDATE google.compute.health_check_services
SET 
data__description = '{{ description }}',
data__fingerprint = '{{ fingerprint }}',
data__healthChecks = '{{ healthChecks }}',
data__healthStatusAggregationPolicy = '{{ healthStatusAggregationPolicy }}',
data__name = '{{ name }}',
data__networkEndpointGroups = '{{ networkEndpointGroups }}',
data__notificationEndpoints = '{{ notificationEndpoints }}'
WHERE 
project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND healthCheckService = '{{ healthCheckService }}' --required
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

Deletes the specified regional HealthCheckService.

```sql
DELETE FROM google.compute.health_check_services
WHERE project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND healthCheckService = '{{ healthCheckService }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
