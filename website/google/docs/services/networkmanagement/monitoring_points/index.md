--- 
title: monitoring_points
hide_title: false
hide_table_of_contents: false
keywords:
  - monitoring_points
  - networkmanagement
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

Creates, updates, deletes, gets or lists a <code>monitoring_points</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitoring_points" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkmanagement.monitoring_points" /></td></tr>
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
    <td>Identifier. Name of the resource. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/networkMonitoringProviders/&#123;network_monitoring_provider&#125;/monitoringPoints/&#123;monitoring_point&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="autoGeoLocationEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates if automaitic geographic location is enabled for the MonitoringPoint.</td>
</tr>
<tr>
    <td><CopyableCode code="connectionStatus" /></td>
    <td><code>string</code></td>
    <td>Output only. Connection status of the MonitoringPoint. (CONNECTION_STATUS_UNSPECIFIED, ONLINE, OFFLINE)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the MonitoringPoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentType" /></td>
    <td><code>string</code></td>
    <td>Output only. The deployment type of the MonitoringPoint. (DEPLOYMENT_TYPE_UNSPECIFIED, DOCKER, PODMAN, HELM)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. Display name of the MonitoringPoint.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. The codes of errors detected in the MonitoringPoint.</td>
</tr>
<tr>
    <td><CopyableCode code="geoLocation" /></td>
    <td><code>object</code></td>
    <td>Output only. The geographical location of the MonitoringPoint. (id: GeoLocation)</td>
</tr>
<tr>
    <td><CopyableCode code="guid" /></td>
    <td><code>string</code></td>
    <td>Output only. The GUID of the MonitoringPoint.</td>
</tr>
<tr>
    <td><CopyableCode code="host" /></td>
    <td><code>object</code></td>
    <td>Output only. The host information of the MonitoringPoint. (id: Host)</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>Output only. The hostname of the MonitoringPoint.</td>
</tr>
<tr>
    <td><CopyableCode code="networkInterfaces" /></td>
    <td><code>array</code></td>
    <td>Output only. The network interfaces of the MonitoringPoint.</td>
</tr>
<tr>
    <td><CopyableCode code="originatingIp" /></td>
    <td><code>string</code></td>
    <td>Output only. IP address visible when MonitoringPoint connects to the provider.</td>
</tr>
<tr>
    <td><CopyableCode code="providerTags" /></td>
    <td><code>array</code></td>
    <td>Output only. The provider tags of the MonitoringPoint.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Output only. Deployment type of the MonitoringPoint.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the MonitoringPoint was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="upgradeAvailable" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates if an upgrade is available for the MonitoringPoint.</td>
</tr>
<tr>
    <td><CopyableCode code="upgradeType" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of upgrade available for the MonitoringPoint. (UPGRADE_TYPE_UNSPECIFIED, MANUAL, MANAGED, SCHEDULED, AUTO, EXTERNAL)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Output only. Version of the software running on the MonitoringPoint.</td>
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
    <td>Identifier. Name of the resource. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/networkMonitoringProviders/&#123;network_monitoring_provider&#125;/monitoringPoints/&#123;monitoring_point&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="autoGeoLocationEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates if automaitic geographic location is enabled for the MonitoringPoint.</td>
</tr>
<tr>
    <td><CopyableCode code="connectionStatus" /></td>
    <td><code>string</code></td>
    <td>Output only. Connection status of the MonitoringPoint. (CONNECTION_STATUS_UNSPECIFIED, ONLINE, OFFLINE)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the MonitoringPoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentType" /></td>
    <td><code>string</code></td>
    <td>Output only. The deployment type of the MonitoringPoint. (DEPLOYMENT_TYPE_UNSPECIFIED, DOCKER, PODMAN, HELM)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Output only. Display name of the MonitoringPoint.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. The codes of errors detected in the MonitoringPoint.</td>
</tr>
<tr>
    <td><CopyableCode code="geoLocation" /></td>
    <td><code>object</code></td>
    <td>Output only. The geographical location of the MonitoringPoint. (id: GeoLocation)</td>
</tr>
<tr>
    <td><CopyableCode code="guid" /></td>
    <td><code>string</code></td>
    <td>Output only. The GUID of the MonitoringPoint.</td>
</tr>
<tr>
    <td><CopyableCode code="host" /></td>
    <td><code>object</code></td>
    <td>Output only. The host information of the MonitoringPoint. (id: Host)</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>Output only. The hostname of the MonitoringPoint.</td>
