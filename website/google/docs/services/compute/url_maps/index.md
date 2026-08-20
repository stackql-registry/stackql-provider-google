--- 
title: url_maps
hide_title: false
hide_table_of_contents: false
keywords:
  - url_maps
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

Creates, updates, deletes, gets or lists a <code>url_maps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="url_maps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.url_maps" /></td></tr>
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
    <td>[Output Only] The unique identifier for the resource. This identifier is defined by the server.</td>
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
    <td><CopyableCode code="defaultCustomErrorResponsePolicy" /></td>
    <td><code>object</code></td>
    <td>defaultCustomErrorResponsePolicy specifies how the Load Balancer returns error responses when BackendServiceorBackendBucket responds with an error.   This policy takes effect at the load balancer level and applies only when no policy has been defined for the error code at lower levels like PathMatcher, RouteRule and PathRule within this UrlMap.   For example, consider a UrlMap with the following configuration:              - defaultCustomErrorResponsePolicy containing policies for      responding to 5xx and 4xx errors      - A PathMatcher configured for *.example.com has      defaultCustomErrorResponsePolicy for 4xx.  If a request for http://www.example.com/ encounters a404, the policy inpathMatcher.defaultCustomErrorResponsePolicy will be enforced. When the request for http://www.example.com/ encounters a502, the policy inUrlMap.defaultCustomErrorResponsePolicy will be enforced. When a request that does not match any host in *.example.com such as http://www.myotherexample.com/, encounters a404, UrlMap.defaultCustomErrorResponsePolicy takes effect.   When used in conjunction withdefaultRouteAction.retryPolicy, retries take precedence. Only once all retries are exhausted, thedefaultCustomErrorResponsePolicy is applied. While attempting a retry, if load balancer is successful in reaching the service, the defaultCustomErrorResponsePolicy is ignored and the response from the service is returned to the client.  defaultCustomErrorResponsePolicy is supported only for global external Application Load Balancers. (id: CustomErrorResponsePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultRouteAction" /></td>
    <td><code>object</code></td>
    <td>defaultRouteAction takes effect when none of the  hostRules match. The load balancer performs advanced routing actions, such as URL rewrites and header transformations, before forwarding the request to the selected backend.   Only one of defaultUrlRedirect, defaultService or defaultRouteAction.weightedBackendService can be set.    URL maps for classic Application Load Balancers only support the urlRewrite action within defaultRouteAction.   defaultRouteAction has no effect when the URL map is bound to a target gRPC proxy that has the validateForProxyless field set to true. (id: HttpRouteAction)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultService" /></td>
    <td><code>string</code></td>
    <td>The full or partial URL of the defaultService resource to which traffic is directed if none of the hostRules match. If defaultRouteAction is also specified, advanced routing actions, such as URL rewrites, take effect before sending the request to the backend.   Only one of defaultUrlRedirect, defaultService or defaultRouteAction.weightedBackendService can be set.   defaultService has no effect when the URL map is bound to a target gRPC proxy that has the validateForProxyless field set to true.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultUrlRedirect" /></td>
    <td><code>object</code></td>
    <td>When none of the specified hostRules match, the request is redirected to a URL specified by defaultUrlRedirect.   Only one of defaultUrlRedirect, defaultService or defaultRouteAction.weightedBackendService can be set.   Not supported when the URL map is bound to a target gRPC proxy. (id: HttpRedirectAction)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string (byte)</code></td>
    <td>Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field is ignored when inserting a UrlMap. An up-to-date fingerprint must be provided in order to update the UrlMap, otherwise the request will fail with error 412 conditionNotMet.  To see the latest fingerprint, make a get() request to retrieve a UrlMap.</td>
</tr>
<tr>
    <td><CopyableCode code="headerAction" /></td>
    <td><code>object</code></td>
    <td>Specifies changes to request and response headers that need to take effect for the selected backendService.  The headerAction specified here take effect afterheaderAction specified under pathMatcher.  headerAction is not supported for load balancers that have their loadBalancingScheme set to EXTERNAL.  Not supported when the URL map is bound to a target gRPC proxy that has validateForProxyless field set to true. (id: HttpHeaderAction)</td>
