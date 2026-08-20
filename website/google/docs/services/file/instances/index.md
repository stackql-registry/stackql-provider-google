--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
  - file
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

Creates, updates, deletes, gets or lists an <code>instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.file.instances" /></td></tr>
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
    <td>Output only. The resource name of the instance, in the format `projects/&#123;project&#125;/locations/&#123;location&#125;/instances/&#123;instance&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="capacityStepSizeGb" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The incremental increase or decrease in capacity, designated in some number of GB.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customPerformanceSupported" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether this instance supports configuring its performance. If true, the user can configure the instance's performance by using the 'performance_config' field.</td>
</tr>
<tr>
    <td><CopyableCode code="deletionProtectionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Indicates whether the instance is protected against deletion.</td>
</tr>
<tr>
    <td><CopyableCode code="deletionProtectionReason" /></td>
    <td><code>string</code></td>
    <td>Optional. The reason for enabling deletion protection.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the instance (2048 characters or less).</td>
</tr>
<tr>
    <td><CopyableCode code="directoryServices" /></td>
    <td><code>object</code></td>
    <td>Optional. Directory Services configuration for Kerberos-based authentication. Should only be set if protocol is "NFS_V4_1". (id: DirectoryServicesConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Server-specified ETag for the instance resource to prevent simultaneous updates from overwriting each other.</td>
</tr>
<tr>
    <td><CopyableCode code="fileShares" /></td>
    <td><code>array</code></td>
    <td>File system shares on the instance. For this version, only a single file share is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td>KMS key name used for data encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Resource labels to represent user provided metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="maxCapacityGb" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The maximum capacity of the instance in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="minCapacityGb" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The minimum capacity of the instance in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="networks" /></td>
    <td><code>array</code></td>
    <td>VPC networks to which the instance is connected. For this version, only a single network is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="performanceConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Used to configure performance. (id: PerformanceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="performanceLimits" /></td>
    <td><code>object</code></td>
    <td>Output only. Used for getting performance limits. (id: PerformanceLimits)</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>Immutable. The protocol indicates the access protocol for all shares in the instance. This field is immutable and it cannot be changed after the instance has been created. Default value: `NFS_V3`. (FILE_PROTOCOL_UNSPECIFIED, NFS_V3, NFS_V4_1)</td>
</tr>
<tr>
    <td><CopyableCode code="replication" /></td>
    <td><code>object</code></td>
    <td>Optional. Replication configuration. (id: Replication)</td>
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
    <td>Output only. The instance state. (STATE_UNSPECIFIED, CREATING, READY, REPAIRING, DELETING, ERROR, RESTORING, SUSPENDED, SUSPENDING, RESUMING, REVERTING, PROMOTING)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Additional information about the instance state, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="suspensionReasons" /></td>
    <td><code>array</code></td>
    <td>Output only. Field indicates all the reasons the instance is in "SUSPENDED" state.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. Immutable. Tag key-value pairs bound to this resource. Each key must be a namespaced name and each value a short name. Example: "123456789012/environment" : "production", "123456789013/costCenter" : "marketing" See the documentation for more information: - Namespaced name: https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_key - Short name: https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_value</td>
</tr>
<tr>
    <td><CopyableCode code="tier" /></td>
    <td><code>string</code></td>
    <td>The service tier of the instance. (TIER_UNSPECIFIED, STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD, ENTERPRISE, ZONAL, REGIONAL)</td>
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
    <td>Output only. The resource name of the instance, in the format `projects/&#123;project&#125;/locations/&#123;location&#125;/instances/&#123;instance&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="capacityStepSizeGb" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The incremental increase or decrease in capacity, designated in some number of GB.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customPerformanceSupported" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Indicates whether this instance supports configuring its performance. If true, the user can configure the instance's performance by using the 'performance_config' field.</td>
</tr>
<tr>
    <td><CopyableCode code="deletionProtectionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Indicates whether the instance is protected against deletion.</td>
