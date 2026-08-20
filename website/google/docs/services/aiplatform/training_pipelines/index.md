--- 
title: training_pipelines
hide_title: false
hide_table_of_contents: false
keywords:
  - training_pipelines
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

Creates, updates, deletes, gets or lists a <code>training_pipelines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="training_pipelines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.training_pipelines" /></td></tr>
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
    <td>Output only. Resource name of the TrainingPipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the TrainingPipeline was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The user-defined name of this TrainingPipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Customer-managed encryption key spec for a TrainingPipeline. If set, this TrainingPipeline will be secured by this key. Note: Model trained by this TrainingPipeline is also secured by this key if model_to_upload is not set separately. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the TrainingPipeline entered any of the following states: `PIPELINE_STATE_SUCCEEDED`, `PIPELINE_STATE_FAILED`, `PIPELINE_STATE_CANCELLED`.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). (id: GoogleRpcStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="inputDataConfig" /></td>
    <td><code>object</code></td>
    <td>Specifies Vertex AI owned input data that may be used for training the Model. The TrainingPipeline's training_task_definition should make clear whether this config is used and if there are any special requirements on how it should be filled. If nothing about this config is mentioned in the training_task_definition, then it should be assumed that the TrainingPipeline does not depend on this configuration. (id: GoogleCloudAiplatformV1InputDataConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels with user-defined metadata to organize TrainingPipelines. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.</td>
</tr>
<tr>
    <td><CopyableCode code="modelId" /></td>
    <td><code>string</code></td>
    <td>Optional. The ID to use for the uploaded Model, which will become the final component of the model resource name. This value may be up to 63 characters, and valid characters are `[a-z0-9_-]`. The first character cannot be a number or hyphen.</td>
</tr>
<tr>
    <td><CopyableCode code="modelToUpload" /></td>
    <td><code>object</code></td>
    <td>A trained machine learning Model. (id: GoogleCloudAiplatformV1Model)</td>
</tr>
<tr>
    <td><CopyableCode code="parentModel" /></td>
    <td><code>string</code></td>
    <td>Optional. When specify this field, the `model_to_upload` will not be uploaded as a new model, instead, it will become a new version of this `parent_model`.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the TrainingPipeline for the first time entered the `PIPELINE_STATE_RUNNING` state.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The detailed state of the pipeline. (PIPELINE_STATE_UNSPECIFIED, PIPELINE_STATE_QUEUED, PIPELINE_STATE_PENDING, PIPELINE_STATE_RUNNING, PIPELINE_STATE_SUCCEEDED, PIPELINE_STATE_FAILED, PIPELINE_STATE_CANCELLING, PIPELINE_STATE_CANCELLED, PIPELINE_STATE_PAUSED)</td>
</tr>
<tr>
    <td><CopyableCode code="trainingTaskDefinition" /></td>
    <td><code>string</code></td>
    <td>Required. A Google Cloud Storage path to the YAML file that defines the training task which is responsible for producing the model artifact, and may also include additional auxiliary work. The definition files that can be used here are found in gs://google-cloud-aiplatform/schema/trainingjob/definition/. Note: The URI given on output will be immutable and probably different, including the URI scheme, than the one given on input. The output URI will point to a location where the user only has a read access.</td>
</tr>
<tr>
    <td><CopyableCode code="trainingTaskInputs" /></td>
    <td><code>any</code></td>
    <td>Required. The training task's parameter(s), as specified in the training_task_definition's `inputs`.</td>
</tr>
<tr>
    <td><CopyableCode code="trainingTaskMetadata" /></td>
    <td><code>any</code></td>
    <td>Output only. The metadata information as specified in the training_task_definition's `metadata`. This metadata is an auxiliary runtime and final information about the training task. While the pipeline is running this information is populated only at a best effort basis. Only present if the pipeline's training_task_definition contains `metadata` object.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the TrainingPipeline was most recently updated.</td>
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
    <td>Output only. Resource name of the TrainingPipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the TrainingPipeline was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The user-defined name of this TrainingPipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpec" /></td>
    <td><code>object</code></td>
    <td>Customer-managed encryption key spec for a TrainingPipeline. If set, this TrainingPipeline will be secured by this key. Note: Model trained by this TrainingPipeline is also secured by this key if model_to_upload is not set separately. (id: GoogleCloudAiplatformV1EncryptionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the TrainingPipeline entered any of the following states: `PIPELINE_STATE_SUCCEEDED`, `PIPELINE_STATE_FAILED`, `PIPELINE_STATE_CANCELLED`.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). (id: GoogleRpcStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="inputDataConfig" /></td>
    <td><code>object</code></td>
    <td>Specifies Vertex AI owned input data that may be used for training the Model. The TrainingPipeline's training_task_definition should make clear whether this config is used and if there are any special requirements on how it should be filled. If nothing about this config is mentioned in the training_task_definition, then it should be assumed that the TrainingPipeline does not depend on this configuration. (id: GoogleCloudAiplatformV1InputDataConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels with user-defined metadata to organize TrainingPipelines. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.</td>
</tr>
<tr>
    <td><CopyableCode code="modelId" /></td>
    <td><code>string</code></td>
    <td>Optional. The ID to use for the uploaded Model, which will become the final component of the model resource name. This value may be up to 63 characters, and valid characters are `[a-z0-9_-]`. The first character cannot be a number or hyphen.</td>
</tr>
<tr>
    <td><CopyableCode code="modelToUpload" /></td>
    <td><code>object</code></td>
    <td>A trained machine learning Model. (id: GoogleCloudAiplatformV1Model)</td>
</tr>
<tr>
    <td><CopyableCode code="parentModel" /></td>
    <td><code>string</code></td>
    <td>Optional. When specify this field, the `model_to_upload` will not be uploaded as a new model, instead, it will become a new version of this `parent_model`.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the TrainingPipeline for the first time entered the `PIPELINE_STATE_RUNNING` state.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The detailed state of the pipeline. (PIPELINE_STATE_UNSPECIFIED, PIPELINE_STATE_QUEUED, PIPELINE_STATE_PENDING, PIPELINE_STATE_RUNNING, PIPELINE_STATE_SUCCEEDED, PIPELINE_STATE_FAILED, PIPELINE_STATE_CANCELLING, PIPELINE_STATE_CANCELLED, PIPELINE_STATE_PAUSED)</td>
</tr>
<tr>
    <td><CopyableCode code="trainingTaskDefinition" /></td>
    <td><code>string</code></td>
    <td>Required. A Google Cloud Storage path to the YAML file that defines the training task which is responsible for producing the model artifact, and may also include additional auxiliary work. The definition files that can be used here are found in gs://google-cloud-aiplatform/schema/trainingjob/definition/. Note: The URI given on output will be immutable and probably different, including the URI scheme, than the one given on input. The output URI will point to a location where the user only has a read access.</td>
</tr>
<tr>
    <td><CopyableCode code="trainingTaskInputs" /></td>
    <td><code>any</code></td>
    <td>Required. The training task's parameter(s), as specified in the training_task_definition's `inputs`.</td>
</tr>
<tr>
    <td><CopyableCode code="trainingTaskMetadata" /></td>
    <td><code>any</code></td>
    <td>Output only. The metadata information as specified in the training_task_definition's `metadata`. This metadata is an auxiliary runtime and final information about the training task. While the pipeline is running this information is populated only at a best effort basis. Only present if the pipeline's training_task_definition contains `metadata` object.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time when the TrainingPipeline was most recently updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-trainingPipelinesId"><code>trainingPipelinesId</code></a></td>
    <td></td>
    <td>Gets a TrainingPipeline.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>Lists TrainingPipelines in a Location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a TrainingPipeline. A created TrainingPipeline right away will be attempted to be run.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-trainingPipelinesId"><code>trainingPipelinesId</code></a></td>
    <td></td>
    <td>Deletes a TrainingPipeline.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-trainingPipelinesId"><code>trainingPipelinesId</code></a></td>
    <td></td>
    <td>Cancels a TrainingPipeline. Starts asynchronous cancellation on the TrainingPipeline. The server makes a best effort to cancel the pipeline, but success is not guaranteed. Clients can use PipelineService.GetTrainingPipeline or other methods to check whether the cancellation succeeded or whether the pipeline completed despite cancellation. On successful cancellation, the TrainingPipeline is not deleted; instead it becomes a pipeline with a TrainingPipeline.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`, and TrainingPipeline.state is set to `CANCELLED`.</td>
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
<tr id="parameter-trainingPipelinesId">
    <td><CopyableCode code="trainingPipelinesId" /></td>
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
<tr id="parameter-readMask">
    <td><CopyableCode code="readMask" /></td>
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

Gets a TrainingPipeline.

```sql
SELECT
name,
createTime,
displayName,
encryptionSpec,
endTime,
error,
inputDataConfig,
labels,
modelId,
modelToUpload,
parentModel,
startTime,
state,
trainingTaskDefinition,
trainingTaskInputs,
trainingTaskMetadata,
updateTime
FROM google.aiplatform.training_pipelines
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND trainingPipelinesId = '{{ trainingPipelinesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists TrainingPipelines in a Location.

```sql
SELECT
name,
createTime,
displayName,
encryptionSpec,
endTime,
error,
inputDataConfig,
labels,
modelId,
modelToUpload,
parentModel,
startTime,
state,
trainingTaskDefinition,
trainingTaskInputs,
trainingTaskMetadata,
updateTime
FROM google.aiplatform.training_pipelines
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND readMask = '{{ readMask }}'
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

Creates a TrainingPipeline. A created TrainingPipeline right away will be attempted to be run.

```sql
INSERT INTO google.aiplatform.training_pipelines (
data__displayName,
data__encryptionSpec,
data__inputDataConfig,
data__labels,
data__modelId,
data__modelToUpload,
data__parentModel,
data__trainingTaskDefinition,
data__trainingTaskInputs,
projectsId,
locationsId
)
SELECT 
'{{ displayName }}',
'{{ encryptionSpec }}',
'{{ inputDataConfig }}',
'{{ labels }}',
'{{ modelId }}',
'{{ modelToUpload }}',
'{{ parentModel }}',
'{{ trainingTaskDefinition }}',
'{{ trainingTaskInputs }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
createTime,
displayName,
encryptionSpec,
endTime,
error,
inputDataConfig,
labels,
modelId,
modelToUpload,
parentModel,
startTime,
state,
trainingTaskDefinition,
trainingTaskInputs,
trainingTaskMetadata,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: training_pipelines
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the training_pipelines resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the training_pipelines resource.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. The user-defined name of this TrainingPipeline.
    - name: encryptionSpec
      description: |
        Customer-managed encryption key spec for a TrainingPipeline. If set, this TrainingPipeline will be secured by this key. Note: Model trained by this TrainingPipeline is also secured by this key if model_to_upload is not set separately.
      value:
        kmsKeyName: "{{ kmsKeyName }}"
    - name: inputDataConfig
      description: |
        Specifies Vertex AI owned input data that may be used for training the Model. The TrainingPipeline's training_task_definition should make clear whether this config is used and if there are any special requirements on how it should be filled. If nothing about this config is mentioned in the training_task_definition, then it should be assumed that the TrainingPipeline does not depend on this configuration.
      value:
        annotationSchemaUri: "{{ annotationSchemaUri }}"
        annotationsFilter: "{{ annotationsFilter }}"
        bigqueryDestination:
          outputUri: "{{ outputUri }}"
        datasetId: "{{ datasetId }}"
        filterSplit:
          testFilter: "{{ testFilter }}"
          trainingFilter: "{{ trainingFilter }}"
          validationFilter: "{{ validationFilter }}"
        fractionSplit:
          testFraction: {{ testFraction }}
          trainingFraction: {{ trainingFraction }}
          validationFraction: {{ validationFraction }}
        gcsDestination:
          outputUriPrefix: "{{ outputUriPrefix }}"
        persistMlUseAssignment: {{ persistMlUseAssignment }}
        predefinedSplit:
          key: "{{ key }}"
        savedQueryId: "{{ savedQueryId }}"
        stratifiedSplit:
          key: "{{ key }}"
          testFraction: {{ testFraction }}
          trainingFraction: {{ trainingFraction }}
          validationFraction: {{ validationFraction }}
        timestampSplit:
          key: "{{ key }}"
          testFraction: {{ testFraction }}
          trainingFraction: {{ trainingFraction }}
          validationFraction: {{ validationFraction }}
    - name: labels
      value: "{{ labels }}"
      description: |
        The labels with user-defined metadata to organize TrainingPipelines. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.
    - name: modelId
      value: "{{ modelId }}"
      description: |
        Optional. The ID to use for the uploaded Model, which will become the final component of the model resource name. This value may be up to 63 characters, and valid characters are \`[a-z0-9_-]\`. The first character cannot be a number or hyphen.
    - name: modelToUpload
      description: |
        A trained machine learning Model.
      value:
        artifactUri: "{{ artifactUri }}"
        baseModelSource:
          genieSource:
            baseModelUri: "{{ baseModelUri }}"
          modelGardenSource:
            publicModelName: "{{ publicModelName }}"
            skipHfModelCache: {{ skipHfModelCache }}
            versionId: "{{ versionId }}"
        checkpoints:
          - checkpointId: "{{ checkpointId }}"
            epoch: "{{ epoch }}"
            step: "{{ step }}"
        containerSpec:
          args:
            - "{{ args }}"
          command:
            - "{{ command }}"
          deploymentTimeout: "{{ deploymentTimeout }}"
          env:
            - name: "{{ name }}"
              value: "{{ value }}"
          grpcPorts:
            - containerPort: {{ containerPort }}
          healthProbe:
            exec:
              command:
                - "{{ command }}"
            failureThreshold: {{ failureThreshold }}
            grpc:
              port: {{ port }}
              service: "{{ service }}"
            httpGet:
              host: "{{ host }}"
              httpHeaders:
                - name: "{{ name }}"
                  value: "{{ value }}"
              path: "{{ path }}"
              port: {{ port }}
              scheme: "{{ scheme }}"
            initialDelaySeconds: {{ initialDelaySeconds }}
            periodSeconds: {{ periodSeconds }}
            successThreshold: {{ successThreshold }}
            tcpSocket:
              host: "{{ host }}"
              port: {{ port }}
            timeoutSeconds: {{ timeoutSeconds }}
          healthRoute: "{{ healthRoute }}"
          imageUri: "{{ imageUri }}"
          invokeRoutePrefix: "{{ invokeRoutePrefix }}"
          livenessProbe:
            exec:
              command:
                - "{{ command }}"
            failureThreshold: {{ failureThreshold }}
            grpc:
              port: {{ port }}
              service: "{{ service }}"
            httpGet:
              host: "{{ host }}"
              httpHeaders:
                - name: "{{ name }}"
                  value: "{{ value }}"
              path: "{{ path }}"
              port: {{ port }}
              scheme: "{{ scheme }}"
            initialDelaySeconds: {{ initialDelaySeconds }}
            periodSeconds: {{ periodSeconds }}
            successThreshold: {{ successThreshold }}
            tcpSocket:
              host: "{{ host }}"
              port: {{ port }}
            timeoutSeconds: {{ timeoutSeconds }}
          ports:
            - containerPort: {{ containerPort }}
          predictRoute: "{{ predictRoute }}"
          sharedMemorySizeMb: "{{ sharedMemorySizeMb }}"
          startupProbe:
            exec:
              command:
                - "{{ command }}"
            failureThreshold: {{ failureThreshold }}
            grpc:
              port: {{ port }}
              service: "{{ service }}"
            httpGet:
              host: "{{ host }}"
              httpHeaders:
                - name: "{{ name }}"
                  value: "{{ value }}"
              path: "{{ path }}"
              port: {{ port }}
              scheme: "{{ scheme }}"
            initialDelaySeconds: {{ initialDelaySeconds }}
            periodSeconds: {{ periodSeconds }}
            successThreshold: {{ successThreshold }}
            tcpSocket:
              host: "{{ host }}"
              port: {{ port }}
            timeoutSeconds: {{ timeoutSeconds }}
        createTime: "{{ createTime }}"
        dataStats:
          testAnnotationsCount: "{{ testAnnotationsCount }}"
          testDataItemsCount: "{{ testDataItemsCount }}"
          trainingAnnotationsCount: "{{ trainingAnnotationsCount }}"
          trainingDataItemsCount: "{{ trainingDataItemsCount }}"
          validationAnnotationsCount: "{{ validationAnnotationsCount }}"
          validationDataItemsCount: "{{ validationDataItemsCount }}"
        defaultCheckpointId: "{{ defaultCheckpointId }}"
        deployedModels:
          - checkpointId: "{{ checkpointId }}"
            deployedModelId: "{{ deployedModelId }}"
            endpoint: "{{ endpoint }}"
        description: "{{ description }}"
        displayName: "{{ displayName }}"
        encryptionSpec:
          kmsKeyName: "{{ kmsKeyName }}"
        etag: "{{ etag }}"
        explanationSpec:
          metadata:
            featureAttributionsSchemaUri: "{{ featureAttributionsSchemaUri }}"
            inputs: "{{ inputs }}"
            latentSpaceSource: "{{ latentSpaceSource }}"
            outputs: "{{ outputs }}"
          parameters:
            examples:
              exampleGcsSource:
                dataFormat: "{{ dataFormat }}"
                gcsSource: "{{ gcsSource }}"
              nearestNeighborSearchConfig: "{{ nearestNeighborSearchConfig }}"
              neighborCount: {{ neighborCount }}
              presets:
                modality: "{{ modality }}"
                query: "{{ query }}"
            integratedGradientsAttribution:
              blurBaselineConfig:
                maxBlurSigma: {{ maxBlurSigma }}
              smoothGradConfig:
                featureNoiseSigma: "{{ featureNoiseSigma }}"
                noiseSigma: {{ noiseSigma }}
                noisySampleCount: {{ noisySampleCount }}
              stepCount: {{ stepCount }}
            outputIndices:
              - "{{ outputIndices }}"
            sampledShapleyAttribution:
              pathCount: {{ pathCount }}
            topK: {{ topK }}
            xraiAttribution:
              blurBaselineConfig:
                maxBlurSigma: {{ maxBlurSigma }}
              smoothGradConfig:
                featureNoiseSigma: "{{ featureNoiseSigma }}"
                noiseSigma: {{ noiseSigma }}
                noisySampleCount: {{ noisySampleCount }}
              stepCount: {{ stepCount }}
        labels: "{{ labels }}"
        metadata: "{{ metadata }}"
        metadataArtifact: "{{ metadataArtifact }}"
        metadataSchemaUri: "{{ metadataSchemaUri }}"
        modelSourceInfo:
          copy: {{ copy }}
          sourceType: "{{ sourceType }}"
        name: "{{ name }}"
        originalModelInfo:
          model: "{{ model }}"
        pipelineJob: "{{ pipelineJob }}"
        predictSchemata:
          instanceSchemaUri: "{{ instanceSchemaUri }}"
          parametersSchemaUri: "{{ parametersSchemaUri }}"
          predictionSchemaUri: "{{ predictionSchemaUri }}"
        satisfiesPzi: {{ satisfiesPzi }}
        satisfiesPzs: {{ satisfiesPzs }}
        supportedDeploymentResourcesTypes:
          - "{{ supportedDeploymentResourcesTypes }}"
        supportedExportFormats:
          - exportableContents: "{{ exportableContents }}"
            id: "{{ id }}"
        supportedInputStorageFormats:
          - "{{ supportedInputStorageFormats }}"
        supportedOutputStorageFormats:
          - "{{ supportedOutputStorageFormats }}"
        trainingPipeline: "{{ trainingPipeline }}"
        updateTime: "{{ updateTime }}"
        versionAliases:
          - "{{ versionAliases }}"
        versionCreateTime: "{{ versionCreateTime }}"
        versionDescription: "{{ versionDescription }}"
        versionId: "{{ versionId }}"
        versionUpdateTime: "{{ versionUpdateTime }}"
    - name: parentModel
      value: "{{ parentModel }}"
      description: |
        Optional. When specify this field, the \`model_to_upload\` will not be uploaded as a new model, instead, it will become a new version of this \`parent_model\`.
    - name: trainingTaskDefinition
      value: "{{ trainingTaskDefinition }}"
      description: |
        Required. A Google Cloud Storage path to the YAML file that defines the training task which is responsible for producing the model artifact, and may also include additional auxiliary work. The definition files that can be used here are found in gs://google-cloud-aiplatform/schema/trainingjob/definition/. Note: The URI given on output will be immutable and probably different, including the URI scheme, than the one given on input. The output URI will point to a location where the user only has a read access.
    - name: trainingTaskInputs
      value: "{{ trainingTaskInputs }}"
      description: |
        Required. The training task's parameter(s), as specified in the training_task_definition's \`inputs\`.
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

Deletes a TrainingPipeline.

```sql
DELETE FROM google.aiplatform.training_pipelines
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND trainingPipelinesId = '{{ trainingPipelinesId }}' --required
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

Cancels a TrainingPipeline. Starts asynchronous cancellation on the TrainingPipeline. The server makes a best effort to cancel the pipeline, but success is not guaranteed. Clients can use PipelineService.GetTrainingPipeline or other methods to check whether the cancellation succeeded or whether the pipeline completed despite cancellation. On successful cancellation, the TrainingPipeline is not deleted; instead it becomes a pipeline with a TrainingPipeline.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`, and TrainingPipeline.state is set to `CANCELLED`.

```sql
EXEC google.aiplatform.training_pipelines.cancel 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@trainingPipelinesId='{{ trainingPipelinesId }}' --required
;
```
</TabItem>
</Tabs>