</tr>
<tr>
    <td><CopyableCode code="hostRules" /></td>
    <td><code>array</code></td>
    <td>The list of host rules to use against the URL.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of the resource. Always compute#urlMaps for url maps. (default: compute#urlMap)</td>
</tr>
<tr>
    <td><CopyableCode code="pathMatchers" /></td>
    <td><code>array</code></td>
    <td>The list of named PathMatchers to use against the URL.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] URL of the region where the regional URL map resides. This field is not applicable to global URL maps. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="tests" /></td>
    <td><code>array</code></td>
    <td>The list of expected URL mapping tests. Request to update theUrlMap succeeds only if all test cases pass. You can specify a maximum of 100 tests per UrlMap.  Not supported when the URL map is bound to a target gRPC proxy that has validateForProxyless field set to true.</td>
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
    <td>A list of UrlMap resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. Type of resource. (default: compute#urlMapList)</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>[Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger thanmaxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.</td>
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
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string (uint64)</code></td>
    <td>[Output Only] The unique identifier for the resource. This identifier is defined by the server.</td>
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
    <td><CopyableCode code="defaultCustomErrorResponsePolicy" /></td>
    <td><code>object</code></td>
    <td>defaultCustomErrorResponsePolicy specifies how the Load Balancer returns error responses when BackendServiceorBackendBucket responds with an error.   This policy takes effect at the load balancer level and applies only when no policy has been defined for the error code at lower levels like PathMatcher, RouteRule and PathRule within this UrlMap.   For example, consider a UrlMap with the following configuration:              - defaultCustomErrorResponsePolicy containing policies for      responding to 5xx and 4xx errors      - A PathMatcher configured for *.example.com has      defaultCustomErrorResponsePolicy for 4xx.  If a request for http://www.example.com/ encounters a404, the policy inpathMatcher.defaultCustomErrorResponsePolicy will be enforced. When the request for http://www.example.com/ encounters a502, the policy inUrlMap.defaultCustomErrorResponsePolicy will be enforced. When a request that does not match any host in *.example.com such as http://www.myotherexample.com/, encounters a404, UrlMap.defaultCustomErrorResponsePolicy takes effect.   When used in conjunction withdefaultRouteAction.retryPolicy, retries take precedence. Only once all retries are exhausted, thedefaultCustomErrorResponsePolicy is applied. While attempting a retry, if load balancer is successful in reaching the service, the defaultCustomErrorResponsePolicy is ignored and the response from the service is returned to the client.  defaultCustomErrorResponsePolicy is supported only for global external Application Load Balancers. (id: CustomErrorResponsePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultRouteAction" /></td>
    <td><code>object</code></td>
    <td>defaultRouteAction takes effect when none of the  hostRules match. The load balancer performs advanced routing actions, such as URL rewrites and header transformations, before forwarding the request to the selected backend.   Only one of defaultUrlRedirect, defaultService or defaultRouteAction.weightedBackendService can be set.    URL maps for classic Application Load Balancers only support the urlRewrite action within defaultRouteAction.   defaultRouteAction has no effect when the URL map is bound to a target gRPC proxy that has the validateForProxyless field set to true. (id: HttpRouteAction)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultService" /></td>
    <td><code>string</code></td>
    <td>The full or partial URL of the defaultService resource to which traffic is directed if none of the hostRules match. If defaultRouteAction is also specified, advanced routing actions, such as URL rewrites, take effect before sending the request to the backend.   Only one of defaultUrlRedirect, defaultService or defaultRouteAction.weightedBackendService can be set.   defaultService has no effect when the URL map is bound to a target gRPC proxy that has the validateForProxyless field set to true.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultUrlRedirect" /></td>
    <td><code>object</code></td>
    <td>When none of the specified hostRules match, the request is redirected to a URL specified by defaultUrlRedirect.   Only one of defaultUrlRedirect, defaultService or defaultRouteAction.weightedBackendService can be set.   Not supported when the URL map is bound to a target gRPC proxy. (id: HttpRedirectAction)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string (byte)</code></td>
    <td>Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field is ignored when inserting a UrlMap. An up-to-date fingerprint must be provided in order to update the UrlMap, otherwise the request will fail with error 412 conditionNotMet.  To see the latest fingerprint, make a get() request to retrieve a UrlMap.</td>
</tr>
<tr>
    <td><CopyableCode code="headerAction" /></td>
    <td><code>object</code></td>
    <td>Specifies changes to request and response headers that need to take effect for the selected backendService.  The headerAction specified here take effect afterheaderAction specified under pathMatcher.  headerAction is not supported for load balancers that have their loadBalancingScheme set to EXTERNAL.  Not supported when the URL map is bound to a target gRPC proxy that has validateForProxyless field set to true. (id: HttpHeaderAction)</td>
</tr>
<tr>
    <td><CopyableCode code="hostRules" /></td>
    <td><code>array</code></td>
    <td>The list of host rules to use against the URL.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of the resource. Always compute#urlMaps for url maps. (default: compute#urlMap)</td>
</tr>
<tr>
    <td><CopyableCode code="pathMatchers" /></td>
    <td><code>array</code></td>
    <td>The list of named PathMatchers to use against the URL.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] URL of the region where the regional URL map resides. This field is not applicable to global URL maps. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="tests" /></td>
    <td><code>array</code></td>
    <td>The list of expected URL mapping tests. Request to update theUrlMap succeeds only if all test cases pass. You can specify a maximum of 100 tests per UrlMap.  Not supported when the URL map is bound to a target gRPC proxy that has validateForProxyless field set to true.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-urlMap"><code>urlMap</code></a></td>
    <td></td>
    <td>Returns the specified UrlMap resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Retrieves the list of UrlMap resources available to the specified<br />project.</td>
