--- 
title: custom_ranges
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_ranges
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

Creates, updates, deletes, gets or lists a <code>custom_ranges</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_ranges" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudnumberregistry.custom_ranges" /></td></tr>
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
    <td>Required. Identifier. The resource name of the CustomRange, in the format `projects/&#123;project&#125;/locations/&#123;location&#125;/customRanges/&#123;custom_range&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>array</code></td>
    <td>Optional. The attributes of the CustomRange.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the CustomRange.</td>
</tr>
<tr>
    <td><CopyableCode code="ipv4CidrRange" /></td>
    <td><code>string</code></td>
    <td>Optional. The IPv4 CIDR range of the CustomRange.</td>
</tr>
<tr>
    <td><CopyableCode code="ipv6CidrRange" /></td>
    <td><code>string</code></td>
    <td>Optional. The IPv6 CIDR range of the CustomRange.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels.</td>
</tr>
<tr>
    <td><CopyableCode code="parentRange" /></td>
    <td><code>string</code></td>
    <td>Optional. The resource name of the parent CustomRange, in the format `projects/&#123;project&#125;/locations/&#123;location&#125;/customRanges/&#123;custom_range&#125;`. If specified, the parent CustomRange must be in the same RegistryBook. This field is mutually exclusive with the `realm` field, as the Realm is inherited from the parent CustomRange.</td>
</tr>
<tr>
    <td><CopyableCode code="realm" /></td>
    <td><code>string</code></td>
    <td>Optional. The resource name of the Realm associated with the CustomRange, in the format `projects/&#123;project&#125;/locations/&#123;location&#125;/realms/&#123;realm&#125;`. The Realm must be in the same project as the CustomRange. This field must not be set if the `parent_range` field is set, as the Realm will be inherited from the parent CustomRange.</td>
</tr>
<tr>
    <td><CopyableCode code="registryBook" /></td>
    <td><code>string</code></td>
    <td>Output only. The RegistryBook of the CustomRange. This field is inherited from the Realm or parent CustomRange depending on which one is specified.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-customRangesId"><code>customRangesId</code></a></td>
    <td></td>
    <td>Gets details of a single CustomRange.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists CustomRanges in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-customRangeId"><code>customRangeId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new CustomRange in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-customRangesId"><code>customRangesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the parameters of a single CustomRange.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-customRangesId"><code>customRangesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a single CustomRange.</td>
</tr>
<tr>
    <td><a href="#find_free_ip_ranges"><CopyableCode code="find_free_ip_ranges" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-customRangesId"><code>customRangesId</code></a></td>
    <td><a href="#parameter-cidrPrefixLength"><code>cidrPrefixLength</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-rangeCount"><code>rangeCount</code></a></td>
    <td>Finds free IP ranges in a single CustomRange.</td>
</tr>
<tr>
    <td><a href="#show_utilization"><CopyableCode code="show_utilization" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-customRangesId"><code>customRangesId</code></a></td>
    <td></td>
    <td>Gets the details of a single CustomRange and its utilization.</td>
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
<tr id="parameter-customRangesId">
    <td><CopyableCode code="customRangesId" /></td>
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
<tr id="parameter-cidrPrefixLength">
    <td><CopyableCode code="cidrPrefixLength" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-customRangeId">
    <td><CopyableCode code="customRangeId" /></td>
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
<tr id="parameter-rangeCount">
    <td><CopyableCode code="rangeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
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

Gets details of a single CustomRange.

```sql
SELECT
name,
attributes,
description,
ipv4CidrRange,
ipv6CidrRange,
labels,
parentRange,
realm,
registryBook
FROM google.cloudnumberregistry.custom_ranges
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND customRangesId = '{{ customRangesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists CustomRanges in a given project and location.

```sql
SELECT
*
FROM google.cloudnumberregistry.custom_ranges
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
AND filter = '{{ filter }}'
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

Creates a new CustomRange in a given project and location.

