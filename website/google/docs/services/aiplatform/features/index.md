--- 
title: features
hide_title: false
hide_table_of_contents: false
keywords:
  - features
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

Creates, updates, deletes, gets or lists a <code>features</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="features" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.features" /></td></tr>
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
    <td>Immutable. Name of the Feature. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/featurestores/&#123;featurestore&#125;/entityTypes/&#123;entity_type&#125;/features/&#123;feature&#125;` `projects/&#123;project&#125;/locations/&#123;location&#125;/featureGroups/&#123;feature_group&#125;/features/&#123;feature&#125;` The last part feature is assigned by the client. The feature can be up to 64 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscore(_), and ASCII digits 0-9 starting with a letter. The value will be unique given an entity type.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Only applicable for Vertex AI Feature Store (Legacy). Timestamp when this EntityType was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the Feature.</td>
</tr>
<tr>
    <td><CopyableCode code="disableMonitoring" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Only applicable for Vertex AI Feature Store (Legacy). If not set, use the monitoring_config defined for the EntityType this Feature belongs to. Only Features with type (Feature.ValueType) BOOL, STRING, DOUBLE or INT64 can enable monitoring. If set to true, all types of data monitoring are disabled despite the config on EntityType.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Used to perform a consistent read-modify-write updates. If not set, a blind "overwrite" update happens.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels with user-defined metadata to organize your Features. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information on and examples of labels. No more than 64 user labels can be associated with one Feature (System labels are excluded)." System reserved label keys are prefixed with "aiplatform.googleapis.com/" and are immutable.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoringStatsAnomalies" /></td>
    <td><code>array</code></td>
    <td>Output only. Only applicable for Vertex AI Feature Store (Legacy). The list of historical stats and anomalies with specified objectives.</td>
</tr>
<tr>
    <td><CopyableCode code="pointOfContact" /></td>
    <td><code>string</code></td>
    <td>Entity responsible for maintaining this feature. Can be comma separated list of email addresses or URIs.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Only applicable for Vertex AI Feature Store (Legacy). Timestamp when this EntityType was most recently updated.</td>
</tr>
<tr>
    <td><CopyableCode code="valueType" /></td>
    <td><code>string</code></td>
    <td>Immutable. Only applicable for Vertex AI Feature Store (Legacy). Type of Feature value. (VALUE_TYPE_UNSPECIFIED, BOOL, BOOL_ARRAY, DOUBLE, DOUBLE_ARRAY, INT64, INT64_ARRAY, STRING, STRING_ARRAY, BYTES, STRUCT)</td>
</tr>
<tr>
    <td><CopyableCode code="versionColumnName" /></td>
    <td><code>string</code></td>
    <td>Only applicable for Vertex AI Feature Store. The name of the BigQuery Table/View column hosting data for this version. If no value is provided, will use feature_id.</td>
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
    <td>Immutable. Name of the Feature. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/featurestores/&#123;featurestore&#125;/entityTypes/&#123;entity_type&#125;/features/&#123;feature&#125;` `projects/&#123;project&#125;/locations/&#123;location&#125;/featureGroups/&#123;feature_group&#125;/features/&#123;feature&#125;` The last part feature is assigned by the client. The feature can be up to 64 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscore(_), and ASCII digits 0-9 starting with a letter. The value will be unique given an entity type.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Only applicable for Vertex AI Feature Store (Legacy). Timestamp when this EntityType was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the Feature.</td>
</tr>
<tr>
    <td><CopyableCode code="disableMonitoring" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Only applicable for Vertex AI Feature Store (Legacy). If not set, use the monitoring_config defined for the EntityType this Feature belongs to. Only Features with type (Feature.ValueType) BOOL, STRING, DOUBLE or INT64 can enable monitoring. If set to true, all types of data monitoring are disabled despite the config on EntityType.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Used to perform a consistent read-modify-write updates. If not set, a blind "overwrite" update happens.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels with user-defined metadata to organize your Features. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information on and examples of labels. No more than 64 user labels can be associated with one Feature (System labels are excluded)." System reserved label keys are prefixed with "aiplatform.googleapis.com/" and are immutable.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoringStatsAnomalies" /></td>
    <td><code>array</code></td>
    <td>Output only. Only applicable for Vertex AI Feature Store (Legacy). The list of historical stats and anomalies with specified objectives.</td>
