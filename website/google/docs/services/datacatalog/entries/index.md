--- 
title: entries
hide_title: false
hide_table_of_contents: false
keywords:
  - entries
  - datacatalog
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

Creates, updates, deletes, gets or lists an <code>entries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="entries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datacatalog.entries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_entry_groups_entries_get"
    values={[
        { label: 'projects_locations_entry_groups_entries_get', value: 'projects_locations_entry_groups_entries_get' },
        { label: 'projects_locations_entry_groups_entries_list', value: 'projects_locations_entry_groups_entries_list' }
    ]}
>
<TabItem value="projects_locations_entry_groups_entries_get">

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
    <td>Output only. Identifier. The resource name of an entry in URL format. Note: The entry itself and its child resources might not be stored in the location specified in its name.</td>
</tr>
<tr>
    <td><CopyableCode code="bigqueryDateShardedSpec" /></td>
    <td><code>object</code></td>
    <td>Output only. Specification for a group of BigQuery tables with the `[prefix]YYYYMMDD` name pattern. For more information, see [Introduction to partitioned tables] (https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding). (id: GoogleCloudDatacatalogV1BigQueryDateShardedSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="bigqueryTableSpec" /></td>
    <td><code>object</code></td>
    <td>Output only. Specification that applies to a BigQuery table. Valid only for entries with the `TABLE` type. (id: GoogleCloudDatacatalogV1BigQueryTableSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="businessContext" /></td>
    <td><code>object</code></td>
    <td>Business Context of the entry. Not supported for BigQuery datasets (id: GoogleCloudDatacatalogV1BusinessContext)</td>
</tr>
<tr>
    <td><CopyableCode code="cloudBigtableSystemSpec" /></td>
    <td><code>object</code></td>
    <td>Specification that applies to Cloud Bigtable system. Only settable when `integrated_system` is equal to `CLOUD_BIGTABLE` (id: GoogleCloudDatacatalogV1CloudBigtableSystemSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="dataSource" /></td>
    <td><code>object</code></td>
    <td>Output only. Physical location of the entry. (id: GoogleCloudDatacatalogV1DataSource)</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceConnectionSpec" /></td>
    <td><code>object</code></td>
    <td>Specification that applies to a data source connection. Valid only for entries with the `DATA_SOURCE_CONNECTION` type. (id: GoogleCloudDatacatalogV1DataSourceConnectionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="databaseTableSpec" /></td>
    <td><code>object</code></td>
    <td>Specification that applies to a table resource. Valid only for entries with the `TABLE` or `EXPLORE` type. (id: GoogleCloudDatacatalogV1DatabaseTableSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="datasetSpec" /></td>
    <td><code>object</code></td>
    <td>Specification that applies to a dataset. (id: GoogleCloudDatacatalogV1DatasetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Entry description that can consist of several sentences or paragraphs that describe entry contents. The description must not contain Unicode non-characters as well as C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). The maximum size is 2000 bytes when encoded in UTF-8. Default value is an empty string.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name of an entry. The maximum size is 500 bytes when encoded in UTF-8. Default value is an empty string.</td>
</tr>
<tr>
    <td><CopyableCode code="featureOnlineStoreSpec" /></td>
    <td><code>object</code></td>
    <td>FeatureonlineStore spec for Vertex AI Feature Store. (id: GoogleCloudDatacatalogV1FeatureOnlineStoreSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="filesetSpec" /></td>
    <td><code>object</code></td>
    <td>Specification that applies to a fileset resource. Valid only for entries with the `FILESET` type. (id: GoogleCloudDatacatalogV1FilesetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="fullyQualifiedName" /></td>
    <td><code>string</code></td>
    <td>[Fully Qualified Name (FQN)](https://cloud.google.com//data-catalog/docs/fully-qualified-names) of the resource. Set automatically for entries representing resources from synced systems. Settable only during creation, and read-only later. Can be used for search and lookup of the entries. </td>
</tr>
<tr>
    <td><CopyableCode code="gcsFilesetSpec" /></td>
    <td><code>object</code></td>
    <td>Specification that applies to a Cloud Storage fileset. Valid only for entries with the `FILESET` type. (id: GoogleCloudDatacatalogV1GcsFilesetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="graphSpec" /></td>
    <td><code>object</code></td>
    <td>Spec for graph. (id: GoogleCloudDatacatalogV1GraphSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="integratedSystem" /></td>
    <td><code>string</code></td>
    <td>Output only. Indicates the entry's source system that Data Catalog integrates with, such as BigQuery, Pub/Sub, or Dataproc Metastore. (INTEGRATED_SYSTEM_UNSPECIFIED, BIGQUERY, CLOUD_PUBSUB, DATAPROC_METASTORE, DATAPLEX, CLOUD_SPANNER, CLOUD_BIGTABLE, CLOUD_SQL, LOOKER, VERTEX_AI)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Cloud labels attached to the entry. In Data Catalog, you can create and modify labels attached only to custom entries. Synced entries have unmodifiable labels that come from the source system.</td>
</tr>
<tr>
    <td><CopyableCode code="linkedResource" /></td>
    <td><code>string</code></td>
    <td>The resource this metadata entry refers to. For Google Cloud Platform resources, `linked_resource` is the [Full Resource Name] (https://cloud.google.com/apis/design/resource_names#full_resource_name). For example, the `linked_resource` for a table resource from BigQuery is: `//bigquery.googleapis.com/projects/&#123;PROJECT_ID&#125;/datasets/&#123;DATASET_ID&#125;/tables/&#123;TABLE_ID&#125;` Output only when the entry is one of the types in the `EntryType` enum. For entries with a `user_specified_type`, this field is optional and defaults to an empty string. The resource string must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), periods (.), colons (:), slashes (/), dashes (-), and hashes (#). The maximum size is 200 bytes when encoded in UTF-8.</td>
</tr>
<tr>
    <td><CopyableCode code="lookerSystemSpec" /></td>
    <td><code>object</code></td>
    <td>Specification that applies to Looker sysstem. Only settable when `user_specified_system` is equal to `LOOKER` (id: GoogleCloudDatacatalogV1LookerSystemSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="modelSpec" /></td>
    <td><code>object</code></td>
    <td>Model specification. (id: GoogleCloudDatacatalogV1ModelSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="personalDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. Additional information related to the entry. Private to the current user. (id: GoogleCloudDatacatalogV1PersonalDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="routineSpec" /></td>
    <td><code>object</code></td>
    <td>Specification that applies to a user-defined function or procedure. Valid only for entries with the `ROUTINE` type. (id: GoogleCloudDatacatalogV1RoutineSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>object</code></td>
    <td>Schema of the entry. An entry might not have any schema attached to it. (id: GoogleCloudDatacatalogV1Schema)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceSpec" /></td>
    <td><code>object</code></td>
    <td>Specification that applies to a Service resource. (id: GoogleCloudDatacatalogV1ServiceSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceSystemTimestamps" /></td>
    <td><code>object</code></td>
    <td>Timestamps from the underlying resource, not from the Data Catalog entry. Output only when the entry has a system listed in the `IntegratedSystem` enum. For entries with `user_specified_system`, this field is optional and defaults to an empty timestamp. (id: GoogleCloudDatacatalogV1SystemTimestamps)</td>
</tr>
<tr>
    <td><CopyableCode code="spannerTableSpec" /></td>
    <td><code>object</code></td>
    <td>Specification of a Spanner table. (id: GoogleCloudDatacatalogV1SpannerTableSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="sqlDatabaseSystemSpec" /></td>
    <td><code>object</code></td>
    <td>Specification that applies to a relational database system. Only settable when `user_specified_system` is equal to `SQL_DATABASE` (id: GoogleCloudDatacatalogV1SqlDatabaseSystemSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the entry. For details, see [`EntryType`](https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries#entrytype). (ENTRY_TYPE_UNSPECIFIED, TABLE, MODEL, DATA_STREAM, FILESET, CLUSTER, DATABASE, DATA_SOURCE_CONNECTION, ROUTINE, LAKE, ZONE, SERVICE, DATABASE_SCHEMA, DASHBOARD, EXPLORE, LOOK, FEATURE_ONLINE_STORE, FEATURE_VIEW, FEATURE_GROUP, GRAPH)</td>
</tr>
<tr>
    <td><CopyableCode code="usageSignal" /></td>
    <td><code>object</code></td>
    <td>Resource usage statistics. (id: GoogleCloudDatacatalogV1UsageSignal)</td>
</tr>
<tr>
    <td><CopyableCode code="userSpecifiedSystem" /></td>
    <td><code>string</code></td>
    <td>Indicates the entry's source system that Data Catalog doesn't automatically integrate with. The `user_specified_system` string has the following limitations: * Is case insensitive. * Must begin with a letter or underscore. * Can only contain letters, numbers, and underscores. * Must be at least 1 character and at most 64 characters long.</td>
</tr>
<tr>
    <td><CopyableCode code="userSpecifiedType" /></td>
    <td><code>string</code></td>
    <td>Custom entry type that doesn't match any of the values allowed for input and listed in the `EntryType` enum. When creating an entry, first check the type values in the enum. If there are no appropriate types for the new entry, provide a custom value, for example, `my_special_type`. The `user_specified_type` string has the following limitations: * Is case insensitive. * Must begin with a letter or underscore. * Can only contain letters, numbers, and underscores. * Must be at least 1 character and at most 64 characters long.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_entry_groups_entries_list">

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
    <td>Output only. Identifier. The resource name of an entry in URL format. Note: The entry itself and its child resources might not be stored in the location specified in its name.</td>
</tr>
<tr>
    <td><CopyableCode code="bigqueryDateShardedSpec" /></td>
    <td><code>object</code></td>
    <td>Output only. Specification for a group of BigQuery tables with the `[prefix]YYYYMMDD` name pattern. For more information, see [Introduction to partitioned tables] (https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding). (id: GoogleCloudDatacatalogV1BigQueryDateShardedSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="bigqueryTableSpec" /></td>
    <td><code>object</code></td>
    <td>Output only. Specification that applies to a BigQuery table. Valid only for entries with the `TABLE` type. (id: GoogleCloudDatacatalogV1BigQueryTableSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="businessContext" /></td>
    <td><code>object</code></td>
    <td>Business Context of the entry. Not supported for BigQuery datasets (id: GoogleCloudDatacatalogV1BusinessContext)</td>
</tr>
<tr>
    <td><CopyableCode code="cloudBigtableSystemSpec" /></td>
    <td><code>object</code></td>
    <td>Specification that applies to Cloud Bigtable system. Only settable when `integrated_system` is equal to `CLOUD_BIGTABLE` (id: GoogleCloudDatacatalogV1CloudBigtableSystemSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="dataSource" /></td>
    <td><code>object</code></td>
    <td>Output only. Physical location of the entry. (id: GoogleCloudDatacatalogV1DataSource)</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceConnectionSpec" /></td>
    <td><code>object</code></td>
    <td>Specification that applies to a data source connection. Valid only for entries with the `DATA_SOURCE_CONNECTION` type. (id: GoogleCloudDatacatalogV1DataSourceConnectionSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="databaseTableSpec" /></td>
    <td><code>object</code></td>
    <td>Specification that applies to a table resource. Valid only for entries with the `TABLE` or `EXPLORE` type. (id: GoogleCloudDatacatalogV1DatabaseTableSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="datasetSpec" /></td>
    <td><code>object</code></td>
    <td>Specification that applies to a dataset. (id: GoogleCloudDatacatalogV1DatasetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Entry description that can consist of several sentences or paragraphs that describe entry contents. The description must not contain Unicode non-characters as well as C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). The maximum size is 2000 bytes when encoded in UTF-8. Default value is an empty string.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name of an entry. The maximum size is 500 bytes when encoded in UTF-8. Default value is an empty string.</td>
</tr>
<tr>
    <td><CopyableCode code="featureOnlineStoreSpec" /></td>
    <td><code>object</code></td>
    <td>FeatureonlineStore spec for Vertex AI Feature Store. (id: GoogleCloudDatacatalogV1FeatureOnlineStoreSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="filesetSpec" /></td>
    <td><code>object</code></td>
    <td>Specification that applies to a fileset resource. Valid only for entries with the `FILESET` type. (id: GoogleCloudDatacatalogV1FilesetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="fullyQualifiedName" /></td>
    <td><code>string</code></td>
    <td>[Fully Qualified Name (FQN)](https://cloud.google.com//data-catalog/docs/fully-qualified-names) of the resource. Set automatically for entries representing resources from synced systems. Settable only during creation, and read-only later. Can be used for search and lookup of the entries. </td>
</tr>
<tr>
    <td><CopyableCode code="gcsFilesetSpec" /></td>
    <td><code>object</code></td>
    <td>Specification that applies to a Cloud Storage fileset. Valid only for entries with the `FILESET` type. (id: GoogleCloudDatacatalogV1GcsFilesetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="graphSpec" /></td>
    <td><code>object</code></td>
    <td>Spec for graph. (id: GoogleCloudDatacatalogV1GraphSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="integratedSystem" /></td>
    <td><code>string</code></td>
    <td>Output only. Indicates the entry's source system that Data Catalog integrates with, such as BigQuery, Pub/Sub, or Dataproc Metastore. (INTEGRATED_SYSTEM_UNSPECIFIED, BIGQUERY, CLOUD_PUBSUB, DATAPROC_METASTORE, DATAPLEX, CLOUD_SPANNER, CLOUD_BIGTABLE, CLOUD_SQL, LOOKER, VERTEX_AI)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Cloud labels attached to the entry. In Data Catalog, you can create and modify labels attached only to custom entries. Synced entries have unmodifiable labels that come from the source system.</td>
</tr>
<tr>
    <td><CopyableCode code="linkedResource" /></td>
    <td><code>string</code></td>
    <td>The resource this metadata entry refers to. For Google Cloud Platform resources, `linked_resource` is the [Full Resource Name] (https://cloud.google.com/apis/design/resource_names#full_resource_name). For example, the `linked_resource` for a table resource from BigQuery is: `//bigquery.googleapis.com/projects/&#123;PROJECT_ID&#125;/datasets/&#123;DATASET_ID&#125;/tables/&#123;TABLE_ID&#125;` Output only when the entry is one of the types in the `EntryType` enum. For entries with a `user_specified_type`, this field is optional and defaults to an empty string. The resource string must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), periods (.), colons (:), slashes (/), dashes (-), and hashes (#). The maximum size is 200 bytes when encoded in UTF-8.</td>
</tr>
<tr>
    <td><CopyableCode code="lookerSystemSpec" /></td>
    <td><code>object</code></td>
    <td>Specification that applies to Looker sysstem. Only settable when `user_specified_system` is equal to `LOOKER` (id: GoogleCloudDatacatalogV1LookerSystemSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="modelSpec" /></td>
    <td><code>object</code></td>
    <td>Model specification. (id: GoogleCloudDatacatalogV1ModelSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="personalDetails" /></td>
    <td><code>object</code></td>
    <td>Output only. Additional information related to the entry. Private to the current user. (id: GoogleCloudDatacatalogV1PersonalDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="routineSpec" /></td>
    <td><code>object</code></td>
    <td>Specification that applies to a user-defined function or procedure. Valid only for entries with the `ROUTINE` type. (id: GoogleCloudDatacatalogV1RoutineSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>object</code></td>
    <td>Schema of the entry. An entry might not have any schema attached to it. (id: GoogleCloudDatacatalogV1Schema)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceSpec" /></td>
    <td><code>object</code></td>
    <td>Specification that applies to a Service resource. (id: GoogleCloudDatacatalogV1ServiceSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceSystemTimestamps" /></td>
    <td><code>object</code></td>
    <td>Timestamps from the underlying resource, not from the Data Catalog entry. Output only when the entry has a system listed in the `IntegratedSystem` enum. For entries with `user_specified_system`, this field is optional and defaults to an empty timestamp. (id: GoogleCloudDatacatalogV1SystemTimestamps)</td>
</tr>
<tr>
    <td><CopyableCode code="spannerTableSpec" /></td>
    <td><code>object</code></td>
    <td>Specification of a Spanner table. (id: GoogleCloudDatacatalogV1SpannerTableSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="sqlDatabaseSystemSpec" /></td>
    <td><code>object</code></td>
    <td>Specification that applies to a relational database system. Only settable when `user_specified_system` is equal to `SQL_DATABASE` (id: GoogleCloudDatacatalogV1SqlDatabaseSystemSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the entry. For details, see [`EntryType`](https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries#entrytype). (ENTRY_TYPE_UNSPECIFIED, TABLE, MODEL, DATA_STREAM, FILESET, CLUSTER, DATABASE, DATA_SOURCE_CONNECTION, ROUTINE, LAKE, ZONE, SERVICE, DATABASE_SCHEMA, DASHBOARD, EXPLORE, LOOK, FEATURE_ONLINE_STORE, FEATURE_VIEW, FEATURE_GROUP, GRAPH)</td>
</tr>
<tr>
    <td><CopyableCode code="usageSignal" /></td>
    <td><code>object</code></td>
    <td>Resource usage statistics. (id: GoogleCloudDatacatalogV1UsageSignal)</td>
</tr>
<tr>
    <td><CopyableCode code="userSpecifiedSystem" /></td>
    <td><code>string</code></td>
    <td>Indicates the entry's source system that Data Catalog doesn't automatically integrate with. The `user_specified_system` string has the following limitations: * Is case insensitive. * Must begin with a letter or underscore. * Can only contain letters, numbers, and underscores. * Must be at least 1 character and at most 64 characters long.</td>
</tr>
<tr>
    <td><CopyableCode code="userSpecifiedType" /></td>
    <td><code>string</code></td>
    <td>Custom entry type that doesn't match any of the values allowed for input and listed in the `EntryType` enum. When creating an entry, first check the type values in the enum. If there are no appropriate types for the new entry, provide a custom value, for example, `my_special_type`. The `user_specified_type` string has the following limitations: * Is case insensitive. * Must begin with a letter or underscore. * Can only contain letters, numbers, and underscores. * Must be at least 1 character and at most 64 characters long.</td>
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
    <td><a href="#projects_locations_entry_groups_entries_get"><CopyableCode code="projects_locations_entry_groups_entries_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a>, <a href="#parameter-entriesId"><code>entriesId</code></a></td>
    <td></td>
    <td>Gets an entry.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_entries_list"><CopyableCode code="projects_locations_entry_groups_entries_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-readMask"><code>readMask</code></a></td>
    <td>Lists entries. Note: Currently, this method can list only custom entries. To get a list of both custom and automatically created entries, use SearchCatalog.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_entries_create"><CopyableCode code="projects_locations_entry_groups_entries_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a></td>
    <td><a href="#parameter-entryId"><code>entryId</code></a></td>
    <td>Creates an entry. You can create entries only with 'FILESET', 'CLUSTER', 'DATA_STREAM', or custom types. Data Catalog automatically creates entries with other types during metadata ingestion from integrated systems. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project). An entry group can have a maximum of 100,000 entries.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_entries_patch"><CopyableCode code="projects_locations_entry_groups_entries_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a>, <a href="#parameter-entriesId"><code>entriesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing entry. You must enable the Data Catalog API in the project identified by the `entry.name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_entries_delete"><CopyableCode code="projects_locations_entry_groups_entries_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a>, <a href="#parameter-entriesId"><code>entriesId</code></a></td>
    <td></td>
    <td>Deletes an existing entry. You can delete only the entries created by the CreateEntry method. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_entries_modify_entry_overview"><CopyableCode code="projects_locations_entry_groups_entries_modify_entry_overview" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a>, <a href="#parameter-entriesId"><code>entriesId</code></a></td>
    <td></td>
    <td>Modifies entry overview, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateOverview` IAM permission on the corresponding project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_entries_modify_entry_contacts"><CopyableCode code="projects_locations_entry_groups_entries_modify_entry_contacts" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a>, <a href="#parameter-entriesId"><code>entriesId</code></a></td>
    <td></td>
    <td>Modifies contacts, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateContacts` IAM permission on the corresponding project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_entries_star"><CopyableCode code="projects_locations_entry_groups_entries_star" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a>, <a href="#parameter-entriesId"><code>entriesId</code></a></td>
    <td></td>
    <td>Marks an Entry as starred by the current user. Starring information is private to each user.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_entries_unstar"><CopyableCode code="projects_locations_entry_groups_entries_unstar" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a>, <a href="#parameter-entriesId"><code>entriesId</code></a></td>
    <td></td>
    <td>Marks an Entry as NOT starred by the current user. Starring information is private to each user.</td>
</tr>
<tr>
    <td><a href="#projects_locations_entry_groups_entries_import"><CopyableCode code="projects_locations_entry_groups_entries_import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-entryGroupsId"><code>entryGroupsId</code></a></td>
    <td></td>
    <td>Imports entries from a source, such as data previously dumped into a Cloud Storage bucket, into Data Catalog. Import of entries is a sync operation that reconciles the state of the third-party system with the Data Catalog. `ImportEntries` accepts source data snapshots of a third-party system. Snapshot should be delivered as a .wire or base65-encoded .txt file containing a sequence of Protocol Buffer messages of DumpItem type. `ImportEntries` returns a long-running operation resource that can be queried with Operations.GetOperation to return ImportEntriesMetadata and an ImportEntriesResponse message.</td>
</tr>
<tr>
    <td><a href="#entries_lookup"><CopyableCode code="entries_lookup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-linkedResource"><code>linkedResource</code></a>, <a href="#parameter-sqlResource"><code>sqlResource</code></a>, <a href="#parameter-fullyQualifiedName"><code>fullyQualifiedName</code></a>, <a href="#parameter-project"><code>project</code></a>, <a href="#parameter-location"><code>location</code></a></td>
    <td>Gets an entry by its target resource name. The resource name comes from the source Google Cloud Platform service.</td>
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
<tr id="parameter-entriesId">
    <td><CopyableCode code="entriesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-entryGroupsId">
    <td><CopyableCode code="entryGroupsId" /></td>
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
<tr id="parameter-entryId">
    <td><CopyableCode code="entryId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-fullyQualifiedName">
    <td><CopyableCode code="fullyQualifiedName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-linkedResource">
    <td><CopyableCode code="linkedResource" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-location">
    <td><CopyableCode code="location" /></td>
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
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-readMask">
    <td><CopyableCode code="readMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-sqlResource">
    <td><CopyableCode code="sqlResource" /></td>
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
    defaultValue="projects_locations_entry_groups_entries_get"
    values={[
        { label: 'projects_locations_entry_groups_entries_get', value: 'projects_locations_entry_groups_entries_get' },
        { label: 'projects_locations_entry_groups_entries_list', value: 'projects_locations_entry_groups_entries_list' }
    ]}
>
<TabItem value="projects_locations_entry_groups_entries_get">

Gets an entry.

```sql
SELECT
name,
bigqueryDateShardedSpec,
bigqueryTableSpec,
businessContext,
cloudBigtableSystemSpec,
dataSource,
dataSourceConnectionSpec,
databaseTableSpec,
datasetSpec,
description,
displayName,
featureOnlineStoreSpec,
filesetSpec,
fullyQualifiedName,
gcsFilesetSpec,
graphSpec,
integratedSystem,
labels,
linkedResource,
lookerSystemSpec,
modelSpec,
personalDetails,
routineSpec,
schema,
serviceSpec,
sourceSystemTimestamps,
spannerTableSpec,
sqlDatabaseSystemSpec,
type,
usageSignal,
userSpecifiedSystem,
userSpecifiedType
FROM google.datacatalog.entries
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND entryGroupsId = '{{ entryGroupsId }}' -- required
AND entriesId = '{{ entriesId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_entry_groups_entries_list">

Lists entries. Note: Currently, this method can list only custom entries. To get a list of both custom and automatically created entries, use SearchCatalog.

```sql
SELECT
name,
bigqueryDateShardedSpec,
bigqueryTableSpec,
businessContext,
cloudBigtableSystemSpec,
dataSource,
dataSourceConnectionSpec,
databaseTableSpec,
datasetSpec,
description,
displayName,
featureOnlineStoreSpec,
filesetSpec,
fullyQualifiedName,
gcsFilesetSpec,
graphSpec,
integratedSystem,
labels,
linkedResource,
lookerSystemSpec,
modelSpec,
personalDetails,
routineSpec,
schema,
serviceSpec,
sourceSystemTimestamps,
spannerTableSpec,
sqlDatabaseSystemSpec,
type,
usageSignal,
userSpecifiedSystem,
userSpecifiedType
FROM google.datacatalog.entries
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND entryGroupsId = '{{ entryGroupsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND readMask = '{{ readMask }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_entry_groups_entries_create"
    values={[
        { label: 'projects_locations_entry_groups_entries_create', value: 'projects_locations_entry_groups_entries_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_entry_groups_entries_create">

Creates an entry. You can create entries only with 'FILESET', 'CLUSTER', 'DATA_STREAM', or custom types. Data Catalog automatically creates entries with other types during metadata ingestion from integrated systems. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project). An entry group can have a maximum of 100,000 entries.

```sql
INSERT INTO google.datacatalog.entries (
data__linkedResource,
data__fullyQualifiedName,
data__type,
data__userSpecifiedType,
data__userSpecifiedSystem,
data__sqlDatabaseSystemSpec,
data__lookerSystemSpec,
data__cloudBigtableSystemSpec,
data__gcsFilesetSpec,
data__databaseTableSpec,
data__dataSourceConnectionSpec,
data__routineSpec,
data__datasetSpec,
data__filesetSpec,
data__serviceSpec,
data__modelSpec,
data__featureOnlineStoreSpec,
data__graphSpec,
data__spannerTableSpec,
data__displayName,
data__description,
data__businessContext,
data__schema,
data__sourceSystemTimestamps,
data__usageSignal,
data__labels,
projectsId,
locationsId,
entryGroupsId,
entryId
)
SELECT 
'{{ linkedResource }}',
'{{ fullyQualifiedName }}',
'{{ type }}',
'{{ userSpecifiedType }}',
'{{ userSpecifiedSystem }}',
'{{ sqlDatabaseSystemSpec }}',
'{{ lookerSystemSpec }}',
'{{ cloudBigtableSystemSpec }}',
'{{ gcsFilesetSpec }}',
'{{ databaseTableSpec }}',
'{{ dataSourceConnectionSpec }}',
'{{ routineSpec }}',
'{{ datasetSpec }}',
'{{ filesetSpec }}',
'{{ serviceSpec }}',
'{{ modelSpec }}',
'{{ featureOnlineStoreSpec }}',
'{{ graphSpec }}',
'{{ spannerTableSpec }}',
'{{ displayName }}',
'{{ description }}',
'{{ businessContext }}',
'{{ schema }}',
'{{ sourceSystemTimestamps }}',
'{{ usageSignal }}',
'{{ labels }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ entryGroupsId }}',
'{{ entryId }}'
RETURNING
name,
bigqueryDateShardedSpec,
bigqueryTableSpec,
businessContext,
cloudBigtableSystemSpec,
dataSource,
dataSourceConnectionSpec,
databaseTableSpec,
datasetSpec,
description,
displayName,
featureOnlineStoreSpec,
filesetSpec,
fullyQualifiedName,
gcsFilesetSpec,
graphSpec,
integratedSystem,
labels,
linkedResource,
lookerSystemSpec,
modelSpec,
personalDetails,
routineSpec,
schema,
serviceSpec,
sourceSystemTimestamps,
spannerTableSpec,
sqlDatabaseSystemSpec,
type,
usageSignal,
userSpecifiedSystem,
userSpecifiedType
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: entries
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the entries resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the entries resource.
    - name: entryGroupsId
      value: "{{ entryGroupsId }}"
      description: Required parameter for the entries resource.
    - name: linkedResource
      value: "{{ linkedResource }}"
      description: |
        The resource this metadata entry refers to. For Google Cloud Platform resources, \`linked_resource\` is the [Full Resource Name] (https://cloud.google.com/apis/design/resource_names#full_resource_name). For example, the \`linked_resource\` for a table resource from BigQuery is: \`//bigquery.googleapis.com/projects/{PROJECT_ID}/datasets/{DATASET_ID}/tables/{TABLE_ID}\` Output only when the entry is one of the types in the \`EntryType\` enum. For entries with a \`user_specified_type\`, this field is optional and defaults to an empty string. The resource string must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), periods (.), colons (:), slashes (/), dashes (-), and hashes (#). The maximum size is 200 bytes when encoded in UTF-8.
    - name: fullyQualifiedName
      value: "{{ fullyQualifiedName }}"
      description: |
        [Fully Qualified Name (FQN)](https://cloud.google.com//data-catalog/docs/fully-qualified-names) of the resource. Set automatically for entries representing resources from synced systems. Settable only during creation, and read-only later. Can be used for search and lookup of the entries.
    - name: type
      value: "{{ type }}"
      description: |
        The type of the entry. For details, see [\`EntryType\`](#entrytype).
      valid_values: ['ENTRY_TYPE_UNSPECIFIED', 'TABLE', 'MODEL', 'DATA_STREAM', 'FILESET', 'CLUSTER', 'DATABASE', 'DATA_SOURCE_CONNECTION', 'ROUTINE', 'LAKE', 'ZONE', 'SERVICE', 'DATABASE_SCHEMA', 'DASHBOARD', 'EXPLORE', 'LOOK', 'FEATURE_ONLINE_STORE', 'FEATURE_VIEW', 'FEATURE_GROUP', 'GRAPH']
    - name: userSpecifiedType
      value: "{{ userSpecifiedType }}"
      description: |
        Custom entry type that doesn't match any of the values allowed for input and listed in the \`EntryType\` enum. When creating an entry, first check the type values in the enum. If there are no appropriate types for the new entry, provide a custom value, for example, \`my_special_type\`. The \`user_specified_type\` string has the following limitations: * Is case insensitive. * Must begin with a letter or underscore. * Can only contain letters, numbers, and underscores. * Must be at least 1 character and at most 64 characters long.
    - name: userSpecifiedSystem
      value: "{{ userSpecifiedSystem }}"
      description: |
        Indicates the entry's source system that Data Catalog doesn't automatically integrate with. The \`user_specified_system\` string has the following limitations: * Is case insensitive. * Must begin with a letter or underscore. * Can only contain letters, numbers, and underscores. * Must be at least 1 character and at most 64 characters long.
    - name: sqlDatabaseSystemSpec
      description: |
        Specification that applies to a relational database system. Only settable when \`user_specified_system\` is equal to \`SQL_DATABASE\`
      value:
        sqlEngine: "{{ sqlEngine }}"
        databaseVersion: "{{ databaseVersion }}"
        instanceHost: "{{ instanceHost }}"
    - name: lookerSystemSpec
      description: |
        Specification that applies to Looker sysstem. Only settable when \`user_specified_system\` is equal to \`LOOKER\`
      value:
        parentInstanceId: "{{ parentInstanceId }}"
        parentInstanceDisplayName: "{{ parentInstanceDisplayName }}"
        parentModelId: "{{ parentModelId }}"
        parentModelDisplayName: "{{ parentModelDisplayName }}"
        parentViewId: "{{ parentViewId }}"
        parentViewDisplayName: "{{ parentViewDisplayName }}"
    - name: cloudBigtableSystemSpec
      description: |
        Specification that applies to Cloud Bigtable system. Only settable when \`integrated_system\` is equal to \`CLOUD_BIGTABLE\`
      value:
        instanceDisplayName: "{{ instanceDisplayName }}"
    - name: gcsFilesetSpec
      description: |
        Specification that applies to a Cloud Storage fileset. Valid only for entries with the \`FILESET\` type.
      value:
        filePatterns:
          - "{{ filePatterns }}"
        sampleGcsFileSpecs:
          - filePath: "{{ filePath }}"
            gcsTimestamps:
              createTime: "{{ createTime }}"
              updateTime: "{{ updateTime }}"
              expireTime: "{{ expireTime }}"
            sizeBytes: "{{ sizeBytes }}"
    - name: databaseTableSpec
      description: |
        Specification that applies to a table resource. Valid only for entries with the \`TABLE\` or \`EXPLORE\` type.
      value:
        type: "{{ type }}"
        dataplexTable:
          externalTables:
            - system: "{{ system }}"
              fullyQualifiedName: "{{ fullyQualifiedName }}"
              googleCloudResource: "{{ googleCloudResource }}"
              dataCatalogEntry: "{{ dataCatalogEntry }}"
          dataplexSpec:
            asset: "{{ asset }}"
            dataFormat:
              avro:
                text: "{{ text }}"
              thrift:
                text: "{{ text }}"
              protobuf:
                text: "{{ text }}"
              parquet: "{{ parquet }}"
              orc: "{{ orc }}"
              csv: "{{ csv }}"
            compressionFormat: "{{ compressionFormat }}"
            projectId: "{{ projectId }}"
          userManaged: {{ userManaged }}
        databaseViewSpec:
          viewType: "{{ viewType }}"
          baseTable: "{{ baseTable }}"
          sqlQuery: "{{ sqlQuery }}"
    - name: dataSourceConnectionSpec
      description: |
        Specification that applies to a data source connection. Valid only for entries with the \`DATA_SOURCE_CONNECTION\` type.
      value:
        bigqueryConnectionSpec:
          connectionType: "{{ connectionType }}"
          cloudSql:
            instanceId: "{{ instanceId }}"
            database: "{{ database }}"
            type: "{{ type }}"
          hasCredential: {{ hasCredential }}
    - name: routineSpec
      description: |
        Specification that applies to a user-defined function or procedure. Valid only for entries with the \`ROUTINE\` type.
      value:
        routineType: "{{ routineType }}"
        language: "{{ language }}"
        routineArguments:
          - name: "{{ name }}"
            mode: "{{ mode }}"
            type: "{{ type }}"
        returnType: "{{ returnType }}"
        definitionBody: "{{ definitionBody }}"
        bigqueryRoutineSpec:
          importedLibraries:
            - "{{ importedLibraries }}"
    - name: datasetSpec
      description: |
        Specification that applies to a dataset.
      value:
        vertexDatasetSpec:
          dataItemCount: "{{ dataItemCount }}"
          dataType: "{{ dataType }}"
    - name: filesetSpec
      description: |
        Specification that applies to a fileset resource. Valid only for entries with the \`FILESET\` type.
      value:
        dataplexFileset:
          dataplexSpec:
            asset: "{{ asset }}"
            dataFormat:
              avro:
                text: "{{ text }}"
              thrift:
                text: "{{ text }}"
              protobuf:
                text: "{{ text }}"
              parquet: "{{ parquet }}"
              orc: "{{ orc }}"
              csv: "{{ csv }}"
            compressionFormat: "{{ compressionFormat }}"
            projectId: "{{ projectId }}"
    - name: serviceSpec
      description: |
        Specification that applies to a Service resource.
      value:
        cloudBigtableInstanceSpec:
          cloudBigtableClusterSpecs:
            - displayName: "{{ displayName }}"
              location: "{{ location }}"
              type: "{{ type }}"
              linkedResource: "{{ linkedResource }}"
    - name: modelSpec
      description: |
        Model specification.
      value:
        vertexModelSpec:
          versionId: "{{ versionId }}"
          versionAliases:
            - "{{ versionAliases }}"
          versionDescription: "{{ versionDescription }}"
          vertexModelSourceInfo:
            sourceType: "{{ sourceType }}"
            copy: {{ copy }}
          containerImageUri: "{{ containerImageUri }}"
    - name: featureOnlineStoreSpec
      description: |
        FeatureonlineStore spec for Vertex AI Feature Store.
      value:
        storageType: "{{ storageType }}"
    - name: graphSpec
      description: |
        Spec for graph.
      value:
        name: "{{ name }}"
        nodeTables:
          - dataSource: "{{ dataSource }}"
            alias: "{{ alias }}"
            kind: "{{ kind }}"
            inputSource: "{{ inputSource }}"
            elementKeys: "{{ elementKeys }}"
            labelAndProperties: "{{ labelAndProperties }}"
            dynamicLabelColumn: "{{ dynamicLabelColumn }}"
            dynamicPropertiesColumn: "{{ dynamicPropertiesColumn }}"
            sourceNodeReference:
              nodeAlias: "{{ nodeAlias }}"
              edgeTableColumns:
                - "{{ edgeTableColumns }}"
              nodeTableColumns:
                - "{{ nodeTableColumns }}"
            destinationNodeReference:
              nodeAlias: "{{ nodeAlias }}"
              edgeTableColumns:
                - "{{ edgeTableColumns }}"
              nodeTableColumns:
                - "{{ nodeTableColumns }}"
        edgeTables:
          - dataSource: "{{ dataSource }}"
            alias: "{{ alias }}"
            kind: "{{ kind }}"
            inputSource: "{{ inputSource }}"
            elementKeys: "{{ elementKeys }}"
            labelAndProperties: "{{ labelAndProperties }}"
            dynamicLabelColumn: "{{ dynamicLabelColumn }}"
            dynamicPropertiesColumn: "{{ dynamicPropertiesColumn }}"
            sourceNodeReference:
              nodeAlias: "{{ nodeAlias }}"
              edgeTableColumns:
                - "{{ edgeTableColumns }}"
              nodeTableColumns:
                - "{{ nodeTableColumns }}"
            destinationNodeReference:
              nodeAlias: "{{ nodeAlias }}"
              edgeTableColumns:
                - "{{ edgeTableColumns }}"
              nodeTableColumns:
                - "{{ nodeTableColumns }}"
    - name: spannerTableSpec
      description: |
        Specification of a Spanner table.
      value:
        primaryKey:
          columns:
            - "{{ columns }}"
        foreignKeys:
          - name: "{{ name }}"
            entry: "{{ entry }}"
            columnMappings: "{{ columnMappings }}"
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Display name of an entry. The maximum size is 500 bytes when encoded in UTF-8. Default value is an empty string.
    - name: description
      value: "{{ description }}"
      description: |
        Entry description that can consist of several sentences or paragraphs that describe entry contents. The description must not contain Unicode non-characters as well as C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). The maximum size is 2000 bytes when encoded in UTF-8. Default value is an empty string.
    - name: businessContext
      description: |
        Business Context of the entry. Not supported for BigQuery datasets
      value:
        entryOverview:
          overview: "{{ overview }}"
        contacts:
          people:
            - designation: "{{ designation }}"
              email: "{{ email }}"
    - name: schema
      description: |
        Schema of the entry. An entry might not have any schema attached to it.
      value:
        columns:
          - column: "{{ column }}"
            type: "{{ type }}"
            description: "{{ description }}"
            mode: "{{ mode }}"
            defaultValue: "{{ defaultValue }}"
            ordinalPosition: {{ ordinalPosition }}
            highestIndexingType: "{{ highestIndexingType }}"
            subcolumns: "{{ subcolumns }}"
            lookerColumnSpec:
              type: "{{ type }}"
            rangeElementType:
              type: "{{ type }}"
            gcRule: "{{ gcRule }}"
    - name: sourceSystemTimestamps
      description: |
        Timestamps from the underlying resource, not from the Data Catalog entry. Output only when the entry has a system listed in the \`IntegratedSystem\` enum. For entries with \`user_specified_system\`, this field is optional and defaults to an empty timestamp.
      value:
        createTime: "{{ createTime }}"
        updateTime: "{{ updateTime }}"
        expireTime: "{{ expireTime }}"
    - name: usageSignal
      description: |
        Resource usage statistics.
      value:
        updateTime: "{{ updateTime }}"
        usageWithinTimeRange: "{{ usageWithinTimeRange }}"
        commonUsageWithinTimeRange: "{{ commonUsageWithinTimeRange }}"
        favoriteCount: "{{ favoriteCount }}"
    - name: labels
      value: "{{ labels }}"
      description: |
        Cloud labels attached to the entry. In Data Catalog, you can create and modify labels attached only to custom entries. Synced entries have unmodifiable labels that come from the source system.
    - name: entryId
      value: "{{ entryId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_entry_groups_entries_patch"
    values={[
        { label: 'projects_locations_entry_groups_entries_patch', value: 'projects_locations_entry_groups_entries_patch' }
    ]}
>
<TabItem value="projects_locations_entry_groups_entries_patch">

Updates an existing entry. You must enable the Data Catalog API in the project identified by the `entry.name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).

```sql
UPDATE google.datacatalog.entries
SET 
data__linkedResource = '{{ linkedResource }}',
data__fullyQualifiedName = '{{ fullyQualifiedName }}',
data__type = '{{ type }}',
data__userSpecifiedType = '{{ userSpecifiedType }}',
data__userSpecifiedSystem = '{{ userSpecifiedSystem }}',
data__sqlDatabaseSystemSpec = '{{ sqlDatabaseSystemSpec }}',
data__lookerSystemSpec = '{{ lookerSystemSpec }}',
data__cloudBigtableSystemSpec = '{{ cloudBigtableSystemSpec }}',
data__gcsFilesetSpec = '{{ gcsFilesetSpec }}',
data__databaseTableSpec = '{{ databaseTableSpec }}',
data__dataSourceConnectionSpec = '{{ dataSourceConnectionSpec }}',
data__routineSpec = '{{ routineSpec }}',
data__datasetSpec = '{{ datasetSpec }}',
data__filesetSpec = '{{ filesetSpec }}',
data__serviceSpec = '{{ serviceSpec }}',
data__modelSpec = '{{ modelSpec }}',
data__featureOnlineStoreSpec = '{{ featureOnlineStoreSpec }}',
data__graphSpec = '{{ graphSpec }}',
data__spannerTableSpec = '{{ spannerTableSpec }}',
data__displayName = '{{ displayName }}',
data__description = '{{ description }}',
data__businessContext = '{{ businessContext }}',
data__schema = '{{ schema }}',
data__sourceSystemTimestamps = '{{ sourceSystemTimestamps }}',
data__usageSignal = '{{ usageSignal }}',
data__labels = '{{ labels }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND entryGroupsId = '{{ entryGroupsId }}' --required
AND entriesId = '{{ entriesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
bigqueryDateShardedSpec,
bigqueryTableSpec,
businessContext,
cloudBigtableSystemSpec,
dataSource,
dataSourceConnectionSpec,
databaseTableSpec,
datasetSpec,
description,
displayName,
featureOnlineStoreSpec,
filesetSpec,
fullyQualifiedName,
gcsFilesetSpec,
graphSpec,
integratedSystem,
labels,
linkedResource,
lookerSystemSpec,
modelSpec,
personalDetails,
routineSpec,
schema,
serviceSpec,
sourceSystemTimestamps,
spannerTableSpec,
sqlDatabaseSystemSpec,
type,
usageSignal,
userSpecifiedSystem,
userSpecifiedType;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_entry_groups_entries_delete"
    values={[
        { label: 'projects_locations_entry_groups_entries_delete', value: 'projects_locations_entry_groups_entries_delete' }
    ]}
>
<TabItem value="projects_locations_entry_groups_entries_delete">

Deletes an existing entry. You can delete only the entries created by the CreateEntry method. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).

```sql
DELETE FROM google.datacatalog.entries
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND entryGroupsId = '{{ entryGroupsId }}' --required
AND entriesId = '{{ entriesId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_entry_groups_entries_modify_entry_overview"
    values={[
        { label: 'projects_locations_entry_groups_entries_modify_entry_overview', value: 'projects_locations_entry_groups_entries_modify_entry_overview' },
        { label: 'projects_locations_entry_groups_entries_modify_entry_contacts', value: 'projects_locations_entry_groups_entries_modify_entry_contacts' },
        { label: 'projects_locations_entry_groups_entries_star', value: 'projects_locations_entry_groups_entries_star' },
        { label: 'projects_locations_entry_groups_entries_unstar', value: 'projects_locations_entry_groups_entries_unstar' },
        { label: 'projects_locations_entry_groups_entries_import', value: 'projects_locations_entry_groups_entries_import' },
        { label: 'entries_lookup', value: 'entries_lookup' }
    ]}
>
<TabItem value="projects_locations_entry_groups_entries_modify_entry_overview">

Modifies entry overview, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateOverview` IAM permission on the corresponding project.

```sql
EXEC google.datacatalog.entries.projects_locations_entry_groups_entries_modify_entry_overview 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@entryGroupsId='{{ entryGroupsId }}' --required, 
@entriesId='{{ entriesId }}' --required 
@@json=
'{
"entryOverview": "{{ entryOverview }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_entry_groups_entries_modify_entry_contacts">

Modifies contacts, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateContacts` IAM permission on the corresponding project.

```sql
EXEC google.datacatalog.entries.projects_locations_entry_groups_entries_modify_entry_contacts 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@entryGroupsId='{{ entryGroupsId }}' --required, 
@entriesId='{{ entriesId }}' --required 
@@json=
'{
"contacts": "{{ contacts }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_entry_groups_entries_star">

Marks an Entry as starred by the current user. Starring information is private to each user.

```sql
EXEC google.datacatalog.entries.projects_locations_entry_groups_entries_star 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@entryGroupsId='{{ entryGroupsId }}' --required, 
@entriesId='{{ entriesId }}' --required
;
```
</TabItem>
<TabItem value="projects_locations_entry_groups_entries_unstar">

Marks an Entry as NOT starred by the current user. Starring information is private to each user.

```sql
EXEC google.datacatalog.entries.projects_locations_entry_groups_entries_unstar 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@entryGroupsId='{{ entryGroupsId }}' --required, 
@entriesId='{{ entriesId }}' --required
;
```
</TabItem>
<TabItem value="projects_locations_entry_groups_entries_import">

Imports entries from a source, such as data previously dumped into a Cloud Storage bucket, into Data Catalog. Import of entries is a sync operation that reconciles the state of the third-party system with the Data Catalog. `ImportEntries` accepts source data snapshots of a third-party system. Snapshot should be delivered as a .wire or base65-encoded .txt file containing a sequence of Protocol Buffer messages of DumpItem type. `ImportEntries` returns a long-running operation resource that can be queried with Operations.GetOperation to return ImportEntriesMetadata and an ImportEntriesResponse message.

```sql
EXEC google.datacatalog.entries.projects_locations_entry_groups_entries_import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@entryGroupsId='{{ entryGroupsId }}' --required 
@@json=
'{
"gcsBucketPath": "{{ gcsBucketPath }}", 
"jobId": "{{ jobId }}"
}'
;
```
</TabItem>
<TabItem value="entries_lookup">

Gets an entry by its target resource name. The resource name comes from the source Google Cloud Platform service.

```sql
EXEC google.datacatalog.entries.entries_lookup 
@linkedResource='{{ linkedResource }}', 
@sqlResource='{{ sqlResource }}', 
@fullyQualifiedName='{{ fullyQualifiedName }}', 
@project='{{ project }}', 
@location='{{ location }}'
;
```
</TabItem>
</Tabs>
