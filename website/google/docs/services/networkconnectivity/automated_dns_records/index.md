--- 
title: automated_dns_records
hide_title: false
hide_table_of_contents: false
keywords:
  - automated_dns_records
  - networkconnectivity
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

Creates, updates, deletes, gets or lists an <code>automated_dns_records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="automated_dns_records" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networkconnectivity.automated_dns_records" /></td></tr>
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
    <td>Immutable. Identifier. The name of an AutomatedDnsRecord. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/automatedDnsRecords/&#123;automated_dns_record&#125; See: https://google.aip.dev/122#fields-representing-resource-names</td>
</tr>
<tr>
    <td><CopyableCode code="consumerNetwork" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The full resource path of the consumer network this AutomatedDnsRecord is visible to. Example: "projects/&#123;projectNumOrId&#125;/global/networks/&#123;networkName&#125;".</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of when the record was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creationMode" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The creation mode of the AutomatedDnsRecord. This field is immutable. (CREATION_MODE_UNSPECIFIED, CONSUMER_API, SERVICE_CONNECTION_MAP)</td>
</tr>
<tr>
    <td><CopyableCode code="currentConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. The current settings for this record as identified by (`hostname`, `dns_suffix`, `type`) in Cloud DNS. The `current_config` field reflects the actual settings of the DNS record in Cloud DNS based on the `hostname`, `dns_suffix`, and `type`. * **Absence:** If `current_config` is unset, it means a DNS record with the specified `hostname`, `dns_suffix`, and `type` does not currently exist in Cloud DNS. This could be because the `AutomatedDnsRecord` has never been successfully programmed, has been deleted, or there was an error during provisioning. * **Presence:** If `current_config` is present: * It can be different from the `original_config`. This can happen due to several reasons: * Out-of-band changes: A consumer might have directly modified the DNS record in Cloud DNS. * `OVERWRITE` operations from other `AutomatedDnsRecord` resources: Another `AutomatedDnsRecord` with the same identifying attributes (`hostname`, `dns_suffix`, `type`) but a different configuration might have overwritten the record using `insert_mode: OVERWRITE`. Therefore, the presence of `current_config` indicates that a corresponding DNS record exists, but its values (TTL and RRData) might not always align with the `original_config` of the AutomatedDnsRecord. (id: Config)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A human-readable description of the record.</td>
</tr>
<tr>
    <td><CopyableCode code="dnsSuffix" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The dns suffix for this record to use in longest-suffix matching. Requires a trailing dot. Example: "example.com."</td>
</tr>
<tr>
    <td><CopyableCode code="dnsZone" /></td>
    <td><code>string</code></td>
    <td>Output only. DnsZone is the DNS zone managed by automation. Format: projects/&#123;project&#125;/managedZones/&#123;managedZone&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="fqdn" /></td>
    <td><code>string</code></td>
    <td>Output only. The FQDN created by combining the hostname and dns suffix. Should include a trailing dot.</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The hostname for the DNS record. This value will be prepended to the `dns_suffix` to create the full domain name (FQDN) for the record. For example, if `hostname` is "corp.db" and `dns_suffix` is "example.com.", the resulting record will be "corp.db.example.com.". Should not include a trailing dot.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels.</td>
</tr>
<tr>
    <td><CopyableCode code="originalConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Immutable. The configuration settings used to create this DNS record. These settings define the desired state of the record as specified by the producer. (id: Config)</td>
</tr>
<tr>
    <td><CopyableCode code="recordType" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The identifier of a supported record type. (RECORD_TYPE_UNSPECIFIED, A, AAAA, TXT, CNAME)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceClass" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The service class identifier which authorizes this AutomatedDnsRecord. Any API calls targeting this AutomatedDnsRecord must have `networkconnectivity.serviceClasses.use` IAM permission for the provided service class.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current operational state of this AutomatedDnsRecord as managed by Service Connectivity Automation. (STATE_UNSPECIFIED, PROGRAMMED, FAILED_DEPROGRAMMING, CREATING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="stateDetails" /></td>
    <td><code>string</code></td>
    <td>Output only. A human-readable message providing more context about the current state, such as an error description if the state is `FAILED_DEPROGRAMMING`.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of when the record was updated.</td>
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
    <td>Immutable. Identifier. The name of an AutomatedDnsRecord. Format: projects/&#123;project&#125;/locations/&#123;location&#125;/automatedDnsRecords/&#123;automated_dns_record&#125; See: https://google.aip.dev/122#fields-representing-resource-names</td>