</tr>
<tr>
    <td><CopyableCode code="deletionProtectionReason" /></td>
    <td><code>string</code></td>
    <td>Optional. The reason for enabling deletion protection.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the instance (2048 characters or less).</td>
</tr>
<tr>
    <td><CopyableCode code="directoryServices" /></td>
    <td><code>object</code></td>
    <td>Optional. Directory Services configuration for Kerberos-based authentication. Should only be set if protocol is "NFS_V4_1". (id: DirectoryServicesConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Server-specified ETag for the instance resource to prevent simultaneous updates from overwriting each other.</td>
</tr>
<tr>
    <td><CopyableCode code="fileShares" /></td>
    <td><code>array</code></td>
    <td>File system shares on the instance. For this version, only a single file share is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td>KMS key name used for data encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Resource labels to represent user provided metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="maxCapacityGb" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The maximum capacity of the instance in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="minCapacityGb" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. The minimum capacity of the instance in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="networks" /></td>
    <td><code>array</code></td>
    <td>VPC networks to which the instance is connected. For this version, only a single network is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="performanceConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Used to configure performance. (id: PerformanceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="performanceLimits" /></td>
    <td><code>object</code></td>
    <td>Output only. Used for getting performance limits. (id: PerformanceLimits)</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>Immutable. The protocol indicates the access protocol for all shares in the instance. This field is immutable and it cannot be changed after the instance has been created. Default value: `NFS_V3`. (FILE_PROTOCOL_UNSPECIFIED, NFS_V3, NFS_V4_1)</td>
</tr>
<tr>
    <td><CopyableCode code="replication" /></td>
    <td><code>object</code></td>
    <td>Optional. Replication configuration. (id: Replication)</td>
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
    <td>Output only. The instance state. (STATE_UNSPECIFIED, CREATING, READY, REPAIRING, DELETING, ERROR, RESTORING, SUSPENDED, SUSPENDING, RESUMING, REVERTING, PROMOTING)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Additional information about the instance state, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="suspensionReasons" /></td>
    <td><code>array</code></td>
    <td>Output only. Field indicates all the reasons the instance is in "SUSPENDED" state.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. Immutable. Tag key-value pairs bound to this resource. Each key must be a namespaced name and each value a short name. Example: "123456789012/environment" : "production", "123456789013/costCenter" : "marketing" See the documentation for more information: - Namespaced name: https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_key - Short name: https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_value</td>
</tr>
<tr>
    <td><CopyableCode code="tier" /></td>
    <td><code>string</code></td>
    <td>The service tier of the instance. (TIER_UNSPECIFIED, STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD, ENTERPRISE, ZONAL, REGIONAL)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Gets the details of a specific instance.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all instances in a project for either a specified location or for all locations.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a></td>
    <td>Creates an instance. When creating from a backup, the capacity of the new instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the settings of a specific instance.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes an instance.</td>
</tr>
<tr>
    <td><a href="#pause_replica"><CopyableCode code="pause_replica" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Pause the standby instance (replica). WARNING: This operation makes the standby instance's NFS filesystem writable. Any data written to the standby instance while paused will be lost when the replica is resumed or promoted.</td>
</tr>
<tr>
    <td><a href="#promote_replica"><CopyableCode code="promote_replica" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Promote the standby instance (replica).</td>
</tr>
<tr>
    <td><a href="#restore"><CopyableCode code="restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Restores an existing instance's file share from a backup. The capacity of the instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).</td>
</tr>
<tr>
    <td><a href="#resume_replica"><CopyableCode code="resume_replica" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Resume the standby instance (replica). WARNING: Any data written to the standby instance while paused will be lost when the replica is resumed.</td>
</tr>
<tr>
    <td><a href="#revert"><CopyableCode code="revert" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Revert an existing instance's file system to a specified snapshot.</td>
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
<tr id="parameter-instancesId">
    <td><CopyableCode code="instancesId" /></td>
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
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-instanceId">
    <td><CopyableCode code="instanceId" /></td>
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

Gets the details of a specific instance.

```sql
SELECT
name,
capacityStepSizeGb,
createTime,
customPerformanceSupported,
deletionProtectionEnabled,
deletionProtectionReason,
description,
directoryServices,
etag,
fileShares,
kmsKeyName,
labels,
maxCapacityGb,
minCapacityGb,
networks,
performanceConfig,
performanceLimits,
protocol,
replication,
satisfiesPzi,
satisfiesPzs,
state,
statusMessage,
suspensionReasons,
tags,
tier
FROM google.file.instances
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists all instances in a project for either a specified location or for all locations.

```sql
SELECT
name,
capacityStepSizeGb,
createTime,
customPerformanceSupported,
deletionProtectionEnabled,
deletionProtectionReason,
description,
directoryServices,
etag,
fileShares,
kmsKeyName,
labels,
maxCapacityGb,
minCapacityGb,
networks,
performanceConfig,
performanceLimits,
protocol,
replication,
satisfiesPzi,
satisfiesPzs,
state,
statusMessage,
suspensionReasons,
tags,
tier
FROM google.file.instances
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

Creates an instance. When creating from a backup, the capacity of the new instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).

