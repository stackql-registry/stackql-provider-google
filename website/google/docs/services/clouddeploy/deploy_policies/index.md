--- 
title: deploy_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - deploy_policies
  - clouddeploy
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

Creates, updates, deletes, gets or lists a <code>deploy_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deploy_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.clouddeploy.deploy_policies" /></td></tr>
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
    <td>Output only. Name of the `DeployPolicy`. Format is `projects/&#123;project&#125;/locations/&#123;location&#125;/deployPolicies/&#123;deployPolicy&#125;`. The `deployPolicy` component must match `[a-z]([a-z0-9-]&#123;0,61&#125;[a-z0-9])?`</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. Annotations must meet the following constraints: * Annotations are key/value pairs. * Valid annotation keys have two segments: an optional prefix and name, separated by a slash (`/`). * The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character (`[a-z0-9A-Z]`) with dashes (`-`), underscores (`_`), dots (`.`), and alphanumerics between. * The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots(`.`), not longer than 253 characters in total, followed by a slash (`/`). See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set for more details.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the deploy policy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the `DeployPolicy`. Max length is 255 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>The weak etag of the `DeployPolicy` resource. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be &lt;= 128 bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>Required. Rules to apply. At least one rule must be present.</td>
</tr>
<tr>
    <td><CopyableCode code="selectors" /></td>
    <td><code>array</code></td>
    <td>Required. Selected resources to which the policy will be applied. At least one selector is required. If one selector matches the resource the policy applies. For example, if there are two selectors and the action being attempted matches one of them, the policy will apply to that action.</td>
</tr>
<tr>
    <td><CopyableCode code="suspended" /></td>
    <td><code>boolean</code></td>
    <td>Optional. When suspended, the policy will not prevent actions from occurring, even if the action violates the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Unique identifier of the `DeployPolicy`.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Most recent time at which the deploy policy was updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deployPoliciesId"><code>deployPoliciesId</code></a></td>
    <td></td>
    <td>Gets details of a single DeployPolicy.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists DeployPolicies in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-deployPolicyId"><code>deployPolicyId</code></a></td>
    <td>Creates a new DeployPolicy in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deployPoliciesId"><code>deployPoliciesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Updates the parameters of a single DeployPolicy.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deployPoliciesId"><code>deployPoliciesId</code></a></td>
    <td><a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single DeployPolicy.</td>
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
<tr id="parameter-deployPoliciesId">
    <td><CopyableCode code="deployPoliciesId" /></td>
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
<tr id="parameter-deployPolicyId">
    <td><CopyableCode code="deployPolicyId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
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

Gets details of a single DeployPolicy.

```sql
SELECT
name,
annotations,
createTime,
description,
etag,
labels,
rules,
selectors,
suspended,
uid,
updateTime
FROM google.clouddeploy.deploy_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND deployPoliciesId = '{{ deployPoliciesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists DeployPolicies in a given project and location.

```sql
SELECT
*
FROM google.clouddeploy.deploy_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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

Creates a new DeployPolicy in a given project and location.

```sql
INSERT INTO google.clouddeploy.deploy_policies (
data__suspended,
data__description,
data__selectors,
data__rules,
data__etag,
data__labels,
data__annotations,
projectsId,
locationsId,
requestId,
validateOnly,
deployPolicyId
)
SELECT 
{{ suspended }},
'{{ description }}',
'{{ selectors }}',
'{{ rules }}',
'{{ etag }}',
'{{ labels }}',
'{{ annotations }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ requestId }}',
'{{ validateOnly }}',
'{{ deployPolicyId }}'
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
- name: deploy_policies
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the deploy_policies resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the deploy_policies resource.
    - name: suspended
      value: {{ suspended }}
      description: |
        Optional. When suspended, the policy will not prevent actions from occurring, even if the action violates the policy.
    - name: description
      value: "{{ description }}"
      description: |
        Optional. Description of the \`DeployPolicy\`. Max length is 255 characters.
    - name: selectors
      description: |
        Required. Selected resources to which the policy will be applied. At least one selector is required. If one selector matches the resource the policy applies. For example, if there are two selectors and the action being attempted matches one of them, the policy will apply to that action.
      value:
        - deliveryPipeline:
            labels: "{{ labels }}"
            id: "{{ id }}"
          target:
            id: "{{ id }}"
            labels: "{{ labels }}"
    - name: rules
      description: |
        Required. Rules to apply. At least one rule must be present.
      value:
        - rolloutRestriction:
            timeWindows:
              oneTimeWindows:
                - startDate:
                    month: {{ month }}
                    year: {{ year }}
                    day: {{ day }}
                  startTime:
                    hours: {{ hours }}
                    seconds: {{ seconds }}
                    nanos: {{ nanos }}
                    minutes: {{ minutes }}
                  endDate:
                    month: {{ month }}
                    year: {{ year }}
                    day: {{ day }}
                  endTime:
                    hours: {{ hours }}
                    seconds: {{ seconds }}
                    nanos: {{ nanos }}
                    minutes: {{ minutes }}
              weeklyWindows:
                - endTime:
                    hours: {{ hours }}
                    seconds: {{ seconds }}
                    nanos: {{ nanos }}
                    minutes: {{ minutes }}
                  startTime:
                    hours: {{ hours }}
                    seconds: {{ seconds }}
                    nanos: {{ nanos }}
                    minutes: {{ minutes }}
                  daysOfWeek: "{{ daysOfWeek }}"
              timeZone: "{{ timeZone }}"
            invokers:
              - "{{ invokers }}"
            id: "{{ id }}"
            actions:
              - "{{ actions }}"
    - name: etag
      value: "{{ etag }}"
      description: |
        The weak etag of the \`DeployPolicy\` resource. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
    - name: labels
      value: "{{ labels }}"
      description: |
        Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
    - name: annotations
      value: "{{ annotations }}"
      description: |
        Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. Annotations must meet the following constraints: * Annotations are key/value pairs. * Valid annotation keys have two segments: an optional prefix and name, separated by a slash (\`/\`). * The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character (\`[a-z0-9A-Z]\`) with dashes (\`-\`), underscores (\`_\`), dots (\`.\`), and alphanumerics between. * The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots(\`.\`), not longer than 253 characters in total, followed by a slash (\`/\`). See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set for more details.
    - name: requestId
      value: "{{ requestId }}"
    - name: validateOnly
      value: {{ validateOnly }}
    - name: deployPolicyId
      value: "{{ deployPolicyId }}"
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

Updates the parameters of a single DeployPolicy.

```sql
UPDATE google.clouddeploy.deploy_policies
SET 
data__suspended = {{ suspended }},
data__description = '{{ description }}',
data__selectors = '{{ selectors }}',
data__rules = '{{ rules }}',
data__etag = '{{ etag }}',
data__labels = '{{ labels }}',
data__annotations = '{{ annotations }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND deployPoliciesId = '{{ deployPoliciesId }}' --required
AND updateMask = '{{ updateMask}}'
AND validateOnly = {{ validateOnly}}
AND requestId = '{{ requestId}}'
AND allowMissing = {{ allowMissing}}
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

Deletes a single DeployPolicy.

```sql
DELETE FROM google.clouddeploy.deploy_policies
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND deployPoliciesId = '{{ deployPoliciesId }}' --required
AND validateOnly = '{{ validateOnly }}'
AND allowMissing = '{{ allowMissing }}'
AND etag = '{{ etag }}'
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
