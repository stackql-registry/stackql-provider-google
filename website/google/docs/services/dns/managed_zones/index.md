--- 
title: managed_zones
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_zones
  - dns
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

Creates, updates, deletes, gets or lists a <code>managed_zones</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_zones" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dns.managed_zones" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string (uint64)</code></td>
    <td>Unique identifier for the resource; defined by the server (output only)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>User assigned name for this resource. Must be unique within the project. The name must be 1-63 characters long, must begin with a letter, end with a letter or digit, and only contain lowercase letters, digits or dashes.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudLoggingConfig" /></td>
    <td><code>object</code></td>
    <td>Cloud Logging configurations for publicly visible zones. (id: ManagedZoneCloudLoggingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string</code></td>
    <td>The time that this resource was created on the server. This is in RFC3339 text format. Output only.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the managed zone's function.</td>
</tr>
<tr>
    <td><CopyableCode code="dnsName" /></td>
    <td><code>string</code></td>
    <td>The DNS name of this managed zone, for instance "example.com.".</td>
</tr>
<tr>
    <td><CopyableCode code="dnssecConfig" /></td>
    <td><code>object</code></td>
    <td>DNSSEC configuration. (id: ManagedZoneDnsSecConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="forwardingConfig" /></td>
    <td><code>object</code></td>
    <td>The presence for this field indicates that outbound forwarding is enabled for this zone. The value of this field contains the set of destinations to forward to. (id: ManagedZoneForwardingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td> (default: dns#managedZone)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User labels.</td>
</tr>
<tr>
    <td><CopyableCode code="nameServerSet" /></td>
    <td><code>string</code></td>
    <td>Optionally specifies the NameServerSet for this ManagedZone. A NameServerSet is a set of DNS name servers that all host the same ManagedZones. Most users leave this field unset. If you need to use this field, contact your account team.</td>
</tr>
<tr>
    <td><CopyableCode code="nameServers" /></td>
    <td><code>array</code></td>
    <td>Delegate your managed_zone to these virtual name servers; defined by the server (output only)</td>
</tr>
<tr>
    <td><CopyableCode code="peeringConfig" /></td>
    <td><code>object</code></td>
    <td>The presence of this field indicates that DNS Peering is enabled for this zone. The value of this field contains the network to peer with. (id: ManagedZonePeeringConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="privateVisibilityConfig" /></td>
    <td><code>object</code></td>
    <td>For privately visible zones, the set of Virtual Private Cloud resources that the zone is visible from. (id: ManagedZonePrivateVisibilityConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="reverseLookupConfig" /></td>
    <td><code>object</code></td>
    <td>The presence of this field indicates that this is a managed reverse lookup zone and Cloud DNS resolves reverse lookup queries using automatically configured records for VPC resources. This only applies to networks listed under private_visibility_config. (id: ManagedZoneReverseLookupConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceDirectoryConfig" /></td>
    <td><code>object</code></td>
    <td>This field links to the associated service directory namespace. Do not set this field for public zones or forwarding zones. (id: ManagedZoneServiceDirectoryConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources. (public, private)</td>
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
    <td><code>string (uint64)</code></td>
    <td>Unique identifier for the resource; defined by the server (output only)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>User assigned name for this resource. Must be unique within the project. The name must be 1-63 characters long, must begin with a letter, end with a letter or digit, and only contain lowercase letters, digits or dashes.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudLoggingConfig" /></td>
    <td><code>object</code></td>
    <td>Cloud Logging configurations for publicly visible zones. (id: ManagedZoneCloudLoggingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string</code></td>
    <td>The time that this resource was created on the server. This is in RFC3339 text format. Output only.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the managed zone's function.</td>
</tr>
<tr>
    <td><CopyableCode code="dnsName" /></td>
    <td><code>string</code></td>
    <td>The DNS name of this managed zone, for instance "example.com.".</td>
</tr>
<tr>
    <td><CopyableCode code="dnssecConfig" /></td>
    <td><code>object</code></td>
    <td>DNSSEC configuration. (id: ManagedZoneDnsSecConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="forwardingConfig" /></td>
    <td><code>object</code></td>
    <td>The presence for this field indicates that outbound forwarding is enabled for this zone. The value of this field contains the set of destinations to forward to. (id: ManagedZoneForwardingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td> (default: dns#managedZone)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>User labels.</td>
</tr>
<tr>
    <td><CopyableCode code="nameServerSet" /></td>
    <td><code>string</code></td>
    <td>Optionally specifies the NameServerSet for this ManagedZone. A NameServerSet is a set of DNS name servers that all host the same ManagedZones. Most users leave this field unset. If you need to use this field, contact your account team.</td>
</tr>
<tr>
    <td><CopyableCode code="nameServers" /></td>
    <td><code>array</code></td>
    <td>Delegate your managed_zone to these virtual name servers; defined by the server (output only)</td>
</tr>
<tr>
    <td><CopyableCode code="peeringConfig" /></td>
    <td><code>object</code></td>
    <td>The presence of this field indicates that DNS Peering is enabled for this zone. The value of this field contains the network to peer with. (id: ManagedZonePeeringConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="privateVisibilityConfig" /></td>
    <td><code>object</code></td>
    <td>For privately visible zones, the set of Virtual Private Cloud resources that the zone is visible from. (id: ManagedZonePrivateVisibilityConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="reverseLookupConfig" /></td>
    <td><code>object</code></td>
    <td>The presence of this field indicates that this is a managed reverse lookup zone and Cloud DNS resolves reverse lookup queries using automatically configured records for VPC resources. This only applies to networks listed under private_visibility_config. (id: ManagedZoneReverseLookupConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceDirectoryConfig" /></td>
    <td><code>object</code></td>
    <td>This field links to the associated service directory namespace. Do not set this field for public zones or forwarding zones. (id: ManagedZoneServiceDirectoryConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources. (public, private)</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-managedZone"><code>managedZone</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Fetches the representation of an existing ManagedZone.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-dnsName"><code>dnsName</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Enumerates ManagedZones that have been created but not yet deleted.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Creates a new ManagedZone. Note: While `dns.managedZones.create` is the baseline permission required to invoke this method, additional permissions are required if the managed zone configuration references other resources.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-managedZone"><code>managedZone</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Applies a partial update to an existing ManagedZone.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-managedZone"><code>managedZone</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Updates an existing ManagedZone.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-managedZone"><code>managedZone</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Deletes a previously created ManagedZone.</td>
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
<tr id="parameter-managedZone">
    <td><CopyableCode code="managedZone" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-clientOperationId">
    <td><CopyableCode code="clientOperationId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-dnsName">
    <td><CopyableCode code="dnsName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
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

Fetches the representation of an existing ManagedZone.

```sql
SELECT
id,
name,
cloudLoggingConfig,
creationTime,
description,
dnsName,
dnssecConfig,
forwardingConfig,
kind,
labels,
nameServerSet,
nameServers,
peeringConfig,
privateVisibilityConfig,
reverseLookupConfig,
serviceDirectoryConfig,
visibility
FROM google.dns.managed_zones
WHERE project = '{{ project }}' -- required
AND managedZone = '{{ managedZone }}' -- required
AND clientOperationId = '{{ clientOperationId }}'
;
```
</TabItem>
<TabItem value="list">

Enumerates ManagedZones that have been created but not yet deleted.

```sql
SELECT
id,
name,
cloudLoggingConfig,
creationTime,
description,
dnsName,
dnssecConfig,
forwardingConfig,
kind,
labels,
nameServerSet,
nameServers,
peeringConfig,
privateVisibilityConfig,
reverseLookupConfig,
serviceDirectoryConfig,
visibility
FROM google.dns.managed_zones
WHERE project = '{{ project }}' -- required
AND dnsName = '{{ dnsName }}'
AND maxResults = '{{ maxResults }}'
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

Creates a new ManagedZone. Note: While `dns.managedZones.create` is the baseline permission required to invoke this method, additional permissions are required if the managed zone configuration references other resources.

```sql
INSERT INTO google.dns.managed_zones (
data__cloudLoggingConfig,
data__creationTime,
data__description,
data__dnsName,
data__dnssecConfig,
data__forwardingConfig,
data__id,
data__kind,
data__labels,
data__name,
data__nameServerSet,
data__nameServers,
data__peeringConfig,
data__privateVisibilityConfig,
data__reverseLookupConfig,
data__serviceDirectoryConfig,
data__visibility,
project,
clientOperationId
)
SELECT 
'{{ cloudLoggingConfig }}',
'{{ creationTime }}',
'{{ description }}',
'{{ dnsName }}',
'{{ dnssecConfig }}',
'{{ forwardingConfig }}',
'{{ id }}',
'{{ kind }}',
'{{ labels }}',
'{{ name }}',
'{{ nameServerSet }}',
'{{ nameServers }}',
'{{ peeringConfig }}',
'{{ privateVisibilityConfig }}',
'{{ reverseLookupConfig }}',
'{{ serviceDirectoryConfig }}',
'{{ visibility }}',
'{{ project }}',
'{{ clientOperationId }}'
RETURNING
id,
name,
cloudLoggingConfig,
creationTime,
description,
dnsName,
dnssecConfig,
forwardingConfig,
kind,
labels,
nameServerSet,
nameServers,
peeringConfig,
privateVisibilityConfig,
reverseLookupConfig,
serviceDirectoryConfig,
visibility
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: managed_zones
  props:
    - name: project
      value: "{{ project }}"
      description: Required parameter for the managed_zones resource.
    - name: cloudLoggingConfig
      description: |
        Cloud Logging configurations for publicly visible zones.
      value:
        enableLogging: {{ enableLogging }}
        kind: "{{ kind }}"
    - name: creationTime
      value: "{{ creationTime }}"
      description: |
        The time that this resource was created on the server. This is in RFC3339 text format. Output only.
    - name: description
      value: "{{ description }}"
      description: |
        A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the managed zone's function.
    - name: dnsName
      value: "{{ dnsName }}"
      description: |
        The DNS name of this managed zone, for instance "example.com.".
    - name: dnssecConfig
      description: |
        DNSSEC configuration.
      value:
        defaultKeySpecs:
          - algorithm: "{{ algorithm }}"
            keyLength: {{ keyLength }}
            keyType: "{{ keyType }}"
            kind: "{{ kind }}"
        kind: "{{ kind }}"
        nonExistence: "{{ nonExistence }}"
        state: "{{ state }}"
    - name: forwardingConfig
      description: |
        The presence for this field indicates that outbound forwarding is enabled for this zone. The value of this field contains the set of destinations to forward to.
      value:
        kind: "{{ kind }}"
        targetNameServers:
          - domainName: "{{ domainName }}"
            forwardingPath: "{{ forwardingPath }}"
            ipv4Address: "{{ ipv4Address }}"
            ipv6Address: "{{ ipv6Address }}"
            kind: "{{ kind }}"
    - name: id
      value: "{{ id }}"
      description: |
        Unique identifier for the resource; defined by the server (output only)
    - name: kind
      value: "{{ kind }}"
      default: dns#managedZone
    - name: labels
      value: "{{ labels }}"
      description: |
        User labels.
    - name: name
      value: "{{ name }}"
      description: |
        User assigned name for this resource. Must be unique within the project. The name must be 1-63 characters long, must begin with a letter, end with a letter or digit, and only contain lowercase letters, digits or dashes.
    - name: nameServerSet
      value: "{{ nameServerSet }}"
      description: |
        Optionally specifies the NameServerSet for this ManagedZone. A NameServerSet is a set of DNS name servers that all host the same ManagedZones. Most users leave this field unset. If you need to use this field, contact your account team.
    - name: nameServers
      value:
        - "{{ nameServers }}"
      description: |
        Delegate your managed_zone to these virtual name servers; defined by the server (output only)
    - name: peeringConfig
      description: |
        The presence of this field indicates that DNS Peering is enabled for this zone. The value of this field contains the network to peer with.
      value:
        kind: "{{ kind }}"
        targetNetwork:
          deactivateTime: "{{ deactivateTime }}"
          kind: "{{ kind }}"
          networkUrl: "{{ networkUrl }}"
    - name: privateVisibilityConfig
      description: |
        For privately visible zones, the set of Virtual Private Cloud resources that the zone is visible from.
      value:
        gkeClusters:
          - gkeClusterName: "{{ gkeClusterName }}"
            kind: "{{ kind }}"
        kind: "{{ kind }}"
        networks:
          - kind: "{{ kind }}"
            networkUrl: "{{ networkUrl }}"
    - name: reverseLookupConfig
      description: |
        The presence of this field indicates that this is a managed reverse lookup zone and Cloud DNS resolves reverse lookup queries using automatically configured records for VPC resources. This only applies to networks listed under private_visibility_config.
      value:
        kind: "{{ kind }}"
    - name: serviceDirectoryConfig
      description: |
        This field links to the associated service directory namespace. Do not set this field for public zones or forwarding zones.
      value:
        kind: "{{ kind }}"
        namespace:
          deletionTime: "{{ deletionTime }}"
          kind: "{{ kind }}"
          namespaceUrl: "{{ namespaceUrl }}"
    - name: visibility
      value: "{{ visibility }}"
      description: |
        The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources.
      valid_values: ['public', 'private']
    - name: clientOperationId
      value: "{{ clientOperationId }}"
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

Applies a partial update to an existing ManagedZone.

```sql
UPDATE google.dns.managed_zones
SET 
data__cloudLoggingConfig = '{{ cloudLoggingConfig }}',
data__creationTime = '{{ creationTime }}',
data__description = '{{ description }}',
data__dnsName = '{{ dnsName }}',
data__dnssecConfig = '{{ dnssecConfig }}',
data__forwardingConfig = '{{ forwardingConfig }}',
data__id = '{{ id }}',
data__kind = '{{ kind }}',
data__labels = '{{ labels }}',
data__name = '{{ name }}',
data__nameServerSet = '{{ nameServerSet }}',
data__nameServers = '{{ nameServers }}',
data__peeringConfig = '{{ peeringConfig }}',
data__privateVisibilityConfig = '{{ privateVisibilityConfig }}',
data__reverseLookupConfig = '{{ reverseLookupConfig }}',
data__serviceDirectoryConfig = '{{ serviceDirectoryConfig }}',
data__visibility = '{{ visibility }}'
WHERE 
project = '{{ project }}' --required
AND managedZone = '{{ managedZone }}' --required
AND clientOperationId = '{{ clientOperationId}}'
RETURNING
id,
dnsKeyContext,
kind,
startTime,
status,
type,
user,
zoneContext;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates an existing ManagedZone.

```sql
REPLACE google.dns.managed_zones
SET 
data__cloudLoggingConfig = '{{ cloudLoggingConfig }}',
data__creationTime = '{{ creationTime }}',
data__description = '{{ description }}',
data__dnsName = '{{ dnsName }}',
data__dnssecConfig = '{{ dnssecConfig }}',
data__forwardingConfig = '{{ forwardingConfig }}',
data__id = '{{ id }}',
data__kind = '{{ kind }}',
data__labels = '{{ labels }}',
data__name = '{{ name }}',
data__nameServerSet = '{{ nameServerSet }}',
data__nameServers = '{{ nameServers }}',
data__peeringConfig = '{{ peeringConfig }}',
data__privateVisibilityConfig = '{{ privateVisibilityConfig }}',
data__reverseLookupConfig = '{{ reverseLookupConfig }}',
data__serviceDirectoryConfig = '{{ serviceDirectoryConfig }}',
data__visibility = '{{ visibility }}'
WHERE 
project = '{{ project }}' --required
AND managedZone = '{{ managedZone }}' --required
AND clientOperationId = '{{ clientOperationId}}'
RETURNING
id,
dnsKeyContext,
kind,
startTime,
status,
type,
user,
zoneContext;
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

Deletes a previously created ManagedZone.

```sql
DELETE FROM google.dns.managed_zones
WHERE project = '{{ project }}' --required
AND managedZone = '{{ managedZone }}' --required
AND clientOperationId = '{{ clientOperationId }}'
;
```
</TabItem>
</Tabs>
