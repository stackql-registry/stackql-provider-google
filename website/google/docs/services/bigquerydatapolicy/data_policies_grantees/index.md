--- 
title: data_policies_grantees
hide_title: false
hide_table_of_contents: false
keywords:
  - data_policies_grantees
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
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>data_policies_grantees</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_policies_grantees" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigquerydatapolicy.data_policies_grantees" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#add_grantees"><CopyableCode code="add_grantees" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataPoliciesId"><code>dataPoliciesId</code></a></td>
    <td></td>
    <td>Adds new grantees to a data policy. The new grantees will be added to the existing grantees. If the request contains a duplicate grantee, the grantee will be ignored. If the request contains a grantee that already exists, the grantee will be ignored.</td>
</tr>
<tr>
    <td><a href="#remove_grantees"><CopyableCode code="remove_grantees" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataPoliciesId"><code>dataPoliciesId</code></a></td>
    <td></td>
    <td>Removes grantees from a data policy. The grantees will be removed from the existing grantees. If the request contains a grantee that does not exist, the grantee will be ignored.</td>
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
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="add_grantees"
    values={[
        { label: 'add_grantees', value: 'add_grantees' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_grantees">

Adds new grantees to a data policy. The new grantees will be added to the existing grantees. If the request contains a duplicate grantee, the grantee will be ignored. If the request contains a grantee that already exists, the grantee will be ignored.

```sql
INSERT INTO google.bigquerydatapolicy.data_policies_grantees (
data__grantees,
projectsId,
locationsId,
dataPoliciesId
)
SELECT 
'{{ grantees }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ dataPoliciesId }}'
RETURNING
name,
dataGovernanceTag,
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

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_policies_grantees
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the data_policies_grantees resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the data_policies_grantees resource.
    - name: dataPoliciesId
      value: "{{ dataPoliciesId }}"
      description: Required parameter for the data_policies_grantees resource.
    - name: grantees
      value:
        - "{{ grantees }}"
      description: |
        Required. IAM principal that should be granted Fine Grained Access to the underlying data goverened by the data policy. The target data policy is determined by the \`data_policy\` field. Uses the [IAM V2 principal syntax](https://cloud.google.com/iam/docs/principal-identifiers#v2). Supported principal types: * User * Group * Service account
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_grantees"
    values={[
        { label: 'remove_grantees', value: 'remove_grantees' }
    ]}
>
<TabItem value="remove_grantees">

Removes grantees from a data policy. The grantees will be removed from the existing grantees. If the request contains a grantee that does not exist, the grantee will be ignored.

```sql
DELETE FROM google.bigquerydatapolicy.data_policies_grantees
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataPoliciesId = '{{ dataPoliciesId }}' --required
;
```
</TabItem>
</Tabs>
