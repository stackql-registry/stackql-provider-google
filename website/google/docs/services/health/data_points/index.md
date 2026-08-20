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
    <td><CopyableCode code="menstrualPeriod" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `menstrual-period` interval data type collection. (id: MenstrualPeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="moods" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `moods` sample data type collection. (id: Moods)</td>
</tr>
<tr>
    <td><CopyableCode code="nutritionLog" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `nutrition-log` session data type collection. (id: NutritionLog)</td>
</tr>
<tr>
    <td><CopyableCode code="ovulationTest" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `ovulation-test` sample data type collection. (id: OvulationTest)</td>
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
    <td><CopyableCode code="symptoms" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `symptoms` sample data type collection. (id: Symptoms)</td>
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
    <td><CopyableCode code="menstrualPeriod" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `menstrual-period` interval data type collection. (id: MenstrualPeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="moods" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `moods` sample data type collection. (id: Moods)</td>
</tr>
<tr>
    <td><CopyableCode code="nutritionLog" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `nutrition-log` session data type collection. (id: NutritionLog)</td>
</tr>
<tr>
    <td><CopyableCode code="ovulationTest" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `ovulation-test` sample data type collection. (id: OvulationTest)</td>
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
    <td><CopyableCode code="symptoms" /></td>
    <td><code>object</code></td>
    <td>Optional. Data for points in the `symptoms` sample data type collection. (id: Symptoms)</td>
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
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
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
    <td><a href="#daily_roll_up"><CopyableCode code="daily_roll_up" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-usersId"><code>usersId</code></a>, <a href="#parameter-dataTypesId"><code>dataTypesId</code></a></td>
    <td></td>
    <td>Roll up data points over civil time intervals for supported data types.</td>
</tr>
<tr>
    <td><a href="#export_exercise_tcx"><CopyableCode code="export_exercise_tcx" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-usersId"><code>usersId</code></a>, <a href="#parameter-dataTypesId"><code>dataTypesId</code></a>, <a href="#parameter-dataPointsId"><code>dataPointsId</code></a></td>
    <td><a href="#parameter-partialData"><code>partialData</code></a></td>
    <td>Exports exercise data in TCX format. **IMPORTANT:** HTTP clients must append `?alt=media` to the request URL to download the raw TCX file. Example: `https://health.googleapis.com/v4/users/me/dataTypes/exercise/dataPoints/EXERCISE_ID:exportExerciseTcx?alt=media` Without `alt=media`, the server returns a JSON response (`ExportExerciseTcxResponse`) which is intended primarily for gRPC clients. **Note:** While the Authorization section below states that any one of the listed scopes is accepted, this specific method requires the user to provide both one of the `activity_and_fitness` scopes (`normal` or `readonly`) AND one of the `location` scopes (`normal` or `readonly`) in their access token to succeed.</td>
</tr>
<tr>
    <td><a href="#reconcile"><CopyableCode code="reconcile" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-usersId"><code>usersId</code></a>, <a href="#parameter-dataTypesId"><code>dataTypesId</code></a></td>
    <td><a href="#parameter-dataSourceFamily"><code>dataSourceFamily</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Reconcile data points from multiple data sources into a single data stream.</td>
</tr>
<tr>
    <td><a href="#roll_up"><CopyableCode code="roll_up" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-usersId"><code>usersId</code></a>, <a href="#parameter-dataTypesId"><code>dataTypesId</code></a></td>
    <td></td>
    <td>Roll up data points over physical time intervals for supported data types.</td>
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
menstrualPeriod,
moods,
nutritionLog,
ovulationTest,
oxygenSaturation,
respiratoryRateSleepSummary,
runVo2Max,
sedentaryPeriod,
sleep,
steps,
swimLengthsData,
symptoms,
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
menstrualPeriod,
moods,
nutritionLog,
ovulationTest,
oxygenSaturation,
respiratoryRateSleepSummary,
runVo2Max,
sedentaryPeriod,
sleep,
steps,
swimLengthsData,
symptoms,
timeInHeartRateZone,
vo2Max,
weight
FROM google.health.data_points
WHERE usersId = '{{ usersId }}' -- required
AND dataTypesId = '{{ dataTypesId }}' -- required
AND filter = '{{ filter }}'
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

Creates a single identifiable data point.

```sql
INSERT INTO google.health.data_points (
data__activeEnergyBurned,
data__activeMinutes,
data__activeZoneMinutes,
data__activityLevel,
data__altitude,
data__basalEnergyBurned,
data__bloodGlucose,
data__bodyFat,
data__coreBodyTemperature,
data__dailyHeartRateVariability,
data__dailyHeartRateZones,
data__dailyOxygenSaturation,
data__dailyRespiratoryRate,
data__dailyRestingHeartRate,
data__dailySleepTemperatureDerivations,
data__dailyVo2Max,
data__dataSource,
data__distance,
data__electrocardiogram,
data__exercise,
data__floors,
data__food,
data__foodMeasurementUnit,
data__heartRate,
data__heartRateVariability,
data__height,
data__hydrationLog,
data__irregularRhythmNotification,
data__menstrualPeriod,
data__moods,
data__name,
data__nutritionLog,
data__ovulationTest,
data__oxygenSaturation,
data__respiratoryRateSleepSummary,
data__runVo2Max,
data__sedentaryPeriod,
data__sleep,
data__steps,
data__swimLengthsData,
data__symptoms,
data__timeInHeartRateZone,
data__vo2Max,
data__weight,
usersId,
dataTypesId
)
SELECT 
'{{ activeEnergyBurned }}',
'{{ activeMinutes }}',
'{{ activeZoneMinutes }}',
'{{ activityLevel }}',
'{{ altitude }}',
'{{ basalEnergyBurned }}',
'{{ bloodGlucose }}',
'{{ bodyFat }}',
'{{ coreBodyTemperature }}',
'{{ dailyHeartRateVariability }}',
'{{ dailyHeartRateZones }}',
'{{ dailyOxygenSaturation }}',
'{{ dailyRespiratoryRate }}',
'{{ dailyRestingHeartRate }}',
'{{ dailySleepTemperatureDerivations }}',
'{{ dailyVo2Max }}',
'{{ dataSource }}',
'{{ distance }}',
'{{ electrocardiogram }}',
'{{ exercise }}',
'{{ floors }}',
'{{ food }}',
'{{ foodMeasurementUnit }}',
'{{ heartRate }}',
'{{ heartRateVariability }}',
'{{ height }}',
'{{ hydrationLog }}',
'{{ irregularRhythmNotification }}',
'{{ menstrualPeriod }}',
'{{ moods }}',
'{{ name }}',
'{{ nutritionLog }}',
'{{ ovulationTest }}',
'{{ oxygenSaturation }}',
'{{ respiratoryRateSleepSummary }}',
'{{ runVo2Max }}',
'{{ sedentaryPeriod }}',
'{{ sleep }}',
'{{ steps }}',
'{{ swimLengthsData }}',
'{{ symptoms }}',
'{{ timeInHeartRateZone }}',
'{{ vo2Max }}',
'{{ weight }}',
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
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          civilStartTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
        kcal: {{ kcal }}
    - name: activeMinutes
      description: |
        Optional. Data for points in the \`active-minutes\` interval data type collection.
      value:
        activeMinutesByActivityLevel:
          - activeMinutes: "{{ activeMinutes }}"
            activityLevel: "{{ activityLevel }}"
        interval:
          civilEndTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          civilStartTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
    - name: activeZoneMinutes
      description: |
        Optional. Data for points in the \`active-zone-minutes\` interval data type collection, measured in minutes.
      value:
        activeZoneMinutes: "{{ activeZoneMinutes }}"
        heartRateZone: "{{ heartRateZone }}"
        interval:
          civilEndTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          civilStartTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
    - name: activityLevel
      description: |
        Optional. Data for points in the \`activity-level\` daily data type collection.
      value:
        activityLevelType: "{{ activityLevelType }}"
        interval:
          civilEndTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          civilStartTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
    - name: altitude
      description: |
        Optional. Data for points in the \`altitude\` interval data type collection.
      value:
        gainMillimeters: "{{ gainMillimeters }}"
        interval:
          civilEndTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          civilStartTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
    - name: basalEnergyBurned
      description: |
        Optional. Data for points in the \`basal-energy-burned\` interval data type collection.
      value:
        interval:
          civilEndTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          civilStartTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
        kcal: {{ kcal }}
    - name: bloodGlucose
      description: |
        Optional. Data for points in the \`blood-glucose\` sample data type collection.
      value:
        bloodGlucoseMilligramsPerDeciliter: {{ bloodGlucoseMilligramsPerDeciliter }}
        mealType: "{{ mealType }}"
        measurementSource: "{{ measurementSource }}"
        measurementTiming: "{{ measurementTiming }}"
        notes: "{{ notes }}"
        sampleTime:
          civilTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          physicalTime: "{{ physicalTime }}"
          utcOffset: "{{ utcOffset }}"
        specimen: "{{ specimen }}"
    - name: bodyFat
      description: |
        Optional. Data for points in the \`body-fat\` sample data type collection.
      value:
        percentage: {{ percentage }}
        sampleTime:
          civilTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          physicalTime: "{{ physicalTime }}"
          utcOffset: "{{ utcOffset }}"
    - name: coreBodyTemperature
      description: |
        Optional. Data for points in the \`core-body-temperature\` sample data type collection.
      value:
        id: "{{ id }}"
        measurementLocation: "{{ measurementLocation }}"
        sampleTime:
          civilTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          physicalTime: "{{ physicalTime }}"
          utcOffset: "{{ utcOffset }}"
        temperatureCelsius: {{ temperatureCelsius }}
    - name: dailyHeartRateVariability
      description: |
        Optional. Data for points in the \`daily-heart-rate-variability\` daily data type collection.
      value:
        averageHeartRateVariabilityMilliseconds: {{ averageHeartRateVariabilityMilliseconds }}
        date:
          day: {{ day }}
          month: {{ month }}
          year: {{ year }}
        deepSleepRootMeanSquareOfSuccessiveDifferencesMilliseconds: {{ deepSleepRootMeanSquareOfSuccessiveDifferencesMilliseconds }}
        entropy: {{ entropy }}
        nonRemHeartRateBeatsPerMinute: "{{ nonRemHeartRateBeatsPerMinute }}"
    - name: dailyHeartRateZones
      description: |
        Optional. Data for points in the \`daily-heart-rate-zones\` daily data type collection.
      value:
        date:
          day: {{ day }}
          month: {{ month }}
          year: {{ year }}
        heartRateZones:
          - heartRateZoneType: "{{ heartRateZoneType }}"
            maxBeatsPerMinute: "{{ maxBeatsPerMinute }}"
            minBeatsPerMinute: "{{ minBeatsPerMinute }}"
    - name: dailyOxygenSaturation
      description: |
        Optional. Data for points in the \`daily-oxygen-saturation\` daily data type collection.
      value:
        averagePercentage: {{ averagePercentage }}
        date:
          day: {{ day }}
          month: {{ month }}
          year: {{ year }}
        lowerBoundPercentage: {{ lowerBoundPercentage }}
        standardDeviationPercentage: {{ standardDeviationPercentage }}
        upperBoundPercentage: {{ upperBoundPercentage }}
    - name: dailyRespiratoryRate
      description: |
        Optional. Data for points in the \`daily-respiratory-rate\` daily data type collection.
      value:
        breathsPerMinute: {{ breathsPerMinute }}
        date:
          day: {{ day }}
          month: {{ month }}
          year: {{ year }}
    - name: dailyRestingHeartRate
      description: |
        Optional. Data for points in the \`daily-resting-heart-rate\` daily data type collection.
      value:
        beatsPerMinute: "{{ beatsPerMinute }}"
        dailyRestingHeartRateMetadata:
          calculationMethod: "{{ calculationMethod }}"
        date:
          day: {{ day }}
          month: {{ month }}
          year: {{ year }}
    - name: dailySleepTemperatureDerivations
      description: |
        Optional. Data for points in the \`daily-sleep-temperature-derivations\` daily data type collection.
      value:
        baselineTemperatureCelsius: {{ baselineTemperatureCelsius }}
        date:
          day: {{ day }}
          month: {{ month }}
          year: {{ year }}
        nightlyTemperatureCelsius: {{ nightlyTemperatureCelsius }}
        relativeNightlyStddev30dCelsius: {{ relativeNightlyStddev30dCelsius }}
    - name: dailyVo2Max
      description: |
        Optional. Data for points in the \`daily-vo2-max\` daily data type collection.
      value:
        cardioFitnessLevel: "{{ cardioFitnessLevel }}"
        date:
          day: {{ day }}
          month: {{ month }}
          year: {{ year }}
        estimated: {{ estimated }}
        vo2Max: {{ vo2Max }}
        vo2MaxCovariance: {{ vo2MaxCovariance }}
    - name: dataSource
      description: |
        Optional. Data source information for the metric
      value:
        application:
          googleWebClientId: "{{ googleWebClientId }}"
          packageName: "{{ packageName }}"
          webClientId: "{{ webClientId }}"
        device:
          displayName: "{{ displayName }}"
          formFactor: "{{ formFactor }}"
          manufacturer: "{{ manufacturer }}"
        platform: "{{ platform }}"
        recordingMethod: "{{ recordingMethod }}"
    - name: distance
      description: |
        Optional. Data for points in the \`distance\` interval data type collection.
      value:
        interval:
          civilEndTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          civilStartTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
        millimeters: "{{ millimeters }}"
    - name: electrocardiogram
      description: |
        Optional. Data for points in the \`electrocardiogram\` session data type collection.
      value:
        beatsPerMinuteAvg: "{{ beatsPerMinuteAvg }}"
        interval:
          civilEndTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          civilStartTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
        leadNumber: {{ leadNumber }}
        medicalDeviceInfo:
          algorithmVersion: "{{ algorithmVersion }}"
          deviceModel: "{{ deviceModel }}"
          featureVersion: "{{ featureVersion }}"
          firmwareVersion: "{{ firmwareVersion }}"
          serviceVersion: "{{ serviceVersion }}"
        millivoltsScalingFactor: {{ millivoltsScalingFactor }}
        resultClassification: "{{ resultClassification }}"
        samplingFrequencyHertz: {{ samplingFrequencyHertz }}
        waveformSamples:
          - {{ waveformSamples }}
    - name: exercise
      description: |
        Optional. Data for points in the \`exercise\` session data type collection.
      value:
        activeDuration: "{{ activeDuration }}"
        createTime: "{{ createTime }}"
        displayName: "{{ displayName }}"
        exerciseEvents:
          - eventTime: "{{ eventTime }}"
            eventUtcOffset: "{{ eventUtcOffset }}"
            exerciseEventType: "{{ exerciseEventType }}"
        exerciseMetadata:
          hasGps: {{ hasGps }}
          poolLengthMillimeters: "{{ poolLengthMillimeters }}"
        exerciseType: "{{ exerciseType }}"
        interval:
          civilEndTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          civilStartTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
        metricsSummary:
          activeZoneMinutes: "{{ activeZoneMinutes }}"
          averageHeartRateBeatsPerMinute: "{{ averageHeartRateBeatsPerMinute }}"
          averagePaceSecondsPerMeter: {{ averagePaceSecondsPerMeter }}
          averageSpeedMillimetersPerSecond: {{ averageSpeedMillimetersPerSecond }}
          caloriesKcal: {{ caloriesKcal }}
          distanceMillimeters: {{ distanceMillimeters }}
          elevationGainMillimeters: {{ elevationGainMillimeters }}
          heartRateZoneDurations:
            lightTime: "{{ lightTime }}"
            moderateTime: "{{ moderateTime }}"
            peakTime: "{{ peakTime }}"
            vigorousTime: "{{ vigorousTime }}"
          mobilityMetrics:
            avgCadenceStepsPerMinute: {{ avgCadenceStepsPerMinute }}
            avgGroundContactTimeDuration: "{{ avgGroundContactTimeDuration }}"
            avgStrideLengthMillimeters: "{{ avgStrideLengthMillimeters }}"
            avgVerticalOscillationMillimeters: "{{ avgVerticalOscillationMillimeters }}"
            avgVerticalRatio: {{ avgVerticalRatio }}
          runVo2Max: {{ runVo2Max }}
          steps: "{{ steps }}"
          totalSwimLengths: {{ totalSwimLengths }}
        notes: "{{ notes }}"
        splitSummaries:
          - activeDuration: "{{ activeDuration }}"
            endTime: "{{ endTime }}"
            endUtcOffset: "{{ endUtcOffset }}"
            metricsSummary:
              activeZoneMinutes: "{{ activeZoneMinutes }}"
              averageHeartRateBeatsPerMinute: "{{ averageHeartRateBeatsPerMinute }}"
              averagePaceSecondsPerMeter: {{ averagePaceSecondsPerMeter }}
              averageSpeedMillimetersPerSecond: {{ averageSpeedMillimetersPerSecond }}
              caloriesKcal: {{ caloriesKcal }}
              distanceMillimeters: {{ distanceMillimeters }}
              elevationGainMillimeters: {{ elevationGainMillimeters }}
              heartRateZoneDurations:
                lightTime: "{{ lightTime }}"
                moderateTime: "{{ moderateTime }}"
                peakTime: "{{ peakTime }}"
                vigorousTime: "{{ vigorousTime }}"
              mobilityMetrics:
                avgCadenceStepsPerMinute: {{ avgCadenceStepsPerMinute }}
                avgGroundContactTimeDuration: "{{ avgGroundContactTimeDuration }}"
                avgStrideLengthMillimeters: "{{ avgStrideLengthMillimeters }}"
                avgVerticalOscillationMillimeters: "{{ avgVerticalOscillationMillimeters }}"
                avgVerticalRatio: {{ avgVerticalRatio }}
              runVo2Max: {{ runVo2Max }}
              steps: "{{ steps }}"
              totalSwimLengths: {{ totalSwimLengths }}
            splitType: "{{ splitType }}"
            startTime: "{{ startTime }}"
            startUtcOffset: "{{ startUtcOffset }}"
        splits:
          - activeDuration: "{{ activeDuration }}"
            endTime: "{{ endTime }}"
            endUtcOffset: "{{ endUtcOffset }}"
            metricsSummary:
              activeZoneMinutes: "{{ activeZoneMinutes }}"
              averageHeartRateBeatsPerMinute: "{{ averageHeartRateBeatsPerMinute }}"
              averagePaceSecondsPerMeter: {{ averagePaceSecondsPerMeter }}
              averageSpeedMillimetersPerSecond: {{ averageSpeedMillimetersPerSecond }}
              caloriesKcal: {{ caloriesKcal }}
              distanceMillimeters: {{ distanceMillimeters }}
              elevationGainMillimeters: {{ elevationGainMillimeters }}
              heartRateZoneDurations:
                lightTime: "{{ lightTime }}"
                moderateTime: "{{ moderateTime }}"
                peakTime: "{{ peakTime }}"
                vigorousTime: "{{ vigorousTime }}"
              mobilityMetrics:
                avgCadenceStepsPerMinute: {{ avgCadenceStepsPerMinute }}
                avgGroundContactTimeDuration: "{{ avgGroundContactTimeDuration }}"
                avgStrideLengthMillimeters: "{{ avgStrideLengthMillimeters }}"
                avgVerticalOscillationMillimeters: "{{ avgVerticalOscillationMillimeters }}"
                avgVerticalRatio: {{ avgVerticalRatio }}
              runVo2Max: {{ runVo2Max }}
              steps: "{{ steps }}"
              totalSwimLengths: {{ totalSwimLengths }}
            splitType: "{{ splitType }}"
            startTime: "{{ startTime }}"
            startUtcOffset: "{{ startUtcOffset }}"
        updateTime: "{{ updateTime }}"
    - name: floors
      description: |
        Optional. Data for points in the \`floors\` interval data type collection.
      value:
        count: "{{ count }}"
        interval:
          civilEndTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          civilStartTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
    - name: food
      description: |
        Optional. The food details.
      value:
        accessLevel: "{{ accessLevel }}"
        brand: "{{ brand }}"
        defaultServing:
          amount: {{ amount }}
          foodMeasurementUnit: "{{ foodMeasurementUnit }}"
          foodMeasurementUnitDisplayName: "{{ foodMeasurementUnitDisplayName }}"
          foodMeasurementUnitDisplayNamePlural: "{{ foodMeasurementUnitDisplayNamePlural }}"
          multiplier: {{ multiplier }}
        description: "{{ description }}"
        displayName: "{{ displayName }}"
        energyAvg:
          kcal: {{ kcal }}
          userProvidedUnit: "{{ userProvidedUnit }}"
        energyFromFat:
          kcal: {{ kcal }}
          userProvidedUnit: "{{ userProvidedUnit }}"
        energyMax:
          kcal: {{ kcal }}
          userProvidedUnit: "{{ userProvidedUnit }}"
        energyMin:
          kcal: {{ kcal }}
          userProvidedUnit: "{{ userProvidedUnit }}"
        languageCode: "{{ languageCode }}"
        mealType: "{{ mealType }}"
        nutrients:
          - nutrient: "{{ nutrient }}"
            quantity:
              grams: {{ grams }}
              userProvidedUnit: "{{ userProvidedUnit }}"
        servings:
          - amount: {{ amount }}
            foodMeasurementUnit: "{{ foodMeasurementUnit }}"
            foodMeasurementUnitDisplayName: "{{ foodMeasurementUnitDisplayName }}"
            foodMeasurementUnitDisplayNamePlural: "{{ foodMeasurementUnitDisplayNamePlural }}"
            multiplier: {{ multiplier }}
        totalCarbohydrate:
          grams: {{ grams }}
          userProvidedUnit: "{{ userProvidedUnit }}"
        totalFat:
          grams: {{ grams }}
          userProvidedUnit: "{{ userProvidedUnit }}"
    - name: foodMeasurementUnit
      description: |
        Optional. The food measurement unit details.
      value:
        displayName: "{{ displayName }}"
        pluralDisplayName: "{{ pluralDisplayName }}"
    - name: heartRate
      description: |
        Optional. Data for points in the \`heart-rate\` sample data type collection.
      value:
        beatsPerMinute: "{{ beatsPerMinute }}"
        metadata:
          motionContext: "{{ motionContext }}"
          sensorLocation: "{{ sensorLocation }}"
        sampleTime:
          civilTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          physicalTime: "{{ physicalTime }}"
          utcOffset: "{{ utcOffset }}"
    - name: heartRateVariability
      description: |
        Optional. Data for points in the \`heart-rate-variability\` sample data type collection.
      value:
        rootMeanSquareOfSuccessiveDifferencesMilliseconds: {{ rootMeanSquareOfSuccessiveDifferencesMilliseconds }}
        sampleTime:
          civilTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          physicalTime: "{{ physicalTime }}"
          utcOffset: "{{ utcOffset }}"
        standardDeviationMilliseconds: {{ standardDeviationMilliseconds }}
    - name: height
      description: |
        Optional. Data for points in the \`height\` sample data type collection.
      value:
        heightMillimeters: "{{ heightMillimeters }}"
        sampleTime:
          civilTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          physicalTime: "{{ physicalTime }}"
          utcOffset: "{{ utcOffset }}"
    - name: hydrationLog
      description: |
        Optional. Data for points in the \`hydration-log\` session data type collection.
      value:
        amountConsumed:
          milliliters: {{ milliliters }}
          userProvidedUnit: "{{ userProvidedUnit }}"
        interval:
          civilEndTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          civilStartTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
    - name: irregularRhythmNotification
      description: |
        Optional. Data for points in the \`irregular-rhythm-notification\` session data type collection.
      value:
        alertWindows:
          - civilEndTime:
              date:
                day: {{ day }}
                month: {{ month }}
                year: {{ year }}
              time:
                hours: {{ hours }}
                minutes: {{ minutes }}
                nanos: {{ nanos }}
                seconds: {{ seconds }}
            civilStartTime:
              date:
                day: {{ day }}
                month: {{ month }}
                year: {{ year }}
              time:
                hours: {{ hours }}
                minutes: {{ minutes }}
                nanos: {{ nanos }}
                seconds: {{ seconds }}
            endTime: "{{ endTime }}"
            endUtcOffset: "{{ endUtcOffset }}"
            heartBeats: "{{ heartBeats }}"
            positive: {{ positive }}
            startTime: "{{ startTime }}"
            startUtcOffset: "{{ startUtcOffset }}"
        interval:
          civilEndTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          civilStartTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
        medicalDeviceInfo:
          algorithmVersion: "{{ algorithmVersion }}"
          deviceModel: "{{ deviceModel }}"
          featureVersion: "{{ featureVersion }}"
          firmwareVersion: "{{ firmwareVersion }}"
          serviceVersion: "{{ serviceVersion }}"
    - name: menstrualPeriod
      description: |
        Optional. Data for points in the \`menstrual-period\` interval data type collection.
      value:
        interval:
          civilEndTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          civilStartTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
        notes: "{{ notes }}"
    - name: moods
      description: |
        Optional. Data for points in the \`moods\` sample data type collection.
      value:
        moods:
          - "{{ moods }}"
        sampleTime:
          civilTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          physicalTime: "{{ physicalTime }}"
          utcOffset: "{{ utcOffset }}"
        valences:
          - "{{ valences }}"
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. Data point name, only supported for the subset of identifiable data types. For the majority of the data types, individual data points do not need to be identified and this field would be empty. Format: \`users/{user}/dataTypes/{data_type}/dataPoints/{data_point}\` Example: \`users/abcd1234/dataTypes/sleep/dataPoints/a1b2c3d4-e5f6-7890-1234-567890abcdef\` The \`{user}\` ID is a system-generated identifier, as described in Identity.health_user_id. The \`{data_type}\` ID corresponds to the kebab-case version of the field names in the DataPoint data union field, e.g. \`heart-rate\` for the \`heart_rate\` field. The \`{data_point}\` ID can be client-provided or system-generated. If client-provided, it must be a string of 4-63 characters, containing only lowercase letters, numbers, and hyphens.
    - name: nutritionLog
      description: |
        Optional. Data for points in the \`nutrition-log\` session data type collection.
      value:
        energy:
          kcal: {{ kcal }}
          userProvidedUnit: "{{ userProvidedUnit }}"
        energyFromFat:
          kcal: {{ kcal }}
          userProvidedUnit: "{{ userProvidedUnit }}"
        food: "{{ food }}"
        foodDisplayName: "{{ foodDisplayName }}"
        interval:
          civilEndTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          civilStartTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
        mealType: "{{ mealType }}"
        nutrients:
          - nutrient: "{{ nutrient }}"
            quantity:
              grams: {{ grams }}
              userProvidedUnit: "{{ userProvidedUnit }}"
        serving:
          amount: {{ amount }}
          foodMeasurementUnit: "{{ foodMeasurementUnit }}"
          foodMeasurementUnitDisplayName: "{{ foodMeasurementUnitDisplayName }}"
        totalCarbohydrate:
          grams: {{ grams }}
          userProvidedUnit: "{{ userProvidedUnit }}"
        totalFat:
          grams: {{ grams }}
          userProvidedUnit: "{{ userProvidedUnit }}"
    - name: ovulationTest
      description: |
        Optional. Data for points in the \`ovulation-test\` sample data type collection.
      value:
        result: "{{ result }}"
        sampleTime:
          civilTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          physicalTime: "{{ physicalTime }}"
          utcOffset: "{{ utcOffset }}"
    - name: oxygenSaturation
      description: |
        Optional. Data for points in the \`oxygen-saturation\` sample data type collection.
      value:
        percentage: {{ percentage }}
        sampleTime:
          civilTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          physicalTime: "{{ physicalTime }}"
          utcOffset: "{{ utcOffset }}"
    - name: respiratoryRateSleepSummary
      description: |
        Optional. Data for points in the \`respiratory-rate-sleep-summary\` sample data type collection.
      value:
        deepSleepStats:
          breathsPerMinute: {{ breathsPerMinute }}
          signalToNoise: {{ signalToNoise }}
          standardDeviation: {{ standardDeviation }}
        fullSleepStats:
          breathsPerMinute: {{ breathsPerMinute }}
          signalToNoise: {{ signalToNoise }}
          standardDeviation: {{ standardDeviation }}
        lightSleepStats:
          breathsPerMinute: {{ breathsPerMinute }}
          signalToNoise: {{ signalToNoise }}
          standardDeviation: {{ standardDeviation }}
        remSleepStats:
          breathsPerMinute: {{ breathsPerMinute }}
          signalToNoise: {{ signalToNoise }}
          standardDeviation: {{ standardDeviation }}
        sampleTime:
          civilTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          physicalTime: "{{ physicalTime }}"
          utcOffset: "{{ utcOffset }}"
    - name: runVo2Max
      description: |
        Optional. Data for points in the \`run-vo2-max\` sample data type collection.
      value:
        runVo2Max: {{ runVo2Max }}
        sampleTime:
          civilTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          physicalTime: "{{ physicalTime }}"
          utcOffset: "{{ utcOffset }}"
    - name: sedentaryPeriod
      description: |
        Optional. Data for points in the \`sedentary-period\` interval data type collection.
      value:
        interval:
          civilEndTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          civilStartTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
    - name: sleep
      description: |
        Optional. Data for points in the \`sleep\` session data type collection.
      value:
        createTime: "{{ createTime }}"
        interval:
          civilEndTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          civilStartTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
        metadata:
          externalId: "{{ externalId }}"
          mainSleep: {{ mainSleep }}
          manuallyEdited: {{ manuallyEdited }}
          nap: {{ nap }}
          processed: {{ processed }}
          stagesStatus: "{{ stagesStatus }}"
        outOfBedSegments:
          - endTime: "{{ endTime }}"
            endUtcOffset: "{{ endUtcOffset }}"
            startTime: "{{ startTime }}"
            startUtcOffset: "{{ startUtcOffset }}"
        shortAwakenings:
          - createTime: "{{ createTime }}"
            endTime: "{{ endTime }}"
            endUtcOffset: "{{ endUtcOffset }}"
            startTime: "{{ startTime }}"
            startUtcOffset: "{{ startUtcOffset }}"
            type: "{{ type }}"
            updateTime: "{{ updateTime }}"
        stages:
          - createTime: "{{ createTime }}"
            endTime: "{{ endTime }}"
            endUtcOffset: "{{ endUtcOffset }}"
            startTime: "{{ startTime }}"
            startUtcOffset: "{{ startUtcOffset }}"
            type: "{{ type }}"
            updateTime: "{{ updateTime }}"
        summary:
          minutesAfterWakeUp: "{{ minutesAfterWakeUp }}"
          minutesAsleep: "{{ minutesAsleep }}"
          minutesAwake: "{{ minutesAwake }}"
          minutesInSleepPeriod: "{{ minutesInSleepPeriod }}"
          minutesToFallAsleep: "{{ minutesToFallAsleep }}"
          stagesSummary:
            - count: "{{ count }}"
              minutes: "{{ minutes }}"
              type: "{{ type }}"
        type: "{{ type }}"
        updateTime: "{{ updateTime }}"
    - name: steps
      description: |
        Optional. Data for points in the \`steps\` interval data type collection.
      value:
        count: "{{ count }}"
        interval:
          civilEndTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          civilStartTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
    - name: swimLengthsData
      description: |
        Optional. Data for points in the \`swim-lengths-data\` interval data type collection.
      value:
        interval:
          civilEndTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          civilStartTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
        strokeCount: "{{ strokeCount }}"
        swimStrokeType: "{{ swimStrokeType }}"
    - name: symptoms
      description: |
        Optional. Data for points in the \`symptoms\` sample data type collection.
      value:
        sampleTime:
          civilTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          physicalTime: "{{ physicalTime }}"
          utcOffset: "{{ utcOffset }}"
        symptoms:
          - "{{ symptoms }}"
    - name: timeInHeartRateZone
      description: |
        Optional. Data for points in the \`time-in-heart-rate-zone\` interval data type collection.
      value:
        heartRateZoneType: "{{ heartRateZoneType }}"
        interval:
          civilEndTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          civilStartTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          endTime: "{{ endTime }}"
          endUtcOffset: "{{ endUtcOffset }}"
          startTime: "{{ startTime }}"
          startUtcOffset: "{{ startUtcOffset }}"
    - name: vo2Max
      description: |
        Optional. Data for points in the \`vo2-max\` sample data type collection.
      value:
        measurementMethod: "{{ measurementMethod }}"
        sampleTime:
          civilTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          physicalTime: "{{ physicalTime }}"
          utcOffset: "{{ utcOffset }}"
        vo2Max: {{ vo2Max }}
    - name: weight
      description: |
        Optional. Data for points in the \`weight\` sample data type collection.
      value:
        notes: "{{ notes }}"
        sampleTime:
          civilTime:
            date:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
          physicalTime: "{{ physicalTime }}"
          utcOffset: "{{ utcOffset }}"
        weightGrams: {{ weightGrams }}
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
data__activeMinutes = '{{ activeMinutes }}',
data__activeZoneMinutes = '{{ activeZoneMinutes }}',
data__activityLevel = '{{ activityLevel }}',
data__altitude = '{{ altitude }}',
data__basalEnergyBurned = '{{ basalEnergyBurned }}',
data__bloodGlucose = '{{ bloodGlucose }}',
data__bodyFat = '{{ bodyFat }}',
data__coreBodyTemperature = '{{ coreBodyTemperature }}',
data__dailyHeartRateVariability = '{{ dailyHeartRateVariability }}',
data__dailyHeartRateZones = '{{ dailyHeartRateZones }}',
data__dailyOxygenSaturation = '{{ dailyOxygenSaturation }}',
data__dailyRespiratoryRate = '{{ dailyRespiratoryRate }}',
data__dailyRestingHeartRate = '{{ dailyRestingHeartRate }}',
data__dailySleepTemperatureDerivations = '{{ dailySleepTemperatureDerivations }}',
data__dailyVo2Max = '{{ dailyVo2Max }}',
data__dataSource = '{{ dataSource }}',
data__distance = '{{ distance }}',
data__electrocardiogram = '{{ electrocardiogram }}',
data__exercise = '{{ exercise }}',
data__floors = '{{ floors }}',
data__food = '{{ food }}',
data__foodMeasurementUnit = '{{ foodMeasurementUnit }}',
data__heartRate = '{{ heartRate }}',
data__heartRateVariability = '{{ heartRateVariability }}',
data__height = '{{ height }}',
data__hydrationLog = '{{ hydrationLog }}',
data__irregularRhythmNotification = '{{ irregularRhythmNotification }}',
data__menstrualPeriod = '{{ menstrualPeriod }}',
data__moods = '{{ moods }}',
data__name = '{{ name }}',
data__nutritionLog = '{{ nutritionLog }}',
data__ovulationTest = '{{ ovulationTest }}',
data__oxygenSaturation = '{{ oxygenSaturation }}',
data__respiratoryRateSleepSummary = '{{ respiratoryRateSleepSummary }}',
data__runVo2Max = '{{ runVo2Max }}',
data__sedentaryPeriod = '{{ sedentaryPeriod }}',
data__sleep = '{{ sleep }}',
data__steps = '{{ steps }}',
data__swimLengthsData = '{{ swimLengthsData }}',
data__symptoms = '{{ symptoms }}',
data__timeInHeartRateZone = '{{ timeInHeartRateZone }}',
data__vo2Max = '{{ vo2Max }}',
data__weight = '{{ weight }}'
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
    defaultValue="daily_roll_up"
    values={[
        { label: 'daily_roll_up', value: 'daily_roll_up' },
        { label: 'export_exercise_tcx', value: 'export_exercise_tcx' },
        { label: 'reconcile', value: 'reconcile' },
        { label: 'roll_up', value: 'roll_up' }
    ]}
>
<TabItem value="daily_roll_up">

Roll up data points over civil time intervals for supported data types.

```sql
EXEC google.health.data_points.daily_roll_up 
@usersId='{{ usersId }}' --required, 
@dataTypesId='{{ dataTypesId }}' --required 
@@json=
'{
"dataSourceFamily": "{{ dataSourceFamily }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}", 
"range": "{{ range }}", 
"windowSizeDays": {{ windowSizeDays }}
}'
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
<TabItem value="reconcile">

Reconcile data points from multiple data sources into a single data stream.

```sql
EXEC google.health.data_points.reconcile 
@usersId='{{ usersId }}' --required, 
@dataTypesId='{{ dataTypesId }}' --required, 
@dataSourceFamily='{{ dataSourceFamily }}', 
@filter='{{ filter }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}'
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
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}", 
"range": "{{ range }}", 
"windowSize": "{{ windowSize }}"
}'
;
```
</TabItem>
</Tabs>
