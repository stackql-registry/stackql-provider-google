--- 
title: sandbox_environment_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - sandbox_environment_templates
  - aiplatform
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

Creates, updates, deletes, gets or lists a <code>sandbox_environment_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sandbox_environment_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.aiplatform.sandbox_environment_templates" /></td></tr>
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
    <td>Identifier. The resource name of the SandboxEnvironmentTemplate. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/reasoningEngines/&#123;reasoning_engine&#125;/sandboxEnvironmentTemplates/&#123;sandbox_environment_template&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this SandboxEnvironmentTemplate was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customContainerEnvironment" /></td>
    <td><code>object</code></td>
    <td>The sandbox environment for custom container workloads. (id: GoogleCloudAiplatformV1SandboxEnvironmentTemplateCustomContainerEnvironment)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultContainerEnvironment" /></td>
    <td><code>object</code></td>
    <td>The sandbox environment for default container workloads. (id: GoogleCloudAiplatformV1SandboxEnvironmentTemplateDefaultContainerEnvironment)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the SandboxEnvironmentTemplate.</td>
</tr>
<tr>
    <td><CopyableCode code="egressControlConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The configuration for egress control of this template. (id: GoogleCloudAiplatformV1SandboxEnvironmentTemplateEgressControlConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the sandbox environment template. (UNSPECIFIED, PROVISIONING, ACTIVE, DEPROVISIONING, DELETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this SandboxEnvironmentTemplate was most recently updated.</td>
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
    <td>Identifier. The resource name of the SandboxEnvironmentTemplate. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/reasoningEngines/&#123;reasoning_engine&#125;/sandboxEnvironmentTemplates/&#123;sandbox_environment_template&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this SandboxEnvironmentTemplate was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customContainerEnvironment" /></td>
    <td><code>object</code></td>
    <td>The sandbox environment for custom container workloads. (id: GoogleCloudAiplatformV1SandboxEnvironmentTemplateCustomContainerEnvironment)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultContainerEnvironment" /></td>
    <td><code>object</code></td>
    <td>The sandbox environment for default container workloads. (id: GoogleCloudAiplatformV1SandboxEnvironmentTemplateDefaultContainerEnvironment)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name of the SandboxEnvironmentTemplate.</td>
</tr>
<tr>
    <td><CopyableCode code="egressControlConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The configuration for egress control of this template. (id: GoogleCloudAiplatformV1SandboxEnvironmentTemplateEgressControlConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the sandbox environment template. (UNSPECIFIED, PROVISIONING, ACTIVE, DEPROVISIONING, DELETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when this SandboxEnvironmentTemplate was most recently updated.</td>
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
    <td><a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a>, <a href="#parameter-sandboxEnvironmentTemplatesId"><code>sandboxEnvironmentTemplatesId</code></a></td>
    <td></td>
    <td>Gets details of the specific SandboxEnvironmentTemplate.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists SandboxEnvironmentTemplates in a given reasoning engine.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a></td>
    <td></td>
    <td>Creates a SandboxEnvironmentTemplate in a given reasoning engine.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-reasoningEnginesId"><code>reasoningEnginesId</code></a>, <a href="#parameter-sandboxEnvironmentTemplatesId"><code>sandboxEnvironmentTemplatesId</code></a></td>
    <td></td>
    <td>Deletes the specific SandboxEnvironmentTemplate.</td>
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
<tr id="parameter-reasoningEnginesId">
    <td><CopyableCode code="reasoningEnginesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sandboxEnvironmentTemplatesId">
    <td><CopyableCode code="sandboxEnvironmentTemplatesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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

Gets details of the specific SandboxEnvironmentTemplate.

```sql
SELECT
name,
createTime,
customContainerEnvironment,
defaultContainerEnvironment,
displayName,
egressControlConfig,
state,
updateTime
FROM google.aiplatform.sandbox_environment_templates
WHERE reasoningEnginesId = '{{ reasoningEnginesId }}' -- required
AND sandboxEnvironmentTemplatesId = '{{ sandboxEnvironmentTemplatesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists SandboxEnvironmentTemplates in a given reasoning engine.

```sql
SELECT
name,
createTime,
customContainerEnvironment,
defaultContainerEnvironment,
displayName,
egressControlConfig,
state,
updateTime
FROM google.aiplatform.sandbox_environment_templates
WHERE reasoningEnginesId = '{{ reasoningEnginesId }}' -- required
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
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

Creates a SandboxEnvironmentTemplate in a given reasoning engine.

```sql
INSERT INTO google.aiplatform.sandbox_environment_templates (
data__displayName,
data__egressControlConfig,
data__defaultContainerEnvironment,
data__name,
data__customContainerEnvironment,
reasoningEnginesId
)
SELECT 
'{{ displayName }}',
'{{ egressControlConfig }}',
'{{ defaultContainerEnvironment }}',
'{{ name }}',
'{{ customContainerEnvironment }}',
'{{ reasoningEnginesId }}'
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
- name: sandbox_environment_templates
  props:
    - name: reasoningEnginesId
      value: "{{ reasoningEnginesId }}"
      description: Required parameter for the sandbox_environment_templates resource.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. The display name of the SandboxEnvironmentTemplate.
    - name: egressControlConfig
      description: |
        Optional. The configuration for egress control of this template.
      value:
        customerVpcNetwork: "{{ customerVpcNetwork }}"
        internetAccess: {{ internetAccess }}
        networkAttachment: "{{ networkAttachment }}"
        dnsPeeringConfigs:
          - domain: "{{ domain }}"
            targetProject: "{{ targetProject }}"
            targetNetwork: "{{ targetNetwork }}"
    - name: defaultContainerEnvironment
      description: |
        The sandbox environment for default container workloads.
      value:
        defaultContainerCategory: "{{ defaultContainerCategory }}"
        resources:
          requests: "{{ requests }}"
          limits: "{{ limits }}"
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The resource name of the SandboxEnvironmentTemplate. Format: \`projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}/sandboxEnvironmentTemplates/{sandbox_environment_template}\`
    - name: customContainerEnvironment
      description: |
        The sandbox environment for custom container workloads.
      value:
        resources:
          requests: "{{ requests }}"
          limits: "{{ limits }}"
        customContainerSpec:
          imageUri: "{{ imageUri }}"
        ports:
          - port: {{ port }}
            protocol: "{{ protocol }}"
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

Deletes the specific SandboxEnvironmentTemplate.

```sql
DELETE FROM google.aiplatform.sandbox_environment_templates
WHERE reasoningEnginesId = '{{ reasoningEnginesId }}' --required
AND sandboxEnvironmentTemplatesId = '{{ sandboxEnvironmentTemplatesId }}' --required
;
```
</TabItem>
</Tabs>
