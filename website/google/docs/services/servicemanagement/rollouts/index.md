--- 
title: rollouts
hide_title: false
hide_table_of_contents: false
keywords:
  - rollouts
  - servicemanagement
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

Creates, updates, deletes, gets or lists a <code>rollouts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rollouts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.servicemanagement.rollouts" /></td></tr>
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
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Creation time of the rollout. Readonly.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The user who created the Rollout. Readonly.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteServiceStrategy" /></td>
    <td><code>object</code></td>
    <td>The strategy associated with a rollout to delete a `ManagedService`. Readonly. (id: DeleteServiceStrategy)</td>
</tr>
<tr>
    <td><CopyableCode code="rolloutId" /></td>
    <td><code>string</code></td>
    <td>Optional. Unique identifier of this Rollout. Must be no longer than 63 characters and only lower case letters, digits, '.', '_' and '-' are allowed. If not specified by client, the server will generate one. The generated id will have the form of , where "date" is the create date in ISO 8601 format. "revision number" is a monotonically increasing positive number that is reset every day for each service. An example of the generated rollout_id is '2016-02-16r1'</td>
</tr>
<tr>
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>The name of the service associated with this Rollout.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of this rollout. Readonly. In case of a failed rollout, the system will automatically rollback to the current Rollout version. Readonly. (ROLLOUT_STATUS_UNSPECIFIED, IN_PROGRESS, SUCCESS, CANCELLED, FAILED, PENDING, FAILED_ROLLED_BACK)</td>
</tr>
<tr>
    <td><CopyableCode code="trafficPercentStrategy" /></td>
    <td><code>object</code></td>
    <td>Google Service Control selects service configurations based on traffic percentage. (id: TrafficPercentStrategy)</td>
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
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Creation time of the rollout. Readonly.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The user who created the Rollout. Readonly.</td>
</tr>
<tr>
    <td><CopyableCode code="deleteServiceStrategy" /></td>
    <td><code>object</code></td>
    <td>The strategy associated with a rollout to delete a `ManagedService`. Readonly. (id: DeleteServiceStrategy)</td>
</tr>
<tr>
    <td><CopyableCode code="rolloutId" /></td>
    <td><code>string</code></td>
    <td>Optional. Unique identifier of this Rollout. Must be no longer than 63 characters and only lower case letters, digits, '.', '_' and '-' are allowed. If not specified by client, the server will generate one. The generated id will have the form of , where "date" is the create date in ISO 8601 format. "revision number" is a monotonically increasing positive number that is reset every day for each service. An example of the generated rollout_id is '2016-02-16r1'</td>
</tr>
<tr>
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>The name of the service associated with this Rollout.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of this rollout. Readonly. In case of a failed rollout, the system will automatically rollback to the current Rollout version. Readonly. (ROLLOUT_STATUS_UNSPECIFIED, IN_PROGRESS, SUCCESS, CANCELLED, FAILED, PENDING, FAILED_ROLLED_BACK)</td>
</tr>
<tr>
    <td><CopyableCode code="trafficPercentStrategy" /></td>
    <td><code>object</code></td>
    <td>Google Service Control selects service configurations based on traffic percentage. (id: TrafficPercentStrategy)</td>
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
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-rolloutId"><code>rolloutId</code></a></td>
    <td></td>
    <td>Gets a service configuration rollout.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the history of the service configuration rollouts for a managed service, from the newest to the oldest.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Creates a new service configuration rollout. Based on rollout, the Google Service Management will roll out the service configurations to different backend services. For example, the logging configuration will be pushed to Google Cloud Logging. Please note that any previous pending and running Rollouts and associated Operations will be automatically cancelled so that the latest Rollout will not be blocked by previous Rollouts. Only the 100 most recent (in any state) and the last 10 successful (if not already part of the set of 100 most recent) rollouts are kept for each service. The rest will be deleted eventually. Operation</td>
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
<tr id="parameter-rolloutId">
    <td><CopyableCode code="rolloutId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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

Gets a service configuration rollout.

```sql
SELECT
createTime,
createdBy,
deleteServiceStrategy,
rolloutId,
serviceName,
status,
trafficPercentStrategy
FROM google.servicemanagement.rollouts
WHERE serviceName = '{{ serviceName }}' -- required
AND rolloutId = '{{ rolloutId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the history of the service configuration rollouts for a managed service, from the newest to the oldest.

```sql
SELECT
createTime,
createdBy,
deleteServiceStrategy,
rolloutId,
serviceName,
status,
trafficPercentStrategy
FROM google.servicemanagement.rollouts
WHERE serviceName = '{{ serviceName }}' -- required
AND filter = '{{ filter }}'
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

Creates a new service configuration rollout. Based on rollout, the Google Service Management will roll out the service configurations to different backend services. For example, the logging configuration will be pushed to Google Cloud Logging. Please note that any previous pending and running Rollouts and associated Operations will be automatically cancelled so that the latest Rollout will not be blocked by previous Rollouts. Only the 100 most recent (in any state) and the last 10 successful (if not already part of the set of 100 most recent) rollouts are kept for each service. The rest will be deleted eventually. Operation

```sql
INSERT INTO google.servicemanagement.rollouts (
data__createTime,
data__createdBy,
data__deleteServiceStrategy,
data__rolloutId,
data__serviceName,
data__status,
data__trafficPercentStrategy,
serviceName
)
SELECT 
'{{ createTime }}',
'{{ createdBy }}',
'{{ deleteServiceStrategy }}',
'{{ rolloutId }}',
'{{ serviceName }}',
'{{ status }}',
'{{ trafficPercentStrategy }}',
'{{ serviceName }}'
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
- name: rollouts
  props:
    - name: serviceName
      value: "{{ serviceName }}"
      description: Required parameter for the rollouts resource.
    - name: createTime
      value: "{{ createTime }}"
      description: |
        Creation time of the rollout. Readonly.
    - name: createdBy
      value: "{{ createdBy }}"
      description: |
        The user who created the Rollout. Readonly.
    - name: deleteServiceStrategy
      value: "{{ deleteServiceStrategy }}"
      description: |
        The strategy associated with a rollout to delete a \`ManagedService\`. Readonly.
    - name: rolloutId
      value: "{{ rolloutId }}"
      description: |
        Optional. Unique identifier of this Rollout. Must be no longer than 63 characters and only lower case letters, digits, '.', '_' and '-' are allowed. If not specified by client, the server will generate one. The generated id will have the form of , where "date" is the create date in ISO 8601 format. "revision number" is a monotonically increasing positive number that is reset every day for each service. An example of the generated rollout_id is '2016-02-16r1'
    - name: serviceName
      value: "{{ serviceName }}"
      description: |
        The name of the service associated with this Rollout.
    - name: status
      value: "{{ status }}"
      description: |
        The status of this rollout. Readonly. In case of a failed rollout, the system will automatically rollback to the current Rollout version. Readonly.
      valid_values: ['ROLLOUT_STATUS_UNSPECIFIED', 'IN_PROGRESS', 'SUCCESS', 'CANCELLED', 'FAILED', 'PENDING', 'FAILED_ROLLED_BACK']
    - name: trafficPercentStrategy
      description: |
        Google Service Control selects service configurations based on traffic percentage.
      value:
        percentages: "{{ percentages }}"
`}</CodeBlock>

</TabItem>
</Tabs>
