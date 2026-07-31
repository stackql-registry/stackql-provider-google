--- 
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
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

Creates, updates, deletes, gets or lists an <code>environments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dialogflow.environments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_agents_environments_get"
    values={[
        { label: 'projects_locations_agents_environments_get', value: 'projects_locations_agents_environments_get' },
        { label: 'projects_locations_agents_environments_list', value: 'projects_locations_agents_environments_list' }
    ]}
>
<TabItem value="projects_locations_agents_environments_get">

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
    <td><CopyableCode code="testCasesConfig" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="versionConfigs" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="webhookConfig" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3EnvironmentWebhookConfig)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_agents_environments_list">

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
    <td><CopyableCode code="testCasesConfig" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="versionConfigs" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="webhookConfig" /></td>
    <td><code>object</code></td>
    <td> (id: GoogleCloudDialogflowCxV3EnvironmentWebhookConfig)</td>
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
    <td><a href="#projects_locations_agents_environments_get"><CopyableCode code="projects_locations_agents_environments_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_list"><CopyableCode code="projects_locations_agents_environments_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_create"><CopyableCode code="projects_locations_agents_environments_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_patch"><CopyableCode code="projects_locations_agents_environments_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_delete"><CopyableCode code="projects_locations_agents_environments_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_lookup_environment_history"><CopyableCode code="projects_locations_agents_environments_lookup_environment_history" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_run_continuous_test"><CopyableCode code="projects_locations_agents_environments_run_continuous_test" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_locations_agents_environments_deploy_flow"><CopyableCode code="projects_locations_agents_environments_deploy_flow" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-agentsId"><code>agentsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
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
    defaultValue="projects_locations_agents_environments_get"
    values={[
        { label: 'projects_locations_agents_environments_get', value: 'projects_locations_agents_environments_get' },
        { label: 'projects_locations_agents_environments_list', value: 'projects_locations_agents_environments_list' }
    ]}
>
<TabItem value="projects_locations_agents_environments_get">

Successful response

