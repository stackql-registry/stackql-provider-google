--- 
title: aiplatform
hide_title: false
hide_table_of_contents: false
keywords:
  - aiplatform
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

Creates, updates, deletes, gets or lists an <code>aiplatform</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aiplatform" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.aiplatform" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#evaluate_dataset"><CopyableCode code="evaluate_dataset" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Evaluates a dataset based on a set of given metrics.</td>
</tr>
<tr>
    <td><a href="#evaluate_instances"><CopyableCode code="evaluate_instances" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Evaluates instances based on a given metric.</td>
</tr>
<tr>
    <td><a href="#generate_instance_rubrics"><CopyableCode code="generate_instance_rubrics" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Generates rubrics for a given prompt. A rubric represents a single testable criterion for evaluation. One input prompt could have multiple rubrics This RPC allows users to get suggested rubrics based on provided prompt, which can then be reviewed and used for subsequent evaluations.</td>
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
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="evaluate_dataset"
    values={[
        { label: 'evaluate_dataset', value: 'evaluate_dataset' },
        { label: 'evaluate_instances', value: 'evaluate_instances' },
        { label: 'generate_instance_rubrics', value: 'generate_instance_rubrics' }
    ]}
>
<TabItem value="evaluate_dataset">

Evaluates a dataset based on a set of given metrics.

```sql
EXEC google.aiplatform.aiplatform.evaluate_dataset 
@@json=
'{
"autoraterConfig": "{{ autoraterConfig }}", 
"dataset": "{{ dataset }}", 
"location": "{{ location }}", 
"metrics": "{{ metrics }}", 
"outputConfig": "{{ outputConfig }}"
}'
;
```
</TabItem>
<TabItem value="evaluate_instances">

Evaluates instances based on a given metric.

```sql
EXEC google.aiplatform.aiplatform.evaluate_instances 
@@json=
'{
"autoraterConfig": "{{ autoraterConfig }}", 
"bleuInput": "{{ bleuInput }}", 
"coherenceInput": "{{ coherenceInput }}", 
"cometInput": "{{ cometInput }}", 
"exactMatchInput": "{{ exactMatchInput }}", 
"fluencyInput": "{{ fluencyInput }}", 
"fulfillmentInput": "{{ fulfillmentInput }}", 
"groundednessInput": "{{ groundednessInput }}", 
"instance": "{{ instance }}", 
"location": "{{ location }}", 
"metricSources": "{{ metricSources }}", 
"metrics": "{{ metrics }}", 
"metricxInput": "{{ metricxInput }}", 
"pairwiseMetricInput": "{{ pairwiseMetricInput }}", 
"pairwiseQuestionAnsweringQualityInput": "{{ pairwiseQuestionAnsweringQualityInput }}", 
"pairwiseSummarizationQualityInput": "{{ pairwiseSummarizationQualityInput }}", 
"pointwiseMetricInput": "{{ pointwiseMetricInput }}", 
"questionAnsweringCorrectnessInput": "{{ questionAnsweringCorrectnessInput }}", 
"questionAnsweringHelpfulnessInput": "{{ questionAnsweringHelpfulnessInput }}", 
"questionAnsweringQualityInput": "{{ questionAnsweringQualityInput }}", 
"questionAnsweringRelevanceInput": "{{ questionAnsweringRelevanceInput }}", 
"rougeInput": "{{ rougeInput }}", 
"rubricBasedInstructionFollowingInput": "{{ rubricBasedInstructionFollowingInput }}", 
"safetyInput": "{{ safetyInput }}", 
"summarizationHelpfulnessInput": "{{ summarizationHelpfulnessInput }}", 
"summarizationQualityInput": "{{ summarizationQualityInput }}", 
"summarizationVerbosityInput": "{{ summarizationVerbosityInput }}", 
"toolCallValidInput": "{{ toolCallValidInput }}", 
"toolNameMatchInput": "{{ toolNameMatchInput }}", 
"toolParameterKeyMatchInput": "{{ toolParameterKeyMatchInput }}", 
"toolParameterKvMatchInput": "{{ toolParameterKvMatchInput }}", 
"trajectoryAnyOrderMatchInput": "{{ trajectoryAnyOrderMatchInput }}", 
"trajectoryExactMatchInput": "{{ trajectoryExactMatchInput }}", 
"trajectoryInOrderMatchInput": "{{ trajectoryInOrderMatchInput }}", 
"trajectoryPrecisionInput": "{{ trajectoryPrecisionInput }}", 
"trajectoryRecallInput": "{{ trajectoryRecallInput }}", 
"trajectorySingleToolUseInput": "{{ trajectorySingleToolUseInput }}"
}'
;
```
</TabItem>
<TabItem value="generate_instance_rubrics">

Generates rubrics for a given prompt. A rubric represents a single testable criterion for evaluation. One input prompt could have multiple rubrics This RPC allows users to get suggested rubrics based on provided prompt, which can then be reviewed and used for subsequent evaluations.

```sql
EXEC google.aiplatform.aiplatform.generate_instance_rubrics 
@@json=
'{
"agentConfig": "{{ agentConfig }}", 
"contents": "{{ contents }}", 
"location": "{{ location }}", 
"metricResourceName": "{{ metricResourceName }}", 
"predefinedRubricGenerationSpec": "{{ predefinedRubricGenerationSpec }}", 
"rubricGenerationSpec": "{{ rubricGenerationSpec }}"
}'
;
```
</TabItem>
</Tabs>
