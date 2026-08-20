--- 
title: apim_service_extensions
hide_title: false
hide_table_of_contents: false
keywords:
  - apim_service_extensions
  - apigee
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

Creates, updates, deletes, gets or lists an <code>apim_service_extensions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="apim_service_extensions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.apim_service_extensions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_apim_service_extensions_get"
    values={[
        { label: 'organizations_apim_service_extensions_get', value: 'organizations_apim_service_extensions_get' },
        { label: 'organizations_apim_service_extensions_list', value: 'organizations_apim_service_extensions_list' }
    ]}
>
<TabItem value="organizations_apim_service_extensions_get">

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
    <td>Identifier. unique name of the APIM service extension. The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens, and can have a maximum length of 63 characters. Additionally, the first character must be a letter and the last a letter or a number.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time that this resource was created on the server.</td>
</tr>
<tr>
    <td><CopyableCode code="extensionProcessor" /></td>
    <td><code>string</code></td>
    <td>Required. Name of the proxy deployed in the Apigee X instance.</td>
</tr>
<tr>
    <td><CopyableCode code="extensions" /></td>
    <td><code>array</code></td>
    <td>Optional. List of extensions that are part of the service extension. Refer to https://cloud.google.com/service-extensions/docs/quotas#limits for any limits.</td>