</tr>
<tr>
    <td><a href="#aggregated_list"><CopyableCode code="aggregated_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-includeAllScopes"><code>includeAllScopes</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a>, <a href="#parameter-serviceProjectNumber"><code>serviceProjectNumber</code></a></td>
    <td>Retrieves the list of all UrlMap resources, regional and global,<br />available to the specified project.<br /><br />To prevent failure, Google recommends that you set the<br />`returnPartialSuccess` parameter to `true`.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a UrlMap resource in the specified project using<br />the data included in the request.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-urlMap"><code>urlMap</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Patches the specified UrlMap resource with the data included in the<br />request. This method supportsPATCH<br />semantics and uses theJSON merge<br />patch format and processing rules.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-urlMap"><code>urlMap</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the specified UrlMap resource with the data included in the<br />request.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-urlMap"><code>urlMap</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified UrlMap resource.</td>
</tr>
<tr>
    <td><a href="#invalidate_cache"><CopyableCode code="invalidate_cache" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-urlMap"><code>urlMap</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Initiates a cache invalidation operation, invalidating the specified path,<br />scoped to the specified UrlMap.<br /><br />For more information, see [Invalidating cached<br />content](https://cloud.google.com/cdn/docs/invalidating-cached-content).</td>
</tr>
<tr>
    <td><a href="#validate"><CopyableCode code="validate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-urlMap"><code>urlMap</code></a></td>
    <td></td>
    <td>Runs static validation for the UrlMap. In particular, the tests of the<br />provided UrlMap will be run. Calling this method does NOT create the<br />UrlMap.</td>
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
<tr id="parameter-urlMap">
    <td><CopyableCode code="urlMap" /></td>
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

Returns the specified UrlMap resource.

```sql
SELECT
id,
name,
creationTimestamp,
defaultCustomErrorResponsePolicy,
defaultRouteAction,
defaultService,
defaultUrlRedirect,
description,
fingerprint,
headerAction,
hostRules,
kind,
pathMatchers,
region,
selfLink,
tests
FROM google.compute.url_maps
WHERE project = '{{ project }}' -- required
AND urlMap = '{{ urlMap }}' -- required
;
```
</TabItem>
<TabItem value="list">

