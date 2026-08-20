--- 
title: experiments
hide_title: false
hide_table_of_contents: false
keywords:
  - experiments
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

Creates, updates, deletes, gets or lists an <code>experiments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="experiments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.experiments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_agents_environments_experiments_get"
    values={[
        { label: 'projects_locations_agents_environments_experiments_get', value: 'projects_locations_agents_environments_experiments_get' },
        { label: 'projects_locations_agents_environments_experiments_list', value: 'projects_locations_agents_environments_experiments_list' }
    ]}
>
<TabItem value="projects_locations_agents_environments_experiments_get">

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
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="definition" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3ExperimentDefinition)</td>
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
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="experimentLength" /></td>
    <td><code>string (google-duration)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3ExperimentResult)</td>
</tr>
<tr>
    <td><CopyableCode code="rolloutConfig" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3RolloutConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="rolloutFailureReason" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="rolloutState" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3RolloutState)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td> (STATE_UNSPECIFIED, DRAFT, RUNNING, DONE, ROLLOUT_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="variantsHistory" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_environments_experiments_list">

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
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="definition" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3ExperimentDefinition)</td>
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
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="experimentLength" /></td>
    <td><code>string (google-duration)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3ExperimentResult)</td>
</tr>
<tr>
    <td><CopyableCode code="rolloutConfig" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3RolloutConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="rolloutFailureReason" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="rolloutState" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3RolloutState)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td> (STATE_UNSPECIFIED, DRAFT, RUNNING, DONE, ROLLOUT_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="variantsHistory" /></td>
    <td><code>array</code></td>
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
    <td><a href="#projects_locations_agents_environments_experiments_get"><CopyableCode code="projects_locations_agents_environments_experiments_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-experimentsId"><code>experimentsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_experiments_list"><CopyableCode code="projects_locations_agents_environments_experiments_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_experiments_create"><CopyableCode code="projects_locations_agents_environments_experiments_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_experiments_patch"><CopyableCode code="projects_locations_agents_environments_experiments_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-experimentsId"><code>experimentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_experiments_delete"><CopyableCode code="projects_locations_agents_environments_experiments_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-experimentsId"><code>experimentsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_experiments_start"><CopyableCode code="projects_locations_agents_environments_experiments_start" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-experimentsId"><code>experimentsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_experiments_stop"><CopyableCode code="projects_locations_agents_environments_experiments_stop" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a>, <a href="#parameter-experimentsId"><code>experimentsId</code></a></td>
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
<tr id="parameter-environmentsId">
    <td><CopyableCode code="environmentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-experimentsId">
    <td><CopyableCode code="experimentsId" /></td>
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
    defaultValue="projects_locations_agents_environments_experiments_get"
    values={[
        { label: 'projects_locations_agents_environments_experiments_get', value: 'projects_locations_agents_environments_experiments_get' },
        { label: 'projects_locations_agents_environments_experiments_list', value: 'projects_locations_agents_environments_experiments_list' }
    ]}
>
<TabItem value="projects_locations_agents_environments_experiments_get">

Successful response

```sql
SELECT
name,
createTime,
definition,
description,
displayName,
endTime,
experimentLength,
lastUpdateTime,
result,
rolloutConfig,
rolloutFailureReason,
rolloutState,
startTime,
state,
variantsHistory
FROM google.dialogflow.experiments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND experimentsId = '{{ experimentsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_agents_environments_experiments_list">

Successful response

```sql
SELECT
name,
createTime,
definition,
description,
displayName,
endTime,
experimentLength,
lastUpdateTime,
result,
rolloutConfig,
rolloutFailureReason,
rolloutState,
startTime,
state,
variantsHistory
FROM google.dialogflow.experiments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_agents_environments_experiments_create"
    values={[
        { label: 'projects_locations_agents_environments_experiments_create', value: 'projects_locations_agents_environments_experiments_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_agents_environments_experiments_create">

No description available.

```sql
INSERT INTO google.dialogflow.experiments (
data__createTime,
data__definition,
data__description,
data__displayName,
data__endTime,
data__experimentLength,
data__lastUpdateTime,
data__name,
data__result,
data__rolloutConfig,
data__rolloutFailureReason,
data__rolloutState,
data__startTime,
data__state,
data__variantsHistory,
projectsId,
locationsId,
agentsId,
environmentsId
)
SELECT 
'{{ createTime }}',
'{{ definition }}',
'{{ description }}',
'{{ displayName }}',
'{{ endTime }}',
'{{ experimentLength }}',
'{{ lastUpdateTime }}',
'{{ name }}',
'{{ result }}',
'{{ rolloutConfig }}',
'{{ rolloutFailureReason }}',
'{{ rolloutState }}',
'{{ startTime }}',
'{{ state }}',
'{{ variantsHistory }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}',
'{{ environmentsId }}'
RETURNING
name,
createTime,
definition,
description,
displayName,
endTime,
experimentLength,
lastUpdateTime,
result,
rolloutConfig,
rolloutFailureReason,
rolloutState,
startTime,
state,
variantsHistory
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: experiments
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the experiments resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the experiments resource.
    - name: agentsId
      value: "{{ agentsId }}"
      description: Required parameter for the experiments resource.
    - name: environmentsId
      value: "{{ environmentsId }}"
      description: Required parameter for the experiments resource.
    - name: createTime
      value: "{{ createTime }}"
    - name: definition
      value:
        condition: "{{ condition }}"
        versionVariants:
          variants:
            - isControlGroup: {{ isControlGroup }}
              trafficAllocation: {{ trafficAllocation }}
              version: "{{ version }}"
    - name: description
      value: "{{ description }}"
    - name: displayName
      value: "{{ displayName }}"
    - name: endTime
      value: "{{ endTime }}"
    - name: experimentLength
      value: "{{ experimentLength }}"
    - name: lastUpdateTime
      value: "{{ lastUpdateTime }}"
    - name: name
      value: "{{ name }}"
    - name: result
      value:
        lastUpdateTime: "{{ lastUpdateTime }}"
        versionMetrics:
          - metrics: "{{ metrics }}"
            sessionCount: {{ sessionCount }}
            version: "{{ version }}"
    - name: rolloutConfig
      value:
        failureCondition: "{{ failureCondition }}"
        rolloutCondition: "{{ rolloutCondition }}"
        rolloutSteps:
          - displayName: "{{ displayName }}"
            minDuration: "{{ minDuration }}"
            trafficPercent: {{ trafficPercent }}
    - name: rolloutFailureReason
      value: "{{ rolloutFailureReason }}"
    - name: rolloutState
      value:
        startTime: "{{ startTime }}"
        step: "{{ step }}"
        stepIndex: {{ stepIndex }}
    - name: startTime
      value: "{{ startTime }}"
    - name: state
      value: "{{ state }}"
      valid_values: ['STATE_UNSPECIFIED', 'DRAFT', 'RUNNING', 'DONE', 'ROLLOUT_FAILED']
    - name: variantsHistory
      value:
        - updateTime: "{{ updateTime }}"
          versionVariants:
            variants:
              - isControlGroup: {{ isControlGroup }}
                trafficAllocation: {{ trafficAllocation }}
                version: "{{ version }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_agents_environments_experiments_patch"
    values={[
        { label: 'projects_locations_agents_environments_experiments_patch', value: 'projects_locations_agents_environments_experiments_patch' }
    ]}
>
<TabItem value="projects_locations_agents_environments_experiments_patch">

No description available.

```sql
UPDATE google.dialogflow.experiments
SET 
data__createTime = '{{ createTime }}',
data__definition = '{{ definition }}',
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__endTime = '{{ endTime }}',
data__experimentLength = '{{ experimentLength }}',
data__lastUpdateTime = '{{ lastUpdateTime }}',
data__name = '{{ name }}',
data__result = '{{ result }}',
data__rolloutConfig = '{{ rolloutConfig }}',
data__rolloutFailureReason = '{{ rolloutFailureReason }}',
data__rolloutState = '{{ rolloutState }}',
data__startTime = '{{ startTime }}',
data__state = '{{ state }}',
data__variantsHistory = '{{ variantsHistory }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND experimentsId = '{{ experimentsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
definition,
description,
displayName,
endTime,
experimentLength,
lastUpdateTime,
result,
rolloutConfig,
rolloutFailureReason,
rolloutState,
startTime,
state,
variantsHistory;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_agents_environments_experiments_delete"
    values={[
        { label: 'projects_locations_agents_environments_experiments_delete', value: 'projects_locations_agents_environments_experiments_delete' }
    ]}
>
<TabItem value="projects_locations_agents_environments_experiments_delete">

No description available.

```sql
DELETE FROM google.dialogflow.experiments
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
AND experimentsId = '{{ experimentsId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_agents_environments_experiments_start"
    values={[
        { label: 'projects_locations_agents_environments_experiments_start', value: 'projects_locations_agents_environments_experiments_start' },
        { label: 'projects_locations_agents_environments_experiments_stop', value: 'projects_locations_agents_environments_experiments_stop' }
    ]}
>
<TabItem value="projects_locations_agents_environments_experiments_start">

Successful response

```sql
EXEC google.dialogflow.experiments.projects_locations_agents_environments_experiments_start 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required, 
@experimentsId='{{ experimentsId }}' --required
;
```
</TabItem>
<TabItem value="projects_locations_agents_environments_experiments_stop">

Successful response

```sql
EXEC google.dialogflow.experiments.projects_locations_agents_environments_experiments_stop 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required, 
@experimentsId='{{ experimentsId }}' --required
;
```
</TabItem>
</Tabs>
