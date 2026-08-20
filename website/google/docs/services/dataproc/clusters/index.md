--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - dataproc
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

Creates, updates, deletes, gets or lists a <code>clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataproc.clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_regions_clusters_get"
    values={[
        { label: 'projects_regions_clusters_get', value: 'projects_regions_clusters_get' },
        { label: 'projects_regions_clusters_list', value: 'projects_regions_clusters_list' }
    ]}
>
<TabItem value="projects_regions_clusters_get">

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
    <td><CopyableCode code="clusterName" /></td>
    <td><code>string</code></td>
    <td>Required. The cluster name, which must be unique within a project. The name must start with a lowercase letter, and can contain up to 51 lowercase letters, numbers, and hyphens. It cannot end with a hyphen. The name of a deleted cluster can be reused.</td>
</tr>
<tr>
    <td><CopyableCode code="clusterUuid" /></td>
    <td><code>string</code></td>
    <td>Output only. A cluster UUID (Unique Universal Identifier). The service generates this value when it creates the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Optional. The cluster config for a cluster of Compute Engine Instances. Note that the service may set default values, and values may change when clusters are updated.Exactly one of ClusterConfig or VirtualClusterConfig must be specified. (id: ClusterConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels to associate with this cluster. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>object</code></td>
    <td>Output only. Contains cluster daemon metrics such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before final release. (id: ClusterMetrics)</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>Required. The Google Cloud Platform project ID that the cluster belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Output only. Cluster status. (id: ClusterStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="statusHistory" /></td>
    <td><code>array</code></td>
    <td>Output only. The previous cluster status.</td>
</tr>
<tr>
    <td><CopyableCode code="virtualClusterConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The virtual cluster config is used when creating a cluster that does not directly control the underlying compute resources, for example, when creating a GKE cluster (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-overview). the service may set default values, and values may change when clusters are updated. Exactly one of config or virtual_cluster_config must be specified. (id: VirtualClusterConfig)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_regions_clusters_list">

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
    <td><CopyableCode code="clusterName" /></td>
    <td><code>string</code></td>
    <td>Required. The cluster name, which must be unique within a project. The name must start with a lowercase letter, and can contain up to 51 lowercase letters, numbers, and hyphens. It cannot end with a hyphen. The name of a deleted cluster can be reused.</td>
</tr>
<tr>
    <td><CopyableCode code="clusterUuid" /></td>
    <td><code>string</code></td>
    <td>Output only. A cluster UUID (Unique Universal Identifier). The service generates this value when it creates the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Optional. The cluster config for a cluster of Compute Engine Instances. Note that the service may set default values, and values may change when clusters are updated.Exactly one of ClusterConfig or VirtualClusterConfig must be specified. (id: ClusterConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. The labels to associate with this cluster. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>object</code></td>
    <td>Output only. Contains cluster daemon metrics such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before final release. (id: ClusterMetrics)</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>Required. The Google Cloud Platform project ID that the cluster belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Output only. Cluster status. (id: ClusterStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="statusHistory" /></td>
    <td><code>array</code></td>
    <td>Output only. The previous cluster status.</td>
</tr>
<tr>
    <td><CopyableCode code="virtualClusterConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. The virtual cluster config is used when creating a cluster that does not directly control the underlying compute resources, for example, when creating a GKE cluster (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-overview). the service may set default values, and values may change when clusters are updated. Exactly one of config or virtual_cluster_config must be specified. (id: VirtualClusterConfig)</td>
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
    <td><a href="#projects_regions_clusters_get"><CopyableCode code="projects_regions_clusters_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clusterName"><code>clusterName</code></a></td>
    <td></td>
    <td>Gets the resource representation for a cluster in a project.</td>
</tr>
<tr>
    <td><a href="#projects_regions_clusters_list"><CopyableCode code="projects_regions_clusters_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all regions/&#123;region&#125;/clusters in a project alphabetically.</td>
</tr>
<tr>
    <td><a href="#projects_regions_clusters_create"><CopyableCode code="projects_regions_clusters_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-actionOnFailedPrimaryWorkers"><code>actionOnFailedPrimaryWorkers</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).</td>
</tr>
<tr>
    <td><a href="#projects_regions_clusters_patch"><CopyableCode code="projects_regions_clusters_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clusterName"><code>clusterName</code></a></td>
    <td><a href="#parameter-gracefulDecommissionTimeout"><code>gracefulDecommissionTimeout</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). The cluster must be in a RUNNING state or an error is returned.</td>
</tr>
<tr>
    <td><a href="#projects_regions_clusters_delete"><CopyableCode code="projects_regions_clusters_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clusterName"><code>clusterName</code></a></td>
    <td><a href="#parameter-clusterUuid"><code>clusterUuid</code></a>, <a href="#parameter-gracefulTerminationTimeout"><code>gracefulTerminationTimeout</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).</td>
</tr>
<tr>
    <td><a href="#projects_regions_clusters_diagnose"><CopyableCode code="projects_regions_clusters_diagnose" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clusterName"><code>clusterName</code></a></td>
    <td></td>
    <td>Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). After the operation completes, Operation.response contains DiagnoseClusterResults (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults).</td>
