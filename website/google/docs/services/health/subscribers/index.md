--- 
title: subscribers
hide_title: false
hide_table_of_contents: false
keywords:
  - subscribers
  - health
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

Creates, updates, deletes, gets or lists a <code>subscribers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subscribers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.health.subscribers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
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
    <td>Identifier. The resource name of the Subscriber. Format: projects/&#123;project&#125;/subscribers/&#123;subscriber&#125; The &#123;project&#125; ID is a Google Cloud Project ID or Project Number. The &#123;subscriber&#125; ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]&#123;2,34&#125;[a-z0-9])/) if provided during creation, or system-generated otherwise (e.g., a UUID). Example (User-settable subscriber ID): projects/my-project/subscribers/my-sub-123 Example (System-generated subscriber ID): projects/my-project/subscribers/a1b2c3d4-e5f6-7890-1234-567890abcdef</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the subscriber was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endpointAuthorization" /></td>
    <td><code>object</code></td>
    <td>Required. Authorization mechanism for a subscriber endpoint. This is required to ensure the endpoint can be verified. (id: EndpointAuthorization)</td>
</tr>
<tr>
    <td><CopyableCode code="endpointUri" /></td>
    <td><code>string</code></td>
    <td>Required. The full HTTPS URI where update notifications will be sent. The URI must be a valid URL and use HTTPS as the scheme. This endpoint will be verified during CreateSubscriber and UpdateSubscriber calls. See RPC documentation for verification details.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the subscriber. (STATE_UNSPECIFIED, UNVERIFIED, ACTIVE, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="subscriberConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Configuration for the subscriber.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the subscriber was last updated.</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all subscribers registered within the owned Google Cloud Project.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-subscriberId"><code>subscriberId</code></a></td>
    <td>Registers a new subscriber endpoint to receive notifications. A subscriber represents an application or service that wishes to receive data change notifications for users who have granted consent. **Endpoint Verification:** For a subscriber to be successfully created, the provided `endpoint_uri` must be a valid HTTPS endpoint and must pass an automated verification check. The backend will send two HTTP POST requests to the `endpoint_uri`: 1. **Verification with Authorization:** * **Headers:** Includes `Content-Type: application/json` and `Authorization` (with the exact value from `CreateSubscriberPayload.endpoint_authorization.secret`). * **Body:** `&#123;"type": "verification"&#125;` * **Expected Response:** HTTP `201 Created`. 2. **Verification without Authorization:** * **Headers:** Includes `Content-Type: application/json`. The `Authorization` header is OMITTED. * **Body:** `&#123;"type": "verification"&#125;` * **Expected Response:** HTTP `401 Unauthorized` or `403 Forbidden`. Both tests must pass for the subscriber creation to succeed. If verification fails, the operation will not be completed and an error will be returned. This process ensures the endpoint is reachable and correctly validates the `Authorization` header.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-subscribersId"><code>subscribersId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the configuration of an existing subscriber, such as the endpoint URI or the data types it's interested in. **Endpoint Verification:** If the `endpoint_uri` or `endpoint_authorization` field is included in the `update_mask`, the backend will re-verify the endpoint. The verification process is the same as described in `CreateSubscriber`: 1. **Verification with Authorization:** POST to the new or existing `endpoint_uri` with the new or existing `Authorization` secret. Expects HTTP `201 Created`. 2. **Verification without Authorization:** POST to the `endpoint_uri` without the `Authorization` header. Expects HTTP `401 Unauthorized` or `403 Forbidden`. Both tests must pass using the potentially updated values for the subscriber update to succeed. If verification fails, the update will not be applied, and an error will be returned.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-subscribersId"><code>subscribersId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a subscriber registration. This will stop all notifications to the subscriber's endpoint.</td>
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
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-subscribersId">
    <td><CopyableCode code="subscribersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-subscriberId">
    <td><CopyableCode code="subscriberId" /></td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Lists all subscribers registered within the owned Google Cloud Project.

```sql
SELECT
name,
createTime,
endpointAuthorization,
endpointUri,
state,
subscriberConfigs,
updateTime
FROM google.health.subscribers
WHERE projectsId = '{{ projectsId }}' -- required
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

Registers a new subscriber endpoint to receive notifications. A subscriber represents an application or service that wishes to receive data change notifications for users who have granted consent. **Endpoint Verification:** For a subscriber to be successfully created, the provided `endpoint_uri` must be a valid HTTPS endpoint and must pass an automated verification check. The backend will send two HTTP POST requests to the `endpoint_uri`: 1. **Verification with Authorization:** * **Headers:** Includes `Content-Type: application/json` and `Authorization` (with the exact value from `CreateSubscriberPayload.endpoint_authorization.secret`). * **Body:** `&#123;"type": "verification"&#125;` * **Expected Response:** HTTP `201 Created`. 2. **Verification without Authorization:** * **Headers:** Includes `Content-Type: application/json`. The `Authorization` header is OMITTED. * **Body:** `&#123;"type": "verification"&#125;` * **Expected Response:** HTTP `401 Unauthorized` or `403 Forbidden`. Both tests must pass for the subscriber creation to succeed. If verification fails, the operation will not be completed and an error will be returned. This process ensures the endpoint is reachable and correctly validates the `Authorization` header.

```sql
INSERT INTO google.health.subscribers (
data__endpointAuthorization,
data__endpointUri,
data__subscriberConfigs,
projectsId,
subscriberId
)
SELECT 
'{{ endpointAuthorization }}',
'{{ endpointUri }}',
'{{ subscriberConfigs }}',
'{{ projectsId }}',
'{{ subscriberId }}'
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
- name: subscribers
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the subscribers resource.
    - name: endpointAuthorization
      description: |
        Required. Authorization mechanism for the subscriber endpoint. The \`secret\` within this message is crucial for endpoint verification and for securing webhook notifications.
      value:
        secret: "{{ secret }}"
        secretSet: {{ secretSet }}
    - name: endpointUri
      value: "{{ endpointUri }}"
      description: |
        Required. The full HTTPS URI where update notifications will be sent. The URI must be a valid URL and use HTTPS as the scheme. This endpoint will be verified during the \`CreateSubscriber\` call. See CreateSubscriber RPC documentation for verification details.
    - name: subscriberConfigs
      description: |
        Optional. Configuration for the subscriber.
      value:
        - dataTypes: "{{ dataTypes }}"
          subscriptionCreatePolicy: "{{ subscriptionCreatePolicy }}"
    - name: subscriberId
      value: "{{ subscriberId }}"
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

Updates the configuration of an existing subscriber, such as the endpoint URI or the data types it's interested in. **Endpoint Verification:** If the `endpoint_uri` or `endpoint_authorization` field is included in the `update_mask`, the backend will re-verify the endpoint. The verification process is the same as described in `CreateSubscriber`: 1. **Verification with Authorization:** POST to the new or existing `endpoint_uri` with the new or existing `Authorization` secret. Expects HTTP `201 Created`. 2. **Verification without Authorization:** POST to the `endpoint_uri` without the `Authorization` header. Expects HTTP `401 Unauthorized` or `403 Forbidden`. Both tests must pass using the potentially updated values for the subscriber update to succeed. If verification fails, the update will not be applied, and an error will be returned.

```sql
UPDATE google.health.subscribers
SET 
data__endpointAuthorization = '{{ endpointAuthorization }}',
data__name = '{{ name }}',
data__endpointUri = '{{ endpointUri }}',
data__subscriberConfigs = '{{ subscriberConfigs }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND subscribersId = '{{ subscribersId }}' --required
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

Deletes a subscriber registration. This will stop all notifications to the subscriber's endpoint.

```sql
DELETE FROM google.health.subscribers
WHERE projectsId = '{{ projectsId }}' --required
AND subscribersId = '{{ subscribersId }}' --required
AND force = '{{ force }}'
;
```
</TabItem>
</Tabs>
