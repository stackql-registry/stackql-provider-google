--- 
title: license_codes
hide_title: false
hide_table_of_contents: false
keywords:
  - license_codes
  - compute
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

Creates, updates, deletes, gets or lists a <code>license_codes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="license_codes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.license_codes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
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
    <td><CopyableCode code="id" /></td>
    <td><code>string (uint64)</code></td>
    <td>Output only. [Output Only] The unique identifier for the resource. This identifier is defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Name of the resource. The name is 1-20 characters long and must be a valid 64 bit integer. (pattern: <code>&#91;0-9&#93;&#123;0,20&#125;?</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="allowedReplacementLicenses" /></td>
    <td><code>array</code></td>
    <td>Specifies licenseCodes of licenses that can replace this license. Note: such replacements are allowed even if removable_from_disk is false.</td>
</tr>
<tr>
    <td><CopyableCode code="appendableToDisk" /></td>
    <td><code>boolean</code></td>
    <td>If true, this license can be appended to an existing disk's set of licenses.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Creation timestamp inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Description of this License Code.</td>
</tr>
<tr>
    <td><CopyableCode code="incompatibleLicenses" /></td>
    <td><code>array</code></td>
    <td>Specifies licenseCodes of licenses that are incompatible with this license. If a license is incompatible with this license, it cannot be attached to the same disk or image.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of resource. Always compute#licenseCode for licenses. (default: compute#licenseCode)</td>
</tr>
<tr>
    <td><CopyableCode code="licenseAlias" /></td>
    <td><code>array</code></td>
    <td>[Output Only] URL and description aliases of Licenses with the same License Code.</td>
</tr>
<tr>
    <td><CopyableCode code="minimumRetention" /></td>
    <td><code>object</code></td>
    <td>A Duration represents a fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". Range is approximately 10,000 years. (id: Duration)</td>
</tr>
<tr>
    <td><CopyableCode code="multiTenantOnly" /></td>
    <td><code>boolean</code></td>
    <td>If true, this license can only be used on VMs on multi tenant nodes.</td>
</tr>
<tr>
    <td><CopyableCode code="osLicense" /></td>
    <td><code>boolean</code></td>
    <td>If true, indicates this is an OS license. Only one OS license can be attached to a disk or image at a time.</td>
</tr>
<tr>
    <td><CopyableCode code="removableFromDisk" /></td>
    <td><code>boolean</code></td>
    <td>If true, this license can be removed from a disk's set of licenses, with no replacement license needed.</td>
</tr>
<tr>
    <td><CopyableCode code="requiredCoattachedLicenses" /></td>
    <td><code>array</code></td>
    <td>Specifies the set of permissible coattached licenseCodes of licenses that satisfy the coattachment requirement of this license. At least one license from the set must be attached to the same disk or image as this license.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="soleTenantOnly" /></td>
    <td><code>boolean</code></td>
    <td>If true, this license can only be used on VMs on sole tenant nodes.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Current state of this License Code. (DISABLED, ENABLED, RESTRICTED, STATE_UNSPECIFIED, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="transferable" /></td>
    <td><code>boolean</code></td>
    <td>Output only. [Output Only] If true, the license will remain attached when creating images or snapshots from disks. Otherwise, the license is not transferred.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTimestamp" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Last update timestamp inRFC3339 text format.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-licenseCode"><code>licenseCode</code></a></td>
    <td></td>
    <td>Return a specified license code. License codes are mirrored across<br />all projects that have permissions to read the License Code.<br /> *Caution* This resource is intended<br />for use only by third-party partners who are creatingCloud Marketplace<br />images.</td>
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
<tr id="parameter-licenseCode">
    <td><CopyableCode code="licenseCode" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Return a specified license code. License codes are mirrored across<br />all projects that have permissions to read the License Code.<br /> *Caution* This resource is intended<br />for use only by third-party partners who are creatingCloud Marketplace<br />images.

```sql
SELECT
id,
name,
allowedReplacementLicenses,
appendableToDisk,
creationTimestamp,
description,
incompatibleLicenses,
kind,
licenseAlias,
minimumRetention,
multiTenantOnly,
osLicense,
removableFromDisk,
requiredCoattachedLicenses,
selfLink,
soleTenantOnly,
state,
transferable,
updateTimestamp
FROM google.compute.license_codes
WHERE project = '{{ project }}' -- required
AND licenseCode = '{{ licenseCode }}' -- required
;
```
</TabItem>
</Tabs>
