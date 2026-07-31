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
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
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
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
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

Creates an Evaluation Run.

```sql
INSERT INTO google.aiplatform.evaluation_runs (
data__evaluationConfig,
data__name,
data__inferenceConfigs,
data__metadata,
data__labels,
data__dataSource,
data__displayName,
projectsId,
locationsId
)
SELECT 
'{{ evaluationConfig }}',
'{{ name }}',
'{{ inferenceConfigs }}',
'{{ metadata }}',
'{{ labels }}',
'{{ dataSource }}',
'{{ displayName }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
completionTime,
createTime,
dataSource,
displayName,
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
    - name: evaluationConfig
      description: |
        Optional. The configuration used for the evaluation. Optional when analysis_configs is provided.
      value:
        outputConfig:
          bigqueryDestination:
            outputUri: "{{ outputUri }}"
          gcsDestination:
            outputUriPrefix: "{{ outputUriPrefix }}"
        datasetCustomMetrics:
          - displayName: "{{ displayName }}"
            aggregationFunction: "{{ aggregationFunction }}"
        autoraterConfig:
          sampleCount: {{ sampleCount }}
          autoraterModel: "{{ autoraterModel }}"
          generationConfig:
            speechConfig:
              languageCode: "{{ languageCode }}"
              multiSpeakerVoiceConfig:
                speakerVoiceConfigs: "{{ speakerVoiceConfigs }}"
              voiceConfig:
                replicatedVoiceConfig: "{{ replicatedVoiceConfig }}"
                prebuiltVoiceConfig: "{{ prebuiltVoiceConfig }}"
            seed: {{ seed }}
            imageConfig:
              personGeneration: "{{ personGeneration }}"
              aspectRatio: "{{ aspectRatio }}"
              imageSize: "{{ imageSize }}"
              prominentPeople: "{{ prominentPeople }}"
              imageOutputOptions:
                compressionQuality: {{ compressionQuality }}
                mimeType: "{{ mimeType }}"
            audioTranscriptionConfig:
              customVocabulary:
                - "{{ customVocabulary }}"
              languageHints:
                languageCodes: "{{ languageCodes }}"
              diarization: {{ diarization }}
              adaptationPhrases:
                - "{{ adaptationPhrases }}"
              languageAuto: "{{ languageAuto }}"
              wordTimestamp: {{ wordTimestamp }}
            maxOutputTokens: {{ maxOutputTokens }}
            responseModalities:
              - "{{ responseModalities }}"
            topP: {{ topP }}
            responseJsonSchema: "{{ responseJsonSchema }}"
            responseFormat:
              - audio:
                  mimeType: "{{ mimeType }}"
                  bitRate: {{ bitRate }}
                  delivery: "{{ delivery }}"
                  sampleRate: {{ sampleRate }}
                text:
                  mimeType: "{{ mimeType }}"
                  schema: "{{ schema }}"
                image:
                  mimeType: "{{ mimeType }}"
                  delivery: "{{ delivery }}"
                  aspectRatio: "{{ aspectRatio }}"
                  imageSize: "{{ imageSize }}"
                video:
                  delivery: "{{ delivery }}"
                  aspectRatio: "{{ aspectRatio }}"
                  gcsUri: "{{ gcsUri }}"
                  duration: "{{ duration }}"
            thinkingConfig:
              includeThoughts: {{ includeThoughts }}
              thinkingLevel: "{{ thinkingLevel }}"
              thinkingBudget: {{ thinkingBudget }}
            enableAffectiveDialog: {{ enableAffectiveDialog }}
            topK: {{ topK }}
            logprobs: {{ logprobs }}
            presencePenalty: {{ presencePenalty }}
            candidateCount: {{ candidateCount }}
            responseSchema:
              ref: "{{ ref }}"
              enum:
                - "{{ enum }}"
              minLength: "{{ minLength }}"
              title: "{{ title }}"
              minimum: {{ minimum }}
              maxProperties: "{{ maxProperties }}"
              properties: "{{ properties }}"
              nullable: {{ nullable }}
              example: "{{ example }}"
              minProperties: "{{ minProperties }}"
              type: "{{ type }}"
              pattern: "{{ pattern }}"
              additionalProperties: "{{ additionalProperties }}"
              format: "{{ format }}"
              propertyOrdering:
                - "{{ propertyOrdering }}"
              minItems: "{{ minItems }}"
              maximum: {{ maximum }}
              maxLength: "{{ maxLength }}"
              items:
                ref: "{{ ref }}"
                enum: "{{ enum }}"
                minLength: "{{ minLength }}"
                title: "{{ title }}"
                minimum: {{ minimum }}
                maxProperties: "{{ maxProperties }}"
                properties: "{{ properties }}"
                nullable: {{ nullable }}
                example: "{{ example }}"
                minProperties: "{{ minProperties }}"
                type: "{{ type }}"
                pattern: "{{ pattern }}"
                additionalProperties: "{{ additionalProperties }}"
                format: "{{ format }}"
                propertyOrdering: "{{ propertyOrdering }}"
                minItems: "{{ minItems }}"
                maximum: {{ maximum }}
                maxLength: "{{ maxLength }}"
                items: "{{ items }}"
                description: "{{ description }}"
                required: "{{ required }}"
                maxItems: "{{ maxItems }}"
                defs: "{{ defs }}"
                anyOf: "{{ anyOf }}"
                default: "{{ default }}"
              description: "{{ description }}"
              required:
                - "{{ required }}"
              maxItems: "{{ maxItems }}"
              defs: "{{ defs }}"
              anyOf:
                - ref: "{{ ref }}"
                  enum: "{{ enum }}"
                  minLength: "{{ minLength }}"
                  title: "{{ title }}"
                  minimum: {{ minimum }}
                  maxProperties: "{{ maxProperties }}"
                  properties: "{{ properties }}"
                  nullable: {{ nullable }}
                  example: "{{ example }}"
                  minProperties: "{{ minProperties }}"
                  type: "{{ type }}"
                  pattern: "{{ pattern }}"
                  additionalProperties: "{{ additionalProperties }}"
                  format: "{{ format }}"
                  propertyOrdering: "{{ propertyOrdering }}"
                  minItems: "{{ minItems }}"
                  maximum: {{ maximum }}
                  maxLength: "{{ maxLength }}"
                  items:
                    ref: "{{ ref }}"
                    enum: "{{ enum }}"
                    minLength: "{{ minLength }}"
                    title: "{{ title }}"
                    minimum: {{ minimum }}
                    maxProperties: "{{ maxProperties }}"
                    properties: "{{ properties }}"
                    nullable: {{ nullable }}
                    example: "{{ example }}"
                    minProperties: "{{ minProperties }}"
                    type: "{{ type }}"
                    pattern: "{{ pattern }}"
                    additionalProperties: "{{ additionalProperties }}"
                    format: "{{ format }}"
                    propertyOrdering: "{{ propertyOrdering }}"
                    minItems: "{{ minItems }}"
                    maximum: {{ maximum }}
                    maxLength: "{{ maxLength }}"
                    items: "{{ items }}"
                    description: "{{ description }}"
                    required: "{{ required }}"
                    maxItems: "{{ maxItems }}"
                    defs: "{{ defs }}"
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                  description: "{{ description }}"
                  required: "{{ required }}"
                  maxItems: "{{ maxItems }}"
                  defs: "{{ defs }}"
                  anyOf: "{{ anyOf }}"
                  default: "{{ default }}"
              default: "{{ default }}"
            routingConfig:
              manualMode:
                modelName: "{{ modelName }}"
              autoMode:
                modelRoutingPreference: "{{ modelRoutingPreference }}"
            audioTimestamp: {{ audioTimestamp }}
            temperature: {{ temperature }}
            stopSequences:
              - "{{ stopSequences }}"
            responseLogprobs: {{ responseLogprobs }}
            responseMimeType: "{{ responseMimeType }}"
            mediaResolution: "{{ mediaResolution }}"
            frequencyPenalty: {{ frequencyPenalty }}
        promptTemplate:
          gcsUri: "{{ gcsUri }}"
          promptTemplate: "{{ promptTemplate }}"
        cloudLoggingConfig:
          project: "{{ project }}"
          resourceLabels: "{{ resourceLabels }}"
          tracingContext:
            traceId: "{{ traceId }}"
            conversationId: "{{ conversationId }}"
            spanId: "{{ spanId }}"
          resourceType: "{{ resourceType }}"
        metrics:
          - llmBasedMetricSpec:
              metricPromptTemplate: "{{ metricPromptTemplate }}"
              predefinedRubricGenerationSpec:
                parameters: "{{ parameters }}"
                metricSpecName: "{{ metricSpecName }}"
              rubricGenerationSpec:
                rubricContentType: "{{ rubricContentType }}"
                promptTemplate: "{{ promptTemplate }}"
                modelConfig:
                  sampleCount: {{ sampleCount }}
                  autoraterModel: "{{ autoraterModel }}"
                  generationConfig: "{{ generationConfig }}"
                rubricTypeOntology:
                  - "{{ rubricTypeOntology }}"
                metricResourceName: "{{ metricResourceName }}"
              additionalConfig: "{{ additionalConfig }}"
              systemInstruction: "{{ systemInstruction }}"
              judgeAutoraterConfig:
                sampleCount: {{ sampleCount }}
                autoraterModel: "{{ autoraterModel }}"
                generationConfig:
                  speechConfig: "{{ speechConfig }}"
                  seed: {{ seed }}
                  imageConfig: "{{ imageConfig }}"
                  audioTranscriptionConfig: "{{ audioTranscriptionConfig }}"
                  maxOutputTokens: {{ maxOutputTokens }}
                  responseModalities: "{{ responseModalities }}"
                  topP: {{ topP }}
                  responseJsonSchema: "{{ responseJsonSchema }}"
                  responseFormat: "{{ responseFormat }}"
                  thinkingConfig: "{{ thinkingConfig }}"
                  enableAffectiveDialog: {{ enableAffectiveDialog }}
                  topK: {{ topK }}
                  logprobs: {{ logprobs }}
                  presencePenalty: {{ presencePenalty }}
                  candidateCount: {{ candidateCount }}
                  responseSchema: "{{ responseSchema }}"
                  routingConfig: "{{ routingConfig }}"
                  audioTimestamp: {{ audioTimestamp }}
                  temperature: {{ temperature }}
                  stopSequences: "{{ stopSequences }}"
                  responseLogprobs: {{ responseLogprobs }}
                  responseMimeType: "{{ responseMimeType }}"
                  mediaResolution: "{{ mediaResolution }}"
                  frequencyPenalty: {{ frequencyPenalty }}
              rubricGroupKey: "{{ rubricGroupKey }}"
            predefinedMetricSpec:
              parameters: "{{ parameters }}"
              metricSpecName: "{{ metricSpecName }}"
            metric: "{{ metric }}"
            computationBasedMetricSpec:
              type: "{{ type }}"
              parameters: "{{ parameters }}"
            metricResourceName: "{{ metricResourceName }}"
            rubricBasedMetricSpec:
              inlineRubrics:
                rubrics:
                  - type: "{{ type }}"
                    importance: "{{ importance }}"
                    rubricId: "{{ rubricId }}"
                    content:
                      property: "{{ property }}"
              rubricGenerationSpec:
                rubricContentType: "{{ rubricContentType }}"
                promptTemplate: "{{ promptTemplate }}"
                modelConfig:
                  sampleCount: {{ sampleCount }}
                  autoraterModel: "{{ autoraterModel }}"
                  generationConfig: "{{ generationConfig }}"
                rubricTypeOntology:
                  - "{{ rubricTypeOntology }}"
                metricResourceName: "{{ metricResourceName }}"
              metricPromptTemplate: "{{ metricPromptTemplate }}"
              rubricGroupKey: "{{ rubricGroupKey }}"
              judgeAutoraterConfig:
                sampleCount: {{ sampleCount }}
                autoraterModel: "{{ autoraterModel }}"
                generationConfig:
                  speechConfig: "{{ speechConfig }}"
                  seed: {{ seed }}
                  imageConfig: "{{ imageConfig }}"
                  audioTranscriptionConfig: "{{ audioTranscriptionConfig }}"
                  maxOutputTokens: {{ maxOutputTokens }}
                  responseModalities: "{{ responseModalities }}"
                  topP: {{ topP }}
                  responseJsonSchema: "{{ responseJsonSchema }}"
                  responseFormat: "{{ responseFormat }}"
                  thinkingConfig: "{{ thinkingConfig }}"
                  enableAffectiveDialog: {{ enableAffectiveDialog }}
                  topK: {{ topK }}
                  logprobs: {{ logprobs }}
                  presencePenalty: {{ presencePenalty }}
                  candidateCount: {{ candidateCount }}
                  responseSchema: "{{ responseSchema }}"
                  routingConfig: "{{ routingConfig }}"
                  audioTimestamp: {{ audioTimestamp }}
                  temperature: {{ temperature }}
                  stopSequences: "{{ stopSequences }}"
                  responseLogprobs: {{ responseLogprobs }}
                  responseMimeType: "{{ responseMimeType }}"
                  mediaResolution: "{{ mediaResolution }}"
                  frequencyPenalty: {{ frequencyPenalty }}
            metricConfig:
              pointwiseMetricSpec:
                metricPromptTemplate: "{{ metricPromptTemplate }}"
                systemInstruction: "{{ systemInstruction }}"
                customOutputFormatConfig:
                  returnRawOutput: {{ returnRawOutput }}
              bleuSpec:
                useEffectiveOrder: {{ useEffectiveOrder }}
              rougeSpec:
                useStemmer: {{ useStemmer }}
                rougeType: "{{ rougeType }}"
                splitSummaries: {{ splitSummaries }}
              exactMatchSpec: "{{ exactMatchSpec }}"
              computationBasedMetricSpec:
                type: "{{ type }}"
                parameters: "{{ parameters }}"
              predefinedMetricSpec:
                metricSpecName: "{{ metricSpecName }}"
                metricSpecParameters: "{{ metricSpecParameters }}"
              metadata:
                otherMetadata: "{{ otherMetadata }}"
                title: "{{ title }}"
                scoreRange:
                  min: {{ min }}
                  step: {{ step }}
                  description: "{{ description }}"
                  max: {{ max }}
              customCodeExecutionSpec:
                evaluationFunction: "{{ evaluationFunction }}"
              pairwiseMetricSpec:
                systemInstruction: "{{ systemInstruction }}"
                baselineResponseFieldName: "{{ baselineResponseFieldName }}"
                candidateResponseFieldName: "{{ candidateResponseFieldName }}"
                metricPromptTemplate: "{{ metricPromptTemplate }}"
                customOutputFormatConfig:
                  returnRawOutput: {{ returnRawOutput }}
              aggregationMetrics:
                - "{{ aggregationMetrics }}"
              llmBasedMetricSpec:
                systemInstruction: "{{ systemInstruction }}"
                judgeAutoraterConfig:
                  samplingCount: {{ samplingCount }}
                  flipEnabled: {{ flipEnabled }}
                  autoraterModel: "{{ autoraterModel }}"
                  generationConfig: "{{ generationConfig }}"
                rubricGroupKey: "{{ rubricGroupKey }}"
                resultParserConfig:
                  customCodeParserConfig: "{{ customCodeParserConfig }}"
                predefinedRubricGenerationSpec:
                  metricSpecName: "{{ metricSpecName }}"
                  metricSpecParameters: "{{ metricSpecParameters }}"
                metricPromptTemplate: "{{ metricPromptTemplate }}"
                rubricGenerationSpec:
                  promptTemplate: "{{ promptTemplate }}"
                  modelConfig: "{{ modelConfig }}"
                  rubricTypeOntology: "{{ rubricTypeOntology }}"
                  rubricContentType: "{{ rubricContentType }}"
                additionalConfig: "{{ additionalConfig }}"
        rubricConfigs:
          - predefinedRubricGenerationSpec:
              parameters: "{{ parameters }}"
              metricSpecName: "{{ metricSpecName }}"
            rubricGroupKey: "{{ rubricGroupKey }}"
            rubricGenerationSpec:
              rubricContentType: "{{ rubricContentType }}"
              promptTemplate: "{{ promptTemplate }}"
              modelConfig:
                sampleCount: {{ sampleCount }}
                autoraterModel: "{{ autoraterModel }}"
                generationConfig:
                  speechConfig: "{{ speechConfig }}"
                  seed: {{ seed }}
                  imageConfig: "{{ imageConfig }}"
                  audioTranscriptionConfig: "{{ audioTranscriptionConfig }}"
                  maxOutputTokens: {{ maxOutputTokens }}
                  responseModalities: "{{ responseModalities }}"
                  topP: {{ topP }}
                  responseJsonSchema: "{{ responseJsonSchema }}"
                  responseFormat: "{{ responseFormat }}"
                  thinkingConfig: "{{ thinkingConfig }}"
                  enableAffectiveDialog: {{ enableAffectiveDialog }}
                  topK: {{ topK }}
                  logprobs: {{ logprobs }}
                  presencePenalty: {{ presencePenalty }}
                  candidateCount: {{ candidateCount }}
                  responseSchema: "{{ responseSchema }}"
                  routingConfig: "{{ routingConfig }}"
                  audioTimestamp: {{ audioTimestamp }}
                  temperature: {{ temperature }}
                  stopSequences: "{{ stopSequences }}"
                  responseLogprobs: {{ responseLogprobs }}
                  responseMimeType: "{{ responseMimeType }}"
                  mediaResolution: "{{ mediaResolution }}"
                  frequencyPenalty: {{ frequencyPenalty }}
              rubricTypeOntology:
                - "{{ rubricTypeOntology }}"
              metricResourceName: "{{ metricResourceName }}"
        lossAnalysisConfig:
          - metric: "{{ metric }}"
            candidate: "{{ candidate }}"
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The resource name of the EvaluationRun. This is a unique identifier. Format: \`projects/{project}/locations/{location}/evaluationRuns/{evaluation_run}\`
    - name: inferenceConfigs
      value: "{{ inferenceConfigs }}"
      description: |
        Optional. The candidate to inference config map for the evaluation run. The candidate can be up to 128 characters long and can consist of any UTF-8 characters.
    - name: metadata
      value: "{{ metadata }}"
      description: |
        Optional. Metadata about the evaluation run, can be used by the caller to store additional tracking information about the evaluation run.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Labels for the evaluation run.
    - name: dataSource
      description: |
        Required. The data source for the evaluation run.
      value:
        evaluationSet: "{{ evaluationSet }}"
        bigqueryRequestSet:
          rubricsColumn: "{{ rubricsColumn }}"
          candidateResponseColumns: "{{ candidateResponseColumns }}"
          samplingConfig:
            samplingCount: {{ samplingCount }}
            samplingMethod: "{{ samplingMethod }}"
            samplingDuration: "{{ samplingDuration }}"
          uri: "{{ uri }}"
          promptColumn: "{{ promptColumn }}"
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. The display name of the Evaluation Run.
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
