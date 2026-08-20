--- 
title: datastores
hide_title: false
hide_table_of_contents: false
keywords:
  - datastores
  - vmwareengine
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

Creates, updates, deletes, gets or lists a <code>datastores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="datastores" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.vmwareengine.datastores" /></td></tr>
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
    <td>Output only. Identifier. The resource name of this datastore. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/datastores/datastore`</td>
</tr>
<tr>
    <td><CopyableCode code="clusters" /></td>
    <td><code>array</code></td>
    <td>Output only. Clusters to which the datastore is attached.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation time of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User-provided description for this datastore</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Checksum that may be sent on update and delete requests to ensure that the user-provided value is up to date before the server processes a request. The server computes checksums based on the value of other fields in the request.</td>
</tr>
<tr>
    <td><CopyableCode code="nfsDatastore" /></td>
    <td><code>object</code></td>
    <td>Required. Settings for the NFS datastore. (id: NfsDatastore)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the Datastore. (STATE_UNSPECIFIED, CREATING, ACTIVE, UPDATING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System-generated unique identifier for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update time of this resource.</td>
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
    <td>Output only. Identifier. The resource name of this datastore. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/datastores/datastore`</td>
</tr>
<tr>
    <td><CopyableCode code="clusters" /></td>
    <td><code>array</code></td>
    <td>Output only. Clusters to which the datastore is attached.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Creation time of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User-provided description for this datastore</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Checksum that may be sent on update and delete requests to ensure that the user-provided value is up to date before the server processes a request. The server computes checksums based on the value of other fields in the request.</td>
</tr>
<tr>
    <td><CopyableCode code="nfsDatastore" /></td>
    <td><code>object</code></td>
    <td>Required. Settings for the NFS datastore. (id: NfsDatastore)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the Datastore. (STATE_UNSPECIFIED, CREATING, ACTIVE, UPDATING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System-generated unique identifier for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Last update time of this resource.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datastoresId"><code>datastoresId</code></a></td>
    <td></td>
    <td>Retrieves a `Datastore` resource by its resource name. The resource contains details of the Datastore, such as its description, subnets, type, and more.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Lists `Datastore` resources in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-datastoreId"><code>datastoreId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new `Datastore` resource in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datastoresId"><code>datastoresId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Modifies a Datastore resource. Only fields specified in `updateMask` are applied.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-datastoresId"><code>datastoresId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a `Datastore` resource. You can only delete a Datastore after all resources that refer to it are deleted. For example, multiple clusters of the same private cloud or different private clouds can refer to the same datastore.</td>
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
<tr id="parameter-datastoresId">
    <td><CopyableCode code="datastoresId" /></td>
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
<tr id="parameter-datastoreId">
    <td><CopyableCode code="datastoreId" /></td>
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

Retrieves a `Datastore` resource by its resource name. The resource contains details of the Datastore, such as its description, subnets, type, and more.

```sql
SELECT
name,
clusters,
createTime,
description,
etag,
nfsDatastore,
state,
uid,
updateTime
FROM google.vmwareengine.datastores
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND datastoresId = '{{ datastoresId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists `Datastore` resources in a given project and location.

```sql
SELECT
name,
clusters,
createTime,
description,
etag,
nfsDatastore,
state,
uid,
updateTime
FROM google.vmwareengine.datastores
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND requestId = '{{ requestId }}'
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

Creates a new `Datastore` resource in a given project and location.

```sql
INSERT INTO google.vmwareengine.datastores (
data__description,
data__etag,
data__nfsDatastore,
projectsId,
locationsId,
datastoreId,
requestId
)
SELECT 
'{{ description }}',
'{{ etag }}',
'{{ nfsDatastore }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ datastoreId }}',
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
- name: datastores
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the datastores resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the datastores resource.
    - name: description
      value: "{{ description }}"
      description: |
        Optional. User-provided description for this datastore
    - name: etag
      value: "{{ etag }}"
      description: |
        Optional. Checksum that may be sent on update and delete requests to ensure that the user-provided value is up to date before the server processes a request. The server computes checksums based on the value of other fields in the request.
    - name: nfsDatastore
      description: |
        Required. Settings for the NFS datastore.
      value:
        googleFileService:
          filestoreInstance: "{{ filestoreInstance }}"
          netappVolume: "{{ netappVolume }}"
        googleVmwareFileService: "{{ googleVmwareFileService }}"
        thirdPartyFileService:
          fileShare: "{{ fileShare }}"
          network: "{{ network }}"
          servers:
            - "{{ servers }}"
    - name: datastoreId
      value: "{{ datastoreId }}"
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

Modifies a Datastore resource. Only fields specified in `updateMask` are applied.

```sql
UPDATE google.vmwareengine.datastores
SET 
data__description = '{{ description }}',
data__etag = '{{ etag }}',
data__nfsDatastore = '{{ nfsDatastore }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND datastoresId = '{{ datastoresId }}' --required
AND requestId = '{{ requestId}}'
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

Deletes a `Datastore` resource. You can only delete a Datastore after all resources that refer to it are deleted. For example, multiple clusters of the same private cloud or different private clouds can refer to the same datastore.

```sql
DELETE FROM google.vmwareengine.datastores
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND datastoresId = '{{ datastoresId }}' --required
AND etag = '{{ etag }}'
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
