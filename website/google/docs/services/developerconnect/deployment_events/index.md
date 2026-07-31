--- 
title: deployment_events
hide_title: false
hide_table_of_contents: false
keywords:
  - deployment_events
  - developerconnect
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

Creates, updates, deletes, gets or lists a <code>deployment_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deployment_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.developerconnect.deployment_events" /></td></tr>
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
    <td>Identifier. The name of the DeploymentEvent. This name is provided by Developer Connect insights. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/insightsConfigs/&#123;insights_config&#125;/deploymentEvents/&#123;uuid&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="artifactDeployments" /></td>
    <td><code>array</code></td>
    <td>Output only. The artifact deployments of the DeploymentEvent. Each artifact deployment contains the artifact uri and the runtime configuration uri. For GKE, this would be all the containers images that are deployed in the pod.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The create time of the DeploymentEvent.</td>
</tr>
<tr>
    <td><CopyableCode code="deployTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the DeploymentEvent was deployed. This would be the min of all ArtifactDeployment deploy_times.</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeConfig" /></td>
    <td><code>object</code></td>
    <td>RuntimeConfig represents the runtimes where the application is deployed. (id: RuntimeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeDeploymentUri" /></td>
    <td><code>string</code></td>
    <td>Output only. The runtime assigned URI of the DeploymentEvent. For GKE, this is the fully qualified replica set uri. e.g. container.googleapis.com/projects/&#123;project&#125;/locations/&#123;location&#125;/clusters/&#123;cluster&#125;/k8s/namespaces/&#123;namespace&#125;/apps/replicasets/&#123;replica-set-id&#125; For Cloud Run, this is the revision name.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the DeploymentEvent. (STATE_UNSPECIFIED, STATE_ACTIVE, STATE_INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="undeployTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the DeploymentEvent was undeployed, all artifacts are considered undeployed once this time is set. This would be the max of all ArtifactDeployment undeploy_times. If any ArtifactDeployment is still active (i.e. does not have an undeploy_time), this field will be empty.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The update time of the DeploymentEvent.</td>
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
    <td>Identifier. The name of the DeploymentEvent. This name is provided by Developer Connect insights. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/insightsConfigs/&#123;insights_config&#125;/deploymentEvents/&#123;uuid&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="artifactDeployments" /></td>
    <td><code>array</code></td>
    <td>Output only. The artifact deployments of the DeploymentEvent. Each artifact deployment contains the artifact uri and the runtime configuration uri. For GKE, this would be all the containers images that are deployed in the pod.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The create time of the DeploymentEvent.</td>
</tr>
<tr>
    <td><CopyableCode code="deployTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the DeploymentEvent was deployed. This would be the min of all ArtifactDeployment deploy_times.</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeConfig" /></td>
    <td><code>object</code></td>
    <td>RuntimeConfig represents the runtimes where the application is deployed. (id: RuntimeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeDeploymentUri" /></td>
    <td><code>string</code></td>
    <td>Output only. The runtime assigned URI of the DeploymentEvent. For GKE, this is the fully qualified replica set uri. e.g. container.googleapis.com/projects/&#123;project&#125;/locations/&#123;location&#125;/clusters/&#123;cluster&#125;/k8s/namespaces/&#123;namespace&#125;/apps/replicasets/&#123;replica-set-id&#125; For Cloud Run, this is the revision name.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the DeploymentEvent. (STATE_UNSPECIFIED, STATE_ACTIVE, STATE_INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="undeployTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the DeploymentEvent was undeployed, all artifacts are considered undeployed once this time is set. This would be the max of all ArtifactDeployment undeploy_times. If any ArtifactDeployment is still active (i.e. does not have an undeploy_time), this field will be empty.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The update time of the DeploymentEvent.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-insightsConfigsId"><code>insightsConfigsId</code></a>, <a href="#parameter-deploymentEventsId"><code>deploymentEventsId</code></a></td>
    <td></td>
    <td>Gets a single Deployment Event.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-insightsConfigsId"><code>insightsConfigsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists Deployment Events in a given insights config.</td>
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
<tr id="parameter-deploymentEventsId">
    <td><CopyableCode code="deploymentEventsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-insightsConfigsId">
    <td><CopyableCode code="insightsConfigsId" /></td>
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

Gets a single Deployment Event.

```sql
SELECT
name,
artifactDeployments,
createTime,
deployTime,
runtimeConfig,
runtimeDeploymentUri,
state,
undeployTime,
updateTime
FROM google.developerconnect.deployment_events
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND insightsConfigsId = '{{ insightsConfigsId }}' -- required
AND deploymentEventsId = '{{ deploymentEventsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Deployment Events in a given insights config.

```sql
SELECT
name,
artifactDeployments,
createTime,
deployTime,
runtimeConfig,
runtimeDeploymentUri,
state,
undeployTime,
updateTime
FROM google.developerconnect.deployment_events
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND insightsConfigsId = '{{ insightsConfigsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
;
```
</TabItem>
</Tabs>