</tr>
<tr>
    <td><CopyableCode code="consumerNetwork" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The full resource path of the consumer network this AutomatedDnsRecord is visible to. Example: "projects/&#123;projectNumOrId&#125;/global/networks/&#123;networkName&#125;".</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of when the record was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creationMode" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The creation mode of the AutomatedDnsRecord. This field is immutable. (CREATION_MODE_UNSPECIFIED, CONSUMER_API, SERVICE_CONNECTION_MAP)</td>
</tr>
<tr>
    <td><CopyableCode code="currentConfig" /></td>
    <td><code>object</code></td>
    <td>Output only. The current settings for this record as identified by (`hostname`, `dns_suffix`, `type`) in Cloud DNS. The `current_config` field reflects the actual settings of the DNS record in Cloud DNS based on the `hostname`, `dns_suffix`, and `type`. * **Absence:** If `current_config` is unset, it means a DNS record with the specified `hostname`, `dns_suffix`, and `type` does not currently exist in Cloud DNS. This could be because the `AutomatedDnsRecord` has never been successfully programmed, has been deleted, or there was an error during provisioning. * **Presence:** If `current_config` is present: * It can be different from the `original_config`. This can happen due to several reasons: * Out-of-band changes: A consumer might have directly modified the DNS record in Cloud DNS. * `OVERWRITE` operations from other `AutomatedDnsRecord` resources: Another `AutomatedDnsRecord` with the same identifying attributes (`hostname`, `dns_suffix`, `type`) but a different configuration might have overwritten the record using `insert_mode: OVERWRITE`. Therefore, the presence of `current_config` indicates that a corresponding DNS record exists, but its values (TTL and RRData) might not always align with the `original_config` of the AutomatedDnsRecord. (id: Config)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A human-readable description of the record.</td>
</tr>
<tr>
    <td><CopyableCode code="dnsSuffix" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The dns suffix for this record to use in longest-suffix matching. Requires a trailing dot. Example: "example.com."</td>
</tr>
<tr>
    <td><CopyableCode code="dnsZone" /></td>
    <td><code>string</code></td>
    <td>Output only. DnsZone is the DNS zone managed by automation. Format: projects/&#123;project&#125;/managedZones/&#123;managedZone&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="fqdn" /></td>
    <td><code>string</code></td>
    <td>Output only. The FQDN created by combining the hostname and dns suffix. Should include a trailing dot.</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The hostname for the DNS record. This value will be prepended to the `dns_suffix` to create the full domain name (FQDN) for the record. For example, if `hostname` is "corp.db" and `dns_suffix` is "example.com.", the resulting record will be "corp.db.example.com.". Should not include a trailing dot.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels.</td>
</tr>
<tr>
    <td><CopyableCode code="originalConfig" /></td>
    <td><code>object</code></td>
    <td>Required. Immutable. The configuration settings used to create this DNS record. These settings define the desired state of the record as specified by the producer. (id: Config)</td>
</tr>
<tr>
    <td><CopyableCode code="recordType" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The identifier of a supported record type. (RECORD_TYPE_UNSPECIFIED, A, AAAA, TXT, CNAME)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceClass" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The service class identifier which authorizes this AutomatedDnsRecord. Any API calls targeting this AutomatedDnsRecord must have `networkconnectivity.serviceClasses.use` IAM permission for the provided service class.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current operational state of this AutomatedDnsRecord as managed by Service Connectivity Automation. (STATE_UNSPECIFIED, PROGRAMMED, FAILED_DEPROGRAMMING, CREATING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="stateDetails" /></td>
    <td><code>string</code></td>
    <td>Output only. A human-readable message providing more context about the current state, such as an error description if the state is `FAILED_DEPROGRAMMING`.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of when the record was updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-automatedDnsRecordsId"><code>automatedDnsRecordsId</code></a></td>
    <td></td>
    <td>Gets details of a single AutomatedDnsRecord.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists AutomatedDnsRecords in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-automatedDnsRecordId"><code>automatedDnsRecordId</code></a>, <a href="#parameter-insertMode"><code>insertMode</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new AutomatedDnsRecord in a given project and location.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-automatedDnsRecordsId"><code>automatedDnsRecordsId</code></a></td>
    <td><a href="#parameter-deleteMode"><code>deleteMode</code></a>, <a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single AutomatedDnsRecord.</td>
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
<tr id="parameter-automatedDnsRecordsId">
    <td><CopyableCode code="automatedDnsRecordsId" /></td>
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
<tr id="parameter-automatedDnsRecordId">
    <td><CopyableCode code="automatedDnsRecordId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-deleteMode">
    <td><CopyableCode code="deleteMode" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-insertMode">
    <td><CopyableCode code="insertMode" /></td>
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

