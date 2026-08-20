--- 
title: targets
hide_title: false
hide_table_of_contents: false
keywords:
  - targets
  - clouddeploy
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

Creates, updates, deletes, gets or lists a <code>targets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="targets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.clouddeploy.targets" /></td></tr>
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
    <td>Identifier. Name of the `Target`. Format is `projects/&#123;project&#125;/locations/&#123;location&#125;/targets/&#123;target&#125;`. The `target` component must match `[a-z]([a-z0-9-]&#123;0,61&#125;[a-z0-9])?`</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.</td>
</tr>
<tr>
    <td><CopyableCode code="anthosCluster" /></td>
    <td><code>object</code></td>
    <td>Information specifying an Anthos Cluster. (id: AnthosCluster)</td>
</tr>
<tr>
    <td><CopyableCode code="associatedEntities" /></td>
    <td><code>object</code></td>
    <td>Optional. Map of entity IDs to their associated entities. Associated entities allows specifying places other than the deployment target for specific features. For example, the Gateway API canary can be configured to deploy the HTTPRoute to a different cluster(s) than the deployment cluster using associated entities. An entity ID must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^[a-z]([a-z0-9-]&#123;0,61&#125;[a-z0-9])?$`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the `Target` was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customTarget" /></td>
    <td><code>object</code></td>
    <td>Optional. Information specifying a Custom Target. (id: CustomTarget)</td>
</tr>
<tr>
    <td><CopyableCode code="deployParameters" /></td>
    <td><code>object</code></td>
    <td>Optional. The deploy parameters to use for this target.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the `Target`. Max length is 255 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="executionConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Configurations for all execution that relates to this `Target`. Each `ExecutionEnvironmentUsage` value may only be used in a single configuration; using the same value multiple times is an error. When one or more configurations are specified, they must include the `RENDER` and `DEPLOY` `ExecutionEnvironmentUsage` values. When no configurations are specified, execution will use the default specified in `DefaultPool`.</td>
</tr>
<tr>
    <td><CopyableCode code="gke" /></td>
    <td><code>object</code></td>
    <td>Information specifying a GKE Cluster. (id: GkeCluster)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be &lt;= 128 bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="multiTarget" /></td>
    <td><code>object</code></td>
    <td>Optional. Information specifying a multiTarget. (id: MultiTarget)</td>
</tr>
<tr>
    <td><CopyableCode code="requireApproval" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether or not the `Target` requires approval.</td>
</tr>
<tr>
    <td><CopyableCode code="run" /></td>
    <td><code>object</code></td>
    <td>Optional. Information specifying a Cloud Run deployment target. (id: CloudRunLocation)</td>
</tr>
<tr>
    <td><CopyableCode code="targetId" /></td>
    <td><code>string</code></td>
    <td>Output only. Resource id of the `Target`.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Unique identifier of the `Target`.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Most recent time at which the `Target` was updated.</td>
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
    <td>Identifier. Name of the `Target`. Format is `projects/&#123;project&#125;/locations/&#123;location&#125;/targets/&#123;target&#125;`. The `target` component must match `[a-z]([a-z0-9-]&#123;0,61&#125;[a-z0-9])?`</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.</td>
</tr>
<tr>
    <td><CopyableCode code="anthosCluster" /></td>
    <td><code>object</code></td>
    <td>Information specifying an Anthos Cluster. (id: AnthosCluster)</td>
</tr>
<tr>
    <td><CopyableCode code="associatedEntities" /></td>
    <td><code>object</code></td>
    <td>Optional. Map of entity IDs to their associated entities. Associated entities allows specifying places other than the deployment target for specific features. For example, the Gateway API canary can be configured to deploy the HTTPRoute to a different cluster(s) than the deployment cluster using associated entities. An entity ID must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^[a-z]([a-z0-9-]&#123;0,61&#125;[a-z0-9])?$`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Time at which the `Target` was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customTarget" /></td>
    <td><code>object</code></td>
    <td>Optional. Information specifying a Custom Target. (id: CustomTarget)</td>
</tr>
<tr>
    <td><CopyableCode code="deployParameters" /></td>
    <td><code>object</code></td>
    <td>Optional. The deploy parameters to use for this target.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. Description of the `Target`. Max length is 255 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="executionConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Configurations for all execution that relates to this `Target`. Each `ExecutionEnvironmentUsage` value may only be used in a single configuration; using the same value multiple times is an error. When one or more configurations are specified, they must include the `RENDER` and `DEPLOY` `ExecutionEnvironmentUsage` values. When no configurations are specified, execution will use the default specified in `DefaultPool`.</td>
</tr>
<tr>
    <td><CopyableCode code="gke" /></td>
    <td><code>object</code></td>
    <td>Information specifying a GKE Cluster. (id: GkeCluster)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be &lt;= 128 bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="multiTarget" /></td>
    <td><code>object</code></td>
    <td>Optional. Information specifying a multiTarget. (id: MultiTarget)</td>
</tr>
<tr>
    <td><CopyableCode code="requireApproval" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether or not the `Target` requires approval.</td>
</tr>
<tr>
    <td><CopyableCode code="run" /></td>
    <td><code>object</code></td>
    <td>Optional. Information specifying a Cloud Run deployment target. (id: CloudRunLocation)</td>
</tr>
<tr>
    <td><CopyableCode code="targetId" /></td>
    <td><code>string</code></td>
    <td>Output only. Resource id of the `Target`.</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. Unique identifier of the `Target`.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Most recent time at which the `Target` was updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-targetsId"><code>targetsId</code></a></td>
    <td></td>
    <td>Gets details of a single Target.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists Targets in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-targetId"><code>targetId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a new Target in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-targetsId"><code>targetsId</code></a></td>
    <td><a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates the parameters of a single Target.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-targetsId"><code>targetsId</code></a></td>
    <td><a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Deletes a single Target.</td>
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
<tr id="parameter-targetsId">
    <td><CopyableCode code="targetsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-targetId">
    <td><CopyableCode code="targetId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
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

Gets details of a single Target.

```sql
SELECT
name,
annotations,
anthosCluster,
associatedEntities,
createTime,
customTarget,
deployParameters,
description,
etag,
executionConfigs,
gke,
labels,
multiTarget,
requireApproval,
run,
targetId,
uid,
updateTime
FROM google.clouddeploy.targets
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND targetsId = '{{ targetsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Targets in a given project and location.

```sql
SELECT
name,
annotations,
anthosCluster,
associatedEntities,
createTime,
customTarget,
deployParameters,
description,
etag,
executionConfigs,
gke,
labels,
multiTarget,
requireApproval,
run,
targetId,
uid,
updateTime
FROM google.clouddeploy.targets
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

Creates a new Target in a given project and location.

```sql
INSERT INTO google.clouddeploy.targets (
data__annotations,
data__anthosCluster,
data__associatedEntities,
data__customTarget,
data__deployParameters,
data__description,
data__etag,
data__executionConfigs,
data__gke,
data__labels,
data__multiTarget,
data__name,
data__requireApproval,
data__run,
projectsId,
locationsId,
requestId,
targetId,
validateOnly
)
SELECT 
'{{ annotations }}',
'{{ anthosCluster }}',
'{{ associatedEntities }}',
'{{ customTarget }}',
'{{ deployParameters }}',
'{{ description }}',
'{{ etag }}',
'{{ executionConfigs }}',
'{{ gke }}',
'{{ labels }}',
'{{ multiTarget }}',
'{{ name }}',
{{ requireApproval }},
'{{ run }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ requestId }}',
'{{ targetId }}',
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
- name: targets
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the targets resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the targets resource.
    - name: annotations
      value: "{{ annotations }}"
      description: |
        Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
    - name: anthosCluster
      description: |
        Information specifying an Anthos Cluster.
      value:
        membership: "{{ membership }}"
    - name: associatedEntities
      value: "{{ associatedEntities }}"
      description: |
        Optional. Map of entity IDs to their associated entities. Associated entities allows specifying places other than the deployment target for specific features. For example, the Gateway API canary can be configured to deploy the HTTPRoute to a different cluster(s) than the deployment cluster using associated entities. An entity ID must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: \`^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$\`.
    - name: customTarget
      description: |
        Optional. Information specifying a Custom Target.
      value:
        customTargetType: "{{ customTargetType }}"
    - name: deployParameters
      value: "{{ deployParameters }}"
      description: |
        Optional. The deploy parameters to use for this target.
    - name: description
      value: "{{ description }}"
      description: |
        Optional. Description of the \`Target\`. Max length is 255 characters.
    - name: etag
      value: "{{ etag }}"
      description: |
        Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
    - name: executionConfigs
      description: |
        Optional. Configurations for all execution that relates to this \`Target\`. Each \`ExecutionEnvironmentUsage\` value may only be used in a single configuration; using the same value multiple times is an error. When one or more configurations are specified, they must include the \`RENDER\` and \`DEPLOY\` \`ExecutionEnvironmentUsage\` values. When no configurations are specified, execution will use the default specified in \`DefaultPool\`.
      value:
        - artifactStorage: "{{ artifactStorage }}"
          defaultPool:
            artifactStorage: "{{ artifactStorage }}"
            serviceAccount: "{{ serviceAccount }}"
          executionTimeout: "{{ executionTimeout }}"
          privatePool:
            artifactStorage: "{{ artifactStorage }}"
            serviceAccount: "{{ serviceAccount }}"
            workerPool: "{{ workerPool }}"
          serviceAccount: "{{ serviceAccount }}"
          usages: "{{ usages }}"
          verbose: {{ verbose }}
          workerPool: "{{ workerPool }}"
    - name: gke
      description: |
        Information specifying a GKE Cluster.
      value:
        cluster: "{{ cluster }}"
        dnsEndpoint: {{ dnsEndpoint }}
        internalIp: {{ internalIp }}
        proxyUrl: "{{ proxyUrl }}"
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
    - name: multiTarget
      description: |
        Optional. Information specifying a multiTarget.
      value:
        targetIds:
          - "{{ targetIds }}"
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. Name of the \`Target\`. Format is \`projects/{project}/locations/{location}/targets/{target}\`. The \`target\` component must match \`[a-z]([a-z0-9-]{0,61}[a-z0-9])?\`
    - name: requireApproval
      value: {{ requireApproval }}
      description: |
        Optional. Whether or not the \`Target\` requires approval.
    - name: run
      description: |
        Optional. Information specifying a Cloud Run deployment target.
      value:
        location: "{{ location }}"
    - name: requestId
      value: "{{ requestId }}"
    - name: targetId
      value: "{{ targetId }}"
    - name: validateOnly
      value: {{ validateOnly }}
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

Updates the parameters of a single Target.

```sql
UPDATE google.clouddeploy.targets
SET 
data__annotations = '{{ annotations }}',
data__anthosCluster = '{{ anthosCluster }}',
data__associatedEntities = '{{ associatedEntities }}',
data__customTarget = '{{ customTarget }}',
data__deployParameters = '{{ deployParameters }}',
data__description = '{{ description }}',
data__etag = '{{ etag }}',
data__executionConfigs = '{{ executionConfigs }}',
data__gke = '{{ gke }}',
data__labels = '{{ labels }}',
data__multiTarget = '{{ multiTarget }}',
data__name = '{{ name }}',
data__requireApproval = {{ requireApproval }},
data__run = '{{ run }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND targetsId = '{{ targetsId }}' --required
AND allowMissing = {{ allowMissing}}
AND requestId = '{{ requestId}}'
AND updateMask = '{{ updateMask}}'
AND validateOnly = {{ validateOnly}}
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

Deletes a single Target.

```sql
DELETE FROM google.clouddeploy.targets
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND targetsId = '{{ targetsId }}' --required
AND allowMissing = '{{ allowMissing }}'
AND etag = '{{ etag }}'
AND requestId = '{{ requestId }}'
AND validateOnly = '{{ validateOnly }}'
;
```
</TabItem>
</Tabs>
