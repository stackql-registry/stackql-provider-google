--- 
title: auth_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - auth_providers
  - agentidentity
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

Creates, updates, deletes, gets or lists an <code>auth_providers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="auth_providers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.agentidentity.auth_providers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'query_workloads', value: 'query_workloads' },
        { label: 'list', value: 'list' },
        { label: 'query', value: 'query' }
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
    <td>Identifier. The full resource name of the auth_provider. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/authProviders/&#123;auth_provider&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="allowedScopes" /></td>
    <td><code>array</code></td>
    <td>Optional. List of scopes that are allowed to be requested for this auth_provider. If this list is non-empty, only scopes within this list may be requested. If this list is empty, all scopes may be requested. Scopes appearing in `blocked_scopes` are disallowed even if they appear in `allowed_scopes`. The number of allowed scopes is limited to 200.</td>
</tr>
<tr>
    <td><CopyableCode code="authProviderTypeParams" /></td>
    <td><code>object</code></td>
    <td>Required. AuthProvider type specific parameters. (id: AuthProviderTypeParams)</td>
</tr>
<tr>
    <td><CopyableCode code="blockedScopes" /></td>
    <td><code>array</code></td>
    <td>Optional. List of scopes that are blocked from being requested for this auth_provider. If a scope appears in this list, it will not be requested, even if it also appears in `allowed_scopes`. `blocked_scopes` takes precedence over `allowed_scopes`. The number of blocked scopes is limited to 200.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Create time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Output only. This is set to true if the auth_provider is deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the resource. Must be less than 256 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the auth_provider will expire.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the auth_provider. (STATE_UNSPECIFIED, ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Update time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="workloadIds" /></td>
    <td><code>array</code></td>
    <td>Optional. Input only. Represents the workload identity in IAM `principal://` format of the agent(s) that will use this AuthProvider. Example: `principal://agents.global.org-$&#123;ORG_ID&#125;.system.id.goog/resources/aiplatform/projects/&#123;PROJECT_ID&#125;/locations/&#123;LOCATIONS&#125;/reasoningEngines/&#123;ID&#125;`</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="query_workloads">

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token to retrieve the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="workloadIds" /></td>
    <td><code>array</code></td>
    <td>The unique list of workload identifiers (agents) that used the auth_provider.</td>
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
    <td>Identifier. The full resource name of the auth_provider. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/authProviders/&#123;auth_provider&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="allowedScopes" /></td>
    <td><code>array</code></td>
    <td>Optional. List of scopes that are allowed to be requested for this auth_provider. If this list is non-empty, only scopes within this list may be requested. If this list is empty, all scopes may be requested. Scopes appearing in `blocked_scopes` are disallowed even if they appear in `allowed_scopes`. The number of allowed scopes is limited to 200.</td>
</tr>
<tr>
    <td><CopyableCode code="authProviderTypeParams" /></td>
    <td><code>object</code></td>
    <td>Required. AuthProvider type specific parameters. (id: AuthProviderTypeParams)</td>
</tr>
<tr>
    <td><CopyableCode code="blockedScopes" /></td>
    <td><code>array</code></td>
    <td>Optional. List of scopes that are blocked from being requested for this auth_provider. If a scope appears in this list, it will not be requested, even if it also appears in `allowed_scopes`. `blocked_scopes` takes precedence over `allowed_scopes`. The number of blocked scopes is limited to 200.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Create time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Output only. This is set to true if the auth_provider is deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the resource. Must be less than 256 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the auth_provider will expire.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the auth_provider. (STATE_UNSPECIFIED, ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Update time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="workloadIds" /></td>
    <td><code>array</code></td>
    <td>Optional. Input only. Represents the workload identity in IAM `principal://` format of the agent(s) that will use this AuthProvider. Example: `principal://agents.global.org-$&#123;ORG_ID&#125;.system.id.goog/resources/aiplatform/projects/&#123;PROJECT_ID&#125;/locations/&#123;LOCATIONS&#125;/reasoningEngines/&#123;ID&#125;`</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="query">

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
    <td><CopyableCode code="authProviderNames" /></td>
    <td><code>array</code></td>
    <td>The unique list of auth_provider resource names used by the workload.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token identifying a page of results the server should return. If this field is omitted, there are no subsequent pages.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authProvidersId"><code>authProvidersId</code></a></td>
    <td></td>
    <td>Gets details of a single AuthProvider.</td>
</tr>
<tr>
    <td><a href="#query_workloads"><CopyableCode code="query_workloads" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authProvidersId"><code>authProvidersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Queries what all workloads are using a given auth_provider.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-showDeleted"><code>showDeleted</code></a></td>
    <td>Lists AuthProviders in a given project and location.</td>
</tr>
<tr>
    <td><a href="#query"><CopyableCode code="query" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-workloadId"><code>workloadId</code></a></td>
    <td>Queries what all auth_providers are used by a given workload_id.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-authProviderId"><code>authProviderId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new AuthProvider in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authProvidersId"><code>authProvidersId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single AuthProvider.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authProvidersId"><code>authProvidersId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single AuthProvider.</td>
</tr>
<tr>
    <td><a href="#disable"><CopyableCode code="disable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authProvidersId"><code>authProvidersId</code></a></td>
    <td></td>
    <td>Disables a single AuthProvider.</td>
</tr>
<tr>
    <td><a href="#enable"><CopyableCode code="enable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authProvidersId"><code>authProvidersId</code></a></td>
    <td></td>
    <td>Enables a single AuthProvider.</td>
</tr>
<tr>
    <td><a href="#revoke_authorization"><CopyableCode code="revoke_authorization" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authProvidersId"><code>authProvidersId</code></a></td>
    <td></td>
    <td>Revokes all authorizations for a specific user on an AuthProvider. This deletes all authorization records associated with the user and AuthProvider, effectively revoking access across all agents.</td>
</tr>
<tr>
    <td><a href="#undelete"><CopyableCode code="undelete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authProvidersId"><code>authProvidersId</code></a></td>
    <td></td>
    <td>Undeletes a single AuthProvider.</td>
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
<tr id="parameter-authProviderId">
    <td><CopyableCode code="authProviderId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-showDeleted">
    <td><CopyableCode code="showDeleted" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-workloadId">
    <td><CopyableCode code="workloadId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'query_workloads', value: 'query_workloads' },
        { label: 'list', value: 'list' },
        { label: 'query', value: 'query' }
    ]}
