--- 
title: discovered_ranges
hide_title: false
hide_table_of_contents: false
keywords:
  - discovered_ranges
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

Creates, updates, deletes, gets or lists a <code>discovered_ranges</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="discovered_ranges" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudnumberregistry.discovered_ranges" /></td></tr>
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
    <td>Required. Identifier. The resource name of the DiscoveredRange, in the format `projects/&#123;project&#125;/locations/&#123;location&#125;/discoveredRanges/&#123;discovered_range&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>array</code></td>
    <td>Optional. The attributes of the DiscoveredRange.</td>
</tr>
<tr>
    <td><CopyableCode code="childCidrOverlapAllowed" /></td>
    <td><code>boolean</code></td>
    <td>Output only. If true, allows child DiscoveredRanges of this DiscoveredRange to overlap with each other.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the DiscoveredRange was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the DiscoveredRange.</td>
</tr>
<tr>
    <td><CopyableCode code="discoveryMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Owner metadata for this DiscoveredRange. A unique set of metadata is associated with each DiscoveredRange. If an IP range is shared by multiple resources (e.g., an Address resource and an Instance resource, or multiple ForwardingRules),separate DiscoveredRanges are created, each with a distinct owner. This ensures each DiscoveredRange has its own unique set of attributes, labels, create time and update time. (id: DiscoveryMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv4CidrRange" /></td>
    <td><code>string</code></td>
    <td>Optional. The IPv4 CIDR range of the DiscoveredRange.</td>
</tr>
<tr>
    <td><CopyableCode code="ipv6CidrRange" /></td>
    <td><code>string</code></td>
    <td>Optional. The IPv6 CIDR range of the DiscoveredRange.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels.</td>
</tr>
<tr>
    <td><CopyableCode code="parentRange" /></td>
    <td><code>string</code></td>
    <td>Optional. The resource name of the parent DiscoveredRange, in the format `projects/&#123;project&#125;/locations/&#123;location&#125;/discoveredRanges/&#123;discovered_range&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="realm" /></td>
    <td><code>string</code></td>
    <td>Optional. The Realm of the DiscoveredRange.</td>
</tr>
<tr>
    <td><CopyableCode code="registryBook" /></td>
    <td><code>string</code></td>
    <td>Output only. The RegistryBook of the DiscoveredRange.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the DiscoveredRange was last updated.</td>
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
    <td>Required. Identifier. The resource name of the DiscoveredRange, in the format `projects/&#123;project&#125;/locations/&#123;location&#125;/discoveredRanges/&#123;discovered_range&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>array</code></td>
    <td>Optional. The attributes of the DiscoveredRange.</td>
</tr>
<tr>
    <td><CopyableCode code="childCidrOverlapAllowed" /></td>
    <td><code>boolean</code></td>
    <td>Output only. If true, allows child DiscoveredRanges of this DiscoveredRange to overlap with each other.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the DiscoveredRange was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the DiscoveredRange.</td>
</tr>
<tr>
    <td><CopyableCode code="discoveryMetadata" /></td>
    <td><code>object</code></td>
    <td>Output only. Owner metadata for this DiscoveredRange. A unique set of metadata is associated with each DiscoveredRange. If an IP range is shared by multiple resources (e.g., an Address resource and an Instance resource, or multiple ForwardingRules),separate DiscoveredRanges are created, each with a distinct owner. This ensures each DiscoveredRange has its own unique set of attributes, labels, create time and update time. (id: DiscoveryMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv4CidrRange" /></td>
    <td><code>string</code></td>
    <td>Optional. The IPv4 CIDR range of the DiscoveredRange.</td>
</tr>
<tr>
    <td><CopyableCode code="ipv6CidrRange" /></td>
    <td><code>string</code></td>
    <td>Optional. The IPv6 CIDR range of the DiscoveredRange.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels.</td>
</tr>
<tr>
    <td><CopyableCode code="parentRange" /></td>
    <td><code>string</code></td>
    <td>Optional. The resource name of the parent DiscoveredRange, in the format `projects/&#123;project&#125;/locations/&#123;location&#125;/discoveredRanges/&#123;discovered_range&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="realm" /></td>
    <td><code>string</code></td>
    <td>Optional. The Realm of the DiscoveredRange.</td>
</tr>
<tr>
    <td><CopyableCode code="registryBook" /></td>
    <td><code>string</code></td>
    <td>Output only. The RegistryBook of the DiscoveredRange.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the DiscoveredRange was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-discoveredRangesId"><code>discoveredRangesId</code></a></td>
    <td></td>
    <td>Gets details of a single DiscoveredRange.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists DiscoveredRanges in a given project and location.</td>
</tr>
<tr>
    <td><a href="#find_free_ip_ranges"><CopyableCode code="find_free_ip_ranges" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-discoveredRangesId"><code>discoveredRangesId</code></a></td>
    <td><a href="#parameter-cidrPrefixLength"><code>cidrPrefixLength</code></a>, <a href="#parameter-rangeCount"><code>rangeCount</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Finds free IP ranges in a single DiscoveredRange.</td>
</tr>
<tr>
    <td><a href="#show_utilization"><CopyableCode code="show_utilization" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-discoveredRangesId"><code>discoveredRangesId</code></a></td>
    <td></td>
    <td>Gets the details of a single DiscoveredRange and its utilization.</td>
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
<tr id="parameter-discoveredRangesId">
    <td><CopyableCode code="discoveredRangesId" /></td>
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

Gets details of a single DiscoveredRange.

```sql
SELECT
name,
attributes,
childCidrOverlapAllowed,
createTime,
description,
discoveryMetadata,
ipv4CidrRange,
ipv6CidrRange,
labels,
parentRange,
realm,
registryBook,
updateTime
FROM google.cloudnumberregistry.discovered_ranges
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND discoveredRangesId = '{{ discoveredRangesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists DiscoveredRanges in a given project and location.

```sql
SELECT
name,
attributes,
childCidrOverlapAllowed,
createTime,
description,
discoveryMetadata,
ipv4CidrRange,
ipv6CidrRange,
labels,
parentRange,
realm,
registryBook,
updateTime
FROM google.cloudnumberregistry.discovered_ranges
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


## Lifecycle Methods

<Tabs
    defaultValue="find_free_ip_ranges"
    values={[
        { label: 'find_free_ip_ranges', value: 'find_free_ip_ranges' },
        { label: 'show_utilization', value: 'show_utilization' }
    ]}
>
<TabItem value="find_free_ip_ranges">

Finds free IP ranges in a single DiscoveredRange.

```sql
EXEC google.cloudnumberregistry.discovered_ranges.find_free_ip_ranges 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@discoveredRangesId='{{ discoveredRangesId }}' --required, 
@cidrPrefixLength='{{ cidrPrefixLength }}', 
@rangeCount='{{ rangeCount }}', 
@requestId='{{ requestId }}'
;
```
</TabItem>
<TabItem value="show_utilization">

Gets the details of a single DiscoveredRange and its utilization.

```sql
EXEC google.cloudnumberregistry.discovered_ranges.show_utilization 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@discoveredRangesId='{{ discoveredRangesId }}' --required
;
```
</TabItem>
</Tabs>
