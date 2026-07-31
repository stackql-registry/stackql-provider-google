--- 
title: automations
hide_title: false
hide_table_of_contents: false
keywords:
  - automations
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

Creates, updates, deletes, gets or lists an <code>automations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="automations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.clouddeploy.automations" /></td></tr>
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
    <td>Output only. Name of the `Automation`. Format is `projects/&#123;project&#125;/locations/&#123;location&#125;/deliveryPipelines/&#123;delivery_pipeline&#125;/automations/&#123;automation&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. Annotations must meet the following constraints: * Annotations are key/value pairs. * Valid annotation keys have two segments: an optional prefix and name, separated by a slash (`/`). * The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character (`[a-z0-9A-Z]`) with dashes (`-`), underscores (`_`), dots (`.`), and alphanumerics between. * The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots(`.`), not longer than 253 characters in total, followed by a slash (`/`). See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set for more details.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the automation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the `Automation`. Max length is 255 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. The weak etag of the `Automation` resource. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be &lt;= 63 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>Required. List of Automation rules associated with the Automation resource. Must have at least one rule and limited to 250 rules per Delivery Pipeline. Note: the order of the rules here is not the same as the order of execution.</td>
</tr>
<tr>
    <td><CopyableCode code="selector" /></td>
    <td><code>object</code></td>
    <td>Required. Selected resources to which the automation will be applied. (id: AutomationResourceSelector)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources.</td>
</tr>
<tr>
    <td><CopyableCode code="suspended" /></td>
    <td><code>boolean</code></td>
    <td>Optional. When Suspended, automation is deactivated from execution.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Unique identifier of the `Automation`.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the automation was updated.</td>
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
    <td>Output only. Name of the `Automation`. Format is `projects/&#123;project&#125;/locations/&#123;location&#125;/deliveryPipelines/&#123;delivery_pipeline&#125;/automations/&#123;automation&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. Annotations must meet the following constraints: * Annotations are key/value pairs. * Valid annotation keys have two segments: an optional prefix and name, separated by a slash (`/`). * The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character (`[a-z0-9A-Z]`) with dashes (`-`), underscores (`_`), dots (`.`), and alphanumerics between. * The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots(`.`), not longer than 253 characters in total, followed by a slash (`/`). See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set for more details.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the automation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the `Automation`. Max length is 255 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. The weak etag of the `Automation` resource. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be &lt;= 63 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>Required. List of Automation rules associated with the Automation resource. Must have at least one rule and limited to 250 rules per Delivery Pipeline. Note: the order of the rules here is not the same as the order of execution.</td>
</tr>
<tr>
    <td><CopyableCode code="selector" /></td>
    <td><code>object</code></td>
    <td>Required. Selected resources to which the automation will be applied. (id: AutomationResourceSelector)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources.</td>
</tr>
<tr>
    <td><CopyableCode code="suspended" /></td>
    <td><code>boolean</code></td>
    <td>Optional. When Suspended, automation is deactivated from execution.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Unique identifier of the `Automation`.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the automation was updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deliveryPipelinesId"><code>deliveryPipelinesId</code></a>, <a href="#parameter-automationsId"><code>automationsId</code></a></td>
    <td></td>
    <td>Gets details of a single Automation.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deliveryPipelinesId"><code>deliveryPipelinesId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Automations in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deliveryPipelinesId"><code>deliveryPipelinesId</code></a></td>
    <td><a href="#parameter-automationId"><code>automationId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a new Automation in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deliveryPipelinesId"><code>deliveryPipelinesId</code></a>, <a href="#parameter-automationsId"><code>automationsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Updates the parameters of a single Automation resource.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deliveryPipelinesId"><code>deliveryPipelinesId</code></a>, <a href="#parameter-automationsId"><code>automationsId</code></a></td>
    <td><a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Deletes a single Automation resource.</td>
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
<tr id="parameter-automationsId">
    <td><CopyableCode code="automationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-deliveryPipelinesId">
    <td><CopyableCode code="deliveryPipelinesId" /></td>
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
<tr id="parameter-automationId">
    <td><CopyableCode code="automationId" /></td>
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

Gets details of a single Automation.

```sql
SELECT
name,
annotations,
createTime,
description,
etag,
labels,
rules,
selector,
serviceAccount,
suspended,
uid,
updateTime
FROM google.clouddeploy.automations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND deliveryPipelinesId = '{{ deliveryPipelinesId }}' -- required
AND automationsId = '{{ automationsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Automations in a given project and location.

```sql
SELECT
name,
annotations,
createTime,
description,
etag,
labels,
rules,
selector,
serviceAccount,
suspended,
uid,
updateTime
FROM google.clouddeploy.automations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND deliveryPipelinesId = '{{ deliveryPipelinesId }}' -- required
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

Creates a new Automation in a given project and location.