>
<TabItem value="get">

Gets details of a single AuthProvider.

```sql
SELECT
name,
allowedScopes,
authProviderTypeParams,
blockedScopes,
createTime,
deleted,
description,
expireTime,
labels,
state,
updateTime,
workloadIds
FROM google.agentidentity.auth_providers
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND authProvidersId = '{{ authProvidersId }}' -- required
;
```
</TabItem>
<TabItem value="query_workloads">

Queries what all workloads are using a given auth_provider.

```sql
SELECT
nextPageToken,
workloadIds
FROM google.agentidentity.auth_providers
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND authProvidersId = '{{ authProvidersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
<TabItem value="list">

Lists AuthProviders in a given project and location.

```sql
SELECT
name,
allowedScopes,
authProviderTypeParams,
blockedScopes,
createTime,
deleted,
description,
expireTime,
labels,
state,
updateTime,
workloadIds
FROM google.agentidentity.auth_providers
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND showDeleted = '{{ showDeleted }}'
;
```
</TabItem>
<TabItem value="query">

Queries what all auth_providers are used by a given workload_id.

```sql
SELECT
authProviderNames,
nextPageToken
FROM google.agentidentity.auth_providers
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND workloadId = '{{ workloadId }}'
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

Creates a new AuthProvider in a given project and location.

