--- 
title: goldengate_deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - goldengate_deployments
  - oracledatabase
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

Creates, updates, deletes, gets or lists a <code>goldengate_deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="goldengate_deployments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.oracledatabase.goldengate_deployments" /></td></tr>
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
    <td>Identifier. The name of the GoldengateDeployment resource in the following format: projects/&#123;project&#125;/locations/&#123;region&#125;/goldengateDeployments/&#123;goldengate_deployment&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The date and time that the GoldengateDeployment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. The display name for the GoldengateDeployment.</td>
</tr>
<tr>
    <td><CopyableCode code="entitlementId" /></td>
    <td><code>string</code></td>
    <td>Output only. The ID of the subscription entitlement associated with the GoldengateDeployment</td>
</tr>
<tr>
    <td><CopyableCode code="gcpOracleZone" /></td>
    <td><code>string</code></td>
    <td>Optional. The GCP Oracle zone where Oracle GoldengateDeployment is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels or tags associated with the GoldengateDeployment.</td>
</tr>
<tr>
    <td><CopyableCode code="ociUrl" /></td>
    <td><code>string</code></td>
    <td>Output only. HTTPS link to OCI resources exposed to Customer via UI Interface.</td>
</tr>
<tr>
    <td><CopyableCode code="odbNetwork" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the OdbNetwork associated with the GoldengateDeployment.</td>
</tr>
<tr>
    <td><CopyableCode code="odbSubnet" /></td>
    <td><code>string</code></td>
    <td>Required. The name of the OdbSubnet associated with the GoldengateDeployment for IP allocation.</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>Required. The properties of the GoldengateDeployment. (id: GoldengateDeploymentProperties)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-goldengateDeploymentsId"><code>goldengateDeploymentsId</code></a></td>
    <td></td>
    <td>Gets details of a single GoldengateDeployment.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists all the GoldengateDeployments for the given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-goldengateDeploymentId"><code>goldengateDeploymentId</code></a></td>
    <td>Creates a new GoldengateDeployment in a given project and location.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-goldengateDeploymentsId"><code>goldengateDeploymentsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single GoldengateDeployment.</td>
</tr>
<tr>
    <td><a href="#stop"><CopyableCode code="stop" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-goldengateDeploymentsId"><code>goldengateDeploymentsId</code></a></td>
    <td></td>
    <td>Stops a single GoldengateDeployment.</td>
</tr>
<tr>
    <td><a href="#start"><CopyableCode code="start" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-goldengateDeploymentsId"><code>goldengateDeploymentsId</code></a></td>
    <td></td>
    <td>Starts a single GoldengateDeployment.</td>
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
<tr id="parameter-goldengateDeploymentsId">
    <td><CopyableCode code="goldengateDeploymentsId" /></td>
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
<tr id="parameter-goldengateDeploymentId">
    <td><CopyableCode code="goldengateDeploymentId" /></td>
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

Gets details of a single GoldengateDeployment.

```sql
SELECT
name,
createTime,
displayName,
entitlementId,
gcpOracleZone,
labels,
ociUrl,
odbNetwork,
odbSubnet,
properties
FROM google.oracledatabase.goldengate_deployments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND goldengateDeploymentsId = '{{ goldengateDeploymentsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists all the GoldengateDeployments for the given project and location.

```sql
SELECT
*
FROM google.oracledatabase.goldengate_deployments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND orderBy = '{{ orderBy }}'
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

Creates a new GoldengateDeployment in a given project and location.

