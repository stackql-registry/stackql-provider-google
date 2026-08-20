--- 
title: settings
hide_title: false
hide_table_of_contents: false
keywords:
  - settings
  - contactcenterinsights
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

Creates, updates, deletes, gets or lists a <code>settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.contactcenterinsights.settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_settings"
    values={[
        { label: 'get_settings', value: 'get_settings' }
    ]}
>
<TabItem value="get_settings">

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
    <td>Immutable. The resource name of the settings resource. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/settings</td>
</tr>
<tr>
    <td><CopyableCode code="analysisConfig" /></td>
    <td><code>object</code></td>
    <td>Default analysis settings. (id: GoogleCloudContactcenterinsightsV1SettingsAnalysisConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="conversationTtl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>The default TTL for newly-created conversations. If a conversation has a specified expiration, that value will be used instead. Changing this value will not change the expiration of existing conversations. Conversations with no expire time persist until they are deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the settings was created.</td>
</tr>
<tr>
    <td><CopyableCode code="diagnosticMetricConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for diagnostic metrics. (id: GoogleCloudContactcenterinsightsV1SettingsDiagnosticMetricConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="languageCode" /></td>
    <td><code>string</code></td>
    <td>A language code to be applied to each transcript segment unless the segment already specifies a language code. Language code defaults to "en-US" if it is neither specified on the segment nor here.</td>
</tr>
<tr>
    <td><CopyableCode code="pubsubNotificationSettings" /></td>
    <td><code>object</code></td>
    <td>A map that maps a notification trigger to a Pub/Sub topic. Each time a specified trigger occurs, Insights will notify the corresponding Pub/Sub topic. Keys are notification triggers. Supported keys are: * "all-triggers": Notify each time any of the supported triggers occurs. * "create-analysis": Notify each time an analysis is created. * "create-conversation": Notify each time a conversation is created. * "export-insights-data": Notify each time an export is complete. * "ingest-conversations": Notify each time an IngestConversations LRO is complete. * "update-conversation": Notify each time a conversation is updated via UpdateConversation. * "upload-conversation": Notify when an UploadConversation LRO is complete. * "update-or-analyze-conversation": Notify when an analysis for a conversation is completed or when the conversation is updated. The message will contain the conversation with transcript, analysis and other metadata. Values are Pub/Sub topics. The format of each Pub/Sub topic is: projects/&#123;project&#125;/topics/&#123;topic&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="redactionConfig" /></td>
    <td><code>object</code></td>
    <td>Default DLP redaction resources to be applied while ingesting conversations. This applies to conversations ingested from the `UploadConversation` and `IngestConversations` endpoints, including conversations coming from CCAI Platform. (id: GoogleCloudContactcenterinsightsV1RedactionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="screenRecordingBucketUri" /></td>
    <td><code>string</code></td>
    <td>Optional. The path to a Cloud Storage bucket containing conversation screen recordings. If provided, Insights will search in the bucket for a screen recording file matching the conversation data source object name prefix. If matches are found, these file URIs will be stored in the conversation screen recordings field.</td>
</tr>
<tr>
    <td><CopyableCode code="speechConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Default Speech-to-Text resources to use while ingesting audio files. Optional, CCAI Insights will create a default if not provided. This applies to conversations ingested from the `UploadConversation` and `IngestConversations` endpoints, including conversations coming from CCAI Platform. (id: GoogleCloudContactcenterinsightsV1SpeechConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string</code></td>
    <td>Optional. The time zone applied to the project. This is a string representation of the time zone, for example, "America/New_York". This field follows the IANA TZ database format. See https://www.iana.org/time-zones for a list of valid values. If no value is set the user time zone will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the settings were last updated.</td>
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
    <td><a href="#get_settings"><CopyableCode code="get_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Gets project-level settings.</td>
</tr>
<tr>
    <td><a href="#update_settings"><CopyableCode code="update_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates project-level settings.</td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_settings"
    values={[
        { label: 'get_settings', value: 'get_settings' }
    ]}
>
<TabItem value="get_settings">

Gets project-level settings.

```sql
SELECT
name,
analysisConfig,
conversationTtl,
createTime,
diagnosticMetricConfig,
languageCode,
pubsubNotificationSettings,
redactionConfig,
screenRecordingBucketUri,
speechConfig,
timeZone,
updateTime
FROM google.contactcenterinsights.settings
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_settings"
    values={[
        { label: 'update_settings', value: 'update_settings' }
    ]}
>
<TabItem value="update_settings">

Updates project-level settings.

```sql
UPDATE google.contactcenterinsights.settings
SET 
data__analysisConfig = '{{ analysisConfig }}',
data__conversationTtl = '{{ conversationTtl }}',
data__diagnosticMetricConfig = '{{ diagnosticMetricConfig }}',
data__languageCode = '{{ languageCode }}',
data__name = '{{ name }}',
data__pubsubNotificationSettings = '{{ pubsubNotificationSettings }}',
data__redactionConfig = '{{ redactionConfig }}',
data__screenRecordingBucketUri = '{{ screenRecordingBucketUri }}',
data__speechConfig = '{{ speechConfig }}',
data__timeZone = '{{ timeZone }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
analysisConfig,
conversationTtl,
createTime,
diagnosticMetricConfig,
languageCode,
pubsubNotificationSettings,
redactionConfig,
screenRecordingBucketUri,
speechConfig,
timeZone,
updateTime;
```
</TabItem>
</Tabs>