```sql
INSERT INTO google.file.instances (
data__deletionProtectionEnabled,
data__deletionProtectionReason,
data__description,
data__directoryServices,
data__etag,
data__fileShares,
data__kmsKeyName,
data__labels,
data__networks,
data__performanceConfig,
data__protocol,
data__replication,
data__tags,
data__tier,
projectsId,
locationsId,
instanceId
)
SELECT 
{{ deletionProtectionEnabled }},
'{{ deletionProtectionReason }}',
'{{ description }}',
'{{ directoryServices }}',
'{{ etag }}',
'{{ fileShares }}',
'{{ kmsKeyName }}',
'{{ labels }}',
'{{ networks }}',
'{{ performanceConfig }}',
'{{ protocol }}',
'{{ replication }}',
'{{ tags }}',
'{{ tier }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ instanceId }}'
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
- name: instances
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the instances resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the instances resource.
    - name: deletionProtectionEnabled
      value: {{ deletionProtectionEnabled }}
      description: |
        Optional. Indicates whether the instance is protected against deletion.
    - name: deletionProtectionReason
      value: "{{ deletionProtectionReason }}"
      description: |
        Optional. The reason for enabling deletion protection.
    - name: description
      value: "{{ description }}"
      description: |
        The description of the instance (2048 characters or less).
    - name: directoryServices
      description: |
        Optional. Directory Services configuration for Kerberos-based authentication. Should only be set if protocol is "NFS_V4_1".
      value:
        ldap:
          domain: "{{ domain }}"
          groupsOu: "{{ groupsOu }}"
          servers:
            - "{{ servers }}"
          usersOu: "{{ usersOu }}"
    - name: etag
      value: "{{ etag }}"
      description: |
        Server-specified ETag for the instance resource to prevent simultaneous updates from overwriting each other.
    - name: fileShares
      description: |
        File system shares on the instance. For this version, only a single file share is supported.
      value:
        - capacityGb: "{{ capacityGb }}"
          name: "{{ name }}"
          nfsExportOptions: "{{ nfsExportOptions }}"
          sourceBackup: "{{ sourceBackup }}"
          sourceBackupdrBackup: "{{ sourceBackupdrBackup }}"
    - name: kmsKeyName
      value: "{{ kmsKeyName }}"
      description: |
        KMS key name used for data encryption.
    - name: labels
      value: "{{ labels }}"
      description: |
        Resource labels to represent user provided metadata.
    - name: networks
      description: |
        VPC networks to which the instance is connected. For this version, only a single network is supported.
      value:
        - connectMode: "{{ connectMode }}"
          ipAddresses: "{{ ipAddresses }}"
          modes: "{{ modes }}"
          network: "{{ network }}"
          pscConfig:
            endpointProject: "{{ endpointProject }}"
          reservedIpRange: "{{ reservedIpRange }}"
    - name: performanceConfig
      description: |
        Optional. Used to configure performance.
      value:
        fixedIops:
          maxIops: "{{ maxIops }}"
        iopsPerTb:
          maxIopsPerTb: "{{ maxIopsPerTb }}"
    - name: protocol
      value: "{{ protocol }}"
      description: |
        Immutable. The protocol indicates the access protocol for all shares in the instance. This field is immutable and it cannot be changed after the instance has been created. Default value: \`NFS_V3\`.
      valid_values: ['FILE_PROTOCOL_UNSPECIFIED', 'NFS_V3', 'NFS_V4_1']
    - name: replication
      description: |
        Optional. Replication configuration.
      value:
        replicas:
          - lastActiveSyncTime: "{{ lastActiveSyncTime }}"
            peerInstance: "{{ peerInstance }}"
            state: "{{ state }}"
            stateReasons: "{{ stateReasons }}"
            stateUpdateTime: "{{ stateUpdateTime }}"
        role: "{{ role }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        Optional. Input only. Immutable. Tag key-value pairs bound to this resource. Each key must be a namespaced name and each value a short name. Example: "123456789012/environment" : "production", "123456789013/costCenter" : "marketing" See the documentation for more information: - Namespaced name: https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_key - Short name: https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_value
    - name: tier
      value: "{{ tier }}"
      description: |
        The service tier of the instance.
      valid_values: ['TIER_UNSPECIFIED', 'STANDARD', 'PREMIUM', 'BASIC_HDD', 'BASIC_SSD', 'HIGH_SCALE_SSD', 'ENTERPRISE', 'ZONAL', 'REGIONAL']
    - name: instanceId
      value: "{{ instanceId }}"
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

Updates the settings of a specific instance.

```sql
UPDATE google.file.instances
SET 
data__deletionProtectionEnabled = {{ deletionProtectionEnabled }},
data__deletionProtectionReason = '{{ deletionProtectionReason }}',
data__description = '{{ description }}',
data__directoryServices = '{{ directoryServices }}',
data__etag = '{{ etag }}',
data__fileShares = '{{ fileShares }}',
data__kmsKeyName = '{{ kmsKeyName }}',
data__labels = '{{ labels }}',
data__networks = '{{ networks }}',
data__performanceConfig = '{{ performanceConfig }}',
data__protocol = '{{ protocol }}',
data__replication = '{{ replication }}',
data__tags = '{{ tags }}',
data__tier = '{{ tier }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND instancesId = '{{ instancesId }}' --required
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

