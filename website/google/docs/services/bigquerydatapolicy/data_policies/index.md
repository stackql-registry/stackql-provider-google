--- 
title: data_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - data_policies
  - bigquerydatapolicy
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

Creates, updates, deletes, gets or lists a <code>data_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>data_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigquerydatapolicy.data_policies" /></td></tr>
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
    <td>Identifier. Resource name of this data policy, in the format of `projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/dataPolicies/&#123;data_policy_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="dataMaskingPolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. The data masking policy that specifies the data masking rule to use. It must be set if the data policy type is DATA_MASKING_POLICY. (id: DataMaskingPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="dataPolicyId" /></td>
    <td><code>string</code></td>
    <td>Output only. User-assigned (human readable) ID of the data policy that needs to be unique within a project. Used as &#123;data_policy_id&#125; in part of the resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="dataPolicyType" /></td>
    <td><code>string</code></td>
    <td>Required. Type of data policy.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>The etag for this Data Policy. This field is used for UpdateDataPolicy calls. If Data Policy exists, this field is required and must match the server's etag. It will also be populated in the response of GetDataPolicy, CreateDataPolicy, and UpdateDataPolicy calls.</td>
</tr>
<tr>
    <td><CopyableCode code="grantees" /></td>
    <td><code>array</code></td>
    <td>Optional. The list of IAM principals that have Fine Grained Access to the underlying data goverened by this data policy. Uses the [IAM V2 principal syntax](https://cloud.google.com/iam/docs/principal-identifiers#v2) Only supports principal types users, groups, serviceaccounts, cloudidentity. This field is supported in V2 Data Policy only. In case of V1 data policies (i.e. verion = 1 and policy_tag is set), this field is not populated.</td>
</tr>
<tr>
    <td><CopyableCode code="policyTag" /></td>
    <td><code>string</code></td>
    <td>Output only. Policy tag resource name, in the format of `projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/taxonomies/&#123;taxonomy_id&#125;/policyTags/&#123;policyTag_id&#125;`. policy_tag is supported only for V1 data policies.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Output only. The version of the Data Policy resource.</td>
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
    <td>Identifier. Resource name of this data policy, in the format of `projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/dataPolicies/&#123;data_policy_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="dataMaskingPolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. The data masking policy that specifies the data masking rule to use. It must be set if the data policy type is DATA_MASKING_POLICY. (id: DataMaskingPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="dataPolicyId" /></td>
    <td><code>string</code></td>
    <td>Output only. User-assigned (human readable) ID of the data policy that needs to be unique within a project. Used as &#123;data_policy_id&#125; in part of the resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="dataPolicyType" /></td>
    <td><code>string</code></td>
    <td>Required. Type of data policy.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>The etag for this Data Policy. This field is used for UpdateDataPolicy calls. If Data Policy exists, this field is required and must match the server's etag. It will also be populated in the response of GetDataPolicy, CreateDataPolicy, and UpdateDataPolicy calls.</td>
</tr>
<tr>
    <td><CopyableCode code="grantees" /></td>
    <td><code>array</code></td>
    <td>Optional. The list of IAM principals that have Fine Grained Access to the underlying data goverened by this data policy. Uses the [IAM V2 principal syntax](https://cloud.google.com/iam/docs/principal-identifiers#v2) Only supports principal types users, groups, serviceaccounts, cloudidentity. This field is supported in V2 Data Policy only. In case of V1 data policies (i.e. verion = 1 and policy_tag is set), this field is not populated.</td>
</tr>
<tr>
    <td><CopyableCode code="policyTag" /></td>
    <td><code>string</code></td>
    <td>Output only. Policy tag resource name, in the format of `projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/taxonomies/&#123;taxonomy_id&#125;/policyTags/&#123;policyTag_id&#125;`. policy_tag is supported only for V1 data policies.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Output only. The version of the Data Policy resource.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataPoliciesId"><code>dataPoliciesId</code></a></td>
    <td></td>
    <td>Gets the data policy specified by its resource name.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>List all of the data policies in the specified parent project.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a new data policy under a project with the given `data_policy_id` (used as the display name), and data policy type.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataPoliciesId"><code>dataPoliciesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Updates the metadata for an existing data policy. The target data policy can be specified by the resource name.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataPoliciesId"><code>dataPoliciesId</code></a></td>
    <td></td>
    <td>Deletes the data policy specified by its resource name.</td>
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
<tr id="parameter-dataPoliciesId">
    <td><CopyableCode code="dataPoliciesId" /></td>
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

Gets the data policy specified by its resource name.

```sql
SELECT
name,
dataMaskingPolicy,
dataPolicyId,
dataPolicyType,
etag,
grantees,
policyTag,
version
FROM google.bigquerydatapolicy.data_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataPoliciesId = '{{ dataPoliciesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

List all of the data policies in the specified parent project.

```sql
SELECT
name,
dataMaskingPolicy,
dataPolicyId,
dataPolicyType,
etag,
grantees,
policyTag,
version
FROM google.bigquerydatapolicy.data_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
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

Creates a new data policy under a project with the given `data_policy_id` (used as the display name), and data policy type.

```sql
INSERT INTO google.bigquerydatapolicy.data_policies (
data__dataPolicyId,
data__dataPolicy,
projectsId,
locationsId
)
SELECT 
'{{ dataPolicyId }}',
'{{ dataPolicy }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
dataMaskingPolicy,
dataPolicyId,
dataPolicyType,
etag,
grantees,
policyTag,
version
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: data_policies
  props:
    - name: projectsId
      value: string
      description: Required parameter for the data_policies resource.
    - name: locationsId
      value: string
      description: Required parameter for the data_policies resource.
    - name: dataPolicyId
      value: string
      description: >
        Required. User-assigned (human readable) ID of the data policy that needs to be unique within a project. Used as {data_policy_id} in part of the resource name.
        
    - name: dataPolicy
      value: object
      description: >
        Required. The data policy to create. The `name` field does not need to be provided for the data policy creation.
        
```
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

Updates the metadata for an existing data policy. The target data policy can be specified by the resource name.

```sql
UPDATE google.bigquerydatapolicy.data_policies
SET 
data__dataMaskingPolicy = '{{ dataMaskingPolicy }}',
data__name = '{{ name }}',
data__etag = '{{ etag }}',
data__dataPolicyType = '{{ dataPolicyType }}',
data__grantees = '{{ grantees }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataPoliciesId = '{{ dataPoliciesId }}' --required
AND updateMask = '{{ updateMask}}'
AND allowMissing = {{ allowMissing}}
RETURNING
name,
dataMaskingPolicy,
dataPolicyId,
dataPolicyType,
etag,
grantees,
policyTag,
version;
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

Deletes the data policy specified by its resource name.

```sql
DELETE FROM google.bigquerydatapolicy.data_policies
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataPoliciesId = '{{ dataPoliciesId }}' --required
;
```
</TabItem>
</Tabs>