```sql
INSERT INTO google.oracledatabase.goldengate_deployments (
data__displayName,
data__odbNetwork,
data__odbSubnet,
data__labels,
data__name,
data__gcpOracleZone,
data__properties,
projectsId,
locationsId,
requestId,
goldengateDeploymentId
)
SELECT 
'{{ displayName }}',
'{{ odbNetwork }}',
'{{ odbSubnet }}',
'{{ labels }}',
'{{ name }}',
'{{ gcpOracleZone }}',
'{{ properties }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ requestId }}',
'{{ goldengateDeploymentId }}'
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
- name: goldengate_deployments
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the goldengate_deployments resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the goldengate_deployments resource.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. The display name for the GoldengateDeployment.
    - name: odbNetwork
      value: "{{ odbNetwork }}"
      description: |
        Optional. The name of the OdbNetwork associated with the GoldengateDeployment.
    - name: odbSubnet
      value: "{{ odbSubnet }}"
      description: |
        Required. The name of the OdbSubnet associated with the GoldengateDeployment for IP allocation.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. The labels or tags associated with the GoldengateDeployment.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The name of the GoldengateDeployment resource in the following format: projects/{project}/locations/{region}/goldengateDeployments/{goldengate_deployment}
    - name: gcpOracleZone
      value: "{{ gcpOracleZone }}"
      description: |
        Optional. The GCP Oracle zone where Oracle GoldengateDeployment is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability.
    - name: properties
      description: |
        Required. The properties of the GoldengateDeployment.
      value:
        lifecycleDetails: "{{ lifecycleDetails }}"
        ingressIps:
          - ingressIpAddress: "{{ ingressIpAddress }}"
        deploymentType: "{{ deploymentType }}"
        isPublic: {{ isPublic }}
        storageUtilizationBytes: "{{ storageUtilizationBytes }}"
        nextBackupScheduleTime: "{{ nextBackupScheduleTime }}"
        nextMaintenanceDescription: "{{ nextMaintenanceDescription }}"
        deploymentDiagnosticData:
          diagnosticState: "{{ diagnosticState }}"
          diagnosticEndTime: "{{ diagnosticEndTime }}"
          namespace: "{{ namespace }}"
          object: "{{ object }}"
          bucket: "{{ bucket }}"
          diagnosticStartTime: "{{ diagnosticStartTime }}"
        fqdn: "{{ fqdn }}"
        deploymentBackupId: "{{ deploymentBackupId }}"
        loadBalancerSubnetId: "{{ loadBalancerSubnetId }}"
        backupSchedule:
          compartmentId: "{{ compartmentId }}"
          metadataOnly: {{ metadataOnly }}
          backupScheduledTime: "{{ backupScheduledTime }}"
          frequencyBackupScheduled: "{{ frequencyBackupScheduled }}"
          bucket: "{{ bucket }}"
          namespace: "{{ namespace }}"
        locks:
          - relatedResourceId: "{{ relatedResourceId }}"
            compartmentId: "{{ compartmentId }}"
            message: "{{ message }}"
            type: "{{ type }}"
            createTime: "{{ createTime }}"
        isStorageUtilizationLimitExceeded: {{ isStorageUtilizationLimitExceeded }}
        roleChangeTime: "{{ roleChangeTime }}"
        maintenanceConfig:
          majorReleaseUpgradePeriodDays: {{ majorReleaseUpgradePeriodDays }}
          isInterimReleaseAutoUpgradeEnabled: {{ isInterimReleaseAutoUpgradeEnabled }}
          interimReleaseUpgradePeriodDays: {{ interimReleaseUpgradePeriodDays }}
          bundleReleaseUpgradePeriodDays: {{ bundleReleaseUpgradePeriodDays }}
          securityPatchUpgradePeriodDays: {{ securityPatchUpgradePeriodDays }}
        category: "{{ category }}"
        deploymentRole: "{{ deploymentRole }}"
        cpuCoreCount: {{ cpuCoreCount }}
        loadBalancerId: "{{ loadBalancerId }}"
        publicIpAddress: "{{ publicIpAddress }}"
        upgradeRequiredTime: "{{ upgradeRequiredTime }}"
        maintenanceWindow:
          day: "{{ day }}"
          startHour: {{ startHour }}
        isLatestVersion: {{ isLatestVersion }}
        description: "{{ description }}"
        licenseModel: "{{ licenseModel }}"
        lifecycleSubState: "{{ lifecycleSubState }}"
        ocid: "{{ ocid }}"
        nextMaintenanceTime: "{{ nextMaintenanceTime }}"
        oggVersionSupportEndTime: "{{ oggVersionSupportEndTime }}"
        isAutoScalingEnabled: {{ isAutoScalingEnabled }}
        privateIpAddress: "{{ privateIpAddress }}"
        nextMaintenanceActionType: "{{ nextMaintenanceActionType }}"
        deploymentUrl: "{{ deploymentUrl }}"
        environmentType: "{{ environmentType }}"
        lifecycleState: "{{ lifecycleState }}"
        nsgIds:
          - "{{ nsgIds }}"
        healthy: {{ healthy }}
        lastBackupScheduleTime: "{{ lastBackupScheduleTime }}"
        placements:
          - availabilityDomain: "{{ availabilityDomain }}"
            faultDomain: "{{ faultDomain }}"
        oggData:
          certificate: "{{ certificate }}"
          deployment: "{{ deployment }}"
          credentialStore: "{{ credentialStore }}"
          adminPasswordSecretVersion: "{{ adminPasswordSecretVersion }}"
          oggVersion: "{{ oggVersion }}"
          passwordSecretId: "{{ passwordSecretId }}"
          adminPassword: "{{ adminPassword }}"
          identityDomainId: "{{ identityDomainId }}"
          groupRolesMapping:
            operatorGroupId: "{{ operatorGroupId }}"
            administratorGroupId: "{{ administratorGroupId }}"
            securityGroupId: "{{ securityGroupId }}"
            userGroupId: "{{ userGroupId }}"
          adminUsername: "{{ adminUsername }}"
        updateTime: "{{ updateTime }}"
    - name: requestId
      value: "{{ requestId }}"
    - name: goldengateDeploymentId
      value: "{{ goldengateDeploymentId }}"
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

Deletes a single GoldengateDeployment.

```sql
DELETE FROM google.oracledatabase.goldengate_deployments
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND goldengateDeploymentsId = '{{ goldengateDeploymentsId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="stop"
    values={[
        { label: 'stop', value: 'stop' },
        { label: 'start', value: 'start' }
    ]}
>
<TabItem value="stop">

Stops a single GoldengateDeployment.

```sql
EXEC google.oracledatabase.goldengate_deployments.stop 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@goldengateDeploymentsId='{{ goldengateDeploymentsId }}' --required
;
```
</TabItem>
<TabItem value="start">

Starts a single GoldengateDeployment.

```sql
EXEC google.oracledatabase.goldengate_deployments.start 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@goldengateDeploymentsId='{{ goldengateDeploymentsId }}' --required
;
```
</TabItem>
</Tabs>
