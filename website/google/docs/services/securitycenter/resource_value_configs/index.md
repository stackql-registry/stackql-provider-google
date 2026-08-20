--- 
title: resource_value_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_value_configs
  - securitycenter
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

Creates, updates, deletes, gets or lists a <code>resource_value_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_value_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securitycenter.resource_value_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_resource_value_configs_get"
    values={[
        { label: 'organizations_resource_value_configs_get', value: 'organizations_resource_value_configs_get' },
        { label: 'organizations_resource_value_configs_list', value: 'organizations_resource_value_configs_list' }
    ]}
>
<TabItem value="organizations_resource_value_configs_get">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="cloudProvider" /></td>
    <td><code>string</code></td>
    <td> (CLOUD_PROVIDER_UNSPECIFIED, GOOGLE_CLOUD_PLATFORM, AMAZON_WEB_SERVICES, MICROSOFT_AZURE)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="resourceLabelsSelector" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="resourceValue" /></td>
    <td><code>string</code></td>
    <td> (RESOURCE_VALUE_UNSPECIFIED, HIGH, MEDIUM, LOW, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="sensitiveDataProtectionMapping" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping)</td>
</tr>
<tr>
    <td><CopyableCode code="tagValues" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_resource_value_configs_list">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="cloudProvider" /></td>
    <td><code>string</code></td>
    <td> (CLOUD_PROVIDER_UNSPECIFIED, GOOGLE_CLOUD_PLATFORM, AMAZON_WEB_SERVICES, MICROSOFT_AZURE)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="resourceLabelsSelector" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="resourceValue" /></td>
    <td><code>string</code></td>
    <td> (RESOURCE_VALUE_UNSPECIFIED, HIGH, MEDIUM, LOW, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="sensitiveDataProtectionMapping" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping)</td>
</tr>
<tr>
    <td><CopyableCode code="tagValues" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
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
    <td><a href="#organizations_resource_value_configs_get"><CopyableCode code="organizations_resource_value_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-resourceValueConfigsId"><code>resourceValueConfigsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_resource_value_configs_list"><CopyableCode code="organizations_resource_value_configs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_resource_value_configs_batch_create"><CopyableCode code="organizations_resource_value_configs_batch_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_resource_value_configs_patch"><CopyableCode code="organizations_resource_value_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-resourceValueConfigsId"><code>resourceValueConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_resource_value_configs_delete"><CopyableCode code="organizations_resource_value_configs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-resourceValueConfigsId"><code>resourceValueConfigsId</code></a></td>
    <td></td>
    <td></td>
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
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-resourceValueConfigsId">
    <td><CopyableCode code="resourceValueConfigsId" /></td>
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
    defaultValue="organizations_resource_value_configs_get"
    values={[
        { label: 'organizations_resource_value_configs_get', value: 'organizations_resource_value_configs_get' },
        { label: 'organizations_resource_value_configs_list', value: 'organizations_resource_value_configs_list' }
    ]}
>
<TabItem value="organizations_resource_value_configs_get">

Successful response

```sql
SELECT
name,
cloudProvider,
createTime,
description,
resourceLabelsSelector,
resourceType,
resourceValue,
scope,
sensitiveDataProtectionMapping,
tagValues,
updateTime
FROM google.securitycenter.resource_value_configs
WHERE organizationsId = '{{ organizationsId }}' -- required
AND resourceValueConfigsId = '{{ resourceValueConfigsId }}' -- required
;
```
</TabItem>
<TabItem value="organizations_resource_value_configs_list">

Successful response

```sql
SELECT
name,
cloudProvider,
createTime,
description,
resourceLabelsSelector,
resourceType,
resourceValue,
scope,
sensitiveDataProtectionMapping,
tagValues,
updateTime
FROM google.securitycenter.resource_value_configs
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_resource_value_configs_batch_create"
    values={[
        { label: 'organizations_resource_value_configs_batch_create', value: 'organizations_resource_value_configs_batch_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_resource_value_configs_batch_create">

No description available.

```sql
INSERT INTO google.securitycenter.resource_value_configs (
data__requests,
organizationsId
)
SELECT 
'{{ requests }}',
'{{ organizationsId }}'
RETURNING
resourceValueConfigs
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resource_value_configs
  props:
    - name: organizationsId
      value: "{{ organizationsId }}"
      description: Required parameter for the resource_value_configs resource.
    - name: requests
      value:
        - parent: "{{ parent }}"
          resourceValueConfig:
            cloudProvider: "{{ cloudProvider }}"
            createTime: "{{ createTime }}"
            description: "{{ description }}"
            name: "{{ name }}"
            resourceLabelsSelector: "{{ resourceLabelsSelector }}"
            resourceType: "{{ resourceType }}"
            resourceValue: "{{ resourceValue }}"
            scope: "{{ scope }}"
            sensitiveDataProtectionMapping:
              highSensitivityMapping: "{{ highSensitivityMapping }}"
              mediumSensitivityMapping: "{{ mediumSensitivityMapping }}"
            tagValues:
              - "{{ tagValues }}"
            updateTime: "{{ updateTime }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_resource_value_configs_patch"
    values={[
        { label: 'organizations_resource_value_configs_patch', value: 'organizations_resource_value_configs_patch' }
    ]}
>
<TabItem value="organizations_resource_value_configs_patch">

No description available.

```sql
UPDATE google.securitycenter.resource_value_configs
SET 
data__cloudProvider = '{{ cloudProvider }}',
data__description = '{{ description }}',
data__name = '{{ name }}',
data__resourceLabelsSelector = '{{ resourceLabelsSelector }}',
data__resourceType = '{{ resourceType }}',
data__resourceValue = '{{ resourceValue }}',
data__scope = '{{ scope }}',
data__sensitiveDataProtectionMapping = '{{ sensitiveDataProtectionMapping }}',
data__tagValues = '{{ tagValues }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND resourceValueConfigsId = '{{ resourceValueConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
cloudProvider,
createTime,
description,
resourceLabelsSelector,
resourceType,
resourceValue,
scope,
sensitiveDataProtectionMapping,
tagValues,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_resource_value_configs_delete"
    values={[
        { label: 'organizations_resource_value_configs_delete', value: 'organizations_resource_value_configs_delete' }
    ]}
>
<TabItem value="organizations_resource_value_configs_delete">

No description available.

```sql
DELETE FROM google.securitycenter.resource_value_configs
WHERE organizationsId = '{{ organizationsId }}' --required
AND resourceValueConfigsId = '{{ resourceValueConfigsId }}' --required
;
```
</TabItem>
</Tabs>
