--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
  - apphub
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

Creates, updates, deletes, gets or lists a <code>services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apphub.services" /></td></tr>
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
    <td>Identifier. The resource name of a Service. Format: `"projects/&#123;host-project-id&#125;/locations/&#123;location&#125;/applications/&#123;application-id&#125;/services/&#123;service-id&#125;"`</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Optional. Consumer provided attributes. (id: Attributes)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User-defined description of a Service. Can have a maximum length of 2048 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="discoveredService" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The resource name of the original discovered service.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User-defined name for the Service. Can have a maximum length of 63 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceProperties" /></td>
    <td><code>object</code></td>
    <td>Output only. Properties of an underlying compute resource that can comprise a Service. These are immutable. (id: ServiceProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceReference" /></td>
    <td><code>object</code></td>
    <td>Output only. Reference to an underlying networking resource that can comprise a Service. These are immutable. (id: ServiceReference)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Service state. (STATE_UNSPECIFIED, CREATING, ACTIVE, DELETING, DETACHED)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. A universally unique identifier (UUID) for the `Service` in the UUID4 format.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update time.</td>
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
    <td>Identifier. The resource name of a Service. Format: `"projects/&#123;host-project-id&#125;/locations/&#123;location&#125;/applications/&#123;application-id&#125;/services/&#123;service-id&#125;"`</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Optional. Consumer provided attributes. (id: Attributes)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User-defined description of a Service. Can have a maximum length of 2048 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="discoveredService" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The resource name of the original discovered service.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User-defined name for the Service. Can have a maximum length of 63 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceProperties" /></td>
    <td><code>object</code></td>
    <td>Output only. Properties of an underlying compute resource that can comprise a Service. These are immutable. (id: ServiceProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceReference" /></td>
    <td><code>object</code></td>
    <td>Output only. Reference to an underlying networking resource that can comprise a Service. These are immutable. (id: ServiceReference)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Service state. (STATE_UNSPECIFIED, CREATING, ACTIVE, DELETING, DETACHED)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. A universally unique identifier (UUID) for the `Service` in the UUID4 format.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update time.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-applicationsId"><code>applicationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Gets a Service in an Application.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-applicationsId"><code>applicationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists Services in an Application.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-applicationsId"><code>applicationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-serviceId"><code>serviceId</code></a></td>
    <td>Creates a Service in an Application.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-applicationsId"><code>applicationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a Service in an Application.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-applicationsId"><code>applicationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a Service from an Application.</td>
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
<tr id="parameter-applicationsId">
    <td><CopyableCode code="applicationsId" /></td>
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
<tr id="parameter-servicesId">
    <td><CopyableCode code="servicesId" /></td>
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
<tr id="parameter-serviceId">
    <td><CopyableCode code="serviceId" /></td>
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

Gets a Service in an Application.

```sql
SELECT
name,
attributes,
createTime,
description,
discoveredService,
displayName,
serviceProperties,
serviceReference,
state,
uid,
updateTime
FROM google.apphub.services
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND applicationsId = '{{ applicationsId }}' -- required
AND servicesId = '{{ servicesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Services in an Application.

```sql
SELECT
name,
attributes,
createTime,
description,
discoveredService,
displayName,
serviceProperties,
serviceReference,
state,
uid,
updateTime
FROM google.apphub.services
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND applicationsId = '{{ applicationsId }}' -- required
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

Creates a Service in an Application.

```sql
INSERT INTO google.apphub.services (
data__attributes,
data__description,
data__discoveredService,
data__displayName,
data__name,
projectsId,
locationsId,
applicationsId,
requestId,
serviceId
)
SELECT 
'{{ attributes }}',
'{{ description }}',
'{{ discoveredService }}',
'{{ displayName }}',
'{{ name }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ applicationsId }}',
'{{ requestId }}',
'{{ serviceId }}'
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
- name: services
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the services resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the services resource.
    - name: applicationsId
      value: "{{ applicationsId }}"
      description: Required parameter for the services resource.
    - name: attributes
      description: |
        Optional. Consumer provided attributes.
      value:
        businessOwners:
          - displayName: "{{ displayName }}"
            email: "{{ email }}"
        criticality:
          type: "{{ type }}"
        developerOwners:
          - displayName: "{{ displayName }}"
            email: "{{ email }}"
        environment:
          type: "{{ type }}"
        operatorOwners:
          - displayName: "{{ displayName }}"
            email: "{{ email }}"
    - name: description
      value: "{{ description }}"
      description: |
        Optional. User-defined description of a Service. Can have a maximum length of 2048 characters.
    - name: discoveredService
      value: "{{ discoveredService }}"
      description: |
        Required. Immutable. The resource name of the original discovered service.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Optional. User-defined name for the Service. Can have a maximum length of 63 characters.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The resource name of a Service. Format: \`"projects/{host-project-id}/locations/{location}/applications/{application-id}/services/{service-id}"\`
    - name: requestId
      value: "{{ requestId }}"
    - name: serviceId
      value: "{{ serviceId }}"
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

Updates a Service in an Application.

```sql
UPDATE google.apphub.services
SET 
data__attributes = '{{ attributes }}',
data__description = '{{ description }}',
data__discoveredService = '{{ discoveredService }}',
data__displayName = '{{ displayName }}',
data__name = '{{ name }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND applicationsId = '{{ applicationsId }}' --required
AND servicesId = '{{ servicesId }}' --required
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

Deletes a Service from an Application.

```sql
DELETE FROM google.apphub.services
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND applicationsId = '{{ applicationsId }}' --required
AND servicesId = '{{ servicesId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
