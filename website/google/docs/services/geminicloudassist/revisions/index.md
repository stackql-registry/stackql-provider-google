--- 
title: revisions
hide_title: false
hide_table_of_contents: false
keywords:
  - revisions
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

Creates, updates, deletes, gets or lists a <code>revisions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="revisions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.geminicloudassist.revisions" /></td></tr>
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
    <td>Identifier. The name of the revision resource, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/investigations/&#123;investigation_id&#125;/revisions/&#123;revision_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the revision was created.</td>
</tr>
<tr>
    <td><CopyableCode code="index" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Revision index number, in order of creation.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the revision.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot" /></td>
    <td><code>object</code></td>
    <td>Optional. Snapshot of the investigation contents at this revision. (id: Investigation)</td>
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
    <td>Identifier. The name of the revision resource, of the form: projects/&#123;project_number&#125;/locations/&#123;location_id&#125;/investigations/&#123;investigation_id&#125;/revisions/&#123;revision_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the revision was created.</td>
</tr>
<tr>
    <td><CopyableCode code="index" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. Revision index number, in order of creation.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the revision.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot" /></td>
    <td><code>object</code></td>
    <td>Optional. Snapshot of the investigation contents at this revision. (id: Investigation)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-investigationsId"><code>investigationsId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td></td>
    <td>Gets details of a single revision of an Investigation.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-investigationsId"><code>investigationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists Investigations in a given project.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-investigationsId"><code>investigationsId</code></a></td>
    <td><a href="#parameter-investigationRevisionId"><code>investigationRevisionId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deprecated: Investigations should only be modified by the agent. Creates a new revision of a given Investigation.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-investigationsId"><code>investigationsId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single revision of an Investigation. Fails if the revision is the investigation's most recent revision.</td>
</tr>
<tr>
    <td><a href="#modify"><CopyableCode code="modify" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-investigationsId"><code>investigationsId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td></td>
    <td>Deprecated: Investigations should only be modified by the agent. Modifies an existing investigation revision in place. This is intended for use by callers that are modifying as part of an investigation session, and do not want to create a new revision. Other callers should use UpdateInvestigation, which will create a new revision if the investigation is RUNNING.</td>
</tr>
<tr>
    <td><a href="#run"><CopyableCode code="run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-investigationsId"><code>investigationsId</code></a>, <a href="#parameter-revisionsId"><code>revisionsId</code></a></td>
    <td></td>
    <td>Deprecated: Investigations should only be run by the agent. Run an existing revision of an investigation.</td>
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
<tr id="parameter-revisionsId">
    <td><CopyableCode code="revisionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-investigationRevisionId">
    <td><CopyableCode code="investigationRevisionId" /></td>
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

Gets details of a single revision of an Investigation.

```sql
SELECT
name,
createTime,
index,
labels,
snapshot
FROM google.geminicloudassist.revisions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND investigationsId = '{{ investigationsId }}' -- required
AND revisionsId = '{{ revisionsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Investigations in a given project.

```sql
SELECT
name,
createTime,
index,
labels,
snapshot
FROM google.geminicloudassist.revisions
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND investigationsId = '{{ investigationsId }}' -- required
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

Deprecated: Investigations should only be modified by the agent. Creates a new revision of a given Investigation.

```sql
INSERT INTO google.geminicloudassist.revisions (
data__labels,
data__name,
data__snapshot,
projectsId,
locationsId,
investigationsId,
investigationRevisionId,
requestId
)
SELECT 
'{{ labels }}',
'{{ name }}',
'{{ snapshot }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ investigationsId }}',
'{{ investigationRevisionId }}',
'{{ requestId }}'
RETURNING
name,
createTime,
index,
labels,
snapshot
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: revisions
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the revisions resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the revisions resource.
    - name: investigationsId
      value: "{{ investigationsId }}"
      description: Required parameter for the revisions resource.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. User-defined labels for the revision.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The name of the revision resource, of the form: projects/{project_number}/locations/{location_id}/investigations/{investigation_id}/revisions/{revision_id}
    - name: snapshot
      description: |
        Optional. Snapshot of the investigation contents at this revision.
      value:
        annotations:
          extrasMap: "{{ extrasMap }}"
          pagePath: "{{ pagePath }}"
          revisionLastRunInterval:
            endTime: "{{ endTime }}"
            startTime: "{{ startTime }}"
          supportCase: "{{ supportCase }}"
        createTime: "{{ createTime }}"
        error:
          code: {{ code }}
          details: "{{ details }}"
          message: "{{ message }}"
        executionState: "{{ executionState }}"
        labels: "{{ labels }}"
        name: "{{ name }}"
        observations: "{{ observations }}"
        observerStatuses: "{{ observerStatuses }}"
        operation: "{{ operation }}"
        revision: "{{ revision }}"
        revisionIndex: {{ revisionIndex }}
        revisionPredecessor: "{{ revisionPredecessor }}"
        title: "{{ title }}"
        updateTime: "{{ updateTime }}"
    - name: investigationRevisionId
      value: "{{ investigationRevisionId }}"
    - name: requestId
      value: "{{ requestId }}"
`}</CodeBlock>

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

Deletes a single revision of an Investigation. Fails if the revision is the investigation's most recent revision.

```sql
DELETE FROM google.geminicloudassist.revisions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND investigationsId = '{{ investigationsId }}' --required
AND revisionsId = '{{ revisionsId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="modify"
    values={[
        { label: 'modify', value: 'modify' },
        { label: 'run', value: 'run' }
    ]}
>
<TabItem value="modify">

Deprecated: Investigations should only be modified by the agent. Modifies an existing investigation revision in place. This is intended for use by callers that are modifying as part of an investigation session, and do not want to create a new revision. Other callers should use UpdateInvestigation, which will create a new revision if the investigation is RUNNING.

```sql
EXEC google.geminicloudassist.revisions.modify 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@investigationsId='{{ investigationsId }}' --required, 
@revisionsId='{{ revisionsId }}' --required 
@@json=
'{
"investigation": "{{ investigation }}", 
"updateMask": "{{ updateMask }}"
}'
;
```
</TabItem>
<TabItem value="run">

Deprecated: Investigations should only be run by the agent. Run an existing revision of an investigation.

```sql
EXEC google.geminicloudassist.revisions.run 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@investigationsId='{{ investigationsId }}' --required, 
@revisionsId='{{ revisionsId }}' --required 
@@json=
'{
"runParameters": "{{ runParameters }}"
}'
;
```
</TabItem>
</Tabs>
