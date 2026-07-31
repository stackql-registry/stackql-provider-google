--- 
title: data_points
hide_title: false
hide_table_of_contents: false
keywords:
  - data_points
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

Creates, updates, deletes, gets or lists a <code>data_points</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_points" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.health.data_points" /></td></tr>
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
    <td>Identifier. Data point name, only supported for the subset of identifiable data types. For the majority of the data types, individual data points do not need to be identified and this field would be empty. Format: `users/&#123;user&#125;/dataTypes/&#123;data_type&#125;/dataPoints/&#123;data_point&#125;` Example: `users/abcd1234/dataTypes/sleep/dataPoints/a1b2c3d4-e5f6-7890-1234-567890abcdef` The `&#123;user&#125;` ID is a system-generated identifier, as described in Identity.health_user_id. The `&#123;data_type&#125;` ID corresponds to the kebab-case version of the field names in the DataPoint data union field, e.g. `heart-rate` for the `heart_rate` field. The `&#123;data_point&#125;` ID can be client-provided or system-generated. If client-provided, it must be a string of 4-63 characters, containing only lowercase letters, numbers, and hyphens.</td>
</tr>
<tr>
    <td><CopyableCode code="activeEnergyBurned" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `active-energy-burned` interval data type collection. (id: ActiveEnergyBurned)</td>
</tr>
<tr>
    <td><CopyableCode code="activeMinutes" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `active-minutes` interval data type collection. (id: ActiveMinutes)</td>
</tr>
<tr>
    <td><CopyableCode code="activeZoneMinutes" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `active-zone-minutes` interval data type collection, measured in minutes. (id: ActiveZoneMinutes)</td>
</tr>
<tr>
    <td><CopyableCode code="activityLevel" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `activity-level` daily data type collection. (id: ActivityLevel)</td>
</tr>
<tr>
    <td><CopyableCode code="altitude" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `altitude` interval data type collection. (id: Altitude)</td>
</tr>
<tr>
    <td><CopyableCode code="basalEnergyBurned" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `basal-energy-burned` interval data type collection. (id: BasalEnergyBurned)</td>
</tr>
<tr>
    <td><CopyableCode code="bloodGlucose" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `blood-glucose` sample data type collection. (id: BloodGlucose)</td>
</tr>
<tr>
    <td><CopyableCode code="bodyFat" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `body-fat` sample data type collection. (id: BodyFat)</td>
</tr>
<tr>
    <td><CopyableCode code="coreBodyTemperature" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `core-body-temperature` sample data type collection. (id: CoreBodyTemperature)</td>
</tr>
<tr>
    <td><CopyableCode code="dailyHeartRateVariability" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `daily-heart-rate-variability` daily data type collection. (id: DailyHeartRateVariability)</td>
</tr>
<tr>
    <td><CopyableCode code="dailyHeartRateZones" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `daily-heart-rate-zones` daily data type collection. (id: DailyHeartRateZones)</td>
</tr>
<tr>
    <td><CopyableCode code="dailyOxygenSaturation" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `daily-oxygen-saturation` daily data type collection. (id: DailyOxygenSaturation)</td>
</tr>
<tr>
    <td><CopyableCode code="dailyRespiratoryRate" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `daily-respiratory-rate` daily data type collection. (id: DailyRespiratoryRate)</td>
</tr>
<tr>
    <td><CopyableCode code="dailyRestingHeartRate" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `daily-resting-heart-rate` daily data type collection. (id: DailyRestingHeartRate)</td>
</tr>
<tr>
    <td><CopyableCode code="dailySleepTemperatureDerivations" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `daily-sleep-temperature-derivations` daily data type collection. (id: DailySleepTemperatureDerivations)</td>
</tr>
<tr>
    <td><CopyableCode code="dailyVo2Max" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `daily-vo2-max` daily data type collection. (id: DailyVO2Max)</td>
</tr>
<tr>
    <td><CopyableCode code="dataSource" /></td>
    <td><code>object</code></td>
    <td>Optional. Data source information for the metric (id: DataSource)</td>
</tr>
<tr>
    <td><CopyableCode code="distance" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `distance` interval data type collection. (id: Distance)</td>
</tr>
<tr>
    <td><CopyableCode code="electrocardiogram" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `electrocardiogram` session data type collection. (id: Electrocardiogram)</td>
</tr>
<tr>
    <td><CopyableCode code="exercise" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `exercise` session data type collection. (id: Exercise)</td>
</tr>
<tr>
    <td><CopyableCode code="floors" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `floors` interval data type collection. (id: Floors)</td>
</tr>
<tr>
    <td><CopyableCode code="food" /></td>
    <td><code>object</code></td>
    <td>Optional. The food details. (id: Food)</td>
</tr>
<tr>
    <td><CopyableCode code="foodMeasurementUnit" /></td>
    <td><code>object</code></td>
    <td>Optional. The food measurement unit details. (id: FoodMeasurementUnit)</td>
</tr>
<tr>
    <td><CopyableCode code="heartRate" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `heart-rate` sample data type collection. (id: HeartRate)</td>
</tr>
<tr>
    <td><CopyableCode code="heartRateVariability" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `heart-rate-variability` sample data type collection. (id: HeartRateVariability)</td>
</tr>
<tr>
    <td><CopyableCode code="height" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `height` sample data type collection. (id: Height)</td>
</tr>
<tr>
    <td><CopyableCode code="hydrationLog" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `hydration-log` session data type collection. (id: HydrationLog)</td>
</tr>
<tr>
    <td><CopyableCode code="irregularRhythmNotification" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `irregular-rhythm-notification` session data type collection. (id: IrregularRhythmNotification)</td>
</tr>
<tr>
    <td><CopyableCode code="nutritionLog" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `nutrition-log` session data type collection. (id: NutritionLog)</td>
</tr>
<tr>
    <td><CopyableCode code="oxygenSaturation" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `oxygen-saturation` sample data type collection. (id: OxygenSaturation)</td>
</tr>
<tr>
    <td><CopyableCode code="respiratoryRateSleepSummary" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `respiratory-rate-sleep-summary` sample data type collection. (id: RespiratoryRateSleepSummary)</td>
</tr>
<tr>
    <td><CopyableCode code="runVo2Max" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `run-vo2-max` sample data type collection. (id: RunVO2Max)</td>
