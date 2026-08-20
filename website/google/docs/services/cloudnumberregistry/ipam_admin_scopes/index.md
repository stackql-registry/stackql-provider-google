--- 
title: ipam_admin_scopes
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_admin_scopes
  - cloudnumberregistry
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

Creates, updates, deletes, gets or lists an <code>ipam_admin_scopes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipam_admin_scopes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudnumberregistry.ipam_admin_scopes" /></td></tr>
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
    <td>Required. Identifier. The resource name of the IpamAdminScope.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the IpamAdminScope was created.</td>
</tr>
<tr>
    <td><CopyableCode code="enabledAddonPlatforms" /></td>
    <td><code>array</code></td>
    <td>Required. Add-on platforms that are enabled for this IpamAdminScope. Cloud Number Registry only discovers the IP addresses from the enabled platforms.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels.</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>array</code></td>
    <td>Required. Administrative scopes enabled for IP address discovery and management. For example, "organizations/1234567890". Minimum of 1 scope is required. In preview, only one organization scope is allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of resource discovery pipeline. (DISCOVERY_PIPELINE_STATE_UNSPECIFIED, INTERNAL_FAILURE, FAILED, SETUP_IN_PROGRESS, READY_FOR_USE, DELETING_IN_PROGRESS, UPDATING, RECOVERING, DISABLED, DELETION_COMPLETED, CLEANUP_IN_PROGRESS, READY_FOR_DELETION)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the IpamAdminScope was last updated.</td>
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
    <td>Required. Identifier. The resource name of the IpamAdminScope.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the IpamAdminScope was created.</td>
</tr>
<tr>
    <td><CopyableCode code="enabledAddonPlatforms" /></td>
    <td><code>array</code></td>
    <td>Required. Add-on platforms that are enabled for this IpamAdminScope. Cloud Number Registry only discovers the IP addresses from the enabled platforms.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels.</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>array</code></td>
    <td>Required. Administrative scopes enabled for IP address discovery and management. For example, "organizations/1234567890". Minimum of 1 scope is required. In preview, only one organization scope is allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of resource discovery pipeline. (DISCOVERY_PIPELINE_STATE_UNSPECIFIED, INTERNAL_FAILURE, FAILED, SETUP_IN_PROGRESS, READY_FOR_USE, DELETING_IN_PROGRESS, UPDATING, RECOVERING, DISABLED, DELETION_COMPLETED, CLEANUP_IN_PROGRESS, READY_FOR_DELETION)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the IpamAdminScope was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-ipamAdminScopesId"><code>ipamAdminScopesId</code></a></td>
    <td></td>
    <td>Gets details of a single IpamAdminScope.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists IpamAdminScopes in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-ipamAdminScopeId"><code>ipamAdminScopeId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new IpamAdminScope in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-ipamAdminScopesId"><code>ipamAdminScopesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single IpamAdminScope.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-ipamAdminScopesId"><code>ipamAdminScopesId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single IpamAdminScope.</td>
</tr>
<tr>
    <td><a href="#check_availability"><CopyableCode code="check_availability" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-scopes"><code>scopes</code></a></td>
    <td>Checks the availability of IpamAdminScopes in a given project and location.</td>
</tr>
<tr>
    <td><a href="#cleanup"><CopyableCode code="cleanup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-ipamAdminScopesId"><code>ipamAdminScopesId</code></a></td>
    <td></td>
    <td>Cleans up a single IpamAdminScope.</td>
</tr>
<tr>
    <td><a href="#disable"><CopyableCode code="disable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-ipamAdminScopesId"><code>ipamAdminScopesId</code></a></td>
    <td></td>
    <td>Disables a single IpamAdminScope.</td>
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
<tr id="parameter-ipamAdminScopesId">
    <td><CopyableCode code="ipamAdminScopesId" /></td>
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
<tr id="parameter-ipamAdminScopeId">
    <td><CopyableCode code="ipamAdminScopeId" /></td>
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
<tr id="parameter-scopes">
    <td><CopyableCode code="scopes" /></td>
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

Gets details of a single IpamAdminScope.

```sql
SELECT
name,
createTime,
enabledAddonPlatforms,
labels,
scopes,
state,
updateTime
FROM google.cloudnumberregistry.ipam_admin_scopes
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND ipamAdminScopesId = '{{ ipamAdminScopesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists IpamAdminScopes in a given project and location.

```sql
SELECT
name,
createTime,
enabledAddonPlatforms,
labels,
scopes,
state,
updateTime
FROM google.cloudnumberregistry.ipam_admin_scopes
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

Creates a new IpamAdminScope in a given project and location.

```sql
INSERT INTO google.cloudnumberregistry.ipam_admin_scopes (
data__enabledAddonPlatforms,
data__labels,
data__name,
data__scopes,
projectsId,
locationsId,
ipamAdminScopeId,
requestId
)
SELECT 
'{{ enabledAddonPlatforms }}',
'{{ labels }}',
'{{ name }}',
'{{ scopes }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ ipamAdminScopeId }}',
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
- name: ipam_admin_scopes
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the ipam_admin_scopes resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the ipam_admin_scopes resource.
    - name: enabledAddonPlatforms
      value:
        - "{{ enabledAddonPlatforms }}"
      description: |
        Required. Add-on platforms that are enabled for this IpamAdminScope. Cloud Number Registry only discovers the IP addresses from the enabled platforms.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. User-defined labels.
    - name: name
      value: "{{ name }}"
      description: |
        Required. Identifier. The resource name of the IpamAdminScope.
    - name: scopes
      value:
        - "{{ scopes }}"
      description: |
        Required. Administrative scopes enabled for IP address discovery and management. For example, "organizations/1234567890". Minimum of 1 scope is required. In preview, only one organization scope is allowed.
    - name: ipamAdminScopeId
      value: "{{ ipamAdminScopeId }}"
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

Updates the parameters of a single IpamAdminScope.

```sql
UPDATE google.cloudnumberregistry.ipam_admin_scopes
SET 
data__enabledAddonPlatforms = '{{ enabledAddonPlatforms }}',
data__labels = '{{ labels }}',
data__name = '{{ name }}',
data__scopes = '{{ scopes }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND ipamAdminScopesId = '{{ ipamAdminScopesId }}' --required
AND requestId = '{{ requestId}}'
AND updateMask = '{{ updateMask}}'
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

Deletes a single IpamAdminScope.

```sql
DELETE FROM google.cloudnumberregistry.ipam_admin_scopes
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND ipamAdminScopesId = '{{ ipamAdminScopesId }}' --required
AND force = '{{ force }}'
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="check_availability"
    values={[
        { label: 'check_availability', value: 'check_availability' },
        { label: 'cleanup', value: 'cleanup' },
        { label: 'disable', value: 'disable' }
    ]}
>
<TabItem value="check_availability">

Checks the availability of IpamAdminScopes in a given project and location.

```sql
EXEC google.cloudnumberregistry.ipam_admin_scopes.check_availability 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@scopes='{{ scopes }}'
;
```
</TabItem>
<TabItem value="cleanup">

Cleans up a single IpamAdminScope.

```sql
EXEC google.cloudnumberregistry.ipam_admin_scopes.cleanup 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@ipamAdminScopesId='{{ ipamAdminScopesId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}"
}'
;
```
</TabItem>
<TabItem value="disable">

Disables a single IpamAdminScope.

```sql
EXEC google.cloudnumberregistry.ipam_admin_scopes.disable 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@ipamAdminScopesId='{{ ipamAdminScopesId }}' --required 
@@json=
'{
"requestId": "{{ requestId }}"
}'
;
```
</TabItem>
</Tabs>
