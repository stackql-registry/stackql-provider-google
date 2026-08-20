--- 
title: instance_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_templates
  - compute
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

Creates, updates, deletes, gets or lists an <code>instance_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.instance_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' },
        { label: 'aggregated_list', value: 'aggregated_list' }
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
    <td><CopyableCode code="id" /></td>
    <td><code>string (uint64)</code></td>
    <td>Output only. [Output Only] A unique identifier for this instance template. The server defines this identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply withRFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: <code>&#91;a-z&#93;(?:&#91;-a-z0-9&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The creation timestamp for this instance template inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The resource type, which is alwayscompute#instanceTemplate for instance templates. (default: compute#instanceTemplate)</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>The instance properties for this instance template. (id: InstanceProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] URL of the region where the instance template resides. Only applicable for regional resources.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The URL for this instance template. The server defines this URL.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceInstance" /></td>
    <td><code>string</code></td>
    <td>The source instance used to create the template. You can provide this as a partial or full URL to the resource. For example, the following are valid values:              - https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/instance     - projects/project/zones/zone/instances/instance</td>
</tr>
<tr>
    <td><CopyableCode code="sourceInstanceParams" /></td>
    <td><code>object</code></td>
    <td>The source instance params to use to create this instance template. (id: SourceInstanceParams)</td>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>[Output Only] Unique identifier for the resource; defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>A list of InstanceTemplate resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The resource type, which is alwayscompute#instanceTemplatesListResponse for instance template lists. (default: compute#instanceTemplateList)</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>[Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger thanmaxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="warning" /></td>
    <td><code>object</code></td>
    <td>[Output Only] Informational warning message.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="aggregated_list">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string (uint64)</code></td>
    <td>Output only. [Output Only] A unique identifier for this instance template. The server defines this identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply withRFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: <code>&#91;a-z&#93;(?:&#91;-a-z0-9&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The creation timestamp for this instance template inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The resource type, which is alwayscompute#instanceTemplate for instance templates. (default: compute#instanceTemplate)</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>The instance properties for this instance template. (id: InstanceProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] URL of the region where the instance template resides. Only applicable for regional resources.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] The URL for this instance template. The server defines this URL.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceInstance" /></td>
    <td><code>string</code></td>
    <td>The source instance used to create the template. You can provide this as a partial or full URL to the resource. For example, the following are valid values:              - https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/instance     - projects/project/zones/zone/instances/instance</td>
</tr>
<tr>
    <td><CopyableCode code="sourceInstanceParams" /></td>
    <td><code>object</code></td>
    <td>The source instance params to use to create this instance template. (id: SourceInstanceParams)</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceTemplate"><code>instanceTemplate</code></a></td>
    <td></td>
    <td>Returns the specified instance template.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Retrieves a list of instance templates that are contained within the<br />specified project and region.</td>
</tr>
<tr>
    <td><a href="#aggregated_list"><CopyableCode code="aggregated_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-includeAllScopes"><code>includeAllScopes</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a>, <a href="#parameter-serviceProjectNumber"><code>serviceProjectNumber</code></a></td>
    <td>Retrieves the list of all InstanceTemplates resources, regional and global,<br />available to the specified project.<br /><br />To prevent failure, Google recommends that you set the<br />`returnPartialSuccess` parameter to `true`.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates an instance template in the specified project and region using the<br />global instance template whose URL is included in the request.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceTemplate"><code>instanceTemplate</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified instance template. Deleting an instance template is<br />permanent and cannot be undone.</td>
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
<tr id="parameter-instanceTemplate">
    <td><CopyableCode code="instanceTemplate" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includeAllScopes">
    <td><CopyableCode code="includeAllScopes" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (uint32)</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
    <td><code>string</code></td>
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
<tr id="parameter-returnPartialSuccess">
    <td><CopyableCode code="returnPartialSuccess" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-serviceProjectNumber">
    <td><CopyableCode code="serviceProjectNumber" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' },
        { label: 'aggregated_list', value: 'aggregated_list' }
    ]}