</tr>
<tr>
    <td><CopyableCode code="sedentaryPeriod" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `sedentary-period` interval data type collection. (id: SedentaryPeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="sleep" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `sleep` session data type collection. (id: Sleep)</td>
</tr>
<tr>
    <td><CopyableCode code="steps" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `steps` interval data type collection. (id: Steps)</td>
</tr>
<tr>
    <td><CopyableCode code="swimLengthsData" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `swim-lengths-data` interval data type collection. (id: SwimLengthsData)</td>
</tr>
<tr>
    <td><CopyableCode code="timeInHeartRateZone" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `time-in-heart-rate-zone` interval data type collection. (id: TimeInHeartRateZone)</td>
</tr>
<tr>
    <td><CopyableCode code="vo2Max" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `vo2-max` sample data type collection. (id: VO2Max)</td>
</tr>
<tr>
    <td><CopyableCode code="weight" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `weight` sample data type collection. (id: Weight)</td>
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
    <td>Identifier. Data point name, only supported for the subset of identifiable data types. For the majority of the data types, individual data points do not need to be identified and this field would be empty. Format: `users/&#123;user&#125;/dataTypes/&#123;data_type&#125;/dataPoints/&#123;data_point&#125;` Example: `users/abcd1234/dataTypes/sleep/dataPoints/a1b2c3d4-e5f6-7890-1234-567890abcdef` The `&#123;user&#125;` ID is a system-generated identifier, as described in Identity.health_user_id. The `&#123;data_type&#125;` ID corresponds to the kebab-case version of the field names in the DataPoint data union field, e.g. `heart-rate` for the `heart_rate` field. The `&#123;data_point&#125;` ID can be client-provided or system-generated. If client-provided, it must be a string of 4-63 characters, containing only lowercase letters, numbers, and hyphens.</td>
</tr>
<tr>
    <td><CopyableCode code="activeEnergyBurned" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `active-energy-burned` interval data type collection. (id: ActiveEnergyBurned)</td>
</tr>
<tr>
    <td><CopyableCode code="activeMinutes" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `active-minutes` interval data type collection. (id: ActiveMinutes)</td>
</tr>
<tr>
    <td><CopyableCode code="activeZoneMinutes" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `active-zone-minutes` interval data type collection, measured in minutes. (id: ActiveZoneMinutes)</td>
</tr>
<tr>
    <td><CopyableCode code="activityLevel" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `activity-level` daily data type collection. (id: ActivityLevel)</td>
</tr>
<tr>
    <td><CopyableCode code="altitude" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `altitude` interval data type collection. (id: Altitude)</td>
</tr>
<tr>
    <td><CopyableCode code="basalEnergyBurned" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `basal-energy-burned` interval data type collection. (id: BasalEnergyBurned)</td>
</tr>
<tr>
    <td><CopyableCode code="bloodGlucose" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `blood-glucose` sample data type collection. (id: BloodGlucose)</td>
</tr>
<tr>
    <td><CopyableCode code="bodyFat" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `body-fat` sample data type collection. (id: BodyFat)</td>
</tr>
<tr>
    <td><CopyableCode code="coreBodyTemperature" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `core-body-temperature` sample data type collection. (id: CoreBodyTemperature)</td>
</tr>
<tr>
    <td><CopyableCode code="dailyHeartRateVariability" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `daily-heart-rate-variability` daily data type collection. (id: DailyHeartRateVariability)</td>
</tr>
<tr>
    <td><CopyableCode code="dailyHeartRateZones" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `daily-heart-rate-zones` daily data type collection. (id: DailyHeartRateZones)</td>
</tr>
<tr>
    <td><CopyableCode code="dailyOxygenSaturation" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `daily-oxygen-saturation` daily data type collection. (id: DailyOxygenSaturation)</td>
</tr>
<tr>
    <td><CopyableCode code="dailyRespiratoryRate" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `daily-respiratory-rate` daily data type collection. (id: DailyRespiratoryRate)</td>
</tr>
<tr>
    <td><CopyableCode code="dailyRestingHeartRate" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `daily-resting-heart-rate` daily data type collection. (id: DailyRestingHeartRate)</td>
</tr>
<tr>
    <td><CopyableCode code="dailySleepTemperatureDerivations" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `daily-sleep-temperature-derivations` daily data type collection. (id: DailySleepTemperatureDerivations)</td>
</tr>
<tr>
    <td><CopyableCode code="dailyVo2Max" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `daily-vo2-max` daily data type collection. (id: DailyVO2Max)</td>
</tr>
<tr>
    <td><CopyableCode code="dataSource" /></td>
    <td><code>object</code></td>
    <td>Optional. Data source information for the metric (id: DataSource)</td>
</tr>
<tr>
    <td><CopyableCode code="distance" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `distance` interval data type collection. (id: Distance)</td>
</tr>
<tr>
    <td><CopyableCode code="electrocardiogram" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `electrocardiogram` session data type collection. (id: Electrocardiogram)</td>
</tr>
<tr>
    <td><CopyableCode code="exercise" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `exercise` session data type collection. (id: Exercise)</td>
</tr>
<tr>
    <td><CopyableCode code="floors" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `floors` interval data type collection. (id: Floors)</td>
</tr>
<tr>
    <td><CopyableCode code="food" /></td>
    <td><code>object</code></td>
    <td>Optional. The food details. (id: Food)</td>
</tr>
<tr>
    <td><CopyableCode code="foodMeasurementUnit" /></td>
    <td><code>object</code></td>
    <td>Optional. The food measurement unit details. (id: FoodMeasurementUnit)</td>
</tr>
<tr>
    <td><CopyableCode code="heartRate" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `heart-rate` sample data type collection. (id: HeartRate)</td>
</tr>
<tr>
    <td><CopyableCode code="heartRateVariability" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `heart-rate-variability` sample data type collection. (id: HeartRateVariability)</td>
</tr>
<tr>
    <td><CopyableCode code="height" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `height` sample data type collection. (id: Height)</td>
</tr>
<tr>
    <td><CopyableCode code="hydrationLog" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `hydration-log` session data type collection. (id: HydrationLog)</td>
</tr>
<tr>
    <td><CopyableCode code="irregularRhythmNotification" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `irregular-rhythm-notification` session data type collection. (id: IrregularRhythmNotification)</td>
</tr>
<tr>
    <td><CopyableCode code="nutritionLog" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `nutrition-log` session data type collection. (id: NutritionLog)</td>
</tr>
<tr>
    <td><CopyableCode code="oxygenSaturation" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `oxygen-saturation` sample data type collection. (id: OxygenSaturation)</td>
</tr>
<tr>
    <td><CopyableCode code="respiratoryRateSleepSummary" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `respiratory-rate-sleep-summary` sample data type collection. (id: RespiratoryRateSleepSummary)</td>
</tr>
<tr>
    <td><CopyableCode code="runVo2Max" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `run-vo2-max` sample data type collection. (id: RunVO2Max)</td>
</tr>
<tr>
    <td><CopyableCode code="sedentaryPeriod" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `sedentary-period` interval data type collection. (id: SedentaryPeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="sleep" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `sleep` session data type collection. (id: Sleep)</td>
</tr>
<tr>
    <td><CopyableCode code="steps" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `steps` interval data type collection. (id: Steps)</td>
</tr>
<tr>
    <td><CopyableCode code="swimLengthsData" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `swim-lengths-data` interval data type collection. (id: SwimLengthsData)</td>
</tr>
<tr>
    <td><CopyableCode code="timeInHeartRateZone" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `time-in-heart-rate-zone` interval data type collection. (id: TimeInHeartRateZone)</td>
</tr>
<tr>
    <td><CopyableCode code="vo2Max" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `vo2-max` sample data type collection. (id: VO2Max)</td>
</tr>
<tr>
    <td><CopyableCode code="weight" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `weight` sample data type collection. (id: Weight)</td>
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
    <td><a href="#parameter-usersId"><code>usersId</code></a>, <a href="#parameter-dataTypesId"><code>dataTypesId</code></a>, <a href="#parameter-dataPointsId"><code>dataPointsId</code></a></td>
    <td></td>
    <td>Get a single identifyable data point.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-usersId"><code>usersId</code></a>, <a href="#parameter-dataTypesId"><code>dataTypesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Query user health and fitness data points.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-usersId"><code>usersId</code></a>, <a href="#parameter-dataTypesId"><code>dataTypesId</code></a></td>
    <td></td>
    <td>Creates a single identifiable data point.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-usersId"><code>usersId</code></a>, <a href="#parameter-dataTypesId"><code>dataTypesId</code></a>, <a href="#parameter-dataPointsId"><code>dataPointsId</code></a></td>
    <td></td>
    <td>Updates a single identifiable data point. If a data point with the specified `name` is not found, the request will fail.</td>
</tr>
<tr>
    <td><a href="#batch_delete"><CopyableCode code="batch_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-usersId"><code>usersId</code></a>, <a href="#parameter-dataTypesId"><code>dataTypesId</code></a></td>
    <td></td>
    <td>Delete a batch of identifyable data points.</td>
</tr>
<tr>
    <td><a href="#reconcile"><CopyableCode code="reconcile" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-usersId"><code>usersId</code></a>, <a href="#parameter-dataTypesId"><code>dataTypesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-dataSourceFamily"><code>dataSourceFamily</code></a></td>
    <td>Reconcile data points from multiple data sources into a single data stream.</td>
</tr>
<tr>
    <td><a href="#export_exercise_tcx"><CopyableCode code="export_exercise_tcx" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-usersId"><code>usersId</code></a>, <a href="#parameter-dataTypesId"><code>dataTypesId</code></a>, <a href="#parameter-dataPointsId"><code>dataPointsId</code></a></td>
    <td><a href="#parameter-partialData"><code>partialData</code></a></td>
    <td>Exports exercise data in TCX format. **IMPORTANT:** HTTP clients must append `?alt=media` to the request URL to download the raw TCX file. Example: `https://health.googleapis.com/v4/users/me/dataTypes/exercise/dataPoints/EXERCISE_ID:exportExerciseTcx?alt=media` Without `alt=media`, the server returns a JSON response (`ExportExerciseTcxResponse`) which is intended primarily for gRPC clients. **Note:** While the Authorization section below states that any one of the listed scopes is accepted, this specific method requires the user to provide both one of the `activity_and_fitness` scopes (`normal` or `readonly`) AND one of the `location` scopes (`normal` or `readonly`) in their access token to succeed.</td>
</tr>
<tr>
    <td><a href="#roll_up"><CopyableCode code="roll_up" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-usersId"><code>usersId</code></a>, <a href="#parameter-dataTypesId"><code>dataTypesId</code></a></td>
    <td></td>
    <td>Roll up data points over physical time intervals for supported data types.</td>
</tr>
<tr>
    <td><a href="#daily_roll_up"><CopyableCode code="daily_roll_up" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-usersId"><code>usersId</code></a>, <a href="#parameter-dataTypesId"><code>dataTypesId</code></a></td>
    <td></td>
    <td>Roll up data points over civil time intervals for supported data types.</td>
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
<tr id="parameter-dataPointsId">
    <td><CopyableCode code="dataPointsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-dataTypesId">
    <td><CopyableCode code="dataTypesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-usersId">
    <td><CopyableCode code="usersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-dataSourceFamily">
    <td><CopyableCode code="dataSourceFamily" /></td>
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
<tr id="parameter-partialData">
    <td><CopyableCode code="partialData" /></td>
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

Get a single identifyable data point.

```sql
SELECT
name,
activeEnergyBurned,
activeMinutes,
activeZoneMinutes,
activityLevel,
altitude,
basalEnergyBurned,
bloodGlucose,
bodyFat,
coreBodyTemperature,
dailyHeartRateVariability,
dailyHeartRateZones,
dailyOxygenSaturation,
dailyRespiratoryRate,
dailyRestingHeartRate,
dailySleepTemperatureDerivations,
dailyVo2Max,
dataSource,
distance,
electrocardiogram,
exercise,
floors,
food,
foodMeasurementUnit,
heartRate,
heartRateVariability,
height,
hydrationLog,
irregularRhythmNotification,
nutritionLog,
oxygenSaturation,
respiratoryRateSleepSummary,
runVo2Max,
sedentaryPeriod,
sleep,
steps,
swimLengthsData,
timeInHeartRateZone,
vo2Max,
weight
FROM google.health.data_points
WHERE usersId = '{{ usersId }}' -- required
AND dataTypesId = '{{ dataTypesId }}' -- required
AND dataPointsId = '{{ dataPointsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Query user health and fitness data points.

```sql
SELECT
name,
activeEnergyBurned,
activeMinutes,
activeZoneMinutes,
activityLevel,
altitude,
basalEnergyBurned,
bloodGlucose,
bodyFat,
coreBodyTemperature,
dailyHeartRateVariability,
dailyHeartRateZones,
dailyOxygenSaturation,
dailyRespiratoryRate,
dailyRestingHeartRate,
dailySleepTemperatureDerivations,
dailyVo2Max,
dataSource,
distance,
electrocardiogram,
exercise,
floors,
food,
foodMeasurementUnit,
heartRate,
heartRateVariability,
height,
hydrationLog,
irregularRhythmNotification,
nutritionLog,
oxygenSaturation,
respiratoryRateSleepSummary,
runVo2Max,
sedentaryPeriod,
sleep,
steps,
swimLengthsData,
timeInHeartRateZone,
vo2Max,
weight
FROM google.health.data_points
WHERE usersId = '{{ usersId }}' -- required
AND dataTypesId = '{{ dataTypesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
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

Creates a single identifiable data point.

```sql
INSERT INTO google.health.data_points (
data__activeEnergyBurned,
data__heartRate,
data__dailyVo2Max,
data__steps,
data__runVo2Max,
data__vo2Max,
data__dailyRestingHeartRate,
data__bloodGlucose,
data__activeMinutes,
data__dailyHeartRateVariability,
data__oxygenSaturation,
data__hydrationLog,
data__nutritionLog,
data__heartRateVariability,
data__weight,
data__sleep,
data__dailyOxygenSaturation,
data__food,
data__altitude,
data__swimLengthsData,
data__basalEnergyBurned,
data__dailyRespiratoryRate,
data__irregularRhythmNotification,
data__distance,
data__exercise,
data__floors,
data__respiratoryRateSleepSummary,
data__foodMeasurementUnit,
data__activityLevel,
data__timeInHeartRateZone,
data__dailySleepTemperatureDerivations,
data__height,
data__name,
data__electrocardiogram,
data__activeZoneMinutes,
data__coreBodyTemperature,
data__sedentaryPeriod,
data__dailyHeartRateZones,
data__dataSource,
data__bodyFat,
usersId,
dataTypesId
)
SELECT 
'{{ activeEnergyBurned }}',
'{{ heartRate }}',
'{{ dailyVo2Max }}',
'{{ steps }}',
'{{ runVo2Max }}',
'{{ vo2Max }}',
'{{ dailyRestingHeartRate }}',
'{{ bloodGlucose }}',
'{{ activeMinutes }}',
'{{ dailyHeartRateVariability }}',
'{{ oxygenSaturation }}',
'{{ hydrationLog }}',
'{{ nutritionLog }}',
'{{ heartRateVariability }}',
'{{ weight }}',
'{{ sleep }}',
'{{ dailyOxygenSaturation }}',
'{{ food }}',
'{{ altitude }}',
'{{ swimLengthsData }}',
'{{ basalEnergyBurned }}',
'{{ dailyRespiratoryRate }}',
'{{ irregularRhythmNotification }}',
'{{ distance }}',
'{{ exercise }}',
'{{ floors }}',
'{{ respiratoryRateSleepSummary }}',
'{{ foodMeasurementUnit }}',
'{{ activityLevel }}',
'{{ timeInHeartRateZone }}',
'{{ dailySleepTemperatureDerivations }}',
'{{ height }}',
'{{ name }}',
'{{ electrocardiogram }}',
'{{ activeZoneMinutes }}',
'{{ coreBodyTemperature }}',
'{{ sedentaryPeriod }}',
'{{ dailyHeartRateZones }}',
'{{ dataSource }}',
'{{ bodyFat }}',
'{{ usersId }}',
'{{ dataTypesId }}'
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
- name: data_points
  props:
    - name: usersId
      value: "{{ usersId }}"
      description: Required parameter for the data_points resource.
    - name: dataTypesId
      value: "{{ dataTypesId }}"
      description: Required parameter for the data_points resource.
    - name: activeEnergyBurned
      description: |
        Optional. Data for points in the \`active-energy-burned\` interval data type collection.
      value:
        interval:
          civilEndTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
          civilStartTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
        kcal: {{ kcal }}
    - name: heartRate
      description: |
        Optional. Data for points in the \`heart-rate\` sample data type collection.
      value:
        metadata:
          motionContext: "{{ motionContext }}"
          sensorLocation: "{{ sensorLocation }}"
        sampleTime:
          physicalTime: "{{ physicalTime }}"
          civilTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          utcOffset: "{{ utcOffset }}"
        beatsPerMinute: "{{ beatsPerMinute }}"
    - name: dailyVo2Max
      description: |
        Optional. Data for points in the \`daily-vo2-max\` daily data type collection.
      value:
        estimated: {{ estimated }}
        vo2Max: {{ vo2Max }}
        cardioFitnessLevel: "{{ cardioFitnessLevel }}"
        date:
          month: {{ month }}
          day: {{ day }}
          year: {{ year }}
        vo2MaxCovariance: {{ vo2MaxCovariance }}
    - name: steps
      description: |
        Optional. Data for points in the \`steps\` interval data type collection.
      value:
        interval:
          civilEndTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
          civilStartTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
        count: "{{ count }}"
    - name: runVo2Max
      description: |
        Optional. Data for points in the \`run-vo2-max\` sample data type collection.
      value:
        sampleTime:
          physicalTime: "{{ physicalTime }}"
          civilTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          utcOffset: "{{ utcOffset }}"
        runVo2Max: {{ runVo2Max }}
    - name: vo2Max
      description: |
        Optional. Data for points in the \`vo2-max\` sample data type collection.
      value:
        sampleTime:
          physicalTime: "{{ physicalTime }}"
          civilTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          utcOffset: "{{ utcOffset }}"
        vo2Max: {{ vo2Max }}
        measurementMethod: "{{ measurementMethod }}"
    - name: dailyRestingHeartRate
      description: |
        Optional. Data for points in the \`daily-resting-heart-rate\` daily data type collection.
      value:
        dailyRestingHeartRateMetadata:
          calculationMethod: "{{ calculationMethod }}"
        date:
          month: {{ month }}
          day: {{ day }}
          year: {{ year }}
        beatsPerMinute: "{{ beatsPerMinute }}"
    - name: bloodGlucose
      description: |
        Optional. Data for points in the \`blood-glucose\` sample data type collection.
      value:
        measurementTiming: "{{ measurementTiming }}"
        specimen: "{{ specimen }}"
        measurementSource: "{{ measurementSource }}"
        notes: "{{ notes }}"
        bloodGlucoseMilligramsPerDeciliter: {{ bloodGlucoseMilligramsPerDeciliter }}
        mealType: "{{ mealType }}"
        sampleTime:
          physicalTime: "{{ physicalTime }}"
          civilTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          utcOffset: "{{ utcOffset }}"
    - name: activeMinutes
      description: |
        Optional. Data for points in the \`active-minutes\` interval data type collection.
      value:
        interval:
          civilEndTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
          civilStartTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
        activeMinutesByActivityLevel:
          - activeMinutes: "{{ activeMinutes }}"
            activityLevel: "{{ activityLevel }}"
    - name: dailyHeartRateVariability
      description: |
        Optional. Data for points in the \`daily-heart-rate-variability\` daily data type collection.
      value:
        date:
          month: {{ month }}
          day: {{ day }}
          year: {{ year }}
        averageHeartRateVariabilityMilliseconds: {{ averageHeartRateVariabilityMilliseconds }}
        entropy: {{ entropy }}
        deepSleepRootMeanSquareOfSuccessiveDifferencesMilliseconds: {{ deepSleepRootMeanSquareOfSuccessiveDifferencesMilliseconds }}
        nonRemHeartRateBeatsPerMinute: "{{ nonRemHeartRateBeatsPerMinute }}"
    - name: oxygenSaturation
      description: |
        Optional. Data for points in the \`oxygen-saturation\` sample data type collection.
      value:
        sampleTime:
          physicalTime: "{{ physicalTime }}"
          civilTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          utcOffset: "{{ utcOffset }}"
        percentage: {{ percentage }}
    - name: hydrationLog
      description: |
        Optional. Data for points in the \`hydration-log\` session data type collection.
      value:
        interval:
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
          civilEndTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
          civilStartTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
        amountConsumed:
          milliliters: {{ milliliters }}
          userProvidedUnit: "{{ userProvidedUnit }}"
    - name: nutritionLog
      description: |
        Optional. Data for points in the \`nutrition-log\` session data type collection.
      value:
        nutrients:
          - quantity:
              grams: {{ grams }}
              userProvidedUnit: "{{ userProvidedUnit }}"
            nutrient: "{{ nutrient }}"
        interval:
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
          civilEndTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
          civilStartTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
        serving:
          foodMeasurementUnitDisplayName: "{{ foodMeasurementUnitDisplayName }}"
          amount: {{ amount }}
          foodMeasurementUnit: "{{ foodMeasurementUnit }}"
        foodDisplayName: "{{ foodDisplayName }}"
        food: "{{ food }}"
        energy:
          kcal: {{ kcal }}
          userProvidedUnit: "{{ userProvidedUnit }}"
        totalCarbohydrate:
          grams: {{ grams }}
          userProvidedUnit: "{{ userProvidedUnit }}"
        energyFromFat:
          kcal: {{ kcal }}
          userProvidedUnit: "{{ userProvidedUnit }}"
        mealType: "{{ mealType }}"
        totalFat:
          grams: {{ grams }}
          userProvidedUnit: "{{ userProvidedUnit }}"
    - name: heartRateVariability
      description: |
        Optional. Data for points in the \`heart-rate-variability\` sample data type collection.
      value:
        sampleTime:
          physicalTime: "{{ physicalTime }}"
          civilTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          utcOffset: "{{ utcOffset }}"
        rootMeanSquareOfSuccessiveDifferencesMilliseconds: {{ rootMeanSquareOfSuccessiveDifferencesMilliseconds }}
        standardDeviationMilliseconds: {{ standardDeviationMilliseconds }}
    - name: weight
      description: |
        Optional. Data for points in the \`weight\` sample data type collection.
      value:
        weightGrams: {{ weightGrams }}
        sampleTime:
          physicalTime: "{{ physicalTime }}"
          civilTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          utcOffset: "{{ utcOffset }}"
        notes: "{{ notes }}"
    - name: sleep
      description: |
        Optional. Data for points in the \`sleep\` session data type collection.
      value:
        interval:
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
          civilEndTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
          civilStartTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
        updateTime: "{{ updateTime }}"
        type: "{{ type }}"
        stages:
          - createTime: "{{ createTime }}"
            startTime: "{{ startTime }}"
            startUtcOffset: "{{ startUtcOffset }}"
            type: "{{ type }}"
            endTime: "{{ endTime }}"
            endUtcOffset: "{{ endUtcOffset }}"
            updateTime: "{{ updateTime }}"
        metadata:
          processed: {{ processed }}
          stagesStatus: "{{ stagesStatus }}"
          externalId: "{{ externalId }}"
          nap: {{ nap }}
          manuallyEdited: {{ manuallyEdited }}
          mainSleep: {{ mainSleep }}
        createTime: "{{ createTime }}"
        outOfBedSegments:
          - endTime: "{{ endTime }}"
            endUtcOffset: "{{ endUtcOffset }}"
            startTime: "{{ startTime }}"
            startUtcOffset: "{{ startUtcOffset }}"
        summary:
          minutesAfterWakeUp: "{{ minutesAfterWakeUp }}"
          minutesAsleep: "{{ minutesAsleep }}"
          stagesSummary:
            - minutes: "{{ minutes }}"
              count: "{{ count }}"
              type: "{{ type }}"
          minutesAwake: "{{ minutesAwake }}"
          minutesInSleepPeriod: "{{ minutesInSleepPeriod }}"
          minutesToFallAsleep: "{{ minutesToFallAsleep }}"
    - name: dailyOxygenSaturation
      description: |
        Optional. Data for points in the \`daily-oxygen-saturation\` daily data type collection.
      value:
        standardDeviationPercentage: {{ standardDeviationPercentage }}
        date:
          month: {{ month }}
          day: {{ day }}
          year: {{ year }}
        lowerBoundPercentage: {{ lowerBoundPercentage }}
        upperBoundPercentage: {{ upperBoundPercentage }}
        averagePercentage: {{ averagePercentage }}
    - name: food
      description: |
        Optional. The food details.
      value:
        languageCode: "{{ languageCode }}"
        totalCarbohydrate:
          grams: {{ grams }}
          userProvidedUnit: "{{ userProvidedUnit }}"
        defaultServing:
          multiplier: {{ multiplier }}
          foodMeasurementUnitDisplayNamePlural: "{{ foodMeasurementUnitDisplayNamePlural }}"
          foodMeasurementUnit: "{{ foodMeasurementUnit }}"
          foodMeasurementUnitDisplayName: "{{ foodMeasurementUnitDisplayName }}"
          amount: {{ amount }}
        brand: "{{ brand }}"
        energyFromFat:
          kcal: {{ kcal }}
          userProvidedUnit: "{{ userProvidedUnit }}"
        energyAvg:
          kcal: {{ kcal }}
          userProvidedUnit: "{{ userProvidedUnit }}"
        displayName: "{{ displayName }}"
        accessLevel: "{{ accessLevel }}"
        energyMax:
          kcal: {{ kcal }}
          userProvidedUnit: "{{ userProvidedUnit }}"
        nutrients:
          - quantity:
              grams: {{ grams }}
              userProvidedUnit: "{{ userProvidedUnit }}"
            nutrient: "{{ nutrient }}"
        description: "{{ description }}"
        servings:
          - multiplier: {{ multiplier }}
            foodMeasurementUnitDisplayNamePlural: "{{ foodMeasurementUnitDisplayNamePlural }}"
            foodMeasurementUnit: "{{ foodMeasurementUnit }}"
            foodMeasurementUnitDisplayName: "{{ foodMeasurementUnitDisplayName }}"
            amount: {{ amount }}
        totalFat:
          grams: {{ grams }}
          userProvidedUnit: "{{ userProvidedUnit }}"
        energyMin:
          kcal: {{ kcal }}
          userProvidedUnit: "{{ userProvidedUnit }}"
        mealType: "{{ mealType }}"
    - name: altitude
      description: |
        Optional. Data for points in the \`altitude\` interval data type collection.
      value:
        interval:
          civilEndTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
          civilStartTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
        gainMillimeters: "{{ gainMillimeters }}"
    - name: swimLengthsData
      description: |
        Optional. Data for points in the \`swim-lengths-data\` interval data type collection.
      value:
        interval:
          civilEndTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
          civilStartTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
        strokeCount: "{{ strokeCount }}"
        swimStrokeType: "{{ swimStrokeType }}"
    - name: basalEnergyBurned
      description: |
        Optional. Data for points in the \`basal-energy-burned\` interval data type collection.
      value:
        interval:
          civilEndTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
          civilStartTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
        kcal: {{ kcal }}
    - name: dailyRespiratoryRate
      description: |
        Optional. Data for points in the \`daily-respiratory-rate\` daily data type collection.
      value:
        breathsPerMinute: {{ breathsPerMinute }}
        date:
          month: {{ month }}
          day: {{ day }}
          year: {{ year }}
    - name: irregularRhythmNotification
      description: |
        Optional. Data for points in the \`irregular-rhythm-notification\` session data type collection.
      value:
        alertWindows:
          - endTime: "{{ endTime }}"
            endUtcOffset: "{{ endUtcOffset }}"
            civilStartTime:
              time:
                seconds: {{ seconds }}
                minutes: {{ minutes }}
                nanos: {{ nanos }}
                hours: {{ hours }}
              date:
                month: {{ month }}
                day: {{ day }}
                year: {{ year }}
            heartBeats: "{{ heartBeats }}"
            startTime: "{{ startTime }}"
            startUtcOffset: "{{ startUtcOffset }}"
            positive: {{ positive }}
            civilEndTime:
              time:
                seconds: {{ seconds }}
                minutes: {{ minutes }}
                nanos: {{ nanos }}
                hours: {{ hours }}
              date:
                month: {{ month }}
                day: {{ day }}
                year: {{ year }}
        interval:
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
          civilEndTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
          civilStartTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
        medicalDeviceInfo:
          algorithmVersion: "{{ algorithmVersion }}"
          serviceVersion: "{{ serviceVersion }}"
          firmwareVersion: "{{ firmwareVersion }}"
          featureVersion: "{{ featureVersion }}"
          deviceModel: "{{ deviceModel }}"
    - name: distance
      description: |
        Optional. Data for points in the \`distance\` interval data type collection.
      value:
        interval:
          civilEndTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
          civilStartTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
        millimeters: "{{ millimeters }}"
    - name: exercise
      description: |
        Optional. Data for points in the \`exercise\` session data type collection.
      value:
        splits:
          - endTime: "{{ endTime }}"
            endUtcOffset: "{{ endUtcOffset }}"
            activeDuration: "{{ activeDuration }}"
            metricsSummary:
              runVo2Max: {{ runVo2Max }}
              mobilityMetrics:
                avgStrideLengthMillimeters: "{{ avgStrideLengthMillimeters }}"
                avgVerticalRatio: {{ avgVerticalRatio }}
                avgCadenceStepsPerMinute: {{ avgCadenceStepsPerMinute }}
                avgVerticalOscillationMillimeters: "{{ avgVerticalOscillationMillimeters }}"
                avgGroundContactTimeDuration: "{{ avgGroundContactTimeDuration }}"
              activeZoneMinutes: "{{ activeZoneMinutes }}"
              steps: "{{ steps }}"
              averageHeartRateBeatsPerMinute: "{{ averageHeartRateBeatsPerMinute }}"
              distanceMillimeters: {{ distanceMillimeters }}
              heartRateZoneDurations:
                lightTime: "{{ lightTime }}"
                vigorousTime: "{{ vigorousTime }}"
                moderateTime: "{{ moderateTime }}"
                peakTime: "{{ peakTime }}"
              averageSpeedMillimetersPerSecond: {{ averageSpeedMillimetersPerSecond }}
              caloriesKcal: {{ caloriesKcal }}
              totalSwimLengths: {{ totalSwimLengths }}
              averagePaceSecondsPerMeter: {{ averagePaceSecondsPerMeter }}
              elevationGainMillimeters: {{ elevationGainMillimeters }}
            splitType: "{{ splitType }}"
            startTime: "{{ startTime }}"
            startUtcOffset: "{{ startUtcOffset }}"
        createTime: "{{ createTime }}"
        notes: "{{ notes }}"
        exerciseMetadata:
          hasGps: {{ hasGps }}
          poolLengthMillimeters: "{{ poolLengthMillimeters }}"
        activeDuration: "{{ activeDuration }}"
        exerciseEvents:
          - exerciseEventType: "{{ exerciseEventType }}"
            eventTime: "{{ eventTime }}"
            eventUtcOffset: "{{ eventUtcOffset }}"
        splitSummaries:
          - endTime: "{{ endTime }}"
            endUtcOffset: "{{ endUtcOffset }}"
            activeDuration: "{{ activeDuration }}"
            metricsSummary:
              runVo2Max: {{ runVo2Max }}
              mobilityMetrics:
                avgStrideLengthMillimeters: "{{ avgStrideLengthMillimeters }}"
                avgVerticalRatio: {{ avgVerticalRatio }}
                avgCadenceStepsPerMinute: {{ avgCadenceStepsPerMinute }}
                avgVerticalOscillationMillimeters: "{{ avgVerticalOscillationMillimeters }}"
                avgGroundContactTimeDuration: "{{ avgGroundContactTimeDuration }}"
              activeZoneMinutes: "{{ activeZoneMinutes }}"
              steps: "{{ steps }}"
              averageHeartRateBeatsPerMinute: "{{ averageHeartRateBeatsPerMinute }}"
              distanceMillimeters: {{ distanceMillimeters }}
              heartRateZoneDurations:
                lightTime: "{{ lightTime }}"
                vigorousTime: "{{ vigorousTime }}"
                moderateTime: "{{ moderateTime }}"
                peakTime: "{{ peakTime }}"
              averageSpeedMillimetersPerSecond: {{ averageSpeedMillimetersPerSecond }}
              caloriesKcal: {{ caloriesKcal }}
              totalSwimLengths: {{ totalSwimLengths }}
              averagePaceSecondsPerMeter: {{ averagePaceSecondsPerMeter }}
              elevationGainMillimeters: {{ elevationGainMillimeters }}
            splitType: "{{ splitType }}"
            startTime: "{{ startTime }}"
            startUtcOffset: "{{ startUtcOffset }}"
        displayName: "{{ displayName }}"
        interval:
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
          civilEndTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
          civilStartTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
        metricsSummary:
          runVo2Max: {{ runVo2Max }}
          mobilityMetrics:
            avgStrideLengthMillimeters: "{{ avgStrideLengthMillimeters }}"
            avgVerticalRatio: {{ avgVerticalRatio }}
            avgCadenceStepsPerMinute: {{ avgCadenceStepsPerMinute }}
            avgVerticalOscillationMillimeters: "{{ avgVerticalOscillationMillimeters }}"
            avgGroundContactTimeDuration: "{{ avgGroundContactTimeDuration }}"
          activeZoneMinutes: "{{ activeZoneMinutes }}"
          steps: "{{ steps }}"
          averageHeartRateBeatsPerMinute: "{{ averageHeartRateBeatsPerMinute }}"
          distanceMillimeters: {{ distanceMillimeters }}
          heartRateZoneDurations:
            lightTime: "{{ lightTime }}"
            vigorousTime: "{{ vigorousTime }}"
            moderateTime: "{{ moderateTime }}"
            peakTime: "{{ peakTime }}"
          averageSpeedMillimetersPerSecond: {{ averageSpeedMillimetersPerSecond }}
          caloriesKcal: {{ caloriesKcal }}
          totalSwimLengths: {{ totalSwimLengths }}
          averagePaceSecondsPerMeter: {{ averagePaceSecondsPerMeter }}
          elevationGainMillimeters: {{ elevationGainMillimeters }}
        updateTime: "{{ updateTime }}"
        exerciseType: "{{ exerciseType }}"
    - name: floors
      description: |
        Optional. Data for points in the \`floors\` interval data type collection.
      value:
        interval:
          civilEndTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
          civilStartTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
        count: "{{ count }}"
    - name: respiratoryRateSleepSummary
      description: |
        Optional. Data for points in the \`respiratory-rate-sleep-summary\` sample data type collection.
      value:
        sampleTime:
          physicalTime: "{{ physicalTime }}"
          civilTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          utcOffset: "{{ utcOffset }}"
        lightSleepStats:
          signalToNoise: {{ signalToNoise }}
          breathsPerMinute: {{ breathsPerMinute }}
          standardDeviation: {{ standardDeviation }}
        deepSleepStats:
          signalToNoise: {{ signalToNoise }}
          breathsPerMinute: {{ breathsPerMinute }}
          standardDeviation: {{ standardDeviation }}
        remSleepStats:
          signalToNoise: {{ signalToNoise }}
          breathsPerMinute: {{ breathsPerMinute }}
          standardDeviation: {{ standardDeviation }}
        fullSleepStats:
          signalToNoise: {{ signalToNoise }}
          breathsPerMinute: {{ breathsPerMinute }}
          standardDeviation: {{ standardDeviation }}
    - name: foodMeasurementUnit
      description: |
        Optional. The food measurement unit details.
      value:
        displayName: "{{ displayName }}"
        pluralDisplayName: "{{ pluralDisplayName }}"
    - name: activityLevel
      description: |
        Optional. Data for points in the \`activity-level\` daily data type collection.
      value:
        interval:
          civilEndTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
          civilStartTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
        activityLevelType: "{{ activityLevelType }}"
    - name: timeInHeartRateZone
      description: |
        Optional. Data for points in the \`time-in-heart-rate-zone\` interval data type collection.
      value:
        interval:
          civilEndTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
          civilStartTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
        heartRateZoneType: "{{ heartRateZoneType }}"
    - name: dailySleepTemperatureDerivations
      description: |
        Optional. Data for points in the \`daily-sleep-temperature-derivations\` daily data type collection.
      value:
        date:
          month: {{ month }}
          day: {{ day }}
          year: {{ year }}
        baselineTemperatureCelsius: {{ baselineTemperatureCelsius }}
        nightlyTemperatureCelsius: {{ nightlyTemperatureCelsius }}
        relativeNightlyStddev30dCelsius: {{ relativeNightlyStddev30dCelsius }}
    - name: height
      description: |
        Optional. Data for points in the \`height\` sample data type collection.
      value:
        heightMillimeters: "{{ heightMillimeters }}"
        sampleTime:
          physicalTime: "{{ physicalTime }}"
          civilTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          utcOffset: "{{ utcOffset }}"
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. Data point name, only supported for the subset of identifiable data types. For the majority of the data types, individual data points do not need to be identified and this field would be empty. Format: \`users/{user}/dataTypes/{data_type}/dataPoints/{data_point}\` Example: \`users/abcd1234/dataTypes/sleep/dataPoints/a1b2c3d4-e5f6-7890-1234-567890abcdef\` The \`{user}\` ID is a system-generated identifier, as described in Identity.health_user_id. The \`{data_type}\` ID corresponds to the kebab-case version of the field names in the DataPoint data union field, e.g. \`heart-rate\` for the \`heart_rate\` field. The \`{data_point}\` ID can be client-provided or system-generated. If client-provided, it must be a string of 4-63 characters, containing only lowercase letters, numbers, and hyphens.
    - name: electrocardiogram
      description: |
        Optional. Data for points in the \`electrocardiogram\` session data type collection.
      value:
        beatsPerMinuteAvg: "{{ beatsPerMinuteAvg }}"
        millivoltsScalingFactor: {{ millivoltsScalingFactor }}
        interval:
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
          civilEndTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
          civilStartTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
        resultClassification: "{{ resultClassification }}"
        waveformSamples:
          - {{ waveformSamples }}
        samplingFrequencyHertz: {{ samplingFrequencyHertz }}
        leadNumber: {{ leadNumber }}
        medicalDeviceInfo:
          algorithmVersion: "{{ algorithmVersion }}"
          serviceVersion: "{{ serviceVersion }}"
          firmwareVersion: "{{ firmwareVersion }}"
          featureVersion: "{{ featureVersion }}"
          deviceModel: "{{ deviceModel }}"
    - name: activeZoneMinutes
      description: |
        Optional. Data for points in the \`active-zone-minutes\` interval data type collection, measured in minutes.
      value:
        interval:
          civilEndTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
          civilStartTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
        activeZoneMinutes: "{{ activeZoneMinutes }}"
        heartRateZone: "{{ heartRateZone }}"
    - name: coreBodyTemperature
      description: |
        Optional. Data for points in the \`core-body-temperature\` sample data type collection.
      value:
        temperatureCelsius: {{ temperatureCelsius }}
        measurementLocation: "{{ measurementLocation }}"
        sampleTime:
          physicalTime: "{{ physicalTime }}"
          civilTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          utcOffset: "{{ utcOffset }}"
        id: "{{ id }}"
    - name: sedentaryPeriod
      description: |
        Optional. Data for points in the \`sedentary-period\` interval data type collection.
      value:
        interval:
          civilEndTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
          civilStartTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
    - name: dailyHeartRateZones
      description: |
        Optional. Data for points in the \`daily-heart-rate-zones\` daily data type collection.
      value:
        heartRateZones:
          - minBeatsPerMinute: "{{ minBeatsPerMinute }}"
            maxBeatsPerMinute: "{{ maxBeatsPerMinute }}"
            heartRateZoneType: "{{ heartRateZoneType }}"
        date:
          month: {{ month }}
          day: {{ day }}
          year: {{ year }}
    - name: dataSource
      description: |
        Optional. Data source information for the metric
      value:
        device:
          manufacturer: "{{ manufacturer }}"
          formFactor: "{{ formFactor }}"
          displayName: "{{ displayName }}"
        application:
          packageName: "{{ packageName }}"
          googleWebClientId: "{{ googleWebClientId }}"
          webClientId: "{{ webClientId }}"
        recordingMethod: "{{ recordingMethod }}"
        platform: "{{ platform }}"
    - name: bodyFat
      description: |
        Optional. Data for points in the \`body-fat\` sample data type collection.
      value:
        sampleTime:
          physicalTime: "{{ physicalTime }}"
          civilTime:
            time:
              seconds: {{ seconds }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              hours: {{ hours }}
            date:
              month: {{ month }}
              day: {{ day }}
              year: {{ year }}
          utcOffset: "{{ utcOffset }}"
        percentage: {{ percentage }}
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

Updates a single identifiable data point. If a data point with the specified `name` is not found, the request will fail.

```sql
UPDATE google.health.data_points
SET 
data__activeEnergyBurned = '{{ activeEnergyBurned }}',
data__heartRate = '{{ heartRate }}',
data__dailyVo2Max = '{{ dailyVo2Max }}',
data__steps = '{{ steps }}',
data__runVo2Max = '{{ runVo2Max }}',
data__vo2Max = '{{ vo2Max }}',
data__dailyRestingHeartRate = '{{ dailyRestingHeartRate }}',
data__bloodGlucose = '{{ bloodGlucose }}',
data__activeMinutes = '{{ activeMinutes }}',
data__dailyHeartRateVariability = '{{ dailyHeartRateVariability }}',
data__oxygenSaturation = '{{ oxygenSaturation }}',
data__hydrationLog = '{{ hydrationLog }}',
data__nutritionLog = '{{ nutritionLog }}',
data__heartRateVariability = '{{ heartRateVariability }}',
data__weight = '{{ weight }}',
data__sleep = '{{ sleep }}',
data__dailyOxygenSaturation = '{{ dailyOxygenSaturation }}',
data__food = '{{ food }}',
data__altitude = '{{ altitude }}',
data__swimLengthsData = '{{ swimLengthsData }}',
data__basalEnergyBurned = '{{ basalEnergyBurned }}',
data__dailyRespiratoryRate = '{{ dailyRespiratoryRate }}',
data__irregularRhythmNotification = '{{ irregularRhythmNotification }}',
data__distance = '{{ distance }}',
data__exercise = '{{ exercise }}',
data__floors = '{{ floors }}',
data__respiratoryRateSleepSummary = '{{ respiratoryRateSleepSummary }}',
data__foodMeasurementUnit = '{{ foodMeasurementUnit }}',
data__activityLevel = '{{ activityLevel }}',
data__timeInHeartRateZone = '{{ timeInHeartRateZone }}',
data__dailySleepTemperatureDerivations = '{{ dailySleepTemperatureDerivations }}',
data__height = '{{ height }}',
data__name = '{{ name }}',
data__electrocardiogram = '{{ electrocardiogram }}',
data__activeZoneMinutes = '{{ activeZoneMinutes }}',
data__coreBodyTemperature = '{{ coreBodyTemperature }}',
data__sedentaryPeriod = '{{ sedentaryPeriod }}',
data__dailyHeartRateZones = '{{ dailyHeartRateZones }}',
data__dataSource = '{{ dataSource }}',
data__bodyFat = '{{ bodyFat }}'
WHERE 
usersId = '{{ usersId }}' --required
AND dataTypesId = '{{ dataTypesId }}' --required
AND dataPointsId = '{{ dataPointsId }}' --required
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
    defaultValue="batch_delete"
    values={[
        { label: 'batch_delete', value: 'batch_delete' }
    ]}
>
<TabItem value="batch_delete">

Delete a batch of identifyable data points.

```sql
DELETE FROM google.health.data_points
WHERE usersId = '{{ usersId }}' --required
AND dataTypesId = '{{ dataTypesId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reconcile"
    values={[
        { label: 'reconcile', value: 'reconcile' },
        { label: 'export_exercise_tcx', value: 'export_exercise_tcx' },
        { label: 'roll_up', value: 'roll_up' },
        { label: 'daily_roll_up', value: 'daily_roll_up' }
    ]}
>
<TabItem value="reconcile">

Reconcile data points from multiple data sources into a single data stream.

```sql
EXEC google.health.data_points.reconcile 
@usersId='{{ usersId }}' --required, 
@dataTypesId='{{ dataTypesId }}' --required, 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}', 
@filter='{{ filter }}', 
@dataSourceFamily='{{ dataSourceFamily }}'
;
```
</TabItem>
<TabItem value="export_exercise_tcx">

Exports exercise data in TCX format. **IMPORTANT:** HTTP clients must append `?alt=media` to the request URL to download the raw TCX file. Example: `https://health.googleapis.com/v4/users/me/dataTypes/exercise/dataPoints/EXERCISE_ID:exportExerciseTcx?alt=media` Without `alt=media`, the server returns a JSON response (`ExportExerciseTcxResponse`) which is intended primarily for gRPC clients. **Note:** While the Authorization section below states that any one of the listed scopes is accepted, this specific method requires the user to provide both one of the `activity_and_fitness` scopes (`normal` or `readonly`) AND one of the `location` scopes (`normal` or `readonly`) in their access token to succeed.

```sql
EXEC google.health.data_points.export_exercise_tcx 
@usersId='{{ usersId }}' --required, 
@dataTypesId='{{ dataTypesId }}' --required, 
@dataPointsId='{{ dataPointsId }}' --required, 
@partialData={{ partialData }}
;
```
</TabItem>
<TabItem value="roll_up">

Roll up data points over physical time intervals for supported data types.

```sql
EXEC google.health.data_points.roll_up 
@usersId='{{ usersId }}' --required, 
@dataTypesId='{{ dataTypesId }}' --required 
@@json=
'{
"dataSourceFamily": "{{ dataSourceFamily }}", 
"range": "{{ range }}", 
"windowSize": "{{ windowSize }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}"
}'
;
```
</TabItem>
<TabItem value="daily_roll_up">

Roll up data points over civil time intervals for supported data types.

```sql
EXEC google.health.data_points.daily_roll_up 
@usersId='{{ usersId }}' --required, 
@dataTypesId='{{ dataTypesId }}' --required 
@@json=
'{
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}", 
"windowSizeDays": {{ windowSizeDays }}, 
"range": "{{ range }}", 
"dataSourceFamily": "{{ dataSourceFamily }}"
}'
;
```
</TabItem>
</Tabs>
