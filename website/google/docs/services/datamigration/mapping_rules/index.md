--- 
title: mapping_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - mapping_rules
  - datamigration
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

Creates, updates, deletes, gets or lists a <code>mapping_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mapping_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.datamigration.mapping_rules" /></td></tr>
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
    <td>Full name of the mapping rule resource, in the form of: projects/&#123;project&#125;/locations/&#123;location&#125;/conversionWorkspaces/&#123;set&#125;/mappingRule/&#123;rule&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="conditionalColumnSetValue" /></td>
    <td><code>object</code></td>
    <td>Optional. Rule to specify how the data contained in a column should be transformed (such as trimmed, rounded, etc) provided that the data meets certain criteria. (id: ConditionalColumnSetValue)</td>
</tr>
<tr>
    <td><CopyableCode code="convertRowidColumn" /></td>
    <td><code>object</code></td>
    <td>Optional. Rule to specify how multiple tables should be converted with an additional rowid column. (id: ConvertRowIdToColumn)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. A human readable name</td>
</tr>
<tr>
    <td><CopyableCode code="entityMove" /></td>
    <td><code>object</code></td>
    <td>Optional. Rule to specify how multiple entities should be relocated into a different schema. (id: EntityMove)</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>object</code></td>
    <td>Required. The rule filter (id: MappingRuleFilter)</td>
</tr>
<tr>
    <td><CopyableCode code="filterTableColumns" /></td>
    <td><code>object</code></td>
    <td>Optional. Rule to specify the list of columns to include or exclude from a table. (id: FilterTableColumns)</td>
</tr>
<tr>
    <td><CopyableCode code="multiColumnDataTypeChange" /></td>
    <td><code>object</code></td>
    <td>Optional. Rule to specify how multiple columns should be converted to a different data type. (id: MultiColumnDatatypeChange)</td>
</tr>
<tr>
    <td><CopyableCode code="multiEntityRename" /></td>
    <td><code>object</code></td>
    <td>Optional. Rule to specify how multiple entities should be renamed. (id: MultiEntityRename)</td>
</tr>
<tr>
    <td><CopyableCode code="revisionCreateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp that the revision was created.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string</code></td>
    <td>Output only. The revision ID of the mapping rule. A new revision is committed whenever the mapping rule is changed in any way. The format is an 8-character hexadecimal string.</td>
</tr>
<tr>
    <td><CopyableCode code="ruleOrder" /></td>
    <td><code>string (int64)</code></td>
    <td>Required. The order in which the rule is applied. Lower order rules are applied before higher value rules so they may end up being overridden.</td>
</tr>
<tr>
    <td><CopyableCode code="ruleScope" /></td>
    <td><code>string</code></td>
    <td>Required. The rule scope (DATABASE_ENTITY_TYPE_UNSPECIFIED, DATABASE_ENTITY_TYPE_SCHEMA, DATABASE_ENTITY_TYPE_TABLE, DATABASE_ENTITY_TYPE_COLUMN, DATABASE_ENTITY_TYPE_CONSTRAINT, DATABASE_ENTITY_TYPE_INDEX, DATABASE_ENTITY_TYPE_TRIGGER, DATABASE_ENTITY_TYPE_VIEW, DATABASE_ENTITY_TYPE_SEQUENCE, DATABASE_ENTITY_TYPE_STORED_PROCEDURE, DATABASE_ENTITY_TYPE_FUNCTION, DATABASE_ENTITY_TYPE_SYNONYM, DATABASE_ENTITY_TYPE_DATABASE_PACKAGE, DATABASE_ENTITY_TYPE_UDT, DATABASE_ENTITY_TYPE_MATERIALIZED_VIEW, DATABASE_ENTITY_TYPE_DATABASE)</td>
</tr>
<tr>
    <td><CopyableCode code="setTablePrimaryKey" /></td>
    <td><code>object</code></td>
    <td>Optional. Rule to specify the primary key for a table (id: SetTablePrimaryKey)</td>
</tr>
<tr>
    <td><CopyableCode code="singleColumnChange" /></td>
    <td><code>object</code></td>
    <td>Optional. Rule to specify how a single column is converted. (id: SingleColumnChange)</td>
</tr>
<tr>
    <td><CopyableCode code="singleEntityRename" /></td>
    <td><code>object</code></td>
    <td>Optional. Rule to specify how a single entity should be renamed. (id: SingleEntityRename)</td>
