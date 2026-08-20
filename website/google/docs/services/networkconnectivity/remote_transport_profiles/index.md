--- 
title: remote_transport_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - remote_transport_profiles
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

Creates, updates, deletes, gets or lists a <code>remote_transport_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="remote_transport_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkconnectivity.remote_transport_profiles" /></td></tr>
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
    <td>Identifier. Name of the resource in the format of $provider-$site.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Output only. Description of the profile.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. Human readable name of this profile, used to identify this profile in the UI.</td>
</tr>
<tr>
    <td><CopyableCode code="flow" /></td>
    <td><code>string</code></td>
    <td>Output only. Type of provisioning flows supported by this profile. (KEY_PROVISIONING_FLOW_UNSPECIFIED, INPUT_ONLY, OUTPUT_ONLY, INPUT_OR_OUTPUT)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Output only. Labels as key value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="orderState" /></td>
    <td><code>string</code></td>
    <td>Output only. Order state for this profile. (STATE_UNSPECIFIED, CLOSED, OPEN)</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>Output only. Name of the provider on the other end of this profile. E.g. “Amazon Web Services” or “Microsoft Azure”.</td>
</tr>
<tr>
    <td><CopyableCode code="providerSite" /></td>
    <td><code>string</code></td>
    <td>Output only. If the profile is a Cloud Service Provider with compute resources, this is populated with the region where connectivity is being established. If the profile provides facility-level selection, this is an identity of the facility any connections on this profile are going through.</td>
</tr>
<tr>
    <td><CopyableCode code="sla" /></td>
    <td><code>string</code></td>
    <td>Output only. Availability class that will be configured for this particular RemoteTransportProfile. (SERVICE_LEVEL_AVAILABILITY_UNSPECIFIED, HIGH, MAXIMUM)</td>
</tr>
<tr>
    <td><CopyableCode code="supportedBandwidths" /></td>
    <td><code>array</code></td>
    <td>Output only. List of bandwidth enum values that are supported by this profile.</td>
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
    <td>Identifier. Name of the resource in the format of $provider-$site.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Output only. Description of the profile.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. Human readable name of this profile, used to identify this profile in the UI.</td>
</tr>
<tr>
    <td><CopyableCode code="flow" /></td>
    <td><code>string</code></td>
    <td>Output only. Type of provisioning flows supported by this profile. (KEY_PROVISIONING_FLOW_UNSPECIFIED, INPUT_ONLY, OUTPUT_ONLY, INPUT_OR_OUTPUT)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Output only. Labels as key value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="orderState" /></td>
    <td><code>string</code></td>
    <td>Output only. Order state for this profile. (STATE_UNSPECIFIED, CLOSED, OPEN)</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>Output only. Name of the provider on the other end of this profile. E.g. “Amazon Web Services” or “Microsoft Azure”.</td>
</tr>
<tr>
    <td><CopyableCode code="providerSite" /></td>
    <td><code>string</code></td>
    <td>Output only. If the profile is a Cloud Service Provider with compute resources, this is populated with the region where connectivity is being established. If the profile provides facility-level selection, this is an identity of the facility any connections on this profile are going through.</td>
</tr>
<tr>
    <td><CopyableCode code="sla" /></td>
    <td><code>string</code></td>
    <td>Output only. Availability class that will be configured for this particular RemoteTransportProfile. (SERVICE_LEVEL_AVAILABILITY_UNSPECIFIED, HIGH, MAXIMUM)</td>
</tr>
<tr>
    <td><CopyableCode code="supportedBandwidths" /></td>
    <td><code>array</code></td>
    <td>Output only. List of bandwidth enum values that are supported by this profile.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-remoteTransportProfilesId"><code>remoteTransportProfilesId</code></a></td>
    <td></td>
    <td>Gets details of a single RemoteTransportProfile.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists RemoteTransportProfiles in a given project and location.</td>
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
<tr id="parameter-remoteTransportProfilesId">
    <td><CopyableCode code="remoteTransportProfilesId" /></td>
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

Gets details of a single RemoteTransportProfile.

```sql
SELECT
name,
description,
displayName,
flow,
labels,
orderState,
provider,
providerSite,
sla,
supportedBandwidths
FROM google.networkconnectivity.remote_transport_profiles
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND remoteTransportProfilesId = '{{ remoteTransportProfilesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists RemoteTransportProfiles in a given project and location.

```sql
SELECT
name,
description,
displayName,
flow,
labels,
orderState,
provider,
providerSite,
sla,
supportedBandwidths
FROM google.networkconnectivity.remote_transport_profiles
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