</tr>
<tr>
    <td><CopyableCode code="networkInterfaces" /></td>
    <td><code>array</code></td>
    <td>Output only. The network interfaces of the MonitoringPoint.</td>
</tr>
<tr>
    <td><CopyableCode code="originatingIp" /></td>
    <td><code>string</code></td>
    <td>Output only. IP address visible when MonitoringPoint connects to the provider.</td>
</tr>
<tr>
    <td><CopyableCode code="providerTags" /></td>
    <td><code>array</code></td>
    <td>Output only. The provider tags of the MonitoringPoint.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Output only. Deployment type of the MonitoringPoint.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time the MonitoringPoint was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="upgradeAvailable" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates if an upgrade is available for the MonitoringPoint.</td>
</tr>
<tr>
    <td><CopyableCode code="upgradeType" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of upgrade available for the MonitoringPoint. (UPGRADE_TYPE_UNSPECIFIED, MANUAL, MANAGED, SCHEDULED, AUTO, EXTERNAL)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Output only. Version of the software running on the MonitoringPoint.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-networkMonitoringProvidersId"><code>networkMonitoringProvidersId</code></a>, <a href="#parameter-monitoringPointsId"><code>monitoringPointsId</code></a></td>
    <td></td>
    <td>Gets the MonitoringPoint resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-networkMonitoringProvidersId"><code>networkMonitoringProvidersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists MonitoringPoints for a given network monitoring provider.</td>
</tr>
<tr>
    <td><a href="#download_install_script"><CopyableCode code="download_install_script" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-networkMonitoringProvidersId"><code>networkMonitoringProvidersId</code></a></td>
    <td><a href="#parameter-_password"><code>_password</code></a>, <a href="#parameter-hostname"><code>hostname</code></a>, <a href="#parameter-monitoringPointType"><code>monitoringPointType</code></a>, <a href="#parameter-ntpServerAddress"><code>ntpServerAddress</code></a>, <a href="#parameter-ntpServerSecondaryAddress"><code>ntpServerSecondaryAddress</code></a>, <a href="#parameter-privateConnectivityEnabled"><code>privateConnectivityEnabled</code></a>, <a href="#parameter-staticIpAddress.dnsServerAddress"><code>staticIpAddress.dnsServerAddress</code></a>, <a href="#parameter-staticIpAddress.dnsServerSecondaryAddress"><code>staticIpAddress.dnsServerSecondaryAddress</code></a>, <a href="#parameter-staticIpAddress.domain"><code>staticIpAddress.domain</code></a>, <a href="#parameter-staticIpAddress.gatewayAddress"><code>staticIpAddress.gatewayAddress</code></a>, <a href="#parameter-staticIpAddress.ipAddress"><code>staticIpAddress.ipAddress</code></a>, <a href="#parameter-staticIpAddress.netmask"><code>staticIpAddress.netmask</code></a>, <a href="#parameter-timeZone.id"><code>timeZone.id</code></a>, <a href="#parameter-timeZone.version"><code>timeZone.version</code></a>, <a href="#parameter-useDhcp"><code>useDhcp</code></a></td>
    <td>Downloads an install script for MonitoringPoints for a given network monitoring provider.</td>
</tr>
<tr>
    <td><a href="#download_recreate_install_script"><CopyableCode code="download_recreate_install_script" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-networkMonitoringProvidersId"><code>networkMonitoringProvidersId</code></a>, <a href="#parameter-monitoringPointsId"><code>monitoringPointsId</code></a></td>
    <td><a href="#parameter-hostname"><code>hostname</code></a></td>
    <td>Downloads an install script for a specific Container MonitoringPoint.</td>
