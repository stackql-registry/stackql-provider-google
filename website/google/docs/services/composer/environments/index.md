--- 
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
  - composer
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
<tr><td><b>Id</b></td><td><CopyableCode code="google.composer.environments" /></td></tr>
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
    <td>Identifier. The resource name of the environment, in the form: "projects/&#123;projectId&#125;/locations/&#123;locationId&#125;/environments/&#123;environmentId&#125;" EnvironmentId must start with a lowercase letter followed by up to 63 lowercase letters, numbers, or hyphens, and cannot end with a hyphen.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration parameters for this environment. (id: EnvironmentConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this environment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for this environment. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \p&#123;Ll&#125;\p&#123;Lo&#125;&#123;0,62&#125; * Values must conform to regexp: [\p&#123;Ll&#125;\p&#123;Lo&#125;\p&#123;N&#125;_-]&#123;0,63&#125; * Both keys and values are additionally constrained to be &lt;= 128 bytes in size.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the environment. (STATE_UNSPECIFIED, CREATING, RUNNING, UPDATING, DELETING, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="storageConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Storage configuration for this environment. (id: StorageConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this environment was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>Output only. The UUID (Universally Unique IDentifier) associated with this environment. This value is generated when the environment is created.</td>
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
    <td>Identifier. The resource name of the environment, in the form: "projects/&#123;projectId&#125;/locations/&#123;locationId&#125;/environments/&#123;environmentId&#125;" EnvironmentId must start with a lowercase letter followed by up to 63 lowercase letters, numbers, or hyphens, and cannot end with a hyphen.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration parameters for this environment. (id: EnvironmentConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this environment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for this environment. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \p&#123;Ll&#125;\p&#123;Lo&#125;&#123;0,62&#125; * Values must conform to regexp: [\p&#123;Ll&#125;\p&#123;Lo&#125;\p&#123;N&#125;_-]&#123;0,63&#125; * Both keys and values are additionally constrained to be &lt;= 128 bytes in size.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the environment. (STATE_UNSPECIFIED, CREATING, RUNNING, UPDATING, DELETING, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="storageConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Storage configuration for this environment. (id: StorageConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this environment was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>Output only. The UUID (Universally Unique IDentifier) associated with this environment. This value is generated when the environment is created.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Get an existing environment.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>List environments.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Create a new environment.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update an environment.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Delete an environment.</td>
</tr>
<tr>
    <td><a href="#check_upgrade"><CopyableCode code="check_upgrade" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Check if an upgrade operation on the environment will succeed. In case of problems detailed info can be found in the returned Operation.</td>
</tr>
<tr>
    <td><a href="#database_failover"><CopyableCode code="database_failover" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Triggers database failover (only for highly resilient environments).</td>
</tr>
<tr>
    <td><a href="#execute_airflow_command"><CopyableCode code="execute_airflow_command" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Executes Airflow CLI command.</td>
</tr>
<tr>
    <td><a href="#load_snapshot"><CopyableCode code="load_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.</td>
</tr>
<tr>
    <td><a href="#poll_airflow_command"><CopyableCode code="poll_airflow_command" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Polls Airflow CLI command execution and fetches logs.</td>
</tr>
<tr>
    <td><a href="#restart_web_server"><CopyableCode code="restart_web_server" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Restart Airflow web server.</td>
</tr>
<tr>
    <td><a href="#save_snapshot"><CopyableCode code="save_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.</td>
</tr>
<tr>
    <td><a href="#stop_airflow_command"><CopyableCode code="stop_airflow_command" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-environmentsId"><code>environmentsId</code></a></td>
    <td></td>
    <td>Stops Airflow CLI command execution.</td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get an existing environment.

```sql
SELECT
name,
config,
createTime,
labels,
satisfiesPzi,
satisfiesPzs,
state,
storageConfig,
updateTime,
uuid
FROM google.composer.environments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND environmentsId = '{{ environmentsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

List environments.

```sql
SELECT
name,
config,
createTime,
labels,
satisfiesPzi,
satisfiesPzs,
state,
storageConfig,
updateTime,
uuid
FROM google.composer.environments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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

Create a new environment.

```sql
INSERT INTO google.composer.environments (
data__config,
data__createTime,
data__labels,
data__name,
data__state,
data__storageConfig,
data__updateTime,
data__uuid,
projectsId,
locationsId
)
SELECT 
'{{ config }}',
'{{ createTime }}',
'{{ labels }}',
'{{ name }}',
'{{ state }}',
'{{ storageConfig }}',
'{{ updateTime }}',
'{{ uuid }}',
'{{ projectsId }}',
'{{ locationsId }}'
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
    - name: config
      description: |
        Optional. Configuration parameters for this environment.
      value:
        airflowByoidUri: "{{ airflowByoidUri }}"
        airflowUri: "{{ airflowUri }}"
        dagGcsPrefix: "{{ dagGcsPrefix }}"
        dataRetentionConfig:
          airflowMetadataRetentionConfig:
            retentionDays: {{ retentionDays }}
            retentionMode: "{{ retentionMode }}"
          taskLogsRetentionConfig:
            storageMode: "{{ storageMode }}"
        databaseConfig:
          machineType: "{{ machineType }}"
          zone: "{{ zone }}"
        encryptionConfig:
          kmsKeyName: "{{ kmsKeyName }}"
        environmentSize: "{{ environmentSize }}"
        gkeCluster: "{{ gkeCluster }}"
        maintenanceWindow:
          endTime: "{{ endTime }}"
          recurrence: "{{ recurrence }}"
          startTime: "{{ startTime }}"
        masterAuthorizedNetworksConfig:
          cidrBlocks:
            - cidrBlock: "{{ cidrBlock }}"
              displayName: "{{ displayName }}"
          enabled: {{ enabled }}
        nodeConfig:
          composerInternalIpv4CidrBlock: "{{ composerInternalIpv4CidrBlock }}"
          composerNetworkAttachment: "{{ composerNetworkAttachment }}"
          diskSizeGb: {{ diskSizeGb }}
          enableIpMasqAgent: {{ enableIpMasqAgent }}
          ipAllocationPolicy:
            clusterIpv4CidrBlock: "{{ clusterIpv4CidrBlock }}"
            clusterSecondaryRangeName: "{{ clusterSecondaryRangeName }}"
            servicesIpv4CidrBlock: "{{ servicesIpv4CidrBlock }}"
            servicesSecondaryRangeName: "{{ servicesSecondaryRangeName }}"
            useIpAliases: {{ useIpAliases }}
          location: "{{ location }}"
          machineType: "{{ machineType }}"
          network: "{{ network }}"
          oauthScopes:
            - "{{ oauthScopes }}"
          serviceAccount: "{{ serviceAccount }}"
          subnetwork: "{{ subnetwork }}"
          tags:
            - "{{ tags }}"
        nodeCount: {{ nodeCount }}
        privateEnvironmentConfig:
          cloudComposerConnectionSubnetwork: "{{ cloudComposerConnectionSubnetwork }}"
          cloudComposerNetworkIpv4CidrBlock: "{{ cloudComposerNetworkIpv4CidrBlock }}"
          cloudComposerNetworkIpv4ReservedRange: "{{ cloudComposerNetworkIpv4ReservedRange }}"
          cloudSqlIpv4CidrBlock: "{{ cloudSqlIpv4CidrBlock }}"
          enablePrivateBuildsOnly: {{ enablePrivateBuildsOnly }}
          enablePrivateEnvironment: {{ enablePrivateEnvironment }}
          enablePrivatelyUsedPublicIps: {{ enablePrivatelyUsedPublicIps }}
          networkingConfig:
            connectionType: "{{ connectionType }}"
          networkingType: "{{ networkingType }}"
          privateClusterConfig:
            enablePrivateEndpoint: {{ enablePrivateEndpoint }}
            masterIpv4CidrBlock: "{{ masterIpv4CidrBlock }}"
            masterIpv4ReservedRange: "{{ masterIpv4ReservedRange }}"
          webServerIpv4CidrBlock: "{{ webServerIpv4CidrBlock }}"
          webServerIpv4ReservedRange: "{{ webServerIpv4ReservedRange }}"
        recoveryConfig:
          scheduledSnapshotsConfig:
            enabled: {{ enabled }}
            snapshotCreationSchedule: "{{ snapshotCreationSchedule }}"
            snapshotLocation: "{{ snapshotLocation }}"
            timeZone: "{{ timeZone }}"
        resilienceMode: "{{ resilienceMode }}"
        softwareConfig:
          airflowConfigOverrides: "{{ airflowConfigOverrides }}"
          auditLogsReplicationMode: "{{ auditLogsReplicationMode }}"
          cloudDataLineageIntegration:
            enabled: {{ enabled }}
          envVariables: "{{ envVariables }}"
          imageVersion: "{{ imageVersion }}"
          pypiPackages: "{{ pypiPackages }}"
          pythonVersion: "{{ pythonVersion }}"
          schedulerCount: {{ schedulerCount }}
          webServerPluginsMode: "{{ webServerPluginsMode }}"
        webServerConfig:
          machineType: "{{ machineType }}"
        webServerNetworkAccessControl:
          allowedIpRanges:
            - description: "{{ description }}"
              value: "{{ value }}"
        workloadsConfig:
          dagProcessor:
            count: {{ count }}
            cpu: {{ cpu }}
            memoryGb: {{ memoryGb }}
            storageGb: {{ storageGb }}
          scheduler:
            count: {{ count }}
            cpu: {{ cpu }}
            memoryGb: {{ memoryGb }}
            storageGb: {{ storageGb }}
          triggerer:
            count: {{ count }}
            cpu: {{ cpu }}
            memoryGb: {{ memoryGb }}
          webServer:
            cpu: {{ cpu }}
            memoryGb: {{ memoryGb }}
            storageGb: {{ storageGb }}
          worker:
            cpu: {{ cpu }}
            maxCount: {{ maxCount }}
            memoryGb: {{ memoryGb }}
            minCount: {{ minCount }}
            storageGb: {{ storageGb }}
    - name: createTime
      value: "{{ createTime }}"
      description: |
        Output only. The time at which this environment was created.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. User-defined labels for this environment. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: p{Ll}p{Lo}{0,62} * Values must conform to regexp: [p{Ll}p{Lo}p{N}_-]{0,63} * Both keys and values are additionally constrained to be <= 128 bytes in size.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The resource name of the environment, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" EnvironmentId must start with a lowercase letter followed by up to 63 lowercase letters, numbers, or hyphens, and cannot end with a hyphen.
    - name: state
      value: "{{ state }}"
      description: |
        The current state of the environment.
      valid_values: ['STATE_UNSPECIFIED', 'CREATING', 'RUNNING', 'UPDATING', 'DELETING', 'ERROR']
    - name: storageConfig
      description: |
        Optional. Storage configuration for this environment.
      value:
        bucket: "{{ bucket }}"
    - name: updateTime
      value: "{{ updateTime }}"
      description: |
        Output only. The time at which this environment was last modified.
    - name: uuid
      value: "{{ uuid }}"
      description: |
        Output only. The UUID (Universally Unique IDentifier) associated with this environment. This value is generated when the environment is created.
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

Update an environment.

```sql
UPDATE google.composer.environments
SET 
data__config = '{{ config }}',
data__createTime = '{{ createTime }}',
data__labels = '{{ labels }}',
data__name = '{{ name }}',
data__state = '{{ state }}',
data__storageConfig = '{{ storageConfig }}',
data__updateTime = '{{ updateTime }}',
data__uuid = '{{ uuid }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
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
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Delete an environment.

```sql
DELETE FROM google.composer.environments
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND environmentsId = '{{ environmentsId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="check_upgrade"
    values={[
        { label: 'check_upgrade', value: 'check_upgrade' },
        { label: 'database_failover', value: 'database_failover' },
        { label: 'execute_airflow_command', value: 'execute_airflow_command' },
        { label: 'load_snapshot', value: 'load_snapshot' },
        { label: 'poll_airflow_command', value: 'poll_airflow_command' },
        { label: 'restart_web_server', value: 'restart_web_server' },
        { label: 'save_snapshot', value: 'save_snapshot' },
        { label: 'stop_airflow_command', value: 'stop_airflow_command' }
    ]}
>
<TabItem value="check_upgrade">

Check if an upgrade operation on the environment will succeed. In case of problems detailed info can be found in the returned Operation.

```sql
EXEC google.composer.environments.check_upgrade 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required 
@@json=
'{
"imageVersion": "{{ imageVersion }}"
}'
;
```
</TabItem>
<TabItem value="database_failover">

Triggers database failover (only for highly resilient environments).

```sql
EXEC google.composer.environments.database_failover 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required
;
```
</TabItem>
<TabItem value="execute_airflow_command">

Executes Airflow CLI command.

```sql
EXEC google.composer.environments.execute_airflow_command 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required 
@@json=
'{
"command": "{{ command }}", 
"parameters": "{{ parameters }}", 
"subcommand": "{{ subcommand }}"
}'
;
```
</TabItem>
<TabItem value="load_snapshot">

Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.

```sql
EXEC google.composer.environments.load_snapshot 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required 
@@json=
'{
"skipAirflowOverridesSetting": {{ skipAirflowOverridesSetting }}, 
"skipEnvironmentVariablesSetting": {{ skipEnvironmentVariablesSetting }}, 
"skipGcsDataCopying": {{ skipGcsDataCopying }}, 
"skipPypiPackagesInstallation": {{ skipPypiPackagesInstallation }}, 
"snapshotPath": "{{ snapshotPath }}"
}'
;
```
</TabItem>
<TabItem value="poll_airflow_command">

Polls Airflow CLI command execution and fetches logs.

```sql
EXEC google.composer.environments.poll_airflow_command 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required 
@@json=
'{
"executionId": "{{ executionId }}", 
"nextLineNumber": {{ nextLineNumber }}, 
"pod": "{{ pod }}", 
"podNamespace": "{{ podNamespace }}"
}'
;
```
</TabItem>
<TabItem value="restart_web_server">

Restart Airflow web server.

```sql
EXEC google.composer.environments.restart_web_server 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required
;
```
</TabItem>
<TabItem value="save_snapshot">

Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.

```sql
EXEC google.composer.environments.save_snapshot 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required 
@@json=
'{
"snapshotLocation": "{{ snapshotLocation }}"
}'
;
```
</TabItem>
<TabItem value="stop_airflow_command">

Stops Airflow CLI command execution.

```sql
EXEC google.composer.environments.stop_airflow_command 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@environmentsId='{{ environmentsId }}' --required 
@@json=
'{
"executionId": "{{ executionId }}", 
"force": {{ force }}, 
"pod": "{{ pod }}", 
"podNamespace": "{{ podNamespace }}"
}'
;
```
</TabItem>
</Tabs>
