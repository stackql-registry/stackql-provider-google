--- 
title: clusters_secondary
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters_secondary
  - alloydb
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

Creates, updates, deletes, gets or lists a <code>clusters_secondary</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="clusters_secondary" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.alloydb.clusters_secondary" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#createsecondary"><CopyableCode code="createsecondary" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a cluster of type SECONDARY in the given location using the primary cluster as the source.</td>
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
<tr id="parameter-clusterId">
    <td><CopyableCode code="clusterId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="createsecondary"
    values={[
        { label: 'createsecondary', value: 'createsecondary' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="createsecondary">

Creates a cluster of type SECONDARY in the given location using the primary cluster as the source.

```sql
INSERT INTO google.alloydb.clusters_secondary (
data__annotations,
data__automatedBackupPolicy,
data__continuousBackupConfig,
data__databaseVersion,
data__dataplexConfig,
data__displayName,
data__encryptionConfig,
data__etag,
data__initialUser,
data__labels,
data__maintenanceUpdatePolicy,
data__maintenanceVersionSelectionPolicy,
data__network,
data__networkConfig,
data__pscConfig,
data__secondaryConfig,
data__sslConfig,
data__subscriptionType,
data__tags,
projectsId,
locationsId,
clusterId,
requestId,
validateOnly
)
SELECT 
'{{ annotations }}',
'{{ automatedBackupPolicy }}',
'{{ continuousBackupConfig }}',
'{{ databaseVersion }}',
'{{ dataplexConfig }}',
'{{ displayName }}',
'{{ encryptionConfig }}',
'{{ etag }}',
'{{ initialUser }}',
'{{ labels }}',
'{{ maintenanceUpdatePolicy }}',
'{{ maintenanceVersionSelectionPolicy }}',
'{{ network }}',
'{{ networkConfig }}',
'{{ pscConfig }}',
'{{ secondaryConfig }}',
'{{ sslConfig }}',
'{{ subscriptionType }}',
'{{ tags }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ clusterId }}',
'{{ requestId }}',
'{{ validateOnly }}'
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
- name: clusters_secondary
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the clusters_secondary resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the clusters_secondary resource.
    - name: annotations
      value: "{{ annotations }}"
      description: |
        Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128
    - name: automatedBackupPolicy
      description: |
        The automated backup policy for this cluster. If no policy is provided then the default policy will be used. If backups are supported for the cluster, the default policy takes one backup a day, has a backup window of 1 hour, and retains backups for 14 days. For more information on the defaults, consult the documentation for the message type.
      value:
        backupWindow: "{{ backupWindow }}"
        enabled: {{ enabled }}
        encryptionConfig:
          kmsKeyName: "{{ kmsKeyName }}"
        labels: "{{ labels }}"
        location: "{{ location }}"
        quantityBasedRetention:
          count: {{ count }}
        timeBasedRetention:
          retentionPeriod: "{{ retentionPeriod }}"
        weeklySchedule:
          daysOfWeek:
            - "{{ daysOfWeek }}"
          startTimes:
            - hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
    - name: continuousBackupConfig
      description: |
        Optional. Continuous backup configuration for this cluster.
      value:
        enabled: {{ enabled }}
        encryptionConfig:
          kmsKeyName: "{{ kmsKeyName }}"
        recoveryWindowDays: {{ recoveryWindowDays }}
    - name: databaseVersion
      value: "{{ databaseVersion }}"
      description: |
        Optional. The database engine major version. This is an optional field and it is populated at the Cluster creation time. If a database version is not supplied at cluster creation time, then a default database version will be used.
      valid_values: ['DATABASE_VERSION_UNSPECIFIED', 'POSTGRES_13', 'POSTGRES_14', 'POSTGRES_15', 'POSTGRES_16', 'POSTGRES_17', 'POSTGRES_18']
    - name: dataplexConfig
      description: |
        Optional. Configuration for Dataplex integration.
      value:
        enabled: {{ enabled }}
    - name: displayName
      value: "{{ displayName }}"
      description: |
        User-settable and human-readable display name for the Cluster.
    - name: encryptionConfig
      description: |
        Optional. The encryption config can be specified to encrypt the data disks and other persistent data resources of a cluster with a customer-managed encryption key (CMEK). When this field is not specified, the cluster will then use default encryption scheme to protect the user data.
      value:
        kmsKeyName: "{{ kmsKeyName }}"
    - name: etag
      value: "{{ etag }}"
      description: |
        For Resource freshness validation (https://google.aip.dev/154)
    - name: initialUser
      description: |
        Input only. Initial user to setup during cluster creation. Required. If used in \`RestoreCluster\` this is ignored.
      value:
        password: "{{ password }}"
        user: "{{ user }}"
    - name: labels
      value: "{{ labels }}"
      description: |
        Labels as key value pairs
    - name: maintenanceUpdatePolicy
      description: |
        Optional. The maintenance update policy determines when to allow or deny updates.
      value:
        denyMaintenancePeriods:
          - endDate:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            startDate:
              day: {{ day }}
              month: {{ month }}
              year: {{ year }}
            time:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
        maintenanceWindows:
          - day: "{{ day }}"
            startTime:
              hours: {{ hours }}
              minutes: {{ minutes }}
              nanos: {{ nanos }}
              seconds: {{ seconds }}
    - name: maintenanceVersionSelectionPolicy
      value: "{{ maintenanceVersionSelectionPolicy }}"
      description: |
        Input only. Policy to use to automatically select the maintenance version to which to update the cluster's instances.
      valid_values: ['MAINTENANCE_VERSION_SELECTION_POLICY_UNSPECIFIED', 'MAINTENANCE_VERSION_SELECTION_POLICY_LATEST', 'MAINTENANCE_VERSION_SELECTION_POLICY_DEFAULT']
    - name: network
      value: "{{ network }}"
      description: |
        Required. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster. It is specified in the form: \`projects/{project}/global/networks/{network_id}\`. This is required to create a cluster. Deprecated, use network_config.network instead.
    - name: networkConfig
      description: |
        Optional.
      value:
        allocatedIpRange: "{{ allocatedIpRange }}"
        network: "{{ network }}"
    - name: pscConfig
      description: |
        Optional. The configuration for Private Service Connect (PSC) for the cluster.
      value:
        pscEnabled: {{ pscEnabled }}
        serviceOwnedProjectNumber: "{{ serviceOwnedProjectNumber }}"
    - name: secondaryConfig
      description: |
        Cross Region replication config specific to SECONDARY cluster.
      value:
        primaryClusterName: "{{ primaryClusterName }}"
    - name: sslConfig
      description: |
        SSL configuration for this AlloyDB cluster.
      value:
        caSource: "{{ caSource }}"
        sslMode: "{{ sslMode }}"
    - name: subscriptionType
      value: "{{ subscriptionType }}"
      description: |
        Optional. Subscription type of the cluster.
      valid_values: ['SUBSCRIPTION_TYPE_UNSPECIFIED', 'STANDARD', 'TRIAL']
    - name: tags
      value: "{{ tags }}"
      description: |
        Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: \`\`\` "123/environment": "production", "123/costCenter": "marketing" \`\`\`
    - name: clusterId
      value: "{{ clusterId }}"
    - name: requestId
      value: "{{ requestId }}"
    - name: validateOnly
      value: {{ validateOnly }}
`}</CodeBlock>

</TabItem>
</Tabs>
