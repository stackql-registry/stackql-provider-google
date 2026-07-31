--- 
title: connections
hide_title: false
hide_table_of_contents: false
keywords:
  - connections
  - connectors
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

Creates, updates, deletes, gets or lists a <code>connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.connectors.connections" /></td></tr>
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
    <td><a href="#tools"><CopyableCode code="tools" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a></td>
    <td></td>
    <td>Lists all available tools with POST.</td>
</tr>
<tr>
    <td><a href="#generate_connection_toolspec_override"><CopyableCode code="generate_connection_toolspec_override" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a></td>
    <td></td>
    <td>Generate toolspec override for the given list of toolNames.</td>
</tr>
<tr>
    <td><a href="#execute_sql_query"><CopyableCode code="execute_sql_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a></td>
    <td></td>
    <td>Executes a SQL statement specified in the body of the request. An example of this SQL statement in the case of Salesforce connector would be 'select * from Account a, Order o where a.Id = o.AccountId'.</td>
</tr>
<tr>
    <td><a href="#execute_http_request"><CopyableCode code="execute_http_request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a></td>
    <td></td>
    <td>Executes a generic HTTP request. This supports all payload formats including REST/JSON, GraphQL, XML, SOAP, and Multipart by passing the rendered payload as raw bytes.</td>
</tr>
<tr>
    <td><a href="#refresh_access_token"><CopyableCode code="refresh_access_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a></td>
    <td></td>
    <td>RefreshAccessToken exchanges the OAuth refresh token (and other necessary data) for a new access token (and new associated credentials).</td>
</tr>
<tr>
    <td><a href="#check_status"><CopyableCode code="check_status" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a></td>
    <td><a href="#parameter-executionConfig.headers"><code>executionConfig.headers</code></a></td>
    <td>Reports the status of the connection. Note that when the connection is in a state that is not ACTIVE, the implementation of this RPC method must return a Status with the corresponding State instead of returning a gRPC status code that is not "OK", which indicates that ConnectionStatus itself, not the connection, failed.</td>
</tr>
<tr>
    <td><a href="#check_readiness"><CopyableCode code="check_readiness" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a></td>
    <td></td>
    <td>Reports readiness status of the connector. Similar logic to GetStatus but modified for kubernetes health check to understand.</td>
</tr>
<tr>
    <td><a href="#exchange_auth_code"><CopyableCode code="exchange_auth_code" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a></td>
    <td></td>
    <td>ExchangeAuthCode exchanges the OAuth authorization code (and other necessary data) for an access token (and associated credentials).</td>
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
<tr id="parameter-connectionsId">
    <td><CopyableCode code="connectionsId" /></td>
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
<tr id="parameter-executionConfig.headers">
    <td><CopyableCode code="executionConfig.headers" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="tools"
    values={[
        { label: 'tools', value: 'tools' },
        { label: 'generate_connection_toolspec_override', value: 'generate_connection_toolspec_override' },
        { label: 'execute_sql_query', value: 'execute_sql_query' },
        { label: 'execute_http_request', value: 'execute_http_request' },
        { label: 'refresh_access_token', value: 'refresh_access_token' },
        { label: 'check_status', value: 'check_status' },
        { label: 'check_readiness', value: 'check_readiness' },
        { label: 'exchange_auth_code', value: 'exchange_auth_code' }
    ]}
>
<TabItem value="tools">

Lists all available tools with POST.

```sql
EXEC google.connectors.connections.tools 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@connectionsId='{{ connectionsId }}' --required 
@@json=
'{
"toolNames": "{{ toolNames }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}", 
"executionConfig": "{{ executionConfig }}", 
"toolSpec": "{{ toolSpec }}"
}'
;
```
</TabItem>
<TabItem value="generate_connection_toolspec_override">

Generate toolspec override for the given list of toolNames.

```sql
EXEC google.connectors.connections.generate_connection_toolspec_override 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@connectionsId='{{ connectionsId }}' --required 
@@json=
'{
"toolNames": "{{ toolNames }}"
}'
;
```
</TabItem>
<TabItem value="execute_sql_query">

Executes a SQL statement specified in the body of the request. An example of this SQL statement in the case of Salesforce connector would be 'select * from Account a, Order o where a.Id = o.AccountId'.

```sql
EXEC google.connectors.connections.execute_sql_query 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@connectionsId='{{ connectionsId }}' --required 
@@json=
'{
"query": "{{ query }}"
}'
;
```
</TabItem>
<TabItem value="execute_http_request">

Executes a generic HTTP request. This supports all payload formats including REST/JSON, GraphQL, XML, SOAP, and Multipart by passing the rendered payload as raw bytes.

```sql
EXEC google.connectors.connections.execute_http_request 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@connectionsId='{{ connectionsId }}' --required 
@@json=
'{
"httpMethod": "{{ httpMethod }}", 
"url": "{{ url }}", 
"headers": "{{ headers }}", 
"rawBody": "{{ rawBody }}"
}'
;
```
</TabItem>
<TabItem value="refresh_access_token">

RefreshAccessToken exchanges the OAuth refresh token (and other necessary data) for a new access token (and new associated credentials).

```sql
EXEC google.connectors.connections.refresh_access_token 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@connectionsId='{{ connectionsId }}' --required 
@@json=
'{
"executionConfig": "{{ executionConfig }}", 
"oauth2Config": "{{ oauth2Config }}", 
"refreshToken": "{{ refreshToken }}"
}'
;
```
</TabItem>
<TabItem value="check_status">

Reports the status of the connection. Note that when the connection is in a state that is not ACTIVE, the implementation of this RPC method must return a Status with the corresponding State instead of returning a gRPC status code that is not "OK", which indicates that ConnectionStatus itself, not the connection, failed.

```sql
EXEC google.connectors.connections.check_status 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@connectionsId='{{ connectionsId }}' --required, 
@executionConfig.headers='{{ executionConfig.headers }}'
;
```
</TabItem>
<TabItem value="check_readiness">

Reports readiness status of the connector. Similar logic to GetStatus but modified for kubernetes health check to understand.

```sql
EXEC google.connectors.connections.check_readiness 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@connectionsId='{{ connectionsId }}' --required
;
```
</TabItem>
<TabItem value="exchange_auth_code">

ExchangeAuthCode exchanges the OAuth authorization code (and other necessary data) for an access token (and associated credentials).

```sql
EXEC google.connectors.connections.exchange_auth_code 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@connectionsId='{{ connectionsId }}' --required 
@@json=
'{
"executionConfig": "{{ executionConfig }}", 
"oauth2Config": "{{ oauth2Config }}", 
"authCodeData": "{{ authCodeData }}"
}'
;
```
</TabItem>
</Tabs>