</tr>
<tr>
    <td><a href="#download_server_connect_config"><CopyableCode code="download_server_connect_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-networkMonitoringProvidersId"><code>networkMonitoringProvidersId</code></a></td>
    <td></td>
    <td>Downloads the server connect configuration for a given network monitoring provider.</td>
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
<tr id="parameter-monitoringPointsId">
    <td><CopyableCode code="monitoringPointsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-networkMonitoringProvidersId">
    <td><CopyableCode code="networkMonitoringProvidersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-_password">
    <td><CopyableCode code="_password" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-hostname">
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-monitoringPointType">
    <td><CopyableCode code="monitoringPointType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ntpServerAddress">
    <td><CopyableCode code="ntpServerAddress" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ntpServerSecondaryAddress">
    <td><CopyableCode code="ntpServerSecondaryAddress" /></td>
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
<tr id="parameter-privateConnectivityEnabled">
    <td><CopyableCode code="privateConnectivityEnabled" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-staticIpAddress.dnsServerAddress">
    <td><CopyableCode code="staticIpAddress.dnsServerAddress" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-staticIpAddress.dnsServerSecondaryAddress">
    <td><CopyableCode code="staticIpAddress.dnsServerSecondaryAddress" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-staticIpAddress.domain">
    <td><CopyableCode code="staticIpAddress.domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-staticIpAddress.gatewayAddress">
    <td><CopyableCode code="staticIpAddress.gatewayAddress" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-staticIpAddress.ipAddress">
    <td><CopyableCode code="staticIpAddress.ipAddress" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-staticIpAddress.netmask">
    <td><CopyableCode code="staticIpAddress.netmask" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-timeZone.id">
    <td><CopyableCode code="timeZone.id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-timeZone.version">
    <td><CopyableCode code="timeZone.version" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-useDhcp">
    <td><CopyableCode code="useDhcp" /></td>
    <td><code>boolean</code></td>
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

Gets the MonitoringPoint resource.

```sql
SELECT
name,
autoGeoLocationEnabled,
connectionStatus,
createTime,
deploymentType,
displayName,
errors,
geoLocation,
guid,
host,
hostname,
networkInterfaces,
originatingIp,
providerTags,
type,
updateTime,
upgradeAvailable,
upgradeType,
version
FROM google.networkmanagement.monitoring_points
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND networkMonitoringProvidersId = '{{ networkMonitoringProvidersId }}' -- required
AND monitoringPointsId = '{{ monitoringPointsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists MonitoringPoints for a given network monitoring provider.

```sql
SELECT
name,
autoGeoLocationEnabled,
connectionStatus,
createTime,
deploymentType,
displayName,
errors,
geoLocation,
guid,
host,
hostname,
networkInterfaces,
originatingIp,
providerTags,
type,
updateTime,
upgradeAvailable,
upgradeType,
version
FROM google.networkmanagement.monitoring_points
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND networkMonitoringProvidersId = '{{ networkMonitoringProvidersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="download_install_script"
    values={[
        { label: 'download_install_script', value: 'download_install_script' },
        { label: 'download_recreate_install_script', value: 'download_recreate_install_script' },
        { label: 'download_server_connect_config', value: 'download_server_connect_config' }
    ]}
>
<TabItem value="download_install_script">

Downloads an install script for MonitoringPoints for a given network monitoring provider.

```sql
EXEC google.networkmanagement.monitoring_points.download_install_script 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@networkMonitoringProvidersId='{{ networkMonitoringProvidersId }}' --required, 
@_password='{{ _password }}', 
@hostname='{{ hostname }}', 
@monitoringPointType='{{ monitoringPointType }}', 
@ntpServerAddress='{{ ntpServerAddress }}', 
@ntpServerSecondaryAddress='{{ ntpServerSecondaryAddress }}', 
@privateConnectivityEnabled={{ privateConnectivityEnabled }}, 
@staticIpAddress.dnsServerAddress='{{ staticIpAddress.dnsServerAddress }}', 
@staticIpAddress.dnsServerSecondaryAddress='{{ staticIpAddress.dnsServerSecondaryAddress }}', 
@staticIpAddress.domain='{{ staticIpAddress.domain }}', 
@staticIpAddress.gatewayAddress='{{ staticIpAddress.gatewayAddress }}', 
@staticIpAddress.ipAddress='{{ staticIpAddress.ipAddress }}', 
@staticIpAddress.netmask='{{ staticIpAddress.netmask }}', 
@timeZone.id='{{ timeZone.id }}', 
@timeZone.version='{{ timeZone.version }}', 
@useDhcp={{ useDhcp }}
;
```
</TabItem>
<TabItem value="download_recreate_install_script">

Downloads an install script for a specific Container MonitoringPoint.

```sql
EXEC google.networkmanagement.monitoring_points.download_recreate_install_script 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@networkMonitoringProvidersId='{{ networkMonitoringProvidersId }}' --required, 
@monitoringPointsId='{{ monitoringPointsId }}' --required, 
@hostname='{{ hostname }}'
;
```
</TabItem>
<TabItem value="download_server_connect_config">

Downloads the server connect configuration for a given network monitoring provider.

```sql
EXEC google.networkmanagement.monitoring_points.download_server_connect_config 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@networkMonitoringProvidersId='{{ networkMonitoringProvidersId }}' --required
;
```
</TabItem>
</Tabs>
