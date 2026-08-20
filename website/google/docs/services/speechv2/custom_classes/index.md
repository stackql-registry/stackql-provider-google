--- 
title: custom_classes
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_classes
  - speechv2
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

Creates, updates, deletes, gets or lists a <code>custom_classes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_classes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.speechv2.custom_classes" /></td></tr>
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
    <td>Output only. Identifier. The resource name of the CustomClass. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/customClasses/&#123;custom_class&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Allows users to store small amounts of arbitrary data. Both the key and the value must be 63 characters or less each. At most 100 annotations.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this resource was requested for deletion.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User-settable, human-readable name for the CustomClass. Must be 63 characters or less.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. This checksum is computed by the server based on the value of other fields. This may be sent on update, undelete, and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this resource will be purged.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>A collection of class items.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td>Output only. The [KMS key name](https://cloud.google.com/kms/docs/resource-hierarchy#keys) with which the CustomClass is encrypted. The expected format is `projects/&#123;project&#125;/locations/&#123;location&#125;/keyRings/&#123;key_ring&#125;/cryptoKeys/&#123;crypto_key&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyVersionName" /></td>
    <td><code>string</code></td>
    <td>Output only. The [KMS key version name](https://cloud.google.com/kms/docs/resource-hierarchy#key_versions) with which the CustomClass is encrypted. The expected format is `projects/&#123;project&#125;/locations/&#123;location&#125;/keyRings/&#123;key_ring&#125;/cryptoKeys/&#123;crypto_key&#125;/cryptoKeyVersions/&#123;crypto_key_version&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether or not this CustomClass is in the process of being updated.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The CustomClass lifecycle state. (STATE_UNSPECIFIED, ACTIVE, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System-assigned unique identifier for the CustomClass.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time this resource was modified.</td>
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
    <td>Output only. Identifier. The resource name of the CustomClass. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/customClasses/&#123;custom_class&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Allows users to store small amounts of arbitrary data. Both the key and the value must be 63 characters or less each. At most 100 annotations.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this resource was requested for deletion.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. User-settable, human-readable name for the CustomClass. Must be 63 characters or less.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. This checksum is computed by the server based on the value of other fields. This may be sent on update, undelete, and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this resource will be purged.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>A collection of class items.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td>Output only. The [KMS key name](https://cloud.google.com/kms/docs/resource-hierarchy#keys) with which the CustomClass is encrypted. The expected format is `projects/&#123;project&#125;/locations/&#123;location&#125;/keyRings/&#123;key_ring&#125;/cryptoKeys/&#123;crypto_key&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyVersionName" /></td>
    <td><code>string</code></td>
    <td>Output only. The [KMS key version name](https://cloud.google.com/kms/docs/resource-hierarchy#key_versions) with which the CustomClass is encrypted. The expected format is `projects/&#123;project&#125;/locations/&#123;location&#125;/keyRings/&#123;key_ring&#125;/cryptoKeys/&#123;crypto_key&#125;/cryptoKeyVersions/&#123;crypto_key_version&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether or not this CustomClass is in the process of being updated.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The CustomClass lifecycle state. (STATE_UNSPECIFIED, ACTIVE, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System-assigned unique identifier for the CustomClass.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The most recent time this resource was modified.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-customClassesId"><code>customClassesId</code></a></td>
    <td></td>
    <td>Returns the requested CustomClass.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-showDeleted"><code>showDeleted</code></a></td>
    <td>Lists CustomClasses.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-customClassId"><code>customClassId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a CustomClass.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-customClassesId"><code>customClassesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates the CustomClass.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-customClassesId"><code>customClassesId</code></a></td>
    <td><a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Deletes the CustomClass.</td>
</tr>
<tr>
    <td><a href="#undelete"><CopyableCode code="undelete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-customClassesId"><code>customClassesId</code></a></td>
    <td></td>
    <td>Undeletes the CustomClass.</td>
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
<tr id="parameter-customClassesId">
    <td><CopyableCode code="customClassesId" /></td>
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
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-customClassId">
    <td><CopyableCode code="customClassId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
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
<tr id="parameter-showDeleted">
    <td><CopyableCode code="showDeleted" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
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

Returns the requested CustomClass.

```sql
SELECT
name,
annotations,
createTime,
deleteTime,
displayName,
etag,
expireTime,
items,
kmsKeyName,
kmsKeyVersionName,
reconciling,
state,
uid,
updateTime
FROM google.speechv2.custom_classes
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND customClassesId = '{{ customClassesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists CustomClasses.

```sql
SELECT
name,
annotations,
createTime,
deleteTime,
displayName,
etag,
expireTime,
items,
kmsKeyName,
kmsKeyVersionName,
reconciling,
state,
uid,
updateTime
FROM google.speechv2.custom_classes
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND showDeleted = '{{ showDeleted }}'
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

Creates a CustomClass.

```sql
INSERT INTO google.speechv2.custom_classes (
data__annotations,
data__displayName,
data__items,
projectsId,
locationsId,
customClassId,
validateOnly
)
SELECT 
'{{ annotations }}',
'{{ displayName }}',
'{{ items }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ customClassId }}',
'{{ validateOnly }}'
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
- name: custom_classes
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the custom_classes resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the custom_classes resource.
    - name: annotations
      value: "{{ annotations }}"
      description: |
        Optional. Allows users to store small amounts of arbitrary data. Both the key and the value must be 63 characters or less each. At most 100 annotations.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Optional. User-settable, human-readable name for the CustomClass. Must be 63 characters or less.
    - name: items
      description: |
        A collection of class items.
      value:
        - value: "{{ value }}"
    - name: customClassId
      value: "{{ customClassId }}"
    - name: validateOnly
      value: {{ validateOnly }}
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

Updates the CustomClass.

```sql
UPDATE google.speechv2.custom_classes
SET 
data__annotations = '{{ annotations }}',
data__displayName = '{{ displayName }}',
data__items = '{{ items }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND customClassesId = '{{ customClassesId }}' --required
AND updateMask = '{{ updateMask}}'
AND validateOnly = {{ validateOnly}}
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

Deletes the CustomClass.

```sql
DELETE FROM google.speechv2.custom_classes
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND customClassesId = '{{ customClassesId }}' --required
AND allowMissing = '{{ allowMissing }}'
AND etag = '{{ etag }}'
AND validateOnly = '{{ validateOnly }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="undelete"
    values={[
        { label: 'undelete', value: 'undelete' }
    ]}
>
<TabItem value="undelete">

Undeletes the CustomClass.

```sql
EXEC google.speechv2.custom_classes.undelete 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@customClassesId='{{ customClassesId }}' --required 
@@json=
'{
"etag": "{{ etag }}", 
"name": "{{ name }}", 
"validateOnly": {{ validateOnly }}
}'
;
```
</TabItem>
</Tabs>