```sql
INSERT INTO google.clouddeploy.automations (
data__labels,
data__annotations,
data__etag,
data__rules,
data__serviceAccount,
data__selector,
data__description,
data__suspended,
projectsId,
locationsId,
deliveryPipelinesId,
automationId,
requestId,
validateOnly
)
SELECT 
'{{ labels }}',
'{{ annotations }}',
'{{ etag }}',
'{{ rules }}',
'{{ serviceAccount }}',
'{{ selector }}',
'{{ description }}',
{{ suspended }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ deliveryPipelinesId }}',
'{{ automationId }}',
'{{ requestId }}',
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
- name: automations
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the automations resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the automations resource.
    - name: deliveryPipelinesId
      value: "{{ deliveryPipelinesId }}"
      description: Required parameter for the automations resource.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 63 characters.
    - name: annotations
      value: "{{ annotations }}"
      description: |
        Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. Annotations must meet the following constraints: * Annotations are key/value pairs. * Valid annotation keys have two segments: an optional prefix and name, separated by a slash (\`/\`). * The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character (\`[a-z0-9A-Z]\`) with dashes (\`-\`), underscores (\`_\`), dots (\`.\`), and alphanumerics between. * The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots(\`.\`), not longer than 253 characters in total, followed by a slash (\`/\`). See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set for more details.
    - name: etag
      value: "{{ etag }}"
      description: |
        Optional. The weak etag of the \`Automation\` resource. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
    - name: rules
      description: |
        Required. List of Automation rules associated with the Automation resource. Must have at least one rule and limited to 250 rules per Delivery Pipeline. Note: the order of the rules here is not the same as the order of execution.
      value:
        - promoteReleaseRule:
            destinationPhase: "{{ destinationPhase }}"
            destinationTargetId: "{{ destinationTargetId }}"
            id: "{{ id }}"
            condition:
              targetsPresentCondition:
                status: {{ status }}
                updateTime: "{{ updateTime }}"
                missingTargets:
                  - "{{ missingTargets }}"
              timedPromoteReleaseCondition:
                nextPromotionTime: "{{ nextPromotionTime }}"
                targetsList:
                  - sourceTargetId: "{{ sourceTargetId }}"
                    destinationTargetId: "{{ destinationTargetId }}"
            wait: "{{ wait }}"
          advanceRolloutRule:
            id: "{{ id }}"
            wait: "{{ wait }}"
            sourcePhases:
              - "{{ sourcePhases }}"
            condition:
              targetsPresentCondition:
                status: {{ status }}
                updateTime: "{{ updateTime }}"
                missingTargets:
                  - "{{ missingTargets }}"
              timedPromoteReleaseCondition:
                nextPromotionTime: "{{ nextPromotionTime }}"
                targetsList:
                  - sourceTargetId: "{{ sourceTargetId }}"
                    destinationTargetId: "{{ destinationTargetId }}"
          repairRolloutRule:
            id: "{{ id }}"
            jobs:
              - "{{ jobs }}"
            phases:
              - "{{ phases }}"
            repairPhases:
              - retry:
                  attempts: "{{ attempts }}"
                  wait: "{{ wait }}"
                  backoffMode: "{{ backoffMode }}"
                rollback:
                  destinationPhase: "{{ destinationPhase }}"
                  disableRollbackIfRolloutPending: {{ disableRollbackIfRolloutPending }}
            condition:
              targetsPresentCondition:
                status: {{ status }}
                updateTime: "{{ updateTime }}"
                missingTargets:
                  - "{{ missingTargets }}"
              timedPromoteReleaseCondition:
                nextPromotionTime: "{{ nextPromotionTime }}"
                targetsList:
                  - sourceTargetId: "{{ sourceTargetId }}"
                    destinationTargetId: "{{ destinationTargetId }}"
          timedPromoteReleaseRule:
            timeZone: "{{ timeZone }}"
            destinationPhase: "{{ destinationPhase }}"
            destinationTargetId: "{{ destinationTargetId }}"
            schedule: "{{ schedule }}"
            id: "{{ id }}"
            condition:
              targetsPresentCondition:
                status: {{ status }}
                updateTime: "{{ updateTime }}"
                missingTargets:
                  - "{{ missingTargets }}"
              timedPromoteReleaseCondition:
                nextPromotionTime: "{{ nextPromotionTime }}"
                targetsList:
                  - sourceTargetId: "{{ sourceTargetId }}"
                    destinationTargetId: "{{ destinationTargetId }}"
    - name: serviceAccount
      value: "{{ serviceAccount }}"
      description: |
        Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources.
    - name: selector
      description: |
        Required. Selected resources to which the automation will be applied.
      value:
        targets:
          - id: "{{ id }}"
            labels: "{{ labels }}"
    - name: description
      value: "{{ description }}"
      description: |
        Optional. Description of the \`Automation\`. Max length is 255 characters.
    - name: suspended
      value: {{ suspended }}
      description: |
        Optional. When Suspended, automation is deactivated from execution.
    - name: automationId
      value: "{{ automationId }}"
    - name: requestId
      value: "{{ requestId }}"
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

Updates the parameters of a single Automation resource.

```sql
UPDATE google.clouddeploy.automations
SET 
data__labels = '{{ labels }}',
data__annotations = '{{ annotations }}',
data__etag = '{{ etag }}',
data__rules = '{{ rules }}',
data__serviceAccount = '{{ serviceAccount }}',
data__selector = '{{ selector }}',
data__description = '{{ description }}',
data__suspended = {{ suspended }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND deliveryPipelinesId = '{{ deliveryPipelinesId }}' --required
AND automationsId = '{{ automationsId }}' --required
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

Deletes a single Automation resource.

```sql
DELETE FROM google.clouddeploy.automations
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND deliveryPipelinesId = '{{ deliveryPipelinesId }}' --required
AND automationsId = '{{ automationsId }}' --required
AND allowMissing = '{{ allowMissing }}'
AND etag = '{{ etag }}'
AND requestId = '{{ requestId }}'
AND validateOnly = '{{ validateOnly }}'
;
```
</TabItem>
</Tabs>
