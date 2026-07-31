--- 
title: devices
hide_title: false
hide_table_of_contents: false
keywords:
  - devices
  - prod_tt_sasportal
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

Creates, updates, deletes, gets or lists a <code>devices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="devices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.prod_tt_sasportal.devices" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="deployments_devices_get"
    values={[
        { label: 'deployments_devices_get', value: 'deployments_devices_get' },
        { label: 'customers_nodes_devices_list', value: 'customers_nodes_devices_list' },
        { label: 'customers_devices_get', value: 'customers_devices_get' },
        { label: 'customers_deployments_devices_list', value: 'customers_deployments_devices_list' },
        { label: 'nodes_nodes_devices_list', value: 'nodes_nodes_devices_list' },
        { label: 'nodes_devices_get', value: 'nodes_devices_get' },
        { label: 'nodes_deployments_devices_list', value: 'nodes_deployments_devices_list' },
        { label: 'customers_devices_list', value: 'customers_devices_list' },
        { label: 'nodes_devices_list', value: 'nodes_devices_list' }
    ]}
>
<TabItem value="deployments_devices_get">

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
    <td>Output only. The resource path name.</td>
</tr>
<tr>
    <td><CopyableCode code="activeConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. Current configuration of the device as registered to the SAS. (id: SasPortalDeviceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="currentChannels" /></td>
    <td><code>array</code></td>
    <td>Output only. Current channels with scores.</td>
