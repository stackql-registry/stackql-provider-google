--- 
title: deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - deployments
  - workloadmanager
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

Creates, updates, deletes, gets or lists a <code>deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deployments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.workloadmanager.deployments" /></td></tr>
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
    <td>The name of the deployment resource. The format is 'projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/deployments/&#123;deployment_id&#125;'.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time stamp.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="sapSystemS4Config" /></td>
    <td><code>object</code></td>
    <td>SAP system workload input. (id: SapSystemS4Config)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>User-specified Service Account (SA) credentials to be used for Cloud Build. Format: `projects/&#123;projectID&#125;/serviceAccounts/&#123;serviceAccount&#125;` The default Cloud Build SA will be used initially if this field is not set during deployment creation.</td>
</tr>
<tr>
    <td><CopyableCode code="sqlServerWorkload" /></td>
    <td><code>object</code></td>
    <td>MS SQL workload input. (id: SqlServerWorkload)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the deployment. (STATE_UNSPECIFIED, CREATING, ACTIVE, UPDATING, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="terraformVariables" /></td>
    <td><code>object</code></td>
    <td>Optional. terraform_variables represents all the Terraform variables for the deployment workload. The key is the name of the Terraform variable, and the value is the TerraformVariable. For example: &#123; "project_id": &#123; "input_value": &#123; "string_value": "my-project-id" &#125; &#125;, "zone": &#123; "input_value": &#123; "string_value": "us-central1-a" &#125; &#125; &#125;</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update time stamp.</td>
</tr>
<tr>
    <td><CopyableCode code="workerPool" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-specified Cloud Build worker pool resource in which the Cloud Build job will execute. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/workerPools/&#123;workerPoolId&#125;`. If this field is unspecified, the default Cloud Build worker pool will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="workloadType" /></td>
    <td><code>string</code></td>
    <td>Optional. Workload type of the deployment. (WORKLOAD_TYPE_UNSPECIFIED, SAP_S4, SQL_SERVER, ORACLE)</td>
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
    <td>The name of the deployment resource. The format is 'projects/&#123;project_id&#125;/locations/&#123;location_id&#125;/deployments/&#123;deployment_id&#125;'.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time stamp.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="sapSystemS4Config" /></td>
    <td><code>object</code></td>
    <td>SAP system workload input. (id: SapSystemS4Config)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>User-specified Service Account (SA) credentials to be used for Cloud Build. Format: `projects/&#123;projectID&#125;/serviceAccounts/&#123;serviceAccount&#125;` The default Cloud Build SA will be used initially if this field is not set during deployment creation.</td>
</tr>
<tr>
    <td><CopyableCode code="sqlServerWorkload" /></td>
    <td><code>object</code></td>
    <td>MS SQL workload input. (id: SqlServerWorkload)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. Current state of the deployment. (STATE_UNSPECIFIED, CREATING, ACTIVE, UPDATING, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="terraformVariables" /></td>
    <td><code>object</code></td>
    <td>Optional. terraform_variables represents all the Terraform variables for the deployment workload. The key is the name of the Terraform variable, and the value is the TerraformVariable. For example: &#123; "project_id": &#123; "input_value": &#123; "string_value": "my-project-id" &#125; &#125;, "zone": &#123; "input_value": &#123; "string_value": "us-central1-a" &#125; &#125; &#125;</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update time stamp.</td>
</tr>
<tr>
    <td><CopyableCode code="workerPool" /></td>
    <td><code>string</code></td>
    <td>Optional. The user-specified Cloud Build worker pool resource in which the Cloud Build job will execute. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/workerPools/&#123;workerPoolId&#125;`. If this field is unspecified, the default Cloud Build worker pool will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="workloadType" /></td>
    <td><code>string</code></td>
    <td>Optional. Workload type of the deployment. (WORKLOAD_TYPE_UNSPECIFIED, SAP_S4, SQL_SERVER, ORACLE)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td></td>
    <td>Gets details of a single Deployment.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists Deployments in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-deploymentId"><code>deploymentId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new Deployment in a given project and location.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a single Deployment.</td>
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
<tr id="parameter-deploymentsId">
    <td><CopyableCode code="deploymentsId" /></td>
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
<tr id="parameter-deploymentId">
    <td><CopyableCode code="deploymentId" /></td>
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

Gets details of a single Deployment.

```sql
SELECT
name,
createTime,
description,
sapSystemS4Config,
serviceAccount,
sqlServerWorkload,
state,
terraformVariables,
updateTime,
workerPool,
workloadType
FROM google.workloadmanager.deployments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND deploymentsId = '{{ deploymentsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Deployments in a given project and location.

```sql
SELECT
name,
createTime,
description,
sapSystemS4Config,
serviceAccount,
sqlServerWorkload,
state,
terraformVariables,
updateTime,
workerPool,
workloadType
FROM google.workloadmanager.deployments
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

Creates a new Deployment in a given project and location.

```sql
INSERT INTO google.workloadmanager.deployments (
data__description,
data__name,
data__sapSystemS4Config,
data__serviceAccount,
data__sqlServerWorkload,
data__terraformVariables,
data__workerPool,
data__workloadType,
projectsId,
locationsId,
deploymentId,
requestId
)
SELECT 
'{{ description }}',
'{{ name }}',
'{{ sapSystemS4Config }}',
'{{ serviceAccount }}',
'{{ sqlServerWorkload }}',
'{{ terraformVariables }}',
'{{ workerPool }}',
'{{ workloadType }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ deploymentId }}',
'{{ requestId }}'
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
- name: deployments
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the deployments resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the deployments resource.
    - name: description
      value: "{{ description }}"
      description: |
        Description of the deployment.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the deployment resource. The format is 'projects/{project_id}/locations/{location_id}/deployments/{deployment_id}'.
    - name: sapSystemS4Config
      description: |
        SAP system workload input.
      value:
        allowStoppingForUpdate: {{ allowStoppingForUpdate }}
        ansibleRunnerServiceAccount: "{{ ansibleRunnerServiceAccount }}"
        app:
          appInstanceId: "{{ appInstanceId }}"
          appServiceAccount: "{{ appServiceAccount }}"
          appVmNames:
            - "{{ appVmNames }}"
          ascsImage: "{{ ascsImage }}"
          ascsInstanceId: "{{ ascsInstanceId }}"
          ascsMachineType: "{{ ascsMachineType }}"
          ascsServiceAccount: "{{ ascsServiceAccount }}"
          ascsVm: "{{ ascsVm }}"
          ersInstanceId: "{{ ersInstanceId }}"
          ersVm: "{{ ersVm }}"
          image: "{{ image }}"
          machineType: "{{ machineType }}"
          secretManagerSecret: "{{ secretManagerSecret }}"
          sharedStorage: "{{ sharedStorage }}"
          sid: "{{ sid }}"
          vmsMultiplier: {{ vmsMultiplier }}
        database:
          databaseServiceAccount: "{{ databaseServiceAccount }}"
          diskType: "{{ diskType }}"
          image: "{{ image }}"
          instanceId: "{{ instanceId }}"
          machineType: "{{ machineType }}"
          primaryDbVm: "{{ primaryDbVm }}"
          secondaryDbVm: "{{ secondaryDbVm }}"
          secretManagerSecret: "{{ secretManagerSecret }}"
          sid: "{{ sid }}"
        deploymentModel: "{{ deploymentModel }}"
        environmentType: "{{ environmentType }}"
        gcpProjectId: "{{ gcpProjectId }}"
        location:
          createCommsFirewall: {{ createCommsFirewall }}
          customTags:
            - "{{ customTags }}"
          deploymentDnsEnabled: {{ deploymentDnsEnabled }}
          dnsZone: "{{ dnsZone }}"
          dnsZoneNameSuffix: "{{ dnsZoneNameSuffix }}"
          internetAccess: "{{ internetAccess }}"
          networkProject: "{{ networkProject }}"
          regionName: "{{ regionName }}"
          subnetName: "{{ subnetName }}"
          vpcName: "{{ vpcName }}"
          zone1Name: "{{ zone1Name }}"
          zone2Name: "{{ zone2Name }}"
        mediaBucketName: "{{ mediaBucketName }}"
        sapBootDiskImage: "{{ sapBootDiskImage }}"
        scalingMethod: "{{ scalingMethod }}"
        version: "{{ version }}"
        vmPrefix: "{{ vmPrefix }}"
    - name: serviceAccount
      value: "{{ serviceAccount }}"
      description: |
        User-specified Service Account (SA) credentials to be used for Cloud Build. Format: \`projects/{projectID}/serviceAccounts/{serviceAccount}\` The default Cloud Build SA will be used initially if this field is not set during deployment creation.
    - name: sqlServerWorkload
      description: |
        MS SQL workload input.
      value:
        activeDirectory:
          dnsAddress: "{{ dnsAddress }}"
          domain: "{{ domain }}"
          domainUsername: "{{ domainUsername }}"
          secretManagerSecret: "{{ secretManagerSecret }}"
          type: "{{ type }}"
        computeEngineServiceAccount: "{{ computeEngineServiceAccount }}"
        database:
          diskType: "{{ diskType }}"
          floatingIpAddress: "{{ floatingIpAddress }}"
          machineType: "{{ machineType }}"
          secondarySoleTenantNode: "{{ secondarySoleTenantNode }}"
          secondarySoleTenantNodeType: "{{ secondarySoleTenantNodeType }}"
          secretManagerSecret: "{{ secretManagerSecret }}"
          smt: {{ smt }}
          soleTenantNode: "{{ soleTenantNode }}"
          soleTenantNodeType: "{{ soleTenantNodeType }}"
          tempdbOnSsd: {{ tempdbOnSsd }}
          tenancyModel: "{{ tenancyModel }}"
        deploymentModel: "{{ deploymentModel }}"
        environmentType: "{{ environmentType }}"
        fciType: "{{ fciType }}"
        haType: "{{ haType }}"
        isSqlPayg: {{ isSqlPayg }}
        location:
          dnsZone: "{{ dnsZone }}"
          gcpProjectId: "{{ gcpProjectId }}"
          internetAccess: "{{ internetAccess }}"
          network: "{{ network }}"
          primaryZone: "{{ primaryZone }}"
          region: "{{ region }}"
          secondaryZone: "{{ secondaryZone }}"
          subnetwork: "{{ subnetwork }}"
          tertiaryZone: "{{ tertiaryZone }}"
        mediaBucket: "{{ mediaBucket }}"
        operatingSystemType: "{{ operatingSystemType }}"
        osImage: "{{ osImage }}"
        osImageType: "{{ osImageType }}"
        pacemaker:
          bucketNameNodeCertificates: "{{ bucketNameNodeCertificates }}"
          pacemakerCluster: "{{ pacemakerCluster }}"
          pacemakerClusterSecret: "{{ pacemakerClusterSecret }}"
          pacemakerClusterUsername: "{{ pacemakerClusterUsername }}"
          sqlPacemakerSecret: "{{ sqlPacemakerSecret }}"
          sqlPacemakerUsername: "{{ sqlPacemakerUsername }}"
        sqlServerEdition: "{{ sqlServerEdition }}"
        sqlServerVersion: "{{ sqlServerVersion }}"
        vmPrefix: "{{ vmPrefix }}"
    - name: terraformVariables
      value: "{{ terraformVariables }}"
      description: |
        Optional. terraform_variables represents all the Terraform variables for the deployment workload. The key is the name of the Terraform variable, and the value is the TerraformVariable. For example: { "project_id": { "input_value": { "string_value": "my-project-id" } }, "zone": { "input_value": { "string_value": "us-central1-a" } } }
    - name: workerPool
      value: "{{ workerPool }}"
      description: |
        Optional. The user-specified Cloud Build worker pool resource in which the Cloud Build job will execute. Format: \`projects/{project}/locations/{location}/workerPools/{workerPoolId}\`. If this field is unspecified, the default Cloud Build worker pool will be used.
    - name: workloadType
      value: "{{ workloadType }}"
      description: |
        Optional. Workload type of the deployment.
      valid_values: ['WORKLOAD_TYPE_UNSPECIFIED', 'SAP_S4', 'SQL_SERVER', 'ORACLE']
    - name: deploymentId
      value: "{{ deploymentId }}"
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

Deletes a single Deployment.

```sql
DELETE FROM google.workloadmanager.deployments
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND deploymentsId = '{{ deploymentsId }}' --required
AND force = '{{ force }}'
;
```
</TabItem>
</Tabs>
