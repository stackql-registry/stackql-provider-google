--- 
title: authz_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - authz_policies
  - networksecurity
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

Creates, updates, deletes, gets or lists an <code>authz_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="authz_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networksecurity.authz_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_authz_policies_get"
    values={[
        { label: 'projects_locations_authz_policies_get', value: 'projects_locations_authz_policies_get' },
        { label: 'projects_locations_authz_policies_list', value: 'projects_locations_authz_policies_list' }
    ]}
>
<TabItem value="projects_locations_authz_policies_get">

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
    <td>Required. Identifier. Name of the `AuthzPolicy` resource in the following format: `projects/&#123;project&#125;/locations/&#123;location&#125;/authzPolicies/&#123;authz_policy&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>Required. Can be one of `ALLOW`, `DENY`, `CUSTOM`. When the action is `CUSTOM`, `customProvider` must be specified. When the action is `ALLOW`, only requests matching the policy will be allowed. When the action is `DENY`, only requests matching the policy will be denied. When a request arrives, the policies are evaluated in the following order: 1. If there is a `CUSTOM` policy that matches the request, the `CUSTOM` policy is evaluated using the custom authorization providers and the request is denied if the provider rejects the request. 2. If there are any `DENY` policies that match the request, the request is denied. 3. If there are no `ALLOW` policies for the resource or if any of the `ALLOW` policies match the request, the request is allowed. 4. Else the request is denied by default if none of the configured AuthzPolicies with `ALLOW` action match the request. (AUTHZ_ACTION_UNSPECIFIED, ALLOW, DENY, CUSTOM)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customProvider" /></td>
    <td><code>object</code></td>
    <td>Optional. Required if the action is `CUSTOM`. Allows delegating authorization decisions to Cloud IAP or to Service Extensions. One of `cloudIap` or `authzExtension` must be specified. (id: AuthzPolicyCustomProvider)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A human-readable description of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="httpRules" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of authorization HTTP rules to match against the incoming request. A policy match occurs when at least one HTTP rule matches the request or when no HTTP rules are specified in the policy. At least one HTTP Rule is required for Allow or Deny Action. Limited to 5 rules.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Set of labels associated with the `AuthzPolicy` resource. The format must comply with [the following requirements](https://cloud.google.com/compute/docs/labeling-resources#requirements).</td>
</tr>
<tr>
    <td><CopyableCode code="networkRules" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of authorization network rules to match against the incoming request. A policy match occurs when at least one network rule matches the request. At least one network rule is required for Allow or Deny Action if no HTTP rules are provided. Network rules are mutually exclusive with HTTP rules. Limited to 5 rules.</td>
</tr>
<tr>
    <td><CopyableCode code="policyProfile" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. Defines the type of authorization being performed. If not specified, `REQUEST_AUTHZ` is applied. This field cannot be changed once AuthzPolicy is created. (POLICY_PROFILE_UNSPECIFIED, REQUEST_AUTHZ, CONTENT_AUTHZ)</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>object</code></td>
    <td>Required. Specifies the set of resources to which this policy should be applied to. (id: AuthzPolicyTarget)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_authz_policies_list">

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
    <td>Required. Identifier. Name of the `AuthzPolicy` resource in the following format: `projects/&#123;project&#125;/locations/&#123;location&#125;/authzPolicies/&#123;authz_policy&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>Required. Can be one of `ALLOW`, `DENY`, `CUSTOM`. When the action is `CUSTOM`, `customProvider` must be specified. When the action is `ALLOW`, only requests matching the policy will be allowed. When the action is `DENY`, only requests matching the policy will be denied. When a request arrives, the policies are evaluated in the following order: 1. If there is a `CUSTOM` policy that matches the request, the `CUSTOM` policy is evaluated using the custom authorization providers and the request is denied if the provider rejects the request. 2. If there are any `DENY` policies that match the request, the request is denied. 3. If there are no `ALLOW` policies for the resource or if any of the `ALLOW` policies match the request, the request is allowed. 4. Else the request is denied by default if none of the configured AuthzPolicies with `ALLOW` action match the request. (AUTHZ_ACTION_UNSPECIFIED, ALLOW, DENY, CUSTOM)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customProvider" /></td>
    <td><code>object</code></td>
    <td>Optional. Required if the action is `CUSTOM`. Allows delegating authorization decisions to Cloud IAP or to Service Extensions. One of `cloudIap` or `authzExtension` must be specified. (id: AuthzPolicyCustomProvider)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. A human-readable description of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="httpRules" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of authorization HTTP rules to match against the incoming request. A policy match occurs when at least one HTTP rule matches the request or when no HTTP rules are specified in the policy. At least one HTTP Rule is required for Allow or Deny Action. Limited to 5 rules.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Set of labels associated with the `AuthzPolicy` resource. The format must comply with [the following requirements](https://cloud.google.com/compute/docs/labeling-resources#requirements).</td>
</tr>
<tr>
    <td><CopyableCode code="networkRules" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of authorization network rules to match against the incoming request. A policy match occurs when at least one network rule matches the request. At least one network rule is required for Allow or Deny Action if no HTTP rules are provided. Network rules are mutually exclusive with HTTP rules. Limited to 5 rules.</td>
</tr>
<tr>
    <td><CopyableCode code="policyProfile" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. Defines the type of authorization being performed. If not specified, `REQUEST_AUTHZ` is applied. This field cannot be changed once AuthzPolicy is created. (POLICY_PROFILE_UNSPECIFIED, REQUEST_AUTHZ, CONTENT_AUTHZ)</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>object</code></td>
    <td>Required. Specifies the set of resources to which this policy should be applied to. (id: AuthzPolicyTarget)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the resource was updated.</td>
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
    <td><a href="#projects_locations_authz_policies_get"><CopyableCode code="projects_locations_authz_policies_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authzPoliciesId"><code>authzPoliciesId</code></a></td>
    <td></td>
    <td>Gets details of a single AuthzPolicy.</td>
</tr>
<tr>
    <td><a href="#projects_locations_authz_policies_list"><CopyableCode code="projects_locations_authz_policies_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists AuthzPolicies in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_authz_policies_create"><CopyableCode code="projects_locations_authz_policies_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-authzPolicyId"><code>authzPolicyId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new AuthzPolicy in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_authz_policies_patch"><CopyableCode code="projects_locations_authz_policies_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authzPoliciesId"><code>authzPoliciesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single AuthzPolicy.</td>
</tr>
<tr>
    <td><a href="#projects_locations_authz_policies_delete"><CopyableCode code="projects_locations_authz_policies_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-authzPoliciesId"><code>authzPoliciesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single AuthzPolicy.</td>
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
<tr id="parameter-authzPoliciesId">
    <td><CopyableCode code="authzPoliciesId" /></td>
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
<tr id="parameter-authzPolicyId">
    <td><CopyableCode code="authzPolicyId" /></td>
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
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
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
    defaultValue="projects_locations_authz_policies_get"
    values={[
        { label: 'projects_locations_authz_policies_get', value: 'projects_locations_authz_policies_get' },
        { label: 'projects_locations_authz_policies_list', value: 'projects_locations_authz_policies_list' }
    ]}
>
<TabItem value="projects_locations_authz_policies_get">

Gets details of a single AuthzPolicy.

```sql
SELECT
name,
action,
createTime,
customProvider,
description,
httpRules,
labels,
networkRules,
policyProfile,
target,
updateTime
FROM google.networksecurity.authz_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND authzPoliciesId = '{{ authzPoliciesId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_authz_policies_list">

Lists AuthzPolicies in a given project and location.

```sql
SELECT
name,
action,
createTime,
customProvider,
description,
httpRules,
labels,
networkRules,
policyProfile,
target,
updateTime
FROM google.networksecurity.authz_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_authz_policies_create"
    values={[
        { label: 'projects_locations_authz_policies_create', value: 'projects_locations_authz_policies_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_authz_policies_create">

Creates a new AuthzPolicy in a given project and location.

```sql
INSERT INTO google.networksecurity.authz_policies (
data__action,
data__customProvider,
data__description,
data__httpRules,
data__labels,
data__name,
data__networkRules,
data__policyProfile,
data__target,
projectsId,
locationsId,
authzPolicyId,
requestId
)
SELECT 
'{{ action }}',
'{{ customProvider }}',
'{{ description }}',
'{{ httpRules }}',
'{{ labels }}',
'{{ name }}',
'{{ networkRules }}',
'{{ policyProfile }}',
'{{ target }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ authzPolicyId }}',
'{{ requestId }}'
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
- name: authz_policies
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the authz_policies resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the authz_policies resource.
    - name: action
      value: "{{ action }}"
      description: |
        Required. Can be one of \`ALLOW\`, \`DENY\`, \`CUSTOM\`. When the action is \`CUSTOM\`, \`customProvider\` must be specified. When the action is \`ALLOW\`, only requests matching the policy will be allowed. When the action is \`DENY\`, only requests matching the policy will be denied. When a request arrives, the policies are evaluated in the following order: 1. If there is a \`CUSTOM\` policy that matches the request, the \`CUSTOM\` policy is evaluated using the custom authorization providers and the request is denied if the provider rejects the request. 2. If there are any \`DENY\` policies that match the request, the request is denied. 3. If there are no \`ALLOW\` policies for the resource or if any of the \`ALLOW\` policies match the request, the request is allowed. 4. Else the request is denied by default if none of the configured AuthzPolicies with \`ALLOW\` action match the request.
      valid_values: ['AUTHZ_ACTION_UNSPECIFIED', 'ALLOW', 'DENY', 'CUSTOM']
    - name: customProvider
      description: |
        Optional. Required if the action is \`CUSTOM\`. Allows delegating authorization decisions to Cloud IAP or to Service Extensions. One of \`cloudIap\` or \`authzExtension\` must be specified.
      value:
        authzExtension:
          resources:
            - "{{ resources }}"
        cloudIap: "{{ cloudIap }}"
    - name: description
      value: "{{ description }}"
      description: |
        Optional. A human-readable description of the resource.
    - name: httpRules
      description: |
        Optional. A list of authorization HTTP rules to match against the incoming request. A policy match occurs when at least one HTTP rule matches the request or when no HTTP rules are specified in the policy. At least one HTTP Rule is required for Allow or Deny Action. Limited to 5 rules.
      value:
        - from:
            notSources:
              - ipBlocks: "{{ ipBlocks }}"
                principals: "{{ principals }}"
                resources: "{{ resources }}"
            sources:
              - ipBlocks: "{{ ipBlocks }}"
                principals: "{{ principals }}"
                resources: "{{ resources }}"
          to:
            notOperations:
              - headerSet:
                  headers:
                    - name: "{{ name }}"
                      value:
                        contains: "{{ contains }}"
                        exact: "{{ exact }}"
                        ignoreCase: {{ ignoreCase }}
                        prefix: "{{ prefix }}"
                        suffix: "{{ suffix }}"
                hosts: "{{ hosts }}"
                mcp:
                  baseProtocolMethodsOption: "{{ baseProtocolMethodsOption }}"
                  methods:
                    - name: "{{ name }}"
                      params: "{{ params }}"
                methods: "{{ methods }}"
                paths: "{{ paths }}"
                snis: "{{ snis }}"
            operations:
              - headerSet:
                  headers:
                    - name: "{{ name }}"
                      value:
                        contains: "{{ contains }}"
                        exact: "{{ exact }}"
                        ignoreCase: {{ ignoreCase }}
                        prefix: "{{ prefix }}"
                        suffix: "{{ suffix }}"
                hosts: "{{ hosts }}"
                mcp:
                  baseProtocolMethodsOption: "{{ baseProtocolMethodsOption }}"
                  methods:
                    - name: "{{ name }}"
                      params: "{{ params }}"
                methods: "{{ methods }}"
                paths: "{{ paths }}"
                snis: "{{ snis }}"
          when: "{{ when }}"
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Set of labels associated with the \`AuthzPolicy\` resource. The format must comply with [the following requirements](https://cloud.google.com/compute/docs/labeling-resources#requirements).
    - name: name
      value: "{{ name }}"
      description: |
        Required. Identifier. Name of the \`AuthzPolicy\` resource in the following format: \`projects/{project}/locations/{location}/authzPolicies/{authz_policy}\`.
    - name: networkRules
      description: |
        Optional. A list of authorization network rules to match against the incoming request. A policy match occurs when at least one network rule matches the request. At least one network rule is required for Allow or Deny Action if no HTTP rules are provided. Network rules are mutually exclusive with HTTP rules. Limited to 5 rules.
      value:
        - from:
            notSources:
              - ipBlocks: "{{ ipBlocks }}"
                principals: "{{ principals }}"
                resources: "{{ resources }}"
            sources:
              - ipBlocks: "{{ ipBlocks }}"
                principals: "{{ principals }}"
                resources: "{{ resources }}"
          to:
            notOperations:
              - headerSet:
                  headers:
                    - name: "{{ name }}"
                      value:
                        contains: "{{ contains }}"
                        exact: "{{ exact }}"
                        ignoreCase: {{ ignoreCase }}
                        prefix: "{{ prefix }}"
                        suffix: "{{ suffix }}"
                hosts: "{{ hosts }}"
                mcp:
                  baseProtocolMethodsOption: "{{ baseProtocolMethodsOption }}"
                  methods:
                    - name: "{{ name }}"
                      params: "{{ params }}"
                methods: "{{ methods }}"
                paths: "{{ paths }}"
                snis: "{{ snis }}"
            operations:
              - headerSet:
                  headers:
                    - name: "{{ name }}"
                      value:
                        contains: "{{ contains }}"
                        exact: "{{ exact }}"
                        ignoreCase: {{ ignoreCase }}
                        prefix: "{{ prefix }}"
                        suffix: "{{ suffix }}"
                hosts: "{{ hosts }}"
                mcp:
                  baseProtocolMethodsOption: "{{ baseProtocolMethodsOption }}"
                  methods:
                    - name: "{{ name }}"
                      params: "{{ params }}"
                methods: "{{ methods }}"
                paths: "{{ paths }}"
                snis: "{{ snis }}"
          when: "{{ when }}"
    - name: policyProfile
      value: "{{ policyProfile }}"
      description: |
        Optional. Immutable. Defines the type of authorization being performed. If not specified, \`REQUEST_AUTHZ\` is applied. This field cannot be changed once AuthzPolicy is created.
      valid_values: ['POLICY_PROFILE_UNSPECIFIED', 'REQUEST_AUTHZ', 'CONTENT_AUTHZ']
    - name: target
      description: |
        Required. Specifies the set of resources to which this policy should be applied to.
      value:
        loadBalancingScheme: "{{ loadBalancingScheme }}"
        resources:
          - "{{ resources }}"
    - name: authzPolicyId
      value: "{{ authzPolicyId }}"
    - name: requestId
      value: "{{ requestId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_authz_policies_patch"
    values={[
        { label: 'projects_locations_authz_policies_patch', value: 'projects_locations_authz_policies_patch' }
    ]}
>
<TabItem value="projects_locations_authz_policies_patch">

Updates the parameters of a single AuthzPolicy.

```sql
UPDATE google.networksecurity.authz_policies
SET 
data__action = '{{ action }}',
data__customProvider = '{{ customProvider }}',
data__description = '{{ description }}',
data__httpRules = '{{ httpRules }}',
data__labels = '{{ labels }}',
data__name = '{{ name }}',
data__networkRules = '{{ networkRules }}',
data__policyProfile = '{{ policyProfile }}',
data__target = '{{ target }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND authzPoliciesId = '{{ authzPoliciesId }}' --required
AND requestId = '{{ requestId}}'
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
    defaultValue="projects_locations_authz_policies_delete"
    values={[
        { label: 'projects_locations_authz_policies_delete', value: 'projects_locations_authz_policies_delete' }
    ]}
>
<TabItem value="projects_locations_authz_policies_delete">

Deletes a single AuthzPolicy.

```sql
DELETE FROM google.networksecurity.authz_policies
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND authzPoliciesId = '{{ authzPoliciesId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