```sql
SELECT
name,
description,
displayName,
testCasesConfig,
updateTime,
versionConfigs,
webhookConfig
FROM google.dialogflow.environments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_agents_environments_list">

Successful response

```sql
SELECT
name,
description,
displayName,
testCasesConfig,
updateTime,
versionConfigs,
webhookConfig
FROM google.dialogflow.environments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND agentsId = '{{ agentsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_agents_environments_create"
    values={[
        { label: 'projects_locations_agents_environments_create', value: 'projects_locations_agents_environments_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_agents_environments_create">

No description available.

```sql
INSERT INTO google.dialogflow.environments (
data__versionConfigs,
data__displayName,
data__testCasesConfig,
data__description,
data__webhookConfig,
data__name,
projectsId,
locationsId,
agentsId
)
SELECT 
'{{ versionConfigs }}',
'{{ displayName }}',
'{{ testCasesConfig }}',
'{{ description }}',
'{{ webhookConfig }}',
'{{ name }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ agentsId }}'
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
- name: environments
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the environments resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the environments resource.
    - name: agentsId
      value: "{{ agentsId }}"
      description: Required parameter for the environments resource.
    - name: versionConfigs
      value:
        - version: "{{ version }}"
    - name: displayName
      value: "{{ displayName }}"
    - name: testCasesConfig
      value:
        enableContinuousRun: {{ enableContinuousRun }}
        enablePredeploymentRun: {{ enablePredeploymentRun }}
        testCases:
          - "{{ testCases }}"
    - name: description
      value: "{{ description }}"
    - name: webhookConfig
      value:
        webhookOverrides:
          - name: "{{ name }}"
            genericWebService:
              allowedCaCerts:
                - "{{ allowedCaCerts }}"
              password: "{{ password }}"
              username: "{{ username }}"
              requestHeaders: "{{ requestHeaders }}"
              serviceAgentAuth: "{{ serviceAgentAuth }}"
              parameterMapping: "{{ parameterMapping }}"
              oauthConfig:
                clientSecret: "{{ clientSecret }}"
                clientId: "{{ clientId }}"
                tokenEndpoint: "{{ tokenEndpoint }}"
                scopes:
                  - "{{ scopes }}"
                secretVersionForClientSecret: "{{ secretVersionForClientSecret }}"
              webhookType: "{{ webhookType }}"
              secretVersionsForRequestHeaders: "{{ secretVersionsForRequestHeaders }}"
              uri: "{{ uri }}"
              secretVersionForUsernamePassword: "{{ secretVersionForUsernamePassword }}"
              requestBody: "{{ requestBody }}"
              httpMethod: "{{ httpMethod }}"
              serviceAccountAuthConfig:
                serviceAccount: "{{ serviceAccount }}"
            displayName: "{{ displayName }}"
            timeout: "{{ timeout }}"
            disabled: {{ disabled }}
            serviceDirectory:
              service: "{{ service }}"
              genericWebService:
                allowedCaCerts:
                  - "{{ allowedCaCerts }}"
                password: "{{ password }}"
                username: "{{ username }}"
                requestHeaders: "{{ requestHeaders }}"
                serviceAgentAuth: "{{ serviceAgentAuth }}"
                parameterMapping: "{{ parameterMapping }}"
                oauthConfig:
                  clientSecret: "{{ clientSecret }}"
                  clientId: "{{ clientId }}"
                  tokenEndpoint: "{{ tokenEndpoint }}"
                  scopes: "{{ scopes }}"
                  secretVersionForClientSecret: "{{ secretVersionForClientSecret }}"
                webhookType: "{{ webhookType }}"
                secretVersionsForRequestHeaders: "{{ secretVersionsForRequestHeaders }}"
                uri: "{{ uri }}"
                secretVersionForUsernamePassword: "{{ secretVersionForUsernamePassword }}"
                requestBody: "{{ requestBody }}"
                httpMethod: "{{ httpMethod }}"
                serviceAccountAuthConfig:
                  serviceAccount: "{{ serviceAccount }}"
    - name: name
      value: "{{ name }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_agents_environments_patch"
    values={[
        { label: 'projects_locations_agents_environments_patch', value: 'projects_locations_agents_environments_patch' }
    ]}
>
<TabItem value="projects_locations_agents_environments_patch">

No description available.

```sql
UPDATE google.dialogflow.environments
SET 
data__versionConfigs = '{{ versionConfigs }}',
data__displayName = '{{ displayName }}',
data__testCasesConfig = '{{ testCasesConfig }}',
data__description = '{{ description }}',
data__webhookConfig = '{{ webhookConfig }}',
data__name = '{{ name }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
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
    defaultValue="projects_locations_agents_environments_delete"
    values={[
        { label: 'projects_locations_agents_environments_delete', value: 'projects_locations_agents_environments_delete' }
    ]}
>
<TabItem value="projects_locations_agents_environments_delete">

No description available.

```sql
DELETE FROM google.dialogflow.environments
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND agentsId = '{{ agentsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_agents_environments_lookup_environment_history"
    values={[
        { label: 'projects_locations_agents_environments_lookup_environment_history', value: 'projects_locations_agents_environments_lookup_environment_history' },
        { label: 'projects_locations_agents_environments_run_continuous_test', value: 'projects_locations_agents_environments_run_continuous_test' },
        { label: 'projects_locations_agents_environments_deploy_flow', value: 'projects_locations_agents_environments_deploy_flow' }
    ]}
>
<TabItem value="projects_locations_agents_environments_lookup_environment_history">

Successful response

```sql
EXEC google.dialogflow.environments.projects_locations_agents_environments_lookup_environment_history 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required, 
@pageToken='{{ pageToken }}', 
@pageSize='{{ pageSize }}'
;
```
</TabItem>
<TabItem value="projects_locations_agents_environments_run_continuous_test">

Successful response

```sql
EXEC google.dialogflow.environments.projects_locations_agents_environments_run_continuous_test 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required
;
```
</TabItem>
<TabItem value="projects_locations_agents_environments_deploy_flow">

Successful response

```sql
EXEC google.dialogflow.environments.projects_locations_agents_environments_deploy_flow 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@agentsId='{{ agentsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required 
@@json=
'{
"flowVersion": "{{ flowVersion }}"
}'
;
```
</TabItem>
</Tabs>