```sql
INSERT INTO google.agentidentity.auth_providers (
data__allowedScopes,
data__authProviderTypeParams,
data__blockedScopes,
data__description,
data__labels,
data__name,
data__workloadIds,
projectsId,
locationsId,
authProviderId,
requestId
)
SELECT 
'{{ allowedScopes }}',
'{{ authProviderTypeParams }}',
'{{ blockedScopes }}',
'{{ description }}',
'{{ labels }}',
'{{ name }}',
'{{ workloadIds }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ authProviderId }}',
'{{ requestId }}'
RETURNING
name,
allowedScopes,
authProviderTypeParams,
blockedScopes,
createTime,
deleted,
description,
expireTime,
labels,
state,
updateTime,
workloadIds
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: auth_providers
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the auth_providers resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the auth_providers resource.
    - name: allowedScopes
      value:
        - "{{ allowedScopes }}"
      description: |
        Optional. List of scopes that are allowed to be requested for this auth_provider. If this list is non-empty, only scopes within this list may be requested. If this list is empty, all scopes may be requested. Scopes appearing in \`blocked_scopes\` are disallowed even if they appear in \`allowed_scopes\`. The number of allowed scopes is limited to 200.
    - name: authProviderTypeParams
      description: |
        Required. AuthProvider type specific parameters.
      value:
        apiKey:
          apiKey: "{{ apiKey }}"
        geAuthProvider: "{{ geAuthProvider }}"
        threeLeggedOauth:
          authorizationUrl: "{{ authorizationUrl }}"
          clientId: "{{ clientId }}"
          clientSecret: "{{ clientSecret }}"
          defaultContinueUri: "{{ defaultContinueUri }}"
          enablePkce: {{ enablePkce }}
          redirectUrl: "{{ redirectUrl }}"
          tokenUrl: "{{ tokenUrl }}"
        twoLeggedOauth:
          clientId: "{{ clientId }}"
          clientSecret: "{{ clientSecret }}"
          tokenUrl: "{{ tokenUrl }}"
    - name: blockedScopes
      value:
        - "{{ blockedScopes }}"
      description: |
        Optional. List of scopes that are blocked from being requested for this auth_provider. If a scope appears in this list, it will not be requested, even if it also appears in \`allowed_scopes\`. \`blocked_scopes\` takes precedence over \`allowed_scopes\`. The number of blocked scopes is limited to 200.
    - name: description
      value: "{{ description }}"
      description: |
        Optional. Description of the resource. Must be less than 256 characters.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Labels as key value pairs
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The full resource name of the auth_provider. Format: projects/{project}/locations/{location}/authProviders/{auth_provider}
    - name: workloadIds
      value:
        - "{{ workloadIds }}"
      description: |
        Optional. Input only. Represents the workload identity in IAM \`principal://\` format of the agent(s) that will use this AuthProvider. Example: \`principal://agents.global.org-\${ORG_ID}.system.id.goog/resources/aiplatform/projects/{PROJECT_ID}/locations/{LOCATIONS}/reasoningEngines/{ID}\`
    - name: authProviderId
      value: "{{ authProviderId }}"
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

Updates the parameters of a single AuthProvider.

```sql
UPDATE google.agentidentity.auth_providers
SET 
data__allowedScopes = '{{ allowedScopes }}',
data__authProviderTypeParams = '{{ authProviderTypeParams }}',
data__blockedScopes = '{{ blockedScopes }}',
data__description = '{{ description }}',
data__labels = '{{ labels }}',
data__name = '{{ name }}',
data__workloadIds = '{{ workloadIds }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND authProvidersId = '{{ authProvidersId }}' --required
AND requestId = '{{ requestId}}'
AND updateMask = '{{ updateMask}}'
RETURNING
name,
allowedScopes,
authProviderTypeParams,
blockedScopes,
createTime,
deleted,
description,
expireTime,
labels,
state,
updateTime,
workloadIds;
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

Deletes a single AuthProvider.

```sql
DELETE FROM google.agentidentity.auth_providers
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND authProvidersId = '{{ authProvidersId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable"
    values={[
        { label: 'disable', value: 'disable' },
        { label: 'enable', value: 'enable' },
        { label: 'revoke_authorization', value: 'revoke_authorization' },
        { label: 'undelete', value: 'undelete' }
    ]}
>
<TabItem value="disable">

Disables a single AuthProvider.

```sql
EXEC google.agentidentity.auth_providers.disable 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@authProvidersId='{{ authProvidersId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}"
}'
;
```
</TabItem>
<TabItem value="enable">

Enables a single AuthProvider.

```sql
EXEC google.agentidentity.auth_providers.enable 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@authProvidersId='{{ authProvidersId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}"
}'
;
```
</TabItem>
<TabItem value="revoke_authorization">

Revokes all authorizations for a specific user on an AuthProvider. This deletes all authorization records associated with the user and AuthProvider, effectively revoking access across all agents.

```sql
EXEC google.agentidentity.auth_providers.revoke_authorization 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@authProvidersId='{{ authProvidersId }}' --required 
@@json=
'{
"userId": "{{ userId }}"
}'
;
```
</TabItem>
<TabItem value="undelete">

Undeletes a single AuthProvider.

```sql
EXEC google.agentidentity.auth_providers.undelete 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@authProvidersId='{{ authProvidersId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}"
}'
;
```
</TabItem>
</Tabs>
