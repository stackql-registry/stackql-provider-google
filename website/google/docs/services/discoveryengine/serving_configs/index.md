--- 
title: serving_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - serving_configs
  - discoveryengine
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

Creates, updates, deletes, gets or lists a <code>serving_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>serving_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.serving_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_collections_engines_serving_configs_get"
    values={[
        { label: 'projects_locations_collections_engines_serving_configs_get', value: 'projects_locations_collections_engines_serving_configs_get' },
        { label: 'projects_locations_collections_data_stores_serving_configs_get', value: 'projects_locations_collections_data_stores_serving_configs_get' },
        { label: 'projects_locations_collections_engines_serving_configs_list', value: 'projects_locations_collections_engines_serving_configs_list' },
        { label: 'projects_locations_collections_data_stores_serving_configs_list', value: 'projects_locations_collections_data_stores_serving_configs_list' },
        { label: 'projects_locations_data_stores_serving_configs_get', value: 'projects_locations_data_stores_serving_configs_get' },
        { label: 'projects_locations_data_stores_serving_configs_list', value: 'projects_locations_data_stores_serving_configs_list' }
    ]}
>
<TabItem value="projects_locations_collections_engines_serving_configs_get">

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
    <td>Immutable. Fully qualified name `projects/&#123;project&#125;/locations/&#123;location&#125;/collections/&#123;collection_id&#125;/engines/&#123;engine_id&#125;/servingConfigs/&#123;serving_config_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="answerGenerationSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. The specification for answer generation. (id: GoogleCloudDiscoveryengineV1AnswerGenerationSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="boostControlIds" /></td>
    <td><code>array</code></td>
    <td>Boost controls to use in serving path. All triggered boost controls will be applied. Boost controls must be in the same data store as the serving config. Maximum of 20 boost controls.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. ServingConfig created timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human readable serving config display name. Used in Discovery UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="dissociateControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute. Order does not matter. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="diversityLevel" /></td>
    <td><code>string</code></td>
    <td>How much diversity to use in recommendation model results e.g. `medium-diversity` or `high-diversity`. Currently supported values: * `no-diversity` * `low-diversity` * `medium-diversity` * `high-diversity` * `auto-diversity` If not specified, we choose default based on recommendation model type. Default value: `no-diversity`. Can only be set if SolutionType is SOLUTION_TYPE_RECOMMENDATION.</td>
</tr>
<tr>
    <td><CopyableCode code="filterControlIds" /></td>
    <td><code>array</code></td>
    <td>Filter controls to use in serving path. All triggered filter controls will be applied. Filter controls must be in the same data store as the serving config. Maximum of 20 filter controls.</td>
</tr>
<tr>
    <td><CopyableCode code="genericConfig" /></td>
    <td><code>object</code></td>
    <td>The GenericConfig of the serving configuration. (id: GoogleCloudDiscoveryengineV1ServingConfigGenericConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="ignoreControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute. Order does not matter. Maximum number of specifications is 100.</td>
</tr>
<tr>
    <td><CopyableCode code="mediaConfig" /></td>
    <td><code>object</code></td>
    <td>The MediaConfig of the serving configuration. (id: GoogleCloudDiscoveryengineV1ServingConfigMediaConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="modelId" /></td>
    <td><code>string</code></td>
    <td>The id of the model to use at serving time. Currently only RecommendationModels are supported. Can be changed but only to a compatible model (e.g. others-you-may-like CTR to others-you-may-like CVR). Required when SolutionType is SOLUTION_TYPE_RECOMMENDATION.</td>
</tr>
<tr>
    <td><CopyableCode code="onewaySynonymsControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="promoteControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition promote specifications. Maximum number of specifications is 100.</td>
</tr>
<tr>
    <td><CopyableCode code="rankingExpression" /></td>
    <td><code>string</code></td>
    <td>The ranking expression controls the customized ranking on retrieval documents. To leverage this, document embedding is required. The ranking expression setting in ServingConfig applies to all search requests served by the serving config. However, if `SearchRequest.ranking_expression` is specified, it overrides the ServingConfig ranking expression. The ranking expression is a single function or multiple functions that are joined by "+". * ranking_expression = function, &#123; " + ", function &#125;; Supported functions: * double * relevance_score * double * dotProduct(embedding_field_path) Function variables: * `relevance_score`: pre-defined keywords, used for measure relevance between query and document. * `embedding_field_path`: the document embedding field used with query embedding vector. * `dotProduct`: embedding function between embedding_field_path and query embedding vector. Example ranking expression: If document has an embedding field doc_embedding, the ranking expression could be `0.5 * relevance_score + 0.3 * dotProduct(doc_embedding)`.</td>
</tr>
<tr>
    <td><CopyableCode code="redirectControlIds" /></td>
    <td><code>array</code></td>
    <td>IDs of the redirect controls. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="replacementControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition replacement specifications. Applied according to the order in the list. A previously replaced term can not be re-replaced. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="solutionType" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. Specifies the solution type that a serving config can be associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="synonymsControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition synonyms specifications. If multiple synonyms conditions match, all matching synonyms controls in the list will execute. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. ServingConfig updated timestamp.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_collections_data_stores_serving_configs_get">

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
    <td>Immutable. Fully qualified name `projects/&#123;project&#125;/locations/&#123;location&#125;/collections/&#123;collection_id&#125;/engines/&#123;engine_id&#125;/servingConfigs/&#123;serving_config_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="answerGenerationSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. The specification for answer generation. (id: GoogleCloudDiscoveryengineV1AnswerGenerationSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="boostControlIds" /></td>
    <td><code>array</code></td>
    <td>Boost controls to use in serving path. All triggered boost controls will be applied. Boost controls must be in the same data store as the serving config. Maximum of 20 boost controls.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. ServingConfig created timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human readable serving config display name. Used in Discovery UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="dissociateControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute. Order does not matter. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="diversityLevel" /></td>
    <td><code>string</code></td>
    <td>How much diversity to use in recommendation model results e.g. `medium-diversity` or `high-diversity`. Currently supported values: * `no-diversity` * `low-diversity` * `medium-diversity` * `high-diversity` * `auto-diversity` If not specified, we choose default based on recommendation model type. Default value: `no-diversity`. Can only be set if SolutionType is SOLUTION_TYPE_RECOMMENDATION.</td>
</tr>
<tr>
    <td><CopyableCode code="filterControlIds" /></td>
    <td><code>array</code></td>
    <td>Filter controls to use in serving path. All triggered filter controls will be applied. Filter controls must be in the same data store as the serving config. Maximum of 20 filter controls.</td>
