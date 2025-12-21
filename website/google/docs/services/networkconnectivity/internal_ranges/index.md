--- 
title: internal_ranges
hide_title: false
hide_table_of_contents: false
keywords:
  - internal_ranges
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
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>internal_ranges</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>internal_ranges</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkconnectivity.internal_ranges" /></td></tr>
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
    <td>Identifier. The name of an internal range. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/internalRanges/&#123;internal_range&#125; See: https://google.aip.dev/122#fields-representing-resource-names</td>
</tr>
<tr>
    <td><CopyableCode code="allocationOptions" /></td>
    <td><code>object</code></td>
    <td>Optional. Range auto-allocation options, may be set only when auto-allocation is selected by not setting ip_cidr_range (and setting prefix_length). (id: AllocationOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time when the internal range was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="excludeCidrRanges" /></td>
    <td><code>array</code></td>
    <td>Optional. ExcludeCidrRanges flag. Specifies a set of CIDR blocks that allows exclusion of particular CIDR ranges from the auto-allocation process, without having to reserve these blocks</td>
</tr>
<tr>
    <td><CopyableCode code="immutable" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Immutable ranges cannot have their fields modified, except for labels and description.</td>
</tr>
<tr>
    <td><CopyableCode code="ipCidrRange" /></td>
    <td><code>string</code></td>
    <td>Optional. The IP range that this internal range defines. NOTE: IPv6 ranges are limited to usage=EXTERNAL_TO_VPC and peering=FOR_SELF. NOTE: For IPv6 Ranges this field is compulsory, i.e. the address range must be specified explicitly.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User-defined labels.</td>
</tr>
<tr>
    <td><CopyableCode code="migration" /></td>
    <td><code>object</code></td>
    <td>Optional. Must be present if usage is set to FOR_MIGRATION. (id: Migration)</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Immutable. The URL or resource ID of the network in which to reserve the internal range. The network cannot be deleted if there are any reserved internal ranges referring to it. Legacy networks are not supported. For example: https://www.googleapis.com/compute/v1/projects/&#123;project&#125;/locations/global/networks/&#123;network&#125; projects/&#123;project&#125;/locations/global/networks/&#123;network&#125; &#123;network&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="overlaps" /></td>
    <td><code>array</code></td>
    <td>Optional. Types of resources that are allowed to overlap with the current internal range.</td>
</tr>
<tr>
    <td><CopyableCode code="peering" /></td>
    <td><code>string</code></td>
    <td>Optional. The type of peering set for this internal range.</td>
</tr>
<tr>
    <td><CopyableCode code="prefixLength" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. An alternate to ip_cidr_range. Can be set when trying to create an IPv4 reservation that automatically finds a free range of the given size. If both ip_cidr_range and prefix_length are set, there is an error if the range sizes do not match. Can also be used during updates to change the range size. NOTE: For IPv6 this field only works if ip_cidr_range is set as well, and both fields must match. In other words, with IPv6 this field only works as a redundant parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="targetCidrRange" /></td>
    <td><code>array</code></td>
    <td>Optional. Can be set to narrow down or pick a different address space while searching for a free range. If not set, defaults to the ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16"] address space (for auto-mode networks, the "10.0.0.0/9" range is used instead of "10.0.0.0/8"). This can be used to target the search in other rfc-1918 address spaces like "172.16.0.0/12" and "192.168.0.0/16" or non-rfc-1918 address spaces used in the VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time when the internal range was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="usage" /></td>
    <td><code>string</code></td>
    <td>Optional. The type of usage set for this InternalRange.</td>
</tr>
<tr>
    <td><CopyableCode code="users" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of resources that refer to this internal range. Resources that use the internal range for their range allocation are referred to as users of the range. Other resources mark themselves as users while doing so by creating a reference to this internal range. Having a user, based on this reference, prevents deletion of the internal range referred to. Can be empty.</td>
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
    <td>Identifier. The name of an internal range. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/internalRanges/&#123;internal_range&#125; See: https://google.aip.dev/122#fields-representing-resource-names</td>
</tr>
<tr>
    <td><CopyableCode code="allocationOptions" /></td>
    <td><code>object</code></td>
    <td>Optional. Range auto-allocation options, may be set only when auto-allocation is selected by not setting ip_cidr_range (and setting prefix_length). (id: AllocationOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time when the internal range was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="excludeCidrRanges" /></td>
    <td><code>array</code></td>
    <td>Optional. ExcludeCidrRanges flag. Specifies a set of CIDR blocks that allows exclusion of particular CIDR ranges from the auto-allocation process, without having to reserve these blocks</td>
</tr>
<tr>
    <td><CopyableCode code="immutable" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Immutable ranges cannot have their fields modified, except for labels and description.</td>
</tr>
<tr>
    <td><CopyableCode code="ipCidrRange" /></td>
    <td><code>string</code></td>
    <td>Optional. The IP range that this internal range defines. NOTE: IPv6 ranges are limited to usage=EXTERNAL_TO_VPC and peering=FOR_SELF. NOTE: For IPv6 Ranges this field is compulsory, i.e. the address range must be specified explicitly.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User-defined labels.</td>
</tr>
<tr>
    <td><CopyableCode code="migration" /></td>
    <td><code>object</code></td>
    <td>Optional. Must be present if usage is set to FOR_MIGRATION. (id: Migration)</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Immutable. The URL or resource ID of the network in which to reserve the internal range. The network cannot be deleted if there are any reserved internal ranges referring to it. Legacy networks are not supported. For example: https://www.googleapis.com/compute/v1/projects/&#123;project&#125;/locations/global/networks/&#123;network&#125; projects/&#123;project&#125;/locations/global/networks/&#123;network&#125; &#123;network&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="overlaps" /></td>
    <td><code>array</code></td>
    <td>Optional. Types of resources that are allowed to overlap with the current internal range.</td>
</tr>
<tr>
    <td><CopyableCode code="peering" /></td>
    <td><code>string</code></td>
    <td>Optional. The type of peering set for this internal range.</td>
</tr>
<tr>
    <td><CopyableCode code="prefixLength" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional. An alternate to ip_cidr_range. Can be set when trying to create an IPv4 reservation that automatically finds a free range of the given size. If both ip_cidr_range and prefix_length are set, there is an error if the range sizes do not match. Can also be used during updates to change the range size. NOTE: For IPv6 this field only works if ip_cidr_range is set as well, and both fields must match. In other words, with IPv6 this field only works as a redundant parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="targetCidrRange" /></td>
    <td><code>array</code></td>
    <td>Optional. Can be set to narrow down or pick a different address space while searching for a free range. If not set, defaults to the ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16"] address space (for auto-mode networks, the "10.0.0.0/9" range is used instead of "10.0.0.0/8"). This can be used to target the search in other rfc-1918 address spaces like "172.16.0.0/12" and "192.168.0.0/16" or non-rfc-1918 address spaces used in the VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time when the internal range was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="usage" /></td>
    <td><code>string</code></td>
    <td>Optional. The type of usage set for this InternalRange.</td>
</tr>
<tr>
    <td><CopyableCode code="users" /></td>
    <td><code>array</code></td>
    <td>Output only. The list of resources that refer to this internal range. Resources that use the internal range for their range allocation are referred to as users of the range. Other resources mark themselves as users while doing so by creating a reference to this internal range. Having a user, based on this reference, prevents deletion of the internal range referred to. Can be empty.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-internalRangesId"><code>internalRangesId</code></a></td>
    <td></td>
    <td>Gets details of a single internal range.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists internal ranges in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-internalRangeId"><code>internalRangeId</code></a></td>
    <td>Creates a new internal range in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-internalRangesId"><code>internalRangesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the parameters of a single internal range.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-internalRangesId"><code>internalRangesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single internal range.</td>
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
<tr id="parameter-internalRangesId">
    <td><CopyableCode code="internalRangesId" /></td>
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
<tr id="parameter-internalRangeId">
    <td><CopyableCode code="internalRangeId" /></td>
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

Gets details of a single internal range.

```sql
SELECT
name,
allocationOptions,
createTime,
description,
excludeCidrRanges,
immutable,
ipCidrRange,
labels,
migration,
network,
overlaps,
peering,
prefixLength,
targetCidrRange,
updateTime,
usage,
users
FROM google.networkconnectivity.internal_ranges
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND internalRangesId = '{{ internalRangesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists internal ranges in a given project and location.

```sql
SELECT
name,
allocationOptions,
createTime,
description,
excludeCidrRanges,
immutable,
ipCidrRange,
labels,
migration,
network,
overlaps,
peering,
prefixLength,
targetCidrRange,
updateTime,
usage,
users
FROM google.networkconnectivity.internal_ranges
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

Creates a new internal range in a given project and location.

```sql
INSERT INTO google.networkconnectivity.internal_ranges (
data__network,
data__createTime,
data__targetCidrRange,
data__peering,
data__labels,
data__migration,
data__name,
data__updateTime,
data__ipCidrRange,
data__immutable,
data__overlaps,
data__usage,
data__prefixLength,
data__allocationOptions,
data__description,
data__excludeCidrRanges,
projectsId,
locationsId,
requestId,
internalRangeId
)
SELECT 
'{{ network }}',
'{{ createTime }}',
'{{ targetCidrRange }}',
'{{ peering }}',
'{{ labels }}',
'{{ migration }}',
'{{ name }}',
'{{ updateTime }}',
'{{ ipCidrRange }}',
{{ immutable }},
'{{ overlaps }}',
'{{ usage }}',
{{ prefixLength }},
'{{ allocationOptions }}',
'{{ description }}',
'{{ excludeCidrRanges }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ requestId }}',
'{{ internalRangeId }}'
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

```yaml
# Description fields are for documentation purposes
- name: internal_ranges
  props:
    - name: projectsId
      value: string
      description: Required parameter for the internal_ranges resource.
    - name: locationsId
      value: string
      description: Required parameter for the internal_ranges resource.
    - name: network
      value: string
      description: >
        Immutable. The URL or resource ID of the network in which to reserve the internal range. The network cannot be deleted if there are any reserved internal ranges referring to it. Legacy networks are not supported. For example: https://www.googleapis.com/compute/v1/projects/{project}/locations/global/networks/{network} projects/{project}/locations/global/networks/{network} {network}
        
    - name: createTime
      value: string
      description: >
        Time when the internal range was created.
        
    - name: targetCidrRange
      value: array
      description: >
        Optional. Can be set to narrow down or pick a different address space while searching for a free range. If not set, defaults to the ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16"] address space (for auto-mode networks, the "10.0.0.0/9" range is used instead of "10.0.0.0/8"). This can be used to target the search in other rfc-1918 address spaces like "172.16.0.0/12" and "192.168.0.0/16" or non-rfc-1918 address spaces used in the VPC.
        
    - name: peering
      value: string
      description: >
        Optional. The type of peering set for this internal range.
        
      valid_values: ['PEERING_UNSPECIFIED', 'FOR_SELF', 'FOR_PEER', 'NOT_SHARED']
    - name: labels
      value: object
      description: >
        User-defined labels.
        
    - name: migration
      value: object
      description: >
        Optional. Must be present if usage is set to FOR_MIGRATION.
        
    - name: name
      value: string
      description: >
        Identifier. The name of an internal range. Format: projects/{project}/locations/{location}/internalRanges/{internal_range} See: https://google.aip.dev/122#fields-representing-resource-names
        
    - name: updateTime
      value: string
      description: >
        Time when the internal range was updated.
        
    - name: ipCidrRange
      value: string
      description: >
        Optional. The IP range that this internal range defines. NOTE: IPv6 ranges are limited to usage=EXTERNAL_TO_VPC and peering=FOR_SELF. NOTE: For IPv6 Ranges this field is compulsory, i.e. the address range must be specified explicitly.
        
    - name: immutable
      value: boolean
      description: >
        Optional. Immutable ranges cannot have their fields modified, except for labels and description.
        
    - name: overlaps
      value: array
      description: >
        Optional. Types of resources that are allowed to overlap with the current internal range.
        
    - name: usage
      value: string
      description: >
        Optional. The type of usage set for this InternalRange.
        
      valid_values: ['USAGE_UNSPECIFIED', 'FOR_VPC', 'EXTERNAL_TO_VPC', 'FOR_MIGRATION']
    - name: prefixLength
      value: integer
      description: >
        Optional. An alternate to ip_cidr_range. Can be set when trying to create an IPv4 reservation that automatically finds a free range of the given size. If both ip_cidr_range and prefix_length are set, there is an error if the range sizes do not match. Can also be used during updates to change the range size. NOTE: For IPv6 this field only works if ip_cidr_range is set as well, and both fields must match. In other words, with IPv6 this field only works as a redundant parameter.
        
    - name: allocationOptions
      value: object
      description: >
        Optional. Range auto-allocation options, may be set only when auto-allocation is selected by not setting ip_cidr_range (and setting prefix_length).
        
    - name: description
      value: string
      description: >
        Optional. A description of this resource.
        
    - name: excludeCidrRanges
      value: array
      description: >
        Optional. ExcludeCidrRanges flag. Specifies a set of CIDR blocks that allows exclusion of particular CIDR ranges from the auto-allocation process, without having to reserve these blocks
        
    - name: requestId
      value: string
    - name: internalRangeId
      value: string
```
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

Updates the parameters of a single internal range.

```sql
UPDATE google.networkconnectivity.internal_ranges
SET 
data__network = '{{ network }}',
data__createTime = '{{ createTime }}',
data__targetCidrRange = '{{ targetCidrRange }}',
data__peering = '{{ peering }}',
data__labels = '{{ labels }}',
data__migration = '{{ migration }}',
data__name = '{{ name }}',
data__updateTime = '{{ updateTime }}',
data__ipCidrRange = '{{ ipCidrRange }}',
data__immutable = {{ immutable }},
data__overlaps = '{{ overlaps }}',
data__usage = '{{ usage }}',
data__prefixLength = {{ prefixLength }},
data__allocationOptions = '{{ allocationOptions }}',
data__description = '{{ description }}',
data__excludeCidrRanges = '{{ excludeCidrRanges }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND internalRangesId = '{{ internalRangesId }}' --required
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

Deletes a single internal range.

```sql
DELETE FROM google.networkconnectivity.internal_ranges
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND internalRangesId = '{{ internalRangesId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
