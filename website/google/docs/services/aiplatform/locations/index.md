--- 
title: locations
hide_title: false
hide_table_of_contents: false
keywords:
  - locations
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
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>locations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>locations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.locations" /></td></tr>
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
    <td>Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The friendly name for this location, typically a nearby city name. For example, "Tokyo".</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Cross-service attributes for the location. For example &#123;"cloud.googleapis.com/region": "us-east1"&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="locationId" /></td>
    <td><code>string</code></td>
    <td>The canonical id for this location. For example: `"us-east1"`.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Service-specific metadata. For example the available capacity at the given location.</td>
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
    <td>Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The friendly name for this location, typically a nearby city name. For example, "Tokyo".</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Cross-service attributes for the location. For example &#123;"cloud.googleapis.com/region": "us-east1"&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="locationId" /></td>
    <td><code>string</code></td>
    <td>The canonical id for this location. For example: `"us-east1"`.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Service-specific metadata. For example the available capacity at the given location.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Gets information about a location.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-extraLocationTypes"><code>extraLocationTypes</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists information about the supported locations for this service.</td>
</tr>
<tr>
    <td><a href="#evaluate_dataset"><CopyableCode code="evaluate_dataset" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Evaluates a dataset based on a set of given metrics.</td>
</tr>
<tr>
    <td><a href="#deploy"><CopyableCode code="deploy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Deploys a model to a new endpoint.</td>
</tr>
<tr>
    <td><a href="#generate_instance_rubrics"><CopyableCode code="generate_instance_rubrics" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Generates rubrics for a given prompt. A rubric represents a single testable criterion for evaluation. One input prompt could have multiple rubrics This RPC allows users to get suggested rubrics based on provided prompt, which can then be reviewed and used for subsequent evaluations.</td>
</tr>
<tr>
    <td><a href="#augment_prompt"><CopyableCode code="augment_prompt" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Given an input prompt, it returns augmented prompt from vertex rag store to guide LLM towards generating grounded responses.</td>
</tr>
<tr>
    <td><a href="#corroborate_content"><CopyableCode code="corroborate_content" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Given an input text, it returns a score that evaluates the factuality of the text. It also extracts and returns claims from the text and provides supporting facts.</td>
</tr>
<tr>
    <td><a href="#evaluate_instances"><CopyableCode code="evaluate_instances" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Evaluates instances based on a given metric.</td>
</tr>
<tr>
    <td><a href="#generate_synthetic_data"><CopyableCode code="generate_synthetic_data" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Generates synthetic data based on the provided configuration.</td>
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
<tr id="parameter-extraLocationTypes">
    <td><CopyableCode code="extraLocationTypes" /></td>
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

Gets information about a location.

```sql
SELECT
name,
displayName,
labels,
locationId,
metadata
FROM google.aiplatform.locations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists information about the supported locations for this service.

```sql
SELECT
name,
displayName,
labels,
locationId,
metadata
FROM google.aiplatform.locations
WHERE projectsId = '{{ projectsId }}' -- required
AND filter = '{{ filter }}'
AND extraLocationTypes = '{{ extraLocationTypes }}'
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="evaluate_dataset"
    values={[
        { label: 'evaluate_dataset', value: 'evaluate_dataset' },
        { label: 'deploy', value: 'deploy' },
        { label: 'generate_instance_rubrics', value: 'generate_instance_rubrics' },
        { label: 'augment_prompt', value: 'augment_prompt' },
        { label: 'corroborate_content', value: 'corroborate_content' },
        { label: 'evaluate_instances', value: 'evaluate_instances' },
        { label: 'generate_synthetic_data', value: 'generate_synthetic_data' }
    ]}
>
<TabItem value="evaluate_dataset">

Evaluates a dataset based on a set of given metrics.

```sql
EXEC google.aiplatform.locations.evaluate_dataset 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"dataset": "{{ dataset }}", 
"outputConfig": "{{ outputConfig }}", 
"autoraterConfig": "{{ autoraterConfig }}", 
"metrics": "{{ metrics }}"
}'
;
```
</TabItem>
<TabItem value="deploy">

Deploys a model to a new endpoint.

```sql
EXEC google.aiplatform.locations.deploy 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"huggingFaceModelId": "{{ huggingFaceModelId }}", 
"modelConfig": "{{ modelConfig }}", 
"publisherModelName": "{{ publisherModelName }}", 
"deployConfig": "{{ deployConfig }}", 
"endpointConfig": "{{ endpointConfig }}"
}'
;
```
</TabItem>
<TabItem value="generate_instance_rubrics">