Retrieves the list of UrlMap resources available to the specified<br />project.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.url_maps
WHERE project = '{{ project }}' -- required
AND filter = '{{ filter }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
;
```
</TabItem>
<TabItem value="aggregated_list">

Retrieves the list of all UrlMap resources, regional and global,<br />available to the specified project.<br /><br />To prevent failure, Google recommends that you set the<br />`returnPartialSuccess` parameter to `true`.

```sql
SELECT
id,
name,
creationTimestamp,
defaultCustomErrorResponsePolicy,
defaultRouteAction,
defaultService,
defaultUrlRedirect,
description,
fingerprint,
headerAction,
hostRules,
kind,
pathMatchers,
region,
selfLink,
tests
FROM google.compute.url_maps
WHERE project = '{{ project }}' -- required
AND filter = '{{ filter }}'
AND includeAllScopes = '{{ includeAllScopes }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
AND serviceProjectNumber = '{{ serviceProjectNumber }}'
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

Creates a UrlMap resource in the specified project using<br />the data included in the request.

```sql
INSERT INTO google.compute.url_maps (
data__defaultCustomErrorResponsePolicy,
data__defaultRouteAction,
data__defaultService,
data__defaultUrlRedirect,
data__description,
data__fingerprint,
data__headerAction,
data__hostRules,
data__id,
data__name,
data__pathMatchers,
data__selfLink,
data__tests,
project,
requestId
)
SELECT 
'{{ defaultCustomErrorResponsePolicy }}',
'{{ defaultRouteAction }}',
'{{ defaultService }}',
'{{ defaultUrlRedirect }}',
'{{ description }}',
'{{ fingerprint }}',
'{{ headerAction }}',
'{{ hostRules }}',
'{{ id }}',
'{{ name }}',
'{{ pathMatchers }}',
'{{ selfLink }}',
'{{ tests }}',
'{{ project }}',
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
- name: url_maps
  props:
    - name: project
      value: "{{ project }}"
      description: Required parameter for the url_maps resource.
    - name: defaultCustomErrorResponsePolicy
      description: |
        defaultCustomErrorResponsePolicy specifies how the Load
        Balancer returns error responses when BackendServiceorBackendBucket responds with an error.
        This policy takes
        effect at the load balancer level and applies only when no policy has been
        defined for the error code at lower levels like PathMatcher, RouteRule and
        PathRule within this UrlMap.
        For example, consider a UrlMap with the
        following configuration:
        - defaultCustomErrorResponsePolicy containing policies for
        responding to 5xx and 4xx errors
        - A PathMatcher configured for *.example.com has
        defaultCustomErrorResponsePolicy for 4xx.
        If a request for http://www.example.com/ encounters a404, the policy inpathMatcher.defaultCustomErrorResponsePolicy will be enforced.
        When the request for http://www.example.com/ encounters a502, the policy inUrlMap.defaultCustomErrorResponsePolicy will be enforced. When
        a request that does not match any host in *.example.com such
        as http://www.myotherexample.com/, encounters a404, UrlMap.defaultCustomErrorResponsePolicy
        takes effect.
        When used in conjunction withdefaultRouteAction.retryPolicy, retries take precedence. Only
        once all retries are exhausted, thedefaultCustomErrorResponsePolicy is applied. While attempting
        a retry, if load balancer is successful in reaching the
        service, the defaultCustomErrorResponsePolicy is ignored and
        the response from the service is returned to the client.
        defaultCustomErrorResponsePolicy is supported only for
        global external Application Load Balancers.
      value:
        errorResponseRules:
          - matchResponseCodes: "{{ matchResponseCodes }}"
            overrideResponseCode: {{ overrideResponseCode }}
            path: "{{ path }}"
        errorService: "{{ errorService }}"
    - name: defaultRouteAction
      description: |
        defaultRouteAction takes effect when none of the
        hostRules match. The load balancer performs advanced routing
        actions, such as URL rewrites and header transformations, before forwarding
        the request to the selected backend.
        Only one of defaultUrlRedirect, defaultService
        or defaultRouteAction.weightedBackendService can be set.
        URL maps for classic Application Load Balancers only support
        the urlRewrite action within defaultRouteAction.
        defaultRouteAction has no effect when the URL map is bound
        to a target gRPC proxy that has the validateForProxyless field
        set to true.
      value:
        cachePolicy:
          cacheBypassRequestHeaderNames:
            - "{{ cacheBypassRequestHeaderNames }}"
          cacheKeyPolicy:
            excludedQueryParameters:
              - "{{ excludedQueryParameters }}"
            includeHost: {{ includeHost }}
            includeProtocol: {{ includeProtocol }}
            includeQueryString: {{ includeQueryString }}
            includedCookieNames:
              - "{{ includedCookieNames }}"
            includedHeaderNames:
              - "{{ includedHeaderNames }}"
            includedQueryParameters:
              - "{{ includedQueryParameters }}"
          cacheMode: "{{ cacheMode }}"
          clientTtl:
            nanos: {{ nanos }}
            seconds: "{{ seconds }}"
          defaultTtl:
            nanos: {{ nanos }}
            seconds: "{{ seconds }}"
          maxTtl:
            nanos: {{ nanos }}
            seconds: "{{ seconds }}"
          negativeCaching: {{ negativeCaching }}
          negativeCachingPolicy:
            - code: {{ code }}
              ttl:
                nanos: {{ nanos }}
                seconds: "{{ seconds }}"
          requestCoalescing: {{ requestCoalescing }}
          serveWhileStale:
            nanos: {{ nanos }}
            seconds: "{{ seconds }}"
        corsPolicy:
          allowCredentials: {{ allowCredentials }}
          allowHeaders:
            - "{{ allowHeaders }}"
          allowMethods:
            - "{{ allowMethods }}"
          allowOriginRegexes:
            - "{{ allowOriginRegexes }}"
          allowOrigins:
            - "{{ allowOrigins }}"
          disabled: {{ disabled }}
          exposeHeaders:
            - "{{ exposeHeaders }}"
          maxAge: {{ maxAge }}
        faultInjectionPolicy:
          abort:
            httpStatus: {{ httpStatus }}
            percentage: {{ percentage }}
          delay:
            fixedDelay:
              nanos: {{ nanos }}
              seconds: "{{ seconds }}"
            percentage: {{ percentage }}
        maxStreamDuration:
          nanos: {{ nanos }}
          seconds: "{{ seconds }}"
        requestMirrorPolicy:
          backendService: "{{ backendService }}"
          mirrorPercent: {{ mirrorPercent }}
        retryPolicy:
          numRetries: {{ numRetries }}
          perTryTimeout:
            nanos: {{ nanos }}
            seconds: "{{ seconds }}"
          retryConditions:
            - "{{ retryConditions }}"
        timeout:
          nanos: {{ nanos }}
          seconds: "{{ seconds }}"
        urlRewrite:
          hostRewrite: "{{ hostRewrite }}"
          pathPrefixRewrite: "{{ pathPrefixRewrite }}"
          pathTemplateRewrite: "{{ pathTemplateRewrite }}"
          regexRewrite:
            pathPattern: "{{ pathPattern }}"
            pathSubstitution: "{{ pathSubstitution }}"
        weightedBackendServices:
          - backendService: "{{ backendService }}"
            headerAction:
              requestHeadersToAdd:
                - headerName: "{{ headerName }}"
                  headerValue: "{{ headerValue }}"
                  replace: {{ replace }}
              requestHeadersToRemove:
                - "{{ requestHeadersToRemove }}"
              responseHeadersToAdd:
                - headerName: "{{ headerName }}"
                  headerValue: "{{ headerValue }}"
                  replace: {{ replace }}
              responseHeadersToRemove:
                - "{{ responseHeadersToRemove }}"
            weight: {{ weight }}
    - name: defaultService
      value: "{{ defaultService }}"
      description: |
        The full or partial URL of the defaultService resource to
        which traffic is directed if none of the hostRules match.
        If defaultRouteAction is also specified, advanced
        routing actions, such as URL rewrites, take effect before sending the
        request to the backend.
        Only one of defaultUrlRedirect, defaultService
        or defaultRouteAction.weightedBackendService can be set.
        defaultService has no effect when the URL map is bound
        to a target gRPC proxy that has the validateForProxyless field
        set to true.
    - name: defaultUrlRedirect
      description: |
        When none of the specified hostRules match, the request
        is redirected to a URL specified by defaultUrlRedirect.
        Only one of defaultUrlRedirect, defaultService
        or defaultRouteAction.weightedBackendService can be set.
        Not supported when the URL map is bound to a target gRPC proxy.
      value:
        hostRedirect: "{{ hostRedirect }}"
        httpsRedirect: {{ httpsRedirect }}
        pathRedirect: "{{ pathRedirect }}"
        prefixRedirect: "{{ prefixRedirect }}"
        redirectResponseCode: "{{ redirectResponseCode }}"
        stripQuery: {{ stripQuery }}
    - name: description
      value: "{{ description }}"
      description: |
        An optional description of this resource. Provide this property when you
        create the resource.
    - name: fingerprint
      value: "{{ fingerprint }}"
      description: |
        Fingerprint of this resource. A hash of the contents stored in this object.
        This field is used in optimistic locking. This field is ignored when
        inserting a UrlMap. An up-to-date fingerprint must be provided
        in order to update the UrlMap, otherwise the request will
        fail with error 412 conditionNotMet.
        To see the latest fingerprint, make a get() request to
        retrieve a UrlMap.
    - name: headerAction
      description: |
        Specifies changes to request and response headers that need to take effect
        for the selected backendService.
        The headerAction specified here take effect afterheaderAction specified under pathMatcher.
        headerAction is not supported for load balancers
        that have
        their loadBalancingScheme set to EXTERNAL.
        Not supported when the URL map is bound to a target gRPC proxy that
        has validateForProxyless field set to true.
      value:
        requestHeadersToAdd:
          - headerName: "{{ headerName }}"
            headerValue: "{{ headerValue }}"
            replace: {{ replace }}
        requestHeadersToRemove:
          - "{{ requestHeadersToRemove }}"
        responseHeadersToAdd:
          - headerName: "{{ headerName }}"
            headerValue: "{{ headerValue }}"
            replace: {{ replace }}
        responseHeadersToRemove:
          - "{{ responseHeadersToRemove }}"
    - name: hostRules
      description: |
        The list of host rules to use against the URL.
      value:
        - description: "{{ description }}"
          hosts: "{{ hosts }}"
          pathMatcher: "{{ pathMatcher }}"
    - name: id
      value: "{{ id }}"
      description: |
        [Output Only] The unique identifier for the resource. This identifier is
        defined by the server.
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
    - name: pathMatchers
      description: |
        The list of named PathMatchers to use against the URL.
      value:
        - defaultCustomErrorResponsePolicy:
            errorResponseRules:
              - matchResponseCodes: "{{ matchResponseCodes }}"
                overrideResponseCode: {{ overrideResponseCode }}
                path: "{{ path }}"
            errorService: "{{ errorService }}"
          defaultRouteAction:
            cachePolicy:
              cacheBypassRequestHeaderNames:
                - "{{ cacheBypassRequestHeaderNames }}"
              cacheKeyPolicy:
                excludedQueryParameters:
                  - "{{ excludedQueryParameters }}"
                includeHost: {{ includeHost }}
                includeProtocol: {{ includeProtocol }}
                includeQueryString: {{ includeQueryString }}
                includedCookieNames:
                  - "{{ includedCookieNames }}"
                includedHeaderNames:
                  - "{{ includedHeaderNames }}"
                includedQueryParameters:
                  - "{{ includedQueryParameters }}"
              cacheMode: "{{ cacheMode }}"
              clientTtl:
                nanos: {{ nanos }}
                seconds: "{{ seconds }}"
              defaultTtl:
                nanos: {{ nanos }}
                seconds: "{{ seconds }}"
              maxTtl:
                nanos: {{ nanos }}
                seconds: "{{ seconds }}"
              negativeCaching: {{ negativeCaching }}
              negativeCachingPolicy:
                - code: {{ code }}
                  ttl:
                    nanos: {{ nanos }}
                    seconds: "{{ seconds }}"
              requestCoalescing: {{ requestCoalescing }}
              serveWhileStale:
                nanos: {{ nanos }}
                seconds: "{{ seconds }}"
            corsPolicy:
              allowCredentials: {{ allowCredentials }}
              allowHeaders:
                - "{{ allowHeaders }}"
              allowMethods:
                - "{{ allowMethods }}"
              allowOriginRegexes:
                - "{{ allowOriginRegexes }}"
              allowOrigins:
                - "{{ allowOrigins }}"
              disabled: {{ disabled }}
              exposeHeaders:
                - "{{ exposeHeaders }}"
              maxAge: {{ maxAge }}
            faultInjectionPolicy:
              abort:
                httpStatus: {{ httpStatus }}
                percentage: {{ percentage }}
              delay:
                fixedDelay:
                  nanos: {{ nanos }}
                  seconds: "{{ seconds }}"
                percentage: {{ percentage }}
            maxStreamDuration:
              nanos: {{ nanos }}
              seconds: "{{ seconds }}"
            requestMirrorPolicy:
              backendService: "{{ backendService }}"
              mirrorPercent: {{ mirrorPercent }}
            retryPolicy:
              numRetries: {{ numRetries }}
              perTryTimeout:
                nanos: {{ nanos }}
                seconds: "{{ seconds }}"
              retryConditions:
                - "{{ retryConditions }}"
            timeout:
              nanos: {{ nanos }}
              seconds: "{{ seconds }}"
            urlRewrite:
              hostRewrite: "{{ hostRewrite }}"
              pathPrefixRewrite: "{{ pathPrefixRewrite }}"
              pathTemplateRewrite: "{{ pathTemplateRewrite }}"
              regexRewrite:
                pathPattern: "{{ pathPattern }}"
                pathSubstitution: "{{ pathSubstitution }}"
            weightedBackendServices:
              - backendService: "{{ backendService }}"
                headerAction:
                  requestHeadersToAdd:
                    - headerName: "{{ headerName }}"
                      headerValue: "{{ headerValue }}"
                      replace: {{ replace }}
                  requestHeadersToRemove:
                    - "{{ requestHeadersToRemove }}"
                  responseHeadersToAdd:
                    - headerName: "{{ headerName }}"
                      headerValue: "{{ headerValue }}"
                      replace: {{ replace }}
                  responseHeadersToRemove:
                    - "{{ responseHeadersToRemove }}"
                weight: {{ weight }}
          defaultService: "{{ defaultService }}"
          defaultUrlRedirect:
            hostRedirect: "{{ hostRedirect }}"
            httpsRedirect: {{ httpsRedirect }}
            pathRedirect: "{{ pathRedirect }}"
            prefixRedirect: "{{ prefixRedirect }}"
            redirectResponseCode: "{{ redirectResponseCode }}"
            stripQuery: {{ stripQuery }}
          description: "{{ description }}"
          headerAction:
            requestHeadersToAdd:
              - headerName: "{{ headerName }}"
                headerValue: "{{ headerValue }}"
                replace: {{ replace }}
            requestHeadersToRemove:
              - "{{ requestHeadersToRemove }}"
            responseHeadersToAdd:
              - headerName: "{{ headerName }}"
                headerValue: "{{ headerValue }}"
                replace: {{ replace }}
            responseHeadersToRemove:
              - "{{ responseHeadersToRemove }}"
          name: "{{ name }}"
          pathRules: "{{ pathRules }}"
          routeRules: "{{ routeRules }}"
    - name: selfLink
      value: "{{ selfLink }}"
      description: |
        [Output Only] Server-defined URL for the resource.
    - name: tests
      description: |
        The list of expected URL mapping tests. Request to update theUrlMap succeeds only if all test cases pass. You can specify a
        maximum of 100 tests per UrlMap.
        Not supported when the URL map is bound to a target gRPC proxy that
        has validateForProxyless field set to true.
      value:
        - description: "{{ description }}"
          expectedOutputUrl: "{{ expectedOutputUrl }}"
          expectedRedirectResponseCode: {{ expectedRedirectResponseCode }}
          headers: "{{ headers }}"
          host: "{{ host }}"
          path: "{{ path }}"
          service: "{{ service }}"
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

Patches the specified UrlMap resource with the data included in the<br />request. This method supportsPATCH<br />semantics and uses theJSON merge<br />patch format and processing rules.

```sql
UPDATE google.compute.url_maps
SET 
data__defaultCustomErrorResponsePolicy = '{{ defaultCustomErrorResponsePolicy }}',
data__defaultRouteAction = '{{ defaultRouteAction }}',
data__defaultService = '{{ defaultService }}',
data__defaultUrlRedirect = '{{ defaultUrlRedirect }}',
data__description = '{{ description }}',
data__fingerprint = '{{ fingerprint }}',
data__headerAction = '{{ headerAction }}',
data__hostRules = '{{ hostRules }}',
data__id = '{{ id }}',
data__name = '{{ name }}',
data__pathMatchers = '{{ pathMatchers }}',
data__selfLink = '{{ selfLink }}',
data__tests = '{{ tests }}'
WHERE 
project = '{{ project }}' --required
AND urlMap = '{{ urlMap }}' --required
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


