--- 
title: quota_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - quota_rules
  - netapp
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

Creates, updates, deletes, gets or lists a <code>quota_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="quota_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.netapp.quota_rules" /></td></tr>
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
    <td>Identifier. The resource name of the quota rule. Format: `projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/volumes/volumes/&#123;volume_id&#125;/quotaRules/&#123;quota_rule_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time of the quota rule</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the quota rule</td>
</tr>
<tr>
    <td><CopyableCode code="diskLimitMib" /></td>
    <td><code>integer (int32)</code></td>
    <td>Required. The maximum allowed disk space in MiB.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels of the quota rule</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the quota rule (STATE_UNSPECIFIED, CREATING, UPDATING, DELETING, READY, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="stateDetails" /></td>
    <td><code>string</code></td>
    <td>Output only. State details of the quota rule</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>string</code></td>
    <td>Optional. The quota rule applies to the specified user or group, identified by a Unix UID/GID, Windows SID, or null for default.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Required. The type of quota rule. (TYPE_UNSPECIFIED, INDIVIDUAL_USER_QUOTA, INDIVIDUAL_GROUP_QUOTA, DEFAULT_USER_QUOTA, DEFAULT_GROUP_QUOTA)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-volumesId"><code>volumesId</code></a>, <a href="#parameter-quotaRulesId"><code>quotaRulesId</code></a></td>
    <td></td>
    <td>Returns details of the specified quota rule.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-volumesId"><code>volumesId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Returns list of all quota rules in a location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-volumesId"><code>volumesId</code></a></td>
    <td><a href="#parameter-quotaRuleId"><code>quotaRuleId</code></a></td>
    <td>Creates a new quota rule.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-volumesId"><code>volumesId</code></a>, <a href="#parameter-quotaRulesId"><code>quotaRulesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a quota rule.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-volumesId"><code>volumesId</code></a>, <a href="#parameter-quotaRulesId"><code>quotaRulesId</code></a></td>
    <td></td>
    <td>Deletes a quota rule.</td>
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
<tr id="parameter-quotaRulesId">
    <td><CopyableCode code="quotaRulesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-volumesId">
    <td><CopyableCode code="volumesId" /></td>
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
<tr id="parameter-quotaRuleId">
    <td><CopyableCode code="quotaRuleId" /></td>
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

Returns details of the specified quota rule.

```sql
SELECT
name,
createTime,
description,
diskLimitMib,
labels,
state,
stateDetails,
target,
type
FROM google.netapp.quota_rules
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND volumesId = '{{ volumesId }}' -- required
AND quotaRulesId = '{{ quotaRulesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns list of all quota rules in a location.

```sql
SELECT
*
FROM google.netapp.quota_rules
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND volumesId = '{{ volumesId }}' -- required
AND filter = '{{ filter }}'
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
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

Creates a new quota rule.

```sql
INSERT INTO google.netapp.quota_rules (
data__labels,
data__name,
data__target,
data__description,
data__type,
data__diskLimitMib,
projectsId,
locationsId,
volumesId,
quotaRuleId
)
SELECT 
'{{ labels }}',
'{{ name }}',
'{{ target }}',
'{{ description }}',
'{{ type }}',
{{ diskLimitMib }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ volumesId }}',
'{{ quotaRuleId }}'
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
- name: quota_rules
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the quota_rules resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the quota_rules resource.
    - name: volumesId
      value: "{{ volumesId }}"
      description: Required parameter for the quota_rules resource.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Labels of the quota rule
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The resource name of the quota rule. Format: \`projects/{project_number}/locations/{location_id}/volumes/volumes/{volume_id}/quotaRules/{quota_rule_id}\`.
    - name: target
      value: "{{ target }}"
      description: |
        Optional. The quota rule applies to the specified user or group, identified by a Unix UID/GID, Windows SID, or null for default.
    - name: description
      value: "{{ description }}"
      description: |
        Optional. Description of the quota rule
    - name: type
      value: "{{ type }}"
      description: |
        Required. The type of quota rule.
      valid_values: ['TYPE_UNSPECIFIED', 'INDIVIDUAL_USER_QUOTA', 'INDIVIDUAL_GROUP_QUOTA', 'DEFAULT_USER_QUOTA', 'DEFAULT_GROUP_QUOTA']
    - name: diskLimitMib
      value: {{ diskLimitMib }}
      description: |
        Required. The maximum allowed disk space in MiB.
    - name: quotaRuleId
      value: "{{ quotaRuleId }}"
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

Updates a quota rule.

```sql
UPDATE google.netapp.quota_rules
SET 
data__labels = '{{ labels }}',
data__name = '{{ name }}',
data__target = '{{ target }}',
data__description = '{{ description }}',
data__type = '{{ type }}',
data__diskLimitMib = {{ diskLimitMib }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND volumesId = '{{ volumesId }}' --required
AND quotaRulesId = '{{ quotaRulesId }}' --required
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

Deletes a quota rule.

```sql
DELETE FROM google.netapp.quota_rules
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND volumesId = '{{ volumesId }}' --required
AND quotaRulesId = '{{ quotaRulesId }}' --required
;
```
</TabItem>
</Tabs>
