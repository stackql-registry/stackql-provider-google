--- 
title: online_evaluators
hide_title: false
hide_table_of_contents: false
keywords:
  - online_evaluators
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

Creates, updates, deletes, gets or lists an <code>online_evaluators</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="online_evaluators" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.online_evaluators" /></td></tr>
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
    <td>Identifier. The resource name of the OnlineEvaluator. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/onlineEvaluators/&#123;id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="agentResource" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The name of the agent that the OnlineEvaluator evaluates periodically. This value is used to filter the traces with a matching cloud.resource_id and link the evaluation results with relevant dashboards/UIs. This field is immutable. Once set, it cannot be changed.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudObservability" /></td>
    <td><code>object</code></td>
    <td>Data source for the OnlineEvaluator, based on Google Cloud Observability stack (Cloud Trace & Cloud Logging). (id: GoogleCloudAiplatformV1OnlineEvaluatorCloudObservability)</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Required. Configuration for the OnlineEvaluator. (id: GoogleCloudAiplatformV1OnlineEvaluatorConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the OnlineEvaluator was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Human-readable name for the OnlineEvaluator. The name doesn't have to be unique. The name can consist of any UTF-8 characters. The maximum length is `63` characters. If the display name exceeds max characters, an `INVALID_ARGUMENT` error is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="metricSources" /></td>
    <td><code>array</code></td>
    <td>Required. A list of metric sources to be used for evaluating samples. At least one MetricSource must be provided. Right now, only predefined metrics and registered metrics are supported. Every registered metric must have `display_name` (or `title`) and `score_range` defined. Otherwise, the evaluations will fail. The maximum number of `metric_sources` is 25.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the OnlineEvaluator. (STATE_UNSPECIFIED, ACTIVE, SUSPENDED, FAILED, WARNING)</td>
</tr>
<tr>
    <td><CopyableCode code="stateDetails" /></td>
    <td><code>array</code></td>
    <td>Output only. Contains additional information about the state of the OnlineEvaluator. This is used to provide more details in the event of a failure.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the OnlineEvaluator was last updated.</td>
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
    <td>Identifier. The resource name of the OnlineEvaluator. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/onlineEvaluators/&#123;id&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="agentResource" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The name of the agent that the OnlineEvaluator evaluates periodically. This value is used to filter the traces with a matching cloud.resource_id and link the evaluation results with relevant dashboards/UIs. This field is immutable. Once set, it cannot be changed.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudObservability" /></td>
    <td><code>object</code></td>
    <td>Data source for the OnlineEvaluator, based on Google Cloud Observability stack (Cloud Trace & Cloud Logging). (id: GoogleCloudAiplatformV1OnlineEvaluatorCloudObservability)</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Required. Configuration for the OnlineEvaluator. (id: GoogleCloudAiplatformV1OnlineEvaluatorConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the OnlineEvaluator was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Human-readable name for the OnlineEvaluator. The name doesn't have to be unique. The name can consist of any UTF-8 characters. The maximum length is `63` characters. If the display name exceeds max characters, an `INVALID_ARGUMENT` error is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="metricSources" /></td>
    <td><code>array</code></td>
    <td>Required. A list of metric sources to be used for evaluating samples. At least one MetricSource must be provided. Right now, only predefined metrics and registered metrics are supported. Every registered metric must have `display_name` (or `title`) and `score_range` defined. Otherwise, the evaluations will fail. The maximum number of `metric_sources` is 25.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the OnlineEvaluator. (STATE_UNSPECIFIED, ACTIVE, SUSPENDED, FAILED, WARNING)</td>
</tr>
<tr>
    <td><CopyableCode code="stateDetails" /></td>
    <td><code>array</code></td>
    <td>Output only. Contains additional information about the state of the OnlineEvaluator. This is used to provide more details in the event of a failure.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the OnlineEvaluator was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-onlineEvaluatorsId"><code>onlineEvaluatorsId</code></a></td>
    <td></td>
    <td>Gets details of an OnlineEvaluator.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists the OnlineEvaluators for the given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates an OnlineEvaluator in the given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-onlineEvaluatorsId"><code>onlineEvaluatorsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the fields of an OnlineEvaluator.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-onlineEvaluatorsId"><code>onlineEvaluatorsId</code></a></td>
    <td></td>
    <td>Deletes an OnlineEvaluator.</td>
</tr>
<tr>
    <td><a href="#suspend"><CopyableCode code="suspend" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-onlineEvaluatorsId"><code>onlineEvaluatorsId</code></a></td>
    <td></td>
    <td>Suspends an OnlineEvaluator. When an OnlineEvaluator is suspended, it won't run any evaluations until it is activated again.</td>
</tr>
<tr>
    <td><a href="#activate"><CopyableCode code="activate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-onlineEvaluatorsId"><code>onlineEvaluatorsId</code></a></td>
    <td></td>
    <td>Activates an OnlineEvaluator.</td>
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
<tr id="parameter-onlineEvaluatorsId">
    <td><CopyableCode code="onlineEvaluatorsId" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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

Gets details of an OnlineEvaluator.

```sql
SELECT
name,
agentResource,
cloudObservability,
config,
createTime,
displayName,
metricSources,
state,
stateDetails,
updateTime
FROM google.aiplatform.online_evaluators
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND onlineEvaluatorsId = '{{ onlineEvaluatorsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the OnlineEvaluators for the given project and location.

```sql
SELECT
name,
agentResource,
cloudObservability,
config,
createTime,
displayName,
metricSources,
state,
stateDetails,
updateTime
FROM google.aiplatform.online_evaluators
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND filter = '{{ filter }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
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

Creates an OnlineEvaluator in the given project and location.

```sql
INSERT INTO google.aiplatform.online_evaluators (
data__metricSources,
data__name,
data__config,
data__cloudObservability,
data__displayName,
data__agentResource,
projectsId,
locationsId
)
SELECT 
'{{ metricSources }}',
'{{ name }}',
'{{ config }}',
'{{ cloudObservability }}',
'{{ displayName }}',
'{{ agentResource }}',
'{{ projectsId }}',
'{{ locationsId }}'
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
- name: online_evaluators
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the online_evaluators resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the online_evaluators resource.
    - name: metricSources
      description: |
        Required. A list of metric sources to be used for evaluating samples. At least one MetricSource must be provided. Right now, only predefined metrics and registered metrics are supported. Every registered metric must have \`display_name\` (or \`title\`) and \`score_range\` defined. Otherwise, the evaluations will fail. The maximum number of \`metric_sources\` is 25.
      value:
        - metricResourceName: "{{ metricResourceName }}"
          metric:
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
                  generationConfig: "{{ generationConfig }}"
                rubricTypeOntology:
                  - "{{ rubricTypeOntology }}"
                rubricContentType: "{{ rubricContentType }}"
              additionalConfig: "{{ additionalConfig }}"
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The resource name of the OnlineEvaluator. Format: projects/{project}/locations/{location}/onlineEvaluators/{id}.
    - name: config
      description: |
        Required. Configuration for the OnlineEvaluator.
      value:
        randomSampling:
          percentage: {{ percentage }}
        maxEvaluatedSamplesPerRun: "{{ maxEvaluatedSamplesPerRun }}"
    - name: cloudObservability
      description: |
        Data source for the OnlineEvaluator, based on Google Cloud Observability stack (Cloud Trace & Cloud Logging).
      value:
        traceScope:
          filter:
            - duration:
                comparisonOperator: "{{ comparisonOperator }}"
                value: {{ value }}
              totalTokenUsage:
                comparisonOperator: "{{ comparisonOperator }}"
                value: {{ value }}
        logView: "{{ logView }}"
        openTelemetry:
          semconvVersion: "{{ semconvVersion }}"
        traceView: "{{ traceView }}"
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Optional. Human-readable name for the OnlineEvaluator. The name doesn't have to be unique. The name can consist of any UTF-8 characters. The maximum length is \`63\` characters. If the display name exceeds max characters, an \`INVALID_ARGUMENT\` error is returned.
    - name: agentResource
      value: "{{ agentResource }}"
      description: |
        Required. Immutable. The name of the agent that the OnlineEvaluator evaluates periodically. This value is used to filter the traces with a matching cloud.resource_id and link the evaluation results with relevant dashboards/UIs. This field is immutable. Once set, it cannot be changed.
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

Updates the fields of an OnlineEvaluator.

```sql
UPDATE google.aiplatform.online_evaluators
SET 
data__metricSources = '{{ metricSources }}',
data__name = '{{ name }}',
data__config = '{{ config }}',
data__cloudObservability = '{{ cloudObservability }}',
data__displayName = '{{ displayName }}',
data__agentResource = '{{ agentResource }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND onlineEvaluatorsId = '{{ onlineEvaluatorsId }}' --required
AND updateMask = '{{ updateMask}}'
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

Deletes an OnlineEvaluator.

```sql
DELETE FROM google.aiplatform.online_evaluators
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND onlineEvaluatorsId = '{{ onlineEvaluatorsId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="suspend"
    values={[
        { label: 'suspend', value: 'suspend' },
        { label: 'activate', value: 'activate' }
    ]}
>
<TabItem value="suspend">

Suspends an OnlineEvaluator. When an OnlineEvaluator is suspended, it won't run any evaluations until it is activated again.

```sql
EXEC google.aiplatform.online_evaluators.suspend 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@onlineEvaluatorsId='{{ onlineEvaluatorsId }}' --required
;
```
</TabItem>
<TabItem value="activate">

Activates an OnlineEvaluator.

```sql
EXEC google.aiplatform.online_evaluators.activate 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@onlineEvaluatorsId='{{ onlineEvaluatorsId }}' --required
;
```
</TabItem>
</Tabs>