</tr>
<tr>
    <td><CopyableCode code="pointOfContact" /></td>
    <td><code>string</code></td>
    <td>Entity responsible for maintaining this feature. Can be comma separated list of email addresses or URIs.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Only applicable for Vertex AI Feature Store (Legacy). Timestamp when this EntityType was most recently updated.</td>
</tr>
<tr>
    <td><CopyableCode code="valueType" /></td>
    <td><code>string</code></td>
    <td>Immutable. Only applicable for Vertex AI Feature Store (Legacy). Type of Feature value. (VALUE_TYPE_UNSPECIFIED, BOOL, BOOL_ARRAY, DOUBLE, DOUBLE_ARRAY, INT64, INT64_ARRAY, STRING, STRING_ARRAY, BYTES, STRUCT)</td>
</tr>
<tr>
    <td><CopyableCode code="versionColumnName" /></td>
    <td><code>string</code></td>
    <td>Only applicable for Vertex AI Feature Store. The name of the BigQuery Table/View column hosting data for this version. If no value is provided, will use feature_id.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featureGroupsId"><code>featureGroupsId</code></a>, <a href="#parameter-featuresId"><code>featuresId</code></a></td>
    <td></td>
    <td>Gets details of a single Feature.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featureGroupsId"><code>featureGroupsId</code></a></td>
    <td><a href="#parameter-readMask"><code>readMask</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-latestStatsCount"><code>latestStatsCount</code></a></td>
    <td>Lists Features in a given FeatureGroup.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featureGroupsId"><code>featureGroupsId</code></a></td>
    <td><a href="#parameter-featureId"><code>featureId</code></a></td>
    <td>Creates a new Feature in a given FeatureGroup.</td>
</tr>
<tr>
    <td><a href="#batch_create"><CopyableCode code="batch_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featureGroupsId"><code>featureGroupsId</code></a></td>
    <td></td>
    <td>Creates a batch of Features in a given FeatureGroup.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featureGroupsId"><code>featureGroupsId</code></a>, <a href="#parameter-featuresId"><code>featuresId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single Feature.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-featureGroupsId"><code>featureGroupsId</code></a>, <a href="#parameter-featuresId"><code>featuresId</code></a></td>
    <td></td>
    <td>Deletes a single Feature.</td>
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
<tr id="parameter-featureGroupsId">
    <td><CopyableCode code="featureGroupsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-featuresId">
    <td><CopyableCode code="featuresId" /></td>
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
<tr id="parameter-featureId">
    <td><CopyableCode code="featureId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-latestStatsCount">
    <td><CopyableCode code="latestStatsCount" /></td>
    <td><code>integer (int32)</code></td>
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
<tr id="parameter-readMask">
    <td><CopyableCode code="readMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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

Gets details of a single Feature.

