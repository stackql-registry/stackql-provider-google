--- 
title: security_feedback
hide_title: false
hide_table_of_contents: false
keywords:
  - security_feedback
  - apigee
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

Creates, updates, deletes, gets or lists a <code>security_feedback</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_feedback" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.security_feedback" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_security_feedback_get"
    values={[
        { label: 'organizations_security_feedback_get', value: 'organizations_security_feedback_get' },
        { label: 'organizations_security_feedback_list', value: 'organizations_security_feedback_list' }
    ]}
>
<TabItem value="organizations_security_feedback_get">

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
    <td>Output only. Identifier. The feedback name is intended to be a system-generated uuid.</td>
</tr>
<tr>
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td>Optional. Optional text the user can provide for additional, unstructured context.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when this specific feedback id was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The display name of the feedback.</td>
</tr>
<tr>
    <td><CopyableCode code="feedbackContexts" /></td>
    <td><code>array</code></td>
    <td>Required. One or more attribute/value pairs for constraining the feedback.</td>
</tr>
<tr>
    <td><CopyableCode code="feedbackType" /></td>
    <td><code>string</code></td>
    <td>Required. The type of feedback being submitted. (FEEDBACK_TYPE_UNSPECIFIED, EXCLUDED_DETECTION)</td>
</tr>
<tr>
    <td><CopyableCode code="reason" /></td>
    <td><code>string</code></td>
    <td>Optional. The reason for the feedback. (REASON_UNSPECIFIED, INTERNAL_SYSTEM, NON_RISK_CLIENT, NAT, PENETRATION_TEST, OTHER)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when this specific feedback id was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_security_feedback_list">

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
    <td>Output only. Identifier. The feedback name is intended to be a system-generated uuid.</td>
</tr>
<tr>
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td>Optional. Optional text the user can provide for additional, unstructured context.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when this specific feedback id was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The display name of the feedback.</td>
</tr>
<tr>
    <td><CopyableCode code="feedbackContexts" /></td>
    <td><code>array</code></td>
    <td>Required. One or more attribute/value pairs for constraining the feedback.</td>
</tr>
<tr>
    <td><CopyableCode code="feedbackType" /></td>
    <td><code>string</code></td>
    <td>Required. The type of feedback being submitted. (FEEDBACK_TYPE_UNSPECIFIED, EXCLUDED_DETECTION)</td>
</tr>
<tr>
    <td><CopyableCode code="reason" /></td>
    <td><code>string</code></td>
    <td>Optional. The reason for the feedback. (REASON_UNSPECIFIED, INTERNAL_SYSTEM, NON_RISK_CLIENT, NAT, PENETRATION_TEST, OTHER)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when this specific feedback id was updated.</td>
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
    <td><a href="#organizations_security_feedback_get"><CopyableCode code="organizations_security_feedback_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-securityFeedbackId"><code>securityFeedbackId</code></a></td>
    <td></td>
    <td>Gets a specific customer feedback report.</td>
</tr>
<tr>
    <td><a href="#organizations_security_feedback_list"><CopyableCode code="organizations_security_feedback_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists all feedback reports which have already been submitted.</td>
</tr>
<tr>
    <td><a href="#organizations_security_feedback_create"><CopyableCode code="organizations_security_feedback_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-securityFeedbackId"><code>securityFeedbackId</code></a></td>
    <td>Creates a new report containing customer feedback.</td>
</tr>
<tr>
    <td><a href="#organizations_security_feedback_patch"><CopyableCode code="organizations_security_feedback_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-securityFeedbackId"><code>securityFeedbackId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a specific feedback report.</td>
</tr>
<tr>
    <td><a href="#organizations_security_feedback_delete"><CopyableCode code="organizations_security_feedback_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-securityFeedbackId"><code>securityFeedbackId</code></a></td>
    <td></td>
    <td>Deletes a specific feedback report. Used for "undo" of a feedback submission.</td>
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
<tr id="parameter-securityFeedbackId">
    <td><CopyableCode code="securityFeedbackId" /></td>
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
<tr id="parameter-securityFeedbackId">
    <td><CopyableCode code="securityFeedbackId" /></td>
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
    defaultValue="organizations_security_feedback_get"
    values={[
        { label: 'organizations_security_feedback_get', value: 'organizations_security_feedback_get' },
        { label: 'organizations_security_feedback_list', value: 'organizations_security_feedback_list' }
    ]}
