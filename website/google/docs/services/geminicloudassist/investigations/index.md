--- 
title: investigations
hide_title: false
hide_table_of_contents: false
keywords:
  - investigations
  - geminicloudassist
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

Creates, updates, deletes, gets or lists an <code>investigations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="investigations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.geminicloudassist.investigations" /></td></tr>
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
    <td>Identifier. Name of the investigation, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/investigations/&#123;investigation_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Additional annotations on the investigation. (id: InvestigationAnnotations)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the investigation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. The error if the investigation run failed. This field will only be set if `execution_state` is `INVESTIGATION_EXECUTION_STATE_FAILED`. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="executionState" /></td>
    <td><code>string</code></td>
    <td>Output only. The execution state of the investigation. (INVESTIGATION_EXECUTION_STATE_UNSPECIFIED, INVESTIGATION_EXECUTION_STATE_RUNNING, INVESTIGATION_EXECUTION_STATE_MODIFIED, INVESTIGATION_EXECUTION_STATE_FAILED, INVESTIGATION_EXECUTION_STATE_CANCELLED, INVESTIGATION_EXECUTION_STATE_COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the investigation.</td>
</tr>
<tr>
    <td><CopyableCode code="observations" /></td>
    <td><code>object</code></td>
    <td>Optional. Observations about the project state that comprise the contents of the investigation.</td>
</tr>
<tr>
    <td><CopyableCode code="observerStatuses" /></td>
    <td><code>object</code></td>
    <td>Optional. Statuses of observers which have been invoked in order to run the investigation.</td>
</tr>
<tr>
    <td><CopyableCode code="operation" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the Run operation most recently performed on the investigation, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/operations/&#123;operation_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>string</code></td>
    <td>Output only. Resource name of the investigation's current revision, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/investigations/&#123;investigation_id&#125;/revisions/&#123;revision_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="revisionIndex" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Index of the current revision of the investigation.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionPredecessor" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the revision that was this revision's predecessor.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Optional. Human-readable display title for the investigation.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the investigation was last updated.</td>
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
    <td>Identifier. Name of the investigation, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/investigations/&#123;investigation_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Additional annotations on the investigation. (id: InvestigationAnnotations)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the investigation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Output only. The error if the investigation run failed. This field will only be set if `execution_state` is `INVESTIGATION_EXECUTION_STATE_FAILED`. (id: Status)</td>
</tr>
<tr>
    <td><CopyableCode code="executionState" /></td>
    <td><code>string</code></td>
    <td>Output only. The execution state of the investigation. (INVESTIGATION_EXECUTION_STATE_UNSPECIFIED, INVESTIGATION_EXECUTION_STATE_RUNNING, INVESTIGATION_EXECUTION_STATE_MODIFIED, INVESTIGATION_EXECUTION_STATE_FAILED, INVESTIGATION_EXECUTION_STATE_CANCELLED, INVESTIGATION_EXECUTION_STATE_COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the investigation.</td>
</tr>
<tr>
    <td><CopyableCode code="observations" /></td>
    <td><code>object</code></td>
    <td>Optional. Observations about the project state that comprise the contents of the investigation.</td>
</tr>
<tr>
    <td><CopyableCode code="observerStatuses" /></td>
    <td><code>object</code></td>
    <td>Optional. Statuses of observers which have been invoked in order to run the investigation.</td>
</tr>
<tr>
    <td><CopyableCode code="operation" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the Run operation most recently performed on the investigation, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/operations/&#123;operation_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>string</code></td>
    <td>Output only. Resource name of the investigation's current revision, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/investigations/&#123;investigation_id&#125;/revisions/&#123;revision_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="revisionIndex" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Index of the current revision of the investigation.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionPredecessor" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the revision that was this revision's predecessor.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Optional. Human-readable display title for the investigation.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the investigation was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-investigationsId"><code>investigationsId</code></a></td>
    <td></td>
    <td>Gets details of a single Investigation.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists Investigations in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-investigationId"><code>investigationId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Deprecated: Investigations should only be created by the agent. Creates a new Investigation in a given project.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-investigationsId"><code>investigationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Deprecated: Investigations should only be modified by the agent. Updates the parameters of a single Investigation.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-investigationsId"><code>investigationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single Investigation.</td>
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
<tr id="parameter-investigationsId">
    <td><CopyableCode code="investigationsId" /></td>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-investigationId">
    <td><CopyableCode code="investigationId" /></td>
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

Gets details of a single Investigation.

```sql
SELECT
name,
annotations,
createTime,
error,
executionState,
labels,
observations,
observerStatuses,
operation,
revision,
revisionIndex,
revisionPredecessor,
title,
updateTime
FROM google.geminicloudassist.investigations
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND investigationsId = '{{ investigationsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Investigations in a given project and location.

```sql
SELECT
name,
annotations,
createTime,
error,
executionState,
labels,
observations,
observerStatuses,
operation,
revision,
revisionIndex,
revisionPredecessor,
title,
updateTime
FROM google.geminicloudassist.investigations
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
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Deprecated: Investigations should only be created by the agent. Creates a new Investigation in a given project.

```sql
INSERT INTO google.geminicloudassist.investigations (
data__annotations,
data__labels,
data__name,
data__observations,
data__observerStatuses,
data__revisionPredecessor,
data__title,
projectsId,
locationsId,
investigationId,
requestId,
validateOnly
)
SELECT 
'{{ annotations }}',
'{{ labels }}',
'{{ name }}',
'{{ observations }}',
'{{ observerStatuses }}',
'{{ revisionPredecessor }}',
'{{ title }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ investigationId }}',
'{{ requestId }}',
'{{ validateOnly }}'
RETURNING
name,
annotations,
createTime,
error,
executionState,
labels,
observations,
observerStatuses,
operation,
revision,
revisionIndex,
revisionPredecessor,
title,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: investigations
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the investigations resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the investigations resource.
    - name: annotations
      description: |
        Optional. Additional annotations on the investigation.
      value:
        extrasMap: "{{ extrasMap }}"
        pagePath: "{{ pagePath }}"
        revisionLastRunInterval:
          endTime: "{{ endTime }}"
          startTime: "{{ startTime }}"
        supportCase: "{{ supportCase }}"
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. User-defined labels for the investigation.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. Name of the investigation, of the form: projects/{project_number}/locations/{location_id}/investigations/{investigation_id}
    - name: observations
      value: "{{ observations }}"
      description: |
        Optional. Observations about the project state that comprise the contents of the investigation.
    - name: observerStatuses
      value: "{{ observerStatuses }}"
      description: |
        Optional. Statuses of observers which have been invoked in order to run the investigation.
    - name: revisionPredecessor
      value: "{{ revisionPredecessor }}"
      description: |
        Optional. The name of the revision that was this revision's predecessor.
    - name: title
      value: "{{ title }}"
      description: |
        Optional. Human-readable display title for the investigation.
    - name: investigationId
      value: "{{ investigationId }}"
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

Deprecated: Investigations should only be modified by the agent. Updates the parameters of a single Investigation.

```sql
UPDATE google.geminicloudassist.investigations
SET 
data__annotations = '{{ annotations }}',
data__labels = '{{ labels }}',
data__name = '{{ name }}',
data__observations = '{{ observations }}',
data__observerStatuses = '{{ observerStatuses }}',
data__revisionPredecessor = '{{ revisionPredecessor }}',
data__title = '{{ title }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND investigationsId = '{{ investigationsId }}' --required
AND requestId = '{{ requestId}}'
AND updateMask = '{{ updateMask}}'
RETURNING
name,
annotations,
createTime,
error,
executionState,
labels,
observations,
observerStatuses,
operation,
revision,
revisionIndex,
revisionPredecessor,
title,
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

Deletes a single Investigation.

```sql
DELETE FROM google.geminicloudassist.investigations
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND investigationsId = '{{ investigationsId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