</tr>
<tr>
    <td><a href="#projects_regions_clusters_inject_credentials"><CopyableCode code="projects_regions_clusters_inject_credentials" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-regionsId"><code>regionsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Inject encrypted credentials into all of the VMs in a cluster.The target cluster must be a personal auth cluster assigned to the user who is issuing the RPC.</td>
</tr>
<tr>
    <td><a href="#projects_regions_clusters_repair"><CopyableCode code="projects_regions_clusters_repair" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clusterName"><code>clusterName</code></a></td>
    <td></td>
    <td>Repairs a cluster.</td>
</tr>
<tr>
    <td><a href="#projects_regions_clusters_start"><CopyableCode code="projects_regions_clusters_start" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clusterName"><code>clusterName</code></a></td>
    <td></td>
    <td>Starts a cluster in a project.</td>
</tr>
<tr>
    <td><a href="#projects_regions_clusters_stop"><CopyableCode code="projects_regions_clusters_stop" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clusterName"><code>clusterName</code></a></td>
    <td></td>
    <td>Stops a cluster in a project.</td>
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
<tr id="parameter-clusterName">
    <td><CopyableCode code="clusterName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-clustersId">
    <td><CopyableCode code="clustersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-regionsId">
    <td><CopyableCode code="regionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-actionOnFailedPrimaryWorkers">
    <td><CopyableCode code="actionOnFailedPrimaryWorkers" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-clusterUuid">
    <td><CopyableCode code="clusterUuid" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-gracefulDecommissionTimeout">
    <td><CopyableCode code="gracefulDecommissionTimeout" /></td>
    <td><code>string (google-duration)</code></td>
    <td></td>
</tr>
<tr id="parameter-gracefulTerminationTimeout">
    <td><CopyableCode code="gracefulTerminationTimeout" /></td>
    <td><code>string (google-duration)</code></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_regions_clusters_get"
    values={[
        { label: 'projects_regions_clusters_get', value: 'projects_regions_clusters_get' },
        { label: 'projects_regions_clusters_list', value: 'projects_regions_clusters_list' }
    ]}
>
<TabItem value="projects_regions_clusters_get">

Gets the resource representation for a cluster in a project.

```sql
SELECT
clusterName,
clusterUuid,
config,
labels,
metrics,
projectId,
status,
statusHistory,
virtualClusterConfig
FROM google.dataproc.clusters
WHERE projectId = '{{ projectId }}' -- required
AND region = '{{ region }}' -- required
AND clusterName = '{{ clusterName }}' -- required
;
```
</TabItem>
<TabItem value="projects_regions_clusters_list">

Lists all regions/&#123;region&#125;/clusters in a project alphabetically.