</tr>
<tr>
    <td><CopyableCode code="genericConfig" /></td>
    <td><code>object</code></td>
    <td>The GenericConfig of the serving configuration. (id: GoogleCloudDiscoveryengineV1ServingConfigGenericConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="ignoreControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute. Order does not matter. Maximum number of specifications is 100.</td>
</tr>
<tr>
    <td><CopyableCode code="mediaConfig" /></td>
    <td><code>object</code></td>
    <td>The MediaConfig of the serving configuration. (id: GoogleCloudDiscoveryengineV1ServingConfigMediaConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="modelId" /></td>
    <td><code>string</code></td>
    <td>The id of the model to use at serving time. Currently only RecommendationModels are supported. Can be changed but only to a compatible model (e.g. others-you-may-like CTR to others-you-may-like CVR). Required when SolutionType is SOLUTION_TYPE_RECOMMENDATION.</td>
</tr>
<tr>
    <td><CopyableCode code="onewaySynonymsControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="promoteControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition promote specifications. Maximum number of specifications is 100.</td>
</tr>
<tr>
    <td><CopyableCode code="rankingExpression" /></td>
    <td><code>string</code></td>
    <td>The ranking expression controls the customized ranking on retrieval documents. To leverage this, document embedding is required. The ranking expression setting in ServingConfig applies to all search requests served by the serving config. However, if `SearchRequest.ranking_expression` is specified, it overrides the ServingConfig ranking expression. The ranking expression is a single function or multiple functions that are joined by "+". * ranking_expression = function, &#123; " + ", function &#125;; Supported functions: * double * relevance_score * double * dotProduct(embedding_field_path) Function variables: * `relevance_score`: pre-defined keywords, used for measure relevance between query and document. * `embedding_field_path`: the document embedding field used with query embedding vector. * `dotProduct`: embedding function between embedding_field_path and query embedding vector. Example ranking expression: If document has an embedding field doc_embedding, the ranking expression could be `0.5 * relevance_score + 0.3 * dotProduct(doc_embedding)`.</td>
</tr>
<tr>
    <td><CopyableCode code="redirectControlIds" /></td>
    <td><code>array</code></td>
    <td>IDs of the redirect controls. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="replacementControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition replacement specifications. Applied according to the order in the list. A previously replaced term can not be re-replaced. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="solutionType" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. Specifies the solution type that a serving config can be associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="synonymsControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition synonyms specifications. If multiple synonyms conditions match, all matching synonyms controls in the list will execute. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. ServingConfig updated timestamp.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_collections_engines_serving_configs_list">

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
    <td>Immutable. Fully qualified name `projects/&#123;project&#125;/locations/&#123;location&#125;/collections/&#123;collection_id&#125;/engines/&#123;engine_id&#125;/servingConfigs/&#123;serving_config_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="answerGenerationSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. The specification for answer generation. (id: GoogleCloudDiscoveryengineV1AnswerGenerationSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="boostControlIds" /></td>
    <td><code>array</code></td>
    <td>Boost controls to use in serving path. All triggered boost controls will be applied. Boost controls must be in the same data store as the serving config. Maximum of 20 boost controls.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. ServingConfig created timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human readable serving config display name. Used in Discovery UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="dissociateControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute. Order does not matter. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="diversityLevel" /></td>
    <td><code>string</code></td>
    <td>How much diversity to use in recommendation model results e.g. `medium-diversity` or `high-diversity`. Currently supported values: * `no-diversity` * `low-diversity` * `medium-diversity` * `high-diversity` * `auto-diversity` If not specified, we choose default based on recommendation model type. Default value: `no-diversity`. Can only be set if SolutionType is SOLUTION_TYPE_RECOMMENDATION.</td>
</tr>
<tr>
    <td><CopyableCode code="filterControlIds" /></td>
    <td><code>array</code></td>
    <td>Filter controls to use in serving path. All triggered filter controls will be applied. Filter controls must be in the same data store as the serving config. Maximum of 20 filter controls.</td>
</tr>
<tr>
    <td><CopyableCode code="genericConfig" /></td>
    <td><code>object</code></td>
    <td>The GenericConfig of the serving configuration. (id: GoogleCloudDiscoveryengineV1ServingConfigGenericConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="ignoreControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute. Order does not matter. Maximum number of specifications is 100.</td>
</tr>
<tr>
    <td><CopyableCode code="mediaConfig" /></td>
    <td><code>object</code></td>
    <td>The MediaConfig of the serving configuration. (id: GoogleCloudDiscoveryengineV1ServingConfigMediaConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="modelId" /></td>
    <td><code>string</code></td>
    <td>The id of the model to use at serving time. Currently only RecommendationModels are supported. Can be changed but only to a compatible model (e.g. others-you-may-like CTR to others-you-may-like CVR). Required when SolutionType is SOLUTION_TYPE_RECOMMENDATION.</td>
</tr>
<tr>
    <td><CopyableCode code="onewaySynonymsControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="promoteControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition promote specifications. Maximum number of specifications is 100.</td>
</tr>
<tr>
    <td><CopyableCode code="rankingExpression" /></td>
    <td><code>string</code></td>
    <td>The ranking expression controls the customized ranking on retrieval documents. To leverage this, document embedding is required. The ranking expression setting in ServingConfig applies to all search requests served by the serving config. However, if `SearchRequest.ranking_expression` is specified, it overrides the ServingConfig ranking expression. The ranking expression is a single function or multiple functions that are joined by "+". * ranking_expression = function, &#123; " + ", function &#125;; Supported functions: * double * relevance_score * double * dotProduct(embedding_field_path) Function variables: * `relevance_score`: pre-defined keywords, used for measure relevance between query and document. * `embedding_field_path`: the document embedding field used with query embedding vector. * `dotProduct`: embedding function between embedding_field_path and query embedding vector. Example ranking expression: If document has an embedding field doc_embedding, the ranking expression could be `0.5 * relevance_score + 0.3 * dotProduct(doc_embedding)`.</td>
</tr>
<tr>
    <td><CopyableCode code="redirectControlIds" /></td>
    <td><code>array</code></td>
    <td>IDs of the redirect controls. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="replacementControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition replacement specifications. Applied according to the order in the list. A previously replaced term can not be re-replaced. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="solutionType" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. Specifies the solution type that a serving config can be associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="synonymsControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition synonyms specifications. If multiple synonyms conditions match, all matching synonyms controls in the list will execute. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. ServingConfig updated timestamp.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_collections_data_stores_serving_configs_list">

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
    <td>Immutable. Fully qualified name `projects/&#123;project&#125;/locations/&#123;location&#125;/collections/&#123;collection_id&#125;/engines/&#123;engine_id&#125;/servingConfigs/&#123;serving_config_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="answerGenerationSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. The specification for answer generation. (id: GoogleCloudDiscoveryengineV1AnswerGenerationSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="boostControlIds" /></td>
    <td><code>array</code></td>
    <td>Boost controls to use in serving path. All triggered boost controls will be applied. Boost controls must be in the same data store as the serving config. Maximum of 20 boost controls.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. ServingConfig created timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human readable serving config display name. Used in Discovery UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="dissociateControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute. Order does not matter. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="diversityLevel" /></td>
    <td><code>string</code></td>
    <td>How much diversity to use in recommendation model results e.g. `medium-diversity` or `high-diversity`. Currently supported values: * `no-diversity` * `low-diversity` * `medium-diversity` * `high-diversity` * `auto-diversity` If not specified, we choose default based on recommendation model type. Default value: `no-diversity`. Can only be set if SolutionType is SOLUTION_TYPE_RECOMMENDATION.</td>
</tr>
<tr>
    <td><CopyableCode code="filterControlIds" /></td>
    <td><code>array</code></td>
    <td>Filter controls to use in serving path. All triggered filter controls will be applied. Filter controls must be in the same data store as the serving config. Maximum of 20 filter controls.</td>
</tr>
<tr>
    <td><CopyableCode code="genericConfig" /></td>
    <td><code>object</code></td>
    <td>The GenericConfig of the serving configuration. (id: GoogleCloudDiscoveryengineV1ServingConfigGenericConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="ignoreControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute. Order does not matter. Maximum number of specifications is 100.</td>
</tr>
<tr>
    <td><CopyableCode code="mediaConfig" /></td>
    <td><code>object</code></td>
    <td>The MediaConfig of the serving configuration. (id: GoogleCloudDiscoveryengineV1ServingConfigMediaConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="modelId" /></td>
    <td><code>string</code></td>
    <td>The id of the model to use at serving time. Currently only RecommendationModels are supported. Can be changed but only to a compatible model (e.g. others-you-may-like CTR to others-you-may-like CVR). Required when SolutionType is SOLUTION_TYPE_RECOMMENDATION.</td>
</tr>
<tr>
    <td><CopyableCode code="onewaySynonymsControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="promoteControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition promote specifications. Maximum number of specifications is 100.</td>
</tr>
<tr>
    <td><CopyableCode code="rankingExpression" /></td>
    <td><code>string</code></td>
    <td>The ranking expression controls the customized ranking on retrieval documents. To leverage this, document embedding is required. The ranking expression setting in ServingConfig applies to all search requests served by the serving config. However, if `SearchRequest.ranking_expression` is specified, it overrides the ServingConfig ranking expression. The ranking expression is a single function or multiple functions that are joined by "+". * ranking_expression = function, &#123; " + ", function &#125;; Supported functions: * double * relevance_score * double * dotProduct(embedding_field_path) Function variables: * `relevance_score`: pre-defined keywords, used for measure relevance between query and document. * `embedding_field_path`: the document embedding field used with query embedding vector. * `dotProduct`: embedding function between embedding_field_path and query embedding vector. Example ranking expression: If document has an embedding field doc_embedding, the ranking expression could be `0.5 * relevance_score + 0.3 * dotProduct(doc_embedding)`.</td>
</tr>
<tr>
    <td><CopyableCode code="redirectControlIds" /></td>
    <td><code>array</code></td>
    <td>IDs of the redirect controls. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="replacementControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition replacement specifications. Applied according to the order in the list. A previously replaced term can not be re-replaced. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="solutionType" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. Specifies the solution type that a serving config can be associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="synonymsControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition synonyms specifications. If multiple synonyms conditions match, all matching synonyms controls in the list will execute. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. ServingConfig updated timestamp.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_stores_serving_configs_get">

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
    <td>Immutable. Fully qualified name `projects/&#123;project&#125;/locations/&#123;location&#125;/collections/&#123;collection_id&#125;/engines/&#123;engine_id&#125;/servingConfigs/&#123;serving_config_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="answerGenerationSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. The specification for answer generation. (id: GoogleCloudDiscoveryengineV1AnswerGenerationSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="boostControlIds" /></td>
    <td><code>array</code></td>
    <td>Boost controls to use in serving path. All triggered boost controls will be applied. Boost controls must be in the same data store as the serving config. Maximum of 20 boost controls.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. ServingConfig created timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human readable serving config display name. Used in Discovery UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="dissociateControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute. Order does not matter. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="diversityLevel" /></td>
    <td><code>string</code></td>
    <td>How much diversity to use in recommendation model results e.g. `medium-diversity` or `high-diversity`. Currently supported values: * `no-diversity` * `low-diversity` * `medium-diversity` * `high-diversity` * `auto-diversity` If not specified, we choose default based on recommendation model type. Default value: `no-diversity`. Can only be set if SolutionType is SOLUTION_TYPE_RECOMMENDATION.</td>
</tr>
<tr>
    <td><CopyableCode code="filterControlIds" /></td>
    <td><code>array</code></td>
    <td>Filter controls to use in serving path. All triggered filter controls will be applied. Filter controls must be in the same data store as the serving config. Maximum of 20 filter controls.</td>
</tr>
<tr>
    <td><CopyableCode code="genericConfig" /></td>
    <td><code>object</code></td>
    <td>The GenericConfig of the serving configuration. (id: GoogleCloudDiscoveryengineV1ServingConfigGenericConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="ignoreControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute. Order does not matter. Maximum number of specifications is 100.</td>
</tr>
<tr>
    <td><CopyableCode code="mediaConfig" /></td>
    <td><code>object</code></td>
    <td>The MediaConfig of the serving configuration. (id: GoogleCloudDiscoveryengineV1ServingConfigMediaConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="modelId" /></td>
    <td><code>string</code></td>
    <td>The id of the model to use at serving time. Currently only RecommendationModels are supported. Can be changed but only to a compatible model (e.g. others-you-may-like CTR to others-you-may-like CVR). Required when SolutionType is SOLUTION_TYPE_RECOMMENDATION.</td>
</tr>
<tr>
    <td><CopyableCode code="onewaySynonymsControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="promoteControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition promote specifications. Maximum number of specifications is 100.</td>
</tr>
<tr>
    <td><CopyableCode code="rankingExpression" /></td>
    <td><code>string</code></td>
    <td>The ranking expression controls the customized ranking on retrieval documents. To leverage this, document embedding is required. The ranking expression setting in ServingConfig applies to all search requests served by the serving config. However, if `SearchRequest.ranking_expression` is specified, it overrides the ServingConfig ranking expression. The ranking expression is a single function or multiple functions that are joined by "+". * ranking_expression = function, &#123; " + ", function &#125;; Supported functions: * double * relevance_score * double * dotProduct(embedding_field_path) Function variables: * `relevance_score`: pre-defined keywords, used for measure relevance between query and document. * `embedding_field_path`: the document embedding field used with query embedding vector. * `dotProduct`: embedding function between embedding_field_path and query embedding vector. Example ranking expression: If document has an embedding field doc_embedding, the ranking expression could be `0.5 * relevance_score + 0.3 * dotProduct(doc_embedding)`.</td>
</tr>
<tr>
    <td><CopyableCode code="redirectControlIds" /></td>
    <td><code>array</code></td>
    <td>IDs of the redirect controls. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="replacementControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition replacement specifications. Applied according to the order in the list. A previously replaced term can not be re-replaced. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="solutionType" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. Specifies the solution type that a serving config can be associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="synonymsControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition synonyms specifications. If multiple synonyms conditions match, all matching synonyms controls in the list will execute. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. ServingConfig updated timestamp.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_stores_serving_configs_list">

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
    <td>Immutable. Fully qualified name `projects/&#123;project&#125;/locations/&#123;location&#125;/collections/&#123;collection_id&#125;/engines/&#123;engine_id&#125;/servingConfigs/&#123;serving_config_id&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="answerGenerationSpec" /></td>
    <td><code>object</code></td>
    <td>Optional. The specification for answer generation. (id: GoogleCloudDiscoveryengineV1AnswerGenerationSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="boostControlIds" /></td>
    <td><code>array</code></td>
    <td>Boost controls to use in serving path. All triggered boost controls will be applied. Boost controls must be in the same data store as the serving config. Maximum of 20 boost controls.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. ServingConfig created timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human readable serving config display name. Used in Discovery UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="dissociateControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute. Order does not matter. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="diversityLevel" /></td>
    <td><code>string</code></td>
    <td>How much diversity to use in recommendation model results e.g. `medium-diversity` or `high-diversity`. Currently supported values: * `no-diversity` * `low-diversity` * `medium-diversity` * `high-diversity` * `auto-diversity` If not specified, we choose default based on recommendation model type. Default value: `no-diversity`. Can only be set if SolutionType is SOLUTION_TYPE_RECOMMENDATION.</td>
</tr>
<tr>
    <td><CopyableCode code="filterControlIds" /></td>
    <td><code>array</code></td>
    <td>Filter controls to use in serving path. All triggered filter controls will be applied. Filter controls must be in the same data store as the serving config. Maximum of 20 filter controls.</td>
</tr>
<tr>
    <td><CopyableCode code="genericConfig" /></td>
    <td><code>object</code></td>
    <td>The GenericConfig of the serving configuration. (id: GoogleCloudDiscoveryengineV1ServingConfigGenericConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="ignoreControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute. Order does not matter. Maximum number of specifications is 100.</td>
</tr>
<tr>
    <td><CopyableCode code="mediaConfig" /></td>
    <td><code>object</code></td>
    <td>The MediaConfig of the serving configuration. (id: GoogleCloudDiscoveryengineV1ServingConfigMediaConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="modelId" /></td>
    <td><code>string</code></td>
    <td>The id of the model to use at serving time. Currently only RecommendationModels are supported. Can be changed but only to a compatible model (e.g. others-you-may-like CTR to others-you-may-like CVR). Required when SolutionType is SOLUTION_TYPE_RECOMMENDATION.</td>
</tr>
<tr>
    <td><CopyableCode code="onewaySynonymsControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="promoteControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition promote specifications. Maximum number of specifications is 100.</td>
</tr>
<tr>
    <td><CopyableCode code="rankingExpression" /></td>
    <td><code>string</code></td>
    <td>The ranking expression controls the customized ranking on retrieval documents. To leverage this, document embedding is required. The ranking expression setting in ServingConfig applies to all search requests served by the serving config. However, if `SearchRequest.ranking_expression` is specified, it overrides the ServingConfig ranking expression. The ranking expression is a single function or multiple functions that are joined by "+". * ranking_expression = function, &#123; " + ", function &#125;; Supported functions: * double * relevance_score * double * dotProduct(embedding_field_path) Function variables: * `relevance_score`: pre-defined keywords, used for measure relevance between query and document. * `embedding_field_path`: the document embedding field used with query embedding vector. * `dotProduct`: embedding function between embedding_field_path and query embedding vector. Example ranking expression: If document has an embedding field doc_embedding, the ranking expression could be `0.5 * relevance_score + 0.3 * dotProduct(doc_embedding)`.</td>
</tr>
<tr>
    <td><CopyableCode code="redirectControlIds" /></td>
    <td><code>array</code></td>
    <td>IDs of the redirect controls. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="replacementControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition replacement specifications. Applied according to the order in the list. A previously replaced term can not be re-replaced. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="solutionType" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. Specifies the solution type that a serving config can be associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="synonymsControlIds" /></td>
    <td><code>array</code></td>
    <td>Condition synonyms specifications. If multiple synonyms conditions match, all matching synonyms controls in the list will execute. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. ServingConfig updated timestamp.</td>
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
    <td><a href="#projects_locations_collections_engines_serving_configs_get"><CopyableCode code="projects_locations_collections_engines_serving_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Gets a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_serving_configs_get"><CopyableCode code="projects_locations_collections_data_stores_serving_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Gets a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_serving_configs_list"><CopyableCode code="projects_locations_collections_engines_serving_configs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists all ServingConfigs linked to this dataStore.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_serving_configs_list"><CopyableCode code="projects_locations_collections_data_stores_serving_configs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists all ServingConfigs linked to this dataStore.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_serving_configs_get"><CopyableCode code="projects_locations_data_stores_serving_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Gets a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_serving_configs_list"><CopyableCode code="projects_locations_data_stores_serving_configs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all ServingConfigs linked to this dataStore.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_serving_configs_patch"><CopyableCode code="projects_locations_collections_engines_serving_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_serving_configs_patch"><CopyableCode code="projects_locations_collections_data_stores_serving_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_serving_configs_patch"><CopyableCode code="projects_locations_data_stores_serving_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_serving_configs_delete"><CopyableCode code="projects_locations_collections_engines_serving_configs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Deletes a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_serving_configs_delete"><CopyableCode code="projects_locations_collections_data_stores_serving_configs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Deletes a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_serving_configs_delete"><CopyableCode code="projects_locations_data_stores_serving_configs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Deletes a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_serving_configs_search"><CopyableCode code="projects_locations_collections_engines_serving_configs_search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Performs a search.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_serving_configs_stream_answer"><CopyableCode code="projects_locations_collections_engines_serving_configs_stream_answer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Answer query method (streaming). It takes one AnswerQueryRequest and returns multiple AnswerQueryResponse messages in a stream.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_serving_configs_answer"><CopyableCode code="projects_locations_collections_engines_serving_configs_answer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Answer query method.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_serving_configs_search_lite"><CopyableCode code="projects_locations_collections_engines_serving_configs_search_lite" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Performs a search. Similar to the SearchService.Search method, but a lite version that allows API key for authentication, where OAuth and IAM checks are not required. Only public website search is supported by this method. If data stores and engines not associated with public website search are specified, a `FAILED_PRECONDITION` error is returned. This method can be used for easy onboarding without having to implement an authentication backend. However, it is strongly recommended to use SearchService.Search instead with required OAuth and IAM checks to provide better data security.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_serving_configs_recommend"><CopyableCode code="projects_locations_collections_engines_serving_configs_recommend" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Makes a recommendation, which requires a contextual user event.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_serving_configs_recommend"><CopyableCode code="projects_locations_collections_data_stores_serving_configs_recommend" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Makes a recommendation, which requires a contextual user event.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_serving_configs_search"><CopyableCode code="projects_locations_collections_data_stores_serving_configs_search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Performs a search.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_serving_configs_answer"><CopyableCode code="projects_locations_collections_data_stores_serving_configs_answer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Answer query method.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_serving_configs_stream_answer"><CopyableCode code="projects_locations_collections_data_stores_serving_configs_stream_answer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Answer query method (streaming). It takes one AnswerQueryRequest and returns multiple AnswerQueryResponse messages in a stream.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_serving_configs_search_lite"><CopyableCode code="projects_locations_collections_data_stores_serving_configs_search_lite" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Performs a search. Similar to the SearchService.Search method, but a lite version that allows API key for authentication, where OAuth and IAM checks are not required. Only public website search is supported by this method. If data stores and engines not associated with public website search are specified, a `FAILED_PRECONDITION` error is returned. This method can be used for easy onboarding without having to implement an authentication backend. However, it is strongly recommended to use SearchService.Search instead with required OAuth and IAM checks to provide better data security.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_serving_configs_search"><CopyableCode code="projects_locations_data_stores_serving_configs_search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Performs a search.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_serving_configs_recommend"><CopyableCode code="projects_locations_data_stores_serving_configs_recommend" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Makes a recommendation, which requires a contextual user event.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_serving_configs_stream_answer"><CopyableCode code="projects_locations_data_stores_serving_configs_stream_answer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Answer query method (streaming). It takes one AnswerQueryRequest and returns multiple AnswerQueryResponse messages in a stream.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_serving_configs_answer"><CopyableCode code="projects_locations_data_stores_serving_configs_answer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Answer query method.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_serving_configs_search_lite"><CopyableCode code="projects_locations_data_stores_serving_configs_search_lite" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-servingConfigsId"><code>servingConfigsId</code></a></td>
    <td></td>
    <td>Performs a search. Similar to the SearchService.Search method, but a lite version that allows API key for authentication, where OAuth and IAM checks are not required. Only public website search is supported by this method. If data stores and engines not associated with public website search are specified, a `FAILED_PRECONDITION` error is returned. This method can be used for easy onboarding without having to implement an authentication backend. However, it is strongly recommended to use SearchService.Search instead with required OAuth and IAM checks to provide better data security.</td>
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
<tr id="parameter-collectionsId">
    <td><CopyableCode code="collectionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-dataStoresId">
    <td><CopyableCode code="dataStoresId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-enginesId">
    <td><CopyableCode code="enginesId" /></td>
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
<tr id="parameter-servingConfigsId">
    <td><CopyableCode code="servingConfigsId" /></td>
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
    defaultValue="projects_locations_collections_engines_serving_configs_get"
    values={[
        { label: 'projects_locations_collections_engines_serving_configs_get', value: 'projects_locations_collections_engines_serving_configs_get' },
        { label: 'projects_locations_collections_data_stores_serving_configs_get', value: 'projects_locations_collections_data_stores_serving_configs_get' },
        { label: 'projects_locations_collections_engines_serving_configs_list', value: 'projects_locations_collections_engines_serving_configs_list' },
        { label: 'projects_locations_collections_data_stores_serving_configs_list', value: 'projects_locations_collections_data_stores_serving_configs_list' },
        { label: 'projects_locations_data_stores_serving_configs_get', value: 'projects_locations_data_stores_serving_configs_get' },
        { label: 'projects_locations_data_stores_serving_configs_list', value: 'projects_locations_data_stores_serving_configs_list' }
    ]}
>
<TabItem value="projects_locations_collections_engines_serving_configs_get">

Gets a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.

```sql
SELECT
name,
answerGenerationSpec,
boostControlIds,
createTime,
displayName,
dissociateControlIds,
diversityLevel,
filterControlIds,
genericConfig,
ignoreControlIds,
mediaConfig,
modelId,
onewaySynonymsControlIds,
promoteControlIds,
rankingExpression,
redirectControlIds,
replacementControlIds,
solutionType,
synonymsControlIds,
updateTime
FROM google.discoveryengine.serving_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND enginesId = '{{ enginesId }}' -- required
AND servingConfigsId = '{{ servingConfigsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_collections_data_stores_serving_configs_get">

Gets a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.

```sql
SELECT
name,
answerGenerationSpec,
boostControlIds,
createTime,
displayName,
dissociateControlIds,
diversityLevel,
filterControlIds,
genericConfig,
ignoreControlIds,
mediaConfig,
modelId,
onewaySynonymsControlIds,
promoteControlIds,
rankingExpression,
redirectControlIds,
replacementControlIds,
solutionType,
synonymsControlIds,
updateTime
FROM google.discoveryengine.serving_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND servingConfigsId = '{{ servingConfigsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_collections_engines_serving_configs_list">

Lists all ServingConfigs linked to this dataStore.

```sql
SELECT
name,
answerGenerationSpec,
boostControlIds,
createTime,
displayName,
dissociateControlIds,
diversityLevel,
filterControlIds,
genericConfig,
ignoreControlIds,
mediaConfig,
modelId,
onewaySynonymsControlIds,
promoteControlIds,
rankingExpression,
redirectControlIds,
replacementControlIds,
solutionType,
synonymsControlIds,
updateTime
FROM google.discoveryengine.serving_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND enginesId = '{{ enginesId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
;
```
</TabItem>
<TabItem value="projects_locations_collections_data_stores_serving_configs_list">

Lists all ServingConfigs linked to this dataStore.

```sql
SELECT
name,
answerGenerationSpec,
boostControlIds,
createTime,
displayName,
dissociateControlIds,
diversityLevel,
filterControlIds,
genericConfig,
ignoreControlIds,
mediaConfig,
modelId,
onewaySynonymsControlIds,
promoteControlIds,
rankingExpression,
redirectControlIds,
replacementControlIds,
solutionType,
synonymsControlIds,
updateTime
FROM google.discoveryengine.serving_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
;
```
</TabItem>
<TabItem value="projects_locations_data_stores_serving_configs_get">

Gets a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.

```sql
SELECT
name,
answerGenerationSpec,
boostControlIds,
createTime,
displayName,
dissociateControlIds,
diversityLevel,
filterControlIds,
genericConfig,
ignoreControlIds,
mediaConfig,
modelId,
onewaySynonymsControlIds,
promoteControlIds,
rankingExpression,
redirectControlIds,
replacementControlIds,
solutionType,
synonymsControlIds,
updateTime
FROM google.discoveryengine.serving_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND servingConfigsId = '{{ servingConfigsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_data_stores_serving_configs_list">

Lists all ServingConfigs linked to this dataStore.

```sql
SELECT
name,
answerGenerationSpec,
boostControlIds,
createTime,
displayName,
dissociateControlIds,
diversityLevel,
filterControlIds,
genericConfig,
ignoreControlIds,
mediaConfig,
modelId,
onewaySynonymsControlIds,
promoteControlIds,
rankingExpression,
redirectControlIds,
replacementControlIds,
solutionType,
synonymsControlIds,
updateTime
FROM google.discoveryengine.serving_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_collections_engines_serving_configs_patch"
    values={[
        { label: 'projects_locations_collections_engines_serving_configs_patch', value: 'projects_locations_collections_engines_serving_configs_patch' },
        { label: 'projects_locations_collections_data_stores_serving_configs_patch', value: 'projects_locations_collections_data_stores_serving_configs_patch' },
        { label: 'projects_locations_data_stores_serving_configs_patch', value: 'projects_locations_data_stores_serving_configs_patch' }
    ]}
>
<TabItem value="projects_locations_collections_engines_serving_configs_patch">

Updates a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.

```sql
UPDATE google.discoveryengine.serving_configs
SET 
data__name = '{{ name }}',
data__redirectControlIds = '{{ redirectControlIds }}',
data__synonymsControlIds = '{{ synonymsControlIds }}',
data__genericConfig = '{{ genericConfig }}',
data__mediaConfig = '{{ mediaConfig }}',
data__boostControlIds = '{{ boostControlIds }}',
data__ignoreControlIds = '{{ ignoreControlIds }}',
data__onewaySynonymsControlIds = '{{ onewaySynonymsControlIds }}',
data__solutionType = '{{ solutionType }}',
data__dissociateControlIds = '{{ dissociateControlIds }}',
data__rankingExpression = '{{ rankingExpression }}',
data__promoteControlIds = '{{ promoteControlIds }}',
data__diversityLevel = '{{ diversityLevel }}',
data__displayName = '{{ displayName }}',
data__modelId = '{{ modelId }}',
data__filterControlIds = '{{ filterControlIds }}',
data__answerGenerationSpec = '{{ answerGenerationSpec }}',
data__replacementControlIds = '{{ replacementControlIds }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND enginesId = '{{ enginesId }}' --required
AND servingConfigsId = '{{ servingConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
answerGenerationSpec,
boostControlIds,
createTime,
displayName,
dissociateControlIds,
diversityLevel,
filterControlIds,
genericConfig,
ignoreControlIds,
mediaConfig,
modelId,
onewaySynonymsControlIds,
promoteControlIds,
rankingExpression,
redirectControlIds,
replacementControlIds,
solutionType,
synonymsControlIds,
updateTime;
```
</TabItem>
<TabItem value="projects_locations_collections_data_stores_serving_configs_patch">

Updates a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.

```sql
UPDATE google.discoveryengine.serving_configs
SET 
data__name = '{{ name }}',
data__redirectControlIds = '{{ redirectControlIds }}',
data__synonymsControlIds = '{{ synonymsControlIds }}',
data__genericConfig = '{{ genericConfig }}',
data__mediaConfig = '{{ mediaConfig }}',
data__boostControlIds = '{{ boostControlIds }}',
data__ignoreControlIds = '{{ ignoreControlIds }}',
data__onewaySynonymsControlIds = '{{ onewaySynonymsControlIds }}',
data__solutionType = '{{ solutionType }}',
data__dissociateControlIds = '{{ dissociateControlIds }}',
data__rankingExpression = '{{ rankingExpression }}',
data__promoteControlIds = '{{ promoteControlIds }}',
data__diversityLevel = '{{ diversityLevel }}',
data__displayName = '{{ displayName }}',
data__modelId = '{{ modelId }}',
data__filterControlIds = '{{ filterControlIds }}',
data__answerGenerationSpec = '{{ answerGenerationSpec }}',
data__replacementControlIds = '{{ replacementControlIds }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND servingConfigsId = '{{ servingConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
answerGenerationSpec,
boostControlIds,
createTime,
displayName,
dissociateControlIds,
diversityLevel,
filterControlIds,
genericConfig,
ignoreControlIds,
mediaConfig,
modelId,
onewaySynonymsControlIds,
promoteControlIds,
rankingExpression,
redirectControlIds,
replacementControlIds,
solutionType,
synonymsControlIds,
updateTime;
```
</TabItem>
<TabItem value="projects_locations_data_stores_serving_configs_patch">

Updates a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.

```sql
UPDATE google.discoveryengine.serving_configs
SET 
data__name = '{{ name }}',
data__redirectControlIds = '{{ redirectControlIds }}',
data__synonymsControlIds = '{{ synonymsControlIds }}',
data__genericConfig = '{{ genericConfig }}',
data__mediaConfig = '{{ mediaConfig }}',
data__boostControlIds = '{{ boostControlIds }}',
data__ignoreControlIds = '{{ ignoreControlIds }}',
data__onewaySynonymsControlIds = '{{ onewaySynonymsControlIds }}',
data__solutionType = '{{ solutionType }}',
data__dissociateControlIds = '{{ dissociateControlIds }}',
data__rankingExpression = '{{ rankingExpression }}',
data__promoteControlIds = '{{ promoteControlIds }}',
data__diversityLevel = '{{ diversityLevel }}',
data__displayName = '{{ displayName }}',
data__modelId = '{{ modelId }}',
data__filterControlIds = '{{ filterControlIds }}',
data__answerGenerationSpec = '{{ answerGenerationSpec }}',
data__replacementControlIds = '{{ replacementControlIds }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND servingConfigsId = '{{ servingConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
answerGenerationSpec,
boostControlIds,
createTime,
displayName,
dissociateControlIds,
diversityLevel,
filterControlIds,
genericConfig,
ignoreControlIds,
mediaConfig,
modelId,
onewaySynonymsControlIds,
promoteControlIds,
rankingExpression,
redirectControlIds,
replacementControlIds,
solutionType,
synonymsControlIds,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_collections_engines_serving_configs_delete"
    values={[
        { label: 'projects_locations_collections_engines_serving_configs_delete', value: 'projects_locations_collections_engines_serving_configs_delete' },
        { label: 'projects_locations_collections_data_stores_serving_configs_delete', value: 'projects_locations_collections_data_stores_serving_configs_delete' },
        { label: 'projects_locations_data_stores_serving_configs_delete', value: 'projects_locations_data_stores_serving_configs_delete' }
    ]}
>
<TabItem value="projects_locations_collections_engines_serving_configs_delete">

Deletes a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.

```sql
DELETE FROM google.discoveryengine.serving_configs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND enginesId = '{{ enginesId }}' --required
AND servingConfigsId = '{{ servingConfigsId }}' --required
;
```
</TabItem>
<TabItem value="projects_locations_collections_data_stores_serving_configs_delete">

Deletes a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.

```sql
DELETE FROM google.discoveryengine.serving_configs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND servingConfigsId = '{{ servingConfigsId }}' --required
;
```
</TabItem>
<TabItem value="projects_locations_data_stores_serving_configs_delete">

Deletes a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.

```sql
DELETE FROM google.discoveryengine.serving_configs
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND servingConfigsId = '{{ servingConfigsId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_collections_engines_serving_configs_search"
    values={[
        { label: 'projects_locations_collections_engines_serving_configs_search', value: 'projects_locations_collections_engines_serving_configs_search' },
        { label: 'projects_locations_collections_engines_serving_configs_stream_answer', value: 'projects_locations_collections_engines_serving_configs_stream_answer' },
        { label: 'projects_locations_collections_engines_serving_configs_answer', value: 'projects_locations_collections_engines_serving_configs_answer' },
        { label: 'projects_locations_collections_engines_serving_configs_search_lite', value: 'projects_locations_collections_engines_serving_configs_search_lite' },
        { label: 'projects_locations_collections_engines_serving_configs_recommend', value: 'projects_locations_collections_engines_serving_configs_recommend' },
        { label: 'projects_locations_collections_data_stores_serving_configs_recommend', value: 'projects_locations_collections_data_stores_serving_configs_recommend' },
        { label: 'projects_locations_collections_data_stores_serving_configs_search', value: 'projects_locations_collections_data_stores_serving_configs_search' },
        { label: 'projects_locations_collections_data_stores_serving_configs_answer', value: 'projects_locations_collections_data_stores_serving_configs_answer' },
        { label: 'projects_locations_collections_data_stores_serving_configs_stream_answer', value: 'projects_locations_collections_data_stores_serving_configs_stream_answer' },
        { label: 'projects_locations_collections_data_stores_serving_configs_search_lite', value: 'projects_locations_collections_data_stores_serving_configs_search_lite' },
        { label: 'projects_locations_data_stores_serving_configs_search', value: 'projects_locations_data_stores_serving_configs_search' },
        { label: 'projects_locations_data_stores_serving_configs_recommend', value: 'projects_locations_data_stores_serving_configs_recommend' },
        { label: 'projects_locations_data_stores_serving_configs_stream_answer', value: 'projects_locations_data_stores_serving_configs_stream_answer' },
        { label: 'projects_locations_data_stores_serving_configs_answer', value: 'projects_locations_data_stores_serving_configs_answer' },
        { label: 'projects_locations_data_stores_serving_configs_search_lite', value: 'projects_locations_data_stores_serving_configs_search_lite' }
    ]}
>
<TabItem value="projects_locations_collections_engines_serving_configs_search">

Performs a search.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_collections_engines_serving_configs_search 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@enginesId='{{ enginesId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"displaySpec": "{{ displaySpec }}", 
"relevanceThreshold": "{{ relevanceThreshold }}", 
"imageQuery": "{{ imageQuery }}", 
"spellCorrectionSpec": "{{ spellCorrectionSpec }}", 
"safeSearch": {{ safeSearch }}, 
"queryExpansionSpec": "{{ queryExpansionSpec }}", 
"userPseudoId": "{{ userPseudoId }}", 
"rankingExpressionBackend": "{{ rankingExpressionBackend }}", 
"relevanceScoreSpec": "{{ relevanceScoreSpec }}", 
"session": "{{ session }}", 
"searchAsYouTypeSpec": "{{ searchAsYouTypeSpec }}", 
"dataStoreSpecs": "{{ dataStoreSpecs }}", 
"filter": "{{ filter }}", 
"boostSpec": "{{ boostSpec }}", 
"canonicalFilter": "{{ canonicalFilter }}", 
"params": "{{ params }}", 
"crowdingSpecs": "{{ crowdingSpecs }}", 
"userLabels": "{{ userLabels }}", 
"userInfo": "{{ userInfo }}", 
"contentSearchSpec": "{{ contentSearchSpec }}", 
"naturalLanguageQueryUnderstandingSpec": "{{ naturalLanguageQueryUnderstandingSpec }}", 
"query": "{{ query }}", 
"orderBy": "{{ orderBy }}", 
"oneBoxPageSize": {{ oneBoxPageSize }}, 
"pageToken": "{{ pageToken }}", 
"sessionSpec": "{{ sessionSpec }}", 
"rankingExpression": "{{ rankingExpression }}", 
"pageSize": {{ pageSize }}, 
"offset": {{ offset }}, 
"branch": "{{ branch }}", 
"pageCategories": "{{ pageCategories }}", 
"facetSpecs": "{{ facetSpecs }}", 
"languageCode": "{{ languageCode }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_collections_engines_serving_configs_stream_answer">

Answer query method (streaming). It takes one AnswerQueryRequest and returns multiple AnswerQueryResponse messages in a stream.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_collections_engines_serving_configs_stream_answer 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@enginesId='{{ enginesId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"userLabels": "{{ userLabels }}", 
"searchSpec": "{{ searchSpec }}", 
"query": "{{ query }}", 
"endUserSpec": "{{ endUserSpec }}", 
"queryUnderstandingSpec": "{{ queryUnderstandingSpec }}", 
"relatedQuestionsSpec": "{{ relatedQuestionsSpec }}", 
"safetySpec": "{{ safetySpec }}", 
"asynchronousMode": {{ asynchronousMode }}, 
"session": "{{ session }}", 
"userPseudoId": "{{ userPseudoId }}", 
"groundingSpec": "{{ groundingSpec }}", 
"answerGenerationSpec": "{{ answerGenerationSpec }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_collections_engines_serving_configs_answer">

Answer query method.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_collections_engines_serving_configs_answer 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@enginesId='{{ enginesId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"userLabels": "{{ userLabels }}", 
"searchSpec": "{{ searchSpec }}", 
"query": "{{ query }}", 
"endUserSpec": "{{ endUserSpec }}", 
"queryUnderstandingSpec": "{{ queryUnderstandingSpec }}", 
"relatedQuestionsSpec": "{{ relatedQuestionsSpec }}", 
"safetySpec": "{{ safetySpec }}", 
"asynchronousMode": {{ asynchronousMode }}, 
"session": "{{ session }}", 
"userPseudoId": "{{ userPseudoId }}", 
"groundingSpec": "{{ groundingSpec }}", 
"answerGenerationSpec": "{{ answerGenerationSpec }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_collections_engines_serving_configs_search_lite">

Performs a search. Similar to the SearchService.Search method, but a lite version that allows API key for authentication, where OAuth and IAM checks are not required. Only public website search is supported by this method. If data stores and engines not associated with public website search are specified, a `FAILED_PRECONDITION` error is returned. This method can be used for easy onboarding without having to implement an authentication backend. However, it is strongly recommended to use SearchService.Search instead with required OAuth and IAM checks to provide better data security.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_collections_engines_serving_configs_search_lite 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@enginesId='{{ enginesId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"displaySpec": "{{ displaySpec }}", 
"relevanceThreshold": "{{ relevanceThreshold }}", 
"imageQuery": "{{ imageQuery }}", 
"spellCorrectionSpec": "{{ spellCorrectionSpec }}", 
"safeSearch": {{ safeSearch }}, 
"queryExpansionSpec": "{{ queryExpansionSpec }}", 
"userPseudoId": "{{ userPseudoId }}", 
"rankingExpressionBackend": "{{ rankingExpressionBackend }}", 
"relevanceScoreSpec": "{{ relevanceScoreSpec }}", 
"session": "{{ session }}", 
"searchAsYouTypeSpec": "{{ searchAsYouTypeSpec }}", 
"dataStoreSpecs": "{{ dataStoreSpecs }}", 
"filter": "{{ filter }}", 
"boostSpec": "{{ boostSpec }}", 
"canonicalFilter": "{{ canonicalFilter }}", 
"params": "{{ params }}", 
"crowdingSpecs": "{{ crowdingSpecs }}", 
"userLabels": "{{ userLabels }}", 
"userInfo": "{{ userInfo }}", 
"contentSearchSpec": "{{ contentSearchSpec }}", 
"naturalLanguageQueryUnderstandingSpec": "{{ naturalLanguageQueryUnderstandingSpec }}", 
"query": "{{ query }}", 
"orderBy": "{{ orderBy }}", 
"oneBoxPageSize": {{ oneBoxPageSize }}, 
"pageToken": "{{ pageToken }}", 
"sessionSpec": "{{ sessionSpec }}", 
"rankingExpression": "{{ rankingExpression }}", 
"pageSize": {{ pageSize }}, 
"offset": {{ offset }}, 
"branch": "{{ branch }}", 
"pageCategories": "{{ pageCategories }}", 
"facetSpecs": "{{ facetSpecs }}", 
"languageCode": "{{ languageCode }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_collections_engines_serving_configs_recommend">

Makes a recommendation, which requires a contextual user event.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_collections_engines_serving_configs_recommend 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@enginesId='{{ enginesId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"pageSize": {{ pageSize }}, 
"filter": "{{ filter }}", 
"validateOnly": {{ validateOnly }}, 
"params": "{{ params }}", 
"userLabels": "{{ userLabels }}", 
"userEvent": "{{ userEvent }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_collections_data_stores_serving_configs_recommend">

Makes a recommendation, which requires a contextual user event.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_collections_data_stores_serving_configs_recommend 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"pageSize": {{ pageSize }}, 
"filter": "{{ filter }}", 
"validateOnly": {{ validateOnly }}, 
"params": "{{ params }}", 
"userLabels": "{{ userLabels }}", 
"userEvent": "{{ userEvent }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_collections_data_stores_serving_configs_search">

Performs a search.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_collections_data_stores_serving_configs_search 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"displaySpec": "{{ displaySpec }}", 
"relevanceThreshold": "{{ relevanceThreshold }}", 
"imageQuery": "{{ imageQuery }}", 
"spellCorrectionSpec": "{{ spellCorrectionSpec }}", 
"safeSearch": {{ safeSearch }}, 
"queryExpansionSpec": "{{ queryExpansionSpec }}", 
"userPseudoId": "{{ userPseudoId }}", 
"rankingExpressionBackend": "{{ rankingExpressionBackend }}", 
"relevanceScoreSpec": "{{ relevanceScoreSpec }}", 
"session": "{{ session }}", 
"searchAsYouTypeSpec": "{{ searchAsYouTypeSpec }}", 
"dataStoreSpecs": "{{ dataStoreSpecs }}", 
"filter": "{{ filter }}", 
"boostSpec": "{{ boostSpec }}", 
"canonicalFilter": "{{ canonicalFilter }}", 
"params": "{{ params }}", 
"crowdingSpecs": "{{ crowdingSpecs }}", 
"userLabels": "{{ userLabels }}", 
"userInfo": "{{ userInfo }}", 
"contentSearchSpec": "{{ contentSearchSpec }}", 
"naturalLanguageQueryUnderstandingSpec": "{{ naturalLanguageQueryUnderstandingSpec }}", 
"query": "{{ query }}", 
"orderBy": "{{ orderBy }}", 
"oneBoxPageSize": {{ oneBoxPageSize }}, 
"pageToken": "{{ pageToken }}", 
"sessionSpec": "{{ sessionSpec }}", 
"rankingExpression": "{{ rankingExpression }}", 
"pageSize": {{ pageSize }}, 
"offset": {{ offset }}, 
"branch": "{{ branch }}", 
"pageCategories": "{{ pageCategories }}", 
"facetSpecs": "{{ facetSpecs }}", 
"languageCode": "{{ languageCode }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_collections_data_stores_serving_configs_answer">

Answer query method.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_collections_data_stores_serving_configs_answer 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"userLabels": "{{ userLabels }}", 
"searchSpec": "{{ searchSpec }}", 
"query": "{{ query }}", 
"endUserSpec": "{{ endUserSpec }}", 
"queryUnderstandingSpec": "{{ queryUnderstandingSpec }}", 
"relatedQuestionsSpec": "{{ relatedQuestionsSpec }}", 
"safetySpec": "{{ safetySpec }}", 
"asynchronousMode": {{ asynchronousMode }}, 
"session": "{{ session }}", 
"userPseudoId": "{{ userPseudoId }}", 
"groundingSpec": "{{ groundingSpec }}", 
"answerGenerationSpec": "{{ answerGenerationSpec }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_collections_data_stores_serving_configs_stream_answer">

Answer query method (streaming). It takes one AnswerQueryRequest and returns multiple AnswerQueryResponse messages in a stream.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_collections_data_stores_serving_configs_stream_answer 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"userLabels": "{{ userLabels }}", 
"searchSpec": "{{ searchSpec }}", 
"query": "{{ query }}", 
"endUserSpec": "{{ endUserSpec }}", 
"queryUnderstandingSpec": "{{ queryUnderstandingSpec }}", 
"relatedQuestionsSpec": "{{ relatedQuestionsSpec }}", 
"safetySpec": "{{ safetySpec }}", 
"asynchronousMode": {{ asynchronousMode }}, 
"session": "{{ session }}", 
"userPseudoId": "{{ userPseudoId }}", 
"groundingSpec": "{{ groundingSpec }}", 
"answerGenerationSpec": "{{ answerGenerationSpec }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_collections_data_stores_serving_configs_search_lite">

Performs a search. Similar to the SearchService.Search method, but a lite version that allows API key for authentication, where OAuth and IAM checks are not required. Only public website search is supported by this method. If data stores and engines not associated with public website search are specified, a `FAILED_PRECONDITION` error is returned. This method can be used for easy onboarding without having to implement an authentication backend. However, it is strongly recommended to use SearchService.Search instead with required OAuth and IAM checks to provide better data security.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_collections_data_stores_serving_configs_search_lite 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@collectionsId='{{ collectionsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"displaySpec": "{{ displaySpec }}", 
"relevanceThreshold": "{{ relevanceThreshold }}", 
"imageQuery": "{{ imageQuery }}", 
"spellCorrectionSpec": "{{ spellCorrectionSpec }}", 
"safeSearch": {{ safeSearch }}, 
"queryExpansionSpec": "{{ queryExpansionSpec }}", 
"userPseudoId": "{{ userPseudoId }}", 
"rankingExpressionBackend": "{{ rankingExpressionBackend }}", 
"relevanceScoreSpec": "{{ relevanceScoreSpec }}", 
"session": "{{ session }}", 
"searchAsYouTypeSpec": "{{ searchAsYouTypeSpec }}", 
"dataStoreSpecs": "{{ dataStoreSpecs }}", 
"filter": "{{ filter }}", 
"boostSpec": "{{ boostSpec }}", 
"canonicalFilter": "{{ canonicalFilter }}", 
"params": "{{ params }}", 
"crowdingSpecs": "{{ crowdingSpecs }}", 
"userLabels": "{{ userLabels }}", 
"userInfo": "{{ userInfo }}", 
"contentSearchSpec": "{{ contentSearchSpec }}", 
"naturalLanguageQueryUnderstandingSpec": "{{ naturalLanguageQueryUnderstandingSpec }}", 
"query": "{{ query }}", 
"orderBy": "{{ orderBy }}", 
"oneBoxPageSize": {{ oneBoxPageSize }}, 
"pageToken": "{{ pageToken }}", 
"sessionSpec": "{{ sessionSpec }}", 
"rankingExpression": "{{ rankingExpression }}", 
"pageSize": {{ pageSize }}, 
"offset": {{ offset }}, 
"branch": "{{ branch }}", 
"pageCategories": "{{ pageCategories }}", 
"facetSpecs": "{{ facetSpecs }}", 
"languageCode": "{{ languageCode }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_data_stores_serving_configs_search">

Performs a search.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_data_stores_serving_configs_search 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"displaySpec": "{{ displaySpec }}", 
"relevanceThreshold": "{{ relevanceThreshold }}", 
"imageQuery": "{{ imageQuery }}", 
"spellCorrectionSpec": "{{ spellCorrectionSpec }}", 
"safeSearch": {{ safeSearch }}, 
"queryExpansionSpec": "{{ queryExpansionSpec }}", 
"userPseudoId": "{{ userPseudoId }}", 
"rankingExpressionBackend": "{{ rankingExpressionBackend }}", 
"relevanceScoreSpec": "{{ relevanceScoreSpec }}", 
"session": "{{ session }}", 
"searchAsYouTypeSpec": "{{ searchAsYouTypeSpec }}", 
"dataStoreSpecs": "{{ dataStoreSpecs }}", 
"filter": "{{ filter }}", 
"boostSpec": "{{ boostSpec }}", 
"canonicalFilter": "{{ canonicalFilter }}", 
"params": "{{ params }}", 
"crowdingSpecs": "{{ crowdingSpecs }}", 
"userLabels": "{{ userLabels }}", 
"userInfo": "{{ userInfo }}", 
"contentSearchSpec": "{{ contentSearchSpec }}", 
"naturalLanguageQueryUnderstandingSpec": "{{ naturalLanguageQueryUnderstandingSpec }}", 
"query": "{{ query }}", 
"orderBy": "{{ orderBy }}", 
"oneBoxPageSize": {{ oneBoxPageSize }}, 
"pageToken": "{{ pageToken }}", 
"sessionSpec": "{{ sessionSpec }}", 
"rankingExpression": "{{ rankingExpression }}", 
"pageSize": {{ pageSize }}, 
"offset": {{ offset }}, 
"branch": "{{ branch }}", 
"pageCategories": "{{ pageCategories }}", 
"facetSpecs": "{{ facetSpecs }}", 
"languageCode": "{{ languageCode }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_data_stores_serving_configs_recommend">

Makes a recommendation, which requires a contextual user event.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_data_stores_serving_configs_recommend 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"pageSize": {{ pageSize }}, 
"filter": "{{ filter }}", 
"validateOnly": {{ validateOnly }}, 
"params": "{{ params }}", 
"userLabels": "{{ userLabels }}", 
"userEvent": "{{ userEvent }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_data_stores_serving_configs_stream_answer">

Answer query method (streaming). It takes one AnswerQueryRequest and returns multiple AnswerQueryResponse messages in a stream.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_data_stores_serving_configs_stream_answer 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"userLabels": "{{ userLabels }}", 
"searchSpec": "{{ searchSpec }}", 
"query": "{{ query }}", 
"endUserSpec": "{{ endUserSpec }}", 
"queryUnderstandingSpec": "{{ queryUnderstandingSpec }}", 
"relatedQuestionsSpec": "{{ relatedQuestionsSpec }}", 
"safetySpec": "{{ safetySpec }}", 
"asynchronousMode": {{ asynchronousMode }}, 
"session": "{{ session }}", 
"userPseudoId": "{{ userPseudoId }}", 
"groundingSpec": "{{ groundingSpec }}", 
"answerGenerationSpec": "{{ answerGenerationSpec }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_data_stores_serving_configs_answer">

Answer query method.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_data_stores_serving_configs_answer 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"userLabels": "{{ userLabels }}", 
"searchSpec": "{{ searchSpec }}", 
"query": "{{ query }}", 
"endUserSpec": "{{ endUserSpec }}", 
"queryUnderstandingSpec": "{{ queryUnderstandingSpec }}", 
"relatedQuestionsSpec": "{{ relatedQuestionsSpec }}", 
"safetySpec": "{{ safetySpec }}", 
"asynchronousMode": {{ asynchronousMode }}, 
"session": "{{ session }}", 
"userPseudoId": "{{ userPseudoId }}", 
"groundingSpec": "{{ groundingSpec }}", 
"answerGenerationSpec": "{{ answerGenerationSpec }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_data_stores_serving_configs_search_lite">

Performs a search. Similar to the SearchService.Search method, but a lite version that allows API key for authentication, where OAuth and IAM checks are not required. Only public website search is supported by this method. If data stores and engines not associated with public website search are specified, a `FAILED_PRECONDITION` error is returned. This method can be used for easy onboarding without having to implement an authentication backend. However, it is strongly recommended to use SearchService.Search instead with required OAuth and IAM checks to provide better data security.

```sql
EXEC google.discoveryengine.serving_configs.projects_locations_data_stores_serving_configs_search_lite 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@dataStoresId='{{ dataStoresId }}' --required, 
@servingConfigsId='{{ servingConfigsId }}' --required 
@@json=
'{
"displaySpec": "{{ displaySpec }}", 
"relevanceThreshold": "{{ relevanceThreshold }}", 
"imageQuery": "{{ imageQuery }}", 
"spellCorrectionSpec": "{{ spellCorrectionSpec }}", 
"safeSearch": {{ safeSearch }}, 
"queryExpansionSpec": "{{ queryExpansionSpec }}", 
"userPseudoId": "{{ userPseudoId }}", 
"rankingExpressionBackend": "{{ rankingExpressionBackend }}", 
"relevanceScoreSpec": "{{ relevanceScoreSpec }}", 
"session": "{{ session }}", 
"searchAsYouTypeSpec": "{{ searchAsYouTypeSpec }}", 
"dataStoreSpecs": "{{ dataStoreSpecs }}", 
"filter": "{{ filter }}", 
"boostSpec": "{{ boostSpec }}", 
"canonicalFilter": "{{ canonicalFilter }}", 
"params": "{{ params }}", 
"crowdingSpecs": "{{ crowdingSpecs }}", 
"userLabels": "{{ userLabels }}", 
"userInfo": "{{ userInfo }}", 
"contentSearchSpec": "{{ contentSearchSpec }}", 
"naturalLanguageQueryUnderstandingSpec": "{{ naturalLanguageQueryUnderstandingSpec }}", 
"query": "{{ query }}", 
"orderBy": "{{ orderBy }}", 
"oneBoxPageSize": {{ oneBoxPageSize }}, 
"pageToken": "{{ pageToken }}", 
"sessionSpec": "{{ sessionSpec }}", 
"rankingExpression": "{{ rankingExpression }}", 
"pageSize": {{ pageSize }}, 
"offset": {{ offset }}, 
"branch": "{{ branch }}", 
"pageCategories": "{{ pageCategories }}", 
"facetSpecs": "{{ facetSpecs }}", 
"languageCode": "{{ languageCode }}"
}'
;
```
</TabItem>
</Tabs>
