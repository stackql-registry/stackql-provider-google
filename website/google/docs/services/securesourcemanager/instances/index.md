--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
  - securesourcemanager
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

Creates, updates, deletes, gets or lists an <code>instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securesourcemanager.instances" /></td></tr>
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
    <td>Identifier. A unique identifier for an instance. The name should be of the format: `projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/instances/&#123;instance_id&#125;` `project_number`: Maps to a unique int64 id assigned to each project. `location_id`: Refers to the region where the instance will be deployed. Since Secure Source Manager is a regional service, it must be one of the valid GCP regions. `instance_id`: User provided name for the instance, must be unique for a project_number and location_id combination.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="hostConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. A list of hostnames for this instance. (id: HostConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKey" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. Customer-managed encryption key name, in the format projects/*/locations/*/keyRings/*/cryptoKeys/*.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs. Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. For more information, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/best-practices-labels#label_encoding).</td>
</tr>
<tr>
    <td><CopyableCode code="privateConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Private settings for private instance. (id: PrivateConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the instance. (STATE_UNSPECIFIED, CREATING, ACTIVE, DELETING, PAUSED, UNKNOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="stateNote" /></td>
    <td><code>string</code></td>
    <td>Output only. An optional field providing information about the current instance state. (STATE_NOTE_UNSPECIFIED, PAUSED_CMEK_UNAVAILABLE, INSTANCE_RESUMING)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="workforceIdentityFederationConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for Workforce Identity Federation to support third party identity provider. If unset, defaults to the Google OIDC IdP. (id: WorkforceIdentityFederationConfig)</td>
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
    <td>Identifier. A unique identifier for an instance. The name should be of the format: `projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/instances/&#123;instance_id&#125;` `project_number`: Maps to a unique int64 id assigned to each project. `location_id`: Refers to the region where the instance will be deployed. Since Secure Source Manager is a regional service, it must be one of the valid GCP regions. `instance_id`: User provided name for the instance, must be unique for a project_number and location_id combination.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="hostConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. A list of hostnames for this instance. (id: HostConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKey" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. Customer-managed encryption key name, in the format projects/*/locations/*/keyRings/*/cryptoKeys/*.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels as key value pairs. Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. For more information, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/best-practices-labels#label_encoding).</td>
</tr>
<tr>
    <td><CopyableCode code="privateConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Private settings for private instance. (id: PrivateConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the instance. (STATE_UNSPECIFIED, CREATING, ACTIVE, DELETING, PAUSED, UNKNOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="stateNote" /></td>
    <td><code>string</code></td>
    <td>Output only. An optional field providing information about the current instance state. (STATE_NOTE_UNSPECIFIED, PAUSED_CMEK_UNAVAILABLE, INSTANCE_RESUMING)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="workforceIdentityFederationConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for Workforce Identity Federation to support third party identity provider. If unset, defaults to the Google OIDC IdP. (id: WorkforceIdentityFederationConfig)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Gets details of a single instance.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists Instances in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new instance in a given project and location.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single instance.</td>
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
<tr id="parameter-instancesId">
    <td><CopyableCode code="instancesId" /></td>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-instanceId">
    <td><CopyableCode code="instanceId" /></td>
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

Gets details of a single instance.

```sql
SELECT
name,
createTime,
hostConfig,
kmsKey,
labels,
privateConfig,
satisfiesPzi,
satisfiesPzs,
state,
stateNote,
updateTime,
workforceIdentityFederationConfig
FROM google.securesourcemanager.instances
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Instances in a given project and location.

```sql
SELECT
name,
createTime,
hostConfig,
kmsKey,
labels,
privateConfig,
satisfiesPzi,
satisfiesPzs,
state,
stateNote,
updateTime,
workforceIdentityFederationConfig
FROM google.securesourcemanager.instances
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

Creates a new instance in a given project and location.

```sql
INSERT INTO google.securesourcemanager.instances (
data__kmsKey,
data__labels,
data__name,
data__privateConfig,
data__workforceIdentityFederationConfig,
projectsId,
locationsId,
instanceId,
requestId
)
SELECT 
'{{ kmsKey }}',
'{{ labels }}',
'{{ name }}',
'{{ privateConfig }}',
'{{ workforceIdentityFederationConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ instanceId }}',
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
- name: instances
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the instances resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the instances resource.
    - name: kmsKey
      value: "{{ kmsKey }}"
      description: |
        Optional. Immutable. Customer-managed encryption key name, in the format projects/*/locations/*/keyRings/*/cryptoKeys/*.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Labels as key value pairs. Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. For more information, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/best-practices-labels#label_encoding).
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. A unique identifier for an instance. The name should be of the format: \`projects/{project_number}/locations/{location_id}/instances/{instance_id}\` \`project_number\`: Maps to a unique int64 id assigned to each project. \`location_id\`: Refers to the region where the instance will be deployed. Since Secure Source Manager is a regional service, it must be one of the valid GCP regions. \`instance_id\`: User provided name for the instance, must be unique for a project_number and location_id combination.
    - name: privateConfig
      description: |
        Optional. Private settings for private instance.
      value:
        caPool: "{{ caPool }}"
        customHostConfig:
          api: "{{ api }}"
          gitHttp: "{{ gitHttp }}"
          gitSsh: "{{ gitSsh }}"
          html: "{{ html }}"
        httpServiceAttachment: "{{ httpServiceAttachment }}"
        isPrivate: {{ isPrivate }}
        pscAllowedProjects:
          - "{{ pscAllowedProjects }}"
        sshServiceAttachment: "{{ sshServiceAttachment }}"
    - name: workforceIdentityFederationConfig
      description: |
        Optional. Configuration for Workforce Identity Federation to support third party identity provider. If unset, defaults to the Google OIDC IdP.
      value:
        enabled: {{ enabled }}
    - name: instanceId
      value: "{{ instanceId }}"
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

Deletes a single instance.

```sql
DELETE FROM google.securesourcemanager.instances
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND force = '{{ force }}'
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