```sql
SELECT
clusterName,
clusterUuid,
config,
labels,
metrics,
projectId,
status,
statusHistory,
virtualClusterConfig
FROM google.dataproc.clusters
WHERE projectId = '{{ projectId }}' -- required
AND region = '{{ region }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_regions_clusters_create"
    values={[
        { label: 'projects_regions_clusters_create', value: 'projects_regions_clusters_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_regions_clusters_create">

Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).

```sql
INSERT INTO google.dataproc.clusters (
data__clusterName,
data__config,
data__labels,
data__projectId,
data__virtualClusterConfig,
projectId,
region,
actionOnFailedPrimaryWorkers,
requestId
)
SELECT 
'{{ clusterName }}',
'{{ config }}',
'{{ labels }}',
'{{ projectId }}',
'{{ virtualClusterConfig }}',
'{{ projectId }}',
'{{ region }}',
'{{ actionOnFailedPrimaryWorkers }}',
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
- name: clusters
  props:
    - name: projectId
      value: "{{ projectId }}"
      description: Required parameter for the clusters resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the clusters resource.
    - name: clusterName
      value: "{{ clusterName }}"
      description: |
        Required. The cluster name, which must be unique within a project. The name must start with a lowercase letter, and can contain up to 51 lowercase letters, numbers, and hyphens. It cannot end with a hyphen. The name of a deleted cluster can be reused.
    - name: config
      description: |
        Optional. The cluster config for a cluster of Compute Engine Instances. Note that the service may set default values, and values may change when clusters are updated.Exactly one of ClusterConfig or VirtualClusterConfig must be specified.
      value:
        autoscalingConfig:
          policyUri: "{{ policyUri }}"
        auxiliaryNodeGroups:
          - nodeGroup:
              labels: "{{ labels }}"
              name: "{{ name }}"
              nodeGroupConfig:
                accelerators:
                  - acceleratorCount: {{ acceleratorCount }}
                    acceleratorTypeUri: "{{ acceleratorTypeUri }}"
                diskConfig:
                  attachedDiskConfigs: "{{ attachedDiskConfigs }}"
                  bootDiskProvisionedIops: "{{ bootDiskProvisionedIops }}"
                  bootDiskProvisionedThroughput: "{{ bootDiskProvisionedThroughput }}"
                  bootDiskSizeGb: {{ bootDiskSizeGb }}
                  bootDiskType: "{{ bootDiskType }}"
                  localSsdInterface: "{{ localSsdInterface }}"
                  numLocalSsds: {{ numLocalSsds }}
                imageUri: "{{ imageUri }}"
                instanceFlexibilityPolicy:
                  instanceMachineTypes: "{{ instanceMachineTypes }}"
                  instanceSelectionList: "{{ instanceSelectionList }}"
                  instanceSelectionResults: "{{ instanceSelectionResults }}"
                  provisioningModelMix: "{{ provisioningModelMix }}"
                instanceNames:
                  - "{{ instanceNames }}"
                instanceReferences:
                  - instanceId: "{{ instanceId }}"
                    instanceName: "{{ instanceName }}"
                    publicEciesKey: "{{ publicEciesKey }}"
                    publicKey: "{{ publicKey }}"
                isPreemptible: {{ isPreemptible }}
                machineTypeUri: "{{ machineTypeUri }}"
                managedGroupConfig:
                  instanceGroupManagerName: "{{ instanceGroupManagerName }}"
                  instanceGroupManagerUri: "{{ instanceGroupManagerUri }}"
                  instanceTemplateName: "{{ instanceTemplateName }}"
                minCpuPlatform: "{{ minCpuPlatform }}"
                minNumInstances: {{ minNumInstances }}
                numInstances: {{ numInstances }}
                preemptibility: "{{ preemptibility }}"
                startupConfig:
                  requiredRegistrationFraction: {{ requiredRegistrationFraction }}
              roles:
                - "{{ roles }}"
            nodeGroupId: "{{ nodeGroupId }}"
        clusterTier: "{{ clusterTier }}"
        clusterType: "{{ clusterType }}"
        configBucket: "{{ configBucket }}"
        dataprocMetricConfig:
          metrics:
            - metricOverrides: "{{ metricOverrides }}"
              metricSource: "{{ metricSource }}"
        diagnosticBucket: "{{ diagnosticBucket }}"
        encryptionConfig:
          gcePdKmsKeyName: "{{ gcePdKmsKeyName }}"
          kmsKey: "{{ kmsKey }}"
        endpointConfig:
          enableHttpPortAccess: {{ enableHttpPortAccess }}
          httpPorts: "{{ httpPorts }}"
        engine: "{{ engine }}"
        gceClusterConfig:
          autoZoneExcludeZoneUris:
            - "{{ autoZoneExcludeZoneUris }}"
          confidentialInstanceConfig:
            confidentialInstanceType: "{{ confidentialInstanceType }}"
            enableConfidentialCompute: {{ enableConfidentialCompute }}
          internalIpOnly: {{ internalIpOnly }}
          metadata: "{{ metadata }}"
          networkUri: "{{ networkUri }}"
          nodeGroupAffinity:
            nodeGroupUri: "{{ nodeGroupUri }}"
          privateIpv6GoogleAccess: "{{ privateIpv6GoogleAccess }}"
          reservationAffinity:
            consumeReservationType: "{{ consumeReservationType }}"
            key: "{{ key }}"
            values:
              - "{{ values }}"
          resourceManagerTags: "{{ resourceManagerTags }}"
          serviceAccount: "{{ serviceAccount }}"
          serviceAccountScopes:
            - "{{ serviceAccountScopes }}"
          shieldedInstanceConfig:
            enableIntegrityMonitoring: {{ enableIntegrityMonitoring }}
            enableSecureBoot: {{ enableSecureBoot }}
            enableVtpm: {{ enableVtpm }}
          subnetworkUri: "{{ subnetworkUri }}"
          tags:
            - "{{ tags }}"
          zoneUri: "{{ zoneUri }}"
        gkeClusterConfig:
          gkeClusterTarget: "{{ gkeClusterTarget }}"
          namespacedGkeDeploymentTarget:
            clusterNamespace: "{{ clusterNamespace }}"
            targetGkeCluster: "{{ targetGkeCluster }}"
          nodePoolTarget:
            - nodePool: "{{ nodePool }}"
              nodePoolConfig:
                autoscaling:
                  maxNodeCount: {{ maxNodeCount }}
                  minNodeCount: {{ minNodeCount }}
                config:
                  accelerators: "{{ accelerators }}"
                  bootDiskKmsKey: "{{ bootDiskKmsKey }}"
                  localSsdCount: {{ localSsdCount }}
                  machineType: "{{ machineType }}"
                  minCpuPlatform: "{{ minCpuPlatform }}"
                  preemptible: {{ preemptible }}
                  serviceAccount: "{{ serviceAccount }}"
                  spot: {{ spot }}
                locations:
                  - "{{ locations }}"
              roles: "{{ roles }}"
        initializationActions:
          - executableFile: "{{ executableFile }}"
            executionTimeout: "{{ executionTimeout }}"
        lifecycleConfig:
          autoDeleteTime: "{{ autoDeleteTime }}"
          autoDeleteTtl: "{{ autoDeleteTtl }}"
          autoStopTime: "{{ autoStopTime }}"
          autoStopTtl: "{{ autoStopTtl }}"
          idleDeleteTtl: "{{ idleDeleteTtl }}"
          idleStartTime: "{{ idleStartTime }}"
          idleStopTtl: "{{ idleStopTtl }}"
        masterConfig:
          accelerators:
            - acceleratorCount: {{ acceleratorCount }}
              acceleratorTypeUri: "{{ acceleratorTypeUri }}"
          diskConfig:
            attachedDiskConfigs:
              - diskSizeGb: {{ diskSizeGb }}
                diskType: "{{ diskType }}"
                provisionedIops: "{{ provisionedIops }}"
                provisionedThroughput: "{{ provisionedThroughput }}"
            bootDiskProvisionedIops: "{{ bootDiskProvisionedIops }}"
            bootDiskProvisionedThroughput: "{{ bootDiskProvisionedThroughput }}"
            bootDiskSizeGb: {{ bootDiskSizeGb }}
            bootDiskType: "{{ bootDiskType }}"
            localSsdInterface: "{{ localSsdInterface }}"
            numLocalSsds: {{ numLocalSsds }}
          imageUri: "{{ imageUri }}"
          instanceFlexibilityPolicy:
            instanceMachineTypes: "{{ instanceMachineTypes }}"
            instanceSelectionList:
              - diskConfig:
                  attachedDiskConfigs: "{{ attachedDiskConfigs }}"
                  bootDiskProvisionedIops: "{{ bootDiskProvisionedIops }}"
                  bootDiskProvisionedThroughput: "{{ bootDiskProvisionedThroughput }}"
                  bootDiskSizeGb: {{ bootDiskSizeGb }}
                  bootDiskType: "{{ bootDiskType }}"
                  localSsdInterface: "{{ localSsdInterface }}"
                  numLocalSsds: {{ numLocalSsds }}
                machineTypes: "{{ machineTypes }}"
                rank: {{ rank }}
            instanceSelectionResults:
              - machineType: "{{ machineType }}"
                vmCount: {{ vmCount }}
            provisioningModelMix:
              standardCapacityBase: {{ standardCapacityBase }}
              standardCapacityPercentAboveBase: {{ standardCapacityPercentAboveBase }}
          instanceNames:
            - "{{ instanceNames }}"
          instanceReferences:
            - instanceId: "{{ instanceId }}"
              instanceName: "{{ instanceName }}"
              publicEciesKey: "{{ publicEciesKey }}"
              publicKey: "{{ publicKey }}"
          isPreemptible: {{ isPreemptible }}
          machineTypeUri: "{{ machineTypeUri }}"
          managedGroupConfig:
            instanceGroupManagerName: "{{ instanceGroupManagerName }}"
            instanceGroupManagerUri: "{{ instanceGroupManagerUri }}"
            instanceTemplateName: "{{ instanceTemplateName }}"
          minCpuPlatform: "{{ minCpuPlatform }}"
          minNumInstances: {{ minNumInstances }}
          numInstances: {{ numInstances }}
          preemptibility: "{{ preemptibility }}"
          startupConfig:
            requiredRegistrationFraction: {{ requiredRegistrationFraction }}
        metastoreConfig:
          dataprocMetastoreService: "{{ dataprocMetastoreService }}"
        secondaryWorkerConfig:
          accelerators:
            - acceleratorCount: {{ acceleratorCount }}
              acceleratorTypeUri: "{{ acceleratorTypeUri }}"
          diskConfig:
            attachedDiskConfigs:
              - diskSizeGb: {{ diskSizeGb }}
                diskType: "{{ diskType }}"
                provisionedIops: "{{ provisionedIops }}"
                provisionedThroughput: "{{ provisionedThroughput }}"
            bootDiskProvisionedIops: "{{ bootDiskProvisionedIops }}"
            bootDiskProvisionedThroughput: "{{ bootDiskProvisionedThroughput }}"
            bootDiskSizeGb: {{ bootDiskSizeGb }}
            bootDiskType: "{{ bootDiskType }}"
            localSsdInterface: "{{ localSsdInterface }}"
            numLocalSsds: {{ numLocalSsds }}
          imageUri: "{{ imageUri }}"
          instanceFlexibilityPolicy:
            instanceMachineTypes: "{{ instanceMachineTypes }}"
            instanceSelectionList:
              - diskConfig:
                  attachedDiskConfigs: "{{ attachedDiskConfigs }}"
                  bootDiskProvisionedIops: "{{ bootDiskProvisionedIops }}"
                  bootDiskProvisionedThroughput: "{{ bootDiskProvisionedThroughput }}"
                  bootDiskSizeGb: {{ bootDiskSizeGb }}
                  bootDiskType: "{{ bootDiskType }}"
                  localSsdInterface: "{{ localSsdInterface }}"
                  numLocalSsds: {{ numLocalSsds }}
                machineTypes: "{{ machineTypes }}"
                rank: {{ rank }}
            instanceSelectionResults:
              - machineType: "{{ machineType }}"
                vmCount: {{ vmCount }}
            provisioningModelMix:
              standardCapacityBase: {{ standardCapacityBase }}
              standardCapacityPercentAboveBase: {{ standardCapacityPercentAboveBase }}
          instanceNames:
            - "{{ instanceNames }}"
          instanceReferences:
            - instanceId: "{{ instanceId }}"
              instanceName: "{{ instanceName }}"
              publicEciesKey: "{{ publicEciesKey }}"
              publicKey: "{{ publicKey }}"
          isPreemptible: {{ isPreemptible }}
          machineTypeUri: "{{ machineTypeUri }}"
          managedGroupConfig:
            instanceGroupManagerName: "{{ instanceGroupManagerName }}"
            instanceGroupManagerUri: "{{ instanceGroupManagerUri }}"
            instanceTemplateName: "{{ instanceTemplateName }}"
          minCpuPlatform: "{{ minCpuPlatform }}"
          minNumInstances: {{ minNumInstances }}
          numInstances: {{ numInstances }}
          preemptibility: "{{ preemptibility }}"
          startupConfig:
            requiredRegistrationFraction: {{ requiredRegistrationFraction }}
        securityConfig:
          identityConfig:
            enableSsh: {{ enableSsh }}
            userServiceAccountMapping: "{{ userServiceAccountMapping }}"
          kerberosConfig:
            crossRealmTrustAdminServer: "{{ crossRealmTrustAdminServer }}"
            crossRealmTrustKdc: "{{ crossRealmTrustKdc }}"
            crossRealmTrustRealm: "{{ crossRealmTrustRealm }}"
            crossRealmTrustSharedPasswordUri: "{{ crossRealmTrustSharedPasswordUri }}"
            enableKerberos: {{ enableKerberos }}
            kdcDbKeyUri: "{{ kdcDbKeyUri }}"
            keyPasswordUri: "{{ keyPasswordUri }}"
            keystorePasswordUri: "{{ keystorePasswordUri }}"
            keystoreUri: "{{ keystoreUri }}"
            kmsKeyUri: "{{ kmsKeyUri }}"
            realm: "{{ realm }}"
            rootPrincipalPasswordUri: "{{ rootPrincipalPasswordUri }}"
            tgtLifetimeHours: {{ tgtLifetimeHours }}
            truststorePasswordUri: "{{ truststorePasswordUri }}"
            truststoreUri: "{{ truststoreUri }}"
        softwareConfig:
          imageVersion: "{{ imageVersion }}"
          optionalComponents:
            - "{{ optionalComponents }}"
          properties: "{{ properties }}"
        tempBucket: "{{ tempBucket }}"
        workerConfig:
          accelerators:
            - acceleratorCount: {{ acceleratorCount }}
              acceleratorTypeUri: "{{ acceleratorTypeUri }}"
          diskConfig:
            attachedDiskConfigs:
              - diskSizeGb: {{ diskSizeGb }}
                diskType: "{{ diskType }}"
                provisionedIops: "{{ provisionedIops }}"
                provisionedThroughput: "{{ provisionedThroughput }}"
            bootDiskProvisionedIops: "{{ bootDiskProvisionedIops }}"
            bootDiskProvisionedThroughput: "{{ bootDiskProvisionedThroughput }}"
            bootDiskSizeGb: {{ bootDiskSizeGb }}
            bootDiskType: "{{ bootDiskType }}"
            localSsdInterface: "{{ localSsdInterface }}"
            numLocalSsds: {{ numLocalSsds }}
          imageUri: "{{ imageUri }}"
          instanceFlexibilityPolicy:
            instanceMachineTypes: "{{ instanceMachineTypes }}"
            instanceSelectionList:
              - diskConfig:
                  attachedDiskConfigs: "{{ attachedDiskConfigs }}"
                  bootDiskProvisionedIops: "{{ bootDiskProvisionedIops }}"
                  bootDiskProvisionedThroughput: "{{ bootDiskProvisionedThroughput }}"
                  bootDiskSizeGb: {{ bootDiskSizeGb }}
                  bootDiskType: "{{ bootDiskType }}"
                  localSsdInterface: "{{ localSsdInterface }}"
                  numLocalSsds: {{ numLocalSsds }}
                machineTypes: "{{ machineTypes }}"
                rank: {{ rank }}
            instanceSelectionResults:
              - machineType: "{{ machineType }}"
                vmCount: {{ vmCount }}
            provisioningModelMix:
              standardCapacityBase: {{ standardCapacityBase }}
              standardCapacityPercentAboveBase: {{ standardCapacityPercentAboveBase }}
          instanceNames:
            - "{{ instanceNames }}"
          instanceReferences:
            - instanceId: "{{ instanceId }}"
              instanceName: "{{ instanceName }}"
              publicEciesKey: "{{ publicEciesKey }}"
              publicKey: "{{ publicKey }}"
          isPreemptible: {{ isPreemptible }}
          machineTypeUri: "{{ machineTypeUri }}"
          managedGroupConfig:
            instanceGroupManagerName: "{{ instanceGroupManagerName }}"
            instanceGroupManagerUri: "{{ instanceGroupManagerUri }}"
            instanceTemplateName: "{{ instanceTemplateName }}"
          minCpuPlatform: "{{ minCpuPlatform }}"
          minNumInstances: {{ minNumInstances }}
          numInstances: {{ numInstances }}
          preemptibility: "{{ preemptibility }}"
          startupConfig:
            requiredRegistrationFraction: {{ requiredRegistrationFraction }}
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. The labels to associate with this cluster. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster.
    - name: projectId
      value: "{{ projectId }}"
      description: |
        Required. The Google Cloud Platform project ID that the cluster belongs to.
    - name: virtualClusterConfig
      description: |
        Optional. The virtual cluster config is used when creating a cluster that does not directly control the underlying compute resources, for example, when creating a GKE cluster (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-overview). the service may set default values, and values may change when clusters are updated. Exactly one of config or virtual_cluster_config must be specified.
      value:
        auxiliaryServicesConfig:
          metastoreConfig:
            dataprocMetastoreService: "{{ dataprocMetastoreService }}"
          sparkHistoryServerConfig:
            dataprocCluster: "{{ dataprocCluster }}"
        kubernetesClusterConfig:
          gkeClusterConfig:
            gkeClusterTarget: "{{ gkeClusterTarget }}"
            namespacedGkeDeploymentTarget:
              clusterNamespace: "{{ clusterNamespace }}"
              targetGkeCluster: "{{ targetGkeCluster }}"
            nodePoolTarget:
              - nodePool: "{{ nodePool }}"
                nodePoolConfig:
                  autoscaling: "{{ autoscaling }}"
                  config: "{{ config }}"
                  locations: "{{ locations }}"
                roles: "{{ roles }}"
          kubernetesNamespace: "{{ kubernetesNamespace }}"
          kubernetesSoftwareConfig:
            componentVersion: "{{ componentVersion }}"
            properties: "{{ properties }}"
        stagingBucket: "{{ stagingBucket }}"
    - name: actionOnFailedPrimaryWorkers
      value: "{{ actionOnFailedPrimaryWorkers }}"
    - name: requestId
      value: "{{ requestId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_regions_clusters_patch"
    values={[
        { label: 'projects_regions_clusters_patch', value: 'projects_regions_clusters_patch' }
    ]}