```sql
INSERT INTO google.cloudnumberregistry.custom_ranges (
data__description,
data__labels,
data__name,
data__ipv4CidrRange,
data__ipv6CidrRange,
data__parentRange,
data__realm,
data__attributes,
projectsId,
locationsId,
customRangeId,
requestId
)
SELECT 
'{{ description }}',
'{{ labels }}',
'{{ name }}',
'{{ ipv4CidrRange }}',
'{{ ipv6CidrRange }}',
'{{ parentRange }}',
'{{ realm }}',
'{{ attributes }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ customRangeId }}',
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
- name: custom_ranges
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the custom_ranges resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the custom_ranges resource.
    - name: description
      value: "{{ description }}"
      description: |
        Optional. The description of the CustomRange.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. User-defined labels.
    - name: name
      value: "{{ name }}"
      description: |
        Required. Identifier. The resource name of the CustomRange, in the format \`projects/{project}/locations/{location}/customRanges/{custom_range}\`.
    - name: ipv4CidrRange
      value: "{{ ipv4CidrRange }}"
      description: |
        Optional. The IPv4 CIDR range of the CustomRange.
    - name: ipv6CidrRange
      value: "{{ ipv6CidrRange }}"
      description: |
        Optional. The IPv6 CIDR range of the CustomRange.
    - name: parentRange
      value: "{{ parentRange }}"
      description: |
        Optional. The resource name of the parent CustomRange, in the format \`projects/{project}/locations/{location}/customRanges/{custom_range}\`. If specified, the parent CustomRange must be in the same RegistryBook. This field is mutually exclusive with the \`realm\` field, as the Realm is inherited from the parent CustomRange.
    - name: realm
      value: "{{ realm }}"
      description: |
        Optional. The resource name of the Realm associated with the CustomRange, in the format \`projects/{project}/locations/{location}/realms/{realm}\`. The Realm must be in the same project as the CustomRange. This field must not be set if the \`parent_range\` field is set, as the Realm will be inherited from the parent CustomRange.
    - name: attributes
      description: |
        Optional. The attributes of the CustomRange.
      value:
        - value: "{{ value }}"
          key: "{{ key }}"
    - name: customRangeId
      value: "{{ customRangeId }}"
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

Updates the parameters of a single CustomRange.

```sql
UPDATE google.cloudnumberregistry.custom_ranges
SET 
data__description = '{{ description }}',
data__labels = '{{ labels }}',
data__name = '{{ name }}',
data__ipv4CidrRange = '{{ ipv4CidrRange }}',
data__ipv6CidrRange = '{{ ipv6CidrRange }}',
data__parentRange = '{{ parentRange }}',
data__realm = '{{ realm }}',
data__attributes = '{{ attributes }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND customRangesId = '{{ customRangesId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
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

Deletes a single CustomRange.

```sql
DELETE FROM google.cloudnumberregistry.custom_ranges
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND customRangesId = '{{ customRangesId }}' --required
AND requestId = '{{ requestId }}'
AND force = '{{ force }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="find_free_ip_ranges"
    values={[
        { label: 'find_free_ip_ranges', value: 'find_free_ip_ranges' },
        { label: 'show_utilization', value: 'show_utilization' }
    ]}
>
<TabItem value="find_free_ip_ranges">

Finds free IP ranges in a single CustomRange.

```sql
EXEC google.cloudnumberregistry.custom_ranges.find_free_ip_ranges 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@customRangesId='{{ customRangesId }}' --required, 
@cidrPrefixLength='{{ cidrPrefixLength }}', 
@requestId='{{ requestId }}', 
@rangeCount='{{ rangeCount }}'
;
```
</TabItem>
<TabItem value="show_utilization">

Gets the details of a single CustomRange and its utilization.

```sql
EXEC google.cloudnumberregistry.custom_ranges.show_utilization 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@customRangesId='{{ customRangesId }}' --required
;
```
</TabItem>
</Tabs>