>
<TabItem value="organizations_security_feedback_get">

Gets a specific customer feedback report.

```sql
SELECT
name,
comment,
createTime,
displayName,
feedbackContexts,
feedbackType,
reason,
updateTime
FROM google.apigee.security_feedback
WHERE organizationsId = '{{ organizationsId }}' -- required
AND securityFeedbackId = '{{ securityFeedbackId }}' -- required
;
```
</TabItem>
<TabItem value="organizations_security_feedback_list">

Lists all feedback reports which have already been submitted.

```sql
SELECT
name,
comment,
createTime,
displayName,
feedbackContexts,
feedbackType,
reason,
updateTime
FROM google.apigee.security_feedback
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_security_feedback_create"
    values={[
        { label: 'organizations_security_feedback_create', value: 'organizations_security_feedback_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_security_feedback_create">

Creates a new report containing customer feedback.

```sql
INSERT INTO google.apigee.security_feedback (
data__displayName,
data__comment,
data__feedbackType,
data__reason,
data__feedbackContexts,
organizationsId,
securityFeedbackId
)
SELECT 
'{{ displayName }}',
'{{ comment }}',
'{{ feedbackType }}',
'{{ reason }}',
'{{ feedbackContexts }}',
'{{ organizationsId }}',
'{{ securityFeedbackId }}'
RETURNING
name,
comment,
createTime,
displayName,
feedbackContexts,
feedbackType,
reason,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: security_feedback
  props:
    - name: organizationsId
      value: "{{ organizationsId }}"
      description: Required parameter for the security_feedback resource.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Optional. The display name of the feedback.
    - name: comment
      value: "{{ comment }}"
      description: |
        Optional. Optional text the user can provide for additional, unstructured context.
    - name: feedbackType
      value: "{{ feedbackType }}"
      description: |
        Required. The type of feedback being submitted.
      valid_values: ['FEEDBACK_TYPE_UNSPECIFIED', 'EXCLUDED_DETECTION']
    - name: reason
      value: "{{ reason }}"
      description: |
        Optional. The reason for the feedback.
      valid_values: ['REASON_UNSPECIFIED', 'INTERNAL_SYSTEM', 'NON_RISK_CLIENT', 'NAT', 'PENETRATION_TEST', 'OTHER']
    - name: feedbackContexts
      description: |
        Required. One or more attribute/value pairs for constraining the feedback.
      value:
        - values: "{{ values }}"
          attribute: "{{ attribute }}"
    - name: securityFeedbackId
      value: "{{ securityFeedbackId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_security_feedback_patch"
    values={[
        { label: 'organizations_security_feedback_patch', value: 'organizations_security_feedback_patch' }
    ]}
>
<TabItem value="organizations_security_feedback_patch">

Updates a specific feedback report.

```sql
UPDATE google.apigee.security_feedback
SET 
data__displayName = '{{ displayName }}',
data__comment = '{{ comment }}',
data__feedbackType = '{{ feedbackType }}',
data__reason = '{{ reason }}',
data__feedbackContexts = '{{ feedbackContexts }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND securityFeedbackId = '{{ securityFeedbackId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
comment,
createTime,
displayName,
feedbackContexts,
feedbackType,
reason,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_security_feedback_delete"
    values={[
        { label: 'organizations_security_feedback_delete', value: 'organizations_security_feedback_delete' }
    ]}
>
<TabItem value="organizations_security_feedback_delete">

Deletes a specific feedback report. Used for "undo" of a feedback submission.

```sql
DELETE FROM google.apigee.security_feedback
WHERE organizationsId = '{{ organizationsId }}' --required
AND securityFeedbackId = '{{ securityFeedbackId }}' --required
;
```
</TabItem>
</Tabs>