</tr>
<tr>
    <td><CopyableCode code="lbForwardingRule" /></td>
    <td><code>string</code></td>
    <td>Required. Name of the Google Cloud LB forwarding rule. Format: projects/&#123;project&#125;/regions/&#123;region&#125;/forwardingRules/&#123;forwarding_rule&#125; projects/&#123;project&#125;/global/forwardingRules/&#123;forwarding_rule&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Required. The network where the forwarding rule is created. Format: projects/&#123;project&#125;/global/networks/&#123;network&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfigs" /></td>
    <td><code>array</code></td>
    <td>Required. List of network configurations for the APIM service extension.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the APIM service extension. Values other than `ACTIVE` mean the resource is not ready to use. (STATE_UNSPECIFIED, CREATING, ACTIVE, DELETING, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time that this resource was updated on the server.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_apim_service_extensions_list">

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
    <td>Identifier. unique name of the APIM service extension. The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens, and can have a maximum length of 63 characters. Additionally, the first character must be a letter and the last a letter or a number.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time that this resource was created on the server.</td>
</tr>
<tr>
    <td><CopyableCode code="extensionProcessor" /></td>
    <td><code>string</code></td>
    <td>Required. Name of the proxy deployed in the Apigee X instance.</td>
</tr>
<tr>
    <td><CopyableCode code="extensions" /></td>
    <td><code>array</code></td>
    <td>Optional. List of extensions that are part of the service extension. Refer to https://cloud.google.com/service-extensions/docs/quotas#limits for any limits.</td>
</tr>
<tr>
    <td><CopyableCode code="lbForwardingRule" /></td>
    <td><code>string</code></td>
    <td>Required. Name of the Google Cloud LB forwarding rule. Format: projects/&#123;project&#125;/regions/&#123;region&#125;/forwardingRules/&#123;forwarding_rule&#125; projects/&#123;project&#125;/global/forwardingRules/&#123;forwarding_rule&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Required. The network where the forwarding rule is created. Format: projects/&#123;project&#125;/global/networks/&#123;network&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfigs" /></td>
    <td><code>array</code></td>
    <td>Required. List of network configurations for the APIM service extension.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. State of the APIM service extension. Values other than `ACTIVE` mean the resource is not ready to use. (STATE_UNSPECIFIED, CREATING, ACTIVE, DELETING, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time that this resource was updated on the server.</td>
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
    <td><a href="#organizations_apim_service_extensions_get"><CopyableCode code="organizations_apim_service_extensions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apimServiceExtensionsId"><code>apimServiceExtensionsId</code></a></td>
    <td></td>
    <td>Gets APIM service extension details.</td>
</tr>
<tr>
    <td><a href="#organizations_apim_service_extensions_list"><CopyableCode code="organizations_apim_service_extensions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all APIM service extensions in an organization.</td>
</tr>
<tr>
    <td><a href="#organizations_apim_service_extensions_create"><CopyableCode code="organizations_apim_service_extensions_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-apimServiceExtensionId"><code>apimServiceExtensionId</code></a></td>
    <td>Creates an APIM ServiceExtension in an organization.</td>
</tr>
<tr>
    <td><a href="#organizations_apim_service_extensions_patch"><CopyableCode code="organizations_apim_service_extensions_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apimServiceExtensionsId"><code>apimServiceExtensionsId</code></a></td>
    <td><a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an APIM service extension in an organization.</td>
</tr>
<tr>
    <td><a href="#organizations_apim_service_extensions_delete"><CopyableCode code="organizations_apim_service_extensions_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-apimServiceExtensionsId"><code>apimServiceExtensionsId</code></a></td>
    <td></td>
    <td>Deletes APIM service extension from an organization.</td>
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
<tr id="parameter-apimServiceExtensionsId">
    <td><CopyableCode code="apimServiceExtensionsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-apimServiceExtensionId">
    <td><CopyableCode code="apimServiceExtensionId" /></td>
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
    defaultValue="organizations_apim_service_extensions_get"
    values={[
        { label: 'organizations_apim_service_extensions_get', value: 'organizations_apim_service_extensions_get' },
        { label: 'organizations_apim_service_extensions_list', value: 'organizations_apim_service_extensions_list' }
    ]}
>
<TabItem value="organizations_apim_service_extensions_get">

Gets APIM service extension details.

```sql
SELECT
name,
createTime,
extensionProcessor,
extensions,
lbForwardingRule,
network,
networkConfigs,
state,
updateTime
FROM google.apigee.apim_service_extensions
WHERE organizationsId = '{{ organizationsId }}' -- required
AND apimServiceExtensionsId = '{{ apimServiceExtensionsId }}' -- required
;
```
</TabItem>
<TabItem value="organizations_apim_service_extensions_list">

Lists all APIM service extensions in an organization.

```sql
SELECT
name,
createTime,
extensionProcessor,
extensions,
lbForwardingRule,
network,
networkConfigs,
state,
updateTime
FROM google.apigee.apim_service_extensions
WHERE organizationsId = '{{ organizationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_apim_service_extensions_create"
    values={[
        { label: 'organizations_apim_service_extensions_create', value: 'organizations_apim_service_extensions_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_apim_service_extensions_create">

Creates an APIM ServiceExtension in an organization.

```sql
INSERT INTO google.apigee.apim_service_extensions (
data__extensionProcessor,
data__extensions,
data__lbForwardingRule,
data__name,
data__network,
data__networkConfigs,
organizationsId,
apimServiceExtensionId
)
SELECT 
'{{ extensionProcessor }}',
'{{ extensions }}',
'{{ lbForwardingRule }}',
'{{ name }}',
'{{ network }}',
'{{ networkConfigs }}',
'{{ organizationsId }}',
'{{ apimServiceExtensionId }}'
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
- name: apim_service_extensions
  props:
    - name: organizationsId
      value: "{{ organizationsId }}"
      description: Required parameter for the apim_service_extensions resource.
    - name: extensionProcessor
      value: "{{ extensionProcessor }}"
      description: |
        Required. Name of the proxy deployed in the Apigee X instance.
    - name: extensions
      description: |
        Optional. List of extensions that are part of the service extension. Refer to https://cloud.google.com/service-extensions/docs/quotas#limits for any limits.
      value:
        - failOpen: {{ failOpen }}
          hostname: "{{ hostname }}"
          matchCondition: "{{ matchCondition }}"
          name: "{{ name }}"
          supportedEvents: "{{ supportedEvents }}"
    - name: lbForwardingRule
      value: "{{ lbForwardingRule }}"
      description: |
        Required. Name of the Google Cloud LB forwarding rule. Format: projects/{project}/regions/{region}/forwardingRules/{forwarding_rule} projects/{project}/global/forwardingRules/{forwarding_rule}
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. unique name of the APIM service extension. The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens, and can have a maximum length of 63 characters. Additionally, the first character must be a letter and the last a letter or a number.
    - name: network
      value: "{{ network }}"
      description: |
        Required. The network where the forwarding rule is created. Format: projects/{project}/global/networks/{network}
    - name: networkConfigs
      description: |
        Required. List of network configurations for the APIM service extension.
      value:
        - region: "{{ region }}"
          subnet: "{{ subnet }}"
    - name: apimServiceExtensionId
      value: "{{ apimServiceExtensionId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_apim_service_extensions_patch"
    values={[
        { label: 'organizations_apim_service_extensions_patch', value: 'organizations_apim_service_extensions_patch' }
    ]}
>
<TabItem value="organizations_apim_service_extensions_patch">

Updates an APIM service extension in an organization.

```sql
UPDATE google.apigee.apim_service_extensions
SET 
data__extensionProcessor = '{{ extensionProcessor }}',
data__extensions = '{{ extensions }}',
data__lbForwardingRule = '{{ lbForwardingRule }}',
data__name = '{{ name }}',
data__network = '{{ network }}',
data__networkConfigs = '{{ networkConfigs }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND apimServiceExtensionsId = '{{ apimServiceExtensionsId }}' --required
AND allowMissing = {{ allowMissing}}
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
    defaultValue="organizations_apim_service_extensions_delete"
    values={[
        { label: 'organizations_apim_service_extensions_delete', value: 'organizations_apim_service_extensions_delete' }
    ]}
>
<TabItem value="organizations_apim_service_extensions_delete">

Deletes APIM service extension from an organization.

```sql
DELETE FROM google.apigee.apim_service_extensions
WHERE organizationsId = '{{ organizationsId }}' --required
AND apimServiceExtensionsId = '{{ apimServiceExtensionsId }}' --required
;
```
</TabItem>
</Tabs>
