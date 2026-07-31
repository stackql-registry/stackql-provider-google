--- 
title: paired_devices
hide_title: false
hide_table_of_contents: false
keywords:
  - paired_devices
  - health
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

Creates, updates, deletes, gets or lists a <code>paired_devices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="paired_devices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.health.paired_devices" /></td></tr>
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
    <td>Identifier. The resource name of this Device resource. Format: `users/&#123;user&#125;/pairedDevices/&#123;paired_device&#125;` Example: `users/1234567890/pairedDevices/123` or `users/me/pairedDevices/123`</td>
</tr>
<tr>
    <td><CopyableCode code="batteryLevel" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The battery level of the device.</td>
</tr>
<tr>
    <td><CopyableCode code="batteryStatus" /></td>
    <td><code>string</code></td>
    <td>Output only. The battery status of the device. Supported: High | Medium | Low | Empty</td>
</tr>
<tr>
    <td><CopyableCode code="deviceType" /></td>
    <td><code>string</code></td>
    <td>Output only. The device type. Supported: TRACKER | SCALE (DEVICE_TYPE_UNSPECIFIED, TRACKER, SCALE)</td>
</tr>
<tr>
    <td><CopyableCode code="deviceVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The product name of the device</td>
</tr>
<tr>
    <td><CopyableCode code="features" /></td>
    <td><code>array</code></td>
    <td>Output only. Lists of unique features supported by the device. Comprehensive list of supported features: **Fitness Tracking** - `ACTIVE_MINUTES`: Legacy active minutes. - `AUTOSTRIDE`: Automatic stride length calculation. - `BIKE_ONBOARDING`: Cycling UI support. - `CALORIES`: Daily burned calories. - `DISTANCE`: Daily distance tracking. - `ELEVATION`: Floors climbed. - `INACTIVITY_ALERTS`: Reminders to move. - `SEDENTARY_TIME`: Tracks inactive time. - `STEPS`: Daily steps. - `SWIM`: Swim tracking (laps/strokes). - `AUTORUN`: Automatic run detection. - `ACTIVE_ZONE_MINUTES`: Active Zone Minutes (AZM). **Heart Rate & Health** - `HEART_RATE`: Continuous heart rate (PPG). - `BAT_SIGNAL`: High/Low Heart Rate Alerts. **Advanced Sensors** - `SPO2`: Blood oxygen saturation. - `NIGHTTIME_OXYGEN_SATURATION`: Sleep SpO2. - `ESTIMATED_OXYGEN_VARIATION`: Estimated Oxygen Variation. - `EDA`: Electrodermal Activity (stress). - `SKIN_TEMPERATURE`: Skin temperature variation. - `INTERNAL_DEVICE_TEMPERATURE`: Internal device temperature. **Sleep & Wellness** - `SLEEP`: Basic sleep tracking. - `SMART_SLEEP`: Advanced sleep tracking (stages/score). - `BEDTIME_REMINDER`: Bedtime reminders. - `SOUNDSCAPE`: Snore and noise detection. **Advanced Workouts** - `WB`: Custom Workout Builder. - `AUTOCUES`: Auto Cues / Auto Lap. - `DWR_RUN`: Daily Run Recommendations. - `ADVANCED_RUNNING`: Advanced Running Dynamics (e.g., GCT, VO). **GPS & Location** - `GPS`: Built-in GPS. - `CONNECTED_GPS`: Connected GPS (uses phone). - `LOCATION_HINT`: Location helper. **Payments & NFC** - `PAYMENTS`: NFC payments (Fitbit Pay/Google Wallet). - `FELICA`: FeliCa support (Japan payments/transit). **Activity Detection** - `GROK`: SmartTrack automatic activity detection. - `RETRO_AR`: Retroactive Activity Recognition prompts. **Smart Features & UI** - `ALARMS`: Silent alarms. - `BLE_MUSIC_CONTROL`: BLE music control. - `MUSIC`: Direct music storage/control. - `YOUTUBE_MUSIC_SUPPORTED`: YouTube Music support. - `GALLERY`: App Gallery. - `TUTORIAL_SUPPORTED`: On-screen tutorials. - `SMILEY_EMOTE`: Legacy Zip face. - `MOBILE_TO_DEVICE_DEEPLINK`: Mobile to device settings deep link. - `HIDE_GALLERY`: Option to hide Gallery. - `HIDE_GOAL_SELECTION`: Option to hide goal selection. - `DIGITAL_WARRANTY_SUPPORTED`: Digital warranty display. - `DIRECT_DEVICE_SETTINGS_SUPPORTED`: Direct device settings management. **Gym HR Broadcasting** - `ASPEN_SUPPORTED`: Broadcast HR to gym equipment. - `ASPEN_REMOTE_UI_SUPPORTED`: Remote UI for HR sharing. **Privacy & Security** - `FINITE_IMPROBABILITY`: BLE Resolvable Private Address (RPA) privacy. - `DOMAIN_KEY_SYNC`: Domain key synchronization. **BLE Protocol** - `BONDING`: Secure BLE bonding. - `ADVERTISES_SERIAL`: Advertises serial number. - `STATUS_CHARACTERISTIC`: BLE Status Characteristic. - `TRACKER_CHANNEL_CHARACTERISTIC`: BLE Tracker Channel Characteristic. - `PING_CHARACTERISTIC`: BLE Ping Characteristic. **Cellular & Wi-Fi** - `MOBILE_DATA`: LTE cellular support. - `SINGLE_AP_WIFI`: Single AP Wi-Fi. - `MULTI_AP_WIFI`: Multi AP Wi-Fi. - `WIFI_FWUP`: Firmware updates over Wi-Fi. **Data Sync & Transfer** - `APP_SYNC`: Background app sync. - `LIVE_DATA`: Real-time data streaming. - `EVENT_BASED_SYNC_SUPPORTED`: Event-based sync. - `TIME_SERVICE`: Time synchronization service. - `REMOTE_FILE_PROVIDER`: Remote file transfer. - `DIRECT_COMMS_ALARMS`: Direct communication for alarms. - `DIRECT_COMMS_EXERCISE`: Direct communication for exercise. - `DIRECT_COMMS_BATTERY_ALERTS`: Direct communication for battery alerts. **Google Integrations** - `PARROT_TREE_SUPPORTED`: Find My Device support.</td>
