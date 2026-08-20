--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
  - monitoring
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

Creates, updates, deletes, gets or lists a <code>services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.monitoring.services" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="services_list"
    values={[
        { label: 'services_list', value: 'services_list' },
        { label: 'services_get', value: 'services_get' }
    ]}
>
<TabItem value="services_list">

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
    <td>Identifier. Resource name for this Service. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID] </td>
</tr>
<tr>
    <td><CopyableCode code="appEngine" /></td>
    <td><code>object</code></td>
    <td>Type used for App Engine services. (id: AppEngine)</td>
</tr>
<tr>
    <td><CopyableCode code="basicService" /></td>
    <td><code>object</code></td>
    <td>Message that contains the service type and service labels of this service if it is a basic service. Documentation and examples here (https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/api/api-structures#basic-svc-w-basic-sli). (id: BasicService)</td>
</tr>
<tr>
    <td><CopyableCode code="cloudEndpoints" /></td>
    <td><code>object</code></td>
    <td>Type used for Cloud Endpoints services. (id: CloudEndpoints)</td>
</tr>
<tr>
    <td><CopyableCode code="cloudRun" /></td>
    <td><code>object</code></td>
    <td>Type used for Cloud Run services. (id: CloudRun)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterIstio" /></td>
    <td><code>object</code></td>
    <td>Type used for Istio services that live in a Kubernetes cluster. (id: ClusterIstio)</td>
</tr>
<tr>
    <td><CopyableCode code="custom" /></td>
    <td><code>object</code></td>
    <td>Custom service type. (id: Custom)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Name used for UI elements listing this Service.</td>
</tr>
<tr>
    <td><CopyableCode code="gkeNamespace" /></td>
    <td><code>object</code></td>
    <td>Type used for GKE Namespaces. (id: GkeNamespace)</td>
</tr>
<tr>
    <td><CopyableCode code="gkeService" /></td>
    <td><code>object</code></td>
    <td>Type used for GKE Services (the Kubernetes concept of a service). (id: GkeService)</td>
</tr>
<tr>
    <td><CopyableCode code="gkeWorkload" /></td>
    <td><code>object</code></td>
    <td>Type used for GKE Workloads. (id: GkeWorkload)</td>
</tr>
<tr>
    <td><CopyableCode code="istioCanonicalService" /></td>
    <td><code>object</code></td>
    <td>Type used for canonical services scoped to an Istio mesh. Metrics for Istio are documented here (https://istio.io/latest/docs/reference/config/metrics/) (id: IstioCanonicalService)</td>
</tr>
<tr>
    <td><CopyableCode code="meshIstio" /></td>
    <td><code>object</code></td>
    <td>Type used for Istio services scoped to an Istio mesh. (id: MeshIstio)</td>
</tr>
<tr>
    <td><CopyableCode code="telemetry" /></td>
    <td><code>object</code></td>
    <td>Configuration for how to query telemetry on a Service. (id: Telemetry)</td>
</tr>
<tr>
    <td><CopyableCode code="userLabels" /></td>
    <td><code>object</code></td>
    <td>Labels which have been used to annotate the service. Label keys must start with a letter. Label keys and values may contain lowercase letters, numbers, underscores, and dashes. Label keys and values have a maximum length of 63 characters, and must be less than 128 bytes in size. Up to 64 label entries may be stored. For labels which do not have a semantic value, the empty string may be supplied for the label value.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="services_get">

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
    <td>Identifier. Resource name for this Service. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID] </td>
</tr>
<tr>
    <td><CopyableCode code="appEngine" /></td>
    <td><code>object</code></td>
    <td>Type used for App Engine services. (id: AppEngine)</td>
</tr>
<tr>
    <td><CopyableCode code="basicService" /></td>
    <td><code>object</code></td>
    <td>Message that contains the service type and service labels of this service if it is a basic service. Documentation and examples here (https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/api/api-structures#basic-svc-w-basic-sli). (id: BasicService)</td>
</tr>
<tr>
    <td><CopyableCode code="cloudEndpoints" /></td>
    <td><code>object</code></td>
    <td>Type used for Cloud Endpoints services. (id: CloudEndpoints)</td>
</tr>
<tr>
    <td><CopyableCode code="cloudRun" /></td>
    <td><code>object</code></td>
    <td>Type used for Cloud Run services. (id: CloudRun)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterIstio" /></td>
    <td><code>object</code></td>
    <td>Type used for Istio services that live in a Kubernetes cluster. (id: ClusterIstio)</td>
</tr>
<tr>
    <td><CopyableCode code="custom" /></td>
    <td><code>object</code></td>
    <td>Custom service type. (id: Custom)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Name used for UI elements listing this Service.</td>
</tr>
<tr>
    <td><CopyableCode code="gkeNamespace" /></td>
    <td><code>object</code></td>
    <td>Type used for GKE Namespaces. (id: GkeNamespace)</td>
</tr>
<tr>
    <td><CopyableCode code="gkeService" /></td>
    <td><code>object</code></td>
    <td>Type used for GKE Services (the Kubernetes concept of a service). (id: GkeService)</td>
</tr>
<tr>
    <td><CopyableCode code="gkeWorkload" /></td>
    <td><code>object</code></td>
    <td>Type used for GKE Workloads. (id: GkeWorkload)</td>
</tr>
<tr>
    <td><CopyableCode code="istioCanonicalService" /></td>
    <td><code>object</code></td>
    <td>Type used for canonical services scoped to an Istio mesh. Metrics for Istio are documented here (https://istio.io/latest/docs/reference/config/metrics/) (id: IstioCanonicalService)</td>
</tr>
<tr>
    <td><CopyableCode code="meshIstio" /></td>
    <td><code>object</code></td>
    <td>Type used for Istio services scoped to an Istio mesh. (id: MeshIstio)</td>
</tr>
<tr>
    <td><CopyableCode code="telemetry" /></td>
    <td><code>object</code></td>
    <td>Configuration for how to query telemetry on a Service. (id: Telemetry)</td>
</tr>
<tr>
    <td><CopyableCode code="userLabels" /></td>
    <td><code>object</code></td>
    <td>Labels which have been used to annotate the service. Label keys must start with a letter. Label keys and values may contain lowercase letters, numbers, underscores, and dashes. Label keys and values have a maximum length of 63 characters, and must be less than 128 bytes in size. Up to 64 label entries may be stored. For labels which do not have a semantic value, the empty string may be supplied for the label value.</td>
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
    <td><a href="#services_list"><CopyableCode code="services_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-parentType"><code>parentType</code></a>, <a href="#parameter-parent"><code>parent</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>List Services for this Metrics Scope.</td>
</tr>
<tr>
    <td><a href="#services_get"><CopyableCode code="services_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Get the named Service.</td>
</tr>
<tr>
    <td><a href="#services_create"><CopyableCode code="services_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-parentType"><code>parentType</code></a>, <a href="#parameter-parent"><code>parent</code></a></td>
    <td><a href="#parameter-serviceId"><code>serviceId</code></a></td>
    <td>Create a Service.</td>
</tr>
<tr>
    <td><a href="#services_patch"><CopyableCode code="services_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update this Service.</td>
</tr>
<tr>
    <td><a href="#services_delete"><CopyableCode code="services_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Soft delete this Service.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-parent">
    <td><CopyableCode code="parent" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-parentType">
    <td><CopyableCode code="parentType" /></td>
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
<tr id="parameter-serviceId">
    <td><CopyableCode code="serviceId" /></td>
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
    defaultValue="services_list"
    values={[
        { label: 'services_list', value: 'services_list' },
        { label: 'services_get', value: 'services_get' }
    ]}
>
<TabItem value="services_list">

List Services for this Metrics Scope.

```sql
SELECT
name,
appEngine,
basicService,
cloudEndpoints,
cloudRun,
clusterIstio,
custom,
displayName,
gkeNamespace,
gkeService,
gkeWorkload,
istioCanonicalService,
meshIstio,
telemetry,
userLabels
FROM google.monitoring.services
WHERE parentType = '{{ parentType }}' -- required
AND parent = '{{ parent }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
<TabItem value="services_get">

Get the named Service.

```sql
SELECT
name,
appEngine,
basicService,
cloudEndpoints,
cloudRun,
clusterIstio,
custom,
displayName,
gkeNamespace,
gkeService,
gkeWorkload,
istioCanonicalService,
meshIstio,
telemetry,
userLabels
FROM google.monitoring.services
WHERE name = '{{ name }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="services_create"
    values={[
        { label: 'services_create', value: 'services_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="services_create">

Create a Service.

```sql
INSERT INTO google.monitoring.services (
data__appEngine,
data__basicService,
data__cloudEndpoints,
data__cloudRun,
data__clusterIstio,
data__custom,
data__displayName,
data__gkeNamespace,
data__gkeService,
data__gkeWorkload,
data__istioCanonicalService,
data__meshIstio,
data__name,
data__telemetry,
data__userLabels,
parentType,
parent,
serviceId
)
SELECT 
'{{ appEngine }}',
'{{ basicService }}',
'{{ cloudEndpoints }}',
'{{ cloudRun }}',
'{{ clusterIstio }}',
'{{ custom }}',
'{{ displayName }}',
'{{ gkeNamespace }}',
'{{ gkeService }}',
'{{ gkeWorkload }}',
'{{ istioCanonicalService }}',
'{{ meshIstio }}',
'{{ name }}',
'{{ telemetry }}',
'{{ userLabels }}',
'{{ parentType }}',
'{{ parent }}',
'{{ serviceId }}'
RETURNING
name,
appEngine,
basicService,
cloudEndpoints,
cloudRun,
clusterIstio,
custom,
displayName,
gkeNamespace,
gkeService,
gkeWorkload,
istioCanonicalService,
meshIstio,
telemetry,
userLabels
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: services
  props:
    - name: parentType
      value: "{{ parentType }}"
      description: Required parameter for the services resource.
    - name: parent
      value: "{{ parent }}"
      description: Required parameter for the services resource.
    - name: appEngine
      description: |
        Type used for App Engine services.
      value:
        moduleId: "{{ moduleId }}"
    - name: basicService
      description: |
        Message that contains the service type and service labels of this service if it is a basic service. Documentation and examples here (https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/api/api-structures#basic-svc-w-basic-sli).
      value:
        serviceLabels: "{{ serviceLabels }}"
        serviceType: "{{ serviceType }}"
    - name: cloudEndpoints
      description: |
        Type used for Cloud Endpoints services.
      value:
        service: "{{ service }}"
    - name: cloudRun
      description: |
        Type used for Cloud Run services.
      value:
        location: "{{ location }}"
        serviceName: "{{ serviceName }}"
    - name: clusterIstio
      description: |
        Type used for Istio services that live in a Kubernetes cluster.
      value:
        clusterName: "{{ clusterName }}"
        location: "{{ location }}"
        serviceName: "{{ serviceName }}"
        serviceNamespace: "{{ serviceNamespace }}"
    - name: custom
      value: "{{ custom }}"
      description: |
        Custom service type.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Name used for UI elements listing this Service.
    - name: gkeNamespace
      description: |
        Type used for GKE Namespaces.
      value:
        clusterName: "{{ clusterName }}"
        location: "{{ location }}"
        namespaceName: "{{ namespaceName }}"
        projectId: "{{ projectId }}"
    - name: gkeService
      description: |
        Type used for GKE Services (the Kubernetes concept of a service).
      value:
        clusterName: "{{ clusterName }}"
        location: "{{ location }}"
        namespaceName: "{{ namespaceName }}"
        projectId: "{{ projectId }}"
        serviceName: "{{ serviceName }}"
    - name: gkeWorkload
      description: |
        Type used for GKE Workloads.
      value:
        clusterName: "{{ clusterName }}"
        location: "{{ location }}"
        namespaceName: "{{ namespaceName }}"
        projectId: "{{ projectId }}"
        topLevelControllerName: "{{ topLevelControllerName }}"
        topLevelControllerType: "{{ topLevelControllerType }}"
    - name: istioCanonicalService
      description: |
        Type used for canonical services scoped to an Istio mesh. Metrics for Istio are documented here (https://istio.io/latest/docs/reference/config/metrics/)
      value:
        canonicalService: "{{ canonicalService }}"
        canonicalServiceNamespace: "{{ canonicalServiceNamespace }}"
        meshUid: "{{ meshUid }}"
    - name: meshIstio
      description: |
        Type used for Istio services scoped to an Istio mesh.
      value:
        meshUid: "{{ meshUid }}"
        serviceName: "{{ serviceName }}"
        serviceNamespace: "{{ serviceNamespace }}"
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. Resource name for this Service. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]
    - name: telemetry
      description: |
        Configuration for how to query telemetry on a Service.
      value:
        resourceName: "{{ resourceName }}"
    - name: userLabels
      value: "{{ userLabels }}"
      description: |
        Labels which have been used to annotate the service. Label keys must start with a letter. Label keys and values may contain lowercase letters, numbers, underscores, and dashes. Label keys and values have a maximum length of 63 characters, and must be less than 128 bytes in size. Up to 64 label entries may be stored. For labels which do not have a semantic value, the empty string may be supplied for the label value.
    - name: serviceId
      value: "{{ serviceId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="services_patch"
    values={[
        { label: 'services_patch', value: 'services_patch' }
    ]}
>
<TabItem value="services_patch">

Update this Service.

```sql
UPDATE google.monitoring.services
SET 
data__appEngine = '{{ appEngine }}',
data__basicService = '{{ basicService }}',
data__cloudEndpoints = '{{ cloudEndpoints }}',
data__cloudRun = '{{ cloudRun }}',
data__clusterIstio = '{{ clusterIstio }}',
data__custom = '{{ custom }}',
data__displayName = '{{ displayName }}',
data__gkeNamespace = '{{ gkeNamespace }}',
data__gkeService = '{{ gkeService }}',
data__gkeWorkload = '{{ gkeWorkload }}',
data__istioCanonicalService = '{{ istioCanonicalService }}',
data__meshIstio = '{{ meshIstio }}',
data__name = '{{ name }}',
data__telemetry = '{{ telemetry }}',
data__userLabels = '{{ userLabels }}'
WHERE 
name = '{{ name }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
appEngine,
basicService,
cloudEndpoints,
cloudRun,
clusterIstio,
custom,
displayName,
gkeNamespace,
gkeService,
gkeWorkload,
istioCanonicalService,
meshIstio,
telemetry,
userLabels;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="services_delete"
    values={[
        { label: 'services_delete', value: 'services_delete' }
    ]}
>
<TabItem value="services_delete">

Soft delete this Service.

```sql
DELETE FROM google.monitoring.services
WHERE name = '{{ name }}' --required
;
```
</TabItem>
</Tabs>
