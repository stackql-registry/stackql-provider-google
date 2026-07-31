--- 
title: sources
hide_title: false
hide_table_of_contents: false
keywords:
  - sources
  - vmmigration
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

Creates, updates, deletes, gets or lists a <code>sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.vmmigration.sources" /></td></tr>
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
    <td>Output only. The Source name.</td>
</tr>
<tr>
    <td><CopyableCode code="aws" /></td>
    <td><code>object</code></td>
    <td>AWS type source details. (id: AwsSourceDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="azure" /></td>
    <td><code>object</code></td>
    <td>Azure type source details. (id: AzureSourceDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The create time timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User-provided description of the source.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption" /></td>
    <td><code>object</code></td>
    <td>Optional. Immutable. The encryption details of the source data stored by the service. (id: Encryption)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels of the source.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The update time timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="vmware" /></td>
    <td><code>object</code></td>
    <td>Vmware type source details. (id: VmwareSourceDetails)</td>
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
    <td>Output only. The Source name.</td>
</tr>
<tr>
    <td><CopyableCode code="aws" /></td>
    <td><code>object</code></td>
    <td>AWS type source details. (id: AwsSourceDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="azure" /></td>
    <td><code>object</code></td>
    <td>Azure type source details. (id: AzureSourceDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The create time timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User-provided description of the source.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption" /></td>
    <td><code>object</code></td>
    <td>Optional. Immutable. The encryption details of the source data stored by the service. (id: Encryption)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels of the source.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The update time timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="vmware" /></td>
    <td><code>object</code></td>
    <td>Vmware type source details. (id: VmwareSourceDetails)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td></td>
    <td>Gets details of a single Source.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists Sources in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-sourceId"><code>sourceId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new Source in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Updates the parameters of a single Source.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single Source.</td>
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
<tr id="parameter-sourcesId">
    <td><CopyableCode code="sourcesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
<tr id="parameter-sourceId">
    <td><CopyableCode code="sourceId" /></td>
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

Gets details of a single Source.

```sql
SELECT
name,
aws,
azure,
createTime,
description,
encryption,
labels,
updateTime,
vmware
FROM google.vmmigration.sources
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND sourcesId = '{{ sourcesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Sources in a given project and location.

```sql
SELECT
name,
aws,
azure,
createTime,
description,
encryption,
labels,
updateTime,
vmware
FROM google.vmmigration.sources
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
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

Creates a new Source in a given project and location.

```sql
INSERT INTO google.vmmigration.sources (
data__azure,
data__encryption,
data__aws,
data__labels,
data__vmware,
data__description,
projectsId,
locationsId,
sourceId,
requestId
)
SELECT 
'{{ azure }}',
'{{ encryption }}',
'{{ aws }}',
'{{ labels }}',
'{{ vmware }}',
'{{ description }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ sourceId }}',
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
- name: sources
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the sources resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the sources resource.
    - name: azure
      description: |
        Azure type source details.
      value:
        error:
          code: {{ code }}
          details: "{{ details }}"
          message: "{{ message }}"
        resourceGroupId: "{{ resourceGroupId }}"
        subscriptionId: "{{ subscriptionId }}"
        migrationResourcesUserTags: "{{ migrationResourcesUserTags }}"
        clientSecretCreds:
          tenantId: "{{ tenantId }}"
          clientSecret: "{{ clientSecret }}"
          clientId: "{{ clientId }}"
        azureLocation: "{{ azureLocation }}"
        state: "{{ state }}"
    - name: encryption
      description: |
        Optional. Immutable. The encryption details of the source data stored by the service.
      value:
        kmsKey: "{{ kmsKey }}"
    - name: aws
      description: |
        AWS type source details.
      value:
        accessKeyCreds:
          secretAccessKey: "{{ secretAccessKey }}"
          accessKeyId: "{{ accessKeyId }}"
          sessionToken: "{{ sessionToken }}"
        state: "{{ state }}"
        publicIp: "{{ publicIp }}"
        error:
          code: {{ code }}
          details: "{{ details }}"
          message: "{{ message }}"
        inventoryTagList:
          - key: "{{ key }}"
            value: "{{ value }}"
        inventorySecurityGroupNames:
          - "{{ inventorySecurityGroupNames }}"
        awsRegion: "{{ awsRegion }}"
        migrationResourcesUserTags: "{{ migrationResourcesUserTags }}"
    - name: labels
      value: "{{ labels }}"
      description: |
        The labels of the source.
    - name: vmware
      description: |
        Vmware type source details.
      value:
        username: "{{ username }}"
        password: "{{ password }}"
        vcenterIp: "{{ vcenterIp }}"
        thumbprint: "{{ thumbprint }}"
        resolvedVcenterHost: "{{ resolvedVcenterHost }}"
    - name: description
      value: "{{ description }}"
      description: |
        User-provided description of the source.
    - name: sourceId
      value: "{{ sourceId }}"
    - name: requestId
      value: "{{ requestId }}"
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

Updates the parameters of a single Source.

```sql
UPDATE google.vmmigration.sources
SET 
data__azure = '{{ azure }}',
data__encryption = '{{ encryption }}',
data__aws = '{{ aws }}',
data__labels = '{{ labels }}',
data__vmware = '{{ vmware }}',
data__description = '{{ description }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND sourcesId = '{{ sourcesId }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
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

Deletes a single Source.

```sql
DELETE FROM google.vmmigration.sources
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND sourcesId = '{{ sourcesId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