</tr>
<tr>
    <td><CopyableCode code="singlePackageChange" /></td>
    <td><code>object</code></td>
    <td>Optional. Rule to specify how a single package is converted. (id: SinglePackageChange)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceSqlChange" /></td>
    <td><code>object</code></td>
    <td>Optional. Rule to change the sql code for an entity, for example, function, procedure. (id: SourceSqlChange)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Optional. The mapping rule state (STATE_UNSPECIFIED, ENABLED, DISABLED, DELETED)</td>
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
    <td>Full name of the mapping rule resource, in the form of: projects/&#123;project&#125;/locations/&#123;location&#125;/conversionWorkspaces/&#123;set&#125;/mappingRule/&#123;rule&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="conditionalColumnSetValue" /></td>
    <td><code>object</code></td>
    <td>Optional. Rule to specify how the data contained in a column should be transformed (such as trimmed, rounded, etc) provided that the data meets certain criteria. (id: ConditionalColumnSetValue)</td>
</tr>
<tr>
    <td><CopyableCode code="convertRowidColumn" /></td>
    <td><code>object</code></td>
    <td>Optional. Rule to specify how multiple tables should be converted with an additional rowid column. (id: ConvertRowIdToColumn)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. A human readable name</td>
</tr>
<tr>
    <td><CopyableCode code="entityMove" /></td>
    <td><code>object</code></td>
    <td>Optional. Rule to specify how multiple entities should be relocated into a different schema. (id: EntityMove)</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>object</code></td>
    <td>Required. The rule filter (id: MappingRuleFilter)</td>
</tr>
<tr>
    <td><CopyableCode code="filterTableColumns" /></td>
    <td><code>object</code></td>
    <td>Optional. Rule to specify the list of columns to include or exclude from a table. (id: FilterTableColumns)</td>
</tr>
<tr>
    <td><CopyableCode code="multiColumnDataTypeChange" /></td>
    <td><code>object</code></td>
    <td>Optional. Rule to specify how multiple columns should be converted to a different data type. (id: MultiColumnDatatypeChange)</td>
</tr>
<tr>
    <td><CopyableCode code="multiEntityRename" /></td>
    <td><code>object</code></td>
    <td>Optional. Rule to specify how multiple entities should be renamed. (id: MultiEntityRename)</td>
</tr>
<tr>
    <td><CopyableCode code="revisionCreateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp that the revision was created.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string</code></td>
    <td>Output only. The revision ID of the mapping rule. A new revision is committed whenever the mapping rule is changed in any way. The format is an 8-character hexadecimal string.</td>
</tr>
<tr>
    <td><CopyableCode code="ruleOrder" /></td>
    <td><code>string (int64)</code></td>
    <td>Required. The order in which the rule is applied. Lower order rules are applied before higher value rules so they may end up being overridden.</td>
</tr>
<tr>
    <td><CopyableCode code="ruleScope" /></td>
    <td><code>string</code></td>
    <td>Required. The rule scope (DATABASE_ENTITY_TYPE_UNSPECIFIED, DATABASE_ENTITY_TYPE_SCHEMA, DATABASE_ENTITY_TYPE_TABLE, DATABASE_ENTITY_TYPE_COLUMN, DATABASE_ENTITY_TYPE_CONSTRAINT, DATABASE_ENTITY_TYPE_INDEX, DATABASE_ENTITY_TYPE_TRIGGER, DATABASE_ENTITY_TYPE_VIEW, DATABASE_ENTITY_TYPE_SEQUENCE, DATABASE_ENTITY_TYPE_STORED_PROCEDURE, DATABASE_ENTITY_TYPE_FUNCTION, DATABASE_ENTITY_TYPE_SYNONYM, DATABASE_ENTITY_TYPE_DATABASE_PACKAGE, DATABASE_ENTITY_TYPE_UDT, DATABASE_ENTITY_TYPE_MATERIALIZED_VIEW, DATABASE_ENTITY_TYPE_DATABASE)</td>
</tr>
<tr>
    <td><CopyableCode code="setTablePrimaryKey" /></td>
    <td><code>object</code></td>
    <td>Optional. Rule to specify the primary key for a table (id: SetTablePrimaryKey)</td>
</tr>
<tr>
    <td><CopyableCode code="singleColumnChange" /></td>
    <td><code>object</code></td>
    <td>Optional. Rule to specify how a single column is converted. (id: SingleColumnChange)</td>
