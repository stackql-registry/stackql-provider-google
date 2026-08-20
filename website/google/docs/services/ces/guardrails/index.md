--- 
title: guardrails
hide_title: false
hide_table_of_contents: false
keywords:
  - guardrails
  - ces
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

Creates, updates, deletes, gets or lists a <code>guardrails</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="guardrails" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.ces.guardrails" /></td></tr>
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
    <td>Identifier. The unique identifier of the guardrail. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/guardrails/&#123;guardrail&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>object</code></td>
    <td>Optional. Action to take when the guardrail is triggered. (id: TriggerAction)</td>
</tr>
<tr>
    <td><CopyableCode code="codeCallback" /></td>
    <td><code>object</code></td>
    <td>Optional. Guardrail that potentially blocks the conversation based on the result of the callback execution. (id: GuardrailCodeCallback)</td>
</tr>
<tr>
    <td><CopyableCode code="contentFilter" /></td>
    <td><code>object</code></td>
    <td>Optional. Guardrail that bans certain content from being used in the conversation. (id: GuardrailContentFilter)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the guardrail was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the guardrail.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Display name of the guardrail.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the guardrail is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.</td>
</tr>
<tr>
    <td><CopyableCode code="llmPolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. Guardrail that blocks the conversation if the LLM response is considered violating the policy based on the LLM classification. (id: GuardrailLlmPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="llmPromptSecurity" /></td>
    <td><code>object</code></td>
    <td>Optional. Guardrail that blocks the conversation if the prompt is considered unsafe based on the LLM classification. (id: GuardrailLlmPromptSecurity)</td>
</tr>
<tr>
    <td><CopyableCode code="modelSafety" /></td>
    <td><code>object</code></td>
    <td>Optional. Guardrail that blocks the conversation if the LLM response is considered unsafe based on the model safety settings. (id: GuardrailModelSafety)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the guardrail was last updated.</td>
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
    <td>Identifier. The unique identifier of the guardrail. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/guardrails/&#123;guardrail&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>object</code></td>
    <td>Optional. Action to take when the guardrail is triggered. (id: TriggerAction)</td>
</tr>
<tr>
    <td><CopyableCode code="codeCallback" /></td>
    <td><code>object</code></td>
    <td>Optional. Guardrail that potentially blocks the conversation based on the result of the callback execution. (id: GuardrailCodeCallback)</td>
</tr>
<tr>
    <td><CopyableCode code="contentFilter" /></td>
    <td><code>object</code></td>
    <td>Optional. Guardrail that bans certain content from being used in the conversation. (id: GuardrailContentFilter)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the guardrail was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the guardrail.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Display name of the guardrail.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the guardrail is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.</td>
