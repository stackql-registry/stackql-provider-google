--- 
title: auto_labeling_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - auto_labeling_rules
  - contactcenterinsights
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

Creates, updates, deletes, gets or lists an <code>auto_labeling_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="auto_labeling_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.contactcenterinsights.auto_labeling_rules" /></td></tr>
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
    <td>Identifier. The resource name of the auto-labeling rule. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/autoLabelingRules/&#123;auto_labeling_rule&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>Whether the rule is active.</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>Conditions to apply for auto-labeling the label_key. Representing sequential block of if .. else if .. else statements. The value of the first matching condition will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-provided display name of the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="labelKey" /></td>
    <td><code>string</code></td>
    <td>The label key. This is also the &#123;auto_labeling_rule&#125; in the resource name. Only settable if label_key_type is LABEL_KEY_TYPE_CUSTOM.</td>
</tr>
<tr>
    <td><CopyableCode code="labelKeyType" /></td>
    <td><code>string</code></td>
    <td>The type of the label key. (LABEL_KEY_TYPE_UNSPECIFIED, LABEL_KEY_TYPE_CUSTOM)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time at which the rule was updated.</td>
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
    <td>Identifier. The resource name of the auto-labeling rule. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/autoLabelingRules/&#123;auto_labeling_rule&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>Whether the rule is active.</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>Conditions to apply for auto-labeling the label_key. Representing sequential block of if .. else if .. else statements. The value of the first matching condition will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-provided display name of the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="labelKey" /></td>
    <td><code>string</code></td>
    <td>The label key. This is also the &#123;auto_labeling_rule&#125; in the resource name. Only settable if label_key_type is LABEL_KEY_TYPE_CUSTOM.</td>
</tr>
<tr>
    <td><CopyableCode code="labelKeyType" /></td>
    <td><code>string</code></td>
    <td>The type of the label key. (LABEL_KEY_TYPE_UNSPECIFIED, LABEL_KEY_TYPE_CUSTOM)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time at which the rule was updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-autoLabelingRulesId"><code>autoLabelingRulesId</code></a></td>
    <td></td>
    <td>Gets an auto labeling rule.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists auto labeling rules.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-autoLabelingRuleId"><code>autoLabelingRuleId</code></a></td>
    <td>Creates an auto labeling rule.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-autoLabelingRulesId"><code>autoLabelingRulesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an auto labeling rule.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-autoLabelingRulesId"><code>autoLabelingRulesId</code></a></td>
    <td></td>
    <td>Deletes an auto labeling rule.</td>
</tr>
<tr>
    <td><a href="#test"><CopyableCode code="test" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Tests auto labeling rules against a conversation.</td>
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
<tr id="parameter-autoLabelingRulesId">
    <td><CopyableCode code="autoLabelingRulesId" /></td>
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
<tr id="parameter-autoLabelingRuleId">
    <td><CopyableCode code="autoLabelingRuleId" /></td>
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

Gets an auto labeling rule.

```sql
SELECT
name,
active,
conditions,
createTime,
description,
displayName,
labelKey,
labelKeyType,
updateTime
FROM google.contactcenterinsights.auto_labeling_rules
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND autoLabelingRulesId = '{{ autoLabelingRulesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists auto labeling rules.

```sql
SELECT
name,
active,
conditions,
createTime,
description,
displayName,
labelKey,
labelKeyType,
updateTime
FROM google.contactcenterinsights.auto_labeling_rules
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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

Creates an auto labeling rule.

```sql
INSERT INTO google.contactcenterinsights.auto_labeling_rules (
data__description,
data__active,
data__labelKeyType,
data__labelKey,
data__name,
data__conditions,
data__displayName,
projectsId,
locationsId,
autoLabelingRuleId
)
SELECT 
'{{ description }}',
{{ active }},
'{{ labelKeyType }}',
'{{ labelKey }}',
'{{ name }}',
'{{ conditions }}',
'{{ displayName }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ autoLabelingRuleId }}'
RETURNING
name,
active,
conditions,
createTime,
description,
displayName,
labelKey,
labelKeyType,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: auto_labeling_rules
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the auto_labeling_rules resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the auto_labeling_rules resource.
    - name: description
      value: "{{ description }}"
      description: |
        The description of the rule.
    - name: active
      value: {{ active }}
      description: |
        Whether the rule is active.
    - name: labelKeyType
      value: "{{ labelKeyType }}"
      description: |
        The type of the label key.
      valid_values: ['LABEL_KEY_TYPE_UNSPECIFIED', 'LABEL_KEY_TYPE_CUSTOM']
    - name: labelKey
      value: "{{ labelKey }}"
      description: |
        The label key. This is also the {auto_labeling_rule} in the resource name. Only settable if label_key_type is LABEL_KEY_TYPE_CUSTOM.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The resource name of the auto-labeling rule. Format: projects/{project}/locations/{location}/autoLabelingRules/{auto_labeling_rule}
    - name: conditions
      description: |
        Conditions to apply for auto-labeling the label_key. Representing sequential block of if .. else if .. else statements. The value of the first matching condition will be used.
      value:
        - condition: "{{ condition }}"
          value: "{{ value }}"
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The user-provided display name of the rule.
    - name: autoLabelingRuleId
      value: "{{ autoLabelingRuleId }}"
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

Updates an auto labeling rule.

```sql
UPDATE google.contactcenterinsights.auto_labeling_rules
SET 
data__description = '{{ description }}',
data__active = {{ active }},
data__labelKeyType = '{{ labelKeyType }}',
data__labelKey = '{{ labelKey }}',
data__name = '{{ name }}',
data__conditions = '{{ conditions }}',
data__displayName = '{{ displayName }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND autoLabelingRulesId = '{{ autoLabelingRulesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
active,
conditions,
createTime,
description,
displayName,
labelKey,
labelKeyType,
updateTime;
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

Deletes an auto labeling rule.

```sql
DELETE FROM google.contactcenterinsights.auto_labeling_rules
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND autoLabelingRulesId = '{{ autoLabelingRulesId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="test"
    values={[
        { label: 'test', value: 'test' }
    ]}
>
<TabItem value="test">

Tests auto labeling rules against a conversation.

```sql
EXEC google.contactcenterinsights.auto_labeling_rules.test 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"conversation": "{{ conversation }}", 
"autoLabelingRule": "{{ autoLabelingRule }}"
}'
;
```
</TabItem>
</Tabs>