Generates rubrics for a given prompt. A rubric represents a single testable criterion for evaluation. One input prompt could have multiple rubrics This RPC allows users to get suggested rubrics based on provided prompt, which can then be reviewed and used for subsequent evaluations.

```sql
EXEC google.aiplatform.locations.generate_instance_rubrics 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"rubricGenerationSpec": "{{ rubricGenerationSpec }}", 
"agentConfig": "{{ agentConfig }}", 
"predefinedRubricGenerationSpec": "{{ predefinedRubricGenerationSpec }}", 
"contents": "{{ contents }}"
}'
;
```
</TabItem>
<TabItem value="augment_prompt">

Given an input prompt, it returns augmented prompt from vertex rag store to guide LLM towards generating grounded responses.

```sql
EXEC google.aiplatform.locations.augment_prompt 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"model": "{{ model }}", 
"contents": "{{ contents }}", 
"vertexRagStore": "{{ vertexRagStore }}"
}'
;
```
</TabItem>
<TabItem value="corroborate_content">

Given an input text, it returns a score that evaluates the factuality of the text. It also extracts and returns claims from the text and provides supporting facts.

```sql
EXEC google.aiplatform.locations.corroborate_content 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"content": "{{ content }}", 
"facts": "{{ facts }}", 
"parameters": "{{ parameters }}"
}'
;
```
</TabItem>
<TabItem value="evaluate_instances">

Evaluates instances based on a given metric.

```sql
EXEC google.aiplatform.locations.evaluate_instances 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"trajectoryExactMatchInput": "{{ trajectoryExactMatchInput }}", 
"toolNameMatchInput": "{{ toolNameMatchInput }}", 
"bleuInput": "{{ bleuInput }}", 
"pairwiseSummarizationQualityInput": "{{ pairwiseSummarizationQualityInput }}", 
"trajectoryAnyOrderMatchInput": "{{ trajectoryAnyOrderMatchInput }}", 
"toolParameterKeyMatchInput": "{{ toolParameterKeyMatchInput }}", 
"cometInput": "{{ cometInput }}", 
"metrics": "{{ metrics }}", 
"questionAnsweringRelevanceInput": "{{ questionAnsweringRelevanceInput }}", 
"toolParameterKvMatchInput": "{{ toolParameterKvMatchInput }}", 
"groundednessInput": "{{ groundednessInput }}", 
"pointwiseMetricInput": "{{ pointwiseMetricInput }}", 
"questionAnsweringQualityInput": "{{ questionAnsweringQualityInput }}", 
"pairwiseMetricInput": "{{ pairwiseMetricInput }}", 
"coherenceInput": "{{ coherenceInput }}", 
"fluencyInput": "{{ fluencyInput }}", 
"rougeInput": "{{ rougeInput }}", 
"questionAnsweringCorrectnessInput": "{{ questionAnsweringCorrectnessInput }}", 
"autoraterConfig": "{{ autoraterConfig }}", 
"summarizationHelpfulnessInput": "{{ summarizationHelpfulnessInput }}", 
"trajectoryPrecisionInput": "{{ trajectoryPrecisionInput }}", 
"instance": "{{ instance }}", 
"questionAnsweringHelpfulnessInput": "{{ questionAnsweringHelpfulnessInput }}", 
"toolCallValidInput": "{{ toolCallValidInput }}", 
"summarizationVerbosityInput": "{{ summarizationVerbosityInput }}", 
"trajectorySingleToolUseInput": "{{ trajectorySingleToolUseInput }}", 
"safetyInput": "{{ safetyInput }}", 
"summarizationQualityInput": "{{ summarizationQualityInput }}", 
"trajectoryInOrderMatchInput": "{{ trajectoryInOrderMatchInput }}", 
"trajectoryRecallInput": "{{ trajectoryRecallInput }}", 
"metricxInput": "{{ metricxInput }}", 
"rubricBasedInstructionFollowingInput": "{{ rubricBasedInstructionFollowingInput }}", 
"fulfillmentInput": "{{ fulfillmentInput }}", 
"pairwiseQuestionAnsweringQualityInput": "{{ pairwiseQuestionAnsweringQualityInput }}", 
"exactMatchInput": "{{ exactMatchInput }}"
}'
;
```
</TabItem>
<TabItem value="generate_synthetic_data">

Generates synthetic data based on the provided configuration.

```sql
EXEC google.aiplatform.locations.generate_synthetic_data 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"outputFieldSpecs": "{{ outputFieldSpecs }}", 
"examples": "{{ examples }}", 
"count": {{ count }}, 
"taskDescription": "{{ taskDescription }}"
}'
;
```
</TabItem>
</Tabs>
