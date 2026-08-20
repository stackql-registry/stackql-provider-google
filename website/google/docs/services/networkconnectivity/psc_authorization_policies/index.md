--- 
title: psc_authorization_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - psc_authorization_policies
  - networkconnectivity
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

Creates, updates, deletes, gets or lists a <code>psc_authorization_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="psc_authorization_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkconnectivity.psc_authorization_policies" /></td></tr>
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
    <td>Identifier. The name of the PscAuthorizationPolicy. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/pscAuthorizationPolicies/&#123;psc_authorization_policy&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="authorizationMode" /></td>
    <td><code>string</code></td>
    <td>Required. The authorization mode. (AUTHORIZATION_MODE_UNSPECIFIED, AUTHORIZATION_MODE_TRANSITIVE_TO_SERVICE_ATTACHMENT)</td>
</tr>
<tr>
    <td><CopyableCode code="authorizedClientResources" /></td>
    <td><code>array</code></td>
    <td>Required. List of authorized consumer resources allowed to connect. Supported values are: 1. Project resource name (e.g., `projects/&#123;project_id&#125;`) 2. Wildcard `"*"` (grants global ingress authorization to the target).</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the PscAuthorizationPolicy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. The etag of the PscAuthorizationPolicy.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels.</td>
</tr>
<tr>
    <td><CopyableCode code="targetResourceUri" /></td>
    <td><code>string</code></td>
    <td>Required. The full absolute URI of the targeted resource governed by this policy. For example, for an AgentRegistry resource, the format is: `//agentregistry.googleapis.com/projects/&#123;project&#125;/locations/&#123;location&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The unique identifier of the PscAuthorizationPolicy.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the PscAuthorizationPolicy was updated.</td>
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
    <td>Identifier. The name of the PscAuthorizationPolicy. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/pscAuthorizationPolicies/&#123;psc_authorization_policy&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="authorizationMode" /></td>
    <td><code>string</code></td>
    <td>Required. The authorization mode. (AUTHORIZATION_MODE_UNSPECIFIED, AUTHORIZATION_MODE_TRANSITIVE_TO_SERVICE_ATTACHMENT)</td>
</tr>
<tr>
    <td><CopyableCode code="authorizedClientResources" /></td>
    <td><code>array</code></td>
    <td>Required. List of authorized consumer resources allowed to connect. Supported values are: 1. Project resource name (e.g., `projects/&#123;project_id&#125;`) 2. Wildcard `"*"` (grants global ingress authorization to the target).</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the PscAuthorizationPolicy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. The etag of the PscAuthorizationPolicy.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels.</td>
</tr>
<tr>
    <td><CopyableCode code="targetResourceUri" /></td>
    <td><code>string</code></td>
    <td>Required. The full absolute URI of the targeted resource governed by this policy. For example, for an AgentRegistry resource, the format is: `//agentregistry.googleapis.com/projects/&#123;project&#125;/locations/&#123;location&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. The unique identifier of the PscAuthorizationPolicy.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the PscAuthorizationPolicy was updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-pscAuthorizationPoliciesId"><code>pscAuthorizationPoliciesId</code></a></td>
    <td></td>
    <td>Gets details of a single PscAuthorizationPolicy.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists PscAuthorizationPolicies in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pscAuthorizationPolicyId"><code>pscAuthorizationPolicyId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new PscAuthorizationPolicy in a given project and location.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-pscAuthorizationPoliciesId"><code>pscAuthorizationPoliciesId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single PscAuthorizationPolicy.</td>
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
<tr id="parameter-pscAuthorizationPoliciesId">
    <td><CopyableCode code="pscAuthorizationPoliciesId" /></td>
    <td><code>string</code></td>
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
<tr id="parameter-pscAuthorizationPolicyId">
    <td><CopyableCode code="pscAuthorizationPolicyId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
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
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets details of a single PscAuthorizationPolicy.

```sql
SELECT
name,
authorizationMode,
authorizedClientResources,
createTime,
description,
etag,
labels,
targetResourceUri,
uid,
updateTime
FROM google.networkconnectivity.psc_authorization_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pscAuthorizationPoliciesId = '{{ pscAuthorizationPoliciesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists PscAuthorizationPolicies in a given project and location.

```sql
SELECT
name,
authorizationMode,
authorizedClientResources,
createTime,
description,
etag,
labels,
targetResourceUri,
uid,
updateTime
FROM google.networkconnectivity.psc_authorization_policies
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

Creates a new PscAuthorizationPolicy in a given project and location.

```sql
INSERT INTO google.networkconnectivity.psc_authorization_policies (
data__authorizationMode,
data__authorizedClientResources,
data__description,
data__etag,
data__labels,
data__name,
data__targetResourceUri,
projectsId,
locationsId,
pscAuthorizationPolicyId,
requestId
)
SELECT 
'{{ authorizationMode }}',
'{{ authorizedClientResources }}',
'{{ description }}',
'{{ etag }}',
'{{ labels }}',
'{{ name }}',
'{{ targetResourceUri }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ pscAuthorizationPolicyId }}',
'{{ requestId }}'
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
- name: psc_authorization_policies
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the psc_authorization_policies resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the psc_authorization_policies resource.
    - name: authorizationMode
      value: "{{ authorizationMode }}"
      description: |
        Required. The authorization mode.
      valid_values: ['AUTHORIZATION_MODE_UNSPECIFIED', 'AUTHORIZATION_MODE_TRANSITIVE_TO_SERVICE_ATTACHMENT']
    - name: authorizedClientResources
      value:
        - "{{ authorizedClientResources }}"
      description: |
        Required. List of authorized consumer resources allowed to connect. Supported values are: 1. Project resource name (e.g., \`projects/{project_id}\`) 2. Wildcard \`"*"\` (grants global ingress authorization to the target).
    - name: description
      value: "{{ description }}"
      description: |
        Optional. A description of this resource.
    - name: etag
      value: "{{ etag }}"
      description: |
        Output only. The etag of the PscAuthorizationPolicy.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. User-defined labels.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The name of the PscAuthorizationPolicy. Format: projects/{project}/locations/{location}/pscAuthorizationPolicies/{psc_authorization_policy}
    - name: targetResourceUri
      value: "{{ targetResourceUri }}"
      description: |
        Required. The full absolute URI of the targeted resource governed by this policy. For example, for an AgentRegistry resource, the format is: \`//agentregistry.googleapis.com/projects/{project}/locations/{location}\`
    - name: pscAuthorizationPolicyId
      value: "{{ pscAuthorizationPolicyId }}"
    - name: requestId
      value: "{{ requestId }}"
`}</CodeBlock>

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

Deletes a single PscAuthorizationPolicy.

```sql
DELETE FROM google.networkconnectivity.psc_authorization_policies
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND pscAuthorizationPoliciesId = '{{ pscAuthorizationPoliciesId }}' --required
AND etag = '{{ etag }}'
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
