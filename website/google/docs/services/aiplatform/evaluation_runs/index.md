--- 
title: evaluation_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - evaluation_runs
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

Creates, updates, deletes, gets or lists an <code>evaluation_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="evaluation_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.evaluation_runs" /></td></tr>
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
    <td>Identifier. The resource name of the EvaluationRun. This is a unique identifier. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/evaluationRuns/&#123;evaluation_run&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="completionTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the evaluation run was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the evaluation run was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSource" /></td>
    <td><code>object</code></td>
    <td>Required. The data source for the evaluation run. (id: GoogleCloudAiplatformV1EvaluationRunDataSource)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the Evaluation Run.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. Customer-managed encryption key spec for this EvaluationRun. If set, this EvaluationRun will be secured by this key. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). (id: GoogleRpcStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluationConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The configuration used for the evaluation. Optional when analysis_configs is provided. (id: GoogleCloudAiplatformV1EvaluationRunEvaluationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluationResults" /></td>
    <td><code>object</code></td>
    <td>Output only. The results of the evaluation run. Only populated when the evaluation run's state is SUCCEEDED. (id: GoogleCloudAiplatformV1EvaluationResults)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluationSetSnapshot" /></td>
    <td><code>string</code></td>
    <td>Output only. The specific evaluation set of the evaluation run. For runs with an evaluation set input, this will be that same set. For runs with BigQuery input, it's the sampled BigQuery dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="inferenceConfigs" /></td>
    <td><code>object</code></td>
    <td>Optional. The candidate to inference config map for the evaluation run. The candidate can be up to 128 characters long and can consist of any UTF-8 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels for the evaluation run.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>any</code></td>
    <td>Optional. Metadata about the evaluation run, can be used by the caller to store additional tracking information about the evaluation run.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the evaluation run. (STATE_UNSPECIFIED, PENDING, RUNNING, SUCCEEDED, FAILED, CANCELLED, INFERENCE, GENERATING_RUBRICS, GENERATING_LOSS_CLUSTERS)</td>
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
    <td>Identifier. The resource name of the EvaluationRun. This is a unique identifier. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/evaluationRuns/&#123;evaluation_run&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="completionTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the evaluation run was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the evaluation run was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSource" /></td>
    <td><code>object</code></td>
    <td>Required. The data source for the evaluation run. (id: GoogleCloudAiplatformV1EvaluationRunDataSource)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the Evaluation Run.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. Customer-managed encryption key spec for this EvaluationRun. If set, this EvaluationRun will be secured by this key. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). (id: GoogleRpcStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluationConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The configuration used for the evaluation. Optional when analysis_configs is provided. (id: GoogleCloudAiplatformV1EvaluationRunEvaluationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluationResults" /></td>
    <td><code>object</code></td>
    <td>Output only. The results of the evaluation run. Only populated when the evaluation run's state is SUCCEEDED. (id: GoogleCloudAiplatformV1EvaluationResults)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluationSetSnapshot" /></td>
    <td><code>string</code></td>
    <td>Output only. The specific evaluation set of the evaluation run. For runs with an evaluation set input, this will be that same set. For runs with BigQuery input, it's the sampled BigQuery dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="inferenceConfigs" /></td>
    <td><code>object</code></td>
    <td>Optional. The candidate to inference config map for the evaluation run. The candidate can be up to 128 characters long and can consist of any UTF-8 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels for the evaluation run.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>any</code></td>
    <td>Optional. Metadata about the evaluation run, can be used by the caller to store additional tracking information about the evaluation run.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the evaluation run. (STATE_UNSPECIFIED, PENDING, RUNNING, SUCCEEDED, FAILED, CANCELLED, INFERENCE, GENERATING_RUBRICS, GENERATING_LOSS_CLUSTERS)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-evaluationRunsId"><code>evaluationRunsId</code></a></td>
    <td></td>
    <td>Gets an Evaluation Run.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists Evaluation Runs.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates an Evaluation Run.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-evaluationRunsId"><code>evaluationRunsId</code></a></td>
    <td></td>
    <td>Deletes an Evaluation Run.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-evaluationRunsId"><code>evaluationRunsId</code></a></td>
    <td></td>
    <td>Cancels an Evaluation Run. Attempts to cancel a running Evaluation Run asynchronously. Status of run can be checked via GetEvaluationRun.</td>
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
<tr id="parameter-evaluationRunsId">
    <td><CopyableCode code="evaluationRunsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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

Gets an Evaluation Run.

```sql
SELECT
name,
completionTime,
createTime,
dataSource,
displayName,
encryptionSpec,
error,
evaluationConfig,
evaluationResults,
evaluationSetSnapshot,
inferenceConfigs,
labels,
metadata,
state
FROM google.aiplatform.evaluation_runs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND evaluationRunsId = '{{ evaluationRunsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Evaluation Runs.

```sql
SELECT
name,
completionTime,
createTime,
dataSource,
displayName,
encryptionSpec,
error,
evaluationConfig,
evaluationResults,
evaluationSetSnapshot,
inferenceConfigs,
labels,
metadata,
state
FROM google.aiplatform.evaluation_runs
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


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates an Evaluation Run.

```sql
INSERT INTO google.aiplatform.evaluation_runs (
data__dataSource,
data__displayName,
data__encryptionSpec,
data__evaluationConfig,
data__inferenceConfigs,
data__labels,
data__metadata,
data__name,
projectsId,
locationsId
)
SELECT 
'{{ dataSource }}',
'{{ displayName }}',
'{{ encryptionSpec }}',
'{{ evaluationConfig }}',
'{{ inferenceConfigs }}',
'{{ labels }}',
'{{ metadata }}',
'{{ name }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
completionTime,
createTime,
dataSource,
displayName,
encryptionSpec,
error,
evaluationConfig,
evaluationResults,
evaluationSetSnapshot,
inferenceConfigs,
labels,
metadata,
state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: evaluation_runs
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the evaluation_runs resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the evaluation_runs resource.
    - name: dataSource
      description: |
        Required. The data source for the evaluation run.
      value:
        bigqueryRequestSet:
          candidateResponseColumns: "{{ candidateResponseColumns }}"
          promptColumn: "{{ promptColumn }}"
          rubricsColumn: "{{ rubricsColumn }}"
          samplingConfig:
            samplingCount: {{ samplingCount }}
            samplingDuration: "{{ samplingDuration }}"
            samplingMethod: "{{ samplingMethod }}"
          uri: "{{ uri }}"
        evaluationSet: "{{ evaluationSet }}"
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. The display name of the Evaluation Run.
    - name: encryptionSpec
      description: |
        Optional. Customer-managed encryption key spec for this EvaluationRun. If set, this EvaluationRun will be secured by this key.
      value:
        kmsKeyName: "{{ kmsKeyName }}"
    - name: evaluationConfig
      description: |
        Optional. The configuration used for the evaluation. Optional when analysis_configs is provided.
      value:
        autoraterConfig:
          autoraterModel: "{{ autoraterModel }}"
          generationConfig:
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
          sampleCount: {{ sampleCount }}
        cloudLoggingConfig:
          project: "{{ project }}"
          resourceLabels: "{{ resourceLabels }}"
          resourceType: "{{ resourceType }}"
          tracingContext:
            conversationId: "{{ conversationId }}"
            spanId: "{{ spanId }}"
            traceId: "{{ traceId }}"
        datasetCustomMetrics:
          - aggregationFunction: "{{ aggregationFunction }}"
            displayName: "{{ displayName }}"
        lossAnalysisConfig:
          - candidate: "{{ candidate }}"
            metric: "{{ metric }}"
        metrics:
          - computationBasedMetricSpec:
              parameters: "{{ parameters }}"
              type: "{{ type }}"
            llmBasedMetricSpec:
              additionalConfig: "{{ additionalConfig }}"
              judgeAutoraterConfig:
                autoraterModel: "{{ autoraterModel }}"
                generationConfig:
                  audioTimestamp: {{ audioTimestamp }}
                  audioTranscriptionConfig: "{{ audioTranscriptionConfig }}"
                  candidateCount: {{ candidateCount }}
                  enableAffectiveDialog: {{ enableAffectiveDialog }}
                  frequencyPenalty: {{ frequencyPenalty }}
                  imageConfig: "{{ imageConfig }}"
                  logprobs: {{ logprobs }}
                  maxOutputTokens: {{ maxOutputTokens }}
                  mediaResolution: "{{ mediaResolution }}"
                  presencePenalty: {{ presencePenalty }}
                  responseFormat: "{{ responseFormat }}"
                  responseJsonSchema: "{{ responseJsonSchema }}"
                  responseLogprobs: {{ responseLogprobs }}
                  responseMimeType: "{{ responseMimeType }}"
                  responseModalities: "{{ responseModalities }}"
                  responseSchema: "{{ responseSchema }}"
                  routingConfig: "{{ routingConfig }}"
                  seed: {{ seed }}
                  speechConfig: "{{ speechConfig }}"
                  stopSequences: "{{ stopSequences }}"
                  temperature: {{ temperature }}
                  thinkingConfig: "{{ thinkingConfig }}"
                  topK: {{ topK }}
                  topP: {{ topP }}
                sampleCount: {{ sampleCount }}
              metricPromptTemplate: "{{ metricPromptTemplate }}"
              predefinedRubricGenerationSpec:
                metricSpecName: "{{ metricSpecName }}"
                parameters: "{{ parameters }}"
              rubricGenerationSpec:
                metricResourceName: "{{ metricResourceName }}"
                modelConfig:
                  autoraterModel: "{{ autoraterModel }}"
                  generationConfig: "{{ generationConfig }}"
                  sampleCount: {{ sampleCount }}
                promptTemplate: "{{ promptTemplate }}"
                rubricContentType: "{{ rubricContentType }}"
                rubricTypeOntology:
                  - "{{ rubricTypeOntology }}"
              rubricGroupKey: "{{ rubricGroupKey }}"
              systemInstruction: "{{ systemInstruction }}"
            metric: "{{ metric }}"
            metricConfig:
              aggregationMetrics:
                - "{{ aggregationMetrics }}"
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
            metricResourceName: "{{ metricResourceName }}"
            predefinedMetricSpec:
              metricSpecName: "{{ metricSpecName }}"
              parameters: "{{ parameters }}"
            rubricBasedMetricSpec:
              inlineRubrics:
                rubrics:
                  - content:
                      property: "{{ property }}"
                    importance: "{{ importance }}"
                    rubricId: "{{ rubricId }}"
                    type: "{{ type }}"
              judgeAutoraterConfig:
                autoraterModel: "{{ autoraterModel }}"
                generationConfig:
                  audioTimestamp: {{ audioTimestamp }}
                  audioTranscriptionConfig: "{{ audioTranscriptionConfig }}"
                  candidateCount: {{ candidateCount }}
                  enableAffectiveDialog: {{ enableAffectiveDialog }}
                  frequencyPenalty: {{ frequencyPenalty }}
                  imageConfig: "{{ imageConfig }}"
                  logprobs: {{ logprobs }}
                  maxOutputTokens: {{ maxOutputTokens }}
                  mediaResolution: "{{ mediaResolution }}"
                  presencePenalty: {{ presencePenalty }}
                  responseFormat: "{{ responseFormat }}"
                  responseJsonSchema: "{{ responseJsonSchema }}"
                  responseLogprobs: {{ responseLogprobs }}
                  responseMimeType: "{{ responseMimeType }}"
                  responseModalities: "{{ responseModalities }}"
                  responseSchema: "{{ responseSchema }}"
                  routingConfig: "{{ routingConfig }}"
                  seed: {{ seed }}
                  speechConfig: "{{ speechConfig }}"
                  stopSequences: "{{ stopSequences }}"
                  temperature: {{ temperature }}
                  thinkingConfig: "{{ thinkingConfig }}"
                  topK: {{ topK }}
                  topP: {{ topP }}
                sampleCount: {{ sampleCount }}
              metricPromptTemplate: "{{ metricPromptTemplate }}"
              rubricGenerationSpec:
                metricResourceName: "{{ metricResourceName }}"
                modelConfig:
                  autoraterModel: "{{ autoraterModel }}"
                  generationConfig: "{{ generationConfig }}"
                  sampleCount: {{ sampleCount }}
                promptTemplate: "{{ promptTemplate }}"
                rubricContentType: "{{ rubricContentType }}"
                rubricTypeOntology:
                  - "{{ rubricTypeOntology }}"
              rubricGroupKey: "{{ rubricGroupKey }}"
        outputConfig:
          bigqueryDestination:
            outputUri: "{{ outputUri }}"
          gcsDestination:
            outputUriPrefix: "{{ outputUriPrefix }}"
        promptTemplate:
          gcsUri: "{{ gcsUri }}"
          promptTemplate: "{{ promptTemplate }}"
        rubricConfigs:
          - predefinedRubricGenerationSpec:
              metricSpecName: "{{ metricSpecName }}"
              parameters: "{{ parameters }}"
            rubricGenerationSpec:
              metricResourceName: "{{ metricResourceName }}"
              modelConfig:
                autoraterModel: "{{ autoraterModel }}"
                generationConfig:
                  audioTimestamp: {{ audioTimestamp }}
                  audioTranscriptionConfig: "{{ audioTranscriptionConfig }}"
                  candidateCount: {{ candidateCount }}
                  enableAffectiveDialog: {{ enableAffectiveDialog }}
                  frequencyPenalty: {{ frequencyPenalty }}
                  imageConfig: "{{ imageConfig }}"
                  logprobs: {{ logprobs }}
                  maxOutputTokens: {{ maxOutputTokens }}
                  mediaResolution: "{{ mediaResolution }}"
                  presencePenalty: {{ presencePenalty }}
                  responseFormat: "{{ responseFormat }}"
                  responseJsonSchema: "{{ responseJsonSchema }}"
                  responseLogprobs: {{ responseLogprobs }}
                  responseMimeType: "{{ responseMimeType }}"
                  responseModalities: "{{ responseModalities }}"
                  responseSchema: "{{ responseSchema }}"
                  routingConfig: "{{ routingConfig }}"
                  seed: {{ seed }}
                  speechConfig: "{{ speechConfig }}"
                  stopSequences: "{{ stopSequences }}"
                  temperature: {{ temperature }}
                  thinkingConfig: "{{ thinkingConfig }}"
                  topK: {{ topK }}
                  topP: {{ topP }}
                sampleCount: {{ sampleCount }}
              promptTemplate: "{{ promptTemplate }}"
              rubricContentType: "{{ rubricContentType }}"
              rubricTypeOntology:
                - "{{ rubricTypeOntology }}"
            rubricGroupKey: "{{ rubricGroupKey }}"
    - name: inferenceConfigs
      value: "{{ inferenceConfigs }}"
      description: |
        Optional. The candidate to inference config map for the evaluation run. The candidate can be up to 128 characters long and can consist of any UTF-8 characters.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Labels for the evaluation run.
    - name: metadata
      value: "{{ metadata }}"
      description: |
        Optional. Metadata about the evaluation run, can be used by the caller to store additional tracking information about the evaluation run.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The resource name of the EvaluationRun. This is a unique identifier. Format: \`projects/{project}/locations/{location}/evaluationRuns/{evaluation_run}\`
`}</CodeBlock>

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

Deletes an Evaluation Run.

```sql
DELETE FROM google.aiplatform.evaluation_runs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND evaluationRunsId = '{{ evaluationRunsId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel"
    values={[
        { label: 'cancel', value: 'cancel' }
    ]}
>
<TabItem value="cancel">

Cancels an Evaluation Run. Attempts to cancel a running Evaluation Run asynchronously. Status of run can be checked via GetEvaluationRun.

```sql
EXEC google.aiplatform.evaluation_runs.cancel 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@evaluationRunsId='{{ evaluationRunsId }}' --required
;
```
</TabItem>
</Tabs>