>
<TabItem value="get">

Returns the specified instance template.

```sql
SELECT
id,
name,
creationTimestamp,
description,
kind,
properties,
region,
selfLink,
sourceInstance,
sourceInstanceParams
FROM google.compute.instance_templates
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND instanceTemplate = '{{ instanceTemplate }}' -- required
;
```
</TabItem>
<TabItem value="list">

Retrieves a list of instance templates that are contained within the<br />specified project and region.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.instance_templates
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND filter = '{{ filter }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
;
```
</TabItem>
<TabItem value="aggregated_list">

Retrieves the list of all InstanceTemplates resources, regional and global,<br />available to the specified project.<br /><br />To prevent failure, Google recommends that you set the<br />`returnPartialSuccess` parameter to `true`.

```sql
SELECT
id,
name,
creationTimestamp,
description,
kind,
properties,
region,
selfLink,
sourceInstance,
sourceInstanceParams
FROM google.compute.instance_templates
WHERE project = '{{ project }}' -- required
AND filter = '{{ filter }}'
AND includeAllScopes = '{{ includeAllScopes }}'
AND maxResults = '{{ maxResults }}'
AND orderBy = '{{ orderBy }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
AND serviceProjectNumber = '{{ serviceProjectNumber }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="insert"
    values={[
        { label: 'insert', value: 'insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert">

Creates an instance template in the specified project and region using the<br />global instance template whose URL is included in the request.

```sql
INSERT INTO google.compute.instance_templates (
data__description,
data__name,
data__properties,
data__sourceInstance,
data__sourceInstanceParams,
project,
region,
requestId
)
SELECT 
'{{ description }}',
'{{ name }}',
'{{ properties }}',
'{{ sourceInstance }}',
'{{ sourceInstanceParams }}',
'{{ project }}',
'{{ region }}',
'{{ requestId }}'
RETURNING
id,
name,
clientOperationId,
creationTimestamp,
description,
endTime,
error,
getVersionOperationMetadata,
httpErrorMessage,
httpErrorStatusCode,
insertTime,
instancesBulkInsertOperationMetadata,
kind,
operationGroupId,
operationType,
progress,
region,
selfLink,
setCommonInstanceMetadataOperationMetadata,
startTime,
status,
statusMessage,
targetId,
targetLink,
user,
warnings,
zone
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: instance_templates
  props:
    - name: project
      value: "{{ project }}"
      description: Required parameter for the instance_templates resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the instance_templates resource.
    - name: description
      value: "{{ description }}"
      description: |
        An optional description of this resource. Provide this property when you
        create the resource.
    - name: name
      value: "{{ name }}"
      description: |
        Name of the resource; provided by the client when the resource is created.
        The name must be 1-63 characters long, and comply withRFC1035.
        Specifically, the name must be 1-63 characters long and match the regular
        expression \`[a-z]([-a-z0-9]*[a-z0-9])?\` which means the first
        character must be a lowercase letter, and all following characters must be
        a dash, lowercase letter, or digit, except the last character, which cannot
        be a dash.
    - name: properties
      description: |
        The instance properties for this instance template.
      value:
        advancedMachineFeatures:
          enableNestedVirtualization: {{ enableNestedVirtualization }}
          enableUefiNetworking: {{ enableUefiNetworking }}
          performanceMonitoringUnit: "{{ performanceMonitoringUnit }}"
          threadsPerCore: {{ threadsPerCore }}
          turboMode: "{{ turboMode }}"
          visibleCoreCount: {{ visibleCoreCount }}
        canIpForward: {{ canIpForward }}
        confidentialInstanceConfig:
          confidentialInstanceType: "{{ confidentialInstanceType }}"
          enableConfidentialCompute: {{ enableConfidentialCompute }}
        description: "{{ description }}"
        disks:
          - architecture: "{{ architecture }}"
            autoDelete: {{ autoDelete }}
            boot: {{ boot }}
            deviceName: "{{ deviceName }}"
            diskEncryptionKey:
              kmsKeyName: "{{ kmsKeyName }}"
              kmsKeyServiceAccount: "{{ kmsKeyServiceAccount }}"
              rawKey: "{{ rawKey }}"
              rsaEncryptedKey: "{{ rsaEncryptedKey }}"
              sha256: "{{ sha256 }}"
            diskSizeGb: "{{ diskSizeGb }}"
            forceAttach: {{ forceAttach }}
            guestOsFeatures: "{{ guestOsFeatures }}"
            index: {{ index }}
            initializeParams:
              architecture: "{{ architecture }}"
              description: "{{ description }}"
              diskName: "{{ diskName }}"
              diskSizeGb: "{{ diskSizeGb }}"
              diskType: "{{ diskType }}"
              enableConfidentialCompute: {{ enableConfidentialCompute }}
              labels: "{{ labels }}"
              licenses:
                - "{{ licenses }}"
              onUpdateAction: "{{ onUpdateAction }}"
              provisionedIops: "{{ provisionedIops }}"
              provisionedThroughput: "{{ provisionedThroughput }}"
              replicaZones:
                - "{{ replicaZones }}"
              resourceManagerTags: "{{ resourceManagerTags }}"
              resourcePolicies:
                - "{{ resourcePolicies }}"
              sourceImage: "{{ sourceImage }}"
              sourceImageEncryptionKey:
                kmsKeyName: "{{ kmsKeyName }}"
                kmsKeyServiceAccount: "{{ kmsKeyServiceAccount }}"
                rawKey: "{{ rawKey }}"
                rsaEncryptedKey: "{{ rsaEncryptedKey }}"
                sha256: "{{ sha256 }}"
              sourceSnapshot: "{{ sourceSnapshot }}"
              sourceSnapshotEncryptionKey:
                kmsKeyName: "{{ kmsKeyName }}"
                kmsKeyServiceAccount: "{{ kmsKeyServiceAccount }}"
                rawKey: "{{ rawKey }}"
                rsaEncryptedKey: "{{ rsaEncryptedKey }}"
                sha256: "{{ sha256 }}"
              storagePool: "{{ storagePool }}"
            interface: "{{ interface }}"
            kind: "{{ kind }}"
            licenses: "{{ licenses }}"
            mode: "{{ mode }}"
            savedState: "{{ savedState }}"
            shieldedInstanceInitialState:
              dbs:
                - content: "{{ content }}"
                  fileType: "{{ fileType }}"
              dbxs:
                - content: "{{ content }}"
                  fileType: "{{ fileType }}"
              keks:
                - content: "{{ content }}"
                  fileType: "{{ fileType }}"
              pk:
                content: "{{ content }}"
                fileType: "{{ fileType }}"
            source: "{{ source }}"
            type: "{{ type }}"
        guestAccelerators:
          - acceleratorCount: {{ acceleratorCount }}
            acceleratorType: "{{ acceleratorType }}"
        keyRevocationActionType: "{{ keyRevocationActionType }}"
        labels: "{{ labels }}"
        localSsdEncryptionMode: "{{ localSsdEncryptionMode }}"
        machineType: "{{ machineType }}"
        metadata:
          fingerprint: "{{ fingerprint }}"
          items:
            - key: "{{ key }}"
              value: "{{ value }}"
          kind: "{{ kind }}"
        minCpuPlatform: "{{ minCpuPlatform }}"
        networkInterfaces:
          - accessConfigs: "{{ accessConfigs }}"
            aliasIpRanges: "{{ aliasIpRanges }}"
            aliasIpv6Ranges: "{{ aliasIpv6Ranges }}"
            enableVpcScopedDns: {{ enableVpcScopedDns }}
            fingerprint: "{{ fingerprint }}"
            igmpQuery: "{{ igmpQuery }}"
            internalIpv6PrefixLength: {{ internalIpv6PrefixLength }}
            ipv6AccessConfigs: "{{ ipv6AccessConfigs }}"
            ipv6AccessType: "{{ ipv6AccessType }}"
            ipv6Address: "{{ ipv6Address }}"
            kind: "{{ kind }}"
            name: "{{ name }}"
            network: "{{ network }}"
            networkAttachment: "{{ networkAttachment }}"
            networkIP: "{{ networkIP }}"
            nicType: "{{ nicType }}"
            parentNicName: "{{ parentNicName }}"
            queueCount: {{ queueCount }}
            serviceClassId: "{{ serviceClassId }}"
            stackType: "{{ stackType }}"
            subnetwork: "{{ subnetwork }}"
            vlan: {{ vlan }}
        networkPerformanceConfig:
          totalEgressBandwidthTier: "{{ totalEgressBandwidthTier }}"
        privateIpv6GoogleAccess: "{{ privateIpv6GoogleAccess }}"
        reservationAffinity:
          consumeReservationType: "{{ consumeReservationType }}"
          key: "{{ key }}"
          values:
            - "{{ values }}"
        resourceManagerTags: "{{ resourceManagerTags }}"
        resourcePolicies:
          - "{{ resourcePolicies }}"
        scheduling:
          automaticRestart: {{ automaticRestart }}
          availabilityDomain: {{ availabilityDomain }}
          gracefulShutdown:
            enabled: {{ enabled }}
            maxDuration:
              nanos: {{ nanos }}
              seconds: "{{ seconds }}"
          hostErrorTimeoutSeconds: {{ hostErrorTimeoutSeconds }}
          instanceTerminationAction: "{{ instanceTerminationAction }}"
          localSsdRecoveryTimeout:
            nanos: {{ nanos }}
            seconds: "{{ seconds }}"
          locationHint: "{{ locationHint }}"
          maxRunDuration:
            nanos: {{ nanos }}
            seconds: "{{ seconds }}"
          minNodeCpus: {{ minNodeCpus }}
          nodeAffinities:
            - key: "{{ key }}"
              operator: "{{ operator }}"
              values: "{{ values }}"
          onHostMaintenance: "{{ onHostMaintenance }}"
          onInstanceStopAction:
            discardLocalSsd: {{ discardLocalSsd }}
          preemptible: {{ preemptible }}
          preemptionNoticeDuration:
            nanos: {{ nanos }}
            seconds: "{{ seconds }}"
          provisioningModel: "{{ provisioningModel }}"
          skipGuestOsShutdown: {{ skipGuestOsShutdown }}
          terminationTime: "{{ terminationTime }}"
        serviceAccounts:
          - email: "{{ email }}"
            scopes: "{{ scopes }}"
        shieldedInstanceConfig:
          enableIntegrityMonitoring: {{ enableIntegrityMonitoring }}
          enableSecureBoot: {{ enableSecureBoot }}
          enableVtpm: {{ enableVtpm }}
        tags:
          fingerprint: "{{ fingerprint }}"
          items:
            - "{{ items }}"
        workloadIdentityConfig:
          identity: "{{ identity }}"
          identityCertificateEnabled: {{ identityCertificateEnabled }}
    - name: sourceInstance
      value: "{{ sourceInstance }}"
      description: |
        The source instance used to create the template. You can provide this as a
        partial or full URL to the resource. For example, the following are valid
        values:
        - https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/instance
        - projects/project/zones/zone/instances/instance
    - name: sourceInstanceParams
      description: |
        The source instance params to use to create this instance template.
      value:
        diskConfigs:
          - autoDelete: {{ autoDelete }}
            customImage: "{{ customImage }}"
            deviceName: "{{ deviceName }}"
            instantiateFrom: "{{ instantiateFrom }}"
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

Deletes the specified instance template. Deleting an instance template is<br />permanent and cannot be undone.

```sql
DELETE FROM google.compute.instance_templates
WHERE project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND instanceTemplate = '{{ instanceTemplate }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