</tr>
<tr>
    <td><CopyableCode code="lastSyncTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time of last sync with the Fitbit mobile application.</td>
</tr>
<tr>
    <td><CopyableCode code="macAddress" /></td>
    <td><code>string</code></td>
    <td>Output only. Mac ID number of the device.</td>
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
    <td>Identifier. The resource name of this Device resource. Format: `users/&#123;user&#125;/pairedDevices/&#123;paired_device&#125;` Example: `users/1234567890/pairedDevices/123` or `users/me/pairedDevices/123`</td>
</tr>
<tr>
    <td><CopyableCode code="batteryLevel" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The battery level of the device.</td>
</tr>
<tr>
    <td><CopyableCode code="batteryStatus" /></td>
    <td><code>string</code></td>
    <td>Output only. The battery status of the device. Supported: High | Medium | Low | Empty</td>
</tr>
<tr>
    <td><CopyableCode code="deviceType" /></td>
    <td><code>string</code></td>
    <td>Output only. The device type. Supported: TRACKER | SCALE (DEVICE_TYPE_UNSPECIFIED, TRACKER, SCALE)</td>
</tr>
<tr>
    <td><CopyableCode code="deviceVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The product name of the device</td>
</tr>
<tr>
    <td><CopyableCode code="features" /></td>
    <td><code>array</code></td>
    <td>Output only. Lists of unique features supported by the device. Comprehensive list of supported features: **Fitness Tracking** - `ACTIVE_MINUTES`: Legacy active minutes. - `AUTOSTRIDE`: Automatic stride length calculation. - `BIKE_ONBOARDING`: Cycling UI support. - `CALORIES`: Daily burned calories. - `DISTANCE`: Daily distance tracking. - `ELEVATION`: Floors climbed. - `INACTIVITY_ALERTS`: Reminders to move. - `SEDENTARY_TIME`: Tracks inactive time. - `STEPS`: Daily steps. - `SWIM`: Swim tracking (laps/strokes). - `AUTORUN`: Automatic run detection. - `ACTIVE_ZONE_MINUTES`: Active Zone Minutes (AZM). **Heart Rate & Health** - `HEART_RATE`: Continuous heart rate (PPG). - `BAT_SIGNAL`: High/Low Heart Rate Alerts. **Advanced Sensors** - `SPO2`: Blood oxygen saturation. - `NIGHTTIME_OXYGEN_SATURATION`: Sleep SpO2. - `ESTIMATED_OXYGEN_VARIATION`: Estimated Oxygen Variation. - `EDA`: Electrodermal Activity (stress). - `SKIN_TEMPERATURE`: Skin temperature variation. - `INTERNAL_DEVICE_TEMPERATURE`: Internal device temperature. **Sleep & Wellness** - `SLEEP`: Basic sleep tracking. - `SMART_SLEEP`: Advanced sleep tracking (stages/score). - `BEDTIME_REMINDER`: Bedtime reminders. - `SOUNDSCAPE`: Snore and noise detection. **Advanced Workouts** - `WB`: Custom Workout Builder. - `AUTOCUES`: Auto Cues / Auto Lap. - `DWR_RUN`: Daily Run Recommendations. - `ADVANCED_RUNNING`: Advanced Running Dynamics (e.g., GCT, VO). **GPS & Location** - `GPS`: Built-in GPS. - `CONNECTED_GPS`: Connected GPS (uses phone). - `LOCATION_HINT`: Location helper. **Payments & NFC** - `PAYMENTS`: NFC payments (Fitbit Pay/Google Wallet). - `FELICA`: FeliCa support (Japan payments/transit). **Activity Detection** - `GROK`: SmartTrack automatic activity detection. - `RETRO_AR`: Retroactive Activity Recognition prompts. **Smart Features & UI** - `ALARMS`: Silent alarms. - `BLE_MUSIC_CONTROL`: BLE music control. - `MUSIC`: Direct music storage/control. - `YOUTUBE_MUSIC_SUPPORTED`: YouTube Music support. - `GALLERY`: App Gallery. - `TUTORIAL_SUPPORTED`: On-screen tutorials. - `SMILEY_EMOTE`: Legacy Zip face. - `MOBILE_TO_DEVICE_DEEPLINK`: Mobile to device settings deep link. - `HIDE_GALLERY`: Option to hide Gallery. - `HIDE_GOAL_SELECTION`: Option to hide goal selection. - `DIGITAL_WARRANTY_SUPPORTED`: Digital warranty display. - `DIRECT_DEVICE_SETTINGS_SUPPORTED`: Direct device settings management. **Gym HR Broadcasting** - `ASPEN_SUPPORTED`: Broadcast HR to gym equipment. - `ASPEN_REMOTE_UI_SUPPORTED`: Remote UI for HR sharing. **Privacy & Security** - `FINITE_IMPROBABILITY`: BLE Resolvable Private Address (RPA) privacy. - `DOMAIN_KEY_SYNC`: Domain key synchronization. **BLE Protocol** - `BONDING`: Secure BLE bonding. - `ADVERTISES_SERIAL`: Advertises serial number. - `STATUS_CHARACTERISTIC`: BLE Status Characteristic. - `TRACKER_CHANNEL_CHARACTERISTIC`: BLE Tracker Channel Characteristic. - `PING_CHARACTERISTIC`: BLE Ping Characteristic. **Cellular & Wi-Fi** - `MOBILE_DATA`: LTE cellular support. - `SINGLE_AP_WIFI`: Single AP Wi-Fi. - `MULTI_AP_WIFI`: Multi AP Wi-Fi. - `WIFI_FWUP`: Firmware updates over Wi-Fi. **Data Sync & Transfer** - `APP_SYNC`: Background app sync. - `LIVE_DATA`: Real-time data streaming. - `EVENT_BASED_SYNC_SUPPORTED`: Event-based sync. - `TIME_SERVICE`: Time synchronization service. - `REMOTE_FILE_PROVIDER`: Remote file transfer. - `DIRECT_COMMS_ALARMS`: Direct communication for alarms. - `DIRECT_COMMS_EXERCISE`: Direct communication for exercise. - `DIRECT_COMMS_BATTERY_ALERTS`: Direct communication for battery alerts. **Google Integrations** - `PARROT_TREE_SUPPORTED`: Find My Device support.</td>
