--- 
title: tuning_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - tuning_jobs
  - aiplatform
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

Creates, updates, deletes, gets or lists a <code>tuning_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tuning_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.tuning_jobs" /></td></tr>
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
    <td>Output only. Identifier. Resource name of a TuningJob. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/tuningJobs/&#123;tuning_job&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="baseModel" /></td>
    <td><code>string</code></td>
    <td>The base model that is being tuned. See [Supported models](https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/tuning#supported_models).</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the TuningJob was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the TuningJob.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Customer-managed encryption key options for a TuningJob. If this is set, then all resources created by the TuningJob will be encrypted with the provided encryption key. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the TuningJob entered any of the following JobStates: `JOB_STATE_SUCCEEDED`, `JOB_STATE_FAILED`, `JOB_STATE_CANCELLED`, `JOB_STATE_EXPIRED`.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). (id: GoogleRpcStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluateDatasetRuns" /></td>
    <td><code>array</code></td>
    <td>Output only. Evaluation runs for the Tuning Job.</td>
</tr>
<tr>
    <td><CopyableCode code="experiment" /></td>
    <td><code>string</code></td>
    <td>Output only. The Experiment associated with this TuningJob.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels with user-defined metadata to organize TuningJob and generated resources such as Model and Endpoint. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.</td>
</tr>
<tr>
    <td><CopyableCode code="preTunedModel" /></td>
    <td><code>object</code></td>
    <td>The pre-tuned model for continuous tuning. (id: GoogleCloudAiplatformV1PreTunedModel)</td>
</tr>
<tr>
    <td><CopyableCode code="preferenceOptimizationSpec" /></td>
    <td><code>object</code></td>
    <td>Tuning Spec for Preference Optimization. (id: GoogleCloudAiplatformV1PreferenceOptimizationSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>The service account that the tuningJob workload runs as. If not specified, the Vertex AI Secure Fine-Tuned Service Agent in the project will be used. See https://cloud.google.com/iam/docs/service-agents#vertex-ai-secure-fine-tuning-service-agent Users starting the pipeline must have the `iam.serviceAccounts.actAs` permission on this service account.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the TuningJob for the first time entered the `JOB_STATE_RUNNING` state.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The detailed state of the job. (JOB_STATE_UNSPECIFIED, JOB_STATE_QUEUED, JOB_STATE_PENDING, JOB_STATE_RUNNING, JOB_STATE_SUCCEEDED, JOB_STATE_FAILED, JOB_STATE_CANCELLING, JOB_STATE_CANCELLED, JOB_STATE_PAUSED, JOB_STATE_EXPIRED, JOB_STATE_UPDATING, JOB_STATE_PARTIALLY_SUCCEEDED)</td>
</tr>
<tr>
    <td><CopyableCode code="supervisedTuningSpec" /></td>
    <td><code>object</code></td>
    <td>Tuning Spec for Supervised Fine Tuning. (id: GoogleCloudAiplatformV1SupervisedTuningSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="tunedModel" /></td>
    <td><code>object</code></td>
    <td>Output only. The tuned model resources associated with this TuningJob. (id: GoogleCloudAiplatformV1TunedModel)</td>
</tr>
<tr>
    <td><CopyableCode code="tunedModelDisplayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The display name of the TunedModel. The name can be up to 128 characters long and can consist of any UTF-8 characters. For continuous tuning, tuned_model_display_name will by default use the same display name as the pre-tuned model. If a new display name is provided, the tuning job will create a new model instead of a new version.</td>
</tr>
<tr>
    <td><CopyableCode code="tuningDataStats" /></td>
    <td><code>object</code></td>
    <td>Output only. The tuning data statistics associated with this TuningJob. (id: GoogleCloudAiplatformV1TuningDataStats)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the TuningJob was most recently updated.</td>
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
    <td>Output only. Identifier. Resource name of a TuningJob. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/tuningJobs/&#123;tuning_job&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="baseModel" /></td>
    <td><code>string</code></td>
    <td>The base model that is being tuned. See [Supported models](https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/tuning#supported_models).</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the TuningJob was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the TuningJob.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Customer-managed encryption key options for a TuningJob. If this is set, then all resources created by the TuningJob will be encrypted with the provided encryption key. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the TuningJob entered any of the following JobStates: `JOB_STATE_SUCCEEDED`, `JOB_STATE_FAILED`, `JOB_STATE_CANCELLED`, `JOB_STATE_EXPIRED`.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). (id: GoogleRpcStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluateDatasetRuns" /></td>
    <td><code>array</code></td>
    <td>Output only. Evaluation runs for the Tuning Job.</td>
</tr>
<tr>
    <td><CopyableCode code="experiment" /></td>
    <td><code>string</code></td>
    <td>Output only. The Experiment associated with this TuningJob.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels with user-defined metadata to organize TuningJob and generated resources such as Model and Endpoint. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.</td>
</tr>
<tr>
    <td><CopyableCode code="preTunedModel" /></td>
    <td><code>object</code></td>
    <td>The pre-tuned model for continuous tuning. (id: GoogleCloudAiplatformV1PreTunedModel)</td>
</tr>
<tr>
    <td><CopyableCode code="preferenceOptimizationSpec" /></td>
    <td><code>object</code></td>
    <td>Tuning Spec for Preference Optimization. (id: GoogleCloudAiplatformV1PreferenceOptimizationSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>The service account that the tuningJob workload runs as. If not specified, the Vertex AI Secure Fine-Tuned Service Agent in the project will be used. See https://cloud.google.com/iam/docs/service-agents#vertex-ai-secure-fine-tuning-service-agent Users starting the pipeline must have the `iam.serviceAccounts.actAs` permission on this service account.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the TuningJob for the first time entered the `JOB_STATE_RUNNING` state.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The detailed state of the job. (JOB_STATE_UNSPECIFIED, JOB_STATE_QUEUED, JOB_STATE_PENDING, JOB_STATE_RUNNING, JOB_STATE_SUCCEEDED, JOB_STATE_FAILED, JOB_STATE_CANCELLING, JOB_STATE_CANCELLED, JOB_STATE_PAUSED, JOB_STATE_EXPIRED, JOB_STATE_UPDATING, JOB_STATE_PARTIALLY_SUCCEEDED)</td>
</tr>
<tr>
    <td><CopyableCode code="supervisedTuningSpec" /></td>
    <td><code>object</code></td>
    <td>Tuning Spec for Supervised Fine Tuning. (id: GoogleCloudAiplatformV1SupervisedTuningSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="tunedModel" /></td>
    <td><code>object</code></td>
    <td>Output only. The tuned model resources associated with this TuningJob. (id: GoogleCloudAiplatformV1TunedModel)</td>
</tr>
<tr>
    <td><CopyableCode code="tunedModelDisplayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The display name of the TunedModel. The name can be up to 128 characters long and can consist of any UTF-8 characters. For continuous tuning, tuned_model_display_name will by default use the same display name as the pre-tuned model. If a new display name is provided, the tuning job will create a new model instead of a new version.</td>
</tr>
<tr>
    <td><CopyableCode code="tuningDataStats" /></td>
    <td><code>object</code></td>
    <td>Output only. The tuning data statistics associated with this TuningJob. (id: GoogleCloudAiplatformV1TuningDataStats)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the TuningJob was most recently updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tuningJobsId"><code>tuningJobsId</code></a></td>
    <td></td>
    <td>Gets a tuning job.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists tuning jobs in a location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a tuning job. A created tuning job will be subsequently executed to start the model tuning process.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-tuningJobsId"><code>tuningJobsId</code></a></td>
    <td></td>
    <td>Cancels a tuning job. Starts an asynchronous cancellation request. The server makes a best effort to cancel the job, but success is not guaranteed. Clients can use GenAiTuningService.GetTuningJob or other methods to check whether the cancellation succeeded or whether the job completed despite cancellation. On successful cancellation, the tuning job is not deleted. Instead, its state is set to `CANCELLED`, and `error` is set to a status with a `google.rpc.Status.code` of 1, corresponding to `Code.CANCELLED`.</td>
</tr>
<tr>
    <td><a href="#rebase_tuned_model"><CopyableCode code="rebase_tuned_model" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Rebase a tuned model. A rebase operation takes a model that was previously tuned on a base model version, and retunes it on a new base model version. The rebase operation creates a new tuning job and a new tuned model.</td>
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
<tr id="parameter-tuningJobsId">
    <td><CopyableCode code="tuningJobsId" /></td>
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

Gets a tuning job.

```sql
SELECT
name,
baseModel,
createTime,
description,
encryptionSpec,
endTime,
error,
evaluateDatasetRuns,
experiment,
labels,
preTunedModel,
preferenceOptimizationSpec,
serviceAccount,
startTime,
state,
supervisedTuningSpec,
tunedModel,
tunedModelDisplayName,
tuningDataStats,
updateTime
FROM google.aiplatform.tuning_jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND tuningJobsId = '{{ tuningJobsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists tuning jobs in a location.

```sql
SELECT
name,
baseModel,
createTime,
description,
encryptionSpec,
endTime,
error,
evaluateDatasetRuns,
experiment,
labels,
preTunedModel,
preferenceOptimizationSpec,
serviceAccount,
startTime,
state,
supervisedTuningSpec,
tunedModel,
tunedModelDisplayName,
tuningDataStats,
updateTime
FROM google.aiplatform.tuning_jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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

Creates a tuning job. A created tuning job will be subsequently executed to start the model tuning process.

```sql
INSERT INTO google.aiplatform.tuning_jobs (
data__baseModel,
data__description,
data__encryptionSpec,
data__labels,
data__preTunedModel,
data__preferenceOptimizationSpec,
data__serviceAccount,
data__supervisedTuningSpec,
data__tunedModelDisplayName,
projectsId,
locationsId
)
SELECT 
'{{ baseModel }}',
'{{ description }}',
'{{ encryptionSpec }}',
'{{ labels }}',
'{{ preTunedModel }}',
'{{ preferenceOptimizationSpec }}',
'{{ serviceAccount }}',
'{{ supervisedTuningSpec }}',
'{{ tunedModelDisplayName }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
baseModel,
createTime,
description,
encryptionSpec,
endTime,
error,
evaluateDatasetRuns,
experiment,
labels,
preTunedModel,
preferenceOptimizationSpec,
serviceAccount,
startTime,
state,
supervisedTuningSpec,
tunedModel,
tunedModelDisplayName,
tuningDataStats,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tuning_jobs
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the tuning_jobs resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the tuning_jobs resource.
    - name: baseModel
      value: "{{ baseModel }}"
      description: |
        The base model that is being tuned. See [Supported models](https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/tuning#supported_models).
    - name: description
      value: "{{ description }}"
      description: |
        Optional. The description of the TuningJob.
    - name: encryptionSpec
      description: |
        Customer-managed encryption key options for a TuningJob. If this is set, then all resources created by the TuningJob will be encrypted with the provided encryption key.
      value:
        kmsKeyName: "{{ kmsKeyName }}"
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. The labels with user-defined metadata to organize TuningJob and generated resources such as Model and Endpoint. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.
    - name: preTunedModel
      description: |
        The pre-tuned model for continuous tuning.
      value:
        baseModel: "{{ baseModel }}"
        checkpointId: "{{ checkpointId }}"
        tunedModelName: "{{ tunedModelName }}"
    - name: preferenceOptimizationSpec
      description: |
        Tuning Spec for Preference Optimization.
      value:
        exportLastCheckpointOnly: {{ exportLastCheckpointOnly }}
        hyperParameters:
          adapterSize: "{{ adapterSize }}"
          beta: {{ beta }}
          epochCount: "{{ epochCount }}"
          learningRateMultiplier: {{ learningRateMultiplier }}
        trainingDatasetUri: "{{ trainingDatasetUri }}"
        validationDatasetUri: "{{ validationDatasetUri }}"
    - name: serviceAccount
      value: "{{ serviceAccount }}"
      description: |
        The service account that the tuningJob workload runs as. If not specified, the Vertex AI Secure Fine-Tuned Service Agent in the project will be used. See https://cloud.google.com/iam/docs/service-agents#vertex-ai-secure-fine-tuning-service-agent Users starting the pipeline must have the \`iam.serviceAccounts.actAs\` permission on this service account.
    - name: supervisedTuningSpec
      description: |
        Tuning Spec for Supervised Fine Tuning.
      value:
        evaluationConfig:
          autoraterConfig:
            autoraterModel: "{{ autoraterModel }}"
            flipEnabled: {{ flipEnabled }}
            generationConfig:
              audioTimestamp: {{ audioTimestamp }}
              audioTranscriptionConfig:
                adaptationPhrases: "{{ adaptationPhrases }}"
                customVocabulary: "{{ customVocabulary }}"
                diarization: {{ diarization }}
                languageAuto: "{{ languageAuto }}"
                languageCodes: "{{ languageCodes }}"
                languageHints: "{{ languageHints }}"
                wordTimestamp: {{ wordTimestamp }}
              candidateCount: {{ candidateCount }}
              enableAffectiveDialog: {{ enableAffectiveDialog }}
              frequencyPenalty: {{ frequencyPenalty }}
              imageConfig:
                aspectRatio: "{{ aspectRatio }}"
                imageOutputOptions: "{{ imageOutputOptions }}"
                imageSize: "{{ imageSize }}"
                personGeneration: "{{ personGeneration }}"
                prominentPeople: "{{ prominentPeople }}"
              logprobs: {{ logprobs }}
              maxOutputTokens: {{ maxOutputTokens }}
              mediaResolution: "{{ mediaResolution }}"
              presencePenalty: {{ presencePenalty }}
              responseFormat:
                - audio:
                    bitRate: {{ bitRate }}
                    delivery: "{{ delivery }}"
                    mimeType: "{{ mimeType }}"
                    sampleRate: {{ sampleRate }}
                  image:
                    aspectRatio: "{{ aspectRatio }}"
                    delivery: "{{ delivery }}"
                    imageSize: "{{ imageSize }}"
                    mimeType: "{{ mimeType }}"
                  text:
                    mimeType: "{{ mimeType }}"
                    schema: "{{ schema }}"
                  video:
                    aspectRatio: "{{ aspectRatio }}"
                    delivery: "{{ delivery }}"
                    duration: "{{ duration }}"
                    gcsUri: "{{ gcsUri }}"
                    resolution: "{{ resolution }}"
              responseJsonSchema: "{{ responseJsonSchema }}"
              responseLogprobs: {{ responseLogprobs }}
              responseMimeType: "{{ responseMimeType }}"
              responseModalities:
                - "{{ responseModalities }}"
              responseSchema:
                additionalProperties: "{{ additionalProperties }}"
                anyOf: "{{ anyOf }}"
                default: "{{ default }}"
                defs: "{{ defs }}"
                description: "{{ description }}"
                enum: "{{ enum }}"
                example: "{{ example }}"
                format: "{{ format }}"
                items: "{{ items }}"
                maxItems: "{{ maxItems }}"
                maxLength: "{{ maxLength }}"
                maxProperties: "{{ maxProperties }}"
                maximum: {{ maximum }}
                minItems: "{{ minItems }}"
                minLength: "{{ minLength }}"
                minProperties: "{{ minProperties }}"
                minimum: {{ minimum }}
                nullable: {{ nullable }}
                pattern: "{{ pattern }}"
                properties: "{{ properties }}"
                propertyOrdering: "{{ propertyOrdering }}"
                ref: "{{ ref }}"
                required: "{{ required }}"
                title: "{{ title }}"
                type: "{{ type }}"
              routingConfig:
                autoMode: "{{ autoMode }}"
                manualMode: "{{ manualMode }}"
              seed: {{ seed }}
              speechConfig:
                languageCode: "{{ languageCode }}"
                multiSpeakerVoiceConfig: "{{ multiSpeakerVoiceConfig }}"
                voiceConfig: "{{ voiceConfig }}"
              stopSequences:
                - "{{ stopSequences }}"
              temperature: {{ temperature }}
              thinkingConfig:
                includeThoughts: {{ includeThoughts }}
                thinkingBudget: {{ thinkingBudget }}
                thinkingLevel: "{{ thinkingLevel }}"
              topK: {{ topK }}
              topP: {{ topP }}
            samplingCount: {{ samplingCount }}
          datasetCustomMetrics:
            - aggregationFunction: "{{ aggregationFunction }}"
              displayName: "{{ displayName }}"
          inferenceGenerationConfig:
            audioTimestamp: {{ audioTimestamp }}
            audioTranscriptionConfig:
              adaptationPhrases:
                - "{{ adaptationPhrases }}"
              customVocabulary:
                - "{{ customVocabulary }}"
              diarization: {{ diarization }}
              languageAuto: "{{ languageAuto }}"
              languageCodes:
                - "{{ languageCodes }}"
              languageHints:
                languageCodes: "{{ languageCodes }}"
              wordTimestamp: {{ wordTimestamp }}
            candidateCount: {{ candidateCount }}
            enableAffectiveDialog: {{ enableAffectiveDialog }}
            frequencyPenalty: {{ frequencyPenalty }}
            imageConfig:
              aspectRatio: "{{ aspectRatio }}"
              imageOutputOptions:
                compressionQuality: {{ compressionQuality }}
                mimeType: "{{ mimeType }}"
              imageSize: "{{ imageSize }}"
              personGeneration: "{{ personGeneration }}"
              prominentPeople: "{{ prominentPeople }}"
            logprobs: {{ logprobs }}
            maxOutputTokens: {{ maxOutputTokens }}
            mediaResolution: "{{ mediaResolution }}"
            presencePenalty: {{ presencePenalty }}
            responseFormat:
              - audio:
                  bitRate: {{ bitRate }}
                  delivery: "{{ delivery }}"
                  mimeType: "{{ mimeType }}"
                  sampleRate: {{ sampleRate }}
                image:
                  aspectRatio: "{{ aspectRatio }}"
                  delivery: "{{ delivery }}"
                  imageSize: "{{ imageSize }}"
                  mimeType: "{{ mimeType }}"
                text:
                  mimeType: "{{ mimeType }}"
                  schema: "{{ schema }}"
                video:
                  aspectRatio: "{{ aspectRatio }}"
                  delivery: "{{ delivery }}"
                  duration: "{{ duration }}"
                  gcsUri: "{{ gcsUri }}"
                  resolution: "{{ resolution }}"
            responseJsonSchema: "{{ responseJsonSchema }}"
            responseLogprobs: {{ responseLogprobs }}
            responseMimeType: "{{ responseMimeType }}"
            responseModalities:
              - "{{ responseModalities }}"
            responseSchema:
              additionalProperties: "{{ additionalProperties }}"
              anyOf:
                - additionalProperties: "{{ additionalProperties }}"
                  anyOf: "{{ anyOf }}"
                  default: "{{ default }}"
                  defs: "{{ defs }}"
                  description: "{{ description }}"
                  enum: "{{ enum }}"
                  example: "{{ example }}"
                  format: "{{ format }}"
                  items:
                    additionalProperties: "{{ additionalProperties }}"
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                    defs: "{{ defs }}"
                    description: "{{ description }}"
                    enum: "{{ enum }}"
                    example: "{{ example }}"
                    format: "{{ format }}"
                    items: "{{ items }}"
                    maxItems: "{{ maxItems }}"
                    maxLength: "{{ maxLength }}"
                    maxProperties: "{{ maxProperties }}"
                    maximum: {{ maximum }}
                    minItems: "{{ minItems }}"
                    minLength: "{{ minLength }}"
                    minProperties: "{{ minProperties }}"
                    minimum: {{ minimum }}
                    nullable: {{ nullable }}
                    pattern: "{{ pattern }}"
                    properties: "{{ properties }}"
                    propertyOrdering: "{{ propertyOrdering }}"
                    ref: "{{ ref }}"
                    required: "{{ required }}"
                    title: "{{ title }}"
                    type: "{{ type }}"
                  maxItems: "{{ maxItems }}"
                  maxLength: "{{ maxLength }}"
                  maxProperties: "{{ maxProperties }}"
                  maximum: {{ maximum }}
                  minItems: "{{ minItems }}"
                  minLength: "{{ minLength }}"
                  minProperties: "{{ minProperties }}"
                  minimum: {{ minimum }}
                  nullable: {{ nullable }}
                  pattern: "{{ pattern }}"
                  properties: "{{ properties }}"
                  propertyOrdering: "{{ propertyOrdering }}"
                  ref: "{{ ref }}"
                  required: "{{ required }}"
                  title: "{{ title }}"
                  type: "{{ type }}"
              default: "{{ default }}"
              defs: "{{ defs }}"
              description: "{{ description }}"
              enum:
                - "{{ enum }}"
              example: "{{ example }}"
              format: "{{ format }}"
              items:
                additionalProperties: "{{ additionalProperties }}"
                anyOf: "{{ anyOf }}"
                default: "{{ default }}"
                defs: "{{ defs }}"
                description: "{{ description }}"
                enum: "{{ enum }}"
                example: "{{ example }}"
                format: "{{ format }}"
                items: "{{ items }}"
                maxItems: "{{ maxItems }}"
                maxLength: "{{ maxLength }}"
                maxProperties: "{{ maxProperties }}"
                maximum: {{ maximum }}
                minItems: "{{ minItems }}"
                minLength: "{{ minLength }}"
                minProperties: "{{ minProperties }}"
                minimum: {{ minimum }}
                nullable: {{ nullable }}
                pattern: "{{ pattern }}"
                properties: "{{ properties }}"
                propertyOrdering: "{{ propertyOrdering }}"
                ref: "{{ ref }}"
                required: "{{ required }}"
                title: "{{ title }}"
                type: "{{ type }}"
              maxItems: "{{ maxItems }}"
              maxLength: "{{ maxLength }}"
              maxProperties: "{{ maxProperties }}"
              maximum: {{ maximum }}
              minItems: "{{ minItems }}"
              minLength: "{{ minLength }}"
              minProperties: "{{ minProperties }}"
              minimum: {{ minimum }}
              nullable: {{ nullable }}
              pattern: "{{ pattern }}"
              properties: "{{ properties }}"
              propertyOrdering:
                - "{{ propertyOrdering }}"
              ref: "{{ ref }}"
              required:
                - "{{ required }}"
              title: "{{ title }}"
              type: "{{ type }}"
            routingConfig:
              autoMode:
                modelRoutingPreference: "{{ modelRoutingPreference }}"
              manualMode:
                modelName: "{{ modelName }}"
            seed: {{ seed }}
            speechConfig:
              languageCode: "{{ languageCode }}"
              multiSpeakerVoiceConfig:
                speakerVoiceConfigs: "{{ speakerVoiceConfigs }}"
              voiceConfig:
                prebuiltVoiceConfig: "{{ prebuiltVoiceConfig }}"
                replicatedVoiceConfig: "{{ replicatedVoiceConfig }}"
            stopSequences:
              - "{{ stopSequences }}"
            temperature: {{ temperature }}
            thinkingConfig:
              includeThoughts: {{ includeThoughts }}
              thinkingBudget: {{ thinkingBudget }}
              thinkingLevel: "{{ thinkingLevel }}"
            topK: {{ topK }}
            topP: {{ topP }}
          metrics:
            - aggregationMetrics: "{{ aggregationMetrics }}"
              bleuSpec:
                useEffectiveOrder: {{ useEffectiveOrder }}
              computationBasedMetricSpec:
                parameters: "{{ parameters }}"
                type: "{{ type }}"
              customCodeExecutionSpec:
                evaluationFunction: "{{ evaluationFunction }}"
              exactMatchSpec: "{{ exactMatchSpec }}"
              llmBasedMetricSpec:
                additionalConfig: "{{ additionalConfig }}"
                judgeAutoraterConfig:
                  autoraterModel: "{{ autoraterModel }}"
                  flipEnabled: {{ flipEnabled }}
                  generationConfig: "{{ generationConfig }}"
                  samplingCount: {{ samplingCount }}
                metricPromptTemplate: "{{ metricPromptTemplate }}"
                predefinedRubricGenerationSpec:
                  metricSpecName: "{{ metricSpecName }}"
                  metricSpecParameters: "{{ metricSpecParameters }}"
                resultParserConfig:
                  customCodeParserConfig: "{{ customCodeParserConfig }}"
                rubricGenerationSpec:
                  modelConfig: "{{ modelConfig }}"
                  promptTemplate: "{{ promptTemplate }}"
                  rubricContentType: "{{ rubricContentType }}"
                  rubricTypeOntology: "{{ rubricTypeOntology }}"
                rubricGroupKey: "{{ rubricGroupKey }}"
                systemInstruction: "{{ systemInstruction }}"
              metadata:
                otherMetadata: "{{ otherMetadata }}"
                scoreRange:
                  description: "{{ description }}"
                  max: {{ max }}
                  min: {{ min }}
                  step: {{ step }}
                title: "{{ title }}"
              pairwiseMetricSpec:
                baselineResponseFieldName: "{{ baselineResponseFieldName }}"
                candidateResponseFieldName: "{{ candidateResponseFieldName }}"
                customOutputFormatConfig:
                  returnRawOutput: {{ returnRawOutput }}
                metricPromptTemplate: "{{ metricPromptTemplate }}"
                systemInstruction: "{{ systemInstruction }}"
              pointwiseMetricSpec:
                customOutputFormatConfig:
                  returnRawOutput: {{ returnRawOutput }}
                metricPromptTemplate: "{{ metricPromptTemplate }}"
                systemInstruction: "{{ systemInstruction }}"
              predefinedMetricSpec:
                metricSpecName: "{{ metricSpecName }}"
                metricSpecParameters: "{{ metricSpecParameters }}"
              rougeSpec:
                rougeType: "{{ rougeType }}"
                splitSummaries: {{ splitSummaries }}
                useStemmer: {{ useStemmer }}
          outputConfig:
            gcsDestination:
              outputUriPrefix: "{{ outputUriPrefix }}"
        exportLastCheckpointOnly: {{ exportLastCheckpointOnly }}
        hyperParameters:
          adapterSize: "{{ adapterSize }}"
          epochCount: "{{ epochCount }}"
          learningRateMultiplier: {{ learningRateMultiplier }}
        trainingDatasetUri: "{{ trainingDatasetUri }}"
        validationDatasetUri: "{{ validationDatasetUri }}"
    - name: tunedModelDisplayName
      value: "{{ tunedModelDisplayName }}"
      description: |
        Optional. The display name of the TunedModel. The name can be up to 128 characters long and can consist of any UTF-8 characters. For continuous tuning, tuned_model_display_name will by default use the same display name as the pre-tuned model. If a new display name is provided, the tuning job will create a new model instead of a new version.
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel"
    values={[
        { label: 'cancel', value: 'cancel' },
        { label: 'rebase_tuned_model', value: 'rebase_tuned_model' }
    ]}
>
<TabItem value="cancel">

Cancels a tuning job. Starts an asynchronous cancellation request. The server makes a best effort to cancel the job, but success is not guaranteed. Clients can use GenAiTuningService.GetTuningJob or other methods to check whether the cancellation succeeded or whether the job completed despite cancellation. On successful cancellation, the tuning job is not deleted. Instead, its state is set to `CANCELLED`, and `error` is set to a status with a `google.rpc.Status.code` of 1, corresponding to `Code.CANCELLED`.

```sql
EXEC google.aiplatform.tuning_jobs.cancel 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@tuningJobsId='{{ tuningJobsId }}' --required
;
```
</TabItem>
<TabItem value="rebase_tuned_model">

Rebase a tuned model. A rebase operation takes a model that was previously tuned on a base model version, and retunes it on a new base model version. The rebase operation creates a new tuning job and a new tuned model.

```sql
EXEC google.aiplatform.tuning_jobs.rebase_tuned_model 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"artifactDestination": "{{ artifactDestination }}", 
"deployToSameEndpoint": {{ deployToSameEndpoint }}, 
"tunedModelRef": "{{ tunedModelRef }}", 
"tuningJob": "{{ tuningJob }}"
}'
;
```
</TabItem>
</Tabs>
