--- 
title: examples
hide_title: false
hide_table_of_contents: false
keywords:
  - examples
  - dialogflow
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

Creates, updates, deletes, gets or lists an <code>examples</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="examples" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.examples" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_agents_playbooks_examples_get"
    values={[
        { label: 'projects_locations_agents_playbooks_examples_get', value: 'projects_locations_agents_playbooks_examples_get' },
        { label: 'projects_locations_agents_playbooks_examples_list', value: 'projects_locations_agents_playbooks_examples_list' }
    ]}
>
<TabItem value="projects_locations_agents_playbooks_examples_get">

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
    <td><CopyableCode code="actions" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="conversationState" /></td>
    <td><code>string</code></td>
    <td> (OUTPUT_STATE_UNSPECIFIED, OUTPUT_STATE_OK, OUTPUT_STATE_CANCELLED, OUTPUT_STATE_FAILED, OUTPUT_STATE_ESCALATED, OUTPUT_STATE_PENDING)</td>
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
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="languageCode" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="playbookInput" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3PlaybookInput)</td>
</tr>
<tr>
    <td><CopyableCode code="playbookOutput" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3PlaybookOutput)</td>
</tr>
<tr>
    <td><CopyableCode code="tokenCount" /></td>
    <td><code>string (int64)</code></td>
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
<TabItem value="projects_locations_agents_playbooks_examples_list">

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
    <td><CopyableCode code="actions" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="conversationState" /></td>
    <td><code>string</code></td>
    <td> (OUTPUT_STATE_UNSPECIFIED, OUTPUT_STATE_OK, OUTPUT_STATE_CANCELLED, OUTPUT_STATE_FAILED, OUTPUT_STATE_ESCALATED, OUTPUT_STATE_PENDING)</td>
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
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="languageCode" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="playbookInput" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3PlaybookInput)</td>
</tr>
<tr>
    <td><CopyableCode code="playbookOutput" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3PlaybookOutput)</td>
</tr>
<tr>
    <td><CopyableCode code="tokenCount" /></td>
    <td><code>string (int64)</code></td>
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
    <td><a href="#projects_locations_agents_playbooks_examples_get"><CopyableCode code="projects_locations_agents_playbooks_examples_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-playbooksId"><code>playbooksId</code></a>, <a href="#parameter-examplesId"><code>examplesId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_playbooks_examples_list"><CopyableCode code="projects_locations_agents_playbooks_examples_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-playbooksId"><code>playbooksId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_playbooks_examples_create"><CopyableCode code="projects_locations_agents_playbooks_examples_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-playbooksId"><code>playbooksId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_playbooks_examples_patch"><CopyableCode code="projects_locations_agents_playbooks_examples_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-playbooksId"><code>playbooksId</code></a>, <a href="#parameter-examplesId"><code>examplesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_playbooks_examples_delete"><CopyableCode code="projects_locations_agents_playbooks_examples_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-playbooksId"><code>playbooksId</code></a>, <a href="#parameter-examplesId"><code>examplesId</code></a></td>
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
<tr id="parameter-agentsId">
    <td><CopyableCode code="agentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-examplesId">
    <td><CopyableCode code="examplesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-playbooksId">
    <td><CopyableCode code="playbooksId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-languageCode">
    <td><CopyableCode code="languageCode" /></td>
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
    defaultValue="projects_locations_agents_playbooks_examples_get"
    values={[
        { label: 'projects_locations_agents_playbooks_examples_get', value: 'projects_locations_agents_playbooks_examples_get' },
        { label: 'projects_locations_agents_playbooks_examples_list', value: 'projects_locations_agents_playbooks_examples_list' }
    ]}
>
<TabItem value="projects_locations_agents_playbooks_examples_get">

Successful response