</tr>
<tr>
    <td><CopyableCode code="deviceMetadata" /></td>
    <td><code>object</code></td>
    <td>Device parameters that can be overridden by both SAS Portal and SAS registration requests. (id: SasPortalDeviceMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Device display name.</td>
</tr>
<tr>
    <td><CopyableCode code="fccId" /></td>
    <td><code>string</code></td>
    <td>The FCC identifier of the device. Refer to https://www.fcc.gov/oet/ea/fccid for FccID format. Accept underscores and periods because some test-SAS customers use them.</td>
</tr>
<tr>
    <td><CopyableCode code="grantRangeAllowlists" /></td>
    <td><code>array</code></td>
    <td>Only ranges that are within the allowlists are available for new grants.</td>
</tr>
<tr>
    <td><CopyableCode code="grants" /></td>
    <td><code>array</code></td>
    <td>Output only. Grants held by the device.</td>
</tr>
<tr>
    <td><CopyableCode code="preloadedConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration of the device, as specified via SAS Portal API. (id: SasPortalDeviceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="serialNumber" /></td>
    <td><code>string</code></td>
    <td>A serial number assigned to the device by the device manufacturer.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Device state. (DEVICE_STATE_UNSPECIFIED, RESERVED, REGISTERED, DEREGISTERED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="customers_nodes_devices_list">

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
    <td>Output only. The resource path name.</td>
</tr>
<tr>
    <td><CopyableCode code="activeConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. Current configuration of the device as registered to the SAS. (id: SasPortalDeviceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="currentChannels" /></td>
    <td><code>array</code></td>
    <td>Output only. Current channels with scores.</td>
</tr>
<tr>
    <td><CopyableCode code="deviceMetadata" /></td>
    <td><code>object</code></td>
    <td>Device parameters that can be overridden by both SAS Portal and SAS registration requests. (id: SasPortalDeviceMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Device display name.</td>
</tr>
<tr>
    <td><CopyableCode code="fccId" /></td>
    <td><code>string</code></td>
    <td>The FCC identifier of the device. Refer to https://www.fcc.gov/oet/ea/fccid for FccID format. Accept underscores and periods because some test-SAS customers use them.</td>
</tr>
<tr>
    <td><CopyableCode code="grantRangeAllowlists" /></td>
    <td><code>array</code></td>
    <td>Only ranges that are within the allowlists are available for new grants.</td>
</tr>
<tr>
    <td><CopyableCode code="grants" /></td>
    <td><code>array</code></td>
    <td>Output only. Grants held by the device.</td>
</tr>
<tr>
    <td><CopyableCode code="preloadedConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration of the device, as specified via SAS Portal API. (id: SasPortalDeviceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="serialNumber" /></td>
    <td><code>string</code></td>
    <td>A serial number assigned to the device by the device manufacturer.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Device state. (DEVICE_STATE_UNSPECIFIED, RESERVED, REGISTERED, DEREGISTERED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="customers_devices_get">

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
    <td>Output only. The resource path name.</td>
</tr>
<tr>
    <td><CopyableCode code="activeConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. Current configuration of the device as registered to the SAS. (id: SasPortalDeviceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="currentChannels" /></td>
    <td><code>array</code></td>
    <td>Output only. Current channels with scores.</td>
</tr>
<tr>
    <td><CopyableCode code="deviceMetadata" /></td>
    <td><code>object</code></td>
    <td>Device parameters that can be overridden by both SAS Portal and SAS registration requests. (id: SasPortalDeviceMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Device display name.</td>
</tr>
<tr>
    <td><CopyableCode code="fccId" /></td>
    <td><code>string</code></td>
    <td>The FCC identifier of the device. Refer to https://www.fcc.gov/oet/ea/fccid for FccID format. Accept underscores and periods because some test-SAS customers use them.</td>
</tr>
<tr>
    <td><CopyableCode code="grantRangeAllowlists" /></td>
    <td><code>array</code></td>
    <td>Only ranges that are within the allowlists are available for new grants.</td>
</tr>
<tr>
    <td><CopyableCode code="grants" /></td>
    <td><code>array</code></td>
    <td>Output only. Grants held by the device.</td>
</tr>
<tr>
    <td><CopyableCode code="preloadedConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration of the device, as specified via SAS Portal API. (id: SasPortalDeviceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="serialNumber" /></td>
    <td><code>string</code></td>
    <td>A serial number assigned to the device by the device manufacturer.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Device state. (DEVICE_STATE_UNSPECIFIED, RESERVED, REGISTERED, DEREGISTERED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="customers_deployments_devices_list">

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
    <td>Output only. The resource path name.</td>
</tr>
<tr>
    <td><CopyableCode code="activeConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. Current configuration of the device as registered to the SAS. (id: SasPortalDeviceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="currentChannels" /></td>
    <td><code>array</code></td>
    <td>Output only. Current channels with scores.</td>
</tr>
<tr>
    <td><CopyableCode code="deviceMetadata" /></td>
    <td><code>object</code></td>
    <td>Device parameters that can be overridden by both SAS Portal and SAS registration requests. (id: SasPortalDeviceMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Device display name.</td>
</tr>
<tr>
    <td><CopyableCode code="fccId" /></td>
    <td><code>string</code></td>
    <td>The FCC identifier of the device. Refer to https://www.fcc.gov/oet/ea/fccid for FccID format. Accept underscores and periods because some test-SAS customers use them.</td>
</tr>
<tr>
    <td><CopyableCode code="grantRangeAllowlists" /></td>
    <td><code>array</code></td>
    <td>Only ranges that are within the allowlists are available for new grants.</td>
</tr>
<tr>
    <td><CopyableCode code="grants" /></td>
    <td><code>array</code></td>
    <td>Output only. Grants held by the device.</td>
</tr>
<tr>
    <td><CopyableCode code="preloadedConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration of the device, as specified via SAS Portal API. (id: SasPortalDeviceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="serialNumber" /></td>
    <td><code>string</code></td>
    <td>A serial number assigned to the device by the device manufacturer.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Device state. (DEVICE_STATE_UNSPECIFIED, RESERVED, REGISTERED, DEREGISTERED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="nodes_nodes_devices_list">

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
    <td>Output only. The resource path name.</td>
</tr>
<tr>
    <td><CopyableCode code="activeConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. Current configuration of the device as registered to the SAS. (id: SasPortalDeviceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="currentChannels" /></td>
    <td><code>array</code></td>
    <td>Output only. Current channels with scores.</td>
</tr>
<tr>
    <td><CopyableCode code="deviceMetadata" /></td>
    <td><code>object</code></td>
    <td>Device parameters that can be overridden by both SAS Portal and SAS registration requests. (id: SasPortalDeviceMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Device display name.</td>
</tr>
<tr>
    <td><CopyableCode code="fccId" /></td>
    <td><code>string</code></td>
    <td>The FCC identifier of the device. Refer to https://www.fcc.gov/oet/ea/fccid for FccID format. Accept underscores and periods because some test-SAS customers use them.</td>
</tr>
<tr>
    <td><CopyableCode code="grantRangeAllowlists" /></td>
    <td><code>array</code></td>
    <td>Only ranges that are within the allowlists are available for new grants.</td>
</tr>
<tr>
    <td><CopyableCode code="grants" /></td>
    <td><code>array</code></td>
    <td>Output only. Grants held by the device.</td>
</tr>
<tr>
    <td><CopyableCode code="preloadedConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration of the device, as specified via SAS Portal API. (id: SasPortalDeviceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="serialNumber" /></td>
    <td><code>string</code></td>
    <td>A serial number assigned to the device by the device manufacturer.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Device state. (DEVICE_STATE_UNSPECIFIED, RESERVED, REGISTERED, DEREGISTERED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="nodes_devices_get">

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
    <td>Output only. The resource path name.</td>
</tr>
<tr>
    <td><CopyableCode code="activeConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. Current configuration of the device as registered to the SAS. (id: SasPortalDeviceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="currentChannels" /></td>
    <td><code>array</code></td>
    <td>Output only. Current channels with scores.</td>
</tr>
<tr>
    <td><CopyableCode code="deviceMetadata" /></td>
    <td><code>object</code></td>
    <td>Device parameters that can be overridden by both SAS Portal and SAS registration requests. (id: SasPortalDeviceMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Device display name.</td>
</tr>
<tr>
    <td><CopyableCode code="fccId" /></td>
    <td><code>string</code></td>
    <td>The FCC identifier of the device. Refer to https://www.fcc.gov/oet/ea/fccid for FccID format. Accept underscores and periods because some test-SAS customers use them.</td>
</tr>
<tr>
    <td><CopyableCode code="grantRangeAllowlists" /></td>
    <td><code>array</code></td>
    <td>Only ranges that are within the allowlists are available for new grants.</td>
</tr>
<tr>
    <td><CopyableCode code="grants" /></td>
    <td><code>array</code></td>
    <td>Output only. Grants held by the device.</td>
</tr>
<tr>
    <td><CopyableCode code="preloadedConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration of the device, as specified via SAS Portal API. (id: SasPortalDeviceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="serialNumber" /></td>
    <td><code>string</code></td>
    <td>A serial number assigned to the device by the device manufacturer.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Device state. (DEVICE_STATE_UNSPECIFIED, RESERVED, REGISTERED, DEREGISTERED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="nodes_deployments_devices_list">

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
    <td>Output only. The resource path name.</td>
</tr>
<tr>
    <td><CopyableCode code="activeConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. Current configuration of the device as registered to the SAS. (id: SasPortalDeviceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="currentChannels" /></td>
    <td><code>array</code></td>
    <td>Output only. Current channels with scores.</td>
</tr>
<tr>
    <td><CopyableCode code="deviceMetadata" /></td>
    <td><code>object</code></td>
    <td>Device parameters that can be overridden by both SAS Portal and SAS registration requests. (id: SasPortalDeviceMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Device display name.</td>
</tr>
<tr>
    <td><CopyableCode code="fccId" /></td>
    <td><code>string</code></td>
    <td>The FCC identifier of the device. Refer to https://www.fcc.gov/oet/ea/fccid for FccID format. Accept underscores and periods because some test-SAS customers use them.</td>
</tr>
<tr>
    <td><CopyableCode code="grantRangeAllowlists" /></td>
    <td><code>array</code></td>
    <td>Only ranges that are within the allowlists are available for new grants.</td>
</tr>
<tr>
    <td><CopyableCode code="grants" /></td>
    <td><code>array</code></td>
    <td>Output only. Grants held by the device.</td>
</tr>
<tr>
    <td><CopyableCode code="preloadedConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration of the device, as specified via SAS Portal API. (id: SasPortalDeviceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="serialNumber" /></td>
    <td><code>string</code></td>
    <td>A serial number assigned to the device by the device manufacturer.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Device state. (DEVICE_STATE_UNSPECIFIED, RESERVED, REGISTERED, DEREGISTERED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="customers_devices_list">

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
    <td>Output only. The resource path name.</td>
</tr>
<tr>
    <td><CopyableCode code="activeConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. Current configuration of the device as registered to the SAS. (id: SasPortalDeviceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="currentChannels" /></td>
    <td><code>array</code></td>
    <td>Output only. Current channels with scores.</td>
</tr>
<tr>
    <td><CopyableCode code="deviceMetadata" /></td>
    <td><code>object</code></td>
    <td>Device parameters that can be overridden by both SAS Portal and SAS registration requests. (id: SasPortalDeviceMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Device display name.</td>
</tr>
<tr>
    <td><CopyableCode code="fccId" /></td>
    <td><code>string</code></td>
    <td>The FCC identifier of the device. Refer to https://www.fcc.gov/oet/ea/fccid for FccID format. Accept underscores and periods because some test-SAS customers use them.</td>
</tr>
<tr>
    <td><CopyableCode code="grantRangeAllowlists" /></td>
    <td><code>array</code></td>
    <td>Only ranges that are within the allowlists are available for new grants.</td>
</tr>
<tr>
    <td><CopyableCode code="grants" /></td>
    <td><code>array</code></td>
    <td>Output only. Grants held by the device.</td>
</tr>
<tr>
    <td><CopyableCode code="preloadedConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration of the device, as specified via SAS Portal API. (id: SasPortalDeviceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="serialNumber" /></td>
    <td><code>string</code></td>
    <td>A serial number assigned to the device by the device manufacturer.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Device state. (DEVICE_STATE_UNSPECIFIED, RESERVED, REGISTERED, DEREGISTERED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="nodes_devices_list">

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
    <td>Output only. The resource path name.</td>
</tr>
<tr>
    <td><CopyableCode code="activeConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. Current configuration of the device as registered to the SAS. (id: SasPortalDeviceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="currentChannels" /></td>
    <td><code>array</code></td>
    <td>Output only. Current channels with scores.</td>
</tr>
<tr>
    <td><CopyableCode code="deviceMetadata" /></td>
    <td><code>object</code></td>
    <td>Device parameters that can be overridden by both SAS Portal and SAS registration requests. (id: SasPortalDeviceMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Device display name.</td>
</tr>
<tr>
    <td><CopyableCode code="fccId" /></td>
    <td><code>string</code></td>
    <td>The FCC identifier of the device. Refer to https://www.fcc.gov/oet/ea/fccid for FccID format. Accept underscores and periods because some test-SAS customers use them.</td>
</tr>
<tr>
    <td><CopyableCode code="grantRangeAllowlists" /></td>
    <td><code>array</code></td>
    <td>Only ranges that are within the allowlists are available for new grants.</td>
</tr>
<tr>
    <td><CopyableCode code="grants" /></td>
    <td><code>array</code></td>
    <td>Output only. Grants held by the device.</td>
</tr>
<tr>
    <td><CopyableCode code="preloadedConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration of the device, as specified via SAS Portal API. (id: SasPortalDeviceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="serialNumber" /></td>
    <td><code>string</code></td>
    <td>A serial number assigned to the device by the device manufacturer.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Device state. (DEVICE_STATE_UNSPECIFIED, RESERVED, REGISTERED, DEREGISTERED)</td>
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
    <td><a href="#deployments_devices_get"><CopyableCode code="deployments_devices_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-deploymentsId"><code>deploymentsId</code></a>, <a href="#parameter-devicesId"><code>devicesId</code></a></td>
    <td></td>
    <td>Gets details about a device.</td>
</tr>
<tr>
    <td><a href="#customers_nodes_devices_list"><CopyableCode code="customers_nodes_devices_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-nodesId"><code>nodesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists devices under a node or customer.</td>
</tr>
<tr>
    <td><a href="#customers_devices_get"><CopyableCode code="customers_devices_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-devicesId"><code>devicesId</code></a></td>
    <td></td>
    <td>Gets details about a device.</td>
</tr>
<tr>
    <td><a href="#customers_deployments_devices_list"><CopyableCode code="customers_deployments_devices_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists devices under a node or customer.</td>
</tr>
<tr>
    <td><a href="#nodes_nodes_devices_list"><CopyableCode code="nodes_nodes_devices_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-nodesId"><code>nodesId</code></a>, <a href="#parameter-nodesId1"><code>nodesId1</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists devices under a node or customer.</td>
</tr>
<tr>
    <td><a href="#nodes_devices_get"><CopyableCode code="nodes_devices_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-nodesId"><code>nodesId</code></a>, <a href="#parameter-devicesId"><code>devicesId</code></a></td>
    <td></td>
    <td>Gets details about a device.</td>
</tr>
<tr>
    <td><a href="#nodes_deployments_devices_list"><CopyableCode code="nodes_deployments_devices_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-nodesId"><code>nodesId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists devices under a node or customer.</td>
</tr>
<tr>
    <td><a href="#customers_devices_list"><CopyableCode code="customers_devices_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists devices under a node or customer.</td>
</tr>
<tr>
    <td><a href="#nodes_devices_list"><CopyableCode code="nodes_devices_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-nodesId"><code>nodesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists devices under a node or customer.</td>
</tr>
<tr>
    <td><a href="#customers_nodes_devices_create"><CopyableCode code="customers_nodes_devices_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-nodesId"><code>nodesId</code></a></td>
    <td></td>
    <td>Creates a device under a node or customer.</td>
</tr>
<tr>
    <td><a href="#customers_deployments_devices_create"><CopyableCode code="customers_deployments_devices_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td></td>
    <td>Creates a device under a node or customer.</td>
</tr>
<tr>
    <td><a href="#nodes_nodes_devices_create"><CopyableCode code="nodes_nodes_devices_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-nodesId"><code>nodesId</code></a>, <a href="#parameter-nodesId1"><code>nodesId1</code></a></td>
    <td></td>
    <td>Creates a device under a node or customer.</td>
</tr>
<tr>
    <td><a href="#nodes_deployments_devices_create"><CopyableCode code="nodes_deployments_devices_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-nodesId"><code>nodesId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td></td>
    <td>Creates a device under a node or customer.</td>
</tr>
<tr>
    <td><a href="#customers_devices_create"><CopyableCode code="customers_devices_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a></td>
    <td></td>
    <td>Creates a device under a node or customer.</td>
</tr>
<tr>
    <td><a href="#nodes_devices_create"><CopyableCode code="nodes_devices_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-nodesId"><code>nodesId</code></a></td>
    <td></td>
    <td>Creates a device under a node or customer.</td>
</tr>
<tr>
    <td><a href="#deployments_devices_patch"><CopyableCode code="deployments_devices_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-deploymentsId"><code>deploymentsId</code></a>, <a href="#parameter-devicesId"><code>devicesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a device.</td>
</tr>
<tr>
    <td><a href="#customers_devices_patch"><CopyableCode code="customers_devices_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-devicesId"><code>devicesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a device.</td>
</tr>
<tr>
    <td><a href="#nodes_devices_patch"><CopyableCode code="nodes_devices_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-nodesId"><code>nodesId</code></a>, <a href="#parameter-devicesId"><code>devicesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a device.</td>
</tr>
<tr>
    <td><a href="#deployments_devices_delete"><CopyableCode code="deployments_devices_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-deploymentsId"><code>deploymentsId</code></a>, <a href="#parameter-devicesId"><code>devicesId</code></a></td>
    <td></td>
    <td>Deletes a device.</td>
</tr>
<tr>
    <td><a href="#customers_devices_delete"><CopyableCode code="customers_devices_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-devicesId"><code>devicesId</code></a></td>
    <td></td>
    <td>Deletes a device.</td>
</tr>
<tr>
    <td><a href="#nodes_devices_delete"><CopyableCode code="nodes_devices_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-nodesId"><code>nodesId</code></a>, <a href="#parameter-devicesId"><code>devicesId</code></a></td>
    <td></td>
    <td>Deletes a device.</td>
</tr>
<tr>
    <td><a href="#deployments_devices_move"><CopyableCode code="deployments_devices_move" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-deploymentsId"><code>deploymentsId</code></a>, <a href="#parameter-devicesId"><code>devicesId</code></a></td>
    <td></td>
    <td>Moves a device under another node or customer.</td>
</tr>
<tr>
    <td><a href="#deployments_devices_sign_device"><CopyableCode code="deployments_devices_sign_device" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-deploymentsId"><code>deploymentsId</code></a>, <a href="#parameter-devicesId"><code>devicesId</code></a></td>
    <td></td>
    <td>Signs a device.</td>
</tr>
<tr>
    <td><a href="#customers_devices_move"><CopyableCode code="customers_devices_move" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-devicesId"><code>devicesId</code></a></td>
    <td></td>
    <td>Moves a device under another node or customer.</td>
</tr>
<tr>
    <td><a href="#customers_devices_sign_device"><CopyableCode code="customers_devices_sign_device" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-customersId"><code>customersId</code></a>, <a href="#parameter-devicesId"><code>devicesId</code></a></td>
    <td></td>
    <td>Signs a device.</td>
</tr>
<tr>
    <td><a href="#nodes_devices_move"><CopyableCode code="nodes_devices_move" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-nodesId"><code>nodesId</code></a>, <a href="#parameter-devicesId"><code>devicesId</code></a></td>
    <td></td>
    <td>Moves a device under another node or customer.</td>
</tr>
<tr>
    <td><a href="#nodes_devices_sign_device"><CopyableCode code="nodes_devices_sign_device" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-nodesId"><code>nodesId</code></a>, <a href="#parameter-devicesId"><code>devicesId</code></a></td>
    <td></td>
    <td>Signs a device.</td>
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
<tr id="parameter-customersId">
    <td><CopyableCode code="customersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-deploymentsId">
    <td><CopyableCode code="deploymentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-devicesId">
    <td><CopyableCode code="devicesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-nodesId">
    <td><CopyableCode code="nodesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-nodesId1">
    <td><CopyableCode code="nodesId1" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="deployments_devices_get"
    values={[
        { label: 'deployments_devices_get', value: 'deployments_devices_get' },
        { label: 'customers_nodes_devices_list', value: 'customers_nodes_devices_list' },
        { label: 'customers_devices_get', value: 'customers_devices_get' },
        { label: 'customers_deployments_devices_list', value: 'customers_deployments_devices_list' },
        { label: 'nodes_nodes_devices_list', value: 'nodes_nodes_devices_list' },
        { label: 'nodes_devices_get', value: 'nodes_devices_get' },
        { label: 'nodes_deployments_devices_list', value: 'nodes_deployments_devices_list' },
        { label: 'customers_devices_list', value: 'customers_devices_list' },
        { label: 'nodes_devices_list', value: 'nodes_devices_list' }
    ]}
>
<TabItem value="deployments_devices_get">

Gets details about a device.

```sql
SELECT
name,
activeConfig,
currentChannels,
deviceMetadata,
displayName,
fccId,
grantRangeAllowlists,
grants,
preloadedConfig,
serialNumber,
state
FROM google.prod_tt_sasportal.devices
WHERE deploymentsId = '{{ deploymentsId }}' -- required
AND devicesId = '{{ devicesId }}' -- required
;
```
</TabItem>
<TabItem value="customers_nodes_devices_list">

Lists devices under a node or customer.

```sql
SELECT
name,
activeConfig,
currentChannels,
deviceMetadata,
displayName,
fccId,
grantRangeAllowlists,
grants,
preloadedConfig,
serialNumber,
state
FROM google.prod_tt_sasportal.devices
WHERE customersId = '{{ customersId }}' -- required
AND nodesId = '{{ nodesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
;
```
</TabItem>
<TabItem value="customers_devices_get">

Gets details about a device.

```sql
SELECT
name,
activeConfig,
currentChannels,
deviceMetadata,
displayName,
fccId,
grantRangeAllowlists,
grants,
preloadedConfig,
serialNumber,
state
FROM google.prod_tt_sasportal.devices
WHERE customersId = '{{ customersId }}' -- required
AND devicesId = '{{ devicesId }}' -- required
;
```
</TabItem>
<TabItem value="customers_deployments_devices_list">

Lists devices under a node or customer.

```sql
SELECT
name,
activeConfig,
currentChannels,
deviceMetadata,
displayName,
fccId,
grantRangeAllowlists,
grants,
preloadedConfig,
serialNumber,
state
FROM google.prod_tt_sasportal.devices
WHERE customersId = '{{ customersId }}' -- required
AND deploymentsId = '{{ deploymentsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
;
```
</TabItem>
<TabItem value="nodes_nodes_devices_list">

Lists devices under a node or customer.

```sql
SELECT
name,
activeConfig,
currentChannels,
deviceMetadata,
displayName,
fccId,
grantRangeAllowlists,
grants,
preloadedConfig,
serialNumber,
state
FROM google.prod_tt_sasportal.devices
WHERE nodesId = '{{ nodesId }}' -- required
AND nodesId1 = '{{ nodesId1 }}' -- required
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
;
```
</TabItem>
<TabItem value="nodes_devices_get">

Gets details about a device.

```sql
SELECT
name,
activeConfig,
currentChannels,
deviceMetadata,
displayName,
fccId,
grantRangeAllowlists,
grants,
preloadedConfig,
serialNumber,
state
FROM google.prod_tt_sasportal.devices
WHERE nodesId = '{{ nodesId }}' -- required
AND devicesId = '{{ devicesId }}' -- required
;
```
</TabItem>
<TabItem value="nodes_deployments_devices_list">

Lists devices under a node or customer.

```sql
SELECT
name,
activeConfig,
currentChannels,
deviceMetadata,
displayName,
fccId,
grantRangeAllowlists,
grants,
preloadedConfig,
serialNumber,
state
FROM google.prod_tt_sasportal.devices
WHERE nodesId = '{{ nodesId }}' -- required
AND deploymentsId = '{{ deploymentsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
;
```
</TabItem>
<TabItem value="customers_devices_list">

Lists devices under a node or customer.

```sql
SELECT
name,
activeConfig,
currentChannels,
deviceMetadata,
displayName,
fccId,
grantRangeAllowlists,
grants,
preloadedConfig,
serialNumber,
state
FROM google.prod_tt_sasportal.devices
WHERE customersId = '{{ customersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
;
```
</TabItem>
<TabItem value="nodes_devices_list">

Lists devices under a node or customer.

```sql
SELECT
name,
activeConfig,
currentChannels,
deviceMetadata,
displayName,
fccId,
grantRangeAllowlists,
grants,
preloadedConfig,
serialNumber,
state
FROM google.prod_tt_sasportal.devices
WHERE nodesId = '{{ nodesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="customers_nodes_devices_create"
    values={[
        { label: 'customers_nodes_devices_create', value: 'customers_nodes_devices_create' },
        { label: 'customers_deployments_devices_create', value: 'customers_deployments_devices_create' },
        { label: 'nodes_nodes_devices_create', value: 'nodes_nodes_devices_create' },
        { label: 'nodes_deployments_devices_create', value: 'nodes_deployments_devices_create' },
        { label: 'customers_devices_create', value: 'customers_devices_create' },
        { label: 'nodes_devices_create', value: 'nodes_devices_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="customers_nodes_devices_create">

Creates a device under a node or customer.

```sql
INSERT INTO google.prod_tt_sasportal.devices (
data__displayName,
data__grantRangeAllowlists,
data__deviceMetadata,
data__name,
data__fccId,
data__activeConfig,
data__state,
data__serialNumber,
data__grants,
data__preloadedConfig,
customersId,
nodesId
)
SELECT 
'{{ displayName }}',
'{{ grantRangeAllowlists }}',
'{{ deviceMetadata }}',
'{{ name }}',
'{{ fccId }}',
'{{ activeConfig }}',
'{{ state }}',
'{{ serialNumber }}',
'{{ grants }}',
'{{ preloadedConfig }}',
'{{ customersId }}',
'{{ nodesId }}'
RETURNING
name,
activeConfig,
currentChannels,
deviceMetadata,
displayName,
fccId,
grantRangeAllowlists,
grants,
preloadedConfig,
serialNumber,
state
;
```
</TabItem>
<TabItem value="customers_deployments_devices_create">

Creates a device under a node or customer.

```sql
INSERT INTO google.prod_tt_sasportal.devices (
data__displayName,
data__grantRangeAllowlists,
data__deviceMetadata,
data__name,
data__fccId,
data__activeConfig,
data__state,
data__serialNumber,
data__grants,
data__preloadedConfig,
customersId,
deploymentsId
)
SELECT 
'{{ displayName }}',
'{{ grantRangeAllowlists }}',
'{{ deviceMetadata }}',
'{{ name }}',
'{{ fccId }}',
'{{ activeConfig }}',
'{{ state }}',
'{{ serialNumber }}',
'{{ grants }}',
'{{ preloadedConfig }}',
'{{ customersId }}',
'{{ deploymentsId }}'
RETURNING
name,
activeConfig,
currentChannels,
deviceMetadata,
displayName,
fccId,
grantRangeAllowlists,
grants,
preloadedConfig,
serialNumber,
state
;
```
</TabItem>
<TabItem value="nodes_nodes_devices_create">

Creates a device under a node or customer.

```sql
INSERT INTO google.prod_tt_sasportal.devices (
data__displayName,
data__grantRangeAllowlists,
data__deviceMetadata,
data__name,
data__fccId,
data__activeConfig,
data__state,
data__serialNumber,
data__grants,
data__preloadedConfig,
nodesId,
nodesId1
)
SELECT 
'{{ displayName }}',
'{{ grantRangeAllowlists }}',
'{{ deviceMetadata }}',
'{{ name }}',
'{{ fccId }}',
'{{ activeConfig }}',
'{{ state }}',
'{{ serialNumber }}',
'{{ grants }}',
'{{ preloadedConfig }}',
'{{ nodesId }}',
'{{ nodesId1 }}'
RETURNING
name,
activeConfig,
currentChannels,
deviceMetadata,
displayName,
fccId,
grantRangeAllowlists,
grants,
preloadedConfig,
serialNumber,
state
;
```
</TabItem>
<TabItem value="nodes_deployments_devices_create">

Creates a device under a node or customer.

```sql
INSERT INTO google.prod_tt_sasportal.devices (
data__displayName,
data__grantRangeAllowlists,
data__deviceMetadata,
data__name,
data__fccId,
data__activeConfig,
data__state,
data__serialNumber,
data__grants,
data__preloadedConfig,
nodesId,
deploymentsId
)
SELECT 
'{{ displayName }}',
'{{ grantRangeAllowlists }}',
'{{ deviceMetadata }}',
'{{ name }}',
'{{ fccId }}',
'{{ activeConfig }}',
'{{ state }}',
'{{ serialNumber }}',
'{{ grants }}',
'{{ preloadedConfig }}',
'{{ nodesId }}',
'{{ deploymentsId }}'
RETURNING
name,
activeConfig,
currentChannels,
deviceMetadata,
displayName,
fccId,
grantRangeAllowlists,
grants,
preloadedConfig,
serialNumber,
state
;
```
</TabItem>
<TabItem value="customers_devices_create">

Creates a device under a node or customer.

```sql
INSERT INTO google.prod_tt_sasportal.devices (
data__displayName,
data__grantRangeAllowlists,
data__deviceMetadata,
data__name,
data__fccId,
data__activeConfig,
data__state,
data__serialNumber,
data__grants,
data__preloadedConfig,
customersId
)
SELECT 
'{{ displayName }}',
'{{ grantRangeAllowlists }}',
'{{ deviceMetadata }}',
'{{ name }}',
'{{ fccId }}',
'{{ activeConfig }}',
'{{ state }}',
'{{ serialNumber }}',
'{{ grants }}',
'{{ preloadedConfig }}',
'{{ customersId }}'
RETURNING
name,
activeConfig,
currentChannels,
deviceMetadata,
displayName,
fccId,
grantRangeAllowlists,
grants,
preloadedConfig,
serialNumber,
state
;
```
</TabItem>
<TabItem value="nodes_devices_create">

Creates a device under a node or customer.

```sql
INSERT INTO google.prod_tt_sasportal.devices (
data__displayName,
data__grantRangeAllowlists,
data__deviceMetadata,
data__name,
data__fccId,
data__activeConfig,
data__state,
data__serialNumber,
data__grants,
data__preloadedConfig,
nodesId
)
SELECT 
'{{ displayName }}',
'{{ grantRangeAllowlists }}',
'{{ deviceMetadata }}',
'{{ name }}',
'{{ fccId }}',
'{{ activeConfig }}',
'{{ state }}',
'{{ serialNumber }}',
'{{ grants }}',
'{{ preloadedConfig }}',
'{{ nodesId }}'
RETURNING
name,
activeConfig,
currentChannels,
deviceMetadata,
displayName,
fccId,
grantRangeAllowlists,
grants,
preloadedConfig,
serialNumber,
state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: devices
  props:
    - name: customersId
      value: "{{ customersId }}"
      description: Required parameter for the devices resource.
    - name: nodesId
      value: "{{ nodesId }}"
      description: Required parameter for the devices resource.
    - name: deploymentsId
      value: "{{ deploymentsId }}"
      description: Required parameter for the devices resource.
    - name: nodesId1
      value: "{{ nodesId1 }}"
      description: Required parameter for the devices resource.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Device display name.
    - name: grantRangeAllowlists
      description: |
        Only ranges that are within the allowlists are available for new grants.
      value:
        - lowFrequencyMhz: {{ lowFrequencyMhz }}
          highFrequencyMhz: {{ highFrequencyMhz }}
    - name: deviceMetadata
      description: |
        Device parameters that can be overridden by both SAS Portal and SAS registration requests.
      value:
        antennaModel: "{{ antennaModel }}"
        nrqzValidated: {{ nrqzValidated }}
        nrqzValidation:
          longitude: {{ longitude }}
          caseId: "{{ caseId }}"
          latitude: {{ latitude }}
          state: "{{ state }}"
          cpiId: "{{ cpiId }}"
        interferenceCoordinationGroup: "{{ interferenceCoordinationGroup }}"
        commonChannelGroup: "{{ commonChannelGroup }}"
    - name: name
      value: "{{ name }}"
      description: |
        Output only. The resource path name.
    - name: fccId
      value: "{{ fccId }}"
      description: |
        The FCC identifier of the device. Refer to https://www.fcc.gov/oet/ea/fccid for FccID format. Accept underscores and periods because some test-SAS customers use them.
    - name: activeConfig
      description: |
        Output only. Current configuration of the device as registered to the SAS.
      value:
        installationParams:
          antennaGain: {{ antennaGain }}
          height: {{ height }}
          cpeCbsdIndication: {{ cpeCbsdIndication }}
          latitude: {{ latitude }}
          indoorDeployment: {{ indoorDeployment }}
          heightType: "{{ heightType }}"
          longitude: {{ longitude }}
          verticalAccuracy: {{ verticalAccuracy }}
          antennaModel: "{{ antennaModel }}"
          horizontalAccuracy: {{ horizontalAccuracy }}
          antennaBeamwidth: {{ antennaBeamwidth }}
          antennaDowntilt: {{ antennaDowntilt }}
          eirpCapability: {{ eirpCapability }}
          antennaAzimuth: {{ antennaAzimuth }}
        callSign: "{{ callSign }}"
        model:
          vendor: "{{ vendor }}"
          softwareVersion: "{{ softwareVersion }}"
          hardwareVersion: "{{ hardwareVersion }}"
          name: "{{ name }}"
          firmwareVersion: "{{ firmwareVersion }}"
        airInterface:
          supportedSpec: "{{ supportedSpec }}"
          radioTechnology: "{{ radioTechnology }}"
        userId: "{{ userId }}"
        isSigned: {{ isSigned }}
        category: "{{ category }}"
        state: "{{ state }}"
        updateTime: "{{ updateTime }}"
        measurementCapabilities:
          - "{{ measurementCapabilities }}"
    - name: state
      value: "{{ state }}"
      description: |
        Output only. Device state.
      valid_values: ['DEVICE_STATE_UNSPECIFIED', 'RESERVED', 'REGISTERED', 'DEREGISTERED']
    - name: serialNumber
      value: "{{ serialNumber }}"
      description: |
        A serial number assigned to the device by the device manufacturer.
    - name: grants
      description: |
        Output only. Grants held by the device.
      value:
        - frequencyRange:
            lowFrequencyMhz: {{ lowFrequencyMhz }}
            highFrequencyMhz: {{ highFrequencyMhz }}
          state: "{{ state }}"
          channelType: "{{ channelType }}"
          suspensionReason: "{{ suspensionReason }}"
          moveList: "{{ moveList }}"
          grantId: "{{ grantId }}"
          maxEirp: {{ maxEirp }}
          lastHeartbeatTransmitExpireTime: "{{ lastHeartbeatTransmitExpireTime }}"
          expireTime: "{{ expireTime }}"
    - name: preloadedConfig
      description: |
        Configuration of the device, as specified via SAS Portal API.
      value:
        installationParams:
          antennaGain: {{ antennaGain }}
          height: {{ height }}
          cpeCbsdIndication: {{ cpeCbsdIndication }}
          latitude: {{ latitude }}
          indoorDeployment: {{ indoorDeployment }}
          heightType: "{{ heightType }}"
          longitude: {{ longitude }}
          verticalAccuracy: {{ verticalAccuracy }}
          antennaModel: "{{ antennaModel }}"
          horizontalAccuracy: {{ horizontalAccuracy }}
          antennaBeamwidth: {{ antennaBeamwidth }}
          antennaDowntilt: {{ antennaDowntilt }}
          eirpCapability: {{ eirpCapability }}
          antennaAzimuth: {{ antennaAzimuth }}
        callSign: "{{ callSign }}"
        model:
          vendor: "{{ vendor }}"
          softwareVersion: "{{ softwareVersion }}"
          hardwareVersion: "{{ hardwareVersion }}"
          name: "{{ name }}"
          firmwareVersion: "{{ firmwareVersion }}"
        airInterface:
          supportedSpec: "{{ supportedSpec }}"
          radioTechnology: "{{ radioTechnology }}"
        userId: "{{ userId }}"
        isSigned: {{ isSigned }}
        category: "{{ category }}"
        state: "{{ state }}"
        updateTime: "{{ updateTime }}"
        measurementCapabilities:
          - "{{ measurementCapabilities }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="deployments_devices_patch"
    values={[
        { label: 'deployments_devices_patch', value: 'deployments_devices_patch' },
        { label: 'customers_devices_patch', value: 'customers_devices_patch' },
        { label: 'nodes_devices_patch', value: 'nodes_devices_patch' }
    ]}
>
<TabItem value="deployments_devices_patch">

Updates a device.

```sql
UPDATE google.prod_tt_sasportal.devices
SET 
data__displayName = '{{ displayName }}',
data__grantRangeAllowlists = '{{ grantRangeAllowlists }}',
data__deviceMetadata = '{{ deviceMetadata }}',
data__name = '{{ name }}',
data__fccId = '{{ fccId }}',
data__activeConfig = '{{ activeConfig }}',
data__state = '{{ state }}',
data__serialNumber = '{{ serialNumber }}',
data__grants = '{{ grants }}',
data__preloadedConfig = '{{ preloadedConfig }}'
WHERE 
deploymentsId = '{{ deploymentsId }}' --required
AND devicesId = '{{ devicesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
activeConfig,
currentChannels,
deviceMetadata,
displayName,
fccId,
grantRangeAllowlists,
grants,
preloadedConfig,
serialNumber,
state;
```
</TabItem>
<TabItem value="customers_devices_patch">

Updates a device.

```sql
UPDATE google.prod_tt_sasportal.devices
SET 
data__displayName = '{{ displayName }}',
data__grantRangeAllowlists = '{{ grantRangeAllowlists }}',
data__deviceMetadata = '{{ deviceMetadata }}',
data__name = '{{ name }}',
data__fccId = '{{ fccId }}',
data__activeConfig = '{{ activeConfig }}',
data__state = '{{ state }}',
data__serialNumber = '{{ serialNumber }}',
data__grants = '{{ grants }}',
data__preloadedConfig = '{{ preloadedConfig }}'
WHERE 
customersId = '{{ customersId }}' --required
AND devicesId = '{{ devicesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
activeConfig,
currentChannels,
deviceMetadata,
displayName,
fccId,
grantRangeAllowlists,
grants,
preloadedConfig,
serialNumber,
state;
```
</TabItem>
<TabItem value="nodes_devices_patch">

Updates a device.

```sql
UPDATE google.prod_tt_sasportal.devices
SET 
data__displayName = '{{ displayName }}',
data__grantRangeAllowlists = '{{ grantRangeAllowlists }}',
data__deviceMetadata = '{{ deviceMetadata }}',
data__name = '{{ name }}',
data__fccId = '{{ fccId }}',
data__activeConfig = '{{ activeConfig }}',
data__state = '{{ state }}',
data__serialNumber = '{{ serialNumber }}',
data__grants = '{{ grants }}',
data__preloadedConfig = '{{ preloadedConfig }}'
WHERE 
nodesId = '{{ nodesId }}' --required
AND devicesId = '{{ devicesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
activeConfig,
currentChannels,
deviceMetadata,
displayName,
fccId,
grantRangeAllowlists,
grants,
preloadedConfig,
serialNumber,
state;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deployments_devices_delete"
    values={[
        { label: 'deployments_devices_delete', value: 'deployments_devices_delete' },
        { label: 'customers_devices_delete', value: 'customers_devices_delete' },
        { label: 'nodes_devices_delete', value: 'nodes_devices_delete' }
    ]}
>
<TabItem value="deployments_devices_delete">

Deletes a device.

```sql
DELETE FROM google.prod_tt_sasportal.devices
WHERE deploymentsId = '{{ deploymentsId }}' --required
AND devicesId = '{{ devicesId }}' --required
;
```
</TabItem>
<TabItem value="customers_devices_delete">

Deletes a device.

```sql
DELETE FROM google.prod_tt_sasportal.devices
WHERE customersId = '{{ customersId }}' --required
AND devicesId = '{{ devicesId }}' --required
;
```
</TabItem>
<TabItem value="nodes_devices_delete">

Deletes a device.

```sql
DELETE FROM google.prod_tt_sasportal.devices
WHERE nodesId = '{{ nodesId }}' --required
AND devicesId = '{{ devicesId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="deployments_devices_move"
    values={[
        { label: 'deployments_devices_move', value: 'deployments_devices_move' },
        { label: 'deployments_devices_sign_device', value: 'deployments_devices_sign_device' },
        { label: 'customers_devices_move', value: 'customers_devices_move' },
        { label: 'customers_devices_sign_device', value: 'customers_devices_sign_device' },
        { label: 'nodes_devices_move', value: 'nodes_devices_move' },
        { label: 'nodes_devices_sign_device', value: 'nodes_devices_sign_device' }
    ]}
>
<TabItem value="deployments_devices_move">

Moves a device under another node or customer.

```sql
EXEC google.prod_tt_sasportal.devices.deployments_devices_move 
@deploymentsId='{{ deploymentsId }}' --required, 
@devicesId='{{ devicesId }}' --required 
@@json=
'{
"destination": "{{ destination }}"
}'
;
```
</TabItem>
<TabItem value="deployments_devices_sign_device">

Signs a device.

```sql
EXEC google.prod_tt_sasportal.devices.deployments_devices_sign_device 
@deploymentsId='{{ deploymentsId }}' --required, 
@devicesId='{{ devicesId }}' --required 
@@json=
'{
"device": "{{ device }}"
}'
;
```
</TabItem>
<TabItem value="customers_devices_move">

Moves a device under another node or customer.

```sql
EXEC google.prod_tt_sasportal.devices.customers_devices_move 
@customersId='{{ customersId }}' --required, 
@devicesId='{{ devicesId }}' --required 
@@json=
'{
"destination": "{{ destination }}"
}'
;
```
</TabItem>
<TabItem value="customers_devices_sign_device">

Signs a device.

```sql
EXEC google.prod_tt_sasportal.devices.customers_devices_sign_device 
@customersId='{{ customersId }}' --required, 
@devicesId='{{ devicesId }}' --required 
@@json=
'{
"device": "{{ device }}"
}'
;
```
</TabItem>
<TabItem value="nodes_devices_move">

Moves a device under another node or customer.

```sql
EXEC google.prod_tt_sasportal.devices.nodes_devices_move 
@nodesId='{{ nodesId }}' --required, 
@devicesId='{{ devicesId }}' --required 
@@json=
'{
"destination": "{{ destination }}"
}'
;
```
</TabItem>
<TabItem value="nodes_devices_sign_device">

Signs a device.

```sql
EXEC google.prod_tt_sasportal.devices.nodes_devices_sign_device 
@nodesId='{{ nodesId }}' --required, 
@devicesId='{{ devicesId }}' --required 
@@json=
'{
"device": "{{ device }}"
}'
;
```
</TabItem>
</Tabs>