</tr>
<tr>
    <td><CopyableCode code="llmPolicy" /></td>
    <td><code>object</code></td>
    <td>Optional. Guardrail that blocks the conversation if the LLM response is considered violating the policy based on the LLM classification. (id: GuardrailLlmPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="llmPromptSecurity" /></td>
    <td><code>object</code></td>
    <td>Optional. Guardrail that blocks the conversation if the prompt is considered unsafe based on the LLM classification. (id: GuardrailLlmPromptSecurity)</td>
</tr>
<tr>
    <td><CopyableCode code="modelSafety" /></td>
    <td><code>object</code></td>
    <td>Optional. Guardrail that blocks the conversation if the LLM response is considered unsafe based on the model safety settings. (id: GuardrailModelSafety)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the guardrail was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-guardrailsId"><code>guardrailsId</code></a></td>
    <td></td>
    <td>Gets details of the specified guardrail.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists guardrails in the given app.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td><a href="#parameter-guardrailId"><code>guardrailId</code></a></td>
    <td>Creates a new guardrail in the given app.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-guardrailsId"><code>guardrailsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified guardrail.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-guardrailsId"><code>guardrailsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes the specified guardrail.</td>
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
<tr id="parameter-appsId">
    <td><CopyableCode code="appsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-guardrailsId">
    <td><CopyableCode code="guardrailsId" /></td>
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
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-guardrailId">
    <td><CopyableCode code="guardrailId" /></td>
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

Gets details of the specified guardrail.

```sql
SELECT
name,
action,
codeCallback,
contentFilter,
createTime,
description,
displayName,
enabled,
etag,
llmPolicy,
llmPromptSecurity,
modelSafety,
updateTime
FROM google.ces.guardrails
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND appsId = '{{ appsId }}' -- required
AND guardrailsId = '{{ guardrailsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists guardrails in the given app.

```sql
SELECT
name,
action,
codeCallback,
contentFilter,
createTime,
description,
displayName,
enabled,
etag,
llmPolicy,
llmPromptSecurity,
modelSafety,
updateTime
FROM google.ces.guardrails
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND appsId = '{{ appsId }}' -- required
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
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a new guardrail in the given app.

```sql
INSERT INTO google.ces.guardrails (
data__action,
data__codeCallback,
data__contentFilter,
data__description,
data__displayName,
data__enabled,
data__etag,
data__llmPolicy,
data__llmPromptSecurity,
data__modelSafety,
data__name,
projectsId,
locationsId,
appsId,
guardrailId
)
SELECT 
'{{ action }}',
'{{ codeCallback }}',
'{{ contentFilter }}',
'{{ description }}',
'{{ displayName }}',
{{ enabled }},
'{{ etag }}',
'{{ llmPolicy }}',
'{{ llmPromptSecurity }}',
'{{ modelSafety }}',
'{{ name }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ appsId }}',
'{{ guardrailId }}'
RETURNING
name,
action,
codeCallback,
contentFilter,
createTime,
description,
displayName,
enabled,
etag,
llmPolicy,
llmPromptSecurity,
modelSafety,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: guardrails
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the guardrails resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the guardrails resource.
    - name: appsId
      value: "{{ appsId }}"
      description: Required parameter for the guardrails resource.
    - name: action
      description: |
        Optional. Action to take when the guardrail is triggered.
      value:
        generativeAnswer:
          prompt: "{{ prompt }}"
        respondImmediately:
          responses:
            - disabled: {{ disabled }}
              text: "{{ text }}"
        transferAgent:
          agent: "{{ agent }}"
    - name: codeCallback
      description: |
        Optional. Guardrail that potentially blocks the conversation based on the result of the callback execution.
      value:
        afterAgentCallback:
          description: "{{ description }}"
          disabled: {{ disabled }}
          proactiveExecutionEnabled: {{ proactiveExecutionEnabled }}
          pythonCode: "{{ pythonCode }}"
        afterModelCallback:
          description: "{{ description }}"
          disabled: {{ disabled }}
          proactiveExecutionEnabled: {{ proactiveExecutionEnabled }}
          pythonCode: "{{ pythonCode }}"
        beforeAgentCallback:
          description: "{{ description }}"
          disabled: {{ disabled }}
          proactiveExecutionEnabled: {{ proactiveExecutionEnabled }}
          pythonCode: "{{ pythonCode }}"
        beforeModelCallback:
          description: "{{ description }}"
          disabled: {{ disabled }}
          proactiveExecutionEnabled: {{ proactiveExecutionEnabled }}
          pythonCode: "{{ pythonCode }}"
    - name: contentFilter
      description: |
        Optional. Guardrail that bans certain content from being used in the conversation.
      value:
        bannedContents:
          - "{{ bannedContents }}"
        bannedContentsInAgentResponse:
          - "{{ bannedContentsInAgentResponse }}"
        bannedContentsInUserInput:
          - "{{ bannedContentsInUserInput }}"
        disregardDiacritics: {{ disregardDiacritics }}
        matchType: "{{ matchType }}"
    - name: description
      value: "{{ description }}"
      description: |
        Optional. Description of the guardrail.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. Display name of the guardrail.
    - name: enabled
      value: {{ enabled }}
      description: |
        Optional. Whether the guardrail is enabled.
    - name: etag
      value: "{{ etag }}"
      description: |
        Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.
    - name: llmPolicy
      description: |
        Optional. Guardrail that blocks the conversation if the LLM response is considered violating the policy based on the LLM classification.
      value:
        allowShortUtterance: {{ allowShortUtterance }}
        failOpen: {{ failOpen }}
        maxConversationMessages: {{ maxConversationMessages }}
        modelSettings:
          model: "{{ model }}"
          temperature: {{ temperature }}
        policyScope: "{{ policyScope }}"
        prompt: "{{ prompt }}"
    - name: llmPromptSecurity
      description: |
        Optional. Guardrail that blocks the conversation if the prompt is considered unsafe based on the LLM classification.
      value:
        customPolicy:
          allowShortUtterance: {{ allowShortUtterance }}
          failOpen: {{ failOpen }}
          maxConversationMessages: {{ maxConversationMessages }}
          modelSettings:
            model: "{{ model }}"
            temperature: {{ temperature }}
          policyScope: "{{ policyScope }}"
          prompt: "{{ prompt }}"
        defaultSettings:
          defaultPromptTemplate: "{{ defaultPromptTemplate }}"
        failOpen: {{ failOpen }}
    - name: modelSafety
      description: |
        Optional. Guardrail that blocks the conversation if the LLM response is considered unsafe based on the model safety settings.
      value:
        safetySettings:
          - category: "{{ category }}"
            threshold: "{{ threshold }}"
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The unique identifier of the guardrail. Format: \`projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}\`
    - name: guardrailId
      value: "{{ guardrailId }}"
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

Updates the specified guardrail.

```sql
UPDATE google.ces.guardrails
SET 
data__action = '{{ action }}',
data__codeCallback = '{{ codeCallback }}',
data__contentFilter = '{{ contentFilter }}',
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__enabled = {{ enabled }},
data__etag = '{{ etag }}',
data__llmPolicy = '{{ llmPolicy }}',
data__llmPromptSecurity = '{{ llmPromptSecurity }}',
data__modelSafety = '{{ modelSafety }}',
data__name = '{{ name }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND appsId = '{{ appsId }}' --required
AND guardrailsId = '{{ guardrailsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
action,
codeCallback,
contentFilter,
createTime,
description,
displayName,
enabled,
etag,
llmPolicy,
llmPromptSecurity,
modelSafety,
updateTime;
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

Deletes the specified guardrail.

```sql
DELETE FROM google.ces.guardrails
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND appsId = '{{ appsId }}' --required
AND guardrailsId = '{{ guardrailsId }}' --required
AND etag = '{{ etag }}'
AND force = '{{ force }}'
;
```
</TabItem>
</Tabs>