```sql
SELECT
name,
actions,
conversationState,
createTime,
description,
displayName,
languageCode,
playbookInput,
playbookOutput,
tokenCount,
updateTime
FROM google.dialogflow.examples
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND playbooksId = '{{ playbooksId }}' -- required
AND examplesId = '{{ examplesId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_agents_playbooks_examples_list">

Successful response

```sql
SELECT
name,
actions,
conversationState,
createTime,
description,
displayName,
languageCode,
playbookInput,
playbookOutput,
tokenCount,
updateTime
FROM google.dialogflow.examples
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND playbooksId = '{{ playbooksId }}' -- required
AND languageCode = '{{ languageCode }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_agents_playbooks_examples_create"
    values={[
        { label: 'projects_locations_agents_playbooks_examples_create', value: 'projects_locations_agents_playbooks_examples_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_agents_playbooks_examples_create">

No description available.

```sql
INSERT INTO google.dialogflow.examples (
data__actions,
data__conversationState,
data__description,
data__displayName,
data__languageCode,
data__name,
data__playbookInput,
data__playbookOutput,
projectsId,
locationsId,
agentsId,
playbooksId
)
SELECT 
'{{ actions }}',
'{{ conversationState }}',
'{{ description }}',
'{{ displayName }}',
'{{ languageCode }}',
'{{ name }}',
'{{ playbookInput }}',
'{{ playbookOutput }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}',
'{{ playbooksId }}'
RETURNING
name,
actions,
conversationState,
createTime,
description,
displayName,
languageCode,
playbookInput,
playbookOutput,
tokenCount,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: examples
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the examples resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the examples resource.
    - name: agentsId
      value: "{{ agentsId }}"
      description: Required parameter for the examples resource.
    - name: playbooksId
      value: "{{ playbooksId }}"
      description: Required parameter for the examples resource.
    - name: actions
      value:
        - agentUtterance:
            text: "{{ text }}"
          flowInvocation:
            displayName: "{{ displayName }}"
            flow: "{{ flow }}"
            flowState: "{{ flowState }}"
          flowTransition:
            displayName: "{{ displayName }}"
            flow: "{{ flow }}"
          playbookInvocation:
            displayName: "{{ displayName }}"
            playbook: "{{ playbook }}"
            playbookInput:
              precedingConversationSummary: "{{ precedingConversationSummary }}"
            playbookOutput:
              executionSummary: "{{ executionSummary }}"
            playbookState: "{{ playbookState }}"
          playbookTransition:
            displayName: "{{ displayName }}"
            playbook: "{{ playbook }}"
          toolUse:
            action: "{{ action }}"
            displayName: "{{ displayName }}"
            inputActionParameters: "{{ inputActionParameters }}"
            outputActionParameters: "{{ outputActionParameters }}"
            tool: "{{ tool }}"
          userUtterance:
            text: "{{ text }}"
    - name: conversationState
      value: "{{ conversationState }}"
      valid_values: ['OUTPUT_STATE_UNSPECIFIED', 'OUTPUT_STATE_OK', 'OUTPUT_STATE_CANCELLED', 'OUTPUT_STATE_FAILED', 'OUTPUT_STATE_ESCALATED', 'OUTPUT_STATE_PENDING']
    - name: description
      value: "{{ description }}"
    - name: displayName
      value: "{{ displayName }}"
    - name: languageCode
      value: "{{ languageCode }}"
    - name: name
      value: "{{ name }}"
    - name: playbookInput
      value:
        precedingConversationSummary: "{{ precedingConversationSummary }}"
    - name: playbookOutput
      value:
        executionSummary: "{{ executionSummary }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_agents_playbooks_examples_patch"
    values={[
        { label: 'projects_locations_agents_playbooks_examples_patch', value: 'projects_locations_agents_playbooks_examples_patch' }
    ]}
>
<TabItem value="projects_locations_agents_playbooks_examples_patch">

No description available.

```sql
UPDATE google.dialogflow.examples
SET 
data__actions = '{{ actions }}',
data__conversationState = '{{ conversationState }}',
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__languageCode = '{{ languageCode }}',
data__name = '{{ name }}',
data__playbookInput = '{{ playbookInput }}',
data__playbookOutput = '{{ playbookOutput }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND playbooksId = '{{ playbooksId }}' --required
AND examplesId = '{{ examplesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
actions,
conversationState,
createTime,
description,
displayName,
languageCode,
playbookInput,
playbookOutput,
tokenCount,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_agents_playbooks_examples_delete"
    values={[
        { label: 'projects_locations_agents_playbooks_examples_delete', value: 'projects_locations_agents_playbooks_examples_delete' }
    ]}
>
<TabItem value="projects_locations_agents_playbooks_examples_delete">

No description available.

```sql
DELETE FROM google.dialogflow.examples
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND playbooksId = '{{ playbooksId }}' --required
AND examplesId = '{{ examplesId }}' --required
;
```
</TabItem>
</Tabs>