>
<TabItem value="projects_regions_clusters_patch">

Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). The cluster must be in a RUNNING state or an error is returned.

```sql
UPDATE google.dataproc.clusters
SET 
data__clusterName = '{{ clusterName }}',
data__config = '{{ config }}',
data__labels = '{{ labels }}',
data__projectId = '{{ projectId }}',
data__virtualClusterConfig = '{{ virtualClusterConfig }}'
WHERE 
projectId = '{{ projectId }}' --required
AND region = '{{ region }}' --required
AND clusterName = '{{ clusterName }}' --required
AND gracefulDecommissionTimeout = '{{ gracefulDecommissionTimeout}}'
AND requestId = '{{ requestId}}'
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
    defaultValue="projects_regions_clusters_delete"
    values={[
        { label: 'projects_regions_clusters_delete', value: 'projects_regions_clusters_delete' }
    ]}
>
<TabItem value="projects_regions_clusters_delete">

Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).

```sql
DELETE FROM google.dataproc.clusters
WHERE projectId = '{{ projectId }}' --required
AND region = '{{ region }}' --required
AND clusterName = '{{ clusterName }}' --required
AND clusterUuid = '{{ clusterUuid }}'
AND gracefulTerminationTimeout = '{{ gracefulTerminationTimeout }}'
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_regions_clusters_diagnose"
    values={[
        { label: 'projects_regions_clusters_diagnose', value: 'projects_regions_clusters_diagnose' },
        { label: 'projects_regions_clusters_inject_credentials', value: 'projects_regions_clusters_inject_credentials' },
        { label: 'projects_regions_clusters_repair', value: 'projects_regions_clusters_repair' },
        { label: 'projects_regions_clusters_start', value: 'projects_regions_clusters_start' },
        { label: 'projects_regions_clusters_stop', value: 'projects_regions_clusters_stop' }
    ]}