</tr>
<tr>
    <td><CopyableCode code="singleEntityRename" /></td>
    <td><code>object</code></td>
    <td>Optional. Rule to specify how a single entity should be renamed. (id: SingleEntityRename)</td>
</tr>
<tr>
    <td><CopyableCode code="singlePackageChange" /></td>
    <td><code>object</code></td>
    <td>Optional. Rule to specify how a single package is converted. (id: SinglePackageChange)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceSqlChange" /></td>
    <td><code>object</code></td>
    <td>Optional. Rule to change the sql code for an entity, for example, function, procedure. (id: SourceSqlChange)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Optional. The mapping rule state (STATE_UNSPECIFIED, ENABLED, DISABLED, DELETED)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-conversionWorkspacesId"><code>conversionWorkspacesId</code></a>, <a href="#parameter-mappingRulesId"><code>mappingRulesId</code></a></td>
    <td></td>
    <td>Gets the details of a mapping rule.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-conversionWorkspacesId"><code>conversionWorkspacesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the mapping rules for a specific conversion workspace.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-conversionWorkspacesId"><code>conversionWorkspacesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-mappingRuleId"><code>mappingRuleId</code></a></td>
    <td>Creates a new mapping rule for a given conversion workspace.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-conversionWorkspacesId"><code>conversionWorkspacesId</code></a>, <a href="#parameter-mappingRulesId"><code>mappingRulesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single mapping rule.</td>
</tr>
<tr>
    <td><a href="#import"><CopyableCode code="import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-conversionWorkspacesId"><code>conversionWorkspacesId</code></a></td>
    <td></td>
    <td>Imports the mapping rules for a given conversion workspace. Supports various formats of external rules files.</td>
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
<tr id="parameter-conversionWorkspacesId">
    <td><CopyableCode code="conversionWorkspacesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-mappingRulesId">
    <td><CopyableCode code="mappingRulesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-mappingRuleId">
    <td><CopyableCode code="mappingRuleId" /></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
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

Gets the details of a mapping rule.

```sql
SELECT
name,
conditionalColumnSetValue,
convertRowidColumn,
displayName,
entityMove,
filter,
filterTableColumns,
multiColumnDataTypeChange,
multiEntityRename,
revisionCreateTime,
revisionId,
ruleOrder,
ruleScope,
setTablePrimaryKey,
singleColumnChange,
singleEntityRename,
singlePackageChange,
sourceSqlChange,
state
FROM google.datamigration.mapping_rules
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND conversionWorkspacesId = '{{ conversionWorkspacesId }}' -- required
AND mappingRulesId = '{{ mappingRulesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the mapping rules for a specific conversion workspace.

```sql
SELECT
name,
conditionalColumnSetValue,
convertRowidColumn,
displayName,
entityMove,
filter,
filterTableColumns,
multiColumnDataTypeChange,
multiEntityRename,
revisionCreateTime,
revisionId,
ruleOrder,
ruleScope,
setTablePrimaryKey,
singleColumnChange,
singleEntityRename,
singlePackageChange,
sourceSqlChange,
state
FROM google.datamigration.mapping_rules
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND conversionWorkspacesId = '{{ conversionWorkspacesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
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

Creates a new mapping rule for a given conversion workspace.