Deletes an instance.

```sql
DELETE FROM google.file.instances
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND force = '{{ force }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="pause_replica"
    values={[
        { label: 'pause_replica', value: 'pause_replica' },
        { label: 'promote_replica', value: 'promote_replica' },
        { label: 'restore', value: 'restore' },
        { label: 'resume_replica', value: 'resume_replica' },
        { label: 'revert', value: 'revert' }
    ]}
>
<TabItem value="pause_replica">

Pause the standby instance (replica). WARNING: This operation makes the standby instance's NFS filesystem writable. Any data written to the standby instance while paused will be lost when the replica is resumed or promoted.

```sql
EXEC google.file.instances.pause_replica 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required
;
```
</TabItem>
<TabItem value="promote_replica">

Promote the standby instance (replica).

```sql
EXEC google.file.instances.promote_replica 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"peerInstance": "{{ peerInstance }}"
}'
;
```
</TabItem>
<TabItem value="restore">

Restores an existing instance's file share from a backup. The capacity of the instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).

```sql
EXEC google.file.instances.restore 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"fileShare": "{{ fileShare }}", 
"sourceBackup": "{{ sourceBackup }}"
}'
;
```
</TabItem>
<TabItem value="resume_replica">

Resume the standby instance (replica). WARNING: Any data written to the standby instance while paused will be lost when the replica is resumed.

```sql
EXEC google.file.instances.resume_replica 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required
;
```
</TabItem>
<TabItem value="revert">

Revert an existing instance's file system to a specified snapshot.

```sql
EXEC google.file.instances.revert 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"targetSnapshotId": "{{ targetSnapshotId }}"
}'
;
```
</TabItem>
</Tabs>
