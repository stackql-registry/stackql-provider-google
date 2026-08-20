--- 
title: cloudasset_iam_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - cloudasset_iam_policies
  - cloudasset
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

Creates, updates, deletes, gets or lists a <code>cloudasset_iam_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cloudasset_iam_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudasset.cloudasset_iam_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get"
    values={[
        { label: 'batch_get', value: 'batch_get' }
    ]}
>
<TabItem value="batch_get">

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
    <td><CopyableCode code="policyResults" /></td>
    <td><code>array</code></td>
    <td>The effective policies for a batch of resources. Note that the results order is the same as the order of BatchGetEffectiveIamPoliciesRequest.names. When a resource does not have any effective IAM policies, its corresponding policy_result will contain empty EffectiveIamPolicy.policies.</td>
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
    <td><a href="#batch_get"><CopyableCode code="batch_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-scope"><code>scope</code></a></td>
    <td><a href="#parameter-names"><code>names</code></a></td>
    <td>Gets effective IAM policies for a batch of resources.</td>
</tr>
<tr>
    <td><a href="#analyze_iam_policy"><CopyableCode code="analyze_iam_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-scope"><code>scope</code></a></td>
    <td><a href="#parameter-analysisQuery.accessSelector.permissions"><code>analysisQuery.accessSelector.permissions</code></a>, <a href="#parameter-analysisQuery.accessSelector.roles"><code>analysisQuery.accessSelector.roles</code></a>, <a href="#parameter-analysisQuery.conditionContext.accessTime"><code>analysisQuery.conditionContext.accessTime</code></a>, <a href="#parameter-analysisQuery.identitySelector.identity"><code>analysisQuery.identitySelector.identity</code></a>, <a href="#parameter-analysisQuery.options.analyzeServiceAccountImpersonation"><code>analysisQuery.options.analyzeServiceAccountImpersonation</code></a>, <a href="#parameter-analysisQuery.options.expandGroups"><code>analysisQuery.options.expandGroups</code></a>, <a href="#parameter-analysisQuery.options.expandResources"><code>analysisQuery.options.expandResources</code></a>, <a href="#parameter-analysisQuery.options.expandRoles"><code>analysisQuery.options.expandRoles</code></a>, <a href="#parameter-analysisQuery.options.outputGroupEdges"><code>analysisQuery.options.outputGroupEdges</code></a>, <a href="#parameter-analysisQuery.options.outputResourceEdges"><code>analysisQuery.options.outputResourceEdges</code></a>, <a href="#parameter-analysisQuery.resourceSelector.fullResourceName"><code>analysisQuery.resourceSelector.fullResourceName</code></a>, <a href="#parameter-executionTimeout"><code>executionTimeout</code></a>, <a href="#parameter-savedAnalysisQuery"><code>savedAnalysisQuery</code></a></td>
    <td>Analyzes IAM policies to answer which identities have what accesses on which resources.</td>
</tr>
<tr>
    <td><a href="#analyze_iam_policy_longrunning"><CopyableCode code="analyze_iam_policy_longrunning" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-scope"><code>scope</code></a></td>
    <td></td>
    <td>Analyzes IAM policies asynchronously to answer which identities have what accesses on which resources, and writes the analysis results to a Google Cloud Storage or a BigQuery destination. For Cloud Storage destination, the output format is the JSON format that represents a AnalyzeIamPolicyResponse. This method implements the google.longrunning.Operation, which allows you to track the operation status. We recommend intervals of at least 2 seconds with exponential backoff retry to poll the operation result. The metadata contains the metadata for the long-running operation.</td>