```sql
INSERT INTO google.datamigration.mapping_rules (
data__ruleScope,
data__multiEntityRename,
data__conditionalColumnSetValue,
data__name,
data__singlePackageChange,
data__sourceSqlChange,
data__setTablePrimaryKey,
data__state,
data__entityMove,
data__filterTableColumns,
data__displayName,
data__multiColumnDataTypeChange,
data__convertRowidColumn,
data__singleColumnChange,
data__filter,
data__ruleOrder,
data__singleEntityRename,
projectsId,
locationsId,
conversionWorkspacesId,
requestId,
mappingRuleId
)
SELECT 
'{{ ruleScope }}',
'{{ multiEntityRename }}',
'{{ conditionalColumnSetValue }}',
'{{ name }}',
'{{ singlePackageChange }}',
'{{ sourceSqlChange }}',
'{{ setTablePrimaryKey }}',
'{{ state }}',
'{{ entityMove }}',
'{{ filterTableColumns }}',
'{{ displayName }}',
'{{ multiColumnDataTypeChange }}',
'{{ convertRowidColumn }}',
'{{ singleColumnChange }}',
'{{ filter }}',
'{{ ruleOrder }}',
'{{ singleEntityRename }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ conversionWorkspacesId }}',
'{{ requestId }}',
'{{ mappingRuleId }}'
RETURNING
name,
conditionalColumnSetValue,
convertRowidColumn,
displayName,
entityMove,
filter,
filterTableColumns,
multiColumnDataTypeChange,
multiEntityRename,
revisionCreateTime,
revisionId,
ruleOrder,
ruleScope,
setTablePrimaryKey,
singleColumnChange,
singleEntityRename,
singlePackageChange,
sourceSqlChange,
state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: mapping_rules
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the mapping_rules resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the mapping_rules resource.
    - name: conversionWorkspacesId
      value: "{{ conversionWorkspacesId }}"
      description: Required parameter for the mapping_rules resource.
    - name: ruleScope
      value: "{{ ruleScope }}"
      description: |
        Required. The rule scope
      valid_values: ['DATABASE_ENTITY_TYPE_UNSPECIFIED', 'DATABASE_ENTITY_TYPE_SCHEMA', 'DATABASE_ENTITY_TYPE_TABLE', 'DATABASE_ENTITY_TYPE_COLUMN', 'DATABASE_ENTITY_TYPE_CONSTRAINT', 'DATABASE_ENTITY_TYPE_INDEX', 'DATABASE_ENTITY_TYPE_TRIGGER', 'DATABASE_ENTITY_TYPE_VIEW', 'DATABASE_ENTITY_TYPE_SEQUENCE', 'DATABASE_ENTITY_TYPE_STORED_PROCEDURE', 'DATABASE_ENTITY_TYPE_FUNCTION', 'DATABASE_ENTITY_TYPE_SYNONYM', 'DATABASE_ENTITY_TYPE_DATABASE_PACKAGE', 'DATABASE_ENTITY_TYPE_UDT', 'DATABASE_ENTITY_TYPE_MATERIALIZED_VIEW', 'DATABASE_ENTITY_TYPE_DATABASE']
    - name: multiEntityRename
      description: |
        Optional. Rule to specify how multiple entities should be renamed.
      value:
        newNamePattern: "{{ newNamePattern }}"
        sourceNameTransformation: "{{ sourceNameTransformation }}"
    - name: conditionalColumnSetValue
      description: |
        Optional. Rule to specify how the data contained in a column should be transformed (such as trimmed, rounded, etc) provided that the data meets certain criteria.
      value:
        sourceTextFilter:
          sourceMinLengthFilter: "{{ sourceMinLengthFilter }}"
          sourceMaxLengthFilter: "{{ sourceMaxLengthFilter }}"
        customFeatures: "{{ customFeatures }}"
        sourceNumericFilter:
          numericFilterOption: "{{ numericFilterOption }}"
          sourceMinScaleFilter: {{ sourceMinScaleFilter }}
          sourceMinPrecisionFilter: {{ sourceMinPrecisionFilter }}
          sourceMaxPrecisionFilter: {{ sourceMaxPrecisionFilter }}
          sourceMaxScaleFilter: {{ sourceMaxScaleFilter }}
        valueTransformation:
          intComparison:
            valueComparison: "{{ valueComparison }}"
            value: "{{ value }}"
          roundScale:
            scale: {{ scale }}
          doubleComparison:
            valueComparison: "{{ valueComparison }}"
            value: {{ value }}
          assignMinValue: "{{ assignMinValue }}"
          assignSpecificValue:
            value: "{{ value }}"
          assignNull: "{{ assignNull }}"
          valueList:
            ignoreCase: {{ ignoreCase }}
            valuePresentList: "{{ valuePresentList }}"
            values:
              - "{{ values }}"
          isNull: "{{ isNull }}"
          assignMaxValue: "{{ assignMaxValue }}"
          applyHash:
            uuidFromBytes: "{{ uuidFromBytes }}"
    - name: name
      value: "{{ name }}"
      description: |
        Full name of the mapping rule resource, in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{set}/mappingRule/{rule}.
    - name: singlePackageChange
      description: |
        Optional. Rule to specify how a single package is converted.
      value:
        packageDescription: "{{ packageDescription }}"
        packageBody: "{{ packageBody }}"
    - name: sourceSqlChange
      description: |
        Optional. Rule to change the sql code for an entity, for example, function, procedure.
      value:
        sqlCode: "{{ sqlCode }}"
    - name: setTablePrimaryKey
      description: |
        Optional. Rule to specify the primary key for a table
      value:
        primaryKeyColumns:
          - "{{ primaryKeyColumns }}"
        primaryKey: "{{ primaryKey }}"
    - name: state
      value: "{{ state }}"
      description: |
        Optional. The mapping rule state
      valid_values: ['STATE_UNSPECIFIED', 'ENABLED', 'DISABLED', 'DELETED']
    - name: entityMove
      description: |
        Optional. Rule to specify how multiple entities should be relocated into a different schema.
      value:
        newSchema: "{{ newSchema }}"
    - name: filterTableColumns
      description: |
        Optional. Rule to specify the list of columns to include or exclude from a table.
      value:
        includeColumns:
          - "{{ includeColumns }}"
        excludeColumns:
          - "{{ excludeColumns }}"
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Optional. A human readable name
    - name: multiColumnDataTypeChange
      description: |
        Optional. Rule to specify how multiple columns should be converted to a different data type.
      value:
        newDataType: "{{ newDataType }}"
        overrideLength: "{{ overrideLength }}"
        sourceTextFilter:
          sourceMinLengthFilter: "{{ sourceMinLengthFilter }}"
          sourceMaxLengthFilter: "{{ sourceMaxLengthFilter }}"
        customFeatures: "{{ customFeatures }}"
        overrideScale: {{ overrideScale }}
        overrideFractionalSecondsPrecision: {{ overrideFractionalSecondsPrecision }}
        sourceNumericFilter:
          numericFilterOption: "{{ numericFilterOption }}"
          sourceMinScaleFilter: {{ sourceMinScaleFilter }}
          sourceMinPrecisionFilter: {{ sourceMinPrecisionFilter }}
          sourceMaxPrecisionFilter: {{ sourceMaxPrecisionFilter }}
          sourceMaxScaleFilter: {{ sourceMaxScaleFilter }}
        sourceDataTypeFilter: "{{ sourceDataTypeFilter }}"
        overridePrecision: {{ overridePrecision }}
    - name: convertRowidColumn
      description: |
        Optional. Rule to specify how multiple tables should be converted with an additional rowid column.
      value:
        onlyIfNoPrimaryKey: {{ onlyIfNoPrimaryKey }}
    - name: singleColumnChange
      description: |
        Optional. Rule to specify how a single column is converted.
      value:
        precision: {{ precision }}
        udt: {{ udt }}
        array: {{ array }}
        nullable: {{ nullable }}
        collation: "{{ collation }}"
        customFeatures: "{{ customFeatures }}"
        setValues:
          - "{{ setValues }}"
        dataType: "{{ dataType }}"
        scale: {{ scale }}
        autoGenerated: {{ autoGenerated }}
        fractionalSecondsPrecision: {{ fractionalSecondsPrecision }}
        length: "{{ length }}"
        charset: "{{ charset }}"
        arrayLength: {{ arrayLength }}
        comment: "{{ comment }}"
    - name: filter
      description: |
        Required. The rule filter
      value:
        parentEntity: "{{ parentEntity }}"
        entityNameContains: "{{ entityNameContains }}"
        entityNameSuffix: "{{ entityNameSuffix }}"
        entityNamePrefix: "{{ entityNamePrefix }}"
        entities:
          - "{{ entities }}"
    - name: ruleOrder
      value: "{{ ruleOrder }}"
      description: |
        Required. The order in which the rule is applied. Lower order rules are applied before higher value rules so they may end up being overridden.
    - name: singleEntityRename
      description: |
        Optional. Rule to specify how a single entity should be renamed.
      value:
        newName: "{{ newName }}"
    - name: requestId
      value: "{{ requestId }}"
    - name: mappingRuleId
      value: "{{ mappingRuleId }}"
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

Deletes a single mapping rule.

```sql
DELETE FROM google.datamigration.mapping_rules
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND conversionWorkspacesId = '{{ conversionWorkspacesId }}' --required
AND mappingRulesId = '{{ mappingRulesId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="import"
    values={[
        { label: 'import', value: 'import' }
    ]}
>
<TabItem value="import">

Imports the mapping rules for a given conversion workspace. Supports various formats of external rules files.

```sql
EXEC google.datamigration.mapping_rules.import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@conversionWorkspacesId='{{ conversionWorkspacesId }}' --required 
@@json=
'{
"autoCommit": {{ autoCommit }}, 
"rulesFiles": "{{ rulesFiles }}", 
"rulesFormat": "{{ rulesFormat }}"
}'
;
```
</TabItem>
</Tabs>
