--- 
title: changes
hide_title: false
hide_table_of_contents: false
keywords:
  - changes
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

Creates, updates, deletes, gets or lists a <code>changes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="changes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dns.changes" /></td></tr>
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
    <td><code>string</code></td>
    <td>Unique identifier for the resource; defined by the server (output only).</td>
</tr>
<tr>
    <td><CopyableCode code="additions" /></td>
    <td><code>array</code></td>
    <td>Which ResourceRecordSets to add?</td>
</tr>
<tr>
    <td><CopyableCode code="deletions" /></td>
    <td><code>array</code></td>
    <td>Which ResourceRecordSets to remove? Must match existing data exactly.</td>
</tr>
<tr>
    <td><CopyableCode code="isServing" /></td>
    <td><code>boolean</code></td>
    <td>If the DNS queries for the zone will be served.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td> (default: dns#change)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string</code></td>
    <td>The time that this operation was started by the server (output only). This is in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the operation (output only). A status of "done" means that the request to update the authoritative servers has been sent, but the servers might not be updated yet. (pending, done)</td>
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
    <td>Unique identifier for the resource; defined by the server (output only).</td>
</tr>
<tr>
    <td><CopyableCode code="additions" /></td>
    <td><code>array</code></td>
    <td>Which ResourceRecordSets to add?</td>
</tr>
<tr>
    <td><CopyableCode code="deletions" /></td>
    <td><code>array</code></td>
    <td>Which ResourceRecordSets to remove? Must match existing data exactly.</td>
</tr>
<tr>
    <td><CopyableCode code="isServing" /></td>
    <td><code>boolean</code></td>
    <td>If the DNS queries for the zone will be served.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td> (default: dns#change)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string</code></td>
    <td>The time that this operation was started by the server (output only). This is in RFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the operation (output only). A status of "done" means that the request to update the authoritative servers has been sent, but the servers might not be updated yet. (pending, done)</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-managedZone"><code>managedZone</code></a>, <a href="#parameter-changeId"><code>changeId</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Fetches the representation of an existing Change.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-managedZone"><code>managedZone</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a></td>
    <td>Enumerates Changes to a ResourceRecordSet collection.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-managedZone"><code>managedZone</code></a></td>
    <td><a href="#parameter-clientOperationId"><code>clientOperationId</code></a></td>
    <td>Atomically updates the ResourceRecordSet collection. Note: While `dns.changes.create` is the baseline permission required to invoke this method, additional permissions are checked depending on the specific additions or deletions contained in the payload.</td>
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
<tr id="parameter-changeId">
    <td><CopyableCode code="changeId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
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

Fetches the representation of an existing Change.

```sql
SELECT
id,
additions,
deletions,
isServing,
kind,
startTime,
status
FROM google.dns.changes
WHERE project = '{{ project }}' -- required
AND managedZone = '{{ managedZone }}' -- required
AND changeId = '{{ changeId }}' -- required
AND clientOperationId = '{{ clientOperationId }}'
;
```
</TabItem>
<TabItem value="list">

Enumerates Changes to a ResourceRecordSet collection.

```sql
SELECT
id,
additions,
deletions,
isServing,
kind,
startTime,
status
FROM google.dns.changes
WHERE project = '{{ project }}' -- required
AND managedZone = '{{ managedZone }}' -- required
AND pageToken = '{{ pageToken }}'
AND sortOrder = '{{ sortOrder }}'
AND maxResults = '{{ maxResults }}'
AND sortBy = '{{ sortBy }}'
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

Atomically updates the ResourceRecordSet collection. Note: While `dns.changes.create` is the baseline permission required to invoke this method, additional permissions are checked depending on the specific additions or deletions contained in the payload.

```sql
INSERT INTO google.dns.changes (
data__deletions,
data__status,
data__kind,
data__isServing,
data__id,
data__additions,
data__startTime,
project,
managedZone,
clientOperationId
)
SELECT 
'{{ deletions }}',
'{{ status }}',
'{{ kind }}',
{{ isServing }},
'{{ id }}',
'{{ additions }}',
'{{ startTime }}',
'{{ project }}',
'{{ managedZone }}',
'{{ clientOperationId }}'
RETURNING
id,
additions,
deletions,
isServing,
kind,
startTime,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: changes
  props:
    - name: project
      value: "{{ project }}"
      description: Required parameter for the changes resource.
    - name: managedZone
      value: "{{ managedZone }}"
      description: Required parameter for the changes resource.
    - name: deletions
      description: |
        Which ResourceRecordSets to remove? Must match existing data exactly.
      value:
        - routingPolicy:
            geo:
              enableFencing: {{ enableFencing }}
              kind: "{{ kind }}"
              items:
                - kind: "{{ kind }}"
                  location: "{{ location }}"
                  rrdatas: "{{ rrdatas }}"
                  signatureRrdatas: "{{ signatureRrdatas }}"
                  healthCheckedTargets:
                    internalLoadBalancers: "{{ internalLoadBalancers }}"
                    externalEndpoints: "{{ externalEndpoints }}"
            primaryBackup:
              primaryTargets:
                internalLoadBalancers:
                  - ipAddress: "{{ ipAddress }}"
                    kind: "{{ kind }}"
                    ipProtocol: "{{ ipProtocol }}"
                    region: "{{ region }}"
                    project: "{{ project }}"
                    loadBalancerType: "{{ loadBalancerType }}"
                    networkUrl: "{{ networkUrl }}"
                    port: "{{ port }}"
                externalEndpoints:
                  - "{{ externalEndpoints }}"
              kind: "{{ kind }}"
              trickleTraffic: {{ trickleTraffic }}
              backupGeoTargets:
                enableFencing: {{ enableFencing }}
                kind: "{{ kind }}"
                items:
                  - kind: "{{ kind }}"
                    location: "{{ location }}"
                    rrdatas: "{{ rrdatas }}"
                    signatureRrdatas: "{{ signatureRrdatas }}"
                    healthCheckedTargets:
                      internalLoadBalancers: "{{ internalLoadBalancers }}"
                      externalEndpoints: "{{ externalEndpoints }}"
            healthCheck: "{{ healthCheck }}"
            kind: "{{ kind }}"
            wrr:
              items:
                - weight: {{ weight }}
                  kind: "{{ kind }}"
                  rrdatas: "{{ rrdatas }}"
                  signatureRrdatas: "{{ signatureRrdatas }}"
                  healthCheckedTargets:
                    internalLoadBalancers: "{{ internalLoadBalancers }}"
                    externalEndpoints: "{{ externalEndpoints }}"
              kind: "{{ kind }}"
          kind: "{{ kind }}"
          ttl: {{ ttl }}
          rrdatas: "{{ rrdatas }}"
          signatureRrdatas: "{{ signatureRrdatas }}"
          type: "{{ type }}"
          name: "{{ name }}"
    - name: status
      value: "{{ status }}"
      description: |
        Status of the operation (output only). A status of "done" means that the request to update the authoritative servers has been sent, but the servers might not be updated yet.
      valid_values: ['pending', 'done']
    - name: kind
      value: "{{ kind }}"
      default: dns#change
    - name: isServing
      value: {{ isServing }}
      description: |
        If the DNS queries for the zone will be served.
    - name: id
      value: "{{ id }}"
      description: |
        Unique identifier for the resource; defined by the server (output only).
    - name: additions
      description: |
        Which ResourceRecordSets to add?
      value:
        - routingPolicy:
            geo:
              enableFencing: {{ enableFencing }}
              kind: "{{ kind }}"
              items:
                - kind: "{{ kind }}"
                  location: "{{ location }}"
                  rrdatas: "{{ rrdatas }}"
                  signatureRrdatas: "{{ signatureRrdatas }}"
                  healthCheckedTargets:
                    internalLoadBalancers: "{{ internalLoadBalancers }}"
                    externalEndpoints: "{{ externalEndpoints }}"
            primaryBackup:
              primaryTargets:
                internalLoadBalancers:
                  - ipAddress: "{{ ipAddress }}"
                    kind: "{{ kind }}"
                    ipProtocol: "{{ ipProtocol }}"
                    region: "{{ region }}"
                    project: "{{ project }}"
                    loadBalancerType: "{{ loadBalancerType }}"
                    networkUrl: "{{ networkUrl }}"
                    port: "{{ port }}"
                externalEndpoints:
                  - "{{ externalEndpoints }}"
              kind: "{{ kind }}"
              trickleTraffic: {{ trickleTraffic }}
              backupGeoTargets:
                enableFencing: {{ enableFencing }}
                kind: "{{ kind }}"
                items:
                  - kind: "{{ kind }}"
                    location: "{{ location }}"
                    rrdatas: "{{ rrdatas }}"
                    signatureRrdatas: "{{ signatureRrdatas }}"
                    healthCheckedTargets:
                      internalLoadBalancers: "{{ internalLoadBalancers }}"
                      externalEndpoints: "{{ externalEndpoints }}"
            healthCheck: "{{ healthCheck }}"
            kind: "{{ kind }}"
            wrr:
              items:
                - weight: {{ weight }}
                  kind: "{{ kind }}"
                  rrdatas: "{{ rrdatas }}"
                  signatureRrdatas: "{{ signatureRrdatas }}"
                  healthCheckedTargets:
                    internalLoadBalancers: "{{ internalLoadBalancers }}"
                    externalEndpoints: "{{ externalEndpoints }}"
              kind: "{{ kind }}"
          kind: "{{ kind }}"
          ttl: {{ ttl }}
          rrdatas: "{{ rrdatas }}"
          signatureRrdatas: "{{ signatureRrdatas }}"
          type: "{{ type }}"
          name: "{{ name }}"
    - name: startTime
      value: "{{ startTime }}"
      description: |
        The time that this operation was started by the server (output only). This is in RFC3339 text format.
    - name: clientOperationId
      value: "{{ clientOperationId }}"
`}</CodeBlock>

</TabItem>
</Tabs>