Gets details of a single AutomatedDnsRecord.

```sql
SELECT
name,
consumerNetwork,
createTime,
creationMode,
currentConfig,
description,
dnsSuffix,
dnsZone,
etag,
fqdn,
hostname,
labels,
originalConfig,
recordType,
serviceClass,
state,
stateDetails,
updateTime
FROM google.networkconnectivity.automated_dns_records
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND automatedDnsRecordsId = '{{ automatedDnsRecordsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists AutomatedDnsRecords in a given project and location.

```sql
SELECT
name,
consumerNetwork,
createTime,
creationMode,
currentConfig,
description,
dnsSuffix,
dnsZone,
etag,
fqdn,
hostname,
labels,
originalConfig,
recordType,
serviceClass,
state,
stateDetails,
updateTime
FROM google.networkconnectivity.automated_dns_records
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

Creates a new AutomatedDnsRecord in a given project and location.

```sql
INSERT INTO google.networkconnectivity.automated_dns_records (
data__consumerNetwork,
data__creationMode,
data__description,
data__dnsSuffix,
data__etag,
data__hostname,
data__labels,
data__name,
data__originalConfig,
data__recordType,
data__serviceClass,
projectsId,
locationsId,
automatedDnsRecordId,
insertMode,
requestId
)
SELECT 
'{{ consumerNetwork }}',
'{{ creationMode }}',
'{{ description }}',
'{{ dnsSuffix }}',
'{{ etag }}',
'{{ hostname }}',
'{{ labels }}',
'{{ name }}',
'{{ originalConfig }}',
'{{ recordType }}',
'{{ serviceClass }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ automatedDnsRecordId }}',
'{{ insertMode }}',
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
- name: automated_dns_records
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the automated_dns_records resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the automated_dns_records resource.
    - name: consumerNetwork
      value: "{{ consumerNetwork }}"
      description: |
        Required. Immutable. The full resource path of the consumer network this AutomatedDnsRecord is visible to. Example: "projects/{projectNumOrId}/global/networks/{networkName}".
    - name: creationMode
      value: "{{ creationMode }}"
      description: |
        Required. Immutable. The creation mode of the AutomatedDnsRecord. This field is immutable.
      valid_values: ['CREATION_MODE_UNSPECIFIED', 'CONSUMER_API', 'SERVICE_CONNECTION_MAP']
    - name: description
      value: "{{ description }}"
      description: |
        A human-readable description of the record.
    - name: dnsSuffix
      value: "{{ dnsSuffix }}"
      description: |
        Required. Immutable. The dns suffix for this record to use in longest-suffix matching. Requires a trailing dot. Example: "example.com."
    - name: etag
      value: "{{ etag }}"
      description: |
        Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
    - name: hostname
      value: "{{ hostname }}"
      description: |
        Required. Immutable. The hostname for the DNS record. This value will be prepended to the \`dns_suffix\` to create the full domain name (FQDN) for the record. For example, if \`hostname\` is "corp.db" and \`dns_suffix\` is "example.com.", the resulting record will be "corp.db.example.com.". Should not include a trailing dot.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. User-defined labels.
    - name: name
      value: "{{ name }}"
      description: |
        Immutable. Identifier. The name of an AutomatedDnsRecord. Format: projects/{project}/locations/{location}/automatedDnsRecords/{automated_dns_record} See: https://google.aip.dev/122#fields-representing-resource-names
    - name: originalConfig
      description: |
        Required. Immutable. The configuration settings used to create this DNS record. These settings define the desired state of the record as specified by the producer.
      value:
        rrdatas:
          - "{{ rrdatas }}"
        ttl: "{{ ttl }}"
    - name: recordType
      value: "{{ recordType }}"
      description: |
        Required. Immutable. The identifier of a supported record type.
      valid_values: ['RECORD_TYPE_UNSPECIFIED', 'A', 'AAAA', 'TXT', 'CNAME']
    - name: serviceClass
      value: "{{ serviceClass }}"
      description: |
        Required. Immutable. The service class identifier which authorizes this AutomatedDnsRecord. Any API calls targeting this AutomatedDnsRecord must have \`networkconnectivity.serviceClasses.use\` IAM permission for the provided service class.
    - name: automatedDnsRecordId
      value: "{{ automatedDnsRecordId }}"
    - name: insertMode
      value: "{{ insertMode }}"
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

Deletes a single AutomatedDnsRecord.

```sql
DELETE FROM google.networkconnectivity.automated_dns_records
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND automatedDnsRecordsId = '{{ automatedDnsRecordsId }}' --required
AND deleteMode = '{{ deleteMode }}'
AND etag = '{{ etag }}'
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