## `REPLACE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates the specified UrlMap resource with the data included in the<br />request.

```sql
REPLACE google.compute.url_maps
SET 
data__defaultCustomErrorResponsePolicy = '{{ defaultCustomErrorResponsePolicy }}',
data__defaultRouteAction = '{{ defaultRouteAction }}',
data__defaultService = '{{ defaultService }}',
data__defaultUrlRedirect = '{{ defaultUrlRedirect }}',
data__description = '{{ description }}',
data__fingerprint = '{{ fingerprint }}',
data__headerAction = '{{ headerAction }}',
data__hostRules = '{{ hostRules }}',
data__id = '{{ id }}',
data__name = '{{ name }}',
data__pathMatchers = '{{ pathMatchers }}',
data__selfLink = '{{ selfLink }}',
data__tests = '{{ tests }}'
WHERE 
project = '{{ project }}' --required
AND urlMap = '{{ urlMap }}' --required
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

Deletes the specified UrlMap resource.

```sql
DELETE FROM google.compute.url_maps
WHERE project = '{{ project }}' --required
AND urlMap = '{{ urlMap }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="invalidate_cache"
    values={[
        { label: 'invalidate_cache', value: 'invalidate_cache' },
        { label: 'validate', value: 'validate' }
    ]}
>
<TabItem value="invalidate_cache">

Initiates a cache invalidation operation, invalidating the specified path,<br />scoped to the specified UrlMap.<br /><br />For more information, see [Invalidating cached<br />content](https://cloud.google.com/cdn/docs/invalidating-cached-content).

```sql
EXEC google.compute.url_maps.invalidate_cache 
@project='{{ project }}' --required, 
@urlMap='{{ urlMap }}' --required, 
@requestId='{{ requestId }}' 
@@json=
'{
"cacheTags": "{{ cacheTags }}", 
"host": "{{ host }}", 
"path": "{{ path }}"
}'
;
```
</TabItem>
<TabItem value="validate">

Runs static validation for the UrlMap. In particular, the tests of the<br />provided UrlMap will be run. Calling this method does NOT create the<br />UrlMap.

```sql
EXEC google.compute.url_maps.validate 
@project='{{ project }}' --required, 
@urlMap='{{ urlMap }}' --required 
@@json=
'{
"loadBalancingSchemes": "{{ loadBalancingSchemes }}", 
"resource": "{{ resource }}"
}'
;
```
</TabItem>
</Tabs>
