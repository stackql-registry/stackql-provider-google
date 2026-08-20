--- 
title: widget_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - widget_configs
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
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>widget_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="widget_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.widget_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_collections_data_stores_widget_configs_get"
    values={[
        { label: 'projects_locations_collections_data_stores_widget_configs_get', value: 'projects_locations_collections_data_stores_widget_configs_get' },
        { label: 'projects_locations_collections_engines_widget_configs_get', value: 'projects_locations_collections_engines_widget_configs_get' },
        { label: 'projects_locations_data_stores_widget_configs_get', value: 'projects_locations_data_stores_widget_configs_get' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_widget_configs_get">

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
    <td>Immutable. The full resource name of the widget config. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/collections/&#123;collection_id&#125;/dataStores/&#123;data_store_id&#125;/widgetConfigs/&#123;widget_config_id&#125;`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="accessSettings" /></td>
    <td><code>object</code></td>
    <td>Will be used for all widget access settings seen in cloud console integration page. Replaces top deprecated top level properties. (id: GoogleCloudDiscoveryengineV1WidgetConfigAccessSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="allowPublicAccess" /></td>
    <td><code>boolean</code></td>
    <td>Whether allow no-auth integration with widget. If set true, public access to search or other solutions from widget is allowed without authenication token provided by customer hosted backend server.</td>
</tr>
<tr>
    <td><CopyableCode code="allowlistedDomains" /></td>
    <td><code>array</code></td>
    <td>Allowlisted domains that can load this widget.</td>
</tr>
<tr>
    <td><CopyableCode code="assistantSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Output only. Describes the assistant settings of the widget. (id: GoogleCloudDiscoveryengineV1WidgetConfigAssistantSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="batchAuthStatuses" /></td>
    <td><code>array</code></td>
    <td>Output only. The batch authorization statuses for the widget's connectors.</td>
</tr>
<tr>
    <td><CopyableCode code="collectionComponents" /></td>
    <td><code>array</code></td>
    <td>Output only. Collection components that lists all collections and child data stores associated with the widget config, those data sources can be used for filtering in widget service APIs, users can return results that from selected data sources. For SaaS / Business engines, when `LookupWidgetConfig` is called with `view = WITH_AVAILABLE_CONNECTORS`, this list is additionally augmented with synthetic placeholder entries for connectors the caller may attach but has not yet attached (see `CollectionComponent` for the placeholder contract). The frontend can therefore render a unified list of already-attached and available-to-attach sources by iterating this single field. For Enterprise engines and for the default `view`, only already-attached connectors are returned (today's behavior).</td>
</tr>
<tr>
    <td><CopyableCode code="configId" /></td>
    <td><code>string</code></td>
    <td>Output only. Unique obfuscated identifier of a WidgetConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="contentSearchSpec" /></td>
    <td><code>object</code></td>
    <td>The content search spec that configs the desired behavior of content search. (id: GoogleCloudDiscoveryengineV1SearchRequestContentSearchSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp the WidgetConfig was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customerProvidedConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Output only. Describes the customer related configurations, currently only used for government customers. This field cannot be modified after project onboarding. (id: GoogleCloudDiscoveryengineV1WidgetConfigCustomerProvidedConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="dataStoreType" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of the parent data store. (DATA_STORE_TYPE_UNSPECIFIED, SITE_SEARCH, STRUCTURED, UNSTRUCTURED, BLENDED)</td>
</tr>
<tr>
    <td><CopyableCode code="dataStoreUiConfigs" /></td>
    <td><code>array</code></td>
    <td>Configurable UI configurations per data store.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultSearchRequestOrderBy" /></td>
    <td><code>string</code></td>
    <td>The default ordering for search results if specified. Used to set SearchRequest#order_by on applicable requests. https://cloud.google.com/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.dataStores.servingConfigs/search#request-body</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human readable widget config display name. Used in Discovery UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="enableAutocomplete" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not to enable autocomplete.</td>
</tr>
<tr>
    <td><CopyableCode code="enableConversationalSearch" /></td>
    <td><code>boolean</code></td>
    <td>Whether to allow conversational search (LLM, multi-turn) or not (non-LLM, single-turn).</td>
</tr>
<tr>
    <td><CopyableCode code="enablePrivateKnowledgeGraph" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Output only. Whether to enable private knowledge graph.</td>
</tr>
<tr>
    <td><CopyableCode code="enableQualityFeedback" /></td>
    <td><code>boolean</code></td>
    <td>Turn on or off collecting the search result quality feedback from end users.</td>
</tr>
<tr>
    <td><CopyableCode code="enableResultScore" /></td>
    <td><code>boolean</code></td>
    <td>Whether to show the result score.</td>
</tr>
<tr>
    <td><CopyableCode code="enableSafeSearch" /></td>
    <td><code>boolean</code></td>
    <td>Whether to enable safe search.</td>
</tr>
<tr>
    <td><CopyableCode code="enableSearchAsYouType" /></td>
    <td><code>boolean</code></td>
    <td>Whether to enable search-as-you-type behavior for the search widget</td>
</tr>
<tr>
    <td><CopyableCode code="enableSnippetResultSummary" /></td>
    <td><code>boolean</code></td>
    <td>Turn on or off summary for each snippets result.</td>
</tr>
<tr>
    <td><CopyableCode code="enableSummarization" /></td>
    <td><code>boolean</code></td>
    <td>Turn on or off summarization for the search response.</td>
</tr>
<tr>
    <td><CopyableCode code="enableWebApp" /></td>
    <td><code>boolean</code></td>
    <td>Whether to enable standalone web app.</td>
</tr>
<tr>
    <td><CopyableCode code="facetField" /></td>
    <td><code>array</code></td>
    <td>The configuration and appearance of facets in the end user view.</td>
</tr>
<tr>
    <td><CopyableCode code="fieldsUiComponentsMap" /></td>
    <td><code>object</code></td>
    <td>The key is the UI component. Mock. Currently supported `title`, `thumbnail`, `url`, `custom1`, `custom2`, `custom3`. The value is the name of the field along with its device visibility. The 3 custom fields are optional and can be added or removed. `title`, `thumbnail`, `url` are required UI components that cannot be removed.</td>
</tr>
<tr>
    <td><CopyableCode code="geminiBundle" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the subscription is gemini bundle or not.</td>
</tr>
<tr>
    <td><CopyableCode code="homepageSetting" /></td>
    <td><code>object</code></td>
    <td>Optional. Describes the homepage settings of the widget. (id: GoogleCloudDiscoveryengineV1WidgetConfigHomepageSetting)</td>
</tr>
<tr>
    <td><CopyableCode code="industryVertical" /></td>
    <td><code>string</code></td>
    <td>Output only. The industry vertical that the WidgetConfig registers. The WidgetConfig industry vertical is based on the associated Engine. (INDUSTRY_VERTICAL_UNSPECIFIED, GENERIC, MEDIA, HEALTHCARE_FHIR)</td>
</tr>
<tr>
    <td><CopyableCode code="llmEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether LLM is enabled in the corresponding data store.</td>
</tr>
<tr>
    <td><CopyableCode code="minimumDataTermAccepted" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the customer accepted data use terms.</td>
</tr>
<tr>
    <td><CopyableCode code="nodes" /></td>
    <td><code>array</code></td>
    <td>Output only. The nodes associated with the Widget Config.</td>
</tr>
<tr>
    <td><CopyableCode code="resultDisplayType" /></td>
    <td><code>string</code></td>
    <td>The type of snippet to display in UCS widget. - RESULT_DISPLAY_TYPE_UNSPECIFIED for existing users. - SNIPPET for new non-enterprise search users. - EXTRACTIVE_ANSWER for new enterprise search users. (RESULT_DISPLAY_TYPE_UNSPECIFIED, SNIPPET, EXTRACTIVE_ANSWER)</td>
</tr>
<tr>
    <td><CopyableCode code="solutionType" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. Specifies the solution type that this WidgetConfig can be used for. (SOLUTION_TYPE_UNSPECIFIED, SOLUTION_TYPE_RECOMMENDATION, SOLUTION_TYPE_SEARCH, SOLUTION_TYPE_CHAT, SOLUTION_TYPE_GENERATIVE_CHAT, SOLUTION_TYPE_AI_MODE)</td>
</tr>
<tr>
    <td><CopyableCode code="uiBranding" /></td>
    <td><code>object</code></td>
    <td>Describes search widget UI branding settings, such as the widget title, logo, favicons, and colors. (id: GoogleCloudDiscoveryengineV1WidgetConfigUiBrandingSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="uiSettings" /></td>
    <td><code>object</code></td>
    <td>Describes general widget search settings as seen in cloud console widget configuration page. Replaces top deprecated top level properties. (id: GoogleCloudDiscoveryengineV1WidgetConfigUiSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp the WidgetConfig was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_collections_engines_widget_configs_get">

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
    <td>Immutable. The full resource name of the widget config. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/collections/&#123;collection_id&#125;/dataStores/&#123;data_store_id&#125;/widgetConfigs/&#123;widget_config_id&#125;`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="accessSettings" /></td>
    <td><code>object</code></td>
    <td>Will be used for all widget access settings seen in cloud console integration page. Replaces top deprecated top level properties. (id: GoogleCloudDiscoveryengineV1WidgetConfigAccessSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="allowPublicAccess" /></td>
    <td><code>boolean</code></td>
    <td>Whether allow no-auth integration with widget. If set true, public access to search or other solutions from widget is allowed without authenication token provided by customer hosted backend server.</td>
</tr>
<tr>
    <td><CopyableCode code="allowlistedDomains" /></td>
    <td><code>array</code></td>
    <td>Allowlisted domains that can load this widget.</td>
</tr>
<tr>
    <td><CopyableCode code="assistantSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Output only. Describes the assistant settings of the widget. (id: GoogleCloudDiscoveryengineV1WidgetConfigAssistantSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="batchAuthStatuses" /></td>
    <td><code>array</code></td>
    <td>Output only. The batch authorization statuses for the widget's connectors.</td>
</tr>
<tr>
    <td><CopyableCode code="collectionComponents" /></td>
    <td><code>array</code></td>
    <td>Output only. Collection components that lists all collections and child data stores associated with the widget config, those data sources can be used for filtering in widget service APIs, users can return results that from selected data sources. For SaaS / Business engines, when `LookupWidgetConfig` is called with `view = WITH_AVAILABLE_CONNECTORS`, this list is additionally augmented with synthetic placeholder entries for connectors the caller may attach but has not yet attached (see `CollectionComponent` for the placeholder contract). The frontend can therefore render a unified list of already-attached and available-to-attach sources by iterating this single field. For Enterprise engines and for the default `view`, only already-attached connectors are returned (today's behavior).</td>
</tr>
<tr>
    <td><CopyableCode code="configId" /></td>
    <td><code>string</code></td>
    <td>Output only. Unique obfuscated identifier of a WidgetConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="contentSearchSpec" /></td>
    <td><code>object</code></td>
    <td>The content search spec that configs the desired behavior of content search. (id: GoogleCloudDiscoveryengineV1SearchRequestContentSearchSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp the WidgetConfig was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customerProvidedConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Output only. Describes the customer related configurations, currently only used for government customers. This field cannot be modified after project onboarding. (id: GoogleCloudDiscoveryengineV1WidgetConfigCustomerProvidedConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="dataStoreType" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of the parent data store. (DATA_STORE_TYPE_UNSPECIFIED, SITE_SEARCH, STRUCTURED, UNSTRUCTURED, BLENDED)</td>
</tr>
<tr>
    <td><CopyableCode code="dataStoreUiConfigs" /></td>
    <td><code>array</code></td>
    <td>Configurable UI configurations per data store.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultSearchRequestOrderBy" /></td>
    <td><code>string</code></td>
    <td>The default ordering for search results if specified. Used to set SearchRequest#order_by on applicable requests. https://cloud.google.com/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.dataStores.servingConfigs/search#request-body</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human readable widget config display name. Used in Discovery UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="enableAutocomplete" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not to enable autocomplete.</td>
</tr>
<tr>
    <td><CopyableCode code="enableConversationalSearch" /></td>
    <td><code>boolean</code></td>
    <td>Whether to allow conversational search (LLM, multi-turn) or not (non-LLM, single-turn).</td>
</tr>
<tr>
    <td><CopyableCode code="enablePrivateKnowledgeGraph" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Output only. Whether to enable private knowledge graph.</td>
</tr>
<tr>
    <td><CopyableCode code="enableQualityFeedback" /></td>
    <td><code>boolean</code></td>
    <td>Turn on or off collecting the search result quality feedback from end users.</td>
</tr>
<tr>
    <td><CopyableCode code="enableResultScore" /></td>
    <td><code>boolean</code></td>
    <td>Whether to show the result score.</td>
</tr>
<tr>
    <td><CopyableCode code="enableSafeSearch" /></td>
    <td><code>boolean</code></td>
    <td>Whether to enable safe search.</td>
</tr>
<tr>
    <td><CopyableCode code="enableSearchAsYouType" /></td>
    <td><code>boolean</code></td>
    <td>Whether to enable search-as-you-type behavior for the search widget</td>
</tr>
<tr>
    <td><CopyableCode code="enableSnippetResultSummary" /></td>
    <td><code>boolean</code></td>
    <td>Turn on or off summary for each snippets result.</td>
</tr>
<tr>
    <td><CopyableCode code="enableSummarization" /></td>
    <td><code>boolean</code></td>
    <td>Turn on or off summarization for the search response.</td>
</tr>
<tr>
    <td><CopyableCode code="enableWebApp" /></td>
    <td><code>boolean</code></td>
    <td>Whether to enable standalone web app.</td>
</tr>
<tr>
    <td><CopyableCode code="facetField" /></td>
    <td><code>array</code></td>
    <td>The configuration and appearance of facets in the end user view.</td>
</tr>
<tr>
    <td><CopyableCode code="fieldsUiComponentsMap" /></td>
    <td><code>object</code></td>
    <td>The key is the UI component. Mock. Currently supported `title`, `thumbnail`, `url`, `custom1`, `custom2`, `custom3`. The value is the name of the field along with its device visibility. The 3 custom fields are optional and can be added or removed. `title`, `thumbnail`, `url` are required UI components that cannot be removed.</td>
</tr>
<tr>
    <td><CopyableCode code="geminiBundle" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the subscription is gemini bundle or not.</td>
</tr>
<tr>
    <td><CopyableCode code="homepageSetting" /></td>
    <td><code>object</code></td>
    <td>Optional. Describes the homepage settings of the widget. (id: GoogleCloudDiscoveryengineV1WidgetConfigHomepageSetting)</td>
</tr>
<tr>
    <td><CopyableCode code="industryVertical" /></td>
    <td><code>string</code></td>
    <td>Output only. The industry vertical that the WidgetConfig registers. The WidgetConfig industry vertical is based on the associated Engine. (INDUSTRY_VERTICAL_UNSPECIFIED, GENERIC, MEDIA, HEALTHCARE_FHIR)</td>
</tr>
<tr>
    <td><CopyableCode code="llmEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether LLM is enabled in the corresponding data store.</td>
</tr>
<tr>
    <td><CopyableCode code="minimumDataTermAccepted" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the customer accepted data use terms.</td>
</tr>
<tr>
    <td><CopyableCode code="nodes" /></td>
    <td><code>array</code></td>
    <td>Output only. The nodes associated with the Widget Config.</td>
</tr>
<tr>
    <td><CopyableCode code="resultDisplayType" /></td>
    <td><code>string</code></td>
    <td>The type of snippet to display in UCS widget. - RESULT_DISPLAY_TYPE_UNSPECIFIED for existing users. - SNIPPET for new non-enterprise search users. - EXTRACTIVE_ANSWER for new enterprise search users. (RESULT_DISPLAY_TYPE_UNSPECIFIED, SNIPPET, EXTRACTIVE_ANSWER)</td>
</tr>
<tr>
    <td><CopyableCode code="solutionType" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. Specifies the solution type that this WidgetConfig can be used for. (SOLUTION_TYPE_UNSPECIFIED, SOLUTION_TYPE_RECOMMENDATION, SOLUTION_TYPE_SEARCH, SOLUTION_TYPE_CHAT, SOLUTION_TYPE_GENERATIVE_CHAT, SOLUTION_TYPE_AI_MODE)</td>
</tr>
<tr>
    <td><CopyableCode code="uiBranding" /></td>
    <td><code>object</code></td>
    <td>Describes search widget UI branding settings, such as the widget title, logo, favicons, and colors. (id: GoogleCloudDiscoveryengineV1WidgetConfigUiBrandingSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="uiSettings" /></td>
    <td><code>object</code></td>
    <td>Describes general widget search settings as seen in cloud console widget configuration page. Replaces top deprecated top level properties. (id: GoogleCloudDiscoveryengineV1WidgetConfigUiSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp the WidgetConfig was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_stores_widget_configs_get">

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
    <td>Immutable. The full resource name of the widget config. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/collections/&#123;collection_id&#125;/dataStores/&#123;data_store_id&#125;/widgetConfigs/&#123;widget_config_id&#125;`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="accessSettings" /></td>
    <td><code>object</code></td>
    <td>Will be used for all widget access settings seen in cloud console integration page. Replaces top deprecated top level properties. (id: GoogleCloudDiscoveryengineV1WidgetConfigAccessSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="allowPublicAccess" /></td>
    <td><code>boolean</code></td>
    <td>Whether allow no-auth integration with widget. If set true, public access to search or other solutions from widget is allowed without authenication token provided by customer hosted backend server.</td>
</tr>
<tr>
    <td><CopyableCode code="allowlistedDomains" /></td>
    <td><code>array</code></td>
    <td>Allowlisted domains that can load this widget.</td>
</tr>
<tr>
    <td><CopyableCode code="assistantSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. Output only. Describes the assistant settings of the widget. (id: GoogleCloudDiscoveryengineV1WidgetConfigAssistantSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="batchAuthStatuses" /></td>
    <td><code>array</code></td>
    <td>Output only. The batch authorization statuses for the widget's connectors.</td>
</tr>
<tr>
    <td><CopyableCode code="collectionComponents" /></td>
    <td><code>array</code></td>
    <td>Output only. Collection components that lists all collections and child data stores associated with the widget config, those data sources can be used for filtering in widget service APIs, users can return results that from selected data sources. For SaaS / Business engines, when `LookupWidgetConfig` is called with `view = WITH_AVAILABLE_CONNECTORS`, this list is additionally augmented with synthetic placeholder entries for connectors the caller may attach but has not yet attached (see `CollectionComponent` for the placeholder contract). The frontend can therefore render a unified list of already-attached and available-to-attach sources by iterating this single field. For Enterprise engines and for the default `view`, only already-attached connectors are returned (today's behavior).</td>
</tr>
<tr>
    <td><CopyableCode code="configId" /></td>
    <td><code>string</code></td>
    <td>Output only. Unique obfuscated identifier of a WidgetConfig.</td>
</tr>
<tr>
    <td><CopyableCode code="contentSearchSpec" /></td>
    <td><code>object</code></td>
    <td>The content search spec that configs the desired behavior of content search. (id: GoogleCloudDiscoveryengineV1SearchRequestContentSearchSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp the WidgetConfig was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customerProvidedConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Output only. Describes the customer related configurations, currently only used for government customers. This field cannot be modified after project onboarding. (id: GoogleCloudDiscoveryengineV1WidgetConfigCustomerProvidedConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="dataStoreType" /></td>
    <td><code>string</code></td>
    <td>Output only. The type of the parent data store. (DATA_STORE_TYPE_UNSPECIFIED, SITE_SEARCH, STRUCTURED, UNSTRUCTURED, BLENDED)</td>
</tr>
<tr>
    <td><CopyableCode code="dataStoreUiConfigs" /></td>
    <td><code>array</code></td>
    <td>Configurable UI configurations per data store.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultSearchRequestOrderBy" /></td>
    <td><code>string</code></td>
    <td>The default ordering for search results if specified. Used to set SearchRequest#order_by on applicable requests. https://cloud.google.com/generative-ai-app-builder/docs/reference/rest/v1alpha/projects.locations.dataStores.servingConfigs/search#request-body</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The human readable widget config display name. Used in Discovery UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="enableAutocomplete" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not to enable autocomplete.</td>
</tr>
<tr>
    <td><CopyableCode code="enableConversationalSearch" /></td>
    <td><code>boolean</code></td>
    <td>Whether to allow conversational search (LLM, multi-turn) or not (non-LLM, single-turn).</td>
</tr>
<tr>
    <td><CopyableCode code="enablePrivateKnowledgeGraph" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Output only. Whether to enable private knowledge graph.</td>
</tr>
<tr>
    <td><CopyableCode code="enableQualityFeedback" /></td>
    <td><code>boolean</code></td>
    <td>Turn on or off collecting the search result quality feedback from end users.</td>
</tr>
<tr>
    <td><CopyableCode code="enableResultScore" /></td>
    <td><code>boolean</code></td>
    <td>Whether to show the result score.</td>
</tr>
<tr>
    <td><CopyableCode code="enableSafeSearch" /></td>
    <td><code>boolean</code></td>
    <td>Whether to enable safe search.</td>
</tr>
<tr>
    <td><CopyableCode code="enableSearchAsYouType" /></td>
    <td><code>boolean</code></td>
    <td>Whether to enable search-as-you-type behavior for the search widget</td>
</tr>
<tr>
    <td><CopyableCode code="enableSnippetResultSummary" /></td>
    <td><code>boolean</code></td>
    <td>Turn on or off summary for each snippets result.</td>
</tr>
<tr>
    <td><CopyableCode code="enableSummarization" /></td>
    <td><code>boolean</code></td>
    <td>Turn on or off summarization for the search response.</td>
</tr>
<tr>
    <td><CopyableCode code="enableWebApp" /></td>
    <td><code>boolean</code></td>
    <td>Whether to enable standalone web app.</td>
</tr>
<tr>
    <td><CopyableCode code="facetField" /></td>
    <td><code>array</code></td>
    <td>The configuration and appearance of facets in the end user view.</td>
</tr>
<tr>
    <td><CopyableCode code="fieldsUiComponentsMap" /></td>
    <td><code>object</code></td>
    <td>The key is the UI component. Mock. Currently supported `title`, `thumbnail`, `url`, `custom1`, `custom2`, `custom3`. The value is the name of the field along with its device visibility. The 3 custom fields are optional and can be added or removed. `title`, `thumbnail`, `url` are required UI components that cannot be removed.</td>
</tr>
<tr>
    <td><CopyableCode code="geminiBundle" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the subscription is gemini bundle or not.</td>
</tr>
<tr>
    <td><CopyableCode code="homepageSetting" /></td>
    <td><code>object</code></td>
    <td>Optional. Describes the homepage settings of the widget. (id: GoogleCloudDiscoveryengineV1WidgetConfigHomepageSetting)</td>
</tr>
<tr>
    <td><CopyableCode code="industryVertical" /></td>
    <td><code>string</code></td>
    <td>Output only. The industry vertical that the WidgetConfig registers. The WidgetConfig industry vertical is based on the associated Engine. (INDUSTRY_VERTICAL_UNSPECIFIED, GENERIC, MEDIA, HEALTHCARE_FHIR)</td>
</tr>
<tr>
    <td><CopyableCode code="llmEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether LLM is enabled in the corresponding data store.</td>
</tr>
<tr>
    <td><CopyableCode code="minimumDataTermAccepted" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the customer accepted data use terms.</td>
</tr>
<tr>
    <td><CopyableCode code="nodes" /></td>
    <td><code>array</code></td>
    <td>Output only. The nodes associated with the Widget Config.</td>
</tr>
<tr>
    <td><CopyableCode code="resultDisplayType" /></td>
    <td><code>string</code></td>
    <td>The type of snippet to display in UCS widget. - RESULT_DISPLAY_TYPE_UNSPECIFIED for existing users. - SNIPPET for new non-enterprise search users. - EXTRACTIVE_ANSWER for new enterprise search users. (RESULT_DISPLAY_TYPE_UNSPECIFIED, SNIPPET, EXTRACTIVE_ANSWER)</td>
</tr>
<tr>
    <td><CopyableCode code="solutionType" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. Specifies the solution type that this WidgetConfig can be used for. (SOLUTION_TYPE_UNSPECIFIED, SOLUTION_TYPE_RECOMMENDATION, SOLUTION_TYPE_SEARCH, SOLUTION_TYPE_CHAT, SOLUTION_TYPE_GENERATIVE_CHAT, SOLUTION_TYPE_AI_MODE)</td>
</tr>
<tr>
    <td><CopyableCode code="uiBranding" /></td>
    <td><code>object</code></td>
    <td>Describes search widget UI branding settings, such as the widget title, logo, favicons, and colors. (id: GoogleCloudDiscoveryengineV1WidgetConfigUiBrandingSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="uiSettings" /></td>
    <td><code>object</code></td>
    <td>Describes general widget search settings as seen in cloud console widget configuration page. Replaces top deprecated top level properties. (id: GoogleCloudDiscoveryengineV1WidgetConfigUiSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp the WidgetConfig was updated.</td>
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
    <td><a href="#projects_locations_collections_data_stores_widget_configs_get"><CopyableCode code="projects_locations_collections_data_stores_widget_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-widgetConfigsId"><code>widgetConfigsId</code></a></td>
    <td><a href="#parameter-acceptCache"><code>acceptCache</code></a>, <a href="#parameter-getWidgetConfigRequestOption.turnOffCollectionComponents"><code>getWidgetConfigRequestOption.turnOffCollectionComponents</code></a>, <a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-modelInfoView"><code>modelInfoView</code></a></td>
    <td>Gets a WidgetConfig.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_widget_configs_get"><CopyableCode code="projects_locations_collections_engines_widget_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-widgetConfigsId"><code>widgetConfigsId</code></a></td>
    <td><a href="#parameter-acceptCache"><code>acceptCache</code></a>, <a href="#parameter-getWidgetConfigRequestOption.turnOffCollectionComponents"><code>getWidgetConfigRequestOption.turnOffCollectionComponents</code></a>, <a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-modelInfoView"><code>modelInfoView</code></a></td>
    <td>Gets a WidgetConfig.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_widget_configs_get"><CopyableCode code="projects_locations_data_stores_widget_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-widgetConfigsId"><code>widgetConfigsId</code></a></td>
    <td><a href="#parameter-acceptCache"><code>acceptCache</code></a>, <a href="#parameter-getWidgetConfigRequestOption.turnOffCollectionComponents"><code>getWidgetConfigRequestOption.turnOffCollectionComponents</code></a>, <a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-modelInfoView"><code>modelInfoView</code></a></td>
    <td>Gets a WidgetConfig.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_data_stores_widget_configs_patch"><CopyableCode code="projects_locations_collections_data_stores_widget_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-widgetConfigsId"><code>widgetConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update a WidgetConfig.</td>
</tr>
<tr>
    <td><a href="#projects_locations_collections_engines_widget_configs_patch"><CopyableCode code="projects_locations_collections_engines_widget_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-collectionsId"><code>collectionsId</code></a>, <a href="#parameter-enginesId"><code>enginesId</code></a>, <a href="#parameter-widgetConfigsId"><code>widgetConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update a WidgetConfig.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_stores_widget_configs_patch"><CopyableCode code="projects_locations_data_stores_widget_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataStoresId"><code>dataStoresId</code></a>, <a href="#parameter-widgetConfigsId"><code>widgetConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update a WidgetConfig.</td>
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
<tr id="parameter-widgetConfigsId">
    <td><CopyableCode code="widgetConfigsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-acceptCache">
    <td><CopyableCode code="acceptCache" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-getWidgetConfigRequestOption.turnOffCollectionComponents">
    <td><CopyableCode code="getWidgetConfigRequestOption.turnOffCollectionComponents" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-languageCode">
    <td><CopyableCode code="languageCode" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-modelInfoView">
    <td><CopyableCode code="modelInfoView" /></td>
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
    defaultValue="projects_locations_collections_data_stores_widget_configs_get"
    values={[
        { label: 'projects_locations_collections_data_stores_widget_configs_get', value: 'projects_locations_collections_data_stores_widget_configs_get' },
        { label: 'projects_locations_collections_engines_widget_configs_get', value: 'projects_locations_collections_engines_widget_configs_get' },
        { label: 'projects_locations_data_stores_widget_configs_get', value: 'projects_locations_data_stores_widget_configs_get' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_widget_configs_get">

Gets a WidgetConfig.

```sql
SELECT
name,
accessSettings,
allowPublicAccess,
allowlistedDomains,
assistantSettings,
batchAuthStatuses,
collectionComponents,
configId,
contentSearchSpec,
createTime,
customerProvidedConfig,
dataStoreType,
dataStoreUiConfigs,
defaultSearchRequestOrderBy,
displayName,
enableAutocomplete,
enableConversationalSearch,
enablePrivateKnowledgeGraph,
enableQualityFeedback,
enableResultScore,
enableSafeSearch,
enableSearchAsYouType,
enableSnippetResultSummary,
enableSummarization,
enableWebApp,
facetField,
fieldsUiComponentsMap,
geminiBundle,
homepageSetting,
industryVertical,
llmEnabled,
minimumDataTermAccepted,
nodes,
resultDisplayType,
solutionType,
uiBranding,
uiSettings,
updateTime
FROM google.discoveryengine.widget_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND widgetConfigsId = '{{ widgetConfigsId }}' -- required
AND acceptCache = '{{ acceptCache }}'
AND getWidgetConfigRequestOption.turnOffCollectionComponents = '{{ getWidgetConfigRequestOption.turnOffCollectionComponents }}'
AND languageCode = '{{ languageCode }}'
AND modelInfoView = '{{ modelInfoView }}'
;
```
</TabItem>
<TabItem value="projects_locations_collections_engines_widget_configs_get">

Gets a WidgetConfig.

```sql
SELECT
name,
accessSettings,
allowPublicAccess,
allowlistedDomains,
assistantSettings,
batchAuthStatuses,
collectionComponents,
configId,
contentSearchSpec,
createTime,
customerProvidedConfig,
dataStoreType,
dataStoreUiConfigs,
defaultSearchRequestOrderBy,
displayName,
enableAutocomplete,
enableConversationalSearch,
enablePrivateKnowledgeGraph,
enableQualityFeedback,
enableResultScore,
enableSafeSearch,
enableSearchAsYouType,
enableSnippetResultSummary,
enableSummarization,
enableWebApp,
facetField,
fieldsUiComponentsMap,
geminiBundle,
homepageSetting,
industryVertical,
llmEnabled,
minimumDataTermAccepted,
nodes,
resultDisplayType,
solutionType,
uiBranding,
uiSettings,
updateTime
FROM google.discoveryengine.widget_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND collectionsId = '{{ collectionsId }}' -- required
AND enginesId = '{{ enginesId }}' -- required
AND widgetConfigsId = '{{ widgetConfigsId }}' -- required
AND acceptCache = '{{ acceptCache }}'
AND getWidgetConfigRequestOption.turnOffCollectionComponents = '{{ getWidgetConfigRequestOption.turnOffCollectionComponents }}'
AND languageCode = '{{ languageCode }}'
AND modelInfoView = '{{ modelInfoView }}'
;
```
</TabItem>
<TabItem value="projects_locations_data_stores_widget_configs_get">

Gets a WidgetConfig.

```sql
SELECT
name,
accessSettings,
allowPublicAccess,
allowlistedDomains,
assistantSettings,
batchAuthStatuses,
collectionComponents,
configId,
contentSearchSpec,
createTime,
customerProvidedConfig,
dataStoreType,
dataStoreUiConfigs,
defaultSearchRequestOrderBy,
displayName,
enableAutocomplete,
enableConversationalSearch,
enablePrivateKnowledgeGraph,
enableQualityFeedback,
enableResultScore,
enableSafeSearch,
enableSearchAsYouType,
enableSnippetResultSummary,
enableSummarization,
enableWebApp,
facetField,
fieldsUiComponentsMap,
geminiBundle,
homepageSetting,
industryVertical,
llmEnabled,
minimumDataTermAccepted,
nodes,
resultDisplayType,
solutionType,
uiBranding,
uiSettings,
updateTime
FROM google.discoveryengine.widget_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataStoresId = '{{ dataStoresId }}' -- required
AND widgetConfigsId = '{{ widgetConfigsId }}' -- required
AND acceptCache = '{{ acceptCache }}'
AND getWidgetConfigRequestOption.turnOffCollectionComponents = '{{ getWidgetConfigRequestOption.turnOffCollectionComponents }}'
AND languageCode = '{{ languageCode }}'
AND modelInfoView = '{{ modelInfoView }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_collections_data_stores_widget_configs_patch"
    values={[
        { label: 'projects_locations_collections_data_stores_widget_configs_patch', value: 'projects_locations_collections_data_stores_widget_configs_patch' },
        { label: 'projects_locations_collections_engines_widget_configs_patch', value: 'projects_locations_collections_engines_widget_configs_patch' },
        { label: 'projects_locations_data_stores_widget_configs_patch', value: 'projects_locations_data_stores_widget_configs_patch' }
    ]}
>
<TabItem value="projects_locations_collections_data_stores_widget_configs_patch">

Update a WidgetConfig.

```sql
UPDATE google.discoveryengine.widget_configs
SET 
data__accessSettings = '{{ accessSettings }}',
data__allowPublicAccess = {{ allowPublicAccess }},
data__allowlistedDomains = '{{ allowlistedDomains }}',
data__contentSearchSpec = '{{ contentSearchSpec }}',
data__dataStoreUiConfigs = '{{ dataStoreUiConfigs }}',
data__defaultSearchRequestOrderBy = '{{ defaultSearchRequestOrderBy }}',
data__displayName = '{{ displayName }}',
data__enableAutocomplete = {{ enableAutocomplete }},
data__enableConversationalSearch = {{ enableConversationalSearch }},
data__enableQualityFeedback = {{ enableQualityFeedback }},
data__enableResultScore = {{ enableResultScore }},
data__enableSafeSearch = {{ enableSafeSearch }},
data__enableSearchAsYouType = {{ enableSearchAsYouType }},
data__enableSnippetResultSummary = {{ enableSnippetResultSummary }},
data__enableSummarization = {{ enableSummarization }},
data__enableWebApp = {{ enableWebApp }},
data__facetField = '{{ facetField }}',
data__fieldsUiComponentsMap = '{{ fieldsUiComponentsMap }}',
data__homepageSetting = '{{ homepageSetting }}',
data__name = '{{ name }}',
data__resultDisplayType = '{{ resultDisplayType }}',
data__solutionType = '{{ solutionType }}',
data__uiBranding = '{{ uiBranding }}',
data__uiSettings = '{{ uiSettings }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND widgetConfigsId = '{{ widgetConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
accessSettings,
allowPublicAccess,
allowlistedDomains,
assistantSettings,
batchAuthStatuses,
collectionComponents,
configId,
contentSearchSpec,
createTime,
customerProvidedConfig,
dataStoreType,
dataStoreUiConfigs,
defaultSearchRequestOrderBy,
displayName,
enableAutocomplete,
enableConversationalSearch,
enablePrivateKnowledgeGraph,
enableQualityFeedback,
enableResultScore,
enableSafeSearch,
enableSearchAsYouType,
enableSnippetResultSummary,
enableSummarization,
enableWebApp,
facetField,
fieldsUiComponentsMap,
geminiBundle,
homepageSetting,
industryVertical,
llmEnabled,
minimumDataTermAccepted,
nodes,
resultDisplayType,
solutionType,
uiBranding,
uiSettings,
updateTime;
```
</TabItem>
<TabItem value="projects_locations_collections_engines_widget_configs_patch">

Update a WidgetConfig.

```sql
UPDATE google.discoveryengine.widget_configs
SET 
data__accessSettings = '{{ accessSettings }}',
data__allowPublicAccess = {{ allowPublicAccess }},
data__allowlistedDomains = '{{ allowlistedDomains }}',
data__contentSearchSpec = '{{ contentSearchSpec }}',
data__dataStoreUiConfigs = '{{ dataStoreUiConfigs }}',
data__defaultSearchRequestOrderBy = '{{ defaultSearchRequestOrderBy }}',
data__displayName = '{{ displayName }}',
data__enableAutocomplete = {{ enableAutocomplete }},
data__enableConversationalSearch = {{ enableConversationalSearch }},
data__enableQualityFeedback = {{ enableQualityFeedback }},
data__enableResultScore = {{ enableResultScore }},
data__enableSafeSearch = {{ enableSafeSearch }},
data__enableSearchAsYouType = {{ enableSearchAsYouType }},
data__enableSnippetResultSummary = {{ enableSnippetResultSummary }},
data__enableSummarization = {{ enableSummarization }},
data__enableWebApp = {{ enableWebApp }},
data__facetField = '{{ facetField }}',
data__fieldsUiComponentsMap = '{{ fieldsUiComponentsMap }}',
data__homepageSetting = '{{ homepageSetting }}',
data__name = '{{ name }}',
data__resultDisplayType = '{{ resultDisplayType }}',
data__solutionType = '{{ solutionType }}',
data__uiBranding = '{{ uiBranding }}',
data__uiSettings = '{{ uiSettings }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND collectionsId = '{{ collectionsId }}' --required
AND enginesId = '{{ enginesId }}' --required
AND widgetConfigsId = '{{ widgetConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
accessSettings,
allowPublicAccess,
allowlistedDomains,
assistantSettings,
batchAuthStatuses,
collectionComponents,
configId,
contentSearchSpec,
createTime,
customerProvidedConfig,
dataStoreType,
dataStoreUiConfigs,
defaultSearchRequestOrderBy,
displayName,
enableAutocomplete,
enableConversationalSearch,
enablePrivateKnowledgeGraph,
enableQualityFeedback,
enableResultScore,
enableSafeSearch,
enableSearchAsYouType,
enableSnippetResultSummary,
enableSummarization,
enableWebApp,
facetField,
fieldsUiComponentsMap,
geminiBundle,
homepageSetting,
industryVertical,
llmEnabled,
minimumDataTermAccepted,
nodes,
resultDisplayType,
solutionType,
uiBranding,
uiSettings,
updateTime;
```
</TabItem>
<TabItem value="projects_locations_data_stores_widget_configs_patch">

Update a WidgetConfig.

```sql
UPDATE google.discoveryengine.widget_configs
SET 
data__accessSettings = '{{ accessSettings }}',
data__allowPublicAccess = {{ allowPublicAccess }},
data__allowlistedDomains = '{{ allowlistedDomains }}',
data__contentSearchSpec = '{{ contentSearchSpec }}',
data__dataStoreUiConfigs = '{{ dataStoreUiConfigs }}',
data__defaultSearchRequestOrderBy = '{{ defaultSearchRequestOrderBy }}',
data__displayName = '{{ displayName }}',
data__enableAutocomplete = {{ enableAutocomplete }},
data__enableConversationalSearch = {{ enableConversationalSearch }},
data__enableQualityFeedback = {{ enableQualityFeedback }},
data__enableResultScore = {{ enableResultScore }},
data__enableSafeSearch = {{ enableSafeSearch }},
data__enableSearchAsYouType = {{ enableSearchAsYouType }},
data__enableSnippetResultSummary = {{ enableSnippetResultSummary }},
data__enableSummarization = {{ enableSummarization }},
data__enableWebApp = {{ enableWebApp }},
data__facetField = '{{ facetField }}',
data__fieldsUiComponentsMap = '{{ fieldsUiComponentsMap }}',
data__homepageSetting = '{{ homepageSetting }}',
data__name = '{{ name }}',
data__resultDisplayType = '{{ resultDisplayType }}',
data__solutionType = '{{ solutionType }}',
data__uiBranding = '{{ uiBranding }}',
data__uiSettings = '{{ uiSettings }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataStoresId = '{{ dataStoresId }}' --required
AND widgetConfigsId = '{{ widgetConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
accessSettings,
allowPublicAccess,
allowlistedDomains,
assistantSettings,
batchAuthStatuses,
collectionComponents,
configId,
contentSearchSpec,
createTime,
customerProvidedConfig,
dataStoreType,
dataStoreUiConfigs,
defaultSearchRequestOrderBy,
displayName,
enableAutocomplete,
enableConversationalSearch,
enablePrivateKnowledgeGraph,
enableQualityFeedback,
enableResultScore,
enableSafeSearch,
enableSearchAsYouType,
enableSnippetResultSummary,
enableSummarization,
enableWebApp,
facetField,
fieldsUiComponentsMap,
geminiBundle,
homepageSetting,
industryVertical,
llmEnabled,
minimumDataTermAccepted,
nodes,
resultDisplayType,
solutionType,
uiBranding,
uiSettings,
updateTime;
```
</TabItem>
</Tabs>