</tr>
<tr>
    <td><CopyableCode code="lastSyncTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time of last sync with the Fitbit mobile application.</td>
</tr>
<tr>
    <td><CopyableCode code="macAddress" /></td>
    <td><code>string</code></td>
    <td>Output only. Mac ID number of the device.</td>
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
    <td><a href="#parameter-usersId"><code>usersId</code></a>, <a href="#parameter-pairedDevicesId"><code>pairedDevicesId</code></a></td>
    <td></td>
    <td>Returns user's Device.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-usersId"><code>usersId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Returns the user's list of paired 1P trackers and smartwatches.</td>
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
<tr id="parameter-pairedDevicesId">
    <td><CopyableCode code="pairedDevicesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-usersId">
    <td><CopyableCode code="usersId" /></td>
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

Returns user's Device.

```sql
SELECT
name,
batteryLevel,
batteryStatus,
deviceType,
deviceVersion,
features,
lastSyncTime,
macAddress
FROM google.health.paired_devices
WHERE usersId = '{{ usersId }}' -- required
AND pairedDevicesId = '{{ pairedDevicesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the user's list of paired 1P trackers and smartwatches.

```sql
SELECT
name,
batteryLevel,
batteryStatus,
deviceType,
deviceVersion,
features,
lastSyncTime,
macAddress
FROM google.health.paired_devices
WHERE usersId = '{{ usersId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>
