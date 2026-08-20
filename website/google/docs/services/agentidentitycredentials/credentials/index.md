--- 
title: credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - credentials
  - agentidentitycredentials
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

Creates, updates, deletes, gets or lists a <code>credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="credentials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.agentidentitycredentials.credentials" /></td></tr>
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
    <td><a href="#finalize"><CopyableCode code="finalize" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authProvidersId"><code>authProvidersId</code></a></td>
    <td></td>
    <td>Finalizes the credentials after a successful consent flow.</td>
</tr>
<tr>
    <td><a href="#retrieve"><CopyableCode code="retrieve" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authProvidersId"><code>authProvidersId</code></a></td>
    <td></td>
    <td>Retrieves authorization credentials for an auth provider, or indicates what action needs to be taken to obtain credentials. If the `token` field in the response is populated, credential retrieval was successful. If one of the fields in the `result` oneof is populated, further action is required to obtain credentials, such as redirecting the user for consent. View comments on `RetrieveCredentialsResponse` for more information.</td>
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
<tr id="parameter-authProvidersId">
    <td><CopyableCode code="authProvidersId" /></td>
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
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="finalize"
    values={[
        { label: 'finalize', value: 'finalize' },
        { label: 'retrieve', value: 'retrieve' }
    ]}
>
<TabItem value="finalize">

Finalizes the credentials after a successful consent flow.

```sql
EXEC google.agentidentitycredentials.credentials.finalize 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@authProvidersId='{{ authProvidersId }}' --required 
@@json=
'{
"consentNonce": "{{ consentNonce }}", 
"userId": "{{ userId }}", 
"userIdValidationState": "{{ userIdValidationState }}"
}'
;
```
</TabItem>
<TabItem value="retrieve">

Retrieves authorization credentials for an auth provider, or indicates what action needs to be taken to obtain credentials. If the `token` field in the response is populated, credential retrieval was successful. If one of the fields in the `result` oneof is populated, further action is required to obtain credentials, such as redirecting the user for consent. View comments on `RetrieveCredentialsResponse` for more information.

```sql
EXEC google.agentidentitycredentials.credentials.retrieve 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@authProvidersId='{{ authProvidersId }}' --required 
@@json=
'{
"continueUri": "{{ continueUri }}", 
"forceRefreshToken": "{{ forceRefreshToken }}", 
"scopes": "{{ scopes }}", 
"userId": "{{ userId }}"
}'
;
```
</TabItem>
</Tabs>
