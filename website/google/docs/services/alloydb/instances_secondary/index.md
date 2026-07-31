--- 
title: instances_secondary
hide_title: false
hide_table_of_contents: false
keywords:
  - instances_secondary
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

Creates, updates, deletes, gets or lists an <code>instances_secondary</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instances_secondary" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.alloydb.instances_secondary" /></td></tr>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a new SECONDARY Instance in a given project and location.</td>
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
<tr id="parameter-clustersId">
    <td><CopyableCode code="clustersId" /></td>
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
<tr id="parameter-instanceId">
    <td><CopyableCode code="instanceId" /></td>
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

Creates a new SECONDARY Instance in a given project and location.

```sql
INSERT INTO google.alloydb.instances_secondary (
data__observabilityConfig,
data__labels,
data__dataApiAccess,
data__gceZone,
data__etag,
data__availabilityType,
data__databaseFlags,
data__annotations,
data__pscInstanceConfig,
data__activationPolicy,
data__instanceType,
data__displayName,
data__machineConfig,
data__queryInsightsConfig,
data__readPoolConfig,
data__connectionPoolConfig,
data__clientConnectionConfig,
data__networkConfig,
projectsId,
locationsId,
clustersId,
instanceId,
requestId,
validateOnly
)
SELECT 
'{{ observabilityConfig }}',
'{{ labels }}',
'{{ dataApiAccess }}',
'{{ gceZone }}',
'{{ etag }}',
'{{ availabilityType }}',
'{{ databaseFlags }}',
'{{ annotations }}',
'{{ pscInstanceConfig }}',
'{{ activationPolicy }}',
'{{ instanceType }}',
'{{ displayName }}',
'{{ machineConfig }}',
'{{ queryInsightsConfig }}',
'{{ readPoolConfig }}',
'{{ connectionPoolConfig }}',
'{{ clientConnectionConfig }}',
'{{ networkConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ clustersId }}',
'{{ instanceId }}',
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
- name: instances_secondary
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the instances_secondary resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the instances_secondary resource.
    - name: clustersId
      value: "{{ clustersId }}"
      description: Required parameter for the instances_secondary resource.
    - name: observabilityConfig
      description: |
        Configuration for observability.
      value:
        enabled: {{ enabled }}
        trackActiveQueries: {{ trackActiveQueries }}
        recordApplicationTags: {{ recordApplicationTags }}
        trackWaitEvents: {{ trackWaitEvents }}
        maxQueryStringLength: {{ maxQueryStringLength }}
        preserveComments: {{ preserveComments }}
        queryPlansPerMinute: {{ queryPlansPerMinute }}
        trackWaitEventTypes: {{ trackWaitEventTypes }}
    - name: labels
      value: "{{ labels }}"
      description: |
        Labels as key value pairs
    - name: dataApiAccess
      value: "{{ dataApiAccess }}"
      description: |
        Optional. Controls whether the Data API is enabled for this instance. When enabled, this allows authorized users to connect to the instance from the public internet using the \`executeSql\` API, even for private IP instances. If this is not specified, the data API is enabled by default for Google internal services like AlloyDB Studio. Disable it explicitly to disallow Google internal services as well.
      valid_values: ['DEFAULT_DATA_API_ENABLED_FOR_GOOGLE_CLOUD_SERVICES', 'DISABLED', 'ENABLED']
    - name: gceZone
      value: "{{ gceZone }}"
      description: |
        The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity.
    - name: etag
      value: "{{ etag }}"
      description: |
        For Resource freshness validation (https://google.aip.dev/154)
    - name: availabilityType
      value: "{{ availabilityType }}"
      description: |
        Availability type of an Instance. If empty, defaults to REGIONAL for primary instances. For read pools, availability_type is always UNSPECIFIED. Instances in the read pools are evenly distributed across available zones within the region (i.e. read pools with more than one node will have a node in at least two zones).
      valid_values: ['AVAILABILITY_TYPE_UNSPECIFIED', 'ZONAL', 'REGIONAL']
    - name: databaseFlags
      value: "{{ databaseFlags }}"
      description: |
        Database flags. Set at the instance level. They are copied from the primary instance on secondary instance creation. Flags that have restrictions default to the value at primary instance on read instances during creation. Read instances can set new flags or override existing flags that are relevant for reads, for example, for enabling columnar cache on a read instance. Flags set on read instance might or might not be present on the primary instance. This is a list of "key": "value" pairs. "key": The name of the flag. These flags are passed at instance setup time, so include both server options and system variables for Postgres. Flags are specified with underscores, not hyphens. "value": The value of the flag. Booleans are set to **on** for true and **off** for false. This field must be omitted if the flag doesn't take a value.
    - name: annotations
      value: "{{ annotations }}"
      description: |
        Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128
    - name: pscInstanceConfig
      description: |
        Optional. The configuration for Private Service Connect (PSC) for the instance.
      value:
        pscDnsName: "{{ pscDnsName }}"
        pscInterfaceConfigs:
          - networkAttachmentResource: "{{ networkAttachmentResource }}"
        serviceAttachmentLink: "{{ serviceAttachmentLink }}"
        pscAutoConnections:
          - status: "{{ status }}"
            ipAddress: "{{ ipAddress }}"
            consumerProject: "{{ consumerProject }}"
            consumerNetwork: "{{ consumerNetwork }}"
            consumerNetworkStatus: "{{ consumerNetworkStatus }}"
        allowedConsumerProjects:
          - "{{ allowedConsumerProjects }}"
    - name: activationPolicy
      value: "{{ activationPolicy }}"
      description: |
        Optional. Specifies whether an instance needs to spin up. Once the instance is active, the activation policy can be updated to the \`NEVER\` to stop the instance. Likewise, the activation policy can be updated to \`ALWAYS\` to start the instance. There are restrictions around when an instance can/cannot be activated (for example, a read pool instance should be stopped before stopping primary etc.). Please refer to the API documentation for more details.
      valid_values: ['ACTIVATION_POLICY_UNSPECIFIED', 'ALWAYS', 'NEVER']
    - name: instanceType
      value: "{{ instanceType }}"
      description: |
        Required. The type of the instance. Specified at creation time.
      valid_values: ['INSTANCE_TYPE_UNSPECIFIED', 'PRIMARY', 'READ_POOL', 'SECONDARY']
    - name: displayName
      value: "{{ displayName }}"
      description: |
        User-settable and human-readable display name for the Instance.
    - name: machineConfig
      description: |
        Configurations for the machines that host the underlying database engine.
      value:
        machineType: "{{ machineType }}"
        cpuCount: {{ cpuCount }}
    - name: queryInsightsConfig
      description: |
        Configuration for query insights.
      value:
        recordApplicationTags: {{ recordApplicationTags }}
        queryStringLength: {{ queryStringLength }}
        recordClientAddress: {{ recordClientAddress }}
        queryPlansPerMinute: {{ queryPlansPerMinute }}
    - name: readPoolConfig
      description: |
        Read pool instance configuration. This is required if the value of instanceType is READ_POOL.
      value:
        nodeCount: {{ nodeCount }}
    - name: connectionPoolConfig
      description: |
        Optional. The configuration for Managed Connection Pool (MCP).
      value:
        flags: "{{ flags }}"
        enabled: {{ enabled }}
        authproxyPoolerCount: {{ authproxyPoolerCount }}
        authproxyPoolerScalingType: "{{ authproxyPoolerScalingType }}"
        poolerCount: {{ poolerCount }}
        poolerScalingType: "{{ poolerScalingType }}"
    - name: clientConnectionConfig
      description: |
        Optional. Client connection specific configurations
      value:
        requireConnectors: {{ requireConnectors }}
        sslConfig:
          sslMode: "{{ sslMode }}"
          caSource: "{{ caSource }}"
    - name: networkConfig
      description: |
        Optional. Instance-level network configuration.
      value:
        authorizedExternalNetworks:
          - cidrRange: "{{ cidrRange }}"
        enablePublicIp: {{ enablePublicIp }}
        network: "{{ network }}"
        allocatedIpRangeOverride: "{{ allocatedIpRangeOverride }}"
        enableOutboundPublicIp: {{ enableOutboundPublicIp }}
    - name: instanceId
      value: "{{ instanceId }}"
    - name: requestId
      value: "{{ requestId }}"
    - name: validateOnly
      value: {{ validateOnly }}
`}</CodeBlock>

</TabItem>
</Tabs>
