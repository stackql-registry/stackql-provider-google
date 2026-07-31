--- 
title: evaluation_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - evaluation_metrics
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

Creates, updates, deletes, gets or lists an <code>evaluation_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="evaluation_metrics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.evaluation_metrics" /></td></tr>
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
    <td>Identifier. The resource name of the EvaluationMetric. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/evaluationMetrics/&#123;evaluation_metric&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the EvaluationMetric was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of the EvaluationMetric.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The user-friendly display name for the EvaluationMetric.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. Customer-managed encryption key spec for this EvaluationMetric. If set, this EvaluationMetric will be secured by this key. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="gcsUri" /></td>
    <td><code>string</code></td>
    <td>Optional. The Google Cloud Storage URI that stores the metric specification..</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels for the evaluation metric.</td>
</tr>
<tr>
    <td><CopyableCode code="metric" /></td>
    <td><code>object</code></td>
    <td>Optional. The metric configuration. Only LLMMetric and CustomCodeExecutionMetric are supported. (id: GoogleCloudAiplatformV1Metric)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the EvaluationMetric was last updated.</td>
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
    <td>Identifier. The resource name of the EvaluationMetric. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/evaluationMetrics/&#123;evaluation_metric&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the EvaluationMetric was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A description of the EvaluationMetric.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The user-friendly display name for the EvaluationMetric.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. Customer-managed encryption key spec for this EvaluationMetric. If set, this EvaluationMetric will be secured by this key. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="gcsUri" /></td>
    <td><code>string</code></td>
    <td>Optional. The Google Cloud Storage URI that stores the metric specification..</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels for the evaluation metric.</td>
</tr>
<tr>
    <td><CopyableCode code="metric" /></td>
    <td><code>object</code></td>
    <td>Optional. The metric configuration. Only LLMMetric and CustomCodeExecutionMetric are supported. (id: GoogleCloudAiplatformV1Metric)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the EvaluationMetric was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-evaluationMetricsId"><code>evaluationMetricsId</code></a></td>
    <td></td>
    <td>Gets an EvaluationMetric.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists EvaluationMetrics.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-evaluationMetricId"><code>evaluationMetricId</code></a></td>
    <td>Creates an EvaluationMetric.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-evaluationMetricsId"><code>evaluationMetricsId</code></a></td>
    <td></td>
    <td>Deletes an EvaluationMetric.</td>
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
<tr id="parameter-evaluationMetricsId">
    <td><CopyableCode code="evaluationMetricsId" /></td>
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
<tr id="parameter-evaluationMetricId">
    <td><CopyableCode code="evaluationMetricId" /></td>
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

Gets an EvaluationMetric.

```sql
SELECT
name,
createTime,
description,
displayName,
encryptionSpec,
gcsUri,
labels,
metric,
updateTime
FROM google.aiplatform.evaluation_metrics
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND evaluationMetricsId = '{{ evaluationMetricsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists EvaluationMetrics.

```sql
SELECT
name,
createTime,
description,
displayName,
encryptionSpec,
gcsUri,
labels,
metric,
updateTime
FROM google.aiplatform.evaluation_metrics
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
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

Creates an EvaluationMetric.

```sql
INSERT INTO google.aiplatform.evaluation_metrics (
data__metric,
data__labels,
data__gcsUri,
data__name,
data__encryptionSpec,
data__description,
data__displayName,
projectsId,
locationsId,
evaluationMetricId
)
SELECT 
'{{ metric }}',
'{{ labels }}',
'{{ gcsUri }}',
'{{ name }}',
'{{ encryptionSpec }}',
'{{ description }}',
'{{ displayName }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ evaluationMetricId }}'
RETURNING
name,
createTime,
description,
displayName,
encryptionSpec,
gcsUri,
labels,
metric,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: evaluation_metrics
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the evaluation_metrics resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the evaluation_metrics resource.
    - name: metric
      description: |
        Optional. The metric configuration. Only LLMMetric and CustomCodeExecutionMetric are supported.
      value:
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
            generationConfig:
              speechConfig:
                languageCode: "{{ languageCode }}"
                multiSpeakerVoiceConfig: "{{ multiSpeakerVoiceConfig }}"
                voiceConfig: "{{ voiceConfig }}"
              seed: {{ seed }}
              imageConfig:
                personGeneration: "{{ personGeneration }}"
                aspectRatio: "{{ aspectRatio }}"
                imageSize: "{{ imageSize }}"
                prominentPeople: "{{ prominentPeople }}"
                imageOutputOptions: "{{ imageOutputOptions }}"
              audioTranscriptionConfig:
                customVocabulary: "{{ customVocabulary }}"
                languageHints: "{{ languageHints }}"
                diarization: {{ diarization }}
                adaptationPhrases: "{{ adaptationPhrases }}"
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
              routingConfig:
                manualMode: "{{ manualMode }}"
                autoMode: "{{ autoMode }}"
              audioTimestamp: {{ audioTimestamp }}
              temperature: {{ temperature }}
              stopSequences:
                - "{{ stopSequences }}"
              responseLogprobs: {{ responseLogprobs }}
              responseMimeType: "{{ responseMimeType }}"
              mediaResolution: "{{ mediaResolution }}"
              frequencyPenalty: {{ frequencyPenalty }}
          rubricGroupKey: "{{ rubricGroupKey }}"
          resultParserConfig:
            customCodeParserConfig:
              parsingFunction: "{{ parsingFunction }}"
          predefinedRubricGenerationSpec:
            metricSpecName: "{{ metricSpecName }}"
            metricSpecParameters: "{{ metricSpecParameters }}"
          metricPromptTemplate: "{{ metricPromptTemplate }}"
          rubricGenerationSpec:
            promptTemplate: "{{ promptTemplate }}"
            modelConfig:
              samplingCount: {{ samplingCount }}
              flipEnabled: {{ flipEnabled }}
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
            rubricContentType: "{{ rubricContentType }}"
          additionalConfig: "{{ additionalConfig }}"
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Labels for the evaluation metric.
    - name: gcsUri
      value: "{{ gcsUri }}"
      description: |
        Optional. The Google Cloud Storage URI that stores the metric specification..
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The resource name of the EvaluationMetric. Format: \`projects/{project}/locations/{location}/evaluationMetrics/{evaluation_metric}\`
    - name: encryptionSpec
      description: |
        Optional. Customer-managed encryption key spec for this EvaluationMetric. If set, this EvaluationMetric will be secured by this key.
      value:
        kmsKeyName: "{{ kmsKeyName }}"
    - name: description
      value: "{{ description }}"
      description: |
        Optional. A description of the EvaluationMetric.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. The user-friendly display name for the EvaluationMetric.
    - name: evaluationMetricId
      value: "{{ evaluationMetricId }}"
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

Deletes an EvaluationMetric.

```sql
DELETE FROM google.aiplatform.evaluation_metrics
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND evaluationMetricsId = '{{ evaluationMetricsId }}' --required
;
```
</TabItem>
</Tabs>