>
<TabItem value="projects_regions_clusters_diagnose">

Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). After the operation completes, Operation.response contains DiagnoseClusterResults (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults).

```sql
EXEC google.dataproc.clusters.projects_regions_clusters_diagnose 
@projectId='{{ projectId }}' --required, 
@region='{{ region }}' --required, 
@clusterName='{{ clusterName }}' --required 
@@json=
'{
"diagnosisInterval": "{{ diagnosisInterval }}", 
"job": "{{ job }}", 
"jobs": "{{ jobs }}", 
"tarballAccess": "{{ tarballAccess }}", 
"tarballGcsDir": "{{ tarballGcsDir }}", 
"yarnApplicationId": "{{ yarnApplicationId }}", 
"yarnApplicationIds": "{{ yarnApplicationIds }}"
}'
;
```
</TabItem>
<TabItem value="projects_regions_clusters_inject_credentials">

Inject encrypted credentials into all of the VMs in a cluster.The target cluster must be a personal auth cluster assigned to the user who is issuing the RPC.

```sql
EXEC google.dataproc.clusters.projects_regions_clusters_inject_credentials 
@projectsId='{{ projectsId }}' --required, 
@regionsId='{{ regionsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"clusterUuid": "{{ clusterUuid }}", 
"credentialsCiphertext": "{{ credentialsCiphertext }}"
}'
;
```
</TabItem>
<TabItem value="projects_regions_clusters_repair">

