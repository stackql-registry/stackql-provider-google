--- 
title: recognizers
hide_title: false
hide_table_of_contents: false
keywords:
  - recognizers
  - speechv2
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

Creates, updates, deletes, gets or lists a <code>recognizers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recognizers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.speechv2.recognizers" /></td></tr>
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
    <td>Output only. Identifier. The resource name of the Recognizer. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/recognizers/&#123;recognizer&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Allows users to store small amounts of arbitrary data. Both the key and the value must be 63 characters or less each. At most 100 annotations.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultRecognitionConfig" /></td>
    <td><code>object</code></td>
    <td>Default configuration to use for requests with this Recognizer. This can be overwritten by inline configuration in the RecognizeRequest.config field. (id: RecognitionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this Recognizer was requested for deletion.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User-settable, human-readable name for the Recognizer. Must be 63 characters or less.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. This checksum is computed by the server based on the value of other fields. This may be sent on update, undelete, and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this Recognizer will be purged.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td>Output only. The [KMS key name](https://cloud.google.com/kms/docs/resource-hierarchy#keys) with which the Recognizer is encrypted. The expected format is `projects/&#123;project&#125;/locations/&#123;location&#125;/keyRings/&#123;key_ring&#125;/cryptoKeys/&#123;crypto_key&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyVersionName" /></td>
    <td><code>string</code></td>
    <td>Output only. The [KMS key version name](https://cloud.google.com/kms/docs/resource-hierarchy#key_versions) with which the Recognizer is encrypted. The expected format is `projects/&#123;project&#125;/locations/&#123;location&#125;/keyRings/&#123;key_ring&#125;/cryptoKeys/&#123;crypto_key&#125;/cryptoKeyVersions/&#123;crypto_key_version&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="languageCodes" /></td>
    <td><code>array</code></td>
    <td>Optional. This field is now deprecated. Prefer the `language_codes` field in the `RecognitionConfig` message. The language of the supplied audio as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Supported languages for each model are listed in the [Table of Supported Models](https://cloud.google.com/speech-to-text/v2/docs/speech-to-text-supported-languages). If additional languages are provided, recognition result will contain recognition in the most likely language detected. The recognition result will include the language tag of the language detected in the audio. When you create or update a Recognizer, these values are stored in normalized BCP-47 form. For example, "en-us" is stored as "en-US".</td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>string</code></td>
    <td>Optional. This field is now deprecated. Prefer the `model` field in the `RecognitionConfig` message. Which model to use for recognition requests. Select the model best suited to your domain to get best results. Guidance for choosing which model to use can be found in the [Transcription Models Documentation](https://cloud.google.com/speech-to-text/v2/docs/transcription-model) and the models supported in each region can be found in the [Table Of Supported Models](https://cloud.google.com/speech-to-text/v2/docs/speech-to-text-supported-languages).</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether or not this Recognizer is in the process of being updated.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The Recognizer lifecycle state. (STATE_UNSPECIFIED, ACTIVE, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System-assigned unique identifier for the Recognizer.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time this Recognizer was modified.</td>
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
    <td>Output only. Identifier. The resource name of the Recognizer. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/recognizers/&#123;recognizer&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Allows users to store small amounts of arbitrary data. Both the key and the value must be 63 characters or less each. At most 100 annotations.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultRecognitionConfig" /></td>
    <td><code>object</code></td>
    <td>Default configuration to use for requests with this Recognizer. This can be overwritten by inline configuration in the RecognizeRequest.config field. (id: RecognitionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this Recognizer was requested for deletion.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User-settable, human-readable name for the Recognizer. Must be 63 characters or less.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. This checksum is computed by the server based on the value of other fields. This may be sent on update, undelete, and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this Recognizer will be purged.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td>Output only. The [KMS key name](https://cloud.google.com/kms/docs/resource-hierarchy#keys) with which the Recognizer is encrypted. The expected format is `projects/&#123;project&#125;/locations/&#123;location&#125;/keyRings/&#123;key_ring&#125;/cryptoKeys/&#123;crypto_key&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyVersionName" /></td>
    <td><code>string</code></td>
    <td>Output only. The [KMS key version name](https://cloud.google.com/kms/docs/resource-hierarchy#key_versions) with which the Recognizer is encrypted. The expected format is `projects/&#123;project&#125;/locations/&#123;location&#125;/keyRings/&#123;key_ring&#125;/cryptoKeys/&#123;crypto_key&#125;/cryptoKeyVersions/&#123;crypto_key_version&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="languageCodes" /></td>
    <td><code>array</code></td>
    <td>Optional. This field is now deprecated. Prefer the `language_codes` field in the `RecognitionConfig` message. The language of the supplied audio as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Supported languages for each model are listed in the [Table of Supported Models](https://cloud.google.com/speech-to-text/v2/docs/speech-to-text-supported-languages). If additional languages are provided, recognition result will contain recognition in the most likely language detected. The recognition result will include the language tag of the language detected in the audio. When you create or update a Recognizer, these values are stored in normalized BCP-47 form. For example, "en-us" is stored as "en-US".</td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>string</code></td>
    <td>Optional. This field is now deprecated. Prefer the `model` field in the `RecognitionConfig` message. Which model to use for recognition requests. Select the model best suited to your domain to get best results. Guidance for choosing which model to use can be found in the [Transcription Models Documentation](https://cloud.google.com/speech-to-text/v2/docs/transcription-model) and the models supported in each region can be found in the [Table Of Supported Models](https://cloud.google.com/speech-to-text/v2/docs/speech-to-text-supported-languages).</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether or not this Recognizer is in the process of being updated.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The Recognizer lifecycle state. (STATE_UNSPECIFIED, ACTIVE, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System-assigned unique identifier for the Recognizer.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time this Recognizer was modified.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recognizersId"><code>recognizersId</code></a></td>
    <td></td>
    <td>Returns the requested Recognizer. Fails with NOT_FOUND if the requested Recognizer doesn't exist.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-showDeleted"><code>showDeleted</code></a></td>
    <td>Lists Recognizers.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-recognizerId"><code>recognizerId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a Recognizer.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recognizersId"><code>recognizersId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates the Recognizer.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recognizersId"><code>recognizersId</code></a></td>
    <td><a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Deletes the Recognizer.</td>
</tr>
<tr>
    <td><a href="#batch_recognize"><CopyableCode code="batch_recognize" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recognizersId"><code>recognizersId</code></a></td>
    <td></td>
    <td>Performs batch asynchronous speech recognition: send a request with N audio files and receive a long running operation that can be polled to see when the transcriptions are finished.</td>
</tr>
<tr>
    <td><a href="#recognize"><CopyableCode code="recognize" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recognizersId"><code>recognizersId</code></a></td>
    <td></td>
    <td>Performs synchronous Speech recognition: receive results after all audio has been sent and processed.</td>
</tr>
<tr>
    <td><a href="#undelete"><CopyableCode code="undelete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-recognizersId"><code>recognizersId</code></a></td>
    <td></td>
    <td>Undeletes the Recognizer.</td>
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
<tr id="parameter-recognizersId">
    <td><CopyableCode code="recognizersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
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
<tr id="parameter-recognizerId">
    <td><CopyableCode code="recognizerId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-showDeleted">
    <td><CopyableCode code="showDeleted" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
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

Returns the requested Recognizer. Fails with NOT_FOUND if the requested Recognizer doesn't exist.

```sql
SELECT
name,
annotations,
createTime,
defaultRecognitionConfig,
deleteTime,
displayName,
etag,
expireTime,
kmsKeyName,
kmsKeyVersionName,
languageCodes,
model,
reconciling,
state,
uid,
updateTime
FROM google.speechv2.recognizers
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND recognizersId = '{{ recognizersId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Recognizers.

```sql
SELECT
name,
annotations,
createTime,
defaultRecognitionConfig,
deleteTime,
displayName,
etag,
expireTime,
kmsKeyName,
kmsKeyVersionName,
languageCodes,
model,
reconciling,
state,
uid,
updateTime
FROM google.speechv2.recognizers
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND showDeleted = '{{ showDeleted }}'
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

Creates a Recognizer.

```sql
INSERT INTO google.speechv2.recognizers (
data__annotations,
data__defaultRecognitionConfig,
data__displayName,
data__languageCodes,
data__model,
projectsId,
locationsId,
recognizerId,
validateOnly
)
SELECT 
'{{ annotations }}',
'{{ defaultRecognitionConfig }}',
'{{ displayName }}',
'{{ languageCodes }}',
'{{ model }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ recognizerId }}',
'{{ validateOnly }}'
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
- name: recognizers
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the recognizers resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the recognizers resource.
    - name: annotations
      value: "{{ annotations }}"
      description: |
        Allows users to store small amounts of arbitrary data. Both the key and the value must be 63 characters or less each. At most 100 annotations.
    - name: defaultRecognitionConfig
      description: |
        Default configuration to use for requests with this Recognizer. This can be overwritten by inline configuration in the RecognizeRequest.config field.
      value:
        adaptation:
          customClasses:
            - annotations: "{{ annotations }}"
              createTime: "{{ createTime }}"
              deleteTime: "{{ deleteTime }}"
              displayName: "{{ displayName }}"
              etag: "{{ etag }}"
              expireTime: "{{ expireTime }}"
              items: "{{ items }}"
              kmsKeyName: "{{ kmsKeyName }}"
              kmsKeyVersionName: "{{ kmsKeyVersionName }}"
              name: "{{ name }}"
              reconciling: {{ reconciling }}
              state: "{{ state }}"
              uid: "{{ uid }}"
              updateTime: "{{ updateTime }}"
          phraseSets:
            - inlinePhraseSet:
                annotations: "{{ annotations }}"
                boost: {{ boost }}
                createTime: "{{ createTime }}"
                deleteTime: "{{ deleteTime }}"
                displayName: "{{ displayName }}"
                etag: "{{ etag }}"
                expireTime: "{{ expireTime }}"
                kmsKeyName: "{{ kmsKeyName }}"
                kmsKeyVersionName: "{{ kmsKeyVersionName }}"
                name: "{{ name }}"
                phrases:
                  - boost: {{ boost }}
                    value: "{{ value }}"
                reconciling: {{ reconciling }}
                state: "{{ state }}"
                uid: "{{ uid }}"
                updateTime: "{{ updateTime }}"
              phraseSet: "{{ phraseSet }}"
        autoDecodingConfig: "{{ autoDecodingConfig }}"
        denoiserConfig:
          denoiseAudio: {{ denoiseAudio }}
          snrThreshold: {{ snrThreshold }}
        explicitDecodingConfig:
          audioChannelCount: {{ audioChannelCount }}
          encoding: "{{ encoding }}"
          sampleRateHertz: {{ sampleRateHertz }}
        features:
          customPromptConfig:
            customPrompt: "{{ customPrompt }}"
          diarizationConfig:
            maxSpeakerCount: {{ maxSpeakerCount }}
            minSpeakerCount: {{ minSpeakerCount }}
          enableAutomaticPunctuation: {{ enableAutomaticPunctuation }}
          enableSpokenEmojis: {{ enableSpokenEmojis }}
          enableSpokenPunctuation: {{ enableSpokenPunctuation }}
          enableWordConfidence: {{ enableWordConfidence }}
          enableWordTimeOffsets: {{ enableWordTimeOffsets }}
          maxAlternatives: {{ maxAlternatives }}
          multiChannelMode: "{{ multiChannelMode }}"
          profanityFilter: {{ profanityFilter }}
        languageCodes:
          - "{{ languageCodes }}"
        model: "{{ model }}"
        transcriptNormalization:
          entries:
            - caseSensitive: {{ caseSensitive }}
              replace: "{{ replace }}"
              search: "{{ search }}"
        translationConfig:
          targetLanguage: "{{ targetLanguage }}"
    - name: displayName
      value: "{{ displayName }}"
      description: |
        User-settable, human-readable name for the Recognizer. Must be 63 characters or less.
    - name: languageCodes
      value:
        - "{{ languageCodes }}"
      description: |
        Optional. This field is now deprecated. Prefer the \`language_codes\` field in the \`RecognitionConfig\` message. The language of the supplied audio as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Supported languages for each model are listed in the [Table of Supported Models](https://cloud.google.com/speech-to-text/v2/docs/speech-to-text-supported-languages). If additional languages are provided, recognition result will contain recognition in the most likely language detected. The recognition result will include the language tag of the language detected in the audio. When you create or update a Recognizer, these values are stored in normalized BCP-47 form. For example, "en-us" is stored as "en-US".
    - name: model
      value: "{{ model }}"
      description: |
        Optional. This field is now deprecated. Prefer the \`model\` field in the \`RecognitionConfig\` message. Which model to use for recognition requests. Select the model best suited to your domain to get best results. Guidance for choosing which model to use can be found in the [Transcription Models Documentation](https://cloud.google.com/speech-to-text/v2/docs/transcription-model) and the models supported in each region can be found in the [Table Of Supported Models](https://cloud.google.com/speech-to-text/v2/docs/speech-to-text-supported-languages).
    - name: recognizerId
      value: "{{ recognizerId }}"
    - name: validateOnly
      value: {{ validateOnly }}
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

Updates the Recognizer.

```sql
UPDATE google.speechv2.recognizers
SET 
data__annotations = '{{ annotations }}',
data__defaultRecognitionConfig = '{{ defaultRecognitionConfig }}',
data__displayName = '{{ displayName }}',
data__languageCodes = '{{ languageCodes }}',
data__model = '{{ model }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND recognizersId = '{{ recognizersId }}' --required
AND updateMask = '{{ updateMask}}'
AND validateOnly = {{ validateOnly}}
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

Deletes the Recognizer.

```sql
DELETE FROM google.speechv2.recognizers
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND recognizersId = '{{ recognizersId }}' --required
AND allowMissing = '{{ allowMissing }}'
AND etag = '{{ etag }}'
AND validateOnly = '{{ validateOnly }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_recognize"
    values={[
        { label: 'batch_recognize', value: 'batch_recognize' },
        { label: 'recognize', value: 'recognize' },
        { label: 'undelete', value: 'undelete' }
    ]}
>
<TabItem value="batch_recognize">

Performs batch asynchronous speech recognition: send a request with N audio files and receive a long running operation that can be polled to see when the transcriptions are finished.

```sql
EXEC google.speechv2.recognizers.batch_recognize 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@recognizersId='{{ recognizersId }}' --required 
@@json=
'{
"config": "{{ config }}", 
"configMask": "{{ configMask }}", 
"files": "{{ files }}", 
"processingStrategy": "{{ processingStrategy }}", 
"recognitionOutputConfig": "{{ recognitionOutputConfig }}", 
"recognizer": "{{ recognizer }}"
}'
;
```
</TabItem>
<TabItem value="recognize">

Performs synchronous Speech recognition: receive results after all audio has been sent and processed.

```sql
EXEC google.speechv2.recognizers.recognize 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@recognizersId='{{ recognizersId }}' --required 
@@json=
'{
"config": "{{ config }}", 
"configMask": "{{ configMask }}", 
"content": "{{ content }}", 
"uri": "{{ uri }}"
}'
;
```
</TabItem>
<TabItem value="undelete">

Undeletes the Recognizer.

```sql
EXEC google.speechv2.recognizers.undelete 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@recognizersId='{{ recognizersId }}' --required 
@@json=
'{
"etag": "{{ etag }}", 
"name": "{{ name }}", 
"validateOnly": {{ validateOnly }}
}'
;
```
</TabItem>
</Tabs>