</tr>
<tr>
    <td><a href="#search_all_iam_policies"><CopyableCode code="search_all_iam_policies" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-scope"><code>scope</code></a></td>
    <td><a href="#parameter-assetTypes"><code>assetTypes</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-query"><code>query</code></a></td>
    <td>Searches all IAM policies within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllIamPolicies` permission on the desired scope, otherwise the request will be rejected.</td>
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
<tr id="parameter-scope">
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-analysisQuery.accessSelector.permissions">
    <td><CopyableCode code="analysisQuery.accessSelector.permissions" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-analysisQuery.accessSelector.roles">
    <td><CopyableCode code="analysisQuery.accessSelector.roles" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-analysisQuery.conditionContext.accessTime">
    <td><CopyableCode code="analysisQuery.conditionContext.accessTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr id="parameter-analysisQuery.identitySelector.identity">
    <td><CopyableCode code="analysisQuery.identitySelector.identity" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-analysisQuery.options.analyzeServiceAccountImpersonation">
    <td><CopyableCode code="analysisQuery.options.analyzeServiceAccountImpersonation" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-analysisQuery.options.expandGroups">
    <td><CopyableCode code="analysisQuery.options.expandGroups" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-analysisQuery.options.expandResources">
    <td><CopyableCode code="analysisQuery.options.expandResources" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-analysisQuery.options.expandRoles">
    <td><CopyableCode code="analysisQuery.options.expandRoles" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-analysisQuery.options.outputGroupEdges">
    <td><CopyableCode code="analysisQuery.options.outputGroupEdges" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-analysisQuery.options.outputResourceEdges">
    <td><CopyableCode code="analysisQuery.options.outputResourceEdges" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-analysisQuery.resourceSelector.fullResourceName">
    <td><CopyableCode code="analysisQuery.resourceSelector.fullResourceName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-assetTypes">
    <td><CopyableCode code="assetTypes" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-executionTimeout">
    <td><CopyableCode code="executionTimeout" /></td>
    <td><code>string (google-duration)</code></td>
    <td></td>
</tr>
<tr id="parameter-names">
    <td><CopyableCode code="names" /></td>
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
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-savedAnalysisQuery">
    <td><CopyableCode code="savedAnalysisQuery" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="batch_get"
    values={[
        { label: 'batch_get', value: 'batch_get' }
    ]}
>
<TabItem value="batch_get">

Gets effective IAM policies for a batch of resources.

```sql
SELECT
policyResults
FROM google.cloudasset.cloudasset_iam_policies
WHERE scope = '{{ scope }}' -- required
AND names = '{{ names }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="analyze_iam_policy"
    values={[
        { label: 'analyze_iam_policy', value: 'analyze_iam_policy' },
        { label: 'analyze_iam_policy_longrunning', value: 'analyze_iam_policy_longrunning' },
        { label: 'search_all_iam_policies', value: 'search_all_iam_policies' }
    ]}
>
<TabItem value="analyze_iam_policy">

Analyzes IAM policies to answer which identities have what accesses on which resources.

```sql
EXEC google.cloudasset.cloudasset_iam_policies.analyze_iam_policy 
@scope='{{ scope }}' --required, 
@analysisQuery.accessSelector.permissions='{{ analysisQuery.accessSelector.permissions }}', 
@analysisQuery.accessSelector.roles='{{ analysisQuery.accessSelector.roles }}', 
@analysisQuery.conditionContext.accessTime='{{ analysisQuery.conditionContext.accessTime }}', 
@analysisQuery.identitySelector.identity='{{ analysisQuery.identitySelector.identity }}', 
@analysisQuery.options.analyzeServiceAccountImpersonation={{ analysisQuery.options.analyzeServiceAccountImpersonation }}, 
@analysisQuery.options.expandGroups={{ analysisQuery.options.expandGroups }}, 
@analysisQuery.options.expandResources={{ analysisQuery.options.expandResources }}, 
@analysisQuery.options.expandRoles={{ analysisQuery.options.expandRoles }}, 
@analysisQuery.options.outputGroupEdges={{ analysisQuery.options.outputGroupEdges }}, 
@analysisQuery.options.outputResourceEdges={{ analysisQuery.options.outputResourceEdges }}, 
@analysisQuery.resourceSelector.fullResourceName='{{ analysisQuery.resourceSelector.fullResourceName }}', 
@executionTimeout='{{ executionTimeout }}', 
@savedAnalysisQuery='{{ savedAnalysisQuery }}'
;
```
</TabItem>
<TabItem value="analyze_iam_policy_longrunning">

Analyzes IAM policies asynchronously to answer which identities have what accesses on which resources, and writes the analysis results to a Google Cloud Storage or a BigQuery destination. For Cloud Storage destination, the output format is the JSON format that represents a AnalyzeIamPolicyResponse. This method implements the google.longrunning.Operation, which allows you to track the operation status. We recommend intervals of at least 2 seconds with exponential backoff retry to poll the operation result. The metadata contains the metadata for the long-running operation.

```sql
EXEC google.cloudasset.cloudasset_iam_policies.analyze_iam_policy_longrunning 
@scope='{{ scope }}' --required 
@@json=
'{
"analysisQuery": "{{ analysisQuery }}", 
"outputConfig": "{{ outputConfig }}", 
"savedAnalysisQuery": "{{ savedAnalysisQuery }}"
}'
;
```
</TabItem>
<TabItem value="search_all_iam_policies">

Searches all IAM policies within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllIamPolicies` permission on the desired scope, otherwise the request will be rejected.

```sql
EXEC google.cloudasset.cloudasset_iam_policies.search_all_iam_policies 
@scope='{{ scope }}' --required, 
@assetTypes='{{ assetTypes }}', 
@orderBy='{{ orderBy }}', 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}', 
@query='{{ query }}'
;
```
</TabItem>
</Tabs>