Repairs a cluster.

```sql
EXEC google.dataproc.clusters.projects_regions_clusters_repair 
@projectId='{{ projectId }}' --required, 
@region='{{ region }}' --required, 
@clusterName='{{ clusterName }}' --required 
@@json=
'{
"cluster": "{{ cluster }}", 
"clusterUuid": "{{ clusterUuid }}", 
"dataprocSuperUser": {{ dataprocSuperUser }}, 
"gracefulDecommissionTimeout": "{{ gracefulDecommissionTimeout }}", 
"nodePools": "{{ nodePools }}", 
"parentOperationId": "{{ parentOperationId }}", 
"requestId": "{{ requestId }}"
}'
;
```
</TabItem>
<TabItem value="projects_regions_clusters_start">

Starts a cluster in a project.

```sql
EXEC google.dataproc.clusters.projects_regions_clusters_start 
@projectId='{{ projectId }}' --required, 
@region='{{ region }}' --required, 
@clusterName='{{ clusterName }}' --required 
@@json=
'{
"clusterUuid": "{{ clusterUuid }}", 
"requestId": "{{ requestId }}"
}'
;
```
</TabItem>
<TabItem value="projects_regions_clusters_stop">

Stops a cluster in a project.

```sql
EXEC google.dataproc.clusters.projects_regions_clusters_stop 
@projectId='{{ projectId }}' --required, 
@region='{{ region }}' --required, 
@clusterName='{{ clusterName }}' --required 
@@json=
'{
"clusterUuid": "{{ clusterUuid }}", 
"requestId": "{{ requestId }}"
}'
;
```
</TabItem>
</Tabs>