```sql
SELECT
name,
createTime,
description,
disableMonitoring,
etag,
labels,
monitoringStatsAnomalies,
pointOfContact,
updateTime,
valueType,
versionColumnName
FROM google.aiplatform.features
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND featureGroupsId = '{{ featureGroupsId }}' -- required
AND featuresId = '{{ featuresId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Features in a given FeatureGroup.

```sql
SELECT
name,
createTime,
description,
disableMonitoring,
etag,
labels,
monitoringStatsAnomalies,
pointOfContact,
updateTime,
valueType,
versionColumnName
FROM google.aiplatform.features
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND featureGroupsId = '{{ featureGroupsId }}' -- required
AND readMask = '{{ readMask }}'
AND filter = '{{ filter }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND latestStatsCount = '{{ latestStatsCount }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'batch_create', value: 'batch_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a new Feature in a given FeatureGroup.

```sql
INSERT INTO google.aiplatform.features (
data__etag,
data__versionColumnName,
data__valueType,
data__labels,
data__name,
data__disableMonitoring,
data__pointOfContact,
data__description,
projectsId,
locationsId,
featureGroupsId,
featureId
)
SELECT 
'{{ etag }}',
'{{ versionColumnName }}',
'{{ valueType }}',
'{{ labels }}',
'{{ name }}',
{{ disableMonitoring }},
'{{ pointOfContact }}',
'{{ description }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ featureGroupsId }}',
'{{ featureId }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="batch_create">

Creates a batch of Features in a given FeatureGroup.

```sql
INSERT INTO google.aiplatform.features (
data__requests,
projectsId,
locationsId,
featureGroupsId
)
SELECT 
'{{ requests }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ featureGroupsId }}'
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
- name: features
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the features resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the features resource.
    - name: featureGroupsId
      value: "{{ featureGroupsId }}"
      description: Required parameter for the features resource.
    - name: etag
      value: "{{ etag }}"
      description: |
        Used to perform a consistent read-modify-write updates. If not set, a blind "overwrite" update happens.
    - name: versionColumnName
      value: "{{ versionColumnName }}"
      description: |
        Only applicable for Vertex AI Feature Store. The name of the BigQuery Table/View column hosting data for this version. If no value is provided, will use feature_id.
    - name: valueType
      value: "{{ valueType }}"
      description: |
        Immutable. Only applicable for Vertex AI Feature Store (Legacy). Type of Feature value.
      valid_values: ['VALUE_TYPE_UNSPECIFIED', 'BOOL', 'BOOL_ARRAY', 'DOUBLE', 'DOUBLE_ARRAY', 'INT64', 'INT64_ARRAY', 'STRING', 'STRING_ARRAY', 'BYTES', 'STRUCT']
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. The labels with user-defined metadata to organize your Features. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information on and examples of labels. No more than 64 user labels can be associated with one Feature (System labels are excluded)." System reserved label keys are prefixed with "aiplatform.googleapis.com/" and are immutable.
    - name: name
      value: "{{ name }}"
      description: |
        Immutable. Name of the Feature. Format: \`projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}/features/{feature}\` \`projects/{project}/locations/{location}/featureGroups/{feature_group}/features/{feature}\` The last part feature is assigned by the client. The feature can be up to 64 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscore(_), and ASCII digits 0-9 starting with a letter. The value will be unique given an entity type.
    - name: disableMonitoring
      value: {{ disableMonitoring }}
      description: |
        Optional. Only applicable for Vertex AI Feature Store (Legacy). If not set, use the monitoring_config defined for the EntityType this Feature belongs to. Only Features with type (Feature.ValueType) BOOL, STRING, DOUBLE or INT64 can enable monitoring. If set to true, all types of data monitoring are disabled despite the config on EntityType.
    - name: pointOfContact
      value: "{{ pointOfContact }}"
      description: |
        Entity responsible for maintaining this feature. Can be comma separated list of email addresses or URIs.
    - name: description
      value: "{{ description }}"
      description: |
        Description of the Feature.
    - name: requests
      description: |
        Required. The request message specifying the Features to create. All Features must be created under the same parent EntityType / FeatureGroup. The \`parent\` field in each child request message can be omitted. If \`parent\` is set in a child request, then the value must match the \`parent\` value in this request message.
      value:
        - parent: "{{ parent }}"
          feature:
            updateTime: "{{ updateTime }}"
            etag: "{{ etag }}"
            createTime: "{{ createTime }}"
            versionColumnName: "{{ versionColumnName }}"
            monitoringStatsAnomalies:
              - objective: "{{ objective }}"
                featureStatsAnomaly:
                  distributionDeviation: {{ distributionDeviation }}
                  score: {{ score }}
                  startTime: "{{ startTime }}"
                  statsUri: "{{ statsUri }}"
                  anomalyDetectionThreshold: {{ anomalyDetectionThreshold }}
                  endTime: "{{ endTime }}"
                  anomalyUri: "{{ anomalyUri }}"
            valueType: "{{ valueType }}"
            labels: "{{ labels }}"
            name: "{{ name }}"
            disableMonitoring: {{ disableMonitoring }}
            pointOfContact: "{{ pointOfContact }}"
            description: "{{ description }}"
          featureId: "{{ featureId }}"
    - name: featureId
      value: "{{ featureId }}"
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

Updates the parameters of a single Feature.

```sql
UPDATE google.aiplatform.features
SET 
data__etag = '{{ etag }}',
data__versionColumnName = '{{ versionColumnName }}',
data__valueType = '{{ valueType }}',
data__labels = '{{ labels }}',
data__name = '{{ name }}',
data__disableMonitoring = {{ disableMonitoring }},
data__pointOfContact = '{{ pointOfContact }}',
data__description = '{{ description }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND featureGroupsId = '{{ featureGroupsId }}' --required
AND featuresId = '{{ featuresId }}' --required
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

Deletes a single Feature.

```sql
DELETE FROM google.aiplatform.features
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND featureGroupsId = '{{ featureGroupsId }}' --required
AND featuresId = '{{ featuresId }}' --required
;
```
</TabItem>
</Tabs>
